
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source 
          src={isMobile 
            ? "https://cdn.shopify.com/videos/c/o/v/de4042eb66df42da944c9cff05b2c74a.mp4" 
            : "https://cdn.shopify.com/videos/c/o/v/af7a3e3bb9a342aaa1cbc4ef60960beb.mp4"
          } 
          type="video/mp4" 
        />
      </video>
    </div>
  );
};

export default Hero;
