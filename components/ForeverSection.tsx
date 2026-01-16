
import React from 'react';
import { Heart, Stars } from 'lucide-react';

interface ForeverSectionProps {
  onForever: () => void;
  isCelebrated: boolean;
}

export const ForeverSection: React.FC<ForeverSectionProps> = ({ onForever, isCelebrated }) => {
  return (
    <section className="py-40 px-6 text-center bg-rose-50/30 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {!isCelebrated ? (
          <div className="animate-fade-in-up space-y-12">
            <h2 className="font-elegant text-4xl md:text-5xl font-bold text-rose-900 leading-tight">
              Mimii, I choose you. <br />
              <span className="italic text-rose-500">Today. Tomorrow. Forever.</span>
            </h2>
            
            <button
              onClick={onForever}
              className="group relative px-12 py-5 bg-rose-500 text-white rounded-full font-bold text-xl shadow-2xl transition-all hover:bg-rose-600 hover:scale-110 active:scale-95 flex items-center gap-3 mx-auto"
            >
              Forever & Always 💖
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up space-y-8 py-12">
            <div className="relative inline-block mb-6">
              <Stars className="absolute -top-10 -left-10 text-yellow-400 animate-spin" size={48} />
              <Stars className="absolute -bottom-10 -right-10 text-yellow-400 animate-spin" size={48} />
              <img 
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3hncGFuYjEzeHJxdjNqNTR4OXgxeHgxeHgxeHgxeHgxeHgxeHgmZXA9djFfaW50ZXJuYWxfZ2lmX2J5X2lkJmN0PWc/KztT2c4u8mYYUiCiK1/giphy.gif" 
                alt="Love Celebration" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto border-8 border-white"
              />
            </div>
            
            <h2 className="font-romantic text-7xl md:text-8xl text-rose-600">
              I Love You!
            </h2>
            <p className="font-elegant text-2xl text-rose-400 italic">
              Through every sunset and sunrise, my heart belongs to you.
            </p>
            
            <div className="flex justify-center gap-4 py-8">
               {[...Array(5)].map((_, i) => (
                 <Heart key={i} className="text-rose-300 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} fill="currentColor" size={24} />
               ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
