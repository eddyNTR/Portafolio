// =============================================================================
// core/data.ts
// Datos estáticos de la aplicación: proyectos, habilidades, info de contacto.
// Separa los datos de la lógica visual — solo edita este archivo para
// personalizar el contenido del portafolio.
// =============================================================================

import logo from '../assets/logo.png';
import type { Project, Skill, NavLink, ContactInfo, Stat } from './types';

// ---------------------------------------------------------------------------
// Información personal — actualiza con tus datos reales
// ---------------------------------------------------------------------------
export const PERSONAL_INFO = {
  name:      'Eddy Noe Torrico Rocha',
  firstName: 'Eddy Noe',
  lastName:  'Torrico Rocha',
  role:      'Desarrollador Web & Desktop',
  tagline:   'Desarrollador web y de escritorio apasionado por crear experiencias funcionales y visuales.',
  bio1: 'soy un apasionado del desarrollo web y de aplicaciones de escritorio, donde encuentro un equilibrio perfecto entre creatividad y tecnología.',
  bio2: 'Me encanta transformar ideas en soluciones funcionales y visuales, ya sea creando experiencias interactivas en la web o desarrollando software robusto para el escritorio.',
  photo:    logo,
  cv:       `${import.meta.env.BASE_URL}cv.pdf`,
  github:   'https://github.com/eddyNTR',
  linkedin: 'https://www.linkedin.com/in/eddy-noe-torrico-rocha-554889317/',
  email:    'eddy.noe92@gmail.com',
  location: 'Bolivia',
};

// ---------------------------------------------------------------------------
// Estadísticas mostradas en la sección Sobre Mi
// ---------------------------------------------------------------------------
export const STATS: Stat[] = [
  { label: 'Proyectos Completados', value: '+10' },
  { label: 'Años de Experiencia',   value: '+2'  },
  { label: 'Tecnologías',           value: '+8'  },
];

// ---------------------------------------------------------------------------
// Links del navbar — sincronizados automáticamente con las rutas en routes/
// ---------------------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio',      to: '/'           },
  { name: 'Sobre mi',    to: '/sobre-mi'   },
  { name: 'Habilidades', to: '/habilidades'},
  { name: 'Proyectos',   to: '/proyectos'  },
  { name: 'Contacto',    to: '/contacto'   },
];

// ---------------------------------------------------------------------------
// Proyectos — actualiza con tus proyectos reales
// ---------------------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personal',
    description: 'Portafolio moderno desarrollado con React, TypeScript y Tailwind CSS. Diseño responsivo con modo oscuro y animaciones fluidas.',
    image: `${import.meta.env.BASE_URL}projects/project1.png`,
    tags: ['React', 'TypeScript', 'Tailwind'],
    demoUrl: '#',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'App de Escritorio',
    description: 'Aplicación de escritorio robusta desarrollada con Electron y Python. Interfaz intuitiva para gestión de datos.',
    image: `${import.meta.env.BASE_URL}projects/project2.png`,
    tags: ['Python', 'Electron', 'SQLite'],
    demoUrl: '#',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Sistema Web',
    description: 'Sistema de gestión web con backend Node.js, base de datos PostgreSQL y frontend React con autenticación JWT.',
    image: `${import.meta.env.BASE_URL}projects/project3.png`,
    tags: ['Node.js', 'React', 'PostgreSQL'],
    demoUrl: '#',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 4,
    title: 'API REST',
    description: 'API RESTful desarrollada con Node.js y Express. Documentada con Swagger e integrada con base de datos MongoDB.',
    image: `${import.meta.env.BASE_URL}projects/project4.png`,
    tags: ['Express', 'MongoDB', 'Swagger'],
    demoUrl: '#',
    repoUrl: 'https://github.com',
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Habilidades técnicas agrupadas por categoría
// ---------------------------------------------------------------------------
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React',        level: 85, icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript',   level: 75, icon: '🔷', category: 'frontend' },
  { name: 'JavaScript',   level: 90, icon: '🟡', category: 'frontend' },
  { name: 'HTML/CSS',     level: 95, icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, icon: '💨', category: 'frontend' },
  // Backend
  { name: 'Python',       level: 80, icon: '🐍', category: 'backend'  },
  { name: 'Node.js',      level: 70, icon: '🟩', category: 'backend'  },
  { name: 'SQL',          level: 75, icon: '🗄️', category: 'backend'  },
  // Herramientas
  { name: 'Git/GitHub',   level: 85, icon: '🐙', category: 'tools'    },
  { name: 'Figma',        level: 65, icon: '🖌️', category: 'tools'    },
  { name: 'VS Code',      level: 95, icon: '💻', category: 'tools'    },
];

/** Categorías de habilidades para el renderizado en Skills.tsx */
export const SKILL_CATEGORIES = [
  { key: 'frontend' as const, label: 'Frontend'     },
  { key: 'backend'  as const, label: 'Backend'      },
  { key: 'tools'    as const, label: 'Herramientas' },
];

/** Tecnologías extra mostradas como badges en la sección Habilidades */
export const EXTRA_TECHS = ['Docker', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API', 'Electron'];

// ---------------------------------------------------------------------------
// Información de contacto mostrada en la sección Contactame
// ---------------------------------------------------------------------------
export const CONTACT_INFO: ContactInfo[] = [
  { icon: '📧', label: 'Email',     value: PERSONAL_INFO.email,    link: `mailto:${PERSONAL_INFO.email}` },
  { icon: '💼', label: 'LinkedIn',  value: 'https://www.linkedin.com/in/eddy-noe-torrico-rocha-554889317/', link: PERSONAL_INFO.linkedin          },
  { icon: '🐙', label: 'GitHub',    value: 'https://github.com/eddyNTR',      link: PERSONAL_INFO.github            },
  { icon: '📍', label: 'Ubicación', value: PERSONAL_INFO.location, link: null                            },
];
