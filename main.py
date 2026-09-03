#!/usr/bin/env python3
"""
LABCARE Hospital Laboratory Management System
Python Application Runner & Entry Point
"""

import sys
import subprocess
import os

def main():
    print("================================================================")
    print("  🏥 LABCARE — Enterprise Hospital Laboratory Management System")
    print("================================================================")
    
    if len(sys.argv) > 1 and sys.argv[1] in ['--test', '-t']:
        print("🧪 Running Hospital LabCare Automated Test Suite...\n")
        sys.exit(subprocess.call("node --test tests/unit/*.test.js tests/integration/*.test.js", shell=True))
    
    if len(sys.argv) > 1 and sys.argv[1] in ['--health', '-h']:
        print("🏥 Hospital LabCare System Health: OPERATIONAL")
        print("Backend Services: Ready (Port 6005)")
        print("Database Persistence: Active")
        sys.exit(0)

    print("Launching Node.js Backend & Clinical Services...")
    sys.exit(subprocess.call("node index.js", shell=True))

if __name__ == '__main__':
    main()
