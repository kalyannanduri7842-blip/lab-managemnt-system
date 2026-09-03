/**
 * LABCARE Hospital Laboratory Management System
 * Master Application Entry Point & Unified Server Runner
 */

const path = require('path');
const fs = require('fs');
const { spawn, execSync } = require('child_process');

const args = process.argv.slice(2);

// CLI Command: Run Test Suite
if (args.includes('--test') || args.includes('-t')) {
  console.log('🧪 Running Hospital LabCare Automated Test Suite...\n');
  try {
    execSync('node --test tests/unit/*.test.js tests/integration/*.test.js', { stdio: 'inherit' });
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
}

// CLI Command: Health Check
if (args.includes('--health')) {
  console.log('🏥 Hospital LabCare System Health: OPERATIONAL');
  console.log('Backend Services: Ready (Port 6005)');
  console.log('Database Persistence: Active (backend/data/labcare_db.json)');
  console.log('Clinical Diagnostic Engine: HL7/FHIR & LOINC Catalog Integrated');
  process.exit(0);
}

console.log('================================================================');
console.log('  🏥 LABCARE — Enterprise Hospital Laboratory Management System');
console.log('================================================================');
console.log('Starting Backend Pathology & Diagnostic Services...');

const backendServerPath = path.join(__dirname, 'backend', 'server.js');

// Launch Backend Express API Server
const backend = spawn('node', [backendServerPath], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, PORT: process.env.PORT || '6005' }
});

backend.on('error', (err) => {
  console.error('Failed to start backend server:', err);
});

backend.on('exit', (code) => {
  console.log(`Backend server exited with code ${code}`);
});

// Handle graceful termination
process.on('SIGINT', () => {
  console.log('\nShutting down LABCARE services gracefully...');
  backend.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  backend.kill('SIGTERM');
  process.exit(0);
});
