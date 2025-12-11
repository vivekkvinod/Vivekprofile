import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import MouseParticles from './components/MouseParticles';
import PhotosModal from './components/PhotosModal';
import ThreatMap from './components/ThreatMap';
import SettingsPanel from './components/SettingsPanel';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  const [isPhotosOpen, setIsPhotosOpen] = useState(false);

  // Force scroll to top on refresh/load
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <SettingsProvider>
      <Layout>
        <MouseParticles />
        <Header onOpenPhotos={() => setIsPhotosOpen(true)} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <ThreatMap />
          <Certifications />
        </main>
        <Footer />
        <PhotosModal isOpen={isPhotosOpen} onClose={() => setIsPhotosOpen(false)} />
        <SettingsPanel />
      </Layout>
    </SettingsProvider>
  );
}

export default App;
