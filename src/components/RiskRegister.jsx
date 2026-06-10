import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import { FiAlertTriangle, FiCheckCircle, FiShield, FiTrendingDown } from 'react-icons/fi';

const risks = [
  {
    id: 'R-1',
    title: 'Lack of MFA on Legacy VPN',
    category: 'Access Control',
    severity: 'Critical',
    color: '#ef4444',
    bg: 'rgba(239, 68, 68, 0.1)',
    inherent: { L: 5, I: 4, score: 20 },
    residual: { L: 2, I: 4, score: 8, severity: 'Medium' },
    desc: 'Legacy VPN gateway uses single-factor password authentication, exposing the network to credential stuffing and brute force attacks.',
    treatment: 'Mitigate: Integrate VPN with Identity Provider (IdP) for SAML 2.0 MFA and enforce device compliance checks.'
  },
  {
    id: 'R-2',
    title: 'Unencrypted Database Backups',
    category: 'Data Security',
    severity: 'High',
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.1)',
    inherent: { L: 4, I: 5, score: 20 },
    residual: { L: 1, I: 5, score: 5, severity: 'Low' },
    desc: 'Automated database backups are stored in public cloud buckets without AES-256 encryption at rest, risking mass exposure if bucket policies fail.',
    treatment: 'Mitigate: Enable default KMS encryption on target storage buckets and restrict read access to database service accounts.'
  },
  {
    id: 'R-3',
    title: 'No Formal Vendor Assessment',
    category: 'Third-Party Risk',
    severity: 'High',
    color: '#f97316',
    bg: 'rgba(249, 115, 22, 0.1)',
    inherent: { L: 4, I: 3, score: 12 },
    residual: { L: 2, I: 3, score: 6, severity: 'Medium' },
    desc: 'Critical SaaS collaboration tools are onboarded without security evaluations (SOC 2, ISO 27001 reviews), creating compliance and data processing visibility gaps.',
    treatment: 'Mitigate: Enforce formal vendor security questionnaire and contract clauses requiring annual SOC 2 reports.'
  },
  {
    id: 'R-4',
    title: 'Phishing Vulnerability (Human)',
    category: 'Social Engineering',
    severity: 'Medium',
    color: '#eab308',
    bg: 'rgba(234, 179, 8, 0.1)',
    inherent: { L: 4, I: 3, score: 12 },
    residual: { L: 2, I: 3, score: 6, severity: 'Medium' },
    desc: 'Lack of phishing awareness training leaves employees susceptible to malicious attachments, credentials harvesting, and pretexting.',
    treatment: 'Mitigate: Roll out automated quarterly phishing simulations and deploy mandatory micro-learning security modules.'
  }
];

const RiskRegister = () => {
  const [selectedRisk, setSelectedRisk] = useState(risks[0]);

  return (
    <div className="bento-card col-span-2" style={{ display: 'flex', flexDirection: 'column' }}>
      <TerminalHeader title="risk_register" />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ fontFamily: "'Fira Code', monospace", color: '#eeeeee', fontSize: 14 }}>
          Risk Assessment & Treatment Registry
        </h3>
        <span style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: 4 }}>
          4 Active Risks
        </span>
      </div>

      <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 16, lineHeight: 1.5 }}>
        Interactive risk treatment database. Select a risk from the register to examine its associated threat vectors, treatment controls, and residual threat metrics.
      </p>

      {/* Split Pane */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, flex: 1 }}>
        {/* Left Pane: Risk List */}
        <div style={{ flex: 1, minWidth: 240, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {risks.map((risk) => {
            const isSelected = selectedRisk.id === risk.id;
            return (
              <button
                key={risk.id}
                onClick={() => setSelectedRisk(risk)}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'left',
                  background: isSelected ? 'rgba(74, 222, 128, 0.08)' : 'rgba(255,255,255,0.02)', 
                  borderRadius: 8, padding: '10px 12px',
                  border: `1px solid ${isSelected ? 'rgba(74, 222, 128, 0.4)' : 'rgba(255,255,255,0.05)'}`, 
                  backdropFilter: 'blur(4px)',
                  cursor: 'pointer', transition: 'all 0.3s ease', width: '100%',
                  boxShadow: isSelected ? '0 0 12px rgba(74, 222, 128, 0.1)' : 'none'
                }}
                onMouseOver={e => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.3)';
                    e.currentTarget.style.background = 'rgba(74, 222, 128, 0.04)';
                  }
                }}
                onMouseOut={e => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: isSelected ? '#4ade80' : '#6b7280' }}>
                    {risk.id} &bull; {risk.category}
                  </span>
                  <span style={{
                    fontSize: 8, fontFamily: "'Fira Code', monospace", fontWeight: 700,
                    color: risk.color, backgroundColor: risk.bg,
                    padding: '1px 5px', borderRadius: 4, border: `1px solid ${risk.color}44`
                  }}>
                    {risk.severity}
                  </span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: isSelected ? '#4ade80' : '#e5e7eb' }}>
                  {risk.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Pane: Details Sheet */}
        <div style={{
          flex: 1.2, minWidth: 260, background: 'rgba(255,255,255,0.01)',
          border: '1px solid rgba(255,255,255,0.04)', borderRadius: 10, padding: 14,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: 220
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 8 }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: '#4ade80', fontWeight: 600 }}>
                {selectedRisk.id} Control Sheet
              </span>
              <span style={{ fontSize: 9, color: '#9ca3af', fontFamily: "'Fira Code', monospace" }}>
                Status: Active Plan
              </span>
            </div>

            <h4 style={{ fontSize: 13, fontWeight: 700, color: '#f3f4f6', marginBottom: 8 }}>
              {selectedRisk.title}
            </h4>

            <p style={{ fontSize: 10.5, color: '#9ca3af', lineHeight: 1.5, marginBottom: 12 }}>
              {selectedRisk.desc}
            </p>

            {/* Risk Scores Compare Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 6, padding: '6px 8px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: 8, color: '#9ca3af', textTransform: 'uppercase', marginBottom: 2 }}>Inherent Risk</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: selectedRisk.color }}>{selectedRisk.inherent.score}</span>
                  <span style={{ fontSize: 8, color: '#6b7280' }}>(L:{selectedRisk.inherent.L} x I:{selectedRisk.inherent.I})</span>
                </div>
              </div>

              <div style={{ background: 'rgba(74, 222, 128, 0.02)', borderRadius: 6, padding: '6px 8px', border: '1px solid rgba(74, 222, 128, 0.1)' }}>
                <div style={{ fontSize: 8, color: '#4ade80', textTransform: 'uppercase', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Residual Risk <FiTrendingDown size={10} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#4ade80' }}>{selectedRisk.residual.score}</span>
                  <span style={{ fontSize: 8, color: '#6b7280' }}>(L:{selectedRisk.residual.L} x I:{selectedRisk.residual.I})</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(96, 165, 250, 0.04)', borderRadius: 6, padding: '8px 10px',
              border: '1px solid rgba(96, 165, 250, 0.15)', display: 'flex', gap: 8
            }}>
              <FiShield size={16} style={{ color: '#60a5fa', flexShrink: 0, marginTop: 1 }} />
              <div>
                <div style={{ fontSize: 8.5, color: '#60a5fa', fontWeight: 600, textTransform: 'uppercase', marginBottom: 1 }}>Control Treatment</div>
                <div style={{ fontSize: 9.5, color: '#d1d5db', lineHeight: 1.4 }}>{selectedRisk.treatment}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskRegister;
