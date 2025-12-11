import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Volume2, VolumeX, Eye, EyeOff, X } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

const SettingsPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { settings, toggleSound, toggleMotion, setThemeColor } = useSettings();

    const colors = [
        { name: 'Cyber Blue', value: '#00f0ff' },
        { name: 'Neon Green', value: '#00ff41' },
        { name: 'Alert Red', value: '#ff2a6d' },
        { name: 'Royal Purple', value: '#bd00ff' }
    ];

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed bottom-6 right-6 z-50 p-3 bg-cyber-dark/80 border border-cyber-accent/30 rounded-full text-cyber-accent hover:bg-cyber-accent/20 backdrop-blur-md transition-colors"
                onClick={() => setIsOpen(true)}
                whileHover={{ rotate: 180 }}
            >
                <Settings size={24} />
            </motion.button>

            {/* Panel Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 20 }}
                            className="fixed right-0 top-0 h-full w-80 bg-cyber-slate border-l border-cyber-accent/20 z-[60] p-6 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Settings className="text-cyber-accent" />
                                    <span>SYSTEM_CONFIG</span>
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-cyber-accent transition-colors"
                                >
                                    <X />
                                </button>
                            </div>

                            <div className="space-y-8">
                                {/* Sound Toggle */}
                                <div className="space-y-3">
                                    <label className="text-sm text-cyber-muted font-mono tracking-wider">AUDIO_FEEDBACK</label>
                                    <button
                                        onClick={toggleSound}
                                        className={`w-full flex items-center justify-between p-4 rounded border transition-all ${settings.soundEnabled
                                                ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent'
                                                : 'bg-black/20 border-white/10 text-gray-400'
                                            }`}
                                    >
                                        <span className="font-bold">{settings.soundEnabled ? 'ENABLED' : 'DISABLED'}</span>
                                        {settings.soundEnabled ? <Volume2 /> : <VolumeX />}
                                    </button>
                                </div>

                                {/* Motion Toggle */}
                                <div className="space-y-3">
                                    <label className="text-sm text-cyber-muted font-mono tracking-wider">VISUAL_EFFECTS</label>
                                    <button
                                        onClick={toggleMotion}
                                        className={`w-full flex items-center justify-between p-4 rounded border transition-all ${!settings.reducedMotion
                                                ? 'bg-cyber-accent/10 border-cyber-accent text-cyber-accent'
                                                : 'bg-black/20 border-white/10 text-gray-400'
                                            }`}
                                    >
                                        <span className="font-bold">{!settings.reducedMotion ? 'MAXIMUM' : 'REDUCED'}</span>
                                        {!settings.reducedMotion ? <Eye /> : <EyeOff />}
                                    </button>
                                </div>

                                {/* Theme Color */}
                                <div className="space-y-3">
                                    <label className="text-sm text-cyber-muted font-mono tracking-wider">INTERFACE_THEME</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {colors.map((c) => (
                                            <button
                                                key={c.value}
                                                onClick={() => setThemeColor(c.value)}
                                                className={`p-2 rounded border flex items-center gap-2 transition-all ${settings.themeColor === c.value
                                                        ? 'border-cyber-accent bg-cyber-accent/10'
                                                        : 'border-white/5 hover:border-white/20'
                                                    }`}
                                            >
                                                <div
                                                    className="w-4 h-4 rounded-full shadow-[0_0_10px_currentColor]"
                                                    style={{ backgroundColor: c.value, color: c.value }}
                                                />
                                                <span className="text-xs text-left">{c.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 text-center">
                                <div className="text-[10px] text-cyber-muted font-mono">
                                    SYSTEM VERSION 2.0.4
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default SettingsPanel;
