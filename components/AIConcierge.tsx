
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../geminiService';

const AIConcierge: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse(null);
    const result = await getStylingAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  useEffect(() => {
    if (response && chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  return (
    <section id="concierge" className="min-h-screen bg-[#141414] py-32 px-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 block">The Varenne Advisor</span>
          <h2 className="text-5xl md:text-6xl font-serif mb-8">Virtual Concierge</h2>
          <p className="text-gray-400 font-light italic max-w-xl mx-auto leading-relaxed">
            "Seek guidance on construction, styling, or the philosophy of quiet permanence. Our digital steward is at your disposal."
          </p>
        </div>

        <form onSubmit={handleAsk} className="relative group">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Inquire about styling the Midnight Linen..."
            className="w-full bg-transparent border-b border-white/20 focus:border-white py-6 px-4 outline-none transition-all text-xl font-light italic placeholder:opacity-30"
          />
          <button 
            type="submit"
            disabled={loading}
            className="absolute right-0 bottom-6 text-[10px] uppercase tracking-[0.3em] hover:opacity-100 opacity-60 transition-opacity disabled:opacity-20"
          >
            {loading ? 'Consulting...' : 'Inquire'}
          </button>
        </form>

        {response && (
          <div ref={chatRef} className="mt-20 p-12 border border-white/5 bg-white/[0.02] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="text-xs uppercase tracking-[0.4em] text-gray-600 mb-8 border-b border-white/5 pb-4">Response from Atelier</div>
            <div className="prose prose-invert max-w-none text-gray-300 font-light leading-loose text-lg whitespace-pre-wrap italic">
              {response}
            </div>
            <div className="mt-12 text-[10px] uppercase tracking-[0.2em] opacity-40">— Directed by Varenne</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIConcierge;
