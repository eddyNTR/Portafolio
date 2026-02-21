// =============================================================================
// core/data.ts
// Datos estáticos de la aplicación: proyectos, habilidades, info de contacto.
// Separa los datos de la lógica visual — solo edita este archivo para
// personalizar el contenido del portafolio.
// =============================================================================

import type { Project, Skill, NavLink, ContactInfo, Stat } from './types';

// ---------------------------------------------------------------------------
// Información personal — actualiza con tus datos reales
// ---------------------------------------------------------------------------
export const PERSONAL_INFO = {
  name:      'Eddy Noe Torrico Rocha',
  firstName: 'Eddy Noe',
  lastName:  'Torrico Rocha',
  role:      'Desarrollador Web & Movil',
  tagline:   'Desarrollador web y movil apasionado por crear experiencias funcionales y visuales.',
  bio1: 'Desarrollador de software con experiencia en desarrollo web full-stack (Laravel, React, Python/Flask) y aplicaciones móviles (Flutter). Me apasiona construir soluciones reales, desde sistemas de gestión hasta paneles de administración y apps con integración en la nube.',
  bio2: 'He trabajado en proyectos reales: sistemas de inventario con Laravel, apps móviles con Flutter y Firebase, paneles admin con React y TypeScript, y aplicaciones de pedidos con Python. Me enfoco en escribir código limpio y ofrecer experiencias de usuario intuitivas.',
  photo:    'https://res.cloudinary.com/dxzybfya6/image/upload/v1771697807/logo_l07yub.png',
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
  { label: 'Proyectos Completados', value: '+7'  },
  { label: 'Años de Experiencia',   value: '+2'  },
  { label: 'Tecnologías',           value: '+12' },
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
    title: 'CineApp — Sistema de Cine',
    description: 'Sistema de gestión de cine con roles (admin, cajero, cliente), catálogo de películas, funciones con selección de asientos y registro de ventas. Desarrollado con Laravel 11 y autenticación Breeze.',
    image: `${import.meta.env.BASE_URL}projects/project1.png`,
    tags: ['Laravel 11', 'PHP', 'MySQL', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/cineapp',
    featured: true,
  },
  {
    id: 2,
    title: 'App Puestos EMSA',
    description: 'Aplicación móvil Flutter para gestión de puestos de mercado. Integra Firebase/Firestore para datos en la nube, Google Maps para geolocalización y SQLite para almacenamiento local.',
    image: `${import.meta.env.BASE_URL}projects/project2.png`,
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Puestos',
    featured: true,
  },
  {
    id: 3,
    title: 'Gestión Tienda de Abarrotes',
    description: 'Sistema web de inventario para tienda: gestión de categorías, productos, stock y movimientos. Backend Laravel 8 con reportes y CRUD completo, frontend con Alpine.js.',
    image: `${import.meta.env.BASE_URL}projects/project3.png`,
    tags: ['Laravel 8', 'PHP', 'MySQL', 'Alpine.js'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Gestion-tienda-de-abarrotes',
    featured: true,
  },
  {
    id: 4,
    title: 'yapsAdmin — Panel Radiotaxis',
    description: 'Panel de administración para plataforma de radiotaxis: gestión de empresas, documentos, banners y onboarding. Construido con React, Firebase/Firestore y MUI.',
    image: `${import.meta.env.BASE_URL}projects/project4.png`,
    tags: ['React', 'Firebase', 'MUI', 'JavaScript'],
    demoUrl: '#',
    repoUrl: 'https://github.com/ChaskyDev-2025/yapsAdmin',
    featured: false,
  },
  {
    id: 5,
    title: 'Broastería — Sistema de Pedidos',
    description: 'Aplicación web para tomar pedidos en un restaurante. Frontend Vanilla JS con carrito de compras, backend Flask (Python) y sincronización con Google Sheets para registro de ventas.',
    image: `${import.meta.env.BASE_URL}projects/project5.png`,
    tags: ['Python', 'Flask', 'Google Sheets API', 'JavaScript'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Restaurante',
    featured: false,
  },
  {
    id: 6,
    title: 'Portfolio Personal',
    description: 'Portafolio profesional desarrollado con React 18, TypeScript y Tailwind CSS. SPA con React Router, animaciones con Framer Motion y arquitectura modular.',
    image: `${import.meta.env.BASE_URL}projects/project6.png`,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Portafolio',
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Habilidades técnicas agrupadas por categoría
// Usamos nombres de iconos compatibles con @iconify/react
// Busca más iconos en: https://icon-sets.iconify.design/
// ---------------------------------------------------------------------------
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React',        level: 88, iconName: 'logos:react',            category: 'frontend' },
  { name: 'TypeScript',   level: 80, iconName: 'logos:typescript-icon',  category: 'frontend' },
  { name: 'JavaScript',   level: 90, iconName: 'logos:javascript',       category: 'frontend' },
  { name: 'HTML/CSS',     level: 95, iconName: 'logos:html-5',           category: 'frontend' },
  { name: 'Tailwind CSS', level: 88, iconName: 'logos:tailwindcss-icon', category: 'frontend' },
  { name: 'Flutter',      level: 75, iconName: 'logos:flutter',          category: 'frontend' },
  // Backend
  { name: 'PHP/Laravel',  level: 82, iconName: 'logos:laravel',          category: 'backend'  },
  { name: 'Python',       level: 78, iconName: 'logos:python',           category: 'backend'  },
  { name: 'Node.js',      level: 68, iconName: 'logos:nodejs-icon',      category: 'backend'  },
  { name: 'MySQL',        level: 82, iconName: 'logos:mysql-icon',       category: 'backend'  },
  { name: 'Firebase',     level: 78, iconName: 'logos:firebase',         category: 'backend'  },
  // Herramientas
  { name: 'Git/GitHub',   level: 85, iconName: 'logos:github-icon',      category: 'tools'    },
  { name: 'VS Code',      level: 95, iconName: 'logos:visual-studio-code', category: 'tools'  },
  { name: 'Figma',        level: 60, iconName: 'logos:figma',            category: 'tools'    },
];

/** Categorías de habilidades para el renderizado en Skills.tsx */
export const SKILL_CATEGORIES = [
  { key: 'frontend' as const, label: 'Frontend'     },
  { key: 'backend'  as const, label: 'Backend'      },
  { key: 'tools'    as const, label: 'Herramientas' },
];

/** Tecnologías extra mostradas como badges en la sección Habilidades */
export const EXTRA_TECHS = ['Google Maps API', 'Alpine.js', 'Framer Motion', 'SQLite', 'Blade', 'MUI', 'Vite', 'REST API', 'Google Sheets API', 'Firestore'];

// ---------------------------------------------------------------------------
// Información de contacto mostrada en la sección Contactame
// ---------------------------------------------------------------------------
export const CONTACT_INFO: ContactInfo[] = [
  { iconName: 'lucide:mail',      label: 'Email',     value: PERSONAL_INFO.email,    link: `mailto:${PERSONAL_INFO.email}` },
  { iconName: 'lucide:linkedin',  label: 'LinkedIn',  value: 'LinkedIn', link: PERSONAL_INFO.linkedin          },
  { iconName: 'lucide:github',    label: 'GitHub',    value: 'GitHub',      link: PERSONAL_INFO.github            },
  { iconName: 'lucide:map-pin',   label: 'Ubicación', value: PERSONAL_INFO.location, link: null                            },
];
