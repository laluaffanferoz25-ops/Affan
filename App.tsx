
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import AIConcierge from './components/AIConcierge';
import { BRAND_NAME, TAGLINE, MANIFESTO, COLLECTIONS, PRODUCTS } from './constants';

const App: React.FC = () => {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop" 
            alt="Varenne Aesthetic"
            className="w-full h-full object-cover grayscale opacity-40 scale-110 animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-8xl md:text-[14rem] font-serif tracking-tighter leading-none mb-6 opacity-90">
            {BRAND_NAME}
          </h1>
          <p className="text-[10px] md:text-sm uppercase tracking-[1em] text-white/60 font-medium">
            {TAGLINE}
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
          <span className="text-[8px] uppercase tracking-widest rotate-90 origin-left mt-2 whitespace-nowrap">Explore Atelier</span>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="min-h-[70vh] flex items-center justify-center px-10 py-32 bg-[#0F0F0F]">
        <div className="max-w-3xl text-center">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-8 block">Manifesto</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 italic leading-tight">
            "{MANIFESTO.title}"
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            {MANIFESTO.body}
          </p>
        </div>
      </section>

      {/* Collections Overview */}
      <section id="collections" className="py-32 px-4 md:px-10 bg-[#0A0A0A]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <div key={col.id} className="relative group overflow-hidden h-[80vh] cursor-pointer">
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-10 right-10">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/50 mb-2 block">Collection 0{idx + 1}</span>
                <h3 className="text-4xl font-serif mb-4">{col.title}</h3>
                <p className="text-xs text-gray-400 tracking-wider uppercase leading-relaxed max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {col.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <div className="bg-black">
        {PRODUCTS.map((product, idx) => (
          <ProductSection key={product.id} product={product} reverse={idx % 2 !== 0} />
        ))}
      </div>

      {/* AI Concierge */}
      <AIConcierge />

      {/* Footer */}
      <footer className="bg-black py-20 px-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.4em] text-gray-600">
        <div>&copy; {new Date().getFullYear()} {BRAND_NAME} Atelier. All Rights Reserved.</div>
        <div className="flex space-x-12 mt-8 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Sustainability</a>
          <a href="#" className="hover:text-white transition-colors">Archive</a>
        </div>
        <div className="mt-8 md:mt-0 opacity-40">Hand-finished in Europe</div>
      </footer>
    </main>
  );
};

export default App;
