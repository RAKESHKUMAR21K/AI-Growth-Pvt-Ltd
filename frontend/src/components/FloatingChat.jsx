import React, { useState } from 'react';
import axios from 'axios';

export default function FloatingChat() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messageLogs, setMessageLogs] = useState([{ origin: 'bot', string: 'System automated terminal online. Enter parameters.' }]);

  const streamChatSubmission = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const baseSnapshot = [...messageLogs, { origin: 'user', string: chatInput }];
    setMessageLogs(baseSnapshot);
    const backupText = chatInput;
    setChatInput('');

    try {
      const res = await axios.post('http://localhost:5000/api/v1/agency/ai-agent', { message: backupText });
      if (res.data.success) {
        setMessageLogs([...baseSnapshot, { origin: 'bot', string: res.data.response }]);
      }
    } catch {
      setMessageLogs([...baseSnapshot, { origin: 'bot', string: 'Matrix channel connection dropped.' }]);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 99999 }}>
      <button onClick={() => setChatOpen(!chatOpen)} style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', border: 'none', fontSize: '24px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>💬</button>
      {chatOpen && (
        <div className="glass-card" style={{ position: 'absolute', bottom: '66px', right: 0, width: '280px', height: '360px', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg2)' }}>
          <div style={{ padding: '12px', background: 'var(--bg3)', fontSize: '12px', fontWeight: 'bold', borderBottom: '1px solid var(--border)' }}>Dynamic Agent Port Log</div>
          <div style={{ flex: 1, padding: '10px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {messageLogs.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.origin === 'user' ? 'flex-end' : 'flex-start', background: msg.origin === 'user' ? 'var(--blue)' : 'rgba(255,255,255,0.05)', padding: '6px 10px', borderRadius: '8px', fontSize: '12px', maxWidth: '85%' }}>{msg.string}</div>
            ))}
          </div>
          <form onSubmit={streamChatSubmission} style={{ display: 'flex', borderTop: '1px solid var(--border)' }}>
            <input type="text" value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Query system..." style={{ flex: 1, padding: '10px', background: 'transparent', border: 'none', color: '#fff', fontSize: '12px', outline: 'none' }} />
            <button type="submit" style={{ padding: '10px', background: 'var(--blue)', border: 'none', color: '#fff', cursor: 'pointer' }}>➔</button>
          </form>
        </div>
      )}
    </div>
  );
}