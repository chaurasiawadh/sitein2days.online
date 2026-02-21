import React from 'react';
import { Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const words = [
    "STRATEGY", "BRANDING", "WEB DESIGN", "DEVELOPMENT", "MOTION", "AI SOLUTIONS", 
    "STRATEGY", "BRANDING", "WEB DESIGN", "DEVELOPMENT", "MOTION", "AI SOLUTIONS"
  ];

  return (
    <section className="bg-accent border-y-2 border-black overflow-hidden py-4 sm:py-6 -rotate-1 shadow-lg relative z-20">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 flex items-center">
          {words.map((word, index) => (
            <span key={index} className="mx-6 text-3xl md:text-5xl font-black text-black inline-flex items-center gap-6 uppercase tracking-tighter">
              {word}
              <Star fill="black" size={24} className="text-black" />
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-2 flex items-center">
          {words.map((word, index) => (
            <span key={`dup-${index}`} className="mx-6 text-3xl md:text-5xl font-black text-black inline-flex items-center gap-6 uppercase tracking-tighter">
              {word}
              <Star fill="black" size={24} className="text-black" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;