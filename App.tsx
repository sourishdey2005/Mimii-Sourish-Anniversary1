
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero.tsx';
import { Timeline } from './components/Timeline.tsx';
import { ForeverSection } from './components/ForeverSection.tsx';
import { HeartBackground } from './components/HeartBackground.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { LoveNotes } from './components/LoveNotes.tsx';
import { Heart } from 'lucide-react';

export default function App() {
  const [showJourney, setShowJourney] = useState(false);
  const [isCelebrated, setIsCelebrated] = useState(false);
  const [heartDensity, setHeartDensity] = useState(15);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleStartJourney = () => {
    setShowJourney(true);
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleForeverClick = () => {
    setIsCelebrated(true);
    setHeartDensity(45);
  };

  return (
    <div className="min-h-screen relative font-sans text-rose-900 selection:bg-rose-100">
      <HeartBackground density={heartDensity} />
      <MusicPlayer />

      <main className="relative z-10">
        <Hero onStart={handleStartJourney} />
        
        {showJourney && (
          <div ref={timelineRef} className="animate-fade-in-up">
            <Timeline />
            <LoveNotes />
            <ForeverSection 
              onForever={handleForeverClick} 
              isCelebrated={isCelebrated} 
            />
          </div>
        )}

        <footer className="py-12 text-center bg-transparent border-t border-rose-100/30">
          <p className="font-romantic text-3xl text-rose-400 mb-2">Mimii & Sourish</p>
          <p className="text-xs tracking-widest uppercase opacity-60">
            A Love That Grows Stronger With Time 💍
          </p>
          <div className="flex justify-center mt-4 gap-2 text-rose-300">
            <Heart size={12} fill="currentColor" />
            <Heart size={12} fill="currentColor" />
            <Heart size={12} fill="currentColor" />
          </div>
        </footer>
      </main>

      {/* Decorative borders */}
      <div className="fixed inset-0 pointer-events-none border-[12px] border-white/20 z-50 rounded-[2rem] m-2 md:m-4" />
    </div>
  );
}
