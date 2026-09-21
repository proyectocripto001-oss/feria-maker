import React from 'react';
import { Fish, Heart, MapPin, Mail, Phone, Calendar, ArrowUp, Facebook, ExternalLink } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import { SchoolCrest } from './SchoolCrest';

export const FooterWaves: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#082846] text-white pt-20 pb-10 overflow-hidden">
      {/* Decorative Layered Ocean Waves matching poster artwork */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-full">
        <svg 
          viewBox="0 0 1440 180" 
          className="w-full h-24 sm:h-36 object-cover text-[#082846]" 
          preserveAspectRatio="none" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Wave 1: Sky Blue */}
          <path 
            d="M0,60 C240,120 480,20 720,80 C960,140 1200,40 1440,80 L1440,180 L0,180 Z" 
            fill="#0284C7" 
            opacity="0.3" 
          />
          {/* Wave 2: Aqua / Turquoise */}
          <path 
            d="M0,90 C320,30 640,140 960,60 C1200,100 1360,40 1440,70 L1440,180 L0,180 Z" 
            fill="#06B6D4" 
            opacity="0.5" 
          />
          {/* Wave 3: Deep Marine Navy (Connecting to footer) */}
          <path 
            d="M0,110 C180,60 360,130 540,90 C720,50 900,120 1080,80 C1260,40 1380,90 1440,100 L1440,180 L0,180 Z" 
            fill="#082846" 
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner with Signature Slogan from Poster */}
        <div className="text-center mb-16">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/10 backdrop-blur-md px-8 py-4 rounded-3xl border border-white/20 shadow-xl max-w-3xl mx-auto">
            {/* Leaping fish vector */}
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-900 flex items-center justify-center flex-shrink-0 shadow">
              <Fish className="w-7 h-7" />
            </div>

            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl md:text-3xl font-black font-marker text-white tracking-wide">
                "{EVENT_INFO.bottomMotto}"
              </p>
            </div>
          </div>
        </div>

        {/* 3-Column Footer Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/15">
          
          {/* Col 1: Institutional Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <SchoolCrest className="w-16 h-20 flex-shrink-0" />
              <div>
                <h3 className="text-base font-extrabold text-white font-heading leading-tight">
                  {EVENT_INFO.institution}
                </h3>
                <p className="text-xs text-sky-300 font-bold">
                  {EVENT_INFO.subInstitution}
                </p>
                <p className="text-[11px] text-slate-300 italic mt-0.5">
                  Fundada en 1975 • "Un esfuerzo hecho realidad"
                </p>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>
                <a href="#" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <span>• Presentación principal</span>
                </a>
              </li>
              <li>
                <a href="#contador" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <span>• Cuenta regresiva en vivo</span>
                </a>
              </li>
              <li>
                <a href="#facebook" className="hover:text-amber-300 transition flex items-center gap-1.5">
                  <span>• Canal de Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/18CLTwQgfU/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sky-300 hover:text-amber-300 transition flex items-center gap-1.5 font-semibold mt-1"
                >
                  <Facebook className="w-3.5 h-3.5 text-blue-400" />
                  <span>Página Oficial (Facebook)</span>
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Event Coordinates */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-heading">
              Sede & Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Sede Principal:</strong> San Cristóbal, Bolívar - Colombia
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>28 y 29 de octubre de 2026 • 8:00 AM - 3:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition border border-white/20"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                Volver arriba
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Feria Maker - Institución Educativa Técnica Acuícola de San Cristóbal, Bolívar. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            Desarrollado con dedicación para la comunidad educativa técnica del Caribe
          </p>
        </div>

      </div>
    </footer>
  );
};
