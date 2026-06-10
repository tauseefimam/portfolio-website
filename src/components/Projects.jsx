import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import { FiExternalLink, FiGithub, FiFileText, FiChevronRight } from 'react-icons/fi';

const projects = [
  {
    id: 'grc-portfolio',
    title: 'GRC Documentation Portfolio',
    desc: 'Simulated real-world Information Security governance package for a mid-size organization, developed across 7 formal GRC deliverables.',
    tech: ['NIST CSF 2.0', 'ISO 27001', 'IT Audit', 'Vendor Risk'],
    github: 'https://github.com/tauseefimam/grc-documentation-portfolio',
    live: '#',
    isGrc: true
  },
  {
    id: 'prompt-detector',
    title: 'Prompt Injection Detector',
    desc: 'Python-based detection tool to identify prompt injection and jailbreak attempts targeting AI language models. Applied threat modeling, regex and semantic rules, and stress-tested detection logic against adversarial persona patterns.',
    tech: ['Python', 'AI Security', 'Threat Modeling', 'Adversarial Testing'],
    github: 'https://github.com/tauseefimam/prompt-injection-detector',
    live: '#',
    isGrc: false
  },
  {
    id: 'social-engineering',
    title: 'Social Engineering Awareness Analysis',
    desc: 'Forensic analysis of a LinkedIn social engineering and phishing campaign. Authored public analysis posts breaking down attack vectors (pretexting, authority exploitation), red flags, and defensive recommendations.',
    tech: ['Social Engineering', 'Threat Intel', 'Security Awareness'],
    github: 'https://github.com/tauseefimam/social-engineering-analysis',
    live: '#',
    isGrc: false
  }
];

const deliverables = [
  {
    short: 'Gap Assessment',
    title: 'NIST CSF 2.0 Gap Assessment',
    detail: 'Conducted a NIST CSF 2.0 gap assessment identifying 14 control gaps across all 6 functions, with findings prioritized by risk severity and aligned with business objectives.',
    standard: 'NIST CSF 2.0 / Framework Core'
  },
  {
    short: 'Risk Register',
    title: 'Enterprise Risk Register',
    detail: 'Built a risk register covering 8 risks across cyber, physical, and human domains; 6 high-priority items assigned detailed treatment plans with residual risk calculations.',
    standard: 'ISO/IEC 27005 / NIST SP 800-30'
  },
  {
    short: 'IS Policies',
    title: 'Information Security Policy Suite',
    detail: 'Authored a 3-document IS policy suite (Master IS Policy, Acceptable Use Policy, Password Policy) aligned to NIST SP 800-63B Identity Assurance guidelines.',
    standard: 'ISO 27001 Control A.5'
  },
  {
    short: 'Access Audit',
    title: 'Access Control Audit Plan',
    detail: 'Developed an internal audit plan for access control processes, defining audit scope, evidence collection methods, sampling criteria, and stakeholder interview lists.',
    standard: 'IT Audit / RBAC & MAC'
  },
  {
    short: 'Vendor Risk',
    title: 'Cloud Vendor Security Assessment',
    detail: 'Produced a vendor security assessment evaluating a critical cloud provider across 5 domains: data security, access control, incident response, compliance, and BCP.',
    standard: 'TPRM / SOC 2 Review'
  },
  {
    short: 'Incident Policy',
    title: 'Incident Response Policy',
    detail: 'Drafted an Incident Response Policy defining severity levels, classification criteria, step-by-step escalation paths, and evidentiary documentation requirements.',
    standard: 'NIST SP 800-61r2'
  },
  {
    short: 'Dashboard',
    title: 'Executive Security Dashboard',
    detail: 'Delivered a metrics dashboard presenting 5 key security KPIs, risk summaries, policy compliance metrics, and prioritized remediation suggestions for C-suite review.',
    standard: 'Metrics & Reporting'
  }
];

const Projects = () => {
  const [activeDeliv, setActiveDeliv] = useState(0);

  return (
    <div
      className="bento-card col-span-2 row-span-2"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <TerminalHeader title="projects" />
      <h3
        style={{
          fontFamily: "'Fira Code', monospace",
          color: "#eeeeee",
          fontSize: 16,
          marginBottom: 16,
        }}
      >
        Featured Projects
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          overflowY: "auto",
          flex: 1,
          paddingRight: 4
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.02)",
              borderRadius: 10,
              padding: "14px 16px",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(4px)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "#4ade80",
                  fontSize: 13,
                  fontWeight: 600
                }}
              >
                {p.title}
              </span>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  color: "#6b7280",
                  marginLeft: 8,
                }}
              >
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.5)", transition: "all 0.3s ease", display: "flex", alignItems: "center" }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "#4ade80"; e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(74,222,128,0.5))"; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.filter = "none"; }}
                >
                  <FiGithub size={15} />
                </a>
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#9ca3af",
                marginBottom: p.isGrc ? 14 : 10,
                lineHeight: 1.6,
              }}
            >
              {p.desc}
            </p>

            {/* Interactive Section for GRC Portfolio */}
            {p.isGrc && (
              <div style={{
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 8,
                border: '1px solid rgba(74, 222, 128, 0.15)',
                padding: 12,
                marginBottom: 14,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                  <FiFileText size={12} style={{ color: '#4ade80' }} />
                  <span style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#4ade80', fontWeight: 600 }}>
                    Portfolio Deliverables Explorer
                  </span>
                </div>
                
                {/* Horizontal tabs */}
                <div style={{
                  display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8,
                  scrollbarWidth: 'thin', msOverflowStyle: 'none', marginBottom: 10
                }}>
                  {deliverables.map((del, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDeliv(idx)}
                      style={{
                        padding: '4px 8px', borderRadius: 4,
                        background: activeDeliv === idx ? 'rgba(74, 222, 128, 0.15)' : 'rgba(255,255,255,0.02)',
                        border: `1px solid ${activeDeliv === idx ? '#4ade80' : 'rgba(255,255,255,0.05)'}`,
                        color: activeDeliv === idx ? '#4ade80' : '#9ca3af',
                        fontFamily: "'Fira Code', monospace", fontSize: 9,
                        cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s'
                      }}
                    >
                      {del.short}
                    </button>
                  ))}
                </div>

                {/* Tab content panel */}
                <div style={{
                  background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.03)',
                  borderRadius: 6, padding: '8px 10px', minHeight: 70
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4, flexWrap: 'wrap', gap: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#f3f4f6' }}>
                      {deliverables[activeDeliv].title}
                    </span>
                    <span style={{
                      fontSize: 8, fontFamily: "'Fira Code', monospace", color: '#60a5fa',
                      background: 'rgba(96, 165, 250, 0.1)', padding: '1px 5px', borderRadius: 4,
                      border: '1px solid rgba(96, 165, 250, 0.2)'
                    }}>
                      {deliverables[activeDeliv].standard}
                    </span>
                  </div>
                  <p style={{ fontSize: 10, color: '#9ca3af', lineHeight: 1.5 }}>
                    {deliverables[activeDeliv].detail}
                  </p>
                </div>
              </div>
            )}

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.tech.map((t, j) => (
                <span key={j} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
