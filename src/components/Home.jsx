import React from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Certifications from './Certifications';
import CyberWidget from './CyberWidget';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Certifications />
            <CyberWidget />
        </>
    );
};

export default Home;
