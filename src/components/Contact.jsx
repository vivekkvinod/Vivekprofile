import React from 'react';
import Button from './Button';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for getting in touch! This is a demo form.");
    };

    return (
        <footer id="contact" className="contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="contact-subtitle">
                            Have a security incident to discuss or looking for SOC expertise? Reach out using the form or details below.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="label">Location</span>
                                <span className="value">Thiruvananthapuram, Kerala, India</span>
                            </div>
                            <div className="contact-item">
                                <span className="label">Email</span>
                                <a href="mailto:vivekvinod422@gmail.com" className="value">vivekvinod422@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="label">Phone</span>
                                <span className="value">+91 8075839132</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/vivekkv10" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="email@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                        </div>
                        <Button type="submit">Send Message</Button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Vivek K Vinod. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
