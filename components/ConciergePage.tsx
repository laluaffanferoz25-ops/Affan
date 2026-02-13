
import React, { useState } from 'react';
import { ATELIER_DETAILS } from '../constants';

interface Props {
  onBack: () => void;
}

const ConciergePage: React.FC<Props> = ({ onBack }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', location: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">
        <div className="text-center max-w-xl animate-in fade-in duration-1000">
          <h2 className="text-4xl font-serif mb-6 italic">Inquiry Received</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10">
            The Atelier has noted your presence. A member of our concierge team will reach out to facilitate your request shortly.
          </p>
          <button 
            onClick={onBack}
            className="text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-2 hover:border-white transition-all"
          >
            Return to Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-40 pb-20 px-6 md:px-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        <div className="space-y-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.6em] text-gray-600 mb-8 block">The Protocol</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Bespoke Concierge</h1>
            <p className="text-gray-400 font-light leading-relaxed text-lg italic max-w-md">
              "Entry into the world of VARENNE begins with a conversation. We invite you to share your details for a tailored acquisition experience."
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Personnel</h4>
              <div className="space-y-2">
                {ATELIER_DETAILS.personnel.map(p => (
                  <p key={p.name} className="text-lg font-serif italic text-white/80">{p.name} — <span className="text-[10px] uppercase tracking-widest not-italic opacity-40">{p.role}</span></p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-4">Location</h4>
              <p className="text-lg font-serif italic text-white/80">{ATELIER_DETAILS.address}</p>
              <p className="text-lg font-serif italic text-white/80">{ATELIER_DETAILS.secondaryAddress}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-600 block mb-2 transition-colors group-focus-within:text-white">First Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-all text-xl font-light font-serif italic"
                />
              </div>
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-600 block mb-2 transition-colors group-focus-within:text-white">Last Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-all text-xl font-light font-serif italic"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-600 block mb-2 transition-colors group-focus-within:text-white">Current Location</label>
              <input 
                type="text" 
                required
                value={formData.location}
                onChange={e => setFormData({...formData, location: e.target.value})}
                placeholder="City / Country"
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-all text-xl font-light font-serif italic placeholder:text-gray-900"
              />
            </div>

            <div className="relative group">
              <label className="text-[9px] uppercase tracking-[0.3em] text-gray-600 block mb-2 transition-colors group-focus-within:text-white">Nature of Inquiry (Optional)</label>
              <textarea 
                rows={1}
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-white/40 transition-all text-xl font-light font-serif italic resize-none"
              />
            </div>

            <div className="pt-10 flex flex-col md:flex-row items-center gap-10">
              <button 
                type="submit"
                className="w-full md:w-auto bg-white text-black px-16 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-gray-200 transition-colors"
              >
                Submit Inquiry
              </button>
              <button 
                type="button"
                onClick={onBack}
                className="text-[9px] uppercase tracking-[0.3em] text-gray-600 hover:text-white transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ConciergePage;
