// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import TrustedLogos from './components/TrustedLogos';
// import Services from './components/Services';
// import Workflow from './components/Workflow';
// import AnalyticsView from './components/AnalyticsView';
// import Portfolio from './components/Portfolio';
// import Process from './components/Process';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// import ContactCTA from './components/ContactCTA';
// import Footer from './components/Footer';
// import FloatingChat from './components/FloatingChat';

// export default function App() {
//   const [selectedPlanNode, setSelectedPlanNode] = useState('');
//   const [telemetryMetrics, setTelemetryMetrics] = useState({ totalLeads: '...', revenue: '...', conversions: '...', hoursSaved: '...' });

//   const pullSystemMetrics = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/v1/agency/telemetry');
//       if (res.data.success) {
//         setTelemetryMetrics(res.data.telemetry);
//       }
//     } catch (err) {
//       console.error("Metric harvesting loop failed.", err);
//     }
//   };

//   useEffect(() => {
//     pullSystemMetrics();
//   }, []);

//   const forwardCtaFocus = (planName) => {
//     setSelectedPlanNode(planName);
//     document.getElementById('contact-panel')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <Navbar onActionTrigger={forwardCtaFocus} />
//       <Hero metrics={telemetryMetrics} onActionTrigger={forwardCtaFocus} />
//       <TrustedLogos />
//       <Services />
//       <Workflow />
//       <AnalyticsView metrics={telemetryMetrics} />
//       <Portfolio />
//       <Process />
//       <Pricing onSelectPlan={forwardCtaFocus} />
//       <Testimonials />
//       <ContactCTA selectedTierPlan={selectedPlanNode} />
//       <Footer onSubscribeConfirm={pullSystemMetrics} />
//       <FloatingChat />
//     </>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

// Core Layout Submodules
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedLogos from './components/TrustedLogos';
import Services from './components/Services';
import Workflow from './components/Workflow';
import AnalyticsView from './components/AnalyticsView';
import MarketingReview from './components/MarketingReview'; // NEW: Marketing & Email Module
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingChat from './components/FloatingChat';

// Initialize Real-Time Coordination Channel
const socket = io('http://localhost:5000');

export default function App() {
  // Global Project Tracking State
  const [selectedPlanNode, setSelectedPlanNode] = useState('');
  const [metrics, setMetrics] = useState({ 
    totalLeads: 12540, 
    revenue: "₹18,75,000", 
    conversions: 8765, 
    hoursSaved: 320,
    emailMetrics: {
      deliveryRate: "99.4%",
      avgOpenRate: "42.8%",
      clickThroughRate: "11.6%",
      activeSequences: 12
    }
  });
  
  // Geolocation Socket.io state arrays
  const [coords, setCoords] = useState({ lat: 'Inactive', lng: 'Inactive' });

  // Form State Matrices
  const [subEmail, setSubEmail] = useState('');
  const [otpVal, setOtpVal] = useState('');
  const [otpScreen, setOtpScreen] = useState(false);
  const [subMessage, setSubMessage] = useState('');

  const [bookingName, setBookingName] = useState('');
  const [bookingEmail, setBookingEmail] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');

  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatLogs, setChatLogs] = useState([{ side: 'bot', txt: 'Automated live support online. Enter parameter queries.' }]);

  // Synchronization Lifecycle Loop
  const pullSystemMetrics = async () => {
    try {
      // API Call: Sync dashboard statistics directly with database state updates
      const res = await axios.get('http://localhost:5000/api/v1/agency/telemetry');
      if (res.data.success) {
        setMetrics(res.data.telemetry);
      }
    } catch (err) {
      console.warn('Ecosystem telemetry offline. Running safe fallback local cache values.', err);
    }
  };

  useEffect(() => {
    pullSystemMetrics();

    // Socket.io Listener: Track global coordination node updates in real time
    socket.on('receive_live_telemetry_stream', (data) => setCoords(data));
    
    return () => {
      socket.off('receive_live_telemetry_stream');
    };
  }, []);

  const triggerCtaTriage = (plan) => {
    setSelectedPlanNode(plan);
    
    // Support handles for both matching target section id hashes
    const targetElement = document.getElementById('cta-triage-panel') || document.getElementById('contact-panel');
    targetElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const transmitLocationStream = () => {
    if (!navigator.geolocation) return alert('Platform navigation hardware lacks geolocation sensors.');
    navigator.geolocation.getCurrentPosition((pos) => {
      socket.emit('transmit_location_coordinates', { 
        lat: pos.coords.latitude.toFixed(4), 
        lng: pos.coords.longitude.toFixed(4) 
      });
    });
  };

  // Step 1: Send a high-security OTP code straight to the user's inbox
  const initializeNewsletterSubscription = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/subscribe', { email: subEmail });
      if (res.data.success) {
        setOtpScreen(true);
        setSubMessage('✉️ Authentication code sent successfully! Check your inbox.');
      }
    } catch (err) {
      setSubMessage(`❌ ${err.response?.data?.message || 'Transaction rejected.'}`);
    }
  };

  // Step 2: Validate the code and securely write the data row to MongoDB
  const confirmOtpTokenPayload = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/verify-otp', { email: subEmail, otp: otpVal });
      if (res.data.success) {
        setSubMessage('✅ Verification complete. Email registered securely!');
        setOtpScreen(false);
        setSubEmail('');
        setOtpVal('');
        pullSystemMetrics(); // Refresh metric telemetry counts post-ingestion
      }
    } catch (err) {
      setSubMessage(`❌ ${err.response?.data?.message || 'Access code validation failure.'}`);
    }
  };

  const handleBookingForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/consultation', {
        name: bookingName, 
        email: bookingEmail, 
        selectedPlan: selectedPlanNode || 'General Audit Evaluation'
      });
      if (res.data.success) {
        setBookingStatus('✅ Consultation request securely mapped to active CRM matrices.');
        setBookingName(''); 
        setBookingEmail('');
        pullSystemMetrics();
      }
    } catch (err) {
      setBookingStatus('❌ Critical pipeline transaction fault handling configuration data.');
    }
  };

  // Gateway Automation Module: Handles the financial onboarding workflow natively
  const triggerFinancialCheckout = async (plan, cost) => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/payments/create-order', { amount: cost, planName: plan });
      const { order } = res.data;

      const dynamicCheckoutOptions = {
        key: "rzp_test_input_your_key_here", // Input real-time key string profiles during active production deployments
        amount: order.amount,
        currency: "INR",
        name: "AI Growth Solutions",
        description: `Activation Token: ${plan}`,
        order_id: order.id,
        handler: function (response) {
          alert(`✅ Secure transaction processing verified. Authorization Token: ${response.razorpay_payment_id}`);
          pullSystemMetrics();
        },
        theme: { color: "#3b82f6" }
      };
      const gatewayInstance = new window.Razorpay(dynamicCheckoutOptions);
      gatewayInstance.open();
    } catch (err) {
      alert('⚠️ Checkout initialization dropped. Confirm merchant gateway environmental parameter variables inside terminal.');
    }
  };

  const executeChatStream = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const pipeline = [...chatLogs, { side: 'user', txt: chatInput }];
    setChatLogs(pipeline);
    const textHold = chatInput;
    setChatInput('');

    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/ai-agent', { message: textHold });
      setChatLogs([...pipeline, { side: 'bot', txt: res.data.response }]);
    } catch (err) {
      setChatLogs([...pipeline, { side: 'bot', txt: 'Ecosystem endpoint unreachable.' }]);
    }
  };

  return (
    <>
      {/* 1. GLOBAL NAVIGATION MATRIX LAYER */}
      <Navbar onActionTrigger={triggerCtaTriage} />

      {/* 2. HERO LANDING & LIVING LOG MODULES */}
      <Hero metrics={metrics} onActionTrigger={triggerCtaTriage} />

      {/* 3. SCROLLING TRUST GRAPH SYSTEM TICKER */}
      <TrustedLogos />

      {/* 4 & 5. CORE BUNDLES & ACTION WORKFLOW CHIPS */}
      <Services />
      <Workflow />

      {/* 6 & 7. REAL-TIME PLATFORM DATA DIAGNOSTICS */}
      <AnalyticsView metrics={metrics} />

      {/* ADDED: DIGITAL & EMAIL MARKETING CAMPAIGN REVIEW SECTION */}
      <MarketingReview emailMetrics={metrics.emailMetrics} />

      {/* WEB SOCKET GEOLOCATION VISUAL COORDINATION DOCK */}
      <section style={{ padding: '60px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
        <div className="glass-card" style={{ padding: '32px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h4>🛰️ Socket.io Infrastructure Tracking Matrix Map</h4>
          <p style={{ fontSize: '13px', color: 'var(--text2)', margin: '12px 0 24px' }}>Test bidirectional messaging coordination loops instantly below.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '24px' }}>
            <div><span style={{ fontSize: '12px', color: 'var(--text3)' }}>ACTIVE NODE LAT</span><h3 style={{ color: 'var(--blue2)' }}>{coords.lat}</h3></div>
            <div><span style={{ fontSize: '12px', color: 'var(--text3)' }}>ACTIVE NODE LNG</span><h3 style={{ color: 'var(--green)' }}>{coords.lng}</h3></div>
          </div>
          <button onClick={transmitLocationStream} style={{ padding: '12px 24px', background: 'var(--blue)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Broadcast Geolocation Strings
          </button>
        </div>
      </section>

      {/* 8 & 9. COMPLETED PLATFORMS & WORKING PIPELINE NODES */}
      <Portfolio />
      <Process />

      {/* 10. PRICING TIERS & AUTOMATED GATEWAY NODES */}
      <Pricing onSelectPlan={triggerCtaTriage} onCheckoutTrigger={triggerFinancialCheckout} />

      {/* 11. VALUED STAKEHOLDER CONVERSION CARD NODES */}
      <Testimonials />

      {/* 12 (TOP). DYNAMIC CONVERSIONS STRATEGY PANEL (BOOKING FORM) */}
      <section id="cta-triage-panel">
        <ContactCTA 
          selectedTierPlan={selectedPlanNode}
          bookingName={bookingName}
          setBookingName={setBookingName}
          bookingEmail={bookingEmail}
          setBookingEmail={setBookingEmail}
          bookingStatus={bookingStatus}
          handleBookingForm={handleBookingForm}
        />
      </section>

      {/* 12 (BOTTOM). FOOTER & HIGH-SECURITY EMAIL OTP INPUT ENGINE */}
      <footer id="footer" style={{ padding: '60px', background: 'var(--bg3)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <h5 style={{ marginBottom: '12px' }}>Subscribe To Our Engineering Architecture Logs</h5>
        {!otpScreen ? (
          <form onSubmit={initializeNewsletterSubscription} style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto' }}>
            <input type="email" required value={subEmail} onChange={e => setSubEmail(e.target.value)} placeholder="name@enterprise.com" style={{ padding: '12px', background: 'var(--bg)', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px', flex: 1 }} />
            <button type="submit" style={{ padding: '12px 20px', background: 'var(--blue)', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Request Access</button>
          </form>
        ) : (
          <form onSubmit={confirmOtpTokenPayload} style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto' }}>
            <input type="text" required value={otpVal} onChange={e => setOtpVal(e.target.value)} placeholder="Enter 6-Digit Code Token" style={{ padding: '12px', background: 'var(--bg)', border: '1px solid var(--border)', color: '#fff', borderRadius: '6px', flex: 1, textAlign: 'center', letterSpacing: '4px' }} />
            <button type="submit" style={{ padding: '12px 20px', background: 'var(--green)', border: 'none', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Verify Security Code</button>
          </form>
        )}
        {subMessage && <p style={{ fontSize: '12px', marginTop: '12px' }}>{subMessage}</p>}
        <p style={{ marginTop: '32px', fontSize: '11px', color: 'var(--text3)' }}>© 2026 AI Growth Solutions. Unified MERN Engine Cluster Active.</p>
      </footer>

      {/* FLOATING INTELLIGENT ROUTING CHATBOT WIDGET */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
        <button onClick={() => setChatOpen(!chatOpen)} style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg,#25D366,#128C7E)', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>💬</button>
        {chatOpen && (
          <div className="glass-card" style={{ position: 'absolute', bottom: '66px', right: 0, width: '290px', height: '370px', display: 'flex', flexDirection: 'column', background: 'var(--bg2)', overflow: 'hidden' }}>
            <div style={{ padding: '12px', background: 'var(--bg3)', fontSize: '12px', fontWeight: 'bold', borderBottom: '1px solid var(--border)' }}>Operational Agent Terminal Port</div>
            <div style={{ flex: 1, padding: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {chatLogs.map((l, i) => (
                <div key={i} style={{ alignSelf: l.side === 'user' ? 'flex-end' : 'flex-start', background: l.side === 'user' ? 'var(--blue)' : 'rgba(255,255,255,0.06)', padding: '6px 10px', borderRadius: '8px', fontSize: '12px', maxWidth: '85%' }}>{l.txt}</div>
              ))}
            </div>
            <form onSubmit={executeChatStream} style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
              <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Query agent matrix..." style={{ flex: 1, padding: '12px', background: 'transparent', border: 'none', color: '#fff', fontSize: '12px', outline: 'none' }} />
              <button type="submit" style={{ padding: '12px', background: 'var(--blue)', border: 'none', color: '#fff', cursor: 'pointer' }}>➔</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}