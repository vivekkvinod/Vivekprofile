import { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    // Initialize state from local storage or defaults
    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem('cyber-portfolio-settings');
        return saved ? JSON.parse(saved) : {
            soundEnabled: true,
            reducedMotion: false,
            themeColor: '#00f0ff' // Default Cyber Blue
        };
    });

    useEffect(() => {
        localStorage.setItem('cyber-portfolio-settings', JSON.stringify(settings));

        // Apply theme color variable
        document.documentElement.style.setProperty('--cyber-accent', settings.themeColor);

        // 50% opacity version for gradients
        document.documentElement.style.setProperty('--cyber-accent-glow', `${settings.themeColor}80`);
    }, [settings]);

    const toggleSound = () => setSettings(prev => ({ ...prev, soundEnabled: !prev.soundEnabled }));
    const toggleMotion = () => setSettings(prev => ({ ...prev, reducedMotion: !prev.reducedMotion }));
    const setThemeColor = (color) => setSettings(prev => ({ ...prev, themeColor: color }));

    return (
        <SettingsContext.Provider value={{ settings, toggleSound, toggleMotion, setThemeColor }}>
            {children}
        </SettingsContext.Provider>
    );
};
