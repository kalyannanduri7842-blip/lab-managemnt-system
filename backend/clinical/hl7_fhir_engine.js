/**
 * LABCARE HOSPITAL MANAGEMENT SYSTEM — HL7 v2.5.1 & FHIR R4 INTEROPERABILITY ENGINE
 * Clinical Message Formatting, Parser, and Hospital EMR Bridge
 */

class HL7Engine {
  static buildMSH(sendingApp = "LABCARE_LIMS", facility = "CENTRAL_HOSPITAL") {
    const now = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
    const msgControlId = "MSG" + Date.now();
    return `MSH|^~\&|${sendingApp}|${facility}|HOSPITAL_HIS|MAIN_FACILITY|${now}||ORU^R01^ORU_R01|${msgControlId}|P|2.5.1`;
  }

  static buildPID(patient) {
    return `PID|1||${patient.id || "P1001"}||${patient.name || "DOE^JOHN"}||${patient.dob || "19850101"}|${patient.gender === "Female" ? "F" : "M"}|||${patient.address || "Main Medical Wing"}||${patient.phone || "555-0100"}`;
  }

  static buildOBR(orderId, universalService) {
    const now = new Date().toISOString().replace(/[-:T]/g, "").slice(0, 14);
    return `OBR|1|${orderId}|${orderId}|${universalService}^${universalService}^LN|||${now}|||||||||||||||||F`;
  }

  static buildOBX(setNumber, valueType, observationId, value, units, refRange, abnormalFlag = "N") {
    return `OBX|${setNumber}|${valueType}|${observationId}||${value}|${units}|${refRange}|${abnormalFlag}|||F`;
  }

  static generateLabReportHL7(patient, order, observations) {
    const segments = [
      this.buildMSH(),
      this.buildPID(patient),
      this.buildOBR(order.id, order.testName || "Comprehensive Clinical Lab Panel")
    ];
    observations.forEach((obs, idx) => {
      segments.push(this.buildOBX(idx + 1, "NM", `${obs.code}^${obs.name}`, obs.value, obs.units, obs.refRange, obs.flag || "N"));
    });
    return segments.join("\r");
  }
}

class FHIRDiagnosticReportConverter {
  static toFHIR(patient, order, results) {
    return {
      resourceType: "DiagnosticReport",
      id: `labcare-report-${order.id}`,
      status: "final",
      category: [
        { coding: [{ system: "http://terminology.hl7.org/CodeSystem/v2-0074", code: "LAB", display: "Laboratory" }] }
      ],
      code: {
        coding: [{ system: "http://loinc.org", code: order.loincCode || "58410-2", display: order.testName }]
      },
      subject: {
        reference: `Patient/${patient.id}`,
        display: patient.name
      },
      effectiveDateTime: new Date().toISOString(),
      issued: new Date().toISOString(),
      performer: [
        { reference: "Practitioner/LABPATH-01", display: "LabCare Chief Pathologist" }
      ],
      result: results.map((r, i) => ({
        reference: `Observation/obs-${order.id}-${i + 1}`,
        display: `${r.name}: ${r.value} ${r.units} (${r.flag || "Normal"})`
      }))
    };
  }
}

module.exports = { HL7Engine, FHIRDiagnosticReportConverter };