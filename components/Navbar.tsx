
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';
import { Language, Currency, Theme } from '../types';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart, language, setLanguage, currency, setCurrency, theme, setTheme, backgroundColor, setBackgroundColor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine text color based on state
  // In Dark Mode: Text should be light unless it's the scrolled white navbar (if distinct), but we usually want dark navbar in dark mode.
  const parseHex = (hex: string) => {
    const clean = hex.replace('#', '');
    const r = parseInt(clean.slice(0, 2), 16);
    const g = parseInt(clean.slice(2, 4), 16);
    const b = parseInt(clean.slice(4, 6), 16);
    return { r, g, b };
  };
  const { r, g, b } = parseHex(backgroundColor);
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const isDark = theme === 'dark' || luma < 150;
  const textColorClass = (scrolled || mobileMenuOpen) 
    ? (isDark ? 'text-[#EBE7DE]' : 'text-[#2C2A26]') 
    : 'text-[#F5F2EB]';

  const languages: {code: Language, label: string, native: string}[] = [
    { code: 'en', label: 'EN', native: 'English' },
    { code: 'ar', label: 'AR', native: 'العربية' },
    { code: 'fr', label: 'FR', native: 'Français' },
  ];

  const currencies: Currency[] = ['USD', 'EUR', 'MAD'];
  const bgChoices = [
    { label: 'Cream', color: '#F5F2EB' },
    { label: 'Sand', color: '#EBE7DE' },
    { label: 'Charcoal', color: '#2C2A26' },
    { label: 'Nova Dark', color: '#050A14' },
    { label: 'Forest', color: '#0D1F16' },
  ];

  const t = {
    en: { shop: 'Shop', about: 'About', journal: 'Journal', cart: 'Cart' },
    ar: { shop: 'تسوق', about: 'قصتنا', journal: 'المجلة', cart: 'السلة' },
    fr: { shop: 'Boutique', about: 'À propos', journal: 'Journal', cart: 'Panier' },
  };

  const currentT = t[language];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-700 ease-in-out ${
          scrolled || mobileMenuOpen 
            ? 'bg-[#F5F2EB]/85 dark:bg-[#050A14]/85 backdrop-blur-md py-4 shadow-sm dark:shadow-none border-b border-transparent dark:border-white/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-8 flex items-center justify-between relative">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); onNavClick(e, ''); }} className={`text-3xl font-serif font-medium tracking-tight z-50 relative transition-colors duration-500 ${textColorClass} flex items-center gap-3 whitespace-nowrap`}><img src="/images/GOGO NOVA.png" alt="NOVA logo" className="h-6 w-6 object-cover rounded-sm" /><span>{BRAND_NAME}</span></a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${textColorClass} absolute left-1/2 -translate-x-1/2`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-60 transition-opacity">{currentT.shop}</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-60 transition-opacity">{currentT.journal}</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-60 transition-opacity">{currentT.about}</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-3 z-50 relative transition-colors duration-500 ${textColorClass}`}>
            
            {/* Action Group */}
            <div className="hidden sm:flex items-center gap-4">
                {/* Modern Language Switcher */}
                <div className="flex items-center p-0.5 rounded-full border border-[#00FF94]/30 bg-[#00FF94]/5 backdrop-blur-md">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setLanguage(lang.code)}
                            className={`
                                relative px-2 py-0.5 text-[10px] font-bold rounded-full transition-all duration-300 tracking-widest
                                ${language === lang.code 
                                    ? 'bg-[#00FF94] text-[#050A14] shadow-[0_0_15px_rgba(0,255,148,0.4)] scale-105' 
                                    : `text-current opacity-60 hover:opacity-100 hover:text-[#00FF94]`
                                }
                            `}
                        >
                            {lang.code.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center p-0.5 rounded-full border border-[#00FF94]/30 bg-[#00FF94]/5 backdrop-blur-md">
                    {currencies.map((curr) => (
                        <button
                            key={curr}
                            onClick={() => setCurrency(curr)}
                            className={`
                                relative px-2 py-0.5 text-[10px] font-bold rounded-full transition-all duration-300 tracking-widest
                                ${currency === curr 
                                    ? 'bg-[#00FF94] text-[#050A14] shadow-[0_0_15px_rgba(0,255,148,0.4)] scale-105' 
                                    : `text-current opacity-60 hover:opacity-100 hover:text-[#00FF94]`
                                }
                            `}
                        >
                            {curr}
                        </button>
                    ))}
                </div>

                {/* Theme Toggle Button */}
                <button
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-2 rounded-full border border-[#00FF94]/30 bg-[#00FF94]/5 backdrop-blur-md text-[#00FF94] hover:bg-[#00FF94] hover:text-[#050A14] transition-all duration-300 shadow-[0_0_10px_rgba(0,255,148,0.1)] hover:shadow-[0_0_20px_rgba(0,255,148,0.4)]"
                  aria-label="Toggle Theme"
                >
                    {theme === 'light' ? (
                       // Moon Icon for Light Mode (switch to dark)
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                       </svg>
                    ) : (
                       // Sun Icon for Dark Mode (switch to light)
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                       </svg>
                    )}
                </button>
            </div>

            <button 
              onClick={handleCartClick}
              className="text-sm font-medium uppercase tracking-widest hover:opacity-60 transition-opacity hidden sm:block"
            >
              {currentT.cart} ({cartCount})
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden focus:outline-none transition-colors duration-500 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#F5F2EB] dark:bg-[#050A14] z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-xl font-serif font-medium text-[#2C2A26] dark:text-[#EBE7DE]">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:opacity-60 transition-opacity">{currentT.shop}</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:opacity-60 transition-opacity">{currentT.about}</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:opacity-60 transition-opacity">{currentT.journal}</a>
            <button 
                onClick={handleCartClick} 
                className="hover:opacity-60 transition-opacity text-base uppercase tracking-widest font-sans mt-4"
            >
                {currentT.cart} ({cartCount})
            </button>
            
            {/* Mobile Switchers */}
            <div className="flex flex-col items-center gap-4 mt-8">
                {/* Mobile Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2C2A26]/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm text-sm uppercase tracking-widest font-bold text-[#2C2A26] dark:text-[#EBE7DE]"
                >
                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>

                {/* Mobile Language Switcher */}
                <div className="flex items-center p-1 rounded-full border border-[#2C2A26]/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                    {languages.map(lang => (
                        <button 
                            key={lang.code}
                            onClick={() => {
                                setLanguage(lang.code);
                            }}
                            className={`px-4 py-2 text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${
                                language === lang.code 
                                ? 'bg-[#2C2A26] text-[#F5F2EB] dark:bg-[#00FF94] dark:text-[#050A14] shadow-md' 
                                : 'text-[#2C2A26] dark:text-[#EBE7DE] opacity-50 hover:opacity-100'
                            }`}
                        >
                            {lang.code}
                        </button>
                    ))}
                </div>

                {/* Mobile Currency Switcher */}
                <div className="flex items-center p-1 rounded-full border border-[#2C2A26]/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm">
                    {currencies.map(curr => (
                        <button 
                            key={curr}
                            onClick={() => {
                                setCurrency(curr);
                            }}
                            className={`px-4 py-2 text-sm uppercase tracking-widest font-bold rounded-full transition-all duration-300 ${
                                currency === curr
                                ? 'bg-[#2C2A26] text-[#F5F2EB] dark:bg-[#00FF94] dark:text-[#050A14] shadow-md' 
                                : 'text-[#2C2A26] dark:text-[#EBE7DE] opacity-50 hover:opacity-100'
                            }`}
                        >
                            {curr}
                        </button>
                    ))}
                </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
