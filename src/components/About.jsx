import React from 'react';
import Terminal from './Terminal';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-cyber-accent">01.</span> System Access
          </h2>
          <div className="h-px bg-cyber-accent/20 w-24 mx-auto mb-8"></div>
          <p className="text-cyber-muted max-w-2xl mx-auto mb-8">
            Execute commands to retrieve analyst profile data.
            Interact with the terminal below to learn more about my operations.
          </p>
        </motion.div>

        <Terminal />
      </div>

      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyber-accent/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default About;
