
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect, useRef } from 'react';
import { Product, Currency } from '../types';
import { formatPrice } from '../constants';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onClick: (product: Product) => void;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, currency, onClick, onQuickView }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div 
        className="group flex flex-col gap-6 cursor-pointer transition-all duration-500 hover:-translate-y-2" 
        onClick={() => onClick(product)}
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EBE7DE] dark:bg-[#0A1220] rounded-sm transition-colors">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 sepia-[0.1] dark:sepia-0 group-hover:sepia-0 dark:brightness-90 dark:group-hover:brightness-110"
          />
          
          {/* Hover overlay with "Quick View" Button */}
          <div className="absolute inset-0 bg-[#2C2A26]/0 group-hover:bg-[#2C2A26]/10 dark:group-hover:bg-[#00FF94]/10 transition-colors duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 scale-95 group-hover:scale-100">
                  <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                    }}
                    className="
                      bg-white/80 dark:bg-[#050A14]/80 backdrop-blur-md 
                      text-[#2C2A26] dark:text-[#00FF94]
                      px-8 py-3 
                      rounded-full 
                      text-xs font-bold uppercase tracking-[0.15em] 
                      border border-transparent dark:border-[#00FF94]/20
                      hover:bg-[#2C2A26] hover:text-[#00FF94] hover:border-[#00FF94]
                      dark:hover:bg-[#00FF94] dark:hover:text-[#050A14]
                      transition-all duration-300 
                      shadow-[0_5px_15px_rgba(0,0,0,0.1)] 
                      hover:shadow-[0_0_25px_rgba(0,255,148,0.4)] 
                      hover:scale-105
                    "
                  >
                      Quick View
                  </button>
              </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-serif font-medium text-[#2C2A26] dark:text-[#EBE7DE] mb-1 group-hover:text-[#00FF94] dark:group-hover:text-[#00FF94] transition-colors duration-300">{product.name}</h3>
          <p className="text-sm font-light text-[#5D5A53] dark:text-[#9CA3AF] mb-3 tracking-wide">{product.category}</p>
          <span className="text-sm font-medium text-[#2C2A26] dark:text-[#00FF94] block">{formatPrice(product.price, currency)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
