
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product, Language, Currency } from '../types';
import { TRANSLATIONS, formatPrice } from '../constants';

interface ProductDetailProps {
  product: Product;
  language: Language;
  currency: Currency;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, language, currency, onBack, onAddToCart }) => {
  const t = TRANSLATIONS[language].products;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  // Mock sizes for demonstration if not in data
  const sizes = ['S', 'M', 'L'];
  // The category in Product interface is strictly the union of English keys
  const showSizes = product.category === 'Wearable';

  const handleAddToCart = () => {
    if (isAdded) return;
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementQuantity = () => setQuantity(q => Math.min(10, q + 1));
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="pt-24 min-h-screen bg-[#F5F2EB] dark:bg-[#050A14] transition-colors duration-500 animate-fade-in-up">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors mb-8 rtl:flex-row-reverse"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          {t.backToShop}
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Main Image Only */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/5] bg-[#EBE7DE] dark:bg-[#0A1220] overflow-hidden transition-colors">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fade-in-up dark:brightness-90"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center max-w-xl reveal">
             <span className="text-sm font-medium text-[#A8A29E] uppercase tracking-widest mb-2">{product.category}</span>
             <h1 className="text-4xl md:text-5xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-4 transition-colors">{product.name}</h1>
             <span className="text-2xl font-light text-[#2C2A26] dark:text-[#00FF94] mb-8 transition-colors">{formatPrice(product.price, currency)}</span>
             
             <p className="text-[#5D5A53] dark:text-[#9CA3AF] leading-relaxed font-light text-lg mb-8 border-b border-[#D6D1C7] dark:border-white/10 pb-8 transition-colors">
               {product.longDescription || product.description}
             </p>

             {showSizes && (
                <div className="mb-8">
                  <span className="block text-xs font-bold uppercase tracking-widest text-[#2C2A26] dark:text-[#EBE7DE] mb-4 transition-colors">{t.selectSize}</span>
                  <div className="flex gap-4">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border transition-all duration-300 ${
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

             <div className="flex flex-col gap-4">
               <div className="flex gap-4 h-14">
                  {/* Quantity Selector */}
                  <div className="flex items-center border border-[#D6D1C7] dark:border-white/20 px-2 h-full transition-colors">
                    <button 
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                      className="w-10 h-full flex items-center justify-center text-[#2C2A26] dark:text-[#EBE7DE] hover:bg-[#D6D1C7]/20 dark:hover:bg-white/10 disabled:opacity-30 transition-colors text-lg"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-medium text-[#2C2A26] dark:text-[#EBE7DE] transition-colors">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      disabled={quantity >= 10}
                      className="w-10 h-full flex items-center justify-center text-[#2C2A26] dark:text-[#EBE7DE] hover:bg-[#D6D1C7]/20 dark:hover:bg-white/10 disabled:opacity-30 transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={handleAddToCart}
                    disabled={isAdded}
                    className={`flex-1 px-8 uppercase tracking-widest text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isAdded 
                            ? 'bg-[#00FF94] text-[#050A14] scale-[0.98] shadow-inner' 
                            : 'bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14] hover:bg-[#433E38] dark:hover:bg-[#33FFAD] hover:-translate-y-1 hover:shadow-xl dark:shadow-[0_0_20px_rgba(0,255,148,0.3)]'
                    }`}
                  >
                    {isAdded ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 animate-[bounce_0.5s_ease-in-out]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>{language === 'ar' ? 'تمت الإضافة' : (language === 'fr' ? 'Ajouté' : 'Added')}</span>
                        </>
                    ) : (
                        `${t.addToCart} — ${formatPrice(product.price * quantity, currency)}`
                    )}
                  </button>
               </div>

               <ul className="mt-8 space-y-2 text-sm text-[#5D5A53] dark:text-[#9CA3AF] transition-colors">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-3">
                     <span className="w-1 h-1 bg-[#2C2A26] dark:bg-[#00FF94] rounded-full"></span>
                     {feature}
                   </li>
                 ))}
               </ul>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
