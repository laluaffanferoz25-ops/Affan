
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 md:px-10">
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-opacity duration-500"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white/40 hover:text-white transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        <div className="w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto">
          <span className="text-[10px] uppercase tracking-[0.6em] text-gray-500 mb-4">{product.collection}</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">{product.name}</h2>
          
          <p className="text-gray-400 text-sm md:text-base font-light italic leading-relaxed mb-10">
            "{product.description}"
          </p>

          <div className="grid grid-cols-2 gap-8 mb-10 border-t border-b border-white/5 py-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Composition</h4>
              <p className="text-xs uppercase tracking-wider">{product.fabric}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-600 mb-2">Palette</h4>
              <p className="text-xs uppercase tracking-wider">{product.colors.join(' / ')}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-serif">{product.price}</span>
            <button className="bg-white text-black px-12 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-gray-200 transition-colors">
              Acquire Piece
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
