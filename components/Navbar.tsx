
import React from 'react';
import { BRAND_NAME } from '../constants';

interface Props {
  onNavigateToConcierge: () => void;
  onNavigateHome: () => void;
}

const Navbar: React.FC<Props> = ({ onNavigateToConcierge, onNavigateHome }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference py-8 px-10 flex justify-between items-center text-white">
      <div 
        onClick={onNavigateHome}
        className="text-2xl font-serif tracking-[0.2em] font-light cursor-pointer"
      >
        {BRAND_NAME}
      </div>
      <div className="hidden md:flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">
        <button onClick={onNavigateHome} className="hover:opacity-100 transition-opacity uppercase tracking-[0.3em]">Collections</button>
        <button onClick={onNavigateHome} className="hover:opacity-100 transition-opacity uppercase tracking-[0.3em]">Manifesto</button>
        <button 
          onClick={onNavigateToConcierge}
          className="hover:opacity-100 transition-opacity uppercase tracking-[0.3em]"
        >
          Concierge
        </button>
      </div>
      <div className="text-[10px] uppercase tracking-[0.2em]">
        Paris / London
      </div>
    </nav>
  );
};

export default Navbar;
