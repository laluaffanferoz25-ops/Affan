
import React from 'react';
import { BRAND_NAME } from '../constants';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-8 px-10 flex justify-between items-center text-white">
      <div className="text-2xl font-serif tracking-[0.2em] font-light cursor-pointer">
        {BRAND_NAME}
      </div>
      <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">
        <a href="#collections" className="hover:opacity-100 transition-opacity">Collections</a>
        <a href="#manifesto" className="hover:opacity-100 transition-opacity">Manifesto</a>
        <a href="#concierge" className="hover:opacity-100 transition-opacity">Concierge</a>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em]">
        Paris / London
      </div>
    </nav>
  );
};

export default Navbar;
