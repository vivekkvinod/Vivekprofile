import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-cyber-slate/30 border-t border-cyber-accent/10 py-12 mt-20">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-8 mb-8">
                    <a href="https://linkedin.com/in/vivekkv10" target="_blank" rel="noopener noreferrer" className="text-cyber-muted hover:text-cyber-accent transition-colors">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:vivekvinod422@gmail.com" className="text-cyber-muted hover:text-cyber-accent transition-colors">
                        <Mail size={24} />
                    </a>
                </div>
                <p className="text-cyber-muted text-sm">
                    © {currentYear} Vivek K Vinod. All rights reserved.
                </p>
                <p className="text-cyber-muted/50 text-xs mt-2">
                    Securing the digital frontier, one packet at a time.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
