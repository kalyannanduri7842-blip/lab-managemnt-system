# LABCARE — Testing & Quality Assurance Suite

## 1. Automated Integration Test
Execute the comprehensive end-to-end integration test:
```bash
cd backend
node test_labcare_workflow.js
```

### Verified Test Assertions:
1. **Authentication & Authorization**: Tests token issue, role validation, and patient record isolation.
2. **Accessioning**: Verifies test ordering with priority flags and specimen mode calculation.
3. **Phlebotomy**: Verifies barcode assignment and status progression (`REQUESTED` $\to$ `SAMPLE_COLLECTED`).
4. **Laboratory Receipt & Processing**: Verifies specimen receiving and loading into analyzer (`SAMPLE_RECEIVED` $\to$ `PROCESSING`).
5. **Analytical Measurement**: Tests auto-evaluation of parameter values against reference ranges and critical limits.
6. **Physician Verification**: Tests clinical review and verification state.
7. **Report Release**: Verifies final diagnostic release, notification dispatch, and patient portal availability.
8. **Audit Trail**: Verifies chronological logging of all medical events.
