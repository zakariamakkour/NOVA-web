
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useRef } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
    language: Language;
    onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ language, onNavClick }) => {
  const t = TRANSLATIONS[language].hero;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (onNavClick) onNavClick(e, 'products');
  };

  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const handleMouseMoveSection = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current || !bgRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dark = document.documentElement.classList.contains('dark');
    const base = dark ? '#050A14' : '#E7E2D7';
    const mid = dark ? 'rgba(10,18,32,1)' : 'rgba(217,211,197,1)';
    const hl = dark ? 'rgba(0,255,148,0.18)' : 'rgba(0,255,148,0.12)';
    bgRef.current.style.background = `radial-gradient(900px circle at ${x}px ${y}px, ${hl} 0%, ${mid} 35%, ${base} 70%)`;
  };

  const handleMouseLeaveSection = () => {
    const dark = document.documentElement.classList.contains('dark');
    const base = dark ? '#050A14' : '#E7E2D7';
    const mid = dark ? 'rgba(10,18,32,1)' : 'rgba(217,211,197,1)';
    bgRef.current && (bgRef.current.style.background = `radial-gradient(900px circle at 50% 50%, transparent 0%, ${mid} 0%, ${base} 100%)`);
  };

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMoveSection} onMouseLeave={handleMouseLeaveSection} className="relative w-full h-screen min-h-[800px] overflow-hidden bg-[#E7E2D7] dark:bg-[#050A14] transition-colors duration-500">
      <div ref={bgRef} className="absolute inset-0 transition-[background] duration-150"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,148,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,148,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start text-start md:items-center md:text-center px-6 reveal">
        <div className="animate-fade-in-up w-full md:w-auto">
          <span className="block text-xs md:text-sm font-medium uppercase tracking-[0.3em] text-[#00FF94] mb-6 backdrop-blur-md bg-[#00FF94]/5 border border-[#00FF94]/20 px-6 py-2 rounded-full mx-0 md:mx-auto w-fit shadow-[0_0_15px_rgba(0,255,148,0.2)]">
            {t.tag}
          </span>
          
          <h1 className="group cursor-default text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 drop-shadow-[0_0_25px_rgba(0,255,148,0.3)]">
            <span className="transition-colors duration-700 ease-in-out group-hover:text-[#00FF94] group-hover:drop-shadow-[0_0_35px_rgba(0,255,148,0.6)]">
              {t.title1}
            </span>
            {" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] via-blue-500 to-[#00FF94] bg-[length:200%_auto] bg-left transition-[background-position] duration-1000 ease-in-out group-hover:bg-right">
              {t.title2}
            </span>
          </h1>

          <p className="max-w-lg mx-0 md:mx-auto text-lg md:text-xl text-blue-100/80 font-light leading-relaxed mb-12">
            {t.subtitle}
          </p>
          
          <a 
            href="#products" 
            onClick={handleClick}
            className="group relative px-10 py-4 bg-white/5 text-white rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(0,255,148,0.2)] border border-white/10 hover:border-[#00FF94]/50 inline-block backdrop-blur-sm"
          >
            <span className="relative z-10 group-hover:text-[#00FF94] transition-colors">{t.cta}</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
