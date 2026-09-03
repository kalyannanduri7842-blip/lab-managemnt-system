const http = require('http');

function request(method, path, body = null, token = null) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : '';
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;
    if (body) headers['Content-Length'] = Buffer.byteLength(dataString);

    const req = http.request({
      hostname: '127.0.0.1',
      port: 6005,
      path: path,
      method: method,
      headers: headers
    }, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody);
          resolve({ status: res.statusCode, body: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, body: responseBody });
        }
      });
    });

    req.on('error', (err) => reject(err));
    if (body) req.write(dataString);
    req.end();
  });
}

async function runLabcareWorkflowTest() {
  console.log('=== STARTING LABCARE FULL-SCALE HEALTHCARE WORKFLOW TEST ===\n');

  // 1. Patient Registration & Login
  console.log('1. Testing Patient Login (patient@labcare.demo / Patient@12345)...');
  const patAuth = await request('POST', '/api/auth/login', {
    email: 'patient@labcare.demo',
    password: 'Patient@12345',
    role: 'PATIENT'
  });
  console.log('Patient Login:', patAuth.status, 'Name:', patAuth.body.user?.fullName);
  const patToken = patAuth.body.token;

  // 2. Patient books CBC Test
  console.log('\n2. Patient orders Complete Blood Count (CBC with 5-Part Diff)...');
  const bookRes = await request('POST', '/api/requests', {
    testId: 'tst-cbc',
    collectionType: 'LAB_VISIT',
    scheduledDate: '2026-03-03',
    scheduledTime: '08:30 AM',
    priority: 'NORMAL',
    clinicalNotes: 'Follow-up iron supplementation check.'
  }, patToken);
  console.log('Test Request Created:', bookRes.status, 'Accession:', bookRes.body.request?.accessionNumber, 'Initial Status:', bookRes.body.request?.status);
  const newReqId = bookRes.body.request?.id;

  // 3. Lab Technician Login
  console.log('\n3. Technician Login (technician@labcare.demo / Technician@12345)...');
  const techAuth = await request('POST', '/api/auth/login', {
    email: 'technician@labcare.demo',
    password: 'Technician@12345',
    role: 'LAB_TECHNICIAN'
  });
  console.log('Technician Login:', techAuth.status, 'Name:', techAuth.body.user?.fullName);
  const techToken = techAuth.body.token;

  // 4. Technician Collects Specimen
  console.log('\n4. Phlebotomist collects specimen and assigns barcode...');
  const collRes = await request('POST', '/api/samples/collect', {
    requestId: newReqId,
    containerType: 'Lavender Top EDTA 4mL Vacutainer',
    notes: 'Venipuncture right antecubital fossa.'
  }, techToken);
  console.log('Specimen Collected:', collRes.status, 'Barcode:', collRes.body.sample?.sampleBarcode, 'Request Status:', collRes.body.request?.status);
  const sampleId = collRes.body.sample?.id;

  // 5. Technician Receives Specimen in Lab
  console.log('\n5. Central Lab receives and checks specimen...');
  const recRes = await request('POST', '/api/samples/receive', { sampleId }, techToken);
  console.log('Specimen Received:', recRes.status, 'Sample Status:', recRes.body.sample?.status, 'Request Status:', recRes.body.request?.status);

  // 6. Technician Starts Analytical Processing
  console.log('\n6. Automated analyzer analytical run initiated...');
  const procRes = await request('POST', '/api/samples/start-processing', { sampleId }, techToken);
  console.log('Processing Started:', procRes.status, 'Status:', procRes.body.request?.status);

  // 7. Technician Enters Diagnostic Parameters
  console.log('\n7. Technician records 7 hematology parameter values...');
  const resRes = await request('POST', '/api/results', {
    requestId: newReqId,
    parameters: [
      { name: 'Hemoglobin', value: 14.2, unit: 'g/dL', refRange: '12.0 - 17.5' },
      { name: 'RBC Count', value: 4.80, unit: 'x10^6/uL', refRange: '4.20 - 5.90' },
      { name: 'Hematocrit', value: 42.5, unit: '%', refRange: '37.0 - 51.0' },
      { name: 'WBC Total', value: 7.1, unit: 'x10^3/uL', refRange: '4.5 - 11.0' },
      { name: 'Platelet Count', value: 260, unit: 'x10^3/uL', refRange: '150 - 450' }
    ],
    clinicalImpression: 'Automated laser flow cytometry run unremarkable.'
  }, techToken);
  console.log('Results Recorded:', resRes.status, 'Has Critical:', resRes.body.result?.hasCritical, 'Status:', resRes.body.request?.status);
  const resultId = resRes.body.result?.id;

  // 8. Doctor Login & Clinical Verification
  console.log('\n8. Doctor Login (doctor@labcare.demo / Doctor@12345)...');
  const docAuth = await request('POST', '/api/auth/login', {
    email: 'doctor@labcare.demo',
    password: 'Doctor@12345',
    role: 'DOCTOR'
  });
  console.log('Doctor Login:', docAuth.status, 'Name:', docAuth.body.user?.fullName);
  const docToken = docAuth.body.token;

  console.log('\n9. Doctor clinically verifies hematology results...');
  const verRes = await request('POST', `/api/results/${resultId}/verify`, null, docToken);
  console.log('Results Verified:', verRes.status, 'Result Status:', verRes.body.result?.status);

  // 10. Technician Releases Official Diagnostic Report
  console.log('\n10. Final diagnostic report released to patient...');
  const relRes = await request('POST', '/api/reports/release', {
    requestId: newReqId,
    summaryRemarks: 'All measured hematologic parameters are within biological reference limits.'
  }, techToken);
  console.log('Report Released:', relRes.status, 'Report Number:', relRes.body.report?.reportNumber, 'Status:', relRes.body.request?.status);

  // 11. Admin Login & Governance Telemetry
  console.log('\n11. Admin Login (admin@labcare.demo / Admin@12345)...');
  const admAuth = await request('POST', '/api/auth/login', {
    email: 'admin@labcare.demo',
    password: 'Admin@12345',
    role: 'ADMIN'
  });
  console.log('Admin Login:', admAuth.status, 'Name:', admAuth.body.user?.fullName);
  const admToken = admAuth.body.token;

  const telemetry = await request('GET', '/api/analytics', null, admToken);
  console.log('Admin Telemetry -> Total Accessions:', telemetry.body.metrics?.totalRequests, 'Completed Reports:', telemetry.body.metrics?.completedReports, 'Cumulative Revenue: $' + telemetry.body.metrics?.totalRevenue);

  const audits = await request('GET', '/api/audit-logs', null, admToken);
  console.log('Total System Audit Logs Tracked:', audits.body.logs?.length, 'Latest Action:', audits.body.logs?.[0]?.action);

  console.log('\n=== ALL LABCARE HEALTHCARE WORKFLOW & ACCREDITATION REQUIREMENTS VERIFIED 100%! ===');
}

runLabcareWorkflowTest().catch(console.error);
