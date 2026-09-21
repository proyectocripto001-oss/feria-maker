export interface ProjectItem {
  id: string;
  title: string;
  category: 'robotica' | 'acuicultura' | 'emprendimiento' | 'cultura' | 'steam';
  categoryLabel: string;
  grade: string;
  summary: string;
  description: string;
  badgeColor: string;
  iconName: string;
  techStack: string[];
  students: string[];
}

export interface ScheduleEvent {
  time: string;
  title: string;
  location: string;
  description: string;
  category: string;
  icon: string;
}

export interface DaySchedule {
  dayNumber: number;
  date: string;
  dayName: string;
  theme: string;
  events: ScheduleEvent[];
}

export interface VisitorPass {
  id: string;
  name: string;
  role: 'Estudiante' | 'Docente' | 'Padre de Familia' | 'Invitado Especial' | 'Comunidad General';
  institution: string;
  daysAttending: string[];
  registeredAt: string;
  qrCodeUrl?: string;
}
