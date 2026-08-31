import React from 'react';

export default function Navbar({ onActionTrigger }) {
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '16px 60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(2,6,23,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
        <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, var(--blue), var(--purple))', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🤖</div>
        <div style={{ color: 'var(--text)', fontWeight: 700, fontSize: '16px' }}>AI GROWTH<span style={{ display: 'block', fontSize: '10px', color: 'var(--text2)', fontWeight: 400 }}>SOLUTIONS</span></div>
      </a>
      <ul style={{ display: 'flex', gap: '32px', listStyle: 'none' }}>
        <li><a href="#hero" style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '14px' }}>Home</a></li>
        <li><a href="#services" style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '14px' }}>Services</a></li>
        <li><a href="#portfolio" style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '14px' }}>Portfolio</a></li>
        <li><a href="#analytics" style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '14px' }}>Pricing</a></li>
        <li><a href="#footer" style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '14px' }}>Contact</a></li>
      </ul>
      <button onClick={() => onActionTrigger('Direct Portal Navigation Booking')} style={{ padding: '10px 22px', background: 'linear-gradient(135deg, var(--blue), var(--purple))', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Book Free Consultation</button>
    </nav>
  );
}