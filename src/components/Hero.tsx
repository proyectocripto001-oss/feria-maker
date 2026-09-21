import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  Lightbulb, 
  Globe, 
  Atom, 
  Cpu, 
  Laptop, 
  Pi, 
  Leaf, 
  ArrowDown, 
  ExternalLink,
  Bot,
  Cog,
  Wrench,
  Zap,
  Fish
} from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import { SchoolCrest } from './SchoolCrest';

export const Hero: React.FC = () => {
  return (
    <header className="relative overflow-hidden pt-4 pb-12 sm:pb-20 bg-gradient-to-b from-sky-400 via-sky-300 to-sky-100/60">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sunburst rays in upper area */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-yellow-300/30 to-transparent blur-3xl rounded-full" />
        
        {/* Floating tech & maker floating chips */}
        <div className="absolute top-20 left-6 opacity-20 text-blue-900 animate-pulse">
          <Cog className="w-16 h-16 animate-spin" style={{ animationDuration: '30s' }} />
        </div>
        <div className="absolute top-48 right-8 opacity-25 text-emerald-800">
          <Fish className="w-16 h-16" />
        </div>
        <div className="absolute top-72 left-12 opacity-20 text-orange-600">
          <Cpu className="w-12 h-12" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row: School Branding */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 sm:p-4 border-2 border-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 text-center md:text-left">
            <SchoolCrest className="w-16 h-20 sm:w-20 sm:h-24 flex-shrink-0" />
            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-black text-[#0B3B60] tracking-tight uppercase font-heading leading-tight">
                {EVENT_INFO.institution}
              </h2>
              <div className="text-xs sm:text-sm font-extrabold text-[#0284C7] tracking-wider uppercase">
                {EVENT_INFO.subInstitution}
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 italic font-medium">
                "{EVENT_INFO.slogan}"
              </p>
            </div>
          </div>

          {/* Slogan Banner Tag */}
          <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 px-3.5 py-2 rounded-xl shadow-sm border border-yellow-500/30">
            <Sparkles className="w-4 h-4 text-slate-900 flex-shrink-0 animate-bounce" />
            <span className="text-xs sm:text-sm font-extrabold font-heading leading-tight">
              {EVENT_INFO.tagline}
            </span>
          </div>
        </div>

        {/* Main Event Title Area */}
        <div className="mt-8 sm:mt-12 text-center">
          {/* "FERIA" script text with sunshine sparks */}
          <div className="inline-flex items-center justify-center gap-2 relative">
            {/* Sunburst sparkles */}
            <span className="text-amber-400 text-2xl sm:text-4xl animate-pulse select-none">✨</span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-wider text-white drop-shadow-[0_4px_6px_rgba(11,59,96,0.6)] font-heading">
              FERIA
            </h1>
            <span className="text-amber-400 text-2xl sm:text-4xl animate-pulse select-none">✨</span>
          </div>

          {/* 3D "MAKER" Lettering as seen in the official poster */}
          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-4 select-none">
            {/* Letter M: Blue with Gear */}
            <div 
              className="relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-blue-500 to-[#0B3B60] text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#062238] border-2 border-blue-400 transform hover:-translate-y-1 transition group"
              title="M: Creatividad & Mecánica"
            >
              <span>M</span>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition">
                <Cog className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
              </div>
            </div>

            {/* Letter A: Green with Lightbulb */}
            <div 
              className="relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-lime-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#065f46] border-2 border-lime-300 transform hover:-translate-y-1 transition group"
              title="A: Innovación & Pensamiento Crítico"
            >
              <span>A</span>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition">
                <Lightbulb className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
              </div>
            </div>

            {/* Letter K: Orange/Yellow with Circuit Traces */}
            <div 
              className="relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-amber-400 to-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#9a3412] border-2 border-amber-300 transform hover:-translate-y-1 transition group"
              title="K: Conocimiento & Conexiones Electrónicas"
            >
              <span>K</span>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition">
                <Zap className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
              </div>
            </div>

            {/* Letter E: Purple with Wrench */}
            <div 
              className="relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-fuchsia-500 to-purple-800 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#581c87] border-2 border-fuchsia-300 transform hover:-translate-y-1 transition group"
              title="E: Experimentación & Herramientas"
            >
              <span>E</span>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition">
                <Wrench className="w-7 h-7 sm:w-12 sm:h-12 text-white" />
              </div>
            </div>

            {/* Letter R: Cyan/Teal with Robot */}
            <div 
              className="relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-cyan-400 to-teal-700 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#134e4a] border-2 border-cyan-300 transform hover:-translate-y-1 transition group"
              title="R: Robótica & Futuro"
            >
              <span>R</span>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 group-hover:opacity-75 transition">
                <Bot className="w-8 h-8 sm:w-14 sm:h-14 text-white" />
              </div>
            </div>
          </div>

          {/* Slogan underneath title */}
          <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl font-black text-[#0B3B60] tracking-tight font-heading">
            {EVENT_INFO.motto}
          </p>
        </div>

        {/* 2-Column Balanced Layout: Left Details (Fecha, Hora, Lugar) & Right STEAM+ Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Event Key Details Cards (Fecha, Hora, Lugar) */}
          <div className="md:col-span-6 space-y-3.5 flex flex-col justify-between">
            {/* Fecha Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border-2 border-[#0B3B60] shadow-md hover:shadow-lg transition-shadow flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow maker-btn-shadow">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Fecha del Evento:
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#0B3B60] font-heading leading-tight">
                  {EVENT_INFO.dates.display}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dos días dedicados al ingenio y la ciencia
                </p>
              </div>
            </div>

            {/* Hora Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border-2 border-emerald-600 shadow-md hover:shadow-lg transition-shadow flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow maker-btn-shadow">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                  Horario de Atención:
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 font-heading leading-tight">
                  {EVENT_INFO.hours.display}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Jornada continua con actividades simultáneas
                </p>
              </div>
            </div>

            {/* Lugar Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border-2 border-orange-500 shadow-md hover:shadow-lg transition-shadow flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow maker-btn-shadow">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block">
                  Lugar & Sede:
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-[#0B3B60] font-heading leading-tight">
                  {EVENT_INFO.location.name}
                </h4>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">
                  {EVENT_INFO.location.municipality} - {EVENT_INFO.location.department}
                </p>
                <a
                  href={EVENT_INFO.location.googleMapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-bold mt-1.5 underline"
                >
                  Ver en Google Maps
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The 3 Floating Pillars from Poster (Aprender Haciendo, Bilingüe, STEAM+) */}
          <div className="md:col-span-6 space-y-3.5 flex flex-col justify-between">
            {/* Pillar 1: Aprender Haciendo */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4 shadow-lg border-2 border-amber-300 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-white">
                  <Lightbulb className="w-5 h-5 text-yellow-200" />
                </div>
                <div>
                  <h4 className="font-black text-base sm:text-lg tracking-wide uppercase font-heading">
                    APRENDER HACIENDO
                  </h4>
                  <p className="text-[11px] text-amber-100 font-medium">
                    Experimentación activa y prototipado
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Bilingüe */}
            <div className="bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-2xl p-4 shadow-lg border-2 border-sky-300 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-white">
                  <Globe className="w-5 h-5 text-sky-200" />
                </div>
                <div>
                  <h4 className="font-black text-base sm:text-lg tracking-wide uppercase font-heading">
                    BILINGÜE
                  </h4>
                  <p className="text-[11px] text-sky-100 font-medium">
                    Habilidades globales en inglés y español
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Interdisciplina STEAM+ */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-lg border-2 border-emerald-300 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 text-white">
                  <Atom className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <h4 className="font-black text-base sm:text-lg tracking-wide uppercase font-heading">
                    INTERDISCIPLINA STEAM+
                  </h4>
                  <p className="text-[11px] text-emerald-100 font-medium">
                    Ciencia, Robótica, Matemáticas y Arte
                  </p>
                </div>
              </div>

              {/* Circular STEAM+ Icons Row from Poster */}
              <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between px-1">
                <div className="w-7 h-7 rounded-full bg-blue-500/80 flex items-center justify-center text-white" title="Ciencia">
                  <Atom className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-500/80 flex items-center justify-center text-white" title="Tecnología">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-cyan-500/80 flex items-center justify-center text-white" title="Ingeniería">
                  <Laptop className="w-3.5 h-3.5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-500/80 flex items-center justify-center text-white" title="Matemáticas">
                  <span className="font-bold text-xs">π</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-lime-500/80 flex items-center justify-center text-white" title="Medio Ambiente">
                  <Leaf className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Nav Anchor */}
        <div className="mt-8 text-center">
          <a
            href="#contador"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#0B3B60] font-bold text-sm shadow-md hover:shadow-lg transition maker-btn-shadow border border-white"
          >
            <span>Ver cuenta regresiva en vivo</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>

      </div>
    </header>
  );
};
