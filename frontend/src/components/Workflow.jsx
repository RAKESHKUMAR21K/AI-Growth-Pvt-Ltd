import React from 'react';

export default function Workflow() {
  const processingPipeline = [
    { num: "01", label: "Lead Captured", detail: "(Forms / Ads)" },
    { num: "02", label: "AI Chatbot", detail: "(Instant Response)" },
    { num: "03", label: "CRM Update", detail: "(Data Stored)" },
    { num: "04", label: "Automated Actions", detail: "(Email / WhatsApp)" },
    { num: "05", label: "Analytics Dashboard", detail: "(Track & Optimize)" }
  ];

  return (
    <section style={{ padding: '80px 60px', background: 'rgba(5,13,31,0.5)', borderTop: '1px solid var(--border)' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="badge-element">AI AUTOMATION WORKFLOW</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap' }}>
        {processingPipeline.map((p, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '20px', flex: 1, minWidth: '180px', textAlign: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--blue)', fontWeight: 'bold' }}>STAGE {p.num}</span>
            <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '8px 0 4px' }}>{p.label}</div>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>{p.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}