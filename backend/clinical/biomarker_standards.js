/**
 * LABCARE HOSPITAL MANAGEMENT SYSTEM — BIOMARKER STANDARDS & ANALYZER INTERFACE
 * Laboratory Specimen Quality Validation, Dilution Factors, Calibration Curves, and Delta Check Algorithms
 */

const BIOMARKER_STANDARDS = [
  {
    biomarkerId: "BM_1",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 1",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1001",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_2",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 2",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1002",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_3",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 3",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1003",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_4",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 4",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1004",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_5",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 5",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1005",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_6",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 6",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1006",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_7",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 7",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1007",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_8",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 8",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1008",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_9",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 9",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1009",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_10",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 10",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1010",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_11",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 11",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1011",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_12",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 12",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1012",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_13",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 13",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1013",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_14",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 14",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1014",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_15",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 15",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1015",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_16",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 16",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1016",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_17",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 17",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1017",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_18",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 18",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1018",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_19",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 19",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1019",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_20",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 20",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1020",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_21",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 21",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1021",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_22",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 22",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1022",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_23",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 23",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1023",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_24",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 24",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1024",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_25",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 25",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1025",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_26",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 26",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1026",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_27",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 27",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1027",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_28",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 28",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1028",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_29",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 29",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1029",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_30",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 30",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1030",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_31",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 31",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1031",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_32",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 32",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1032",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_33",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 33",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1033",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_34",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 34",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1034",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_35",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 35",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1035",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_36",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 36",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1036",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_37",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 37",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1037",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_38",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 38",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1038",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_39",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 39",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1039",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_40",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 40",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1040",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_41",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 41",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1041",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_42",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 42",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1042",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_43",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 43",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1043",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_44",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 44",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1044",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_45",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 45",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1045",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_46",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 46",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1046",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_47",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 47",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1047",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_48",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 48",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1048",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_49",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 49",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1049",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_50",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 50",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1050",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_51",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 51",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1051",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_52",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 52",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1052",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_53",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 53",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1053",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_54",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 54",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1054",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_55",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 55",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1055",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_56",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 56",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1056",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_57",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 57",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1057",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_58",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 58",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1058",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_59",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 59",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1059",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_60",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 60",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1060",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_61",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 61",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1061",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_62",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 62",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1062",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_63",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 63",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1063",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_64",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 64",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1064",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_65",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 65",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1065",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_66",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 66",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1066",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_67",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 67",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1067",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_68",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 68",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1068",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_69",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 69",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1069",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_70",
    biomarkerName: "Cardiac Biomarkers Analyte Reference Standard 70",
    panel: "Cardiac Biomarkers",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1070",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_71",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 1",
    panel: "Renal Function Panel",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1071",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_72",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 2",
    panel: "Renal Function Panel",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1072",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_73",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 3",
    panel: "Renal Function Panel",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1073",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_74",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 4",
    panel: "Renal Function Panel",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1074",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_75",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 5",
    panel: "Renal Function Panel",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1075",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_76",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 6",
    panel: "Renal Function Panel",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1076",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_77",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 7",
    panel: "Renal Function Panel",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1077",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_78",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 8",
    panel: "Renal Function Panel",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1078",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_79",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 9",
    panel: "Renal Function Panel",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1079",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_80",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 10",
    panel: "Renal Function Panel",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1080",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_81",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 11",
    panel: "Renal Function Panel",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1081",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_82",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 12",
    panel: "Renal Function Panel",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1082",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_83",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 13",
    panel: "Renal Function Panel",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1083",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_84",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 14",
    panel: "Renal Function Panel",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1084",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_85",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 15",
    panel: "Renal Function Panel",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1085",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_86",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 16",
    panel: "Renal Function Panel",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1086",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_87",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 17",
    panel: "Renal Function Panel",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1087",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_88",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 18",
    panel: "Renal Function Panel",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1088",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_89",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 19",
    panel: "Renal Function Panel",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1089",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_90",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 20",
    panel: "Renal Function Panel",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1090",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_91",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 21",
    panel: "Renal Function Panel",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1091",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_92",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 22",
    panel: "Renal Function Panel",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1092",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_93",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 23",
    panel: "Renal Function Panel",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1093",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_94",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 24",
    panel: "Renal Function Panel",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1094",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_95",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 25",
    panel: "Renal Function Panel",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1095",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_96",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 26",
    panel: "Renal Function Panel",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1096",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_97",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 27",
    panel: "Renal Function Panel",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1097",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_98",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 28",
    panel: "Renal Function Panel",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1098",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_99",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 29",
    panel: "Renal Function Panel",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1099",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_100",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 30",
    panel: "Renal Function Panel",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1100",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_101",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 31",
    panel: "Renal Function Panel",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1101",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_102",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 32",
    panel: "Renal Function Panel",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1102",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_103",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 33",
    panel: "Renal Function Panel",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1103",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_104",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 34",
    panel: "Renal Function Panel",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1104",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_105",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 35",
    panel: "Renal Function Panel",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1105",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_106",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 36",
    panel: "Renal Function Panel",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1106",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_107",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 37",
    panel: "Renal Function Panel",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1107",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_108",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 38",
    panel: "Renal Function Panel",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1108",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_109",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 39",
    panel: "Renal Function Panel",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1109",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_110",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 40",
    panel: "Renal Function Panel",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1110",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_111",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 41",
    panel: "Renal Function Panel",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1111",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_112",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 42",
    panel: "Renal Function Panel",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1112",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_113",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 43",
    panel: "Renal Function Panel",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1113",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_114",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 44",
    panel: "Renal Function Panel",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1114",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_115",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 45",
    panel: "Renal Function Panel",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1115",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_116",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 46",
    panel: "Renal Function Panel",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1116",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_117",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 47",
    panel: "Renal Function Panel",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1117",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_118",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 48",
    panel: "Renal Function Panel",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1118",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_119",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 49",
    panel: "Renal Function Panel",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1119",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_120",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 50",
    panel: "Renal Function Panel",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1120",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_121",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 51",
    panel: "Renal Function Panel",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1121",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_122",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 52",
    panel: "Renal Function Panel",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1122",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_123",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 53",
    panel: "Renal Function Panel",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1123",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_124",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 54",
    panel: "Renal Function Panel",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1124",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_125",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 55",
    panel: "Renal Function Panel",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1125",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_126",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 56",
    panel: "Renal Function Panel",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1126",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_127",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 57",
    panel: "Renal Function Panel",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1127",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_128",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 58",
    panel: "Renal Function Panel",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1128",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_129",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 59",
    panel: "Renal Function Panel",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1129",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_130",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 60",
    panel: "Renal Function Panel",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1130",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_131",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 61",
    panel: "Renal Function Panel",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1131",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_132",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 62",
    panel: "Renal Function Panel",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1132",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_133",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 63",
    panel: "Renal Function Panel",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1133",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_134",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 64",
    panel: "Renal Function Panel",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1134",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_135",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 65",
    panel: "Renal Function Panel",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1135",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_136",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 66",
    panel: "Renal Function Panel",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1136",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_137",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 67",
    panel: "Renal Function Panel",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1137",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_138",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 68",
    panel: "Renal Function Panel",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1138",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_139",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 69",
    panel: "Renal Function Panel",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1139",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_140",
    biomarkerName: "Renal Function Panel Analyte Reference Standard 70",
    panel: "Renal Function Panel",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1140",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_141",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 1",
    panel: "Hepatic Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1141",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_142",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 2",
    panel: "Hepatic Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1142",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_143",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 3",
    panel: "Hepatic Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1143",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_144",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 4",
    panel: "Hepatic Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1144",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_145",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 5",
    panel: "Hepatic Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1145",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_146",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 6",
    panel: "Hepatic Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1146",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_147",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 7",
    panel: "Hepatic Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1147",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_148",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 8",
    panel: "Hepatic Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1148",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_149",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 9",
    panel: "Hepatic Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1149",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_150",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 10",
    panel: "Hepatic Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1150",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_151",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 11",
    panel: "Hepatic Profile",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1151",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_152",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 12",
    panel: "Hepatic Profile",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1152",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_153",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 13",
    panel: "Hepatic Profile",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1153",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_154",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 14",
    panel: "Hepatic Profile",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1154",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_155",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 15",
    panel: "Hepatic Profile",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1155",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_156",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 16",
    panel: "Hepatic Profile",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1156",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_157",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 17",
    panel: "Hepatic Profile",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1157",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_158",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 18",
    panel: "Hepatic Profile",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1158",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_159",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 19",
    panel: "Hepatic Profile",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1159",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_160",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 20",
    panel: "Hepatic Profile",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1160",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_161",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 21",
    panel: "Hepatic Profile",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1161",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_162",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 22",
    panel: "Hepatic Profile",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1162",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_163",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 23",
    panel: "Hepatic Profile",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1163",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_164",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 24",
    panel: "Hepatic Profile",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1164",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_165",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 25",
    panel: "Hepatic Profile",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1165",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_166",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 26",
    panel: "Hepatic Profile",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1166",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_167",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 27",
    panel: "Hepatic Profile",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1167",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_168",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 28",
    panel: "Hepatic Profile",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1168",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_169",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 29",
    panel: "Hepatic Profile",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1169",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_170",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 30",
    panel: "Hepatic Profile",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1170",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_171",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 31",
    panel: "Hepatic Profile",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1171",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_172",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 32",
    panel: "Hepatic Profile",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1172",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_173",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 33",
    panel: "Hepatic Profile",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1173",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_174",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 34",
    panel: "Hepatic Profile",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1174",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_175",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 35",
    panel: "Hepatic Profile",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1175",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_176",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 36",
    panel: "Hepatic Profile",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1176",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_177",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 37",
    panel: "Hepatic Profile",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1177",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_178",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 38",
    panel: "Hepatic Profile",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1178",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_179",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 39",
    panel: "Hepatic Profile",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1179",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_180",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 40",
    panel: "Hepatic Profile",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1180",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_181",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 41",
    panel: "Hepatic Profile",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1181",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_182",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 42",
    panel: "Hepatic Profile",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1182",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_183",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 43",
    panel: "Hepatic Profile",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1183",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_184",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 44",
    panel: "Hepatic Profile",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1184",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_185",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 45",
    panel: "Hepatic Profile",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1185",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_186",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 46",
    panel: "Hepatic Profile",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1186",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_187",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 47",
    panel: "Hepatic Profile",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1187",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_188",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 48",
    panel: "Hepatic Profile",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1188",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_189",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 49",
    panel: "Hepatic Profile",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1189",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_190",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 50",
    panel: "Hepatic Profile",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1190",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_191",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 51",
    panel: "Hepatic Profile",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1191",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_192",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 52",
    panel: "Hepatic Profile",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1192",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_193",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 53",
    panel: "Hepatic Profile",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1193",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_194",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 54",
    panel: "Hepatic Profile",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1194",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_195",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 55",
    panel: "Hepatic Profile",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1195",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_196",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 56",
    panel: "Hepatic Profile",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1196",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_197",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 57",
    panel: "Hepatic Profile",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1197",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_198",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 58",
    panel: "Hepatic Profile",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1198",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_199",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 59",
    panel: "Hepatic Profile",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1199",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_200",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 60",
    panel: "Hepatic Profile",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1200",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_201",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 61",
    panel: "Hepatic Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1201",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_202",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 62",
    panel: "Hepatic Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1202",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_203",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 63",
    panel: "Hepatic Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1203",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_204",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 64",
    panel: "Hepatic Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1204",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_205",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 65",
    panel: "Hepatic Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1205",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_206",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 66",
    panel: "Hepatic Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1206",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_207",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 67",
    panel: "Hepatic Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1207",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_208",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 68",
    panel: "Hepatic Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1208",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_209",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 69",
    panel: "Hepatic Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1209",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_210",
    biomarkerName: "Hepatic Profile Analyte Reference Standard 70",
    panel: "Hepatic Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1210",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_211",
    biomarkerName: "Lipid Panel Analyte Reference Standard 1",
    panel: "Lipid Panel",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1211",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_212",
    biomarkerName: "Lipid Panel Analyte Reference Standard 2",
    panel: "Lipid Panel",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1212",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_213",
    biomarkerName: "Lipid Panel Analyte Reference Standard 3",
    panel: "Lipid Panel",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1213",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_214",
    biomarkerName: "Lipid Panel Analyte Reference Standard 4",
    panel: "Lipid Panel",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1214",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_215",
    biomarkerName: "Lipid Panel Analyte Reference Standard 5",
    panel: "Lipid Panel",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1215",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_216",
    biomarkerName: "Lipid Panel Analyte Reference Standard 6",
    panel: "Lipid Panel",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1216",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_217",
    biomarkerName: "Lipid Panel Analyte Reference Standard 7",
    panel: "Lipid Panel",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1217",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_218",
    biomarkerName: "Lipid Panel Analyte Reference Standard 8",
    panel: "Lipid Panel",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1218",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_219",
    biomarkerName: "Lipid Panel Analyte Reference Standard 9",
    panel: "Lipid Panel",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1219",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_220",
    biomarkerName: "Lipid Panel Analyte Reference Standard 10",
    panel: "Lipid Panel",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1220",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_221",
    biomarkerName: "Lipid Panel Analyte Reference Standard 11",
    panel: "Lipid Panel",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1221",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_222",
    biomarkerName: "Lipid Panel Analyte Reference Standard 12",
    panel: "Lipid Panel",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1222",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_223",
    biomarkerName: "Lipid Panel Analyte Reference Standard 13",
    panel: "Lipid Panel",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1223",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_224",
    biomarkerName: "Lipid Panel Analyte Reference Standard 14",
    panel: "Lipid Panel",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1224",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_225",
    biomarkerName: "Lipid Panel Analyte Reference Standard 15",
    panel: "Lipid Panel",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1225",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_226",
    biomarkerName: "Lipid Panel Analyte Reference Standard 16",
    panel: "Lipid Panel",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1226",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_227",
    biomarkerName: "Lipid Panel Analyte Reference Standard 17",
    panel: "Lipid Panel",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1227",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_228",
    biomarkerName: "Lipid Panel Analyte Reference Standard 18",
    panel: "Lipid Panel",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1228",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_229",
    biomarkerName: "Lipid Panel Analyte Reference Standard 19",
    panel: "Lipid Panel",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1229",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_230",
    biomarkerName: "Lipid Panel Analyte Reference Standard 20",
    panel: "Lipid Panel",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1230",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_231",
    biomarkerName: "Lipid Panel Analyte Reference Standard 21",
    panel: "Lipid Panel",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1231",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_232",
    biomarkerName: "Lipid Panel Analyte Reference Standard 22",
    panel: "Lipid Panel",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1232",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_233",
    biomarkerName: "Lipid Panel Analyte Reference Standard 23",
    panel: "Lipid Panel",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1233",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_234",
    biomarkerName: "Lipid Panel Analyte Reference Standard 24",
    panel: "Lipid Panel",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1234",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_235",
    biomarkerName: "Lipid Panel Analyte Reference Standard 25",
    panel: "Lipid Panel",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1235",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_236",
    biomarkerName: "Lipid Panel Analyte Reference Standard 26",
    panel: "Lipid Panel",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1236",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_237",
    biomarkerName: "Lipid Panel Analyte Reference Standard 27",
    panel: "Lipid Panel",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1237",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_238",
    biomarkerName: "Lipid Panel Analyte Reference Standard 28",
    panel: "Lipid Panel",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1238",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_239",
    biomarkerName: "Lipid Panel Analyte Reference Standard 29",
    panel: "Lipid Panel",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1239",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_240",
    biomarkerName: "Lipid Panel Analyte Reference Standard 30",
    panel: "Lipid Panel",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1240",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_241",
    biomarkerName: "Lipid Panel Analyte Reference Standard 31",
    panel: "Lipid Panel",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1241",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_242",
    biomarkerName: "Lipid Panel Analyte Reference Standard 32",
    panel: "Lipid Panel",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1242",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_243",
    biomarkerName: "Lipid Panel Analyte Reference Standard 33",
    panel: "Lipid Panel",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1243",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_244",
    biomarkerName: "Lipid Panel Analyte Reference Standard 34",
    panel: "Lipid Panel",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1244",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_245",
    biomarkerName: "Lipid Panel Analyte Reference Standard 35",
    panel: "Lipid Panel",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1245",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_246",
    biomarkerName: "Lipid Panel Analyte Reference Standard 36",
    panel: "Lipid Panel",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1246",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_247",
    biomarkerName: "Lipid Panel Analyte Reference Standard 37",
    panel: "Lipid Panel",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1247",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_248",
    biomarkerName: "Lipid Panel Analyte Reference Standard 38",
    panel: "Lipid Panel",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1248",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_249",
    biomarkerName: "Lipid Panel Analyte Reference Standard 39",
    panel: "Lipid Panel",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1249",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_250",
    biomarkerName: "Lipid Panel Analyte Reference Standard 40",
    panel: "Lipid Panel",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1250",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_251",
    biomarkerName: "Lipid Panel Analyte Reference Standard 41",
    panel: "Lipid Panel",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1251",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_252",
    biomarkerName: "Lipid Panel Analyte Reference Standard 42",
    panel: "Lipid Panel",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1252",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_253",
    biomarkerName: "Lipid Panel Analyte Reference Standard 43",
    panel: "Lipid Panel",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1253",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_254",
    biomarkerName: "Lipid Panel Analyte Reference Standard 44",
    panel: "Lipid Panel",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1254",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_255",
    biomarkerName: "Lipid Panel Analyte Reference Standard 45",
    panel: "Lipid Panel",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1255",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_256",
    biomarkerName: "Lipid Panel Analyte Reference Standard 46",
    panel: "Lipid Panel",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1256",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_257",
    biomarkerName: "Lipid Panel Analyte Reference Standard 47",
    panel: "Lipid Panel",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1257",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_258",
    biomarkerName: "Lipid Panel Analyte Reference Standard 48",
    panel: "Lipid Panel",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1258",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_259",
    biomarkerName: "Lipid Panel Analyte Reference Standard 49",
    panel: "Lipid Panel",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1259",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_260",
    biomarkerName: "Lipid Panel Analyte Reference Standard 50",
    panel: "Lipid Panel",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1260",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_261",
    biomarkerName: "Lipid Panel Analyte Reference Standard 51",
    panel: "Lipid Panel",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1261",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_262",
    biomarkerName: "Lipid Panel Analyte Reference Standard 52",
    panel: "Lipid Panel",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1262",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_263",
    biomarkerName: "Lipid Panel Analyte Reference Standard 53",
    panel: "Lipid Panel",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1263",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_264",
    biomarkerName: "Lipid Panel Analyte Reference Standard 54",
    panel: "Lipid Panel",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1264",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_265",
    biomarkerName: "Lipid Panel Analyte Reference Standard 55",
    panel: "Lipid Panel",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1265",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_266",
    biomarkerName: "Lipid Panel Analyte Reference Standard 56",
    panel: "Lipid Panel",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1266",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_267",
    biomarkerName: "Lipid Panel Analyte Reference Standard 57",
    panel: "Lipid Panel",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1267",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_268",
    biomarkerName: "Lipid Panel Analyte Reference Standard 58",
    panel: "Lipid Panel",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1268",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_269",
    biomarkerName: "Lipid Panel Analyte Reference Standard 59",
    panel: "Lipid Panel",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1269",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_270",
    biomarkerName: "Lipid Panel Analyte Reference Standard 60",
    panel: "Lipid Panel",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1270",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_271",
    biomarkerName: "Lipid Panel Analyte Reference Standard 61",
    panel: "Lipid Panel",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1271",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_272",
    biomarkerName: "Lipid Panel Analyte Reference Standard 62",
    panel: "Lipid Panel",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1272",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_273",
    biomarkerName: "Lipid Panel Analyte Reference Standard 63",
    panel: "Lipid Panel",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1273",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_274",
    biomarkerName: "Lipid Panel Analyte Reference Standard 64",
    panel: "Lipid Panel",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1274",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_275",
    biomarkerName: "Lipid Panel Analyte Reference Standard 65",
    panel: "Lipid Panel",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1275",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_276",
    biomarkerName: "Lipid Panel Analyte Reference Standard 66",
    panel: "Lipid Panel",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1276",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_277",
    biomarkerName: "Lipid Panel Analyte Reference Standard 67",
    panel: "Lipid Panel",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1277",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_278",
    biomarkerName: "Lipid Panel Analyte Reference Standard 68",
    panel: "Lipid Panel",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1278",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_279",
    biomarkerName: "Lipid Panel Analyte Reference Standard 69",
    panel: "Lipid Panel",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1279",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_280",
    biomarkerName: "Lipid Panel Analyte Reference Standard 70",
    panel: "Lipid Panel",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1280",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_281",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 1",
    panel: "Thyroid Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1281",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_282",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 2",
    panel: "Thyroid Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1282",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_283",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 3",
    panel: "Thyroid Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1283",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_284",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 4",
    panel: "Thyroid Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1284",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_285",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 5",
    panel: "Thyroid Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1285",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_286",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 6",
    panel: "Thyroid Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1286",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_287",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 7",
    panel: "Thyroid Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1287",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_288",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 8",
    panel: "Thyroid Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1288",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_289",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 9",
    panel: "Thyroid Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1289",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_290",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 10",
    panel: "Thyroid Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1290",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_291",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 11",
    panel: "Thyroid Profile",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1291",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_292",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 12",
    panel: "Thyroid Profile",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1292",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_293",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 13",
    panel: "Thyroid Profile",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1293",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_294",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 14",
    panel: "Thyroid Profile",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1294",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_295",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 15",
    panel: "Thyroid Profile",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1295",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_296",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 16",
    panel: "Thyroid Profile",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1296",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_297",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 17",
    panel: "Thyroid Profile",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1297",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_298",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 18",
    panel: "Thyroid Profile",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1298",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_299",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 19",
    panel: "Thyroid Profile",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1299",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_300",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 20",
    panel: "Thyroid Profile",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1300",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_301",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 21",
    panel: "Thyroid Profile",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1301",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_302",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 22",
    panel: "Thyroid Profile",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1302",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_303",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 23",
    panel: "Thyroid Profile",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1303",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_304",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 24",
    panel: "Thyroid Profile",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1304",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_305",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 25",
    panel: "Thyroid Profile",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1305",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_306",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 26",
    panel: "Thyroid Profile",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1306",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_307",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 27",
    panel: "Thyroid Profile",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1307",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_308",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 28",
    panel: "Thyroid Profile",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1308",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_309",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 29",
    panel: "Thyroid Profile",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1309",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_310",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 30",
    panel: "Thyroid Profile",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1310",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_311",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 31",
    panel: "Thyroid Profile",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1311",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_312",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 32",
    panel: "Thyroid Profile",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1312",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_313",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 33",
    panel: "Thyroid Profile",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1313",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_314",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 34",
    panel: "Thyroid Profile",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1314",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_315",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 35",
    panel: "Thyroid Profile",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1315",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_316",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 36",
    panel: "Thyroid Profile",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1316",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_317",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 37",
    panel: "Thyroid Profile",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1317",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_318",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 38",
    panel: "Thyroid Profile",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1318",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_319",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 39",
    panel: "Thyroid Profile",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1319",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_320",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 40",
    panel: "Thyroid Profile",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1320",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_321",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 41",
    panel: "Thyroid Profile",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1321",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_322",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 42",
    panel: "Thyroid Profile",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1322",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_323",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 43",
    panel: "Thyroid Profile",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1323",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_324",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 44",
    panel: "Thyroid Profile",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1324",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_325",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 45",
    panel: "Thyroid Profile",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1325",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_326",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 46",
    panel: "Thyroid Profile",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1326",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_327",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 47",
    panel: "Thyroid Profile",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1327",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_328",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 48",
    panel: "Thyroid Profile",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1328",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_329",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 49",
    panel: "Thyroid Profile",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1329",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_330",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 50",
    panel: "Thyroid Profile",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1330",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_331",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 51",
    panel: "Thyroid Profile",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1331",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_332",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 52",
    panel: "Thyroid Profile",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1332",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_333",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 53",
    panel: "Thyroid Profile",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1333",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_334",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 54",
    panel: "Thyroid Profile",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1334",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_335",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 55",
    panel: "Thyroid Profile",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1335",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_336",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 56",
    panel: "Thyroid Profile",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1336",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_337",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 57",
    panel: "Thyroid Profile",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1337",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_338",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 58",
    panel: "Thyroid Profile",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1338",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_339",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 59",
    panel: "Thyroid Profile",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1339",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_340",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 60",
    panel: "Thyroid Profile",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1340",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_341",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 61",
    panel: "Thyroid Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1341",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_342",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 62",
    panel: "Thyroid Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1342",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_343",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 63",
    panel: "Thyroid Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1343",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_344",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 64",
    panel: "Thyroid Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1344",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_345",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 65",
    panel: "Thyroid Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1345",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_346",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 66",
    panel: "Thyroid Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1346",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_347",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 67",
    panel: "Thyroid Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1347",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_348",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 68",
    panel: "Thyroid Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1348",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_349",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 69",
    panel: "Thyroid Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1349",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_350",
    biomarkerName: "Thyroid Profile Analyte Reference Standard 70",
    panel: "Thyroid Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1350",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_351",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 1",
    panel: "Arterial Blood Gas",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1351",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_352",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 2",
    panel: "Arterial Blood Gas",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1352",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_353",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 3",
    panel: "Arterial Blood Gas",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1353",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_354",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 4",
    panel: "Arterial Blood Gas",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1354",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_355",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 5",
    panel: "Arterial Blood Gas",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1355",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_356",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 6",
    panel: "Arterial Blood Gas",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1356",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_357",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 7",
    panel: "Arterial Blood Gas",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1357",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_358",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 8",
    panel: "Arterial Blood Gas",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1358",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_359",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 9",
    panel: "Arterial Blood Gas",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1359",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_360",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 10",
    panel: "Arterial Blood Gas",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1360",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_361",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 11",
    panel: "Arterial Blood Gas",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1361",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_362",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 12",
    panel: "Arterial Blood Gas",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1362",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_363",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 13",
    panel: "Arterial Blood Gas",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1363",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_364",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 14",
    panel: "Arterial Blood Gas",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1364",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_365",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 15",
    panel: "Arterial Blood Gas",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1365",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_366",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 16",
    panel: "Arterial Blood Gas",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1366",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_367",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 17",
    panel: "Arterial Blood Gas",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1367",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_368",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 18",
    panel: "Arterial Blood Gas",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1368",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_369",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 19",
    panel: "Arterial Blood Gas",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1369",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_370",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 20",
    panel: "Arterial Blood Gas",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1370",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_371",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 21",
    panel: "Arterial Blood Gas",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1371",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_372",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 22",
    panel: "Arterial Blood Gas",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1372",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_373",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 23",
    panel: "Arterial Blood Gas",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1373",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_374",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 24",
    panel: "Arterial Blood Gas",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1374",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_375",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 25",
    panel: "Arterial Blood Gas",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1375",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_376",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 26",
    panel: "Arterial Blood Gas",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1376",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_377",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 27",
    panel: "Arterial Blood Gas",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1377",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_378",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 28",
    panel: "Arterial Blood Gas",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1378",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_379",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 29",
    panel: "Arterial Blood Gas",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1379",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_380",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 30",
    panel: "Arterial Blood Gas",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1380",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_381",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 31",
    panel: "Arterial Blood Gas",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1381",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_382",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 32",
    panel: "Arterial Blood Gas",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1382",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_383",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 33",
    panel: "Arterial Blood Gas",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1383",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_384",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 34",
    panel: "Arterial Blood Gas",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1384",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_385",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 35",
    panel: "Arterial Blood Gas",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1385",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_386",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 36",
    panel: "Arterial Blood Gas",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1386",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_387",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 37",
    panel: "Arterial Blood Gas",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1387",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_388",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 38",
    panel: "Arterial Blood Gas",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1388",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_389",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 39",
    panel: "Arterial Blood Gas",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1389",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_390",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 40",
    panel: "Arterial Blood Gas",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1390",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_391",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 41",
    panel: "Arterial Blood Gas",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1391",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_392",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 42",
    panel: "Arterial Blood Gas",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1392",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_393",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 43",
    panel: "Arterial Blood Gas",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1393",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_394",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 44",
    panel: "Arterial Blood Gas",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1394",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_395",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 45",
    panel: "Arterial Blood Gas",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1395",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_396",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 46",
    panel: "Arterial Blood Gas",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1396",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_397",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 47",
    panel: "Arterial Blood Gas",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1397",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_398",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 48",
    panel: "Arterial Blood Gas",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1398",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_399",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 49",
    panel: "Arterial Blood Gas",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1399",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_400",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 50",
    panel: "Arterial Blood Gas",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1400",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_401",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 51",
    panel: "Arterial Blood Gas",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1401",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_402",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 52",
    panel: "Arterial Blood Gas",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1402",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_403",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 53",
    panel: "Arterial Blood Gas",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1403",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_404",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 54",
    panel: "Arterial Blood Gas",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1404",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_405",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 55",
    panel: "Arterial Blood Gas",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1405",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_406",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 56",
    panel: "Arterial Blood Gas",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1406",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_407",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 57",
    panel: "Arterial Blood Gas",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1407",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_408",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 58",
    panel: "Arterial Blood Gas",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1408",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_409",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 59",
    panel: "Arterial Blood Gas",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1409",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_410",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 60",
    panel: "Arterial Blood Gas",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1410",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_411",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 61",
    panel: "Arterial Blood Gas",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1411",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_412",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 62",
    panel: "Arterial Blood Gas",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1412",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_413",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 63",
    panel: "Arterial Blood Gas",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1413",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_414",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 64",
    panel: "Arterial Blood Gas",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1414",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_415",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 65",
    panel: "Arterial Blood Gas",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1415",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_416",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 66",
    panel: "Arterial Blood Gas",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1416",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_417",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 67",
    panel: "Arterial Blood Gas",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1417",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_418",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 68",
    panel: "Arterial Blood Gas",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1418",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_419",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 69",
    panel: "Arterial Blood Gas",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1419",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_420",
    biomarkerName: "Arterial Blood Gas Analyte Reference Standard 70",
    panel: "Arterial Blood Gas",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1420",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_421",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 1",
    panel: "Coagulation Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1421",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_422",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 2",
    panel: "Coagulation Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1422",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_423",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 3",
    panel: "Coagulation Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1423",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_424",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 4",
    panel: "Coagulation Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1424",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_425",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 5",
    panel: "Coagulation Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1425",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_426",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 6",
    panel: "Coagulation Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1426",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_427",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 7",
    panel: "Coagulation Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1427",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_428",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 8",
    panel: "Coagulation Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1428",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_429",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 9",
    panel: "Coagulation Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1429",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_430",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 10",
    panel: "Coagulation Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1430",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_431",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 11",
    panel: "Coagulation Profile",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1431",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_432",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 12",
    panel: "Coagulation Profile",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1432",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_433",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 13",
    panel: "Coagulation Profile",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1433",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_434",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 14",
    panel: "Coagulation Profile",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1434",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_435",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 15",
    panel: "Coagulation Profile",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1435",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_436",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 16",
    panel: "Coagulation Profile",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1436",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_437",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 17",
    panel: "Coagulation Profile",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1437",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_438",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 18",
    panel: "Coagulation Profile",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1438",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_439",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 19",
    panel: "Coagulation Profile",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1439",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_440",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 20",
    panel: "Coagulation Profile",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1440",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_441",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 21",
    panel: "Coagulation Profile",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1441",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_442",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 22",
    panel: "Coagulation Profile",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1442",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_443",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 23",
    panel: "Coagulation Profile",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1443",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_444",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 24",
    panel: "Coagulation Profile",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1444",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_445",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 25",
    panel: "Coagulation Profile",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1445",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_446",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 26",
    panel: "Coagulation Profile",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1446",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_447",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 27",
    panel: "Coagulation Profile",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1447",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_448",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 28",
    panel: "Coagulation Profile",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1448",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_449",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 29",
    panel: "Coagulation Profile",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1449",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_450",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 30",
    panel: "Coagulation Profile",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1450",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_451",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 31",
    panel: "Coagulation Profile",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1451",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_452",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 32",
    panel: "Coagulation Profile",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1452",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_453",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 33",
    panel: "Coagulation Profile",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1453",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_454",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 34",
    panel: "Coagulation Profile",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1454",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_455",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 35",
    panel: "Coagulation Profile",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1455",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_456",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 36",
    panel: "Coagulation Profile",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1456",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_457",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 37",
    panel: "Coagulation Profile",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1457",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_458",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 38",
    panel: "Coagulation Profile",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1458",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_459",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 39",
    panel: "Coagulation Profile",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1459",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_460",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 40",
    panel: "Coagulation Profile",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1460",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_461",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 41",
    panel: "Coagulation Profile",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1461",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_462",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 42",
    panel: "Coagulation Profile",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1462",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_463",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 43",
    panel: "Coagulation Profile",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1463",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_464",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 44",
    panel: "Coagulation Profile",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1464",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_465",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 45",
    panel: "Coagulation Profile",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1465",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_466",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 46",
    panel: "Coagulation Profile",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1466",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_467",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 47",
    panel: "Coagulation Profile",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1467",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_468",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 48",
    panel: "Coagulation Profile",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1468",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_469",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 49",
    panel: "Coagulation Profile",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1469",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_470",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 50",
    panel: "Coagulation Profile",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1470",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_471",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 51",
    panel: "Coagulation Profile",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1471",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_472",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 52",
    panel: "Coagulation Profile",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1472",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_473",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 53",
    panel: "Coagulation Profile",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1473",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_474",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 54",
    panel: "Coagulation Profile",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1474",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_475",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 55",
    panel: "Coagulation Profile",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1475",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_476",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 56",
    panel: "Coagulation Profile",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1476",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_477",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 57",
    panel: "Coagulation Profile",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1477",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_478",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 58",
    panel: "Coagulation Profile",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1478",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_479",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 59",
    panel: "Coagulation Profile",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1479",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_480",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 60",
    panel: "Coagulation Profile",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1480",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_481",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 61",
    panel: "Coagulation Profile",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1481",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_482",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 62",
    panel: "Coagulation Profile",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1482",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_483",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 63",
    panel: "Coagulation Profile",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1483",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_484",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 64",
    panel: "Coagulation Profile",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1484",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_485",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 65",
    panel: "Coagulation Profile",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1485",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_486",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 66",
    panel: "Coagulation Profile",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1486",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_487",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 67",
    panel: "Coagulation Profile",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1487",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_488",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 68",
    panel: "Coagulation Profile",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1488",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_489",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 69",
    panel: "Coagulation Profile",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1489",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_490",
    biomarkerName: "Coagulation Profile Analyte Reference Standard 70",
    panel: "Coagulation Profile",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1490",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_491",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 1",
    panel: "Inflammatory Markers",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1491",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_492",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 2",
    panel: "Inflammatory Markers",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1492",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_493",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 3",
    panel: "Inflammatory Markers",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1493",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_494",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 4",
    panel: "Inflammatory Markers",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1494",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_495",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 5",
    panel: "Inflammatory Markers",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1495",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_496",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 6",
    panel: "Inflammatory Markers",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1496",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_497",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 7",
    panel: "Inflammatory Markers",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1497",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_498",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 8",
    panel: "Inflammatory Markers",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1498",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_499",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 9",
    panel: "Inflammatory Markers",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1499",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_500",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 10",
    panel: "Inflammatory Markers",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1500",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_501",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 11",
    panel: "Inflammatory Markers",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1501",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_502",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 12",
    panel: "Inflammatory Markers",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1502",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_503",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 13",
    panel: "Inflammatory Markers",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1503",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_504",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 14",
    panel: "Inflammatory Markers",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1504",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_505",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 15",
    panel: "Inflammatory Markers",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1505",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_506",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 16",
    panel: "Inflammatory Markers",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1506",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_507",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 17",
    panel: "Inflammatory Markers",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1507",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_508",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 18",
    panel: "Inflammatory Markers",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1508",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_509",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 19",
    panel: "Inflammatory Markers",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1509",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_510",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 20",
    panel: "Inflammatory Markers",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1510",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_511",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 21",
    panel: "Inflammatory Markers",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1511",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_512",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 22",
    panel: "Inflammatory Markers",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1512",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_513",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 23",
    panel: "Inflammatory Markers",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1513",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_514",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 24",
    panel: "Inflammatory Markers",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1514",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_515",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 25",
    panel: "Inflammatory Markers",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1515",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_516",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 26",
    panel: "Inflammatory Markers",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1516",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_517",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 27",
    panel: "Inflammatory Markers",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1517",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_518",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 28",
    panel: "Inflammatory Markers",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1518",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_519",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 29",
    panel: "Inflammatory Markers",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1519",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_520",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 30",
    panel: "Inflammatory Markers",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1520",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_521",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 31",
    panel: "Inflammatory Markers",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1521",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_522",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 32",
    panel: "Inflammatory Markers",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1522",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_523",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 33",
    panel: "Inflammatory Markers",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1523",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_524",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 34",
    panel: "Inflammatory Markers",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1524",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_525",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 35",
    panel: "Inflammatory Markers",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1525",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_526",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 36",
    panel: "Inflammatory Markers",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1526",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_527",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 37",
    panel: "Inflammatory Markers",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1527",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_528",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 38",
    panel: "Inflammatory Markers",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1528",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_529",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 39",
    panel: "Inflammatory Markers",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1529",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_530",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 40",
    panel: "Inflammatory Markers",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1530",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_531",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 41",
    panel: "Inflammatory Markers",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1531",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_532",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 42",
    panel: "Inflammatory Markers",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1532",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_533",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 43",
    panel: "Inflammatory Markers",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1533",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_534",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 44",
    panel: "Inflammatory Markers",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1534",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_535",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 45",
    panel: "Inflammatory Markers",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1535",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_536",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 46",
    panel: "Inflammatory Markers",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1536",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_537",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 47",
    panel: "Inflammatory Markers",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1537",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_538",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 48",
    panel: "Inflammatory Markers",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1538",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_539",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 49",
    panel: "Inflammatory Markers",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1539",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_540",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 50",
    panel: "Inflammatory Markers",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1540",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_541",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 51",
    panel: "Inflammatory Markers",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1541",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_542",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 52",
    panel: "Inflammatory Markers",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1542",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_543",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 53",
    panel: "Inflammatory Markers",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1543",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_544",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 54",
    panel: "Inflammatory Markers",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1544",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_545",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 55",
    panel: "Inflammatory Markers",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1545",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_546",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 56",
    panel: "Inflammatory Markers",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1546",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_547",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 57",
    panel: "Inflammatory Markers",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1547",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_548",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 58",
    panel: "Inflammatory Markers",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1548",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_549",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 59",
    panel: "Inflammatory Markers",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1549",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_550",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 60",
    panel: "Inflammatory Markers",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1550",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_551",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 61",
    panel: "Inflammatory Markers",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1551",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_552",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 62",
    panel: "Inflammatory Markers",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1552",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_553",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 63",
    panel: "Inflammatory Markers",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1553",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_554",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 64",
    panel: "Inflammatory Markers",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1554",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_555",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 65",
    panel: "Inflammatory Markers",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1555",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_556",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 66",
    panel: "Inflammatory Markers",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1556",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_557",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 67",
    panel: "Inflammatory Markers",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1557",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_558",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 68",
    panel: "Inflammatory Markers",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1558",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_559",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 69",
    panel: "Inflammatory Markers",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1559",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_560",
    biomarkerName: "Inflammatory Markers Analyte Reference Standard 70",
    panel: "Inflammatory Markers",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1560",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_561",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 1",
    panel: "Electrolyte Balance",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1561",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_562",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 2",
    panel: "Electrolyte Balance",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1562",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_563",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 3",
    panel: "Electrolyte Balance",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1563",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_564",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 4",
    panel: "Electrolyte Balance",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1564",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_565",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 5",
    panel: "Electrolyte Balance",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1565",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_566",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 6",
    panel: "Electrolyte Balance",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1566",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_567",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 7",
    panel: "Electrolyte Balance",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1567",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_568",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 8",
    panel: "Electrolyte Balance",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1568",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_569",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 9",
    panel: "Electrolyte Balance",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1569",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_570",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 10",
    panel: "Electrolyte Balance",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1570",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_571",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 11",
    panel: "Electrolyte Balance",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1571",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_572",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 12",
    panel: "Electrolyte Balance",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1572",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_573",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 13",
    panel: "Electrolyte Balance",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1573",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_574",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 14",
    panel: "Electrolyte Balance",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1574",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_575",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 15",
    panel: "Electrolyte Balance",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1575",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_576",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 16",
    panel: "Electrolyte Balance",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1576",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_577",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 17",
    panel: "Electrolyte Balance",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1577",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_578",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 18",
    panel: "Electrolyte Balance",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1578",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_579",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 19",
    panel: "Electrolyte Balance",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1579",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_580",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 20",
    panel: "Electrolyte Balance",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1580",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_581",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 21",
    panel: "Electrolyte Balance",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1581",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_582",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 22",
    panel: "Electrolyte Balance",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1582",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_583",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 23",
    panel: "Electrolyte Balance",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1583",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_584",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 24",
    panel: "Electrolyte Balance",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1584",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_585",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 25",
    panel: "Electrolyte Balance",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1585",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_586",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 26",
    panel: "Electrolyte Balance",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1586",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_587",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 27",
    panel: "Electrolyte Balance",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1587",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_588",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 28",
    panel: "Electrolyte Balance",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1588",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_589",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 29",
    panel: "Electrolyte Balance",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1589",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_590",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 30",
    panel: "Electrolyte Balance",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1590",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_591",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 31",
    panel: "Electrolyte Balance",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1591",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_592",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 32",
    panel: "Electrolyte Balance",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1592",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_593",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 33",
    panel: "Electrolyte Balance",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1593",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_594",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 34",
    panel: "Electrolyte Balance",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1594",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_595",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 35",
    panel: "Electrolyte Balance",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1595",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_596",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 36",
    panel: "Electrolyte Balance",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1596",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_597",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 37",
    panel: "Electrolyte Balance",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1597",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_598",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 38",
    panel: "Electrolyte Balance",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1598",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_599",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 39",
    panel: "Electrolyte Balance",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1599",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_600",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 40",
    panel: "Electrolyte Balance",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1600",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_601",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 41",
    panel: "Electrolyte Balance",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1601",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_602",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 42",
    panel: "Electrolyte Balance",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1602",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_603",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 43",
    panel: "Electrolyte Balance",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1603",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_604",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 44",
    panel: "Electrolyte Balance",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1604",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_605",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 45",
    panel: "Electrolyte Balance",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1605",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_606",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 46",
    panel: "Electrolyte Balance",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1606",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_607",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 47",
    panel: "Electrolyte Balance",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1607",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_608",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 48",
    panel: "Electrolyte Balance",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1608",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_609",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 49",
    panel: "Electrolyte Balance",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1609",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_610",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 50",
    panel: "Electrolyte Balance",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1610",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_611",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 51",
    panel: "Electrolyte Balance",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1611",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_612",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 52",
    panel: "Electrolyte Balance",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1612",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_613",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 53",
    panel: "Electrolyte Balance",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1613",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_614",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 54",
    panel: "Electrolyte Balance",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1614",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_615",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 55",
    panel: "Electrolyte Balance",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1615",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_616",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 56",
    panel: "Electrolyte Balance",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1616",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_617",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 57",
    panel: "Electrolyte Balance",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1617",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_618",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 58",
    panel: "Electrolyte Balance",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1618",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_619",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 59",
    panel: "Electrolyte Balance",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1619",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_620",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 60",
    panel: "Electrolyte Balance",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1620",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_621",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 61",
    panel: "Electrolyte Balance",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1621",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_622",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 62",
    panel: "Electrolyte Balance",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1622",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_623",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 63",
    panel: "Electrolyte Balance",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1623",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_624",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 64",
    panel: "Electrolyte Balance",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1624",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_625",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 65",
    panel: "Electrolyte Balance",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1625",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_626",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 66",
    panel: "Electrolyte Balance",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1626",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_627",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 67",
    panel: "Electrolyte Balance",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1627",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_628",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 68",
    panel: "Electrolyte Balance",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1628",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_629",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 69",
    panel: "Electrolyte Balance",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1629",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_630",
    biomarkerName: "Electrolyte Balance Analyte Reference Standard 70",
    panel: "Electrolyte Balance",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1630",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_631",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 1",
    panel: "Diabetic Monitoring",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 162.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1631",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_632",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 2",
    panel: "Diabetic Monitoring",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 174.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1632",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_633",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 3",
    panel: "Diabetic Monitoring",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 187.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1633",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_634",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 4",
    panel: "Diabetic Monitoring",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 199.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1634",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_635",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 5",
    panel: "Diabetic Monitoring",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 212.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1635",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_636",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 6",
    panel: "Diabetic Monitoring",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 224.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1636",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_637",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 7",
    panel: "Diabetic Monitoring",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 236.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1637",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_638",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 8",
    panel: "Diabetic Monitoring",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 249.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1638",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_639",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 9",
    panel: "Diabetic Monitoring",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 261.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1639",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_640",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 10",
    panel: "Diabetic Monitoring",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 274.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1640",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_641",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 11",
    panel: "Diabetic Monitoring",
    molecularFormula: "C21H26N2O7",
    molecularWeightDaltons: 286.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1641",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_642",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 12",
    panel: "Diabetic Monitoring",
    molecularFormula: "C22H27N3O2",
    molecularWeightDaltons: 298.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1642",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_643",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 13",
    panel: "Diabetic Monitoring",
    molecularFormula: "C23H28N4O3",
    molecularWeightDaltons: 311.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1643",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_644",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 14",
    panel: "Diabetic Monitoring",
    molecularFormula: "C24H29N5O4",
    molecularWeightDaltons: 323.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1644",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_645",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 15",
    panel: "Diabetic Monitoring",
    molecularFormula: "C25H30N1O5",
    molecularWeightDaltons: 336.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1645",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_646",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 16",
    panel: "Diabetic Monitoring",
    molecularFormula: "C26H31N2O6",
    molecularWeightDaltons: 348.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1646",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_647",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 17",
    panel: "Diabetic Monitoring",
    molecularFormula: "C27H32N3O7",
    molecularWeightDaltons: 360.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1647",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_648",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 18",
    panel: "Diabetic Monitoring",
    molecularFormula: "C28H33N4O2",
    molecularWeightDaltons: 373.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1648",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_649",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 19",
    panel: "Diabetic Monitoring",
    molecularFormula: "C29H34N5O3",
    molecularWeightDaltons: 385.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1649",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_650",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 20",
    panel: "Diabetic Monitoring",
    molecularFormula: "C10H35N1O4",
    molecularWeightDaltons: 398.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1650",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_651",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 21",
    panel: "Diabetic Monitoring",
    molecularFormula: "C11H36N2O5",
    molecularWeightDaltons: 410.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1651",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_652",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 22",
    panel: "Diabetic Monitoring",
    molecularFormula: "C12H37N3O6",
    molecularWeightDaltons: 422.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1652",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_653",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 23",
    panel: "Diabetic Monitoring",
    molecularFormula: "C13H38N4O7",
    molecularWeightDaltons: 435.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1653",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_654",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 24",
    panel: "Diabetic Monitoring",
    molecularFormula: "C14H39N5O2",
    molecularWeightDaltons: 447.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1654",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_655",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 25",
    panel: "Diabetic Monitoring",
    molecularFormula: "C15H40N1O3",
    molecularWeightDaltons: 460.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 1750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1655",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_656",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 26",
    panel: "Diabetic Monitoring",
    molecularFormula: "C16H41N2O4",
    molecularWeightDaltons: 472.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 1800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1656",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_657",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 27",
    panel: "Diabetic Monitoring",
    molecularFormula: "C17H42N3O5",
    molecularWeightDaltons: 484.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 1850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1657",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_658",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 28",
    panel: "Diabetic Monitoring",
    molecularFormula: "C18H43N4O6",
    molecularWeightDaltons: 497.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 1900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1658",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_659",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 29",
    panel: "Diabetic Monitoring",
    molecularFormula: "C19H44N5O7",
    molecularWeightDaltons: 509.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 1950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1659",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_660",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 30",
    panel: "Diabetic Monitoring",
    molecularFormula: "C20H15N1O2",
    molecularWeightDaltons: 522.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1660",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_661",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 31",
    panel: "Diabetic Monitoring",
    molecularFormula: "C21H16N2O3",
    molecularWeightDaltons: 534.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2050,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1661",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_662",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 32",
    panel: "Diabetic Monitoring",
    molecularFormula: "C22H17N3O4",
    molecularWeightDaltons: 546.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2100,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1662",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_663",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 33",
    panel: "Diabetic Monitoring",
    molecularFormula: "C23H18N4O5",
    molecularWeightDaltons: 559.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2150,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1663",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_664",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 34",
    panel: "Diabetic Monitoring",
    molecularFormula: "C24H19N5O6",
    molecularWeightDaltons: 571.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2200,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1664",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_665",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 35",
    panel: "Diabetic Monitoring",
    molecularFormula: "C25H20N1O7",
    molecularWeightDaltons: 584.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2250,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1665",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_666",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 36",
    panel: "Diabetic Monitoring",
    molecularFormula: "C26H21N2O2",
    molecularWeightDaltons: 596.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2300,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1666",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_667",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 37",
    panel: "Diabetic Monitoring",
    molecularFormula: "C27H22N3O3",
    molecularWeightDaltons: 608.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2350,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1667",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_668",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 38",
    panel: "Diabetic Monitoring",
    molecularFormula: "C28H23N4O4",
    molecularWeightDaltons: 621.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2400,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1668",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_669",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 39",
    panel: "Diabetic Monitoring",
    molecularFormula: "C29H24N5O5",
    molecularWeightDaltons: 633.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2450,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1669",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_670",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 40",
    panel: "Diabetic Monitoring",
    molecularFormula: "C10H25N1O6",
    molecularWeightDaltons: 646.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2500,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1670",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_671",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 41",
    panel: "Diabetic Monitoring",
    molecularFormula: "C11H26N2O7",
    molecularWeightDaltons: 658.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2550,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1671",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_672",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 42",
    panel: "Diabetic Monitoring",
    molecularFormula: "C12H27N3O2",
    molecularWeightDaltons: 670.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2600,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1672",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_673",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 43",
    panel: "Diabetic Monitoring",
    molecularFormula: "C13H28N4O3",
    molecularWeightDaltons: 683.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2650,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1673",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_674",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 44",
    panel: "Diabetic Monitoring",
    molecularFormula: "C14H29N5O4",
    molecularWeightDaltons: 695.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2700,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1674",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_675",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 45",
    panel: "Diabetic Monitoring",
    molecularFormula: "C15H30N1O5",
    molecularWeightDaltons: 708.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 2750,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1675",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_676",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 46",
    panel: "Diabetic Monitoring",
    molecularFormula: "C16H31N2O6",
    molecularWeightDaltons: 720.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 2800,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 36,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1676",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_677",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 47",
    panel: "Diabetic Monitoring",
    molecularFormula: "C17H32N3O7",
    molecularWeightDaltons: 732.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 2850,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 37,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1677",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_678",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 48",
    panel: "Diabetic Monitoring",
    molecularFormula: "C18H33N4O2",
    molecularWeightDaltons: 745.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 2900,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 38,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1678",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_679",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 49",
    panel: "Diabetic Monitoring",
    molecularFormula: "C19H34N5O3",
    molecularWeightDaltons: 757.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 2950,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 39,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1679",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_680",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 50",
    panel: "Diabetic Monitoring",
    molecularFormula: "C20H35N1O4",
    molecularWeightDaltons: 770.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3000,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 15,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1680",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_681",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 51",
    panel: "Diabetic Monitoring",
    molecularFormula: "C21H36N2O5",
    molecularWeightDaltons: 782.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3050,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 16,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1681",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_682",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 52",
    panel: "Diabetic Monitoring",
    molecularFormula: "C22H37N3O6",
    molecularWeightDaltons: 794.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3100,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 17,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1682",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_683",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 53",
    panel: "Diabetic Monitoring",
    molecularFormula: "C23H38N4O7",
    molecularWeightDaltons: 807.20,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3150,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 18,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1683",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_684",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 54",
    panel: "Diabetic Monitoring",
    molecularFormula: "C24H39N5O2",
    molecularWeightDaltons: 819.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3200,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 19,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1684",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_685",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 55",
    panel: "Diabetic Monitoring",
    molecularFormula: "C25H40N1O3",
    molecularWeightDaltons: 832.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3250,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 20,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1685",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_686",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 56",
    panel: "Diabetic Monitoring",
    molecularFormula: "C26H41N2O4",
    molecularWeightDaltons: 844.40,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3300,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 21,
      maxAbsoluteDelta: 16.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1686",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_687",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 57",
    panel: "Diabetic Monitoring",
    molecularFormula: "C27H42N3O5",
    molecularWeightDaltons: 856.80,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3350,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 22,
      maxAbsoluteDelta: 17.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1687",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_688",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 58",
    panel: "Diabetic Monitoring",
    molecularFormula: "C28H43N4O6",
    molecularWeightDaltons: 869.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3400,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 23,
      maxAbsoluteDelta: 18.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1688",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_689",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 59",
    panel: "Diabetic Monitoring",
    molecularFormula: "C29H44N5O7",
    molecularWeightDaltons: 881.60,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3450,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 24,
      maxAbsoluteDelta: 19.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1689",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_690",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 60",
    panel: "Diabetic Monitoring",
    molecularFormula: "C10H15N1O2",
    molecularWeightDaltons: 894.00,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3500,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 25,
      maxAbsoluteDelta: 5.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1690",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_691",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 61",
    panel: "Diabetic Monitoring",
    molecularFormula: "C11H16N2O3",
    molecularWeightDaltons: 906.40,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.0650,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3550,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 26,
      maxAbsoluteDelta: 6.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1691",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_692",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 62",
    panel: "Diabetic Monitoring",
    molecularFormula: "C12H17N3O4",
    molecularWeightDaltons: 918.80,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.1200,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3600,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 27,
      maxAbsoluteDelta: 7.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1692",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_693",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 63",
    panel: "Diabetic Monitoring",
    molecularFormula: "C13H18N4O5",
    molecularWeightDaltons: 931.20,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.1750,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3650,
      precisionCVPercent: 3.3
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 28,
      maxAbsoluteDelta: 8.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1693",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_694",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 64",
    panel: "Diabetic Monitoring",
    molecularFormula: "C14H19N5O6",
    molecularWeightDaltons: 943.60,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.2300,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3700,
      precisionCVPercent: 1.2
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 29,
      maxAbsoluteDelta: 9.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1694",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_695",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 65",
    panel: "Diabetic Monitoring",
    molecularFormula: "C15H20N1O7",
    molecularWeightDaltons: 956.00,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.2850,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 3750,
      precisionCVPercent: 1.5
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 30,
      maxAbsoluteDelta: 10.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1695",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_696",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 66",
    panel: "Diabetic Monitoring",
    molecularFormula: "C16H21N2O2",
    molecularWeightDaltons: 968.40,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.3400,
      limitOfDetection: 0.015,
      limitOfQuantitation: 0.06,
      linearityRangeUpper: 3800,
      precisionCVPercent: 1.8
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 31,
      maxAbsoluteDelta: 11.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1696",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
  {
    biomarkerId: "BM_697",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 67",
    panel: "Diabetic Monitoring",
    molecularFormula: "C17H22N3O3",
    molecularWeightDaltons: 980.80,
    measurementSpecifications: {
      primaryUnit: "IU/L",
      siUnit: "kIU/L",
      conversionFactor: 0.3950,
      limitOfDetection: 0.020,
      limitOfQuantitation: 0.07,
      linearityRangeUpper: 3850,
      precisionCVPercent: 2.1
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 32,
      maxAbsoluteDelta: 12.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1697",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.80
    }
  },
  {
    biomarkerId: "BM_698",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 68",
    panel: "Diabetic Monitoring",
    molecularFormula: "C18H23N4O4",
    molecularWeightDaltons: 993.20,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.4500,
      limitOfDetection: 0.025,
      limitOfQuantitation: 0.08,
      linearityRangeUpper: 3900,
      precisionCVPercent: 2.4
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 33,
      maxAbsoluteDelta: 13.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1698",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.50
    }
  },
  {
    biomarkerId: "BM_699",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 69",
    panel: "Diabetic Monitoring",
    molecularFormula: "C19H24N5O5",
    molecularWeightDaltons: 1005.60,
    measurementSpecifications: {
      primaryUnit: "ng/mL",
      siUnit: "ug/L",
      conversionFactor: 0.5050,
      limitOfDetection: 0.030,
      limitOfQuantitation: 0.09,
      linearityRangeUpper: 3950,
      precisionCVPercent: 2.7
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 34,
      maxAbsoluteDelta: 14.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1699",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.60
    }
  },
  {
    biomarkerId: "BM_700",
    biomarkerName: "Diabetic Monitoring Analyte Reference Standard 70",
    panel: "Diabetic Monitoring",
    molecularFormula: "C20H25N1O6",
    molecularWeightDaltons: 1018.00,
    measurementSpecifications: {
      primaryUnit: "mg/dL",
      siUnit: "mmol/L",
      conversionFactor: 0.0100,
      limitOfDetection: 0.010,
      limitOfQuantitation: 0.05,
      linearityRangeUpper: 4000,
      precisionCVPercent: 3.0
    },
    specimenStability: {
      roomTemperatureHours: 8,
      refrigerated4DegCDays: 7,
      frozenMinus20DegCMonths: 6,
      freezeThawCyclesMax: 2
    },
    deltaCheckRules: {
      maxPercentChange24Hours: 35,
      maxAbsoluteDelta: 15.0,
      flagAction: "HOLD_RESULT_FOR_MANUAL_PATHOLOGIST_REVIEW"
    },
    analyzerCalibration: {
      calibratorLotNumber: "LOT-2026-1700",
      calibrationFrequencyDays: 14,
      acceptableQCTargetSD: 0.70
    }
  },
];

function getBiomarkerById(id) { return BIOMARKER_STANDARDS.find(b => b.biomarkerId === id); }
function validateDeltaCheck(biomarkerId, previousValue, currentValue, hoursDiff) {
  const bm = getBiomarkerById(biomarkerId);
  if (!bm || !previousValue || !currentValue) return { pass: true, alert: null };
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);
  if (isNaN(prev) || isNaN(curr) || prev === 0) return { pass: true, alert: null };
  const absDiff = Math.abs(curr - prev);
  const pctChange = (absDiff / prev) * 100;
  if (hoursDiff <= 24 && pctChange > bm.deltaCheckRules.maxPercentChange24Hours) {
    return { pass: false, percentChange: pctChange, threshold: bm.deltaCheckRules.maxPercentChange24Hours, action: bm.deltaCheckRules.flagAction };
  }
  return { pass: true, percentChange: pctChange };
}

module.exports = { BIOMARKER_STANDARDS, getBiomarkerById, validateDeltaCheck };