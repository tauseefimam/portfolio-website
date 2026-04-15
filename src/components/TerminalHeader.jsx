import React from 'react';

const TerminalHeader = ({ title }) => (
  <div className="terminal-header">
    <div style={{ display: "flex", gap: 5 }}>
      {["#ff5f56", "#ffbd2e", "#4ade80"].map((c, i) => (
        <span
          key={i}
          style={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: c,
            opacity: 0.8,
            display: "inline-block",
          }}
        />
      ))}
    </div>
    <span
      style={{
        fontFamily: "'Fira Code', monospace",
        fontSize: 11,
        color: "#6b7280",
      }}
    >
      root@{title.toLowerCase().replace(/\s/g, "_")} ~ %
    </span>
  </div>
);

export default TerminalHeader;
