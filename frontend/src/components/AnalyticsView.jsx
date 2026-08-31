import React from 'react';

export default function AnalyticsView({ metrics }) {
  return (
    <section id="analytics" style={{ padding: '100px 60px' }}>
      <div className="badge-element" style={{ marginBottom: '16px' }}>DATA ANALYTICS VIEWPORTS</div>
      <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '32px' }}>Real-Time Business Intelligence Layouts</h2>
      
      <div className="glass-card" style={{ padding: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>TOTAL SYSTEM REVENUE</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>{metrics.revenue}</div>
            <div style={{ fontSize: '11px', color: 'var(--green)', marginTop: '4px' }}>▲ +28.4% Last Term</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>TOTAL PIPELINE CONVERSIONS</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--blue2)', marginTop: '6px' }}>{metrics.conversions}</div>
            <div style={{ fontSize: '11px', color: 'var(--green)', marginTop: '4px' }}>▲ +24.6% Accuracy</div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px' }}>
            <div style={{ fontSize: '11px', color: 'var(--text3)' }}>CONVERSION PERFORMANCE RATE</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--purple2)', marginTop: '6px' }}>7.62%</div>
            <div style={{ fontSize: '11px', color: 'var(--green)', marginTop: '4px' }}>▲ +18.7% Shift</div>
          </div>
        </div>

        {/* Traffic breakdown elements modeled after chart layouts in the reference graphic */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.01)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Traffic Sources Optimization Summary</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}><span>Organic Channels</span><span>45%</span></div><div style={{ height: '4px', background: 'var(--blue)', width: '45%', borderRadius: '2px' }}></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}><span>Paid Frameworks</span><span>25%</span></div><div style={{ height: '4px', background: 'var(--purple)', width: '25%', borderRadius: '2px' }}></div></div>
              <div><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}><span>Social Integrations</span><span>15%</span></div><div style={{ height: '4px', background: 'var(--green)', width: '15%', borderRadius: '2px' }}></div></div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.01)', padding: '24px', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Key Insights Mapping</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', fontSize: '13px' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Leads Net Gain</span><span style={{ color: 'var(--green)' }}>+320%</span></li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}><span>Automation Efficiency Savings</span><span style={{ color: 'var(--blue2)' }}>80+ Hours / mo</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}