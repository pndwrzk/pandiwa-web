import { useEffect, useRef, useState } from 'react';

interface FadingImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const FadingImage: React.FC<FadingImageProps> = ({ src, alt, className }) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [opacity, setOpacity] = useState<number>(1); // Start fully visible
    const [lastScrollY, setLastScrollY] = useState<number>(0); // Track the last scroll position

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Check scroll direction
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setOpacity((prev) => Math.max(0, prev - 0.05)); // Decrease opacity
        } else {
            // Scrolling up
            setOpacity((prev) => Math.min(1, prev + 0.05)); // Increase opacity
        }

        setLastScrollY(currentScrollY); // Update last scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // Update on resize as well

        // Initial check on mount
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <img
            ref={imgRef}
            className={`h-[500px] object-cover transition-opacity duration-300`}
            src={src}
            alt={alt}
            style={{ opacity }} // Apply dynamic opacity
        />
    );
};

export default FadingImage;
