import React, { useState } from 'react';
import { Bot, Fish, Lightbulb, Users, Cpu, Atom, Sparkles, Filter, ChevronRight, X, User } from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/eventData';
import { ProjectItem } from '../types';

interface ProjectsGalleryProps {
  selectedCategory?: string;
  onClearCategory?: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ 
  selectedCategory, 
  onClearCategory 
}) => {
  const [filter, setFilter] = useState<string>(selectedCategory || 'todos');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Sync if parent passes category
  React.useEffect(() => {
    if (selectedCategory) {
      setFilter(selectedCategory);
    }
  }, [selectedCategory]);

  const filteredProjects = filter === 'todos' 
    ? SAMPLE_PROJECTS 
    : SAMPLE_PROJECTS.filter(p => p.category === filter);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Fish':
        return <Fish className="w-5 h-5" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Atom className="w-5 h-5" />;
    }
  };

  return (
    <section id="proyectos" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Muestra Estudiantil 2026
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B3B60] font-heading tracking-tight">
              Proyectos Destacados de la Feria
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              Conoce algunos de los prototipos tecnológicos, acuícolas y de emprendimiento desarrollados por nuestros estudiantes técnicos.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filtrar:
            </span>
            <button
              onClick={() => {
                setFilter('todos');
                if (onClearCategory) onClearCategory();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'todos'
                  ? 'bg-[#0B3B60] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Todos ({SAMPLE_PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('robotica')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'robotica'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Robótica
            </button>
            <button
              onClick={() => setFilter('acuicultura')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'acuicultura'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Acuicultura
            </button>
            <button
              onClick={() => setFilter('emprendimiento')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'emprendimiento'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Emprendimiento
            </button>
            <button
              onClick={() => setFilter('cultura')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                filter === 'cultura'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Cultura
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${project.badgeColor}`}>
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold text-slate-600">
                    {project.grade}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0284C7] transition-colors leading-snug mb-2 font-heading">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Authors and Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium truncate">
                  <User className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="truncate">{project.students[0]} y equipo</span>
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0B3B60] transition flex-shrink-0"
                >
                  Ver Ficha
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Project Details */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-4 border-[#0B3B60] relative overflow-hidden">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${activeProject.badgeColor}`}>
                  {activeProject.categoryLabel}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeProject.grade}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0B3B60] font-heading mb-3 leading-tight">
                {activeProject.title}
              </h3>

              <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-200 mb-4 text-xs sm:text-sm text-sky-900 font-medium">
                {activeProject.summary}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Descripción del Prototipo:</h4>
                  <p className="leading-relaxed text-slate-600">{activeProject.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5">Herramientas y Componentes:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-1.5">Estudiantes Creadores:</h4>
                  <ul className="space-y-1">
                    {activeProject.students.map((student) => (
                      <li key={student} className="flex items-center gap-2 text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{student}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-xl bg-[#0B3B60] text-white text-xs font-bold hover:bg-[#082846] transition"
                >
                  Cerrar Ficha
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
