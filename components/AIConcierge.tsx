
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../geminiService';

const AIConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const responseRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    setLoading(true);
    const result = await getStylingAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  useEffect(() => {
    if (response) responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [response]);

  return (
    <section id="concierge" className="min-h-screen bg-[#0D0D0D] py-32 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.6em] text-gray-600 mb-6 block">The Advisor</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Virtual Concierge</h2>
          <p className="text-gray-500 text-sm font-light italic opacity-60">"Inquire regarding construction or styling."</p>
        </div>

        <form onSubmit={handleAsk} className="relative mb-16">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="E.g. Styling the Midnight Linen..."
            className="w-full bg-transparent border-b border-white/10 focus:border-white/40 py-6 outline-none transition-all text-lg md:text-2xl font-light italic placeholder:text-gray-800"
          />
          <button 
            type="submit"
            className="absolute right-0 bottom-6 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-opacity"
          >
            {loading ? 'Consulting' : 'Inquire'}
          </button>
        </form>

        {response && (
          <div ref={responseRef} className="p-10 border border-white/5 bg-white/[0.01] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-gray-300 font-light leading-relaxed text-lg italic whitespace-pre-wrap">
              {response}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConcierge;
