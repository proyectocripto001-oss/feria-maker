import React, { useState } from 'react';
import { Sparkles, QrCode, CheckCircle2, Download, Printer, User, School, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SchoolCrest } from './SchoolCrest';

export const RsvpModal: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Estudiante' | 'Docente' | 'Padre de Familia' | 'Invitado Especial' | 'Comunidad General'>('Estudiante');
  const [institution, setInstitution] = useState('I.E. Técnica Acuícola');
  const [days, setDays] = useState<string[]>(['28 de Octubre', '29 de Octubre']);
  const [submittedPass, setSubmittedPass] = useState<any | null>(null);

  const handleToggleDay = (day: string) => {
    if (days.includes(day)) {
      if (days.length > 1) {
        setDays(days.filter(d => d !== day));
      }
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const passId = `MKR-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedPass({
      id: passId,
      name: name.trim(),
      role,
      institution: institution.trim() || 'Comunidad San Cristóbal',
      daysAttending: days,
      registeredAt: new Date().toLocaleDateString('es-CO', { day: 'numeric', month: 'short', year: 'numeric' })
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="registro" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50 to-white relative">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Acceso Abierto & Gratuito
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B3B60] font-heading tracking-tight">
            Registro de Asistencia & Pase Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Confirma tu participación en la Feria Maker 2026 y descarga tu credencial digital personalizada de visitante.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-4 border-[#0B3B60] shadow-xl overflow-hidden p-6 sm:p-10">
          {!submittedPass ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nombre */}
                <div>
                  <label htmlFor="input-name" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="Ej. Juan Sebastián Ramos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#0284C7] focus:outline-none text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Rol */}
                <div>
                  <label htmlFor="select-role" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tipo de Asistente *
                  </label>
                  <select
                    id="select-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#0284C7] focus:outline-none text-sm font-medium bg-white"
                  >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Docente">Docente / Directivo</option>
                    <option value="Padre de Familia">Padre de Familia / Acudiente</option>
                    <option value="Invitado Especial">Invitado Especial / Evaluador</option>
                    <option value="Comunidad General">Comunidad General</option>
                  </select>
                </div>
              </div>

              {/* Institución */}
              <div>
                <label htmlFor="input-institution" className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Colegio, Empresa o Municipio de procedencia
                </label>
                <div className="relative">
                  <School className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-institution"
                    type="text"
                    placeholder="Ej. I.E. Técnica Acuícola / San Cristóbal / Bolívar"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#0284C7] focus:outline-none text-sm font-medium"
                  />
                </div>
              </div>

              {/* Días a asistir */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Días de Asistencia:
                </label>
                <div className="flex flex-wrap gap-3">
                  {['28 de Octubre', '29 de Octubre'].map((day) => {
                    const isChecked = days.includes(day);
                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() => handleToggleDay(day)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border-2 transition ${
                          isChecked
                            ? 'bg-blue-50 border-blue-600 text-blue-800'
                            : 'bg-white border-slate-200 text-slate-500'
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{day}</span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-lg hover:from-orange-600 hover:to-amber-600 transition maker-btn-shadow flex items-center justify-center gap-2"
                >
                  <span>Generar Credencial Maker Oficial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          ) : (
            /* Digital Badge Output */
            <div className="space-y-6">
              <div className="p-6 sm:p-8 bg-gradient-to-tr from-[#0B3B60] via-[#0284C7] to-sky-600 text-white rounded-3xl shadow-2xl border-4 border-amber-400 relative overflow-hidden">
                {/* Ribbon top */}
                <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <SchoolCrest className="w-12 h-15 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider font-heading">
                        I.E. Técnica Acuícola
                      </h4>
                      <p className="text-[10px] text-sky-200">San Cristóbal - Bolívar</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase">
                      Pase Digital
                    </span>
                    <p className="text-[10px] font-mono text-sky-200 mt-1">{submittedPass.id}</p>
                  </div>
                </div>

                {/* Badge Body */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      Feria Maker 2026 • Asistente Acreditado
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                      {submittedPass.name}
                    </h3>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                        {submittedPass.role}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-medium">
                        {submittedPass.institution}
                      </span>
                    </div>
                    <div className="pt-2 text-xs text-sky-100 flex items-center justify-center sm:justify-start gap-2">
                      <Calendar className="w-4 h-4 text-amber-300" />
                      <span>Días: {submittedPass.daysAttending.join(', ')}</span>
                    </div>
                  </div>

                  {/* QR Code Simulation */}
                  <div className="bg-white p-3.5 rounded-2xl shadow-lg text-slate-900 flex flex-col items-center flex-shrink-0">
                    <div className="w-24 h-24 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center bg-slate-50 relative">
                      <QrCode className="w-20 h-20 text-[#0B3B60]" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-600 mt-1">
                      {submittedPass.id}
                    </span>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-sky-200">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Entrada libre • 8:00 AM a 3:00 PM
                  </span>
                  <span>Registrado el {submittedPass.registeredAt}</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 justify-end">
                <button
                  type="button"
                  onClick={() => setSubmittedPass(null)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
                >
                  Registrar a otra persona
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir / Guardar PDF
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
