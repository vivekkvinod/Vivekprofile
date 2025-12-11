import { useEffect, useRef } from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const ThreatMap = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = 600;
        };
        resize();
        window.addEventListener('resize', resize);

        // World Map simplified points (approximate for visual effect)
        const threats = [];
        const maxThreats = 20;

        const createThreat = () => {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                targetX: canvas.width / 2,
                targetY: canvas.height / 2,
                speed: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? '#f43f5e' : '#eab308', // Red or Yellow
                radius: Math.random() * 2 + 1,
                progress: 0
            };
        };

        const draw = () => {
            // Fade out trail
            ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Center Shield Glow
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            ctx.beginPath();
            ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.fill();

            // Draw Threats
            if (threats.length < maxThreats && Math.random() > 0.95) {
                threats.push(createThreat());
            }

            for (let i = 0; i < threats.length; i++) {
                const t = threats[i];
                t.progress += t.speed / 100;

                const currentX = t.x + (t.targetX - t.x) * t.progress;
                const currentY = t.y + (t.targetY - t.y) * t.progress;

                ctx.beginPath();
                ctx.arc(currentX, currentY, t.radius, 0, Math.PI * 2);
                ctx.fillStyle = t.color;
                ctx.fill();

                // Draw line
                ctx.beginPath();
                ctx.moveTo(t.x, t.y);
                ctx.lineTo(currentX, currentY);
                ctx.strokeStyle = `rgba(${t.color === '#f43f5e' ? '244, 63, 94' : '234, 179, 8'}, 0.2)`;
                ctx.stroke();

                if (t.progress >= 1) {
                    threats.splice(i, 1);
                    i--;

                    // Impact effect
                    ctx.beginPath();
                    ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
                    ctx.strokeStyle = '#00f0ff';
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
            requestAnimationFrame(draw);
        };

        const animationId = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <section className="py-20 relative overflow-hidden bg-black/60 border-t border-b border-cyber-accent/10">
            <div className="absolute inset-0 z-0">
                <canvas ref={canvasRef} className="w-full h-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-block p-6 rounded-full bg-cyber-slate/80 border border-cyber-accent/30 backdrop-blur-xl mb-4"
                >
                    <Shield className="w-16 h-16 text-cyber-accent animate-pulse" />
                </motion.div>
                <h2 className="text-3xl font-bold text-cyber-text mb-2">Active Threat Neutralization</h2>
                <p className="text-cyber-muted">Real-time monitoring of blocked attack vectors</p>
            </div>
        </section>
    );
};

export default ThreatMap;
