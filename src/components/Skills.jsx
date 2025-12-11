import { motion } from 'framer-motion';
import { Cpu, Activity, Server, Shield } from 'lucide-react';

const Skills = () => {
    const categories = [
        {
            name: "THREAT_DETECTION",
            icon: <Shield size={18} />,
            color: "#ff2a6d", // Red
            skills: [
                { name: "Phishing Analysis", level: 95 },
                { name: "Incident Handling", level: 90 },
                { name: "Threat Hunting", level: 85 }
            ]
        },
        {
            name: "SECURITY_STACK",
            icon: <Server size={18} />,
            color: "#00f0ff", // Blue
            skills: [
                { name: "Mimecast Gateway", level: 98 },
                { name: "Entra ID (Azure AD)", level: 95 },
                { name: "MS Sentinel / SIEM", level: 50 },
                { name: "Defender XDR", level: 50 }
            ]
        },
        {
            name: "SCRIPTING_CORE",
            icon: <Cpu size={18} />,
            color: "#00ff41", // Green
            skills: [
                { name: "Python Automation", level: 80 },
                { name: "KQL Queries", level: 85 },
                { name: "Network Analysis", level: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold font-mono flex items-center justify-center gap-3">
                        <Activity className="text-cyber-accent" />
                        SYSTEM_CAPABILITIES
                    </h2>
                    <p className="text-cyber-muted mt-2">Proficiency metrics loaded from active neural net.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-cyber-slate/50 border border-cyber-accent/20 p-6 rounded-xl hover:border-cyber-accent/50 transition-colors">
                            <div className="flex items-center gap-2 mb-6 pb-2 border-b border-white/5" style={{ color: cat.color }}>
                                {cat.icon}
                                <h3 className="font-bold font-mono tracking-wider">{cat.name}</h3>
                            </div>

                            <div className="space-y-6">
                                {cat.skills.map((skill, j) => (
                                    <div key={j}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="text-cyber-text font-medium">{skill.name}</span>
                                            <span className="text-cyber-muted font-mono">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: j * 0.1 }}
                                                className="h-full rounded-full relative"
                                                style={{ backgroundColor: cat.color }}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
