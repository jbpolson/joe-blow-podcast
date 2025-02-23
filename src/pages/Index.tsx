
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import EpisodeList from "@/components/EpisodeList";
import HostsSection from "@/components/HostsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  const [openTomDialog, setOpenTomDialog] = useState(false);
  const [openIopuDialog, setOpenIopuDialog] = useState(false);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const moveX = (x - rect.width / 2) / rect.width * 150;
    const moveY = (y - rect.height / 2) / rect.height * 150;
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  const handleHostHover = (e: React.MouseEvent<HTMLDivElement>, side: 'left' | 'right') => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const button = container.querySelector('.host-button') as HTMLDivElement;
    if (button) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      button.style.transform = 'translate(-50%, -50%)';
      button.style.opacity = '1';
    }
  };

  const handleHostLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget.querySelector('.host-button') as HTMLDivElement;
    if (button) {
      button.style.opacity = '0';
    }
  };

  const handleHostClick = (side: 'left' | 'right') => {
    if (side === 'left') {
      setOpenTomDialog(true);
    } else {
      setOpenIopuDialog(true);
    }
  };

  const scrollToEpisodes = () => {
    const episodesSection = document.querySelector('#episodes');
    if (episodesSection) {
      episodesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        handleButtonHover={handleButtonHover}
        handleButtonLeave={handleButtonLeave}
        scrollToEpisodes={scrollToEpisodes}
      />
      <Hero />
      <Introduction />
      <EpisodeList />
      <HostsSection 
        handleHostHover={handleHostHover}
        handleHostLeave={handleHostLeave}
        handleHostClick={handleHostClick}
        openTomDialog={openTomDialog}
        setOpenTomDialog={setOpenTomDialog}
        openIopuDialog={openIopuDialog}
        setOpenIopuDialog={setOpenIopuDialog}
      />
      <ContactForm 
        handleButtonHover={handleButtonHover}
        handleButtonLeave={handleButtonLeave}
      />
      <Footer />
    </div>
  );
};

export default Index;
