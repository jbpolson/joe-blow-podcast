
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface HostsSectionProps {
  handleHostHover: (e: React.MouseEvent<HTMLDivElement>, side: 'left' | 'right') => void;
  handleHostLeave: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleHostClick: (side: 'left' | 'right') => void;
  openTomDialog: boolean;
  setOpenTomDialog: (open: boolean) => void;
  openIopuDialog: boolean;
  setOpenIopuDialog: (open: boolean) => void;
}

const HostsSection = ({
  handleHostHover,
  handleHostLeave,
  handleHostClick,
  openTomDialog,
  setOpenTomDialog,
  openIopuDialog,
  setOpenIopuDialog
}: HostsSectionProps) => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold">
          MEET THE
          <br />
          CO-HOSTS ↓
        </h2>
      </div>

      <div className="relative h-[600px] overflow-hidden">
        <img src="/lovable-uploads/161c86b3-b1a6-465b-a4f9-9843d1ead1a8.png" alt="Podcast Hosts" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full relative cursor-none" 
               onMouseMove={e => handleHostHover(e, 'left')} 
               onMouseLeave={handleHostLeave} 
               onClick={() => handleHostClick('left')}>
            <div className="host-button absolute px-6 py-2 rounded-full bg-highlight text-white opacity-0 transition-opacity pointer-events-none whitespace-nowrap" 
                 style={{ transform: 'translate(-50%, -50%)' }}>
              TOM UHLICH
            </div>
          </div>
          <div className="w-1/2 h-full relative cursor-none" 
               onMouseMove={e => handleHostHover(e, 'right')} 
               onMouseLeave={handleHostLeave} 
               onClick={() => handleHostClick('right')}>
            <div className="host-button absolute px-6 py-2 rounded-full bg-highlight text-white opacity-0 transition-opacity pointer-events-none whitespace-nowrap" 
                 style={{ transform: 'translate(-50%, -50%)' }}>
              IOPU ASO
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openTomDialog} onOpenChange={setOpenTomDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tom Uhlich</DialogTitle>
            <DialogDescription>Tom Uhlich is an Austrian-born (with Slovak roots), Aussie-bred father of two who defines the word &quot;driven.&quot; He's spent over 21 years as an entrepreneur (currently heading up Boss Money) and is a self-professed fitness freak who has eight Ironman triathlons (all under 10 hours), six marathons (all under 3 hours), and even a trio of Hyrox events under his belt. He once hitchhiked across Africa for six months with absolutely no plan – a testament to his &quot;just wing it&quot; life philosophy. A die-hard self-development junkie, Tom devours books and podcasts like they're going out of style, which means he's either genuinely wise by now or just really good at regurgitating other people's quotes. He insists authenticity is everything, so on Joe Blow you can expect brutal honesty, a few accidental overshares, and the occasional motivational one-liner delivered with a grin. And if you ever need an icebreaker, ask about his grandfather – he once met Hitler.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog open={openIopuDialog} onOpenChange={setOpenIopuDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Iopu Aso</DialogTitle>
            <DialogDescription>
              Iopu Aso, or Yops as he is known, brings a potent mix of power and creativity to Joe Blow. A former All Black and Hurricanes rugby player, he spent years charging full-speed into human walls for a living (and making it look good). Now he's traded the rugby field for the editing suite as a content creator and videographer with his own business, iia Visualz, turning his ability to read plays into an uncanny knack for telling stories on screen. He might be the only guy who can tackle a 110kg forward in the morning and craft a cinematic masterpiece by the afternoon – and make both look easy. Yops is an avid fitness-junkie, and will be completing his first Hyrox in March 2025. With his blend of raw brawn and artistic flair, Yops proves that former athletes don't just retire – they rebrand and come out swinging in a whole new arena.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HostsSection;
