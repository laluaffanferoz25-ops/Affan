
import React, { useState, useRef, useEffect } from 'react';
import { getSupportResponse } from '../geminiService';

const SupportChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const query = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: query }]);
    setLoading(true);

    const reply = await getSupportResponse(query);
    setMessages(prev => [...prev, { role: 'bot', text: reply || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all border border-black/5"
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] md:w-[380px] h-[450px] bg-[#0A0A0A] border border-white/10 flex flex-col shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="p-5 border-b border-white/5">
            <h3 className="font-serif text-sm tracking-widest text-white uppercase">Client Services</h3>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
            {messages.length === 0 && (
              <p className="text-gray-600 text-[10px] uppercase tracking-widest italic">Inquire regarding your acquisition.</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] text-[11px] leading-relaxed p-3 ${
                  m.role === 'user' ? 'bg-white/5 text-gray-400' : 'text-white border-l border-white/20 pl-4'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && <div className="text-[9px] uppercase tracking-[0.3em] text-gray-700 animate-pulse">Consulting...</div>}
          </div>

          <form onSubmit={handleSubmit} className="p-5 bg-black">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Inquiry..."
                className="w-full bg-transparent border-b border-white/10 py-2 focus:border-white/30 outline-none text-[11px] text-white placeholder:text-gray-800 transition-colors"
              />
              <button type="submit" className="absolute right-0 top-2 opacity-40 hover:opacity-100 transition-opacity">
                <SendIcon />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
);

export default SupportChat;
