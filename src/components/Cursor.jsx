import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      // O fator 0.12 é o que dá aquele efeito de "atraso" elástico no círculo
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed w-2 h-2 bg-brand-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" 
      />
      
      <div 
        id="cursor-ring" 
        ref={ringRef} 
        className="fixed w-9 h-9 border border-brand-black rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50 transition-[width,height,opacity] duration-300 ease-out" 
      />
    </>
  );
}