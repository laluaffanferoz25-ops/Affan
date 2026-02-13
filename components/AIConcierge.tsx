
import React, { useState, useRef, useEffect } from 'react';
import { getStylingAdvice } from '../geminiService';
import { ATELIER_DETAILS } from '../constants';

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
    <section id="concierge" className="min-h-screen bg-[#0D0D0D] py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Information & Names */}
        <div className="space-y-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-gray-600 mb-8 block">Atelier Presence</span>
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Paris Atelier</h4>
                <p className="text-lg font-serif italic text-white/80">{ATELIER_DETAILS.address}</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2">London Showroom</h4>
                <p className="text-lg font-serif italic text-white/80">{ATELIER_DETAILS.secondaryAddress}</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-gray-600 mb-8 block">Concierge Team</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {ATELIER_DETAILS.personnel.map(person => (
                <div key={person.name}>
                  <p className="text-xl font-serif text-white">{person.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Concierge Interaction */}
        <div className="flex flex-col justify-center">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.6em] text-gray-600 mb-6 block">The Advisor</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Digital Steward</h2>
            <p className="text-gray-500 text-sm font-light italic opacity-60">"Inquire regarding construction or styling."</p>
          </div>

          <form onSubmit={handleAsk} className="relative mb-12">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g. Styling the Obsidian Rider..."
              className="w-full bg-transparent border-b border-white/10 focus:border-white/40 py-6 outline-none transition-all text-xl font-light italic placeholder:text-gray-800"
            />
            <button 
              type="submit"
              className="absolute right-0 bottom-6 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-opacity"
            >
              {loading ? 'Consulting' : 'Inquire'}
            </button>
          </form>

          {response && (
            <div ref={responseRef} className="p-8 border border-white/5 bg-white/[0.01] animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-gray-300 font-light leading-relaxed text-base italic whitespace-pre-wrap">
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConcierge;
