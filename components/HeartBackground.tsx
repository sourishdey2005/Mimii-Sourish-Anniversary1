
import React, { useMemo } from 'react';

interface HeartBackgroundProps {
  density: number;
}

export const HeartBackground: React.FC<HeartBackgroundProps> = ({ density }) => {
  const hearts = useMemo(() => {
    return [...Array(density)].map((_, i) => {
      const size = Math.random() * 20 + 10;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 20;
      const opacity = Math.random() * 0.5 + 0.1;
      
      return (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `-${delay}s`,
            opacity: opacity,
          }}
        >
          <svg viewBox="0 0 32 32" fill="#be123c">
            <path d="M16 28.5L14.1 26.8C7.3 20.7 2.8 16.7 2.8 11.7C2.8 7.7 5.9 4.6 9.9 4.6C12.1 4.6 14.3 5.6 15.7 7.2C17.1 5.6 19.3 4.6 21.6 4.6C25.6 4.6 28.7 7.7 28.7 11.7C28.7 16.7 24.2 20.7 17.4 26.8L16 28.5Z" />
          </svg>
        </div>
      );
    });
  }, [density]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts}
    </div>
  );
};
