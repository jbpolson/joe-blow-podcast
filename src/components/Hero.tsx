
import React from 'react';
import AnimatedLogo from '@/components/AnimatedLogo';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://cdn.shopify.com/videos/c/o/v/c292d14c8bb14e5bbe3a5539f3eb511e.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <AnimatedLogo />
      </div>
    </div>
  );
};

export default Hero;
