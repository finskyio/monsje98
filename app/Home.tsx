'use client';

import { useEffect, useRef, useState } from 'react';
import HeroOne from './components/Home/HeroOne'; 
import HeroTwo from './components/Home/HeroTwo';
import HeroThree from './components/Home/HeroThree';
import Header from './components/Header';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1); 
  const [scrollSpeed, setScrollSpeed] = useState(1.2); 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!container) return;
      container.scrollLeft += scrollSpeed * scrollDirection;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0; 
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2; 
      }

      animationFrame = requestAnimationFrame(autoScroll); 
    };

    animationFrame = requestAnimationFrame(autoScroll);

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault(); 
      setScrollDirection(event.deltaY > 0 ? 1 : -1);
      const newSpeed = Math.min(Math.abs(event.deltaY / 10), 5); 
      setScrollSpeed(Math.max(newSpeed, 0.5)); 
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, [scrollDirection, scrollSpeed]);

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden h-screen w-full flex-row no-scrollbar"
    >
      <div className="fixed top-4 right-4 z-50">
        <Header />
      </div>
  
      {[...Array(2)].map((_, idx) => (
        <div key={`group-${idx}`} className="flex flex-row">
          <div
            key={`1-${idx}`}
            className="w-[600px] h-full flex items-center justify-center shrink-0"
          >
            <HeroOne />
          </div>
          <div
            key={`2-${idx}`}
            className="w-[600px] h-full flex items-center justify-center shrink-0"
          >
            <HeroTwo />
          </div>
          <div
            key={`3-${idx}`}
            className="w-[600px] h-full flex items-center justify-center shrink-0"
          >
            <HeroThree />
          </div>
        </div>
      ))}
    </div>
  );
}
