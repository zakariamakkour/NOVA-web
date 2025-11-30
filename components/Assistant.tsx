
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Nova. I am here to help you find objects that resonate with your life. How may I assist?', timestamp: Date.now() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-[#F5F2EB] dark:bg-[#0A1220] rounded-none shadow-2xl shadow-[#2C2A26]/10 dark:shadow-none w-[90vw] sm:w-[380px] h-[550px] mb-6 flex flex-col overflow-hidden border border-[#D6D1C7] dark:border-white/10 animate-slide-up-fade transition-colors">
          {/* Header */}
          <div className="bg-[#EBE7DE] dark:bg-[#050A14] p-5 border-b border-[#D6D1C7] dark:border-white/10 flex justify-between items-center transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#2C2A26] dark:bg-[#00FF94] rounded-full animate-pulse"></div>
                <span className="font-serif italic text-[#2C2A26] dark:text-[#EBE7DE] text-lg">Concierge</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#00FF94] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#F5F2EB] dark:bg-[#0A1220] transition-colors" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-5 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14]' 
                      : 'bg-white dark:bg-[#050A14] border border-[#EBE7DE] dark:border-white/10 text-[#5D5A53] dark:text-[#EBE7DE] shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white dark:bg-[#050A14] border border-[#EBE7DE] dark:border-white/10 p-5 flex gap-1 items-center shadow-sm">
                   <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-[#A8A29E] rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-[#F5F2EB] dark:bg-[#0A1220] border-t border-[#D6D1C7] dark:border-white/10 transition-colors">
            <div className="flex gap-2 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask anything..." 
                className="flex-1 bg-white dark:bg-[#050A14] border border-[#D6D1C7] dark:border-white/10 focus:border-[#2C2A26] dark:focus:border-[#00FF94] px-4 py-3 text-sm outline-none transition-colors placeholder-[#A8A29E] text-[#2C2A26] dark:text-[#EBE7DE]"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14] px-4 hover:bg-[#444] dark:hover:bg-[#33FFAD] transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2C2A26] dark:bg-[#00FF94] text-[#F5F2EB] dark:text-[#050A14] w-14 h-14 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-500 z-50 border border-transparent dark:border-[#00FF94]/50"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
            <span className="font-serif italic text-lg">Ai</span>
        )}
      </button>
    </div>
  );
};

export default Assistant;
