import React from 'react';
import TerminalHeader from './TerminalHeader';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certs = [
  { 
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google / Coursera',
    date: '2024',
    link: '#', 
    desc: 'Completed 8-course program covering security frameworks, network security, Linux, Python scripting, and hands-on threat analysis with Splunk, Chronicle, and Wireshark.'
  }
];

const Certs = () => (
  <div className="bento-card col-span-2" style={{ display: 'flex', flexDirection: 'column' }}>
    <TerminalHeader title="certs" />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
      <h3 style={{ fontFamily: "'Fira Code', monospace", color: '#eeeeee', fontSize: 15 }}>
        Verifiable Credentials
      </h3>
    </div>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {certs.map((cert, i) => (
        <a key={i} href={cert.link} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.02)', borderRadius: 8, padding: '12px 14px',
          border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)',
          transition: 'all 0.3s ease', textDecoration: 'none'
        }}
        onMouseOver={e => {
          e.currentTarget.style.borderColor = 'rgba(74,222,128,0.4)';
          e.currentTarget.style.background = 'rgba(74,222,128,0.05)';
          e.currentTarget.style.boxShadow = '0 0 16px rgba(74,222,128,0.1)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ padding: 8, borderRadius: 6, background: 'rgba(74,222,128,0.1)', display: 'flex' }}>
              <FiAward size={18} style={{ color: '#4ade80' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingRight: 12 }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, color: '#eeeeee' }}>{cert.name}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: '#9ca3af' }}>{cert.issuer} &bull; <span style={{ color: '#4ade80' }}>{cert.date}</span></span>
              <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 4, lineHeight: 1.4 }}>{cert.desc}</p>
            </div>
          </div>
          <FiExternalLink size={14} style={{ color: '#6b7280', flexShrink: 0 }} />
        </a>
      ))}
    </div>
  </div>
);

export default Certs;
