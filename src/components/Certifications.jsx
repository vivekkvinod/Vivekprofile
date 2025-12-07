import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';

const Certifications = () => {
    const certs = [
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Proofpoint Certified Phishing Specialist (2025)",
        "Proofpoint Certified Email Authentication Specialist (2025)",
        "ArcX Cyber Threat Intelligence 101"
    ];

    const awards = [
        {
            title: "USTAR Shining Star",
            desc: "Perfect 10/10 NPS from client"
        },
        {
            title: "USTAR Super Star",
            desc: "Exceptional dedication in incident response"
        },
        {
            title: "USTAR3 – July 2025",
            desc: "Contained critical threat in live response"
        }
    ];

    return (
        <section id="certifications" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-accent/5 skew-y-3 transform origin-bottom-right"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education & Certs */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-cyber-purple" size={28} />
                            <h2 className="text-2xl font-bold">Certifications & Education</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card p-6 rounded-xl cyber-border">
                                <h3 className="text-lg font-bold text-white mb-4">Certifications</h3>
                                <ul className="space-y-3">
                                    {certs.map((cert, i) => (
                                        <li key={i} className="flex items-center gap-3 text-cyber-muted text-sm">
                                            <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full"></span>
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="glass-card p-6 rounded-xl cyber-border">
                                <div className="flex items-center gap-2 mb-4 text-cyber-accent">
                                    <GraduationCap size={20} />
                                    <h3 className="text-lg font-bold">Education</h3>
                                </div>
                                <h4 className="text-white font-medium">B.Tech in Computer Science and Engineering</h4>
                                <p className="text-cyber-muted text-sm">Sahrdaya College of Engineering and Technology</p>
                                <p className="text-cyber-muted/60 text-xs mt-1">2019 – 2023 | CGPA: 7.45</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Awards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-yellow-400" size={28} />
                            <h2 className="text-2xl font-bold">Honors & Awards</h2>
                        </div>

                        <div className="grid gap-4">
                            {awards.map((award, index) => (
                                <div key={index} className="glass-card p-4 rounded-lg border-l-4 border-yellow-400/50">
                                    <h3 className="font-bold text-white">{award.title}</h3>
                                    <p className="text-cyber-muted text-sm">{award.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
