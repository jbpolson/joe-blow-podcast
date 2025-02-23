
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <img src="/lovable-uploads/ab081bb6-32f6-4e5b-9545-85d35726c04c.png" alt="FWD Obsessed Logo" className="h-6" />
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-highlight">Spotify</a>
            <a href="#" className="text-gray-600 hover:text-highlight">Apple Podcasts</a>
            <a href="#" className="text-gray-600 hover:text-highlight">Google Podcasts</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
