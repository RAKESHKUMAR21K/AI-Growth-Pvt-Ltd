import React from 'react';

export default function Portfolio() {
  const showcaseData = [
    { title: "AI Chatbot Automation", scope: "Real Estate System Networks", category: "Automation" },
    { title: "E-commerce Website Setup", scope: "Fashion Logistics Core", category: "Web Development" },
    { title: "Marketing Engine Campaign", scope: "Lead Ingestion Pipelines", category: "Digital Marketing" },
    { title: "BI Enterprise Dashboard", scope: "Sales Telemetry Aggregation", category: "Data Analytics" }
  ];

  return (
    <section id="portfolio" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div className="badge-element" style={{ marginBottom: '16px' }}>OUR RECENT WORK</div>
      <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '40px' }}>Projects We Have Built & Deployed</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {showcaseData.map((project, idx) => (
          <div key={idx} className="glass-card" style={{ overflow: 'hidden' }}>
            <div style={{ height: '140px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px' }}>📁</div>
            <div style={{ padding: '20px', borderTop: '1px solid var(--border)' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold' }}>{project.title}</h4>
              <p style={{ fontSize: '12px', color: 'var(--text3)', margin: '4px 0 12px' }}>{project.scope}</p>
              <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '10px', background: 'rgba(59,130,246,0.1)', color: 'var(--blue2)' }}>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}