
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Episode {
  number: string;
  title: string;
  date: string;
}

const episodes: Episode[] = [{
  number: "01",
  title: "Kate Malvern: Beating cancer after a four-month death sentence",
  date: "Mar 12, 2025"
}, {
  number: "02",
  title: "Chloe Mascord: Breaking taboos - sex, intimacy, and self-discovery",
  date: "Mar 19, 2025"
}, {
  number: "03",
  title: "Matt Smith: Growing up gay in rural New Zealand",
  date: "Mar 26, 2025"
}, {
  number: "04",
  title: "Rob Thomas: From small watch business to multimillion-dollar success",
  date: "Apr 3, 2025"
}, {
  number: "05",
  title: "Iopu Aso: All Black, family man, and leader",
  date: "Apr 10, 2025"
}];

const EpisodeList = () => {
  return (
    <div className="container mx-auto px-4 py-20" id="episodes">
      <h2 className="text-4xl font-bold mb-12 animate-slide-up">
        LATEST EPISODES
        <br />
        AVAILABLE NOW ↓
      </h2>

      <div className="max-w-4xl">
        {episodes.map((episode, index) => (
          <a key={index} href="#" className="episode-link group">
            <div>
              <span className="text-sm text-gray-400 mb-2 block">{episode.number}</span>
              <h3 className="text-xl font-medium group-hover:text-highlight transition-colors">
                {episode.title}
              </h3>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-400 mr-4">{episode.date}</span>
              <ArrowRight className="w-5 h-5 text-highlight opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EpisodeList;
