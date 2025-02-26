
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

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-4/5 md:w-1/2 max-w-3xl flex justify-center items-center gap-1"
    >
      {letterImages.map((src, index) => (
        <div
          key={index}
          className="relative"
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
