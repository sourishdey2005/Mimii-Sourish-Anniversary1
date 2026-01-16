
import React from 'react';
import { Shield, Sparkles, HandMetal, Heart, Anchor, Sun } from 'lucide-react';

const promises = [
  { icon: <Shield size={24} />, text: "To always protect your heart and your peace." },
  { icon: <Sparkles size={24} />, text: "To never let the magic of 'us' fade away." },
  { icon: <HandMetal size={24} />, text: "To stay by your side through every high and low." },
  { icon: <Anchor size={24} />, text: "To be your steady ground when the world is shaking." },
  { icon: <Sun size={24} />, text: "To always find ways to make you laugh, every single day." },
  { icon: <Heart size={24} />, text: "To love you more deeply with every passing 17th." }
];

export const OurPromises: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-rose-50/50 to-white/50 border-y border-rose-100/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-romantic text-6xl text-rose-600 mb-4">My Promises to You</h2>
          <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promises.map((p, i) => (
            <div key={i} className="flex items-start gap-6 p-6 rounded-3xl bg-white/40 border border-rose-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-rose-100 rounded-2xl text-rose-500">
                {p.icon}
              </div>
              <p className="font-elegant text-xl text-rose-800 leading-relaxed pt-1">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
