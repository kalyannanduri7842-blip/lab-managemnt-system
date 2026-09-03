const test = require('node:test');
const assert = require('node:assert/strict');
const { LOINC_CATALOG, findLoincByCode, getLoincByCategory, evaluateCriticalResult } = require('../../backend/clinical/loinc_catalog');

test('LOINC Catalog Data Integrity', async (t) => {
  await t.test('catalog contains comprehensive test registry', () => {
    assert.ok(LOINC_CATALOG.length >= 600, 'Catalog should contain over 600 tests');
  });

  await t.test('findLoincByCode resolves valid test entry', () => {
    const first = LOINC_CATALOG[0];
    const found = findLoincByCode(first.loincCode);
    assert.ok(found);
    assert.equal(found.id, first.id);
  });

  await t.test('getLoincByCategory filters correctly', () => {
    const hem = getLoincByCategory('Hematology');
    assert.ok(hem.length > 0);
    assert.equal(hem[0].category, 'Hematology');
  });

  await t.test('evaluateCriticalResult detects panic high values', () => {
    const testEntry = LOINC_CATALOG[0];
    const panicVal = testEntry.criticalThresholds.panicHigh + 10;
    const res = evaluateCriticalResult(testEntry.loincCode, panicVal);
    assert.equal(res.isCritical, true);
    assert.equal(res.flag, 'CRITICAL_HIGH');
  });
});