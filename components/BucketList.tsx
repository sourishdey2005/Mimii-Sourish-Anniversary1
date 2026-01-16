
import React from 'react';
import { Check, Heart } from 'lucide-react';

const listItems = [
  "Watching a sunset on a beach we've never visited.",
  "Building a home filled with plants and laughter.",
  "Learning to cook that one complicated dish together.",
  "Traveling to the place you've always dreamed of.",
  "Growing old and still holding hands on the 17th.",
  "Countless more morning coffees and late-night talks."
];

export const BucketList: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-rose-50/20">
      <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md p-12 rounded-[3rem] shadow-xl border border-white">
        <div className="text-center mb-12">
          <Heart className="mx-auto text-rose-400 mb-4 animate-bounce" size={40} fill="currentColor" />
          <h2 className="font-romantic text-6xl text-rose-600">Our Future</h2>
          <p className="font-elegant text-rose-400 mt-2 italic">A few things I can't wait to do with you...</p>
        </div>

        <div className="space-y-6">
          {listItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-rose-50 transition-colors group">
              <div className="w-8 h-8 rounded-full border-2 border-rose-200 flex items-center justify-center bg-white group-hover:border-rose-400 group-hover:bg-rose-100 transition-all shadow-inner">
                <Check size={16} className="text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="font-elegant text-lg md:text-xl text-rose-800/80 group-hover:text-rose-900 transition-colors">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
