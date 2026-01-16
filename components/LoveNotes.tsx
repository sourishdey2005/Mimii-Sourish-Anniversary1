
import React from 'react';

const quotes = [
  "Mimii, you are my safest place and my favorite adventure.",
  "I'm so proud of the life we're building together, one 17th at a time.",
  "Your smile is the only light I'll ever need to find my way home.",
  "I promise to hold your hand through every chapter of our story.",
  "No matter how much time passes, my heart still skips a beat for you."
];

export const LoveNotes: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-romantic text-5xl text-rose-600 mb-2">Love Notes for You</h2>
        <p className="text-rose-400 italic font-elegant">Just a few reminders of how much you mean to me...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, idx) => (
          <div 
            key={idx}
            className={`love-note p-8 glass-card rounded-sm shadow-lg border-rose-50 relative ${
              idx % 2 === 0 ? 'bg-rose-50/50' : 'bg-white/80'
            }`}
            style={{ 
              transform: `rotate(${Math.random() * 4 - 2}deg)`,
              marginTop: `${Math.random() * 20}px`
            }}
          >
            {/* Thumbtack effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-rose-300 rounded-full shadow-inner border border-white/50" />
            
            <p className="font-handwritten text-3xl text-rose-800 leading-snug">
              {quote}
            </p>
            <div className="mt-4 text-right">
              <span className="font-romantic text-rose-400 text-2xl">— Sourish</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
