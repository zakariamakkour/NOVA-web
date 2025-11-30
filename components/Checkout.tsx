
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../constants';

interface CheckoutProps {
  items: Product[];
  language: Language;
  currency: Currency;
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, language, currency, onBack }) => {
  const t = TRANSLATIONS[language].checkout;
  const tProd = TRANSLATIONS[language].products;
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    const successMessage = language === 'ar' 
        ? 'تم استلام طلبك بنجاح. شكراً لتسوقك مع نوفا.' 
        : (language === 'fr' 
            ? 'Commande reçue avec succès. Merci d\'avoir choisi Nova.' 
            : 'Order placed successfully. Thank you for choosing Nova.');
    alert(successMessage);
    onBack();
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] dark:bg-[#050A14] transition-colors duration-500 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors mb-12 rtl:flex-row-reverse"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {tProd.backToShop}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <form onSubmit={handlePayment}>
            <h1 className="text-3xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-8 transition-colors">{t.title}</h1>
            
            <div className="space-y-12">
              {/* Section 1: Contact */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-6 transition-colors">{t.contact}</h2>
                <div className="space-y-4">
                   <input required type="email" placeholder="Email address" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-6 transition-colors">{t.shipping}</h2>
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="First name" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                      <input required type="text" placeholder="Last name" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                   </div>
                   <input required type="text" placeholder="Address" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                   <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="City" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                      <input required type="text" placeholder="Postal code" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                   </div>
                </div>
              </div>

               {/* Section 3: Payment (Mock) */}
              <div>
                <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-6 transition-colors">{t.payment}</h2>
                <div className="p-6 border border-[#D6D1C7] dark:border-white/10 bg-white/50 dark:bg-white/5 space-y-4 transition-colors">
                   <p className="text-sm text-[#5D5A53] dark:text-[#9CA3AF] mb-2">All transactions are secure and encrypted.</p>
                   <input required type="text" placeholder="Card number" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                   <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="Expiration (MM/YY)" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                      <input required type="text" placeholder="Security code" className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-white/10 py-3 text-[#2C2A26] dark:text-[#EBE7DE] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] dark:focus:border-[#00FF94] transition-colors" />
                   </div>
                </div>
              </div>

              <div>
                <button 
                    type="submit"
                    className="w-full py-5 bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14] uppercase tracking-widest text-sm font-medium hover:bg-[#433E38] dark:hover:bg-[#33FFAD] transition-all shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(0,255,148,0.3)]"
                >
                    {t.payNow} — {formatPrice(total, currency)}
                </button>
              </div>
            </div>
          </form>

          {/* Right Column: Summary */}
          <div className="lg:ps-12 lg:border-s border-[#D6D1C7] dark:border-white/10 transition-colors">
            <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-8 transition-colors">{t.orderSummary}</h2>
            
            <div className="space-y-6 mb-8">
               {items.map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 bg-[#EBE7DE] dark:bg-[#0A1220] relative transition-colors">
                       <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover dark:brightness-90" />
                       <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C2A26] dark:bg-[#00FF94] text-white dark:text-[#050A14] text-[10px] flex items-center justify-center rounded-full">1</span>
                    </div>
                    <div className="flex-1">
                       <h3 className="font-serif text-[#2C2A26] dark:text-[#EBE7DE] text-base transition-colors">{item.name}</h3>
                       <p className="text-xs text-[#A8A29E]">{item.category}</p>
                    </div>
                    <span className="text-sm text-[#5D5A53] dark:text-[#9CA3AF] transition-colors">{formatPrice(item.price, currency)}</span>
                 </div>
               ))}
            </div>

            <div className="border-t border-[#D6D1C7] dark:border-white/10 pt-6 space-y-2 transition-colors">
              <div className="flex justify-between text-sm text-[#5D5A53] dark:text-[#9CA3AF] transition-colors">
                 <span>{t.subtotal}</span>
                 <span>{formatPrice(subtotal, currency)}</span>
              </div>
              <div className="flex justify-between text-sm text-[#5D5A53] dark:text-[#9CA3AF] transition-colors">
                 <span>Shipping</span>
                 <span>{t.free}</span>
              </div>
            </div>
            
            <div className="border-t border-[#D6D1C7] dark:border-white/10 mt-6 pt-6 transition-colors">
               <div className="flex justify-between items-center">
                 <span className="font-serif text-xl text-[#2C2A26] dark:text-[#EBE7DE] transition-colors">{t.total}</span>
                 <div className="flex items-end gap-2">
                   <span className="text-xs text-[#A8A29E] mb-1">{currency}</span>
                   <span className="font-serif text-2xl text-[#2C2A26] dark:text-[#00FF94] transition-colors">{formatPrice(total, currency)}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
