const test = require('node:test');
const assert = require('node:assert/strict');
const { BIOMARKER_STANDARDS, getBiomarkerById, validateDeltaCheck } = require('../../backend/clinical/biomarker_standards');

test('Biomarker Standards and Delta Check Verification', async (t) => {
  await t.test('biomarker database is populated', () => {
    assert.ok(BIOMARKER_STANDARDS.length >= 700);
  });

  await t.test('getBiomarkerById returns standard specification', () => {
    const bm = getBiomarkerById('BM_1');
    assert.ok(bm);
    assert.ok(bm.measurementSpecifications.precisionCVPercent);
  });

  await t.test('validateDeltaCheck flags excessive 24h variation', () => {
    const result = validateDeltaCheck('BM_1', 10, 100, 12);
    assert.equal(result.pass, false);
    assert.ok(result.percentChange > 0);
  });
});