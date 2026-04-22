import React from 'react';
import TerminalHeader from './TerminalHeader';

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
          &gt; Hello, World!
        </p>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.15, marginBottom: 12 }}>
          I'm <span style={{ color: '#4ade80', textShadow: '0 0 16px rgba(74,222,128,0.45), 0 0 32px rgba(74,222,128,0.15)' }}>Tauseef Imam</span>
        </h1>
        <h2 style={{ fontFamily: "'Fira Code', monospace", color: '#6b7280', fontSize: 'clamp(13px, 2vw, 18px)', marginBottom: 20 }}>
          SOC Analyst · v1.0.0
        </h2>
        <p style={{ color: '#9ca3af', fontSize: 14, lineHeight: 1.7, maxWidth: 520 }}>
          Specializing in vulnerability analysis, threat detection, and SOC operations.
          Passionate about offensive security, CTF challenges, and building resilient systems.
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
          >./connect</a>
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

      {/* Avatar */}
      <div style={{
        width: 180, height: 180, flexShrink: 0, borderRadius: 16,
        border: '1px solid rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.05)',
        boxShadow: '0 0 24px rgba(59,130,246,0.15), inset 0 0 12px rgba(59,130,246,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Fira Code', monospace", color: '#60a5fa', fontSize: 12,
        transition: 'all 0.3s ease', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden'
      }}
        onMouseOver={e => {
          e.currentTarget.style.borderColor = 'rgba(74,222,128,0.5)';
          e.currentTarget.style.color = '#4ade80';
          e.currentTarget.style.boxShadow = '0 0 32px rgba(74,222,128,0.2), inset 0 0 16px rgba(74,222,128,0.15)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)';
          e.currentTarget.style.color = '#60a5fa';
          e.currentTarget.style.boxShadow = '0 0 24px rgba(59,130,246,0.15), inset 0 0 12px rgba(59,130,246,0.1)';
        }}
      >
        &lt;img/&gt;
      </div>
    </div>
  </div>
);

export default Hero;
