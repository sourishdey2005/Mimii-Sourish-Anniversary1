
import React from 'react';

const quotes = [
  "Mimii, you are my safest place and my favorite adventure.",
  "I'm so proud of the life we're building together, one 17th at a time.",
  "Your smile is the only light I'll ever need to find my way home.",
  "I promise to hold your hand through every chapter of our story.",
  "No matter how much time passes, my heart still skips a beat for you.",
  "Thank you for being the calm in my storm and the joy in my life.",
  "I love the person I am when I'm with you — you bring out my best.",
  "Every small moment with you feels like a grand celebration.",
  "You're not just my better half; you're the part of me I always needed.",
  "If I could live my life over again, I'd find you sooner so I could love you longer."
];

const colors = [
  'bg-rose-50/70',
  'bg-white/90',
  'bg-yellow-50/60',
  'bg-pink-50/70',
  'bg-orange-50/60'
];

export const LoveNotes: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="font-romantic text-5xl text-rose-600 mb-2">Love Notes for You</h2>
        <p className="text-rose-400 italic font-elegant">Just a few reminders of how much you mean to me...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, idx) => (
          <div 
            key={idx}
            className={`love-note p-8 glass-card rounded-sm shadow-md border-rose-50 relative ${
              colors[idx % colors.length]
            }`}
            style={{ 
              transform: `rotate(${Math.random() * 6 - 3}deg)`,
              marginTop: `${Math.random() * 15}px`
            }}
          >
            {/* Tape effect */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-white/20 rotate-1 flex items-center justify-center text-[10px] uppercase tracking-widest text-rose-300 font-bold">
              For Mimii
            </div>
            
            <p className="font-handwritten text-3xl text-rose-800 leading-snug mt-2">
              {quote}
            </p>
            <div className="mt-6 text-right">
              <span className="font-romantic text-rose-400 text-2xl">— Always, Sourish</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
