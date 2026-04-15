import React from 'react';
import TerminalHeader from './TerminalHeader';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Password Strength Checker',
    desc: 'Python backend with React UI evaluating entropy, dictionary matches and breach databases.',
    tech: ['React', 'Python', 'FastAPI'],
    github: '#', live: '#',
  },
  {
    title: 'Network Intrusion Monitor',
    desc: 'Real-time anomaly detection on PCAP streams using ML-based classifiers.',
    tech: ['Python', 'Scikit-learn', 'Wireshark'],
    github: '#', live: '#',
  },
  {
    title: 'CTF Toolkit',
    desc: 'Collection of custom scripts and tools built across various CTF competitions.',
    tech: ['Bash', 'Python', 'Pwntools'],
    github: '#', live: '#',
  },
];

const Projects = () => (
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
      }}
    >
      {projects.map((p, i) => (
        <div
          key={i}
          style={{
            background: "#151515",
            borderRadius: 10,
            padding: "14px 16px",
            border: "1px solid #1f1f1f",
            transition: "border-color 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
          onMouseOut={(e) => (e.currentTarget.style.borderColor = "#1f1f1f")}
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
                style={{ color: "inherit", transition: "color 0.2s" }}
                onMouseOver={(e) => (e.target.style.color = "#eeeeee")}
                onMouseOut={(e) => (e.target.style.color = "#6b7280")}
              >
                <FiGithub size={15} />
              </a>
              <a
                href={p.live}
                style={{ color: "inherit", transition: "color 0.2s" }}
                onMouseOver={(e) => (e.target.style.color = "#eeeeee")}
                onMouseOut={(e) => (e.target.style.color = "#6b7280")}
              >
                <FiExternalLink size={15} />
              </a>
            </div>
          </div>
          <p
            style={{
              fontSize: 12,
              color: "#9ca3af",
              marginBottom: 10,
              lineHeight: 1.6,
            }}
          >
            {p.desc}
          </p>
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

export default Projects;
