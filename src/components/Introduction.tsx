
import React from 'react';

const Introduction = () => {
  return (
    <div className="container mx-auto px-8 pt-32 pb-20">
      <div className="max-w-4xl">
        <div className="animate-fade-in">
          <span style={{ backgroundColor: '#F49ABE' }} className="inline-block px-3 py-1 text-white rounded-full mb-6">
            PODCAST
          </span>
          <h1 className="text-6xl font-bold mb-6">
            A PODCAST ABOUT REAL <br />
            PEOPLE AND RAW STORIES
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Hosted by Tom Uhlich and Iopo Aso, we dive into the lives of those at the top of their field and those who have survived the unthinkable. From the relentless pursuit of greatness to the darkest battles fought in silence, <span className="font-bold text-highlight">Joe Blow</span> exposes the issues we all face but are too scared to admit. No bullshit, no filter - just the raw, unvarnished truth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
