const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'labcare_db.json');

const initialData = {
  users: [
    {
      id: 'usr-adm-01',
      fullName: 'Dr. Arthur Pendelton',
      email: 'admin@labcare.demo',
      password: 'Admin@12345',
      role: 'ADMIN',
      phone: '+1 (555) 019-2834',
      department: 'Executive Administration & Medical Governance',
      licenseId: 'MED-GOV-9021',
      status: 'ACTIVE',
      createdAt: '2026-01-01T08:00:00.000Z'
    },
    {
      id: 'usr-doc-01',
      fullName: 'Dr. Sarah Vance, MD',
      email: 'doctor@labcare.demo',
      password: 'Doctor@12345',
      role: 'DOCTOR',
      phone: '+1 (555) 302-8819',
      specialization: 'Internal Medicine & Endocrinology',
      licenseId: 'MED-LIC-4482',
      department: 'General Medicine',
      status: 'ACTIVE',
      createdAt: '2026-01-05T09:00:00.000Z'
    },
    {
      id: 'usr-doc-02',
      fullName: 'Dr. David Reynolds, MD',
      email: 'reynolds@labcare.demo',
      password: 'Doctor@12345',
      role: 'DOCTOR',
      phone: '+1 (555) 441-9920',
      specialization: 'Cardiovascular Medicine',
      licenseId: 'MED-LIC-8812',
      department: 'Cardiology',
      status: 'ACTIVE',
      createdAt: '2026-01-10T09:00:00.000Z'
    },
    {
      id: 'usr-tech-01',
      fullName: 'Marcus Chen, MLS (ASCP)',
      email: 'technician@labcare.demo',
      password: 'Technician@12345',
      role: 'LAB_TECHNICIAN',
      phone: '+1 (555) 782-1144',
      employeeId: 'LAB-TECH-702',
      department: 'Clinical Biochemistry & Hematology',
      shift: 'Morning Shift (07:00 - 15:30)',
      status: 'ACTIVE',
      createdAt: '2026-01-08T08:30:00.000Z'
    },
    {
      id: 'usr-tech-02',
      fullName: 'Elena Rostova, MLT',
      email: 'elena@labcare.demo',
      password: 'Technician@12345',
      role: 'LAB_TECHNICIAN',
      phone: '+1 (555) 619-3321',
      employeeId: 'LAB-TECH-705',
      department: 'Microbiology & Molecular Diagnostics',
      shift: 'Evening Shift (15:00 - 23:30)',
      status: 'ACTIVE',
      createdAt: '2026-01-12T08:30:00.000Z'
    },
    {
      id: 'usr-pat-01',
      fullName: 'Eleanor Rigby',
      email: 'patient@labcare.demo',
      password: 'Patient@12345',
      role: 'PATIENT',
      phone: '+1 (555) 892-3301',
      dateOfBirth: '1984-06-18',
      gender: 'Female',
      address: '742 Evergreen Terrace, Apt 4B',
      city: 'Springfield',
      state: 'OR',
      postalCode: '97477',
      emergencyContact: 'Paul Rigby (+1 555 892-3309)',
      bloodGroup: 'A+',
      status: 'ACTIVE',
      createdAt: '2026-01-15T11:00:00.000Z'
    },
    {
      id: 'usr-pat-02',
      fullName: 'Jonathan Miller',
      email: 'jonathan.miller@example.com',
      password: 'Patient@12345',
      role: 'PATIENT',
      phone: '+1 (555) 612-4490',
      dateOfBirth: '1976-11-23',
      gender: 'Male',
      address: '1088 Meadowview Drive',
      city: 'Springfield',
      state: 'OR',
      postalCode: '97478',
      emergencyContact: 'Claire Miller (+1 555 612-4491)',
      bloodGroup: 'O+',
      status: 'ACTIVE',
      createdAt: '2026-01-20T14:20:00.000Z'
    },
    {
      id: 'usr-pat-03',
      fullName: 'Amara Okafor',
      email: 'amara.okafor@example.com',
      password: 'Patient@12345',
      role: 'PATIENT',
      phone: '+1 (555) 782-9901',
      dateOfBirth: '1992-03-14',
      gender: 'Female',
      address: '450 Oak Ridge Lane',
      city: 'Springfield',
      state: 'OR',
      postalCode: '97477',
      emergencyContact: 'Chidi Okafor (+1 555 782-9905)',
      bloodGroup: 'B+',
      status: 'ACTIVE',
      createdAt: '2026-02-01T10:15:00.000Z'
    }
  ],

  categories: [
    { id: 'cat-hem', name: 'Hematology', description: 'Complete blood counts, coagulation, erythrocyte indices, and peripheral blood pathology.' },
    { id: 'cat-bio', name: 'Biochemistry', description: 'Metabolic panels, liver enzymes, renal function, lipids, and diabetic monitoring.' },
    { id: 'cat-imm', name: 'Immunology & Serology', description: 'Antibody titers, auto-immune diagnostics, and infectious disease serology.' },
    { id: 'cat-mic', name: 'Microbiology', description: 'Pathogen culture, antibiotic sensitivity, gram staining, and fungal assays.' },
    { id: 'cat-hor', name: 'Endocrine & Hormones', description: 'Thyroid hormones, reproductive steroids, adrenal, and pituitary biomarkers.' },
    { id: 'cat-mol', name: 'Molecular Diagnostics', description: 'PCR genetic testing, viral load quantification, and inherited markers.' },
    { id: 'cat-uri', name: 'Clinical Pathology & Urinalysis', description: 'Physical, chemical, and microscopic urine sediment analysis.' },
    { id: 'cat-vit', name: 'Vitamins & Nutritional Panels', description: 'Assays for 25-OH Vitamin D, Vitamin B12, Folate, Ferritin, and Iron.' }
  ],

  tests: [
    {
      id: 'tst-cbc',
      code: 'HEM-CBC-01',
      name: 'Complete Blood Count (CBC with 5-Part Diff)',
      categoryId: 'cat-hem',
      categoryName: 'Hematology',
      description: 'Comprehensive hematologic evaluation including RBC, WBC, Hemoglobin, Hematocrit, Platelets, and automated 5-part differential.',
      sampleType: 'Whole Blood (EDTA Lavender Top)',
      preparation: 'No fasting required. Maintain routine hydration.',
      turnaroundHours: 4,
      price: 35.00,
      parameters: [
        { name: 'Hemoglobin', unit: 'g/dL', refMin: 12.0, refMax: 17.5, critMin: 7.0, critMax: 20.0 },
        { name: 'RBC Count', unit: 'x10^6/uL', refMin: 4.2, refMax: 5.9, critMin: 2.0, critMax: 7.5 },
        { name: 'Hematocrit', unit: '%', refMin: 37.0, refMax: 51.0, critMin: 20.0, critMax: 60.0 },
        { name: 'WBC Total', unit: 'x10^3/uL', refMin: 4.5, refMax: 11.0, critMin: 2.0, critMax: 30.0 },
        { name: 'Platelet Count', unit: 'x10^3/uL', refMin: 150, refMax: 450, critMin: 50, critMax: 1000 },
        { name: 'Neutrophils %', unit: '%', refMin: 40.0, refMax: 70.0, critMin: 15.0, critMax: 90.0 },
        { name: 'Lymphocytes %', unit: '%', refMin: 20.0, refMax: 40.0, critMin: 5.0, critMax: 75.0 }
      ],
      active: true
    },
    {
      id: 'tst-cmp',
      code: 'BIO-CMP-02',
      name: 'Comprehensive Metabolic Panel (CMP 14)',
      categoryId: 'cat-bio',
      categoryName: 'Biochemistry',
      description: '14 essential biomarkers evaluating electrolyte balance, renal filtration, hepatic enzymes, and blood glucose.',
      sampleType: 'Serum (SST Gold Top)',
      preparation: 'Overnight 10-12 hour fasting required. Plain water permitted.',
      turnaroundHours: 6,
      price: 55.00,
      parameters: [
        { name: 'Glucose (Fasting)', unit: 'mg/dL', refMin: 70, refMax: 99, critMin: 45, critMax: 400 },
        { name: 'Calcium Total', unit: 'mg/dL', refMin: 8.5, refMax: 10.5, critMin: 6.0, critMax: 13.0 },
        { name: 'Sodium', unit: 'mmol/L', refMin: 135, refMax: 145, critMin: 120, critMax: 160 },
        { name: 'Potassium', unit: 'mmol/L', refMin: 3.5, refMax: 5.1, critMin: 2.8, critMax: 6.2 },
        { name: 'Chloride', unit: 'mmol/L', refMin: 96, refMax: 106, critMin: 80, critMax: 120 },
        { name: 'CO2 / Bicarbonate', unit: 'mmol/L', refMin: 22, refMax: 29, critMin: 10, critMax: 40 },
        { name: 'Blood Urea Nitrogen (BUN)', unit: 'mg/dL', refMin: 7, refMax: 20, critMin: 2, critMax: 80 },
        { name: 'Creatinine', unit: 'mg/dL', refMin: 0.6, refMax: 1.2, critMin: 0.2, critMax: 5.0 },
        { name: 'eGFR', unit: 'mL/min/1.73m2', refMin: 60, refMax: 120, critMin: 15, critMax: 150 },
        { name: 'Total Bilirubin', unit: 'mg/dL', refMin: 0.2, refMax: 1.2, critMin: 0.1, critMax: 10.0 },
        { name: 'Alkaline Phosphatase (ALP)', unit: 'U/L', refMin: 44, refMax: 147, critMin: 20, critMax: 600 },
        { name: 'ALT (SGPT)', unit: 'U/L', refMin: 7, refMax: 56, critMin: 5, critMax: 500 },
        { name: 'AST (SGOT)', unit: 'U/L', refMin: 10, refMax: 40, critMin: 5, critMax: 500 },
        { name: 'Total Protein', unit: 'g/dL', refMin: 6.0, refMax: 8.3, critMin: 4.0, critMax: 11.0 }
      ],
      active: true
    },
    {
      id: 'tst-lip',
      code: 'BIO-LIP-03',
      name: 'Advanced Lipid & Cardiovascular Profile',
      categoryId: 'cat-bio',
      categoryName: 'Biochemistry',
      description: 'Standard lipid fractions including Total Cholesterol, HDL, LDL, Triglycerides, and Non-HDL risk ratios.',
      sampleType: 'Serum (SST Gold Top)',
      preparation: '12-hour fasting required. Avoid alcohol 24 hours prior.',
      turnaroundHours: 6,
      price: 45.00,
      parameters: [
        { name: 'Total Cholesterol', unit: 'mg/dL', refMin: 120, refMax: 199, critMin: 70, critMax: 400 },
        { name: 'HDL Cholesterol', unit: 'mg/dL', refMin: 40, refMax: 90, critMin: 20, critMax: 120 },
        { name: 'LDL Cholesterol (Calc)', unit: 'mg/dL', refMin: 0, refMax: 99, critMin: 0, critMax: 250 },
        { name: 'Triglycerides', unit: 'mg/dL', refMin: 0, refMax: 149, critMin: 0, critMax: 600 },
        { name: 'Chol / HDL Ratio', unit: 'ratio', refMin: 1.0, refMax: 4.5, critMin: 0.5, critMax: 10.0 }
      ],
      active: true
    },
    {
      id: 'tst-hba1c',
      code: 'BIO-A1C-04',
      name: 'Glycated Hemoglobin (HbA1c with eAG)',
      categoryId: 'cat-bio',
      categoryName: 'Biochemistry',
      description: 'Monitors 90-day mean glycemic control for diabetes diagnosis and therapeutic management.',
      sampleType: 'Whole Blood (EDTA Lavender Top)',
      preparation: 'No fasting required.',
      turnaroundHours: 4,
      price: 38.00,
      parameters: [
        { name: 'Hemoglobin A1c', unit: '%', refMin: 4.0, refMax: 5.6, critMin: 3.5, critMax: 14.0 },
        { name: 'Estimated Avg Glucose (eAG)', unit: 'mg/dL', refMin: 70, refMax: 114, critMin: 50, critMax: 350 }
      ],
      active: true
    },
    {
      id: 'tst-tsh',
      code: 'HOR-TSH-05',
      name: 'Thyroid Stimulating Hormone (Ultra-Sensitive TSH)',
      categoryId: 'cat-hor',
      categoryName: 'Endocrine & Hormones',
      description: 'Primary screening assay for primary, secondary, and subclinical thyroid disorders.',
      sampleType: 'Serum (SST Gold Top)',
      preparation: 'Morning collection recommended. Avoid biotin supplements 48 hours prior.',
      turnaroundHours: 8,
      price: 42.00,
      parameters: [
        { name: 'TSH (3rd Generation)', unit: 'uIU/mL', refMin: 0.45, refMax: 4.50, critMin: 0.05, critMax: 25.0 }
      ],
      active: true
    },
    {
      id: 'tst-vitd',
      code: 'VIT-25D-06',
      name: '25-Hydroxy Vitamin D Total (D2 + D3)',
      categoryId: 'cat-vit',
      categoryName: 'Vitamins & Nutritional Panels',
      description: 'Quantitative serum chemiluminescent assay for circulating 25-OH Vitamin D status.',
      sampleType: 'Serum (SST Gold Top)',
      preparation: 'No fasting required.',
      turnaroundHours: 8,
      price: 60.00,
      parameters: [
        { name: '25-OH Vitamin D Total', unit: 'ng/mL', refMin: 30.0, refMax: 100.0, critMin: 10.0, critMax: 150.0 }
      ],
      active: true
    },
    {
      id: 'tst-ua',
      code: 'URI-UA-07',
      name: 'Urinalysis Complete (Physical, Chemical & Microscopic)',
      categoryId: 'cat-uri',
      categoryName: 'Clinical Pathology & Urinalysis',
      description: 'Multi-parameter urine reagent strip and automated sediment microscopy examination.',
      sampleType: 'Clean-Catch Midstream Urine',
      preparation: 'First morning midstream clean catch preferred.',
      turnaroundHours: 3,
      price: 25.00,
      parameters: [
        { name: 'Specific Gravity', unit: '', refMin: 1.005, refMax: 1.030, critMin: 1.001, critMax: 1.040 },
        { name: 'pH', unit: '', refMin: 5.0, refMax: 7.5, critMin: 4.0, critMax: 9.0 },
        { name: 'Protein (Dipstick)', unit: 'mg/dL', refMin: 0, refMax: 0, critMin: 0, critMax: 300 },
        { name: 'Glucose (Dipstick)', unit: 'mg/dL', refMin: 0, refMax: 0, critMin: 0, critMax: 500 },
        { name: 'Leukocyte Esterase', unit: '', refMin: 0, refMax: 0, critMin: 0, critMax: 3 },
        { name: 'WBC Microscopy', unit: '/HPF', refMin: 0, refMax: 5, critMin: 0, critMax: 50 },
        { name: 'RBC Microscopy', unit: '/HPF', refMin: 0, refMax: 3, critMin: 0, critMax: 50 }
      ],
      active: true
    }
  ],

  testRequests: [
    {
      id: 'req-lab-101',
      accessionNumber: 'ACC-2026-0491',
      patientId: 'usr-pat-01',
      patientName: 'Eleanor Rigby',
      patientDob: '1984-06-18',
      patientGender: 'Female',
      patientPhone: '+1 (555) 892-3301',
      doctorId: 'usr-doc-01',
      doctorName: 'Dr. Sarah Vance, MD',
      testId: 'tst-cbc',
      testName: 'Complete Blood Count (CBC with 5-Part Diff)',
      testCode: 'HEM-CBC-01',
      priority: 'NORMAL',
      collectionType: 'LAB_VISIT',
      scheduledDate: '2026-03-02',
      scheduledTime: '08:30 AM',
      clinicalNotes: 'Annual preventive physical; check for fatigue & microcytic anemia.',
      status: 'REPORT_RELEASED',
      sampleId: 'smp-lab-101',
      invoiceId: 'inv-lab-101',
      reportId: 'rep-lab-101',
      createdAt: '2026-03-01T08:00:00.000Z',
      updatedAt: '2026-03-02T11:30:00.000Z'
    },
    {
      id: 'req-lab-102',
      accessionNumber: 'ACC-2026-0492',
      patientId: 'usr-pat-02',
      patientName: 'Jonathan Miller',
      patientDob: '1976-11-23',
      patientGender: 'Male',
      patientPhone: '+1 (555) 612-4490',
      doctorId: 'usr-doc-02',
      doctorName: 'Dr. David Reynolds, MD',
      testId: 'tst-cmp',
      testName: 'Comprehensive Metabolic Panel (CMP 14)',
      testCode: 'BIO-CMP-02',
      priority: 'URGENT',
      collectionType: 'LAB_VISIT',
      scheduledDate: '2026-03-02',
      scheduledTime: '09:15 AM',
      clinicalNotes: 'Follow-up on hypertensive medication adjustment; evaluate renal indices and electrolytes.',
      status: 'PROCESSING',
      sampleId: 'smp-lab-102',
      invoiceId: 'inv-lab-102',
      reportId: null,
      createdAt: '2026-03-02T07:30:00.000Z',
      updatedAt: '2026-03-02T09:45:00.000Z'
    },
    {
      id: 'req-lab-103',
      accessionNumber: 'ACC-2026-0493',
      patientId: 'usr-pat-03',
      patientName: 'Amara Okafor',
      patientDob: '1992-03-14',
      patientGender: 'Female',
      patientPhone: '+1 (555) 782-9901',
      doctorId: 'usr-doc-01',
      doctorName: 'Dr. Sarah Vance, MD',
      testId: 'tst-hba1c',
      testName: 'Glycated Hemoglobin (HbA1c with eAG)',
      testCode: 'BIO-A1C-04',
      priority: 'NORMAL',
      collectionType: 'HOME_COLLECTION',
      scheduledDate: '2026-03-03',
      scheduledTime: '08:00 AM',
      clinicalNotes: 'Quarterly diabetic management routine evaluation.',
      status: 'SAMPLE_COLLECTION_PENDING',
      sampleId: null,
      invoiceId: 'inv-lab-103',
      reportId: null,
      createdAt: '2026-03-02T14:00:00.000Z',
      updatedAt: '2026-03-02T14:00:00.000Z'
    }
  ],

  samples: [
    {
      id: 'smp-lab-101',
      sampleBarcode: 'SMP-2026-9081',
      requestId: 'req-lab-101',
      patientId: 'usr-pat-01',
      patientName: 'Eleanor Rigby',
      sampleType: 'Whole Blood (EDTA)',
      containerType: 'Lavender Top Vacutainer 4mL',
      collectedAt: '2026-03-02T08:35:00.000Z',
      collectedBy: 'Marcus Chen, MLS',
      receivedAt: '2026-03-02T08:50:00.000Z',
      receivedBy: 'Marcus Chen, MLS',
      status: 'COMPLETED',
      notes: 'Optimal specimen volume; no hemolysis observed.'
    },
    {
      id: 'smp-lab-102',
      sampleBarcode: 'SMP-2026-9082',
      requestId: 'req-lab-102',
      patientId: 'usr-pat-02',
      patientName: 'Jonathan Miller',
      sampleType: 'Serum (SST)',
      containerType: 'Gold Top Vacutainer 5mL with Gel Separator',
      collectedAt: '2026-03-02T09:20:00.000Z',
      collectedBy: 'Marcus Chen, MLS',
      receivedAt: '2026-03-02T09:35:00.000Z',
      receivedBy: 'Marcus Chen, MLS',
      status: 'PROCESSING',
      notes: 'Centrifuged at 3000 RPM for 10 min. Primary tube loaded on automated analyzer.'
    }
  ],

  results: [
    {
      id: 'res-lab-101',
      requestId: 'req-lab-101',
      testId: 'tst-cbc',
      patientId: 'usr-pat-01',
      enteredBy: 'Marcus Chen, MLS',
      enteredAt: '2026-03-02T10:15:00.000Z',
      verifiedBy: 'Dr. Sarah Vance, MD',
      verifiedAt: '2026-03-02T11:10:00.000Z',
      status: 'VERIFIED',
      hasCritical: false,
      parameters: [
        { name: 'Hemoglobin', value: 13.8, unit: 'g/dL', refRange: '12.0 - 17.5', flag: 'NORMAL' },
        { name: 'RBC Count', value: 4.62, unit: 'x10^6/uL', refRange: '4.20 - 5.90', flag: 'NORMAL' },
        { name: 'Hematocrit', value: 41.2, unit: '%', refRange: '37.0 - 51.0', flag: 'NORMAL' },
        { name: 'WBC Total', value: 6.8, unit: 'x10^3/uL', refRange: '4.5 - 11.0', flag: 'NORMAL' },
        { name: 'Platelet Count', value: 245, unit: 'x10^3/uL', refRange: '150 - 450', flag: 'NORMAL' },
        { name: 'Neutrophils %', value: 58.0, unit: '%', refRange: '40.0 - 70.0', flag: 'NORMAL' },
        { name: 'Lymphocytes %', value: 32.5, unit: '%', refRange: '20.0 - 40.0', flag: 'NORMAL' }
      ],
      clinicalImpression: 'All hematologic indices within established physiological reference limits.'
    }
  ],

  reports: [
    {
      id: 'rep-lab-101',
      reportNumber: 'RPT-2026-0391',
      requestId: 'req-lab-101',
      patientId: 'usr-pat-01',
      patientName: 'Eleanor Rigby',
      patientDob: '1984-06-18',
      patientGender: 'Female',
      patientPhone: '+1 (555) 892-3301',
      doctorName: 'Dr. Sarah Vance, MD',
      testName: 'Complete Blood Count (CBC with 5-Part Diff)',
      testCode: 'HEM-CBC-01',
      sampleBarcode: 'SMP-2026-9081',
      sampleType: 'Whole Blood (EDTA)',
      collectedAt: '2026-03-02T08:35:00.000Z',
      reportedAt: '2026-03-02T11:30:00.000Z',
      verifiedBy: 'Dr. Sarah Vance, MD',
      technologist: 'Marcus Chen, MLS (ASCP)',
      status: 'RELEASED',
      hasCritical: false,
      resultData: [
        { parameter: 'Hemoglobin', result: '13.8', unit: 'g/dL', reference: '12.0 - 17.5', flag: 'NORMAL' },
        { parameter: 'RBC Count', result: '4.62', unit: 'x10^6/uL', reference: '4.20 - 5.90', flag: 'NORMAL' },
        { parameter: 'Hematocrit', result: '41.2', unit: '%', reference: '37.0 - 51.0', flag: 'NORMAL' },
        { parameter: 'WBC Total', result: '6.8', unit: 'x10^3/uL', reference: '4.5 - 11.0', flag: 'NORMAL' },
        { parameter: 'Platelet Count', result: '245', unit: 'x10^3/uL', reference: '150 - 450', flag: 'NORMAL' },
        { parameter: 'Neutrophils %', result: '58.0', unit: '%', reference: '40.0 - 70.0', flag: 'NORMAL' },
        { parameter: 'Lymphocytes %', result: '32.5', unit: '%', reference: '20.0 - 40.0', flag: 'NORMAL' }
      ],
      summaryRemarks: 'Normocytic, normochromic RBC morphology. Differential leukogram unremarkable.'
    }
  ],

  invoices: [
    {
      id: 'inv-lab-101',
      invoiceNumber: 'INV-2026-7801',
      requestId: 'req-lab-101',
      patientId: 'usr-pat-01',
      patientName: 'Eleanor Rigby',
      testName: 'Complete Blood Count (CBC with 5-Part Diff)',
      testPrice: 35.00,
      collectionFee: 0.00,
      taxAmount: 2.80,
      discount: 0.00,
      totalAmount: 37.80,
      status: 'PAID',
      paymentMethod: 'TEST_CARD_VISA_4242',
      paidAt: '2026-03-01T08:05:00.000Z',
      transactionRef: 'TXN-908124'
    },
    {
      id: 'inv-lab-102',
      invoiceNumber: 'INV-2026-7802',
      requestId: 'req-lab-102',
      patientId: 'usr-pat-02',
      patientName: 'Jonathan Miller',
      testName: 'Comprehensive Metabolic Panel (CMP 14)',
      testPrice: 55.00,
      collectionFee: 0.00,
      taxAmount: 4.40,
      discount: 0.00,
      totalAmount: 59.40,
      status: 'PAID',
      paymentMethod: 'TEST_UPI_DIRECT',
      paidAt: '2026-03-02T07:35:00.000Z',
      transactionRef: 'TXN-908125'
    },
    {
      id: 'inv-lab-103',
      invoiceNumber: 'INV-2026-7803',
      requestId: 'req-lab-103',
      patientId: 'usr-pat-03',
      patientName: 'Amara Okafor',
      testName: 'Glycated Hemoglobin (HbA1c with eAG)',
      testPrice: 38.00,
      collectionFee: 15.00,
      taxAmount: 4.24,
      discount: 0.00,
      totalAmount: 57.24,
      status: 'PENDING',
      paymentMethod: 'PENDING_SETTLEMENT',
      paidAt: null,
      transactionRef: null
    }
  ],

  inventory: [
    {
      id: 'inv-item-01',
      sku: 'SUP-EDTA-LAV-100',
      name: 'BD Vacutainer K2 EDTA Tubes 4mL',
      category: 'Collection Tubes',
      quantity: 450,
      minLevel: 100,
      unit: 'tubes',
      supplier: 'Becton Dickinson Life Sciences',
      expiryDate: '2027-08-30',
      status: 'AVAILABLE'
    },
    {
      id: 'inv-item-02',
      sku: 'SUP-SST-GOLD-100',
      name: 'BD Vacutainer SST Gel Separator Tubes 5mL',
      category: 'Collection Tubes',
      quantity: 380,
      minLevel: 100,
      unit: 'tubes',
      supplier: 'Becton Dickinson Life Sciences',
      expiryDate: '2027-06-15',
      status: 'AVAILABLE'
    },
    {
      id: 'inv-item-03',
      sku: 'REAG-A1C-CARTRIDGE',
      name: 'Tosoh G8 HPLC HbA1c Reagent Assay Pack',
      category: 'Analytical Reagents',
      quantity: 18,
      minLevel: 25,
      unit: 'kits',
      supplier: 'Tosoh Bioscience Corp',
      expiryDate: '2026-09-30',
      status: 'LOW_STOCK'
    },
    {
      id: 'inv-item-04',
      sku: 'SUP-NEEDLE-21G',
      name: 'Safety-Lok Blood Collection Needles 21G',
      category: 'Phlebotomy Supplies',
      quantity: 620,
      minLevel: 150,
      unit: 'units',
      supplier: 'Terumo Medical',
      expiryDate: '2028-12-31',
      status: 'AVAILABLE'
    },
    {
      id: 'inv-item-05',
      sku: 'REAG-CMP-CALIBRATOR',
      name: 'Roche Cobas Multiconstituent Serum Calibrator',
      category: 'Calibrators & Controls',
      quantity: 6,
      minLevel: 10,
      unit: 'vials',
      supplier: 'Roche Diagnostics',
      expiryDate: '2026-04-15',
      status: 'EXPIRING_SOON'
    }
  ],

  inventoryMovements: [
    {
      id: 'mov-01',
      itemId: 'inv-item-01',
      itemName: 'BD Vacutainer K2 EDTA Tubes 4mL',
      prevQty: 500,
      changeQty: -50,
      newQty: 450,
      reason: 'Phlebotomy daily replenishment',
      performedBy: 'Marcus Chen, MLS',
      timestamp: '2026-03-01T08:00:00.000Z'
    },
    {
      id: 'mov-02',
      itemId: 'inv-item-03',
      itemName: 'Tosoh G8 HPLC HbA1c Reagent Assay Pack',
      prevQty: 20,
      changeQty: -2,
      newQty: 18,
      reason: 'Automated HPLC analyzer daily calibration & run',
      performedBy: 'Marcus Chen, MLS',
      timestamp: '2026-03-02T07:15:00.000Z'
    }
  ],

  notifications: [
    {
      id: 'notif-01',
      userId: 'usr-pat-01',
      title: 'Lab Report Released',
      message: 'Your Complete Blood Count (CBC) report RPT-2026-0391 has been verified and released by Dr. Sarah Vance, MD.',
      type: 'REPORT_RELEASED',
      isRead: false,
      createdAt: '2026-03-02T11:30:00.000Z'
    },
    {
      id: 'notif-02',
      userId: 'usr-doc-01',
      title: 'Report Verified: Eleanor Rigby',
      message: 'Verified diagnostic report RPT-2026-0391 for patient Eleanor Rigby is now available in your clinical review queue.',
      type: 'REPORT_READY',
      isRead: false,
      createdAt: '2026-03-02T11:15:00.000Z'
    },
    {
      id: 'notif-03',
      userId: 'usr-tech-01',
      title: 'Sample Processing Priority: Urgent',
      message: 'Urgent CMP 14 request ACC-2026-0492 for Jonathan Miller requires priority analytical run.',
      type: 'URGENT_SAMPLE',
      isRead: true,
      createdAt: '2026-03-02T09:35:00.000Z'
    }
  ],

  auditLogs: [
    {
      id: 'aud-01',
      timestamp: '2026-03-02T08:35:00.000Z',
      actor: 'Marcus Chen, MLS',
      role: 'LAB_TECHNICIAN',
      action: 'SAMPLE_COLLECTED',
      entity: 'SAMPLE',
      entityId: 'smp-lab-101',
      details: 'Collected Whole Blood (EDTA) specimen SMP-2026-9081 for Eleanor Rigby.'
    },
    {
      id: 'aud-02',
      timestamp: '2026-03-02T10:15:00.000Z',
      actor: 'Marcus Chen, MLS',
      role: 'LAB_TECHNICIAN',
      action: 'RESULT_ENTERED',
      entity: 'TEST_RESULT',
      entityId: 'res-lab-101',
      details: 'Entered 7 hematology parameters for accession ACC-2026-0491.'
    },
    {
      id: 'aud-03',
      timestamp: '2026-03-02T11:10:00.000Z',
      actor: 'Dr. Sarah Vance, MD',
      role: 'DOCTOR',
      action: 'RESULT_VERIFIED',
      entity: 'TEST_RESULT',
      entityId: 'res-lab-101',
      details: 'Clinically verified CBC results and approved diagnostic release.'
    },
    {
      id: 'aud-04',
      timestamp: '2026-03-02T11:30:00.000Z',
      actor: 'Marcus Chen, MLS',
      role: 'LAB_TECHNICIAN',
      action: 'REPORT_RELEASED',
      entity: 'LAB_REPORT',
      entityId: 'rep-lab-101',
      details: 'Generated and released official patient laboratory report RPT-2026-0391.'
    }
  ]
};

class LabcareDatabase {
  constructor() {
    this.load();
  }

  load() {
    try {
      if (fs.existsSync(DB_FILE)) {
        const raw = fs.readFileSync(DB_FILE, 'utf-8');
        this.data = JSON.parse(raw);
        console.log(` Loaded LABCARE database from ${DB_FILE}`);
      } else {
        this.data = JSON.parse(JSON.stringify(initialData));
        this.save();
        console.log(` Initialized fresh LABCARE database at ${DB_FILE}`);
      }
    } catch (err) {
      console.warn('Error reading LABCARE DB, resetting:', err.message);
      this.data = JSON.parse(JSON.stringify(initialData));
      this.save();
    }
  }

  save() {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(this.data, null, 2), 'utf-8');
    } catch (err) {
      console.error('Error saving LABCARE DB:', err.message);
    }
  }

  createNotification(userId, title, message, type = 'GENERAL') {
    const notif = {
      id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      userId,
      title,
      message,
      type,
      isRead: false,
      createdAt: new Date().toISOString()
    };
    this.data.notifications.unshift(notif);
    this.save();
    return notif;
  }

  logAudit(actor, role, action, entity, entityId, details = '') {
    const log = {
      id: `aud-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      timestamp: new Date().toISOString(),
      actor,
      role,
      action,
      entity,
      entityId,
      details
    };
    this.data.auditLogs.unshift(log);
    this.save();
    return log;
  }
}

const db = new LabcareDatabase();
module.exports = db;
