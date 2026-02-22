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
    image: 'https://res.cloudinary.com/dxzybfya6/image/upload/v1771716979/dc308d1b-4299-4d30-88a1-cbbc9eee8e0c.png',
    images: [
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771716922/c9cc8f47-36ff-4cce-8297-77b1e7323737.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771716979/dc308d1b-4299-4d30-88a1-cbbc9eee8e0c.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771717044/41c9b287-8406-4412-af49-a4235d01b763.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771717048/96f31c94-6b97-4b26-bb56-b05bf457c87f.png',
    ],
    tags: ['Laravel 11', 'PHP', 'MySQL', 'Tailwind CSS'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/cineapp',
    featured: true,
  },
  {
    id: 2,
    title: 'App Puestos EMSA',
    description: 'Aplicación móvil Flutter para gestión de puestos de mercado. Integra Firebase/Firestore para datos en la nube, Google Maps para geolocalización y SQLite para almacenamiento local.',
    image: 'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776385/04cdeed0-ec28-4b1f-adee-2bff97e1d819.png',
    images: [
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776385/04cdeed0-ec28-4b1f-adee-2bff97e1d819.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776368/09f501f1-5bfb-4a21-9128-1e624ecfad4c.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776329/d9a3cf92-3665-4a15-b72b-43491a80c4d9.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776289/789a0cf1-effb-4fb8-876b-111d3e88c80a.png',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Puestos',
    featured: true,
  },
  {
    id: 3,
    title: 'Gestión Tienda de Abarrotes',
    description: 'Sistema web de inventario para tienda: gestión de categorías, productos, stock y movimientos. Backend Laravel 8 con reportes y CRUD completo, frontend con Alpine.js.',
    image: 'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777341/88dd2aa2-7a9a-4d6b-a021-769ecea99257.png',
    images: [
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777341/88dd2aa2-7a9a-4d6b-a021-769ecea99257.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777358/b3f331aa-a82b-4305-855e-8e36857e843f.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777377/a341af06-426f-471d-9b0e-f5200dfa3b49.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777390/49215c8a-4336-4de5-afc0-94a3aab195bb.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777390/49215c8a-4336-4de5-afc0-94a3aab195bb.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777390/49215c8a-4336-4de5-afc0-94a3aab195bb.png',
    ],
    tags: ['Laravel 8', 'PHP', 'MySQL', 'Alpine.js'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Gestion-tienda-de-abarrotes',
    featured: true,
  },
  {
    id: 4,
    title: 'Broastería — Sistema de Pedidos',
    description: 'Aplicación web para tomar pedidos en un restaurante. Frontend Vanilla JS con carrito de compras, backend Flask (Python) y sincronización con Google Sheets para registro de ventas.',
    image: 'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776707/ebd2e195-f68b-4163-84f3-dfef0a8feb58.png',
    images: [
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776707/ebd2e195-f68b-4163-84f3-dfef0a8feb58.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776763/1ca1628e-10a3-4aac-89ec-6c5deb14d68f.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776732/bda1750c-e957-4502-a618-14151efd338c.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771776783/65d542d4-c19f-4ad0-9958-187befdacb7a.png',
    ],
    tags: ['Python', 'Flask', 'Google Sheets API', 'JavaScript'],
    demoUrl: '#',
    repoUrl: 'https://github.com/eddyNTR/Restaurante',
    featured: false,
  },
  {
    id: 5,
    title: 'Portfolio Personal',
    description: 'Portafolio profesional desarrollado con React 18, TypeScript y Tailwind CSS. SPA con React Router, animaciones con Framer Motion y arquitectura modular.',
    image: 'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777603/25a07196-cc46-4c8f-8541-0775ebd09196.png',
    images: [
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777603/25a07196-cc46-4c8f-8541-0775ebd09196.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777620/72127b78-66ed-485a-98b4-c4eb87dc536e.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777645/c515dcd0-c3f6-4591-974a-4bb8d185900f.png',
      'https://res.cloudinary.com/dxzybfya6/image/upload/v1771777651/1093aab7-466e-4507-9c7b-a11fb113a286.png',
    ],
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
