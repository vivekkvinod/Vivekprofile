import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-cyber-dark/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyber-accent/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyber-accent/30 rounded-br-2xl"></div>

          <div className="flex items-center gap-3 mb-8">
            <User className="text-cyber-accent" size={28} />
            <h2 className="text-3xl font-bold">Professional Summary</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-cyber-muted leading-relaxed">
              <p>
                SOC Analyst with <span className="text-cyber-accent">1.6 years</span> of experience in threat detection, incident response, and
                remediation across cloud, email, and endpoint systems.
              </p>
              <p>
                Proficient in phishing analysis, <span className="text-white font-semibold">Microsoft Defender XDR</span>, and Azure IAM-based risk
                investigation. Skilled in handling MFA/session revokes, VPN and access troubleshooting,
                and SIEM alert triage.
              </p>
              <p>
                Known for precision, SLA compliance, and end-to-end incident ownership.
                Dedicated to maintaining operational continuity while mitigating complex security threats.
              </p>
            </div>

            <div className="space-y-4 border-l border-white/5 pl-6">
              <h3 className="text-white font-semibold mb-4">Contact Intel</h3>

              <div className="flex items-center gap-3 text-sm text-cyber-muted">
                <MapPin size={16} className="text-cyber-accent" />
                <span>Thiruvananthapuram, Kerala, India</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-cyber-muted group cursor-pointer">
                <Mail size={16} className="text-cyber-accent" />
                <a href="mailto:vivekvinod422@gmail.com" className="group-hover:text-cyber-accent transition-colors">
                  vivekvinod422@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-cyber-muted">
                <Phone size={16} className="text-cyber-accent" />
                <span>+91-8075839132</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
