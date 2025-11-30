
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import JournalDetail from './components/JournalDetail';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import { Product, JournalArticle, ViewState, Language, Currency, Theme } from './types';
import { getProducts, getJournal } from './constants';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState<string>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('nova_bgcolor') : null;
    return saved || '#E7E2D7';
  });
  const [language, setLanguage] = useState<Language>('en');
  const [currency, setCurrency] = useState<Currency>(() => (localStorage.getItem('nova_currency') as Currency) || 'USD');
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('nova_theme')) {
      return localStorage.getItem('nova_theme') as Theme;
    }
    return 'light'; // Default to light, or use window.matchMedia to detect system pref
  });

  // Handle language side effects (document attributes)
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  // Persist currency
  useEffect(() => {
    localStorage.setItem('nova_currency', currency);
  }, [currency]);

  // Persist and apply theme
  useEffect(() => {
    localStorage.setItem('nova_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('nova_bgcolor', backgroundColor);
  }, [backgroundColor]);

  // Data helpers
  const currentProducts = useMemo(() => getProducts(language), [language]);
  const currentJournal = useMemo(() => getJournal(language), [language]);

  // Handle navigation (clicks on Navbar or Footer links)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // If we are not home, go home first
    if (view.type !== 'home') {
      setView({ type: 'home' });
      // Allow state update to render Home before scrolling
      setTimeout(() => scrollToSection(targetId), 0);
    } else {
      scrollToSection(targetId);
    }
  };

  const scrollToSection = (targetId: string) => {
    const lenis = (window as any).__lenis;
    if (!targetId) {
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(element, { offset: -headerOffset });
      } else {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch {}
    }
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    // Add the product 'quantity' times to the flat array
    const newItems = new Array(quantity).fill(product);
    setCartItems([...cartItems, ...newItems]);
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  // When language changes, update the current view object if it is a product or journal
  useEffect(() => {
    if (view.type === 'product') {
        const updatedProduct = currentProducts.find(p => p.id === view.product.id);
        if (updatedProduct) setView({ type: 'product', product: updatedProduct });
    } else if (view.type === 'journal') {
        const updatedArticle = currentJournal.find(a => a.id === view.article.id);
        if (updatedArticle) setView({ type: 'journal', article: updatedArticle });
    }
  }, [language, currentProducts, currentJournal]);

  useEffect(() => {
    const done = () => setIsLoading(false);
    if (document.readyState === 'complete') {
      setTimeout(done, 300);
    } else {
      window.addEventListener('load', done, { once: true });
    }
    return () => window.removeEventListener('load', done);
  }, []);

  let bgElem: HTMLDivElement | null = null;

  const handleMouseMoveApp = (e: React.MouseEvent<HTMLDivElement>) => {
    const dark = document.documentElement.classList.contains('dark');
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const base = dark ? '#050A14' : '#E7E2D7';
    const mid = dark ? 'rgba(10,18,32,1)' : 'rgba(217,211,197,1)';
    const hl = dark ? 'rgba(0,255,148,0.18)' : 'rgba(0,255,148,0.12)';
    if (bgElem) bgElem.style.background = `radial-gradient(900px circle at ${x}px ${y}px, ${hl} 0%, ${mid} 35%, ${base} 70%)`;
  };

  const handleMouseLeaveApp = () => {
    const dark = document.documentElement.classList.contains('dark');
    const base = dark ? '#050A14' : '#E7E2D7';
    const mid = dark ? 'rgba(10,18,32,1)' : 'rgba(217,211,197,1)';
    if (bgElem) bgElem.style.background = `radial-gradient(900px circle at 50% 50%, transparent 0%, ${mid} 0%, ${base} 100%)`;
  };


  return (
    <div onMouseMove={handleMouseMoveApp} onMouseLeave={handleMouseLeaveApp} className="relative min-h-screen transition-colors duration-500 font-sans text-[#2C2A26] dark:text-[#EBE7DE] selection:bg-[#D6D1C7] dark:selection:bg-[#00FF94] selection:text-[#2C2A26] dark:selection:text-[#050A14]" style={{ backgroundColor }}>
      <div ref={(el) => { bgElem = el; }} className="absolute inset-0 transition-[background] duration-150 z-0"></div>
      {isLoading && (
        <div className="app-loader">
          <div className="app-loader__inner">
            <div className="app-loader__ring"></div>
            <div className="app-loader__label">NOVA</div>
          </div>
        </div>
      )}
      {view.type !== 'checkout' && (
        <Navbar 
            onNavClick={handleNavClick} 
            cartCount={cartItems.length}
            onOpenCart={() => setIsCartOpen(true)}
            language={language}
            setLanguage={setLanguage}
            currency={currency}
            setCurrency={setCurrency}
            theme={theme}
            setTheme={setTheme}
            backgroundColor={backgroundColor}
            setBackgroundColor={setBackgroundColor}
        />
      )}
      
      <main className="relative z-10">
        {view.type === 'home' && (
          <>
            <Hero language={language} onNavClick={handleNavClick} />
            <ProductGrid 
                products={currentProducts}
                language={language}
                currency={currency}
                onProductClick={(p) => {
                    const lenis = (window as any).__lenis;
                    if (lenis && typeof lenis.scrollTo === 'function') {
                      lenis.scrollTo(0);
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setView({ type: 'product', product: p });
                }}
                onAddToCart={addToCart}
            />
            <About language={language} />
            <Journal 
                articles={currentJournal}
                language={language}
                onArticleClick={(a) => {
                    const lenis = (window as any).__lenis;
                    if (lenis && typeof lenis.scrollTo === 'function') {
                      lenis.scrollTo(0);
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setView({ type: 'journal', article: a });
                }} 
            />
          </>
        )}

        {view.type === 'product' && (
          <ProductDetail 
            product={view.product} 
            language={language}
            currency={currency}
            onBack={() => {
              setView({ type: 'home' });
              setTimeout(() => scrollToSection('products'), 50);
            }}
            onAddToCart={addToCart}
          />
        )}

        {view.type === 'journal' && (
          <JournalDetail 
            article={view.article} 
            language={language}
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {view.type === 'checkout' && (
            <Checkout 
                items={cartItems}
                language={language}
                currency={currency}
                onBack={() => setView({ type: 'home' })}
            />
        )}
      </main>

      {view.type !== 'checkout' && <Footer language={language} onLinkClick={handleNavClick} />}
      
      <Assistant />
      
      <CartDrawer 
        isOpen={isCartOpen}
        language={language}
        currency={currency}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
            setIsCartOpen(false);
            const lenis = (window as any).__lenis;
            if (lenis && typeof lenis.scrollTo === 'function') {
              lenis.scrollTo(0);
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            setView({ type: 'checkout' });
        }}
      />
    </div>
  );
}

export default App;
