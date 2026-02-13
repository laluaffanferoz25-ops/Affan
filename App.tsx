
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import AIConcierge from './components/AIConcierge';
import SupportChat from './components/SupportChat';
import ProductModal from './components/ProductModal';
import ConciergePage from './components/ConciergePage';
import { Product } from './types';
import { BRAND_NAME, TAGLINE, MANIFESTO, COLLECTIONS, PRODUCTS } from './constants';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'concierge'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderHome = () => (
    <>
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero" className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
        </div>
        <div className="relative text-center z-10">
          <h1 className="text-7xl md:text-[12rem] font-serif tracking-tighter mb-4">{BRAND_NAME}</h1>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/40">{TAGLINE}</p>
        </div>
      </section>

      <section id="manifesto" className="py-40 px-6 text-center bg-[#0F0F0F]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif italic mb-10">"{MANIFESTO.title}"</h2>
          <p className="text-gray-400 font-light leading-relaxed text-lg">{MANIFESTO.body}</p>
        </div>
      </section>

      <section id="collections" className="py-20 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {COLLECTIONS.map((col) => (
          <div key={col.id} className="relative h-[80vh] group overflow-hidden cursor-pointer">
            <img src={col.image} className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <h3 className="text-3xl font-serif mb-2">{col.title}</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">{col.description}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="divide-y divide-white/5">
        {PRODUCTS.map((p, i) => (
          <ProductSection 
            key={p.id} 
            product={p} 
            reverse={i % 2 !== 0} 
            onViewDetails={(product) => setSelectedProduct(product)}
          />
        ))}
      </div>

      <AIConcierge />
    </>
  );

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar 
        onNavigateToConcierge={() => setCurrentPage('concierge')} 
        onNavigateHome={() => setCurrentPage('home')}
      />

      {currentPage === 'home' ? renderHome() : <ConciergePage onBack={() => setCurrentPage('home')} />}

      <SupportChat />
      
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      <footer className="py-20 px-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] text-gray-600 opacity-60">
        <div>&copy; {BRAND_NAME} Atelier {new Date().getFullYear()}</div>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Archive</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </footer>
    </div>
  );
};

export default App;
