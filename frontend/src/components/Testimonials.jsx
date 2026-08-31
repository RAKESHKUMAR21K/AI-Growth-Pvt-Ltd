import React from 'react';

export default function Testimonials() {
  const feedbackLog = [
    { profile: "Saurabh Mehta", title: "SaaS Founder", passage: "Their automation system saved us tons of time and increased our leads by 300%. Highly recommended!" },
    { profile: "Priya Sharma", title: "Marketing Head", passage: "Amazing team! Their digital marketing strategy boosted our sales and brand visibility a lot." },
    { profile: "Vikram Singh", title: "Business Owner", passage: "The dashboard and analytics reports help us make better decisions and grow faster every month." }
  ];

  return (
    <section style={{ padding: '100px 60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="badge-element">TESTIMONIALS</div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '12px' }}>Trusted By Corporate Stakeholders</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {feedbackLog.map((f, i) => (
          <div key={i} className="glass-card" style={{ padding: '24px' }}>
            <div style={{ color: '#fbbf24', marginBottom: '12px' }}>★★★★★</div>
            <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--text2)', marginBottom: '16px' }}>"{f.passage}"</p>
            <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{f.profile}</div>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>{f.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}