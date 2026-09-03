# LABCARE — Setup & Installation Guide

## System Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

## Step-by-Step Setup

### Step 1: Clone or Navigate to Project
```bash
cd "C:\Users\kalya\Downloads\final-git-tasks\hospilaty-lab-management"
```

### Step 2: Configure and Start Backend API
```bash
cd backend
npm install
node server.js
```
The backend initializes the persistent database at `backend/data/labcare_db.json` and begins serving on `http://127.0.0.1:6005`.

### Step 3: Configure and Start Frontend Application
In a separate terminal window:
```bash
cd frontend
npm install
npm run dev
```
The frontend Vite server opens on `http://localhost:5175`.

---

## Production Build Verification
To verify the production build:
```bash
cd frontend
npm run build
```
This produces an optimized production bundle in `frontend/dist/`.
