import { motion } from 'framer-motion';
import { Terminal, Shield, Lock, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "SOC Analyst";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText(prev => prev + fullText[index]);
                setIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block p-2 px-4 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 text-cyber-accent mb-6 animate-float">
                        <span className="flex items-center gap-2 text-sm font-mono">
                            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></span>
                            SYSTEM ONLINE // READY FOR DUTY
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        VIVEK K <span className="text-white text-glow">VINOD</span>
                    </h1>

                    <div className="h-8 md:h-12 mb-8 font-mono text-xl md:text-3xl text-cyber-muted">
                        <span className="text-cyber-purple">$ </span>
                        {text}
                        <span className="animate-pulse">_</span>
                    </div>

                    <p className="max-w-xl mx-auto text-cyber-muted text-lg mb-10 leading-relaxed">
                        Cyber Defense Specialist focusing on Email & Endpoint Security.
                        Protecting digital assets through proactive threat hunting and incident response.
                    </p>

                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-cyber-accent/20 blur-xl rounded-full"></div>
                        <img
                            src="/src/assets/profile.png"
                            alt="Vivek K Vinod"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-cyber-accent/50 object-cover relative z-10 shadow-[0_0_20px_rgba(0,240,255,0.3)] mx-auto"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <motion.a
                            href="mailto:vivekvinod422@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-cyber-accent text-cyber-dark font-bold rounded hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
                        >
                            <Shield size={20} />
                            Contact Securely
                        </motion.a>
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-cyber-muted/30 text-cyber-text rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                        >
                            <Terminal size={20} />
                            View Logs
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-muted animate-bounce"
            >
                <ChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
