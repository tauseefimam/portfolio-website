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
          background: '#151515', borderRadius: 8, padding: '10px 14px',
          border: '1px solid #1f1f1f',
        }}>
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
