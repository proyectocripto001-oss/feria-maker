import React, { useState } from 'react';
import { Clock, MapPin, Calendar, Award, Bot, Fish, Music, Coffee, Trophy, Flag, Mic, Wrench, CheckCircle } from 'lucide-react';
import { EVENT_SCHEDULE } from '../data/eventData';

export const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const currentSchedule = EVENT_SCHEDULE.find(d => d.dayNumber === selectedDay) || EVENT_SCHEDULE[0];

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag': return <Flag className="w-5 h-5 text-blue-600" />;
      case 'Award': return <Award className="w-5 h-5 text-amber-500" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-600" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-orange-500" />;
      case 'Mic': return <Mic className="w-5 h-5 text-purple-600" />;
      case 'Fish': return <Fish className="w-5 h-5 text-cyan-600" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-indigo-600" />;
      case 'Music': return <Music className="w-5 h-5 text-rose-500" />;
      case 'CheckCircle': return <CheckCircle className="w-5 h-5 text-teal-600" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-yellow-500" />;
      default: return <Clock className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="agenda" className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            Programación Oficial
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B3B60] font-heading tracking-tight">
            Agenda de Actividades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Dos días llenos de aprendizajes, competencias y demostraciones tecnológicas abiertas a la comunidad educativa.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2 border border-slate-200 shadow-inner">
            {EVENT_SCHEDULE.map((day) => (
              <button
                key={day.dayNumber}
                onClick={() => setSelectedDay(day.dayNumber)}
                className={`px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                  selectedDay === day.dayNumber
                    ? 'bg-[#0B3B60] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                <span>{day.dayName}</span>
                <span className="text-[11px] opacity-80 hidden sm:inline">({day.date})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Day Theme Banner */}
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-4 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
              Enfoque del {currentSchedule.dayName} - {currentSchedule.date}
            </span>
            <h3 className="text-base sm:text-lg font-black text-[#0B3B60] font-heading">
              {currentSchedule.theme}
            </h3>
          </div>
          <span className="px-3 py-1 rounded-xl bg-white text-slate-700 text-xs font-bold border border-blue-200 shadow-sm flex-shrink-0">
            Horario: 8:00 a.m. a 3:00 p.m.
          </span>
        </div>

        {/* Timeline Events List */}
        <div className="space-y-4">
          {currentSchedule.events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 border-2 border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center flex-shrink-0">
                  {getEventIcon(event.icon)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-black text-blue-700 font-heading bg-blue-50 px-2 py-0.5 rounded-md">
                      {event.time}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                      {event.category}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-slate-900 font-heading">
                    {event.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    {event.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200 self-end sm:self-center flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
