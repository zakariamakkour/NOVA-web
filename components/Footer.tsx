
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  language: Language;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language, onLinkClick }) => {
  const t = TRANSLATIONS[language].footer;
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#EBE7DE] dark:bg-[#020408] pt-24 pb-12 px-6 text-[#5D5A53] dark:text-[#9CA3AF] transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-6 transition-colors">NOVA</h4>
          <p className="max-w-xs font-light leading-relaxed">
            {t.tagline}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] dark:text-[#EBE7DE] mb-6 tracking-wide text-sm uppercase transition-colors">{t.shop}</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.allProducts}</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.newArrivals}</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.audio}</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.home}</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] dark:text-[#EBE7DE] mb-6 tracking-wide text-sm uppercase transition-colors">{t.company}</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.story}</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.sustainability}</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors underline-offset-4 hover:underline">{t.journal}</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-medium text-[#2C2A26] dark:text-[#EBE7DE] mb-6 tracking-wide text-sm uppercase transition-colors">{t.newsletter}</h4>
          <div className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="email@address.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
              className="bg-transparent border-b border-[#A8A29E] dark:border-white/20 py-2 text-lg outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors placeholder-[#A8A29E]/70 text-[#2C2A26] dark:text-[#EBE7DE] disabled:opacity-50 text-start" 
            />
            <button 
              onClick={handleSubscribe}
              disabled={subscribeStatus !== 'idle' || !email}
              className="self-start text-sm font-medium uppercase tracking-widest mt-2 hover:text-[#2C2A26] dark:hover:text-[#00FF94] disabled:cursor-default disabled:hover:text-[#5D5A53] disabled:opacity-50 transition-colors"
            >
              {subscribeStatus === 'idle' && t.subscribe}
              {subscribeStatus === 'loading' && t.subscribing}
              {subscribeStatus === 'success' && t.subscribed}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60 transition-colors reveal">
        <p>{t.created}</p>
      </div>
    </footer>
  );
};

export default Footer;
