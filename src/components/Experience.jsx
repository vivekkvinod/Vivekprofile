import { motion } from 'framer-motion';
import { Terminal, Calendar, AlertTriangle, ShieldCheck } from 'lucide-react';

const Experience = () => {
    const logs = [
        {
            date: "2024-05-01",
            level: "INIT_SESSION",
            title: "SOC Analyst – Associate 1",
            company: "UST Global",
            location: "Thiruvananthapuram",
            events: [
                { type: "INFO", msg: "Analyzed phishing threat vectors in email gateway." },
                { type: "WARN", msg: "Investigated risky sign-ins (Azure IAM / Entra ID)." },
                { type: "SUCCESS", msg: "Correlated security alerts via Elysium Analytics SIEM." },
                { type: "CRITICAL", msg: "Escalated validated true positives from Defender XDR." },
                { type: "SYSTEM", msg: "Deployed automation logic for routine SOC tasks." },
                { type: "METRIC", msg: "Generated weekly SLA reports on incident trends." }
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black/40 border-y border-cyber-accent/10">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-10"
                >
                    <Terminal className="text-cyber-accent" size={28} />
                    <h2 className="text-3xl font-bold font-mono">SYSTEM_AUDIT_LOGS</h2>
                </motion.div>

                <div className="bg-black/90 rounded-lg border border-cyber-accent/30 p-6 font-mono text-sm md:text-base shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                    {/* Log Header */}
                    <div className="flex border-b border-cyber-accent/20 pb-4 mb-4 text-cyber-muted uppercase text-xs tracking-wider">
                        <div className="w-32 md:w-48">Timestamp</div>
                        <div className="w-24 md:w-32">Level</div>
                        <div className="flex-1">Message</div>
                    </div>

                    {/* Log content */}
                    {logs.map((log, index) => (
                        <div key={index}>
                            {/* Role Entry */}
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex flex-col md:flex-row mb-6 text-cyber-accent"
                            >
                                <div className="w-32 md:w-48 shrink-0 opacity-70">[{log.date}]</div>
                                <div className="w-24 md:w-32 shrink-0 font-bold text-cyber-purple">{log.level}</div>
                                <div>
                                    <span className="font-bold">{log.title}</span> @ {log.company}
                                    <div className="text-xs text-cyber-muted mt-1 opacity-50">{log.location}</div>
                                </div>
                            </motion.div>

                            {/* Details */}
                            {log.events.map((event, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex flex-col md:flex-row py-2 hover:bg-white/5 transition-colors border-l border-cyber-accent/10 ml-2 md:ml-0 pl-4 md:pl-0"
                                >
                                    <div className="w-32 md:w-48 shrink-0 text-cyber-muted/50 text-xs py-1 font-mono hidden md:block">
                                        {`+${(i + 1).toString().padStart(4, '0')}ms`}
                                    </div>
                                    <div className={`w-24 md:w-32 shrink-0 font-bold text-xs py-1 ${event.type === 'CRITICAL' ? 'text-red-500' :
                                            event.type === 'WARN' ? 'text-yellow-500' :
                                                event.type === 'SUCCESS' ? 'text-green-500' :
                                                    'text-blue-400'
                                        }`}>
                                        [{event.type}]
                                    </div>
                                    <div className="flex-1 text-cyber-text/80">
                                        {event.msg}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-6 pt-4 border-t border-cyber-accent/20 text-cyber-accent animate-pulse"
                    >
                        > _ WAITING FOR NEW INPUT...
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
