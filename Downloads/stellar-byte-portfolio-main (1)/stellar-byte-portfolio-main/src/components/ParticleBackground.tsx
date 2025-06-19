
import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)' }}
    />
  );
};

export default ParticleBackground;
