import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Instagram, Phone, Shield, Send } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
    const [challengeStep, setChallengeStep] = useState('menu'); // menu, challenge, revealed
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(false);

    const handleChallenge = (e) => {
        e.preventDefault();
        // Simple challenge: Port 443
        if (answer.trim() === '443') {
            setChallengeStep('revealed');
            setError(false);
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000); // Reset shake
        }
    };

    const reset = () => {
        setChallengeStep('menu');
        setAnswer('');
        setError(false);
    };

    const handleClose = () => {
        reset();
        onClose();
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-md bg-cyber-slate border border-cyber-accent/30 rounded-xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.1)] overflow-hidden"
                    >
                        {/* Decorative scanning line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-accent to-transparent animate-pulse" />

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-cyber-muted hover:text-cyber-accent transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-cyber-text">
                            <Shield className="text-cyber-accent" />
                            Secure Connection
                        </h2>

                        {challengeStep === 'menu' && (
                            <div className="space-y-4">
                                <a
                                    href="mailto:vivekvinod422@gmail.com"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-cyber-accent/30 transition-all group"
                                >
                                    <div className="p-3 rounded-full bg-cyber-accent/10 text-cyber-accent group-hover:scale-110 transition-transform">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-cyber-text">Email Protocol</h3>
                                        <p className="text-sm text-cyber-muted">vivekvinod422@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.instagram.com/_vivek_k_v_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-cyber-purple/50 transition-all group"
                                >
                                    <div className="p-3 rounded-full bg-cyber-purple/10 text-cyber-purple group-hover:scale-110 transition-transform">
                                        <Instagram size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-cyber-text">Instagram Uplink</h3>
                                        <p className="text-sm text-cyber-muted">@_vivek_k_v_</p>
                                    </div>
                                </a>

                                <button
                                    onClick={() => setChallengeStep('challenge')}
                                    className="w-full flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-green-500/30 transition-all group text-left"
                                >
                                    <div className="p-3 rounded-full bg-green-500/10 text-green-500 group-hover:scale-110 transition-transform">
                                        <Phone size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-cyber-text">Direct Line</h3>
                                        <p className="text-sm text-cyber-muted">Encrypted. Verification required.</p>
                                    </div>
                                </button>
                            </div>
                        )}

                        {challengeStep === 'challenge' && (
                            <div className="space-y-4">
                                <div className="text-center mb-6">
                                    <Lock className="w-12 h-12 mx-auto text-cyber-accent mb-2 animate-pulse" />
                                    <h3 className="text-xl font-mono font-bold text-cyber-text">Security Check</h3>
                                    <p className="text-cyber-muted text-sm mt-2">To access the phone number, answer this:</p>
                                    <p className="text-cyber-accent font-mono mt-2 text-lg">"What is the standard port for HTTPS?"</p>
                                </div>

                                <form onSubmit={handleChallenge} className="relative">
                                    <input
                                        type="text"
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                        placeholder="Enter port number..."
                                        className={`w-full bg-black/50 border ${error ? 'border-red-500 animate-shake' : 'border-cyber-muted/30 focus:border-cyber-accent'} rounded p-3 text-center font-mono text-xl outline-none transition-colors`}
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-2 p-2 bg-cyber-accent/10 text-cyber-accent rounded hover:bg-cyber-accent/20 transition-colors"
                                    >
                                        <Send size={20} />
                                    </button>
                                </form>
                                <button
                                    onClick={() => setChallengeStep('menu')}
                                    className="w-full text-center text-sm text-cyber-muted hover:text-white mt-4"
                                >
                                    Cancel verification
                                </button>
                            </div>
                        )}

                        {challengeStep === 'revealed' && (
                            <div className="text-center py-6 space-y-4">
                                <div className="p-4 bg-green-500/10 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4">
                                    <Phone className="w-10 h-10 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold font-mono text-white tracking-wider">+91-8075839132</h3>
                                <p className="text-green-400/80 font-mono text-sm">ACCESS GRANTED</p>
                                <a
                                    href="tel:+918075839132"
                                    className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition-colors font-bold"
                                >
                                    Call Now
                                </a>
                                <button
                                    onClick={() => setChallengeStep('menu')}
                                    className="block w-full text-center text-sm text-cyber-muted hover:text-white mt-4"
                                >
                                    Back to Menu
                                </button>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
