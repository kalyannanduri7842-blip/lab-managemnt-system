# LABCARE — REST API Documentation

### Base URL: `http://127.0.0.1:6005/api`

| Method | Endpoint | Access | Purpose |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Public | Sign in as Patient, Doctor, Technician, or Admin |
| `POST` | `/auth/register` | Public | Patient self-registration |
| `GET` | `/auth/me` | Authenticated | Current user profile |
| `GET` | `/tests` | Public / Auth | List diagnostic tests (filter by category, search) |
| `POST` | `/tests` | Admin | Create new diagnostic test |
| `GET` | `/categories` | Public / Auth | List test categories |
| `GET` | `/requests` | Authenticated | Accession requests (Role-isolated) |
| `POST` | `/requests` | Patient / Doctor | Order/Book laboratory test |
| `GET` | `/samples` | Tech / Admin | List specimen tracking records |
| `POST` | `/samples/collect` | Tech / Admin | Log sample collection & assign barcode |
| `POST` | `/samples/receive` | Tech / Admin | Log sample receipt in central lab |
| `POST` | `/samples/start-processing`| Tech / Admin | Begin analyzer testing run |
| `POST` | `/samples/reject` | Tech / Admin | Reject specimen with clinical reason |
| `GET` | `/results` | Auth | List test results |
| `POST` | `/results` | Tech / Admin | Enter parameter results with auto-flags |
| `POST` | `/results/:id/verify` | Doctor / Tech | Clinically verify result |
| `GET` | `/reports` | Auth | List official laboratory reports |
| `GET` | `/reports/:id` | Auth | Get single report detail |
| `POST` | `/reports/release` | Tech / Doctor | Release final diagnostic report |
| `GET` | `/invoices` | Auth | List diagnostic billing invoices |
| `POST` | `/payments/settle` | Auth | Process invoice payment |
| `GET` | `/inventory` | Tech / Admin | Reagent & supply stock |
| `POST` | `/inventory/:id/adjust` | Tech / Admin | Stock movement adjustment |
| `GET` | `/analytics` | Auth | Role-specific clinical telemetry |
| `GET` | `/notifications` | Auth | User alerts and notifications |
| `GET` | `/audit-logs` | Admin | Clinical system audit trail |
| `GET` | `/health` | Public | System status health check |
