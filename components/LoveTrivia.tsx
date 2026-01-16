
import React from 'react';
import { HelpCircle, Utensils, MapPin, Coffee, Camera } from 'lucide-react';

const trivia = [
  { label: "Our Special Day", value: "The 17th of Every Month", icon: <HelpCircle size={18} /> },
  { label: "Our Vibe", value: "Inseparable & Infinite", icon: <Camera size={18} /> },
  { label: "Favorite Place", value: "Anywhere, as long as we're together", icon: <MapPin size={18} /> },
  { label: "Shared Goal", value: "Building a lifetime of memories", icon: <Utensils size={18} /> },
  { label: "Daily Ritual", value: "Endless checks and caring notes", icon: <Coffee size={18} /> }
];

export const LoveTrivia: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-rose-900 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative hearts in background */}
          <div className="absolute top-0 right-0 opacity-10 -translate-y-1/2 translate-x-1/2">
             <div className="w-96 h-96 rounded-full border-[40px] border-white" />
          </div>
          
          <h2 className="font-elegant text-3xl md:text-4xl font-bold mb-10 relative z-10">
            A Few Things About Us...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 relative z-10">
            {trivia.map((item, i) => (
              <div key={i} className="group flex items-center gap-5 border-b border-rose-800 pb-4">
                <div className="text-rose-400 group-hover:text-rose-300 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-rose-400 font-bold mb-1">
                    {item.label}
                  </p>
                  <p className="font-elegant text-xl md:text-2xl text-rose-50">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
