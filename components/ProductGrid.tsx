
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { Product, Language, Currency } from '../types';
import { TRANSLATIONS } from '../constants';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';

interface ProductGridProps {
  products: Product[];
  language: Language;
  currency: Currency;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, language, currency, onProductClick, onAddToCart }) => {
  const t = TRANSLATIONS[language].products;
  const [activeCategory, setActiveCategory] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Hardcoded categories but translated dynamically if possible
  // Ideally these should come from translations too
  const categoryLabels: Record<string, string> = {
      'All': t.filterAll,
      'Hydration': language === 'ar' ? 'ترطيب' : (language === 'fr' ? 'Hydratation' : 'Hydration'),
      'Nutrition': language === 'ar' ? 'تغذية' : (language === 'fr' ? 'Nutrition' : 'Nutrition'),
      'Well-Being': language === 'ar' ? 'العافية' : (language === 'fr' ? 'Bien-être' : 'Well-Being'),
      'Workspace': language === 'ar' ? 'مساحة العمل' : (language === 'fr' ? 'Espace de travail' : 'Workspace'),
      'Everyday Carry': language === 'ar' ? 'معدات يومية' : (language === 'fr' ? 'Quotidien' : 'Everyday Carry'),
  };
  
  const categories = ['All', 'Hydration', 'Nutrition', 'Well-Being', 'Workspace', 'Everyday Carry'];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <section id="products" className="py-32 px-6 md:px-12 bg-[#F5F2EB] dark:bg-[#050A14] transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6 reveal">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] transition-colors">{t.title}</h2>
          
          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 border-t border-[#D6D1C7]/50 dark:border-white/10 w-full max-w-2xl transition-colors">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#2C2A26] dark:border-[#00FF94] text-[#2C2A26] dark:text-[#00FF94] font-medium' 
                    : 'border-transparent text-[#A8A29E] dark:text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#EBE7DE]'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filteredProducts.map(product => (
            <ProductCard 
                key={product.id} 
                product={product} 
                currency={currency} 
                onClick={onProductClick}
                onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      </div>

      <QuickViewModal 
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        language={language}
        currency={currency}
        onAddToCart={onAddToCart}
        onViewDetails={(p) => {
            setQuickViewProduct(null);
            onProductClick(p);
        }}
      />
    </section>
  );
};

export default ProductGrid;
