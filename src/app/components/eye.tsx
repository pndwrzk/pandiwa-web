// components/Eye.tsx
import React, { useRef, useEffect } from 'react';

interface EyeProps {
    pupilId: string;
}

const Eye: React.FC<EyeProps> = ({ pupilId }) => {
    const eyeRef = useRef<HTMLDivElement>(null);
    const pupilRef = useRef<HTMLDivElement>(null);

    const movePupil = (event: MouseEvent) => {
        const eye = eyeRef.current;
        const pupil = pupilRef.current;

        if (!eye || !pupil) return;

        // Get eye position
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Get mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Calculate angle and distance
        const deltaX = mouseX - eyeCenterX;
        const deltaY = mouseY - eyeCenterY;
        const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), 13); // max movement distance
        const angle = Math.atan2(deltaY, deltaX);

        // Calculate pupil position
        const pupilX = distance * Math.cos(angle);
        const pupilY = distance * Math.sin(angle);

        // Apply transformation to pupil
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => movePupil(event);

        // Attach the mousemove event listener to the document body
        document.body.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="flex flex-col items-center"
            ref={eyeRef}
        >
            <div className="w-14 h-16 md:w-10 md:h-12 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.6)] flex items-center justify-center border-[2px] border-gray-300">
                <div
                    className="w-5 h-5 md:w-3 md:h-3 rounded-full bg-gradient-to-b from-black to-gray-700 shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.5)] pupil transition-transform duration-100"
                    ref={pupilRef}
                ></div>
            </div>
        </div>
    );
};

export default Eye;
