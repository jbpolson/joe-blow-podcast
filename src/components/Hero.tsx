
import React from 'react';
import AnimatedLogo from '@/components/AnimatedLogo';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://cdn.shopify.com/videos/c/o/v/af7a3e3bb9a342aaa1cbc4ef60960beb.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <AnimatedLogo />
      </div>
    </div>
  );
};

export default Hero;
