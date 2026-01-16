
import React, { useState, useEffect, useRef } from 'react';
import { Hero } from './components/Hero.tsx';
import { Timeline } from './components/Timeline.tsx';
import { ForeverSection } from './components/ForeverSection.tsx';
import { HeartBackground } from './components/HeartBackground.tsx';
import { MusicPlayer } from './components/MusicPlayer.tsx';
import { LoveNotes } from './components/LoveNotes.tsx';
import { Heart, Share2 } from 'lucide-react';

export default function App() {
  const [showJourney, setShowJourney] = useState(false);
  const [isCelebrated, setIsCelebrated] = useState(false);
  const [heartDensity, setHeartDensity] = useState(15);
  const [copied, setCopied] = useState(false);
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

  const handleShare = async () => {
    const shareData = {
      title: 'Mimii & Sourish Anniversary',
      text: 'Celebrating the beautiful journey of Mimii & Sourish! 💍 Every love story is beautiful, but theirs is my favorite. ❤️',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Sharing cancelled or failed', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        console.error('Clipboard copy failed', err);
      }
    }
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
          
          <div className="mt-8 flex flex-col items-center gap-4">
            <button 
              onClick={handleShare}
              className="group flex items-center gap-2 px-6 py-2.5 bg-rose-50 text-rose-500 rounded-full text-sm font-medium hover:bg-rose-100 transition-all border border-rose-200 active:scale-95 shadow-sm"
            >
              <Share2 size={16} className="group-hover:rotate-12 transition-transform" />
              {copied ? 'Link Copied! ❤️' : 'Share Our Love Story'}
            </button>
            
            {copied && (
              <span className="text-xs text-rose-400 animate-pulse">
                Share the link with your loved ones!
              </span>
            )}
          </div>

          <div className="flex justify-center mt-12 gap-2 text-rose-300">
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
