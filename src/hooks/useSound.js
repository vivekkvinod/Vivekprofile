import { useCallback } from 'react';
import { useSettings } from '../context/SettingsContext';

const useSound = () => {
    const { settings } = useSettings();

    const playHover = useCallback(() => {
        if (!settings?.soundEnabled) return;
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
        audio.volume = 0.1;
        audio.play().catch(e => console.log('Audio play failed', e));
    }, [settings]);

    const playClick = useCallback(() => {
        if (!settings?.soundEnabled) return;
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
        audio.volume = 0.2;
        audio.play().catch(e => console.log('Audio play failed', e));
    }, [settings]);

    return { playHover, playClick };
};

export default useSound;
