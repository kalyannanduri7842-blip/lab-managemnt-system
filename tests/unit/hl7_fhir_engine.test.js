const test = require('node:test');
const assert = require('node:assert/strict');
const { HL7Engine, FHIRDiagnosticReportConverter } = require('../../backend/clinical/hl7_fhir_engine');

test('HL7 and FHIR Message Generation', async (t) => {
  await t.test('HL7Engine constructs valid ORU^R01 message', () => {
    const patient = { id: 'P554', name: 'PATEL^RAJESH', dob: '19820512', gender: 'Male' };
    const order = { id: 'ORD-9988', testName: 'Lipid Panel Screen' };
    const obs = [
      { code: '2093-3', name: 'Total Cholesterol', value: '185', units: 'mg/dL', refRange: '<200', flag: 'N' }
    ];
    const hl7 = HL7Engine.generateLabReportHL7(patient, order, obs);
    assert.ok(hl7.includes('MSH|'));
    assert.ok(hl7.includes('PID|1||P554'));
    assert.ok(hl7.includes('OBX|1|NM|2093-3^Total Cholesterol'));
  });

  await t.test('FHIR Converter produces valid DiagnosticReport JSON', () => {
    const patient = { id: 'P554', name: 'Rajesh Patel' };
    const order = { id: 'ORD-9988', testName: 'Lipid Panel Screen', loincCode: '2093-3' };
    const results = [{ name: 'Cholesterol', value: '185', units: 'mg/dL', flag: 'Normal' }];
    const fhir = FHIRDiagnosticReportConverter.toFHIR(patient, order, results);
    assert.equal(fhir.resourceType, 'DiagnosticReport');
    assert.equal(fhir.status, 'final');
    assert.equal(fhir.subject.display, 'Rajesh Patel');
  });
});