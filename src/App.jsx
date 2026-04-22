import React, { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SocLabs from './components/SocLabs';
import Skills from './components/Skills';
import Writeups from './components/Writeups';
import Contact from './components/Contact';
import Certs from './components/Certs';
import { FiHome, FiTerminal, FiShield, FiBriefcase, FiBookOpen, FiMail, FiActivity, FiAward } from 'react-icons/fi';

const navItems = [
  { id: 'home', label: '// Home', icon: FiHome },
  { id: 'hero', label: './whoami', icon: FiTerminal },
  { id: 'skills', label: './arsenal', icon: FiShield },
  { id: 'projects', label: './projects', icon: FiBriefcase },
  { id: 'soclabs', label: './soc_labs', icon: FiActivity },
  { id: 'certs', label: './certs', icon: FiAward },
  { id: 'writeups', label: './writeups', icon: FiBookOpen },
  { id: 'contact', label: './ping_me', icon: FiMail },
];

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'hero': return <Hero />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'soclabs': return <SocLabs />;
      case 'certs': return <Certs />;
      case 'writeups': return <Writeups />;
      case 'contact': return <Contact />;
      case 'home':
      default:
        return (
          <main className="bento-grid">
            <Hero />
            <Skills />
            <Projects />
            <SocLabs />
            <Contact />
            <Writeups />
            <Certs />
          </main>
        );
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Sticky Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(5, 5, 10, 0.4)',
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        padding: '16px clamp(16px, 4vw, 48px)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          maxWidth: 1400,
          margin: '0 auto'
        }}>
          <div style={{
            fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: 20, 
            letterSpacing: 2, color: '#eeeeee',
            textShadow: '0 0 16px rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', gap: 8,
            flexShrink: 0
          }}>
            <span style={{ color: '#4ade80' }}>&gt;</span> TAUSEEF IMAM
          </div>

          <nav style={{ 
            display: 'flex', gap: 12, overflowX: 'auto', 
            scrollbarWidth: 'none', msOverflowStyle: 'none' /* Hides scrollbar in Firefox and Edge */
          }}>
            {/* Inline style to hide webkit scrollbar just in case it triggers */}
            <style>{`nav::-webkit-scrollbar { display: none; }`}</style>
            
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 14px', borderRadius: 8,
                    background: isActive ? 'rgba(74, 222, 128, 0.1)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(74, 222, 128, 0.4)' : 'transparent'}`,
                    color: isActive ? '#4ade80' : '#9ca3af',
                    fontFamily: "'Fira Code', monospace", fontSize: 13,
                    cursor: 'pointer', transition: 'all 0.3s ease',
                    backdropFilter: isActive ? 'blur(4px)' : 'none', whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 0 16px rgba(74, 222, 128, 0.15)' : 'none'
                  }}
                  onMouseOver={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                      e.currentTarget.style.color = '#60a5fa';
                      e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                    }
                  }}
                  onMouseOut={e => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.color = '#9ca3af';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <Icon size={14} />
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: 'clamp(16px, 4vw, 48px)', maxWidth: 1400, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
        {renderContent()}
      </div>

      <footer style={{ marginTop: 48, textAlign: 'center', fontFamily: "'Fira Code', monospace", fontSize: 11, color: '#374151' }}>
        <p>&gt; session initialized by Tauseef · © {new Date().getFullYear()}</p>
        <p style={{ marginTop: 4, opacity: 0.5 }}>Connection Encrypted · All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
