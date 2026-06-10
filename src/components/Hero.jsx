import React from 'react';
import TerminalHeader from './TerminalHeader';
import { FiShield } from 'react-icons/fi';

const Hero = () => (
  <div
    className="bento-card col-span-3 row-span-2"
    style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 260 }}
  >
    <TerminalHeader title="whoami" />

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
      {/* Text */}
      <div style={{ flex: 1, minWidth: 220 }}>
        <p style={{ fontFamily: "'Fira Code', monospace", color: '#4ade80', fontSize: 13, marginBottom: 8 }}>
          &gt; session initialized
        </p>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 12 }}>
          I'm <span style={{ color: '#4ade80', textShadow: '0 0 16px rgba(74,222,128,0.45), 0 0 32px rgba(74,222,128,0.15)' }}>Tauseef Imam</span>
        </h1>
        <h2 style={{ fontFamily: "'Fira Code', monospace", color: '#9ca3af', fontSize: 'clamp(13px, 2vw, 17px)', marginBottom: 20 }}>
          GRC & Information Security Specialist · v1.2.0
        </h2>
        <p style={{ color: '#d1d5db', fontSize: 14, lineHeight: 1.7, maxWidth: 520 }}>
          Computer Science student at Sukkur IBA University specializing in Information Security Governance, Risk, and Compliance. Hand-on experience constructing NIST CSF 2.0 gap assessments, drafting security policies, conducting vendor audits, and designing risk treatment registers.
        </p>

        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            fontFamily: "'Fira Code', monospace", fontSize: 13,
            padding: '10px 24px', borderRadius: 8,
            background: 'rgba(74,222,128,0.1)', color: '#4ade80', fontWeight: 600,
            border: '1px solid #4ade80', boxShadow: '0 0 12px rgba(74,222,128,0.2)',
            textShadow: '0 0 8px rgba(74,222,128,0.4)',
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'
          }}
            onMouseOver={e => { e.target.style.background = 'rgba(74,222,128,0.2)'; e.target.style.boxShadow = '0 0 20px rgba(74,222,128,0.4)'; }}
            onMouseOut={e => { e.target.style.background = 'rgba(74,222,128,0.1)'; e.target.style.boxShadow = '0 0 12px rgba(74,222,128,0.2)'; }}
          >./ping_me</a>
          <a href="#projects" style={{
            fontFamily: "'Fira Code', monospace", fontSize: 13,
            padding: '10px 24px', borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.1)', color: '#9ca3af',
            background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(4px)',
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block'
          }}
            onMouseOver={e => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; e.target.style.color = '#60a5fa'; e.target.style.background = 'rgba(59,130,246,0.05)'; e.target.style.boxShadow = '0 0 16px rgba(59,130,246,0.15)'; }}
            onMouseOut={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.color = '#9ca3af'; e.target.style.background = 'rgba(255,255,255,0.02)'; e.target.style.boxShadow = 'none'; }}
          >ls ./projects</a>
        </div>
      </div>

      {/* Avatar Badge */}
      <div style={{
        width: 180, height: 180, flexShrink: 0, borderRadius: 16,
        border: '1px solid rgba(74,222,128,0.3)', background: 'rgba(74,222,128,0.02)',
        boxShadow: '0 0 24px rgba(74,222,128,0.08), inset 0 0 12px rgba(74,222,128,0.05)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
        fontFamily: "'Fira Code', monospace", color: '#4ade80', fontSize: 12,
        transition: 'all 0.3s ease', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden'
      }}
        onMouseOver={e => {
          e.currentTarget.style.borderColor = 'rgba(96,165,250,0.5)';
          e.currentTarget.style.color = '#60a5fa';
          e.currentTarget.style.boxShadow = '0 0 32px rgba(96,165,250,0.2), inset 0 0 16px rgba(96,165,250,0.15)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)';
          e.currentTarget.style.color = '#4ade80';
          e.currentTarget.style.boxShadow = '0 0 24px rgba(74,222,128,0.08), inset 0 0 12px rgba(74,222,128,0.05)';
        }}
      >
        <FiShield size={54} style={{ filter: 'drop-shadow(0 0 12px currentColor)' }} />
        <span style={{ fontSize: 9, letterSpacing: 2, fontWeight: 600, opacity: 0.8 }}>GRC_SECURE_ID</span>
      </div>
    </div>
  </div>
);

export default Hero;
