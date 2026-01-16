
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Soft instrumental piano music
  const audioUrl = "https://res.cloudinary.com/dodhvvewu/video/upload/v1767189894/Tere_Liye_Prince_128_Kbps_hs6brw.mp3"; 

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("User interaction required for autoplay"));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt to play on first user interaction if not already playing
    const handleFirstInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
        window.removeEventListener('click', handleFirstInteraction);
      }
    };
    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={togglePlay}
        className="p-4 glass-card rounded-full text-rose-600 transition-all hover:scale-110 active:scale-95 shadow-lg border-rose-200"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};
