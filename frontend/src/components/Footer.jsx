import React, { useState } from 'react';
import axios from 'axios';

export default function Footer({ onSubscribeConfirm }) {
  const [emailStr, setEmailStr] = useState('');
  const [statusText, setStatusText] = useState('');

  const sendNewsletterData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/subscribe', { email: emailStr });
      if (res.data.success) {
        setStatusText('✅ Email safely indexed into core broadcast nodes.');
        setEmailStr('');
        onSubscribeConfirm();
      }
    } catch (err) {
      setStatusText(`❌ ${err.response?.data?.message || 'Transaction rejected.'}`);
    }
  };

  return (
    <footer id="footer" style={{ padding: '60px 60px 20px', background: 'var(--bg3)', borderTop: '1px solid var(--border)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <div>
          <h3>AI GROWTH SOLUTIONS</h3>
          <p style={{ color: 'var(--text3)', fontSize: '12px', marginTop: '10px', lineHeight: 1.6 }}>AI-powered solutions for automation, digital marketing, web development and business intelligence.</p>
        </div>
        <div>
          <h5 style={{ color: '#fff', marginBottom: '12px' }}>Our Services</h5>
          <ul style={{ listStyle: 'none', fontSize: '13px', color: 'var(--text3)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>AI Automation</li>
            <li>Web Development</li>
            <li>Business Intelligence</li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: '#fff', marginBottom: '12px' }}>Contact Details</h5>
          <p style={{ fontSize: '12px', color: 'var(--text3)' }}>hello@aigrowth.com<br />Mumbai, India</p>
        </div>
        <div>
          <h5 style={{ color: '#fff', marginBottom: '12px' }}>Subscribe Newsletter</h5>
          <form onSubmit={sendNewsletterData} style={{ display: 'flex', gap: '6px' }}>
            <input type="email" required value={emailStr} onChange={e => setEmailStr(e.target.value)} placeholder="Email address" style={{ padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: '#fff', borderRadius: '4px', flex: 1 }} />
            <button type="submit" style={{ padding: '8px 12px', background: 'var(--blue)', border: 'none', color: '#fff', borderRadius: '4px', cursor: 'pointer' }}>➔</button>
          </form>
          {statusText && <p style={{ fontSize: '11px', marginTop: '8px' }}>{statusText}</p>}
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text3)' }}>
        <p>© 2026 AI Growth Solutions. All Rights Reserved.</p>
        <p>Built with MERN Infrastructure Engine Layer Nodes</p>
      </div>
    </footer>
  );
}