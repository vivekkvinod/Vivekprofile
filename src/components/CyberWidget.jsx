import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, RefreshCw, Send } from 'lucide-react';

const CyberWidget = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [mode, setMode] = useState('encrypt');

    const processText = (text, currentMode) => {
        if (!text) return '';
        // Simple Caesar Cipher (+1/-1) for fun effect
        return text.split('').map(char => {
            if (char.match(/[a-zA-Z]/)) {
                const code = char.charCodeAt(0);
                const shift = currentMode === 'encrypt' ? 1 : -1;
                return String.fromCharCode(code + shift);
            }
            return char;
        }).join('');
    };

    const handleInput = (e) => {
        const val = e.target.value;
        setInput(val);
        setOutput(processText(val, mode));
    };

    const toggleMode = () => {
        const newMode = mode === 'encrypt' ? 'decrypt' : 'encrypt';
        setMode(newMode);
        setOutput(processText(input, newMode));
    };

    return (
        <section className="py-20 bg-black/40 border-t border-cyber-accent/10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h2 className="text-2xl font-bold text-cyber-text mb-2">Secure Comms Widget</h2>
                    <p className="text-cyber-muted text-sm">Encrypt your messages before sending.</p>
                </div>

                <div className="max-w-xl mx-auto bg-cyber-slate/50 p-6 rounded-xl border border-cyber-accent/20 backdrop-blur-md">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-mono text-cyber-accent flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyber-accent rounded-full animate-pulse"></span>
                            {mode.toUpperCase()}ION ACTIVE
                        </span>
                        <button
                            onClick={toggleMode}
                            className="text-cyber-muted hover:text-white transition-colors"
                        >
                            <RefreshCw size={16} />
                        </button>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                value={input}
                                onChange={handleInput}
                                placeholder="Type message..."
                                className="w-full bg-black/40 border border-cyber-muted/20 rounded p-3 text-cyber-text focus:border-cyber-accent outline-none"
                            />
                        </div>

                        <div className="relative flex gap-2">
                            <div className="relative flex-1">
                                <div className="absolute left-3 top-3 text-cyber-muted">
                                    {mode === 'encrypt' ? <Lock size={16} /> : <Unlock size={16} />}
                                </div>
                                <div className="w-full bg-black/60 border border-cyber-accent/10 rounded p-3 pl-10 h-12 flex items-center font-mono text-cyber-accent truncate">
                                    {output || <span className="text-gray-700 opacity-50">...result...</span>}
                                </div>
                            </div>
                            <a
                                href={`mailto:vivekvinod422@gmail.com?subject=Encrypted Transmission&body=${encodeURIComponent(output)}`}
                                className="bg-cyber-accent/10 hover:bg-cyber-accent/20 text-cyber-accent border border-cyber-accent/30 rounded px-4 flex items-center justify-center transition-colors"
                                title="Send via Email"
                            >
                                <Send size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyber-accent/5 rounded-full blur-3xl"></div>
        </section>
    );
};

export default CyberWidget;
