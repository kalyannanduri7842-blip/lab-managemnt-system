const test = require('node:test');
const assert = require('node:assert/strict');
const { LOINC_CATALOG, evaluateCriticalResult } = require('../../backend/clinical/loinc_catalog');
const { ICD10_REGISTRY, findIcdByCode, getRecommendedTestsForDiagnosis } = require('../../backend/clinical/icd10_registry');
const { HL7Engine, FHIRDiagnosticReportConverter } = require('../../backend/clinical/hl7_fhir_engine');

test('LabCare End-to-End Patient Specimen & Clinical Diagnostics Workflow', async (t) => {
  const patient = {
    id: 'PAT-2026-8801',
    name: 'Ananya Sharma',
    age: 34,
    gender: 'Female',
    contact: '+91-9876543210',
    bloodGroup: 'B+',
    address: 'Apt 4B, Emerald Heights, Bangalore'
  };

  let labOrder = {
    orderId: 'ORD-LAB-9901',
    patientId: patient.id,
    prescribingDoctor: 'Dr. Ramesh Kulkarni, MD',
    clinicalDiagnosisICD: ICD10_REGISTRY[0].code,
    status: 'ordered',
    orderTimestamp: new Date().toISOString()
  };

  await t.test('1. ICD-10 Diagnosis verification & lab test recommendation', () => {
    const icd = findIcdByCode(labOrder.clinicalDiagnosisICD);
    assert.ok(icd, 'Diagnosis ICD-10 must exist in registry');
    assert.equal(icd.isBillable, true);

    const recommended = getRecommendedTestsForDiagnosis(labOrder.clinicalDiagnosisICD);
    assert.ok(recommended.length > 0, 'Should suggest standard diagnostic battery');
  });

  await t.test('2. Specimen accessioning & phlebotomy tube collection', () => {
    labOrder.specimen = {
      specimenBarcode: 'BAR-2026-9901-WB',
      type: 'Whole Blood (EDTA)',
      collectedBy: 'Phlebotomist S. Kumar',
      collectionTime: new Date().toISOString(),
      tubeCapColor: 'Lavender',
      volumeML: 4.5
    };
    labOrder.status = 'sample_collected';
    assert.equal(labOrder.status, 'sample_collected');
    assert.ok(labOrder.specimen.specimenBarcode.startsWith('BAR-'));
  });

  await t.test('3. Automated Laboratory Analyzer processing & LOINC mapping', () => {
    labOrder.status = 'processing';
    const test1 = LOINC_CATALOG[0];
    const test2 = LOINC_CATALOG[1];

    labOrder.results = [
      {
        parameter: test1.testName,
        loincCode: test1.loincCode,
        value: 95.4,
        unit: test1.units,
        refRange: `${test1.referenceIntervals.female.adult.low} - ${test1.referenceIntervals.female.adult.high}`,
        flag: 'NORMAL'
      },
      {
        parameter: test2.testName,
        loincCode: test2.loincCode,
        value: test2.criticalThresholds.panicHigh + 5,
        unit: test2.units,
        refRange: `${test2.referenceIntervals.female.adult.low} - ${test2.referenceIntervals.female.adult.high}`,
        flag: 'CRITICAL_HIGH'
      }
    ];

    const criticalEval = evaluateCriticalResult(test2.loincCode, labOrder.results[1].value);
    assert.equal(criticalEval.isCritical, true);
    assert.equal(criticalEval.flag, 'CRITICAL_HIGH');
  });

  await t.test('4. Diagnostic Report Verification & HL7/FHIR Message Export', () => {
    labOrder.status = 'completed';
    labOrder.verifiedBy = 'Dr. Priya Nair, Chief Pathologist (Reg: KMC-44892)';
    labOrder.completedTimestamp = new Date().toISOString();

    const hl7 = HL7Engine.generateLabReportHL7(patient, labOrder, [
      { code: labOrder.results[0].loincCode, name: labOrder.results[0].parameter, value: labOrder.results[0].value, units: labOrder.results[0].unit, refRange: labOrder.results[0].refRange, flag: 'N' },
      { code: labOrder.results[1].loincCode, name: labOrder.results[1].parameter, value: labOrder.results[1].value, units: labOrder.results[1].unit, refRange: labOrder.results[1].refRange, flag: 'CH' }
    ]);

    assert.ok(hl7.includes('MSH|'));
    assert.ok(hl7.includes(patient.id));

    const fhir = FHIRDiagnosticReportConverter.toFHIR(patient, labOrder, labOrder.results);
    assert.equal(fhir.resourceType, 'DiagnosticReport');
    assert.equal(fhir.status, 'final');
    assert.equal(fhir.result.length, 2);
  });
});
