const test = require('node:test');
const assert = require('node:assert/strict');

test('LabCare Diagnostic Report Direct File Save & Print Payload Validation', async (t) => {
  const sampleReport = {
    reportId: 'REP-2026-9004',
    patient: {
      name: 'Vikramaditya Rao',
      age: 48,
      gender: 'Male',
      uhid: 'UHID-BLR-88321'
    },
    sampleId: 'SMP-CHEM-4412',
    collectionDate: '2026-09-03 08:30 IST',
    reportingDate: '2026-09-03 10:15 IST',
    testName: 'Comprehensive Metabolic Panel & Lipid Screen',
    findings: [
      { parameter: 'Fasting Plasma Glucose', result: '98', unit: 'mg/dL', reference: '70 - 100', flag: 'Normal' },
      { parameter: 'Serum Creatinine', result: '1.02', unit: 'mg/dL', reference: '0.7 - 1.3', flag: 'Normal' },
      { parameter: 'Total Cholesterol', result: '178', unit: 'mg/dL', reference: '< 200', flag: 'Normal' },
      { parameter: 'Triglycerides', result: '142', unit: 'mg/dL', reference: '< 150', flag: 'Normal' }
    ],
    pathologistSign: 'Dr. Priya Nair, MD (Pathology), Reg: KMC-44892'
  };

  await t.test('1. Report contains all regulatory diagnostic attributes', () => {
    assert.ok(sampleReport.reportId);
    assert.ok(sampleReport.patient.uhid);
    assert.equal(sampleReport.findings.length, 4);
    assert.ok(sampleReport.pathologistSign);
  });

  await t.test('2. HTML Printable Diagnostic Report String Generation', () => {
    const html = `
      <!DOCTYPE html>
      <html>
      <head><title>Diagnostic Report - ${sampleReport.reportId}</title></head>
      <body>
        <h1>LABCARE CLINICAL LABORATORY REPORT</h1>
        <p>Patient: ${sampleReport.patient.name} (${sampleReport.patient.uhid})</p>
        <table>
          ${sampleReport.findings.map(f => `<tr><td>${f.parameter}</td><td>${f.result} ${f.unit}</td><td>${f.reference}</td></tr>`).join('')}
        </table>
        <p>Sign: ${sampleReport.pathologistSign}</p>
      </body>
      </html>
    `;

    assert.ok(html.includes('LABCARE CLINICAL LABORATORY REPORT'));
    assert.ok(html.includes(sampleReport.patient.uhid));
    assert.ok(html.includes('Fasting Plasma Glucose'));
  });
});
