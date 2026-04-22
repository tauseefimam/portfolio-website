import React from 'react';
import TerminalHeader from './TerminalHeader';
import { FiBookOpen, FiArrowRight } from 'react-icons/fi';

const posts = [
  { title: 'Defeating ASLR on 64-bit Linux',    tag: 'Exploit Dev', date: 'Mar 2025' },
  { title: 'TryHackMe: Offensive Pentesting Path', tag: 'CTF',       date: 'Feb 2025' },
  { title: 'SIEM Log Analysis with Splunk',       tag: 'Blue Team',  date: 'Jan 2025' },
];

const Writeups = () => (
  <div
    className="bento-card col-span-2"
    style={{ display: "flex", flexDirection: "column" }}
  >
    <TerminalHeader title="writeups" />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
      }}
    >
      <h3
        style={{
          fontFamily: "'Fira Code', monospace",
          color: "#eeeeee",
          fontSize: 15,
        }}
      >
        Latest Logs
      </h3>
      <a
        href="#"
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 11,
          color: "#4ade80",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        view all <FiArrowRight size={12} />
      </a>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {posts.map((post, i) => (
        <a
          key={i}
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 14px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.05)",
            textDecoration: "none",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = "rgba(59,130,246,0.3)";
            e.currentTarget.style.background = "rgba(59,130,246,0.05)";
            e.currentTarget.style.boxShadow = "0 0 12px rgba(59,130,246,0.15)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
            e.currentTarget.style.background = "rgba(255,255,255,0.02)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              overflow: "hidden",
            }}
          >
            <FiBookOpen size={14} style={{ color: "#6b7280", flexShrink: 0 }} />
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 12,
                color: "#d1d5db",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {post.title}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
              marginLeft: 12,
            }}
          >
            <span className="badge badge-active" style={{ fontSize: 9 }}>
              {post.tag}
            </span>
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 11,
                color: "#6b7280",
              }}
            >
              {post.date}
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default Writeups;
