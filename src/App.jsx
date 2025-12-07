import Layout from './components/Layout';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import MouseParticles from './components/MouseParticles';

function App() {
  return (
    <Layout>
      <MouseParticles />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
