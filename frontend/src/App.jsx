import React, { useState, useEffect, useRef } from 'react';
import {
  Activity,
  Beaker,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  Search,
  Plus,
  Bell,
  Check,
  ChevronRight,
  LogOut,
  Building2,
  Phone,
  Mail,
  RefreshCw,
  DollarSign,
  TrendingUp,
  BarChart3,
  Eye,
  X,
  Lock,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Layers,
  Box,
  MapPin,
  CheckCheck,
  CreditCard,
  FileCheck,
  Navigation,
  FileText,
  Stethoscope,
  FlaskConical,
  ShieldCheck,
  User,
  Users,
  Printer,
  Download,
  AlertCircle,
  FileSpreadsheet,
  Settings,
  HeartPulse,
  Syringe,
  Microscope,
  Dna,
  TestTube2,
  FileSignature,
  Crosshair,
  Award,
  ChevronDown,
  Menu,
  SlidersHorizontal,
  Home,
  FileBox,
  ClipboardCheck,
  PieChart,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';

// -------------------------------------------------------------
// 1. HUMANIZED LABCARE BRAND LOGO COMPONENT
// -------------------------------------------------------------
function LabcareLogo({ size = 'default', collapsed = false, light = false }) {
  const isLarge = size === 'large';
  return (
    <div className="flex items-center space-x-3 select-none">
      {/* Humanized Vector Medical Laboratory Emblem */}
      <div className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105 shrink-0 ${
        isLarge ? 'w-12 h-12' : 'w-10 h-10'
      } ${light ? 'bg-white text-tealMed-700 shadow-md' : 'bg-gradient-to-br from-tealMed-600 via-tealMed-700 to-tealMed-800 text-white shadow-sm'}`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={isLarge ? 'w-7 h-7' : 'w-6 h-6'}>
          <path d="M20 8H28V20H40V28H28V40H20V28H8V20H20V8Z" fill="currentColor" fillOpacity="0.2" />
          <path d="M20 8H28V20H40V28H28V40H20V28H8V20H20V8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
          <path d="M16 16C18 20 30 28 32 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M32 16C30 20 18 28 16 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
      </div>

      {!collapsed && (
        <div>
          <div className="flex items-center space-x-2">
            <span className={`font-black tracking-tight ${isLarge ? 'text-2xl' : 'text-lg'} ${light ? 'text-white' : 'text-clinical-900'}`}>
              LAB<span className="text-tealMed-600 font-extrabold">CARE</span>
            </span>
            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${
              light ? 'bg-tealMed-900/60 border-tealMed-400 text-tealMed-200' : 'bg-tealMed-50 border-tealMed-200 text-tealMed-700'
            }`}>
              CLIA • CAP
            </span>
          </div>
          <p className={`text-[10px] font-medium tracking-wide ${light ? 'text-tealMed-100' : 'text-clinical-500'}`}>
            Clinical Laboratory & Diagnostics
          </p>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 2. CALM AMBIENT LABORATORY INTERACTIVE CANVAS BACKGROUND
// -------------------------------------------------------------
function LabAmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const nodeCount = Math.min(30, Math.floor(width / 55));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.5 + 1.5,
      alpha: Math.random() * 0.25 + 0.1
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(13, 148, 136, ${0.08 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 100) {
          node.x += (mdx / mdist) * 0.8;
          node.y += (mdy / mdist) * 0.8;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 148, 136, ${node.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70 no-print"
    />
  );
}

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedLoginRole, setSelectedLoginRole] = useState('PATIENT'); // 'ADMIN' | 'DOCTOR' | 'STAFF' | 'PATIENT'
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem('labcare_token') || '');
  const [loginEmail, setLoginEmail] = useState('patient@labcare.demo');
  const [loginPassword, setLoginPassword] = useState('Patient@12345');
  const [authLoading, setAuthLoading] = useState(false);

  // Sidebar Layout State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Register Form State
  const [registerFormData, setRegisterFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    dateOfBirth: '1990-05-15',
    gender: 'Female',
    bloodGroup: 'O+',
    address: '',
    city: 'Springfield',
    state: 'OR',
    postalCode: '97477',
    emergencyContact: ''
  });

  // Active Workspace Tab
  const [activeTab, setActiveTab] = useState('dashboard');

  // System Data
  const [tests, setTests] = useState([]);
  const [categories, setCategories] = useState([]);
  const [requests, setRequests] = useState([]);
  const [samples, setSamples] = useState([]);
  const [results, setResults] = useState([]);
  const [reports, setReports] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [inventoryMovements, setInventoryMovements] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [technicians, setTechnicians] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [unreadNotifsCount, setUnreadNotifsCount] = useState(0);
  const [auditLogs, setAuditLogs] = useState([]);
  const [analytics, setAnalytics] = useState(null);
  const [loadingData, setLoadingData] = useState(false);

  // Filters & Search
  const [requestStatusFilter, setRequestStatusFilter] = useState('ALL');
  const [requestPriorityFilter, setRequestPriorityFilter] = useState('ALL');
  const [requestSearch, setRequestSearch] = useState('');
  const [testCategoryFilter, setTestCategoryFilter] = useState('ALL');
  const [testSearch, setTestSearch] = useState('');
  const [patientSearch, setPatientSearch] = useState('');

  // Modals
  const [showBookTestModal, setShowBookTestModal] = useState(false);
  const [bookFormData, setBookFormData] = useState({
    testId: '',
    patientId: '',
    collectionType: 'LAB_VISIT',
    scheduledDate: '',
    scheduledTime: '09:00 AM',
    priority: 'NORMAL',
    clinicalNotes: ''
  });
  const [submittingBooking, setSubmittingBooking] = useState(false);

  const [showCollectModal, setShowCollectModal] = useState(false);
  const [selectedRequestForCollect, setSelectedRequestForCollect] = useState(null);
  const [collectContainerType, setCollectContainerType] = useState('Primary Vacutainer Specimen Tube');
  const [collectNotes, setCollectNotes] = useState('');
  const [processingCollect, setProcessingCollect] = useState(false);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedSampleForReject, setSelectedSampleForReject] = useState(null);
  const [rejectionReason, setRejectionReason] = useState('Hemolyzed specimen');
  const [processingReject, setProcessingReject] = useState(false);

  const [showResultEntryModal, setShowResultEntryModal] = useState(false);
  const [selectedRequestForResult, setSelectedRequestForResult] = useState(null);
  const [resultParamInputs, setResultParamInputs] = useState([]);
  const [clinicalImpressionInput, setClinicalImpressionInput] = useState('');
  const [savingResults, setSavingResults] = useState(false);

  const [viewingReport, setViewingReport] = useState(null);

  const [showAddTestModal, setShowAddTestModal] = useState(false);
  const [newTestData, setNewTestData] = useState({
    name: '',
    code: '',
    categoryId: 'cat-hem',
    description: '',
    sampleType: 'Whole Blood (EDTA Lavender Top)',
    preparation: 'Routine preparation.',
    turnaroundHours: 6,
    price: 40.00
  });

  const [showAddStaffModal, setShowAddStaffModal] = useState(false);
  const [newStaffData, setNewStaffData] = useState({
    fullName: '',
    email: '',
    role: 'DOCTOR',
    phone: '',
    department: 'General Medicine',
    specialization: 'Internal Medicine',
    licenseId: 'MED-LIC-9901'
  });

  const [showNotifsDropdown, setShowNotifsDropdown] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Mouse Hover Spotlight Tracking Handler
  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const addToast = (title, message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4500);
  };

  // API Helper
  const apiRequest = async (path, method = 'GET', body = null) => {
    try {
      const headers = { 'Content-Type': 'application/json' };
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }
      const res = await fetch(`/api${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Request failed');
      }
      return data;
    } catch (err) {
      console.warn(`API Error [${method} ${path}]:`, err.message);
      throw err;
    }
  };

  // Data Fetching
  const fetchAllData = async () => {
    if (!currentUser) return;
    setLoadingData(true);
    try {
      const [tRes, cRes, rRes, sRes, resRes, repRes, invRes, aRes, nRes] = await Promise.all([
        apiRequest('/tests'),
        apiRequest('/categories'),
        apiRequest('/requests'),
        apiRequest('/samples'),
        apiRequest('/results'),
        apiRequest('/reports'),
        apiRequest('/invoices'),
        apiRequest('/analytics'),
        apiRequest('/notifications')
      ]);

      setTests(tRes.tests || []);
      setCategories(cRes.categories || []);
      setRequests(rRes.requests || []);
      setSamples(sRes.samples || []);
      setResults(resRes.results || []);
      setReports(repRes.reports || []);
      setInvoices(invRes.invoices || []);
      setAnalytics(aRes);
      setNotifications(nRes.notifications || []);
      setUnreadNotifsCount(nRes.unreadCount || 0);

      if (currentUser.role === 'ADMIN' || currentUser.role === 'LAB_TECHNICIAN') {
        const iRes = await apiRequest('/inventory');
        setInventory(iRes.inventory || []);
        setInventoryMovements(iRes.movements || []);
      }

      if (currentUser.role === 'ADMIN' || currentUser.role === 'DOCTOR') {
        const [patRes, docRes, techRes] = await Promise.all([
          apiRequest('/patients'),
          apiRequest('/doctors'),
          apiRequest('/technicians')
        ]);
        setPatients(patRes.patients || []);
        setDoctors(docRes.doctors || []);
        setTechnicians(techRes.technicians || []);
      }

      if (currentUser.role === 'ADMIN') {
        const audRes = await apiRequest('/audit-logs');
        setAuditLogs(audRes.logs || []);
      }
    } catch (err) {
      console.warn('Sync error:', err);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (authToken && !currentUser) {
      apiRequest('/auth/me')
        .then(res => {
          setCurrentUser(res.user);
          setCurrentView('app');
        })
        .catch(() => {
          localStorage.removeItem('labcare_token');
          setAuthToken('');
          setCurrentUser(null);
          setCurrentView('landing');
        });
    }
  }, [authToken]);

  useEffect(() => {
    if (currentUser) {
      fetchAllData();
    }
  }, [currentUser]);

  // Auth Handlers
  const handlePerformLogin = async (e, forcedRole, emailToUse, passToUse) => {
    if (e) e.preventDefault();
    setAuthLoading(true);
    try {
      const res = await apiRequest('/auth/login', 'POST', {
        email: emailToUse || loginEmail,
        password: passToUse || loginPassword,
        role: forcedRole
      });

      localStorage.setItem('labcare_token', res.token);
      setAuthToken(res.token);
      setCurrentUser(res.user);
      setCurrentView('app');
      setActiveTab('dashboard');
      addToast('Authenticated', `Welcome back, ${res.user.fullName}!`, 'success');
    } catch (err) {
      addToast('Authentication Failed', err.message, 'error');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegisterPatient = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    try {
      const res = await apiRequest('/auth/register', 'POST', registerFormData);
      localStorage.setItem('labcare_token', res.token);
      setAuthToken(res.token);
      setCurrentUser(res.user);
      setCurrentView('app');
      setActiveTab('dashboard');
      addToast('Account Created', `Welcome to LABCARE, ${res.user.fullName}!`, 'success');
    } catch (err) {
      addToast('Registration Error', err.message, 'error');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('labcare_token');
    setAuthToken('');
    setCurrentUser(null);
    setCurrentView('landing');
    setActiveTab('dashboard');
    addToast('Signed Out', 'You have been safely signed out.', 'info');
  };

  // Test Booking
  const handleOpenBookModal = (test = null, patient = null) => {
    const selectedTest = test || tests[0];
    setBookFormData({
      testId: selectedTest ? selectedTest.id : '',
      patientId: patient ? patient.id : (currentUser?.role === 'PATIENT' ? currentUser.id : (patients[0]?.id || '')),
      collectionType: 'LAB_VISIT',
      scheduledDate: new Date().toISOString().split('T')[0],
      scheduledTime: '09:00 AM',
      priority: 'NORMAL',
      clinicalNotes: ''
    });
    setShowBookTestModal(true);
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (!bookFormData.testId) return addToast('Error', 'Please select a laboratory test.', 'error');

    setSubmittingBooking(true);
    try {
      const res = await apiRequest('/requests', 'POST', bookFormData);
      addToast('Test Booked Successfully', `Accession ${res.request.accessionNumber} created.`, 'success');
      setShowBookTestModal(false);
      fetchAllData();
    } catch (err) {
      addToast('Booking Failed', err.message, 'error');
    } finally {
      setSubmittingBooking(false);
    }
  };

  // Specimen Workflow
  const handleOpenCollectModal = (req) => {
    setSelectedRequestForCollect(req);
    const test = tests.find(t => t.id === req.testId);
    setCollectContainerType(test?.sampleType || 'Primary Vacutainer Specimen Tube');
    setCollectNotes('Specimen collected via standard sterile venipuncture.');
    setShowCollectModal(true);
  };

  const handleExecuteCollect = async (e) => {
    e.preventDefault();
    if (!selectedRequestForCollect) return;

    setProcessingCollect(true);
    try {
      const res = await apiRequest('/samples/collect', 'POST', {
        requestId: selectedRequestForCollect.id,
        containerType: collectContainerType,
        notes: collectNotes
      });
      addToast('Specimen Collected', `Sample barcode ${res.sample.sampleBarcode} assigned.`, 'success');
      setShowCollectModal(false);
      fetchAllData();
    } catch (err) {
      addToast('Collection Failed', err.message, 'error');
    } finally {
      setProcessingCollect(false);
    }
  };

  const handleReceiveSample = async (sample) => {
    try {
      await apiRequest('/samples/receive', 'POST', { sampleId: sample.id });
      addToast('Specimen Received', `Sample ${sample.sampleBarcode} logged in central lab.`, 'success');
      fetchAllData();
    } catch (err) {
      addToast('Receipt Error', err.message, 'error');
    }
  };

  const handleStartProcessing = async (sample) => {
    try {
      await apiRequest('/samples/start-processing', 'POST', { sampleId: sample.id });
      addToast('Processing Started', `Sample ${sample.sampleBarcode} loaded in analyzer.`, 'info');
      fetchAllData();
    } catch (err) {
      addToast('Processing Error', err.message, 'error');
    }
  };

  const handleOpenRejectModal = (sample) => {
    setSelectedSampleForReject(sample);
    setRejectionReason('Hemolyzed specimen or insufficient volume');
    setShowRejectModal(true);
  };

  const handleExecuteReject = async (e) => {
    e.preventDefault();
    if (!selectedSampleForReject) return;

    setProcessingReject(true);
    try {
      await apiRequest('/samples/reject', 'POST', {
        sampleId: selectedSampleForReject.id,
        rejectionReason
      });
      addToast('Specimen Rejected', 'Rejection logged and patient notified.', 'info');
      setShowRejectModal(false);
      fetchAllData();
    } catch (err) {
      addToast('Rejection Error', err.message, 'error');
    } finally {
      setProcessingReject(false);
    }
  };

  const handleOpenResultEntry = (req) => {
    setSelectedRequestForResult(req);
    const test = tests.find(t => t.id === req.testId);
    if (test && test.parameters) {
      const initialParams = test.parameters.map(p => ({
        name: p.name,
        value: ((p.refMin + p.refMax) / 2).toFixed(1),
        unit: p.unit,
        refRange: `${p.refMin} - ${p.refMax}`
      }));
      setResultParamInputs(initialParams);
    } else {
      setResultParamInputs([{ name: 'Standard Parameter', value: '1.0', unit: '', refRange: '0.0 - 2.0' }]);
    }
    setClinicalImpressionInput('All parameters measured on calibrated automated analyzer.');
    setShowResultEntryModal(true);
  };

  const handleSaveResults = async (e) => {
    e.preventDefault();
    if (!selectedRequestForResult) return;

    setSavingResults(true);
    try {
      await apiRequest('/results', 'POST', {
        requestId: selectedRequestForResult.id,
        parameters: resultParamInputs,
        clinicalImpression: clinicalImpressionInput
      });
      addToast('Results Recorded', 'Results entered and queued for medical verification.', 'success');
      setShowResultEntryModal(false);
      fetchAllData();
    } catch (err) {
      addToast('Result Entry Failed', err.message, 'error');
    } finally {
      setSavingResults(false);
    }
  };

  const handleReleaseReport = async (requestId) => {
    try {
      const res = await apiRequest('/reports/release', 'POST', {
        requestId,
        summaryRemarks: 'Diagnostic parameters verified. Report released for clinical correlation.'
      });
      addToast('Report Released', `Diagnostic Report ${res.report.reportNumber} released to patient.`, 'success');
      fetchAllData();
    } catch (err) {
      addToast('Release Failed', err.message, 'error');
    }
  };

  const handlePayInvoice = async (invoiceId) => {
    try {
      await apiRequest('/payments/settle', 'POST', {
        invoiceId,
        paymentMethod: 'TEST_CARD_VISA_4242'
      });
      addToast('Payment Confirmed', 'Invoice settled. Receipt generated.', 'success');
      fetchAllData();
    } catch (err) {
      addToast('Payment Failed', err.message, 'error');
    }
  };

  const handleAdjustInventory = async (item, delta, reason) => {
    try {
      await apiRequest(`/inventory/${item.id}/adjust`, 'POST', { delta, reason });
      addToast('Inventory Updated', `${item.name} stock adjusted by ${delta > 0 ? `+${delta}` : delta}.`, 'info');
      fetchAllData();
    } catch (err) {
      addToast('Stock Update Error', err.message, 'error');
    }
  };

  const handleCreateTest = async (e) => {
    e.preventDefault();
    try {
      await apiRequest('/tests', 'POST', newTestData);
      addToast('Test Created', `"${newTestData.name}" added to lab catalog.`, 'success');
      setShowAddTestModal(false);
      setNewTestData({ name: '', code: '', categoryId: 'cat-hem', description: '', sampleType: 'Whole Blood (EDTA Lavender Top)', preparation: 'Routine preparation.', turnaroundHours: 6, price: 40.00 });
      fetchAllData();
    } catch (err) {
      addToast('Creation Failed', err.message, 'error');
    }
  };

  const handleCreateStaff = async (e) => {
    e.preventDefault();
    try {
      await apiRequest('/users', 'POST', newStaffData);
      addToast('Staff Onboarded', `${newStaffData.fullName} added as ${newStaffData.role}.`, 'success');
      setShowAddStaffModal(false);
      fetchAllData();
    } catch (err) {
      addToast('Creation Failed', err.message, 'error');
    }
  };

  const handleMarkNotifRead = async (id) => {
    try {
      await apiRequest(`/notifications/${id}/read`, 'PUT');
      setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
      setUnreadNotifsCount(prev => Math.max(0, prev - 1));
    } catch (e) {}
  };

  const handleMarkAllNotifsRead = async () => {
    try {
      await apiRequest('/notifications/read-all', 'PUT');
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      setUnreadNotifsCount(0);
      addToast('Alerts Cleared', 'All notifications marked as read.', 'info');
    } catch (e) {}
  };

  // Download & Save Official Verified Diagnostic Pathology Report Directly to Laptop
  const handleDownloadReportFile = (report) => {
    if (!report) return;
    try {
      const rowsHtml = (report.resultData || []).map(res => `
        <tr style="${res.flag === 'CRITICAL' ? 'background-color:#ffe4e6;font-weight:bold;' : res.flag !== 'NORMAL' ? 'background-color:#fef3c7;' : ''}">
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;font-family:sans-serif;font-weight:bold;color:#0f172a;">${res.parameter}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:right;font-weight:bold;color:#0f172a;">${res.result}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;">${res.unit}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;color:#475569;">${res.reference}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e2e8f0;text-align:center;">
            <span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:bold;${
              res.flag === 'CRITICAL' ? 'background-color:#e11d48;color:#ffffff;' :
              res.flag === 'HIGH' || res.flag === 'LOW' ? 'background-color:#fde68a;color:#92400e;' :
              'background-color:#ecfdf5;color:#065f46;'
            }">${res.flag}</span>
          </td>
        </tr>
      `).join('');

      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>LABCARE Official Diagnostic Report - ${report.reportNumber}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 30px; color: #0f172a; background: #ffffff; }
    .report-card { max-width: 850px; margin: 0 auto; border: 2px solid #0f766e; border-radius: 12px; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0f766e; padding-bottom: 16px; margin-bottom: 20px; }
    .logo-text { font-size: 26px; font-weight: 900; color: #0f172a; letter-spacing: -0.5px; }
    .logo-text span { color: #0d9488; }
    .badge { display: inline-block; padding: 4px 10px; background: #ccfbf1; color: #0f766e; border-radius: 6px; font-size: 11px; font-weight: bold; text-transform: uppercase; }
    .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 24px; font-size: 12px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 12px; font-family: monospace; }
    th { background: #f1f5f9; color: #334155; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; padding: 10px 12px; border-bottom: 2px solid #cbd5e1; text-align: left; }
    .remarks-box { background: #f8fafc; border-left: 4px solid #0d9488; padding: 14px; border-radius: 0 8px 8px 0; margin-bottom: 24px; font-size: 12px; }
    .footer { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; border-top: 1px solid #e2e8f0; padding-top: 18px; font-size: 11px; }
    .print-btn { display: inline-block; padding: 10px 18px; background: #0d9488; color: #fff; font-weight: bold; border-radius: 8px; text-decoration: none; cursor: pointer; margin-bottom: 20px; }
    @media print { .no-print { display: none !important; } .report-card { border: none; box-shadow: none; padding: 0; } }
  </style>
</head>
<body>
  <div class="no-print" style="max-width:850px;margin:0 auto 15px;text-align:right;">
    <button onclick="window.print()" class="print-btn" style="border:none;">🖨️ Print / Save as PDF</button>
  </div>
  <div class="report-card">
    <div class="header">
      <div>
        <div class="logo-text">LAB<span>CARE</span></div>
        <div style="font-size:11px;color:#64748b;font-weight:500;">Clinical Laboratory & Diagnostics • CAP & CLIA Accredited</div>
      </div>
      <div style="text-align:right;">
        <span class="badge">OFFICIAL VERIFIED REPORT</span>
        <div style="font-family:monospace;font-size:13px;font-weight:bold;margin-top:4px;">${report.reportNumber}</div>
        <div style="font-size:10px;color:#10b981;font-weight:bold;margin-top:2px;">STATUS: RELEASED & SIGNED</div>
      </div>
    </div>

    <div class="meta-grid">
      <div>
        <div><strong style="color:#64748b;">Patient Name:</strong> <span style="font-weight:bold;font-size:13px;color:#0f172a;">${report.patientName}</span></div>
        <div><strong style="color:#64748b;">Patient ID:</strong> <span>${report.patientId}</span></div>
        <div><strong style="color:#64748b;">DOB / Gender:</strong> <span>${report.patientDob} (${report.patientGender})</span></div>
        <div><strong style="color:#64748b;">Phone:</strong> <span>${report.patientPhone}</span></div>
      </div>
      <div>
        <div><strong style="color:#64748b;">Referring Physician:</strong> <span style="font-weight:bold;color:#0f172a;">${report.doctorName}</span></div>
        <div><strong style="color:#64748b;">Specimen Barcode:</strong> <span style="font-family:monospace;font-weight:bold;">${report.sampleBarcode}</span></div>
        <div><strong style="color:#64748b;">Specimen Type:</strong> <span>${report.sampleType}</span></div>
        <div><strong style="color:#64748b;">Report Date:</strong> <span>${new Date(report.reportedAt).toLocaleString()}</span></div>
      </div>
    </div>

    <h3 style="font-size:14px;color:#0f172a;margin:0 0 10px;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">
      ${report.testName} (${report.testCode})
    </h3>

    <table>
      <thead>
        <tr>
          <th>Investigation Parameter</th>
          <th style="text-align:right;">Result</th>
          <th>Unit</th>
          <th>Biological Reference Interval</th>
          <th style="text-align:center;">Flag</th>
        </tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>

    <div class="remarks-box">
      <strong style="display:block;margin-bottom:4px;color:#0f172a;">Clinical Remarks & Diagnostic Impression:</strong>
      <div style="color:#334155;line-height:1.5;">${report.summaryRemarks}</div>
    </div>

    <div class="footer">
      <div>
        <div style="color:#94a3b8;font-weight:bold;text-transform:uppercase;font-size:10px;">Medical Laboratory Technologist</div>
        <div style="font-weight:bold;font-size:12px;margin-top:2px;">${report.technologist}</div>
        <div style="color:#64748b;font-size:10px;">ASCP Certified Technologist • Central Pathology Lab</div>
      </div>
      <div style="text-align:right;">
        <div style="color:#94a3b8;font-weight:bold;text-transform:uppercase;font-size:10px;">Verifying Clinical Pathologist / Physician</div>
        <div style="font-weight:bold;font-size:12px;margin-top:2px;">${report.verifiedBy}</div>
        <div style="color:#059669;font-weight:bold;font-size:10px;">✓ Digitally Authenticated & Electronically Signed</div>
      </div>
    </div>
  </div>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `LABCARE-Diagnostic-Report-${report.reportNumber}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      addToast('Report Saved to Laptop', `Report ${report.reportNumber} saved to Downloads folder.`, 'success');
    } catch (err) {
      console.error('File save error:', err);
      addToast('Download Error', 'Could not save report file to laptop.', 'error');
    }
  };

  // Filtered
  const filteredRequests = requests.filter(r => {
    if (requestStatusFilter !== 'ALL' && r.status.toUpperCase() !== requestStatusFilter.toUpperCase()) return false;
    if (requestPriorityFilter !== 'ALL' && r.priority.toUpperCase() !== requestPriorityFilter.toUpperCase()) return false;
    if (requestSearch) {
      const q = requestSearch.toLowerCase();
      return (
        r.accessionNumber.toLowerCase().includes(q) ||
        r.patientName.toLowerCase().includes(q) ||
        r.testName.toLowerCase().includes(q) ||
        r.doctorName?.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const filteredTests = tests.filter(t => {
    if (testCategoryFilter !== 'ALL' && t.categoryId !== testCategoryFilter) return false;
    if (testSearch) {
      const q = testSearch.toLowerCase();
      return t.name.toLowerCase().includes(q) || t.code.toLowerCase().includes(q) || t.description.toLowerCase().includes(q);
    }
    return true;
  });

  const filteredPatients = patients.filter(p => {
    if (patientSearch) {
      const q = patientSearch.toLowerCase();
      return p.fullName.toLowerCase().includes(q) || p.email.toLowerCase().includes(q) || p.phone.toLowerCase().includes(q);
    }
    return true;
  });

  // Clinical Status Badges
  const renderStatusBadge = (status) => {
    switch (status) {
      case 'REPORT_RELEASED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Report Released</span>
          </span>
        );
      case 'RESULT_VERIFICATION':
      case 'RESULT_ENTERED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
            <FileCheck className="w-3.5 h-3.5 text-cyan-600" />
            <span>Result Verification</span>
          </span>
        );
      case 'PROCESSING':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-teal-50 text-teal-800 border border-teal-200">
            <RefreshCw className="w-3.5 h-3.5 text-teal-600 animate-spin" />
            <span>Processing</span>
          </span>
        );
      case 'SAMPLE_RECEIVED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <TestTube2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Sample Received</span>
          </span>
        );
      case 'SAMPLE_COLLECTED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <Syringe className="w-3.5 h-3.5 text-amber-600" />
            <span>Sample Collected</span>
          </span>
        );
      case 'REJECTED':
      case 'CANCELLED':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-rose-50 text-rose-800 border border-rose-200">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>{status === 'REJECTED' ? 'Sample Rejected' : 'Cancelled'}</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>Requested</span>
          </span>
        );
    }
  };

  const renderToasts = () => (
    <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full font-sans">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`p-3.5 rounded-xl text-xs shadow-lg border flex justify-between items-start transition-all ${
            t.type === 'success'
              ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
              : t.type === 'error'
              ? 'bg-rose-50 border-rose-200 text-rose-900'
              : 'bg-slate-900 border-slate-700 text-white'
          }`}
        >
          <div>
            <strong className="block font-bold text-xs mb-0.5">{t.title}</strong>
            <span className="opacity-90">{t.message}</span>
          </div>
        </div>
      ))}
    </div>
  );

  // -------------------------------------------------------------
  // VIEW 1: HOSPITAL LANDING / HOME PAGE
  // -------------------------------------------------------------
  if (!currentUser && currentView === 'landing') {
    return (
      <div className="min-h-screen bg-clinical-50 flex flex-col justify-between font-sans text-clinical-900 relative overflow-hidden">
        {renderToasts()}
        <LabAmbientBackground />

        {/* 1. Main Navigation Header */}
        <header className="bg-white/95 backdrop-blur-md border-b border-clinical-200 px-6 py-4 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <LabcareLogo />

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 text-xs font-semibold text-clinical-600">
              <a href="#services" className="hover:text-tealMed-700 transition-colors">Clinical Services</a>
              <a href="#departments" className="hover:text-tealMed-700 transition-colors">Specialties</a>
              <a href="#quality" className="hover:text-tealMed-700 transition-colors">Accreditation</a>
              <a href="#emergency" className="hover:text-tealMed-700 transition-colors">24/7 Emergency</a>
            </nav>

            {/* Header Action Buttons */}
            <div className="flex items-center space-x-3 text-xs">
              <button
                onClick={() => setCurrentView('register')}
                className="py-2.5 px-4 rounded-xl bg-tealMed-50 border border-tealMed-200 text-tealMed-800 hover:bg-tealMed-100 font-bold transition-all shadow-2xs cursor-pointer"
              >
                Register Patient
              </button>
              <button
                onClick={() => {
                  setSelectedLoginRole('PATIENT');
                  setLoginEmail('patient@labcare.demo');
                  setLoginPassword('Patient@12345');
                  setCurrentView('login');
                }}
                className="py-2.5 px-5 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </div>
        </header>

        {/* 2. Hero Section */}
        <section className="py-16 sm:py-20 px-6 z-10">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tealMed-50 border border-tealMed-200 text-tealMed-800 text-xs font-bold shadow-2xs">
              <Award className="w-4 h-4 text-tealMed-600" />
              <span>CAP & CLIA Accredited Central Pathology & Diagnostic Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-clinical-900 tracking-tight leading-[1.15]">
              Advanced Clinical Diagnostics & <br className="hidden sm:inline" />
              <span className="text-tealMed-600">Integrated Hospital Care</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base text-clinical-600 font-normal leading-relaxed">
              Precision laboratory medicine and clinical operations platform providing automated barcode specimen tracking, multi-parameter pathology testing, and physician verified electronic reports.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => {
                  setSelectedLoginRole('PATIENT');
                  setLoginEmail('patient@labcare.demo');
                  setLoginPassword('Patient@12345');
                  setCurrentView('login');
                }}
                className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Access Hospital Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentView('register')}
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-white hover:bg-clinical-50 border border-clinical-300 text-clinical-800 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                New Patient Registration
              </button>
            </div>

            {/* Healthcare Operations Metric Strip */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
              <div className="p-4 rounded-xl bg-white/90 border border-clinical-200 shadow-2xs space-y-1">
                <span className="text-[11px] text-clinical-500 font-semibold">Analytical Precision</span>
                <div className="text-xl font-black text-tealMed-700">99.98%</div>
                <span className="text-[10px] text-clinical-400">CLIA Quality Control</span>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-clinical-200 shadow-2xs space-y-1">
                <span className="text-[11px] text-clinical-500 font-semibold">Specimen Turnaround</span>
                <div className="text-xl font-black text-blue-700">&lt; 6 Hours</div>
                <span className="text-[10px] text-clinical-400">Stat Priority Available</span>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-clinical-200 shadow-2xs space-y-1">
                <span className="text-[11px] text-clinical-500 font-semibold">Diagnostic Catalog</span>
                <div className="text-xl font-black text-purple-700">120+ Tests</div>
                <span className="text-[10px] text-clinical-400">Multi-panel chemistry</span>
              </div>

              <div className="p-4 rounded-xl bg-white/90 border border-clinical-200 shadow-2xs space-y-1">
                <span className="text-[11px] text-clinical-500 font-semibold">Clinical Security</span>
                <div className="text-xl font-black text-emerald-700">HIPAA Certified</div>
                <span className="text-[10px] text-clinical-400">256-bit Encrypted EHR</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Clinical Specialties & Portal Roles */}
        <section id="services" className="py-16 px-6 bg-white/80 border-t border-b border-clinical-200 z-10">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold text-tealMed-600 uppercase tracking-wider">Hospital Architecture</span>
              <h2 className="text-3xl font-extrabold text-clinical-900 tracking-tight">
                Role-Based Healthcare Portals
              </h2>
              <p className="text-xs text-clinical-500">
                Seamless collaboration between patients, physicians, laboratory technologists, and medical directors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Patient */}
              <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-xs space-y-3 human-card">
                <div className="w-10 h-10 rounded-xl bg-tealMed-50 text-tealMed-700 border border-tealMed-200 flex items-center justify-center font-bold">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-clinical-900">Patient Portal</h3>
                <p className="text-xs text-clinical-600 leading-relaxed">
                  Book diagnostic tests, monitor live specimen tracking timeline, download verified PDF reports, and settle lab bills.
                </p>
                <button
                  onClick={() => {
                    setSelectedLoginRole('PATIENT');
                    setLoginEmail('patient@labcare.demo');
                    setLoginPassword('Patient@12345');
                    setCurrentView('login');
                  }}
                  className="pt-2 text-xs font-bold text-tealMed-700 hover:text-tealMed-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Patient Login</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Doctor */}
              <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-xs space-y-3 human-card">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-clinical-900">Doctor Portal</h3>
                <p className="text-xs text-clinical-600 leading-relaxed">
                  Order lab tests with clinical priority, inspect patient diagnostic history, and review critical value alerts.
                </p>
                <button
                  onClick={() => {
                    setSelectedLoginRole('DOCTOR');
                    setLoginEmail('doctor@labcare.demo');
                    setLoginPassword('Doctor@12345');
                    setCurrentView('login');
                  }}
                  className="pt-2 text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Doctor Login</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Staff / Technologist */}
              <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-xs space-y-3 human-card">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center font-bold">
                  <Microscope className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-clinical-900">Staff & Technologist</h3>
                <p className="text-xs text-clinical-600 leading-relaxed">
                  Phlebotomy accessioning, barcode tube generation, multi-parameter result entry, and official report release.
                </p>
                <button
                  onClick={() => {
                    setSelectedLoginRole('STAFF');
                    setLoginEmail('technician@labcare.demo');
                    setLoginPassword('Technician@12345');
                    setCurrentView('login');
                  }}
                  className="pt-2 text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Staff Login</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Admin */}
              <div className="p-6 rounded-2xl bg-white border border-clinical-200 shadow-xs space-y-3 human-card">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-clinical-900">Admin Governance</h3>
                <p className="text-xs text-clinical-600 leading-relaxed">
                  Executive revenue KPIs, staff directory, test catalog management, reagent inventory supplies, and audit logs.
                </p>
                <button
                  onClick={() => {
                    setSelectedLoginRole('ADMIN');
                    setLoginEmail('admin@labcare.demo');
                    setLoginPassword('Admin@12345');
                    setCurrentView('login');
                  }}
                  className="pt-2 text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Admin Login</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Emergency & Contact Strip */}
        <section id="emergency" className="py-10 px-6 bg-tealMed-800 text-white z-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-[11px] font-bold tracking-wider text-tealMed-200 uppercase">24/7 Clinical Emergency Intake</span>
              <h3 className="text-xl font-black">Central Specimen Reception & STAT Pathology Line</h3>
              <p className="text-xs text-tealMed-100">Direct courier intake and priority critical value reporting around the clock.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:18005550199" className="py-3 px-5 rounded-xl bg-white text-tealMed-900 font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-tealMed-50 transition-colors">
                📞 1-800-555-0199 (STAT Desk)
              </a>
            </div>
          </div>
        </section>

        {/* 5. Footer */}
        <footer className="bg-white py-6 px-6 text-xs text-clinical-500 border-t border-clinical-200 z-10">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <LabcareLogo />
            <p className="text-center sm:text-right text-[11px]">
              LABCARE Hospital & Clinical Diagnostic Platform • CAP & CLIA Certified Facility • HIPAA Compliant
            </p>
          </div>
        </footer>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: PATIENT SELF-REGISTRATION
  // -------------------------------------------------------------
  if (!currentUser && currentView === 'register') {
    return (
      <div className="min-h-screen bg-clinical-50 flex flex-col justify-center py-12 px-4 sm:px-6 font-sans text-clinical-900 relative">
        {renderToasts()}
        <LabAmbientBackground />

        <div className="sm:mx-auto sm:w-full sm:max-w-xl z-10">
          <div className="bg-white border border-clinical-200 rounded-2xl p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-clinical-200 pb-4">
              <LabcareLogo size="large" />
              <button
                onClick={() => setCurrentView('landing')}
                className="text-xs text-clinical-500 hover:text-clinical-900 inline-flex items-center gap-1 font-bold cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            </div>

            <div>
              <h2 className="text-xl font-bold text-clinical-900">New Patient Registration</h2>
              <p className="text-xs text-clinical-500 mt-0.5">
                Create your patient account to book diagnostic tests and access verified reports
              </p>
            </div>

            <form onSubmit={handleRegisterPatient} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Rigby"
                    value={registerFormData.fullName}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, fullName: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="patient@example.com"
                    value={registerFormData.email}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Password *</label>
                  <input
                    type="password"
                    required
                    placeholder="Create secure password"
                    value={registerFormData.password}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, password: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Primary Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={registerFormData.phone}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, phone: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={registerFormData.dateOfBirth}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, dateOfBirth: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Gender</label>
                  <select
                    value={registerFormData.gender}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, gender: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other / Non-Binary</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Blood Group</label>
                  <select
                    value={registerFormData.bloodGroup}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, bloodGroup: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none font-bold"
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-clinical-700 mb-1">Street Address</label>
                  <input
                    type="text"
                    placeholder="742 Evergreen Terrace"
                    value={registerFormData.address}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, address: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Postal Code</label>
                  <input
                    type="text"
                    placeholder="97477"
                    value={registerFormData.postalCode}
                    onChange={(e) => setRegisterFormData({ ...registerFormData, postalCode: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Emergency Contact Person & Phone</label>
                <input
                  type="text"
                  placeholder="Paul Rigby (+1 555 892-3309)"
                  value={registerFormData.emergencyContact}
                  onChange={(e) => setRegisterFormData({ ...registerFormData, emergencyContact: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3.5 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                {authLoading ? 'Registering Account...' : 'Complete Patient Registration'}
              </button>
            </form>

            <div className="text-center pt-2 border-t border-clinical-100">
              <span className="text-xs text-clinical-500">Already registered? </span>
              <button
                onClick={() => {
                  setSelectedLoginRole('PATIENT');
                  setLoginEmail('patient@labcare.demo');
                  setLoginPassword('Patient@12345');
                  setCurrentView('login');
                }}
                className="text-xs text-tealMed-700 font-bold hover:underline cursor-pointer"
              >
                Sign In to Portal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: DEDICATED TWO-SIDED HOSPITAL LOGIN SCREEN
  // -------------------------------------------------------------
  if (!currentUser && currentView === 'login') {
    // Role configuration for the 4 distinct login options
    const roleConfigs = {
      ADMIN: {
        roleKey: 'ADMIN',
        roleLabel: 'Admin Login',
        title: 'Executive Administrator',
        description: 'Hospital governance, staff directory, test master catalog & audit logs',
        badgeClass: 'bg-purple-50 text-purple-700 border-purple-200',
        activeBtnClass: 'bg-purple-600 hover:bg-purple-700',
        activeBorderClass: 'border-purple-600 bg-purple-50/50',
        icon: ShieldCheck,
        defaultEmail: 'admin@labcare.demo',
        defaultPass: 'Admin@12345',
        demoUser: 'Dr. Arthur Pendelton (Medical Director)'
      },
      DOCTOR: {
        roleKey: 'DOCTOR',
        roleLabel: 'Doctor Login',
        title: 'Physician Clinical Portal',
        description: 'Diagnostic test requests, patient history & critical value reviews',
        badgeClass: 'bg-blue-50 text-blue-700 border-blue-200',
        activeBtnClass: 'bg-blue-600 hover:bg-blue-700',
        activeBorderClass: 'border-blue-600 bg-blue-50/50',
        icon: Stethoscope,
        defaultEmail: 'doctor@labcare.demo',
        defaultPass: 'Doctor@12345',
        demoUser: 'Dr. Sarah Vance, MD (Internal Medicine)'
      },
      STAFF: {
        roleKey: 'LAB_TECHNICIAN',
        roleLabel: 'Staff Login',
        title: 'Laboratory Technologist',
        description: 'Accessioning queue, barcode specimen processing & report release',
        badgeClass: 'bg-amber-50 text-amber-700 border-amber-200',
        activeBtnClass: 'bg-amber-600 hover:bg-amber-700',
        activeBorderClass: 'border-amber-600 bg-amber-50/50',
        icon: Microscope,
        defaultEmail: 'technician@labcare.demo',
        defaultPass: 'Technician@12345',
        demoUser: 'Marcus Chen, MLS (ASCP Technologist)'
      },
      PATIENT: {
        roleKey: 'PATIENT',
        roleLabel: 'Patient Login',
        title: 'Patient Diagnostic Portal',
        description: 'Personal test booking, live specimen status & verified PDF reports',
        badgeClass: 'bg-tealMed-50 text-tealMed-700 border-tealMed-200',
        activeBtnClass: 'bg-tealMed-600 hover:bg-tealMed-700',
        activeBorderClass: 'border-tealMed-600 bg-tealMed-50/50',
        icon: User,
        defaultEmail: 'patient@labcare.demo',
        defaultPass: 'Patient@12345',
        demoUser: 'Eleanor Rigby (Sample Patient)'
      }
    };

    const currentRoleCfg = roleConfigs[selectedLoginRole] || roleConfigs.PATIENT;

    return (
      <div className="min-h-screen bg-clinical-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans text-clinical-900 relative">
        {renderToasts()}
        <LabAmbientBackground />

        {/* Dedicated Two-Side Login Container */}
        <div className="max-w-6xl w-full bg-white border border-clinical-200 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10">

          {/* ========================================================= */}
          {/* LEFT SIDE — LOGIN PANEL (6 of 12 columns)                  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-clinical-200 bg-white">
            <div className="space-y-6">
              {/* Back to Home & Platform Header */}
              <div className="flex items-center justify-between border-b border-clinical-100 pb-4">
                <LabcareLogo />
                <button
                  onClick={() => setCurrentView('landing')}
                  className="text-xs text-clinical-500 hover:text-clinical-900 inline-flex items-center gap-1 font-semibold transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Hospital Home</span>
                </button>
              </div>

              <div>
                <span className="text-[10px] font-bold text-tealMed-700 uppercase tracking-widest block mb-1">
                  Hospital / Healthcare Management System
                </span>
                <h2 className="text-2xl font-black text-clinical-900 tracking-tight">
                  Sign In to Your Account
                </h2>
                <p className="text-xs text-clinical-500 mt-1">
                  Select your clinical account type below to continue
                </p>
              </div>

              {/* FOUR CLEARLY SEPARATED LOGIN ROLE SELECTORS */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-clinical-700 uppercase tracking-wider">
                  Select Account Type:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(roleConfigs).map(([key, cfg]) => {
                    const isSelected = selectedLoginRole === key;
                    const IconComponent = cfg.icon;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => {
                          setSelectedLoginRole(key);
                          setLoginEmail(cfg.defaultEmail);
                          setLoginPassword(cfg.defaultPass);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-center space-x-2.5 cursor-pointer ${
                          isSelected
                            ? `${cfg.activeBorderClass} shadow-xs ring-1 ring-clinical-900/10`
                            : 'border-clinical-200 bg-white hover:bg-clinical-50 text-clinical-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0 ${
                          isSelected ? cfg.badgeClass : 'bg-clinical-100 text-clinical-600'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <span className={`font-bold block text-xs truncate ${isSelected ? 'text-clinical-900' : 'text-clinical-700'}`}>
                            {cfg.roleLabel}
                          </span>
                          <span className="text-[10px] text-clinical-400 block truncate">
                            {key === 'ADMIN' ? 'Governance' : key === 'DOCTOR' ? 'Physician' : key === 'STAFF' ? 'Technologist' : 'Patient'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Login Form for Selected Role */}
              <form onSubmit={(e) => handlePerformLogin(e, currentRoleCfg.roleKey, loginEmail, loginPassword)} className="space-y-4 text-xs pt-1">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-semibold text-clinical-700">Email Address / Username</label>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${currentRoleCfg.badgeClass}`}>
                      {currentRoleCfg.roleKey}
                    </span>
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-clinical-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder={currentRoleCfg.defaultEmail}
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-semibold text-clinical-700">Password</label>
                    <span className="text-[11px] text-tealMed-700 hover:underline cursor-pointer">
                      Forgot password?
                    </span>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-clinical-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type={showLoginPassword ? 'text' : 'password'}
                      required
                      placeholder="••••••••"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-clinical-400 hover:text-clinical-700 cursor-pointer"
                    >
                      {showLoginPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded text-tealMed-600 focus:ring-tealMed-500"
                    />
                    <span className="text-[11px] text-clinical-600 font-medium">Remember me on this station</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={authLoading}
                  className={`w-full py-3 rounded-xl ${currentRoleCfg.activeBtnClass} text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer`}
                >
                  {authLoading ? 'Authenticating Credentials...' : `Sign In as ${currentRoleCfg.title}`}
                </button>
              </form>

              {/* 1-Click Fast Development Fill for Current Role */}
              <div className="p-3 rounded-xl border border-clinical-200 bg-clinical-50/70 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-clinical-500 font-bold">1-Click Test Credentials:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginEmail(currentRoleCfg.defaultEmail);
                      setLoginPassword(currentRoleCfg.defaultPass);
                      handlePerformLogin(null, currentRoleCfg.roleKey, currentRoleCfg.defaultEmail, currentRoleCfg.defaultPass);
                    }}
                    className="text-[11px] text-tealMed-700 font-bold hover:underline cursor-pointer"
                  >
                    Quick Auto-Fill & Login →
                  </button>
                </div>
                <div className="text-[11px] text-clinical-600">
                  <strong className="text-clinical-900">{currentRoleCfg.demoUser}</strong>: <span className="font-mono text-clinical-500">{currentRoleCfg.defaultEmail}</span>
                </div>
              </div>
            </div>

            {/* Registration Footer */}
            <div className="pt-4 border-t border-clinical-100 text-center text-xs">
              <span className="text-clinical-500">Need a patient diagnostic account? </span>
              <button
                onClick={() => setCurrentView('register')}
                className="text-tealMed-700 font-bold hover:underline cursor-pointer"
              >
                Register Here
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE — HOSPITAL BRANDING & ANIMATED SYMBOL AREA     */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 p-8 sm:p-12 bg-gradient-to-br from-tealMed-900 via-tealMed-800 to-clinical-950 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* SUBTLE ANIMATED BACKGROUND MEDICAL SYMBOL (SVG / CSS ONLY) */}
            <div className="absolute -right-16 -top-16 opacity-15 pointer-events-none animate-subtle-float">
              <svg width="420" height="420" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Clinical Cross */}
                <path d="M40 10H60V40H90V60H60V90H40V60H10V40H40V10Z" fill="currentColor" />
                {/* Orbital Concentric Ring */}
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
              </svg>
            </div>

            {/* Pulsing Medical Cross Mark */}
            <div className="absolute left-8 bottom-12 opacity-10 pointer-events-none animate-subtle-pulse">
              <svg width="260" height="260" viewBox="0 0 100 100" fill="none">
                <rect x="42" y="10" width="16" height="80" rx="8" fill="white" />
                <rect x="10" y="42" width="80" height="16" rx="8" fill="white" />
              </svg>
            </div>

            {/* Top Branding */}
            <div className="space-y-4 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-tealMed-100 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CLIA & CAP Certified Diagnostic Pathology Facility</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  Precision Medical Diagnostics & Clinical Pathology
                </h3>
                <p className="text-xs text-tealMed-100/90 leading-relaxed max-w-md">
                  Serving hospitals, physicians, and patients with rigorous analytical standards, automated barcode accessioning, and continuous specimen surveillance.
                </p>
              </div>
            </div>

            {/* Animated Heartbeat / Pulse Wave Graphic (SVG Line) */}
            <div className="py-6 z-10 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-tealMed-200 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>LIVE CLINICAL TELEMETRY</span>
                </span>
                <span>ISO 15189 STANDARDS</span>
              </div>
              <div className="h-14 bg-white/5 rounded-2xl border border-white/10 p-3 flex items-center justify-center overflow-hidden">
                <svg className="w-full h-10 text-tealMed-300 stroke-current fill-none animate-heartbeat-line" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path
                    d="M0 30 L80 30 L95 10 L105 50 L115 20 L125 40 L135 30 L250 30 L265 10 L275 50 L285 20 L295 40 L305 30 L400 30"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Hospital Guarantees & Hotline */}
            <div className="space-y-4 z-10 border-t border-white/10 pt-6">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-tealMed-300 font-bold block uppercase">Accreditation</span>
                  <strong className="text-white block font-bold text-xs">CLIA #99D2084128</strong>
                  <span className="text-[10px] text-tealMed-200">College of American Pathologists</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                  <span className="text-[10px] text-tealMed-300 font-bold block uppercase">STAT Priority</span>
                  <strong className="text-white block font-bold text-xs">24/7 Critical Alert Desk</strong>
                  <span className="text-[10px] text-tealMed-200">Instant Physician Notification</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-tealMed-200 pt-1">
                <span>Central Specimen Intake Desk</span>
                <span className="font-bold text-white font-mono">1-800-555-0199</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 4: AUTHENTICATED HEALTHCARE WORKSPACE WITH UNIQUE SIDEBAR
  // -------------------------------------------------------------
  const metrics = analytics?.metrics || {};

  // Define sidebar navigation items for each role
  const getSidebarNavItems = () => {
    switch (currentUser.role) {
      case 'PATIENT':
        return [
          { id: 'dashboard', label: 'My Dashboard', icon: Home, count: null },
          { id: 'catalog', label: 'Book Diagnostic Tests', icon: FlaskConical, count: tests.length },
          { id: 'requests', label: 'My Tests & Tracking', icon: Activity, count: requests.length },
          { id: 'reports', label: 'Diagnostic Reports', icon: FileCheck, count: reports.length },
          { id: 'billing', label: 'Invoices & Billing', icon: CreditCard, count: invoices.length }
        ];
      case 'DOCTOR':
        return [
          { id: 'dashboard', label: 'Clinical Dashboard', icon: Home, count: null },
          { id: 'patients', label: 'Patients Directory', icon: Users, count: patients.length },
          { id: 'requests', label: 'Test Requests Queue', icon: Activity, count: requests.length },
          { id: 'reports', label: 'Diagnostic Reviews', icon: FileCheck, count: reports.length }
        ];
      case 'LAB_TECHNICIAN':
        return [
          { id: 'dashboard', label: 'Operations Board', icon: Home, count: null },
          { id: 'requests', label: 'Accessioning & Phlebotomy', icon: Activity, count: requests.length },
          { id: 'samples', label: 'Specimens in Lab', icon: TestTube2, count: samples.length },
          { id: 'results', label: 'Result Entry & Release', icon: FileCheck, count: results.length },
          { id: 'inventory', label: 'Reagent Inventory', icon: Box, count: inventory.length }
        ];
      case 'ADMIN':
      default:
        return [
          { id: 'dashboard', label: 'Executive Telemetry', icon: PieChart, count: null },
          { id: 'requests', label: 'Master Accessions', icon: Activity, count: requests.length },
          { id: 'tests', label: 'Test Catalog Master', icon: FlaskConical, count: tests.length },
          { id: 'users', label: 'Staff & Patient Directory', icon: Users, count: patients.length },
          { id: 'inventory', label: 'Reagents & Supplies', icon: Box, count: inventory.length },
          { id: 'billing', label: 'Billing Oversight', icon: CreditCard, count: invoices.length },
          { id: 'audit', label: 'Audit Trail', icon: FileText, count: auditLogs.length }
        ];
    }
  };

  const navItems = getSidebarNavItems();

  return (
    <div className="min-h-screen bg-clinical-50 font-sans text-clinical-900 flex flex-row relative overflow-hidden">
      {renderToasts()}
      <LabAmbientBackground />

      {/* ============================================================= */}
      {/* 🧭 UNIQUE CLINICAL SIDEBAR NAVIGATION (SIDE VIEW)              */}
      {/* ============================================================= */}
      <aside className={`bg-white/95 backdrop-blur-md border-r border-clinical-200 transition-all duration-300 shrink-0 flex flex-col justify-between z-40 sticky top-0 h-screen no-print ${
        sidebarCollapsed ? 'w-20' : 'w-72'
      }`}>
        <div className="p-4 space-y-6">
          {/* Logo & Collapse Toggle */}
          <div className="flex items-center justify-between border-b border-clinical-200 pb-4">
            <LabcareLogo collapsed={sidebarCollapsed} />
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg bg-clinical-100 hover:bg-clinical-200 text-clinical-600 transition-colors cursor-pointer hidden md:block"
              title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>

          {/* User Role Card */}
          <div className={`p-3 rounded-xl bg-clinical-50 border border-clinical-200 transition-all ${
            sidebarCollapsed ? 'text-center' : 'flex items-center space-x-3'
          }`}>
            <div className="w-9 h-9 rounded-xl bg-tealMed-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              {currentUser.fullName.charAt(0)}
            </div>
            {!sidebarCollapsed && (
              <div className="overflow-hidden">
                <span className="font-bold text-xs text-clinical-900 truncate block">{currentUser.fullName}</span>
                <span className="text-[10px] font-mono uppercase font-bold text-tealMed-700 block">
                  {currentUser.role}
                </span>
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <span className={`text-[10px] font-bold text-clinical-400 uppercase tracking-wider block px-2 ${sidebarCollapsed ? 'text-center' : ''}`}>
              Navigation
            </span>

            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-tealMed-600 text-white shadow-sm'
                      : 'text-clinical-600 hover:text-clinical-900 hover:bg-clinical-100'
                  }`}
                  title={sidebarCollapsed ? item.label : ''}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-clinical-500 group-hover:text-tealMed-600'}`} />
                    {!sidebarCollapsed && <span>{item.label}</span>}
                  </div>

                  {!sidebarCollapsed && item.count !== null && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                      isActive ? 'bg-tealMed-700 text-white' : 'bg-clinical-200 text-clinical-700'
                    }`}>
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Quick Action & Signout */}
        <div className="p-4 border-t border-clinical-200 space-y-3 bg-clinical-50/50">
          {(currentUser.role === 'PATIENT' || currentUser.role === 'DOCTOR') && !sidebarCollapsed && (
            <button
              onClick={() => handleOpenBookModal()}
              className="w-full py-2.5 px-3 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{currentUser.role === 'DOCTOR' ? 'Order Lab Test' : 'Book Test'}</span>
            </button>
          )}

          <button
            onClick={handleLogout}
            className={`w-full py-2.5 px-3 rounded-xl bg-clinical-100 hover:bg-rose-50 hover:text-rose-700 text-clinical-700 font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
              sidebarCollapsed ? 'p-2' : ''
            }`}
          >
            <LogOut className="w-4 h-4" />
            {!sidebarCollapsed && <span>Sign Out Workspace</span>}
          </button>
        </div>
      </aside>

      {/* ============================================================= */}
      {/* 🖥️ MAIN CONTENT PANE (SIDE VIEW LAYOUT)                        */}
      {/* ============================================================= */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto z-10">

        {/* TOP WORKSPACE TOOLBAR */}
        <header className="bg-white/90 backdrop-blur-md border-b border-clinical-200 px-6 py-3.5 flex justify-between items-center sticky top-0 z-30 no-print shadow-xs">
          <div className="flex items-center space-x-3">
            <h2 className="text-base font-extrabold text-clinical-900 capitalize tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-tealMed-600" />
              <span>{activeTab.replace('-', ' ')} Overview</span>
            </h2>
            <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-clinical-100 text-clinical-600 font-bold border border-clinical-200">
              Live Clinical Node
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            {/* Sync DB Button */}
            <button
              onClick={fetchAllData}
              disabled={loadingData}
              className="py-2 px-3.5 rounded-xl bg-clinical-100 hover:bg-clinical-200 text-clinical-700 font-bold flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? 'animate-spin text-tealMed-600' : ''}`} />
              <span className="hidden sm:inline">Sync Database</span>
            </button>

            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowNotifsDropdown(!showNotifsDropdown)}
                className="p-2.5 rounded-xl bg-clinical-100 hover:bg-clinical-200 border border-clinical-200 text-clinical-700 relative transition-colors cursor-pointer"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadNotifsCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {unreadNotifsCount}
                  </span>
                )}
              </button>

              {showNotifsDropdown && (
                <div className="absolute right-0 mt-2 w-84 bg-white border border-clinical-200 rounded-2xl shadow-2xl z-50 text-clinical-900 text-xs overflow-hidden">
                  <div className="p-3.5 border-b border-clinical-100 flex justify-between items-center bg-clinical-50">
                    <span className="font-bold text-clinical-900 text-[11px]">System Alerts ({notifications.length})</span>
                    {unreadNotifsCount > 0 && (
                      <button
                        onClick={handleMarkAllNotifsRead}
                        className="text-[10px] text-tealMed-700 hover:underline font-semibold cursor-pointer"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-clinical-100">
                    {notifications.length === 0 ? (
                      <p className="p-4 text-center text-clinical-400">No active alerts.</p>
                    ) : (
                      notifications.map(n => (
                        <div
                          key={n.id}
                          onClick={() => handleMarkNotifRead(n.id)}
                          className={`p-3.5 space-y-1 cursor-pointer transition-colors ${n.isRead ? 'bg-white hover:bg-clinical-50' : 'bg-tealMed-50/70 border-l-4 border-tealMed-600'}`}
                        >
                          <div className="flex justify-between items-start">
                            <strong className="text-[11px] text-clinical-900 font-bold">{n.title}</strong>
                            <span className="text-[9px] text-clinical-400">
                              {new Date(n.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          <p className="text-[11px] text-clinical-600 leading-relaxed font-sans">{n.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTAINER */}
        <main className="flex-1 p-6 space-y-6 max-w-7xl w-full mx-auto">

          {/* ------------------------------------------------------------- */}
          {/* DASHBOARD TAB                                                 */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">

              {/* 1. PATIENT DASHBOARD */}
              {currentUser.role === 'PATIENT' && (
                <div className="space-y-6">
                  <div
                    onMouseMove={handleCardMouseMove}
                    className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 human-card spotlight-card"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-clinical-900">
                        Welcome back, {currentUser.fullName}
                      </h2>
                      <p className="text-xs text-clinical-500 mt-0.5">
                        Blood Group: <strong>{currentUser.bloodGroup || 'A+'}</strong> • Patient ID: <strong className="font-mono">{currentUser.id}</strong> • DOB: {currentUser.dateOfBirth}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenBookModal()}
                      className="py-3 px-6 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Book Diagnostic Test</span>
                    </button>
                  </div>

                  {/* Patient KPI Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Upcoming Tests</span>
                        <div className="p-2 rounded-xl bg-tealMed-50 text-tealMed-700">
                          <Calendar className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-clinical-900 mt-2">{metrics.upcomingTests || 0}</div>
                      <span className="text-[11px] text-clinical-400">Scheduled appointments</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Tests in Progress</span>
                        <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                          <Activity className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-700 mt-2">{metrics.pendingTests || 0}</div>
                      <span className="text-[11px] text-clinical-400">Specimens in processing</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Available Reports</span>
                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                          <FileCheck className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-700 mt-2">{metrics.completedReports || 0}</div>
                      <span className="text-[11px] text-clinical-400">Verified & downloadable</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Pending Invoices</span>
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                          <CreditCard className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mt-2">{metrics.pendingPayments || 0}</div>
                      <span className="text-[11px] text-clinical-400">Due for settlement</span>
                    </div>
                  </div>

                  {/* Sample Tracking Visual Timeline */}
                  <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs space-y-4 human-card spotlight-card">
                    <h3 className="font-extrabold text-sm text-clinical-900 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-tealMed-600" />
                      <span>Active Diagnostic Specimen Tracking</span>
                    </h3>

                    {requests.length === 0 ? (
                      <p className="text-xs text-clinical-400 py-4">No recent test requests.</p>
                    ) : (
                      <div className="divide-y divide-clinical-100">
                        {requests.slice(0, 3).map(req => {
                          const stages = ['REQUESTED', 'SAMPLE_COLLECTED', 'SAMPLE_RECEIVED', 'PROCESSING', 'REPORT_RELEASED'];
                          const currentStageIdx = stages.indexOf(req.status) !== -1 ? stages.indexOf(req.status) : (req.status === 'RESULT_ENTERED' || req.status === 'RESULT_VERIFICATION' ? 3 : 0);

                          return (
                            <div key={req.id} className="py-4 space-y-3">
                              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                                <div>
                                  <strong className="text-sm font-bold text-clinical-900">{req.testName}</strong>
                                  <span className="text-xs text-clinical-500 block font-mono">
                                    Accession: {req.accessionNumber} • Ref Doctor: {req.doctorName}
                                  </span>
                                </div>
                                <div>{renderStatusBadge(req.status)}</div>
                              </div>

                              {/* 5-Step Progress Bar */}
                              <div className="grid grid-cols-5 gap-2 pt-2 text-center text-[10px] font-bold">
                                <div className={`p-2 rounded-lg border ${currentStageIdx >= 0 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-clinical-50 text-clinical-400 border-clinical-200'}`}>
                                  <span>1. Requested</span>
                                </div>
                                <div className={`p-2 rounded-lg border ${currentStageIdx >= 1 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-clinical-50 text-clinical-400 border-clinical-200'}`}>
                                  <span>2. Collected</span>
                                </div>
                                <div className={`p-2 rounded-lg border ${currentStageIdx >= 2 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-clinical-50 text-clinical-400 border-clinical-200'}`}>
                                  <span>3. Received</span>
                                </div>
                                <div className={`p-2 rounded-lg border ${currentStageIdx >= 3 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-clinical-50 text-clinical-400 border-clinical-200'}`}>
                                  <span>4. Processing</span>
                                </div>
                                <div className={`p-2 rounded-lg border ${currentStageIdx >= 4 ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-clinical-50 text-clinical-400 border-clinical-200'}`}>
                                  <span>5. Report Ready</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 2. DOCTOR DASHBOARD */}
              {currentUser.role === 'DOCTOR' && (
                <div className="space-y-6">
                  <div
                    onMouseMove={handleCardMouseMove}
                    className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 human-card spotlight-card"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-clinical-900">
                        {currentUser.fullName} — Physician Console
                      </h2>
                      <p className="text-xs text-clinical-500 mt-0.5">
                        Specialization: <strong>{currentUser.specialization}</strong> • License ID: <strong className="font-mono">{currentUser.licenseId}</strong> • Dept: {currentUser.department}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenBookModal()}
                      className="py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Order Lab Test for Patient</span>
                    </button>
                  </div>

                  {/* Doctor KPIs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">My Patients</span>
                        <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                          <Users className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-clinical-900 mt-2">{patients.length}</div>
                      <span className="text-[11px] text-clinical-400">Assigned clinical records</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Pending Tests</span>
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                          <Clock className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mt-2">{metrics.pendingTestRequests || 0}</div>
                      <span className="text-[11px] text-clinical-400">Awaiting specimen/processing</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Reports to Review</span>
                        <div className="p-2 rounded-xl bg-tealMed-50 text-tealMed-700">
                          <FileCheck className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-tealMed-700 mt-2">{metrics.reportsAwaitingReview || 0}</div>
                      <span className="text-[11px] text-clinical-400">Entered by technologists</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Critical Value Alerts</span>
                        <div className="p-2 rounded-xl bg-rose-50 text-rose-700">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-rose-700 mt-2">{metrics.criticalResultsCount || 0}</div>
                      <span className="text-[11px] text-rose-600 font-bold">Immediate attention</span>
                    </div>
                  </div>

                  {/* Recent Reports for Doctor */}
                  <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs space-y-4 human-card spotlight-card">
                    <div className="flex justify-between items-center border-b border-clinical-200 pb-3">
                      <h3 className="font-extrabold text-sm text-clinical-900 flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-blue-600" />
                        <span>Verified Diagnostic Reports for Clinical Review</span>
                      </h3>
                      <button
                        onClick={() => setActiveTab('reports')}
                        className="text-xs text-blue-600 hover:underline font-bold"
                      >
                        View All Reports
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                            <th className="p-3">Report #</th>
                            <th className="p-3">Patient Name</th>
                            <th className="p-3">Diagnostic Test</th>
                            <th className="p-3">Report Date</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-clinical-100">
                          {reports.map(rep => (
                            <tr key={rep.id} className="hover:bg-clinical-50 transition-colors">
                              <td className="p-3 font-mono font-bold text-clinical-900">{rep.reportNumber}</td>
                              <td className="p-3 font-semibold text-clinical-900">{rep.patientName}</td>
                              <td className="p-3 text-clinical-700 font-medium">{rep.testName}</td>
                              <td className="p-3 text-clinical-500">{new Date(rep.reportedAt).toLocaleDateString()}</td>
                              <td className="p-3 text-center">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  RELEASED
                                </span>
                              </td>
                              <td className="p-3 text-right">
                                <button
                                  onClick={() => setViewingReport(rep)}
                                  className="py-1 px-3 rounded-lg bg-clinical-100 hover:bg-clinical-200 text-clinical-800 font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Inspect</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. LAB TECHNICIAN DASHBOARD */}
              {currentUser.role === 'LAB_TECHNICIAN' && (
                <div className="space-y-6">
                  <div
                    onMouseMove={handleCardMouseMove}
                    className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 human-card spotlight-card"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-clinical-900">
                        {currentUser.fullName} — Laboratory Operations Board
                      </h2>
                      <p className="text-xs text-clinical-500 mt-0.5">
                        Employee ID: <strong className="font-mono">{currentUser.employeeId}</strong> • Dept: {currentUser.department} • Shift: {currentUser.shift}
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('requests')}
                      className="py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
                    >
                      <Microscope className="w-4 h-4" />
                      <span>Accessioning Queue ({requests.length})</span>
                    </button>
                  </div>

                  {/* Technician Workflow Operational Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Samples to Collect</span>
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                          <Syringe className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mt-2">{metrics.samplesAwaitingCollection || 0}</div>
                      <span className="text-[11px] text-clinical-400">Phlebotomy pending</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">In-Lab Processing</span>
                        <div className="p-2 rounded-xl bg-tealMed-50 text-tealMed-700">
                          <RefreshCw className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-tealMed-700 mt-2">{metrics.samplesProcessing || 0}</div>
                      <span className="text-[11px] text-clinical-400">Active analyzer runs</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Results Pending Entry</span>
                        <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                          <FileCheck className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-700 mt-2">{metrics.resultsPending || 0}</div>
                      <span className="text-[11px] text-clinical-400">Specimens tested</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Completed Reports</span>
                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                          <CheckCheck className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-700 mt-2">{metrics.completedTests || 0}</div>
                      <span className="text-[11px] text-clinical-400">Released to patients</span>
                    </div>
                  </div>

                  {/* Practical Technician Action Board */}
                  <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs space-y-4 human-card spotlight-card">
                    <h3 className="font-extrabold text-sm text-clinical-900 flex items-center gap-2">
                      <Activity className="w-4 h-4 text-amber-600" />
                      <span>Active Laboratory Accessions Requiring Phlebotomy & Testing</span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                            <th className="p-3">Accession #</th>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Test Required</th>
                            <th className="p-3">Sample Type</th>
                            <th className="p-3 text-center">Priority</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-right">Workflow Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-clinical-100">
                          {requests.slice(0, 5).map(req => (
                            <tr key={req.id} className="hover:bg-clinical-50 transition-colors">
                              <td className="p-3 font-mono font-bold text-clinical-900">{req.accessionNumber}</td>
                              <td className="p-3 font-semibold text-clinical-900">{req.patientName}</td>
                              <td className="p-3 text-clinical-700 font-medium">{req.testName}</td>
                              <td className="p-3 text-clinical-500 text-[11px]">{req.collectionType}</td>
                              <td className="p-3 text-center">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  req.priority === 'CRITICAL' ? 'bg-rose-100 text-rose-800' :
                                  req.priority === 'URGENT' ? 'bg-amber-100 text-amber-800' :
                                  'bg-slate-100 text-slate-700'
                                }`}>
                                  {req.priority}
                                </span>
                              </td>
                              <td className="p-3 text-center">{renderStatusBadge(req.status)}</td>
                              <td className="p-3 text-right">
                                {req.status === 'REQUESTED' || req.status === 'SAMPLE_COLLECTION_PENDING' ? (
                                  <button
                                    onClick={() => handleOpenCollectModal(req)}
                                    className="py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Collect Sample
                                  </button>
                                ) : req.status === 'SAMPLE_COLLECTED' ? (
                                  <button
                                    onClick={() => {
                                      const smp = samples.find(s => s.requestId === req.id);
                                      if (smp) handleReceiveSample(smp);
                                    }}
                                    className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Receive in Lab
                                  </button>
                                ) : req.status === 'SAMPLE_RECEIVED' ? (
                                  <button
                                    onClick={() => {
                                      const smp = samples.find(s => s.requestId === req.id);
                                      if (smp) handleStartProcessing(smp);
                                    }}
                                    className="py-1.5 px-3 rounded-lg bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Start Processing
                                  </button>
                                ) : req.status === 'PROCESSING' ? (
                                  <button
                                    onClick={() => handleOpenResultEntry(req)}
                                    className="py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Enter Results
                                  </button>
                                ) : req.status === 'RESULT_ENTERED' || req.status === 'RESULT_VERIFICATION' ? (
                                  <button
                                    onClick={() => handleReleaseReport(req.id)}
                                    className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Release Report
                                  </button>
                                ) : (
                                  <span className="text-clinical-400 font-bold">Completed</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. ADMIN DASHBOARD */}
              {currentUser.role === 'ADMIN' && (
                <div className="space-y-6">
                  <div
                    onMouseMove={handleCardMouseMove}
                    className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 human-card spotlight-card"
                  >
                    <div>
                      <h2 className="text-xl font-bold text-clinical-900">
                        {currentUser.fullName} — System Telemetry & Clinical Governance
                      </h2>
                      <p className="text-xs text-clinical-500 mt-0.5">
                        Role: <strong>Medical Director / Chief Administrator</strong> • License: <strong className="font-mono">{currentUser.licenseId}</strong> • Dept: {currentUser.department}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setShowAddTestModal(true)}
                        className="py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Lab Test</span>
                      </button>
                      <button
                        onClick={() => setShowAddStaffModal(true)}
                        className="py-2.5 px-4 rounded-xl bg-clinical-100 hover:bg-clinical-200 text-clinical-800 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Users className="w-4 h-4" />
                        <span>Onboard Staff</span>
                      </button>
                    </div>
                  </div>

                  {/* Admin Telemetry KPIs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Cumulative Revenue</span>
                        <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                          <DollarSign className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-emerald-700 mt-2">${(metrics.totalRevenue || 0).toFixed(2)}</div>
                      <span className="text-[11px] text-clinical-400">Settled diagnostic invoices</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Total Accessions</span>
                        <div className="p-2 rounded-xl bg-blue-50 text-blue-700">
                          <Activity className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-clinical-900 mt-2">{metrics.totalRequests || 0}</div>
                      <span className="text-[11px] text-clinical-400">Requests across all departments</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Active Test Catalog</span>
                        <div className="p-2 rounded-xl bg-tealMed-50 text-tealMed-700">
                          <FlaskConical className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-clinical-900 mt-2">{metrics.totalTestsCatalog || 0}</div>
                      <span className="text-[11px] text-clinical-400">Diagnostic panels & profiles</span>
                    </div>

                    <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs human-card spotlight-card">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-clinical-500">Low Stock Reagents</span>
                        <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
                          <Box className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-amber-700 mt-2">{metrics.lowStockItems || 0}</div>
                      <span className="text-[11px] text-amber-600 font-bold">Restocking alert</span>
                    </div>
                  </div>

                  {/* Master Recent Accessions Overview */}
                  <div onMouseMove={handleCardMouseMove} className="bg-white border border-clinical-200 rounded-2xl p-6 shadow-xs space-y-4 human-card spotlight-card">
                    <div className="flex justify-between items-center border-b border-clinical-200 pb-3">
                      <h3 className="font-extrabold text-sm text-clinical-900 flex items-center gap-2">
                        <FileSpreadsheet className="w-4 h-4 text-purple-600" />
                        <span>Recent Clinical Accessions & Diagnostic Ledger</span>
                      </h3>
                      <button
                        onClick={() => setActiveTab('requests')}
                        className="text-xs text-purple-600 hover:underline font-bold"
                      >
                        View All Accessions ({requests.length})
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                            <th className="p-3">Accession Code</th>
                            <th className="p-3">Patient</th>
                            <th className="p-3">Diagnostic Panel</th>
                            <th className="p-3">Ref Doctor</th>
                            <th className="p-3">Collection Date</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-clinical-100">
                          {requests.slice(0, 5).map(req => (
                            <tr key={req.id} className="hover:bg-clinical-50 transition-colors">
                              <td className="p-3 font-mono font-bold text-clinical-900">{req.accessionNumber}</td>
                              <td className="p-3 font-semibold text-clinical-900">{req.patientName}</td>
                              <td className="p-3 text-clinical-700 font-medium">{req.testName}</td>
                              <td className="p-3 text-clinical-500">{req.doctorName}</td>
                              <td className="p-3 text-clinical-500">{req.scheduledDate}</td>
                              <td className="p-3 text-center">{renderStatusBadge(req.status)}</td>
                              <td className="p-3 text-right">
                                {req.reportId ? (
                                  <button
                                    onClick={() => {
                                      const rep = reports.find(r => r.id === req.reportId);
                                      if (rep) setViewingReport(rep);
                                    }}
                                    className="py-1 px-3 rounded-lg bg-tealMed-50 text-tealMed-700 border border-tealMed-200 font-bold text-xs cursor-pointer inline-flex items-center gap-1"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span>Report</span>
                                  </button>
                                ) : (
                                  <span className="text-clinical-400 font-mono text-[11px] font-bold">Pending Run</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* CATALOG / TESTS TAB                                           */}
          {/* ------------------------------------------------------------- */}
          {(activeTab === 'catalog' || activeTab === 'tests') && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-tealMed-600" />
                    <span>Clinical Laboratory Test Catalog</span>
                  </h2>
                  <p className="text-xs text-clinical-500 mt-0.5">
                    Standard diagnostic panels, preparation protocols, and turnaround times
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-xs">
                  <select
                    value={testCategoryFilter}
                    onChange={(e) => setTestCategoryFilter(e.target.value)}
                    className="p-2 rounded-xl border border-clinical-300 bg-white text-clinical-900 font-bold text-xs focus:border-tealMed-600 focus:outline-none"
                  >
                    <option value="ALL">All Diagnostic Categories</option>
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>

                  <div className="relative w-56">
                    <Search className="w-4 h-4 text-clinical-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search test or code..."
                      value={testSearch}
                      onChange={(e) => setTestSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl border border-clinical-300 bg-white text-xs focus:border-tealMed-600 focus:outline-none"
                    />
                  </div>

                  {currentUser.role === 'ADMIN' && (
                    <button
                      onClick={() => setShowAddTestModal(true)}
                      className="py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1 shadow-xs"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>New Test</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Test Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredTests.map(test => (
                  <div
                    key={test.id}
                    onMouseMove={handleCardMouseMove}
                    className="bg-white border border-clinical-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between human-card spotlight-card space-y-4"
                  >
                    <div className="space-y-2.5 z-10">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-tealMed-50 text-tealMed-700 border border-tealMed-200 uppercase tracking-wider font-mono">
                          {test.categoryName}
                        </span>
                        <span className="text-xs font-mono font-bold text-clinical-500">{test.code}</span>
                      </div>

                      <h3 className="font-extrabold text-sm text-clinical-900 leading-snug">{test.name}</h3>
                      <p className="text-xs text-clinical-500 line-clamp-2 leading-relaxed font-sans">{test.description}</p>

                      <div className="p-2.5 rounded-xl bg-clinical-50 border border-clinical-100 text-[11px] text-clinical-600 space-y-1">
                        <div><strong>Specimen:</strong> {test.sampleType}</div>
                        <div><strong>Prep:</strong> {test.preparation}</div>
                        <div><strong>Turnaround:</strong> {test.turnaroundHours} Hours</div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-clinical-100 flex justify-between items-center z-10">
                      <div>
                        <span className="text-[10px] text-clinical-400 block font-semibold">Standard Price</span>
                        <strong className="text-base font-extrabold text-clinical-900">${test.price.toFixed(2)}</strong>
                      </div>

                      <button
                        onClick={() => handleOpenBookModal(test)}
                        className="py-2 px-4 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs hover:shadow-md"
                      >
                        {currentUser.role === 'DOCTOR' ? 'Order for Patient' : 'Book Test'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* REQUESTS / ACCESSIONING QUEUE                                 */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'requests' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-tealMed-600" />
                    <span>
                      {currentUser.role === 'PATIENT' ? 'My Test Requests & Tracking' : 'Clinical Accessions Queue'}
                    </span>
                  </h2>
                  <p className="text-xs text-clinical-500 mt-0.5">
                    Real-time status transitions from phlebotomy through result release
                  </p>
                </div>

                {(currentUser.role === 'PATIENT' || currentUser.role === 'DOCTOR') && (
                  <button
                    onClick={() => handleOpenBookModal()}
                    className="py-2.5 px-5 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-xs hover:shadow-md"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{currentUser.role === 'DOCTOR' ? 'New Clinical Order' : 'Book New Test'}</span>
                  </button>
                )}
              </div>

              {/* Filter Bar */}
              <div className="bg-white border border-clinical-200 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs shadow-xs">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <span className="font-bold text-clinical-600">Status:</span>
                  <select
                    value={requestStatusFilter}
                    onChange={(e) => setRequestStatusFilter(e.target.value)}
                    className="p-2 rounded-xl border border-clinical-300 text-xs font-bold focus:outline-none"
                  >
                    <option value="ALL">All Statuses ({requests.length})</option>
                    <option value="REQUESTED">Requested</option>
                    <option value="SAMPLE_COLLECTED">Sample Collected</option>
                    <option value="SAMPLE_RECEIVED">Sample Received</option>
                    <option value="PROCESSING">Processing</option>
                    <option value="RESULT_ENTERED">Result Entered</option>
                    <option value="REPORT_RELEASED">Report Released</option>
                    <option value="REJECTED">Sample Rejected</option>
                  </select>

                  <span className="font-bold text-clinical-600 pl-2">Priority:</span>
                  <select
                    value={requestPriorityFilter}
                    onChange={(e) => setRequestPriorityFilter(e.target.value)}
                    className="p-2 rounded-xl border border-clinical-300 text-xs font-bold focus:outline-none"
                  >
                    <option value="ALL">All Priorities</option>
                    <option value="NORMAL">Normal</option>
                    <option value="URGENT">Urgent</option>
                    <option value="CRITICAL">Critical</option>
                  </select>
                </div>

                <div className="relative w-full sm:w-72">
                  <Search className="w-4 h-4 text-clinical-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search accession, patient, test..."
                    value={requestSearch}
                    onChange={(e) => setRequestSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-clinical-300 text-xs focus:outline-none focus:border-tealMed-600"
                  />
                </div>
              </div>

              {/* Requests Table */}
              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">Accession Code</th>
                        <th className="p-3.5">Patient Details</th>
                        <th className="p-3.5">Diagnostic Panel</th>
                        <th className="p-3.5">Ref Doctor</th>
                        <th className="p-3.5">Schedule</th>
                        <th className="p-3.5 text-center">Priority</th>
                        <th className="p-3.5 text-center">Status</th>
                        <th className="p-3.5 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {filteredRequests.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="p-8 text-center text-clinical-400">
                            No laboratory requests found matching current criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredRequests.map(req => (
                          <tr key={req.id} className="hover:bg-clinical-50 transition-colors">
                            <td className="p-3.5 font-mono font-bold text-clinical-900">{req.accessionNumber}</td>
                            <td className="p-3.5">
                              <span className="font-bold text-clinical-900 block">{req.patientName}</span>
                              <span className="text-[10px] text-clinical-500 font-mono">DOB: {req.patientDob} ({req.patientGender})</span>
                            </td>
                            <td className="p-3.5">
                              <span className="font-bold text-clinical-900 block">{req.testName}</span>
                              <span className="text-[10px] text-tealMed-700 font-mono">{req.collectionType}</span>
                            </td>
                            <td className="p-3.5 text-clinical-600 font-medium">{req.doctorName}</td>
                            <td className="p-3.5 text-clinical-600 font-mono text-[11px]">
                              {req.scheduledDate} {req.scheduledTime}
                            </td>
                            <td className="p-3.5 text-center">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                req.priority === 'CRITICAL' ? 'bg-rose-100 text-rose-800' :
                                req.priority === 'URGENT' ? 'bg-amber-100 text-amber-800' :
                                'bg-slate-100 text-slate-700'
                              }`}>
                                {req.priority}
                              </span>
                            </td>
                            <td className="p-3.5 text-center">{renderStatusBadge(req.status)}</td>
                            <td className="p-3.5 text-right">
                              {currentUser.role === 'LAB_TECHNICIAN' ? (
                                req.status === 'REQUESTED' || req.status === 'SAMPLE_COLLECTION_PENDING' ? (
                                  <button
                                    onClick={() => handleOpenCollectModal(req)}
                                    className="py-1.5 px-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Collect Sample
                                  </button>
                                ) : req.status === 'SAMPLE_COLLECTED' ? (
                                  <button
                                    onClick={() => {
                                      const smp = samples.find(s => s.requestId === req.id);
                                      if (smp) handleReceiveSample(smp);
                                    }}
                                    className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Receive
                                  </button>
                                ) : req.status === 'SAMPLE_RECEIVED' ? (
                                  <button
                                    onClick={() => {
                                      const smp = samples.find(s => s.requestId === req.id);
                                      if (smp) handleStartProcessing(smp);
                                    }}
                                    className="py-1.5 px-3 rounded-lg bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Process
                                  </button>
                                ) : req.status === 'PROCESSING' ? (
                                  <button
                                    onClick={() => handleOpenResultEntry(req)}
                                    className="py-1.5 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Enter Results
                                  </button>
                                ) : req.status === 'RESULT_ENTERED' || req.status === 'RESULT_VERIFICATION' ? (
                                  <button
                                    onClick={() => handleReleaseReport(req.id)}
                                    className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                                  >
                                    Release
                                  </button>
                                ) : req.reportId ? (
                                  <button
                                    onClick={() => {
                                      const rep = reports.find(r => r.id === req.reportId);
                                      if (rep) setViewingReport(rep);
                                    }}
                                    className="py-1 px-3 rounded-lg bg-clinical-100 hover:bg-clinical-200 text-clinical-800 font-bold text-xs cursor-pointer"
                                  >
                                    Report
                                  </button>
                                ) : (
                                  <span className="text-clinical-400 font-mono font-bold">Done</span>
                                )
                              ) : req.reportId ? (
                                <button
                                  onClick={() => {
                                    const rep = reports.find(r => r.id === req.reportId);
                                    if (rep) setViewingReport(rep);
                                  }}
                                  className="py-1 px-3 rounded-lg bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer shadow-xs inline-flex items-center gap-1"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span>Report</span>
                                </button>
                              ) : (
                                <span className="text-clinical-400 font-mono text-[11px] font-bold">Processing</span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* REPORTS TAB                                                   */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-tealMed-600" />
                  <span>Verified Diagnostic Laboratory Reports</span>
                </h2>
                <p className="text-xs text-clinical-500 mt-0.5">
                  Official clinical diagnostic reports with reference ranges and technologist verifications
                </p>
              </div>

              {/* Reports List */}
              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">Report #</th>
                        <th className="p-3.5">Patient Name</th>
                        <th className="p-3.5">Diagnostic Test</th>
                        <th className="p-3.5">Specimen Type</th>
                        <th className="p-3.5">Verified By</th>
                        <th className="p-3.5">Release Date</th>
                        <th className="p-3.5 text-center">Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {reports.length === 0 ? (
                        <tr>
                          <td colSpan={8} className="p-8 text-center text-clinical-400">
                            No diagnostic reports released yet.
                          </td>
                        </tr>
                      ) : (
                        reports.map(rep => (
                          <tr key={rep.id} className="hover:bg-clinical-50 transition-colors">
                            <td className="p-3.5 font-mono font-bold text-clinical-900">{rep.reportNumber}</td>
                            <td className="p-3.5 font-bold text-clinical-900">{rep.patientName}</td>
                            <td className="p-3.5 text-clinical-700 font-bold">{rep.testName}</td>
                            <td className="p-3.5 text-clinical-500 text-[11px]">{rep.sampleType}</td>
                            <td className="p-3.5 text-clinical-600 font-medium">{rep.verifiedBy}</td>
                            <td className="p-3.5 text-clinical-500">{new Date(rep.reportedAt).toLocaleDateString()}</td>
                            <td className="p-3.5 text-center">
                              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                RELEASED
                              </span>
                            </td>
                            <td className="p-3.5 text-right space-x-1.5">
                              <button
                                type="button"
                                onClick={() => setViewingReport(rep)}
                                className="py-1 px-2.5 rounded-lg bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer shadow-xs inline-flex items-center gap-1"
                                title="Open full report viewer modal"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>View</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDownloadReportFile(rep)}
                                className="py-1 px-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs inline-flex items-center gap-1"
                                title="Download and save report document to your laptop"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Save File</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setViewingReport(rep);
                                  setTimeout(() => window.print(), 350);
                                }}
                                className="py-1 px-2.5 rounded-lg bg-clinical-100 hover:bg-clinical-200 text-clinical-800 font-bold text-xs cursor-pointer shadow-xs inline-flex items-center gap-1"
                                title="Print report document"
                              >
                                <Printer className="w-3.5 h-3.5" />
                                <span>Print</span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* BILLING TAB                                                   */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-tealMed-600" />
                  <span>Diagnostic Billing & Invoices Ledger</span>
                </h2>
                <p className="text-xs text-clinical-500 mt-0.5">
                  Itemized invoice records, collection fees, and electronic payment receipts
                </p>
              </div>

              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">Invoice #</th>
                        <th className="p-3.5">Patient Name</th>
                        <th className="p-3.5">Test Service</th>
                        <th className="p-3.5 text-right">Test Price</th>
                        <th className="p-3.5 text-right">Collection Fee</th>
                        <th className="p-3.5 text-right">Total Amount</th>
                        <th className="p-3.5 text-center">Payment Status</th>
                        <th className="p-3.5 text-right">Settlement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {invoices.map(inv => (
                        <tr key={inv.id} className="hover:bg-clinical-50 transition-colors">
                          <td className="p-3.5 font-mono font-bold text-clinical-900">{inv.invoiceNumber}</td>
                          <td className="p-3.5 font-bold text-clinical-900">{inv.patientName}</td>
                          <td className="p-3.5 text-clinical-700 font-medium">{inv.testName}</td>
                          <td className="p-3.5 text-right text-clinical-600">${inv.testPrice.toFixed(2)}</td>
                          <td className="p-3.5 text-right text-clinical-600">${inv.collectionFee.toFixed(2)}</td>
                          <td className="p-3.5 text-right font-black text-clinical-900 text-sm">${inv.totalAmount.toFixed(2)}</td>
                          <td className="p-3.5 text-center">
                            <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${
                              inv.status === 'PAID' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                            }`}>
                              {inv.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            {inv.status === 'PENDING' ? (
                              <button
                                onClick={() => handlePayInvoice(inv.id)}
                                className="py-1 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                              >
                                Settle Now
                              </button>
                            ) : (
                              <span className="text-clinical-500 font-mono text-[10px] font-bold">
                                {inv.transactionRef || 'Settled'}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* SAMPLES TAB                                                   */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'samples' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                  <TestTube2 className="w-5 h-5 text-amber-600" />
                  <span>Central Specimen Accessioning & Status</span>
                </h2>
                <p className="text-xs text-clinical-500 mt-0.5">
                  Barcode-tracked biological samples, collection logs, and quality verification
                </p>
              </div>

              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">Sample Barcode</th>
                        <th className="p-3.5">Patient</th>
                        <th className="p-3.5">Specimen Type</th>
                        <th className="p-3.5">Container</th>
                        <th className="p-3.5">Collected By</th>
                        <th className="p-3.5 text-center">Status</th>
                        <th className="p-3.5 text-right">Laboratory Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {samples.map(smp => (
                        <tr key={smp.id} className="hover:bg-clinical-50 transition-colors">
                          <td className="p-3.5 font-mono font-bold text-clinical-900">{smp.sampleBarcode}</td>
                          <td className="p-3.5 font-bold text-clinical-900">{smp.patientName}</td>
                          <td className="p-3.5 text-clinical-700 font-medium">{smp.sampleType}</td>
                          <td className="p-3.5 text-clinical-500 text-[11px]">{smp.containerType}</td>
                          <td className="p-3.5 text-clinical-600 font-medium">{smp.collectedBy}</td>
                          <td className="p-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              smp.status === 'COMPLETED' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                              smp.status === 'PROCESSING' ? 'bg-tealMed-50 text-tealMed-700 border border-tealMed-200' :
                              smp.status === 'REJECTED' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                              'bg-blue-50 text-blue-700 border border-blue-200'
                            }`}>
                              {smp.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-right space-x-1.5">
                            {smp.status === 'COLLECTED' && (
                              <button
                                onClick={() => handleReceiveSample(smp)}
                                className="py-1 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer"
                              >
                                Receive in Lab
                              </button>
                            )}
                            {smp.status === 'RECEIVED' && (
                              <button
                                onClick={() => handleStartProcessing(smp)}
                                className="py-1 px-2.5 rounded-lg bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer"
                              >
                                Start Run
                              </button>
                            )}
                            {smp.status !== 'REJECTED' && smp.status !== 'COMPLETED' && (
                              <button
                                onClick={() => handleOpenRejectModal(smp)}
                                className="py-1 px-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 font-bold text-xs cursor-pointer"
                                title="Reject Sample"
                              >
                                Reject
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* INVENTORY TAB                                                 */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                  <Box className="w-5 h-5 text-purple-600" />
                  <span>Phlebotomy & Analytical Reagent Inventory</span>
                </h2>
                <p className="text-xs text-clinical-500 mt-0.5">
                  Stock replenishment, minimum safety thresholds, and expiry control
                </p>
              </div>

              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">SKU Code</th>
                        <th className="p-3.5">Supply Name</th>
                        <th className="p-3.5">Category</th>
                        <th className="p-3.5">Manufacturer</th>
                        <th className="p-3.5 text-center">Available Stock</th>
                        <th className="p-3.5">Expiry Date</th>
                        <th className="p-3.5 text-center">Status</th>
                        <th className="p-3.5 text-right">Adjust Stock</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {inventory.map(item => (
                        <tr key={item.id} className="hover:bg-clinical-50 transition-colors">
                          <td className="p-3.5 font-mono font-bold text-clinical-900">{item.sku}</td>
                          <td className="p-3.5 font-bold text-clinical-900">{item.name}</td>
                          <td className="p-3.5 text-clinical-600">{item.category}</td>
                          <td className="p-3.5 text-clinical-500">{item.supplier}</td>
                          <td className="p-3.5 text-center font-bold text-clinical-900 text-sm">
                            {item.quantity} {item.unit}
                          </td>
                          <td className="p-3.5 text-clinical-600 font-mono text-[11px]">{item.expiryDate}</td>
                          <td className="p-3.5 text-center">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.status === 'AVAILABLE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                              item.status === 'LOW_STOCK' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                              'bg-rose-50 text-rose-700 border border-rose-200'
                            }`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            <div className="flex items-center justify-end space-x-1">
                              <button
                                onClick={() => handleAdjustInventory(item, -10, 'Daily phlebotomy draw')}
                                disabled={item.quantity <= 0}
                                className="py-1 px-2 rounded-lg bg-clinical-100 hover:bg-clinical-200 text-clinical-800 font-bold text-xs cursor-pointer disabled:opacity-40"
                                title="Deduct 10"
                              >
                                -10
                              </button>
                              <button
                                onClick={() => handleAdjustInventory(item, +50, 'Warehouse replenishment')}
                                className="py-1 px-2 rounded-lg bg-tealMed-50 hover:bg-tealMed-100 text-tealMed-800 border border-tealMed-200 font-bold text-xs cursor-pointer"
                                title="Restock 50"
                              >
                                +50
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* USERS / PATIENTS DIRECTORY                                    */}
          {/* ------------------------------------------------------------- */}
          {(activeTab === 'users' || activeTab === 'patients') && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Clinical Staff & Patient Directory</span>
                  </h2>
                  <p className="text-xs text-clinical-500 mt-0.5">
                    Authorized medical practitioners, laboratory personnel, and registered patients
                  </p>
                </div>

                {currentUser.role === 'ADMIN' && (
                  <button
                    onClick={() => setShowAddStaffModal(true)}
                    className="py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1 shadow-xs"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Onboard New Staff</span>
                  </button>
                )}
              </div>

              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold">
                        <th className="p-3.5">Full Name</th>
                        <th className="p-3.5">Contact Email & Phone</th>
                        <th className="p-3.5">Clinical Department</th>
                        <th className="p-3.5">Role</th>
                        <th className="p-3.5 text-center">Status</th>
                        <th className="p-3.5 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {patients.map(p => (
                        <tr key={p.id} className="hover:bg-clinical-50 transition-colors">
                          <td className="p-3.5 font-bold text-clinical-900">{p.fullName}</td>
                          <td className="p-3.5 text-clinical-600 font-mono text-[11px]">{p.email} • {p.phone}</td>
                          <td className="p-3.5 text-clinical-500">Patient Records</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-tealMed-50 text-tealMed-700 border border-tealMed-200">
                              PATIENT
                            </span>
                          </td>
                          <td className="p-3.5 text-center">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                              {p.status || 'ACTIVE'}
                            </span>
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => handleOpenBookModal(null, p)}
                              className="py-1 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 font-bold text-xs cursor-pointer"
                            >
                              Order Test
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* AUDIT LOG TAB                                                 */}
          {/* ------------------------------------------------------------- */}
          {activeTab === 'audit' && currentUser.role === 'ADMIN' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-clinical-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <span>Immutable Clinical & Diagnostic Audit Trail</span>
                </h2>
                <p className="text-xs text-clinical-500 mt-0.5">
                  Timestamped records of user logins, specimen accessions, result modifications, and report releases
                </p>
              </div>

              <div className="bg-white border border-clinical-200 rounded-2xl overflow-hidden shadow-xs text-xs font-mono">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-clinical-200 bg-clinical-50 text-clinical-600 font-bold text-[11px]">
                        <th className="p-3.5">Timestamp</th>
                        <th className="p-3.5">Actor</th>
                        <th className="p-3.5">Role</th>
                        <th className="p-3.5">Action Code</th>
                        <th className="p-3.5">Clinical Event Summary</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-clinical-100">
                      {auditLogs.map(log => (
                        <tr key={log.id} className="hover:bg-clinical-50 transition-colors">
                          <td className="p-3.5 text-clinical-500 whitespace-nowrap">{new Date(log.timestamp).toLocaleString()}</td>
                          <td className="p-3.5 font-sans font-bold text-clinical-900">{log.actor}</td>
                          <td className="p-3.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-clinical-100 text-clinical-800 border border-clinical-200">
                              {log.role}
                            </span>
                          </td>
                          <td className="p-3.5 font-bold text-tealMed-700">{log.action}</td>
                          <td className="p-3.5 font-sans text-clinical-700 max-w-md">{log.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ============================================================= */}
      {/* MODALS                                                        */}
      {/* ============================================================= */}
      {showBookTestModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-200 max-w-xl w-full rounded-2xl p-6 space-y-5 text-xs text-clinical-900 shadow-xl">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-clinical-900">
                  {currentUser.role === 'DOCTOR' ? 'Create Diagnostic Lab Order' : 'Book Laboratory Test'}
                </h3>
                <p className="text-xs text-clinical-500">Configure appointment schedule and specimen collection mode</p>
              </div>
              <button
                onClick={() => setShowBookTestModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitBooking} className="space-y-4">
              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Select Laboratory Test *</label>
                <select
                  value={bookFormData.testId}
                  onChange={(e) => setBookFormData({ ...bookFormData, testId: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 bg-white text-xs font-bold focus:border-tealMed-600 focus:outline-none"
                >
                  {tests.map(t => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.code}) — ${t.price.toFixed(2)} [{t.sampleType}]
                    </option>
                  ))}
                </select>
              </div>

              {currentUser.role !== 'PATIENT' && (
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Select Patient Record *</label>
                  <select
                    value={bookFormData.patientId}
                    onChange={(e) => setBookFormData({ ...bookFormData, patientId: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 bg-white text-xs font-bold focus:border-tealMed-600 focus:outline-none"
                  >
                    {patients.map(p => (
                      <option key={p.id} value={p.id}>{p.fullName} (DOB: {p.dateOfBirth} - {p.phone})</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Collection Mode</label>
                  <select
                    value={bookFormData.collectionType}
                    onChange={(e) => setBookFormData({ ...bookFormData, collectionType: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 bg-white text-xs focus:border-tealMed-600 focus:outline-none"
                  >
                    <option value="LAB_VISIT">Central Laboratory Visit (No Fee)</option>
                    <option value="HOME_COLLECTION">Home Phlebotomy (+$15.00)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Priority</label>
                  <select
                    value={bookFormData.priority}
                    onChange={(e) => setBookFormData({ ...bookFormData, priority: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 bg-white text-xs focus:border-tealMed-600 focus:outline-none"
                  >
                    <option value="NORMAL">Normal Priority (Standard TAT)</option>
                    <option value="URGENT">Urgent (Expedited Phlebotomy)</option>
                    <option value="CRITICAL">Critical Stat Priority</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Scheduled Date *</label>
                  <input
                    type="date"
                    required
                    value={bookFormData.scheduledDate}
                    onChange={(e) => setBookFormData({ ...bookFormData, scheduledDate: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Time Slot</label>
                  <select
                    value={bookFormData.scheduledTime}
                    onChange={(e) => setBookFormData({ ...bookFormData, scheduledTime: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none font-mono"
                  >
                    <option value="07:30 AM">07:30 AM (Fasting)</option>
                    <option value="08:30 AM">08:30 AM (Fasting)</option>
                    <option value="09:30 AM">09:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:30 PM">02:30 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Clinical Indications / Referral Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Annual health screening, rule out microcytic anemia..."
                  value={bookFormData.clinicalNotes}
                  onChange={(e) => setBookFormData({ ...bookFormData, clinicalNotes: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-tealMed-600 focus:outline-none"
                />
              </div>

              {/* Cost Summary */}
              {(() => {
                const selTest = tests.find(t => t.id === bookFormData.testId) || tests[0];
                const price = selTest?.price || 0;
                const collFee = bookFormData.collectionType === 'HOME_COLLECTION' ? 15.00 : 0.00;
                const tax = parseFloat(((price + collFee) * 0.08).toFixed(2));
                const total = price + collFee + tax;

                return (
                  <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 text-xs space-y-1.5 font-mono">
                    <div className="flex justify-between text-clinical-600">
                      <span>Test Fee ({selTest?.name}):</span>
                      <span>${price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-clinical-600">
                      <span>Phlebotomy Collection Fee:</span>
                      <span>${collFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-clinical-600">
                      <span>Healthcare Tax (8%):</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-extrabold text-clinical-900 border-t border-clinical-200 pt-1.5 text-sm">
                      <span>Total Invoice Amount:</span>
                      <span className="text-tealMed-700">${total.toFixed(2)}</span>
                    </div>
                  </div>
                );
              })()}

              <div className="flex justify-end space-x-2.5 pt-3 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowBookTestModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submittingBooking}
                  className="py-2.5 px-6 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  {submittingBooking ? 'Submitting Order...' : 'Confirm Diagnostic Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCollectModal && selectedRequestForCollect && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-200 max-w-md w-full rounded-2xl p-6 space-y-5 text-xs text-clinical-900 shadow-xl">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-700 uppercase block font-mono">Phlebotomy Accessioning</span>
                <h3 className="font-extrabold text-base text-clinical-900">Collect Specimen for {selectedRequestForCollect.patientName}</h3>
                <p className="text-xs text-clinical-500">{selectedRequestForCollect.testName} ({selectedRequestForCollect.accessionNumber})</p>
              </div>
              <button
                onClick={() => setShowCollectModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleExecuteCollect} className="space-y-4">
              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Container / Vacutainer Tube Type *</label>
                <input
                  type="text"
                  required
                  value={collectContainerType}
                  onChange={(e) => setCollectContainerType(e.target.value)}
                  placeholder="e.g. Lavender Top EDTA 4mL Vacutainer"
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Phlebotomy Specimen Quality Notes</label>
                <textarea
                  rows={2}
                  value={collectNotes}
                  onChange={(e) => setCollectNotes(e.target.value)}
                  placeholder="e.g. Good flow, no hemolysis observed."
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-amber-600 focus:outline-none"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-1">
                <strong className="block font-bold">Automatic Barcode Generation</strong>
                <p className="text-[11px]">Submitting will assign a unique barcode (e.g. <code>SMP-2026-XXXX</code>) and transition accession to <strong>SAMPLE_COLLECTED</strong>.</p>
              </div>

              <div className="flex justify-end space-x-2.5 pt-2 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowCollectModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processingCollect}
                  className="py-2.5 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  {processingCollect ? 'Logging...' : 'Confirm Specimen Collected'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRejectModal && selectedSampleForReject && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-200 max-w-md w-full rounded-2xl p-6 space-y-5 text-xs text-clinical-900 shadow-xl">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <span className="text-[10px] font-bold text-rose-700 uppercase block font-mono">Specimen Quality Control</span>
                <h3 className="font-extrabold text-base text-clinical-900">Reject Sample {selectedSampleForReject.sampleBarcode}</h3>
                <p className="text-xs text-clinical-500">Patient: {selectedSampleForReject.patientName}</p>
              </div>
              <button
                onClick={() => setShowRejectModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleExecuteReject} className="space-y-4">
              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Clinical Rejection Reason *</label>
                <select
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:outline-none"
                >
                  <option value="Hemolyzed specimen unsuitable for spectrophotometry">Hemolyzed specimen unsuitable for spectrophotometry</option>
                  <option value="Insufficient specimen volume (QNS)">Insufficient specimen volume (QNS)</option>
                  <option value="Incorrect specimen container or anticoagulant">Incorrect specimen container or anticoagulant</option>
                  <option value="Clotted whole blood specimen">Clotted whole blood specimen</option>
                  <option value="Specimen transit temperature out of specification">Specimen transit temperature out of specification</option>
                </select>
              </div>

              <div className="flex justify-end space-x-2.5 pt-2 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowRejectModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processingReject}
                  className="py-2.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  {processingReject ? 'Rejecting...' : 'Confirm Sample Rejection'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showResultEntryModal && selectedRequestForResult && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-clinical-200 max-w-2xl w-full rounded-2xl p-6 space-y-5 text-xs text-clinical-900 shadow-xl my-8">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <span className="text-[10px] font-bold text-purple-700 uppercase block font-mono">Clinical Analytical Result Entry</span>
                <h3 className="font-extrabold text-base text-clinical-900">
                  {selectedRequestForResult.testName}
                </h3>
                <p className="text-xs text-clinical-500">
                  Accession: <strong className="font-mono">{selectedRequestForResult.accessionNumber}</strong> • Patient: <strong>{selectedRequestForResult.patientName}</strong> (DOB: {selectedRequestForResult.patientDob})
                </p>
              </div>
              <button
                onClick={() => setShowResultEntryModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveResults} className="space-y-4">
              <div className="border border-clinical-200 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="bg-clinical-50 border-b border-clinical-200 text-clinical-700 font-bold text-[11px]">
                      <th className="p-2.5 font-sans">Diagnostic Parameter</th>
                      <th className="p-2.5">Measured Value</th>
                      <th className="p-2.5">Unit</th>
                      <th className="p-2.5">Biological Reference Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-clinical-100">
                    {resultParamInputs.map((param, idx) => (
                      <tr key={idx}>
                        <td className="p-2.5 font-sans font-bold text-clinical-900">{param.name}</td>
                        <td className="p-2.5">
                          <input
                            type="number"
                            step="any"
                            required
                            value={param.value}
                            onChange={(e) => {
                              const updated = [...resultParamInputs];
                              updated[idx].value = e.target.value;
                              setResultParamInputs(updated);
                            }}
                            className="w-28 p-1.5 rounded-lg border border-clinical-300 font-bold text-clinical-900 text-xs focus:border-purple-600 focus:outline-none"
                          />
                        </td>
                        <td className="p-2.5 text-clinical-500">{param.unit}</td>
                        <td className="p-2.5 text-clinical-600">{param.refRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Laboratory Technologist Remarks / Impression</label>
                <textarea
                  rows={2}
                  value={clinicalImpressionInput}
                  onChange={(e) => setClinicalImpressionInput(e.target.value)}
                  placeholder="e.g. Measured on calibrated automated hematology analyzer. Duplicate verification performed."
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-2.5 pt-3 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowResultEntryModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={savingResults}
                  className="py-2.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
                >
                  {savingResults ? 'Recording Results...' : 'Save & Queue for Verification'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewingReport && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-clinical-300 max-w-3xl w-full rounded-2xl p-8 space-y-6 text-xs text-clinical-900 shadow-2xl my-8 report-page">
            <div className="flex justify-between items-center border-b border-clinical-200 pb-4 no-print">
              <span className="text-xs font-bold text-tealMed-700 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-4 h-4" />
                <span>OFFICIAL VERIFIED LABORATORY REPORT</span>
              </span>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => handleDownloadReportFile(viewingReport)}
                  className="py-2 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all"
                  title="Directly save report document to your laptop Downloads folder"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save to Laptop</span>
                </button>

                <button
                  type="button"
                  onClick={() => window.print()}
                  className="py-2 px-3.5 rounded-xl bg-tealMed-600 hover:bg-tealMed-700 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5 shadow-xs hover:shadow-md transition-all"
                  title="Print or save as PDF via system print dialog"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewingReport(null)}
                  className="p-2 rounded-xl bg-clinical-100 hover:bg-clinical-200 text-clinical-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start border-b-2 border-clinical-900 pb-4">
              <LabcareLogo size="large" />
              <div className="text-right font-mono">
                <span className="text-[10px] text-clinical-400 block font-bold">REPORT NUMBER</span>
                <strong className="text-sm font-bold text-clinical-900">{viewingReport.reportNumber}</strong>
                <span className="text-[10px] text-emerald-700 block font-bold mt-1">STATUS: RELEASED</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs">
              <div className="space-y-1">
                <div><span className="text-clinical-500 font-medium">Patient Name:</span> <strong className="text-clinical-900">{viewingReport.patientName}</strong></div>
                <div><span className="text-clinical-500 font-medium">Patient ID:</span> <span className="font-mono">{viewingReport.patientId}</span></div>
                <div><span className="text-clinical-500 font-medium">DOB / Gender:</span> {viewingReport.patientDob} ({viewingReport.patientGender})</div>
                <div><span className="text-clinical-500 font-medium">Contact Phone:</span> {viewingReport.patientPhone}</div>
              </div>
              <div className="space-y-1">
                <div><span className="text-clinical-500 font-medium">Referring Physician:</span> <strong>{viewingReport.doctorName}</strong></div>
                <div><span className="text-clinical-500 font-medium">Specimen Barcode:</span> <span className="font-mono">{viewingReport.sampleBarcode}</span></div>
                <div><span className="text-clinical-500 font-medium">Specimen Type:</span> {viewingReport.sampleType}</div>
                <div><span className="text-clinical-500 font-medium">Report Released:</span> {new Date(viewingReport.reportedAt).toLocaleString()}</div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-extrabold text-sm text-clinical-900 border-b border-clinical-200 pb-1">
                {viewingReport.testName} ({viewingReport.testCode})
              </h3>

              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b-2 border-clinical-300 text-clinical-700 font-bold text-[11px]">
                    <th className="py-2 font-sans">Investigation Parameter</th>
                    <th className="py-2 text-right">Result</th>
                    <th className="py-2 px-3">Unit</th>
                    <th className="py-2">Biological Reference Interval</th>
                    <th className="py-2 text-center">Flag</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-clinical-200">
                  {viewingReport.resultData.map((res, i) => (
                    <tr key={i} className={res.flag === 'CRITICAL' ? 'bg-rose-50/70 font-bold' : res.flag !== 'NORMAL' ? 'bg-amber-50/50' : ''}>
                      <td className="py-2 font-sans font-bold text-clinical-900">{res.parameter}</td>
                      <td className="py-2 text-right font-bold text-clinical-900">{res.result}</td>
                      <td className="py-2 px-3 text-clinical-500">{res.unit}</td>
                      <td className="py-2 text-clinical-600">{res.reference}</td>
                      <td className="py-2 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          res.flag === 'CRITICAL' ? 'bg-rose-600 text-white' :
                          res.flag === 'HIGH' ? 'bg-amber-100 text-amber-900' :
                          res.flag === 'LOW' ? 'bg-amber-100 text-amber-900' :
                          'bg-emerald-50 text-emerald-800'
                        }`}>
                          {res.flag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs space-y-1">
              <strong className="block font-bold text-clinical-900">Clinical Remarks & Diagnostic Interpretation:</strong>
              <p className="text-clinical-700 font-sans leading-relaxed">{viewingReport.summaryRemarks}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-clinical-200 text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-clinical-400 block font-bold uppercase tracking-wider">MEDICAL LABORATORY TECHNOLOGIST</span>
                <strong className="text-clinical-900 block font-sans">{viewingReport.technologist}</strong>
                <span className="text-[10px] text-clinical-500 font-mono">ASCP Certified Technologist • Central Lab</span>
              </div>
              <div className="space-y-1 text-right">
                <span className="text-[10px] text-clinical-400 block font-bold uppercase tracking-wider">VERIFYING CLINICAL PATHOLOGIST / PHYSICIAN</span>
                <strong className="text-clinical-900 block font-sans">{viewingReport.verifiedBy}</strong>
                <span className="text-[10px] text-emerald-700 font-bold flex items-center justify-end gap-1 font-mono">
                  <FileSignature className="w-3.5 h-3.5" />
                  <span>Digitally Verified & Authenticated</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddTestModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-200 max-w-md w-full rounded-2xl p-6 space-y-4 text-xs text-clinical-900 shadow-xl">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-clinical-900">Add Diagnostic Lab Test</h3>
                <p className="text-xs text-clinical-500">Register new diagnostic panel in test master</p>
              </div>
              <button
                onClick={() => setShowAddTestModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTest} className="space-y-3">
              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Test Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ferritin & Iron Binding Capacity"
                  value={newTestData.name}
                  onChange={(e) => setNewTestData({ ...newTestData, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Category</label>
                  <select
                    value={newTestData.categoryId}
                    onChange={(e) => setNewTestData({ ...newTestData, categoryId: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                  >
                    {categories.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Price ($) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="45.00"
                    value={newTestData.price}
                    onChange={(e) => setNewTestData({ ...newTestData, price: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs font-mono font-bold focus:border-purple-600 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Specimen Tube Requirement</label>
                <input
                  type="text"
                  value={newTestData.sampleType}
                  onChange={(e) => setNewTestData({ ...newTestData, sampleType: e.target.value })}
                  placeholder="e.g. Serum (SST Gold Top)"
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Patient Preparation Instructions</label>
                <textarea
                  rows={2}
                  value={newTestData.preparation}
                  onChange={(e) => setNewTestData({ ...newTestData, preparation: e.target.value })}
                  placeholder="e.g. Overnight 10-12 hour fasting required."
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowAddTestModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                >
                  Register Test
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showAddStaffModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-clinical-200 max-w-md w-full rounded-2xl p-6 space-y-4 text-xs text-clinical-900 shadow-xl">
            <div className="flex justify-between items-start border-b border-clinical-200 pb-3">
              <div>
                <h3 className="font-extrabold text-base text-clinical-900">Onboard Clinical Staff</h3>
                <p className="text-xs text-clinical-500">Create practitioner or laboratory technologist profile</p>
              </div>
              <button
                onClick={() => setShowAddStaffModal(false)}
                className="text-clinical-400 hover:text-clinical-800 p-1 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateStaff} className="space-y-3">
              <div>
                <label className="block font-semibold text-clinical-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Jennifer Collins, MD"
                  value={newStaffData.fullName}
                  onChange={(e) => setNewStaffData({ ...newStaffData, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Role</label>
                  <select
                    value={newStaffData.role}
                    onChange={(e) => setNewStaffData({ ...newStaffData, role: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs font-bold focus:border-purple-600 focus:outline-none"
                  >
                    <option value="DOCTOR">Doctor / Physician</option>
                    <option value="LAB_TECHNICIAN">Lab Technologist</option>
                    <option value="ADMIN">Administrator</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jennifer@labcare.demo"
                    value={newStaffData.email}
                    onChange={(e) => setNewStaffData({ ...newStaffData, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">Department</label>
                  <input
                    type="text"
                    placeholder="Pathology & Hematology"
                    value={newStaffData.department}
                    onChange={(e) => setNewStaffData({ ...newStaffData, department: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-clinical-700 mb-1">License / ID</label>
                  <input
                    type="text"
                    placeholder="MED-LIC-7740"
                    value={newStaffData.licenseId}
                    onChange={(e) => setNewStaffData({ ...newStaffData, licenseId: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-clinical-300 text-xs font-mono focus:border-purple-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-2 pt-2 border-t border-clinical-200">
                <button
                  type="button"
                  onClick={() => setShowAddStaffModal(false)}
                  className="py-2.5 px-4 rounded-xl border border-clinical-300 text-clinical-700 font-bold text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2.5 px-5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs cursor-pointer shadow-xs"
                >
                  Onboard Staff Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
