import React from 'react';

export default function Hero({ metrics, onActionTrigger }) {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '140px 60px 80px', gap: '40px' }}>
      <div style={{ flex: 1, maxWidth: '560px' }}>
        <div className="badge-element" style={{ marginBottom: '24px' }}>🔵 AI-POWERED DIGITAL TRANSFORMATION AGENCY</div>
        <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.1, marginBottom: '18px' }}>
          We Build AI-Powered Solutions That <span style={{ background: 'linear-gradient(135deg, var(--blue), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Grow Your Business</span>
        </h1>
        <p style={{ color: 'var(--text2)', fontSize: '16px', marginBottom: '32px' }}>AI Automation, Web Development, Digital Marketing & Data Analytics solutions that help you attract more leads, save time and scale your business.</p>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
          <button onClick={() => onActionTrigger('Hero Main Interface Capture')} style={{ padding: '14px 28px', background: 'var(--blue)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Start Your Project →</button>
          <a href="#portfolio" style={{ padding: '14px 28px', background: 'transparent', border: '1px solid var(--border)', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>View Our Work</a>
        </div>
        <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
          <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--blue2)' }}>100+</div><div style={{ fontSize: '11px', color: 'var(--text3)' }}>Projects Completed</div></div>
          <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--cyan)' }}>24/7</div><div style={{ fontSize: '11px', color: 'var(--text3)' }}>Support Available</div></div>
          <div><div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--green)' }}>100%</div><div style={{ fontSize: '11px', color: 'var(--text3)' }}>Client Satisfaction</div></div>
        </div>
      </div>
      
      {/* SECTION 2 Right Box: Matching visual mockups from image */}
      <div style={{ flex: 1 }} className="glass-card">
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Business Overview Matrix</span>
          <span style={{ color: 'var(--green)', fontSize: '12px' }}>● Live Log Feeds</span>
        </div>
        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>Total System Leads</div>
            <div style={{ fontSize: '24px', fontWeight: 800, margin: '4px 0' }}>{metrics.totalLeads}</div>
            <div style={{ fontSize: '11px', color: 'var(--green)' }}>▲ +32.5%</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>Live Tracking Sales</div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--green)', margin: '4px 0' }}>{metrics.revenue}</div>
            <div style={{ fontSize: '11px', color: 'var(--green)' }}>▲ +28.4%</div>
          </div>
        </div>
      </div>
    </section>
  );
}