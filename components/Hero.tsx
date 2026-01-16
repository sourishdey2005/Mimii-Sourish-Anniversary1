
import React, { useState, useEffect } from 'react';
import { Heart, Calendar } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, mins: number }>({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      let next17 = new Date(now.getFullYear(), now.getMonth(), 17);
      
      if (now.getDate() >= 17) {
        next17.setMonth(next17.getMonth() + 1);
      }

      const diff = next17.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / 1000 / 60) % 60);

      setTimeLeft({ days, hours, mins });
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-rose-50 via-lavender-50 to-white overflow-hidden">
      <div className="animate-fade-in-up space-y-8">
        <div className="relative inline-block">
          <Heart 
            className="absolute -top-12 -right-12 text-rose-200 animate-pulse" 
            size={64} 
            strokeWidth={1}
          />
          <h1 className="font-elegant text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-rose-800 drop-shadow-sm">
            Happy Anniversary, <br />
            <span className="font-romantic text-rose-600 block mt-4 text-7xl md:text-9xl">
              Mimii & Sourish 💍
            </span>
          </h1>
        </div>

        <div className="space-y-4">
          <p className="font-elegant italic text-xl md:text-2xl text-rose-500/80 max-w-2xl mx-auto leading-relaxed">
            “Every love story is beautiful, but ours is my favorite.”
          </p>
          <div className="flex items-center justify-center gap-2 text-rose-400 font-medium tracking-wide">
            <Calendar size={18} />
            <span>Celebrating us every 17th</span>
          </div>
        </div>

        {/* Anniversary Countdown */}
        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-rose-100/50 shadow-sm max-w-sm mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-rose-400 mb-4 font-semibold">Next Monthly Celebration</p>
          <div className="flex justify-center gap-6">
            <div>
              <span className="text-3xl font-elegant text-rose-700">{timeLeft.days}</span>
              <p className="text-[10px] text-rose-400 uppercase">Days</p>
            </div>
            <div>
              <span className="text-3xl font-elegant text-rose-700">{timeLeft.hours}</span>
              <p className="text-[10px] text-rose-400 uppercase">Hours</p>
            </div>
            <div>
              <span className="text-3xl font-elegant text-rose-700">{timeLeft.mins}</span>
              <p className="text-[10px] text-rose-400 uppercase">Mins</p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-rose-600 text-white rounded-full font-medium text-lg shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto"
          >
            Our Journey <Heart className="group-hover:fill-current transition-colors" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};
