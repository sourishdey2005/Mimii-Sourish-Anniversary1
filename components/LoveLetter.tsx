
import React from 'react';

export const LoveLetter: React.FC = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#fff9f0] p-10 md:p-20 shadow-2xl rounded-sm relative border-l-[16px] border-rose-100">
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rotate-45 translate-x-16 -translate-y-16" />
          </div>

          <p className="font-elegant uppercase tracking-widest text-xs text-rose-300 mb-12">Private & Confidential</p>
          
          <h2 className="font-romantic text-5xl text-rose-800 mb-10 text-left">My Dearest Mimii,</h2>
          
          <div className="space-y-6 text-rose-900/80 leading-loose font-elegant text-lg md:text-xl">
            <p>
              I sat down to write this, and for the first time, I found myself at a loss for words. Not because there isn't enough to say, but because "I love you" feels like such a small phrase for something that fills my entire universe.
            </p>
            <p>
              Since we started this journey, every 17th has become a milestone of growth, laughter, and sometimes the quiet strength it takes to get through the hard days. You've seen me at my best and held me at my worst, and through it all, your hand never left mine.
            </p>
            <p>
              Thank you for being my partner, my best friend, and my greatest inspiration. I promise to keep choosing you, to keep fighting for us, and to keep falling in love with you every single morning.
            </p>
          </div>

          <div className="mt-16 text-right">
            <p className="text-rose-400 font-elegant italic">With all my heart, always,</p>
            <p className="font-romantic text-5xl text-rose-600 mt-4">Sourish</p>
          </div>
        </div>
      </div>
    </section>
  );
};
