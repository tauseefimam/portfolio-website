import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SocLabs from './components/SocLabs';
import Skills from './components/Skills';
import Writeups from './components/Writeups';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ minHeight: '100vh', padding: 'clamp(16px, 4vw, 48px)', maxWidth: 1400, margin: '0 auto' }}>
      <main className="bento-grid">
        <Hero />
        <Skills />

        <Projects />
        <SocLabs />
        <Contact />

        <Writeups />
      </main>

      <footer style={{ marginTop: 48, textAlign: 'center', fontFamily: "'Fira Code', monospace", fontSize: 11, color: '#374151' }}>
        <p>&gt; session initialized by Tauseef · © {new Date().getFullYear()}</p>
        <p style={{ marginTop: 4, opacity: 0.5 }}>Connection Encrypted · All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
