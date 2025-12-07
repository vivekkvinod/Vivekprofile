import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <a href="#" className="logo">
                    Vivek<span className="logo-accent">.</span>
                </a>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
