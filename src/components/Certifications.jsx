import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Card = ({ title, issuer, year, id }) => {
    const ref = useRef(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`calc(${mouseYSpring} * -0.5deg)`;
    const rotateY = useMotionTemplate`calc(${mouseXSpring} * 0.5deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct * 20); // Sensitivity
        y.set(yPct * 20);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="relative h-64 w-full rounded-xl bg-gradient-to-br from-cyber-slate/80 to-cyber-dark/80 border border-cyber-accent/30 group cursor-pointer"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d"
                }}
                className="absolute inset-0 flex flex-col justify-between p-6"
            >
                <div className="flex justify-between items-start">
                    <Award className="text-cyber-accent w-10 h-10 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                    <span className="font-mono text-xs text-cyber-muted opacity-50">{year}</span>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-cyber-accent transition-colors">
                        {title}
                    </h3>
                    <p className="text-sm text-cyber-muted font-mono">{issuer}</p>
                </div>

                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-mono text-cyber-accent">ID: {id}</span>
                    <ExternalLink size={16} className="text-white hover:text-cyber-accent" />
                </div>
            </div>

            {/* Holographic Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
        </motion.div>
    );
};

const Certifications = () => {
    const certs = [
        {
            title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
            issuer: "Microsoft",
            year: "2023",
            id: "AZ-900"
        },
        {
            title: "Proofpoint Certified Phishing Specialist",
            issuer: "Proofpoint",
            year: "2025",
            id: "PFPT-CPS"
        },
        {
            title: "Proofpoint Certified Email Authentication Specialist",
            issuer: "Proofpoint",
            year: "2025",
            id: "PFPT-CEAS"
        },
        {
            title: "ArcX Cyber Threat Intelligence 101",
            issuer: "ArcX",
            year: "2024",
            id: "ARCX-CTI"
        }
    ];

    const awards = [
        {
            title: "USTAR Shining Star",
            issuer: "UST Global",
            year: "2024",
            id: "CLIENT-NPS-10"
        },
        {
            title: "USTAR Super Star",
            issuer: "UST Global",
            year: "2024",
            id: "INCIDENT-RESPONSE"
        },
        {
            title: "USTAR3 Award",
            issuer: "UST Global",
            year: "July 2025",
            id: "CRITICAL-THREAT"
        }
    ];

    const education = [
        {
            title: "B.Tech in Computer Science and Engineering",
            issuer: "Sahrdaya College of Engineering",
            year: "2019 - 2023",
            id: "CGPA: 7.45"
        }
    ];

    return (
        <section id="certifications" className="py-20 bg-cyber-dark/50 overflow-hidden relative">
            <div className="container mx-auto px-6">

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Award className="text-cyber-accent" />
                        Certifications
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
                        {certs.map((cert, i) => (
                            <Card key={i} {...cert} />
                        ))}
                    </div>
                </motion.div>

                {/* Awards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Award className="text-yellow-400" />
                        Honors & Awards
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 perspective-1000">
                        {awards.map((award, i) => (
                            <Card key={i} {...award} />
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <ExternalLink className="text-cyber-purple" />
                        Education
                    </h2>
                    <div className="max-w-2xl perspective-1000">
                        {education.map((edu, i) => (
                            <Card key={i} {...edu} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
