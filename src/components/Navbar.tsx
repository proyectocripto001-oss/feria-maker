import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Sparkles, Clock, MapPin, Share2, Facebook } from 'lucide-react';
import { SchoolCrest } from './SchoolCrest';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-sky-100' 
        : 'bg-white/80 backdrop-blur-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <SchoolCrest className="w-10 h-12 sm:w-12 sm:h-14 flex-shrink-0 group-hover:scale-105 transition-transform" />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-black text-sm sm:text-base tracking-tight text-[#0B3B60] font-heading leading-tight">
                FERIA MAKER
              </span>
              <span className="px-1.5 py-0.2 bg-amber-400 text-slate-950 font-black text-[10px] rounded uppercase">
                2026
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-slate-500 font-semibold block leading-tight">
              I.E. Técnica Acuícola • San Cristóbal
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-700">
          <a href="#" className="hover:text-[#0284C7] transition">
            Inicio
          </a>
          <a href="#contador" className="hover:text-[#0284C7] transition flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-600" />
            Contador
          </a>
          <a href="#facebook" className="hover:text-[#1877F2] transition flex items-center gap-1.5 text-blue-700 font-bold">
            <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
            Facebook Oficial
          </a>
          <a
            href="#contador"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold shadow-sm hover:from-orange-600 hover:to-amber-600 transition maker-btn-shadow flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            28 y 29 de Octubre 2026
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="https://www.facebook.com/share/18CLTwQgfU/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-sm flex items-center gap-1"
          >
            <Facebook className="w-3 h-3" />
            FB
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2 text-sm font-bold text-slate-800">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-sky-50"
          >
            Inicio
          </a>
          <a
            href="#contador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-sky-50"
          >
            Contador en vivo
          </a>
          <a
            href="#facebook"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-sky-50 text-[#1877F2] flex items-center gap-2"
          >
            <Facebook className="w-4 h-4" />
            Canal de Facebook Oficial
          </a>
        </div>
      )}
    </nav>
  );
};
