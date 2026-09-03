/**
 * LABCARE HOSPITAL MANAGEMENT SYSTEM — CLINICAL LOINC REGISTRY
 * Comprehensive Clinical Laboratory Test Code Mapping & Standard Normal Ranges
 * Standardized Diagnostic Catalog for Hematology, Biochemistry, Immunology, Microbiology, and Pathology
 */

const LOINC_CATALOG = [
  {
    id: "LOINC_1001",
    loincCode: "1001-6",
    testName: "Hematology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "HEMA_PARAM_1",
    category: "Hematology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 3.0, high: 133.2, unit: "standard" },
        pediatric: { low: 2.4, high: 113.2, unit: "standard" },
        geriatric: { low: 3.2, high: 146.5, unit: "standard" }
      },
      female: {
        adult: { low: 2.8, high: 126.5, unit: "standard" },
        pediatric: { low: 2.3, high: 109.2, unit: "standard" },
        pregnancy: { low: 2.5, high: 153.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.2,
      panicHigh: 239.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 340,
    isActive: true
  },
  {
    id: "LOINC_1002",
    loincCode: "1002-9",
    testName: "Hematology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "HEMA_PARAM_2",
    category: "Hematology",
    specimen: "Plasma (Citrate)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.5, high: 159.4, unit: "standard" },
        pediatric: { low: 34.0, high: 135.5, unit: "standard" },
        geriatric: { low: 44.6, high: 175.3, unit: "standard" }
      },
      female: {
        adult: { low: 39.1, high: 151.4, unit: "standard" },
        pediatric: { low: 33.1, high: 130.7, unit: "standard" },
        pregnancy: { low: 36.1, high: 183.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.0,
      panicHigh: 286.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1525,
    isActive: true
  },
  {
    id: "LOINC_1003",
    loincCode: "1003-5",
    testName: "Hematology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "HEMA_PARAM_3",
    category: "Hematology",
    specimen: "CSF",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.9, high: 85.8, unit: "standard" },
        pediatric: { low: 37.5, high: 72.9, unit: "standard" },
        geriatric: { low: 49.2, high: 94.4, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 81.5, unit: "standard" },
        pediatric: { low: 36.6, high: 70.4, unit: "standard" },
        pregnancy: { low: 39.9, high: 98.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 154.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1657,
    isActive: true
  },
  {
    id: "LOINC_1004",
    loincCode: "1004-2",
    testName: "Hematology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "HEMA_PARAM_4",
    category: "Hematology",
    specimen: "Throat Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.1, high: 198.8, unit: "standard" },
        pediatric: { low: 36.9, high: 169.0, unit: "standard" },
        geriatric: { low: 48.4, high: 218.7, unit: "standard" }
      },
      female: {
        adult: { low: 42.4, high: 188.9, unit: "standard" },
        pediatric: { low: 36.0, high: 163.0, unit: "standard" },
        pregnancy: { low: 39.2, high: 228.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.4,
      panicHigh: 357.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1633,
    isActive: true
  },
  {
    id: "LOINC_1005",
    loincCode: "1005-3",
    testName: "Hematology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "HEMA_PARAM_5",
    category: "Hematology",
    specimen: "Stool Sample",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.2, high: 58.3, unit: "standard" },
        pediatric: { low: 37.8, high: 49.6, unit: "standard" },
        geriatric: { low: 49.6, high: 64.1, unit: "standard" }
      },
      female: {
        adult: { low: 43.4, high: 55.4, unit: "standard" },
        pediatric: { low: 36.8, high: 47.8, unit: "standard" },
        pregnancy: { low: 40.1, high: 67.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.9,
      panicHigh: 104.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1666,
    isActive: true
  },
  {
    id: "LOINC_1006",
    loincCode: "1006-6",
    testName: "Hematology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "HEMA_PARAM_6",
    category: "Hematology",
    specimen: "Plasma (Heparin)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.7, high: 110.7, unit: "standard" },
        pediatric: { low: 23.8, high: 94.1, unit: "standard" },
        geriatric: { low: 31.2, high: 121.8, unit: "standard" }
      },
      female: {
        adult: { low: 27.3, high: 105.2, unit: "standard" },
        pediatric: { low: 23.2, high: 90.8, unit: "standard" },
        pregnancy: { low: 25.2, high: 127.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.9,
      panicHigh: 199.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1141,
    isActive: true
  },
  {
    id: "LOINC_1007",
    loincCode: "1007-5",
    testName: "Hematology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "HEMA_PARAM_7",
    category: "Hematology",
    specimen: "24-Hour Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.6, high: 93.2, unit: "standard" },
        pediatric: { low: 8.5, high: 79.2, unit: "standard" },
        geriatric: { low: 11.1, high: 102.5, unit: "standard" }
      },
      female: {
        adult: { low: 9.8, high: 88.5, unit: "standard" },
        pediatric: { low: 8.3, high: 76.4, unit: "standard" },
        pregnancy: { low: 9.0, high: 107.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.2,
      panicHigh: 167.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 568,
    isActive: true
  },
  {
    id: "LOINC_1008",
    loincCode: "1008-8",
    testName: "Hematology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "HEMA_PARAM_8",
    category: "Hematology",
    specimen: "Pleural Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.4, high: 37.6, unit: "standard" },
        pediatric: { low: 21.1, high: 32.0, unit: "standard" },
        geriatric: { low: 27.7, high: 41.4, unit: "standard" }
      },
      female: {
        adult: { low: 24.3, high: 35.7, unit: "standard" },
        pediatric: { low: 20.6, high: 30.8, unit: "standard" },
        pregnancy: { low: 22.4, high: 43.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 67.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1042,
    isActive: true
  },
  {
    id: "LOINC_1009",
    loincCode: "1009-6",
    testName: "Hematology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "HEMA_PARAM_9",
    category: "Hematology",
    specimen: "Tissue Biopsy",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.9, high: 48.2, unit: "standard" },
        pediatric: { low: 23.1, high: 41.0, unit: "standard" },
        geriatric: { low: 30.3, high: 53.0, unit: "standard" }
      },
      female: {
        adult: { low: 26.6, high: 45.8, unit: "standard" },
        pediatric: { low: 22.5, high: 39.5, unit: "standard" },
        pregnancy: { low: 24.6, high: 55.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.6,
      panicHigh: 86.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1117,
    isActive: true
  },
  {
    id: "LOINC_1010",
    loincCode: "1010-5",
    testName: "Hematology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "HEMA_PARAM_10",
    category: "Hematology",
    specimen: "Serum",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.4, high: 138.5, unit: "standard" },
        pediatric: { low: 34.7, high: 117.7, unit: "standard" },
        geriatric: { low: 45.6, high: 152.4, unit: "standard" }
      },
      female: {
        adult: { low: 39.9, high: 131.6, unit: "standard" },
        pediatric: { low: 33.9, high: 113.6, unit: "standard" },
        pregnancy: { low: 36.9, high: 159.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.4,
      panicHigh: 249.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1552,
    isActive: true
  },
  {
    id: "LOINC_1011",
    loincCode: "1011-9",
    testName: "Hematology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "HEMA_PARAM_11",
    category: "Hematology",
    specimen: "Random Urine",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.3, high: 43.1, unit: "standard" },
        pediatric: { low: 18.6, high: 36.6, unit: "standard" },
        geriatric: { low: 24.5, high: 47.4, unit: "standard" }
      },
      female: {
        adult: { low: 21.4, high: 40.9, unit: "standard" },
        pediatric: { low: 18.2, high: 35.3, unit: "standard" },
        pregnancy: { low: 19.8, high: 49.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.3,
      panicHigh: 77.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 949,
    isActive: true
  },
  {
    id: "LOINC_1012",
    loincCode: "1012-5",
    testName: "Hematology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "HEMA_PARAM_12",
    category: "Hematology",
    specimen: "Synovial Fluid",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 14.5, high: 62.7, unit: "standard" },
        pediatric: { low: 11.6, high: 53.3, unit: "standard" },
        geriatric: { low: 15.2, high: 69.0, unit: "standard" }
      },
      female: {
        adult: { low: 13.3, high: 59.6, unit: "standard" },
        pediatric: { low: 11.3, high: 51.4, unit: "standard" },
        pregnancy: { low: 12.3, high: 72.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.8,
      panicHigh: 112.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 685,
    isActive: true
  },
  {
    id: "LOINC_1013",
    loincCode: "1013-8",
    testName: "Hematology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "HEMA_PARAM_13",
    category: "Hematology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.6, high: 153.7, unit: "standard" },
        pediatric: { low: 27.7, high: 130.6, unit: "standard" },
        geriatric: { low: 36.3, high: 169.1, unit: "standard" }
      },
      female: {
        adult: { low: 31.8, high: 146.0, unit: "standard" },
        pediatric: { low: 27.0, high: 126.0, unit: "standard" },
        pregnancy: { low: 29.4, high: 176.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.8,
      panicHigh: 276.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1288,
    isActive: true
  },
  {
    id: "LOINC_1014",
    loincCode: "1014-6",
    testName: "Hematology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "HEMA_PARAM_14",
    category: "Hematology",
    specimen: "Whole Blood (EDTA)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 13.0, high: 146.4, unit: "standard" },
        pediatric: { low: 10.4, high: 124.4, unit: "standard" },
        geriatric: { low: 13.7, high: 161.0, unit: "standard" }
      },
      female: {
        adult: { low: 12.0, high: 139.1, unit: "standard" },
        pediatric: { low: 10.1, high: 120.0, unit: "standard" },
        pregnancy: { low: 11.0, high: 168.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.2,
      panicHigh: 263.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 640,
    isActive: true
  },
  {
    id: "LOINC_1015",
    loincCode: "1015-5",
    testName: "Hematology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "HEMA_PARAM_15",
    category: "Hematology",
    specimen: "Plasma (Citrate)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 16.0, high: 102.6, unit: "standard" },
        pediatric: { low: 12.8, high: 87.2, unit: "standard" },
        geriatric: { low: 16.8, high: 112.9, unit: "standard" }
      },
      female: {
        adult: { low: 14.7, high: 97.5, unit: "standard" },
        pediatric: { low: 12.5, high: 84.1, unit: "standard" },
        pregnancy: { low: 13.6, high: 118.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 184.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 730,
    isActive: true
  },
  {
    id: "LOINC_1016",
    loincCode: "1016-7",
    testName: "Hematology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "HEMA_PARAM_16",
    category: "Hematology",
    specimen: "CSF",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.3, high: 104.6, unit: "standard" },
        pediatric: { low: 17.8, high: 88.9, unit: "standard" },
        geriatric: { low: 23.4, high: 115.1, unit: "standard" }
      },
      female: {
        adult: { low: 20.5, high: 99.4, unit: "standard" },
        pediatric: { low: 17.4, high: 85.8, unit: "standard" },
        pregnancy: { low: 19.0, high: 120.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.9,
      panicHigh: 188.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 919,
    isActive: true
  },
  {
    id: "LOINC_1017",
    loincCode: "1017-9",
    testName: "Hematology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "HEMA_PARAM_17",
    category: "Hematology",
    specimen: "Throat Swab",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.8, high: 76.2, unit: "standard" },
        pediatric: { low: 22.2, high: 64.8, unit: "standard" },
        geriatric: { low: 29.2, high: 83.8, unit: "standard" }
      },
      female: {
        adult: { low: 25.6, high: 72.4, unit: "standard" },
        pediatric: { low: 21.7, high: 62.5, unit: "standard" },
        pregnancy: { low: 23.6, high: 87.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.1,
      panicHigh: 137.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1084,
    isActive: true
  },
  {
    id: "LOINC_1018",
    loincCode: "1018-1",
    testName: "Hematology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "HEMA_PARAM_18",
    category: "Hematology",
    specimen: "Stool Sample",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 27.0, high: 165.3, unit: "standard" },
        pediatric: { low: 21.6, high: 140.5, unit: "standard" },
        geriatric: { low: 28.4, high: 181.8, unit: "standard" }
      },
      female: {
        adult: { low: 24.8, high: 157.0, unit: "standard" },
        pediatric: { low: 21.1, high: 135.5, unit: "standard" },
        pregnancy: { low: 22.9, high: 190.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 297.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1060,
    isActive: true
  },
  {
    id: "LOINC_1019",
    loincCode: "1019-6",
    testName: "Hematology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "HEMA_PARAM_19",
    category: "Hematology",
    specimen: "Plasma (Heparin)",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 38.5, high: 189.0, unit: "standard" },
        pediatric: { low: 30.8, high: 160.7, unit: "standard" },
        geriatric: { low: 40.4, high: 207.9, unit: "standard" }
      },
      female: {
        adult: { low: 35.4, high: 179.5, unit: "standard" },
        pediatric: { low: 30.0, high: 155.0, unit: "standard" },
        pregnancy: { low: 32.7, high: 217.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.4,
      panicHigh: 340.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1405,
    isActive: true
  },
  {
    id: "LOINC_1020",
    loincCode: "1020-4",
    testName: "Hematology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "HEMA_PARAM_20",
    category: "Hematology",
    specimen: "24-Hour Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.5, high: 128.8, unit: "standard" },
        pediatric: { low: 13.2, high: 109.5, unit: "standard" },
        geriatric: { low: 17.3, high: 141.7, unit: "standard" }
      },
      female: {
        adult: { low: 15.2, high: 122.4, unit: "standard" },
        pediatric: { low: 12.9, high: 105.6, unit: "standard" },
        pregnancy: { low: 14.0, high: 148.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.6,
      panicHigh: 231.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 745,
    isActive: true
  },
  {
    id: "LOINC_1021",
    loincCode: "1021-4",
    testName: "Hematology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "HEMA_PARAM_21",
    category: "Hematology",
    specimen: "Pleural Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 35.6, high: 187.0, unit: "standard" },
        pediatric: { low: 28.5, high: 158.9, unit: "standard" },
        geriatric: { low: 37.4, high: 205.7, unit: "standard" }
      },
      female: {
        adult: { low: 32.8, high: 177.7, unit: "standard" },
        pediatric: { low: 27.8, high: 153.3, unit: "standard" },
        pregnancy: { low: 30.3, high: 215.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.2,
      panicHigh: 336.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1318,
    isActive: true
  },
  {
    id: "LOINC_1022",
    loincCode: "1022-8",
    testName: "Hematology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "HEMA_PARAM_22",
    category: "Hematology",
    specimen: "Tissue Biopsy",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.9, high: 123.8, unit: "standard" },
        pediatric: { low: 7.1, high: 105.2, unit: "standard" },
        geriatric: { low: 9.3, high: 136.2, unit: "standard" }
      },
      female: {
        adult: { low: 8.2, high: 117.6, unit: "standard" },
        pediatric: { low: 6.9, high: 101.5, unit: "standard" },
        pregnancy: { low: 7.6, high: 142.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.6,
      panicHigh: 222.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 517,
    isActive: true
  },
  {
    id: "LOINC_1023",
    loincCode: "1023-7",
    testName: "Hematology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "HEMA_PARAM_23",
    category: "Hematology",
    specimen: "Serum",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 3.0, high: 144.6, unit: "standard" },
        pediatric: { low: 2.4, high: 122.9, unit: "standard" },
        geriatric: { low: 3.2, high: 159.1, unit: "standard" }
      },
      female: {
        adult: { low: 2.8, high: 137.4, unit: "standard" },
        pediatric: { low: 2.3, high: 118.6, unit: "standard" },
        pregnancy: { low: 2.5, high: 166.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.2,
      panicHigh: 260.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 340,
    isActive: true
  },
  {
    id: "LOINC_1024",
    loincCode: "1024-1",
    testName: "Hematology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "HEMA_PARAM_24",
    category: "Hematology",
    specimen: "Random Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.9, high: 106.7, unit: "standard" },
        pediatric: { low: 18.3, high: 90.7, unit: "standard" },
        geriatric: { low: 24.0, high: 117.4, unit: "standard" }
      },
      female: {
        adult: { low: 21.1, high: 101.4, unit: "standard" },
        pediatric: { low: 17.9, high: 87.5, unit: "standard" },
        pregnancy: { low: 19.5, high: 122.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.2,
      panicHigh: 192.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 937,
    isActive: true
  },
  {
    id: "LOINC_1025",
    loincCode: "1025-8",
    testName: "Hematology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "HEMA_PARAM_25",
    category: "Hematology",
    specimen: "Synovial Fluid",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.2, high: 80.7, unit: "standard" },
        pediatric: { low: 17.8, high: 68.6, unit: "standard" },
        geriatric: { low: 23.3, high: 88.8, unit: "standard" }
      },
      female: {
        adult: { low: 20.4, high: 76.7, unit: "standard" },
        pediatric: { low: 17.3, high: 66.2, unit: "standard" },
        pregnancy: { low: 18.9, high: 92.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.9,
      panicHigh: 145.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 916,
    isActive: true
  },
  {
    id: "LOINC_1026",
    loincCode: "1026-5",
    testName: "Hematology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "HEMA_PARAM_26",
    category: "Hematology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 5.0, high: 121.1, unit: "standard" },
        pediatric: { low: 4.0, high: 102.9, unit: "standard" },
        geriatric: { low: 5.3, high: 133.2, unit: "standard" }
      },
      female: {
        adult: { low: 4.6, high: 115.0, unit: "standard" },
        pediatric: { low: 3.9, high: 99.3, unit: "standard" },
        pregnancy: { low: 4.3, high: 139.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.0,
      panicHigh: 218.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 400,
    isActive: true
  },
  {
    id: "LOINC_1027",
    loincCode: "1027-3",
    testName: "Hematology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "HEMA_PARAM_27",
    category: "Hematology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.0, high: 46.1, unit: "standard" },
        pediatric: { low: 28.8, high: 39.2, unit: "standard" },
        geriatric: { low: 37.8, high: 50.7, unit: "standard" }
      },
      female: {
        adult: { low: 33.1, high: 43.8, unit: "standard" },
        pediatric: { low: 28.1, high: 37.8, unit: "standard" },
        pregnancy: { low: 30.6, high: 53.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.4,
      panicHigh: 83.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1330,
    isActive: true
  },
  {
    id: "LOINC_1028",
    loincCode: "1028-4",
    testName: "Hematology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "HEMA_PARAM_28",
    category: "Hematology",
    specimen: "Plasma (Citrate)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 44.7, high: 95.1, unit: "standard" },
        pediatric: { low: 35.8, high: 80.8, unit: "standard" },
        geriatric: { low: 46.9, high: 104.6, unit: "standard" }
      },
      female: {
        adult: { low: 41.1, high: 90.3, unit: "standard" },
        pediatric: { low: 34.9, high: 78.0, unit: "standard" },
        pregnancy: { low: 38.0, high: 109.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.9,
      panicHigh: 171.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1591,
    isActive: true
  },
  {
    id: "LOINC_1029",
    loincCode: "1029-4",
    testName: "Hematology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "HEMA_PARAM_29",
    category: "Hematology",
    specimen: "CSF",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.4, high: 65.7, unit: "standard" },
        pediatric: { low: 21.9, high: 55.8, unit: "standard" },
        geriatric: { low: 28.8, high: 72.3, unit: "standard" }
      },
      female: {
        adult: { low: 25.2, high: 62.4, unit: "standard" },
        pediatric: { low: 21.4, high: 53.9, unit: "standard" },
        pregnancy: { low: 23.3, high: 75.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.0,
      panicHigh: 118.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1072,
    isActive: true
  },
  {
    id: "LOINC_1030",
    loincCode: "1030-8",
    testName: "Hematology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "HEMA_PARAM_30",
    category: "Hematology",
    specimen: "Throat Swab",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.8, high: 167.5, unit: "standard" },
        pediatric: { low: 39.8, high: 142.4, unit: "standard" },
        geriatric: { low: 52.3, high: 184.3, unit: "standard" }
      },
      female: {
        adult: { low: 45.8, high: 159.1, unit: "standard" },
        pediatric: { low: 38.8, high: 137.3, unit: "standard" },
        pregnancy: { low: 42.3, high: 192.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.9,
      panicHigh: 301.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1744,
    isActive: true
  },
  {
    id: "LOINC_1031",
    loincCode: "1031-5",
    testName: "Hematology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "HEMA_PARAM_31",
    category: "Hematology",
    specimen: "Stool Sample",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.3, high: 42.5, unit: "standard" },
        pediatric: { low: 26.6, high: 36.1, unit: "standard" },
        geriatric: { low: 35.0, high: 46.8, unit: "standard" }
      },
      female: {
        adult: { low: 30.6, high: 40.4, unit: "standard" },
        pediatric: { low: 26.0, high: 34.9, unit: "standard" },
        pregnancy: { low: 28.3, high: 48.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.3,
      panicHigh: 76.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1249,
    isActive: true
  },
  {
    id: "LOINC_1032",
    loincCode: "1032-8",
    testName: "Hematology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "HEMA_PARAM_32",
    category: "Hematology",
    specimen: "Plasma (Heparin)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.6, high: 93.5, unit: "standard" },
        pediatric: { low: 7.7, high: 79.5, unit: "standard" },
        geriatric: { low: 10.1, high: 102.9, unit: "standard" }
      },
      female: {
        adult: { low: 8.8, high: 88.8, unit: "standard" },
        pediatric: { low: 7.5, high: 76.7, unit: "standard" },
        pregnancy: { low: 8.2, high: 107.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.8,
      panicHigh: 168.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 538,
    isActive: true
  },
  {
    id: "LOINC_1033",
    loincCode: "1033-1",
    testName: "Hematology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "HEMA_PARAM_33",
    category: "Hematology",
    specimen: "24-Hour Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.8, high: 158.3, unit: "standard" },
        pediatric: { low: 38.2, high: 134.6, unit: "standard" },
        geriatric: { low: 50.2, high: 174.1, unit: "standard" }
      },
      female: {
        adult: { low: 44.0, high: 150.4, unit: "standard" },
        pediatric: { low: 37.3, high: 129.8, unit: "standard" },
        pregnancy: { low: 40.6, high: 182.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 284.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1684,
    isActive: true
  },
  {
    id: "LOINC_1034",
    loincCode: "1034-4",
    testName: "Hematology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "HEMA_PARAM_34",
    category: "Hematology",
    specimen: "Pleural Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.0, high: 186.7, unit: "standard" },
        pediatric: { low: 38.4, high: 158.7, unit: "standard" },
        geriatric: { low: 50.4, high: 205.4, unit: "standard" }
      },
      female: {
        adult: { low: 44.2, high: 177.4, unit: "standard" },
        pediatric: { low: 37.4, high: 153.1, unit: "standard" },
        pregnancy: { low: 40.8, high: 214.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 336.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1690,
    isActive: true
  },
  {
    id: "LOINC_1035",
    loincCode: "1035-3",
    testName: "Hematology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "HEMA_PARAM_35",
    category: "Hematology",
    specimen: "Tissue Biopsy",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.5, high: 94.3, unit: "standard" },
        pediatric: { low: 14.8, high: 80.2, unit: "standard" },
        geriatric: { low: 19.4, high: 103.7, unit: "standard" }
      },
      female: {
        adult: { low: 17.0, high: 89.6, unit: "standard" },
        pediatric: { low: 14.4, high: 77.3, unit: "standard" },
        pregnancy: { low: 15.7, high: 108.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 169.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 805,
    isActive: true
  },
  {
    id: "LOINC_1036",
    loincCode: "1036-2",
    testName: "Hematology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "HEMA_PARAM_36",
    category: "Hematology",
    specimen: "Serum",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 17.6, high: 79.6, unit: "standard" },
        pediatric: { low: 14.1, high: 67.7, unit: "standard" },
        geriatric: { low: 18.5, high: 87.6, unit: "standard" }
      },
      female: {
        adult: { low: 16.2, high: 75.6, unit: "standard" },
        pediatric: { low: 13.7, high: 65.3, unit: "standard" },
        pregnancy: { low: 15.0, high: 91.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.0,
      panicHigh: 143.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 778,
    isActive: true
  },
  {
    id: "LOINC_1037",
    loincCode: "1037-9",
    testName: "Hematology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "HEMA_PARAM_37",
    category: "Hematology",
    specimen: "Random Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.0, high: 85.7, unit: "standard" },
        pediatric: { low: 32.8, high: 72.8, unit: "standard" },
        geriatric: { low: 43.1, high: 94.3, unit: "standard" }
      },
      female: {
        adult: { low: 37.7, high: 81.4, unit: "standard" },
        pediatric: { low: 32.0, high: 70.3, unit: "standard" },
        pregnancy: { low: 34.9, high: 98.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.4,
      panicHigh: 154.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1480,
    isActive: true
  },
  {
    id: "LOINC_1038",
    loincCode: "1038-3",
    testName: "Hematology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "HEMA_PARAM_38",
    category: "Hematology",
    specimen: "Synovial Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.0, high: 137.9, unit: "standard" },
        pediatric: { low: 16.0, high: 117.2, unit: "standard" },
        geriatric: { low: 21.0, high: 151.7, unit: "standard" }
      },
      female: {
        adult: { low: 18.4, high: 131.0, unit: "standard" },
        pediatric: { low: 15.6, high: 113.1, unit: "standard" },
        pregnancy: { low: 17.0, high: 158.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.0,
      panicHigh: 248.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 850,
    isActive: true
  },
  {
    id: "LOINC_1039",
    loincCode: "1039-8",
    testName: "Hematology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "HEMA_PARAM_39",
    category: "Hematology",
    specimen: "Nasopharyngeal Swab",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.9, high: 64.9, unit: "standard" },
        pediatric: { low: 37.5, high: 55.2, unit: "standard" },
        geriatric: { low: 49.2, high: 71.4, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 61.7, unit: "standard" },
        pediatric: { low: 36.6, high: 53.2, unit: "standard" },
        pregnancy: { low: 39.9, high: 74.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 116.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1657,
    isActive: true
  },
  {
    id: "LOINC_1040",
    loincCode: "1040-3",
    testName: "Hematology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "HEMA_PARAM_40",
    category: "Hematology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.7, high: 174.0, unit: "standard" },
        pediatric: { low: 16.6, high: 147.9, unit: "standard" },
        geriatric: { low: 21.7, high: 191.4, unit: "standard" }
      },
      female: {
        adult: { low: 19.0, high: 165.3, unit: "standard" },
        pediatric: { low: 16.1, high: 142.7, unit: "standard" },
        pregnancy: { low: 17.6, high: 200.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.3,
      panicHigh: 313.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 871,
    isActive: true
  },
  {
    id: "LOINC_1041",
    loincCode: "1041-8",
    testName: "Hematology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "HEMA_PARAM_41",
    category: "Hematology",
    specimen: "Plasma (Citrate)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.8, high: 32.6, unit: "standard" },
        pediatric: { low: 20.6, high: 27.7, unit: "standard" },
        geriatric: { low: 27.1, high: 35.9, unit: "standard" }
      },
      female: {
        adult: { low: 23.7, high: 31.0, unit: "standard" },
        pediatric: { low: 20.1, high: 26.7, unit: "standard" },
        pregnancy: { low: 21.9, high: 37.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.3,
      panicHigh: 58.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1024,
    isActive: true
  },
  {
    id: "LOINC_1042",
    loincCode: "1042-4",
    testName: "Hematology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "HEMA_PARAM_42",
    category: "Hematology",
    specimen: "CSF",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.3, high: 107.6, unit: "standard" },
        pediatric: { low: 14.6, high: 91.5, unit: "standard" },
        geriatric: { low: 19.2, high: 118.4, unit: "standard" }
      },
      female: {
        adult: { low: 16.8, high: 102.2, unit: "standard" },
        pediatric: { low: 14.3, high: 88.2, unit: "standard" },
        pregnancy: { low: 15.6, high: 123.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.3,
      panicHigh: 193.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 799,
    isActive: true
  },
  {
    id: "LOINC_1043",
    loincCode: "1043-2",
    testName: "Hematology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "HEMA_PARAM_43",
    category: "Hematology",
    specimen: "Throat Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.2, high: 100.9, unit: "standard" },
        pediatric: { low: 21.8, high: 85.8, unit: "standard" },
        geriatric: { low: 28.6, high: 111.0, unit: "standard" }
      },
      female: {
        adult: { low: 25.0, high: 95.9, unit: "standard" },
        pediatric: { low: 21.2, high: 82.7, unit: "standard" },
        pregnancy: { low: 23.1, high: 116.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.9,
      panicHigh: 181.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1066,
    isActive: true
  },
  {
    id: "LOINC_1044",
    loincCode: "1044-8",
    testName: "Hematology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "HEMA_PARAM_44",
    category: "Hematology",
    specimen: "Stool Sample",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.6, high: 111.1, unit: "standard" },
        pediatric: { low: 38.1, high: 94.4, unit: "standard" },
        geriatric: { low: 50.0, high: 122.2, unit: "standard" }
      },
      female: {
        adult: { low: 43.8, high: 105.5, unit: "standard" },
        pediatric: { low: 37.1, high: 91.1, unit: "standard" },
        pregnancy: { low: 40.5, high: 127.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 200.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1678,
    isActive: true
  },
  {
    id: "LOINC_1045",
    loincCode: "1045-5",
    testName: "Hematology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "HEMA_PARAM_45",
    category: "Hematology",
    specimen: "Plasma (Heparin)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.3, high: 104.3, unit: "standard" },
        pediatric: { low: 21.0, high: 88.7, unit: "standard" },
        geriatric: { low: 27.6, high: 114.7, unit: "standard" }
      },
      female: {
        adult: { low: 24.2, high: 99.1, unit: "standard" },
        pediatric: { low: 20.5, high: 85.5, unit: "standard" },
        pregnancy: { low: 22.4, high: 119.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.5,
      panicHigh: 187.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1039,
    isActive: true
  },
  {
    id: "LOINC_1046",
    loincCode: "1046-4",
    testName: "Hematology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "HEMA_PARAM_46",
    category: "Hematology",
    specimen: "24-Hour Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.1, high: 165.0, unit: "standard" },
        pediatric: { low: 33.7, high: 140.3, unit: "standard" },
        geriatric: { low: 44.2, high: 181.5, unit: "standard" }
      },
      female: {
        adult: { low: 38.7, high: 156.8, unit: "standard" },
        pediatric: { low: 32.8, high: 135.3, unit: "standard" },
        pregnancy: { low: 35.8, high: 189.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.8,
      panicHigh: 297.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1513,
    isActive: true
  },
  {
    id: "LOINC_1047",
    loincCode: "1047-4",
    testName: "Hematology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "HEMA_PARAM_47",
    category: "Hematology",
    specimen: "Pleural Fluid",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 48.5, high: 114.7, unit: "standard" },
        pediatric: { low: 38.8, high: 97.5, unit: "standard" },
        geriatric: { low: 50.9, high: 126.2, unit: "standard" }
      },
      female: {
        adult: { low: 44.6, high: 109.0, unit: "standard" },
        pediatric: { low: 37.8, high: 94.1, unit: "standard" },
        pregnancy: { low: 41.2, high: 131.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.4,
      panicHigh: 206.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1705,
    isActive: true
  },
  {
    id: "LOINC_1048",
    loincCode: "1048-4",
    testName: "Hematology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "HEMA_PARAM_48",
    category: "Hematology",
    specimen: "Tissue Biopsy",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.2, high: 51.4, unit: "standard" },
        pediatric: { low: 19.4, high: 43.7, unit: "standard" },
        geriatric: { low: 25.4, high: 56.5, unit: "standard" }
      },
      female: {
        adult: { low: 22.3, high: 48.8, unit: "standard" },
        pediatric: { low: 18.9, high: 42.1, unit: "standard" },
        pregnancy: { low: 20.6, high: 59.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.7,
      panicHigh: 92.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 976,
    isActive: true
  },
  {
    id: "LOINC_1049",
    loincCode: "1049-8",
    testName: "Hematology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "HEMA_PARAM_49",
    category: "Hematology",
    specimen: "Serum",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.3, high: 143.7, unit: "standard" },
        pediatric: { low: 17.8, high: 122.1, unit: "standard" },
        geriatric: { low: 23.4, high: 158.1, unit: "standard" }
      },
      female: {
        adult: { low: 20.5, high: 136.5, unit: "standard" },
        pediatric: { low: 17.4, high: 117.8, unit: "standard" },
        pregnancy: { low: 19.0, high: 165.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.9,
      panicHigh: 258.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 919,
    isActive: true
  },
  {
    id: "LOINC_1050",
    loincCode: "1050-3",
    testName: "Hematology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "HEMA_PARAM_50",
    category: "Hematology",
    specimen: "Random Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.5, high: 165.7, unit: "standard" },
        pediatric: { low: 9.2, high: 140.8, unit: "standard" },
        geriatric: { low: 12.1, high: 182.3, unit: "standard" }
      },
      female: {
        adult: { low: 10.6, high: 157.4, unit: "standard" },
        pediatric: { low: 9.0, high: 135.9, unit: "standard" },
        pregnancy: { low: 9.8, high: 190.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.6,
      panicHigh: 298.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 595,
    isActive: true
  },
  {
    id: "LOINC_1051",
    loincCode: "1051-3",
    testName: "Hematology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "HEMA_PARAM_51",
    category: "Hematology",
    specimen: "Synovial Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.5, high: 154.9, unit: "standard" },
        pediatric: { low: 38.0, high: 131.7, unit: "standard" },
        geriatric: { low: 49.9, high: 170.4, unit: "standard" }
      },
      female: {
        adult: { low: 43.7, high: 147.2, unit: "standard" },
        pediatric: { low: 37.1, high: 127.0, unit: "standard" },
        pregnancy: { low: 40.4, high: 178.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 278.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1675,
    isActive: true
  },
  {
    id: "LOINC_1052",
    loincCode: "1052-6",
    testName: "Hematology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "HEMA_PARAM_52",
    category: "Hematology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.0, high: 36.8, unit: "standard" },
        pediatric: { low: 23.2, high: 31.3, unit: "standard" },
        geriatric: { low: 30.5, high: 40.5, unit: "standard" }
      },
      female: {
        adult: { low: 26.7, high: 35.0, unit: "standard" },
        pediatric: { low: 22.6, high: 30.2, unit: "standard" },
        pregnancy: { low: 24.6, high: 42.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.6,
      panicHigh: 66.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1120,
    isActive: true
  },
  {
    id: "LOINC_1053",
    loincCode: "1053-2",
    testName: "Hematology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "HEMA_PARAM_53",
    category: "Hematology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 37.1, high: 118.5, unit: "standard" },
        pediatric: { low: 29.7, high: 100.7, unit: "standard" },
        geriatric: { low: 39.0, high: 130.4, unit: "standard" }
      },
      female: {
        adult: { low: 34.1, high: 112.6, unit: "standard" },
        pediatric: { low: 28.9, high: 97.2, unit: "standard" },
        pregnancy: { low: 31.5, high: 136.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.8,
      panicHigh: 213.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1363,
    isActive: true
  },
  {
    id: "LOINC_1054",
    loincCode: "1054-3",
    testName: "Hematology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "HEMA_PARAM_54",
    category: "Hematology",
    specimen: "Plasma (Citrate)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.7, high: 95.3, unit: "standard" },
        pediatric: { low: 39.8, high: 81.0, unit: "standard" },
        geriatric: { low: 52.2, high: 104.8, unit: "standard" }
      },
      female: {
        adult: { low: 45.7, high: 90.5, unit: "standard" },
        pediatric: { low: 38.8, high: 78.1, unit: "standard" },
        pregnancy: { low: 42.2, high: 109.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.9,
      panicHigh: 171.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1741,
    isActive: true
  },
  {
    id: "LOINC_1055",
    loincCode: "1055-4",
    testName: "Hematology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "HEMA_PARAM_55",
    category: "Hematology",
    specimen: "CSF",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.3, high: 103.5, unit: "standard" },
        pediatric: { low: 37.8, high: 88.0, unit: "standard" },
        geriatric: { low: 49.7, high: 113.9, unit: "standard" }
      },
      female: {
        adult: { low: 43.5, high: 98.3, unit: "standard" },
        pediatric: { low: 36.9, high: 84.9, unit: "standard" },
        pregnancy: { low: 40.2, high: 119.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.9,
      panicHigh: 186.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1669,
    isActive: true
  },
  {
    id: "LOINC_1056",
    loincCode: "1056-7",
    testName: "Hematology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "HEMA_PARAM_56",
    category: "Hematology",
    specimen: "Throat Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 36.6, high: 188.2, unit: "standard" },
        pediatric: { low: 29.3, high: 160.0, unit: "standard" },
        geriatric: { low: 38.4, high: 207.0, unit: "standard" }
      },
      female: {
        adult: { low: 33.7, high: 178.8, unit: "standard" },
        pediatric: { low: 28.5, high: 154.3, unit: "standard" },
        pregnancy: { low: 31.1, high: 216.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.6,
      panicHigh: 338.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1348,
    isActive: true
  },
  {
    id: "LOINC_1057",
    loincCode: "1057-6",
    testName: "Hematology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "HEMA_PARAM_57",
    category: "Hematology",
    specimen: "Stool Sample",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.8, high: 74.5, unit: "standard" },
        pediatric: { low: 32.6, high: 63.3, unit: "standard" },
        geriatric: { low: 42.8, high: 82.0, unit: "standard" }
      },
      female: {
        adult: { low: 37.5, high: 70.8, unit: "standard" },
        pediatric: { low: 31.8, high: 61.1, unit: "standard" },
        pregnancy: { low: 34.7, high: 85.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.3,
      panicHigh: 134.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1474,
    isActive: true
  },
  {
    id: "LOINC_1058",
    loincCode: "1058-4",
    testName: "Hematology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "HEMA_PARAM_58",
    category: "Hematology",
    specimen: "Plasma (Heparin)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.6, high: 60.2, unit: "standard" },
        pediatric: { low: 15.7, high: 51.2, unit: "standard" },
        geriatric: { low: 20.6, high: 66.2, unit: "standard" }
      },
      female: {
        adult: { low: 18.0, high: 57.2, unit: "standard" },
        pediatric: { low: 15.3, high: 49.4, unit: "standard" },
        pregnancy: { low: 16.7, high: 69.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 108.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 838,
    isActive: true
  },
  {
    id: "LOINC_1059",
    loincCode: "1059-7",
    testName: "Hematology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "HEMA_PARAM_59",
    category: "Hematology",
    specimen: "24-Hour Urine",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.4, high: 123.0, unit: "standard" },
        pediatric: { low: 37.1, high: 104.5, unit: "standard" },
        geriatric: { low: 48.7, high: 135.3, unit: "standard" }
      },
      female: {
        adult: { low: 42.7, high: 116.8, unit: "standard" },
        pediatric: { low: 36.2, high: 100.9, unit: "standard" },
        pregnancy: { low: 39.4, high: 141.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.6,
      panicHigh: 221.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1642,
    isActive: true
  },
  {
    id: "LOINC_1060",
    loincCode: "1060-9",
    testName: "Hematology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "HEMA_PARAM_60",
    category: "Hematology",
    specimen: "Pleural Fluid",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 12.9, high: 140.0, unit: "standard" },
        pediatric: { low: 10.3, high: 119.0, unit: "standard" },
        geriatric: { low: 13.5, high: 154.0, unit: "standard" }
      },
      female: {
        adult: { low: 11.9, high: 133.0, unit: "standard" },
        pediatric: { low: 10.1, high: 114.8, unit: "standard" },
        pregnancy: { low: 11.0, high: 161.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.2,
      panicHigh: 252.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 637,
    isActive: true
  },
  {
    id: "LOINC_1061",
    loincCode: "1061-7",
    testName: "Hematology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "HEMA_PARAM_61",
    category: "Hematology",
    specimen: "Tissue Biopsy",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.2, high: 129.4, unit: "standard" },
        pediatric: { low: 27.4, high: 110.0, unit: "standard" },
        geriatric: { low: 35.9, high: 142.3, unit: "standard" }
      },
      female: {
        adult: { low: 31.5, high: 122.9, unit: "standard" },
        pediatric: { low: 26.7, high: 106.1, unit: "standard" },
        pregnancy: { low: 29.1, high: 148.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.7,
      panicHigh: 232.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1276,
    isActive: true
  },
  {
    id: "LOINC_1062",
    loincCode: "1062-3",
    testName: "Hematology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "HEMA_PARAM_62",
    category: "Hematology",
    specimen: "Serum",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 7.0, high: 80.6, unit: "standard" },
        pediatric: { low: 5.6, high: 68.5, unit: "standard" },
        geriatric: { low: 7.4, high: 88.7, unit: "standard" }
      },
      female: {
        adult: { low: 6.4, high: 76.6, unit: "standard" },
        pediatric: { low: 5.5, high: 66.1, unit: "standard" },
        pregnancy: { low: 6.0, high: 92.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.8,
      panicHigh: 145.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 460,
    isActive: true
  },
  {
    id: "LOINC_1063",
    loincCode: "1063-4",
    testName: "Hematology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "HEMA_PARAM_63",
    category: "Hematology",
    specimen: "Random Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 48.4, high: 84.1, unit: "standard" },
        pediatric: { low: 38.7, high: 71.5, unit: "standard" },
        geriatric: { low: 50.8, high: 92.5, unit: "standard" }
      },
      female: {
        adult: { low: 44.5, high: 79.9, unit: "standard" },
        pediatric: { low: 37.8, high: 69.0, unit: "standard" },
        pregnancy: { low: 41.1, high: 96.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.4,
      panicHigh: 151.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1702,
    isActive: true
  },
  {
    id: "LOINC_1064",
    loincCode: "1064-3",
    testName: "Hematology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "HEMA_PARAM_64",
    category: "Hematology",
    specimen: "Synovial Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.5, high: 177.8, unit: "standard" },
        pediatric: { low: 38.0, high: 151.1, unit: "standard" },
        geriatric: { low: 49.9, high: 195.6, unit: "standard" }
      },
      female: {
        adult: { low: 43.7, high: 168.9, unit: "standard" },
        pediatric: { low: 37.1, high: 145.8, unit: "standard" },
        pregnancy: { low: 40.4, high: 204.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 320.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1675,
    isActive: true
  },
  {
    id: "LOINC_1065",
    loincCode: "1065-9",
    testName: "Hematology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "HEMA_PARAM_65",
    category: "Hematology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.2, high: 127.9, unit: "standard" },
        pediatric: { low: 29.0, high: 108.7, unit: "standard" },
        geriatric: { low: 38.0, high: 140.7, unit: "standard" }
      },
      female: {
        adult: { low: 33.3, high: 121.5, unit: "standard" },
        pediatric: { low: 28.2, high: 104.9, unit: "standard" },
        pregnancy: { low: 30.8, high: 147.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.5,
      panicHigh: 230.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in hematology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in hematology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1336,
    isActive: true
  },
  {
    id: "LOINC_1066",
    loincCode: "1066-6",
    testName: "Biochemistry Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "BIOC_PARAM_1",
    category: "Biochemistry",
    specimen: "Whole Blood (EDTA)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.8, high: 53.4, unit: "standard" },
        pediatric: { low: 33.4, high: 45.4, unit: "standard" },
        geriatric: { low: 43.9, high: 58.7, unit: "standard" }
      },
      female: {
        adult: { low: 38.5, high: 50.7, unit: "standard" },
        pediatric: { low: 32.6, high: 43.8, unit: "standard" },
        pregnancy: { low: 35.5, high: 61.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.7,
      panicHigh: 96.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1504,
    isActive: true
  },
  {
    id: "LOINC_1067",
    loincCode: "1067-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "BIOC_PARAM_2",
    category: "Biochemistry",
    specimen: "Plasma (Citrate)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.4, high: 155.4, unit: "standard" },
        pediatric: { low: 30.7, high: 132.1, unit: "standard" },
        geriatric: { low: 40.3, high: 170.9, unit: "standard" }
      },
      female: {
        adult: { low: 35.3, high: 147.6, unit: "standard" },
        pediatric: { low: 30.0, high: 127.4, unit: "standard" },
        pregnancy: { low: 32.6, high: 178.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.4,
      panicHigh: 279.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1402,
    isActive: true
  },
  {
    id: "LOINC_1068",
    loincCode: "1068-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "BIOC_PARAM_3",
    category: "Biochemistry",
    specimen: "CSF",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.3, high: 53.5, unit: "standard" },
        pediatric: { low: 21.0, high: 45.5, unit: "standard" },
        geriatric: { low: 27.6, high: 58.9, unit: "standard" }
      },
      female: {
        adult: { low: 24.2, high: 50.8, unit: "standard" },
        pediatric: { low: 20.5, high: 43.9, unit: "standard" },
        pregnancy: { low: 22.4, high: 61.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.5,
      panicHigh: 96.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1039,
    isActive: true
  },
  {
    id: "LOINC_1069",
    loincCode: "1069-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "BIOC_PARAM_4",
    category: "Biochemistry",
    specimen: "Throat Swab",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.6, high: 160.1, unit: "standard" },
        pediatric: { low: 39.7, high: 136.1, unit: "standard" },
        geriatric: { low: 52.1, high: 176.1, unit: "standard" }
      },
      female: {
        adult: { low: 45.6, high: 152.1, unit: "standard" },
        pediatric: { low: 38.7, high: 131.3, unit: "standard" },
        pregnancy: { low: 42.2, high: 184.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 288.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1738,
    isActive: true
  },
  {
    id: "LOINC_1070",
    loincCode: "1070-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "BIOC_PARAM_5",
    category: "Biochemistry",
    specimen: "Stool Sample",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.8, high: 91.7, unit: "standard" },
        pediatric: { low: 4.6, high: 77.9, unit: "standard" },
        geriatric: { low: 6.1, high: 100.9, unit: "standard" }
      },
      female: {
        adult: { low: 5.3, high: 87.1, unit: "standard" },
        pediatric: { low: 4.5, high: 75.2, unit: "standard" },
        pregnancy: { low: 4.9, high: 105.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.3,
      panicHigh: 165.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 424,
    isActive: true
  },
  {
    id: "LOINC_1071",
    loincCode: "1071-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "BIOC_PARAM_6",
    category: "Biochemistry",
    specimen: "Plasma (Heparin)",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.5, high: 94.5, unit: "standard" },
        pediatric: { low: 21.2, high: 80.3, unit: "standard" },
        geriatric: { low: 27.8, high: 104.0, unit: "standard" }
      },
      female: {
        adult: { low: 24.4, high: 89.8, unit: "standard" },
        pediatric: { low: 20.7, high: 77.5, unit: "standard" },
        pregnancy: { low: 22.5, high: 108.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 170.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1045,
    isActive: true
  },
  {
    id: "LOINC_1072",
    loincCode: "1072-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "BIOC_PARAM_7",
    category: "Biochemistry",
    specimen: "24-Hour Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.3, high: 80.0, unit: "standard" },
        pediatric: { low: 31.4, high: 68.0, unit: "standard" },
        geriatric: { low: 41.3, high: 88.0, unit: "standard" }
      },
      female: {
        adult: { low: 36.2, high: 76.0, unit: "standard" },
        pediatric: { low: 30.7, high: 65.6, unit: "standard" },
        pregnancy: { low: 33.4, high: 92.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 144.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1429,
    isActive: true
  },
  {
    id: "LOINC_1073",
    loincCode: "1073-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "BIOC_PARAM_8",
    category: "Biochemistry",
    specimen: "Pleural Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.2, high: 157.8, unit: "standard" },
        pediatric: { low: 3.4, high: 134.1, unit: "standard" },
        geriatric: { low: 4.4, high: 173.6, unit: "standard" }
      },
      female: {
        adult: { low: 3.9, high: 149.9, unit: "standard" },
        pediatric: { low: 3.3, high: 129.4, unit: "standard" },
        pregnancy: { low: 3.6, high: 181.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 284.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 376,
    isActive: true
  },
  {
    id: "LOINC_1074",
    loincCode: "1074-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "BIOC_PARAM_9",
    category: "Biochemistry",
    specimen: "Tissue Biopsy",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.8, high: 110.0, unit: "standard" },
        pediatric: { low: 11.8, high: 93.5, unit: "standard" },
        geriatric: { low: 15.5, high: 121.0, unit: "standard" }
      },
      female: {
        adult: { low: 13.6, high: 104.5, unit: "standard" },
        pediatric: { low: 11.5, high: 90.2, unit: "standard" },
        pregnancy: { low: 12.6, high: 126.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.9,
      panicHigh: 198.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 694,
    isActive: true
  },
  {
    id: "LOINC_1075",
    loincCode: "1075-4",
    testName: "Biochemistry Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "BIOC_PARAM_10",
    category: "Biochemistry",
    specimen: "Serum",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.0, high: 187.0, unit: "standard" },
        pediatric: { low: 34.4, high: 158.9, unit: "standard" },
        geriatric: { low: 45.1, high: 205.7, unit: "standard" }
      },
      female: {
        adult: { low: 39.6, high: 177.7, unit: "standard" },
        pediatric: { low: 33.5, high: 153.3, unit: "standard" },
        pregnancy: { low: 36.5, high: 215.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 336.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1540,
    isActive: true
  },
  {
    id: "LOINC_1076",
    loincCode: "1076-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "BIOC_PARAM_11",
    category: "Biochemistry",
    specimen: "Random Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.4, high: 113.2, unit: "standard" },
        pediatric: { low: 22.7, high: 96.2, unit: "standard" },
        geriatric: { low: 29.8, high: 124.5, unit: "standard" }
      },
      female: {
        adult: { low: 26.1, high: 107.5, unit: "standard" },
        pediatric: { low: 22.2, high: 92.8, unit: "standard" },
        pregnancy: { low: 24.1, high: 130.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 203.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1102,
    isActive: true
  },
  {
    id: "LOINC_1077",
    loincCode: "1077-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "BIOC_PARAM_12",
    category: "Biochemistry",
    specimen: "Synovial Fluid",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.7, high: 55.8, unit: "standard" },
        pediatric: { low: 34.2, high: 47.4, unit: "standard" },
        geriatric: { low: 44.8, high: 61.4, unit: "standard" }
      },
      female: {
        adult: { low: 39.3, high: 53.0, unit: "standard" },
        pediatric: { low: 33.3, high: 45.8, unit: "standard" },
        pregnancy: { low: 36.3, high: 64.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.1,
      panicHigh: 100.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1531,
    isActive: true
  },
  {
    id: "LOINC_1078",
    loincCode: "1078-3",
    testName: "Biochemistry Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "BIOC_PARAM_13",
    category: "Biochemistry",
    specimen: "Nasopharyngeal Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.5, high: 69.1, unit: "standard" },
        pediatric: { low: 21.2, high: 58.7, unit: "standard" },
        geriatric: { low: 27.8, high: 76.0, unit: "standard" }
      },
      female: {
        adult: { low: 24.4, high: 65.6, unit: "standard" },
        pediatric: { low: 20.7, high: 56.7, unit: "standard" },
        pregnancy: { low: 22.5, high: 79.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 124.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1045,
    isActive: true
  },
  {
    id: "LOINC_1079",
    loincCode: "1079-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "BIOC_PARAM_14",
    category: "Biochemistry",
    specimen: "Whole Blood (EDTA)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 36.5, high: 166.1, unit: "standard" },
        pediatric: { low: 29.2, high: 141.2, unit: "standard" },
        geriatric: { low: 38.3, high: 182.7, unit: "standard" }
      },
      female: {
        adult: { low: 33.6, high: 157.8, unit: "standard" },
        pediatric: { low: 28.5, high: 136.2, unit: "standard" },
        pregnancy: { low: 31.0, high: 191.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.6,
      panicHigh: 299.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1345,
    isActive: true
  },
  {
    id: "LOINC_1080",
    loincCode: "1080-4",
    testName: "Biochemistry Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "BIOC_PARAM_15",
    category: "Biochemistry",
    specimen: "Plasma (Citrate)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.7, high: 49.0, unit: "standard" },
        pediatric: { low: 18.2, high: 41.6, unit: "standard" },
        geriatric: { low: 23.8, high: 53.9, unit: "standard" }
      },
      female: {
        adult: { low: 20.9, high: 46.5, unit: "standard" },
        pediatric: { low: 17.7, high: 40.2, unit: "standard" },
        pregnancy: { low: 19.3, high: 56.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.1,
      panicHigh: 88.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 931,
    isActive: true
  },
  {
    id: "LOINC_1081",
    loincCode: "1081-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "BIOC_PARAM_16",
    category: "Biochemistry",
    specimen: "CSF",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.2, high: 99.3, unit: "standard" },
        pediatric: { low: 32.2, high: 84.4, unit: "standard" },
        geriatric: { low: 42.2, high: 109.2, unit: "standard" }
      },
      female: {
        adult: { low: 37.0, high: 94.3, unit: "standard" },
        pediatric: { low: 31.4, high: 81.4, unit: "standard" },
        pregnancy: { low: 34.2, high: 114.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.1,
      panicHigh: 178.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1456,
    isActive: true
  },
  {
    id: "LOINC_1082",
    loincCode: "1082-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "BIOC_PARAM_17",
    category: "Biochemistry",
    specimen: "Throat Swab",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 15.9, high: 82.2, unit: "standard" },
        pediatric: { low: 12.7, high: 69.9, unit: "standard" },
        geriatric: { low: 16.7, high: 90.4, unit: "standard" }
      },
      female: {
        adult: { low: 14.6, high: 78.1, unit: "standard" },
        pediatric: { low: 12.4, high: 67.4, unit: "standard" },
        pregnancy: { low: 13.5, high: 94.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 148.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 727,
    isActive: true
  },
  {
    id: "LOINC_1083",
    loincCode: "1083-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "BIOC_PARAM_18",
    category: "Biochemistry",
    specimen: "Stool Sample",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.1, high: 60.0, unit: "standard" },
        pediatric: { low: 38.5, high: 51.0, unit: "standard" },
        geriatric: { low: 50.5, high: 66.0, unit: "standard" }
      },
      female: {
        adult: { low: 44.3, high: 57.0, unit: "standard" },
        pediatric: { low: 37.5, high: 49.2, unit: "standard" },
        pregnancy: { low: 40.9, high: 69.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 108.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1693,
    isActive: true
  },
  {
    id: "LOINC_1084",
    loincCode: "1084-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "BIOC_PARAM_19",
    category: "Biochemistry",
    specimen: "Plasma (Heparin)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 38.5, high: 60.8, unit: "standard" },
        pediatric: { low: 30.8, high: 51.7, unit: "standard" },
        geriatric: { low: 40.4, high: 66.9, unit: "standard" }
      },
      female: {
        adult: { low: 35.4, high: 57.8, unit: "standard" },
        pediatric: { low: 30.0, high: 49.9, unit: "standard" },
        pregnancy: { low: 32.7, high: 69.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.4,
      panicHigh: 109.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1405,
    isActive: true
  },
  {
    id: "LOINC_1085",
    loincCode: "1085-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "BIOC_PARAM_20",
    category: "Biochemistry",
    specimen: "24-Hour Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.0, high: 195.1, unit: "standard" },
        pediatric: { low: 38.4, high: 165.8, unit: "standard" },
        geriatric: { low: 50.4, high: 214.6, unit: "standard" }
      },
      female: {
        adult: { low: 44.2, high: 185.3, unit: "standard" },
        pediatric: { low: 37.4, high: 160.0, unit: "standard" },
        pregnancy: { low: 40.8, high: 224.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 351.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1690,
    isActive: true
  },
  {
    id: "LOINC_1086",
    loincCode: "1086-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "BIOC_PARAM_21",
    category: "Biochemistry",
    specimen: "Pleural Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 6.7, high: 44.6, unit: "standard" },
        pediatric: { low: 5.4, high: 37.9, unit: "standard" },
        geriatric: { low: 7.0, high: 49.1, unit: "standard" }
      },
      female: {
        adult: { low: 6.2, high: 42.4, unit: "standard" },
        pediatric: { low: 5.2, high: 36.6, unit: "standard" },
        pregnancy: { low: 5.7, high: 51.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.7,
      panicHigh: 80.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 451,
    isActive: true
  },
  {
    id: "LOINC_1087",
    loincCode: "1087-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "BIOC_PARAM_22",
    category: "Biochemistry",
    specimen: "Tissue Biopsy",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.5, high: 176.9, unit: "standard" },
        pediatric: { low: 19.6, high: 150.4, unit: "standard" },
        geriatric: { low: 25.7, high: 194.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.5, high: 168.1, unit: "standard" },
        pediatric: { low: 19.1, high: 145.1, unit: "standard" },
        pregnancy: { low: 20.8, high: 203.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.8,
      panicHigh: 318.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 985,
    isActive: true
  },
  {
    id: "LOINC_1088",
    loincCode: "1088-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "BIOC_PARAM_23",
    category: "Biochemistry",
    specimen: "Serum",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.7, high: 106.4, unit: "standard" },
        pediatric: { low: 19.8, high: 90.4, unit: "standard" },
        geriatric: { low: 25.9, high: 117.0, unit: "standard" }
      },
      female: {
        adult: { low: 22.7, high: 101.1, unit: "standard" },
        pediatric: { low: 19.3, high: 87.2, unit: "standard" },
        pregnancy: { low: 21.0, high: 122.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 191.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 991,
    isActive: true
  },
  {
    id: "LOINC_1089",
    loincCode: "1089-3",
    testName: "Biochemistry Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "BIOC_PARAM_24",
    category: "Biochemistry",
    specimen: "Random Urine",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.2, high: 73.6, unit: "standard" },
        pediatric: { low: 33.0, high: 62.6, unit: "standard" },
        geriatric: { low: 43.3, high: 81.0, unit: "standard" }
      },
      female: {
        adult: { low: 37.9, high: 69.9, unit: "standard" },
        pediatric: { low: 32.1, high: 60.4, unit: "standard" },
        pregnancy: { low: 35.0, high: 84.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 132.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1486,
    isActive: true
  },
  {
    id: "LOINC_1090",
    loincCode: "1090-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "BIOC_PARAM_25",
    category: "Biochemistry",
    specimen: "Synovial Fluid",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.0, high: 178.5, unit: "standard" },
        pediatric: { low: 21.6, high: 151.7, unit: "standard" },
        geriatric: { low: 28.4, high: 196.4, unit: "standard" }
      },
      female: {
        adult: { low: 24.8, high: 169.6, unit: "standard" },
        pediatric: { low: 21.1, high: 146.4, unit: "standard" },
        pregnancy: { low: 22.9, high: 205.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 321.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1060,
    isActive: true
  },
  {
    id: "LOINC_1091",
    loincCode: "1091-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "BIOC_PARAM_26",
    category: "Biochemistry",
    specimen: "Nasopharyngeal Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.0, high: 168.3, unit: "standard" },
        pediatric: { low: 34.4, high: 143.1, unit: "standard" },
        geriatric: { low: 45.1, high: 185.1, unit: "standard" }
      },
      female: {
        adult: { low: 39.6, high: 159.9, unit: "standard" },
        pediatric: { low: 33.5, high: 138.0, unit: "standard" },
        pregnancy: { low: 36.5, high: 193.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 302.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1540,
    isActive: true
  },
  {
    id: "LOINC_1092",
    loincCode: "1092-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "BIOC_PARAM_27",
    category: "Biochemistry",
    specimen: "Whole Blood (EDTA)",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.0, high: 186.5, unit: "standard" },
        pediatric: { low: 35.2, high: 158.5, unit: "standard" },
        geriatric: { low: 46.2, high: 205.2, unit: "standard" }
      },
      female: {
        adult: { low: 40.5, high: 177.2, unit: "standard" },
        pediatric: { low: 34.3, high: 152.9, unit: "standard" },
        pregnancy: { low: 37.4, high: 214.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.6,
      panicHigh: 335.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1570,
    isActive: true
  },
  {
    id: "LOINC_1093",
    loincCode: "1093-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "BIOC_PARAM_28",
    category: "Biochemistry",
    specimen: "Plasma (Citrate)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 10.3, high: 18.9, unit: "standard" },
        pediatric: { low: 8.2, high: 16.1, unit: "standard" },
        geriatric: { low: 10.8, high: 20.8, unit: "standard" }
      },
      female: {
        adult: { low: 9.5, high: 18.0, unit: "standard" },
        pediatric: { low: 8.0, high: 15.5, unit: "standard" },
        pregnancy: { low: 8.8, high: 21.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.1,
      panicHigh: 34.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 559,
    isActive: true
  },
  {
    id: "LOINC_1094",
    loincCode: "1094-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "BIOC_PARAM_29",
    category: "Biochemistry",
    specimen: "CSF",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.7, high: 131.6, unit: "standard" },
        pediatric: { low: 15.8, high: 111.9, unit: "standard" },
        geriatric: { low: 20.7, high: 144.8, unit: "standard" }
      },
      female: {
        adult: { low: 18.1, high: 125.0, unit: "standard" },
        pediatric: { low: 15.4, high: 107.9, unit: "standard" },
        pregnancy: { low: 16.7, high: 151.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.9,
      panicHigh: 236.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 841,
    isActive: true
  },
  {
    id: "LOINC_1095",
    loincCode: "1095-4",
    testName: "Biochemistry Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "BIOC_PARAM_30",
    category: "Biochemistry",
    specimen: "Throat Swab",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.1, high: 77.1, unit: "standard" },
        pediatric: { low: 15.3, high: 65.5, unit: "standard" },
        geriatric: { low: 20.1, high: 84.8, unit: "standard" }
      },
      female: {
        adult: { low: 17.6, high: 73.2, unit: "standard" },
        pediatric: { low: 14.9, high: 63.2, unit: "standard" },
        pregnancy: { low: 16.2, high: 88.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.6,
      panicHigh: 138.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 823,
    isActive: true
  },
  {
    id: "LOINC_1096",
    loincCode: "1096-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "BIOC_PARAM_31",
    category: "Biochemistry",
    specimen: "Stool Sample",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 15.5, high: 105.0, unit: "standard" },
        pediatric: { low: 12.4, high: 89.3, unit: "standard" },
        geriatric: { low: 16.3, high: 115.5, unit: "standard" }
      },
      female: {
        adult: { low: 14.3, high: 99.8, unit: "standard" },
        pediatric: { low: 12.1, high: 86.1, unit: "standard" },
        pregnancy: { low: 13.2, high: 120.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.2,
      panicHigh: 189.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 715,
    isActive: true
  },
  {
    id: "LOINC_1097",
    loincCode: "1097-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "BIOC_PARAM_32",
    category: "Biochemistry",
    specimen: "Plasma (Heparin)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.7, high: 76.4, unit: "standard" },
        pediatric: { low: 38.2, high: 64.9, unit: "standard" },
        geriatric: { low: 50.1, high: 84.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.9, high: 72.6, unit: "standard" },
        pediatric: { low: 37.2, high: 62.6, unit: "standard" },
        pregnancy: { low: 40.5, high: 87.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 137.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1681,
    isActive: true
  },
  {
    id: "LOINC_1098",
    loincCode: "1098-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "BIOC_PARAM_33",
    category: "Biochemistry",
    specimen: "24-Hour Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 45.9, high: 137.7, unit: "standard" },
        pediatric: { low: 36.7, high: 117.0, unit: "standard" },
        geriatric: { low: 48.2, high: 151.5, unit: "standard" }
      },
      female: {
        adult: { low: 42.2, high: 130.8, unit: "standard" },
        pediatric: { low: 35.8, high: 112.9, unit: "standard" },
        pregnancy: { low: 39.0, high: 158.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.4,
      panicHigh: 247.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1627,
    isActive: true
  },
  {
    id: "LOINC_1099",
    loincCode: "1099-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "BIOC_PARAM_34",
    category: "Biochemistry",
    specimen: "Pleural Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.0, high: 133.8, unit: "standard" },
        pediatric: { low: 24.8, high: 113.7, unit: "standard" },
        geriatric: { low: 32.6, high: 147.2, unit: "standard" }
      },
      female: {
        adult: { low: 28.5, high: 127.1, unit: "standard" },
        pediatric: { low: 24.2, high: 109.7, unit: "standard" },
        pregnancy: { low: 26.3, high: 153.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.4,
      panicHigh: 240.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1180,
    isActive: true
  },
  {
    id: "LOINC_1100",
    loincCode: "1100-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "BIOC_PARAM_35",
    category: "Biochemistry",
    specimen: "Tissue Biopsy",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.1, high: 156.3, unit: "standard" },
        pediatric: { low: 11.3, high: 132.9, unit: "standard" },
        geriatric: { low: 14.8, high: 171.9, unit: "standard" }
      },
      female: {
        adult: { low: 13.0, high: 148.5, unit: "standard" },
        pediatric: { low: 11.0, high: 128.2, unit: "standard" },
        pregnancy: { low: 12.0, high: 179.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.6,
      panicHigh: 281.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 673,
    isActive: true
  },
  {
    id: "LOINC_1101",
    loincCode: "1101-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "BIOC_PARAM_36",
    category: "Biochemistry",
    specimen: "Serum",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.5, high: 72.4, unit: "standard" },
        pediatric: { low: 6.8, high: 61.5, unit: "standard" },
        geriatric: { low: 8.9, high: 79.6, unit: "standard" }
      },
      female: {
        adult: { low: 7.8, high: 68.8, unit: "standard" },
        pediatric: { low: 6.6, high: 59.4, unit: "standard" },
        pregnancy: { low: 7.2, high: 83.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 130.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 505,
    isActive: true
  },
  {
    id: "LOINC_1102",
    loincCode: "1102-4",
    testName: "Biochemistry Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "BIOC_PARAM_37",
    category: "Biochemistry",
    specimen: "Random Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.3, high: 14.2, unit: "standard" },
        pediatric: { low: 1.0, high: 12.1, unit: "standard" },
        geriatric: { low: 1.4, high: 15.6, unit: "standard" }
      },
      female: {
        adult: { low: 1.2, high: 13.5, unit: "standard" },
        pediatric: { low: 1.0, high: 11.6, unit: "standard" },
        pregnancy: { low: 1.1, high: 16.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.5,
      panicHigh: 25.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 289,
    isActive: true
  },
  {
    id: "LOINC_1103",
    loincCode: "1103-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "BIOC_PARAM_38",
    category: "Biochemistry",
    specimen: "Synovial Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 17.1, high: 68.7, unit: "standard" },
        pediatric: { low: 13.7, high: 58.4, unit: "standard" },
        geriatric: { low: 18.0, high: 75.6, unit: "standard" }
      },
      female: {
        adult: { low: 15.7, high: 65.3, unit: "standard" },
        pediatric: { low: 13.3, high: 56.3, unit: "standard" },
        pregnancy: { low: 14.5, high: 79.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.8,
      panicHigh: 123.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 763,
    isActive: true
  },
  {
    id: "LOINC_1104",
    loincCode: "1104-6",
    testName: "Biochemistry Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "BIOC_PARAM_39",
    category: "Biochemistry",
    specimen: "Nasopharyngeal Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.7, high: 158.4, unit: "standard" },
        pediatric: { low: 9.4, high: 134.6, unit: "standard" },
        geriatric: { low: 12.3, high: 174.2, unit: "standard" }
      },
      female: {
        adult: { low: 10.8, high: 150.5, unit: "standard" },
        pediatric: { low: 9.1, high: 129.9, unit: "standard" },
        pregnancy: { low: 9.9, high: 182.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 285.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 601,
    isActive: true
  },
  {
    id: "LOINC_1105",
    loincCode: "1105-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "BIOC_PARAM_40",
    category: "Biochemistry",
    specimen: "Whole Blood (EDTA)",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.3, high: 97.4, unit: "standard" },
        pediatric: { low: 17.8, high: 82.8, unit: "standard" },
        geriatric: { low: 23.4, high: 107.1, unit: "standard" }
      },
      female: {
        adult: { low: 20.5, high: 92.5, unit: "standard" },
        pediatric: { low: 17.4, high: 79.9, unit: "standard" },
        pregnancy: { low: 19.0, high: 112.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.9,
      panicHigh: 175.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 919,
    isActive: true
  },
  {
    id: "LOINC_1106",
    loincCode: "1106-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "BIOC_PARAM_41",
    category: "Biochemistry",
    specimen: "Plasma (Citrate)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.7, high: 86.7, unit: "standard" },
        pediatric: { low: 20.6, high: 73.7, unit: "standard" },
        geriatric: { low: 27.0, high: 95.4, unit: "standard" }
      },
      female: {
        adult: { low: 23.6, high: 82.4, unit: "standard" },
        pediatric: { low: 20.0, high: 71.1, unit: "standard" },
        pregnancy: { low: 21.8, high: 99.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.3,
      panicHigh: 156.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1021,
    isActive: true
  },
  {
    id: "LOINC_1107",
    loincCode: "1107-6",
    testName: "Biochemistry Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "BIOC_PARAM_42",
    category: "Biochemistry",
    specimen: "CSF",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.4, high: 67.1, unit: "standard" },
        pediatric: { low: 14.7, high: 57.0, unit: "standard" },
        geriatric: { low: 19.3, high: 73.8, unit: "standard" }
      },
      female: {
        adult: { low: 16.9, high: 63.7, unit: "standard" },
        pediatric: { low: 14.4, high: 55.0, unit: "standard" },
        pregnancy: { low: 15.6, high: 77.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 120.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 802,
    isActive: true
  },
  {
    id: "LOINC_1108",
    loincCode: "1108-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "BIOC_PARAM_43",
    category: "Biochemistry",
    specimen: "Throat Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 37.9, high: 119.1, unit: "standard" },
        pediatric: { low: 30.3, high: 101.2, unit: "standard" },
        geriatric: { low: 39.8, high: 131.0, unit: "standard" }
      },
      female: {
        adult: { low: 34.9, high: 113.1, unit: "standard" },
        pediatric: { low: 29.6, high: 97.7, unit: "standard" },
        pregnancy: { low: 32.2, high: 137.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.2,
      panicHigh: 214.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1387,
    isActive: true
  },
  {
    id: "LOINC_1109",
    loincCode: "1109-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "BIOC_PARAM_44",
    category: "Biochemistry",
    specimen: "Stool Sample",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 14.7, high: 142.5, unit: "standard" },
        pediatric: { low: 11.8, high: 121.1, unit: "standard" },
        geriatric: { low: 15.4, high: 156.8, unit: "standard" }
      },
      female: {
        adult: { low: 13.5, high: 135.4, unit: "standard" },
        pediatric: { low: 11.5, high: 116.8, unit: "standard" },
        pregnancy: { low: 12.5, high: 163.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.9,
      panicHigh: 256.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 691,
    isActive: true
  },
  {
    id: "LOINC_1110",
    loincCode: "1110-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "BIOC_PARAM_45",
    category: "Biochemistry",
    specimen: "Plasma (Heparin)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.7, high: 75.8, unit: "standard" },
        pediatric: { low: 29.4, high: 64.4, unit: "standard" },
        geriatric: { low: 38.5, high: 83.4, unit: "standard" }
      },
      female: {
        adult: { low: 33.8, high: 72.0, unit: "standard" },
        pediatric: { low: 28.6, high: 62.2, unit: "standard" },
        pregnancy: { low: 31.2, high: 87.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.7,
      panicHigh: 136.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1351,
    isActive: true
  },
  {
    id: "LOINC_1111",
    loincCode: "1111-6",
    testName: "Biochemistry Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "BIOC_PARAM_46",
    category: "Biochemistry",
    specimen: "24-Hour Urine",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 45.1, high: 174.1, unit: "standard" },
        pediatric: { low: 36.1, high: 148.0, unit: "standard" },
        geriatric: { low: 47.4, high: 191.5, unit: "standard" }
      },
      female: {
        adult: { low: 41.5, high: 165.4, unit: "standard" },
        pediatric: { low: 35.2, high: 142.8, unit: "standard" },
        pregnancy: { low: 38.3, high: 200.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.0,
      panicHigh: 313.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1603,
    isActive: true
  },
  {
    id: "LOINC_1112",
    loincCode: "1112-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "BIOC_PARAM_47",
    category: "Biochemistry",
    specimen: "Pleural Fluid",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.5, high: 149.5, unit: "standard" },
        pediatric: { low: 14.8, high: 127.1, unit: "standard" },
        geriatric: { low: 19.4, high: 164.5, unit: "standard" }
      },
      female: {
        adult: { low: 17.0, high: 142.0, unit: "standard" },
        pediatric: { low: 14.4, high: 122.6, unit: "standard" },
        pregnancy: { low: 15.7, high: 171.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 269.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 805,
    isActive: true
  },
  {
    id: "LOINC_1113",
    loincCode: "1113-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "BIOC_PARAM_48",
    category: "Biochemistry",
    specimen: "Tissue Biopsy",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.6, high: 86.1, unit: "standard" },
        pediatric: { low: 25.3, high: 73.2, unit: "standard" },
        geriatric: { low: 33.2, high: 94.7, unit: "standard" }
      },
      female: {
        adult: { low: 29.1, high: 81.8, unit: "standard" },
        pediatric: { low: 24.6, high: 70.6, unit: "standard" },
        pregnancy: { low: 26.9, high: 99.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.6,
      panicHigh: 155.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1198,
    isActive: true
  },
  {
    id: "LOINC_1114",
    loincCode: "1114-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "BIOC_PARAM_49",
    category: "Biochemistry",
    specimen: "Serum",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 108.9, unit: "standard" },
        pediatric: { low: 31.4, high: 92.6, unit: "standard" },
        geriatric: { low: 41.2, high: 119.8, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 103.5, unit: "standard" },
        pediatric: { low: 30.6, high: 89.3, unit: "standard" },
        pregnancy: { low: 33.3, high: 125.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 196.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1115",
    loincCode: "1115-7",
    testName: "Biochemistry Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "BIOC_PARAM_50",
    category: "Biochemistry",
    specimen: "Random Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.6, high: 129.0, unit: "standard" },
        pediatric: { low: 20.5, high: 109.6, unit: "standard" },
        geriatric: { low: 26.9, high: 141.9, unit: "standard" }
      },
      female: {
        adult: { low: 23.6, high: 122.5, unit: "standard" },
        pediatric: { low: 20.0, high: 105.8, unit: "standard" },
        pregnancy: { low: 21.8, high: 148.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 232.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1018,
    isActive: true
  },
  {
    id: "LOINC_1116",
    loincCode: "1116-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "BIOC_PARAM_51",
    category: "Biochemistry",
    specimen: "Synovial Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 29.8, high: 134.3, unit: "standard" },
        pediatric: { low: 23.8, high: 114.2, unit: "standard" },
        geriatric: { low: 31.3, high: 147.7, unit: "standard" }
      },
      female: {
        adult: { low: 27.4, high: 127.6, unit: "standard" },
        pediatric: { low: 23.2, high: 110.1, unit: "standard" },
        pregnancy: { low: 25.3, high: 154.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.9,
      panicHigh: 241.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1144,
    isActive: true
  },
  {
    id: "LOINC_1117",
    loincCode: "1117-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "BIOC_PARAM_52",
    category: "Biochemistry",
    specimen: "Nasopharyngeal Swab",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.4, high: 72.5, unit: "standard" },
        pediatric: { low: 39.5, high: 61.6, unit: "standard" },
        geriatric: { low: 51.9, high: 79.8, unit: "standard" }
      },
      female: {
        adult: { low: 45.4, high: 68.9, unit: "standard" },
        pediatric: { low: 38.5, high: 59.4, unit: "standard" },
        pregnancy: { low: 42.0, high: 83.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 130.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1732,
    isActive: true
  },
  {
    id: "LOINC_1118",
    loincCode: "1118-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "BIOC_PARAM_53",
    category: "Biochemistry",
    specimen: "Whole Blood (EDTA)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 17.2, high: 153.1, unit: "standard" },
        pediatric: { low: 13.8, high: 130.1, unit: "standard" },
        geriatric: { low: 18.1, high: 168.4, unit: "standard" }
      },
      female: {
        adult: { low: 15.8, high: 145.4, unit: "standard" },
        pediatric: { low: 13.4, high: 125.5, unit: "standard" },
        pregnancy: { low: 14.6, high: 176.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.9,
      panicHigh: 275.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 766,
    isActive: true
  },
  {
    id: "LOINC_1119",
    loincCode: "1119-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "BIOC_PARAM_54",
    category: "Biochemistry",
    specimen: "Plasma (Citrate)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 35.8, high: 42.8, unit: "standard" },
        pediatric: { low: 28.6, high: 36.4, unit: "standard" },
        geriatric: { low: 37.6, high: 47.1, unit: "standard" }
      },
      female: {
        adult: { low: 32.9, high: 40.7, unit: "standard" },
        pediatric: { low: 27.9, high: 35.1, unit: "standard" },
        pregnancy: { low: 30.4, high: 49.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.3,
      panicHigh: 77.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1324,
    isActive: true
  },
  {
    id: "LOINC_1120",
    loincCode: "1120-2",
    testName: "Biochemistry Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "BIOC_PARAM_55",
    category: "Biochemistry",
    specimen: "CSF",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.6, high: 131.6, unit: "standard" },
        pediatric: { low: 24.5, high: 111.9, unit: "standard" },
        geriatric: { low: 32.1, high: 144.8, unit: "standard" }
      },
      female: {
        adult: { low: 28.2, high: 125.0, unit: "standard" },
        pediatric: { low: 23.9, high: 107.9, unit: "standard" },
        pregnancy: { low: 26.0, high: 151.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 236.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1168,
    isActive: true
  },
  {
    id: "LOINC_1121",
    loincCode: "1121-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "BIOC_PARAM_56",
    category: "Biochemistry",
    specimen: "Throat Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 3.9, high: 99.2, unit: "standard" },
        pediatric: { low: 3.1, high: 84.3, unit: "standard" },
        geriatric: { low: 4.1, high: 109.1, unit: "standard" }
      },
      female: {
        adult: { low: 3.6, high: 94.2, unit: "standard" },
        pediatric: { low: 3.0, high: 81.3, unit: "standard" },
        pregnancy: { low: 3.3, high: 114.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.6,
      panicHigh: 178.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 367,
    isActive: true
  },
  {
    id: "LOINC_1122",
    loincCode: "1122-4",
    testName: "Biochemistry Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "BIOC_PARAM_57",
    category: "Biochemistry",
    specimen: "Stool Sample",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.1, high: 123.0, unit: "standard" },
        pediatric: { low: 8.1, high: 104.5, unit: "standard" },
        geriatric: { low: 10.6, high: 135.3, unit: "standard" }
      },
      female: {
        adult: { low: 9.3, high: 116.8, unit: "standard" },
        pediatric: { low: 7.9, high: 100.9, unit: "standard" },
        pregnancy: { low: 8.6, high: 141.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 221.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 553,
    isActive: true
  },
  {
    id: "LOINC_1123",
    loincCode: "1123-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "BIOC_PARAM_58",
    category: "Biochemistry",
    specimen: "Plasma (Heparin)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.8, high: 170.7, unit: "standard" },
        pediatric: { low: 17.4, high: 145.1, unit: "standard" },
        geriatric: { low: 22.9, high: 187.8, unit: "standard" }
      },
      female: {
        adult: { low: 20.1, high: 162.2, unit: "standard" },
        pediatric: { low: 17.0, high: 140.0, unit: "standard" },
        pregnancy: { low: 18.5, high: 196.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.7,
      panicHigh: 307.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 904,
    isActive: true
  },
  {
    id: "LOINC_1124",
    loincCode: "1124-5",
    testName: "Biochemistry Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "BIOC_PARAM_59",
    category: "Biochemistry",
    specimen: "24-Hour Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.7, high: 173.7, unit: "standard" },
        pediatric: { low: 24.6, high: 147.6, unit: "standard" },
        geriatric: { low: 32.2, high: 191.1, unit: "standard" }
      },
      female: {
        adult: { low: 28.2, high: 165.0, unit: "standard" },
        pediatric: { low: 23.9, high: 142.4, unit: "standard" },
        pregnancy: { low: 26.1, high: 199.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.3,
      panicHigh: 312.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1171,
    isActive: true
  },
  {
    id: "LOINC_1125",
    loincCode: "1125-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "BIOC_PARAM_60",
    category: "Biochemistry",
    specimen: "Pleural Fluid",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.9, high: 105.5, unit: "standard" },
        pediatric: { low: 13.5, high: 89.7, unit: "standard" },
        geriatric: { low: 17.7, high: 116.1, unit: "standard" }
      },
      female: {
        adult: { low: 15.5, high: 100.2, unit: "standard" },
        pediatric: { low: 13.2, high: 86.5, unit: "standard" },
        pregnancy: { low: 14.4, high: 121.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.8,
      panicHigh: 189.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 757,
    isActive: true
  },
  {
    id: "LOINC_1126",
    loincCode: "1126-9",
    testName: "Biochemistry Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "BIOC_PARAM_61",
    category: "Biochemistry",
    specimen: "Tissue Biopsy",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.2, high: 165.0, unit: "standard" },
        pediatric: { low: 19.4, high: 140.3, unit: "standard" },
        geriatric: { low: 25.4, high: 181.5, unit: "standard" }
      },
      female: {
        adult: { low: 22.3, high: 156.8, unit: "standard" },
        pediatric: { low: 18.9, high: 135.3, unit: "standard" },
        pregnancy: { low: 20.6, high: 189.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.7,
      panicHigh: 297.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 976,
    isActive: true
  },
  {
    id: "LOINC_1127",
    loincCode: "1127-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "BIOC_PARAM_62",
    category: "Biochemistry",
    specimen: "Serum",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.8, high: 26.8, unit: "standard" },
        pediatric: { low: 7.8, high: 22.8, unit: "standard" },
        geriatric: { low: 10.3, high: 29.5, unit: "standard" }
      },
      female: {
        adult: { low: 9.0, high: 25.5, unit: "standard" },
        pediatric: { low: 7.6, high: 22.0, unit: "standard" },
        pregnancy: { low: 8.3, high: 30.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.9,
      panicHigh: 48.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 544,
    isActive: true
  },
  {
    id: "LOINC_1128",
    loincCode: "1128-1",
    testName: "Biochemistry Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "BIOC_PARAM_63",
    category: "Biochemistry",
    specimen: "Random Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.3, high: 140.1, unit: "standard" },
        pediatric: { low: 5.8, high: 119.1, unit: "standard" },
        geriatric: { low: 7.7, high: 154.1, unit: "standard" }
      },
      female: {
        adult: { low: 6.7, high: 133.1, unit: "standard" },
        pediatric: { low: 5.7, high: 114.9, unit: "standard" },
        pregnancy: { low: 6.2, high: 161.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.9,
      panicHigh: 252.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 469,
    isActive: true
  },
  {
    id: "LOINC_1129",
    loincCode: "1129-3",
    testName: "Biochemistry Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "BIOC_PARAM_64",
    category: "Biochemistry",
    specimen: "Synovial Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.2, high: 145.5, unit: "standard" },
        pediatric: { low: 19.4, high: 123.7, unit: "standard" },
        geriatric: { low: 25.4, high: 160.1, unit: "standard" }
      },
      female: {
        adult: { low: 22.3, high: 138.2, unit: "standard" },
        pediatric: { low: 18.9, high: 119.3, unit: "standard" },
        pregnancy: { low: 20.6, high: 167.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.7,
      panicHigh: 261.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 976,
    isActive: true
  },
  {
    id: "LOINC_1130",
    loincCode: "1130-8",
    testName: "Biochemistry Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "BIOC_PARAM_65",
    category: "Biochemistry",
    specimen: "Nasopharyngeal Swab",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.6, high: 173.9, unit: "standard" },
        pediatric: { low: 31.7, high: 147.8, unit: "standard" },
        geriatric: { low: 41.6, high: 191.3, unit: "standard" }
      },
      female: {
        adult: { low: 36.4, high: 165.2, unit: "standard" },
        pediatric: { low: 30.9, high: 142.6, unit: "standard" },
        pregnancy: { low: 33.7, high: 200.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.8,
      panicHigh: 313.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in biochemistry disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in biochemistry.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1438,
    isActive: true
  },
  {
    id: "LOINC_1131",
    loincCode: "1131-7",
    testName: "Immunology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "IMMU_PARAM_1",
    category: "Immunology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.9, high: 89.0, unit: "standard" },
        pediatric: { low: 37.5, high: 75.6, unit: "standard" },
        geriatric: { low: 49.2, high: 97.9, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 84.5, unit: "standard" },
        pediatric: { low: 36.6, high: 73.0, unit: "standard" },
        pregnancy: { low: 39.9, high: 102.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 160.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1657,
    isActive: true
  },
  {
    id: "LOINC_1132",
    loincCode: "1132-4",
    testName: "Immunology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "IMMU_PARAM_2",
    category: "Immunology",
    specimen: "Plasma (Citrate)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 91.6, unit: "standard" },
        pediatric: { low: 31.4, high: 77.9, unit: "standard" },
        geriatric: { low: 41.2, high: 100.8, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 87.0, unit: "standard" },
        pediatric: { low: 30.6, high: 75.1, unit: "standard" },
        pregnancy: { low: 33.3, high: 105.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 164.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1133",
    loincCode: "1133-2",
    testName: "Immunology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "IMMU_PARAM_3",
    category: "Immunology",
    specimen: "CSF",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.0, high: 131.9, unit: "standard" },
        pediatric: { low: 4.0, high: 112.1, unit: "standard" },
        geriatric: { low: 5.3, high: 145.1, unit: "standard" }
      },
      female: {
        adult: { low: 4.6, high: 125.3, unit: "standard" },
        pediatric: { low: 3.9, high: 108.2, unit: "standard" },
        pregnancy: { low: 4.3, high: 151.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.0,
      panicHigh: 237.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 400,
    isActive: true
  },
  {
    id: "LOINC_1134",
    loincCode: "1134-8",
    testName: "Immunology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "IMMU_PARAM_4",
    category: "Immunology",
    specimen: "Throat Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.6, high: 94.0, unit: "standard" },
        pediatric: { low: 26.1, high: 79.9, unit: "standard" },
        geriatric: { low: 34.2, high: 103.4, unit: "standard" }
      },
      female: {
        adult: { low: 30.0, high: 89.3, unit: "standard" },
        pediatric: { low: 25.4, high: 77.1, unit: "standard" },
        pregnancy: { low: 27.7, high: 108.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.0,
      panicHigh: 169.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1228,
    isActive: true
  },
  {
    id: "LOINC_1135",
    loincCode: "1135-2",
    testName: "Immunology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "IMMU_PARAM_5",
    category: "Immunology",
    specimen: "Stool Sample",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.4, high: 67.3, unit: "standard" },
        pediatric: { low: 24.3, high: 57.2, unit: "standard" },
        geriatric: { low: 31.9, high: 74.0, unit: "standard" }
      },
      female: {
        adult: { low: 28.0, high: 63.9, unit: "standard" },
        pediatric: { low: 23.7, high: 55.2, unit: "standard" },
        pregnancy: { low: 25.8, high: 77.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 121.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1162,
    isActive: true
  },
  {
    id: "LOINC_1136",
    loincCode: "1136-6",
    testName: "Immunology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "IMMU_PARAM_6",
    category: "Immunology",
    specimen: "Plasma (Heparin)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.3, high: 125.8, unit: "standard" },
        pediatric: { low: 39.4, high: 106.9, unit: "standard" },
        geriatric: { low: 51.8, high: 138.4, unit: "standard" }
      },
      female: {
        adult: { low: 45.4, high: 119.5, unit: "standard" },
        pediatric: { low: 38.5, high: 103.2, unit: "standard" },
        pregnancy: { low: 41.9, high: 144.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.7,
      panicHigh: 226.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1729,
    isActive: true
  },
  {
    id: "LOINC_1137",
    loincCode: "1137-9",
    testName: "Immunology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "IMMU_PARAM_7",
    category: "Immunology",
    specimen: "24-Hour Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 6.6, high: 100.2, unit: "standard" },
        pediatric: { low: 5.3, high: 85.2, unit: "standard" },
        geriatric: { low: 6.9, high: 110.2, unit: "standard" }
      },
      female: {
        adult: { low: 6.1, high: 95.2, unit: "standard" },
        pediatric: { low: 5.1, high: 82.2, unit: "standard" },
        pregnancy: { low: 5.6, high: 115.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.6,
      panicHigh: 180.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 448,
    isActive: true
  },
  {
    id: "LOINC_1138",
    loincCode: "1138-2",
    testName: "Immunology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "IMMU_PARAM_8",
    category: "Immunology",
    specimen: "Pleural Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.6, high: 153.3, unit: "standard" },
        pediatric: { low: 1.3, high: 130.3, unit: "standard" },
        geriatric: { low: 1.7, high: 168.6, unit: "standard" }
      },
      female: {
        adult: { low: 1.5, high: 145.6, unit: "standard" },
        pediatric: { low: 1.2, high: 125.7, unit: "standard" },
        pregnancy: { low: 1.4, high: 176.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 275.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 298,
    isActive: true
  },
  {
    id: "LOINC_1139",
    loincCode: "1139-8",
    testName: "Immunology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "IMMU_PARAM_9",
    category: "Immunology",
    specimen: "Tissue Biopsy",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 42.7, high: 123.1, unit: "standard" },
        pediatric: { low: 34.2, high: 104.6, unit: "standard" },
        geriatric: { low: 44.8, high: 135.4, unit: "standard" }
      },
      female: {
        adult: { low: 39.3, high: 116.9, unit: "standard" },
        pediatric: { low: 33.3, high: 100.9, unit: "standard" },
        pregnancy: { low: 36.3, high: 141.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.1,
      panicHigh: 221.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1531,
    isActive: true
  },
  {
    id: "LOINC_1140",
    loincCode: "1140-5",
    testName: "Immunology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "IMMU_PARAM_10",
    category: "Immunology",
    specimen: "Serum",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.0, high: 123.0, unit: "standard" },
        pediatric: { low: 39.2, high: 104.5, unit: "standard" },
        geriatric: { low: 51.5, high: 135.3, unit: "standard" }
      },
      female: {
        adult: { low: 45.1, high: 116.8, unit: "standard" },
        pediatric: { low: 38.2, high: 100.9, unit: "standard" },
        pregnancy: { low: 41.6, high: 141.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.6,
      panicHigh: 221.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1720,
    isActive: true
  },
  {
    id: "LOINC_1141",
    loincCode: "1141-2",
    testName: "Immunology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "IMMU_PARAM_11",
    category: "Immunology",
    specimen: "Random Urine",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.5, high: 81.3, unit: "standard" },
        pediatric: { low: 31.6, high: 69.1, unit: "standard" },
        geriatric: { low: 41.5, high: 89.4, unit: "standard" }
      },
      female: {
        adult: { low: 36.3, high: 77.2, unit: "standard" },
        pediatric: { low: 30.8, high: 66.7, unit: "standard" },
        pregnancy: { low: 33.6, high: 93.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.8,
      panicHigh: 146.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1435,
    isActive: true
  },
  {
    id: "LOINC_1142",
    loincCode: "1142-7",
    testName: "Immunology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "IMMU_PARAM_12",
    category: "Immunology",
    specimen: "Synovial Fluid",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.9, high: 140.6, unit: "standard" },
        pediatric: { low: 33.5, high: 119.5, unit: "standard" },
        geriatric: { low: 44.0, high: 154.7, unit: "standard" }
      },
      female: {
        adult: { low: 38.5, high: 133.6, unit: "standard" },
        pediatric: { low: 32.7, high: 115.3, unit: "standard" },
        pregnancy: { low: 35.6, high: 161.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.8,
      panicHigh: 253.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1507,
    isActive: true
  },
  {
    id: "LOINC_1143",
    loincCode: "1143-8",
    testName: "Immunology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "IMMU_PARAM_13",
    category: "Immunology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 42.9, high: 56.2, unit: "standard" },
        pediatric: { low: 34.3, high: 47.8, unit: "standard" },
        geriatric: { low: 45.0, high: 61.8, unit: "standard" }
      },
      female: {
        adult: { low: 39.5, high: 53.4, unit: "standard" },
        pediatric: { low: 33.5, high: 46.1, unit: "standard" },
        pregnancy: { low: 36.5, high: 64.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 101.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1537,
    isActive: true
  },
  {
    id: "LOINC_1144",
    loincCode: "1144-3",
    testName: "Immunology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "IMMU_PARAM_14",
    category: "Immunology",
    specimen: "Whole Blood (EDTA)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.6, high: 139.9, unit: "standard" },
        pediatric: { low: 25.3, high: 118.9, unit: "standard" },
        geriatric: { low: 33.2, high: 153.9, unit: "standard" }
      },
      female: {
        adult: { low: 29.1, high: 132.9, unit: "standard" },
        pediatric: { low: 24.6, high: 114.7, unit: "standard" },
        pregnancy: { low: 26.9, high: 160.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.6,
      panicHigh: 251.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1198,
    isActive: true
  },
  {
    id: "LOINC_1145",
    loincCode: "1145-1",
    testName: "Immunology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "IMMU_PARAM_15",
    category: "Immunology",
    specimen: "Plasma (Citrate)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.9, high: 76.7, unit: "standard" },
        pediatric: { low: 11.9, high: 65.2, unit: "standard" },
        geriatric: { low: 15.6, high: 84.4, unit: "standard" }
      },
      female: {
        adult: { low: 13.7, high: 72.9, unit: "standard" },
        pediatric: { low: 11.6, high: 62.9, unit: "standard" },
        pregnancy: { low: 12.7, high: 88.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.0,
      panicHigh: 138.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 697,
    isActive: true
  },
  {
    id: "LOINC_1146",
    loincCode: "1146-7",
    testName: "Immunology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "IMMU_PARAM_16",
    category: "Immunology",
    specimen: "CSF",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.5, high: 93.2, unit: "standard" },
        pediatric: { low: 1.2, high: 79.2, unit: "standard" },
        geriatric: { low: 1.6, high: 102.5, unit: "standard" }
      },
      female: {
        adult: { low: 1.4, high: 88.5, unit: "standard" },
        pediatric: { low: 1.2, high: 76.4, unit: "standard" },
        pregnancy: { low: 1.3, high: 107.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 167.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 295,
    isActive: true
  },
  {
    id: "LOINC_1147",
    loincCode: "1147-4",
    testName: "Immunology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "IMMU_PARAM_17",
    category: "Immunology",
    specimen: "Throat Swab",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.3, high: 71.1, unit: "standard" },
        pediatric: { low: 15.4, high: 60.4, unit: "standard" },
        geriatric: { low: 20.3, high: 78.2, unit: "standard" }
      },
      female: {
        adult: { low: 17.8, high: 67.5, unit: "standard" },
        pediatric: { low: 15.1, high: 58.3, unit: "standard" },
        pregnancy: { low: 16.4, high: 81.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.7,
      panicHigh: 128.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 829,
    isActive: true
  },
  {
    id: "LOINC_1148",
    loincCode: "1148-6",
    testName: "Immunology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "IMMU_PARAM_18",
    category: "Immunology",
    specimen: "Stool Sample",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.8, high: 162.9, unit: "standard" },
        pediatric: { low: 13.4, high: 138.5, unit: "standard" },
        geriatric: { low: 17.6, high: 179.2, unit: "standard" }
      },
      female: {
        adult: { low: 15.5, high: 154.8, unit: "standard" },
        pediatric: { low: 13.1, high: 133.6, unit: "standard" },
        pregnancy: { low: 14.3, high: 187.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.7,
      panicHigh: 293.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 754,
    isActive: true
  },
  {
    id: "LOINC_1149",
    loincCode: "1149-6",
    testName: "Immunology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "IMMU_PARAM_19",
    category: "Immunology",
    specimen: "Plasma (Heparin)",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.1, high: 43.0, unit: "standard" },
        pediatric: { low: 22.5, high: 36.5, unit: "standard" },
        geriatric: { low: 29.5, high: 47.3, unit: "standard" }
      },
      female: {
        adult: { low: 25.9, high: 40.9, unit: "standard" },
        pediatric: { low: 21.9, high: 35.3, unit: "standard" },
        pregnancy: { low: 23.9, high: 49.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.2,
      panicHigh: 77.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1093,
    isActive: true
  },
  {
    id: "LOINC_1150",
    loincCode: "1150-9",
    testName: "Immunology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "IMMU_PARAM_20",
    category: "Immunology",
    specimen: "24-Hour Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.5, high: 115.4, unit: "standard" },
        pediatric: { low: 25.2, high: 98.1, unit: "standard" },
        geriatric: { low: 33.1, high: 126.9, unit: "standard" }
      },
      female: {
        adult: { low: 29.0, high: 109.6, unit: "standard" },
        pediatric: { low: 24.6, high: 94.6, unit: "standard" },
        pregnancy: { low: 26.8, high: 132.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.6,
      panicHigh: 207.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1195,
    isActive: true
  },
  {
    id: "LOINC_1151",
    loincCode: "1151-3",
    testName: "Immunology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "IMMU_PARAM_21",
    category: "Immunology",
    specimen: "Pleural Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.7, high: 81.7, unit: "standard" },
        pediatric: { low: 9.4, high: 69.4, unit: "standard" },
        geriatric: { low: 12.3, high: 89.9, unit: "standard" }
      },
      female: {
        adult: { low: 10.8, high: 77.6, unit: "standard" },
        pediatric: { low: 9.1, high: 67.0, unit: "standard" },
        pregnancy: { low: 9.9, high: 94.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 147.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 601,
    isActive: true
  },
  {
    id: "LOINC_1152",
    loincCode: "1152-8",
    testName: "Immunology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "IMMU_PARAM_22",
    category: "Immunology",
    specimen: "Tissue Biopsy",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.5, high: 127.5, unit: "standard" },
        pediatric: { low: 17.2, high: 108.4, unit: "standard" },
        geriatric: { low: 22.6, high: 140.3, unit: "standard" }
      },
      female: {
        adult: { low: 19.8, high: 121.1, unit: "standard" },
        pediatric: { low: 16.8, high: 104.5, unit: "standard" },
        pregnancy: { low: 18.3, high: 146.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 229.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 895,
    isActive: true
  },
  {
    id: "LOINC_1153",
    loincCode: "1153-5",
    testName: "Immunology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "IMMU_PARAM_23",
    category: "Immunology",
    specimen: "Serum",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 20.6, high: 85.7, unit: "standard" },
        pediatric: { low: 16.5, high: 72.8, unit: "standard" },
        geriatric: { low: 21.6, high: 94.3, unit: "standard" }
      },
      female: {
        adult: { low: 19.0, high: 81.4, unit: "standard" },
        pediatric: { low: 16.1, high: 70.3, unit: "standard" },
        pregnancy: { low: 17.5, high: 98.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.2,
      panicHigh: 154.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 868,
    isActive: true
  },
  {
    id: "LOINC_1154",
    loincCode: "1154-9",
    testName: "Immunology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "IMMU_PARAM_24",
    category: "Immunology",
    specimen: "Random Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.5, high: 101.3, unit: "standard" },
        pediatric: { low: 7.6, high: 86.1, unit: "standard" },
        geriatric: { low: 10.0, high: 111.4, unit: "standard" }
      },
      female: {
        adult: { low: 8.7, high: 96.2, unit: "standard" },
        pediatric: { low: 7.4, high: 83.1, unit: "standard" },
        pregnancy: { low: 8.1, high: 116.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.8,
      panicHigh: 182.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 535,
    isActive: true
  },
  {
    id: "LOINC_1155",
    loincCode: "1155-8",
    testName: "Immunology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "IMMU_PARAM_25",
    category: "Immunology",
    specimen: "Synovial Fluid",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.5, high: 125.7, unit: "standard" },
        pediatric: { low: 31.6, high: 106.8, unit: "standard" },
        geriatric: { low: 41.5, high: 138.3, unit: "standard" }
      },
      female: {
        adult: { low: 36.3, high: 119.4, unit: "standard" },
        pediatric: { low: 30.8, high: 103.1, unit: "standard" },
        pregnancy: { low: 33.6, high: 144.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.8,
      panicHigh: 226.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1435,
    isActive: true
  },
  {
    id: "LOINC_1156",
    loincCode: "1156-7",
    testName: "Immunology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "IMMU_PARAM_26",
    category: "Immunology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.5, high: 96.4, unit: "standard" },
        pediatric: { low: 1.2, high: 81.9, unit: "standard" },
        geriatric: { low: 1.6, high: 106.0, unit: "standard" }
      },
      female: {
        adult: { low: 1.4, high: 91.6, unit: "standard" },
        pediatric: { low: 1.2, high: 79.0, unit: "standard" },
        pregnancy: { low: 1.3, high: 110.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 173.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 295,
    isActive: true
  },
  {
    id: "LOINC_1157",
    loincCode: "1157-3",
    testName: "Immunology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "IMMU_PARAM_27",
    category: "Immunology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 49.4, high: 100.7, unit: "standard" },
        pediatric: { low: 39.5, high: 85.6, unit: "standard" },
        geriatric: { low: 51.9, high: 110.8, unit: "standard" }
      },
      female: {
        adult: { low: 45.4, high: 95.7, unit: "standard" },
        pediatric: { low: 38.5, high: 82.6, unit: "standard" },
        pregnancy: { low: 42.0, high: 115.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 181.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1732,
    isActive: true
  },
  {
    id: "LOINC_1158",
    loincCode: "1158-6",
    testName: "Immunology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "IMMU_PARAM_28",
    category: "Immunology",
    specimen: "Plasma (Citrate)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.5, high: 157.2, unit: "standard" },
        pediatric: { low: 26.0, high: 133.6, unit: "standard" },
        geriatric: { low: 34.1, high: 172.9, unit: "standard" }
      },
      female: {
        adult: { low: 29.9, high: 149.3, unit: "standard" },
        pediatric: { low: 25.4, high: 128.9, unit: "standard" },
        pregnancy: { low: 27.6, high: 180.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.0,
      panicHigh: 283.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1225,
    isActive: true
  },
  {
    id: "LOINC_1159",
    loincCode: "1159-3",
    testName: "Immunology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "IMMU_PARAM_29",
    category: "Immunology",
    specimen: "CSF",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 12.6, high: 19.9, unit: "standard" },
        pediatric: { low: 10.1, high: 16.9, unit: "standard" },
        geriatric: { low: 13.2, high: 21.9, unit: "standard" }
      },
      female: {
        adult: { low: 11.6, high: 18.9, unit: "standard" },
        pediatric: { low: 9.8, high: 16.3, unit: "standard" },
        pregnancy: { low: 10.7, high: 22.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.0,
      panicHigh: 35.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 628,
    isActive: true
  },
  {
    id: "LOINC_1160",
    loincCode: "1160-6",
    testName: "Immunology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "IMMU_PARAM_30",
    category: "Immunology",
    specimen: "Throat Swab",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.6, high: 108.4, unit: "standard" },
        pediatric: { low: 32.5, high: 92.1, unit: "standard" },
        geriatric: { low: 42.6, high: 119.2, unit: "standard" }
      },
      female: {
        adult: { low: 37.4, high: 103.0, unit: "standard" },
        pediatric: { low: 31.7, high: 88.9, unit: "standard" },
        pregnancy: { low: 34.5, high: 124.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.2,
      panicHigh: 195.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1468,
    isActive: true
  },
  {
    id: "LOINC_1161",
    loincCode: "1161-4",
    testName: "Immunology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "IMMU_PARAM_31",
    category: "Immunology",
    specimen: "Stool Sample",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.7, high: 82.2, unit: "standard" },
        pediatric: { low: 9.4, high: 69.9, unit: "standard" },
        geriatric: { low: 12.3, high: 90.4, unit: "standard" }
      },
      female: {
        adult: { low: 10.8, high: 78.1, unit: "standard" },
        pediatric: { low: 9.1, high: 67.4, unit: "standard" },
        pregnancy: { low: 9.9, high: 94.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 148.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 601,
    isActive: true
  },
  {
    id: "LOINC_1162",
    loincCode: "1162-7",
    testName: "Immunology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "IMMU_PARAM_32",
    category: "Immunology",
    specimen: "Plasma (Heparin)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 27.2, high: 88.2, unit: "standard" },
        pediatric: { low: 21.8, high: 75.0, unit: "standard" },
        geriatric: { low: 28.6, high: 97.0, unit: "standard" }
      },
      female: {
        adult: { low: 25.0, high: 83.8, unit: "standard" },
        pediatric: { low: 21.2, high: 72.3, unit: "standard" },
        pregnancy: { low: 23.1, high: 101.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.9,
      panicHigh: 158.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1066,
    isActive: true
  },
  {
    id: "LOINC_1163",
    loincCode: "1163-6",
    testName: "Immunology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "IMMU_PARAM_33",
    category: "Immunology",
    specimen: "24-Hour Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.5, high: 58.6, unit: "standard" },
        pediatric: { low: 4.4, high: 49.8, unit: "standard" },
        geriatric: { low: 5.8, high: 64.5, unit: "standard" }
      },
      female: {
        adult: { low: 5.1, high: 55.7, unit: "standard" },
        pediatric: { low: 4.3, high: 48.1, unit: "standard" },
        pregnancy: { low: 4.7, high: 67.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.2,
      panicHigh: 105.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 415,
    isActive: true
  },
  {
    id: "LOINC_1164",
    loincCode: "1164-7",
    testName: "Immunology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "IMMU_PARAM_34",
    category: "Immunology",
    specimen: "Pleural Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 5.0, high: 42.4, unit: "standard" },
        pediatric: { low: 4.0, high: 36.0, unit: "standard" },
        geriatric: { low: 5.3, high: 46.6, unit: "standard" }
      },
      female: {
        adult: { low: 4.6, high: 40.3, unit: "standard" },
        pediatric: { low: 3.9, high: 34.8, unit: "standard" },
        pregnancy: { low: 4.3, high: 48.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.0,
      panicHigh: 76.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 400,
    isActive: true
  },
  {
    id: "LOINC_1165",
    loincCode: "1165-7",
    testName: "Immunology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "IMMU_PARAM_35",
    category: "Immunology",
    specimen: "Tissue Biopsy",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.4, high: 131.5, unit: "standard" },
        pediatric: { low: 22.7, high: 111.8, unit: "standard" },
        geriatric: { low: 29.8, high: 144.7, unit: "standard" }
      },
      female: {
        adult: { low: 26.1, high: 124.9, unit: "standard" },
        pediatric: { low: 22.2, high: 107.8, unit: "standard" },
        pregnancy: { low: 24.1, high: 151.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 236.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1102,
    isActive: true
  },
  {
    id: "LOINC_1166",
    loincCode: "1166-4",
    testName: "Immunology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "IMMU_PARAM_36",
    category: "Immunology",
    specimen: "Serum",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.1, high: 57.2, unit: "standard" },
        pediatric: { low: 39.3, high: 48.6, unit: "standard" },
        geriatric: { low: 51.6, high: 62.9, unit: "standard" }
      },
      female: {
        adult: { low: 45.2, high: 54.3, unit: "standard" },
        pediatric: { low: 38.3, high: 46.9, unit: "standard" },
        pregnancy: { low: 41.7, high: 65.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.6,
      panicHigh: 103.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1723,
    isActive: true
  },
  {
    id: "LOINC_1167",
    loincCode: "1167-8",
    testName: "Immunology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "IMMU_PARAM_37",
    category: "Immunology",
    specimen: "Random Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 12.5, high: 71.6, unit: "standard" },
        pediatric: { low: 10.0, high: 60.9, unit: "standard" },
        geriatric: { low: 13.1, high: 78.8, unit: "standard" }
      },
      female: {
        adult: { low: 11.5, high: 68.0, unit: "standard" },
        pediatric: { low: 9.8, high: 58.7, unit: "standard" },
        pregnancy: { low: 10.6, high: 82.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.0,
      panicHigh: 128.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 625,
    isActive: true
  },
  {
    id: "LOINC_1168",
    loincCode: "1168-7",
    testName: "Immunology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "IMMU_PARAM_38",
    category: "Immunology",
    specimen: "Synovial Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.5, high: 78.4, unit: "standard" },
        pediatric: { low: 25.2, high: 66.6, unit: "standard" },
        geriatric: { low: 33.1, high: 86.2, unit: "standard" }
      },
      female: {
        adult: { low: 29.0, high: 74.5, unit: "standard" },
        pediatric: { low: 24.6, high: 64.3, unit: "standard" },
        pregnancy: { low: 26.8, high: 90.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.6,
      panicHigh: 141.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1195,
    isActive: true
  },
  {
    id: "LOINC_1169",
    loincCode: "1169-4",
    testName: "Immunology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "IMMU_PARAM_39",
    category: "Immunology",
    specimen: "Nasopharyngeal Swab",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.5, high: 123.8, unit: "standard" },
        pediatric: { low: 6.0, high: 105.2, unit: "standard" },
        geriatric: { low: 7.9, high: 136.2, unit: "standard" }
      },
      female: {
        adult: { low: 6.9, high: 117.6, unit: "standard" },
        pediatric: { low: 5.9, high: 101.5, unit: "standard" },
        pregnancy: { low: 6.4, high: 142.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.0,
      panicHigh: 222.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 475,
    isActive: true
  },
  {
    id: "LOINC_1170",
    loincCode: "1170-3",
    testName: "Immunology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "IMMU_PARAM_40",
    category: "Immunology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.0, high: 93.5, unit: "standard" },
        pediatric: { low: 16.8, high: 79.5, unit: "standard" },
        geriatric: { low: 22.1, high: 102.9, unit: "standard" }
      },
      female: {
        adult: { low: 19.3, high: 88.8, unit: "standard" },
        pediatric: { low: 16.4, high: 76.7, unit: "standard" },
        pregnancy: { low: 17.8, high: 107.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.4,
      panicHigh: 168.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 880,
    isActive: true
  },
  {
    id: "LOINC_1171",
    loincCode: "1171-5",
    testName: "Immunology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "IMMU_PARAM_41",
    category: "Immunology",
    specimen: "Plasma (Citrate)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.9, high: 124.6, unit: "standard" },
        pediatric: { low: 27.1, high: 105.9, unit: "standard" },
        geriatric: { low: 35.6, high: 137.1, unit: "standard" }
      },
      female: {
        adult: { low: 31.2, high: 118.4, unit: "standard" },
        pediatric: { low: 26.4, high: 102.2, unit: "standard" },
        pregnancy: { low: 28.8, high: 143.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.6,
      panicHigh: 224.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1267,
    isActive: true
  },
  {
    id: "LOINC_1172",
    loincCode: "1172-3",
    testName: "Immunology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "IMMU_PARAM_42",
    category: "Immunology",
    specimen: "CSF",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 37.5, high: 105.2, unit: "standard" },
        pediatric: { low: 30.0, high: 89.4, unit: "standard" },
        geriatric: { low: 39.4, high: 115.7, unit: "standard" }
      },
      female: {
        adult: { low: 34.5, high: 99.9, unit: "standard" },
        pediatric: { low: 29.3, high: 86.3, unit: "standard" },
        pregnancy: { low: 31.9, high: 121.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.0,
      panicHigh: 189.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1375,
    isActive: true
  },
  {
    id: "LOINC_1173",
    loincCode: "1173-4",
    testName: "Immunology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "IMMU_PARAM_43",
    category: "Immunology",
    specimen: "Throat Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.3, high: 109.2, unit: "standard" },
        pediatric: { low: 27.4, high: 92.8, unit: "standard" },
        geriatric: { low: 36.0, high: 120.1, unit: "standard" }
      },
      female: {
        adult: { low: 31.6, high: 103.7, unit: "standard" },
        pediatric: { low: 26.8, high: 89.5, unit: "standard" },
        pregnancy: { low: 29.2, high: 125.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.7,
      panicHigh: 196.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1279,
    isActive: true
  },
  {
    id: "LOINC_1174",
    loincCode: "1174-8",
    testName: "Immunology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "IMMU_PARAM_44",
    category: "Immunology",
    specimen: "Stool Sample",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.1, high: 95.8, unit: "standard" },
        pediatric: { low: 39.3, high: 81.4, unit: "standard" },
        geriatric: { low: 51.6, high: 105.4, unit: "standard" }
      },
      female: {
        adult: { low: 45.2, high: 91.0, unit: "standard" },
        pediatric: { low: 38.3, high: 78.6, unit: "standard" },
        pregnancy: { low: 41.7, high: 110.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.6,
      panicHigh: 172.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1723,
    isActive: true
  },
  {
    id: "LOINC_1175",
    loincCode: "1175-4",
    testName: "Immunology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "IMMU_PARAM_45",
    category: "Immunology",
    specimen: "Plasma (Heparin)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 16.6, high: 147.5, unit: "standard" },
        pediatric: { low: 13.3, high: 125.4, unit: "standard" },
        geriatric: { low: 17.4, high: 162.3, unit: "standard" }
      },
      female: {
        adult: { low: 15.3, high: 140.1, unit: "standard" },
        pediatric: { low: 12.9, high: 120.9, unit: "standard" },
        pregnancy: { low: 14.1, high: 169.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.6,
      panicHigh: 265.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 748,
    isActive: true
  },
  {
    id: "LOINC_1176",
    loincCode: "1176-3",
    testName: "Immunology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "IMMU_PARAM_46",
    category: "Immunology",
    specimen: "24-Hour Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.7, high: 31.6, unit: "standard" },
        pediatric: { low: 20.6, high: 26.9, unit: "standard" },
        geriatric: { low: 27.0, high: 34.8, unit: "standard" }
      },
      female: {
        adult: { low: 23.6, high: 30.0, unit: "standard" },
        pediatric: { low: 20.0, high: 25.9, unit: "standard" },
        pregnancy: { low: 21.8, high: 36.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.3,
      panicHigh: 56.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1021,
    isActive: true
  },
  {
    id: "LOINC_1177",
    loincCode: "1177-1",
    testName: "Immunology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "IMMU_PARAM_47",
    category: "Immunology",
    specimen: "Pleural Fluid",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.5, high: 84.6, unit: "standard" },
        pediatric: { low: 26.8, high: 71.9, unit: "standard" },
        geriatric: { low: 35.2, high: 93.1, unit: "standard" }
      },
      female: {
        adult: { low: 30.8, high: 80.4, unit: "standard" },
        pediatric: { low: 26.1, high: 69.4, unit: "standard" },
        pregnancy: { low: 28.5, high: 97.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.4,
      panicHigh: 152.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1255,
    isActive: true
  },
  {
    id: "LOINC_1178",
    loincCode: "1178-2",
    testName: "Immunology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "IMMU_PARAM_48",
    category: "Immunology",
    specimen: "Tissue Biopsy",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 44.7, high: 182.2, unit: "standard" },
        pediatric: { low: 35.8, high: 154.9, unit: "standard" },
        geriatric: { low: 46.9, high: 200.4, unit: "standard" }
      },
      female: {
        adult: { low: 41.1, high: 173.1, unit: "standard" },
        pediatric: { low: 34.9, high: 149.4, unit: "standard" },
        pregnancy: { low: 38.0, high: 209.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.9,
      panicHigh: 328.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1591,
    isActive: true
  },
  {
    id: "LOINC_1179",
    loincCode: "1179-5",
    testName: "Immunology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "IMMU_PARAM_49",
    category: "Immunology",
    specimen: "Serum",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.0, high: 175.7, unit: "standard" },
        pediatric: { low: 20.0, high: 149.3, unit: "standard" },
        geriatric: { low: 26.3, high: 193.3, unit: "standard" }
      },
      female: {
        adult: { low: 23.0, high: 166.9, unit: "standard" },
        pediatric: { low: 19.5, high: 144.1, unit: "standard" },
        pregnancy: { low: 21.3, high: 202.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.0,
      panicHigh: 316.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1000,
    isActive: true
  },
  {
    id: "LOINC_1180",
    loincCode: "1180-5",
    testName: "Immunology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "IMMU_PARAM_50",
    category: "Immunology",
    specimen: "Random Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.2, high: 155.5, unit: "standard" },
        pediatric: { low: 16.2, high: 132.2, unit: "standard" },
        geriatric: { low: 21.2, high: 171.1, unit: "standard" }
      },
      female: {
        adult: { low: 18.6, high: 147.7, unit: "standard" },
        pediatric: { low: 15.8, high: 127.5, unit: "standard" },
        pregnancy: { low: 17.2, high: 178.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.1,
      panicHigh: 279.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 856,
    isActive: true
  },
  {
    id: "LOINC_1181",
    loincCode: "1181-6",
    testName: "Immunology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "IMMU_PARAM_51",
    category: "Immunology",
    specimen: "Synovial Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.7, high: 179.4, unit: "standard" },
        pediatric: { low: 37.4, high: 152.5, unit: "standard" },
        geriatric: { low: 49.0, high: 197.3, unit: "standard" }
      },
      female: {
        adult: { low: 43.0, high: 170.4, unit: "standard" },
        pediatric: { low: 36.4, high: 147.1, unit: "standard" },
        pregnancy: { low: 39.7, high: 206.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 322.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1651,
    isActive: true
  },
  {
    id: "LOINC_1182",
    loincCode: "1182-8",
    testName: "Immunology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "IMMU_PARAM_52",
    category: "Immunology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 17.1, unit: "standard" },
        pediatric: { low: 6.7, high: 14.5, unit: "standard" },
        geriatric: { low: 8.8, high: 18.8, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 16.2, unit: "standard" },
        pediatric: { low: 6.6, high: 14.0, unit: "standard" },
        pregnancy: { low: 7.1, high: 19.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 30.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1183",
    loincCode: "1183-5",
    testName: "Immunology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "IMMU_PARAM_53",
    category: "Immunology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 49.6, high: 167.8, unit: "standard" },
        pediatric: { low: 39.7, high: 142.6, unit: "standard" },
        geriatric: { low: 52.1, high: 184.6, unit: "standard" }
      },
      female: {
        adult: { low: 45.6, high: 159.4, unit: "standard" },
        pediatric: { low: 38.7, high: 137.6, unit: "standard" },
        pregnancy: { low: 42.2, high: 193.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 302.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1738,
    isActive: true
  },
  {
    id: "LOINC_1184",
    loincCode: "1184-1",
    testName: "Immunology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "IMMU_PARAM_54",
    category: "Immunology",
    specimen: "Plasma (Citrate)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.4, high: 64.4, unit: "standard" },
        pediatric: { low: 39.5, high: 54.7, unit: "standard" },
        geriatric: { low: 51.9, high: 70.8, unit: "standard" }
      },
      female: {
        adult: { low: 45.4, high: 61.2, unit: "standard" },
        pediatric: { low: 38.5, high: 52.8, unit: "standard" },
        pregnancy: { low: 42.0, high: 74.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 115.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1732,
    isActive: true
  },
  {
    id: "LOINC_1185",
    loincCode: "1185-6",
    testName: "Immunology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "IMMU_PARAM_55",
    category: "Immunology",
    specimen: "CSF",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.8, high: 49.9, unit: "standard" },
        pediatric: { low: 19.0, high: 42.4, unit: "standard" },
        geriatric: { low: 25.0, high: 54.9, unit: "standard" }
      },
      female: {
        adult: { low: 21.9, high: 47.4, unit: "standard" },
        pediatric: { low: 18.6, high: 40.9, unit: "standard" },
        pregnancy: { low: 20.2, high: 57.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.5,
      panicHigh: 89.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 964,
    isActive: true
  },
  {
    id: "LOINC_1186",
    loincCode: "1186-7",
    testName: "Immunology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "IMMU_PARAM_56",
    category: "Immunology",
    specimen: "Throat Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.1, high: 139.8, unit: "standard" },
        pediatric: { low: 31.3, high: 118.8, unit: "standard" },
        geriatric: { low: 41.1, high: 153.8, unit: "standard" }
      },
      female: {
        adult: { low: 36.0, high: 132.8, unit: "standard" },
        pediatric: { low: 30.5, high: 114.6, unit: "standard" },
        pregnancy: { low: 33.2, high: 160.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.6,
      panicHigh: 251.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1423,
    isActive: true
  },
  {
    id: "LOINC_1187",
    loincCode: "1187-7",
    testName: "Immunology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "IMMU_PARAM_57",
    category: "Immunology",
    specimen: "Stool Sample",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.7, high: 163.1, unit: "standard" },
        pediatric: { low: 33.4, high: 138.6, unit: "standard" },
        geriatric: { low: 43.8, high: 179.4, unit: "standard" }
      },
      female: {
        adult: { low: 38.4, high: 154.9, unit: "standard" },
        pediatric: { low: 32.5, high: 133.7, unit: "standard" },
        pregnancy: { low: 35.4, high: 187.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.7,
      panicHigh: 293.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1501,
    isActive: true
  },
  {
    id: "LOINC_1188",
    loincCode: "1188-5",
    testName: "Immunology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "IMMU_PARAM_58",
    category: "Immunology",
    specimen: "Plasma (Heparin)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.0, high: 148.1, unit: "standard" },
        pediatric: { low: 24.0, high: 125.9, unit: "standard" },
        geriatric: { low: 31.5, high: 162.9, unit: "standard" }
      },
      female: {
        adult: { low: 27.6, high: 140.7, unit: "standard" },
        pediatric: { low: 23.4, high: 121.4, unit: "standard" },
        pregnancy: { low: 25.5, high: 170.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.0,
      panicHigh: 266.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1150,
    isActive: true
  },
  {
    id: "LOINC_1189",
    loincCode: "1189-2",
    testName: "Immunology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "IMMU_PARAM_59",
    category: "Immunology",
    specimen: "24-Hour Urine",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 43.4, high: 89.9, unit: "standard" },
        pediatric: { low: 34.7, high: 76.4, unit: "standard" },
        geriatric: { low: 45.6, high: 98.9, unit: "standard" }
      },
      female: {
        adult: { low: 39.9, high: 85.4, unit: "standard" },
        pediatric: { low: 33.9, high: 73.7, unit: "standard" },
        pregnancy: { low: 36.9, high: 103.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.4,
      panicHigh: 161.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1552,
    isActive: true
  },
  {
    id: "LOINC_1190",
    loincCode: "1190-1",
    testName: "Immunology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "IMMU_PARAM_60",
    category: "Immunology",
    specimen: "Pleural Fluid",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.6, high: 63.0, unit: "standard" },
        pediatric: { low: 1.3, high: 53.5, unit: "standard" },
        geriatric: { low: 1.7, high: 69.3, unit: "standard" }
      },
      female: {
        adult: { low: 1.5, high: 59.8, unit: "standard" },
        pediatric: { low: 1.2, high: 51.7, unit: "standard" },
        pregnancy: { low: 1.4, high: 72.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 113.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 298,
    isActive: true
  },
  {
    id: "LOINC_1191",
    loincCode: "1191-3",
    testName: "Immunology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "IMMU_PARAM_61",
    category: "Immunology",
    specimen: "Tissue Biopsy",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.1, high: 152.9, unit: "standard" },
        pediatric: { low: 32.1, high: 130.0, unit: "standard" },
        geriatric: { low: 42.1, high: 168.2, unit: "standard" }
      },
      female: {
        adult: { low: 36.9, high: 145.3, unit: "standard" },
        pediatric: { low: 31.3, high: 125.4, unit: "standard" },
        pregnancy: { low: 34.1, high: 175.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.0,
      panicHigh: 275.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1453,
    isActive: true
  },
  {
    id: "LOINC_1192",
    loincCode: "1192-1",
    testName: "Immunology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "IMMU_PARAM_62",
    category: "Immunology",
    specimen: "Serum",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 36.7, high: 146.1, unit: "standard" },
        pediatric: { low: 29.4, high: 124.2, unit: "standard" },
        geriatric: { low: 38.5, high: 160.7, unit: "standard" }
      },
      female: {
        adult: { low: 33.8, high: 138.8, unit: "standard" },
        pediatric: { low: 28.6, high: 119.8, unit: "standard" },
        pregnancy: { low: 31.2, high: 168.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.7,
      panicHigh: 263.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1351,
    isActive: true
  },
  {
    id: "LOINC_1193",
    loincCode: "1193-8",
    testName: "Immunology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "IMMU_PARAM_63",
    category: "Immunology",
    specimen: "Random Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 17.4, high: 99.8, unit: "standard" },
        pediatric: { low: 13.9, high: 84.8, unit: "standard" },
        geriatric: { low: 18.3, high: 109.8, unit: "standard" }
      },
      female: {
        adult: { low: 16.0, high: 94.8, unit: "standard" },
        pediatric: { low: 13.6, high: 81.8, unit: "standard" },
        pregnancy: { low: 14.8, high: 114.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.0,
      panicHigh: 179.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 772,
    isActive: true
  },
  {
    id: "LOINC_1194",
    loincCode: "1194-6",
    testName: "Immunology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "IMMU_PARAM_64",
    category: "Immunology",
    specimen: "Synovial Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.0, high: 193.6, unit: "standard" },
        pediatric: { low: 38.4, high: 164.6, unit: "standard" },
        geriatric: { low: 50.4, high: 213.0, unit: "standard" }
      },
      female: {
        adult: { low: 44.2, high: 183.9, unit: "standard" },
        pediatric: { low: 37.4, high: 158.8, unit: "standard" },
        pregnancy: { low: 40.8, high: 222.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 348.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1690,
    isActive: true
  },
  {
    id: "LOINC_1195",
    loincCode: "1195-4",
    testName: "Immunology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "IMMU_PARAM_65",
    category: "Immunology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.7, high: 64.8, unit: "standard" },
        pediatric: { low: 25.4, high: 55.1, unit: "standard" },
        geriatric: { low: 33.3, high: 71.3, unit: "standard" }
      },
      female: {
        adult: { low: 29.2, high: 61.6, unit: "standard" },
        pediatric: { low: 24.7, high: 53.1, unit: "standard" },
        pregnancy: { low: 26.9, high: 74.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.7,
      panicHigh: 116.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in immunology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in immunology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1201,
    isActive: true
  },
  {
    id: "LOINC_1196",
    loincCode: "1196-4",
    testName: "Microbiology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "MICR_PARAM_1",
    category: "Microbiology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 6.3, high: 82.8, unit: "standard" },
        pediatric: { low: 5.0, high: 70.4, unit: "standard" },
        geriatric: { low: 6.6, high: 91.1, unit: "standard" }
      },
      female: {
        adult: { low: 5.8, high: 78.7, unit: "standard" },
        pediatric: { low: 4.9, high: 67.9, unit: "standard" },
        pregnancy: { low: 5.4, high: 95.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 149.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 439,
    isActive: true
  },
  {
    id: "LOINC_1197",
    loincCode: "1197-7",
    testName: "Microbiology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "MICR_PARAM_2",
    category: "Microbiology",
    specimen: "Plasma (Citrate)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.3, high: 129.5, unit: "standard" },
        pediatric: { low: 33.0, high: 110.1, unit: "standard" },
        geriatric: { low: 43.4, high: 142.5, unit: "standard" }
      },
      female: {
        adult: { low: 38.0, high: 123.0, unit: "standard" },
        pediatric: { low: 32.2, high: 106.2, unit: "standard" },
        pregnancy: { low: 35.1, high: 148.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 233.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1489,
    isActive: true
  },
  {
    id: "LOINC_1198",
    loincCode: "1198-1",
    testName: "Microbiology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "MICR_PARAM_3",
    category: "Microbiology",
    specimen: "CSF",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.1, high: 125.0, unit: "standard" },
        pediatric: { low: 6.5, high: 106.3, unit: "standard" },
        geriatric: { low: 8.5, high: 137.5, unit: "standard" }
      },
      female: {
        adult: { low: 7.5, high: 118.8, unit: "standard" },
        pediatric: { low: 6.3, high: 102.5, unit: "standard" },
        pregnancy: { low: 6.9, high: 143.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.2,
      panicHigh: 225.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 493,
    isActive: true
  },
  {
    id: "LOINC_1199",
    loincCode: "1199-4",
    testName: "Microbiology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "MICR_PARAM_4",
    category: "Microbiology",
    specimen: "Throat Swab",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.7, high: 28.1, unit: "standard" },
        pediatric: { low: 9.4, high: 23.9, unit: "standard" },
        geriatric: { low: 12.3, high: 30.9, unit: "standard" }
      },
      female: {
        adult: { low: 10.8, high: 26.7, unit: "standard" },
        pediatric: { low: 9.1, high: 23.0, unit: "standard" },
        pregnancy: { low: 9.9, high: 32.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 50.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 601,
    isActive: true
  },
  {
    id: "LOINC_1200",
    loincCode: "1200-9",
    testName: "Microbiology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "MICR_PARAM_5",
    category: "Microbiology",
    specimen: "Stool Sample",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.7, high: 65.8, unit: "standard" },
        pediatric: { low: 15.0, high: 55.9, unit: "standard" },
        geriatric: { low: 19.6, high: 72.4, unit: "standard" }
      },
      female: {
        adult: { low: 17.2, high: 62.5, unit: "standard" },
        pediatric: { low: 14.6, high: 54.0, unit: "standard" },
        pregnancy: { low: 15.9, high: 75.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.5,
      panicHigh: 118.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 811,
    isActive: true
  },
  {
    id: "LOINC_1201",
    loincCode: "1201-9",
    testName: "Microbiology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "MICR_PARAM_6",
    category: "Microbiology",
    specimen: "Plasma (Heparin)",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.6, high: 109.6, unit: "standard" },
        pediatric: { low: 18.1, high: 93.2, unit: "standard" },
        geriatric: { low: 23.7, high: 120.6, unit: "standard" }
      },
      female: {
        adult: { low: 20.8, high: 104.1, unit: "standard" },
        pediatric: { low: 17.6, high: 89.9, unit: "standard" },
        pregnancy: { low: 19.2, high: 126.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.0,
      panicHigh: 197.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 928,
    isActive: true
  },
  {
    id: "LOINC_1202",
    loincCode: "1202-8",
    testName: "Microbiology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "MICR_PARAM_7",
    category: "Microbiology",
    specimen: "24-Hour Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 2.7, high: 17.0, unit: "standard" },
        pediatric: { low: 2.2, high: 14.4, unit: "standard" },
        geriatric: { low: 2.8, high: 18.7, unit: "standard" }
      },
      female: {
        adult: { low: 2.5, high: 16.1, unit: "standard" },
        pediatric: { low: 2.1, high: 13.9, unit: "standard" },
        pregnancy: { low: 2.3, high: 19.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.1,
      panicHigh: 30.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 331,
    isActive: true
  },
  {
    id: "LOINC_1203",
    loincCode: "1203-9",
    testName: "Microbiology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "MICR_PARAM_8",
    category: "Microbiology",
    specimen: "Pleural Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 5.2, high: 100.6, unit: "standard" },
        pediatric: { low: 4.2, high: 85.5, unit: "standard" },
        geriatric: { low: 5.5, high: 110.7, unit: "standard" }
      },
      female: {
        adult: { low: 4.8, high: 95.6, unit: "standard" },
        pediatric: { low: 4.1, high: 82.5, unit: "standard" },
        pregnancy: { low: 4.4, high: 115.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.1,
      panicHigh: 181.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 406,
    isActive: true
  },
  {
    id: "LOINC_1204",
    loincCode: "1204-4",
    testName: "Microbiology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "MICR_PARAM_9",
    category: "Microbiology",
    specimen: "Tissue Biopsy",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.2, high: 102.0, unit: "standard" },
        pediatric: { low: 6.6, high: 86.7, unit: "standard" },
        geriatric: { low: 8.6, high: 112.2, unit: "standard" }
      },
      female: {
        adult: { low: 7.5, high: 96.9, unit: "standard" },
        pediatric: { low: 6.4, high: 83.6, unit: "standard" },
        pregnancy: { low: 7.0, high: 117.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.3,
      panicHigh: 183.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 496,
    isActive: true
  },
  {
    id: "LOINC_1205",
    loincCode: "1205-3",
    testName: "Microbiology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "MICR_PARAM_10",
    category: "Microbiology",
    specimen: "Serum",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.8, high: 59.4, unit: "standard" },
        pediatric: { low: 32.6, high: 50.5, unit: "standard" },
        geriatric: { low: 42.8, high: 65.3, unit: "standard" }
      },
      female: {
        adult: { low: 37.5, high: 56.4, unit: "standard" },
        pediatric: { low: 31.8, high: 48.7, unit: "standard" },
        pregnancy: { low: 34.7, high: 68.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.3,
      panicHigh: 106.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1474,
    isActive: true
  },
  {
    id: "LOINC_1206",
    loincCode: "1206-7",
    testName: "Microbiology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "MICR_PARAM_11",
    category: "Microbiology",
    specimen: "Random Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 42.8, high: 160.5, unit: "standard" },
        pediatric: { low: 34.2, high: 136.4, unit: "standard" },
        geriatric: { low: 44.9, high: 176.6, unit: "standard" }
      },
      female: {
        adult: { low: 39.4, high: 152.5, unit: "standard" },
        pediatric: { low: 33.4, high: 131.6, unit: "standard" },
        pregnancy: { low: 36.4, high: 184.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.1,
      panicHigh: 288.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1534,
    isActive: true
  },
  {
    id: "LOINC_1207",
    loincCode: "1207-2",
    testName: "Microbiology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "MICR_PARAM_12",
    category: "Microbiology",
    specimen: "Synovial Fluid",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.3, high: 53.4, unit: "standard" },
        pediatric: { low: 31.4, high: 45.4, unit: "standard" },
        geriatric: { low: 41.3, high: 58.7, unit: "standard" }
      },
      female: {
        adult: { low: 36.2, high: 50.7, unit: "standard" },
        pediatric: { low: 30.7, high: 43.8, unit: "standard" },
        pregnancy: { low: 33.4, high: 61.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 96.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1429,
    isActive: true
  },
  {
    id: "LOINC_1208",
    loincCode: "1208-8",
    testName: "Microbiology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "MICR_PARAM_13",
    category: "Microbiology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.0, high: 102.9, unit: "standard" },
        pediatric: { low: 14.4, high: 87.5, unit: "standard" },
        geriatric: { low: 18.9, high: 113.2, unit: "standard" }
      },
      female: {
        adult: { low: 16.6, high: 97.8, unit: "standard" },
        pediatric: { low: 14.0, high: 84.4, unit: "standard" },
        pregnancy: { low: 15.3, high: 118.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.2,
      panicHigh: 185.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 790,
    isActive: true
  },
  {
    id: "LOINC_1209",
    loincCode: "1209-5",
    testName: "Microbiology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "MICR_PARAM_14",
    category: "Microbiology",
    specimen: "Whole Blood (EDTA)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.1, high: 108.6, unit: "standard" },
        pediatric: { low: 23.3, high: 92.3, unit: "standard" },
        geriatric: { low: 30.6, high: 119.5, unit: "standard" }
      },
      female: {
        adult: { low: 26.8, high: 103.2, unit: "standard" },
        pediatric: { low: 22.7, high: 89.1, unit: "standard" },
        pregnancy: { low: 24.7, high: 124.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.6,
      panicHigh: 195.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1123,
    isActive: true
  },
  {
    id: "LOINC_1210",
    loincCode: "1210-1",
    testName: "Microbiology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "MICR_PARAM_15",
    category: "Microbiology",
    specimen: "Plasma (Citrate)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.7, high: 119.4, unit: "standard" },
        pediatric: { low: 19.0, high: 101.5, unit: "standard" },
        geriatric: { low: 24.9, high: 131.3, unit: "standard" }
      },
      female: {
        adult: { low: 21.8, high: 113.4, unit: "standard" },
        pediatric: { low: 18.5, high: 97.9, unit: "standard" },
        pregnancy: { low: 20.1, high: 137.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.5,
      panicHigh: 214.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 961,
    isActive: true
  },
  {
    id: "LOINC_1211",
    loincCode: "1211-2",
    testName: "Microbiology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "MICR_PARAM_16",
    category: "Microbiology",
    specimen: "CSF",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.3, high: 83.3, unit: "standard" },
        pediatric: { low: 5.0, high: 70.8, unit: "standard" },
        geriatric: { low: 6.6, high: 91.6, unit: "standard" }
      },
      female: {
        adult: { low: 5.8, high: 79.1, unit: "standard" },
        pediatric: { low: 4.9, high: 68.3, unit: "standard" },
        pregnancy: { low: 5.4, high: 95.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 149.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 439,
    isActive: true
  },
  {
    id: "LOINC_1212",
    loincCode: "1212-7",
    testName: "Microbiology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "MICR_PARAM_17",
    category: "Microbiology",
    specimen: "Throat Swab",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 29.4, high: 88.8, unit: "standard" },
        pediatric: { low: 23.5, high: 75.5, unit: "standard" },
        geriatric: { low: 30.9, high: 97.7, unit: "standard" }
      },
      female: {
        adult: { low: 27.0, high: 84.4, unit: "standard" },
        pediatric: { low: 22.9, high: 72.8, unit: "standard" },
        pregnancy: { low: 25.0, high: 102.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.8,
      panicHigh: 159.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1132,
    isActive: true
  },
  {
    id: "LOINC_1213",
    loincCode: "1213-8",
    testName: "Microbiology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "MICR_PARAM_18",
    category: "Microbiology",
    specimen: "Stool Sample",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.0, high: 148.1, unit: "standard" },
        pediatric: { low: 14.4, high: 125.9, unit: "standard" },
        geriatric: { low: 18.9, high: 162.9, unit: "standard" }
      },
      female: {
        adult: { low: 16.6, high: 140.7, unit: "standard" },
        pediatric: { low: 14.0, high: 121.4, unit: "standard" },
        pregnancy: { low: 15.3, high: 170.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.2,
      panicHigh: 266.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 790,
    isActive: true
  },
  {
    id: "LOINC_1214",
    loincCode: "1214-7",
    testName: "Microbiology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "MICR_PARAM_19",
    category: "Microbiology",
    specimen: "Plasma (Heparin)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.9, high: 147.1, unit: "standard" },
        pediatric: { low: 21.5, high: 125.0, unit: "standard" },
        geriatric: { low: 28.2, high: 161.8, unit: "standard" }
      },
      female: {
        adult: { low: 24.7, high: 139.7, unit: "standard" },
        pediatric: { low: 21.0, high: 120.6, unit: "standard" },
        pregnancy: { low: 22.9, high: 169.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 264.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1057,
    isActive: true
  },
  {
    id: "LOINC_1215",
    loincCode: "1215-4",
    testName: "Microbiology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "MICR_PARAM_20",
    category: "Microbiology",
    specimen: "24-Hour Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.6, high: 71.1, unit: "standard" },
        pediatric: { low: 16.5, high: 60.4, unit: "standard" },
        geriatric: { low: 21.6, high: 78.2, unit: "standard" }
      },
      female: {
        adult: { low: 19.0, high: 67.5, unit: "standard" },
        pediatric: { low: 16.1, high: 58.3, unit: "standard" },
        pregnancy: { low: 17.5, high: 81.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.2,
      panicHigh: 128.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 868,
    isActive: true
  },
  {
    id: "LOINC_1216",
    loincCode: "1216-9",
    testName: "Microbiology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "MICR_PARAM_21",
    category: "Microbiology",
    specimen: "Pleural Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.8, high: 90.8, unit: "standard" },
        pediatric: { low: 21.4, high: 77.2, unit: "standard" },
        geriatric: { low: 28.1, high: 99.9, unit: "standard" }
      },
      female: {
        adult: { low: 24.7, high: 86.3, unit: "standard" },
        pediatric: { low: 20.9, high: 74.5, unit: "standard" },
        pregnancy: { low: 22.8, high: 104.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.7,
      panicHigh: 163.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1054,
    isActive: true
  },
  {
    id: "LOINC_1217",
    loincCode: "1217-2",
    testName: "Microbiology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "MICR_PARAM_22",
    category: "Microbiology",
    specimen: "Tissue Biopsy",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.2, high: 128.0, unit: "standard" },
        pediatric: { low: 23.4, high: 108.8, unit: "standard" },
        geriatric: { low: 30.7, high: 140.8, unit: "standard" }
      },
      female: {
        adult: { low: 26.9, high: 121.6, unit: "standard" },
        pediatric: { low: 22.8, high: 105.0, unit: "standard" },
        pregnancy: { low: 24.8, high: 147.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.7,
      panicHigh: 230.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1126,
    isActive: true
  },
  {
    id: "LOINC_1218",
    loincCode: "1218-8",
    testName: "Microbiology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "MICR_PARAM_23",
    category: "Microbiology",
    specimen: "Serum",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.0, high: 171.6, unit: "standard" },
        pediatric: { low: 27.2, high: 145.9, unit: "standard" },
        geriatric: { low: 35.7, high: 188.8, unit: "standard" }
      },
      female: {
        adult: { low: 31.3, high: 163.0, unit: "standard" },
        pediatric: { low: 26.5, high: 140.7, unit: "standard" },
        pregnancy: { low: 28.9, high: 197.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.6,
      panicHigh: 308.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1270,
    isActive: true
  },
  {
    id: "LOINC_1219",
    loincCode: "1219-4",
    testName: "Microbiology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "MICR_PARAM_24",
    category: "Microbiology",
    specimen: "Random Urine",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 34.4, high: 57.5, unit: "standard" },
        pediatric: { low: 27.5, high: 48.9, unit: "standard" },
        geriatric: { low: 36.1, high: 63.3, unit: "standard" }
      },
      female: {
        adult: { low: 31.6, high: 54.6, unit: "standard" },
        pediatric: { low: 26.8, high: 47.1, unit: "standard" },
        pregnancy: { low: 29.2, high: 66.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.8,
      panicHigh: 103.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1282,
    isActive: true
  },
  {
    id: "LOINC_1220",
    loincCode: "1220-9",
    testName: "Microbiology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "MICR_PARAM_25",
    category: "Microbiology",
    specimen: "Synovial Fluid",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.1, high: 146.2, unit: "standard" },
        pediatric: { low: 18.5, high: 124.3, unit: "standard" },
        geriatric: { low: 24.3, high: 160.8, unit: "standard" }
      },
      female: {
        adult: { low: 21.3, high: 138.9, unit: "standard" },
        pediatric: { low: 18.0, high: 119.9, unit: "standard" },
        pregnancy: { low: 19.6, high: 168.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.2,
      panicHigh: 263.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 943,
    isActive: true
  },
  {
    id: "LOINC_1221",
    loincCode: "1221-5",
    testName: "Microbiology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "MICR_PARAM_26",
    category: "Microbiology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.1, high: 162.6, unit: "standard" },
        pediatric: { low: 31.3, high: 138.2, unit: "standard" },
        geriatric: { low: 41.1, high: 178.9, unit: "standard" }
      },
      female: {
        adult: { low: 36.0, high: 154.5, unit: "standard" },
        pediatric: { low: 30.5, high: 133.3, unit: "standard" },
        pregnancy: { low: 33.2, high: 187.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.6,
      panicHigh: 292.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1423,
    isActive: true
  },
  {
    id: "LOINC_1222",
    loincCode: "1222-4",
    testName: "Microbiology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "MICR_PARAM_27",
    category: "Microbiology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 9.9, high: 85.1, unit: "standard" },
        pediatric: { low: 7.9, high: 72.3, unit: "standard" },
        geriatric: { low: 10.4, high: 93.6, unit: "standard" }
      },
      female: {
        adult: { low: 9.1, high: 80.8, unit: "standard" },
        pediatric: { low: 7.7, high: 69.8, unit: "standard" },
        pregnancy: { low: 8.4, high: 97.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 153.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 547,
    isActive: true
  },
  {
    id: "LOINC_1223",
    loincCode: "1223-4",
    testName: "Microbiology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "MICR_PARAM_28",
    category: "Microbiology",
    specimen: "Plasma (Citrate)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 34.0, high: 123.9, unit: "standard" },
        pediatric: { low: 27.2, high: 105.3, unit: "standard" },
        geriatric: { low: 35.7, high: 136.3, unit: "standard" }
      },
      female: {
        adult: { low: 31.3, high: 117.7, unit: "standard" },
        pediatric: { low: 26.5, high: 101.6, unit: "standard" },
        pregnancy: { low: 28.9, high: 142.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.6,
      panicHigh: 223.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1270,
    isActive: true
  },
  {
    id: "LOINC_1224",
    loincCode: "1224-9",
    testName: "Microbiology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "MICR_PARAM_29",
    category: "Microbiology",
    specimen: "CSF",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.6, high: 148.7, unit: "standard" },
        pediatric: { low: 6.1, high: 126.4, unit: "standard" },
        geriatric: { low: 8.0, high: 163.6, unit: "standard" }
      },
      female: {
        adult: { low: 7.0, high: 141.3, unit: "standard" },
        pediatric: { low: 5.9, high: 121.9, unit: "standard" },
        pregnancy: { low: 6.5, high: 171.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.0,
      panicHigh: 267.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 478,
    isActive: true
  },
  {
    id: "LOINC_1225",
    loincCode: "1225-8",
    testName: "Microbiology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "MICR_PARAM_30",
    category: "Microbiology",
    specimen: "Throat Swab",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 3.8, high: 114.9, unit: "standard" },
        pediatric: { low: 3.0, high: 97.7, unit: "standard" },
        geriatric: { low: 4.0, high: 126.4, unit: "standard" }
      },
      female: {
        adult: { low: 3.5, high: 109.2, unit: "standard" },
        pediatric: { low: 3.0, high: 94.2, unit: "standard" },
        pregnancy: { low: 3.2, high: 132.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.5,
      panicHigh: 206.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 364,
    isActive: true
  },
  {
    id: "LOINC_1226",
    loincCode: "1226-6",
    testName: "Microbiology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "MICR_PARAM_31",
    category: "Microbiology",
    specimen: "Stool Sample",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.0, high: 155.2, unit: "standard" },
        pediatric: { low: 11.2, high: 131.9, unit: "standard" },
        geriatric: { low: 14.7, high: 170.7, unit: "standard" }
      },
      female: {
        adult: { low: 12.9, high: 147.4, unit: "standard" },
        pediatric: { low: 10.9, high: 127.3, unit: "standard" },
        pregnancy: { low: 11.9, high: 178.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.6,
      panicHigh: 279.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 670,
    isActive: true
  },
  {
    id: "LOINC_1227",
    loincCode: "1227-6",
    testName: "Microbiology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "MICR_PARAM_32",
    category: "Microbiology",
    specimen: "Plasma (Heparin)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 23.2, high: 77.1, unit: "standard" },
        pediatric: { low: 18.6, high: 65.5, unit: "standard" },
        geriatric: { low: 24.4, high: 84.8, unit: "standard" }
      },
      female: {
        adult: { low: 21.3, high: 73.2, unit: "standard" },
        pediatric: { low: 18.1, high: 63.2, unit: "standard" },
        pregnancy: { low: 19.7, high: 88.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.3,
      panicHigh: 138.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 946,
    isActive: true
  },
  {
    id: "LOINC_1228",
    loincCode: "1228-3",
    testName: "Microbiology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "MICR_PARAM_33",
    category: "Microbiology",
    specimen: "24-Hour Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.0, high: 127.3, unit: "standard" },
        pediatric: { low: 37.6, high: 108.2, unit: "standard" },
        geriatric: { low: 49.4, high: 140.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.2, high: 120.9, unit: "standard" },
        pediatric: { low: 36.7, high: 104.4, unit: "standard" },
        pregnancy: { low: 39.9, high: 146.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 229.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1660,
    isActive: true
  },
  {
    id: "LOINC_1229",
    loincCode: "1229-4",
    testName: "Microbiology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "MICR_PARAM_34",
    category: "Microbiology",
    specimen: "Pleural Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.3, high: 119.9, unit: "standard" },
        pediatric: { low: 21.0, high: 101.9, unit: "standard" },
        geriatric: { low: 27.6, high: 131.9, unit: "standard" }
      },
      female: {
        adult: { low: 24.2, high: 113.9, unit: "standard" },
        pediatric: { low: 20.5, high: 98.3, unit: "standard" },
        pregnancy: { low: 22.4, high: 137.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.5,
      panicHigh: 215.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1039,
    isActive: true
  },
  {
    id: "LOINC_1230",
    loincCode: "1230-3",
    testName: "Microbiology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "MICR_PARAM_35",
    category: "Microbiology",
    specimen: "Tissue Biopsy",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 12.3, high: 51.9, unit: "standard" },
        pediatric: { low: 9.8, high: 44.1, unit: "standard" },
        geriatric: { low: 12.9, high: 57.1, unit: "standard" }
      },
      female: {
        adult: { low: 11.3, high: 49.3, unit: "standard" },
        pediatric: { low: 9.6, high: 42.6, unit: "standard" },
        pregnancy: { low: 10.5, high: 59.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.9,
      panicHigh: 93.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 619,
    isActive: true
  },
  {
    id: "LOINC_1231",
    loincCode: "1231-9",
    testName: "Microbiology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "MICR_PARAM_36",
    category: "Microbiology",
    specimen: "Serum",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.7, high: 46.3, unit: "standard" },
        pediatric: { low: 26.2, high: 39.4, unit: "standard" },
        geriatric: { low: 34.3, high: 50.9, unit: "standard" }
      },
      female: {
        adult: { low: 30.1, high: 44.0, unit: "standard" },
        pediatric: { low: 25.5, high: 38.0, unit: "standard" },
        pregnancy: { low: 27.8, high: 53.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.1,
      panicHigh: 83.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1231,
    isActive: true
  },
  {
    id: "LOINC_1232",
    loincCode: "1232-4",
    testName: "Microbiology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "MICR_PARAM_37",
    category: "Microbiology",
    specimen: "Random Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.1, high: 34.5, unit: "standard" },
        pediatric: { low: 8.9, high: 29.3, unit: "standard" },
        geriatric: { low: 11.7, high: 38.0, unit: "standard" }
      },
      female: {
        adult: { low: 10.2, high: 32.8, unit: "standard" },
        pediatric: { low: 8.7, high: 28.3, unit: "standard" },
        pregnancy: { low: 9.4, high: 39.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.4,
      panicHigh: 62.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 583,
    isActive: true
  },
  {
    id: "LOINC_1233",
    loincCode: "1233-9",
    testName: "Microbiology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "MICR_PARAM_38",
    category: "Microbiology",
    specimen: "Synovial Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.2, high: 23.9, unit: "standard" },
        pediatric: { low: 5.0, high: 20.3, unit: "standard" },
        geriatric: { low: 6.5, high: 26.3, unit: "standard" }
      },
      female: {
        adult: { low: 5.7, high: 22.7, unit: "standard" },
        pediatric: { low: 4.8, high: 19.6, unit: "standard" },
        pregnancy: { low: 5.3, high: 27.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 43.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 436,
    isActive: true
  },
  {
    id: "LOINC_1234",
    loincCode: "1234-1",
    testName: "Microbiology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "MICR_PARAM_39",
    category: "Microbiology",
    specimen: "Nasopharyngeal Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.1, high: 138.9, unit: "standard" },
        pediatric: { low: 20.9, high: 118.1, unit: "standard" },
        geriatric: { low: 27.4, high: 152.8, unit: "standard" }
      },
      female: {
        adult: { low: 24.0, high: 132.0, unit: "standard" },
        pediatric: { low: 20.4, high: 113.9, unit: "standard" },
        pregnancy: { low: 22.2, high: 159.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.4,
      panicHigh: 250.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1033,
    isActive: true
  },
  {
    id: "LOINC_1235",
    loincCode: "1235-3",
    testName: "Microbiology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "MICR_PARAM_40",
    category: "Microbiology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 37.9, high: 78.3, unit: "standard" },
        pediatric: { low: 30.3, high: 66.6, unit: "standard" },
        geriatric: { low: 39.8, high: 86.1, unit: "standard" }
      },
      female: {
        adult: { low: 34.9, high: 74.4, unit: "standard" },
        pediatric: { low: 29.6, high: 64.2, unit: "standard" },
        pregnancy: { low: 32.2, high: 90.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.2,
      panicHigh: 140.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1387,
    isActive: true
  },
  {
    id: "LOINC_1236",
    loincCode: "1236-8",
    testName: "Microbiology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "MICR_PARAM_41",
    category: "Microbiology",
    specimen: "Plasma (Citrate)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.1, high: 139.6, unit: "standard" },
        pediatric: { low: 16.9, high: 118.7, unit: "standard" },
        geriatric: { low: 22.2, high: 153.6, unit: "standard" }
      },
      female: {
        adult: { low: 19.4, high: 132.6, unit: "standard" },
        pediatric: { low: 16.5, high: 114.5, unit: "standard" },
        pregnancy: { low: 17.9, high: 160.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.4,
      panicHigh: 251.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 883,
    isActive: true
  },
  {
    id: "LOINC_1237",
    loincCode: "1237-1",
    testName: "Microbiology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "MICR_PARAM_42",
    category: "Microbiology",
    specimen: "CSF",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.0, high: 45.4, unit: "standard" },
        pediatric: { low: 4.8, high: 38.6, unit: "standard" },
        geriatric: { low: 6.3, high: 49.9, unit: "standard" }
      },
      female: {
        adult: { low: 5.5, high: 43.1, unit: "standard" },
        pediatric: { low: 4.7, high: 37.2, unit: "standard" },
        pregnancy: { low: 5.1, high: 52.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.4,
      panicHigh: 81.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 430,
    isActive: true
  },
  {
    id: "LOINC_1238",
    loincCode: "1238-1",
    testName: "Microbiology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "MICR_PARAM_43",
    category: "Microbiology",
    specimen: "Throat Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 105.8, unit: "standard" },
        pediatric: { low: 6.7, high: 89.9, unit: "standard" },
        geriatric: { low: 8.8, high: 116.4, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 100.5, unit: "standard" },
        pediatric: { low: 6.6, high: 86.8, unit: "standard" },
        pregnancy: { low: 7.1, high: 121.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 190.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1239",
    loincCode: "1239-1",
    testName: "Microbiology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "MICR_PARAM_44",
    category: "Microbiology",
    specimen: "Stool Sample",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.4, high: 59.5, unit: "standard" },
        pediatric: { low: 21.1, high: 50.6, unit: "standard" },
        geriatric: { low: 27.7, high: 65.5, unit: "standard" }
      },
      female: {
        adult: { low: 24.3, high: 56.5, unit: "standard" },
        pediatric: { low: 20.6, high: 48.8, unit: "standard" },
        pregnancy: { low: 22.4, high: 68.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 107.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1042,
    isActive: true
  },
  {
    id: "LOINC_1240",
    loincCode: "1240-8",
    testName: "Microbiology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "MICR_PARAM_45",
    category: "Microbiology",
    specimen: "Plasma (Heparin)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.5, high: 47.5, unit: "standard" },
        pediatric: { low: 9.2, high: 40.4, unit: "standard" },
        geriatric: { low: 12.1, high: 52.3, unit: "standard" }
      },
      female: {
        adult: { low: 10.6, high: 45.1, unit: "standard" },
        pediatric: { low: 9.0, high: 38.9, unit: "standard" },
        pregnancy: { low: 9.8, high: 54.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.6,
      panicHigh: 85.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 595,
    isActive: true
  },
  {
    id: "LOINC_1241",
    loincCode: "1241-6",
    testName: "Microbiology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "MICR_PARAM_46",
    category: "Microbiology",
    specimen: "24-Hour Urine",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.9, high: 118.8, unit: "standard" },
        pediatric: { low: 7.9, high: 101.0, unit: "standard" },
        geriatric: { low: 10.4, high: 130.7, unit: "standard" }
      },
      female: {
        adult: { low: 9.1, high: 112.9, unit: "standard" },
        pediatric: { low: 7.7, high: 97.4, unit: "standard" },
        pregnancy: { low: 8.4, high: 136.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 213.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 547,
    isActive: true
  },
  {
    id: "LOINC_1242",
    loincCode: "1242-5",
    testName: "Microbiology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "MICR_PARAM_47",
    category: "Microbiology",
    specimen: "Pleural Fluid",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.5, high: 61.1, unit: "standard" },
        pediatric: { low: 1.2, high: 51.9, unit: "standard" },
        geriatric: { low: 1.6, high: 67.2, unit: "standard" }
      },
      female: {
        adult: { low: 1.4, high: 58.0, unit: "standard" },
        pediatric: { low: 1.2, high: 50.1, unit: "standard" },
        pregnancy: { low: 1.3, high: 70.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 110.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 295,
    isActive: true
  },
  {
    id: "LOINC_1243",
    loincCode: "1243-3",
    testName: "Microbiology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "MICR_PARAM_48",
    category: "Microbiology",
    specimen: "Tissue Biopsy",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.4, high: 39.3, unit: "standard" },
        pediatric: { low: 17.1, high: 33.4, unit: "standard" },
        geriatric: { low: 22.5, high: 43.2, unit: "standard" }
      },
      female: {
        adult: { low: 19.7, high: 37.3, unit: "standard" },
        pediatric: { low: 16.7, high: 32.2, unit: "standard" },
        pregnancy: { low: 18.2, high: 45.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 70.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 892,
    isActive: true
  },
  {
    id: "LOINC_1244",
    loincCode: "1244-5",
    testName: "Microbiology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "MICR_PARAM_49",
    category: "Microbiology",
    specimen: "Serum",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 16.5, high: 33.6, unit: "standard" },
        pediatric: { low: 13.2, high: 28.6, unit: "standard" },
        geriatric: { low: 17.3, high: 37.0, unit: "standard" }
      },
      female: {
        adult: { low: 15.2, high: 31.9, unit: "standard" },
        pediatric: { low: 12.9, high: 27.6, unit: "standard" },
        pregnancy: { low: 14.0, high: 38.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.6,
      panicHigh: 60.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 745,
    isActive: true
  },
  {
    id: "LOINC_1245",
    loincCode: "1245-8",
    testName: "Microbiology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "MICR_PARAM_50",
    category: "Microbiology",
    specimen: "Random Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.8, high: 134.3, unit: "standard" },
        pediatric: { low: 15.0, high: 114.2, unit: "standard" },
        geriatric: { low: 19.7, high: 147.7, unit: "standard" }
      },
      female: {
        adult: { low: 17.3, high: 127.6, unit: "standard" },
        pediatric: { low: 14.7, high: 110.1, unit: "standard" },
        pregnancy: { low: 16.0, high: 154.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.5,
      panicHigh: 241.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 814,
    isActive: true
  },
  {
    id: "LOINC_1246",
    loincCode: "1246-7",
    testName: "Microbiology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "MICR_PARAM_51",
    category: "Microbiology",
    specimen: "Synovial Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.8, high: 62.0, unit: "standard" },
        pediatric: { low: 9.4, high: 52.7, unit: "standard" },
        geriatric: { low: 12.4, high: 68.2, unit: "standard" }
      },
      female: {
        adult: { low: 10.9, high: 58.9, unit: "standard" },
        pediatric: { low: 9.2, high: 50.8, unit: "standard" },
        pregnancy: { low: 10.0, high: 71.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 111.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 604,
    isActive: true
  },
  {
    id: "LOINC_1247",
    loincCode: "1247-3",
    testName: "Microbiology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "MICR_PARAM_52",
    category: "Microbiology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.9, high: 15.0, unit: "standard" },
        pediatric: { low: 3.9, high: 12.8, unit: "standard" },
        geriatric: { low: 5.1, high: 16.5, unit: "standard" }
      },
      female: {
        adult: { low: 4.5, high: 14.3, unit: "standard" },
        pediatric: { low: 3.8, high: 12.3, unit: "standard" },
        pregnancy: { low: 4.2, high: 17.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.0,
      panicHigh: 27.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 397,
    isActive: true
  },
  {
    id: "LOINC_1248",
    loincCode: "1248-7",
    testName: "Microbiology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "MICR_PARAM_53",
    category: "Microbiology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.8, high: 162.0, unit: "standard" },
        pediatric: { low: 11.8, high: 137.7, unit: "standard" },
        geriatric: { low: 15.5, high: 178.2, unit: "standard" }
      },
      female: {
        adult: { low: 13.6, high: 153.9, unit: "standard" },
        pediatric: { low: 11.5, high: 132.8, unit: "standard" },
        pregnancy: { low: 12.6, high: 186.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.9,
      panicHigh: 291.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 694,
    isActive: true
  },
  {
    id: "LOINC_1249",
    loincCode: "1249-3",
    testName: "Microbiology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "MICR_PARAM_54",
    category: "Microbiology",
    specimen: "Plasma (Citrate)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.2, high: 101.1, unit: "standard" },
        pediatric: { low: 19.4, high: 85.9, unit: "standard" },
        geriatric: { low: 25.4, high: 111.2, unit: "standard" }
      },
      female: {
        adult: { low: 22.3, high: 96.0, unit: "standard" },
        pediatric: { low: 18.9, high: 82.9, unit: "standard" },
        pregnancy: { low: 20.6, high: 116.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.7,
      panicHigh: 182.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 976,
    isActive: true
  },
  {
    id: "LOINC_1250",
    loincCode: "1250-2",
    testName: "Microbiology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "MICR_PARAM_55",
    category: "Microbiology",
    specimen: "CSF",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.8, high: 151.2, unit: "standard" },
        pediatric: { low: 38.2, high: 128.5, unit: "standard" },
        geriatric: { low: 50.2, high: 166.3, unit: "standard" }
      },
      female: {
        adult: { low: 44.0, high: 143.6, unit: "standard" },
        pediatric: { low: 37.3, high: 124.0, unit: "standard" },
        pregnancy: { low: 40.6, high: 173.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 272.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1684,
    isActive: true
  },
  {
    id: "LOINC_1251",
    loincCode: "1251-8",
    testName: "Microbiology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "MICR_PARAM_56",
    category: "Microbiology",
    specimen: "Throat Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.9, high: 74.6, unit: "standard" },
        pediatric: { low: 31.1, high: 63.4, unit: "standard" },
        geriatric: { low: 40.8, high: 82.1, unit: "standard" }
      },
      female: {
        adult: { low: 35.8, high: 70.9, unit: "standard" },
        pediatric: { low: 30.3, high: 61.2, unit: "standard" },
        pregnancy: { low: 33.1, high: 85.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.6,
      panicHigh: 134.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1417,
    isActive: true
  },
  {
    id: "LOINC_1252",
    loincCode: "1252-6",
    testName: "Microbiology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "MICR_PARAM_57",
    category: "Microbiology",
    specimen: "Stool Sample",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 43.1, high: 177.7, unit: "standard" },
        pediatric: { low: 34.5, high: 151.0, unit: "standard" },
        geriatric: { low: 45.3, high: 195.5, unit: "standard" }
      },
      female: {
        adult: { low: 39.7, high: 168.8, unit: "standard" },
        pediatric: { low: 33.6, high: 145.7, unit: "standard" },
        pregnancy: { low: 36.6, high: 204.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 319.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1543,
    isActive: true
  },
  {
    id: "LOINC_1253",
    loincCode: "1253-3",
    testName: "Microbiology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "MICR_PARAM_58",
    category: "Microbiology",
    specimen: "Plasma (Heparin)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.2, high: 75.1, unit: "standard" },
        pediatric: { low: 1.0, high: 63.8, unit: "standard" },
        geriatric: { low: 1.3, high: 82.6, unit: "standard" }
      },
      female: {
        adult: { low: 1.1, high: 71.3, unit: "standard" },
        pediatric: { low: 0.9, high: 61.6, unit: "standard" },
        pregnancy: { low: 1.0, high: 86.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.5,
      panicHigh: 135.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 286,
    isActive: true
  },
  {
    id: "LOINC_1254",
    loincCode: "1254-9",
    testName: "Microbiology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "MICR_PARAM_59",
    category: "Microbiology",
    specimen: "24-Hour Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.2, high: 177.2, unit: "standard" },
        pediatric: { low: 24.2, high: 150.6, unit: "standard" },
        geriatric: { low: 31.7, high: 194.9, unit: "standard" }
      },
      female: {
        adult: { low: 27.8, high: 168.3, unit: "standard" },
        pediatric: { low: 23.6, high: 145.3, unit: "standard" },
        pregnancy: { low: 25.7, high: 203.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.1,
      panicHigh: 319.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1156,
    isActive: true
  },
  {
    id: "LOINC_1255",
    loincCode: "1255-1",
    testName: "Microbiology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "MICR_PARAM_60",
    category: "Microbiology",
    specimen: "Pleural Fluid",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 28.6, high: 154.0, unit: "standard" },
        pediatric: { low: 22.9, high: 130.9, unit: "standard" },
        geriatric: { low: 30.0, high: 169.4, unit: "standard" }
      },
      female: {
        adult: { low: 26.3, high: 146.3, unit: "standard" },
        pediatric: { low: 22.3, high: 126.3, unit: "standard" },
        pregnancy: { low: 24.3, high: 177.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 277.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1108,
    isActive: true
  },
  {
    id: "LOINC_1256",
    loincCode: "1256-9",
    testName: "Microbiology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "MICR_PARAM_61",
    category: "Microbiology",
    specimen: "Tissue Biopsy",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 20.8, high: 153.8, unit: "standard" },
        pediatric: { low: 16.6, high: 130.7, unit: "standard" },
        geriatric: { low: 21.8, high: 169.2, unit: "standard" }
      },
      female: {
        adult: { low: 19.1, high: 146.1, unit: "standard" },
        pediatric: { low: 16.2, high: 126.1, unit: "standard" },
        pregnancy: { low: 17.7, high: 176.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.3,
      panicHigh: 276.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 874,
    isActive: true
  },
  {
    id: "LOINC_1257",
    loincCode: "1257-4",
    testName: "Microbiology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "MICR_PARAM_62",
    category: "Microbiology",
    specimen: "Serum",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 35.3, high: 108.4, unit: "standard" },
        pediatric: { low: 28.2, high: 92.1, unit: "standard" },
        geriatric: { low: 37.1, high: 119.2, unit: "standard" }
      },
      female: {
        adult: { low: 32.5, high: 103.0, unit: "standard" },
        pediatric: { low: 27.5, high: 88.9, unit: "standard" },
        pregnancy: { low: 30.0, high: 124.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.1,
      panicHigh: 195.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1309,
    isActive: true
  },
  {
    id: "LOINC_1258",
    loincCode: "1258-2",
    testName: "Microbiology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "MICR_PARAM_63",
    category: "Microbiology",
    specimen: "Random Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.5, high: 34.7, unit: "standard" },
        pediatric: { low: 1.2, high: 29.5, unit: "standard" },
        geriatric: { low: 1.6, high: 38.2, unit: "standard" }
      },
      female: {
        adult: { low: 1.4, high: 33.0, unit: "standard" },
        pediatric: { low: 1.2, high: 28.5, unit: "standard" },
        pregnancy: { low: 1.3, high: 39.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 62.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 295,
    isActive: true
  },
  {
    id: "LOINC_1259",
    loincCode: "1259-1",
    testName: "Microbiology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "MICR_PARAM_64",
    category: "Microbiology",
    specimen: "Synovial Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.3, high: 48.0, unit: "standard" },
        pediatric: { low: 33.0, high: 40.8, unit: "standard" },
        geriatric: { low: 43.4, high: 52.8, unit: "standard" }
      },
      female: {
        adult: { low: 38.0, high: 45.6, unit: "standard" },
        pediatric: { low: 32.2, high: 39.4, unit: "standard" },
        pregnancy: { low: 35.1, high: 55.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 86.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1489,
    isActive: true
  },
  {
    id: "LOINC_1260",
    loincCode: "1260-9",
    testName: "Microbiology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "MICR_PARAM_65",
    category: "Microbiology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 38.8, high: 184.2, unit: "standard" },
        pediatric: { low: 31.0, high: 156.6, unit: "standard" },
        geriatric: { low: 40.7, high: 202.6, unit: "standard" }
      },
      female: {
        adult: { low: 35.7, high: 175.0, unit: "standard" },
        pediatric: { low: 30.3, high: 151.0, unit: "standard" },
        pregnancy: { low: 33.0, high: 211.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.5,
      panicHigh: 331.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in microbiology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in microbiology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1414,
    isActive: true
  },
  {
    id: "LOINC_1261",
    loincCode: "1261-2",
    testName: "Serology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "SERO_PARAM_1",
    category: "Serology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.6, high: 77.0, unit: "standard" },
        pediatric: { low: 18.9, high: 65.5, unit: "standard" },
        geriatric: { low: 24.8, high: 84.7, unit: "standard" }
      },
      female: {
        adult: { low: 21.7, high: 73.1, unit: "standard" },
        pediatric: { low: 18.4, high: 63.1, unit: "standard" },
        pregnancy: { low: 20.1, high: 88.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.4,
      panicHigh: 138.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 958,
    isActive: true
  },
  {
    id: "LOINC_1262",
    loincCode: "1262-8",
    testName: "Serology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "SERO_PARAM_2",
    category: "Serology",
    specimen: "Plasma (Citrate)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.8, high: 118.6, unit: "standard" },
        pediatric: { low: 39.0, high: 100.8, unit: "standard" },
        geriatric: { low: 51.2, high: 130.5, unit: "standard" }
      },
      female: {
        adult: { low: 44.9, high: 112.7, unit: "standard" },
        pediatric: { low: 38.1, high: 97.3, unit: "standard" },
        pregnancy: { low: 41.5, high: 136.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.5,
      panicHigh: 213.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1714,
    isActive: true
  },
  {
    id: "LOINC_1263",
    loincCode: "1263-8",
    testName: "Serology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "SERO_PARAM_3",
    category: "Serology",
    specimen: "CSF",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 48.4, high: 153.2, unit: "standard" },
        pediatric: { low: 38.7, high: 130.2, unit: "standard" },
        geriatric: { low: 50.8, high: 168.5, unit: "standard" }
      },
      female: {
        adult: { low: 44.5, high: 145.5, unit: "standard" },
        pediatric: { low: 37.8, high: 125.6, unit: "standard" },
        pregnancy: { low: 41.1, high: 176.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.4,
      panicHigh: 275.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1702,
    isActive: true
  },
  {
    id: "LOINC_1264",
    loincCode: "1264-3",
    testName: "Serology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "SERO_PARAM_4",
    category: "Serology",
    specimen: "Throat Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.4, high: 157.7, unit: "standard" },
        pediatric: { low: 33.9, high: 134.0, unit: "standard" },
        geriatric: { low: 44.5, high: 173.5, unit: "standard" }
      },
      female: {
        adult: { low: 39.0, high: 149.8, unit: "standard" },
        pediatric: { low: 33.1, high: 129.3, unit: "standard" },
        pregnancy: { low: 36.0, high: 181.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.0,
      panicHigh: 283.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1522,
    isActive: true
  },
  {
    id: "LOINC_1265",
    loincCode: "1265-3",
    testName: "Serology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "SERO_PARAM_5",
    category: "Serology",
    specimen: "Stool Sample",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 3.3, high: 71.2, unit: "standard" },
        pediatric: { low: 2.6, high: 60.5, unit: "standard" },
        geriatric: { low: 3.5, high: 78.3, unit: "standard" }
      },
      female: {
        adult: { low: 3.0, high: 67.6, unit: "standard" },
        pediatric: { low: 2.6, high: 58.4, unit: "standard" },
        pregnancy: { low: 2.8, high: 81.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.3,
      panicHigh: 128.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 349,
    isActive: true
  },
  {
    id: "LOINC_1266",
    loincCode: "1266-9",
    testName: "Serology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "SERO_PARAM_6",
    category: "Serology",
    specimen: "Plasma (Heparin)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 28.2, high: 72.4, unit: "standard" },
        pediatric: { low: 22.6, high: 61.5, unit: "standard" },
        geriatric: { low: 29.6, high: 79.6, unit: "standard" }
      },
      female: {
        adult: { low: 25.9, high: 68.8, unit: "standard" },
        pediatric: { low: 22.0, high: 59.4, unit: "standard" },
        pregnancy: { low: 24.0, high: 83.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.3,
      panicHigh: 130.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1096,
    isActive: true
  },
  {
    id: "LOINC_1267",
    loincCode: "1267-5",
    testName: "Serology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "SERO_PARAM_7",
    category: "Serology",
    specimen: "24-Hour Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.6, high: 143.2, unit: "standard" },
        pediatric: { low: 19.7, high: 121.7, unit: "standard" },
        geriatric: { low: 25.8, high: 157.5, unit: "standard" }
      },
      female: {
        adult: { low: 22.6, high: 136.0, unit: "standard" },
        pediatric: { low: 19.2, high: 117.4, unit: "standard" },
        pregnancy: { low: 20.9, high: 164.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.8,
      panicHigh: 257.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 988,
    isActive: true
  },
  {
    id: "LOINC_1268",
    loincCode: "1268-9",
    testName: "Serology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "SERO_PARAM_8",
    category: "Serology",
    specimen: "Pleural Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.8, high: 150.0, unit: "standard" },
        pediatric: { low: 15.8, high: 127.5, unit: "standard" },
        geriatric: { low: 20.8, high: 165.0, unit: "standard" }
      },
      female: {
        adult: { low: 18.2, high: 142.5, unit: "standard" },
        pediatric: { low: 15.4, high: 123.0, unit: "standard" },
        pregnancy: { low: 16.8, high: 172.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.9,
      panicHigh: 270.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 844,
    isActive: true
  },
  {
    id: "LOINC_1269",
    loincCode: "1269-8",
    testName: "Serology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "SERO_PARAM_9",
    category: "Serology",
    specimen: "Tissue Biopsy",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 6.8, high: 161.5, unit: "standard" },
        pediatric: { low: 5.4, high: 137.3, unit: "standard" },
        geriatric: { low: 7.1, high: 177.7, unit: "standard" }
      },
      female: {
        adult: { low: 6.3, high: 153.4, unit: "standard" },
        pediatric: { low: 5.3, high: 132.4, unit: "standard" },
        pregnancy: { low: 5.8, high: 185.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.7,
      panicHigh: 290.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 454,
    isActive: true
  },
  {
    id: "LOINC_1270",
    loincCode: "1270-4",
    testName: "Serology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "SERO_PARAM_10",
    category: "Serology",
    specimen: "Serum",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 17.2, high: 138.6, unit: "standard" },
        pediatric: { low: 13.8, high: 117.8, unit: "standard" },
        geriatric: { low: 18.1, high: 152.5, unit: "standard" }
      },
      female: {
        adult: { low: 15.8, high: 131.7, unit: "standard" },
        pediatric: { low: 13.4, high: 113.7, unit: "standard" },
        pregnancy: { low: 14.6, high: 159.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.9,
      panicHigh: 249.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 766,
    isActive: true
  },
  {
    id: "LOINC_1271",
    loincCode: "1271-6",
    testName: "Serology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "SERO_PARAM_11",
    category: "Serology",
    specimen: "Random Urine",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.2, high: 101.9, unit: "standard" },
        pediatric: { low: 35.4, high: 86.6, unit: "standard" },
        geriatric: { low: 46.4, high: 112.1, unit: "standard" }
      },
      female: {
        adult: { low: 40.7, high: 96.8, unit: "standard" },
        pediatric: { low: 34.5, high: 83.6, unit: "standard" },
        pregnancy: { low: 37.6, high: 117.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.7,
      panicHigh: 183.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1576,
    isActive: true
  },
  {
    id: "LOINC_1272",
    loincCode: "1272-7",
    testName: "Serology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "SERO_PARAM_12",
    category: "Serology",
    specimen: "Synovial Fluid",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 14.3, high: 118.6, unit: "standard" },
        pediatric: { low: 11.4, high: 100.8, unit: "standard" },
        geriatric: { low: 15.0, high: 130.5, unit: "standard" }
      },
      female: {
        adult: { low: 13.2, high: 112.7, unit: "standard" },
        pediatric: { low: 11.2, high: 97.3, unit: "standard" },
        pregnancy: { low: 12.2, high: 136.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.7,
      panicHigh: 213.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 679,
    isActive: true
  },
  {
    id: "LOINC_1273",
    loincCode: "1273-9",
    testName: "Serology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "SERO_PARAM_13",
    category: "Serology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.4, high: 110.1, unit: "standard" },
        pediatric: { low: 19.5, high: 93.6, unit: "standard" },
        geriatric: { low: 25.6, high: 121.1, unit: "standard" }
      },
      female: {
        adult: { low: 22.4, high: 104.6, unit: "standard" },
        pediatric: { low: 19.0, high: 90.3, unit: "standard" },
        pregnancy: { low: 20.7, high: 126.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.8,
      panicHigh: 198.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 982,
    isActive: true
  },
  {
    id: "LOINC_1274",
    loincCode: "1274-2",
    testName: "Serology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "SERO_PARAM_14",
    category: "Serology",
    specimen: "Whole Blood (EDTA)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.0, high: 33.8, unit: "standard" },
        pediatric: { low: 14.4, high: 28.7, unit: "standard" },
        geriatric: { low: 18.9, high: 37.2, unit: "standard" }
      },
      female: {
        adult: { low: 16.6, high: 32.1, unit: "standard" },
        pediatric: { low: 14.0, high: 27.7, unit: "standard" },
        pregnancy: { low: 15.3, high: 38.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.2,
      panicHigh: 60.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 790,
    isActive: true
  },
  {
    id: "LOINC_1275",
    loincCode: "1275-9",
    testName: "Serology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "SERO_PARAM_15",
    category: "Serology",
    specimen: "Plasma (Citrate)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.6, high: 112.8, unit: "standard" },
        pediatric: { low: 14.9, high: 95.9, unit: "standard" },
        geriatric: { low: 19.5, high: 124.1, unit: "standard" }
      },
      female: {
        adult: { low: 17.1, high: 107.2, unit: "standard" },
        pediatric: { low: 14.5, high: 92.5, unit: "standard" },
        pregnancy: { low: 15.8, high: 129.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 203.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 808,
    isActive: true
  },
  {
    id: "LOINC_1276",
    loincCode: "1276-6",
    testName: "Serology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "SERO_PARAM_16",
    category: "Serology",
    specimen: "CSF",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.4, high: 72.7, unit: "standard" },
        pediatric: { low: 14.7, high: 61.8, unit: "standard" },
        geriatric: { low: 19.3, high: 80.0, unit: "standard" }
      },
      female: {
        adult: { low: 16.9, high: 69.1, unit: "standard" },
        pediatric: { low: 14.4, high: 59.6, unit: "standard" },
        pregnancy: { low: 15.6, high: 83.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 130.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 802,
    isActive: true
  },
  {
    id: "LOINC_1277",
    loincCode: "1277-8",
    testName: "Serology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "SERO_PARAM_17",
    category: "Serology",
    specimen: "Throat Swab",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.8, high: 154.2, unit: "standard" },
        pediatric: { low: 19.8, high: 131.1, unit: "standard" },
        geriatric: { low: 26.0, high: 169.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.8, high: 146.5, unit: "standard" },
        pediatric: { low: 19.3, high: 126.4, unit: "standard" },
        pregnancy: { low: 21.1, high: 177.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 277.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 994,
    isActive: true
  },
  {
    id: "LOINC_1278",
    loincCode: "1278-8",
    testName: "Serology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "SERO_PARAM_18",
    category: "Serology",
    specimen: "Stool Sample",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.7, high: 30.9, unit: "standard" },
        pediatric: { low: 7.0, high: 26.3, unit: "standard" },
        geriatric: { low: 9.1, high: 34.0, unit: "standard" }
      },
      female: {
        adult: { low: 8.0, high: 29.4, unit: "standard" },
        pediatric: { low: 6.8, high: 25.3, unit: "standard" },
        pregnancy: { low: 7.4, high: 35.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.5,
      panicHigh: 55.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 511,
    isActive: true
  },
  {
    id: "LOINC_1279",
    loincCode: "1279-7",
    testName: "Serology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "SERO_PARAM_19",
    category: "Serology",
    specimen: "Plasma (Heparin)",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 155.8, unit: "standard" },
        pediatric: { low: 31.4, high: 132.4, unit: "standard" },
        geriatric: { low: 41.2, high: 171.4, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 148.0, unit: "standard" },
        pediatric: { low: 30.6, high: 127.8, unit: "standard" },
        pregnancy: { low: 33.3, high: 179.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 280.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1280",
    loincCode: "1280-6",
    testName: "Serology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "SERO_PARAM_20",
    category: "Serology",
    specimen: "24-Hour Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 12.0, high: 86.3, unit: "standard" },
        pediatric: { low: 9.6, high: 73.4, unit: "standard" },
        geriatric: { low: 12.6, high: 94.9, unit: "standard" }
      },
      female: {
        adult: { low: 11.0, high: 82.0, unit: "standard" },
        pediatric: { low: 9.4, high: 70.8, unit: "standard" },
        pregnancy: { low: 10.2, high: 99.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.8,
      panicHigh: 155.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 610,
    isActive: true
  },
  {
    id: "LOINC_1281",
    loincCode: "1281-1",
    testName: "Serology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "SERO_PARAM_21",
    category: "Serology",
    specimen: "Pleural Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.7, high: 29.7, unit: "standard" },
        pediatric: { low: 4.6, high: 25.2, unit: "standard" },
        geriatric: { low: 6.0, high: 32.7, unit: "standard" }
      },
      female: {
        adult: { low: 5.2, high: 28.2, unit: "standard" },
        pediatric: { low: 4.4, high: 24.4, unit: "standard" },
        pregnancy: { low: 4.8, high: 34.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.3,
      panicHigh: 53.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 421,
    isActive: true
  },
  {
    id: "LOINC_1282",
    loincCode: "1282-8",
    testName: "Serology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "SERO_PARAM_22",
    category: "Serology",
    specimen: "Tissue Biopsy",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.9, high: 35.4, unit: "standard" },
        pediatric: { low: 18.3, high: 30.1, unit: "standard" },
        geriatric: { low: 24.0, high: 38.9, unit: "standard" }
      },
      female: {
        adult: { low: 21.1, high: 33.6, unit: "standard" },
        pediatric: { low: 17.9, high: 29.0, unit: "standard" },
        pregnancy: { low: 19.5, high: 40.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.2,
      panicHigh: 63.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 937,
    isActive: true
  },
  {
    id: "LOINC_1283",
    loincCode: "1283-4",
    testName: "Serology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "SERO_PARAM_23",
    category: "Serology",
    specimen: "Serum",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.7, high: 156.2, unit: "standard" },
        pediatric: { low: 19.8, high: 132.8, unit: "standard" },
        geriatric: { low: 25.9, high: 171.8, unit: "standard" }
      },
      female: {
        adult: { low: 22.7, high: 148.4, unit: "standard" },
        pediatric: { low: 19.3, high: 128.1, unit: "standard" },
        pregnancy: { low: 21.0, high: 179.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 281.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 991,
    isActive: true
  },
  {
    id: "LOINC_1284",
    loincCode: "1284-1",
    testName: "Serology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "SERO_PARAM_24",
    category: "Serology",
    specimen: "Random Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.2, high: 156.3, unit: "standard" },
        pediatric: { low: 7.4, high: 132.9, unit: "standard" },
        geriatric: { low: 9.7, high: 171.9, unit: "standard" }
      },
      female: {
        adult: { low: 8.5, high: 148.5, unit: "standard" },
        pediatric: { low: 7.2, high: 128.2, unit: "standard" },
        pregnancy: { low: 7.8, high: 179.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.7,
      panicHigh: 281.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 526,
    isActive: true
  },
  {
    id: "LOINC_1285",
    loincCode: "1285-4",
    testName: "Serology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "SERO_PARAM_25",
    category: "Serology",
    specimen: "Synovial Fluid",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 2.5, high: 106.5, unit: "standard" },
        pediatric: { low: 2.0, high: 90.5, unit: "standard" },
        geriatric: { low: 2.6, high: 117.2, unit: "standard" }
      },
      female: {
        adult: { low: 2.3, high: 101.2, unit: "standard" },
        pediatric: { low: 2.0, high: 87.3, unit: "standard" },
        pregnancy: { low: 2.1, high: 122.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.0,
      panicHigh: 191.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 325,
    isActive: true
  },
  {
    id: "LOINC_1286",
    loincCode: "1286-4",
    testName: "Serology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "SERO_PARAM_26",
    category: "Serology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 127.5, unit: "standard" },
        pediatric: { low: 6.7, high: 108.4, unit: "standard" },
        geriatric: { low: 8.8, high: 140.3, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 121.1, unit: "standard" },
        pediatric: { low: 6.6, high: 104.5, unit: "standard" },
        pregnancy: { low: 7.1, high: 146.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 229.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1287",
    loincCode: "1287-8",
    testName: "Serology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "SERO_PARAM_27",
    category: "Serology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.4, high: 184.7, unit: "standard" },
        pediatric: { low: 32.3, high: 157.0, unit: "standard" },
        geriatric: { low: 42.4, high: 203.2, unit: "standard" }
      },
      female: {
        adult: { low: 37.2, high: 175.5, unit: "standard" },
        pediatric: { low: 31.5, high: 151.5, unit: "standard" },
        pregnancy: { low: 34.3, high: 212.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.2,
      panicHigh: 332.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1462,
    isActive: true
  },
  {
    id: "LOINC_1288",
    loincCode: "1288-8",
    testName: "Serology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "SERO_PARAM_28",
    category: "Serology",
    specimen: "Plasma (Citrate)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.1, high: 94.2, unit: "standard" },
        pediatric: { low: 19.3, high: 80.1, unit: "standard" },
        geriatric: { low: 25.3, high: 103.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.2, high: 89.5, unit: "standard" },
        pediatric: { low: 18.8, high: 77.2, unit: "standard" },
        pregnancy: { low: 20.5, high: 108.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.6,
      panicHigh: 169.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 973,
    isActive: true
  },
  {
    id: "LOINC_1289",
    loincCode: "1289-8",
    testName: "Serology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "SERO_PARAM_29",
    category: "Serology",
    specimen: "CSF",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.3, high: 25.7, unit: "standard" },
        pediatric: { low: 11.4, high: 21.8, unit: "standard" },
        geriatric: { low: 15.0, high: 28.3, unit: "standard" }
      },
      female: {
        adult: { low: 13.2, high: 24.4, unit: "standard" },
        pediatric: { low: 11.2, high: 21.1, unit: "standard" },
        pregnancy: { low: 12.2, high: 29.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.7,
      panicHigh: 46.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 679,
    isActive: true
  },
  {
    id: "LOINC_1290",
    loincCode: "1290-8",
    testName: "Serology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "SERO_PARAM_30",
    category: "Serology",
    specimen: "Throat Swab",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.2, high: 52.0, unit: "standard" },
        pediatric: { low: 3.4, high: 44.2, unit: "standard" },
        geriatric: { low: 4.4, high: 57.2, unit: "standard" }
      },
      female: {
        adult: { low: 3.9, high: 49.4, unit: "standard" },
        pediatric: { low: 3.3, high: 42.6, unit: "standard" },
        pregnancy: { low: 3.6, high: 59.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 93.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 376,
    isActive: true
  },
  {
    id: "LOINC_1291",
    loincCode: "1291-4",
    testName: "Serology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "SERO_PARAM_31",
    category: "Serology",
    specimen: "Stool Sample",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.3, high: 149.3, unit: "standard" },
        pediatric: { low: 1.0, high: 126.9, unit: "standard" },
        geriatric: { low: 1.4, high: 164.2, unit: "standard" }
      },
      female: {
        adult: { low: 1.2, high: 141.8, unit: "standard" },
        pediatric: { low: 1.0, high: 122.4, unit: "standard" },
        pregnancy: { low: 1.1, high: 171.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.5,
      panicHigh: 268.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 289,
    isActive: true
  },
  {
    id: "LOINC_1292",
    loincCode: "1292-9",
    testName: "Serology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "SERO_PARAM_32",
    category: "Serology",
    specimen: "Plasma (Heparin)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.0, high: 153.9, unit: "standard" },
        pediatric: { low: 34.4, high: 130.8, unit: "standard" },
        geriatric: { low: 45.1, high: 169.3, unit: "standard" }
      },
      female: {
        adult: { low: 39.6, high: 146.2, unit: "standard" },
        pediatric: { low: 33.5, high: 126.2, unit: "standard" },
        pregnancy: { low: 36.5, high: 177.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 277.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1540,
    isActive: true
  },
  {
    id: "LOINC_1293",
    loincCode: "1293-9",
    testName: "Serology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "SERO_PARAM_33",
    category: "Serology",
    specimen: "24-Hour Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.6, high: 46.2, unit: "standard" },
        pediatric: { low: 15.7, high: 39.3, unit: "standard" },
        geriatric: { low: 20.6, high: 50.8, unit: "standard" }
      },
      female: {
        adult: { low: 18.0, high: 43.9, unit: "standard" },
        pediatric: { low: 15.3, high: 37.9, unit: "standard" },
        pregnancy: { low: 16.7, high: 53.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 83.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 838,
    isActive: true
  },
  {
    id: "LOINC_1294",
    loincCode: "1294-7",
    testName: "Serology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "SERO_PARAM_34",
    category: "Serology",
    specimen: "Pleural Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.6, high: 30.2, unit: "standard" },
        pediatric: { low: 0.5, high: 25.7, unit: "standard" },
        geriatric: { low: 0.6, high: 33.2, unit: "standard" }
      },
      female: {
        adult: { low: 0.6, high: 28.7, unit: "standard" },
        pediatric: { low: 0.5, high: 24.8, unit: "standard" },
        pregnancy: { low: 0.5, high: 34.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.2,
      panicHigh: 54.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 268,
    isActive: true
  },
  {
    id: "LOINC_1295",
    loincCode: "1295-2",
    testName: "Serology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "SERO_PARAM_35",
    category: "Serology",
    specimen: "Tissue Biopsy",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.1, high: 61.8, unit: "standard" },
        pediatric: { low: 6.5, high: 52.5, unit: "standard" },
        geriatric: { low: 8.5, high: 68.0, unit: "standard" }
      },
      female: {
        adult: { low: 7.5, high: 58.7, unit: "standard" },
        pediatric: { low: 6.3, high: 50.7, unit: "standard" },
        pregnancy: { low: 6.9, high: 71.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.2,
      panicHigh: 111.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 493,
    isActive: true
  },
  {
    id: "LOINC_1296",
    loincCode: "1296-3",
    testName: "Serology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "SERO_PARAM_36",
    category: "Serology",
    specimen: "Serum",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.2, high: 92.9, unit: "standard" },
        pediatric: { low: 3.4, high: 79.0, unit: "standard" },
        geriatric: { low: 4.4, high: 102.2, unit: "standard" }
      },
      female: {
        adult: { low: 3.9, high: 88.3, unit: "standard" },
        pediatric: { low: 3.3, high: 76.2, unit: "standard" },
        pregnancy: { low: 3.6, high: 106.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 167.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 376,
    isActive: true
  },
  {
    id: "LOINC_1297",
    loincCode: "1297-6",
    testName: "Serology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "SERO_PARAM_37",
    category: "Serology",
    specimen: "Random Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.4, high: 45.5, unit: "standard" },
        pediatric: { low: 22.7, high: 38.7, unit: "standard" },
        geriatric: { low: 29.8, high: 50.1, unit: "standard" }
      },
      female: {
        adult: { low: 26.1, high: 43.2, unit: "standard" },
        pediatric: { low: 22.2, high: 37.3, unit: "standard" },
        pregnancy: { low: 24.1, high: 52.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 81.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1102,
    isActive: true
  },
  {
    id: "LOINC_1298",
    loincCode: "1298-7",
    testName: "Serology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "SERO_PARAM_38",
    category: "Serology",
    specimen: "Synovial Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 7.5, high: 128.0, unit: "standard" },
        pediatric: { low: 6.0, high: 108.8, unit: "standard" },
        geriatric: { low: 7.9, high: 140.8, unit: "standard" }
      },
      female: {
        adult: { low: 6.9, high: 121.6, unit: "standard" },
        pediatric: { low: 5.9, high: 105.0, unit: "standard" },
        pregnancy: { low: 6.4, high: 147.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.0,
      panicHigh: 230.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 475,
    isActive: true
  },
  {
    id: "LOINC_1299",
    loincCode: "1299-4",
    testName: "Serology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "SERO_PARAM_39",
    category: "Serology",
    specimen: "Nasopharyngeal Swab",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.3, high: 130.6, unit: "standard" },
        pediatric: { low: 25.0, high: 111.0, unit: "standard" },
        geriatric: { low: 32.9, high: 143.7, unit: "standard" }
      },
      female: {
        adult: { low: 28.8, high: 124.1, unit: "standard" },
        pediatric: { low: 24.4, high: 107.1, unit: "standard" },
        pregnancy: { low: 26.6, high: 150.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.5,
      panicHigh: 235.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1189,
    isActive: true
  },
  {
    id: "LOINC_1300",
    loincCode: "1300-8",
    testName: "Serology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "SERO_PARAM_40",
    category: "Serology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.2, high: 94.2, unit: "standard" },
        pediatric: { low: 3.4, high: 80.1, unit: "standard" },
        geriatric: { low: 4.4, high: 103.6, unit: "standard" }
      },
      female: {
        adult: { low: 3.9, high: 89.5, unit: "standard" },
        pediatric: { low: 3.3, high: 77.2, unit: "standard" },
        pregnancy: { low: 3.6, high: 108.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 169.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 376,
    isActive: true
  },
  {
    id: "LOINC_1301",
    loincCode: "1301-9",
    testName: "Serology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "SERO_PARAM_41",
    category: "Serology",
    specimen: "Plasma (Citrate)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.5, high: 106.2, unit: "standard" },
        pediatric: { low: 15.6, high: 90.3, unit: "standard" },
        geriatric: { low: 20.5, high: 116.8, unit: "standard" }
      },
      female: {
        adult: { low: 17.9, high: 100.9, unit: "standard" },
        pediatric: { low: 15.2, high: 87.1, unit: "standard" },
        pregnancy: { low: 16.6, high: 122.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 191.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 835,
    isActive: true
  },
  {
    id: "LOINC_1302",
    loincCode: "1302-7",
    testName: "Serology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "SERO_PARAM_42",
    category: "Serology",
    specimen: "CSF",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.3, high: 159.4, unit: "standard" },
        pediatric: { low: 6.6, high: 135.5, unit: "standard" },
        geriatric: { low: 8.7, high: 175.3, unit: "standard" }
      },
      female: {
        adult: { low: 7.6, high: 151.4, unit: "standard" },
        pediatric: { low: 6.5, high: 130.7, unit: "standard" },
        pregnancy: { low: 7.1, high: 183.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.3,
      panicHigh: 286.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 499,
    isActive: true
  },
  {
    id: "LOINC_1303",
    loincCode: "1303-5",
    testName: "Serology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "SERO_PARAM_43",
    category: "Serology",
    specimen: "Throat Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.6, high: 44.4, unit: "standard" },
        pediatric: { low: 25.3, high: 37.7, unit: "standard" },
        geriatric: { low: 33.2, high: 48.8, unit: "standard" }
      },
      female: {
        adult: { low: 29.1, high: 42.2, unit: "standard" },
        pediatric: { low: 24.6, high: 36.4, unit: "standard" },
        pregnancy: { low: 26.9, high: 51.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.6,
      panicHigh: 79.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1198,
    isActive: true
  },
  {
    id: "LOINC_1304",
    loincCode: "1304-6",
    testName: "Serology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "SERO_PARAM_44",
    category: "Serology",
    specimen: "Stool Sample",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.5, high: 30.5, unit: "standard" },
        pediatric: { low: 17.2, high: 25.9, unit: "standard" },
        geriatric: { low: 22.6, high: 33.6, unit: "standard" }
      },
      female: {
        adult: { low: 19.8, high: 29.0, unit: "standard" },
        pediatric: { low: 16.8, high: 25.0, unit: "standard" },
        pregnancy: { low: 18.3, high: 35.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 54.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 895,
    isActive: true
  },
  {
    id: "LOINC_1305",
    loincCode: "1305-6",
    testName: "Serology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "SERO_PARAM_45",
    category: "Serology",
    specimen: "Plasma (Heparin)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.7, high: 68.0, unit: "standard" },
        pediatric: { low: 11.8, high: 57.8, unit: "standard" },
        geriatric: { low: 15.4, high: 74.8, unit: "standard" }
      },
      female: {
        adult: { low: 13.5, high: 64.6, unit: "standard" },
        pediatric: { low: 11.5, high: 55.8, unit: "standard" },
        pregnancy: { low: 12.5, high: 78.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.9,
      panicHigh: 122.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 691,
    isActive: true
  },
  {
    id: "LOINC_1306",
    loincCode: "1306-9",
    testName: "Serology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "SERO_PARAM_46",
    category: "Serology",
    specimen: "24-Hour Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.8, high: 46.9, unit: "standard" },
        pediatric: { low: 25.4, high: 39.9, unit: "standard" },
        geriatric: { low: 33.4, high: 51.6, unit: "standard" }
      },
      female: {
        adult: { low: 29.3, high: 44.6, unit: "standard" },
        pediatric: { low: 24.8, high: 38.5, unit: "standard" },
        pregnancy: { low: 27.0, high: 53.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.7,
      panicHigh: 84.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1204,
    isActive: true
  },
  {
    id: "LOINC_1307",
    loincCode: "1307-4",
    testName: "Serology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "SERO_PARAM_47",
    category: "Serology",
    specimen: "Pleural Fluid",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.6, high: 61.8, unit: "standard" },
        pediatric: { low: 14.9, high: 52.5, unit: "standard" },
        geriatric: { low: 19.5, high: 68.0, unit: "standard" }
      },
      female: {
        adult: { low: 17.1, high: 58.7, unit: "standard" },
        pediatric: { low: 14.5, high: 50.7, unit: "standard" },
        pregnancy: { low: 15.8, high: 71.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 111.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 808,
    isActive: true
  },
  {
    id: "LOINC_1308",
    loincCode: "1308-9",
    testName: "Serology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "SERO_PARAM_48",
    category: "Serology",
    specimen: "Tissue Biopsy",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.2, high: 115.4, unit: "standard" },
        pediatric: { low: 9.0, high: 98.1, unit: "standard" },
        geriatric: { low: 11.8, high: 126.9, unit: "standard" }
      },
      female: {
        adult: { low: 10.3, high: 109.6, unit: "standard" },
        pediatric: { low: 8.7, high: 94.6, unit: "standard" },
        pregnancy: { low: 9.5, high: 132.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.5,
      panicHigh: 207.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 586,
    isActive: true
  },
  {
    id: "LOINC_1309",
    loincCode: "1309-7",
    testName: "Serology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "SERO_PARAM_49",
    category: "Serology",
    specimen: "Serum",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 42.0, high: 154.0, unit: "standard" },
        pediatric: { low: 33.6, high: 130.9, unit: "standard" },
        geriatric: { low: 44.1, high: 169.4, unit: "standard" }
      },
      female: {
        adult: { low: 38.6, high: 146.3, unit: "standard" },
        pediatric: { low: 32.8, high: 126.3, unit: "standard" },
        pregnancy: { low: 35.7, high: 177.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.8,
      panicHigh: 277.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1510,
    isActive: true
  },
  {
    id: "LOINC_1310",
    loincCode: "1310-3",
    testName: "Serology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "SERO_PARAM_50",
    category: "Serology",
    specimen: "Random Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.5, high: 168.3, unit: "standard" },
        pediatric: { low: 38.0, high: 143.1, unit: "standard" },
        geriatric: { low: 49.9, high: 185.1, unit: "standard" }
      },
      female: {
        adult: { low: 43.7, high: 159.9, unit: "standard" },
        pediatric: { low: 37.1, high: 138.0, unit: "standard" },
        pregnancy: { low: 40.4, high: 193.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 302.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1675,
    isActive: true
  },
  {
    id: "LOINC_1311",
    loincCode: "1311-9",
    testName: "Serology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "SERO_PARAM_51",
    category: "Serology",
    specimen: "Synovial Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.0, high: 75.8, unit: "standard" },
        pediatric: { low: 11.2, high: 64.4, unit: "standard" },
        geriatric: { low: 14.7, high: 83.4, unit: "standard" }
      },
      female: {
        adult: { low: 12.9, high: 72.0, unit: "standard" },
        pediatric: { low: 10.9, high: 62.2, unit: "standard" },
        pregnancy: { low: 11.9, high: 87.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.6,
      panicHigh: 136.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 670,
    isActive: true
  },
  {
    id: "LOINC_1312",
    loincCode: "1312-4",
    testName: "Serology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "SERO_PARAM_52",
    category: "Serology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.2, high: 132.5, unit: "standard" },
        pediatric: { low: 33.8, high: 112.6, unit: "standard" },
        geriatric: { low: 44.3, high: 145.8, unit: "standard" }
      },
      female: {
        adult: { low: 38.8, high: 125.9, unit: "standard" },
        pediatric: { low: 32.9, high: 108.6, unit: "standard" },
        pregnancy: { low: 35.9, high: 152.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.9,
      panicHigh: 238.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1516,
    isActive: true
  },
  {
    id: "LOINC_1313",
    loincCode: "1313-6",
    testName: "Serology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "SERO_PARAM_53",
    category: "Serology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.0, high: 73.6, unit: "standard" },
        pediatric: { low: 31.2, high: 62.6, unit: "standard" },
        geriatric: { low: 41.0, high: 81.0, unit: "standard" }
      },
      female: {
        adult: { low: 35.9, high: 69.9, unit: "standard" },
        pediatric: { low: 30.4, high: 60.4, unit: "standard" },
        pregnancy: { low: 33.1, high: 84.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.6,
      panicHigh: 132.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1420,
    isActive: true
  },
  {
    id: "LOINC_1314",
    loincCode: "1314-8",
    testName: "Serology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "SERO_PARAM_54",
    category: "Serology",
    specimen: "Plasma (Citrate)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.4, high: 51.0, unit: "standard" },
        pediatric: { low: 30.7, high: 43.4, unit: "standard" },
        geriatric: { low: 40.3, high: 56.1, unit: "standard" }
      },
      female: {
        adult: { low: 35.3, high: 48.4, unit: "standard" },
        pediatric: { low: 30.0, high: 41.8, unit: "standard" },
        pregnancy: { low: 32.6, high: 58.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.4,
      panicHigh: 91.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1402,
    isActive: true
  },
  {
    id: "LOINC_1315",
    loincCode: "1315-6",
    testName: "Serology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "SERO_PARAM_55",
    category: "Serology",
    specimen: "CSF",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.8, high: 165.9, unit: "standard" },
        pediatric: { low: 23.0, high: 141.0, unit: "standard" },
        geriatric: { low: 30.2, high: 182.5, unit: "standard" }
      },
      female: {
        adult: { low: 26.5, high: 157.6, unit: "standard" },
        pediatric: { low: 22.5, high: 136.0, unit: "standard" },
        pregnancy: { low: 24.5, high: 190.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.5,
      panicHigh: 298.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1114,
    isActive: true
  },
  {
    id: "LOINC_1316",
    loincCode: "1316-9",
    testName: "Serology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "SERO_PARAM_56",
    category: "Serology",
    specimen: "Throat Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.9, high: 162.7, unit: "standard" },
        pediatric: { low: 20.7, high: 138.3, unit: "standard" },
        geriatric: { low: 27.2, high: 179.0, unit: "standard" }
      },
      female: {
        adult: { low: 23.8, high: 154.6, unit: "standard" },
        pediatric: { low: 20.2, high: 133.4, unit: "standard" },
        pregnancy: { low: 22.0, high: 187.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.4,
      panicHigh: 292.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1027,
    isActive: true
  },
  {
    id: "LOINC_1317",
    loincCode: "1317-5",
    testName: "Serology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "SERO_PARAM_57",
    category: "Serology",
    specimen: "Stool Sample",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.2, high: 103.3, unit: "standard" },
        pediatric: { low: 37.0, high: 87.8, unit: "standard" },
        geriatric: { low: 48.5, high: 113.6, unit: "standard" }
      },
      female: {
        adult: { low: 42.5, high: 98.1, unit: "standard" },
        pediatric: { low: 36.0, high: 84.7, unit: "standard" },
        pregnancy: { low: 39.3, high: 118.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.5,
      panicHigh: 185.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1636,
    isActive: true
  },
  {
    id: "LOINC_1318",
    loincCode: "1318-9",
    testName: "Serology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "SERO_PARAM_58",
    category: "Serology",
    specimen: "Plasma (Heparin)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.3, high: 127.0, unit: "standard" },
        pediatric: { low: 34.6, high: 108.0, unit: "standard" },
        geriatric: { low: 45.5, high: 139.7, unit: "standard" }
      },
      female: {
        adult: { low: 39.8, high: 120.6, unit: "standard" },
        pediatric: { low: 33.8, high: 104.1, unit: "standard" },
        pregnancy: { low: 36.8, high: 146.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.3,
      panicHigh: 228.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1549,
    isActive: true
  },
  {
    id: "LOINC_1319",
    loincCode: "1319-4",
    testName: "Serology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "SERO_PARAM_59",
    category: "Serology",
    specimen: "24-Hour Urine",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.7, high: 73.2, unit: "standard" },
        pediatric: { low: 6.2, high: 62.2, unit: "standard" },
        geriatric: { low: 8.1, high: 80.5, unit: "standard" }
      },
      female: {
        adult: { low: 7.1, high: 69.5, unit: "standard" },
        pediatric: { low: 6.0, high: 60.0, unit: "standard" },
        pregnancy: { low: 6.5, high: 84.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.1,
      panicHigh: 131.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 481,
    isActive: true
  },
  {
    id: "LOINC_1320",
    loincCode: "1320-4",
    testName: "Serology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "SERO_PARAM_60",
    category: "Serology",
    specimen: "Pleural Fluid",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.1, high: 138.2, unit: "standard" },
        pediatric: { low: 16.9, high: 117.5, unit: "standard" },
        geriatric: { low: 22.2, high: 152.0, unit: "standard" }
      },
      female: {
        adult: { low: 19.4, high: 131.3, unit: "standard" },
        pediatric: { low: 16.5, high: 113.3, unit: "standard" },
        pregnancy: { low: 17.9, high: 158.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.4,
      panicHigh: 248.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 883,
    isActive: true
  },
  {
    id: "LOINC_1321",
    loincCode: "1321-7",
    testName: "Serology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "SERO_PARAM_61",
    category: "Serology",
    specimen: "Tissue Biopsy",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.8, high: 71.0, unit: "standard" },
        pediatric: { low: 7.0, high: 60.4, unit: "standard" },
        geriatric: { low: 9.2, high: 78.1, unit: "standard" }
      },
      female: {
        adult: { low: 8.1, high: 67.5, unit: "standard" },
        pediatric: { low: 6.9, high: 58.2, unit: "standard" },
        pregnancy: { low: 7.5, high: 81.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.5,
      panicHigh: 127.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 514,
    isActive: true
  },
  {
    id: "LOINC_1322",
    loincCode: "1322-7",
    testName: "Serology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "SERO_PARAM_62",
    category: "Serology",
    specimen: "Serum",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.5, high: 108.8, unit: "standard" },
        pediatric: { low: 6.8, high: 92.5, unit: "standard" },
        geriatric: { low: 8.9, high: 119.7, unit: "standard" }
      },
      female: {
        adult: { low: 7.8, high: 103.4, unit: "standard" },
        pediatric: { low: 6.6, high: 89.2, unit: "standard" },
        pregnancy: { low: 7.2, high: 125.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 195.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 505,
    isActive: true
  },
  {
    id: "LOINC_1323",
    loincCode: "1323-4",
    testName: "Serology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "SERO_PARAM_63",
    category: "Serology",
    specimen: "Random Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.9, high: 96.8, unit: "standard" },
        pediatric: { low: 9.5, high: 82.3, unit: "standard" },
        geriatric: { low: 12.5, high: 106.5, unit: "standard" }
      },
      female: {
        adult: { low: 10.9, high: 92.0, unit: "standard" },
        pediatric: { low: 9.3, high: 79.4, unit: "standard" },
        pregnancy: { low: 10.1, high: 111.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.8,
      panicHigh: 174.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 607,
    isActive: true
  },
  {
    id: "LOINC_1324",
    loincCode: "1324-3",
    testName: "Serology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "SERO_PARAM_64",
    category: "Serology",
    specimen: "Synovial Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.9, high: 117.2, unit: "standard" },
        pediatric: { low: 21.5, high: 99.6, unit: "standard" },
        geriatric: { low: 28.2, high: 128.9, unit: "standard" }
      },
      female: {
        adult: { low: 24.7, high: 111.3, unit: "standard" },
        pediatric: { low: 21.0, high: 96.1, unit: "standard" },
        pregnancy: { low: 22.9, high: 134.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 211.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1057,
    isActive: true
  },
  {
    id: "LOINC_1325",
    loincCode: "1325-3",
    testName: "Serology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "SERO_PARAM_65",
    category: "Serology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.0, high: 180.3, unit: "standard" },
        pediatric: { low: 22.4, high: 153.3, unit: "standard" },
        geriatric: { low: 29.4, high: 198.3, unit: "standard" }
      },
      female: {
        adult: { low: 25.8, high: 171.3, unit: "standard" },
        pediatric: { low: 21.8, high: 147.8, unit: "standard" },
        pregnancy: { low: 23.8, high: 207.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.2,
      panicHigh: 324.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in serology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in serology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1090,
    isActive: true
  },
  {
    id: "LOINC_1326",
    loincCode: "1326-9",
    testName: "Endocrinology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "ENDO_PARAM_1",
    category: "Endocrinology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.7, high: 58.4, unit: "standard" },
        pediatric: { low: 25.4, high: 49.6, unit: "standard" },
        geriatric: { low: 33.3, high: 64.2, unit: "standard" }
      },
      female: {
        adult: { low: 29.2, high: 55.5, unit: "standard" },
        pediatric: { low: 24.7, high: 47.9, unit: "standard" },
        pregnancy: { low: 26.9, high: 67.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.7,
      panicHigh: 105.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1201,
    isActive: true
  },
  {
    id: "LOINC_1327",
    loincCode: "1327-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "ENDO_PARAM_2",
    category: "Endocrinology",
    specimen: "Plasma (Citrate)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.4, high: 104.2, unit: "standard" },
        pediatric: { low: 25.9, high: 88.6, unit: "standard" },
        geriatric: { low: 34.0, high: 114.6, unit: "standard" }
      },
      female: {
        adult: { low: 29.8, high: 99.0, unit: "standard" },
        pediatric: { low: 25.3, high: 85.4, unit: "standard" },
        pregnancy: { low: 27.5, high: 119.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.0,
      panicHigh: 187.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1222,
    isActive: true
  },
  {
    id: "LOINC_1328",
    loincCode: "1328-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "ENDO_PARAM_3",
    category: "Endocrinology",
    specimen: "CSF",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.7, high: 148.3, unit: "standard" },
        pediatric: { low: 19.0, high: 126.1, unit: "standard" },
        geriatric: { low: 24.9, high: 163.1, unit: "standard" }
      },
      female: {
        adult: { low: 21.8, high: 140.9, unit: "standard" },
        pediatric: { low: 18.5, high: 121.6, unit: "standard" },
        pregnancy: { low: 20.1, high: 170.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.5,
      panicHigh: 266.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 961,
    isActive: true
  },
  {
    id: "LOINC_1329",
    loincCode: "1329-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "ENDO_PARAM_4",
    category: "Endocrinology",
    specimen: "Throat Swab",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.5, high: 47.1, unit: "standard" },
        pediatric: { low: 24.4, high: 40.0, unit: "standard" },
        geriatric: { low: 32.0, high: 51.8, unit: "standard" }
      },
      female: {
        adult: { low: 28.1, high: 44.7, unit: "standard" },
        pediatric: { low: 23.8, high: 38.6, unit: "standard" },
        pregnancy: { low: 25.9, high: 54.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 84.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1165,
    isActive: true
  },
  {
    id: "LOINC_1330",
    loincCode: "1330-9",
    testName: "Endocrinology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "ENDO_PARAM_5",
    category: "Endocrinology",
    specimen: "Stool Sample",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.4, high: 125.8, unit: "standard" },
        pediatric: { low: 22.7, high: 106.9, unit: "standard" },
        geriatric: { low: 29.8, high: 138.4, unit: "standard" }
      },
      female: {
        adult: { low: 26.1, high: 119.5, unit: "standard" },
        pediatric: { low: 22.2, high: 103.2, unit: "standard" },
        pregnancy: { low: 24.1, high: 144.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 226.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1102,
    isActive: true
  },
  {
    id: "LOINC_1331",
    loincCode: "1331-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "ENDO_PARAM_6",
    category: "Endocrinology",
    specimen: "Plasma (Heparin)",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.8, high: 68.9, unit: "standard" },
        pediatric: { low: 9.4, high: 58.6, unit: "standard" },
        geriatric: { low: 12.4, high: 75.8, unit: "standard" }
      },
      female: {
        adult: { low: 10.9, high: 65.5, unit: "standard" },
        pediatric: { low: 9.2, high: 56.5, unit: "standard" },
        pregnancy: { low: 10.0, high: 79.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 124.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 604,
    isActive: true
  },
  {
    id: "LOINC_1332",
    loincCode: "1332-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "ENDO_PARAM_7",
    category: "Endocrinology",
    specimen: "24-Hour Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.3, high: 80.8, unit: "standard" },
        pediatric: { low: 19.4, high: 68.7, unit: "standard" },
        geriatric: { low: 25.5, high: 88.9, unit: "standard" }
      },
      female: {
        adult: { low: 22.4, high: 76.8, unit: "standard" },
        pediatric: { low: 19.0, high: 66.3, unit: "standard" },
        pregnancy: { low: 20.7, high: 92.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.7,
      panicHigh: 145.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 979,
    isActive: true
  },
  {
    id: "LOINC_1333",
    loincCode: "1333-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "ENDO_PARAM_8",
    category: "Endocrinology",
    specimen: "Pleural Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.5, high: 48.6, unit: "standard" },
        pediatric: { low: 33.2, high: 41.3, unit: "standard" },
        geriatric: { low: 43.6, high: 53.5, unit: "standard" }
      },
      female: {
        adult: { low: 38.2, high: 46.2, unit: "standard" },
        pediatric: { low: 32.4, high: 39.9, unit: "standard" },
        pregnancy: { low: 35.3, high: 55.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.6,
      panicHigh: 87.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1495,
    isActive: true
  },
  {
    id: "LOINC_1334",
    loincCode: "1334-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "ENDO_PARAM_9",
    category: "Endocrinology",
    specimen: "Tissue Biopsy",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 45.0, high: 168.9, unit: "standard" },
        pediatric: { low: 36.0, high: 143.6, unit: "standard" },
        geriatric: { low: 47.3, high: 185.8, unit: "standard" }
      },
      female: {
        adult: { low: 41.4, high: 160.5, unit: "standard" },
        pediatric: { low: 35.1, high: 138.5, unit: "standard" },
        pregnancy: { low: 38.3, high: 194.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.0,
      panicHigh: 304.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1600,
    isActive: true
  },
  {
    id: "LOINC_1335",
    loincCode: "1335-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "ENDO_PARAM_10",
    category: "Endocrinology",
    specimen: "Serum",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 36.1, high: 104.0, unit: "standard" },
        pediatric: { low: 28.9, high: 88.4, unit: "standard" },
        geriatric: { low: 37.9, high: 114.4, unit: "standard" }
      },
      female: {
        adult: { low: 33.2, high: 98.8, unit: "standard" },
        pediatric: { low: 28.2, high: 85.3, unit: "standard" },
        pregnancy: { low: 30.7, high: 119.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.4,
      panicHigh: 187.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1333,
    isActive: true
  },
  {
    id: "LOINC_1336",
    loincCode: "1336-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "ENDO_PARAM_11",
    category: "Endocrinology",
    specimen: "Random Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.3, high: 163.1, unit: "standard" },
        pediatric: { low: 14.6, high: 138.6, unit: "standard" },
        geriatric: { low: 19.2, high: 179.4, unit: "standard" }
      },
      female: {
        adult: { low: 16.8, high: 154.9, unit: "standard" },
        pediatric: { low: 14.3, high: 133.7, unit: "standard" },
        pregnancy: { low: 15.6, high: 187.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.3,
      panicHigh: 293.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 799,
    isActive: true
  },
  {
    id: "LOINC_1337",
    loincCode: "1337-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "ENDO_PARAM_12",
    category: "Endocrinology",
    specimen: "Synovial Fluid",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 28.3, high: 74.7, unit: "standard" },
        pediatric: { low: 22.6, high: 63.5, unit: "standard" },
        geriatric: { low: 29.7, high: 82.2, unit: "standard" }
      },
      female: {
        adult: { low: 26.0, high: 71.0, unit: "standard" },
        pediatric: { low: 22.1, high: 61.3, unit: "standard" },
        pregnancy: { low: 24.1, high: 85.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.3,
      panicHigh: 134.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1099,
    isActive: true
  },
  {
    id: "LOINC_1338",
    loincCode: "1338-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "ENDO_PARAM_13",
    category: "Endocrinology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 13.1, high: 122.0, unit: "standard" },
        pediatric: { low: 10.5, high: 103.7, unit: "standard" },
        geriatric: { low: 13.8, high: 134.2, unit: "standard" }
      },
      female: {
        adult: { low: 12.1, high: 115.9, unit: "standard" },
        pediatric: { low: 10.2, high: 100.0, unit: "standard" },
        pregnancy: { low: 11.1, high: 140.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.2,
      panicHigh: 219.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 643,
    isActive: true
  },
  {
    id: "LOINC_1339",
    loincCode: "1339-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "ENDO_PARAM_14",
    category: "Endocrinology",
    specimen: "Whole Blood (EDTA)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.0, high: 117.0, unit: "standard" },
        pediatric: { low: 37.6, high: 99.5, unit: "standard" },
        geriatric: { low: 49.4, high: 128.7, unit: "standard" }
      },
      female: {
        adult: { low: 43.2, high: 111.1, unit: "standard" },
        pediatric: { low: 36.7, high: 95.9, unit: "standard" },
        pregnancy: { low: 39.9, high: 134.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 210.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1660,
    isActive: true
  },
  {
    id: "LOINC_1340",
    loincCode: "1340-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "ENDO_PARAM_15",
    category: "Endocrinology",
    specimen: "Plasma (Citrate)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.2, high: 157.7, unit: "standard" },
        pediatric: { low: 37.0, high: 134.0, unit: "standard" },
        geriatric: { low: 48.5, high: 173.5, unit: "standard" }
      },
      female: {
        adult: { low: 42.5, high: 149.8, unit: "standard" },
        pediatric: { low: 36.0, high: 129.3, unit: "standard" },
        pregnancy: { low: 39.3, high: 181.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.5,
      panicHigh: 283.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1636,
    isActive: true
  },
  {
    id: "LOINC_1341",
    loincCode: "1341-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "ENDO_PARAM_16",
    category: "Endocrinology",
    specimen: "CSF",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.1, high: 144.1, unit: "standard" },
        pediatric: { low: 16.1, high: 122.5, unit: "standard" },
        geriatric: { low: 21.1, high: 158.5, unit: "standard" }
      },
      female: {
        adult: { low: 18.5, high: 136.9, unit: "standard" },
        pediatric: { low: 15.7, high: 118.2, unit: "standard" },
        pregnancy: { low: 17.1, high: 165.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.0,
      panicHigh: 259.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 853,
    isActive: true
  },
  {
    id: "LOINC_1342",
    loincCode: "1342-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "ENDO_PARAM_17",
    category: "Endocrinology",
    specimen: "Throat Swab",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 4.0, high: 69.6, unit: "standard" },
        pediatric: { low: 3.2, high: 59.2, unit: "standard" },
        geriatric: { low: 4.2, high: 76.6, unit: "standard" }
      },
      female: {
        adult: { low: 3.7, high: 66.1, unit: "standard" },
        pediatric: { low: 3.1, high: 57.1, unit: "standard" },
        pregnancy: { low: 3.4, high: 80.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.6,
      panicHigh: 125.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 370,
    isActive: true
  },
  {
    id: "LOINC_1343",
    loincCode: "1343-3",
    testName: "Endocrinology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "ENDO_PARAM_18",
    category: "Endocrinology",
    specimen: "Stool Sample",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.3, high: 41.6, unit: "standard" },
        pediatric: { low: 5.0, high: 35.4, unit: "standard" },
        geriatric: { low: 6.6, high: 45.8, unit: "standard" }
      },
      female: {
        adult: { low: 5.8, high: 39.5, unit: "standard" },
        pediatric: { low: 4.9, high: 34.1, unit: "standard" },
        pregnancy: { low: 5.4, high: 47.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 74.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 439,
    isActive: true
  },
  {
    id: "LOINC_1344",
    loincCode: "1344-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "ENDO_PARAM_19",
    category: "Endocrinology",
    specimen: "Plasma (Heparin)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.0, high: 105.3, unit: "standard" },
        pediatric: { low: 8.0, high: 89.5, unit: "standard" },
        geriatric: { low: 10.5, high: 115.8, unit: "standard" }
      },
      female: {
        adult: { low: 9.2, high: 100.0, unit: "standard" },
        pediatric: { low: 7.8, high: 86.3, unit: "standard" },
        pregnancy: { low: 8.5, high: 121.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 189.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 550,
    isActive: true
  },
  {
    id: "LOINC_1345",
    loincCode: "1345-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "ENDO_PARAM_20",
    category: "Endocrinology",
    specimen: "24-Hour Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.7, high: 121.3, unit: "standard" },
        pediatric: { low: 33.4, high: 103.1, unit: "standard" },
        geriatric: { low: 43.8, high: 133.4, unit: "standard" }
      },
      female: {
        adult: { low: 38.4, high: 115.2, unit: "standard" },
        pediatric: { low: 32.5, high: 99.5, unit: "standard" },
        pregnancy: { low: 35.4, high: 139.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.7,
      panicHigh: 218.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1501,
    isActive: true
  },
  {
    id: "LOINC_1346",
    loincCode: "1346-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "ENDO_PARAM_21",
    category: "Endocrinology",
    specimen: "Pleural Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 17.7, high: 116.8, unit: "standard" },
        pediatric: { low: 14.2, high: 99.3, unit: "standard" },
        geriatric: { low: 18.6, high: 128.5, unit: "standard" }
      },
      female: {
        adult: { low: 16.3, high: 111.0, unit: "standard" },
        pediatric: { low: 13.8, high: 95.8, unit: "standard" },
        pregnancy: { low: 15.0, high: 134.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.1,
      panicHigh: 210.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 781,
    isActive: true
  },
  {
    id: "LOINC_1347",
    loincCode: "1347-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "ENDO_PARAM_22",
    category: "Endocrinology",
    specimen: "Tissue Biopsy",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 3.7, high: 110.1, unit: "standard" },
        pediatric: { low: 3.0, high: 93.6, unit: "standard" },
        geriatric: { low: 3.9, high: 121.1, unit: "standard" }
      },
      female: {
        adult: { low: 3.4, high: 104.6, unit: "standard" },
        pediatric: { low: 2.9, high: 90.3, unit: "standard" },
        pregnancy: { low: 3.1, high: 126.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.5,
      panicHigh: 198.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 361,
    isActive: true
  },
  {
    id: "LOINC_1348",
    loincCode: "1348-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "ENDO_PARAM_23",
    category: "Endocrinology",
    specimen: "Serum",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.3, high: 160.2, unit: "standard" },
        pediatric: { low: 22.6, high: 136.2, unit: "standard" },
        geriatric: { low: 29.7, high: 176.2, unit: "standard" }
      },
      female: {
        adult: { low: 26.0, high: 152.2, unit: "standard" },
        pediatric: { low: 22.1, high: 131.4, unit: "standard" },
        pregnancy: { low: 24.1, high: 184.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.3,
      panicHigh: 288.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1099,
    isActive: true
  },
  {
    id: "LOINC_1349",
    loincCode: "1349-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "ENDO_PARAM_24",
    category: "Endocrinology",
    specimen: "Random Urine",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 24.1, high: 174.8, unit: "standard" },
        pediatric: { low: 19.3, high: 148.6, unit: "standard" },
        geriatric: { low: 25.3, high: 192.3, unit: "standard" }
      },
      female: {
        adult: { low: 22.2, high: 166.1, unit: "standard" },
        pediatric: { low: 18.8, high: 143.3, unit: "standard" },
        pregnancy: { low: 20.5, high: 201.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.6,
      panicHigh: 314.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 973,
    isActive: true
  },
  {
    id: "LOINC_1350",
    loincCode: "1350-3",
    testName: "Endocrinology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "ENDO_PARAM_25",
    category: "Endocrinology",
    specimen: "Synovial Fluid",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.0, high: 132.9, unit: "standard" },
        pediatric: { low: 22.4, high: 113.0, unit: "standard" },
        geriatric: { low: 29.4, high: 146.2, unit: "standard" }
      },
      female: {
        adult: { low: 25.8, high: 126.3, unit: "standard" },
        pediatric: { low: 21.8, high: 109.0, unit: "standard" },
        pregnancy: { low: 23.8, high: 152.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.2,
      panicHigh: 239.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1090,
    isActive: true
  },
  {
    id: "LOINC_1351",
    loincCode: "1351-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "ENDO_PARAM_26",
    category: "Endocrinology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.2, high: 76.5, unit: "standard" },
        pediatric: { low: 21.0, high: 65.0, unit: "standard" },
        geriatric: { low: 27.5, high: 84.2, unit: "standard" }
      },
      female: {
        adult: { low: 24.1, high: 72.7, unit: "standard" },
        pediatric: { low: 20.4, high: 62.7, unit: "standard" },
        pregnancy: { low: 22.3, high: 88.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.5,
      panicHigh: 137.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1036,
    isActive: true
  },
  {
    id: "LOINC_1352",
    loincCode: "1352-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "ENDO_PARAM_27",
    category: "Endocrinology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 32.3, high: 97.5, unit: "standard" },
        pediatric: { low: 25.8, high: 82.9, unit: "standard" },
        geriatric: { low: 33.9, high: 107.3, unit: "standard" }
      },
      female: {
        adult: { low: 29.7, high: 92.6, unit: "standard" },
        pediatric: { low: 25.2, high: 79.9, unit: "standard" },
        pregnancy: { low: 27.5, high: 112.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.9,
      panicHigh: 175.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1219,
    isActive: true
  },
  {
    id: "LOINC_1353",
    loincCode: "1353-3",
    testName: "Endocrinology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "ENDO_PARAM_28",
    category: "Endocrinology",
    specimen: "Plasma (Citrate)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 155.5, unit: "standard" },
        pediatric: { low: 6.7, high: 132.2, unit: "standard" },
        geriatric: { low: 8.8, high: 171.1, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 147.7, unit: "standard" },
        pediatric: { low: 6.6, high: 127.5, unit: "standard" },
        pregnancy: { low: 7.1, high: 178.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 279.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1354",
    loincCode: "1354-3",
    testName: "Endocrinology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "ENDO_PARAM_29",
    category: "Endocrinology",
    specimen: "CSF",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.7, high: 98.3, unit: "standard" },
        pediatric: { low: 37.4, high: 83.6, unit: "standard" },
        geriatric: { low: 49.0, high: 108.1, unit: "standard" }
      },
      female: {
        adult: { low: 43.0, high: 93.4, unit: "standard" },
        pediatric: { low: 36.4, high: 80.6, unit: "standard" },
        pregnancy: { low: 39.7, high: 113.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 176.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1651,
    isActive: true
  },
  {
    id: "LOINC_1355",
    loincCode: "1355-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "ENDO_PARAM_30",
    category: "Endocrinology",
    specimen: "Throat Swab",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.2, high: 43.4, unit: "standard" },
        pediatric: { low: 25.8, high: 36.9, unit: "standard" },
        geriatric: { low: 33.8, high: 47.7, unit: "standard" }
      },
      female: {
        adult: { low: 29.6, high: 41.2, unit: "standard" },
        pediatric: { low: 25.1, high: 35.6, unit: "standard" },
        pregnancy: { low: 27.4, high: 49.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.9,
      panicHigh: 78.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1216,
    isActive: true
  },
  {
    id: "LOINC_1356",
    loincCode: "1356-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "ENDO_PARAM_31",
    category: "Endocrinology",
    specimen: "Stool Sample",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.2, high: 169.2, unit: "standard" },
        pediatric: { low: 32.2, high: 143.8, unit: "standard" },
        geriatric: { low: 42.2, high: 186.1, unit: "standard" }
      },
      female: {
        adult: { low: 37.0, high: 160.7, unit: "standard" },
        pediatric: { low: 31.4, high: 138.7, unit: "standard" },
        pregnancy: { low: 34.2, high: 194.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.1,
      panicHigh: 304.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1456,
    isActive: true
  },
  {
    id: "LOINC_1357",
    loincCode: "1357-9",
    testName: "Endocrinology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "ENDO_PARAM_32",
    category: "Endocrinology",
    specimen: "Plasma (Heparin)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 3.4, high: 135.5, unit: "standard" },
        pediatric: { low: 2.7, high: 115.2, unit: "standard" },
        geriatric: { low: 3.6, high: 149.1, unit: "standard" }
      },
      female: {
        adult: { low: 3.1, high: 128.7, unit: "standard" },
        pediatric: { low: 2.7, high: 111.1, unit: "standard" },
        pregnancy: { low: 2.9, high: 155.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.4,
      panicHigh: 243.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 352,
    isActive: true
  },
  {
    id: "LOINC_1358",
    loincCode: "1358-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "ENDO_PARAM_33",
    category: "Endocrinology",
    specimen: "24-Hour Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.3, high: 43.2, unit: "standard" },
        pediatric: { low: 29.0, high: 36.7, unit: "standard" },
        geriatric: { low: 38.1, high: 47.5, unit: "standard" }
      },
      female: {
        adult: { low: 33.4, high: 41.0, unit: "standard" },
        pediatric: { low: 28.3, high: 35.4, unit: "standard" },
        pregnancy: { low: 30.9, high: 49.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.5,
      panicHigh: 77.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1339,
    isActive: true
  },
  {
    id: "LOINC_1359",
    loincCode: "1359-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "ENDO_PARAM_34",
    category: "Endocrinology",
    specimen: "Pleural Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 45.2, high: 64.9, unit: "standard" },
        pediatric: { low: 36.2, high: 55.2, unit: "standard" },
        geriatric: { low: 47.5, high: 71.4, unit: "standard" }
      },
      female: {
        adult: { low: 41.6, high: 61.7, unit: "standard" },
        pediatric: { low: 35.3, high: 53.2, unit: "standard" },
        pregnancy: { low: 38.4, high: 74.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.1,
      panicHigh: 116.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1606,
    isActive: true
  },
  {
    id: "LOINC_1360",
    loincCode: "1360-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "ENDO_PARAM_35",
    category: "Endocrinology",
    specimen: "Tissue Biopsy",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 35.7, high: 113.4, unit: "standard" },
        pediatric: { low: 28.6, high: 96.4, unit: "standard" },
        geriatric: { low: 37.5, high: 124.7, unit: "standard" }
      },
      female: {
        adult: { low: 32.8, high: 107.7, unit: "standard" },
        pediatric: { low: 27.8, high: 93.0, unit: "standard" },
        pregnancy: { low: 30.3, high: 130.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.3,
      panicHigh: 204.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1321,
    isActive: true
  },
  {
    id: "LOINC_1361",
    loincCode: "1361-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "ENDO_PARAM_36",
    category: "Endocrinology",
    specimen: "Serum",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.4, high: 119.9, unit: "standard" },
        pediatric: { low: 20.3, high: 101.9, unit: "standard" },
        geriatric: { low: 26.7, high: 131.9, unit: "standard" }
      },
      female: {
        adult: { low: 23.4, high: 113.9, unit: "standard" },
        pediatric: { low: 19.8, high: 98.3, unit: "standard" },
        pregnancy: { low: 21.6, high: 137.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 215.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1012,
    isActive: true
  },
  {
    id: "LOINC_1362",
    loincCode: "1362-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "ENDO_PARAM_37",
    category: "Endocrinology",
    specimen: "Random Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.7, high: 120.0, unit: "standard" },
        pediatric: { low: 8.6, high: 102.0, unit: "standard" },
        geriatric: { low: 11.2, high: 132.0, unit: "standard" }
      },
      female: {
        adult: { low: 9.8, high: 114.0, unit: "standard" },
        pediatric: { low: 8.3, high: 98.4, unit: "standard" },
        pregnancy: { low: 9.1, high: 138.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.3,
      panicHigh: 216.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 571,
    isActive: true
  },
  {
    id: "LOINC_1363",
    loincCode: "1363-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "ENDO_PARAM_38",
    category: "Endocrinology",
    specimen: "Synovial Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.8, high: 134.0, unit: "standard" },
        pediatric: { low: 23.8, high: 113.9, unit: "standard" },
        geriatric: { low: 31.3, high: 147.4, unit: "standard" }
      },
      female: {
        adult: { low: 27.4, high: 127.3, unit: "standard" },
        pediatric: { low: 23.2, high: 109.9, unit: "standard" },
        pregnancy: { low: 25.3, high: 154.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.9,
      panicHigh: 241.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1144,
    isActive: true
  },
  {
    id: "LOINC_1364",
    loincCode: "1364-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "ENDO_PARAM_39",
    category: "Endocrinology",
    specimen: "Nasopharyngeal Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.2, high: 144.3, unit: "standard" },
        pediatric: { low: 15.4, high: 122.7, unit: "standard" },
        geriatric: { low: 20.2, high: 158.7, unit: "standard" }
      },
      female: {
        adult: { low: 17.7, high: 137.1, unit: "standard" },
        pediatric: { low: 15.0, high: 118.3, unit: "standard" },
        pregnancy: { low: 16.3, high: 165.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.7,
      panicHigh: 259.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 826,
    isActive: true
  },
  {
    id: "LOINC_1365",
    loincCode: "1365-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "ENDO_PARAM_40",
    category: "Endocrinology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.4, high: 121.9, unit: "standard" },
        pediatric: { low: 32.3, high: 103.6, unit: "standard" },
        geriatric: { low: 42.4, high: 134.1, unit: "standard" }
      },
      female: {
        adult: { low: 37.2, high: 115.8, unit: "standard" },
        pediatric: { low: 31.5, high: 100.0, unit: "standard" },
        pregnancy: { low: 34.3, high: 140.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.2,
      panicHigh: 219.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1462,
    isActive: true
  },
  {
    id: "LOINC_1366",
    loincCode: "1366-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "ENDO_PARAM_41",
    category: "Endocrinology",
    specimen: "Plasma (Citrate)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.0, high: 71.6, unit: "standard" },
        pediatric: { low: 28.8, high: 60.9, unit: "standard" },
        geriatric: { low: 37.8, high: 78.8, unit: "standard" }
      },
      female: {
        adult: { low: 33.1, high: 68.0, unit: "standard" },
        pediatric: { low: 28.1, high: 58.7, unit: "standard" },
        pregnancy: { low: 30.6, high: 82.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.4,
      panicHigh: 128.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1330,
    isActive: true
  },
  {
    id: "LOINC_1367",
    loincCode: "1367-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "ENDO_PARAM_42",
    category: "Endocrinology",
    specimen: "CSF",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 33.2, high: 147.6, unit: "standard" },
        pediatric: { low: 26.6, high: 125.5, unit: "standard" },
        geriatric: { low: 34.9, high: 162.4, unit: "standard" }
      },
      female: {
        adult: { low: 30.5, high: 140.2, unit: "standard" },
        pediatric: { low: 25.9, high: 121.0, unit: "standard" },
        pregnancy: { low: 28.2, high: 169.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.3,
      panicHigh: 265.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1246,
    isActive: true
  },
  {
    id: "LOINC_1368",
    loincCode: "1368-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "ENDO_PARAM_43",
    category: "Endocrinology",
    specimen: "Throat Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 32.6, high: 40.9, unit: "standard" },
        pediatric: { low: 26.1, high: 34.8, unit: "standard" },
        geriatric: { low: 34.2, high: 45.0, unit: "standard" }
      },
      female: {
        adult: { low: 30.0, high: 38.9, unit: "standard" },
        pediatric: { low: 25.4, high: 33.5, unit: "standard" },
        pregnancy: { low: 27.7, high: 47.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.0,
      panicHigh: 73.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1228,
    isActive: true
  },
  {
    id: "LOINC_1369",
    loincCode: "1369-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "ENDO_PARAM_44",
    category: "Endocrinology",
    specimen: "Stool Sample",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.0, high: 49.6, unit: "standard" },
        pediatric: { low: 8.8, high: 42.2, unit: "standard" },
        geriatric: { low: 11.6, high: 54.6, unit: "standard" }
      },
      female: {
        adult: { low: 10.1, high: 47.1, unit: "standard" },
        pediatric: { low: 8.6, high: 40.7, unit: "standard" },
        pregnancy: { low: 9.3, high: 57.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.4,
      panicHigh: 89.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 580,
    isActive: true
  },
  {
    id: "LOINC_1370",
    loincCode: "1370-3",
    testName: "Endocrinology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "ENDO_PARAM_45",
    category: "Endocrinology",
    specimen: "Plasma (Heparin)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 43.3, high: 102.3, unit: "standard" },
        pediatric: { low: 34.6, high: 87.0, unit: "standard" },
        geriatric: { low: 45.5, high: 112.5, unit: "standard" }
      },
      female: {
        adult: { low: 39.8, high: 97.2, unit: "standard" },
        pediatric: { low: 33.8, high: 83.9, unit: "standard" },
        pregnancy: { low: 36.8, high: 117.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.3,
      panicHigh: 184.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1549,
    isActive: true
  },
  {
    id: "LOINC_1371",
    loincCode: "1371-5",
    testName: "Endocrinology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "ENDO_PARAM_46",
    category: "Endocrinology",
    specimen: "24-Hour Urine",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.1, high: 142.9, unit: "standard" },
        pediatric: { low: 20.1, high: 121.5, unit: "standard" },
        geriatric: { low: 26.4, high: 157.2, unit: "standard" }
      },
      female: {
        adult: { low: 23.1, high: 135.8, unit: "standard" },
        pediatric: { low: 19.6, high: 117.2, unit: "standard" },
        pregnancy: { low: 21.3, high: 164.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.0,
      panicHigh: 257.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1003,
    isActive: true
  },
  {
    id: "LOINC_1372",
    loincCode: "1372-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "ENDO_PARAM_47",
    category: "Endocrinology",
    specimen: "Pleural Fluid",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 2.0, high: 98.9, unit: "standard" },
        pediatric: { low: 1.6, high: 84.1, unit: "standard" },
        geriatric: { low: 2.1, high: 108.8, unit: "standard" }
      },
      female: {
        adult: { low: 1.8, high: 94.0, unit: "standard" },
        pediatric: { low: 1.6, high: 81.1, unit: "standard" },
        pregnancy: { low: 1.7, high: 113.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.8,
      panicHigh: 178.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 310,
    isActive: true
  },
  {
    id: "LOINC_1373",
    loincCode: "1373-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "ENDO_PARAM_48",
    category: "Endocrinology",
    specimen: "Tissue Biopsy",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.4, high: 30.9, unit: "standard" },
        pediatric: { low: 15.5, high: 26.3, unit: "standard" },
        geriatric: { low: 20.4, high: 34.0, unit: "standard" }
      },
      female: {
        adult: { low: 17.8, high: 29.4, unit: "standard" },
        pediatric: { low: 15.1, high: 25.3, unit: "standard" },
        pregnancy: { low: 16.5, high: 35.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 55.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 832,
    isActive: true
  },
  {
    id: "LOINC_1374",
    loincCode: "1374-9",
    testName: "Endocrinology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "ENDO_PARAM_49",
    category: "Endocrinology",
    specimen: "Serum",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 13.7, high: 62.7, unit: "standard" },
        pediatric: { low: 11.0, high: 53.3, unit: "standard" },
        geriatric: { low: 14.4, high: 69.0, unit: "standard" }
      },
      female: {
        adult: { low: 12.6, high: 59.6, unit: "standard" },
        pediatric: { low: 10.7, high: 51.4, unit: "standard" },
        pregnancy: { low: 11.6, high: 72.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.5,
      panicHigh: 112.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 661,
    isActive: true
  },
  {
    id: "LOINC_1375",
    loincCode: "1375-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "ENDO_PARAM_50",
    category: "Endocrinology",
    specimen: "Random Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.5, high: 64.0, unit: "standard" },
        pediatric: { low: 17.2, high: 54.4, unit: "standard" },
        geriatric: { low: 22.6, high: 70.4, unit: "standard" }
      },
      female: {
        adult: { low: 19.8, high: 60.8, unit: "standard" },
        pediatric: { low: 16.8, high: 52.5, unit: "standard" },
        pregnancy: { low: 18.3, high: 73.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 115.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 895,
    isActive: true
  },
  {
    id: "LOINC_1376",
    loincCode: "1376-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "ENDO_PARAM_51",
    category: "Endocrinology",
    specimen: "Synovial Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 37.2, high: 110.3, unit: "standard" },
        pediatric: { low: 29.8, high: 93.8, unit: "standard" },
        geriatric: { low: 39.1, high: 121.3, unit: "standard" }
      },
      female: {
        adult: { low: 34.2, high: 104.8, unit: "standard" },
        pediatric: { low: 29.0, high: 90.4, unit: "standard" },
        pregnancy: { low: 31.6, high: 126.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.9,
      panicHigh: 198.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1366,
    isActive: true
  },
  {
    id: "LOINC_1377",
    loincCode: "1377-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "ENDO_PARAM_52",
    category: "Endocrinology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.2, high: 32.4, unit: "standard" },
        pediatric: { low: 0.2, high: 27.5, unit: "standard" },
        geriatric: { low: 0.2, high: 35.6, unit: "standard" }
      },
      female: {
        adult: { low: 0.2, high: 30.8, unit: "standard" },
        pediatric: { low: 0.2, high: 26.6, unit: "standard" },
        pregnancy: { low: 0.2, high: 37.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.1,
      panicHigh: 58.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 256,
    isActive: true
  },
  {
    id: "LOINC_1378",
    loincCode: "1378-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "ENDO_PARAM_53",
    category: "Endocrinology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 3.8, high: 47.0, unit: "standard" },
        pediatric: { low: 3.0, high: 39.9, unit: "standard" },
        geriatric: { low: 4.0, high: 51.7, unit: "standard" }
      },
      female: {
        adult: { low: 3.5, high: 44.6, unit: "standard" },
        pediatric: { low: 3.0, high: 38.5, unit: "standard" },
        pregnancy: { low: 3.2, high: 54.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.5,
      panicHigh: 84.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 364,
    isActive: true
  },
  {
    id: "LOINC_1379",
    loincCode: "1379-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "ENDO_PARAM_54",
    category: "Endocrinology",
    specimen: "Plasma (Citrate)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.3, high: 176.5, unit: "standard" },
        pediatric: { low: 20.2, high: 150.0, unit: "standard" },
        geriatric: { low: 26.6, high: 194.2, unit: "standard" }
      },
      female: {
        adult: { low: 23.3, high: 167.7, unit: "standard" },
        pediatric: { low: 19.7, high: 144.7, unit: "standard" },
        pregnancy: { low: 21.5, high: 203.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.1,
      panicHigh: 317.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1009,
    isActive: true
  },
  {
    id: "LOINC_1380",
    loincCode: "1380-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "ENDO_PARAM_55",
    category: "Endocrinology",
    specimen: "CSF",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.6, high: 34.5, unit: "standard" },
        pediatric: { low: 17.3, high: 29.3, unit: "standard" },
        geriatric: { low: 22.7, high: 38.0, unit: "standard" }
      },
      female: {
        adult: { low: 19.9, high: 32.8, unit: "standard" },
        pediatric: { low: 16.8, high: 28.3, unit: "standard" },
        pregnancy: { low: 18.4, high: 39.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 62.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 898,
    isActive: true
  },
  {
    id: "LOINC_1381",
    loincCode: "1381-2",
    testName: "Endocrinology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "ENDO_PARAM_56",
    category: "Endocrinology",
    specimen: "Throat Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.2, high: 149.0, unit: "standard" },
        pediatric: { low: 30.6, high: 126.6, unit: "standard" },
        geriatric: { low: 40.1, high: 163.9, unit: "standard" }
      },
      female: {
        adult: { low: 35.1, high: 141.5, unit: "standard" },
        pediatric: { low: 29.8, high: 122.2, unit: "standard" },
        pregnancy: { low: 32.5, high: 171.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.3,
      panicHigh: 268.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1396,
    isActive: true
  },
  {
    id: "LOINC_1382",
    loincCode: "1382-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "ENDO_PARAM_57",
    category: "Endocrinology",
    specimen: "Stool Sample",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.5, high: 150.2, unit: "standard" },
        pediatric: { low: 27.6, high: 127.7, unit: "standard" },
        geriatric: { low: 36.2, high: 165.2, unit: "standard" }
      },
      female: {
        adult: { low: 31.7, high: 142.7, unit: "standard" },
        pediatric: { low: 26.9, high: 123.2, unit: "standard" },
        pregnancy: { low: 29.3, high: 172.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.8,
      panicHigh: 270.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1285,
    isActive: true
  },
  {
    id: "LOINC_1383",
    loincCode: "1383-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "ENDO_PARAM_58",
    category: "Endocrinology",
    specimen: "Plasma (Heparin)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.7, high: 109.4, unit: "standard" },
        pediatric: { low: 0.6, high: 93.0, unit: "standard" },
        geriatric: { low: 0.7, high: 120.3, unit: "standard" }
      },
      female: {
        adult: { low: 0.6, high: 103.9, unit: "standard" },
        pediatric: { low: 0.5, high: 89.7, unit: "standard" },
        pregnancy: { low: 0.6, high: 125.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.3,
      panicHigh: 196.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 271,
    isActive: true
  },
  {
    id: "LOINC_1384",
    loincCode: "1384-1",
    testName: "Endocrinology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "ENDO_PARAM_59",
    category: "Endocrinology",
    specimen: "24-Hour Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.7, high: 112.9, unit: "standard" },
        pediatric: { low: 32.6, high: 96.0, unit: "standard" },
        geriatric: { low: 42.7, high: 124.2, unit: "standard" }
      },
      female: {
        adult: { low: 37.4, high: 107.3, unit: "standard" },
        pediatric: { low: 31.7, high: 92.6, unit: "standard" },
        pregnancy: { low: 34.6, high: 129.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.3,
      panicHigh: 203.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1471,
    isActive: true
  },
  {
    id: "LOINC_1385",
    loincCode: "1385-6",
    testName: "Endocrinology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "ENDO_PARAM_60",
    category: "Endocrinology",
    specimen: "Pleural Fluid",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 2.6, high: 91.0, unit: "standard" },
        pediatric: { low: 2.1, high: 77.3, unit: "standard" },
        geriatric: { low: 2.7, high: 100.1, unit: "standard" }
      },
      female: {
        adult: { low: 2.4, high: 86.5, unit: "standard" },
        pediatric: { low: 2.0, high: 74.6, unit: "standard" },
        pregnancy: { low: 2.2, high: 104.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.0,
      panicHigh: 163.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 328,
    isActive: true
  },
  {
    id: "LOINC_1386",
    loincCode: "1386-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "ENDO_PARAM_61",
    category: "Endocrinology",
    specimen: "Tissue Biopsy",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.9, high: 62.2, unit: "standard" },
        pediatric: { low: 25.5, high: 52.9, unit: "standard" },
        geriatric: { low: 33.5, high: 68.4, unit: "standard" }
      },
      female: {
        adult: { low: 29.3, high: 59.1, unit: "standard" },
        pediatric: { low: 24.9, high: 51.0, unit: "standard" },
        pregnancy: { low: 27.1, high: 71.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.8,
      panicHigh: 112.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1207,
    isActive: true
  },
  {
    id: "LOINC_1387",
    loincCode: "1387-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "ENDO_PARAM_62",
    category: "Endocrinology",
    specimen: "Serum",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 33.1, high: 87.6, unit: "standard" },
        pediatric: { low: 26.5, high: 74.5, unit: "standard" },
        geriatric: { low: 34.8, high: 96.4, unit: "standard" }
      },
      female: {
        adult: { low: 30.5, high: 83.2, unit: "standard" },
        pediatric: { low: 25.8, high: 71.8, unit: "standard" },
        pregnancy: { low: 28.1, high: 100.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.2,
      panicHigh: 157.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1243,
    isActive: true
  },
  {
    id: "LOINC_1388",
    loincCode: "1388-7",
    testName: "Endocrinology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "ENDO_PARAM_63",
    category: "Endocrinology",
    specimen: "Random Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.6, high: 51.1, unit: "standard" },
        pediatric: { low: 17.3, high: 43.4, unit: "standard" },
        geriatric: { low: 22.7, high: 56.2, unit: "standard" }
      },
      female: {
        adult: { low: 19.9, high: 48.5, unit: "standard" },
        pediatric: { low: 16.8, high: 41.9, unit: "standard" },
        pregnancy: { low: 18.4, high: 58.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 92.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 898,
    isActive: true
  },
  {
    id: "LOINC_1389",
    loincCode: "1389-4",
    testName: "Endocrinology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "ENDO_PARAM_64",
    category: "Endocrinology",
    specimen: "Synovial Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.9, high: 132.8, unit: "standard" },
        pediatric: { low: 32.7, high: 112.9, unit: "standard" },
        geriatric: { low: 42.9, high: 146.1, unit: "standard" }
      },
      female: {
        adult: { low: 37.6, high: 126.2, unit: "standard" },
        pediatric: { low: 31.9, high: 108.9, unit: "standard" },
        pregnancy: { low: 34.8, high: 152.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.4,
      panicHigh: 239.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1477,
    isActive: true
  },
  {
    id: "LOINC_1390",
    loincCode: "1390-8",
    testName: "Endocrinology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "ENDO_PARAM_65",
    category: "Endocrinology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.6, high: 167.6, unit: "standard" },
        pediatric: { low: 11.7, high: 142.5, unit: "standard" },
        geriatric: { low: 15.3, high: 184.4, unit: "standard" }
      },
      female: {
        adult: { low: 13.4, high: 159.2, unit: "standard" },
        pediatric: { low: 11.4, high: 137.4, unit: "standard" },
        pregnancy: { low: 12.4, high: 192.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.8,
      panicHigh: 301.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in endocrinology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in endocrinology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 688,
    isActive: true
  },
  {
    id: "LOINC_1391",
    loincCode: "1391-4",
    testName: "Toxicology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "TOXI_PARAM_1",
    category: "Toxicology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.0, high: 175.2, unit: "standard" },
        pediatric: { low: 32.0, high: 148.9, unit: "standard" },
        geriatric: { low: 42.0, high: 192.7, unit: "standard" }
      },
      female: {
        adult: { low: 36.8, high: 166.4, unit: "standard" },
        pediatric: { low: 31.2, high: 143.7, unit: "standard" },
        pregnancy: { low: 34.0, high: 201.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.0,
      panicHigh: 315.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1450,
    isActive: true
  },
  {
    id: "LOINC_1392",
    loincCode: "1392-2",
    testName: "Toxicology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "TOXI_PARAM_2",
    category: "Toxicology",
    specimen: "Plasma (Citrate)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 37.2, high: 76.1, unit: "standard" },
        pediatric: { low: 29.8, high: 64.7, unit: "standard" },
        geriatric: { low: 39.1, high: 83.7, unit: "standard" }
      },
      female: {
        adult: { low: 34.2, high: 72.3, unit: "standard" },
        pediatric: { low: 29.0, high: 62.4, unit: "standard" },
        pregnancy: { low: 31.6, high: 87.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.9,
      panicHigh: 137.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1366,
    isActive: true
  },
  {
    id: "LOINC_1393",
    loincCode: "1393-6",
    testName: "Toxicology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "TOXI_PARAM_3",
    category: "Toxicology",
    specimen: "CSF",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.7, high: 163.4, unit: "standard" },
        pediatric: { low: 27.8, high: 138.9, unit: "standard" },
        geriatric: { low: 36.4, high: 179.7, unit: "standard" }
      },
      female: {
        adult: { low: 31.9, high: 155.2, unit: "standard" },
        pediatric: { low: 27.1, high: 134.0, unit: "standard" },
        pregnancy: { low: 29.5, high: 187.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.9,
      panicHigh: 294.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1291,
    isActive: true
  },
  {
    id: "LOINC_1394",
    loincCode: "1394-9",
    testName: "Toxicology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "TOXI_PARAM_4",
    category: "Toxicology",
    specimen: "Throat Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.4, high: 168.7, unit: "standard" },
        pediatric: { low: 21.1, high: 143.4, unit: "standard" },
        geriatric: { low: 27.7, high: 185.6, unit: "standard" }
      },
      female: {
        adult: { low: 24.3, high: 160.3, unit: "standard" },
        pediatric: { low: 20.6, high: 138.3, unit: "standard" },
        pregnancy: { low: 22.4, high: 194.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 303.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1042,
    isActive: true
  },
  {
    id: "LOINC_1395",
    loincCode: "1395-7",
    testName: "Toxicology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "TOXI_PARAM_5",
    category: "Toxicology",
    specimen: "Stool Sample",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.5, high: 48.9, unit: "standard" },
        pediatric: { low: 1.2, high: 41.6, unit: "standard" },
        geriatric: { low: 1.6, high: 53.8, unit: "standard" }
      },
      female: {
        adult: { low: 1.4, high: 46.5, unit: "standard" },
        pediatric: { low: 1.2, high: 40.1, unit: "standard" },
        pregnancy: { low: 1.3, high: 56.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 88.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 295,
    isActive: true
  },
  {
    id: "LOINC_1396",
    loincCode: "1396-7",
    testName: "Toxicology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "TOXI_PARAM_6",
    category: "Toxicology",
    specimen: "Plasma (Heparin)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.0, high: 132.7, unit: "standard" },
        pediatric: { low: 20.0, high: 112.8, unit: "standard" },
        geriatric: { low: 26.3, high: 146.0, unit: "standard" }
      },
      female: {
        adult: { low: 23.0, high: 126.1, unit: "standard" },
        pediatric: { low: 19.5, high: 108.8, unit: "standard" },
        pregnancy: { low: 21.3, high: 152.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.0,
      panicHigh: 238.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1000,
    isActive: true
  },
  {
    id: "LOINC_1397",
    loincCode: "1397-4",
    testName: "Toxicology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "TOXI_PARAM_7",
    category: "Toxicology",
    specimen: "24-Hour Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 53.1, unit: "standard" },
        pediatric: { low: 6.7, high: 45.1, unit: "standard" },
        geriatric: { low: 8.8, high: 58.4, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 50.4, unit: "standard" },
        pediatric: { low: 6.6, high: 43.5, unit: "standard" },
        pregnancy: { low: 7.1, high: 61.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 95.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1398",
    loincCode: "1398-7",
    testName: "Toxicology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "TOXI_PARAM_8",
    category: "Toxicology",
    specimen: "Pleural Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 10.7, high: 38.5, unit: "standard" },
        pediatric: { low: 8.6, high: 32.7, unit: "standard" },
        geriatric: { low: 11.2, high: 42.4, unit: "standard" }
      },
      female: {
        adult: { low: 9.8, high: 36.6, unit: "standard" },
        pediatric: { low: 8.3, high: 31.6, unit: "standard" },
        pregnancy: { low: 9.1, high: 44.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.3,
      panicHigh: 69.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 571,
    isActive: true
  },
  {
    id: "LOINC_1399",
    loincCode: "1399-2",
    testName: "Toxicology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "TOXI_PARAM_9",
    category: "Toxicology",
    specimen: "Tissue Biopsy",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 131.8, unit: "standard" },
        pediatric: { low: 31.4, high: 112.0, unit: "standard" },
        geriatric: { low: 41.2, high: 145.0, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 125.2, unit: "standard" },
        pediatric: { low: 30.6, high: 108.1, unit: "standard" },
        pregnancy: { low: 33.3, high: 151.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 237.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1400",
    loincCode: "1400-7",
    testName: "Toxicology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "TOXI_PARAM_10",
    category: "Toxicology",
    specimen: "Serum",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.2, high: 176.8, unit: "standard" },
        pediatric: { low: 20.2, high: 150.3, unit: "standard" },
        geriatric: { low: 26.5, high: 194.5, unit: "standard" }
      },
      female: {
        adult: { low: 23.2, high: 168.0, unit: "standard" },
        pediatric: { low: 19.7, high: 145.0, unit: "standard" },
        pregnancy: { low: 21.4, high: 203.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.1,
      panicHigh: 318.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1006,
    isActive: true
  },
  {
    id: "LOINC_1401",
    loincCode: "1401-7",
    testName: "Toxicology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "TOXI_PARAM_11",
    category: "Toxicology",
    specimen: "Random Urine",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 38.2, high: 50.3, unit: "standard" },
        pediatric: { low: 30.6, high: 42.8, unit: "standard" },
        geriatric: { low: 40.1, high: 55.3, unit: "standard" }
      },
      female: {
        adult: { low: 35.1, high: 47.8, unit: "standard" },
        pediatric: { low: 29.8, high: 41.2, unit: "standard" },
        pregnancy: { low: 32.5, high: 57.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.3,
      panicHigh: 90.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1396,
    isActive: true
  },
  {
    id: "LOINC_1402",
    loincCode: "1402-5",
    testName: "Toxicology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "TOXI_PARAM_12",
    category: "Toxicology",
    specimen: "Synovial Fluid",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 45.1, high: 184.8, unit: "standard" },
        pediatric: { low: 36.1, high: 157.1, unit: "standard" },
        geriatric: { low: 47.4, high: 203.3, unit: "standard" }
      },
      female: {
        adult: { low: 41.5, high: 175.6, unit: "standard" },
        pediatric: { low: 35.2, high: 151.5, unit: "standard" },
        pregnancy: { low: 38.3, high: 212.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.0,
      panicHigh: 332.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1603,
    isActive: true
  },
  {
    id: "LOINC_1403",
    loincCode: "1403-7",
    testName: "Toxicology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "TOXI_PARAM_13",
    category: "Toxicology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 20.5, high: 40.8, unit: "standard" },
        pediatric: { low: 16.4, high: 34.7, unit: "standard" },
        geriatric: { low: 21.5, high: 44.9, unit: "standard" }
      },
      female: {
        adult: { low: 18.9, high: 38.8, unit: "standard" },
        pediatric: { low: 16.0, high: 33.5, unit: "standard" },
        pregnancy: { low: 17.4, high: 46.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.2,
      panicHigh: 73.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 865,
    isActive: true
  },
  {
    id: "LOINC_1404",
    loincCode: "1404-1",
    testName: "Toxicology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "TOXI_PARAM_14",
    category: "Toxicology",
    specimen: "Whole Blood (EDTA)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 92.8, unit: "standard" },
        pediatric: { low: 31.4, high: 78.9, unit: "standard" },
        geriatric: { low: 41.2, high: 102.1, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 88.2, unit: "standard" },
        pediatric: { low: 30.6, high: 76.1, unit: "standard" },
        pregnancy: { low: 33.3, high: 106.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 167.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1405",
    loincCode: "1405-7",
    testName: "Toxicology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "TOXI_PARAM_15",
    category: "Toxicology",
    specimen: "Plasma (Citrate)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.5, high: 97.6, unit: "standard" },
        pediatric: { low: 31.6, high: 83.0, unit: "standard" },
        geriatric: { low: 41.5, high: 107.4, unit: "standard" }
      },
      female: {
        adult: { low: 36.3, high: 92.7, unit: "standard" },
        pediatric: { low: 30.8, high: 80.0, unit: "standard" },
        pregnancy: { low: 33.6, high: 112.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.8,
      panicHigh: 175.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1435,
    isActive: true
  },
  {
    id: "LOINC_1406",
    loincCode: "1406-9",
    testName: "Toxicology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "TOXI_PARAM_16",
    category: "Toxicology",
    specimen: "CSF",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.3, high: 33.9, unit: "standard" },
        pediatric: { low: 21.0, high: 28.8, unit: "standard" },
        geriatric: { low: 27.6, high: 37.3, unit: "standard" }
      },
      female: {
        adult: { low: 24.2, high: 32.2, unit: "standard" },
        pediatric: { low: 20.5, high: 27.8, unit: "standard" },
        pregnancy: { low: 22.4, high: 39.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.5,
      panicHigh: 61.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1039,
    isActive: true
  },
  {
    id: "LOINC_1407",
    loincCode: "1407-6",
    testName: "Toxicology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "TOXI_PARAM_17",
    category: "Toxicology",
    specimen: "Throat Swab",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.4, high: 195.1, unit: "standard" },
        pediatric: { low: 32.3, high: 165.8, unit: "standard" },
        geriatric: { low: 42.4, high: 214.6, unit: "standard" }
      },
      female: {
        adult: { low: 37.2, high: 185.3, unit: "standard" },
        pediatric: { low: 31.5, high: 160.0, unit: "standard" },
        pregnancy: { low: 34.3, high: 224.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.2,
      panicHigh: 351.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1462,
    isActive: true
  },
  {
    id: "LOINC_1408",
    loincCode: "1408-7",
    testName: "Toxicology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "TOXI_PARAM_18",
    category: "Toxicology",
    specimen: "Stool Sample",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.4, high: 195.4, unit: "standard" },
        pediatric: { low: 34.7, high: 166.1, unit: "standard" },
        geriatric: { low: 45.6, high: 214.9, unit: "standard" }
      },
      female: {
        adult: { low: 39.9, high: 185.6, unit: "standard" },
        pediatric: { low: 33.9, high: 160.2, unit: "standard" },
        pregnancy: { low: 36.9, high: 224.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.4,
      panicHigh: 351.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1552,
    isActive: true
  },
  {
    id: "LOINC_1409",
    loincCode: "1409-9",
    testName: "Toxicology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "TOXI_PARAM_19",
    category: "Toxicology",
    specimen: "Plasma (Heparin)",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.2, high: 116.5, unit: "standard" },
        pediatric: { low: 20.2, high: 99.0, unit: "standard" },
        geriatric: { low: 26.5, high: 128.2, unit: "standard" }
      },
      female: {
        adult: { low: 23.2, high: 110.7, unit: "standard" },
        pediatric: { low: 19.7, high: 95.5, unit: "standard" },
        pregnancy: { low: 21.4, high: 134.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.1,
      panicHigh: 209.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1006,
    isActive: true
  },
  {
    id: "LOINC_1410",
    loincCode: "1410-3",
    testName: "Toxicology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "TOXI_PARAM_20",
    category: "Toxicology",
    specimen: "24-Hour Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.9, high: 84.7, unit: "standard" },
        pediatric: { low: 7.9, high: 72.0, unit: "standard" },
        geriatric: { low: 10.4, high: 93.2, unit: "standard" }
      },
      female: {
        adult: { low: 9.1, high: 80.5, unit: "standard" },
        pediatric: { low: 7.7, high: 69.5, unit: "standard" },
        pregnancy: { low: 8.4, high: 97.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 152.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 547,
    isActive: true
  },
  {
    id: "LOINC_1411",
    loincCode: "1411-3",
    testName: "Toxicology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "TOXI_PARAM_21",
    category: "Toxicology",
    specimen: "Pleural Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 15.5, high: 166.6, unit: "standard" },
        pediatric: { low: 12.4, high: 141.6, unit: "standard" },
        geriatric: { low: 16.3, high: 183.3, unit: "standard" }
      },
      female: {
        adult: { low: 14.3, high: 158.3, unit: "standard" },
        pediatric: { low: 12.1, high: 136.6, unit: "standard" },
        pregnancy: { low: 13.2, high: 191.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.2,
      panicHigh: 299.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 715,
    isActive: true
  },
  {
    id: "LOINC_1412",
    loincCode: "1412-1",
    testName: "Toxicology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "TOXI_PARAM_22",
    category: "Toxicology",
    specimen: "Tissue Biopsy",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.7, high: 152.0, unit: "standard" },
        pediatric: { low: 38.2, high: 129.2, unit: "standard" },
        geriatric: { low: 50.1, high: 167.2, unit: "standard" }
      },
      female: {
        adult: { low: 43.9, high: 144.4, unit: "standard" },
        pediatric: { low: 37.2, high: 124.6, unit: "standard" },
        pregnancy: { low: 40.5, high: 174.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 273.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1681,
    isActive: true
  },
  {
    id: "LOINC_1413",
    loincCode: "1413-8",
    testName: "Toxicology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "TOXI_PARAM_23",
    category: "Toxicology",
    specimen: "Serum",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.8, high: 93.8, unit: "standard" },
        pediatric: { low: 17.4, high: 79.7, unit: "standard" },
        geriatric: { low: 22.9, high: 103.2, unit: "standard" }
      },
      female: {
        adult: { low: 20.1, high: 89.1, unit: "standard" },
        pediatric: { low: 17.0, high: 76.9, unit: "standard" },
        pregnancy: { low: 18.5, high: 107.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.7,
      panicHigh: 168.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 904,
    isActive: true
  },
  {
    id: "LOINC_1414",
    loincCode: "1414-6",
    testName: "Toxicology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "TOXI_PARAM_24",
    category: "Toxicology",
    specimen: "Random Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.7, high: 107.2, unit: "standard" },
        pediatric: { low: 13.4, high: 91.1, unit: "standard" },
        geriatric: { low: 17.5, high: 117.9, unit: "standard" }
      },
      female: {
        adult: { low: 15.4, high: 101.8, unit: "standard" },
        pediatric: { low: 13.0, high: 87.9, unit: "standard" },
        pregnancy: { low: 14.2, high: 123.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.7,
      panicHigh: 193.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 751,
    isActive: true
  },
  {
    id: "LOINC_1415",
    loincCode: "1415-7",
    testName: "Toxicology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "TOXI_PARAM_25",
    category: "Toxicology",
    specimen: "Synovial Fluid",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.3, high: 72.4, unit: "standard" },
        pediatric: { low: 1.0, high: 61.5, unit: "standard" },
        geriatric: { low: 1.4, high: 79.6, unit: "standard" }
      },
      female: {
        adult: { low: 1.2, high: 68.8, unit: "standard" },
        pediatric: { low: 1.0, high: 59.4, unit: "standard" },
        pregnancy: { low: 1.1, high: 83.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.5,
      panicHigh: 130.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 289,
    isActive: true
  },
  {
    id: "LOINC_1416",
    loincCode: "1416-3",
    testName: "Toxicology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "TOXI_PARAM_26",
    category: "Toxicology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.9, high: 109.0, unit: "standard" },
        pediatric: { low: 1.5, high: 92.6, unit: "standard" },
        geriatric: { low: 2.0, high: 119.9, unit: "standard" }
      },
      female: {
        adult: { low: 1.7, high: 103.5, unit: "standard" },
        pediatric: { low: 1.5, high: 89.4, unit: "standard" },
        pregnancy: { low: 1.6, high: 125.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.8,
      panicHigh: 196.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 307,
    isActive: true
  },
  {
    id: "LOINC_1417",
    loincCode: "1417-6",
    testName: "Toxicology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "TOXI_PARAM_27",
    category: "Toxicology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 20.3, high: 47.2, unit: "standard" },
        pediatric: { low: 16.2, high: 40.1, unit: "standard" },
        geriatric: { low: 21.3, high: 51.9, unit: "standard" }
      },
      female: {
        adult: { low: 18.7, high: 44.8, unit: "standard" },
        pediatric: { low: 15.8, high: 38.7, unit: "standard" },
        pregnancy: { low: 17.3, high: 54.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.1,
      panicHigh: 85.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 859,
    isActive: true
  },
  {
    id: "LOINC_1418",
    loincCode: "1418-8",
    testName: "Toxicology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "TOXI_PARAM_28",
    category: "Toxicology",
    specimen: "Plasma (Citrate)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.8, high: 122.6, unit: "standard" },
        pediatric: { low: 0.6, high: 104.2, unit: "standard" },
        geriatric: { low: 0.8, high: 134.9, unit: "standard" }
      },
      female: {
        adult: { low: 0.7, high: 116.5, unit: "standard" },
        pediatric: { low: 0.6, high: 100.5, unit: "standard" },
        pregnancy: { low: 0.7, high: 141.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.3,
      panicHigh: 220.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 274,
    isActive: true
  },
  {
    id: "LOINC_1419",
    loincCode: "1419-9",
    testName: "Toxicology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "TOXI_PARAM_29",
    category: "Toxicology",
    specimen: "CSF",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.0, high: 143.2, unit: "standard" },
        pediatric: { low: 19.2, high: 121.7, unit: "standard" },
        geriatric: { low: 25.2, high: 157.5, unit: "standard" }
      },
      female: {
        adult: { low: 22.1, high: 136.0, unit: "standard" },
        pediatric: { low: 18.7, high: 117.4, unit: "standard" },
        pregnancy: { low: 20.4, high: 164.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.6,
      panicHigh: 257.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 970,
    isActive: true
  },
  {
    id: "LOINC_1420",
    loincCode: "1420-9",
    testName: "Toxicology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "TOXI_PARAM_30",
    category: "Toxicology",
    specimen: "Throat Swab",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.3, high: 19.8, unit: "standard" },
        pediatric: { low: 3.4, high: 16.8, unit: "standard" },
        geriatric: { low: 4.5, high: 21.8, unit: "standard" }
      },
      female: {
        adult: { low: 4.0, high: 18.8, unit: "standard" },
        pediatric: { low: 3.4, high: 16.2, unit: "standard" },
        pregnancy: { low: 3.7, high: 22.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 35.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 379,
    isActive: true
  },
  {
    id: "LOINC_1421",
    loincCode: "1421-3",
    testName: "Toxicology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "TOXI_PARAM_31",
    category: "Toxicology",
    specimen: "Stool Sample",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 13.1, high: 91.3, unit: "standard" },
        pediatric: { low: 10.5, high: 77.6, unit: "standard" },
        geriatric: { low: 13.8, high: 100.4, unit: "standard" }
      },
      female: {
        adult: { low: 12.1, high: 86.7, unit: "standard" },
        pediatric: { low: 10.2, high: 74.9, unit: "standard" },
        pregnancy: { low: 11.1, high: 105.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.2,
      panicHigh: 164.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 643,
    isActive: true
  },
  {
    id: "LOINC_1422",
    loincCode: "1422-9",
    testName: "Toxicology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "TOXI_PARAM_32",
    category: "Toxicology",
    specimen: "Plasma (Heparin)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 44.8, high: 63.2, unit: "standard" },
        pediatric: { low: 35.8, high: 53.7, unit: "standard" },
        geriatric: { low: 47.0, high: 69.5, unit: "standard" }
      },
      female: {
        adult: { low: 41.2, high: 60.0, unit: "standard" },
        pediatric: { low: 34.9, high: 51.8, unit: "standard" },
        pregnancy: { low: 38.1, high: 72.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.9,
      panicHigh: 113.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1594,
    isActive: true
  },
  {
    id: "LOINC_1423",
    loincCode: "1423-3",
    testName: "Toxicology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "TOXI_PARAM_33",
    category: "Toxicology",
    specimen: "24-Hour Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.2, high: 51.4, unit: "standard" },
        pediatric: { low: 33.0, high: 43.7, unit: "standard" },
        geriatric: { low: 43.3, high: 56.5, unit: "standard" }
      },
      female: {
        adult: { low: 37.9, high: 48.8, unit: "standard" },
        pediatric: { low: 32.1, high: 42.1, unit: "standard" },
        pregnancy: { low: 35.0, high: 59.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 92.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1486,
    isActive: true
  },
  {
    id: "LOINC_1424",
    loincCode: "1424-5",
    testName: "Toxicology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "TOXI_PARAM_34",
    category: "Toxicology",
    specimen: "Pleural Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.0, high: 103.8, unit: "standard" },
        pediatric: { low: 38.4, high: 88.2, unit: "standard" },
        geriatric: { low: 50.4, high: 114.2, unit: "standard" }
      },
      female: {
        adult: { low: 44.2, high: 98.6, unit: "standard" },
        pediatric: { low: 37.4, high: 85.1, unit: "standard" },
        pregnancy: { low: 40.8, high: 119.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 186.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1690,
    isActive: true
  },
  {
    id: "LOINC_1425",
    loincCode: "1425-9",
    testName: "Toxicology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "TOXI_PARAM_35",
    category: "Toxicology",
    specimen: "Tissue Biopsy",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.6, high: 118.7, unit: "standard" },
        pediatric: { low: 9.3, high: 100.9, unit: "standard" },
        geriatric: { low: 12.2, high: 130.6, unit: "standard" }
      },
      female: {
        adult: { low: 10.7, high: 112.8, unit: "standard" },
        pediatric: { low: 9.0, high: 97.3, unit: "standard" },
        pregnancy: { low: 9.9, high: 136.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.6,
      panicHigh: 213.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 598,
    isActive: true
  },
  {
    id: "LOINC_1426",
    loincCode: "1426-5",
    testName: "Toxicology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "TOXI_PARAM_36",
    category: "Toxicology",
    specimen: "Serum",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.6, high: 95.8, unit: "standard" },
        pediatric: { low: 38.9, high: 81.4, unit: "standard" },
        geriatric: { low: 51.0, high: 105.4, unit: "standard" }
      },
      female: {
        adult: { low: 44.7, high: 91.0, unit: "standard" },
        pediatric: { low: 37.9, high: 78.6, unit: "standard" },
        pregnancy: { low: 41.3, high: 110.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.4,
      panicHigh: 172.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1708,
    isActive: true
  },
  {
    id: "LOINC_1427",
    loincCode: "1427-4",
    testName: "Toxicology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "TOXI_PARAM_37",
    category: "Toxicology",
    specimen: "Random Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 49.0, high: 152.5, unit: "standard" },
        pediatric: { low: 39.2, high: 129.6, unit: "standard" },
        geriatric: { low: 51.5, high: 167.8, unit: "standard" }
      },
      female: {
        adult: { low: 45.1, high: 144.9, unit: "standard" },
        pediatric: { low: 38.2, high: 125.0, unit: "standard" },
        pregnancy: { low: 41.6, high: 175.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.6,
      panicHigh: 274.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1720,
    isActive: true
  },
  {
    id: "LOINC_1428",
    loincCode: "1428-2",
    testName: "Toxicology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "TOXI_PARAM_38",
    category: "Toxicology",
    specimen: "Synovial Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 35.6, high: 58.3, unit: "standard" },
        pediatric: { low: 28.5, high: 49.6, unit: "standard" },
        geriatric: { low: 37.4, high: 64.1, unit: "standard" }
      },
      female: {
        adult: { low: 32.8, high: 55.4, unit: "standard" },
        pediatric: { low: 27.8, high: 47.8, unit: "standard" },
        pregnancy: { low: 30.3, high: 67.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.2,
      panicHigh: 104.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1318,
    isActive: true
  },
  {
    id: "LOINC_1429",
    loincCode: "1429-5",
    testName: "Toxicology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "TOXI_PARAM_39",
    category: "Toxicology",
    specimen: "Nasopharyngeal Swab",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.8, high: 85.2, unit: "standard" },
        pediatric: { low: 1.4, high: 72.4, unit: "standard" },
        geriatric: { low: 1.9, high: 93.7, unit: "standard" }
      },
      female: {
        adult: { low: 1.7, high: 80.9, unit: "standard" },
        pediatric: { low: 1.4, high: 69.9, unit: "standard" },
        pregnancy: { low: 1.5, high: 98.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.7,
      panicHigh: 153.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 304,
    isActive: true
  },
  {
    id: "LOINC_1430",
    loincCode: "1430-4",
    testName: "Toxicology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "TOXI_PARAM_40",
    category: "Toxicology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.3, high: 86.3, unit: "standard" },
        pediatric: { low: 31.4, high: 73.4, unit: "standard" },
        geriatric: { low: 41.3, high: 94.9, unit: "standard" }
      },
      female: {
        adult: { low: 36.2, high: 82.0, unit: "standard" },
        pediatric: { low: 30.7, high: 70.8, unit: "standard" },
        pregnancy: { low: 33.4, high: 99.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 155.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1429,
    isActive: true
  },
  {
    id: "LOINC_1431",
    loincCode: "1431-7",
    testName: "Toxicology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "TOXI_PARAM_41",
    category: "Toxicology",
    specimen: "Plasma (Citrate)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.8, high: 96.0, unit: "standard" },
        pediatric: { low: 32.6, high: 81.6, unit: "standard" },
        geriatric: { low: 42.8, high: 105.6, unit: "standard" }
      },
      female: {
        adult: { low: 37.5, high: 91.2, unit: "standard" },
        pediatric: { low: 31.8, high: 78.7, unit: "standard" },
        pregnancy: { low: 34.7, high: 110.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.3,
      panicHigh: 172.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1474,
    isActive: true
  },
  {
    id: "LOINC_1432",
    loincCode: "1432-1",
    testName: "Toxicology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "TOXI_PARAM_42",
    category: "Toxicology",
    specimen: "CSF",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.1, high: 79.2, unit: "standard" },
        pediatric: { low: 36.9, high: 67.3, unit: "standard" },
        geriatric: { low: 48.4, high: 87.1, unit: "standard" }
      },
      female: {
        adult: { low: 42.4, high: 75.2, unit: "standard" },
        pediatric: { low: 36.0, high: 64.9, unit: "standard" },
        pregnancy: { low: 39.2, high: 91.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.4,
      panicHigh: 142.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1633,
    isActive: true
  },
  {
    id: "LOINC_1433",
    loincCode: "1433-9",
    testName: "Toxicology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "TOXI_PARAM_43",
    category: "Toxicology",
    specimen: "Throat Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 35.9, high: 157.8, unit: "standard" },
        pediatric: { low: 28.7, high: 134.1, unit: "standard" },
        geriatric: { low: 37.7, high: 173.6, unit: "standard" }
      },
      female: {
        adult: { low: 33.0, high: 149.9, unit: "standard" },
        pediatric: { low: 28.0, high: 129.4, unit: "standard" },
        pregnancy: { low: 30.5, high: 181.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.4,
      panicHigh: 284.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1327,
    isActive: true
  },
  {
    id: "LOINC_1434",
    loincCode: "1434-2",
    testName: "Toxicology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "TOXI_PARAM_44",
    category: "Toxicology",
    specimen: "Stool Sample",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.1, high: 190.9, unit: "standard" },
        pediatric: { low: 30.5, high: 162.3, unit: "standard" },
        geriatric: { low: 40.0, high: 210.0, unit: "standard" }
      },
      female: {
        adult: { low: 35.1, high: 181.4, unit: "standard" },
        pediatric: { low: 29.7, high: 156.5, unit: "standard" },
        pregnancy: { low: 32.4, high: 219.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.2,
      panicHigh: 343.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1393,
    isActive: true
  },
  {
    id: "LOINC_1435",
    loincCode: "1435-9",
    testName: "Toxicology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "TOXI_PARAM_45",
    category: "Toxicology",
    specimen: "Plasma (Heparin)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.0, high: 198.4, unit: "standard" },
        pediatric: { low: 35.2, high: 168.6, unit: "standard" },
        geriatric: { low: 46.2, high: 218.2, unit: "standard" }
      },
      female: {
        adult: { low: 40.5, high: 188.5, unit: "standard" },
        pediatric: { low: 34.3, high: 162.7, unit: "standard" },
        pregnancy: { low: 37.4, high: 228.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.6,
      panicHigh: 357.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1570,
    isActive: true
  },
  {
    id: "LOINC_1436",
    loincCode: "1436-9",
    testName: "Toxicology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "TOXI_PARAM_46",
    category: "Toxicology",
    specimen: "24-Hour Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.0, high: 153.4, unit: "standard" },
        pediatric: { low: 15.2, high: 130.4, unit: "standard" },
        geriatric: { low: 19.9, high: 168.7, unit: "standard" }
      },
      female: {
        adult: { low: 17.5, high: 145.7, unit: "standard" },
        pediatric: { low: 14.8, high: 125.8, unit: "standard" },
        pregnancy: { low: 16.1, high: 176.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.6,
      panicHigh: 276.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 820,
    isActive: true
  },
  {
    id: "LOINC_1437",
    loincCode: "1437-3",
    testName: "Toxicology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "TOXI_PARAM_47",
    category: "Toxicology",
    specimen: "Pleural Fluid",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.5, high: 147.1, unit: "standard" },
        pediatric: { low: 35.6, high: 125.0, unit: "standard" },
        geriatric: { low: 46.7, high: 161.8, unit: "standard" }
      },
      female: {
        adult: { low: 40.9, high: 139.7, unit: "standard" },
        pediatric: { low: 34.7, high: 120.6, unit: "standard" },
        pregnancy: { low: 37.8, high: 169.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.8,
      panicHigh: 264.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1585,
    isActive: true
  },
  {
    id: "LOINC_1438",
    loincCode: "1438-5",
    testName: "Toxicology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "TOXI_PARAM_48",
    category: "Toxicology",
    specimen: "Tissue Biopsy",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 19.6, high: 143.6, unit: "standard" },
        pediatric: { low: 15.7, high: 122.1, unit: "standard" },
        geriatric: { low: 20.6, high: 158.0, unit: "standard" }
      },
      female: {
        adult: { low: 18.0, high: 136.4, unit: "standard" },
        pediatric: { low: 15.3, high: 117.8, unit: "standard" },
        pregnancy: { low: 16.7, high: 165.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 258.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 838,
    isActive: true
  },
  {
    id: "LOINC_1439",
    loincCode: "1439-5",
    testName: "Toxicology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "TOXI_PARAM_49",
    category: "Toxicology",
    specimen: "Serum",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.8, high: 64.5, unit: "standard" },
        pediatric: { low: 37.4, high: 54.8, unit: "standard" },
        geriatric: { low: 49.1, high: 71.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 61.3, unit: "standard" },
        pediatric: { low: 36.5, high: 52.9, unit: "standard" },
        pregnancy: { low: 39.8, high: 74.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 116.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1654,
    isActive: true
  },
  {
    id: "LOINC_1440",
    loincCode: "1440-3",
    testName: "Toxicology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "TOXI_PARAM_50",
    category: "Toxicology",
    specimen: "Random Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 17.8, high: 168.4, unit: "standard" },
        pediatric: { low: 14.2, high: 143.1, unit: "standard" },
        geriatric: { low: 18.7, high: 185.2, unit: "standard" }
      },
      female: {
        adult: { low: 16.4, high: 160.0, unit: "standard" },
        pediatric: { low: 13.9, high: 138.1, unit: "standard" },
        pregnancy: { low: 15.1, high: 193.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.1,
      panicHigh: 303.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 784,
    isActive: true
  },
  {
    id: "LOINC_1441",
    loincCode: "1441-6",
    testName: "Toxicology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "TOXI_PARAM_51",
    category: "Toxicology",
    specimen: "Synovial Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.1, high: 68.1, unit: "standard" },
        pediatric: { low: 32.1, high: 57.9, unit: "standard" },
        geriatric: { low: 42.1, high: 74.9, unit: "standard" }
      },
      female: {
        adult: { low: 36.9, high: 64.7, unit: "standard" },
        pediatric: { low: 31.3, high: 55.8, unit: "standard" },
        pregnancy: { low: 34.1, high: 78.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.0,
      panicHigh: 122.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1453,
    isActive: true
  },
  {
    id: "LOINC_1442",
    loincCode: "1442-2",
    testName: "Toxicology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "TOXI_PARAM_52",
    category: "Toxicology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.7, high: 155.3, unit: "standard" },
        pediatric: { low: 39.0, high: 132.0, unit: "standard" },
        geriatric: { low: 51.1, high: 170.8, unit: "standard" }
      },
      female: {
        adult: { low: 44.8, high: 147.5, unit: "standard" },
        pediatric: { low: 38.0, high: 127.3, unit: "standard" },
        pregnancy: { low: 41.4, high: 178.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.5,
      panicHigh: 279.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1711,
    isActive: true
  },
  {
    id: "LOINC_1443",
    loincCode: "1443-5",
    testName: "Toxicology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "TOXI_PARAM_53",
    category: "Toxicology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.5, high: 103.2, unit: "standard" },
        pediatric: { low: 24.4, high: 87.7, unit: "standard" },
        geriatric: { low: 32.0, high: 113.5, unit: "standard" }
      },
      female: {
        adult: { low: 28.1, high: 98.0, unit: "standard" },
        pediatric: { low: 23.8, high: 84.6, unit: "standard" },
        pregnancy: { low: 25.9, high: 118.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 185.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1165,
    isActive: true
  },
  {
    id: "LOINC_1444",
    loincCode: "1444-5",
    testName: "Toxicology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "TOXI_PARAM_54",
    category: "Toxicology",
    specimen: "Plasma (Citrate)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.5, high: 171.8, unit: "standard" },
        pediatric: { low: 38.0, high: 146.0, unit: "standard" },
        geriatric: { low: 49.9, high: 189.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.7, high: 163.2, unit: "standard" },
        pediatric: { low: 37.1, high: 140.9, unit: "standard" },
        pregnancy: { low: 40.4, high: 197.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 309.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1675,
    isActive: true
  },
  {
    id: "LOINC_1445",
    loincCode: "1445-6",
    testName: "Toxicology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "TOXI_PARAM_55",
    category: "Toxicology",
    specimen: "CSF",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.5, high: 150.2, unit: "standard" },
        pediatric: { low: 9.2, high: 127.7, unit: "standard" },
        geriatric: { low: 12.1, high: 165.2, unit: "standard" }
      },
      female: {
        adult: { low: 10.6, high: 142.7, unit: "standard" },
        pediatric: { low: 9.0, high: 123.2, unit: "standard" },
        pregnancy: { low: 9.8, high: 172.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.6,
      panicHigh: 270.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 595,
    isActive: true
  },
  {
    id: "LOINC_1446",
    loincCode: "1446-5",
    testName: "Toxicology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "TOXI_PARAM_56",
    category: "Toxicology",
    specimen: "Throat Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.1, high: 145.7, unit: "standard" },
        pediatric: { low: 23.3, high: 123.8, unit: "standard" },
        geriatric: { low: 30.6, high: 160.3, unit: "standard" }
      },
      female: {
        adult: { low: 26.8, high: 138.4, unit: "standard" },
        pediatric: { low: 22.7, high: 119.5, unit: "standard" },
        pregnancy: { low: 24.7, high: 167.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.6,
      panicHigh: 262.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1123,
    isActive: true
  },
  {
    id: "LOINC_1447",
    loincCode: "1447-9",
    testName: "Toxicology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "TOXI_PARAM_57",
    category: "Toxicology",
    specimen: "Stool Sample",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.7, high: 124.8, unit: "standard" },
        pediatric: { low: 22.2, high: 106.1, unit: "standard" },
        geriatric: { low: 29.1, high: 137.3, unit: "standard" }
      },
      female: {
        adult: { low: 25.5, high: 118.6, unit: "standard" },
        pediatric: { low: 21.6, high: 102.3, unit: "standard" },
        pregnancy: { low: 23.5, high: 143.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.1,
      panicHigh: 224.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1081,
    isActive: true
  },
  {
    id: "LOINC_1448",
    loincCode: "1448-1",
    testName: "Toxicology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "TOXI_PARAM_58",
    category: "Toxicology",
    specimen: "Plasma (Heparin)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.8, high: 106.9, unit: "standard" },
        pediatric: { low: 3.8, high: 90.9, unit: "standard" },
        geriatric: { low: 5.0, high: 117.6, unit: "standard" }
      },
      female: {
        adult: { low: 4.4, high: 101.6, unit: "standard" },
        pediatric: { low: 3.7, high: 87.7, unit: "standard" },
        pregnancy: { low: 4.1, high: 122.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.9,
      panicHigh: 192.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 394,
    isActive: true
  },
  {
    id: "LOINC_1449",
    loincCode: "1449-7",
    testName: "Toxicology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "TOXI_PARAM_59",
    category: "Toxicology",
    specimen: "24-Hour Urine",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 37.0, high: 134.1, unit: "standard" },
        pediatric: { low: 29.6, high: 114.0, unit: "standard" },
        geriatric: { low: 38.9, high: 147.5, unit: "standard" }
      },
      female: {
        adult: { low: 34.0, high: 127.4, unit: "standard" },
        pediatric: { low: 28.9, high: 110.0, unit: "standard" },
        pregnancy: { low: 31.4, high: 154.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.8,
      panicHigh: 241.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1360,
    isActive: true
  },
  {
    id: "LOINC_1450",
    loincCode: "1450-7",
    testName: "Toxicology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "TOXI_PARAM_60",
    category: "Toxicology",
    specimen: "Pleural Fluid",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.3, high: 77.0, unit: "standard" },
        pediatric: { low: 30.6, high: 65.5, unit: "standard" },
        geriatric: { low: 40.2, high: 84.7, unit: "standard" }
      },
      female: {
        adult: { low: 35.2, high: 73.1, unit: "standard" },
        pediatric: { low: 29.9, high: 63.1, unit: "standard" },
        pregnancy: { low: 32.6, high: 88.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.3,
      panicHigh: 138.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1399,
    isActive: true
  },
  {
    id: "LOINC_1451",
    loincCode: "1451-6",
    testName: "Toxicology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "TOXI_PARAM_61",
    category: "Toxicology",
    specimen: "Tissue Biopsy",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.6, high: 148.2, unit: "standard" },
        pediatric: { low: 14.9, high: 126.0, unit: "standard" },
        geriatric: { low: 19.5, high: 163.0, unit: "standard" }
      },
      female: {
        adult: { low: 17.1, high: 140.8, unit: "standard" },
        pediatric: { low: 14.5, high: 121.5, unit: "standard" },
        pregnancy: { low: 15.8, high: 170.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 266.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 808,
    isActive: true
  },
  {
    id: "LOINC_1452",
    loincCode: "1452-9",
    testName: "Toxicology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "TOXI_PARAM_62",
    category: "Toxicology",
    specimen: "Serum",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 34.4, high: 161.3, unit: "standard" },
        pediatric: { low: 27.5, high: 137.1, unit: "standard" },
        geriatric: { low: 36.1, high: 177.4, unit: "standard" }
      },
      female: {
        adult: { low: 31.6, high: 153.2, unit: "standard" },
        pediatric: { low: 26.8, high: 132.3, unit: "standard" },
        pregnancy: { low: 29.2, high: 185.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.8,
      panicHigh: 290.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1282,
    isActive: true
  },
  {
    id: "LOINC_1453",
    loincCode: "1453-9",
    testName: "Toxicology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "TOXI_PARAM_63",
    category: "Toxicology",
    specimen: "Random Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.4, high: 114.1, unit: "standard" },
        pediatric: { low: 26.7, high: 97.0, unit: "standard" },
        geriatric: { low: 35.1, high: 125.5, unit: "standard" }
      },
      female: {
        adult: { low: 30.7, high: 108.4, unit: "standard" },
        pediatric: { low: 26.1, high: 93.6, unit: "standard" },
        pregnancy: { low: 28.4, high: 131.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.4,
      panicHigh: 205.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1252,
    isActive: true
  },
  {
    id: "LOINC_1454",
    loincCode: "1454-7",
    testName: "Toxicology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "TOXI_PARAM_64",
    category: "Toxicology",
    specimen: "Synovial Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 23.7, high: 100.5, unit: "standard" },
        pediatric: { low: 19.0, high: 85.4, unit: "standard" },
        geriatric: { low: 24.9, high: 110.6, unit: "standard" }
      },
      female: {
        adult: { low: 21.8, high: 95.5, unit: "standard" },
        pediatric: { low: 18.5, high: 82.4, unit: "standard" },
        pregnancy: { low: 20.1, high: 115.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.5,
      panicHigh: 180.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 961,
    isActive: true
  },
  {
    id: "LOINC_1455",
    loincCode: "1455-7",
    testName: "Toxicology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "TOXI_PARAM_65",
    category: "Toxicology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 9.4, high: 40.7, unit: "standard" },
        pediatric: { low: 7.5, high: 34.6, unit: "standard" },
        geriatric: { low: 9.9, high: 44.8, unit: "standard" }
      },
      female: {
        adult: { low: 8.6, high: 38.7, unit: "standard" },
        pediatric: { low: 7.3, high: 33.4, unit: "standard" },
        pregnancy: { low: 8.0, high: 46.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.8,
      panicHigh: 73.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in toxicology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in toxicology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 532,
    isActive: true
  },
  {
    id: "LOINC_1456",
    loincCode: "1456-6",
    testName: "Cytology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "CYTO_PARAM_1",
    category: "Cytology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.8, high: 58.1, unit: "standard" },
        pediatric: { low: 0.6, high: 49.4, unit: "standard" },
        geriatric: { low: 0.8, high: 63.9, unit: "standard" }
      },
      female: {
        adult: { low: 0.7, high: 55.2, unit: "standard" },
        pediatric: { low: 0.6, high: 47.6, unit: "standard" },
        pregnancy: { low: 0.7, high: 66.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.3,
      panicHigh: 104.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 274,
    isActive: true
  },
  {
    id: "LOINC_1457",
    loincCode: "1457-6",
    testName: "Cytology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "CYTO_PARAM_2",
    category: "Cytology",
    specimen: "Plasma (Citrate)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.9, high: 179.3, unit: "standard" },
        pediatric: { low: 31.9, high: 152.4, unit: "standard" },
        geriatric: { low: 41.9, high: 197.2, unit: "standard" }
      },
      female: {
        adult: { low: 36.7, high: 170.3, unit: "standard" },
        pediatric: { low: 31.1, high: 147.0, unit: "standard" },
        pregnancy: { low: 33.9, high: 206.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.0,
      panicHigh: 322.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1447,
    isActive: true
  },
  {
    id: "LOINC_1458",
    loincCode: "1458-4",
    testName: "Cytology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "CYTO_PARAM_3",
    category: "Cytology",
    specimen: "CSF",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.0, high: 158.6, unit: "standard" },
        pediatric: { low: 15.2, high: 134.8, unit: "standard" },
        geriatric: { low: 19.9, high: 174.5, unit: "standard" }
      },
      female: {
        adult: { low: 17.5, high: 150.7, unit: "standard" },
        pediatric: { low: 14.8, high: 130.1, unit: "standard" },
        pregnancy: { low: 16.1, high: 182.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.6,
      panicHigh: 285.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 820,
    isActive: true
  },
  {
    id: "LOINC_1459",
    loincCode: "1459-4",
    testName: "Cytology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "CYTO_PARAM_4",
    category: "Cytology",
    specimen: "Throat Swab",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.6, high: 99.0, unit: "standard" },
        pediatric: { low: 6.9, high: 84.1, unit: "standard" },
        geriatric: { low: 9.0, high: 108.9, unit: "standard" }
      },
      female: {
        adult: { low: 7.9, high: 94.0, unit: "standard" },
        pediatric: { low: 6.7, high: 81.2, unit: "standard" },
        pregnancy: { low: 7.3, high: 113.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 178.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 508,
    isActive: true
  },
  {
    id: "LOINC_1460",
    loincCode: "1460-2",
    testName: "Cytology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "CYTO_PARAM_5",
    category: "Cytology",
    specimen: "Stool Sample",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 49.9, high: 70.2, unit: "standard" },
        pediatric: { low: 39.9, high: 59.7, unit: "standard" },
        geriatric: { low: 52.4, high: 77.2, unit: "standard" }
      },
      female: {
        adult: { low: 45.9, high: 66.7, unit: "standard" },
        pediatric: { low: 38.9, high: 57.6, unit: "standard" },
        pregnancy: { low: 42.4, high: 80.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 20.0,
      panicHigh: 126.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1747,
    isActive: true
  },
  {
    id: "LOINC_1461",
    loincCode: "1461-7",
    testName: "Cytology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "CYTO_PARAM_6",
    category: "Cytology",
    specimen: "Plasma (Heparin)",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.7, high: 49.3, unit: "standard" },
        pediatric: { low: 24.6, high: 41.9, unit: "standard" },
        geriatric: { low: 32.2, high: 54.2, unit: "standard" }
      },
      female: {
        adult: { low: 28.2, high: 46.8, unit: "standard" },
        pediatric: { low: 23.9, high: 40.4, unit: "standard" },
        pregnancy: { low: 26.1, high: 56.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.3,
      panicHigh: 88.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1171,
    isActive: true
  },
  {
    id: "LOINC_1462",
    loincCode: "1462-7",
    testName: "Cytology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "CYTO_PARAM_7",
    category: "Cytology",
    specimen: "24-Hour Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.2, high: 50.4, unit: "standard" },
        pediatric: { low: 22.6, high: 42.8, unit: "standard" },
        geriatric: { low: 29.6, high: 55.4, unit: "standard" }
      },
      female: {
        adult: { low: 25.9, high: 47.9, unit: "standard" },
        pediatric: { low: 22.0, high: 41.3, unit: "standard" },
        pregnancy: { low: 24.0, high: 58.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.3,
      panicHigh: 90.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1096,
    isActive: true
  },
  {
    id: "LOINC_1463",
    loincCode: "1463-8",
    testName: "Cytology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "CYTO_PARAM_8",
    category: "Cytology",
    specimen: "Pleural Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 7.4, high: 28.4, unit: "standard" },
        pediatric: { low: 5.9, high: 24.1, unit: "standard" },
        geriatric: { low: 7.8, high: 31.2, unit: "standard" }
      },
      female: {
        adult: { low: 6.8, high: 27.0, unit: "standard" },
        pediatric: { low: 5.8, high: 23.3, unit: "standard" },
        pregnancy: { low: 6.3, high: 32.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.0,
      panicHigh: 51.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 472,
    isActive: true
  },
  {
    id: "LOINC_1464",
    loincCode: "1464-6",
    testName: "Cytology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "CYTO_PARAM_9",
    category: "Cytology",
    specimen: "Tissue Biopsy",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.8, high: 160.4, unit: "standard" },
        pediatric: { low: 4.6, high: 136.3, unit: "standard" },
        geriatric: { low: 6.1, high: 176.4, unit: "standard" }
      },
      female: {
        adult: { low: 5.3, high: 152.4, unit: "standard" },
        pediatric: { low: 4.5, high: 131.5, unit: "standard" },
        pregnancy: { low: 4.9, high: 184.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.3,
      panicHigh: 288.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 424,
    isActive: true
  },
  {
    id: "LOINC_1465",
    loincCode: "1465-1",
    testName: "Cytology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "CYTO_PARAM_10",
    category: "Cytology",
    specimen: "Serum",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.9, high: 134.5, unit: "standard" },
        pediatric: { low: 20.7, high: 114.3, unit: "standard" },
        geriatric: { low: 27.2, high: 148.0, unit: "standard" }
      },
      female: {
        adult: { low: 23.8, high: 127.8, unit: "standard" },
        pediatric: { low: 20.2, high: 110.3, unit: "standard" },
        pregnancy: { low: 22.0, high: 154.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.4,
      panicHigh: 242.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1027,
    isActive: true
  },
  {
    id: "LOINC_1466",
    loincCode: "1466-9",
    testName: "Cytology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "CYTO_PARAM_11",
    category: "Cytology",
    specimen: "Random Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.2, high: 96.1, unit: "standard" },
        pediatric: { low: 33.0, high: 81.7, unit: "standard" },
        geriatric: { low: 43.3, high: 105.7, unit: "standard" }
      },
      female: {
        adult: { low: 37.9, high: 91.3, unit: "standard" },
        pediatric: { low: 32.1, high: 78.8, unit: "standard" },
        pregnancy: { low: 35.0, high: 110.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 173.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1486,
    isActive: true
  },
  {
    id: "LOINC_1467",
    loincCode: "1467-9",
    testName: "Cytology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "CYTO_PARAM_12",
    category: "Cytology",
    specimen: "Synovial Fluid",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.0, high: 59.1, unit: "standard" },
        pediatric: { low: 37.6, high: 50.2, unit: "standard" },
        geriatric: { low: 49.4, high: 65.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.2, high: 56.1, unit: "standard" },
        pediatric: { low: 36.7, high: 48.5, unit: "standard" },
        pregnancy: { low: 39.9, high: 68.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.8,
      panicHigh: 106.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1660,
    isActive: true
  },
  {
    id: "LOINC_1468",
    loincCode: "1468-8",
    testName: "Cytology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "CYTO_PARAM_13",
    category: "Cytology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.4, high: 79.1, unit: "standard" },
        pediatric: { low: 11.5, high: 67.2, unit: "standard" },
        geriatric: { low: 15.1, high: 87.0, unit: "standard" }
      },
      female: {
        adult: { low: 13.2, high: 75.1, unit: "standard" },
        pediatric: { low: 11.2, high: 64.9, unit: "standard" },
        pregnancy: { low: 12.2, high: 91.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.8,
      panicHigh: 142.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 682,
    isActive: true
  },
  {
    id: "LOINC_1469",
    loincCode: "1469-5",
    testName: "Cytology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "CYTO_PARAM_14",
    category: "Cytology",
    specimen: "Whole Blood (EDTA)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.7, high: 132.6, unit: "standard" },
        pediatric: { low: 9.4, high: 112.7, unit: "standard" },
        geriatric: { low: 12.3, high: 145.9, unit: "standard" }
      },
      female: {
        adult: { low: 10.8, high: 126.0, unit: "standard" },
        pediatric: { low: 9.1, high: 108.7, unit: "standard" },
        pregnancy: { low: 9.9, high: 152.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.7,
      panicHigh: 238.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 601,
    isActive: true
  },
  {
    id: "LOINC_1470",
    loincCode: "1470-2",
    testName: "Cytology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "CYTO_PARAM_15",
    category: "Cytology",
    specimen: "Plasma (Citrate)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.7, high: 133.0, unit: "standard" },
        pediatric: { low: 33.4, high: 113.0, unit: "standard" },
        geriatric: { low: 43.8, high: 146.3, unit: "standard" }
      },
      female: {
        adult: { low: 38.4, high: 126.3, unit: "standard" },
        pediatric: { low: 32.5, high: 109.1, unit: "standard" },
        pregnancy: { low: 35.4, high: 152.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.7,
      panicHigh: 239.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1501,
    isActive: true
  },
  {
    id: "LOINC_1471",
    loincCode: "1471-6",
    testName: "Cytology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "CYTO_PARAM_16",
    category: "Cytology",
    specimen: "CSF",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 13.8, high: 144.3, unit: "standard" },
        pediatric: { low: 11.0, high: 122.7, unit: "standard" },
        geriatric: { low: 14.5, high: 158.7, unit: "standard" }
      },
      female: {
        adult: { low: 12.7, high: 137.1, unit: "standard" },
        pediatric: { low: 10.8, high: 118.3, unit: "standard" },
        pregnancy: { low: 11.7, high: 165.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.5,
      panicHigh: 259.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 664,
    isActive: true
  },
  {
    id: "LOINC_1472",
    loincCode: "1472-1",
    testName: "Cytology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "CYTO_PARAM_17",
    category: "Cytology",
    specimen: "Throat Swab",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 9.4, high: 40.6, unit: "standard" },
        pediatric: { low: 7.5, high: 34.5, unit: "standard" },
        geriatric: { low: 9.9, high: 44.7, unit: "standard" }
      },
      female: {
        adult: { low: 8.6, high: 38.6, unit: "standard" },
        pediatric: { low: 7.3, high: 33.3, unit: "standard" },
        pregnancy: { low: 8.0, high: 46.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.8,
      panicHigh: 73.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 532,
    isActive: true
  },
  {
    id: "LOINC_1473",
    loincCode: "1473-3",
    testName: "Cytology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "CYTO_PARAM_18",
    category: "Cytology",
    specimen: "Stool Sample",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 48.3, high: 132.7, unit: "standard" },
        pediatric: { low: 38.6, high: 112.8, unit: "standard" },
        geriatric: { low: 50.7, high: 146.0, unit: "standard" }
      },
      female: {
        adult: { low: 44.4, high: 126.1, unit: "standard" },
        pediatric: { low: 37.7, high: 108.8, unit: "standard" },
        pregnancy: { low: 41.1, high: 152.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.3,
      panicHigh: 238.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1699,
    isActive: true
  },
  {
    id: "LOINC_1474",
    loincCode: "1474-3",
    testName: "Cytology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "CYTO_PARAM_19",
    category: "Cytology",
    specimen: "Plasma (Heparin)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 45.3, high: 183.8, unit: "standard" },
        pediatric: { low: 36.2, high: 156.2, unit: "standard" },
        geriatric: { low: 47.6, high: 202.2, unit: "standard" }
      },
      female: {
        adult: { low: 41.7, high: 174.6, unit: "standard" },
        pediatric: { low: 35.3, high: 150.7, unit: "standard" },
        pregnancy: { low: 38.5, high: 211.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.1,
      panicHigh: 330.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1609,
    isActive: true
  },
  {
    id: "LOINC_1475",
    loincCode: "1475-5",
    testName: "Cytology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "CYTO_PARAM_20",
    category: "Cytology",
    specimen: "24-Hour Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.9, high: 140.2, unit: "standard" },
        pediatric: { low: 7.1, high: 119.2, unit: "standard" },
        geriatric: { low: 9.3, high: 154.2, unit: "standard" }
      },
      female: {
        adult: { low: 8.2, high: 133.2, unit: "standard" },
        pediatric: { low: 6.9, high: 115.0, unit: "standard" },
        pregnancy: { low: 7.6, high: 161.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.6,
      panicHigh: 252.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 517,
    isActive: true
  },
  {
    id: "LOINC_1476",
    loincCode: "1476-1",
    testName: "Cytology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "CYTO_PARAM_21",
    category: "Cytology",
    specimen: "Pleural Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 29.7, high: 60.6, unit: "standard" },
        pediatric: { low: 23.8, high: 51.5, unit: "standard" },
        geriatric: { low: 31.2, high: 66.7, unit: "standard" }
      },
      female: {
        adult: { low: 27.3, high: 57.6, unit: "standard" },
        pediatric: { low: 23.2, high: 49.7, unit: "standard" },
        pregnancy: { low: 25.2, high: 69.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.9,
      panicHigh: 109.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1141,
    isActive: true
  },
  {
    id: "LOINC_1477",
    loincCode: "1477-4",
    testName: "Cytology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "CYTO_PARAM_22",
    category: "Cytology",
    specimen: "Tissue Biopsy",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 13.1, high: 98.6, unit: "standard" },
        pediatric: { low: 10.5, high: 83.8, unit: "standard" },
        geriatric: { low: 13.8, high: 108.5, unit: "standard" }
      },
      female: {
        adult: { low: 12.1, high: 93.7, unit: "standard" },
        pediatric: { low: 10.2, high: 80.9, unit: "standard" },
        pregnancy: { low: 11.1, high: 113.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.2,
      panicHigh: 177.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 643,
    isActive: true
  },
  {
    id: "LOINC_1478",
    loincCode: "1478-5",
    testName: "Cytology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "CYTO_PARAM_23",
    category: "Cytology",
    specimen: "Serum",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.7, high: 154.0, unit: "standard" },
        pediatric: { low: 6.2, high: 130.9, unit: "standard" },
        geriatric: { low: 8.1, high: 169.4, unit: "standard" }
      },
      female: {
        adult: { low: 7.1, high: 146.3, unit: "standard" },
        pediatric: { low: 6.0, high: 126.3, unit: "standard" },
        pregnancy: { low: 6.5, high: 177.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.1,
      panicHigh: 277.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 481,
    isActive: true
  },
  {
    id: "LOINC_1479",
    loincCode: "1479-3",
    testName: "Cytology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "CYTO_PARAM_24",
    category: "Cytology",
    specimen: "Random Urine",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.4, high: 19.2, unit: "standard" },
        pediatric: { low: 0.3, high: 16.3, unit: "standard" },
        geriatric: { low: 0.4, high: 21.1, unit: "standard" }
      },
      female: {
        adult: { low: 0.4, high: 18.2, unit: "standard" },
        pediatric: { low: 0.3, high: 15.7, unit: "standard" },
        pregnancy: { low: 0.3, high: 22.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.2,
      panicHigh: 34.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 262,
    isActive: true
  },
  {
    id: "LOINC_1480",
    loincCode: "1480-6",
    testName: "Cytology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "CYTO_PARAM_25",
    category: "Cytology",
    specimen: "Synovial Fluid",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 34.2, high: 145.6, unit: "standard" },
        pediatric: { low: 27.4, high: 123.8, unit: "standard" },
        geriatric: { low: 35.9, high: 160.2, unit: "standard" }
      },
      female: {
        adult: { low: 31.5, high: 138.3, unit: "standard" },
        pediatric: { low: 26.7, high: 119.4, unit: "standard" },
        pregnancy: { low: 29.1, high: 167.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.7,
      panicHigh: 262.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1276,
    isActive: true
  },
  {
    id: "LOINC_1481",
    loincCode: "1481-9",
    testName: "Cytology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "CYTO_PARAM_26",
    category: "Cytology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.4, high: 187.7, unit: "standard" },
        pediatric: { low: 33.1, high: 159.5, unit: "standard" },
        geriatric: { low: 43.5, high: 206.5, unit: "standard" }
      },
      female: {
        adult: { low: 38.1, high: 178.3, unit: "standard" },
        pediatric: { low: 32.3, high: 153.9, unit: "standard" },
        pregnancy: { low: 35.2, high: 215.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.6,
      panicHigh: 337.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1492,
    isActive: true
  },
  {
    id: "LOINC_1482",
    loincCode: "1482-2",
    testName: "Cytology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "CYTO_PARAM_27",
    category: "Cytology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 3.1, high: 47.9, unit: "standard" },
        pediatric: { low: 2.5, high: 40.7, unit: "standard" },
        geriatric: { low: 3.3, high: 52.7, unit: "standard" }
      },
      female: {
        adult: { low: 2.9, high: 45.5, unit: "standard" },
        pediatric: { low: 2.4, high: 39.3, unit: "standard" },
        pregnancy: { low: 2.6, high: 55.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.2,
      panicHigh: 86.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 343,
    isActive: true
  },
  {
    id: "LOINC_1483",
    loincCode: "1483-3",
    testName: "Cytology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "CYTO_PARAM_28",
    category: "Cytology",
    specimen: "Plasma (Citrate)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 3.7, high: 79.4, unit: "standard" },
        pediatric: { low: 3.0, high: 67.5, unit: "standard" },
        geriatric: { low: 3.9, high: 87.3, unit: "standard" }
      },
      female: {
        adult: { low: 3.4, high: 75.4, unit: "standard" },
        pediatric: { low: 2.9, high: 65.1, unit: "standard" },
        pregnancy: { low: 3.1, high: 91.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.5,
      panicHigh: 142.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 361,
    isActive: true
  },
  {
    id: "LOINC_1484",
    loincCode: "1484-7",
    testName: "Cytology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "CYTO_PARAM_29",
    category: "Cytology",
    specimen: "CSF",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.3, high: 100.9, unit: "standard" },
        pediatric: { low: 35.4, high: 85.8, unit: "standard" },
        geriatric: { low: 46.5, high: 111.0, unit: "standard" }
      },
      female: {
        adult: { low: 40.8, high: 95.9, unit: "standard" },
        pediatric: { low: 34.6, high: 82.7, unit: "standard" },
        pregnancy: { low: 37.7, high: 116.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.7,
      panicHigh: 181.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1579,
    isActive: true
  },
  {
    id: "LOINC_1485",
    loincCode: "1485-9",
    testName: "Cytology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "CYTO_PARAM_30",
    category: "Cytology",
    specimen: "Throat Swab",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.6, high: 64.0, unit: "standard" },
        pediatric: { low: 3.7, high: 54.4, unit: "standard" },
        geriatric: { low: 4.8, high: 70.4, unit: "standard" }
      },
      female: {
        adult: { low: 4.2, high: 60.8, unit: "standard" },
        pediatric: { low: 3.6, high: 52.5, unit: "standard" },
        pregnancy: { low: 3.9, high: 73.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.8,
      panicHigh: 115.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 388,
    isActive: true
  },
  {
    id: "LOINC_1486",
    loincCode: "1486-4",
    testName: "Cytology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "CYTO_PARAM_31",
    category: "Cytology",
    specimen: "Stool Sample",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.9, high: 73.3, unit: "standard" },
        pediatric: { low: 19.1, high: 62.3, unit: "standard" },
        geriatric: { low: 25.1, high: 80.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.0, high: 69.6, unit: "standard" },
        pediatric: { low: 18.6, high: 60.1, unit: "standard" },
        pregnancy: { low: 20.3, high: 84.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.6,
      panicHigh: 131.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 967,
    isActive: true
  },
  {
    id: "LOINC_1487",
    loincCode: "1487-9",
    testName: "Cytology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "CYTO_PARAM_32",
    category: "Cytology",
    specimen: "Plasma (Heparin)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.9, high: 174.2, unit: "standard" },
        pediatric: { low: 18.3, high: 148.1, unit: "standard" },
        geriatric: { low: 24.0, high: 191.6, unit: "standard" }
      },
      female: {
        adult: { low: 21.1, high: 165.5, unit: "standard" },
        pediatric: { low: 17.9, high: 142.8, unit: "standard" },
        pregnancy: { low: 19.5, high: 200.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.2,
      panicHigh: 313.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 937,
    isActive: true
  },
  {
    id: "LOINC_1488",
    loincCode: "1488-4",
    testName: "Cytology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "CYTO_PARAM_33",
    category: "Cytology",
    specimen: "24-Hour Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 2.1, high: 132.2, unit: "standard" },
        pediatric: { low: 1.7, high: 112.4, unit: "standard" },
        geriatric: { low: 2.2, high: 145.4, unit: "standard" }
      },
      female: {
        adult: { low: 1.9, high: 125.6, unit: "standard" },
        pediatric: { low: 1.6, high: 108.4, unit: "standard" },
        pregnancy: { low: 1.8, high: 152.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.8,
      panicHigh: 238.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 313,
    isActive: true
  },
  {
    id: "LOINC_1489",
    loincCode: "1489-1",
    testName: "Cytology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "CYTO_PARAM_34",
    category: "Cytology",
    specimen: "Pleural Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.5, high: 78.8, unit: "standard" },
        pediatric: { low: 37.2, high: 67.0, unit: "standard" },
        geriatric: { low: 48.8, high: 86.7, unit: "standard" }
      },
      female: {
        adult: { low: 42.8, high: 74.9, unit: "standard" },
        pediatric: { low: 36.3, high: 64.6, unit: "standard" },
        pregnancy: { low: 39.5, high: 90.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.6,
      panicHigh: 141.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1645,
    isActive: true
  },
  {
    id: "LOINC_1490",
    loincCode: "1490-2",
    testName: "Cytology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "CYTO_PARAM_35",
    category: "Cytology",
    specimen: "Tissue Biopsy",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 20.2, high: 142.1, unit: "standard" },
        pediatric: { low: 16.2, high: 120.8, unit: "standard" },
        geriatric: { low: 21.2, high: 156.3, unit: "standard" }
      },
      female: {
        adult: { low: 18.6, high: 135.0, unit: "standard" },
        pediatric: { low: 15.8, high: 116.5, unit: "standard" },
        pregnancy: { low: 17.2, high: 163.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.1,
      panicHigh: 255.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 856,
    isActive: true
  },
  {
    id: "LOINC_1491",
    loincCode: "1491-1",
    testName: "Cytology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "CYTO_PARAM_36",
    category: "Cytology",
    specimen: "Serum",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.7, high: 123.6, unit: "standard" },
        pediatric: { low: 33.4, high: 105.1, unit: "standard" },
        geriatric: { low: 43.8, high: 136.0, unit: "standard" }
      },
      female: {
        adult: { low: 38.4, high: 117.4, unit: "standard" },
        pediatric: { low: 32.5, high: 101.4, unit: "standard" },
        pregnancy: { low: 35.4, high: 142.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.7,
      panicHigh: 222.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1501,
    isActive: true
  },
  {
    id: "LOINC_1492",
    loincCode: "1492-9",
    testName: "Cytology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "CYTO_PARAM_37",
    category: "Cytology",
    specimen: "Random Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 16.0, high: 42.0, unit: "standard" },
        pediatric: { low: 12.8, high: 35.7, unit: "standard" },
        geriatric: { low: 16.8, high: 46.2, unit: "standard" }
      },
      female: {
        adult: { low: 14.7, high: 39.9, unit: "standard" },
        pediatric: { low: 12.5, high: 34.4, unit: "standard" },
        pregnancy: { low: 13.6, high: 48.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 75.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 730,
    isActive: true
  },
  {
    id: "LOINC_1493",
    loincCode: "1493-6",
    testName: "Cytology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "CYTO_PARAM_38",
    category: "Cytology",
    specimen: "Synovial Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.9, high: 152.4, unit: "standard" },
        pediatric: { low: 16.7, high: 129.5, unit: "standard" },
        geriatric: { low: 21.9, high: 167.6, unit: "standard" }
      },
      female: {
        adult: { low: 19.2, high: 144.8, unit: "standard" },
        pediatric: { low: 16.3, high: 125.0, unit: "standard" },
        pregnancy: { low: 17.8, high: 175.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.4,
      panicHigh: 274.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 877,
    isActive: true
  },
  {
    id: "LOINC_1494",
    loincCode: "1494-7",
    testName: "Cytology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "CYTO_PARAM_39",
    category: "Cytology",
    specimen: "Nasopharyngeal Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.8, high: 71.6, unit: "standard" },
        pediatric: { low: 38.2, high: 60.9, unit: "standard" },
        geriatric: { low: 50.2, high: 78.8, unit: "standard" }
      },
      female: {
        adult: { low: 44.0, high: 68.0, unit: "standard" },
        pediatric: { low: 37.3, high: 58.7, unit: "standard" },
        pregnancy: { low: 40.6, high: 82.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 128.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1684,
    isActive: true
  },
  {
    id: "LOINC_1495",
    loincCode: "1495-6",
    testName: "Cytology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "CYTO_PARAM_40",
    category: "Cytology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.0, high: 80.7, unit: "standard" },
        pediatric: { low: 16.8, high: 68.6, unit: "standard" },
        geriatric: { low: 22.1, high: 88.8, unit: "standard" }
      },
      female: {
        adult: { low: 19.3, high: 76.7, unit: "standard" },
        pediatric: { low: 16.4, high: 66.2, unit: "standard" },
        pregnancy: { low: 17.8, high: 92.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.4,
      panicHigh: 145.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 880,
    isActive: true
  },
  {
    id: "LOINC_1496",
    loincCode: "1496-6",
    testName: "Cytology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "CYTO_PARAM_41",
    category: "Cytology",
    specimen: "Plasma (Citrate)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.9, high: 166.9, unit: "standard" },
        pediatric: { low: 20.7, high: 141.9, unit: "standard" },
        geriatric: { low: 27.2, high: 183.6, unit: "standard" }
      },
      female: {
        adult: { low: 23.8, high: 158.6, unit: "standard" },
        pediatric: { low: 20.2, high: 136.9, unit: "standard" },
        pregnancy: { low: 22.0, high: 191.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.4,
      panicHigh: 300.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1027,
    isActive: true
  },
  {
    id: "LOINC_1497",
    loincCode: "1497-2",
    testName: "Cytology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "CYTO_PARAM_42",
    category: "Cytology",
    specimen: "CSF",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.2, high: 79.4, unit: "standard" },
        pediatric: { low: 37.0, high: 67.5, unit: "standard" },
        geriatric: { low: 48.5, high: 87.3, unit: "standard" }
      },
      female: {
        adult: { low: 42.5, high: 75.4, unit: "standard" },
        pediatric: { low: 36.0, high: 65.1, unit: "standard" },
        pregnancy: { low: 39.3, high: 91.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.5,
      panicHigh: 142.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1636,
    isActive: true
  },
  {
    id: "LOINC_1498",
    loincCode: "1498-7",
    testName: "Cytology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "CYTO_PARAM_43",
    category: "Cytology",
    specimen: "Throat Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 32.1, high: 52.2, unit: "standard" },
        pediatric: { low: 25.7, high: 44.4, unit: "standard" },
        geriatric: { low: 33.7, high: 57.4, unit: "standard" }
      },
      female: {
        adult: { low: 29.5, high: 49.6, unit: "standard" },
        pediatric: { low: 25.0, high: 42.8, unit: "standard" },
        pregnancy: { low: 27.3, high: 60.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.8,
      panicHigh: 94.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1213,
    isActive: true
  },
  {
    id: "LOINC_1499",
    loincCode: "1499-6",
    testName: "Cytology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "CYTO_PARAM_44",
    category: "Cytology",
    specimen: "Stool Sample",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.9, high: 144.5, unit: "standard" },
        pediatric: { low: 9.5, high: 122.8, unit: "standard" },
        geriatric: { low: 12.5, high: 159.0, unit: "standard" }
      },
      female: {
        adult: { low: 10.9, high: 137.3, unit: "standard" },
        pediatric: { low: 9.3, high: 118.5, unit: "standard" },
        pregnancy: { low: 10.1, high: 166.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.8,
      panicHigh: 260.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 607,
    isActive: true
  },
  {
    id: "LOINC_1500",
    loincCode: "1500-1",
    testName: "Cytology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "CYTO_PARAM_45",
    category: "Cytology",
    specimen: "Plasma (Heparin)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.3, high: 100.8, unit: "standard" },
        pediatric: { low: 20.2, high: 85.7, unit: "standard" },
        geriatric: { low: 26.6, high: 110.9, unit: "standard" }
      },
      female: {
        adult: { low: 23.3, high: 95.8, unit: "standard" },
        pediatric: { low: 19.7, high: 82.7, unit: "standard" },
        pregnancy: { low: 21.5, high: 115.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.1,
      panicHigh: 181.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1009,
    isActive: true
  },
  {
    id: "LOINC_1501",
    loincCode: "1501-6",
    testName: "Cytology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "CYTO_PARAM_46",
    category: "Cytology",
    specimen: "24-Hour Urine",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.5, high: 124.2, unit: "standard" },
        pediatric: { low: 38.0, high: 105.6, unit: "standard" },
        geriatric: { low: 49.9, high: 136.6, unit: "standard" }
      },
      female: {
        adult: { low: 43.7, high: 118.0, unit: "standard" },
        pediatric: { low: 37.1, high: 101.8, unit: "standard" },
        pregnancy: { low: 40.4, high: 142.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 223.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1675,
    isActive: true
  },
  {
    id: "LOINC_1502",
    loincCode: "1502-8",
    testName: "Cytology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "CYTO_PARAM_47",
    category: "Cytology",
    specimen: "Pleural Fluid",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.3, high: 6.8, unit: "standard" },
        pediatric: { low: 0.2, high: 5.8, unit: "standard" },
        geriatric: { low: 0.3, high: 7.5, unit: "standard" }
      },
      female: {
        adult: { low: 0.3, high: 6.5, unit: "standard" },
        pediatric: { low: 0.2, high: 5.6, unit: "standard" },
        pregnancy: { low: 0.3, high: 7.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.1,
      panicHigh: 12.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 259,
    isActive: true
  },
  {
    id: "LOINC_1503",
    loincCode: "1503-9",
    testName: "Cytology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "CYTO_PARAM_48",
    category: "Cytology",
    specimen: "Tissue Biopsy",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.8, high: 158.2, unit: "standard" },
        pediatric: { low: 24.6, high: 134.5, unit: "standard" },
        geriatric: { low: 32.3, high: 174.0, unit: "standard" }
      },
      female: {
        adult: { low: 28.3, high: 150.3, unit: "standard" },
        pediatric: { low: 24.0, high: 129.7, unit: "standard" },
        pregnancy: { low: 26.2, high: 181.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.3,
      panicHigh: 284.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1174,
    isActive: true
  },
  {
    id: "LOINC_1504",
    loincCode: "1504-6",
    testName: "Cytology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "CYTO_PARAM_49",
    category: "Cytology",
    specimen: "Serum",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.4, high: 61.4, unit: "standard" },
        pediatric: { low: 33.1, high: 52.2, unit: "standard" },
        geriatric: { low: 43.5, high: 67.5, unit: "standard" }
      },
      female: {
        adult: { low: 38.1, high: 58.3, unit: "standard" },
        pediatric: { low: 32.3, high: 50.3, unit: "standard" },
        pregnancy: { low: 35.2, high: 70.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.6,
      panicHigh: 110.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1492,
    isActive: true
  },
  {
    id: "LOINC_1505",
    loincCode: "1505-2",
    testName: "Cytology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "CYTO_PARAM_50",
    category: "Cytology",
    specimen: "Random Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 0.9, high: 8.2, unit: "standard" },
        pediatric: { low: 0.7, high: 7.0, unit: "standard" },
        geriatric: { low: 0.9, high: 9.0, unit: "standard" }
      },
      female: {
        adult: { low: 0.8, high: 7.8, unit: "standard" },
        pediatric: { low: 0.7, high: 6.7, unit: "standard" },
        pregnancy: { low: 0.8, high: 9.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.4,
      panicHigh: 14.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 277,
    isActive: true
  },
  {
    id: "LOINC_1506",
    loincCode: "1506-3",
    testName: "Cytology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "CYTO_PARAM_51",
    category: "Cytology",
    specimen: "Synovial Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 45.5, high: 172.4, unit: "standard" },
        pediatric: { low: 36.4, high: 146.5, unit: "standard" },
        geriatric: { low: 47.8, high: 189.6, unit: "standard" }
      },
      female: {
        adult: { low: 41.9, high: 163.8, unit: "standard" },
        pediatric: { low: 35.5, high: 141.4, unit: "standard" },
        pregnancy: { low: 38.7, high: 198.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.2,
      panicHigh: 310.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1615,
    isActive: true
  },
  {
    id: "LOINC_1507",
    loincCode: "1507-6",
    testName: "Cytology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "CYTO_PARAM_52",
    category: "Cytology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 40.6, high: 134.1, unit: "standard" },
        pediatric: { low: 32.5, high: 114.0, unit: "standard" },
        geriatric: { low: 42.6, high: 147.5, unit: "standard" }
      },
      female: {
        adult: { low: 37.4, high: 127.4, unit: "standard" },
        pediatric: { low: 31.7, high: 110.0, unit: "standard" },
        pregnancy: { low: 34.5, high: 154.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.2,
      panicHigh: 241.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1468,
    isActive: true
  },
  {
    id: "LOINC_1508",
    loincCode: "1508-9",
    testName: "Cytology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "CYTO_PARAM_53",
    category: "Cytology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.6, high: 123.6, unit: "standard" },
        pediatric: { low: 24.5, high: 105.1, unit: "standard" },
        geriatric: { low: 32.1, high: 136.0, unit: "standard" }
      },
      female: {
        adult: { low: 28.2, high: 117.4, unit: "standard" },
        pediatric: { low: 23.9, high: 101.4, unit: "standard" },
        pregnancy: { low: 26.0, high: 142.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 222.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1168,
    isActive: true
  },
  {
    id: "LOINC_1509",
    loincCode: "1509-6",
    testName: "Cytology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "CYTO_PARAM_54",
    category: "Cytology",
    specimen: "Plasma (Citrate)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.4, high: 61.6, unit: "standard" },
        pediatric: { low: 31.5, high: 52.4, unit: "standard" },
        geriatric: { low: 41.4, high: 67.8, unit: "standard" }
      },
      female: {
        adult: { low: 36.2, high: 58.5, unit: "standard" },
        pediatric: { low: 30.7, high: 50.5, unit: "standard" },
        pregnancy: { low: 33.5, high: 70.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.8,
      panicHigh: 110.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1432,
    isActive: true
  },
  {
    id: "LOINC_1510",
    loincCode: "1510-8",
    testName: "Cytology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "CYTO_PARAM_55",
    category: "Cytology",
    specimen: "CSF",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 11.2, high: 85.5, unit: "standard" },
        pediatric: { low: 9.0, high: 72.7, unit: "standard" },
        geriatric: { low: 11.8, high: 94.1, unit: "standard" }
      },
      female: {
        adult: { low: 10.3, high: 81.2, unit: "standard" },
        pediatric: { low: 8.7, high: 70.1, unit: "standard" },
        pregnancy: { low: 9.5, high: 98.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.5,
      panicHigh: 153.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 586,
    isActive: true
  },
  {
    id: "LOINC_1511",
    loincCode: "1511-1",
    testName: "Cytology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "CYTO_PARAM_56",
    category: "Cytology",
    specimen: "Throat Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 28.5, high: 173.5, unit: "standard" },
        pediatric: { low: 22.8, high: 147.5, unit: "standard" },
        geriatric: { low: 29.9, high: 190.9, unit: "standard" }
      },
      female: {
        adult: { low: 26.2, high: 164.8, unit: "standard" },
        pediatric: { low: 22.2, high: 142.3, unit: "standard" },
        pregnancy: { low: 24.2, high: 199.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 312.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1105,
    isActive: true
  },
  {
    id: "LOINC_1512",
    loincCode: "1512-1",
    testName: "Cytology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "CYTO_PARAM_57",
    category: "Cytology",
    specimen: "Stool Sample",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.9, high: 99.6, unit: "standard" },
        pediatric: { low: 19.9, high: 84.7, unit: "standard" },
        geriatric: { low: 26.1, high: 109.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.9, high: 94.6, unit: "standard" },
        pediatric: { low: 19.4, high: 81.7, unit: "standard" },
        pregnancy: { low: 21.2, high: 114.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.0,
      panicHigh: 179.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 997,
    isActive: true
  },
  {
    id: "LOINC_1513",
    loincCode: "1513-7",
    testName: "Cytology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "CYTO_PARAM_58",
    category: "Cytology",
    specimen: "Plasma (Heparin)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.3, high: 61.1, unit: "standard" },
        pediatric: { low: 37.8, high: 51.9, unit: "standard" },
        geriatric: { low: 49.7, high: 67.2, unit: "standard" }
      },
      female: {
        adult: { low: 43.5, high: 58.0, unit: "standard" },
        pediatric: { low: 36.9, high: 50.1, unit: "standard" },
        pregnancy: { low: 40.2, high: 70.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.9,
      panicHigh: 110.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1669,
    isActive: true
  },
  {
    id: "LOINC_1514",
    loincCode: "1514-3",
    testName: "Cytology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "CYTO_PARAM_59",
    category: "Cytology",
    specimen: "24-Hour Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.5, high: 137.5, unit: "standard" },
        pediatric: { low: 18.0, high: 116.9, unit: "standard" },
        geriatric: { low: 23.6, high: 151.3, unit: "standard" }
      },
      female: {
        adult: { low: 20.7, high: 130.6, unit: "standard" },
        pediatric: { low: 17.6, high: 112.8, unit: "standard" },
        pregnancy: { low: 19.1, high: 158.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.0,
      panicHigh: 247.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 925,
    isActive: true
  },
  {
    id: "LOINC_1515",
    loincCode: "1515-2",
    testName: "Cytology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "CYTO_PARAM_60",
    category: "Cytology",
    specimen: "Pleural Fluid",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.6, high: 141.0, unit: "standard" },
        pediatric: { low: 39.7, high: 119.8, unit: "standard" },
        geriatric: { low: 52.1, high: 155.1, unit: "standard" }
      },
      female: {
        adult: { low: 45.6, high: 133.9, unit: "standard" },
        pediatric: { low: 38.7, high: 115.6, unit: "standard" },
        pregnancy: { low: 42.2, high: 162.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 253.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1738,
    isActive: true
  },
  {
    id: "LOINC_1516",
    loincCode: "1516-1",
    testName: "Cytology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "CYTO_PARAM_61",
    category: "Cytology",
    specimen: "Tissue Biopsy",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.1, high: 97.8, unit: "standard" },
        pediatric: { low: 32.9, high: 83.1, unit: "standard" },
        geriatric: { low: 43.2, high: 107.6, unit: "standard" }
      },
      female: {
        adult: { low: 37.8, high: 92.9, unit: "standard" },
        pediatric: { low: 32.1, high: 80.2, unit: "standard" },
        pregnancy: { low: 34.9, high: 112.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.4,
      panicHigh: 176.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1483,
    isActive: true
  },
  {
    id: "LOINC_1517",
    loincCode: "1517-4",
    testName: "Cytology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "CYTO_PARAM_62",
    category: "Cytology",
    specimen: "Serum",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.0, high: 108.4, unit: "standard" },
        pediatric: { low: 36.8, high: 92.1, unit: "standard" },
        geriatric: { low: 48.3, high: 119.2, unit: "standard" }
      },
      female: {
        adult: { low: 42.3, high: 103.0, unit: "standard" },
        pediatric: { low: 35.9, high: 88.9, unit: "standard" },
        pregnancy: { low: 39.1, high: 124.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.4,
      panicHigh: 195.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1630,
    isActive: true
  },
  {
    id: "LOINC_1518",
    loincCode: "1518-4",
    testName: "Cytology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "CYTO_PARAM_63",
    category: "Cytology",
    specimen: "Random Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 8.4, high: 94.2, unit: "standard" },
        pediatric: { low: 6.7, high: 80.1, unit: "standard" },
        geriatric: { low: 8.8, high: 103.6, unit: "standard" }
      },
      female: {
        adult: { low: 7.7, high: 89.5, unit: "standard" },
        pediatric: { low: 6.6, high: 77.2, unit: "standard" },
        pregnancy: { low: 7.1, high: 108.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.4,
      panicHigh: 169.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 502,
    isActive: true
  },
  {
    id: "LOINC_1519",
    loincCode: "1519-5",
    testName: "Cytology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "CYTO_PARAM_64",
    category: "Cytology",
    specimen: "Synovial Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 15.9, high: 81.1, unit: "standard" },
        pediatric: { low: 12.7, high: 68.9, unit: "standard" },
        geriatric: { low: 16.7, high: 89.2, unit: "standard" }
      },
      female: {
        adult: { low: 14.6, high: 77.0, unit: "standard" },
        pediatric: { low: 12.4, high: 66.5, unit: "standard" },
        pregnancy: { low: 13.5, high: 93.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 146.0,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 727,
    isActive: true
  },
  {
    id: "LOINC_1520",
    loincCode: "1520-8",
    testName: "Cytology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "CYTO_PARAM_65",
    category: "Cytology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 6.2, high: 104.4, unit: "standard" },
        pediatric: { low: 5.0, high: 88.7, unit: "standard" },
        geriatric: { low: 6.5, high: 114.8, unit: "standard" }
      },
      female: {
        adult: { low: 5.7, high: 99.2, unit: "standard" },
        pediatric: { low: 4.8, high: 85.6, unit: "standard" },
        pregnancy: { low: 5.3, high: 120.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 187.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in cytology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in cytology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 436,
    isActive: true
  },
  {
    id: "LOINC_1521",
    loincCode: "1521-3",
    testName: "Histopathology Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "HIST_PARAM_1",
    category: "Histopathology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.8, high: 44.0, unit: "standard" },
        pediatric: { low: 0.6, high: 37.4, unit: "standard" },
        geriatric: { low: 0.8, high: 48.4, unit: "standard" }
      },
      female: {
        adult: { low: 0.7, high: 41.8, unit: "standard" },
        pediatric: { low: 0.6, high: 36.1, unit: "standard" },
        pregnancy: { low: 0.7, high: 50.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.3,
      panicHigh: 79.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 274,
    isActive: true
  },
  {
    id: "LOINC_1522",
    loincCode: "1522-7",
    testName: "Histopathology Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "HIST_PARAM_2",
    category: "Histopathology",
    specimen: "Plasma (Citrate)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.0, high: 137.9, unit: "standard" },
        pediatric: { low: 14.4, high: 117.2, unit: "standard" },
        geriatric: { low: 18.9, high: 151.7, unit: "standard" }
      },
      female: {
        adult: { low: 16.6, high: 131.0, unit: "standard" },
        pediatric: { low: 14.0, high: 113.1, unit: "standard" },
        pregnancy: { low: 15.3, high: 158.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.2,
      panicHigh: 248.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 790,
    isActive: true
  },
  {
    id: "LOINC_1523",
    loincCode: "1523-4",
    testName: "Histopathology Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "HIST_PARAM_3",
    category: "Histopathology",
    specimen: "CSF",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 7.4, high: 100.8, unit: "standard" },
        pediatric: { low: 5.9, high: 85.7, unit: "standard" },
        geriatric: { low: 7.8, high: 110.9, unit: "standard" }
      },
      female: {
        adult: { low: 6.8, high: 95.8, unit: "standard" },
        pediatric: { low: 5.8, high: 82.7, unit: "standard" },
        pregnancy: { low: 6.3, high: 115.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.0,
      panicHigh: 181.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 472,
    isActive: true
  },
  {
    id: "LOINC_1524",
    loincCode: "1524-7",
    testName: "Histopathology Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "HIST_PARAM_4",
    category: "Histopathology",
    specimen: "Throat Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.4, high: 119.2, unit: "standard" },
        pediatric: { low: 20.3, high: 101.3, unit: "standard" },
        geriatric: { low: 26.7, high: 131.1, unit: "standard" }
      },
      female: {
        adult: { low: 23.4, high: 113.2, unit: "standard" },
        pediatric: { low: 19.8, high: 97.7, unit: "standard" },
        pregnancy: { low: 21.6, high: 137.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 214.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1012,
    isActive: true
  },
  {
    id: "LOINC_1525",
    loincCode: "1525-4",
    testName: "Histopathology Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "HIST_PARAM_5",
    category: "Histopathology",
    specimen: "Stool Sample",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.8, high: 179.1, unit: "standard" },
        pediatric: { low: 38.2, high: 152.2, unit: "standard" },
        geriatric: { low: 50.2, high: 197.0, unit: "standard" }
      },
      female: {
        adult: { low: 44.0, high: 170.1, unit: "standard" },
        pediatric: { low: 37.3, high: 146.9, unit: "standard" },
        pregnancy: { low: 40.6, high: 206.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 322.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1684,
    isActive: true
  },
  {
    id: "LOINC_1526",
    loincCode: "1526-9",
    testName: "Histopathology Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "HIST_PARAM_6",
    category: "Histopathology",
    specimen: "Plasma (Heparin)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 23.2, high: 53.0, unit: "standard" },
        pediatric: { low: 18.6, high: 45.0, unit: "standard" },
        geriatric: { low: 24.4, high: 58.3, unit: "standard" }
      },
      female: {
        adult: { low: 21.3, high: 50.3, unit: "standard" },
        pediatric: { low: 18.1, high: 43.5, unit: "standard" },
        pregnancy: { low: 19.7, high: 60.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.3,
      panicHigh: 95.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 946,
    isActive: true
  },
  {
    id: "LOINC_1527",
    loincCode: "1527-5",
    testName: "Histopathology Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "HIST_PARAM_7",
    category: "Histopathology",
    specimen: "24-Hour Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.4, high: 17.6, unit: "standard" },
        pediatric: { low: 0.3, high: 15.0, unit: "standard" },
        geriatric: { low: 0.4, high: 19.4, unit: "standard" }
      },
      female: {
        adult: { low: 0.4, high: 16.7, unit: "standard" },
        pediatric: { low: 0.3, high: 14.4, unit: "standard" },
        pregnancy: { low: 0.3, high: 20.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.2,
      panicHigh: 31.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 262,
    isActive: true
  },
  {
    id: "LOINC_1528",
    loincCode: "1528-9",
    testName: "Histopathology Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "HIST_PARAM_8",
    category: "Histopathology",
    specimen: "Pleural Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.0, high: 124.5, unit: "standard" },
        pediatric: { low: 34.4, high: 105.8, unit: "standard" },
        geriatric: { low: 45.1, high: 137.0, unit: "standard" }
      },
      female: {
        adult: { low: 39.6, high: 118.3, unit: "standard" },
        pediatric: { low: 33.5, high: 102.1, unit: "standard" },
        pregnancy: { low: 36.5, high: 143.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 224.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1540,
    isActive: true
  },
  {
    id: "LOINC_1529",
    loincCode: "1529-8",
    testName: "Histopathology Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "HIST_PARAM_9",
    category: "Histopathology",
    specimen: "Tissue Biopsy",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 1.8, high: 92.5, unit: "standard" },
        pediatric: { low: 1.4, high: 78.6, unit: "standard" },
        geriatric: { low: 1.9, high: 101.8, unit: "standard" }
      },
      female: {
        adult: { low: 1.7, high: 87.9, unit: "standard" },
        pediatric: { low: 1.4, high: 75.8, unit: "standard" },
        pregnancy: { low: 1.5, high: 106.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.7,
      panicHigh: 166.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 304,
    isActive: true
  },
  {
    id: "LOINC_1530",
    loincCode: "1530-9",
    testName: "Histopathology Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "HIST_PARAM_10",
    category: "Histopathology",
    specimen: "Serum",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.2, high: 87.5, unit: "standard" },
        pediatric: { low: 13.0, high: 74.4, unit: "standard" },
        geriatric: { low: 17.0, high: 96.3, unit: "standard" }
      },
      female: {
        adult: { low: 14.9, high: 83.1, unit: "standard" },
        pediatric: { low: 12.6, high: 71.8, unit: "standard" },
        pregnancy: { low: 13.8, high: 100.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.5,
      panicHigh: 157.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 736,
    isActive: true
  },
  {
    id: "LOINC_1531",
    loincCode: "1531-9",
    testName: "Histopathology Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "HIST_PARAM_11",
    category: "Histopathology",
    specimen: "Random Urine",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 40.2, high: 186.0, unit: "standard" },
        pediatric: { low: 32.2, high: 158.1, unit: "standard" },
        geriatric: { low: 42.2, high: 204.6, unit: "standard" }
      },
      female: {
        adult: { low: 37.0, high: 176.7, unit: "standard" },
        pediatric: { low: 31.4, high: 152.5, unit: "standard" },
        pregnancy: { low: 34.2, high: 213.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.1,
      panicHigh: 334.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1456,
    isActive: true
  },
  {
    id: "LOINC_1532",
    loincCode: "1532-7",
    testName: "Histopathology Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "HIST_PARAM_12",
    category: "Histopathology",
    specimen: "Synovial Fluid",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 4.7, high: 88.7, unit: "standard" },
        pediatric: { low: 3.8, high: 75.4, unit: "standard" },
        geriatric: { low: 4.9, high: 97.6, unit: "standard" }
      },
      female: {
        adult: { low: 4.3, high: 84.3, unit: "standard" },
        pediatric: { low: 3.7, high: 72.7, unit: "standard" },
        pregnancy: { low: 4.0, high: 102.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.9,
      panicHigh: 159.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 391,
    isActive: true
  },
  {
    id: "LOINC_1533",
    loincCode: "1533-8",
    testName: "Histopathology Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "HIST_PARAM_13",
    category: "Histopathology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 16.5, high: 155.2, unit: "standard" },
        pediatric: { low: 13.2, high: 131.9, unit: "standard" },
        geriatric: { low: 17.3, high: 170.7, unit: "standard" }
      },
      female: {
        adult: { low: 15.2, high: 147.4, unit: "standard" },
        pediatric: { low: 12.9, high: 127.3, unit: "standard" },
        pregnancy: { low: 14.0, high: 178.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.6,
      panicHigh: 279.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 745,
    isActive: true
  },
  {
    id: "LOINC_1534",
    loincCode: "1534-5",
    testName: "Histopathology Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "HIST_PARAM_14",
    category: "Histopathology",
    specimen: "Whole Blood (EDTA)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.8, high: 194.4, unit: "standard" },
        pediatric: { low: 38.2, high: 165.2, unit: "standard" },
        geriatric: { low: 50.2, high: 213.8, unit: "standard" }
      },
      female: {
        adult: { low: 44.0, high: 184.7, unit: "standard" },
        pediatric: { low: 37.3, high: 159.4, unit: "standard" },
        pregnancy: { low: 40.6, high: 223.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.1,
      panicHigh: 349.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1684,
    isActive: true
  },
  {
    id: "LOINC_1535",
    loincCode: "1535-5",
    testName: "Histopathology Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "HIST_PARAM_15",
    category: "Histopathology",
    specimen: "Plasma (Citrate)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.8, high: 72.4, unit: "standard" },
        pediatric: { low: 0.6, high: 61.5, unit: "standard" },
        geriatric: { low: 0.8, high: 79.6, unit: "standard" }
      },
      female: {
        adult: { low: 0.7, high: 68.8, unit: "standard" },
        pediatric: { low: 0.6, high: 59.4, unit: "standard" },
        pregnancy: { low: 0.7, high: 83.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.3,
      panicHigh: 130.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 274,
    isActive: true
  },
  {
    id: "LOINC_1536",
    loincCode: "1536-3",
    testName: "Histopathology Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "HIST_PARAM_16",
    category: "Histopathology",
    specimen: "CSF",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.5, high: 80.2, unit: "standard" },
        pediatric: { low: 34.8, high: 68.2, unit: "standard" },
        geriatric: { low: 45.7, high: 88.2, unit: "standard" }
      },
      female: {
        adult: { low: 40.0, high: 76.2, unit: "standard" },
        pediatric: { low: 33.9, high: 65.8, unit: "standard" },
        pregnancy: { low: 37.0, high: 92.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.4,
      panicHigh: 144.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1555,
    isActive: true
  },
  {
    id: "LOINC_1537",
    loincCode: "1537-2",
    testName: "Histopathology Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "HIST_PARAM_17",
    category: "Histopathology",
    specimen: "Throat Swab",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.9, high: 49.7, unit: "standard" },
        pediatric: { low: 33.5, high: 42.2, unit: "standard" },
        geriatric: { low: 44.0, high: 54.7, unit: "standard" }
      },
      female: {
        adult: { low: 38.5, high: 47.2, unit: "standard" },
        pediatric: { low: 32.7, high: 40.8, unit: "standard" },
        pregnancy: { low: 35.6, high: 57.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.8,
      panicHigh: 89.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1507,
    isActive: true
  },
  {
    id: "LOINC_1538",
    loincCode: "1538-2",
    testName: "Histopathology Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "HIST_PARAM_18",
    category: "Histopathology",
    specimen: "Stool Sample",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.3, high: 55.9, unit: "standard" },
        pediatric: { low: 25.8, high: 47.5, unit: "standard" },
        geriatric: { low: 33.9, high: 61.5, unit: "standard" }
      },
      female: {
        adult: { low: 29.7, high: 53.1, unit: "standard" },
        pediatric: { low: 25.2, high: 45.8, unit: "standard" },
        pregnancy: { low: 27.5, high: 64.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.9,
      panicHigh: 100.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1219,
    isActive: true
  },
  {
    id: "LOINC_1539",
    loincCode: "1539-7",
    testName: "Histopathology Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "HIST_PARAM_19",
    category: "Histopathology",
    specimen: "Plasma (Heparin)",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.8, high: 196.5, unit: "standard" },
        pediatric: { low: 37.4, high: 167.0, unit: "standard" },
        geriatric: { low: 49.1, high: 216.2, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 186.7, unit: "standard" },
        pediatric: { low: 36.5, high: 161.1, unit: "standard" },
        pregnancy: { low: 39.8, high: 226.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 353.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1654,
    isActive: true
  },
  {
    id: "LOINC_1540",
    loincCode: "1540-9",
    testName: "Histopathology Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "HIST_PARAM_20",
    category: "Histopathology",
    specimen: "24-Hour Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 49.6, high: 157.7, unit: "standard" },
        pediatric: { low: 39.7, high: 134.0, unit: "standard" },
        geriatric: { low: 52.1, high: 173.5, unit: "standard" }
      },
      female: {
        adult: { low: 45.6, high: 149.8, unit: "standard" },
        pediatric: { low: 38.7, high: 129.3, unit: "standard" },
        pregnancy: { low: 42.2, high: 181.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.8,
      panicHigh: 283.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1738,
    isActive: true
  },
  {
    id: "LOINC_1541",
    loincCode: "1541-6",
    testName: "Histopathology Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "HIST_PARAM_21",
    category: "Histopathology",
    specimen: "Pleural Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 43.8, high: 108.2, unit: "standard" },
        pediatric: { low: 35.0, high: 92.0, unit: "standard" },
        geriatric: { low: 46.0, high: 119.0, unit: "standard" }
      },
      female: {
        adult: { low: 40.3, high: 102.8, unit: "standard" },
        pediatric: { low: 34.2, high: 88.7, unit: "standard" },
        pregnancy: { low: 37.2, high: 124.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.5,
      panicHigh: 194.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1564,
    isActive: true
  },
  {
    id: "LOINC_1542",
    loincCode: "1542-9",
    testName: "Histopathology Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "HIST_PARAM_22",
    category: "Histopathology",
    specimen: "Tissue Biopsy",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 32.0, high: 121.7, unit: "standard" },
        pediatric: { low: 25.6, high: 103.4, unit: "standard" },
        geriatric: { low: 33.6, high: 133.9, unit: "standard" }
      },
      female: {
        adult: { low: 29.4, high: 115.6, unit: "standard" },
        pediatric: { low: 25.0, high: 99.8, unit: "standard" },
        pregnancy: { low: 27.2, high: 140.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.8,
      panicHigh: 219.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1210,
    isActive: true
  },
  {
    id: "LOINC_1543",
    loincCode: "1543-8",
    testName: "Histopathology Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "HIST_PARAM_23",
    category: "Histopathology",
    specimen: "Serum",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.1, high: 126.1, unit: "standard" },
        pediatric: { low: 32.9, high: 107.2, unit: "standard" },
        geriatric: { low: 43.2, high: 138.7, unit: "standard" }
      },
      female: {
        adult: { low: 37.8, high: 119.8, unit: "standard" },
        pediatric: { low: 32.1, high: 103.4, unit: "standard" },
        pregnancy: { low: 34.9, high: 145.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.4,
      panicHigh: 227.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1483,
    isActive: true
  },
  {
    id: "LOINC_1544",
    loincCode: "1544-1",
    testName: "Histopathology Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "HIST_PARAM_24",
    category: "Histopathology",
    specimen: "Random Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.4, high: 179.0, unit: "standard" },
        pediatric: { low: 37.9, high: 152.2, unit: "standard" },
        geriatric: { low: 49.8, high: 196.9, unit: "standard" }
      },
      female: {
        adult: { low: 43.6, high: 170.0, unit: "standard" },
        pediatric: { low: 37.0, high: 146.8, unit: "standard" },
        pregnancy: { low: 40.3, high: 205.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.0,
      panicHigh: 322.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1672,
    isActive: true
  },
  {
    id: "LOINC_1545",
    loincCode: "1545-6",
    testName: "Histopathology Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "HIST_PARAM_25",
    category: "Histopathology",
    specimen: "Synovial Fluid",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.0, high: 148.7, unit: "standard" },
        pediatric: { low: 15.2, high: 126.4, unit: "standard" },
        geriatric: { low: 19.9, high: 163.6, unit: "standard" }
      },
      female: {
        adult: { low: 17.5, high: 141.3, unit: "standard" },
        pediatric: { low: 14.8, high: 121.9, unit: "standard" },
        pregnancy: { low: 16.1, high: 171.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.6,
      panicHigh: 267.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 820,
    isActive: true
  },
  {
    id: "LOINC_1546",
    loincCode: "1546-9",
    testName: "Histopathology Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "HIST_PARAM_26",
    category: "Histopathology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.9, high: 42.4, unit: "standard" },
        pediatric: { low: 7.9, high: 36.0, unit: "standard" },
        geriatric: { low: 10.4, high: 46.6, unit: "standard" }
      },
      female: {
        adult: { low: 9.1, high: 40.3, unit: "standard" },
        pediatric: { low: 7.7, high: 34.8, unit: "standard" },
        pregnancy: { low: 8.4, high: 48.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 76.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 547,
    isActive: true
  },
  {
    id: "LOINC_1547",
    loincCode: "1547-1",
    testName: "Histopathology Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "HIST_PARAM_27",
    category: "Histopathology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.9, high: 92.9, unit: "standard" },
        pediatric: { low: 35.9, high: 79.0, unit: "standard" },
        geriatric: { low: 47.1, high: 102.2, unit: "standard" }
      },
      female: {
        adult: { low: 41.3, high: 88.3, unit: "standard" },
        pediatric: { low: 35.0, high: 76.2, unit: "standard" },
        pregnancy: { low: 38.2, high: 106.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.0,
      panicHigh: 167.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1597,
    isActive: true
  },
  {
    id: "LOINC_1548",
    loincCode: "1548-7",
    testName: "Histopathology Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "HIST_PARAM_28",
    category: "Histopathology",
    specimen: "Plasma (Citrate)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.5, high: 77.1, unit: "standard" },
        pediatric: { low: 34.0, high: 65.5, unit: "standard" },
        geriatric: { low: 44.6, high: 84.8, unit: "standard" }
      },
      female: {
        adult: { low: 39.1, high: 73.2, unit: "standard" },
        pediatric: { low: 33.1, high: 63.2, unit: "standard" },
        pregnancy: { low: 36.1, high: 88.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.0,
      panicHigh: 138.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1525,
    isActive: true
  },
  {
    id: "LOINC_1549",
    loincCode: "1549-6",
    testName: "Histopathology Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "HIST_PARAM_29",
    category: "Histopathology",
    specimen: "CSF",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.7, high: 72.4, unit: "standard" },
        pediatric: { low: 24.6, high: 61.5, unit: "standard" },
        geriatric: { low: 32.2, high: 79.6, unit: "standard" }
      },
      female: {
        adult: { low: 28.2, high: 68.8, unit: "standard" },
        pediatric: { low: 23.9, high: 59.4, unit: "standard" },
        pregnancy: { low: 26.1, high: 83.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.3,
      panicHigh: 130.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1171,
    isActive: true
  },
  {
    id: "LOINC_1550",
    loincCode: "1550-5",
    testName: "Histopathology Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "HIST_PARAM_30",
    category: "Histopathology",
    specimen: "Throat Swab",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 5.3, high: 134.5, unit: "standard" },
        pediatric: { low: 4.2, high: 114.3, unit: "standard" },
        geriatric: { low: 5.6, high: 148.0, unit: "standard" }
      },
      female: {
        adult: { low: 4.9, high: 127.8, unit: "standard" },
        pediatric: { low: 4.1, high: 110.3, unit: "standard" },
        pregnancy: { low: 4.5, high: 154.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.1,
      panicHigh: 242.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 409,
    isActive: true
  },
  {
    id: "LOINC_1551",
    loincCode: "1551-3",
    testName: "Histopathology Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "HIST_PARAM_31",
    category: "Histopathology",
    specimen: "Stool Sample",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.3, high: 175.0, unit: "standard" },
        pediatric: { low: 17.8, high: 148.8, unit: "standard" },
        geriatric: { low: 23.4, high: 192.5, unit: "standard" }
      },
      female: {
        adult: { low: 20.5, high: 166.3, unit: "standard" },
        pediatric: { low: 17.4, high: 143.5, unit: "standard" },
        pregnancy: { low: 19.0, high: 201.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.9,
      panicHigh: 315.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 919,
    isActive: true
  },
  {
    id: "LOINC_1552",
    loincCode: "1552-3",
    testName: "Histopathology Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "HIST_PARAM_32",
    category: "Histopathology",
    specimen: "Plasma (Heparin)",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.9, high: 23.1, unit: "standard" },
        pediatric: { low: 5.5, high: 19.6, unit: "standard" },
        geriatric: { low: 7.2, high: 25.4, unit: "standard" }
      },
      female: {
        adult: { low: 6.3, high: 21.9, unit: "standard" },
        pediatric: { low: 5.4, high: 18.9, unit: "standard" },
        pregnancy: { low: 5.9, high: 26.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.8,
      panicHigh: 41.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 457,
    isActive: true
  },
  {
    id: "LOINC_1553",
    loincCode: "1553-8",
    testName: "Histopathology Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "HIST_PARAM_33",
    category: "Histopathology",
    specimen: "24-Hour Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 4.8, high: 139.9, unit: "standard" },
        pediatric: { low: 3.8, high: 118.9, unit: "standard" },
        geriatric: { low: 5.0, high: 153.9, unit: "standard" }
      },
      female: {
        adult: { low: 4.4, high: 132.9, unit: "standard" },
        pediatric: { low: 3.7, high: 114.7, unit: "standard" },
        pregnancy: { low: 4.1, high: 160.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.9,
      panicHigh: 251.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 394,
    isActive: true
  },
  {
    id: "LOINC_1554",
    loincCode: "1554-8",
    testName: "Histopathology Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "HIST_PARAM_34",
    category: "Histopathology",
    specimen: "Pleural Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 41.0, high: 83.7, unit: "standard" },
        pediatric: { low: 32.8, high: 71.1, unit: "standard" },
        geriatric: { low: 43.1, high: 92.1, unit: "standard" }
      },
      female: {
        adult: { low: 37.7, high: 79.5, unit: "standard" },
        pediatric: { low: 32.0, high: 68.6, unit: "standard" },
        pregnancy: { low: 34.9, high: 96.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.4,
      panicHigh: 150.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1480,
    isActive: true
  },
  {
    id: "LOINC_1555",
    loincCode: "1555-9",
    testName: "Histopathology Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "HIST_PARAM_35",
    category: "Histopathology",
    specimen: "Tissue Biopsy",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.7, high: 42.2, unit: "standard" },
        pediatric: { low: 19.8, high: 35.9, unit: "standard" },
        geriatric: { low: 25.9, high: 46.4, unit: "standard" }
      },
      female: {
        adult: { low: 22.7, high: 40.1, unit: "standard" },
        pediatric: { low: 19.3, high: 34.6, unit: "standard" },
        pregnancy: { low: 21.0, high: 48.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 76.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 991,
    isActive: true
  },
  {
    id: "LOINC_1556",
    loincCode: "1556-5",
    testName: "Histopathology Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "HIST_PARAM_36",
    category: "Histopathology",
    specimen: "Serum",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.6, high: 99.6, unit: "standard" },
        pediatric: { low: 34.9, high: 84.7, unit: "standard" },
        geriatric: { low: 45.8, high: 109.6, unit: "standard" }
      },
      female: {
        adult: { low: 40.1, high: 94.6, unit: "standard" },
        pediatric: { low: 34.0, high: 81.7, unit: "standard" },
        pregnancy: { low: 37.1, high: 114.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.4,
      panicHigh: 179.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1558,
    isActive: true
  },
  {
    id: "LOINC_1557",
    loincCode: "1557-9",
    testName: "Histopathology Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "HIST_PARAM_37",
    category: "Histopathology",
    specimen: "Random Urine",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.5, high: 107.0, unit: "standard" },
        pediatric: { low: 8.4, high: 91.0, unit: "standard" },
        geriatric: { low: 11.0, high: 117.7, unit: "standard" }
      },
      female: {
        adult: { low: 9.7, high: 101.6, unit: "standard" },
        pediatric: { low: 8.2, high: 87.7, unit: "standard" },
        pregnancy: { low: 8.9, high: 123.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.2,
      panicHigh: 192.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 565,
    isActive: true
  },
  {
    id: "LOINC_1558",
    loincCode: "1558-8",
    testName: "Histopathology Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "HIST_PARAM_38",
    category: "Histopathology",
    specimen: "Synovial Fluid",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 35.2, high: 81.8, unit: "standard" },
        pediatric: { low: 28.2, high: 69.5, unit: "standard" },
        geriatric: { low: 37.0, high: 90.0, unit: "standard" }
      },
      female: {
        adult: { low: 32.4, high: 77.7, unit: "standard" },
        pediatric: { low: 27.5, high: 67.1, unit: "standard" },
        pregnancy: { low: 29.9, high: 94.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.1,
      panicHigh: 147.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1306,
    isActive: true
  },
  {
    id: "LOINC_1559",
    loincCode: "1559-5",
    testName: "Histopathology Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "HIST_PARAM_39",
    category: "Histopathology",
    specimen: "Nasopharyngeal Swab",
    methodology: "ELISA",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.2, high: 145.9, unit: "standard" },
        pediatric: { low: 33.0, high: 124.0, unit: "standard" },
        geriatric: { low: 43.3, high: 160.5, unit: "standard" }
      },
      female: {
        adult: { low: 37.9, high: 138.6, unit: "standard" },
        pediatric: { low: 32.1, high: 119.6, unit: "standard" },
        pregnancy: { low: 35.0, high: 167.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 262.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1486,
    isActive: true
  },
  {
    id: "LOINC_1560",
    loincCode: "1560-4",
    testName: "Histopathology Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "HIST_PARAM_40",
    category: "Histopathology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.4, high: 75.9, unit: "standard" },
        pediatric: { low: 30.7, high: 64.5, unit: "standard" },
        geriatric: { low: 40.3, high: 83.5, unit: "standard" }
      },
      female: {
        adult: { low: 35.3, high: 72.1, unit: "standard" },
        pediatric: { low: 30.0, high: 62.2, unit: "standard" },
        pregnancy: { low: 32.6, high: 87.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.4,
      panicHigh: 136.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1402,
    isActive: true
  },
  {
    id: "LOINC_1561",
    loincCode: "1561-4",
    testName: "Histopathology Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "HIST_PARAM_41",
    category: "Histopathology",
    specimen: "Plasma (Citrate)",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.5, high: 48.4, unit: "standard" },
        pediatric: { low: 29.2, high: 41.1, unit: "standard" },
        geriatric: { low: 38.3, high: 53.2, unit: "standard" }
      },
      female: {
        adult: { low: 33.6, high: 46.0, unit: "standard" },
        pediatric: { low: 28.5, high: 39.7, unit: "standard" },
        pregnancy: { low: 31.0, high: 55.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.6,
      panicHigh: 87.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1345,
    isActive: true
  },
  {
    id: "LOINC_1562",
    loincCode: "1562-6",
    testName: "Histopathology Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "HIST_PARAM_42",
    category: "Histopathology",
    specimen: "CSF",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 1.4, high: 12.5, unit: "standard" },
        pediatric: { low: 1.1, high: 10.6, unit: "standard" },
        geriatric: { low: 1.5, high: 13.8, unit: "standard" }
      },
      female: {
        adult: { low: 1.3, high: 11.9, unit: "standard" },
        pediatric: { low: 1.1, high: 10.3, unit: "standard" },
        pregnancy: { low: 1.2, high: 14.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.6,
      panicHigh: 22.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 292,
    isActive: true
  },
  {
    id: "LOINC_1563",
    loincCode: "1563-7",
    testName: "Histopathology Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "HIST_PARAM_43",
    category: "Histopathology",
    specimen: "Throat Swab",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.6, high: 103.5, unit: "standard" },
        pediatric: { low: 19.7, high: 88.0, unit: "standard" },
        geriatric: { low: 25.8, high: 113.9, unit: "standard" }
      },
      female: {
        adult: { low: 22.6, high: 98.3, unit: "standard" },
        pediatric: { low: 19.2, high: 84.9, unit: "standard" },
        pregnancy: { low: 20.9, high: 119.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.8,
      panicHigh: 186.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 988,
    isActive: true
  },
  {
    id: "LOINC_1564",
    loincCode: "1564-4",
    testName: "Histopathology Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "HIST_PARAM_44",
    category: "Histopathology",
    specimen: "Stool Sample",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 22.1, high: 82.4, unit: "standard" },
        pediatric: { low: 17.7, high: 70.0, unit: "standard" },
        geriatric: { low: 23.2, high: 90.6, unit: "standard" }
      },
      female: {
        adult: { low: 20.3, high: 78.3, unit: "standard" },
        pediatric: { low: 17.2, high: 67.6, unit: "standard" },
        pregnancy: { low: 18.8, high: 94.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.8,
      panicHigh: 148.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 913,
    isActive: true
  },
  {
    id: "LOINC_1565",
    loincCode: "1565-5",
    testName: "Histopathology Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "HIST_PARAM_45",
    category: "Histopathology",
    specimen: "Plasma (Heparin)",
    methodology: "Microscopy & Staining",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 44.8, high: 109.7, unit: "standard" },
        pediatric: { low: 35.8, high: 93.2, unit: "standard" },
        geriatric: { low: 47.0, high: 120.7, unit: "standard" }
      },
      female: {
        adult: { low: 41.2, high: 104.2, unit: "standard" },
        pediatric: { low: 34.9, high: 90.0, unit: "standard" },
        pregnancy: { low: 38.1, high: 126.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.9,
      panicHigh: 197.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1594,
    isActive: true
  },
  {
    id: "LOINC_1566",
    loincCode: "1566-8",
    testName: "Histopathology Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "HIST_PARAM_46",
    category: "Histopathology",
    specimen: "24-Hour Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 44.1, high: 186.0, unit: "standard" },
        pediatric: { low: 35.3, high: 158.1, unit: "standard" },
        geriatric: { low: 46.3, high: 204.6, unit: "standard" }
      },
      female: {
        adult: { low: 40.6, high: 176.7, unit: "standard" },
        pediatric: { low: 34.4, high: 152.5, unit: "standard" },
        pregnancy: { low: 37.5, high: 213.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.6,
      panicHigh: 334.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1573,
    isActive: true
  },
  {
    id: "LOINC_1567",
    loincCode: "1567-5",
    testName: "Histopathology Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "HIST_PARAM_47",
    category: "Histopathology",
    specimen: "Pleural Fluid",
    methodology: "Flow Cytometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.6, high: 166.8, unit: "standard" },
        pediatric: { low: 26.9, high: 141.8, unit: "standard" },
        geriatric: { low: 35.3, high: 183.5, unit: "standard" }
      },
      female: {
        adult: { low: 30.9, high: 158.5, unit: "standard" },
        pediatric: { low: 26.2, high: 136.8, unit: "standard" },
        pregnancy: { low: 28.6, high: 191.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.4,
      panicHigh: 300.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1258,
    isActive: true
  },
  {
    id: "LOINC_1568",
    loincCode: "1568-4",
    testName: "Histopathology Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "HIST_PARAM_48",
    category: "Histopathology",
    specimen: "Tissue Biopsy",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 26.4, high: 97.9, unit: "standard" },
        pediatric: { low: 21.1, high: 83.2, unit: "standard" },
        geriatric: { low: 27.7, high: 107.7, unit: "standard" }
      },
      female: {
        adult: { low: 24.3, high: 93.0, unit: "standard" },
        pediatric: { low: 20.6, high: 80.3, unit: "standard" },
        pregnancy: { low: 22.4, high: 112.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.6,
      panicHigh: 176.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1042,
    isActive: true
  },
  {
    id: "LOINC_1569",
    loincCode: "1569-7",
    testName: "Histopathology Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "HIST_PARAM_49",
    category: "Histopathology",
    specimen: "Serum",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 22.5, high: 70.4, unit: "standard" },
        pediatric: { low: 18.0, high: 59.8, unit: "standard" },
        geriatric: { low: 23.6, high: 77.4, unit: "standard" }
      },
      female: {
        adult: { low: 20.7, high: 66.9, unit: "standard" },
        pediatric: { low: 17.6, high: 57.7, unit: "standard" },
        pregnancy: { low: 19.1, high: 81.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.0,
      panicHigh: 126.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 925,
    isActive: true
  },
  {
    id: "LOINC_1570",
    loincCode: "1570-6",
    testName: "Histopathology Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "HIST_PARAM_50",
    category: "Histopathology",
    specimen: "Random Urine",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 8.0, high: 80.2, unit: "standard" },
        pediatric: { low: 6.4, high: 68.2, unit: "standard" },
        geriatric: { low: 8.4, high: 88.2, unit: "standard" }
      },
      female: {
        adult: { low: 7.4, high: 76.2, unit: "standard" },
        pediatric: { low: 6.2, high: 65.8, unit: "standard" },
        pregnancy: { low: 6.8, high: 92.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.2,
      panicHigh: 144.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 490,
    isActive: true
  },
  {
    id: "LOINC_1571",
    loincCode: "1571-4",
    testName: "Histopathology Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "HIST_PARAM_51",
    category: "Histopathology",
    specimen: "Synovial Fluid",
    methodology: "Turbidimetry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.5, high: 43.1, unit: "standard" },
        pediatric: { low: 22.0, high: 36.6, unit: "standard" },
        geriatric: { low: 28.9, high: 47.4, unit: "standard" }
      },
      female: {
        adult: { low: 25.3, high: 40.9, unit: "standard" },
        pediatric: { low: 21.4, high: 35.3, unit: "standard" },
        pregnancy: { low: 23.4, high: 49.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.0,
      panicHigh: 77.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1075,
    isActive: true
  },
  {
    id: "LOINC_1572",
    loincCode: "1572-7",
    testName: "Histopathology Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "HIST_PARAM_52",
    category: "Histopathology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.2, high: 68.0, unit: "standard" },
        pediatric: { low: 23.4, high: 57.8, unit: "standard" },
        geriatric: { low: 30.7, high: 74.8, unit: "standard" }
      },
      female: {
        adult: { low: 26.9, high: 64.6, unit: "standard" },
        pediatric: { low: 22.8, high: 55.8, unit: "standard" },
        pregnancy: { low: 24.8, high: 78.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.7,
      panicHigh: 122.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1126,
    isActive: true
  },
  {
    id: "LOINC_1573",
    loincCode: "1573-2",
    testName: "Histopathology Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "HIST_PARAM_53",
    category: "Histopathology",
    specimen: "Whole Blood (EDTA)",
    methodology: "Spectrophotometry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.3, high: 15.4, unit: "standard" },
        pediatric: { low: 8.2, high: 13.1, unit: "standard" },
        geriatric: { low: 10.8, high: 16.9, unit: "standard" }
      },
      female: {
        adult: { low: 9.5, high: 14.6, unit: "standard" },
        pediatric: { low: 8.0, high: 12.6, unit: "standard" },
        pregnancy: { low: 8.8, high: 17.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.1,
      panicHigh: 27.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 559,
    isActive: true
  },
  {
    id: "LOINC_1574",
    loincCode: "1574-2",
    testName: "Histopathology Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "HIST_PARAM_54",
    category: "Histopathology",
    specimen: "Plasma (Citrate)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 5.3, high: 31.5, unit: "standard" },
        pediatric: { low: 4.2, high: 26.8, unit: "standard" },
        geriatric: { low: 5.6, high: 34.7, unit: "standard" }
      },
      female: {
        adult: { low: 4.9, high: 29.9, unit: "standard" },
        pediatric: { low: 4.1, high: 25.8, unit: "standard" },
        pregnancy: { low: 4.5, high: 36.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.1,
      panicHigh: 56.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 409,
    isActive: true
  },
  {
    id: "LOINC_1575",
    loincCode: "1575-1",
    testName: "Histopathology Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "HIST_PARAM_55",
    category: "Histopathology",
    specimen: "CSF",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.7, high: 122.2, unit: "standard" },
        pediatric: { low: 37.4, high: 103.9, unit: "standard" },
        geriatric: { low: 49.0, high: 134.4, unit: "standard" }
      },
      female: {
        adult: { low: 43.0, high: 116.1, unit: "standard" },
        pediatric: { low: 36.4, high: 100.2, unit: "standard" },
        pregnancy: { low: 39.7, high: 140.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 220.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1651,
    isActive: true
  },
  {
    id: "LOINC_1576",
    loincCode: "1576-2",
    testName: "Histopathology Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "HIST_PARAM_56",
    category: "Histopathology",
    specimen: "Throat Swab",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 37.0, high: 73.1, unit: "standard" },
        pediatric: { low: 29.6, high: 62.1, unit: "standard" },
        geriatric: { low: 38.9, high: 80.4, unit: "standard" }
      },
      female: {
        adult: { low: 34.0, high: 69.4, unit: "standard" },
        pediatric: { low: 28.9, high: 59.9, unit: "standard" },
        pregnancy: { low: 31.4, high: 84.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.8,
      panicHigh: 131.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1360,
    isActive: true
  },
  {
    id: "LOINC_1577",
    loincCode: "1577-1",
    testName: "Histopathology Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "HIST_PARAM_57",
    category: "Histopathology",
    specimen: "Stool Sample",
    methodology: "Flow Cytometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.0, high: 71.6, unit: "standard" },
        pediatric: { low: 18.4, high: 60.9, unit: "standard" },
        geriatric: { low: 24.2, high: 78.8, unit: "standard" }
      },
      female: {
        adult: { low: 21.2, high: 68.0, unit: "standard" },
        pediatric: { low: 17.9, high: 58.7, unit: "standard" },
        pregnancy: { low: 19.6, high: 82.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.2,
      panicHigh: 128.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 940,
    isActive: true
  },
  {
    id: "LOINC_1578",
    loincCode: "1578-8",
    testName: "Histopathology Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "HIST_PARAM_58",
    category: "Histopathology",
    specimen: "Plasma (Heparin)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 13.6, high: 152.6, unit: "standard" },
        pediatric: { low: 10.9, high: 129.7, unit: "standard" },
        geriatric: { low: 14.3, high: 167.9, unit: "standard" }
      },
      female: {
        adult: { low: 12.5, high: 145.0, unit: "standard" },
        pediatric: { low: 10.6, high: 125.1, unit: "standard" },
        pregnancy: { low: 11.6, high: 175.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.4,
      panicHigh: 274.7,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 658,
    isActive: true
  },
  {
    id: "LOINC_1579",
    loincCode: "1579-1",
    testName: "Histopathology Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "HIST_PARAM_59",
    category: "Histopathology",
    specimen: "24-Hour Urine",
    methodology: "ELISA",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 18.5, high: 103.4, unit: "standard" },
        pediatric: { low: 14.8, high: 87.9, unit: "standard" },
        geriatric: { low: 19.4, high: 113.7, unit: "standard" }
      },
      female: {
        adult: { low: 17.0, high: 98.2, unit: "standard" },
        pediatric: { low: 14.4, high: 84.8, unit: "standard" },
        pregnancy: { low: 15.7, high: 118.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 186.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 805,
    isActive: true
  },
  {
    id: "LOINC_1580",
    loincCode: "1580-6",
    testName: "Histopathology Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "HIST_PARAM_60",
    category: "Histopathology",
    specimen: "Pleural Fluid",
    methodology: "Automated Cell Counter",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 46.4, high: 104.3, unit: "standard" },
        pediatric: { low: 37.1, high: 88.7, unit: "standard" },
        geriatric: { low: 48.7, high: 114.7, unit: "standard" }
      },
      female: {
        adult: { low: 42.7, high: 99.1, unit: "standard" },
        pediatric: { low: 36.2, high: 85.5, unit: "standard" },
        pregnancy: { low: 39.4, high: 119.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.6,
      panicHigh: 187.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1642,
    isActive: true
  },
  {
    id: "LOINC_1581",
    loincCode: "1581-7",
    testName: "Histopathology Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "HIST_PARAM_61",
    category: "Histopathology",
    specimen: "Tissue Biopsy",
    methodology: "Turbidimetry",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.0, high: 138.3, unit: "standard" },
        pediatric: { low: 24.0, high: 117.6, unit: "standard" },
        geriatric: { low: 31.5, high: 152.1, unit: "standard" }
      },
      female: {
        adult: { low: 27.6, high: 131.4, unit: "standard" },
        pediatric: { low: 23.4, high: 113.4, unit: "standard" },
        pregnancy: { low: 25.5, high: 159.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.0,
      panicHigh: 248.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1150,
    isActive: true
  },
  {
    id: "LOINC_1582",
    loincCode: "1582-7",
    testName: "Histopathology Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "HIST_PARAM_62",
    category: "Histopathology",
    specimen: "Serum",
    methodology: "Real-Time PCR",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.9, high: 54.1, unit: "standard" },
        pediatric: { low: 34.3, high: 46.0, unit: "standard" },
        geriatric: { low: 45.0, high: 59.5, unit: "standard" }
      },
      female: {
        adult: { low: 39.5, high: 51.4, unit: "standard" },
        pediatric: { low: 33.5, high: 44.4, unit: "standard" },
        pregnancy: { low: 36.5, high: 62.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 97.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1537,
    isActive: true
  },
  {
    id: "LOINC_1583",
    loincCode: "1583-3",
    testName: "Histopathology Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "HIST_PARAM_63",
    category: "Histopathology",
    specimen: "Random Urine",
    methodology: "Spectrophotometry",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.7, high: 168.7, unit: "standard" },
        pediatric: { low: 19.8, high: 143.4, unit: "standard" },
        geriatric: { low: 25.9, high: 185.6, unit: "standard" }
      },
      female: {
        adult: { low: 22.7, high: 160.3, unit: "standard" },
        pediatric: { low: 19.3, high: 138.3, unit: "standard" },
        pregnancy: { low: 21.0, high: 194.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 303.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 991,
    isActive: true
  },
  {
    id: "LOINC_1584",
    loincCode: "1584-9",
    testName: "Histopathology Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "HIST_PARAM_64",
    category: "Histopathology",
    specimen: "Synovial Fluid",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.4, high: 35.5, unit: "standard" },
        pediatric: { low: 20.3, high: 30.2, unit: "standard" },
        geriatric: { low: 26.7, high: 39.1, unit: "standard" }
      },
      female: {
        adult: { low: 23.4, high: 33.7, unit: "standard" },
        pediatric: { low: 19.8, high: 29.1, unit: "standard" },
        pregnancy: { low: 21.6, high: 40.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 63.9,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1012,
    isActive: true
  },
  {
    id: "LOINC_1585",
    loincCode: "1585-2",
    testName: "Histopathology Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "HIST_PARAM_65",
    category: "Histopathology",
    specimen: "Nasopharyngeal Swab",
    methodology: "Microscopy & Staining",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 14.7, high: 137.4, unit: "standard" },
        pediatric: { low: 11.8, high: 116.8, unit: "standard" },
        geriatric: { low: 15.4, high: 151.1, unit: "standard" }
      },
      female: {
        adult: { low: 13.5, high: 130.5, unit: "standard" },
        pediatric: { low: 11.5, high: 112.7, unit: "standard" },
        pregnancy: { low: 12.5, high: 158.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.9,
      panicHigh: 247.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in histopathology disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in histopathology.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 691,
    isActive: true
  },
  {
    id: "LOINC_1586",
    loincCode: "1586-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 1 — Standardized Marker",
    shortName: "MOLE_PARAM_1",
    category: "Molecular Diagnostics",
    specimen: "Whole Blood (EDTA)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.0, high: 101.4, unit: "standard" },
        pediatric: { low: 22.4, high: 86.2, unit: "standard" },
        geriatric: { low: 29.4, high: 111.5, unit: "standard" }
      },
      female: {
        adult: { low: 25.8, high: 96.3, unit: "standard" },
        pediatric: { low: 21.8, high: 83.1, unit: "standard" },
        pregnancy: { low: 23.8, high: 116.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.2,
      panicHigh: 182.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1090,
    isActive: true
  },
  {
    id: "LOINC_1587",
    loincCode: "1587-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 2 — Standardized Marker",
    shortName: "MOLE_PARAM_2",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Citrate)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 27.0, high: 84.6, unit: "standard" },
        pediatric: { low: 21.6, high: 71.9, unit: "standard" },
        geriatric: { low: 28.4, high: 93.1, unit: "standard" }
      },
      female: {
        adult: { low: 24.8, high: 80.4, unit: "standard" },
        pediatric: { low: 21.1, high: 69.4, unit: "standard" },
        pregnancy: { low: 22.9, high: 97.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 152.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1060,
    isActive: true
  },
  {
    id: "LOINC_1588",
    loincCode: "1588-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 3 — Standardized Marker",
    shortName: "MOLE_PARAM_3",
    category: "Molecular Diagnostics",
    specimen: "CSF",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 35.8, high: 51.3, unit: "standard" },
        pediatric: { low: 28.6, high: 43.6, unit: "standard" },
        geriatric: { low: 37.6, high: 56.4, unit: "standard" }
      },
      female: {
        adult: { low: 32.9, high: 48.7, unit: "standard" },
        pediatric: { low: 27.9, high: 42.1, unit: "standard" },
        pregnancy: { low: 30.4, high: 59.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.3,
      panicHigh: 92.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1324,
    isActive: true
  },
  {
    id: "LOINC_1589",
    loincCode: "1589-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 4 — Standardized Marker",
    shortName: "MOLE_PARAM_4",
    category: "Molecular Diagnostics",
    specimen: "Throat Swab",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 12.5, high: 149.6, unit: "standard" },
        pediatric: { low: 10.0, high: 127.2, unit: "standard" },
        geriatric: { low: 13.1, high: 164.6, unit: "standard" }
      },
      female: {
        adult: { low: 11.5, high: 142.1, unit: "standard" },
        pediatric: { low: 9.8, high: 122.7, unit: "standard" },
        pregnancy: { low: 10.6, high: 172.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.0,
      panicHigh: 269.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 625,
    isActive: true
  },
  {
    id: "LOINC_1590",
    loincCode: "1590-2",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 5 — Standardized Marker",
    shortName: "MOLE_PARAM_5",
    category: "Molecular Diagnostics",
    specimen: "Stool Sample",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 31.0, high: 44.6, unit: "standard" },
        pediatric: { low: 24.8, high: 37.9, unit: "standard" },
        geriatric: { low: 32.6, high: 49.1, unit: "standard" }
      },
      female: {
        adult: { low: 28.5, high: 42.4, unit: "standard" },
        pediatric: { low: 24.2, high: 36.6, unit: "standard" },
        pregnancy: { low: 26.3, high: 51.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.4,
      panicHigh: 80.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1180,
    isActive: true
  },
  {
    id: "LOINC_1591",
    loincCode: "1591-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 6 — Standardized Marker",
    shortName: "MOLE_PARAM_6",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Heparin)",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.2, high: 73.8, unit: "standard" },
        pediatric: { low: 5.0, high: 62.7, unit: "standard" },
        geriatric: { low: 6.5, high: 81.2, unit: "standard" }
      },
      female: {
        adult: { low: 5.7, high: 70.1, unit: "standard" },
        pediatric: { low: 4.8, high: 60.5, unit: "standard" },
        pregnancy: { low: 5.3, high: 84.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.5,
      panicHigh: 132.8,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 436,
    isActive: true
  },
  {
    id: "LOINC_1592",
    loincCode: "1592-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 7 — Standardized Marker",
    shortName: "MOLE_PARAM_7",
    category: "Molecular Diagnostics",
    specimen: "24-Hour Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 24.8, high: 113.8, unit: "standard" },
        pediatric: { low: 19.8, high: 96.7, unit: "standard" },
        geriatric: { low: 26.0, high: 125.2, unit: "standard" }
      },
      female: {
        adult: { low: 22.8, high: 108.1, unit: "standard" },
        pediatric: { low: 19.3, high: 93.3, unit: "standard" },
        pregnancy: { low: 21.1, high: 130.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.9,
      panicHigh: 204.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 994,
    isActive: true
  },
  {
    id: "LOINC_1593",
    loincCode: "1593-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 8 — Standardized Marker",
    shortName: "MOLE_PARAM_8",
    category: "Molecular Diagnostics",
    specimen: "Pleural Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 21.5, high: 115.3, unit: "standard" },
        pediatric: { low: 17.2, high: 98.0, unit: "standard" },
        geriatric: { low: 22.6, high: 126.8, unit: "standard" }
      },
      female: {
        adult: { low: 19.8, high: 109.5, unit: "standard" },
        pediatric: { low: 16.8, high: 94.5, unit: "standard" },
        pregnancy: { low: 18.3, high: 132.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 207.5,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 895,
    isActive: true
  },
  {
    id: "LOINC_1594",
    loincCode: "1594-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 9 — Standardized Marker",
    shortName: "MOLE_PARAM_9",
    category: "Molecular Diagnostics",
    specimen: "Tissue Biopsy",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 46.8, high: 100.9, unit: "standard" },
        pediatric: { low: 37.4, high: 85.8, unit: "standard" },
        geriatric: { low: 49.1, high: 111.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.1, high: 95.9, unit: "standard" },
        pediatric: { low: 36.5, high: 82.7, unit: "standard" },
        pregnancy: { low: 39.8, high: 116.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.7,
      panicHigh: 181.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1654,
    isActive: true
  },
  {
    id: "LOINC_1595",
    loincCode: "1595-8",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 10 — Standardized Marker",
    shortName: "MOLE_PARAM_10",
    category: "Molecular Diagnostics",
    specimen: "Serum",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 45.5, high: 145.0, unit: "standard" },
        pediatric: { low: 36.4, high: 123.3, unit: "standard" },
        geriatric: { low: 47.8, high: 159.5, unit: "standard" }
      },
      female: {
        adult: { low: 41.9, high: 137.8, unit: "standard" },
        pediatric: { low: 35.5, high: 118.9, unit: "standard" },
        pregnancy: { low: 38.7, high: 166.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.2,
      panicHigh: 261.0,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1615,
    isActive: true
  },
  {
    id: "LOINC_1596",
    loincCode: "1596-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 11 — Standardized Marker",
    shortName: "MOLE_PARAM_11",
    category: "Molecular Diagnostics",
    specimen: "Random Urine",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.4, high: 141.4, unit: "standard" },
        pediatric: { low: 20.3, high: 120.2, unit: "standard" },
        geriatric: { low: 26.7, high: 155.5, unit: "standard" }
      },
      female: {
        adult: { low: 23.4, high: 134.3, unit: "standard" },
        pediatric: { low: 19.8, high: 115.9, unit: "standard" },
        pregnancy: { low: 21.6, high: 162.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 254.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1012,
    isActive: true
  },
  {
    id: "LOINC_1597",
    loincCode: "1597-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 12 — Standardized Marker",
    shortName: "MOLE_PARAM_12",
    category: "Molecular Diagnostics",
    specimen: "Synovial Fluid",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.9, high: 131.7, unit: "standard" },
        pediatric: { low: 13.5, high: 111.9, unit: "standard" },
        geriatric: { low: 17.7, high: 144.9, unit: "standard" }
      },
      female: {
        adult: { low: 15.5, high: 125.1, unit: "standard" },
        pediatric: { low: 13.2, high: 108.0, unit: "standard" },
        pregnancy: { low: 14.4, high: 151.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.8,
      panicHigh: 237.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 757,
    isActive: true
  },
  {
    id: "LOINC_1598",
    loincCode: "1598-8",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 13 — Standardized Marker",
    shortName: "MOLE_PARAM_13",
    category: "Molecular Diagnostics",
    specimen: "Nasopharyngeal Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 78.0, unit: "standard" },
        pediatric: { low: 31.4, high: 66.3, unit: "standard" },
        geriatric: { low: 41.2, high: 85.8, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 74.1, unit: "standard" },
        pediatric: { low: 30.6, high: 64.0, unit: "standard" },
        pregnancy: { low: 33.3, high: 89.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 140.4,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1599",
    loincCode: "1599-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 14 — Standardized Marker",
    shortName: "MOLE_PARAM_14",
    category: "Molecular Diagnostics",
    specimen: "Whole Blood (EDTA)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 9.6, high: 52.9, unit: "standard" },
        pediatric: { low: 7.7, high: 45.0, unit: "standard" },
        geriatric: { low: 10.1, high: 58.2, unit: "standard" }
      },
      female: {
        adult: { low: 8.8, high: 50.3, unit: "standard" },
        pediatric: { low: 7.5, high: 43.4, unit: "standard" },
        pregnancy: { low: 8.2, high: 60.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.8,
      panicHigh: 95.2,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 538,
    isActive: true
  },
  {
    id: "LOINC_1600",
    loincCode: "1600-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 15 — Standardized Marker",
    shortName: "MOLE_PARAM_15",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Citrate)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 26.8, high: 42.8, unit: "standard" },
        pediatric: { low: 21.4, high: 36.4, unit: "standard" },
        geriatric: { low: 28.1, high: 47.1, unit: "standard" }
      },
      female: {
        adult: { low: 24.7, high: 40.7, unit: "standard" },
        pediatric: { low: 20.9, high: 35.1, unit: "standard" },
        pregnancy: { low: 22.8, high: 49.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.7,
      panicHigh: 77.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1054,
    isActive: true
  },
  {
    id: "LOINC_1601",
    loincCode: "1601-8",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 16 — Standardized Marker",
    shortName: "MOLE_PARAM_16",
    category: "Molecular Diagnostics",
    specimen: "CSF",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 10.4, high: 128.2, unit: "standard" },
        pediatric: { low: 8.3, high: 109.0, unit: "standard" },
        geriatric: { low: 10.9, high: 141.0, unit: "standard" }
      },
      female: {
        adult: { low: 9.6, high: 121.8, unit: "standard" },
        pediatric: { low: 8.1, high: 105.1, unit: "standard" },
        pregnancy: { low: 8.8, high: 147.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.2,
      panicHigh: 230.8,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 562,
    isActive: true
  },
  {
    id: "LOINC_1602",
    loincCode: "1602-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 17 — Standardized Marker",
    shortName: "MOLE_PARAM_17",
    category: "Molecular Diagnostics",
    specimen: "Throat Swab",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 28.4, high: 48.5, unit: "standard" },
        pediatric: { low: 22.7, high: 41.2, unit: "standard" },
        geriatric: { low: 29.8, high: 53.4, unit: "standard" }
      },
      female: {
        adult: { low: 26.1, high: 46.1, unit: "standard" },
        pediatric: { low: 22.2, high: 39.8, unit: "standard" },
        pregnancy: { low: 24.1, high: 55.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.4,
      panicHigh: 87.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1102,
    isActive: true
  },
  {
    id: "LOINC_1603",
    loincCode: "1603-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 18 — Standardized Marker",
    shortName: "MOLE_PARAM_18",
    category: "Molecular Diagnostics",
    specimen: "Stool Sample",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.1, high: 180.9, unit: "standard" },
        pediatric: { low: 34.5, high: 153.8, unit: "standard" },
        geriatric: { low: 45.3, high: 199.0, unit: "standard" }
      },
      female: {
        adult: { low: 39.7, high: 171.9, unit: "standard" },
        pediatric: { low: 33.6, high: 148.3, unit: "standard" },
        pregnancy: { low: 36.6, high: 208.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.2,
      panicHigh: 325.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1543,
    isActive: true
  },
  {
    id: "LOINC_1604",
    loincCode: "1604-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 19 — Standardized Marker",
    shortName: "MOLE_PARAM_19",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Heparin)",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 5.9, high: 49.3, unit: "standard" },
        pediatric: { low: 4.7, high: 41.9, unit: "standard" },
        geriatric: { low: 6.2, high: 54.2, unit: "standard" }
      },
      female: {
        adult: { low: 5.4, high: 46.8, unit: "standard" },
        pediatric: { low: 4.6, high: 40.4, unit: "standard" },
        pregnancy: { low: 5.0, high: 56.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.4,
      panicHigh: 88.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 427,
    isActive: true
  },
  {
    id: "LOINC_1605",
    loincCode: "1605-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 20 — Standardized Marker",
    shortName: "MOLE_PARAM_20",
    category: "Molecular Diagnostics",
    specimen: "24-Hour Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 18.5, high: 138.5, unit: "standard" },
        pediatric: { low: 14.8, high: 117.7, unit: "standard" },
        geriatric: { low: 19.4, high: 152.4, unit: "standard" }
      },
      female: {
        adult: { low: 17.0, high: 131.6, unit: "standard" },
        pediatric: { low: 14.4, high: 113.6, unit: "standard" },
        pregnancy: { low: 15.7, high: 159.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.4,
      panicHigh: 249.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 805,
    isActive: true
  },
  {
    id: "LOINC_1606",
    loincCode: "1606-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 21 — Standardized Marker",
    shortName: "MOLE_PARAM_21",
    category: "Molecular Diagnostics",
    specimen: "Pleural Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.2, high: 101.0, unit: "standard" },
        pediatric: { low: 24.2, high: 85.8, unit: "standard" },
        geriatric: { low: 31.7, high: 111.1, unit: "standard" }
      },
      female: {
        adult: { low: 27.8, high: 95.9, unit: "standard" },
        pediatric: { low: 23.6, high: 82.8, unit: "standard" },
        pregnancy: { low: 25.7, high: 116.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.1,
      panicHigh: 181.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1156,
    isActive: true
  },
  {
    id: "LOINC_1607",
    loincCode: "1607-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 22 — Standardized Marker",
    shortName: "MOLE_PARAM_22",
    category: "Molecular Diagnostics",
    specimen: "Tissue Biopsy",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 15.4, high: 149.5, unit: "standard" },
        pediatric: { low: 12.3, high: 127.1, unit: "standard" },
        geriatric: { low: 16.2, high: 164.5, unit: "standard" }
      },
      female: {
        adult: { low: 14.2, high: 142.0, unit: "standard" },
        pediatric: { low: 12.0, high: 122.6, unit: "standard" },
        pregnancy: { low: 13.1, high: 171.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.2,
      panicHigh: 269.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 712,
    isActive: true
  },
  {
    id: "LOINC_1608",
    loincCode: "1608-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 23 — Standardized Marker",
    shortName: "MOLE_PARAM_23",
    category: "Molecular Diagnostics",
    specimen: "Serum",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 9.0, high: 149.2, unit: "standard" },
        pediatric: { low: 7.2, high: 126.8, unit: "standard" },
        geriatric: { low: 9.5, high: 164.1, unit: "standard" }
      },
      female: {
        adult: { low: 8.3, high: 141.7, unit: "standard" },
        pediatric: { low: 7.0, high: 122.3, unit: "standard" },
        pregnancy: { low: 7.6, high: 171.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 3.6,
      panicHigh: 268.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 520,
    isActive: true
  },
  {
    id: "LOINC_1609",
    loincCode: "1609-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 24 — Standardized Marker",
    shortName: "MOLE_PARAM_24",
    category: "Molecular Diagnostics",
    specimen: "Random Urine",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.3, high: 45.4, unit: "standard" },
        pediatric: { low: 30.6, high: 38.6, unit: "standard" },
        geriatric: { low: 40.2, high: 49.9, unit: "standard" }
      },
      female: {
        adult: { low: 35.2, high: 43.1, unit: "standard" },
        pediatric: { low: 29.9, high: 37.2, unit: "standard" },
        pregnancy: { low: 32.6, high: 52.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.3,
      panicHigh: 81.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1399,
    isActive: true
  },
  {
    id: "LOINC_1610",
    loincCode: "1610-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 25 — Standardized Marker",
    shortName: "MOLE_PARAM_25",
    category: "Molecular Diagnostics",
    specimen: "Synovial Fluid",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 15.9, high: 151.8, unit: "standard" },
        pediatric: { low: 12.7, high: 129.0, unit: "standard" },
        geriatric: { low: 16.7, high: 167.0, unit: "standard" }
      },
      female: {
        adult: { low: 14.6, high: 144.2, unit: "standard" },
        pediatric: { low: 12.4, high: 124.5, unit: "standard" },
        pregnancy: { low: 13.5, high: 174.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 273.2,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 727,
    isActive: true
  },
  {
    id: "LOINC_1611",
    loincCode: "1611-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 26 — Standardized Marker",
    shortName: "MOLE_PARAM_26",
    category: "Molecular Diagnostics",
    specimen: "Nasopharyngeal Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.3, high: 120.7, unit: "standard" },
        pediatric: { low: 37.8, high: 102.6, unit: "standard" },
        geriatric: { low: 49.7, high: 132.8, unit: "standard" }
      },
      female: {
        adult: { low: 43.5, high: 114.7, unit: "standard" },
        pediatric: { low: 36.9, high: 99.0, unit: "standard" },
        pregnancy: { low: 40.2, high: 138.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.9,
      panicHigh: 217.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1669,
    isActive: true
  },
  {
    id: "LOINC_1612",
    loincCode: "1612-2",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 27 — Standardized Marker",
    shortName: "MOLE_PARAM_27",
    category: "Molecular Diagnostics",
    specimen: "Whole Blood (EDTA)",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 0.6, high: 53.4, unit: "standard" },
        pediatric: { low: 0.5, high: 45.4, unit: "standard" },
        geriatric: { low: 0.6, high: 58.7, unit: "standard" }
      },
      female: {
        adult: { low: 0.6, high: 50.7, unit: "standard" },
        pediatric: { low: 0.5, high: 43.8, unit: "standard" },
        pregnancy: { low: 0.5, high: 61.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 0.2,
      panicHigh: 96.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 268,
    isActive: true
  },
  {
    id: "LOINC_1613",
    loincCode: "1613-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 28 — Standardized Marker",
    shortName: "MOLE_PARAM_28",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Citrate)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 43.9, high: 66.5, unit: "standard" },
        pediatric: { low: 35.1, high: 56.5, unit: "standard" },
        geriatric: { low: 46.1, high: 73.2, unit: "standard" }
      },
      female: {
        adult: { low: 40.4, high: 63.2, unit: "standard" },
        pediatric: { low: 34.2, high: 54.5, unit: "standard" },
        pregnancy: { low: 37.3, high: 76.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.6,
      panicHigh: 119.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1567,
    isActive: true
  },
  {
    id: "LOINC_1614",
    loincCode: "1614-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 29 — Standardized Marker",
    shortName: "MOLE_PARAM_29",
    category: "Molecular Diagnostics",
    specimen: "CSF",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.7, high: 93.9, unit: "standard" },
        pediatric: { low: 17.4, high: 79.8, unit: "standard" },
        geriatric: { low: 22.8, high: 103.3, unit: "standard" }
      },
      female: {
        adult: { low: 20.0, high: 89.2, unit: "standard" },
        pediatric: { low: 16.9, high: 77.0, unit: "standard" },
        pregnancy: { low: 18.4, high: 108.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.7,
      panicHigh: 169.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 901,
    isActive: true
  },
  {
    id: "LOINC_1615",
    loincCode: "1615-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 30 — Standardized Marker",
    shortName: "MOLE_PARAM_30",
    category: "Molecular Diagnostics",
    specimen: "Throat Swab",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 39.2, high: 161.9, unit: "standard" },
        pediatric: { low: 31.4, high: 137.6, unit: "standard" },
        geriatric: { low: 41.2, high: 178.1, unit: "standard" }
      },
      female: {
        adult: { low: 36.1, high: 153.8, unit: "standard" },
        pediatric: { low: 30.6, high: 132.8, unit: "standard" },
        pregnancy: { low: 33.3, high: 186.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.7,
      panicHigh: 291.4,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1426,
    isActive: true
  },
  {
    id: "LOINC_1616",
    loincCode: "1616-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 31 — Standardized Marker",
    shortName: "MOLE_PARAM_31",
    category: "Molecular Diagnostics",
    specimen: "Stool Sample",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 47.9, high: 78.5, unit: "standard" },
        pediatric: { low: 38.3, high: 66.7, unit: "standard" },
        geriatric: { low: 50.3, high: 86.4, unit: "standard" }
      },
      female: {
        adult: { low: 44.1, high: 74.6, unit: "standard" },
        pediatric: { low: 37.4, high: 64.4, unit: "standard" },
        pregnancy: { low: 40.7, high: 90.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 19.2,
      panicHigh: 141.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1687,
    isActive: true
  },
  {
    id: "LOINC_1617",
    loincCode: "1617-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 32 — Standardized Marker",
    shortName: "MOLE_PARAM_32",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Heparin)",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 20.0, high: 118.1, unit: "standard" },
        pediatric: { low: 16.0, high: 100.4, unit: "standard" },
        geriatric: { low: 21.0, high: 129.9, unit: "standard" }
      },
      female: {
        adult: { low: 18.4, high: 112.2, unit: "standard" },
        pediatric: { low: 15.6, high: 96.8, unit: "standard" },
        pregnancy: { low: 17.0, high: 135.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.0,
      panicHigh: 212.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 850,
    isActive: true
  },
  {
    id: "LOINC_1618",
    loincCode: "1618-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 33 — Standardized Marker",
    shortName: "MOLE_PARAM_33",
    category: "Molecular Diagnostics",
    specimen: "24-Hour Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.5, high: 73.8, unit: "standard" },
        pediatric: { low: 26.8, high: 62.7, unit: "standard" },
        geriatric: { low: 35.2, high: 81.2, unit: "standard" }
      },
      female: {
        adult: { low: 30.8, high: 70.1, unit: "standard" },
        pediatric: { low: 26.1, high: 60.5, unit: "standard" },
        pregnancy: { low: 28.5, high: 84.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.4,
      panicHigh: 132.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1255,
    isActive: true
  },
  {
    id: "LOINC_1619",
    loincCode: "1619-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 34 — Standardized Marker",
    shortName: "MOLE_PARAM_34",
    category: "Molecular Diagnostics",
    specimen: "Pleural Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 38.9, high: 94.8, unit: "standard" },
        pediatric: { low: 31.1, high: 80.6, unit: "standard" },
        geriatric: { low: 40.8, high: 104.3, unit: "standard" }
      },
      female: {
        adult: { low: 35.8, high: 90.1, unit: "standard" },
        pediatric: { low: 30.3, high: 77.7, unit: "standard" },
        pregnancy: { low: 33.1, high: 109.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 15.6,
      panicHigh: 170.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1417,
    isActive: true
  },
  {
    id: "LOINC_1620",
    loincCode: "1620-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 35 — Standardized Marker",
    shortName: "MOLE_PARAM_35",
    category: "Molecular Diagnostics",
    specimen: "Tissue Biopsy",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 25.1, high: 40.4, unit: "standard" },
        pediatric: { low: 20.1, high: 34.3, unit: "standard" },
        geriatric: { low: 26.4, high: 44.4, unit: "standard" }
      },
      female: {
        adult: { low: 23.1, high: 38.4, unit: "standard" },
        pediatric: { low: 19.6, high: 33.1, unit: "standard" },
        pregnancy: { low: 21.3, high: 46.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.0,
      panicHigh: 72.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1003,
    isActive: true
  },
  {
    id: "LOINC_1621",
    loincCode: "1621-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 36 — Standardized Marker",
    shortName: "MOLE_PARAM_36",
    category: "Molecular Diagnostics",
    specimen: "Serum",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 27.0, high: 107.6, unit: "standard" },
        pediatric: { low: 21.6, high: 91.5, unit: "standard" },
        geriatric: { low: 28.4, high: 118.4, unit: "standard" }
      },
      female: {
        adult: { low: 24.8, high: 102.2, unit: "standard" },
        pediatric: { low: 21.1, high: 88.2, unit: "standard" },
        pregnancy: { low: 22.9, high: 123.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.8,
      panicHigh: 193.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1060,
    isActive: true
  },
  {
    id: "LOINC_1622",
    loincCode: "1622-2",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 37 — Standardized Marker",
    shortName: "MOLE_PARAM_37",
    category: "Molecular Diagnostics",
    specimen: "Random Urine",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 33.6, high: 77.8, unit: "standard" },
        pediatric: { low: 26.9, high: 66.1, unit: "standard" },
        geriatric: { low: 35.3, high: 85.6, unit: "standard" }
      },
      female: {
        adult: { low: 30.9, high: 73.9, unit: "standard" },
        pediatric: { low: 26.2, high: 63.8, unit: "standard" },
        pregnancy: { low: 28.6, high: 89.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.4,
      panicHigh: 140.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1258,
    isActive: true
  },
  {
    id: "LOINC_1623",
    loincCode: "1623-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 38 — Standardized Marker",
    shortName: "MOLE_PARAM_38",
    category: "Molecular Diagnostics",
    specimen: "Synovial Fluid",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 11.4, high: 132.7, unit: "standard" },
        pediatric: { low: 9.1, high: 112.8, unit: "standard" },
        geriatric: { low: 12.0, high: 146.0, unit: "standard" }
      },
      female: {
        adult: { low: 10.5, high: 126.1, unit: "standard" },
        pediatric: { low: 8.9, high: 108.8, unit: "standard" },
        pregnancy: { low: 9.7, high: 152.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.6,
      panicHigh: 238.9,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 592,
    isActive: true
  },
  {
    id: "LOINC_1624",
    loincCode: "1624-2",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 39 — Standardized Marker",
    shortName: "MOLE_PARAM_39",
    category: "Molecular Diagnostics",
    specimen: "Nasopharyngeal Swab",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.9, high: 126.4, unit: "standard" },
        pediatric: { low: 33.5, high: 107.4, unit: "standard" },
        geriatric: { low: 44.0, high: 139.0, unit: "standard" }
      },
      female: {
        adult: { low: 38.5, high: 120.1, unit: "standard" },
        pediatric: { low: 32.7, high: 103.6, unit: "standard" },
        pregnancy: { low: 35.6, high: 145.4, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.8,
      panicHigh: 227.5,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1507,
    isActive: true
  },
  {
    id: "LOINC_1625",
    loincCode: "1625-4",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 40 — Standardized Marker",
    shortName: "MOLE_PARAM_40",
    category: "Molecular Diagnostics",
    specimen: "Whole Blood (EDTA)",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 13.8, high: 107.4, unit: "standard" },
        pediatric: { low: 11.0, high: 91.3, unit: "standard" },
        geriatric: { low: 14.5, high: 118.1, unit: "standard" }
      },
      female: {
        adult: { low: 12.7, high: 102.0, unit: "standard" },
        pediatric: { low: 10.8, high: 88.1, unit: "standard" },
        pregnancy: { low: 11.7, high: 123.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 5.5,
      panicHigh: 193.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 664,
    isActive: true
  },
  {
    id: "LOINC_1626",
    loincCode: "1626-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 41 — Standardized Marker",
    shortName: "MOLE_PARAM_41",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Citrate)",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 30.5, high: 180.4, unit: "standard" },
        pediatric: { low: 24.4, high: 153.3, unit: "standard" },
        geriatric: { low: 32.0, high: 198.4, unit: "standard" }
      },
      female: {
        adult: { low: 28.1, high: 171.4, unit: "standard" },
        pediatric: { low: 23.8, high: 147.9, unit: "standard" },
        pregnancy: { low: 25.9, high: 207.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.2,
      panicHigh: 324.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1165,
    isActive: true
  },
  {
    id: "LOINC_1627",
    loincCode: "1627-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 42 — Standardized Marker",
    shortName: "MOLE_PARAM_42",
    category: "Molecular Diagnostics",
    specimen: "CSF",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 16.1, high: 116.3, unit: "standard" },
        pediatric: { low: 12.9, high: 98.9, unit: "standard" },
        geriatric: { low: 16.9, high: 127.9, unit: "standard" }
      },
      female: {
        adult: { low: 14.8, high: 110.5, unit: "standard" },
        pediatric: { low: 12.6, high: 95.4, unit: "standard" },
        pregnancy: { low: 13.7, high: 133.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.4,
      panicHigh: 209.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 733,
    isActive: true
  },
  {
    id: "LOINC_1628",
    loincCode: "1628-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 43 — Standardized Marker",
    shortName: "MOLE_PARAM_43",
    category: "Molecular Diagnostics",
    specimen: "Throat Swab",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 41.2, high: 166.5, unit: "standard" },
        pediatric: { low: 33.0, high: 141.5, unit: "standard" },
        geriatric: { low: 43.3, high: 183.2, unit: "standard" }
      },
      female: {
        adult: { low: 37.9, high: 158.2, unit: "standard" },
        pediatric: { low: 32.1, high: 136.5, unit: "standard" },
        pregnancy: { low: 35.0, high: 191.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 16.5,
      panicHigh: 299.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1486,
    isActive: true
  },
  {
    id: "LOINC_1629",
    loincCode: "1629-4",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 44 — Standardized Marker",
    shortName: "MOLE_PARAM_44",
    category: "Molecular Diagnostics",
    specimen: "Stool Sample",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 6.4, high: 152.3, unit: "standard" },
        pediatric: { low: 5.1, high: 129.5, unit: "standard" },
        geriatric: { low: 6.7, high: 167.5, unit: "standard" }
      },
      female: {
        adult: { low: 5.9, high: 144.7, unit: "standard" },
        pediatric: { low: 5.0, high: 124.9, unit: "standard" },
        pregnancy: { low: 5.4, high: 175.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.6,
      panicHigh: 274.1,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 442,
    isActive: true
  },
  {
    id: "LOINC_1630",
    loincCode: "1630-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 45 — Standardized Marker",
    shortName: "MOLE_PARAM_45",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Heparin)",
    methodology: "Automated Cell Counter",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.4, high: 67.4, unit: "standard" },
        pediatric: { low: 18.7, high: 57.3, unit: "standard" },
        geriatric: { low: 24.6, high: 74.1, unit: "standard" }
      },
      female: {
        adult: { low: 21.5, high: 64.0, unit: "standard" },
        pediatric: { low: 18.3, high: 55.3, unit: "standard" },
        pregnancy: { low: 19.9, high: 77.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.4,
      panicHigh: 121.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 952,
    isActive: true
  },
  {
    id: "LOINC_1631",
    loincCode: "1631-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 46 — Standardized Marker",
    shortName: "MOLE_PARAM_46",
    category: "Molecular Diagnostics",
    specimen: "24-Hour Urine",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 42.7, high: 78.1, unit: "standard" },
        pediatric: { low: 34.2, high: 66.4, unit: "standard" },
        geriatric: { low: 44.8, high: 85.9, unit: "standard" }
      },
      female: {
        adult: { low: 39.3, high: 74.2, unit: "standard" },
        pediatric: { low: 33.3, high: 64.0, unit: "standard" },
        pregnancy: { low: 36.3, high: 89.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 17.1,
      panicHigh: 140.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1531,
    isActive: true
  },
  {
    id: "LOINC_1632",
    loincCode: "1632-4",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 47 — Standardized Marker",
    shortName: "MOLE_PARAM_47",
    category: "Molecular Diagnostics",
    specimen: "Pleural Fluid",
    methodology: "Real-Time PCR",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 32.8, high: 85.5, unit: "standard" },
        pediatric: { low: 26.2, high: 72.7, unit: "standard" },
        geriatric: { low: 34.4, high: 94.1, unit: "standard" }
      },
      female: {
        adult: { low: 30.2, high: 81.2, unit: "standard" },
        pediatric: { low: 25.6, high: 70.1, unit: "standard" },
        pregnancy: { low: 27.9, high: 98.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.1,
      panicHigh: 153.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 1234,
    isActive: true
  },
  {
    id: "LOINC_1633",
    loincCode: "1633-4",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 48 — Standardized Marker",
    shortName: "MOLE_PARAM_48",
    category: "Molecular Diagnostics",
    specimen: "Tissue Biopsy",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 15.6, high: 123.7, unit: "standard" },
        pediatric: { low: 12.5, high: 105.1, unit: "standard" },
        geriatric: { low: 16.4, high: 136.1, unit: "standard" }
      },
      female: {
        adult: { low: 14.4, high: 117.5, unit: "standard" },
        pediatric: { low: 12.2, high: 101.4, unit: "standard" },
        pregnancy: { low: 13.3, high: 142.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.2,
      panicHigh: 222.7,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 718,
    isActive: true
  },
  {
    id: "LOINC_1634",
    loincCode: "1634-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 49 — Standardized Marker",
    shortName: "MOLE_PARAM_49",
    category: "Molecular Diagnostics",
    specimen: "Serum",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 17.7, high: 105.9, unit: "standard" },
        pediatric: { low: 14.2, high: 90.0, unit: "standard" },
        geriatric: { low: 18.6, high: 116.5, unit: "standard" }
      },
      female: {
        adult: { low: 16.3, high: 100.6, unit: "standard" },
        pediatric: { low: 13.8, high: 86.8, unit: "standard" },
        pregnancy: { low: 15.0, high: 121.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.1,
      panicHigh: 190.6,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 781,
    isActive: true
  },
  {
    id: "LOINC_1635",
    loincCode: "1635-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 50 — Standardized Marker",
    shortName: "MOLE_PARAM_50",
    category: "Molecular Diagnostics",
    specimen: "Random Urine",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 7.3, high: 71.7, unit: "standard" },
        pediatric: { low: 5.8, high: 60.9, unit: "standard" },
        geriatric: { low: 7.7, high: 78.9, unit: "standard" }
      },
      female: {
        adult: { low: 6.7, high: 68.1, unit: "standard" },
        pediatric: { low: 5.7, high: 58.8, unit: "standard" },
        pregnancy: { low: 6.2, high: 82.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 2.9,
      panicHigh: 129.1,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 469,
    isActive: true
  },
  {
    id: "LOINC_1636",
    loincCode: "1636-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 51 — Standardized Marker",
    shortName: "MOLE_PARAM_51",
    category: "Molecular Diagnostics",
    specimen: "Synovial Fluid",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 27.9, high: 84.3, unit: "standard" },
        pediatric: { low: 22.3, high: 71.7, unit: "standard" },
        geriatric: { low: 29.3, high: 92.7, unit: "standard" }
      },
      female: {
        adult: { low: 25.7, high: 80.1, unit: "standard" },
        pediatric: { low: 21.8, high: 69.1, unit: "standard" },
        pregnancy: { low: 23.7, high: 96.9, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.2,
      panicHigh: 151.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1087,
    isActive: true
  },
  {
    id: "LOINC_1637",
    loincCode: "1637-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 52 — Standardized Marker",
    shortName: "MOLE_PARAM_52",
    category: "Molecular Diagnostics",
    specimen: "Nasopharyngeal Swab",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 29.8, high: 79.8, unit: "standard" },
        pediatric: { low: 23.8, high: 67.8, unit: "standard" },
        geriatric: { low: 31.3, high: 87.8, unit: "standard" }
      },
      female: {
        adult: { low: 27.4, high: 75.8, unit: "standard" },
        pediatric: { low: 23.2, high: 65.4, unit: "standard" },
        pregnancy: { low: 25.3, high: 91.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 11.9,
      panicHigh: 143.6,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1144,
    isActive: true
  },
  {
    id: "LOINC_1638",
    loincCode: "1638-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 53 — Standardized Marker",
    shortName: "MOLE_PARAM_53",
    category: "Molecular Diagnostics",
    specimen: "Whole Blood (EDTA)",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 17.0, high: 32.6, unit: "standard" },
        pediatric: { low: 13.6, high: 27.7, unit: "standard" },
        geriatric: { low: 17.9, high: 35.9, unit: "standard" }
      },
      female: {
        adult: { low: 15.6, high: 31.0, unit: "standard" },
        pediatric: { low: 13.3, high: 26.7, unit: "standard" },
        pregnancy: { low: 14.4, high: 37.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 6.8,
      panicHigh: 58.7,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 760,
    isActive: true
  },
  {
    id: "LOINC_1639",
    loincCode: "1639-2",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 54 — Standardized Marker",
    shortName: "MOLE_PARAM_54",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Citrate)",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 33.9, high: 57.5, unit: "standard" },
        pediatric: { low: 27.1, high: 48.9, unit: "standard" },
        geriatric: { low: 35.6, high: 63.3, unit: "standard" }
      },
      female: {
        adult: { low: 31.2, high: 54.6, unit: "standard" },
        pediatric: { low: 26.4, high: 47.1, unit: "standard" },
        pregnancy: { low: 28.8, high: 66.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 13.6,
      panicHigh: 103.5,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1267,
    isActive: true
  },
  {
    id: "LOINC_1640",
    loincCode: "1640-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 55 — Standardized Marker",
    shortName: "MOLE_PARAM_55",
    category: "Molecular Diagnostics",
    specimen: "CSF",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 21.4, high: 133.9, unit: "standard" },
        pediatric: { low: 17.1, high: 113.8, unit: "standard" },
        geriatric: { low: 22.5, high: 147.3, unit: "standard" }
      },
      female: {
        adult: { low: 19.7, high: 127.2, unit: "standard" },
        pediatric: { low: 16.7, high: 109.8, unit: "standard" },
        pregnancy: { low: 18.2, high: 154.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 8.6,
      panicHigh: 241.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 892,
    isActive: true
  },
  {
    id: "LOINC_1641",
    loincCode: "1641-3",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 56 — Standardized Marker",
    shortName: "MOLE_PARAM_56",
    category: "Molecular Diagnostics",
    specimen: "Throat Swab",
    methodology: "Turbidimetry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.3, high: 110.2, unit: "standard" },
        pediatric: { low: 24.2, high: 93.7, unit: "standard" },
        geriatric: { low: 31.8, high: 121.2, unit: "standard" }
      },
      female: {
        adult: { low: 27.9, high: 104.7, unit: "standard" },
        pediatric: { low: 23.6, high: 90.4, unit: "standard" },
        pregnancy: { low: 25.8, high: 126.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.1,
      panicHigh: 198.4,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1159,
    isActive: true
  },
  {
    id: "LOINC_1642",
    loincCode: "1642-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 57 — Standardized Marker",
    shortName: "MOLE_PARAM_57",
    category: "Molecular Diagnostics",
    specimen: "Stool Sample",
    methodology: "Real-Time PCR",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 4.2, high: 50.6, unit: "standard" },
        pediatric: { low: 3.4, high: 43.0, unit: "standard" },
        geriatric: { low: 4.4, high: 55.7, unit: "standard" }
      },
      female: {
        adult: { low: 3.9, high: 48.1, unit: "standard" },
        pediatric: { low: 3.3, high: 41.5, unit: "standard" },
        pregnancy: { low: 3.6, high: 58.2, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 1.7,
      panicHigh: 91.1,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 376,
    isActive: true
  },
  {
    id: "LOINC_1643",
    loincCode: "1643-9",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 58 — Standardized Marker",
    shortName: "MOLE_PARAM_58",
    category: "Molecular Diagnostics",
    specimen: "Plasma (Heparin)",
    methodology: "Spectrophotometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 31.0, high: 91.3, unit: "standard" },
        pediatric: { low: 24.8, high: 77.6, unit: "standard" },
        geriatric: { low: 32.6, high: 100.4, unit: "standard" }
      },
      female: {
        adult: { low: 28.5, high: 86.7, unit: "standard" },
        pediatric: { low: 24.2, high: 74.9, unit: "standard" },
        pregnancy: { low: 26.3, high: 105.0, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.4,
      panicHigh: 164.3,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1180,
    isActive: true
  },
  {
    id: "LOINC_1644",
    loincCode: "1644-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 59 — Standardized Marker",
    shortName: "MOLE_PARAM_59",
    category: "Molecular Diagnostics",
    specimen: "24-Hour Urine",
    methodology: "High-Performance Liquid Chromatography (HPLC)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 10.1, high: 118.9, unit: "standard" },
        pediatric: { low: 8.1, high: 101.1, unit: "standard" },
        geriatric: { low: 10.6, high: 130.8, unit: "standard" }
      },
      female: {
        adult: { low: 9.3, high: 113.0, unit: "standard" },
        pediatric: { low: 7.9, high: 97.5, unit: "standard" },
        pregnancy: { low: 8.6, high: 136.7, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 4.0,
      panicHigh: 214.0,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 553,
    isActive: true
  },
  {
    id: "LOINC_1645",
    loincCode: "1645-7",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 60 — Standardized Marker",
    shortName: "MOLE_PARAM_60",
    category: "Molecular Diagnostics",
    specimen: "Pleural Fluid",
    methodology: "Microscopy & Staining",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 25.6, high: 155.7, unit: "standard" },
        pediatric: { low: 20.5, high: 132.3, unit: "standard" },
        geriatric: { low: 26.9, high: 171.3, unit: "standard" }
      },
      female: {
        adult: { low: 23.6, high: 147.9, unit: "standard" },
        pediatric: { low: 20.0, high: 127.7, unit: "standard" },
        pregnancy: { low: 21.8, high: 179.1, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 10.2,
      panicHigh: 280.3,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1018,
    isActive: true
  },
  {
    id: "LOINC_1646",
    loincCode: "1646-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 61 — Standardized Marker",
    shortName: "MOLE_PARAM_61",
    category: "Molecular Diagnostics",
    specimen: "Tissue Biopsy",
    methodology: "Chemiluminescence Immunoassay (CLIA)",
    units: "U/L",
    referenceIntervals: {
      male: {
        adult: { low: 19.4, high: 83.3, unit: "standard" },
        pediatric: { low: 15.5, high: 70.8, unit: "standard" },
        geriatric: { low: 20.4, high: 91.6, unit: "standard" }
      },
      female: {
        adult: { low: 17.8, high: 79.1, unit: "standard" },
        pediatric: { low: 15.1, high: 68.3, unit: "standard" },
        pregnancy: { low: 16.5, high: 95.8, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 7.8,
      panicHigh: 149.9,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 832,
    isActive: true
  },
  {
    id: "LOINC_1647",
    loincCode: "1647-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 62 — Standardized Marker",
    shortName: "MOLE_PARAM_62",
    category: "Molecular Diagnostics",
    specimen: "Serum",
    methodology: "Flow Cytometry",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 47.3, high: 190.9, unit: "standard" },
        pediatric: { low: 37.8, high: 162.3, unit: "standard" },
        geriatric: { low: 49.7, high: 210.0, unit: "standard" }
      },
      female: {
        adult: { low: 43.5, high: 181.4, unit: "standard" },
        pediatric: { low: 36.9, high: 156.5, unit: "standard" },
        pregnancy: { low: 40.2, high: 219.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 18.9,
      panicHigh: 343.6,
      alertUrgency: "URGENT_2HR",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1669,
    isActive: true
  },
  {
    id: "LOINC_1648",
    loincCode: "1648-5",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 63 — Standardized Marker",
    shortName: "MOLE_PARAM_63",
    category: "Molecular Diagnostics",
    specimen: "Random Urine",
    methodology: "Ion-Selective Electrode (ISE)",
    units: "g/L",
    referenceIntervals: {
      male: {
        adult: { low: 36.5, high: 121.3, unit: "standard" },
        pediatric: { low: 29.2, high: 103.1, unit: "standard" },
        geriatric: { low: 38.3, high: 133.4, unit: "standard" }
      },
      female: {
        adult: { low: 33.6, high: 115.2, unit: "standard" },
        pediatric: { low: 28.5, high: 99.5, unit: "standard" },
        pregnancy: { low: 31.0, high: 139.5, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 14.6,
      panicHigh: 218.3,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 30,
    pricingINR: 1345,
    isActive: true
  },
  {
    id: "LOINC_1649",
    loincCode: "1649-1",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 64 — Standardized Marker",
    shortName: "MOLE_PARAM_64",
    category: "Molecular Diagnostics",
    specimen: "Synovial Fluid",
    methodology: "ELISA",
    units: "mg/dL",
    referenceIntervals: {
      male: {
        adult: { low: 30.3, high: 89.0, unit: "standard" },
        pediatric: { low: 24.2, high: 75.6, unit: "standard" },
        geriatric: { low: 31.8, high: 97.9, unit: "standard" }
      },
      female: {
        adult: { low: 27.9, high: 84.5, unit: "standard" },
        pediatric: { low: 23.6, high: 73.0, unit: "standard" },
        pregnancy: { low: 25.8, high: 102.3, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 12.1,
      panicHigh: 160.2,
      alertUrgency: "STAT_IMMEDIATE",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 60,
    pricingINR: 1159,
    isActive: true
  },
  {
    id: "LOINC_1650",
    loincCode: "1650-6",
    testName: "Molecular Diagnostics Clinical Diagnostic Parameter 65 — Standardized Marker",
    shortName: "MOLE_PARAM_65",
    category: "Molecular Diagnostics",
    specimen: "Nasopharyngeal Swab",
    methodology: "Automated Cell Counter",
    units: "mmol/L",
    referenceIntervals: {
      male: {
        adult: { low: 23.2, high: 51.0, unit: "standard" },
        pediatric: { low: 18.6, high: 43.4, unit: "standard" },
        geriatric: { low: 24.4, high: 56.1, unit: "standard" }
      },
      female: {
        adult: { low: 21.3, high: 48.4, unit: "standard" },
        pediatric: { low: 18.1, high: 41.8, unit: "standard" },
        pregnancy: { low: 19.7, high: 58.6, unit: "standard" }
      }
    },
    criticalThresholds: {
      panicLow: 9.3,
      panicHigh: 91.8,
      alertUrgency: "ROUTINE_SAME_DAY",
      notificationProtocol: "Notify attending physician and lab pathologist within 15 minutes"
    },
    clinicalSignificance: {
      elevatedIndications: "Associated with acute inflammatory response, metabolic dysfunction, or cellular release in molecular diagnostics disorders.",
      decreasedIndications: "May indicate impaired synthesis, excessive renal/hepatic clearance, or dietary insufficiency in molecular diagnostics.",
      interferences: ["Severe hemolysis (>500 mg/dL Hb)", "Marked lipemia (triglycerides >1000 mg/dL)", "Gross icterus (bilirubin >20 mg/dL)"]
    },
    turnaroundTimeMinutes: 120,
    pricingINR: 946,
    isActive: true
  },
];

function findLoincByCode(code) { return LOINC_CATALOG.find(t => t.loincCode === code || t.id === code); }
function getLoincByCategory(cat) { return LOINC_CATALOG.filter(t => t.category.toLowerCase() === cat.toLowerCase()); }
function evaluateCriticalResult(loincId, value) {
  const test = findLoincByCode(loincId);
  if (!test) return { isCritical: false, flag: "NORMAL" };
  const num = parseFloat(value);
  if (isNaN(num)) return { isCritical: false, flag: "INVALID" };
  if (num <= test.criticalThresholds.panicLow) return { isCritical: true, flag: "CRITICAL_LOW", urgency: test.criticalThresholds.alertUrgency };
  if (num >= test.criticalThresholds.panicHigh) return { isCritical: true, flag: "CRITICAL_HIGH", urgency: test.criticalThresholds.alertUrgency };
  return { isCritical: false, flag: "IN_RANGE" };
}

module.exports = { LOINC_CATALOG, findLoincByCode, getLoincByCategory, evaluateCriticalResult };