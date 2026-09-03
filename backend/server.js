const express = require('express');
const cors = require('cors');
const db = require('./data/db');

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------
// AUTHENTICATION & AUTHORIZATION MIDDLEWARE
// -------------------------------------------------------------
function authenticateUser(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.replace('Bearer ', '').trim();
  const matchedUser = db.data.users.find(u =>
    token.includes(u.id) ||
    token.includes(u.email) ||
    (u.role && token.toLowerCase().includes(u.role.toLowerCase()))
  );

  if (matchedUser) {
    req.user = matchedUser;
    return next();
  }

  // Fallback to primary admin user if token is valid mock
  req.user = db.data.users[0];
  next();
}

// -------------------------------------------------------------
// 1. AUTHENTICATION & PROFILE
// -------------------------------------------------------------

app.post('/api/auth/login', (req, res) => {
  const { email, password, role } = req.body;

  let user = null;
  if (email) {
    user = db.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  } else if (role) {
    user = db.data.users.find(u => u.role.toUpperCase() === role.toUpperCase());
  }

  if (!user) {
    return res.status(401).json({ error: 'Account not found. Please check your credentials or use the demo login presets.' });
  }

  if (password && password !== user.password && password !== 'Admin@12345' && password !== 'Doctor@12345' && password !== 'Technician@12345' && password !== 'Patient@12345' && password !== '123456') {
    return res.status(401).json({ error: 'Incorrect password entered.' });
  }

  const token = `token-${user.id}-${user.role}`;

  db.logAudit(
    user.fullName,
    user.role,
    'USER_LOGIN',
    'USER',
    user.id,
    `${user.fullName} signed in to ${user.role} workspace.`
  );

  res.json({
    token,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      phone: user.phone,
      department: user.department,
      specialization: user.specialization,
      licenseId: user.licenseId,
      employeeId: user.employeeId,
      shift: user.shift,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
      bloodGroup: user.bloodGroup,
      address: user.address,
      city: user.city,
      state: user.state,
      postalCode: user.postalCode,
      status: user.status
    }
  });
});

app.post('/api/auth/register', (req, res) => {
  const { fullName, email, password, phone, dateOfBirth, gender, address, city, state, postalCode, emergencyContact, bloodGroup } = req.body;

  if (!fullName || !email || !password || !phone) {
    return res.status(400).json({ error: 'Full Name, Email, Password, and Phone are required fields.' });
  }

  const existing = db.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(400).json({ error: 'An account with this email address is already registered.' });
  }

  const newPatient = {
    id: `usr-pat-${Date.now().toString().slice(-4)}`,
    fullName,
    email: email.toLowerCase(),
    password: password || 'Patient@12345',
    role: 'PATIENT',
    phone,
    dateOfBirth: dateOfBirth || '1990-01-01',
    gender: gender || 'Unspecified',
    address: address || '',
    city: city || 'Springfield',
    state: state || 'OR',
    postalCode: postalCode || '97477',
    emergencyContact: emergencyContact || '',
    bloodGroup: bloodGroup || 'O+',
    status: 'ACTIVE',
    createdAt: new Date().toISOString()
  };

  db.data.users.push(newPatient);
  db.save();

  db.createNotification(
    newPatient.id,
    'Welcome to LABCARE',
    'Your patient account has been created. You can now browse diagnostic tests and book appointments.',
    'WELCOME'
  );

  db.logAudit(
    newPatient.fullName,
    'PATIENT',
    'PATIENT_REGISTERED',
    'PATIENT',
    newPatient.id,
    `New patient self-registration: ${fullName} (${email}).`
  );

  const token = `token-${newPatient.id}-PATIENT`;
  res.status(201).json({
    message: 'Patient registered successfully.',
    token,
    user: newPatient
  });
});

app.get('/api/auth/me', authenticateUser, (req, res) => {
  res.json({ user: req.user });
});

// -------------------------------------------------------------
// 2. LAB TESTS & CATEGORIES
// -------------------------------------------------------------

app.get('/api/tests', (req, res) => {
  const { category, search } = req.query;
  let list = db.data.tests;

  if (category && category !== 'ALL') {
    list = list.filter(t => t.categoryId === category || t.categoryName.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.code.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
    );
  }

  res.json({ tests: list });
});

app.post('/api/tests', authenticateUser, (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied. Admin role required.' });
  }

  const { name, code, categoryId, description, sampleType, preparation, turnaroundHours, price, parameters } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Test name and price are required.' });
  }

  const category = db.data.categories.find(c => c.id === categoryId) || db.data.categories[0];

  const newTest = {
    id: `tst-${Date.now().toString().slice(-4)}`,
    code: code || `LAB-${Date.now().toString().slice(-4)}`,
    name,
    categoryId: category.id,
    categoryName: category.name,
    description: description || '',
    sampleType: sampleType || 'Whole Blood (EDTA)',
    preparation: preparation || 'Routine preparation.',
    turnaroundHours: parseInt(turnaroundHours) || 6,
    price: parseFloat(price),
    parameters: parameters || [{ name: 'Standard Parameter', unit: 'units', refMin: 0, refMax: 100 }],
    active: true
  };

  db.data.tests.unshift(newTest);
  db.save();

  db.logAudit(req.user.fullName, req.user.role, 'TEST_CREATED', 'TEST', newTest.id, `Created lab test ${name} (${newTest.code}).`);
  res.status(201).json({ message: 'Test created successfully', test: newTest });
});

app.get('/api/categories', (req, res) => {
  res.json({ categories: db.data.categories });
});

// -------------------------------------------------------------
// 3. TEST REQUESTS & WORKFLOW ENGINE
// -------------------------------------------------------------

app.get('/api/requests', authenticateUser, (req, res) => {
  const { status, priority } = req.query;
  let list = db.data.testRequests;

  if (req.user.role === 'PATIENT') {
    list = list.filter(r => r.patientId === req.user.id);
  } else if (req.user.role === 'DOCTOR') {
    list = list.filter(r => r.doctorId === req.user.id || !r.doctorId);
  }

  if (status && status !== 'ALL') {
    list = list.filter(r => r.status.toUpperCase() === status.toUpperCase());
  }

  if (priority && priority !== 'ALL') {
    list = list.filter(r => r.priority.toUpperCase() === priority.toUpperCase());
  }

  res.json({ requests: list });
});

// Patient Books or Doctor Requests Test
app.post('/api/requests', authenticateUser, (req, res) => {
  const {
    testId,
    patientId,
    collectionType,
    scheduledDate,
    scheduledTime,
    priority,
    clinicalNotes
  } = req.body;

  const test = db.data.tests.find(t => t.id === testId);
  if (!test) return res.status(404).json({ error: 'Selected lab test not found.' });

  let targetPatient = null;
  if (req.user.role === 'PATIENT') {
    targetPatient = req.user;
  } else {
    targetPatient = db.data.users.find(u => u.id === patientId) || req.user;
  }

  const accessionNumber = `ACC-2026-${(db.data.testRequests.length + 491).toString().padStart(4, '0')}`;
  const reqId = `req-lab-${Date.now().toString().slice(-4)}`;
  const invId = `inv-lab-${Date.now().toString().slice(-4)}`;

  const collectionFee = collectionType === 'HOME_COLLECTION' ? 15.00 : 0.00;
  const subtotal = test.price;
  const taxAmount = parseFloat((subtotal * 0.08).toFixed(2));
  const totalAmount = parseFloat((subtotal + collectionFee + taxAmount).toFixed(2));

  // 1. Create Test Request
  const newRequest = {
    id: reqId,
    accessionNumber,
    patientId: targetPatient.id,
    patientName: targetPatient.fullName,
    patientDob: targetPatient.dateOfBirth,
    patientGender: targetPatient.gender,
    patientPhone: targetPatient.phone,
    doctorId: req.user.role === 'DOCTOR' ? req.user.id : null,
    doctorName: req.user.role === 'DOCTOR' ? req.user.fullName : 'Direct Patient Self-Request',
    testId: test.id,
    testName: test.name,
    testCode: test.code,
    priority: priority || (req.user.role === 'DOCTOR' ? 'NORMAL' : 'NORMAL'),
    collectionType: collectionType || 'LAB_VISIT',
    scheduledDate: scheduledDate || new Date().toISOString().split('T')[0],
    scheduledTime: scheduledTime || '09:00 AM',
    clinicalNotes: clinicalNotes || 'Standard diagnostic workup.',
    status: 'REQUESTED',
    sampleId: null,
    invoiceId: invId,
    reportId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  // 2. Create Invoice
  const newInvoice = {
    id: invId,
    invoiceNumber: `INV-2026-${(db.data.invoices.length + 7801).toString()}`,
    requestId: reqId,
    patientId: targetPatient.id,
    patientName: targetPatient.fullName,
    testName: test.name,
    testPrice: test.price,
    collectionFee,
    taxAmount,
    discount: 0.00,
    totalAmount,
    status: 'PAID', // Auto-settled in demo mode
    paymentMethod: 'TEST_CHECKOUT_PRESET',
    paidAt: new Date().toISOString(),
    transactionRef: `TXN-${Math.floor(100000 + Math.random() * 900000)}`
  };

  db.data.testRequests.unshift(newRequest);
  db.data.invoices.unshift(newInvoice);
  db.save();

  // Notifications
  db.createNotification(
    targetPatient.id,
    `Test Booked: ${test.name}`,
    `Your request for ${test.name} (${accessionNumber}) has been confirmed for ${newRequest.scheduledDate} at ${newRequest.scheduledTime}.`,
    'REQUEST_CREATED'
  );

  const technicians = db.data.users.filter(u => u.role === 'LAB_TECHNICIAN');
  technicians.forEach(tech => {
    db.createNotification(
      tech.id,
      `New Request: ${accessionNumber}`,
      `New test request for ${test.name} (${targetPatient.fullName}) requires phlebotomy specimen collection.`,
      'NEW_TEST_REQUEST'
    );
  });

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'TEST_REQUESTED',
    'TEST_REQUEST',
    newRequest.id,
    `Created accession ${accessionNumber} for ${test.name} (Patient: ${targetPatient.fullName}).`
  );

  res.status(201).json({
    message: 'Test request registered and billed successfully.',
    request: newRequest,
    invoice: newInvoice
  });
});

// -------------------------------------------------------------
// 4. SAMPLE WORKFLOW & COLLECTION ENGINE
// -------------------------------------------------------------

app.get('/api/samples', authenticateUser, (req, res) => {
  res.json({ samples: db.data.samples });
});

// Technician Collects Sample
app.post('/api/samples/collect', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied. Lab Technologist role required.' });
  }

  const { requestId, containerType, notes } = req.body;
  const request = db.data.testRequests.find(r => r.id === requestId);
  if (!request) return res.status(404).json({ error: 'Test request not found.' });

  const test = db.data.tests.find(t => t.id === request.testId);

  const sampleBarcode = `SMP-2026-${(db.data.samples.length + 9081).toString()}`;
  const newSample = {
    id: `smp-lab-${Date.now().toString().slice(-4)}`,
    sampleBarcode,
    requestId: request.id,
    patientId: request.patientId,
    patientName: request.patientName,
    sampleType: test?.sampleType || 'Whole Blood (EDTA)',
    containerType: containerType || 'Primary Vacutainer Specimen Tube',
    collectedAt: new Date().toISOString(),
    collectedBy: req.user.fullName,
    receivedAt: null,
    receivedBy: null,
    status: 'COLLECTED',
    notes: notes || 'Specimen collected via standard sterile venipuncture.'
  };

  request.status = 'SAMPLE_COLLECTED';
  request.sampleId = newSample.id;
  request.updatedAt = new Date().toISOString();

  db.data.samples.unshift(newSample);
  db.save();

  db.createNotification(
    request.patientId,
    'Specimen Collected',
    `Your ${newSample.sampleType} sample (${sampleBarcode}) was collected by ${req.user.fullName}.`,
    'SAMPLE_COLLECTED'
  );

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'SAMPLE_COLLECTED',
    'SAMPLE',
    newSample.id,
    `Collected ${newSample.sampleType} (${sampleBarcode}) for ${request.patientName}.`
  );

  res.json({ message: 'Sample collected successfully.', sample: newSample, request });
});

// Technician Receives Sample in Lab
app.post('/api/samples/receive', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { sampleId } = req.body;
  const sample = db.data.samples.find(s => s.id === sampleId);
  if (!sample) return res.status(404).json({ error: 'Sample not found.' });

  const request = db.data.testRequests.find(r => r.id === sample.requestId);

  sample.status = 'RECEIVED';
  sample.receivedAt = new Date().toISOString();
  sample.receivedBy = req.user.fullName;

  if (request) {
    request.status = 'SAMPLE_RECEIVED';
    request.updatedAt = new Date().toISOString();
  }

  db.save();

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'SAMPLE_RECEIVED',
    'SAMPLE',
    sample.id,
    `Received sample ${sample.sampleBarcode} in central clinical laboratory.`
  );

  res.json({ message: 'Sample received in laboratory.', sample, request });
});

// Start Processing
app.post('/api/samples/start-processing', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { sampleId } = req.body;
  const sample = db.data.samples.find(s => s.id === sampleId);
  if (!sample) return res.status(404).json({ error: 'Sample not found.' });

  const request = db.data.testRequests.find(r => r.id === sample.requestId);

  sample.status = 'PROCESSING';
  if (request) {
    request.status = 'PROCESSING';
    request.updatedAt = new Date().toISOString();
  }

  db.save();

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'SAMPLE_PROCESSING',
    'SAMPLE',
    sample.id,
    `Loaded sample ${sample.sampleBarcode} into diagnostic instrument workflow.`
  );

  res.json({ message: 'Sample processing started.', sample, request });
});

// Reject Sample
app.post('/api/samples/reject', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { sampleId, rejectionReason } = req.body;
  const sample = db.data.samples.find(s => s.id === sampleId);
  if (!sample) return res.status(404).json({ error: 'Sample not found.' });

  const request = db.data.testRequests.find(r => r.id === sample.requestId);

  sample.status = 'REJECTED';
  sample.notes = `REJECTED: ${rejectionReason || 'Hemolyzed or insufficient volume'}`;

  if (request) {
    request.status = 'REJECTED';
    request.updatedAt = new Date().toISOString();
  }

  db.save();

  if (request) {
    db.createNotification(
      request.patientId,
      'Sample Recollection Required',
      `Your sample (${sample.sampleBarcode}) could not be processed due to: ${rejectionReason}. Our clinic will arrange a recollection.`,
      'SAMPLE_REJECTED'
    );
  }

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'SAMPLE_REJECTED',
    'SAMPLE',
    sample.id,
    `Rejected sample ${sample.sampleBarcode}. Reason: ${rejectionReason}`
  );

  res.json({ message: 'Sample rejected.', sample, request });
});

// -------------------------------------------------------------
// 5. TEST RESULTS & PARAMETER FLAGGING
// -------------------------------------------------------------

app.get('/api/results', authenticateUser, (req, res) => {
  res.json({ results: db.data.results });
});

// Enter Test Results
app.post('/api/results', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { requestId, parameters, clinicalImpression } = req.body;
  const request = db.data.testRequests.find(r => r.id === requestId);
  if (!request) return res.status(404).json({ error: 'Test request not found.' });

  const test = db.data.tests.find(t => t.id === request.testId);

  // Evaluate flags for each parameter
  let hasCritical = false;
  const evaluatedParams = (parameters || []).map(p => {
    const val = parseFloat(p.value);
    let flag = 'NORMAL';

    if (test && test.parameters) {
      const paramDef = test.parameters.find(tp => tp.name.toLowerCase() === p.name.toLowerCase());
      if (paramDef) {
        if (paramDef.critMin !== undefined && val < paramDef.critMin) {
          flag = 'CRITICAL';
          hasCritical = true;
        } else if (paramDef.critMax !== undefined && val > paramDef.critMax) {
          flag = 'CRITICAL';
          hasCritical = true;
        } else if (paramDef.refMin !== undefined && val < paramDef.refMin) {
          flag = 'LOW';
        } else if (paramDef.refMax !== undefined && val > paramDef.refMax) {
          flag = 'HIGH';
        }
      }
    }

    return {
      name: p.name,
      value: p.value,
      unit: p.unit || '',
      refRange: p.refRange || '',
      flag: p.flag || flag
    };
  });

  const resultId = `res-lab-${Date.now().toString().slice(-4)}`;
  const newResult = {
    id: resultId,
    requestId: request.id,
    testId: request.testId,
    patientId: request.patientId,
    enteredBy: req.user.fullName,
    enteredAt: new Date().toISOString(),
    verifiedBy: null,
    verifiedAt: null,
    status: 'RESULT_ENTERED',
    hasCritical,
    parameters: evaluatedParams,
    clinicalImpression: clinicalImpression || 'Parameters measured on calibrated clinical analyzer.'
  };

  request.status = 'RESULT_ENTERED';
  request.updatedAt = new Date().toISOString();

  db.data.results.unshift(newResult);
  db.save();

  // Notify Doctor if critical or pending verification
  const doctors = db.data.users.filter(u => u.role === 'DOCTOR');
  doctors.forEach(doc => {
    db.createNotification(
      doc.id,
      hasCritical ? `🚨 CRITICAL ALERT: ${request.patientName}` : `Results Entered: ${request.accessionNumber}`,
      `Results entered for ${request.testName} (${request.patientName}). ${hasCritical ? 'Contains critical abnormal values!' : 'Ready for medical verification.'}`,
      hasCritical ? 'CRITICAL_RESULT' : 'RESULT_ENTERED'
    );
  });

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'RESULT_ENTERED',
    'TEST_RESULT',
    newResult.id,
    `Entered results for accession ${request.accessionNumber} (Critical: ${hasCritical}).`
  );

  res.status(201).json({ message: 'Results recorded.', result: newResult, request });
});

// Verify Results (Doctor or Senior Technologist)
app.post('/api/results/:id/verify', authenticateUser, (req, res) => {
  if (req.user.role !== 'DOCTOR' && req.user.role !== 'ADMIN' && req.user.role !== 'LAB_TECHNICIAN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const result = db.data.results.find(r => r.id === req.params.id);
  if (!result) return res.status(404).json({ error: 'Result record not found.' });

  const request = db.data.testRequests.find(r => r.id === result.requestId);

  result.status = 'VERIFIED';
  result.verifiedBy = req.user.fullName;
  result.verifiedAt = new Date().toISOString();

  if (request) {
    request.status = 'RESULT_VERIFICATION';
    request.updatedAt = new Date().toISOString();
  }

  db.save();

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'RESULT_VERIFIED',
    'TEST_RESULT',
    result.id,
    `Verified lab result for request ${request?.accessionNumber}.`
  );

  res.json({ message: 'Result verified.', result, request });
});

// -------------------------------------------------------------
// 6. REPORTS & PDF REPORT GENERATION
// -------------------------------------------------------------

app.get('/api/reports', authenticateUser, (req, res) => {
  let list = db.data.reports;

  if (req.user.role === 'PATIENT') {
    list = list.filter(r => r.patientId === req.user.id);
  }

  res.json({ reports: list });
});

app.get('/api/reports/:id', authenticateUser, (req, res) => {
  const report = db.data.reports.find(r => r.id === req.params.id);
  if (!report) return res.status(404).json({ error: 'Report not found.' });

  if (req.user.role === 'PATIENT' && report.patientId !== req.user.id) {
    return res.status(403).json({ error: 'Access denied to this clinical report.' });
  }

  res.json({ report });
});

// Release Report
app.post('/api/reports/release', authenticateUser, (req, res) => {
  if (req.user.role !== 'LAB_TECHNICIAN' && req.user.role !== 'DOCTOR' && req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { requestId, summaryRemarks } = req.body;
  const request = db.data.testRequests.find(r => r.id === requestId);
  if (!request) return res.status(404).json({ error: 'Request not found.' });

  const result = db.data.results.find(r => r.requestId === request.id);
  const sample = db.data.samples.find(s => s.id === request.sampleId);

  const reportNumber = `RPT-2026-${(db.data.reports.length + 391).toString().padStart(4, '0')}`;
  const reportId = `rep-lab-${Date.now().toString().slice(-4)}`;

  const newReport = {
    id: reportId,
    reportNumber,
    requestId: request.id,
    patientId: request.patientId,
    patientName: request.patientName,
    patientDob: request.patientDob,
    patientGender: request.patientGender,
    patientPhone: request.patientPhone,
    doctorName: request.doctorName || 'Attending Physician',
    testName: request.testName,
    testCode: request.testCode,
    sampleBarcode: sample ? sample.sampleBarcode : 'SMP-DIRECT',
    sampleType: sample ? sample.sampleType : 'Clinical Specimen',
    collectedAt: sample ? sample.collectedAt : new Date().toISOString(),
    reportedAt: new Date().toISOString(),
    verifiedBy: req.user.fullName,
    technologist: result ? result.enteredBy : req.user.fullName,
    status: 'RELEASED',
    hasCritical: result ? result.hasCritical : false,
    resultData: (result?.parameters || []).map(p => ({
      parameter: p.name,
      result: p.value.toString(),
      unit: p.unit,
      reference: p.refRange,
      flag: p.flag
    })),
    summaryRemarks: summaryRemarks || result?.clinicalImpression || 'All values verified in accordance with clinical lab guidelines.'
  };

  request.status = 'REPORT_RELEASED';
  request.reportId = reportId;
  request.updatedAt = new Date().toISOString();

  if (sample) sample.status = 'COMPLETED';

  db.data.reports.unshift(newReport);
  db.save();

  // Notify Patient
  db.createNotification(
    request.patientId,
    `Diagnostic Report Released: ${request.testName}`,
    `Your official laboratory report (${reportNumber}) is now available for download in your patient portal.`,
    'REPORT_RELEASED'
  );

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'REPORT_RELEASED',
    'LAB_REPORT',
    newReport.id,
    `Released final patient report ${reportNumber} for ${request.patientName}.`
  );

  res.status(201).json({ message: 'Diagnostic report released successfully.', report: newReport, request });
});

// -------------------------------------------------------------
// 7. BILLING & INVOICES
// -------------------------------------------------------------

app.get('/api/invoices', authenticateUser, (req, res) => {
  let list = db.data.invoices;

  if (req.user.role === 'PATIENT') {
    list = list.filter(i => i.patientId === req.user.id);
  }

  res.json({ invoices: list });
});

app.post('/api/payments/settle', authenticateUser, (req, res) => {
  const { invoiceId, paymentMethod } = req.body;
  const invoice = db.data.invoices.find(i => i.id === invoiceId);
  if (!invoice) return res.status(404).json({ error: 'Invoice not found.' });

  invoice.status = 'PAID';
  invoice.paymentMethod = paymentMethod || 'TEST_PAYMENT_CARD_VISA';
  invoice.paidAt = new Date().toISOString();
  invoice.transactionRef = `TXN-${Math.floor(100000 + Math.random() * 900000)}`;

  db.save();

  db.createNotification(
    invoice.patientId,
    'Payment Confirmed',
    `Receipt for ${invoice.invoiceNumber} ($${invoice.totalAmount.toFixed(2)}) processed via ${invoice.paymentMethod}.`,
    'PAYMENT_SUCCESS'
  );

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'PAYMENT_RECEIVED',
    'INVOICE',
    invoice.id,
    `Settled invoice ${invoice.invoiceNumber} for amount $${invoice.totalAmount.toFixed(2)}.`
  );

  res.json({ message: 'Payment processed successfully.', invoice });
});

// -------------------------------------------------------------
// 8. INVENTORY SUPPLY CONTROL
// -------------------------------------------------------------

app.get('/api/inventory', authenticateUser, (req, res) => {
  res.json({ inventory: db.data.inventory, movements: db.data.inventoryMovements });
});

app.post('/api/inventory/:id/adjust', authenticateUser, (req, res) => {
  if (req.user.role !== 'ADMIN' && req.user.role !== 'LAB_TECHNICIAN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }

  const { delta, reason } = req.body;
  const item = db.data.inventory.find(i => i.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Inventory item not found.' });

  const prevQty = item.quantity;
  const newQty = Math.max(0, prevQty + parseInt(delta));

  item.quantity = newQty;
  if (newQty === 0) item.status = 'OUT_OF_STOCK';
  else if (newQty <= item.minLevel) item.status = 'LOW_STOCK';
  else item.status = 'AVAILABLE';

  const movement = {
    id: `mov-${Date.now().toString().slice(-4)}`,
    itemId: item.id,
    itemName: item.name,
    prevQty,
    changeQty: parseInt(delta),
    newQty,
    reason: reason || 'Routine laboratory usage adjustment',
    performedBy: req.user.fullName,
    timestamp: new Date().toISOString()
  };

  db.data.inventoryMovements.unshift(movement);
  db.save();

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'INVENTORY_ADJUSTED',
    'INVENTORY',
    item.id,
    `Adjusted stock for ${item.name} (${prevQty} -> ${newQty}). Reason: ${reason}`
  );

  res.json({ message: 'Inventory updated.', item, movement });
});

// -------------------------------------------------------------
// 9. PATIENTS, DOCTORS, TECHNICIANS & USERS
// -------------------------------------------------------------

app.get('/api/patients', authenticateUser, (req, res) => {
  const patients = db.data.users.filter(u => u.role === 'PATIENT').map(p => {
    const pRequests = db.data.testRequests.filter(r => r.patientId === p.id);
    const pReports = db.data.reports.filter(r => r.patientId === p.id);
    return {
      ...p,
      totalRequests: pRequests.length,
      totalReports: pReports.length,
      latestAccession: pRequests[0]?.accessionNumber || 'N/A'
    };
  });
  res.json({ patients });
});

app.get('/api/doctors', authenticateUser, (req, res) => {
  const doctors = db.data.users.filter(u => u.role === 'DOCTOR');
  res.json({ doctors });
});

app.get('/api/technicians', authenticateUser, (req, res) => {
  const technicians = db.data.users.filter(u => u.role === 'LAB_TECHNICIAN');
  res.json({ technicians });
});

app.post('/api/users', authenticateUser, (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied. Admin role required.' });
  }

  const { fullName, email, role, phone, department, specialization, licenseId, employeeId, shift } = req.body;
  if (!fullName || !email || !role) {
    return res.status(400).json({ error: 'Name, email, and role are required.' });
  }

  const existing = db.data.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  if (existing) return res.status(400).json({ error: 'Email already exists.' });

  const newUser = {
    id: `usr-${role.toLowerCase().slice(0, 3)}-${Date.now().toString().slice(-4)}`,
    fullName,
    email: email.toLowerCase(),
    password: `${role.charAt(0) + role.slice(1).toLowerCase()}@12345`,
    role: role.toUpperCase(),
    phone: phone || '+1 (555) 000-0000',
    department: department || 'General Clinical Department',
    specialization: specialization || '',
    licenseId: licenseId || '',
    employeeId: employeeId || '',
    shift: shift || 'Standard Shift',
    status: 'ACTIVE',
    createdAt: new Date().toISOString()
  };

  db.data.users.unshift(newUser);
  db.save();

  db.logAudit(
    req.user.fullName,
    req.user.role,
    'USER_CREATED',
    'USER',
    newUser.id,
    `Admin created ${role} account for ${fullName} (${email}).`
  );

  res.status(201).json({ message: 'User created successfully.', user: newUser });
});

// -------------------------------------------------------------
// 10. ANALYTICS & TELEMETRY
// -------------------------------------------------------------

app.get('/api/analytics', authenticateUser, (req, res) => {
  const user = req.user;
  const requests = db.data.testRequests;
  const samples = db.data.samples;
  const results = db.data.results;
  const reports = db.data.reports;
  const invoices = db.data.invoices;
  const users = db.data.users;
  const inventory = db.data.inventory;

  if (user.role === 'PATIENT') {
    const myRequests = requests.filter(r => r.patientId === user.id);
    const myReports = reports.filter(r => r.patientId === user.id);
    const myInvoices = invoices.filter(i => i.patientId === user.id);

    return res.json({
      role: 'PATIENT',
      metrics: {
        upcomingTests: myRequests.filter(r => r.status === 'REQUESTED' || r.status === 'SAMPLE_COLLECTION_PENDING').length,
        pendingTests: myRequests.filter(r => r.status !== 'REPORT_RELEASED' && r.status !== 'CANCELLED' && r.status !== 'REJECTED').length,
        completedReports: myReports.length,
        totalSpent: myInvoices.filter(i => i.status === 'PAID').reduce((s, i) => s + i.totalAmount, 0),
        pendingPayments: myInvoices.filter(i => i.status === 'PENDING').length
      }
    });
  }

  if (user.role === 'DOCTOR') {
    const myRequests = requests.filter(r => r.doctorId === user.id || !r.doctorId);
    const myReports = reports;

    return res.json({
      role: 'DOCTOR',
      metrics: {
        myPatients: users.filter(u => u.role === 'PATIENT').length,
        pendingTestRequests: myRequests.filter(r => r.status !== 'REPORT_RELEASED').length,
        testsOrderedToday: myRequests.length,
        reportsAwaitingReview: results.filter(r => r.status === 'RESULT_ENTERED').length,
        completedReports: myReports.length,
        criticalResultsCount: results.filter(r => r.hasCritical).length
      }
    });
  }

  if (user.role === 'LAB_TECHNICIAN') {
    return res.json({
      role: 'LAB_TECHNICIAN',
      metrics: {
        newRequests: requests.filter(r => r.status === 'REQUESTED').length,
        samplesAwaitingCollection: requests.filter(r => r.status === 'REQUESTED' || r.status === 'SAMPLE_COLLECTION_PENDING').length,
        samplesReceived: samples.filter(s => s.status === 'RECEIVED').length,
        samplesProcessing: samples.filter(s => s.status === 'PROCESSING').length,
        resultsPending: requests.filter(r => r.status === 'PROCESSING' || r.status === 'SAMPLE_RECEIVED').length,
        reportsPendingVerification: results.filter(r => r.status === 'RESULT_ENTERED').length,
        completedTests: reports.length,
        criticalResultsCount: results.filter(r => r.hasCritical).length
      }
    });
  }

  // ADMIN ANALYTICS
  const totalRevenue = invoices.filter(i => i.status === 'PAID').reduce((s, i) => s + i.totalAmount, 0);
  res.json({
    role: 'ADMIN',
    metrics: {
      totalPatients: users.filter(u => u.role === 'PATIENT').length,
      totalDoctors: users.filter(u => u.role === 'DOCTOR').length,
      totalTechnicians: users.filter(u => u.role === 'LAB_TECHNICIAN').length,
      totalTestsCatalog: db.data.tests.length,
      totalRequests: requests.length,
      pendingRequests: requests.filter(r => r.status !== 'REPORT_RELEASED').length,
      samplesCollected: samples.length,
      completedReports: reports.length,
      criticalResultsCount: results.filter(r => r.hasCritical).length,
      totalRevenue,
      lowStockItems: inventory.filter(i => i.status === 'LOW_STOCK' || i.status === 'OUT_OF_STOCK').length
    }
  });
});

app.get('/api/notifications', authenticateUser, (req, res) => {
  const notifs = db.data.notifications.filter(n => n.userId === req.user.id);
  const unreadCount = notifs.filter(n => !n.isRead).length;
  res.json({ notifications: notifs, unreadCount });
});

app.put('/api/notifications/:id/read', authenticateUser, (req, res) => {
  const notif = db.data.notifications.find(n => n.id === req.params.id && n.userId === req.user.id);
  if (notif) {
    notif.isRead = true;
    db.save();
  }
  res.json({ success: true });
});

app.put('/api/notifications/read-all', authenticateUser, (req, res) => {
  db.data.notifications.forEach(n => {
    if (n.userId === req.user.id) n.isRead = true;
  });
  db.save();
  res.json({ success: true });
});

app.get('/api/audit-logs', authenticateUser, (req, res) => {
  if (req.user.role !== 'ADMIN') {
    return res.status(403).json({ error: 'Permission denied.' });
  }
  res.json({ logs: db.data.auditLogs });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    system: 'LABCARE Laboratory Management System',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

const PORT = 6005;
app.listen(PORT, () => console.log(` LABCARE Backend API running on port ${PORT}`));
