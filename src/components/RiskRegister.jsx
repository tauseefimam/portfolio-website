import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import { FiAlertTriangle, FiCheckCircle, FiShield, FiTrendingDown, FiX } from 'react-icons/fi';

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
  const [selectedRisk, setSelectedRisk] = useState(null);

  return (
    <div className="bento-card col-span-1" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <TerminalHeader title="risk_register" />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ fontFamily: "'Fira Code', monospace", color: '#eeeeee', fontSize: 14 }}>
          Risk Assessment Matrix
        </h3>
        <span style={{ fontSize: 10, fontFamily: "'Fira Code', monospace", color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: 4 }}>
          4 Active Risks
        </span>
      </div>

      <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 16, lineHeight: 1.5 }}>
        Real-time risk treatment and classification registry. Click a risk to view control treatments and residual risk scores.
      </p>

      {/* Risks List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {risks.map((risk) => (
          <button
            key={risk.id}
            onClick={() => setSelectedRisk(risk)}
            style={{
              display: 'flex', flexDirection: 'column', gap: 6, textAlign: 'left',
              background: 'rgba(255,255,255,0.02)', borderRadius: 8, padding: '10px 12px',
              border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)',
              cursor: 'pointer', transition: 'all 0.3s ease', width: '100%'
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = 'rgba(74, 222, 128, 0.3)';
              e.currentTarget.style.background = 'rgba(74, 222, 128, 0.04)';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(74, 222, 128, 0.05)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: '#6b7280' }}>
                {risk.id} &bull; {risk.category}
              </span>
              <span style={{
                fontSize: 9, fontFamily: "'Fira Code', monospace", fontWeight: 700,
                color: risk.color, backgroundColor: risk.bg,
                padding: '1px 6px', borderRadius: 4, border: `1px solid ${risk.color}44`
              }}>
                {risk.severity}
              </span>
            </div>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#e5e7eb' }}>
              {risk.title}
            </span>
          </button>
        ))}
      </div>

      {/* Interactive Detail Modal Overlays (within card) */}
      {selectedRisk && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(5, 5, 10, 0.95)', backdropFilter: 'blur(16px)',
          borderRadius: 20, padding: 18, zIndex: 10, display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between', border: '1px solid rgba(74, 222, 128, 0.35)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 8 }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: '#4ade80', fontWeight: 600 }}>
                {selectedRisk.id} Details
              </span>
              <button
                onClick={() => setSelectedRisk(null)}
                style={{
                  background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer',
                  display: 'flex', padding: 4
                }}
                onMouseOver={e => e.currentTarget.style.color = '#ef4444'}
                onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}
              >
                <FiX size={16} />
              </button>
            </div>

            <h4 style={{ fontSize: 14, fontWeight: 700, color: '#f3f4f6', marginBottom: 8 }}>
              {selectedRisk.title}
            </h4>

            <p style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.5, marginBottom: 12 }}>
              {selectedRisk.desc}
            </p>

            {/* Risk Scores Compare Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: 6, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.04)' }}>
                <div style={{ fontSize: 9, color: '#9ca3af', textTransform: 'uppercase', marginBottom: 2 }}>Inherent Risk</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: selectedRisk.color }}>{selectedRisk.inherent.score}</span>
                  <span style={{ fontSize: 9, color: '#6b7280' }}>(L:{selectedRisk.inherent.L} x I:{selectedRisk.inherent.I})</span>
                </div>
              </div>

              <div style={{ background: 'rgba(74, 222, 128, 0.02)', borderRadius: 6, padding: '8px 10px', border: '1px solid rgba(74, 222, 128, 0.1)' }}>
                <div style={{ fontSize: 9, color: '#4ade80', textTransform: 'uppercase', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                  Residual Risk <FiTrendingDown size={10} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: '#4ade80' }}>{selectedRisk.residual.score}</span>
                  <span style={{ fontSize: 9, color: '#6b7280' }}>(L:{selectedRisk.residual.L} x I:{selectedRisk.residual.I})</span>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(96, 165, 250, 0.04)', borderRadius: 6, padding: '8px 10px',
              border: '1px solid rgba(96, 165, 250, 0.15)', display: 'flex', gap: 8
            }}>
              <FiShield size={16} style={{ color: '#60a5fa', flexShrink: 0, marginTop: 1 }} />
              <div>
                <div style={{ fontSize: 9, color: '#60a5fa', fontWeight: 600, textTransform: 'uppercase', marginBottom: 1 }}>Control Treatment</div>
                <div style={{ fontSize: 10, color: '#d1d5db', lineHeight: 1.4 }}>{selectedRisk.treatment}</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setSelectedRisk(null)}
            style={{
              width: '100%', padding: '8px 0', borderRadius: 6,
              background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.3)',
              color: '#4ade80', fontFamily: "'Fira Code', monospace", fontSize: 11,
              cursor: 'pointer', transition: 'all 0.3s'
            }}
            onMouseOver={e => { e.currentTarget.style.background = 'rgba(74, 222, 128, 0.2)' }}
            onMouseOut={e => { e.currentTarget.style.background = 'rgba(74, 222, 128, 0.1)' }}
          >
            Acknowledge Treatment
          </button>
        </div>
      )}
    </div>
  );
};

export default RiskRegister;
