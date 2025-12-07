import { useState, useEffect } from 'react';

const HackerText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((letter, index) => {
                        if (index < iterations) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('')
            );

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <span className={className}>
            {displayText}
        </span>
    );
};

export default HackerText;
