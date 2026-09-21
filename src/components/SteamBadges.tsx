import React, { useState } from 'react';
import { Atom, Cpu, Laptop, Leaf, Sparkles, BookOpen } from 'lucide-react';
import { STEAM_DISCIPLINES } from '../data/eventData';

export const SteamBadges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6" />;
      case 'Pi':
        return <span className="text-xl font-bold font-serif">π</span>;
      case 'Leaf':
        return <Leaf className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-sky-900 text-white relative overflow-hidden">
      {/* Wave decoration top */}
      <div className="absolute -top-12 left-0 right-0 h-12 bg-white rounded-b-[50px] opacity-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-400/30">
            <Atom className="w-4 h-4" />
            Metodología Educativa Institucional
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-heading tracking-tight">
            Interdisciplina STEAM+ y Vocación Acuícola
          </h2>
          <p className="mt-2 text-sm sm:text-base text-sky-200">
            En la I.E. Técnica Acuícola de San Cristóbal integramos la ciencia aplicada, el diseño computacional y la conservación de nuestros recursos hídricos.
          </p>
        </div>

        {/* 5 STEAM+ Tabs / Circular buttons from poster */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {STEAM_DISCIPLINES.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 shadow-md ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 scale-105 shadow-amber-400/30 ring-4 ring-amber-300/40'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-slate-900 text-amber-400' : `${item.color} text-white`}`}>
                  {getIcon(item.icon)}
                </div>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Highlight Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className={`w-16 h-16 rounded-2xl ${STEAM_DISCIPLINES[activeTab].color} text-white flex items-center justify-center flex-shrink-0 shadow-lg`}>
              {getIcon(STEAM_DISCIPLINES[activeTab].icon)}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl sm:text-2xl font-black font-heading text-white">
                  {STEAM_DISCIPLINES[activeTab].name}
                </h3>
                <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-white/20 text-sky-200 font-bold">
                  {STEAM_DISCIPLINES[activeTab].sub}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base text-sky-100 leading-relaxed">
                {STEAM_DISCIPLINES[activeTab].detail}
              </p>
              <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs text-amber-300 font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Aplicado en talleres prácticos durante los dos días de la feria</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
