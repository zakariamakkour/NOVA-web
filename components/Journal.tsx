
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle, Language } from '../types';
import { TRANSLATIONS } from '../constants';

interface JournalProps {
  articles: JournalArticle[];
  language: Language;
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ articles, language, onArticleClick }) => {
  const t = TRANSLATIONS[language].journal;
  
  return (
    <section id="journal" className="bg-[#F5F2EB] dark:bg-[#050A14] py-32 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7] dark:border-white/10 transition-colors reveal">
            <div>
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">{t.editorial}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] transition-colors">{t.title}</h2>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.map((article) => (
                <div key={article.id} className="group cursor-pointer flex flex-col text-start reveal" onClick={() => onArticleClick(article)}>
                    <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-[#EBE7DE] dark:bg-[#0A1220] transition-colors">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0 dark:brightness-90"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-start">
                        <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E] mb-3">{article.date}</span>
                        <h3 className="text-2xl font-serif text-[#2C2A26] dark:text-[#EBE7DE] mb-4 leading-tight group-hover:underline decoration-1 underline-offset-4 group-hover:text-[#00FF94] transition-colors">{article.title}</h3>
                        <p className="text-[#5D5A53] dark:text-[#9CA3AF] font-light leading-relaxed transition-colors">{article.excerpt}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
