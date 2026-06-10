import React, { useState } from 'react';
import TerminalHeader from './TerminalHeader';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiCheck } from 'react-icons/fi';

const EMAIL = 'tauseefimam22@gmail.com';

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
          {[
            { icon: FiGithub, url: 'https://github.com/tauseefimam' },
            { icon: FiLinkedin, url: 'https://linkedin.com/in/tauseef-imam-3097b2244' }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 8,
                  border: "1px solid rgba(255,255,255,0.05)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderRadius: 8,
                  color: "#9ca3af",
                  textDecoration: "none",
                  display: "flex",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "rgba(74,222,128,0.4)";
                  e.currentTarget.style.backgroundColor = "rgba(74,222,128,0.1)";
                  e.currentTarget.style.color = "#4ade80";
                  e.currentTarget.style.boxShadow = "0 0 12px rgba(74,222,128,0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
                  e.currentTarget.style.color = "#9ca3af";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <button
          onClick={copyEmail}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            background: copied ? "rgba(74,222,128,0.1)" : "rgba(255,255,255,0.02)",
            border: `1px solid ${copied ? "rgba(74,222,128,0.5)" : "rgba(255,255,255,0.05)"}`,
            boxShadow: copied ? "0 0 16px rgba(74,222,128,0.2)" : "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "all 0.3s ease",
            fontFamily: "'Fira Code', monospace",
            fontSize: 12,
            color: copied ? "#4ade80" : "#9ca3af",
          }}
          onMouseOver={e => {
            if (!copied) {
              e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
              e.currentTarget.style.background = "rgba(59,130,246,0.1)";
              e.currentTarget.style.color = "#60a5fa";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(59,130,246,0.2)";
            }
          }}
          onMouseOut={e => {
            if (!copied) {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.boxShadow = "none";
            }
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
