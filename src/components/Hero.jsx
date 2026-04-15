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
            background: '#4ade80', color: '#000', fontWeight: 700,
            textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block'
          }}
            onMouseOver={e => e.target.style.opacity = 0.85}
            onMouseOut={e => e.target.style.opacity = 1}
          >./connect</a>
          <a href="#projects" style={{
            fontFamily: "'Fira Code', monospace", fontSize: 13,
            padding: '10px 24px', borderRadius: 8,
            border: '1px solid #1f1f1f', color: '#eeeeee',
            textDecoration: 'none', transition: 'border-color 0.2s', display: 'inline-block'
          }}
            onMouseOver={e => e.target.style.borderColor = '#4ade80'}
            onMouseOut={e => e.target.style.borderColor = '#1f1f1f'}
          >ls ./projects</a>
        </div>
      </div>

      {/* Avatar */}
      <div style={{
        width: 180, height: 180, flexShrink: 0, borderRadius: 16,
        border: '1px solid #1f1f1f', background: '#151515',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'Fira Code', monospace", color: '#6b7280', fontSize: 12,
        transition: 'border-color 0.3s',
      }}
        onMouseOver={e => e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)'}
        onMouseOut={e => e.currentTarget.style.borderColor = '#1f1f1f'}
      >
        &lt;img/&gt;
      </div>
    </div>
  </div>
);

export default Hero;
