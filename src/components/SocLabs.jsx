import React from 'react';
import TerminalHeader from './TerminalHeader';
import { FiShield, FiTarget, FiActivity } from 'react-icons/fi';

const labs = [
  { name: 'SOC Blue Team Lab', status: 'Active',    badge: 'badge-active',  icon: <FiShield size={15} style={{ color: '#60a5fa' }} /> },
  { name: 'Red Team Sim',      status: 'Completed', badge: 'badge-done',    icon: <FiTarget size={15} style={{ color: '#f87171' }} /> },
  { name: 'Threat Hunt',       status: 'Standby',   badge: 'badge-standby', icon: <FiActivity size={15} style={{ color: '#c084fc' }} /> },
];

const SocLabs = () => (
  <div className="bento-card col-span-1" style={{ display: 'flex', flexDirection: 'column' }}>
    <TerminalHeader title="soc_labs" />
    <h3 style={{ fontFamily: "'Fira Code', monospace", color: '#eeeeee', fontSize: 15, marginBottom: 14 }}>
      Simulation Environments
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {labs.map((lab, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.02)', borderRadius: 8, padding: '10px 14px',
          border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => {
          e.currentTarget.style.borderColor = 'rgba(192,132,252,0.4)';
          e.currentTarget.style.background = 'rgba(192,132,252,0.05)';
          e.currentTarget.style.boxShadow = '0 0 12px rgba(192,132,252,0.15)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {lab.icon}
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 12, color: '#d1d5db' }}>{lab.name}</span>
          </div>
          <span className={`badge ${lab.badge}`}>{lab.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SocLabs;
