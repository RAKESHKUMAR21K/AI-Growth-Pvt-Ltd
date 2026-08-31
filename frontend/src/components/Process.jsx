import React from 'react';

export default function Process() {
  const stepsList = [
    { num: "01", name: "Discovery", desc: "Understanding your core needs" },
    { num: "02", name: "Strategy", desc: "Planning the best configuration" },
    { num: "03", name: "Development", desc: "Building & automating engines" },
    { num: "04", name: "Testing", desc: "Quality mapping & tuning" },
    { num: "05", name: "Launch", desc: "Go live and stream results" },
    { num: "06", name: "Support", desc: "Ongoing runtime care" }
  ];

  return (
    <section style={{ padding: '100px 60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div className="badge-element">OUR WORKING PROCESS</div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '12px' }}>How We Deliver Scalable Results</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
        {stepsList.map((step, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--blue)' }}>{step.num}</div>
            <h4 style={{ fontSize: '14px', margin: '8px 0 4px', fontWeight: 'bold' }}>{step.name}</h4>
            <p style={{ fontSize: '11px', color: 'var(--text3)' }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}