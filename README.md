# LABCARE — Laboratory Management System

A full-scale, connected healthcare laboratory management platform engineered for high-throughput clinical diagnostic facilities.

$$\text{Patient/Doctor Orders Test} \longrightarrow \text{Phlebotomy Specimen Collection} \longrightarrow \text{Central Lab Processing} \longrightarrow \text{Result Entry \& Verification} \longrightarrow \text{Official Report Release}$$

---

## 🚀 System Architecture & Port Mapping

- **Frontend Application URL**: 👉 **[http://localhost:5175](http://localhost:5175)**
- **Backend REST API**: `http://127.0.0.1:6005`

### 🔑 Development Demo Credentials

| Role Portal | Demo Email | Demo Password | Core System Authority & Responsibilities |
| :--- | :--- | :--- | :--- |
| **Patient Portal** | `patient@labcare.demo` | `Patient@12345` | Browse test catalog, book appointments (Lab Visit vs Home Collection), track specimen status, view and download official PDF diagnostic reports, and settle bills. |
| **Doctor Portal** | `doctor@labcare.demo` | `Doctor@12345` | Order diagnostic tests with priority (Normal, Urgent, Critical Stat), review patient history, inspect verified lab reports, and acknowledge critical abnormal values. |
| **Lab Technician** | `technician@labcare.demo` | `Technician@12345` | Laboratory operational workflow board, barcode generation, specimen receiving/rejection, multi-parameter result entry, and official report release. |
| **Administrator** | `admin@labcare.demo` | `Admin@12345` | Executive telemetry, revenue metrics, staff & patient directory, test catalog management, inventory supply control, and immutable audit logs. |

---

## 📋 Comprehensive Laboratory Workflow

1. **Accessioning & Test Ordering**:
   - Patient or Physician selects from 40+ tests across 8 clinical categories (Hematology, Biochemistry, Immunology, Microbiology, Hormones, etc.).
   - Specifies collection mode: **Central Lab Visit** or **Home Phlebotomy Collection**.
2. **Specimen Phlebotomy & Barcoding**:
   - Phlebotomist collects specimen, assigns unique barcode (`SMP-2026-XXXX`), and logs container type (EDTA lavender, SST gold, etc.).
3. **Analytical Testing & Automatic Flagging**:
   - Technologist enters parameter measurements. System evaluates measured values against biological reference intervals and assigns flags (`NORMAL`, `LOW`, `HIGH`, `CRITICAL`).
4. **Clinical Verification & Report Release**:
   - Verifying physician/pathologist inspects parameters and digitally approves release.
   - Generates official laboratory report with electronic signatures and printable PDF formatting.

---

## 🛠️ How to Run Locally

### 1. Start the Backend API Server
```bash
cd backend
npm install
npm start
```
*Backend API server will run on `http://127.0.0.1:6005`*

### 2. Start the Frontend Application
```bash
cd frontend
npm install
npm run dev
```
*Frontend application will run on `http://127.0.0.1:5175`*

---

## 🧪 Automated End-to-End Verification

Run the complete clinical integration test:
```bash
cd backend
node test_labcare_workflow.js
```
