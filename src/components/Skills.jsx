import React from 'react';
import TerminalHeader from './TerminalHeader';

const categories = [
  { name: 'Frameworks & Standards', items: ['NIST CSF 2.0', 'ISO/IEC 27001', 'GDPR', 'PCI-DSS', 'CIS Controls'] },
  { name: 'GRC Core Skills',        items: ['Risk Assessment', 'Policy Dev', 'Internal Audit', 'Vendor Risk', 'BCP', 'IR Policy'] },
  { name: 'Technical & Audit Tools', items: ['Python', 'Linux (CLI)', 'Wireshark', 'Splunk', 'tcpdump', 'Nmap', 'RBAC/MAC/DAC'] },
];

const Skills = () => (
  <div
    className="bento-card col-span-1 row-span-2"
    style={{ display: "flex", flexDirection: "column" }}
  >
    <TerminalHeader title="skills" />
    <h3
      style={{
        fontFamily: "'Fira Code', monospace",
        color: "#eeeeee",
        fontSize: 15,
        marginBottom: 18,
      }}
    >
      Arsenal
    </h3>
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {categories.map((cat, i) => (
        <div key={i}>
          <p
            style={{
              fontFamily: "'Fira Code', monospace",
              color: "#4ade80",
              fontSize: 11,
              marginBottom: 8,
            }}
          >
            [{cat.name}]
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {cat.items.map((s, j) => (
              <span key={j} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
