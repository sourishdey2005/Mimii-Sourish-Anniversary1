
import React from 'react';
import { Coffee, CloudRain, Star, Sun, Moon, Zap } from 'lucide-react';

const reasons = [
  { icon: <Star className="text-yellow-400" />, title: "Your Spark", text: "The way you light up any room just by stepping into it." },
  { icon: <Coffee className="text-amber-600" />, title: "The Little Things", text: "How you know exactly how I like my coffee and my mornings." },
  { icon: <CloudRain className="text-blue-400" />, title: "My Calm", text: "How you're the quiet peace I find in the middle of a storm." },
  { icon: <Zap className="text-purple-400" />, title: "Our Connection", text: "That we can talk for hours or sit in silence and feel perfectly understood." },
  { icon: <Sun className="text-orange-400" />, title: "Your Warmth", text: "The kindness you show to everyone around you, especially me." },
  { icon: <Moon className="text-indigo-400" />, title: "My Home", text: "Because no matter where we are, home is wherever you are." }
];

export const ReasonsWhy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-romantic text-6xl text-rose-600 mb-6">A Million Reasons</h2>
        <p className="font-elegant italic text-rose-400 mb-16 text-lg">If I had to list them all, I'd never stop writing...</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 border-none shadow-md">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-elegant font-bold text-xl text-rose-800 mb-3">{item.title}</h3>
              <p className="text-rose-600/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
