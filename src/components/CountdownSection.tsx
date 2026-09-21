import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Sparkles, ExternalLink, ShieldCheck, Share2 } from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';

export const CountdownSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate live countdown to October 28, 2026 at 8:00 AM (local time)
  useEffect(() => {
    // Target event date: October 28, 2026 at 8:00 AM COT (UTC-5)
    // Or relative future date if past
    const targetDate = new Date("2026-10-28T08:00:00-05:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      let diff = targetDate - now;

      // If in the past, provide simulated time or cycle for demo
      if (diff < 0) {
        // Show remaining hours or days for preview
        diff = Math.max(0, diff);
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Inject user provided TickCounter script
  useEffect(() => {
    const scriptId = "tickcounter-sdk";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.tickcounter.com/static/js/loader.js";
      script.async = true;
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
      // Trigger tickcounter if already loaded
      if ((window as any).TickCounter && typeof (window as any).TickCounter.init === "function") {
        try {
          (window as any).TickCounter.init();
        } catch {
          // Ignore
        }
      }
    }
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Feria Maker - I.E. Técnica Acuícola",
        text: "¡Acompáñanos a la Feria Maker 2026! Ideas que se ven, proyectos que transforman. San Cristóbal, Bolívar.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Feria Maker 2026 - I.E. Técnica Acuícola");
    const details = encodeURIComponent(
      "Feria Maker: Ideas que se ven, proyectos que transforman.\nRobótica, Acuicultura, Innovación STEAM+ y Muestras Culturales.\nSede Principal I.E. Técnica Acuícola de San Cristóbal, Bolívar."
    );
    const location = encodeURIComponent("I.E. Técnica Acuícola de San Cristóbal, Bolívar, Colombia");
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261028T130000Z/20261029T200000Z&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contador" className="relative py-12 px-4 sm:px-6 lg:px-8 -mt-6 z-20">
      <div className="max-w-5xl mx-auto">
        {/* Container with Maker styling */}
        <div className="bg-white rounded-3xl border-4 border-[#0B3B60] shadow-2xl overflow-hidden relative">
          {/* Top Banner Ribbon */}
          <div className="bg-gradient-to-r from-[#0B3B60] via-[#0284C7] to-[#0B3B60] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-amber-400">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-amber-400 text-slate-900 rounded-xl shadow font-bold text-sm flex items-center gap-1.5 animate-pulse">
                <Sparkles className="w-4 h-4 text-slate-900" />
                EN VIVO
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading tracking-wide uppercase">
                  Cuenta Regresiva Oficial
                </h3>
                <p className="text-xs text-sky-100 hidden sm:block">
                  Cada segundo nos acerca a la gran cita tecnológica y cultural en San Cristóbal
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="btn-add-calendar"
                onClick={handleAddToCalendar}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-amber-400 text-slate-900 hover:bg-amber-300 transition-colors shadow-sm maker-btn-shadow"
                title="Agregar al Calendario de Google"
              >
                <Calendar className="w-3.5 h-3.5" />
                Agendar Evento
              </button>
              <button
                id="btn-share-event"
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors border border-white/20"
                title="Compartir enlace del evento"
              >
                <Share2 className="w-3.5 h-3.5" />
                {copied ? "¡Copiado!" : "Compartir"}
              </button>
            </div>
          </div>

          {/* Main Embedded Widget Container */}
          <div className="p-4 sm:p-8 bg-gradient-to-b from-sky-50/70 to-white">
            {/* The Tickcounter user-requested embedded anchor & iframe loader */}
            <div ref={containerRef} className="relative w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner p-1 sm:p-2 border-2 border-sky-200/80">
              
              {/* Direct TickCounter iframe embed to guarantee instant 100% interactive display */}
              <div className="relative w-full aspect-[4/1] min-h-[140px] sm:min-h-[190px] rounded-xl overflow-hidden bg-slate-950">
                <iframe
                  id="tickcounter-iframe"
                  src="https://www.tickcounter.com/widget/countdown/11673977"
                  className="w-full h-full absolute inset-0 border-0 rounded-xl"
                  title="FERIA MAKER Countdown"
                  loading="lazy"
                  allowFullScreen
                />
                
                {/* User provided original snippet element */}
                <div className="sr-only pointer-events-none" aria-hidden="true">
                  <a
                    data-type="countdown"
                    data-id="11673977"
                    className="tickcounter"
                    style={{
                      display: "block",
                      left: 0,
                      width: "100%",
                      height: 0,
                      position: "relative",
                      paddingBottom: "25%",
                      margin: "0 auto",
                    }}
                    title="FERIA MAKER"
                    href="//www.tickcounter.com/"
                  >
                    FERIA MAKER
                  </a>
                </div>
              </div>

              {/* Verified Badge below widget */}
              <div className="mt-2.5 px-3 py-1.5 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium text-slate-200">
                    Contador sincronizado con la hora oficial de Colombia (GMT-5)
                  </span>
                </div>
                <a
                  href="https://www.tickcounter.com/countdown/11673977/feria-maker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 hover:text-sky-200 underline inline-flex items-center gap-1 text-[11px]"
                >
                  Abrir contador en TickCounter
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Time Cards - Synchronized Companion Preview */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-blue-200 shadow-sm text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-[#0B3B60] font-heading">
                  {EVENT_INFO.dates.days[0]}
                </div>
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-1">
                  Martes - Gran Inauguración
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-emerald-200 shadow-sm text-center">
                <div className="text-2xl sm:text-4xl font-extrabold text-emerald-600 font-heading">
                  {EVENT_INFO.dates.days[1]}
                </div>
                <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mt-1">
                  Miércoles - Premiación & Cierre
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-amber-200 shadow-sm text-center">
                <div className="text-xl sm:text-3xl font-extrabold text-amber-600 font-heading flex items-center justify-center gap-1">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                  8:00 AM
                </div>
                <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mt-1">
                  Apertura de Puertas
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 border-2 border-purple-200 shadow-sm text-center">
                <div className="text-xl sm:text-3xl font-extrabold text-purple-700 font-heading flex items-center justify-center gap-1">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  3:00 PM
                </div>
                <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider mt-1">
                  Cierre de Jornada
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
