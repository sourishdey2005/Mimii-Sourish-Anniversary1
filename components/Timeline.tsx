
import React from 'react';
import { Sparkles, Smile, Image as ImageIcon, ShieldCheck, Heart } from 'lucide-react';

interface TimelineStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  imageUrl: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ title, description, icon, index, imageUrl }) => (
  <div className={`flex flex-col md:flex-row items-center gap-8 mb-24 md:mb-32 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
      <div className="p-4 bg-rose-100 rounded-2xl mb-4 text-rose-600 ring-8 ring-rose-50 transition-transform hover:rotate-6">
        {icon}
      </div>
      <h3 className="font-elegant text-3xl font-bold mb-3 text-rose-800">{title}</h3>
      <p className="text-rose-600/80 text-lg leading-relaxed font-light">{description}</p>
    </div>
    <div className="hidden md:block w-1/2">
      <div className="aspect-square glass-card rounded-3xl flex items-center justify-center p-4 transition-all hover:bg-white/60">
        <img 
           src={imageUrl} 
           alt={title} 
           className="rounded-2xl shadow-lg opacity-90 transition-opacity hover:opacity-100 w-full h-full object-cover grayscale-[10%] hover:grayscale-0"
        />
      </div>
    </div>
  </div>
);

export const Timeline: React.FC = () => {
  const steps = [
    {
      title: "The Day We Met ✨",
      description: "A chance encounter that changed everything. The moment the universe decided we were meant to be.",
      icon: <Sparkles size={32} />,
      imageUrl: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767198824/IMG-20251231-WA0034_skohk0.jpg"
    },
    {
      title: "The First Smile 😊",
      description: "When words weren't enough, your smile spoke volumes. It was the start of a lifetime of laughter.",
      icon: <Smile size={32} />,
      imageUrl: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767198071/20251123_141621_jwmmr3.jpg"
    },
    {
      title: "Countless Memories 📸",
      description: "A digital scrapbook of adventures, quiet nights, and everything in between. Each frame a treasure.",
      icon: <ImageIcon size={32} />,
      imageUrl: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767198063/20251214_183152_jhabds.jpg"
    },
    {
      title: "Every Fight, Every Forgiveness 🤍",
      description: "Our strength isn't just in the easy times, but in how we find our way back to each other, always.",
      icon: <ShieldCheck size={32} />,
      imageUrl: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767196817/IMG-20251129-WA0161_bffu6r.jpg"
    },
    {
      title: "Still Choosing Each Other 💕",
      description: "After all this time, in every version of reality, it's still you. It will always be you.",
      icon: <Heart size={32} />,
      imageUrl: "https://res.cloudinary.com/dodhvvewu/image/upload/v1767196544/IMG-20251206-WA0055_sqfttl.jpg"
    }
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-rose-200 via-rose-100 to-transparent hidden md:block" />
      
      <div className="text-center mb-24">
        <span className="text-rose-400 uppercase tracking-widest text-sm font-semibold">Our Story</span>
        <h2 className="font-romantic text-6xl text-rose-600 mt-2">The Chapters of Us</h2>
      </div>

      {steps.map((step, idx) => (
        <TimelineStep 
          key={idx} 
          index={idx}
          title={step.title} 
          description={step.description} 
          icon={step.icon}
          imageUrl={step.imageUrl}
        />
      ))}
    </section>
  );
};
