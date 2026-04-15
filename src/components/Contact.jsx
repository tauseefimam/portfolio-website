import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiCheck } from 'react-icons/fi';

const EMAIL = 'hello@tauseef.dev';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bento-card col-span-1"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TerminalHeader title="ping_me" />

      <div>
        <h3
          style={{
            fontFamily: "'Fira Code', monospace",
            color: "#eeeeee",
            fontSize: 15,
            marginBottom: 6,
          }}
        >
          Init Connection
        </h3>
        <p style={{ fontSize: 11, color: "#6b7280", marginBottom: 18 }}>
          Secure channels available 24/7
        </p>

        <div style={{ display: "flex", gap: 10, marginBottom: 18 }}>
          {[FiGithub, FiLinkedin, FiTwitter].map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{
                padding: 8,
                border: "1px solid #1f1f1f",
                borderRadius: 8,
                color: "#6b7280",
                textDecoration: "none",
                display: "flex",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(57,255,20,0.5)";
                e.currentTarget.style.color = "#4ade80";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "#1f1f1f";
                e.currentTarget.style.color = "#6b7280";
              }}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={copyEmail}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background: "#151515",
            border: `1px solid ${copied ? "rgba(57,255,20,0.4)" : "#1f1f1f"}`,
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.2s",
            fontFamily: "'Fira Code', monospace",
            fontSize: 12,
            color: copied ? "#4ade80" : "#9ca3af",
          }}
        >
          {copied ? (
            <FiCheck size={13} style={{ color: "#4ade80" }} />
          ) : (
            <FiMail size={13} />
          )}
          {copied ? "Copied!" : EMAIL}
        </button>
      </div>
    </div>
  );
};

export default Contact;
