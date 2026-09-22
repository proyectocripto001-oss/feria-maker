import { DaySchedule, ProjectItem } from '../types';

export const EVENT_INFO = {
  institution: "INSTITUCIÓN EDUCATIVA TÉCNICA ACUÍCOLA",
  subInstitution: "DE SAN CRISTÓBAL - BOLÍVAR",
  slogan: "Un esfuerzo hecho realidad",
  tagline: "Innovación que nace del conocimiento y se proyecta en la vida",
  title: "FERIA MAKER",
  edition: "2026",
  motto: "¡Ideas que se ven, proyectos que transforman!",
  bottomMotto: "Ciencia + Tecnología + Naturaleza = Un mejor mañana",
  invitationNote: "¡Te esperamos!",
  
  dates: {
    display: "28 y 29 de octubre de 2026",
    days: ["28 de Octubre", "29 de Octubre"],
    year: "2026",
    startDateIso: "2026-10-28T08:00:00-05:00",
    endDateIso: "2026-10-29T15:00:00-05:00",
  },
  
  hours: {
    display: "8:00 a.m. a 3:00 p.m.",
    start: "8:00 a.m.",
    end: "3:00 p.m.",
  },
  
  location: {
    name: "Sede Principal I.E. Técnica Acuícola",
    municipality: "San Cristóbal",
    department: "Bolívar, Colombia",
    address: "Calle del Saber, Sector Centro - San Cristóbal, Bolívar",
    reference: "A orillas del Canal del Dique / zona acuícola",
    googleMapsSearchUrl: "https://maps.app.goo.gl/qH659CXNJwJowM2G9",
  },

  pillars: [
    {
      id: "maker",
      title: "APRENDER HACIENDO",
      subtitle: "Hands-on Learning",
      icon: "Lightbulb",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      description: "Los estudiantes son creadores activos, diseñando y construyendo soluciones palpables a problemáticas reales de nuestra región."
    },
    {
      id: "bilingual",
      title: "BILINGÜE",
      subtitle: "English Immersion",
      icon: "Globe",
      color: "from-blue-600 to-cyan-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Pitch y socialización de proyectos en inglés y español, potenciando habilidades comunicativas para el mundo global."
    },
    {
      id: "steam",
      title: "INTERDISCIPLINA STEAM+",
      subtitle: "Ciencia, Tecnología, Ingeniería, Arte, Matemáticas + Acuicultura",
      icon: "Atom",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      description: "Integración holística del saber técnico acuícola con robótica, ecología fluvial y modelamiento matemático."
    }
  ],

  areas: [
    {
      id: "innovacion",
      title: "Proyectos de innovación y emprendimiento estudiantil",
      badgeColor: "bg-blue-600 text-white",
      badgeBorder: "border-blue-700",
      ringColor: "ring-blue-400",
      iconName: "Settings",
      shortDesc: "Planes de negocio ecológicos, productos alimenticios derivados del pescado y prototipos con impacto social comunitario.",
      accent: "#0284c7"
    },
    {
      id: "robotica",
      title: "Demostraciones de robótica, electrónica y tecnología",
      badgeColor: "bg-emerald-600 text-white",
      badgeBorder: "border-emerald-700",
      ringColor: "ring-emerald-400",
      iconName: "Bot",
      shortDesc: "Carros autónomos Arduino, brazos mecánicos, circuitos interactivos y sensores IoT de calidad de agua y suelo.",
      accent: "#10b981"
    },
    {
      id: "acuicultura",
      title: "Iniciativas en torno a la acuicultura y el cuidado del medio ambiente",
      badgeColor: "bg-orange-500 text-white",
      badgeBorder: "border-orange-600",
      ringColor: "ring-orange-400",
      iconName: "Fish",
      shortDesc: "Biomonitoreo de estanques de Tilapia y Bocachico, oxigenación fotovoltaica y cultivo hidropónico acuapónico.",
      accent: "#f97316"
    },
    {
      id: "cultura",
      title: "Exposiciones, muestras culturales y mucho más",
      badgeColor: "bg-purple-600 text-white",
      badgeBorder: "border-purple-700",
      ringColor: "ring-purple-400",
      iconName: "Users",
      shortDesc: "Muestras folclóricas del Caribe colombiano, gastronomía local, stands bilingües y talleres abiertos para visitantes.",
      accent: "#9333ea"
    }
  ]
};

export const STEAM_DISCIPLINES = [
  {
    name: "Ciencia",
    sub: "Science",
    color: "bg-sky-500",
    icon: "Atom",
    detail: "Microscopía acuícola, bioensayos de microalgas, química del pH y ciclo del nitrógeno."
  },
  {
    name: "Tecnología",
    sub: "Technology",
    color: "bg-emerald-500",
    icon: "Cpu",
    detail: "Microcontroladores Arduino, sensores de turbidez y temperatura, telemetría IoT."
  },
  {
    name: "Ingeniería",
    sub: "Engineering",
    color: "bg-cyan-500",
    icon: "Laptop",
    detail: "Diseño mecánico de chasis para robots exploradores y sistemas hidráulicos de recirculación."
  },
  {
    name: "Matemáticas",
    sub: "Mathematics",
    color: "bg-amber-500",
    icon: "Pi",
    detail: "Cálculo de biomasa, tasa de conversión alimenticia y tasas de flujo hídrico."
  },
  {
    name: "Naturaleza & Arte",
    sub: "Nature & Arts",
    color: "bg-lime-500",
    icon: "Leaf",
    detail: "Diseño infográfico de stands, comunicación visual y conservación del hábitat fluvial."
  }
];

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Rover Acuícola: Carro Robótico Evasor de Obstáculos con Sensores",
    category: "robotica",
    categoryLabel: "Robótica & Electrónica",
    grade: "Grado 10° y 11° Técnica",
    summary: "Vehículo autónomo 4WD controlado por microcontrolador Arduino con sensor ultrasónico HC-SR04 para inspección de estanques.",
    description: "Prototipo construido con chasis acrílico, servomotores y puente H L298N. Capaz de sortear obstáculos y cartografiar perímetros en las granjas acuícolas escolares sin intervención humana.",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    iconName: "Bot",
    techStack: ["Arduino Uno", "Ultrasonic HC-SR04", "Chasis 4WD", "C++ / Wiring"],
    students: ["Camilo Andrés Pérez", "Valentina Morales", "José David Blanco"]
  },
  {
    id: "proj-2",
    title: "Eco-Acuaponía: Sistema Inteligente de Monitoreo de Oxígeno y pH",
    category: "acuicultura",
    categoryLabel: "Acuicultura & Medio Ambiente",
    grade: "Grado 11° Acuícola",
    summary: "Monitoreo en tiempo real de estanques de Tilapia Roja integrado con cama de cultivo de hortalizas bio-nutridas.",
    description: "Utiliza sensores sumergibles de temperatura DS18B20 y pH acoplados a una pantalla LCD y transmisión de alertas cuando el oxígeno disuelto desciende de niveles óptimos para los peces.",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    iconName: "Fish",
    techStack: ["Sondas pH", "DS18B20", "Cultivo Acuapónico", "Display I2C"],
    students: ["Mariana Sierra", "Luis Felipe Gómez", "Ana Sofía Herrera"]
  },
  {
    id: "proj-3",
    title: "Bio-Snack Piscícola: Harina y Galletas Nutracéuticas de Alevinos",
    category: "emprendimiento",
    categoryLabel: "Innovación & Emprendimiento",
    grade: "Grado 10° Emprendimiento",
    summary: "Aprovechamiento nutricional del subproducto piscícola para combatir la desnutrición infantil con empaque biodegradable.",
    description: "Desarrollo de un suplemento proteico rico en ácidos grasos Omega 3 a partir de biomasa acuícola local, con estudio de costos, etiqueta bilingüe y análisis bromatológico escolar.",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    iconName: "Lightbulb",
    techStack: ["Bio-procesamiento", "Modelo Canvas", "Empaque Ecológico", "Inglés Técnico"],
    students: ["Daniela Castro", "Mateo Ríos", "Angie Paola Mercado"]
  },
  {
    id: "proj-4",
    title: "Aerogenerador y Panel Solar Híbrido para Bombeo Fluvial",
    category: "steam",
    categoryLabel: "STEAM+",
    grade: "Grado 9° y 10°",
    summary: "Microcentral de energía limpia diseñada para oxigenar los estanques de cría durante cortes del fluido eléctrico.",
    description: "Mecanismo que combina una dinamo de imanes de neodimio accionada por viento y un panel fotovoltaico monocristalino para mantener activas las bombas de aire 24/7 sin costo de combustible.",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    iconName: "Cpu",
    techStack: ["Energía Solar", "Dinamo Eólica", "Inversor DC/AC", "Sostenibilidad"],
    students: ["Juan Esteban Rivas", "Paola Andrea Solano"]
  },
  {
    id: "proj-5",
    title: "Voces del Dique: Muestra Cultural Bilingüe y Patrimonio Acuícola",
    category: "cultura",
    categoryLabel: "Muestras Culturales & Bilingüismo",
    grade: "Grado 8° y 9°",
    summary: "Guía interactiva multimedia sobre las tradiciones pesqueras y leyendas de San Cristóbal en español e inglés.",
    description: "Exposición oral con códigos QR escaneables elaborados por los estudiantes que permiten escuchar audioguías bilingües con relatos orales de pescadores ancianos de la Ciénaga.",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    iconName: "Users",
    techStack: ["Bilingual Audio", "QR Codes", "Historia Local", "Diseño Gráfico"],
    students: ["Samuel Torres", "Kelly Johana Paternina", "Sebastián Narváez"]
  },
  {
    id: "proj-6",
    title: "Microscopía Digital: Detección Temprana de Ictioftiriasis (Punto Blanco)",
    category: "acuicultura",
    categoryLabel: "Acuicultura & Ciencia",
    grade: "Grado 11° Laboratorio",
    summary: "Adaptador óptico impreso en 3D para celulares que convierte microscopios estándar en analizadores de patología.",
    description: "Permite a los estudiantes y piscicultores de la comunidad tomar muestras de aletas o branquias de peces y recibir una amplificación de 400x directa en la pantalla del celular para aislamiento preventivo.",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    iconName: "Atom",
    techStack: ["Microscopía", "Impresión 3D", "Diagnóstico Temprano", "Biología"],
    students: ["Leidy Tatiana Vega", "Carlos Eduardo Meza"]
  }
];

export const EVENT_SCHEDULE: DaySchedule[] = [
  {
    dayNumber: 1,
    dayName: "Día 1",
    date: "Martes, 28 de Octubre",
    theme: "Apertura Oficial, Desafíos de Robótica y Emprendimiento",
    events: [
      {
        time: "8:00 a.m. - 8:45 a.m.",
        title: "Acto de Apertura e Himnos Institucionales",
        location: "Plaza Central / Cancha Múltiple",
        description: "Bienvenida a cargo de la Rectoría, izada de banderas y bendición del evento con muestras de la banda de paz.",
        category: "Ceremonia",
        icon: "Flag"
      },
      {
        time: "9:00 a.m. - 11:30 a.m.",
        title: "Apertura de Stands de Proyectos Maker y Jurados",
        location: "Pabellón de Ciencia y Tecnología",
        description: "Evaluación por parte de jurados invitados (SENA, Universidades y sector productivo acuícola de Bolívar).",
        category: "Evaluación",
        icon: "Award"
      },
      {
        time: "11:30 a.m. - 12:30 p.m.",
        title: "Demostración en Vivo: Reto de Robótica y Pista de Obstáculos",
        location: "Zona Tech / Auditorio Maker",
        description: "Competencia amistosa de prototipos robóticos estudiantiles sorteando pistas de navegación y sensores.",
        category: "Robótica",
        icon: "Bot"
      },
      {
        time: "12:30 p.m. - 1:30 p.m.",
        title: "Receso y Feria Gastronómica Caribe",
        location: "Comedor Escolar y Zonas Verdes",
        description: "Platos tradicionales, bocados acuícolas preparados por la comunidad y bebidas refrescantes.",
        category: "Social",
        icon: "Coffee"
      },
      {
        time: "1:30 p.m. - 3:00 p.m.",
        title: "Ronda de Pitch Bilingüe 'Maker Voices'",
        location: "Tarima Principal",
        description: "Estudiantes exponen sus proyectos en inglés y español frente a la comunidad educativa y visitantes.",
        category: "Bilingüe",
        icon: "Mic"
      }
    ]
  },
  {
    dayNumber: 2,
    dayName: "Día 2",
    date: "Miércoles, 29 de Octubre",
    theme: "Acuicultura del Futuro, Muestras Culturales y Gran Premiación",
    events: [
      {
        time: "8:00 a.m. - 9:30 a.m.",
        title: "Recorrido Demostrativo por la Granja y Estanques Acuícolas",
        location: "Zona de Estanques y Laboratorio Piscícola",
        description: "Visita guiada por los estudiantes de 11° explicando las fases de alevinaje, ceba y control del agua con tecnología.",
        category: "Acuicultura",
        icon: "Fish"
      },
      {
        time: "9:30 a.m. - 11:30 a.m.",
        title: "Exposición Abierta al Público y Talleres 'Aprender Haciendo'",
        location: "Corredores STEAM+",
        description: "Talleres prácticos de soldadura electrónica básica, microscopía en vivo y siembra acuapónica para niños y visitantes.",
        category: "Maker",
        icon: "Wrench"
      },
      {
        time: "11:30 a.m. - 1:00 p.m.",
        title: "Muestra Folclórica, Teatro y Danzas de la Ciénaga",
        location: "Tarima Cultural",
        description: "Bailes tradicionales de San Cristóbal y Bolívar, gaitas, tambores y representaciones artísticas de los estudiantes.",
        category: "Cultura",
        icon: "Music"
      },
      {
        time: "1:00 p.m. - 2:00 p.m.",
        title: "Espacio de Intercambio y Votación del Público al Stand Favorito",
        location: "Pabellones de la Feria",
        description: "Los asistentes depositan su voto virtual o físico por el proyecto con mayor impacto social y ambiental.",
        category: "Votación",
        icon: "CheckCircle"
      },
      {
        time: "2:00 p.m. - 3:00 p.m.",
        title: "Ceremonia de Clausura, Medallas Maker y Premiación",
        location: "Plaza Central",
        description: "Reconocimiento a las mejores ideas innovadoras, entrega de diplomas y cierre conmemorativo de la Feria Maker 2026.",
        category: "Premiación",
        icon: "Trophy"
      }
    ]
  }
];
