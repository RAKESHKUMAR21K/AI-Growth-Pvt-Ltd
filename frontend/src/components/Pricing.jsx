import React from 'react';

export default function Pricing({ onSelectPlan }) {
  const pricingModels = [
    { name: "Starter Website", price: "15,000", rate: "One-time", points: ["5 Page Layout Setup", "Fully Responsive Form Maps", "Search Index Optimization Core", "Contact Channel Matrix"] },
    { name: "AI Automation Plan", price: "25,000", rate: "One-time", points: ["Workflow Mapping Node", "AI Agent System Setup", "CRM Matrix Integrations", "Email / WhatsApp API Flows"], highlight: true },
    { name: "Marketing Package", price: "20,000", rate: "Monthly", points: ["SEO Content Scaling", "Google & Meta Optimization", "Social Layout Controls", "Lead Routing Tuning"] },
    { name: "Analytics Dashboard", price: "30,000", rate: "One-time", points: ["Power BI Cluster Ingestion", "Data Mappings Verification", "KPI Matrix Architecture", "Custom Report Filters"] }
  ];

  return (
    <section id="pricing" style={{ padding: '100px 60px', background: 'var(--bg2)' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-element">PRICING PLANS</div>
        <h2 style={{ fontSize: '32px', fontWeight: 800, marginTop: '12px' }}>Simple, Transparent Pricing Tiers</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
        {pricingModels.map((tier, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '28px', border: tier.highlight ? '2px solid var(--blue)' : '1px solid var(--border)' }}>
            <div style={{ fontSize: '12px', color: 'var(--text3)', uppercase: 'true' }}>{tier.name}</div>
            <div style={{ fontSize: '32px', fontWeight: 800, margin: '12px 0 4px' }}>¥{tier.price}</div>
            <div style={{ fontSize: '11px', color: 'var(--text3)', marginBottom: '20px' }}>{tier.rate}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {tier.points.map((p, i) => <li key={i} style={{ fontSize: '12px', color: 'var(--text2)' }}>✓ {p}</li>)}
            </ul>
            <button onClick={() => onSelectPlan(tier.name)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: tier.highlight ? 'linear-gradient(135deg, var(--blue), var(--purple))' : 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}