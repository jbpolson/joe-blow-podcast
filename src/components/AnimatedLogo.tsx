
import { useEffect, useRef, useState } from 'react';

const letterImages = [
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB1.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB2.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB3.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB4.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB5.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB6.png?v=1740198317",
  "https://cdn.shopify.com/s/files/1/1114/4850/files/JB7.png?v=1740198317",
];

const AnimatedLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    const handleScroll = () => {
      if (container) {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      if (container) {
        observer.unobserve(container);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLetterStyle = (index: number) => {
    if (!isVisible) return {};

    // Initial scattered positions
    const initialOffsetX = (index - 3) * 30; // Spread letters horizontally
    const initialOffsetY = Math.sin(index) * 40; // Stagger vertical positions

    // Wave animation parameters
    const baseDelay = index * 0.5; // Increased delay between letters
    const waveFrequency = 3; // Increased frequency for more noticeable wave
    const waveAmplitude = Math.max(0, 1 - scrollProgress * 1.5) * 80; // Increased amplitude
    
    // Calculate wave motion
    const waveOffset = Math.sin((scrollProgress * Math.PI * waveFrequency) + baseDelay) * waveAmplitude;
    
    // Combine initial scatter with wave motion
    const totalOffsetX = initialOffsetX * (1 - scrollProgress);
    const totalOffsetY = (initialOffsetY * (1 - scrollProgress)) + waveOffset;
    
    return {
      transform: `translate(${totalOffsetX}px, ${totalOffsetY}px)`,
      opacity: Math.min(1, scrollProgress * 2),
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out',
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-1/2 max-w-3xl cursor-none flex justify-center items-center gap-1"
    >
      {letterImages.map((src, index) => (
        <div
          key={index}
          className="relative"
          style={getLetterStyle(index)}
        >
          <img 
            src={src}
            alt={`Letter ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedLogo;
