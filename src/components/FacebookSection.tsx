import React, { useState } from 'react';
import { Facebook, ExternalLink, Video, Camera, Bell, CheckCircle2, Share2 } from 'lucide-react';
import { SchoolCrest } from './SchoolCrest';

export const FacebookSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const facebookUrl = 'https://www.facebook.com/share/18CLTwQgfU/';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(facebookUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="facebook" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-sky-50/50 to-white relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Facebook className="w-4 h-4 text-blue-600" />
            Canal Oficial en Facebook
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B3B60] font-heading tracking-tight">
            Sigue la Feria Maker en Redes Sociales
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Conéctate con la página oficial de la Institución Educativa Técnico Acuícola de San Cristóbal para seguir transmisiones en vivo, galerías de fotos y noticias del evento.
          </p>
        </div>

        {/* Main Profile Card - Clean & Centered */}
        <div className="max-w-2xl mx-auto">
          {/* Official Profile Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-sky-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-600 p-2.5 shadow-md flex items-center justify-center flex-shrink-0">
                <SchoolCrest className="w-full h-full text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                    I.E. Técnico Acuícola de San Cristóbal
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-600 block mt-0.5">
                  @ietecnicaacuicola • Página Oficial
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  San Cristóbal, Bolívar • Educación Rural STEAM+
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="py-6 space-y-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Transmisiones en Vivo</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Transmisión en directo de la inauguración, ponencias y premiación el 28 y 29 de octubre.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Galería de Proyectos STEAM+</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Fotografías y videos de los stands de robótica, acuicultura e innovación agropecuaria.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Avisos y Novedades</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Información en tiempo real para estudiantes, padres de familia y visitantes.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#1877F2] hover:bg-blue-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <Facebook className="w-4 h-4" />
                Visitar Página en Facebook
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors"
                title="Copiar enlace oficial"
              >
                <Share2 className="w-4 h-4 text-slate-500" />
                {copied ? '¡Copiado!' : 'Copiar Enlace'}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
