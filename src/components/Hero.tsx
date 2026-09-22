import React, { useState } from 'react';
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
  Fish,
  BookOpen,
  GraduationCap
} from 'lucide-react';
import { EVENT_INFO } from '../data/eventData';
import { SchoolCrest } from './SchoolCrest';

export const Hero: React.FC = () => {
  // Interactive state for the pictogram badges
  const [isBulbOn, setIsBulbOn] = useState(true);
  const [gearSpeed, setGearSpeed] = useState<number>(1); // 0: Pausa, 1: 1x, 2: 2x, 3: Turbo
  const [knowledgeLevel, setKnowledgeLevel] = useState<number>(1); // 0: Reposo, 1: Libro Abierto / Estudio, 2: ¡Sabiduría & Maestría STEAM!
  const [wrenchLevel, setWrenchLevel] = useState<number>(1); // 0: Reposo, 1: Calibrado 10mm, 2: ¡Torque Máximo 100%!
  const [robotLevel, setRobotLevel] = useState<number>(1); // 0: Standby, 1: Sensores Activos, 2: ¡Autonomía Total STEAM!
  const [activeBadge, setActiveBadge] = useState<string | null>('A');
  const [bulbSparkle, setBulbSparkle] = useState(false);
  const [gearBoostAnim, setGearBoostAnim] = useState(false);
  const [knowledgeSparkle, setKnowledgeSparkle] = useState(false);
  const [wrenchWobble, setWrenchWobble] = useState(false);
  const [robotBeepAnim, setRobotBeepAnim] = useState(false);

  const GEAR_SPEED_CLASSES = [
    '',
    'animate-[spin_6s_linear_infinite]',
    'animate-[spin_2s_linear_infinite]',
    'animate-[spin_0.6s_linear_infinite]',
  ];

  const GEAR_LABELS = [
    'En Reposo (Pausa)',
    'Marcha 1x (Normal)',
    'Marcha 2x (Acelerado)',
    '¡Marcha 3x (Turbo STEAM!) ⚡',
  ];

  const KNOWLEDGE_LABELS = [
    'Libro Cerrado (En Pausa)',
    'Estudio & Lectura Activa (STEAM)',
    '¡Maestría & Sabiduría Maker! 🎓✨',
  ];

  const WRENCH_LABELS = [
    'En Caja de Herramientas (Reposo)',
    'Calibración y Ajuste (10mm)',
    '¡Torque Máximo Reforzado (100%)! 🛠️',
  ];

  const ROBOT_LABELS = [
    'En Modo Reposo / Standby',
    'Sensores & Telemetría Activa (Acuicultura 4.0)',
    '¡Autonomía Total & Algoritmo Maker Activo! 🤖🚀',
  ];

  const MAKER_MEANINGS: Record<string, { letter: string; word: string; subtitle: string; color: string; bgBadge: string; border: string }> = {
    M: {
      letter: 'M',
      word: 'Mecánica',
      subtitle: 'Diseño & Prototipos',
      color: 'text-blue-900',
      bgBadge: 'bg-blue-600',
      border: 'border-blue-400',
    },
    A: {
      letter: 'A',
      word: 'Aprender',
      subtitle: 'Ideas & Creatividad',
      color: 'text-emerald-900',
      bgBadge: 'bg-emerald-600',
      border: 'border-emerald-400',
    },
    K: {
      letter: 'K',
      word: 'Knowledge',
      subtitle: 'Conocimiento & Sabiduría',
      color: 'text-amber-900',
      bgBadge: 'bg-amber-500',
      border: 'border-amber-400',
    },
    E: {
      letter: 'E',
      word: 'Experimentar',
      subtitle: 'Herramientas & Ensamble',
      color: 'text-purple-900',
      bgBadge: 'bg-purple-600',
      border: 'border-purple-400',
    },
    R: {
      letter: 'R',
      word: 'Robótica',
      subtitle: 'Programación & Futuro',
      color: 'text-teal-900',
      bgBadge: 'bg-teal-600',
      border: 'border-teal-400',
    },
  };

  // Gentle synthesized audio feedback (Web Audio API)
  const playInteractiveSound = (type: 'bulb' | 'gear' | 'knowledge' | 'wrench' | 'bot', stateOn: boolean, level = 1) => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      if (type === 'bulb') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(stateOn ? 523.25 : 392, ctx.currentTime); // C5 or G4
        osc.frequency.exponentialRampToValueAtTime(stateOn ? 1046.5 : 261.63, ctx.currentTime + 0.18); // C6
      } else if (type === 'gear') {
        // Mechanical ratchet click frequency based on gear speed level
        const gearFreqs = [240, 440, 660, 990];
        const baseFreq = gearFreqs[level] || 440;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, ctx.currentTime + 0.09);
      } else if (type === 'knowledge') {
        // Gentle, uplifting academic chime / harp-like arpeggio notes for knowledge
        osc.type = 'sine';
        const startFreq = level === 2 ? 659.25 : level === 1 ? 523.25 : 349.23; // E5, C5, F4
        const peakFreq = level === 2 ? 1318.5 : 1046.5; // E6 or C6
        osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(peakFreq, ctx.currentTime + 0.16);
      } else if (type === 'wrench') {
        // Mechanical ratchet metallic strike and wrench clink
        osc.type = 'square';
        const baseFreq = level === 2 ? 784 : 523.25; // G5 or C5
        osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, ctx.currentTime + 0.06);
        osc.frequency.setValueAtTime(baseFreq * 1.1, ctx.currentTime + 0.07);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.1, ctx.currentTime + 0.14);
      } else if (type === 'bot') {
        // Futuristic R2D2 style multi-tone chirp & robotic frequency hop
        osc.type = 'sine';
        const baseFreq = level === 2 ? 880 : level === 1 ? 587.33 : 330; // A5, D5 or E4
        osc.frequency.setValueAtTime(baseFreq, ctx.currentTime);
        osc.frequency.setValueAtTime(baseFreq * 1.33, ctx.currentTime + 0.04);
        osc.frequency.setValueAtTime(baseFreq * 1.66, ctx.currentTime + 0.09);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 2.2, ctx.currentTime + 0.18);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      }

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      const soundDuration = (type === 'knowledge' && level === 2) ? 0.22 : 0.16;
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + soundDuration);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + soundDuration);
    } catch {
      // Gracefully ignore if audio is disabled by browser
    }
  };

  const toggleLightbulb = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextState = !isBulbOn;
    setIsBulbOn(nextState);
    setActiveBadge('A');
    setBulbSparkle(true);
    setTimeout(() => setBulbSparkle(false), 700);
    playInteractiveSound('bulb', nextState);
  };

  const cycleGearSpeed = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextSpeed = (gearSpeed + 1) % 4; // Cycles: 1 -> 2 -> 3 -> 0 -> 1
    setGearSpeed(nextSpeed);
    setActiveBadge('M');
    setGearBoostAnim(true);
    setTimeout(() => setGearBoostAnim(false), 400);
    playInteractiveSound('gear', nextSpeed > 0, nextSpeed);
  };

  const cycleKnowledgeLevel = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextLevel = (knowledgeLevel + 1) % 3; // Cycles: 1 -> 2 -> 0 -> 1
    setKnowledgeLevel(nextLevel);
    setActiveBadge('K');
    setKnowledgeSparkle(true);
    setTimeout(() => setKnowledgeSparkle(false), 500);
    playInteractiveSound('knowledge', nextLevel > 0, nextLevel);
  };

  const cycleWrenchLevel = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextLevel = (wrenchLevel + 1) % 3; // Cycles: 1 -> 2 -> 0 -> 1
    setWrenchLevel(nextLevel);
    setActiveBadge('E');
    setWrenchWobble(true);
    setTimeout(() => setWrenchWobble(false), 450);
    playInteractiveSound('wrench', nextLevel > 0, nextLevel);
  };

  const cycleRobotLevel = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextLevel = (robotLevel + 1) % 3; // Cycles: 1 -> 2 -> 0 -> 1
    setRobotLevel(nextLevel);
    setActiveBadge('R');
    setRobotBeepAnim(true);
    setTimeout(() => setRobotBeepAnim(false), 500);
    playInteractiveSound('bot', nextLevel > 0, nextLevel);
  };

  const handleBadgeClick = (letter: string, type: 'gear' | 'knowledge' | 'wrench' | 'bot', e: React.MouseEvent) => {
    e.stopPropagation();
    if (letter === 'M') {
      cycleGearSpeed(e);
    } else if (letter === 'K') {
      cycleKnowledgeLevel(e);
    } else if (letter === 'E') {
      cycleWrenchLevel(e);
    } else if (letter === 'R') {
      cycleRobotLevel(e);
    } else {
      setActiveBadge(activeBadge === letter ? null : letter);
      playInteractiveSound(type, true);
    }
  };
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

          {/* 3D "MAKER" Lettering as seen in the official poster with interactive front pictogram badges */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2.5 sm:gap-4 select-none relative">
            
            {/* Letter M: Blue with Interactive Gear badge in front */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <div 
                onClick={cycleGearSpeed}
                className={`relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-blue-500 to-[#0B3B60] text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#062238] border-2 border-blue-400 transform hover:-translate-y-1 transition-all cursor-pointer group ${
                  gearSpeed === 3 ? 'shadow-[0_8px_24px_rgba(56,189,248,0.55)]' : ''
                } ${activeBadge === 'M' ? 'ring-4 ring-sky-300 -translate-y-1' : ''}`}
                title="¡Haz clic en el engranaje para acelerar o pausar la marcha mecánica!"
              >
                <span className="relative z-10 drop-shadow-md">M</span>
                
                {/* Foreground Interactive Gear Badge */}
                <button
                  type="button"
                  onClick={cycleGearSpeed}
                  aria-label="Ajustar velocidad del engranaje de mecánica"
                  className={`absolute -top-2.5 -right-2 sm:-top-3.5 sm:-right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-125 active:scale-95 ${
                    gearSpeed === 3
                      ? 'bg-sky-400 text-slate-950 border-2 border-cyan-300 ring-4 ring-cyan-300/80 shadow-[0_0_20px_#0284c7]'
                      : gearSpeed > 0
                        ? 'bg-white text-blue-600 border-2 border-blue-400 ring-2 ring-blue-200'
                        : 'bg-slate-200 text-slate-400 border-2 border-slate-300'
                  } ${gearBoostAnim ? 'scale-125' : ''}`}
                  title={`Engranaje: ${GEAR_LABELS[gearSpeed]} - ¡Haz clic para cambiar marcha!`}
                >
                  {/* Luminous Pulsing Halo when in Turbo */}
                  {gearSpeed === 3 && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40 pointer-events-none" />
                  )}
                  
                  <Cog 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                      GEAR_SPEED_CLASSES[gearSpeed] || ''
                    } ${gearSpeed === 3 ? 'text-slate-950' : gearSpeed > 0 ? 'text-blue-600' : 'text-slate-400'}`} 
                  />

                  {/* Speed indicator pip */}
                  {gearSpeed > 0 && (
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1 rounded-full bg-blue-700 text-white shadow-sm scale-90 sm:scale-100">
                      {gearSpeed === 3 ? '⚡' : `${gearSpeed}x`}
                    </span>
                  )}
                </button>
              </div>

              {/* Spanish Meaning Label for M */}
              <button
                type="button"
                onClick={cycleGearSpeed}
                className={`w-full max-w-[70px] sm:max-w-[105px] md:max-w-[120px] text-center px-1 py-0.5 sm:py-1 rounded-xl bg-white/95 hover:bg-white border transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  activeBadge === 'M' ? 'border-blue-500 ring-2 ring-blue-300 bg-blue-50' : 'border-blue-200/80'
                }`}
                title="M de Mecánica y Prototipado Físico"
              >
                <div className="text-[10px] sm:text-xs md:text-sm font-black text-blue-900 tracking-tight leading-tight uppercase font-heading">
                  Mecánica
                </div>
                <div className="hidden sm:block text-[8px] md:text-[9px] text-blue-700 font-semibold leading-none truncate">
                  Diseño & Prototipos
                </div>
              </button>
            </div>

            {/* Letter A: Green with Interactive Lightbulb badge in front */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <div 
                onClick={toggleLightbulb}
                className={`relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-lime-400 to-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#065f46] border-2 border-lime-300 transform hover:-translate-y-1 transition-all cursor-pointer group ${
                  isBulbOn ? 'shadow-[0_8px_24px_rgba(234,179,8,0.45)]' : ''
                } ${activeBadge === 'A' ? 'ring-4 ring-amber-300 -translate-y-1' : ''}`}
                title="¡Haz clic en la bombilla para encender o apagar la idea!"
              >
                <span className="relative z-10 drop-shadow-md">A</span>
                
                {/* Interactive Lightbulb Badge with Glow & Click Toggle */}
                <button
                  type="button"
                  onClick={toggleLightbulb}
                  aria-label="Encender o apagar bombilla de ideas"
                  className={`absolute -top-2.5 -right-2 sm:-top-3.5 sm:-right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-125 active:scale-95 ${
                    isBulbOn 
                      ? 'bg-amber-400 text-slate-950 border-2 border-amber-300 ring-4 ring-amber-300/80 shadow-[0_0_20px_#f59e0b]' 
                      : 'bg-slate-200 text-slate-400 border-2 border-slate-300 ring-2 ring-slate-300'
                  }`}
                  title="¡Haz clic para encender o apagar la bombilla de ideas!"
                >
                  {/* Luminous Pulsing Halo when active */}
                  {isBulbOn && (
                    <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-40 pointer-events-none" />
                  )}
                  
                  <Lightbulb 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                      isBulbOn 
                        ? 'text-slate-950 fill-amber-200 filter drop-shadow-[0_0_6px_#fef08a] scale-110' 
                        : 'text-slate-400 fill-none'
                    } ${bulbSparkle ? 'rotate-12 scale-125' : ''}`} 
                  />
                </button>
              </div>

              {/* Spanish Meaning Label for A */}
              <button
                type="button"
                onClick={toggleLightbulb}
                className={`w-full max-w-[70px] sm:max-w-[105px] md:max-w-[120px] text-center px-1 py-0.5 sm:py-1 rounded-xl bg-white/95 hover:bg-white border transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  activeBadge === 'A' ? 'border-emerald-500 ring-2 ring-emerald-300 bg-emerald-50' : 'border-emerald-200/80'
                }`}
                title="A de Aprender, Creatividad e Ideas Innovadoras"
              >
                <div className="text-[10px] sm:text-xs md:text-sm font-black text-emerald-900 tracking-tight leading-tight uppercase font-heading">
                  Aprender
                </div>
                <div className="hidden sm:block text-[8px] md:text-[9px] text-emerald-700 font-semibold leading-none truncate">
                  Ideas & Creatividad
                </div>
              </button>
            </div>

            {/* Letter K: Amber/Gold with Interactive Knowledge (Book/Academic) badge in front */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <div 
                onClick={cycleKnowledgeLevel}
                className={`relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-amber-400 to-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#9a3412] border-2 border-amber-300 transform hover:-translate-y-1 transition-all cursor-pointer group ${
                  knowledgeLevel === 2 ? 'shadow-[0_8px_24px_rgba(245,158,11,0.65)] ring-2 ring-yellow-300' : ''
                } ${activeBadge === 'K' ? 'ring-4 ring-orange-300 -translate-y-1' : ''}`}
                title="¡Haz clic en el libro del conocimiento para abrir nuevos saberes y alcanzar maestría!"
              >
                <span className="relative z-10 drop-shadow-md">K</span>

                {/* Academic Stars / Sparks floating on letter K when in high knowledge */}
                {knowledgeLevel === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="absolute -top-1 -left-1 text-xs animate-bounce">🎓</span>
                    <span className="absolute -bottom-1 -right-1 text-xs animate-pulse text-yellow-200">✨</span>
                  </div>
                )}

                {/* Foreground Interactive Knowledge Badge (Book / Academic Mastery) */}
                <button
                  type="button"
                  onClick={cycleKnowledgeLevel}
                  aria-label="Ajustar nivel de estudio y conocimiento"
                  className={`absolute -top-2.5 -right-2 sm:-top-3.5 sm:-right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-125 active:scale-95 ${
                    knowledgeLevel === 2
                      ? 'bg-amber-400 text-slate-950 border-2 border-yellow-200 ring-4 ring-yellow-400/90 shadow-[0_0_20px_#f59e0b]'
                      : knowledgeLevel === 1
                        ? 'bg-white text-amber-600 border-2 border-amber-400 ring-2 ring-amber-200'
                        : 'bg-slate-200 text-slate-400 border-2 border-slate-300'
                  } ${knowledgeSparkle ? 'scale-125' : ''}`}
                  title={`Conocimiento: ${KNOWLEDGE_LABELS[knowledgeLevel]} - ¡Haz clic para explorar saberes!`}
                >
                  {/* Luminous Pulsing Halo when in Academic Mastery */}
                  {knowledgeLevel === 2 && (
                    <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-50 pointer-events-none" />
                  )}

                  {knowledgeLevel === 2 ? (
                    <GraduationCap 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all text-slate-950 drop-shadow-[0_0_6px_#fef08a] scale-110 ${
                        knowledgeSparkle ? 'rotate-12 scale-125' : ''
                      }`}
                    />
                  ) : (
                    <BookOpen 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                        knowledgeLevel === 1
                          ? 'text-amber-600 fill-amber-100'
                          : 'text-slate-400 fill-none'
                      } ${knowledgeSparkle ? 'rotate-12 scale-125' : ''}`} 
                    />
                  )}

                  {/* Level indicator pip */}
                  {knowledgeLevel > 0 && (
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1 rounded-full bg-amber-600 text-white shadow-sm scale-90 sm:scale-100">
                      {knowledgeLevel === 2 ? '🎓' : '📖'}
                    </span>
                  )}
                </button>
              </div>

              {/* Spanish Meaning Label for K */}
              <button
                type="button"
                onClick={cycleKnowledgeLevel}
                className={`w-full max-w-[70px] sm:max-w-[105px] md:max-w-[120px] text-center px-1 py-0.5 sm:py-1 rounded-xl bg-white/95 hover:bg-white border transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  activeBadge === 'K' ? 'border-amber-500 ring-2 ring-amber-300 bg-amber-50' : 'border-amber-200/80'
                }`}
                title="K de Conocimiento (Knowledge), Sabiduría y Aprendizaje Riguroso"
              >
                <div className="text-[10px] sm:text-xs md:text-sm font-black text-amber-900 tracking-tight leading-tight uppercase font-heading">
                  Conocer
                </div>
                <div className="hidden sm:block text-[8px] md:text-[9px] text-amber-700 font-semibold leading-none truncate">
                  (Knowledge) Saberes
                </div>
              </button>
            </div>

            {/* Letter E: Purple with Interactive Wrench badge in front */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <div 
                onClick={cycleWrenchLevel}
                className={`relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-fuchsia-500 to-purple-800 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#581c87] border-2 border-fuchsia-300 transform hover:-translate-y-1 transition-all cursor-pointer group ${
                  wrenchLevel === 2 ? 'shadow-[0_8px_24px_rgba(217,70,239,0.65)] ring-2 ring-fuchsia-300' : ''
                } ${activeBadge === 'E' ? 'ring-4 ring-purple-300 -translate-y-1' : ''}`}
                title="¡Haz clic en la llave para ajustar el prototipo o dar torque máximo!"
              >
                <span className="relative z-10 drop-shadow-md">E</span>

                {/* Spark / Bolt when fully tightened */}
                {wrenchLevel === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="absolute -top-1 -right-1 text-xs animate-bounce">🔩</span>
                    <span className="absolute -bottom-1 -left-1 text-xs animate-pulse text-fuchsia-200">✨</span>
                  </div>
                )}

                {/* Foreground Interactive Wrench Badge */}
                <button
                  type="button"
                  onClick={cycleWrenchLevel}
                  aria-label="Ajustar torque de la llave de herramientas"
                  className={`absolute -top-2.5 -right-2 sm:-top-3.5 sm:-right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-125 active:scale-95 ${
                    wrenchLevel === 2
                      ? 'bg-fuchsia-400 text-slate-950 border-2 border-fuchsia-200 ring-4 ring-fuchsia-400/90 shadow-[0_0_20px_#d946ef]'
                      : wrenchLevel === 1
                        ? 'bg-white text-purple-600 border-2 border-purple-400 ring-2 ring-purple-200'
                        : 'bg-slate-200 text-slate-400 border-2 border-slate-300'
                  } ${wrenchWobble ? 'scale-125' : ''}`}
                  title={`Herramienta: ${WRENCH_LABELS[wrenchLevel]} - ¡Haz clic para ajustar torque!`}
                >
                  {/* Luminous Pulsing Halo when in Max Torque */}
                  {wrenchLevel === 2 && (
                    <span className="absolute inset-0 rounded-full bg-fuchsia-400 animate-ping opacity-50 pointer-events-none" />
                  )}

                  <Wrench 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                      wrenchLevel === 2
                        ? 'text-slate-950 rotate-45 scale-110'
                        : wrenchLevel === 1
                          ? 'text-purple-600 -rotate-12'
                          : 'text-slate-400 rotate-0'
                    } ${wrenchWobble ? 'animate-spin' : ''}`} 
                  />

                  {/* Torque indicator pip */}
                  {wrenchLevel > 0 && (
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1 rounded-full bg-purple-700 text-white shadow-sm scale-90 sm:scale-100">
                      {wrenchLevel === 2 ? '100%' : '10mm'}
                    </span>
                  )}
                </button>
              </div>

              {/* Spanish Meaning Label for E */}
              <button
                type="button"
                onClick={cycleWrenchLevel}
                className={`w-full max-w-[70px] sm:max-w-[105px] md:max-w-[120px] text-center px-1 py-0.5 sm:py-1 rounded-xl bg-white/95 hover:bg-white border transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  activeBadge === 'E' ? 'border-purple-500 ring-2 ring-purple-300 bg-purple-50' : 'border-purple-200/80'
                }`}
                title="E de Experimentación, Herramientas y Ensamblaje"
              >
                <div className="text-[10px] sm:text-xs md:text-sm font-black text-purple-900 tracking-tight leading-tight uppercase font-heading">
                  Experimentar
                </div>
                <div className="hidden sm:block text-[8px] md:text-[9px] text-purple-700 font-semibold leading-none truncate">
                  Herramientas & Taller
                </div>
              </button>
            </div>

            {/* Letter R: Cyan/Teal with Interactive Robot badge in front */}
            <div className="flex flex-col items-center gap-1 sm:gap-1.5">
              <div 
                onClick={cycleRobotLevel}
                className={`relative w-14 h-16 sm:w-24 sm:h-28 md:w-28 md:h-32 bg-gradient-to-b from-cyan-400 to-teal-700 text-white rounded-2xl flex items-center justify-center font-black text-4xl sm:text-7xl md:text-8xl shadow-[0_8px_0_0_#134e4a] border-2 border-cyan-300 transform hover:-translate-y-1 transition-all cursor-pointer group ${
                  robotLevel === 2 ? 'shadow-[0_8px_24px_rgba(20,184,166,0.65)] ring-2 ring-cyan-300' : ''
                } ${activeBadge === 'R' ? 'ring-4 ring-cyan-300 -translate-y-1' : ''}`}
                title="¡Haz clic en el robot para activar sensores o modo autónomo!"
              >
                <span className="relative z-10 drop-shadow-md">R</span>

                {/* Antenna / Sensor Radar Wave on letter R when in autonomous mode */}
                {robotLevel === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="absolute -top-1 -right-1 text-xs animate-ping">📡</span>
                    <span className="absolute -bottom-1 -left-1 text-xs animate-pulse text-cyan-200">🤖</span>
                  </div>
                )}

                {/* Foreground Interactive Robot Badge */}
                <button
                  type="button"
                  onClick={cycleRobotLevel}
                  aria-label="Activar sensores del robot maker"
                  className={`absolute -top-2.5 -right-2 sm:-top-3.5 sm:-right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-125 active:scale-95 ${
                    robotLevel === 2
                      ? 'bg-cyan-400 text-slate-950 border-2 border-cyan-200 ring-4 ring-cyan-400/90 shadow-[0_0_22px_#06b6d4]'
                      : robotLevel === 1
                        ? 'bg-white text-teal-600 border-2 border-cyan-400 ring-2 ring-teal-200'
                        : 'bg-slate-200 text-slate-400 border-2 border-slate-300'
                  } ${robotBeepAnim ? 'scale-125' : ''}`}
                  title={`Robótica: ${ROBOT_LABELS[robotLevel]} - ¡Haz clic para activar telemetría!`}
                >
                  {/* Luminous Pulsing Halo when in Autonomous Mode */}
                  {robotLevel === 2 && (
                    <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50 pointer-events-none" />
                  )}

                  {/* Cyber Scanner line animation when sensors are active */}
                  {robotLevel > 0 && (
                    <span className="absolute inset-x-1 top-1/2 h-0.5 bg-cyan-300/80 -translate-y-1/2 pointer-events-none animate-pulse rounded-full" />
                  )}

                  <Bot 
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all relative z-10 ${
                      robotLevel === 2
                        ? 'text-slate-950 scale-110 drop-shadow-[0_0_6px_#67e8f9]'
                        : robotLevel === 1
                          ? 'text-teal-600'
                          : 'text-slate-400'
                    } ${robotBeepAnim ? 'animate-bounce' : ''}`} 
                  />

                  {/* Status indicator pip */}
                  {robotLevel > 0 && (
                    <span className="absolute -bottom-1 -right-1 text-[9px] font-black px-1 rounded-full bg-teal-700 text-white shadow-sm scale-90 sm:scale-100">
                      {robotLevel === 2 ? 'AI' : 'ON'}
                    </span>
                  )}
                </button>
              </div>

              {/* Spanish Meaning Label for R */}
              <button
                type="button"
                onClick={cycleRobotLevel}
                className={`w-full max-w-[70px] sm:max-w-[105px] md:max-w-[120px] text-center px-1 py-0.5 sm:py-1 rounded-xl bg-white/95 hover:bg-white border transition-all cursor-pointer shadow-sm hover:scale-105 ${
                  activeBadge === 'R' ? 'border-teal-500 ring-2 ring-teal-300 bg-teal-50' : 'border-teal-200/80'
                }`}
                title="R de Robótica, Sensores y Futuro Tecnológico"
              >
                <div className="text-[10px] sm:text-xs md:text-sm font-black text-teal-900 tracking-tight leading-tight uppercase font-heading">
                  Robótica
                </div>
                <div className="hidden sm:block text-[8px] md:text-[9px] text-teal-700 font-semibold leading-none truncate">
                  Sensores & Futuro
                </div>
              </button>
            </div>
          </div>

          {/* Interactive Meaning Pill & Lightbulb Status Indicator */}
          <div className="mt-3 flex items-center justify-center">
            {activeBadge === 'A' && (
              <button 
                onClick={toggleLightbulb}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                  isBulbOn 
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 ring-2 ring-amber-300/80 animate-pulse' 
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300 ring-1 ring-slate-300'
                }`}
              >
                <Lightbulb className={`w-4 h-4 ${isBulbOn ? 'text-slate-950 fill-slate-900' : 'text-slate-500'}`} />
                <span>
                  {isBulbOn 
                    ? '💡 ¡Bombilla Encendida! Ideas & Innovación STEAM+ (Clic para apagar)' 
                    : '💤 Bombilla apagada. ¡Haz clic para encender la idea!'}
                </span>
              </button>
            )}

            {activeBadge === 'M' && (
              <button 
                onClick={cycleGearSpeed}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                  gearSpeed === 3 
                    ? 'bg-sky-400 text-slate-950 hover:bg-sky-300 ring-2 ring-cyan-300 shadow-[0_0_15px_#38bdf8] animate-pulse'
                    : gearSpeed > 0 
                      ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-300'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300 ring-1 ring-slate-300'
                }`}
                title="Haz clic para cambiar la marcha o pausar el engranaje"
              >
                <Cog className={`w-4 h-4 ${GEAR_SPEED_CLASSES[gearSpeed] || ''} ${gearSpeed === 0 ? 'text-slate-500' : gearSpeed === 3 ? 'text-slate-950' : 'text-sky-200'}`} />
                <span>
                  ⚙️ Engranaje STEAM: {GEAR_LABELS[gearSpeed]} (Clic para cambiar marcha)
                </span>
              </button>
            )}

            {activeBadge === 'K' && (
              <button 
                onClick={cycleKnowledgeLevel}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                  knowledgeLevel === 2 
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 ring-2 ring-yellow-300 shadow-[0_0_15px_#f59e0b] animate-pulse'
                    : knowledgeLevel === 1 
                      ? 'bg-amber-600 text-white hover:bg-amber-700 ring-2 ring-amber-300'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300 ring-1 ring-slate-300'
                }`}
                title="Haz clic para avanzar en saberes, lectura y maestría académica"
              >
                {knowledgeLevel === 2 ? (
                  <GraduationCap className="w-4 h-4 text-slate-950" />
                ) : (
                  <BookOpen className={`w-4 h-4 ${knowledgeLevel === 0 ? 'text-slate-500' : 'text-amber-100'}`} />
                )}
                <span>
                  📖 Conocimiento (Knowledge): {KNOWLEDGE_LABELS[knowledgeLevel]} (Clic para explorar saberes)
                </span>
              </button>
            )}

            {activeBadge === 'E' && (
              <button 
                onClick={cycleWrenchLevel}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                  wrenchLevel === 2 
                    ? 'bg-fuchsia-400 text-slate-950 hover:bg-fuchsia-300 ring-2 ring-fuchsia-300 shadow-[0_0_15px_#d946ef] animate-pulse'
                    : wrenchLevel === 1 
                      ? 'bg-purple-600 text-white hover:bg-purple-700 ring-2 ring-purple-300'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300 ring-1 ring-slate-300'
                }`}
                title="Haz clic para cambiar el nivel de calibración o dar torque a las piezas"
              >
                <Wrench className={`w-4 h-4 ${wrenchLevel === 0 ? 'text-slate-500' : wrenchLevel === 2 ? 'text-slate-950' : 'text-fuchsia-200'} ${wrenchWobble ? 'animate-spin' : ''}`} />
                <span>
                  🔧 Herramientas STEAM: {WRENCH_LABELS[wrenchLevel]} (Clic para calibrar)
                </span>
              </button>
            )}

            {activeBadge === 'R' && (
              <button 
                onClick={cycleRobotLevel}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer ${
                  robotLevel === 2 
                    ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 ring-2 ring-cyan-300 shadow-[0_0_15px_#06b6d4] animate-pulse'
                    : robotLevel === 1 
                      ? 'bg-teal-600 text-white hover:bg-teal-700 ring-2 ring-teal-300'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300 ring-1 ring-slate-300'
                }`}
                title="Haz clic para cambiar el modo de telemetría y sensores del robot"
              >
                <Bot className={`w-4 h-4 ${robotLevel === 0 ? 'text-slate-500' : robotLevel === 2 ? 'text-slate-950' : 'text-cyan-200'} ${robotBeepAnim ? 'animate-bounce' : ''}`} />
                <span>
                  🤖 Robótica STEAM: {ROBOT_LABELS[robotLevel]} (Clic para cambiar modo)
                </span>
              </button>
            )}
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
                    INTERDISCIPLINARIO STEAM+
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
