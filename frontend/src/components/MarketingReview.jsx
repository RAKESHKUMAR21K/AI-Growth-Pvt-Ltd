import React from 'react';

export default function MarketingReview({ emailMetrics }) {
  const marketingCampaigns = [
    { title: "Automated Lead Nurturing Sequence", type: "Email Trigger Node", performance: "44.2% Open Rate", status: "Active" },
    { title: "AI Retargeting Broadcast Module", type: "Meta Integration", performance: "+310% ROI Shift", status: "Optimized" },
    { title: "Weekly Tech Architecture Digest", type: "Newsletter Engine", performance: "12% Click-Through", status: "Active" }
  ];

  return (
    <section id="marketing-review" style={{ padding: '100px 60px', background: 'linear-gradient(180deg, var(--bg), var(--bg2))' }}>
      <div className="badge-element" style={{ marginBottom: '16px' }}>📣 DIGITAL & EMAIL MARKETING AUDIT</div>
      <h2 style={{ fontSize: '38px', fontWeight: 800, marginBottom: '12px', fontFamily: 'Syne' }}>
        Campaign Performance & <span style={{ color: 'var(--blue2)' }}>Inbox Diagnostics</span>
      </h2>
      <p style={{ color: 'var(--text2)', maxWidth: '600px', marginBottom: '40px', fontSize: '15px' }}>
        Real-time telemetry reports tracking email dispatch automation layers, spam-filter defensive matrix routing, and user interaction analytics.
      </p>

      {/* Live Operational Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '48px' }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ fontSize: '11px', color: 'var(--text3)' }}>INBOX DELIVERY RATE</div>
          <h3 style={{ fontSize: '32px', color: 'var(--green)', margin: '6px 0' }}>{emailMetrics?.deliveryRate || "99.4%"}</h3>
          <p style={{ fontSize: '11px', color: 'var(--text2)' }}>Spam Filter Shielding: Verified</p>
        </div>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ fontSize: '11px', color: 'var(--text3)' }}>AVERAGE OPEN RATE</div>
          <h3 style={{ fontSize: '32px', color: 'var(--blue2)', margin: '6px 0' }}>{emailMetrics?.avgOpenRate || "42.8%"}</h3>
          <p style={{ fontSize: '11px', color: 'var(--text2)' }}>Industry Standard Baseline: 21.3%</p>
        </div>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ fontSize: '11px', color: 'var(--text3)' }}>CLICK-THROUGH RATE (CTR)</div>
          <h3 style={{ fontSize: '32px', color: 'var(--purple2)', margin: '6px 0' }}>{emailMetrics?.clickThroughRate || "11.6%"}</h3>
          <p style={{ fontSize: '11px', color: 'var(--text2)' }}>Link Click Engagement Vector</p>
        </div>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ fontSize: '11px', color: 'var(--text3)' }}>ACTIVE AUTOMATED SEQUENCES</div>
          <h3 style={{ fontSize: '32px', color: '#fff', margin: '6px 0' }}>{emailMetrics?.activeSequences || "12"}</h3>
          <p style={{ fontSize: '11px', color: 'var(--text2)' }}>Trigger Workflows Active</p>
        </div>
      </div>

      {/* Individual Campaign Progress Review Subgrid */}
      <h4 style={{ fontSize: '18px', marginBottom: '20px', fontWeight: 700 }}>Active Broadcast Cluster Optimization Logs</h4>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {marketingCampaigns.map((camp, idx) => (
          <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '10px', padding: '3px 8px', borderRadius: '10px', background: 'rgba(59,130,246,0.1)', color: 'var(--blue2)', fontWeight: 'bold' }}>{camp.type}</span>
              <span style={{ fontSize: '11px', color: 'var(--green)' }}>● {camp.status}</span>
            </div>
            <h5 style={{ fontSize: '15px', fontWeight: 'bold', marginBottom: '6px' }}>{camp.title}</h5>
            <p style={{ fontSize: '12px', color: 'var(--text3)' }}>Verified Metrics Output: <strong style={{ color: '#fff' }}>{camp.performance}</strong></p>
          </div>
        ))}
      </div>
    </section>
  );
}