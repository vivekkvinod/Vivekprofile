import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const [history, setHistory] = useState([
        { text: "Initializing SOC Analyst Profile...", type: "system" },
        { text: "Access Granted. Welcome, User.", type: "success" },
        { text: "Type 'help' to see available commands.", type: "info" }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const commands = {
        help: () => [
            { text: "Available commands:", type: "info" },
            { text: "  whoami    - Display profile summary", type: "system" },
            { text: "  skills    - List technical capabilities", type: "system" },
            { text: "  clear     - Clear terminal history", type: "system" },
            { text: "  contact   - Display communication channels", type: "system" }
        ],
        whoami: () => [
            { text: "User: Vivek K Vinod", type: "success" },
            { text: "Role: SOC Analyst [Level 2 Clearance]", type: "info" },
            { text: "Mission: Threat Hunting, Incident Response, and Security Operations.", type: "system" }
        ],
        skills: () => [
            { text: "Analyzing Threat Vectors...", type: "warning" },
            { text: "• SIEM (Splunk, Sentinel)", type: "success" },
            { text: "• Network Analysis (Wireshark)", type: "success" },
            { text: "• EDR Security", type: "success" },
            { text: "• Python Automation", type: "success" }
        ],
        contact: () => [
            { text: "Initiating Handshake Protocol...", type: "warning" },
            { text: "Email: vivekvinod422@gmail.com", type: "info" },
            { text: "IG: @_vivek_k_v_", type: "info" }
        ],
        clear: () => {
            setHistory([]);
            return [];
        }
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            if (!cmd) return;

            setHistory(prev => [...prev, { text: `> ${input}`, type: "command" }]);

            if (commands[cmd]) {
                const response = commands[cmd]();
                if (response) {
                    // Simulate processing delay
                    setTimeout(() => {
                        setHistory(prev => [...prev, ...response]);
                    }, 300);
                }
            } else {
                setHistory(prev => [...prev, { text: `Command not found: ${cmd}`, type: "error" }]);
            }
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 font-mono text-sm md:text-base">
            <div className="bg-black/80 border border-cyber-accent/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.1)] backdrop-blur-md">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-cyber-slate border-b border-cyber-accent/20">
                    <div className="flex items-center gap-2 text-cyber-muted">
                        <TerminalIcon size={16} />
                        <span>vivek_sec_node_01</span>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 h-[400px] overflow-y-auto custom-scrollbar" onClick={() => document.getElementById('terminal-input')?.focus()}>
                    {history.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`mb-1 ${line.type === 'command' ? 'text-cyber-text font-bold' :
                                    line.type === 'error' ? 'text-red-500' :
                                        line.type === 'success' ? 'text-green-400' :
                                            line.type === 'warning' ? 'text-yellow-400' :
                                                'text-cyber-muted'
                                }`}
                        >
                            {line.text}
                        </motion.div>
                    ))}
                    <div className="flex items-center gap-2 mt-2 text-cyber-accent">
                        <span>➜</span>
                        <span>~</span>
                        <input
                            id="terminal-input"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="flex-1 bg-transparent outline-none border-none text-cyber-text caret-cyber-accent"
                            autoComplete="off"
                            autoFocus
                        />
                    </div>
                    <div ref={bottomRef} />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
