import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield, Camera } from 'lucide-react';
import useSound from '../hooks/useSound';

const Header = ({ onOpenPhotos }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { playHover, playClick } = useSound();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        playClick();
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
    ];

    return (
        <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled || isOpen ? 'bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-accent/10' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo area */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    onMouseEnter={playHover}
                >
                    <Shield className="text-cyber-accent w-8 h-8" />
                    <div className="flex flex-col">
                        <span className="font-bold text-lg tracking-wider">VIVEK<span className="text-cyber-accent">.SEC</span></span>
                        <span className="text-[10px] text-cyber-muted tracking-[0.2em] uppercase">SOC Analyst</span>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            onMouseEnter={playHover}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-cyber-muted hover:text-cyber-accent transition-colors text-sm font-medium tracking-wide"
                        >
                            <span className="text-cyber-accent mr-1">0{index + 1}.</span> {item.name}
                        </motion.a>
                    ))}

                    <motion.button
                        onClick={() => { playClick(); onOpenPhotos(); }}
                        onMouseEnter={playHover}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-cyber-muted hover:text-cyber-accent transition-colors text-sm font-medium tracking-wide flex items-center gap-1"
                    >
                        <span className="text-cyber-accent">05.</span> Photos
                    </motion.button>

                    <motion.a
                        href="mailto:vivekvinod422@gmail.com"
                        onMouseEnter={playHover}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-4 py-2 border border-cyber-accent/50 text-cyber-accent text-sm rounded hover:bg-cyber-accent/10 transition-colors"
                    >
                        Connect
                    </motion.a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-cyber-text"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-cyber-dark/95 border-b border-cyber-accent/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-cyber-text hover:text-cyber-accent py-3 block border-l-2 border-transparent hover:border-cyber-accent pl-4 transition-all text-lg font-medium"
                                    onClick={(e) => scrollToSection(e, item.href)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    playClick();
                                    onOpenPhotos();
                                    setIsOpen(false);
                                }}
                                className="text-left w-full text-cyber-text hover:text-cyber-accent py-3 block border-l-2 border-transparent hover:border-cyber-accent pl-4 transition-all text-lg font-medium"
                            >
                                Photos
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
