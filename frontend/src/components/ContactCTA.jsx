import React, { useState } from 'react';
import axios from 'axios';

export default function ContactCTA({ selectedTierPlan }) {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [submissionFeedback, setSubmissionFeedback] = useState('');

  const runConsultationSubmission = async (e) => {
    e.preventDefault();
    try {
      const packagePayload = { name: userName, email: userEmail, selectedPlan: selectedTierPlan || 'General Site Matrix Audit' };
      const res = await axios.post('http://localhost:5000/api/v1/agency/consultation', packagePayload);
      if (res.data.success) {
        setSubmissionFeedback('✅ Allocation parameters sent to internal account managers.');
        setUserName('');
        setUserEmail('');
      }
    } catch {
      setSubmissionFeedback('❌ Terminal routing error parsing payload request.');
    }
  };

  return (
    <section id="contact-panel" style={{ padding: '80px 60px' }}>
      <div className="glass-card" style={{ padding: '48px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>🚀</div>
        <h2 style={{ fontSize: '32px', marginBottom: '8px' }}>Ready to Automate & Scale Your Business?</h2>
        <p style={{ color: 'var(--text2)', marginBottom: '24px', fontSize: '14px' }}>Target Configuration Core: <strong style={{ color: 'var(--blue2)' }}>{selectedTierPlan || 'Standard Systems Evaluation'}</strong></p>
        
        <form onSubmit={runConsultationSubmission} style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '400px', margin: '0 auto' }}>
          <input type="text" required value={userName} onChange={e => setUserName(e.target.value)} placeholder="Full Identity Name" style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: '#fff' }} />
          <input type="email" required value={userEmail} onChange={e => setUserEmail(e.target.value)} placeholder="Corporate Network Mail Address" style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--border)', background: 'var(--bg)', color: '#fff' }} />
          <button type="submit" style={{ padding: '12px', background: 'linear-gradient(135deg, var(--blue), var(--purple))', border: 'none', color: '#fff', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>Book System Evaluation Call</button>
        </form>
        {submissionFeedback && <p style={{ marginTop: '16px', fontSize: '12px' }}>{submissionFeedback}</p>}
      </div>
    </section>
  );
}