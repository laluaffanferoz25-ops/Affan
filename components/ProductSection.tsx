
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product;
  reverse?: boolean;
}

const ProductSection: React.FC<Props> = ({ product, reverse }) => {
  return (
    <section className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} min-h-screen bg-[#0F0F0F]`}>
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-24 py-16 md:py-0">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-6">{product.collection}</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8">{product.name}</h2>
        <p className="text-gray-400 leading-relaxed text-lg mb-10 max-w-md font-light italic">
          "{product.description}"
        </p>
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-widest text-gray-500">Fabric</span>
            <span className="text-sm font-medium">{product.fabric}</span>
          </div>
          <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-widest text-gray-500">Palette</span>
            <div className="flex space-x-2">
              {product.colors.map(c => (
                <span key={c} className="text-[10px] uppercase tracking-tighter text-gray-300 border border-white/20 px-2 py-0.5">{c}</span>
              ))}
            </div>
          </div>
          <div className="pt-8">
            <div className="text-2xl font-serif mb-6">{product.price}</div>
            <button className="w-full md:w-auto border border-white/40 hover:bg-white hover:text-black transition-all px-12 py-4 text-[10px] uppercase tracking-[0.3em]">
              Acquire Piece
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
