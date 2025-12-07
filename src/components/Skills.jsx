import { motion } from 'framer-motion';
import { Cpu, Code, ShieldCheck } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Security Tools",
            icon: <ShieldCheck className="text-cyber-accent" />,
            skills: [
                "Mimecast Email Gateway",
                "Elysium Analytics (SIEM)",
                "Entra ID (Azure AD)",
                "Microsoft Defender XDR",
                "Azure Sentinel",
                "Netskope",
                "Malwarebytes Nebula",
                "ServiceNow"
            ]
        },
        {
            title: "Languages & Scripting",
            icon: <Code className="text-cyber-purple" />,
            skills: ["Python", "Bash", "C", "KQL (Kusto Query Language)"]
        },
        {
            title: "Core Expertise",
            icon: <Cpu className="text-blue-400" />,
            skills: [
                "Incident Handling",
                "Phishing Analysis",
                "Threat Hunting",
                "MFA & Identity Security",
                "Risky Sign-in Analysis",
                "VPN Troubleshooting"
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-cyber-dark/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
                    <p className="text-cyber-muted">Tools and technologies deployed in defense operations.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-6 rounded-xl hover:bg-cyber-slate/70 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-cyber-dark border border-white/10 text-cyber-muted group-hover:text-white group-hover:border-cyber-accent/30 transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
