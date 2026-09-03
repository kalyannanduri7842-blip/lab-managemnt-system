# LABCARE — Database Schema & Data Dictionary

The LABCARE database architecture contains full relational entities for clinical laboratory operations:

### 1. `users`
- `id` (String, Primary Key)
- `fullName` (String)
- `email` (String, Unique)
- `password` (String, Hashed / Development credential)
- `role` (Enum: `ADMIN`, `DOCTOR`, `LAB_TECHNICIAN`, `PATIENT`)
- `phone` (String)
- `department`, `specialization`, `licenseId`, `employeeId`, `shift`
- `dateOfBirth`, `gender`, `bloodGroup`, `address`, `city`, `state`, `postalCode`, `emergencyContact`
- `status` (Enum: `ACTIVE`, `INACTIVE`)

### 2. `tests` & `categories`
- `id` (String, Primary Key)
- `code` (String, Unique Accession Code)
- `name` (String)
- `categoryId` (Foreign Key $\to$ `categories.id`)
- `sampleType` (String)
- `preparation` (String)
- `turnaroundHours` (Integer)
- `price` (Float)
- `parameters` (Array of objects: `{ name, unit, refMin, refMax, critMin, critMax }`)

### 3. `testRequests` (Accessions)
- `id` (String, Primary Key)
- `accessionNumber` (String, Unique)
- `patientId` (Foreign Key $\to$ `users.id`)
- `doctorId` (Foreign Key $\to$ `users.id`, Nullable)
- `testId` (Foreign Key $\to$ `tests.id`)
- `priority` (Enum: `NORMAL`, `URGENT`, `CRITICAL`)
- `collectionType` (Enum: `LAB_VISIT`, `HOME_COLLECTION`)
- `status` (Enum: `REQUESTED`, `SAMPLE_COLLECTION_PENDING`, `SAMPLE_COLLECTED`, `SAMPLE_RECEIVED`, `PROCESSING`, `RESULT_ENTERED`, `RESULT_VERIFICATION`, `REPORT_RELEASED`, `REJECTED`, `CANCELLED`)

### 4. `samples`
- `id` (String, Primary Key)
- `sampleBarcode` (String, Unique)
- `requestId` (Foreign Key $\to$ `testRequests.id`)
- `sampleType` (String)
- `containerType` (String)
- `collectedAt`, `collectedBy`
- `receivedAt`, `receivedBy`
- `status` (Enum: `PENDING`, `COLLECTED`, `RECEIVED`, `PROCESSING`, `COMPLETED`, `REJECTED`)

### 5. `results` & `reports`
- `id` (String, Primary Key)
- `reportNumber` (String, Unique)
- `requestId` (Foreign Key $\to$ `testRequests.id`)
- `resultData` (Array of parameters with measurements, units, reference intervals, and flags)
- `hasCritical` (Boolean)
- `verifiedBy`, `technologist`, `reportedAt`

### 6. `invoices` & `inventory`
- Itemized diagnostic service charges, collection fees, and settlement transactions.
- Phlebotomy tubes, vacutainers, reagents, and stock movement logs.
