import React from 'react';

export default function Services() {
  const coreMatrix = [
    { icon: "🤖", title: "AI Automation Agency", desc: "Automate workflows, save time and reduce operating costs.", lines: ["WhatsApp AI Bots", "CRM Automation", "AI Voice Agents", "Workflow Automation"] },
    { icon: "💻", title: "Web & App Development", desc: "Modern, fast and scalable websites and apps for your business.", lines: ["Business Websites", "E-commerce Stores", "Mobile App Development", "Custom Web Applications"] },
    { icon: "📣", title: "Digital Marketing AI", desc: "AI-driven marketing strategies that bring more traffic and sales.", lines: ["AI SEO & Content", "Google & Meta Ads", "Social Media Management", "Conversion Optimization"] },
    { icon: "📊", title: "Data Analytics & BI", desc: "Powerful data insights to help you make smarter, faster decisions.", lines: ["Power BI Dashboards", "Business Intelligence", "Sales & Revenue Analytics", "Predictive Analytics"] }
  ];

  return (
    <section id="services" style={{ padding: '100px 60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-element">OUR SERVICES</div>
        <h2 style={{ fontSize: '38px', fontWeight: 800, marginTop: '12px' }}>What We Build For You</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {coreMatrix.map((item, index) => (
          <div key={index} className="glass-card" style={{ padding: '28px' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text2)', marginBottom: '20px', lineHeight: '1.5' }}>{item.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {item.lines.map((l, i) => <li key={i} style={{ fontSize: '12px', color: 'var(--text2)' }}>✓ {l}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}