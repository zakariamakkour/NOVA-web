
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { Product, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../constants';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  currency: Currency;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewDetails: (product: Product) => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, language, currency, onAddToCart, onViewDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setSelectedSize(null);
      setIsAdded(false);
    }
  }, [isOpen, product]);

  if (!product || !isOpen) return null;

  const t = TRANSLATIONS[language].products;
  const showSizes = product.category === 'Wearable';
  const sizes = ['S', 'M', 'L'];

  const handleAddToCart = () => {
    if (isAdded) return;
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1500);
  };

  const incrementQuantity = () => setQuantity(q => Math.min(10, q + 1));
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <>
      <div 
        className="fixed inset-0 bg-[#2C2A26]/60 dark:bg-black/80 backdrop-blur-sm z-[60] animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-[#F5F2EB] dark:bg-[#0A1220] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.3)] dark:shadow-[0_0_50px_rgba(0,255,148,0.1)] pointer-events-auto flex flex-col md:flex-row animate-scale-up rounded-sm transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full text-[#2C2A26] dark:text-white hover:bg-[#2C2A26] dark:hover:bg-[#00FF94] hover:text-[#00FF94] dark:hover:text-[#050A14] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 bg-[#EBE7DE] dark:bg-[#050A14] relative min-h-[300px] md:min-h-[500px]">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover dark:brightness-90"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-bold text-[#A8A29E] uppercase tracking-[0.2em] mb-3">{product.category}</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-3 transition-colors">{product.name}</h2>
            <span className="text-xl font-light text-[#2C2A26] dark:text-[#00FF94] mb-8 block transition-colors">{formatPrice(product.price, currency)}</span>
            
            <p className="text-[#5D5A53] dark:text-[#9CA3AF] font-light leading-relaxed mb-8 text-sm md:text-base border-b border-[#D6D1C7] dark:border-white/10 pb-8 transition-colors">
              {product.description}
            </p>

            {showSizes && (
              <div className="mb-8">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#EBE7DE] mb-3 transition-colors">{t.selectSize}</span>
                <div className="flex gap-3">
                  {sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 flex items-center justify-center border text-sm transition-all duration-300 ${
                        selectedSize === size 
                          ? 'border-[#2C2A26] bg-[#2C2A26] text-[#F5F2EB] dark:border-[#00FF94] dark:bg-[#00FF94] dark:text-[#050A14]' 
                          : 'border-[#D6D1C7] dark:border-white/20 text-[#5D5A53] dark:text-[#9CA3AF] hover:border-[#2C2A26] dark:hover:border-[#00FF94] dark:hover:text-[#00FF94]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 h-12 mb-8">
              {/* Quantity */}
              <div className="flex items-center border border-[#D6D1C7] dark:border-white/20 px-2 h-full transition-colors">
                <button 
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="w-8 h-full flex items-center justify-center text-[#2C2A26] dark:text-[#EBE7DE] hover:bg-[#D6D1C7]/20 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                >
                  −
                </button>
                <span className="w-8 text-center font-medium text-[#2C2A26] dark:text-[#EBE7DE] text-sm transition-colors">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  disabled={quantity >= 10}
                  className="w-8 h-full flex items-center justify-center text-[#2C2A26] dark:text-[#EBE7DE] hover:bg-[#D6D1C7]/20 dark:hover:bg-white/10 disabled:opacity-30 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add Button */}
              <button 
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`flex-1 px-4 uppercase tracking-widest text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isAdded 
                        ? 'bg-[#00FF94] text-[#050A14] scale-[0.98] shadow-[0_0_15px_rgba(0,255,148,0.4)]' 
                        : 'bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14] hover:bg-[#2C2A26] hover:text-[#00FF94] hover:shadow-[0_0_20px_rgba(0,255,148,0.3)] border border-transparent hover:border-[#00FF94]/50'
                }`}
              >
                {isAdded ? (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span>{language === 'ar' ? 'تمت الإضافة' : (language === 'fr' ? 'Ajouté' : 'Added')}</span>
                    </>
                ) : (
                    `${t.addToCart} — ${formatPrice(product.price * quantity, currency)}`
                )}
              </button>
            </div>

            <button 
              onClick={() => onViewDetails(product)}
              className="text-xs font-bold uppercase tracking-[0.15em] text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#00FF94] underline underline-offset-8 transition-colors self-start"
            >
              {t.viewDetails}
            </button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scale-up {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-up {
          animation: scale-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fade-in {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default QuickViewModal;
