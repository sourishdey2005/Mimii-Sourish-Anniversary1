
import React from 'react';
import { Heart } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
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

        <p className="font-elegant italic text-xl md:text-2xl text-rose-500/80 max-w-2xl mx-auto leading-relaxed">
          “Every love story is beautiful, but ours is my favorite.”
        </p>

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
