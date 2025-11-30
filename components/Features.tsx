
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FeaturesProps {
    language?: Language; // Optional to prevent breaking if used elsewhere
}

const Features: React.FC<FeaturesProps> = ({ language = 'en' }) => {
  const t = TRANSLATIONS[language].about;

  return (
    <section className="bg-[#EBE7DE]">
      {/* Feature Block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="order-2 lg:order-1 relative h-[500px] lg:h-auto overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200" 
             alt="Natural Stone Texture" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
           />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-[#EBE7DE]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">{t.materiality}</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#2C2A26] leading-tight">
             {t.materialTitle}
           </h3>
           <p className="text-lg text-[#5D5A53] font-light leading-relaxed mb-12 max-w-md">
             {t.materialDesc}
           </p>
           <a href="#" className="inline-block text-sm font-medium uppercase tracking-widest underline underline-offset-8 hover:text-[#8C8881] transition-colors">{language === 'ar' ? 'اقرأ المزيد' : (language === 'fr' ? 'En savoir plus' : 'Read more')}</a>
        </div>
      </div>

      {/* Feature Block 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-[#2C2A26] text-[#F5F2EB]">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-6">{t.ecosystem}</span>
           <h3 className="text-4xl md:text-5xl font-serif mb-8 text-[#F5F2EB] leading-tight">
             {t.ecosystemTitle}
           </h3>
           <p className="text-lg text-[#A8A29E] font-light leading-relaxed mb-12 max-w-md">
             {t.ecosystemDesc}
           </p>
        </div>
        <div className="relative h-[500px] lg:h-auto overflow-hidden">
           <img 
             src="https://images.pexels.com/photos/6801917/pexels-photo-6801917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
             alt="Woman sitting on wooden floor reading" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] brightness-90"
           />
        </div>
      </div>
    </section>
  );
};

export default Features;
