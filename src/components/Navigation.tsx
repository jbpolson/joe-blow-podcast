
import React from 'react';

interface NavigationProps {
  handleButtonHover: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleButtonLeave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  scrollToEpisodes: () => void;
}

const Navigation = ({ handleButtonHover, handleButtonLeave, scrollToEpisodes }: NavigationProps) => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-6 z-50">
      <img src="/lovable-uploads/045a54d4-e9fd-4885-bdb1-a02182b034a0.png" alt="Brand Logo" className="h-10 w-10" />
      <div className="flex gap-4">
        <button 
          className="px-6 py-2 rounded-full border border-black text-black hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-200"
          onMouseMove={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          onClick={scrollToEpisodes}
        >
          Episodes
        </button>
        <button 
          className="px-6 py-2 rounded-full bg-black text-white hover:bg-highlight transition-all duration-200"
          onMouseMove={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Subscribe
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
