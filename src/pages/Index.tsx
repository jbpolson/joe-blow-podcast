import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate the movement based on cursor position with increased effect
    const moveX = (x - rect.width / 2) / rect.width * 15;  // Increased from 4 to 15
    const moveY = (y - rect.height / 2) / rect.height * 15; // Increased from 4 to 15
    
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  const episodes = [{
    number: "01",
    title: "Mike Lloyd: Building and scaling innovation",
    date: "Mar 15, 2024"
  }, {
    number: "02",
    title: "Anti-social working: From spotless suburb to working where?",
    date: "Mar 8, 2024"
  }, {
    number: "03",
    title: "Dave Pink: Evolution of the first village podcast",
    date: "Mar 1, 2024"
  }, {
    number: "04",
    title: "Having a startup - From zero to win",
    date: "Feb 23, 2024"
  }];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-screen pattern-bg">
        <div className="container mx-auto px-4 pt-32 pb-20">
          <nav className="absolute top-8 left-0 right-0 flex justify-between items-center px-8">
            <img src="/lovable-uploads/ab081bb6-32f6-4e5b-9545-85d35726c04c.png" alt="FWD Obsessed Logo" className="h-8" />
            <div className="flex gap-4">
              <button 
                className="px-6 py-2 rounded-full border border-black text-black hover:bg-highlight hover:border-highlight hover:text-white transition-all duration-200"
                onMouseMove={handleButtonHover}
                onMouseLeave={handleButtonLeave}
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
          
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <span 
                style={{ backgroundColor: '#F49ABE' }}
                className="inline-block px-3 py-1 text-white rounded-full mb-6"
              >
                PODCAST
              </span>
              <h1 className="text-6xl font-bold mb-6">
                GET INTO THE MINDS OF <br />
                BREAK THROUGH BUSINESS <br />
                LEADERS & ENTREPRENEURS
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Join our discussion as we talk to breakthrough business leaders and entrepreneurs 
                about their journey to success. Each week we dive deep into their stories, 
                strategies, and insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 animate-slide-up">
          LATEST EPISODES
          <br />
          AVAILABLE NOW ↓
        </h2>

        <div className="max-w-4xl">
          {episodes.map((episode, index) => <a key={index} href="#" className="episode-link group">
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
            </a>)}
        </div>
      </div>

      {/* Co-hosts Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold">
            MEET THE
            <br />
            CO-HOSTS ↓
          </h2>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          <img 
            src="/lovable-uploads/161c86b3-b1a6-465b-a4f9-9843d1ead1a8.png" 
            alt="Podcast Hosts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex">
            {/* Left host hover area */}
            <div className="w-1/2 h-full group cursor-pointer relative">
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">TOM UHLICH</h3>
                <p className="text-gray-200">TECH ENTHUSIAST</p>
              </div>
            </div>
            {/* Right host hover area */}
            <div className="w-1/2 h-full group cursor-pointer relative">
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">IOPU ASO</h3>
                <p className="text-gray-200">LEAD STRATEGIST</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">
            REACH OUT AND CONNECT WITH US
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" />
              <input type="email" placeholder="Email" className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <textarea placeholder="Message" rows={4} className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-highlight" />
            <button type="submit" className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
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
    </div>;
};

export default Index;
