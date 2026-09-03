const test = require('node:test');
const assert = require('node:assert/strict');
const { PHARMACY_FORMULARY, findDrugById, checkLabInterference } = require('../../backend/clinical/pharmacy_formulary');

test('Pharmacy Formulary and Lab Interferences', async (t) => {
  await t.test('formulary contains full hospital catalog', () => {
    assert.ok(PHARMACY_FORMULARY.length >= 500);
  });

  await t.test('findDrugById resolves medication profile', () => {
    const drug = findDrugById('DRUG_1');
    assert.ok(drug);
    assert.ok(drug.renalAdjustmentGuidelines);
  });

  await t.test('checkLabInterference identifies test interactions', () => {
    const hasInterference = checkLabInterference('DRUG_1', 'Creatinine');
    assert.equal(hasInterference, true);
  });
});