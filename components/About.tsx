


import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface AboutProps {
    language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <section id="about" className="bg-[#EBE7DE] dark:bg-[#0A1220] transition-colors duration-500">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-32 reveal">
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] leading-tight transition-colors">
            {t.title}
          </h2>
        </div>
        <div className="md:w-2/3 max-w-2xl">
          <p className="text-lg md:text-xl text-[#5D5A53] dark:text-[#9CA3AF] font-light leading-relaxed mb-8 transition-colors reveal reveal-delay-100">
            {t.p1}
          </p>
          <p className="text-lg md:text-xl text-[#5D5A53] dark:text-[#9CA3AF] font-light leading-relaxed mb-8 transition-colors reveal reveal-delay-200">
            {t.p2}
          </p>
          <img 
            src="/images/first.jpg" 
            alt="Nova Design Studio" 
            className="w-full h-[400px] object-cover grayscale contrast-[0.95] brightness-105 dark:brightness-90 mt-12 reveal reveal-delay-300"
          />
          <p className="text-sm font-medium uppercase tracking-widest text-[#A8A29E] mt-4">
            {t.location}
          </p>
        </div>
      </div>

      {/* Philosophy Blocks (Formerly Features) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="/images/materiales.jpg" 
             alt="Minimal still life with natural materials" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#D6D1C7] dark:bg-[#0F1928] transition-colors duration-500">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#5D5A53] dark:text-[#00FF94] mb-6 transition-colors">{t.materiality}</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] dark:text-[#EBE7DE] leading-tight transition-colors">
             {t.materialTitle}
           </h3>
           <p className="text-lg text-[#5D5A53] dark:text-[#9CA3AF] font-light leading-relaxed mb-12 max-w-md transition-colors">
             {t.materialDesc}
           </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] dark:bg-[#050A14] text-[#F5F2EB] transition-colors duration-500">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">{t.ecosystem}</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] dark:text-[#EBE7DE] leading-tight">
             {t.ecosystemTitle}
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             {t.ecosystemDesc}
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden group">
           <img 
             src="/images/nono.jpg" 
             alt="Woman sitting on wooden floor reading" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default About;
