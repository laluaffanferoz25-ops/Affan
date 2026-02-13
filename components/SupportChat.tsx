
import React, { useState, useRef, useEffect } from 'react';
import { getSupportResponse } from '../geminiService';

const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botMsg = await getSupportResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300 border border-black/5"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-[#121212] border border-white/10 flex flex-col shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-white/5 bg-white/[0.02]">
            <h3 className="font-serif text-lg tracking-widest text-white">CLIENT SERVICES</h3>
            <p className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mt-1">Varenne Atelier Steward</p>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide"
          >
            {messages.length === 0 && (
              <p className="text-gray-500 text-xs italic font-light leading-relaxed">
                "Welcome to the Atelier. Inquire regarding orders, payments, or the logistics of your acquisition."
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] text-xs font-light leading-relaxed p-4 ${
                  m.role === 'user' 
                    ? 'bg-white/5 text-gray-300 border border-white/5' 
                    : 'text-white italic'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="text-[10px] uppercase tracking-widest text-gray-600 animate-pulse">
                  Consulting the archive...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-6 border-t border-white/5 bg-black">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your inquiry..."
                className="w-full bg-transparent border-b border-white/10 py-2 pr-10 focus:border-white/40 outline-none text-xs text-white placeholder:text-gray-700 transition-colors"
              />
              <button 
                type="submit"
                disabled={!input.trim() || loading}
                className="absolute right-0 top-2 text-white/40 hover:text-white transition-colors disabled:opacity-20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChat;
