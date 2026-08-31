import React from 'react';

export default function TrustedLogos() {
  const providers = ["Google", "Microsoft", "amazon", "HubSpot", "airbnb", "Notion"];
  return (
    <section style={{ padding: '40px 60px', background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', overflow: 'hidden' }}>
      <div style={{ textAlgin: 'center', fontSize: '12px', color: 'var(--text3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px', textAlign: 'center' }}>TRUSTED BY 100+ BUSINESSES WORLDWIDE</div>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="ticker-wrap">
          {[...providers, ...providers].map((p, idx) => (
            <div key={idx} style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text3)', opacity: 0.5, padding: '0 20px' }}>{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}