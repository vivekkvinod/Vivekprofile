import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "SOC Analyst – Associate 1",
            company: "UST Global",
            period: "May 2024 – Present",
            location: "Thiruvananthapuram",
            responsibilities: [
                "Performed email analysis and classified messages as phishing, spam, or safe based on threat indicators.",
                "Investigated risky sign-ins and abnormal user behavior through Azure IAM and Entra ID logs.",
                "Worked with Elysium Analytics SIEM platform to analyze and correlate security alerts.",
                "Investigated Defender alerts for malware, phishing, and lateral movement; validated true positives and escalated critical cases.",
                "Leveraged Microsoft Sentinel for real-time security event monitoring and incident triage using KQL.",
                "Mitigated phishing emails and spoofed senders using Mimecast.",
                "Conducted endpoint threat remediation using Malwarebytes Nebula.",
                "Supported users remotely for Netskope VPN and access issues.",
                "Developed automation use cases for repetitive SOC tasks.",
                "Prepared detailed weekly/monthly client reports on incident trends and SLA metrics."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <Briefcase className="text-cyber-accent" size={28} />
                    <h2 className="text-3xl font-bold">Professional Experience</h2>
                </motion.div>

                <div className="relative border-l-2 border-cyber-accent/20 ml-4 max-w-4xl">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mb-12 pl-8 relative"
                        >
                            <div className="absolute w-4 h-4 bg-cyber-accent rounded-full -left-[9px] top-0 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>

                            <div className="glass-card p-8 rounded-xl cyber-border">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-cyber-accent font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-cyber-muted text-sm mt-2 md:mt-0">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex gap-3 text-cyber-muted text-sm leading-relaxed">
                                            <CheckCircle2 size={16} className="text-cyber-accent/50 shrink-0 mt-1" />
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
