import React from 'react';
import { Cog, Bot, Fish, Users, Sparkles, ChevronRight } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

interface FourPillarsProps {
  onSelectCategory?: (category: string) => void;
}

export const FourPillars: React.FC<FourPillarsProps> = ({ onSelectCategory }) => {
  return (
    <section id="actividades" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50/40 to-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Wavy Banner: "Durante la feria podrás disfrutar de:" */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block relative">
            <div className="bg-[#0B3B60] text-white px-8 py-3.5 rounded-full shadow-lg border-2 border-amber-400 transform -rotate-1 hover:rotate-0 transition-transform">
              <h2 className="text-lg sm:text-2xl font-black tracking-wide font-heading">
                Durante la feria podrás disfrutar de:
              </h2>
            </div>
            {/* Sparkle icons */}
            <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 shadow">
              <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
          </div>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
            Una experiencia pedagógica transformadora donde estudiantes de San Cristóbal comparten su talento con toda la comunidad.
          </p>
        </div>

        {/* 4 Feature Circles / Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Innovación & Emprendimiento */}
          <div className="bg-white rounded-3xl p-6 border-2 border-blue-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-lg mb-5 border-4 border-white group-hover:scale-110 transition-transform">
              <Cog className="w-10 h-10 group-hover:rotate-90 transition-transform duration-500" />
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
              Área de Innovación
            </span>
            <h3 className="text-lg font-black text-[#0B3B60] font-heading leading-tight mb-2">
              Proyectos de innovación y emprendimiento estudiantil
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
              Modelos de negocio sostenibles, productos ecológicos procesados y soluciones comunitarias creadas por los estudiantes.
            </p>
            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory('emprendimiento')}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition"
              >
                Ver proyectos de esta área
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Card 2: Robótica y Tecnología */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-lg mb-5 border-4 border-white group-hover:scale-110 transition-transform">
              <Bot className="w-10 h-10 group-hover:bounce transition-transform" />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
              Área de Tecnología
            </span>
            <h3 className="text-lg font-black text-slate-900 font-heading leading-tight mb-2">
              Demostraciones de robótica, electrónica y tecnología
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
              Vehículos autónomos programados con Arduino, brazos electromecánicos y pistas de desafíos robóticos en tiempo real.
            </p>
            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory('robotica')}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition"
              >
                Ver proyectos de esta área
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Card 3: Acuicultura & Medio Ambiente */}
          <div className="bg-white rounded-3xl p-6 border-2 border-orange-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-lg mb-5 border-4 border-white group-hover:scale-110 transition-transform">
              <Fish className="w-10 h-10 group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold mb-2">
              Especialidad Acuícola
            </span>
            <h3 className="text-lg font-black text-[#0B3B60] font-heading leading-tight mb-2">
              Iniciativas en torno a la acuicultura y el cuidado del medio ambiente
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
              Sistemas de cría y reproducción piscícola, control de calidad del agua y proyectos de reforestación y conservación fluvial.
            </p>
            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory('acuicultura')}
                className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-800 transition"
              >
                Ver proyectos de esta área
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Card 4: Cultura & Muestras */}
          <div className="bg-white rounded-3xl p-6 border-2 border-purple-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white flex items-center justify-center shadow-lg mb-5 border-4 border-white group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 group-hover:scale-105 transition-transform" />
            </div>
            <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2">
              Área Social y Cultural
            </span>
            <h3 className="text-lg font-black text-purple-900 font-heading leading-tight mb-2">
              Exposiciones, muestras culturales y mucho más
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-4 flex-grow">
              Presentaciones artísticas, ritmos caribeños, stands de bilingüismo y gastronomía tradicional de nuestra tierra.
            </p>
            {onSelectCategory && (
              <button
                onClick={() => onSelectCategory('cultura')}
                className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 transition"
              >
                Ver proyectos de esta área
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* "¡Te esperamos!" Stamp Brush from Poster */}
        <div className="mt-12 flex justify-center">
          <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 text-slate-950 px-8 py-3.5 rounded-2xl shadow-xl border-2 border-amber-500 transform rotate-1 hover:scale-105 transition">
            <span className="text-2xl sm:text-3xl font-black font-marker tracking-wide">
              {EVENT_INFO.invitationNote}
            </span>
            <span className="text-xs sm:text-sm font-extrabold bg-[#0B3B60] text-white px-3 py-1 rounded-lg">
              Entrada Libre para toda la familia
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
