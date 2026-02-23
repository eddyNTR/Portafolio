// =============================================================================
// core/i18n.ts
// Traducciones completas de la aplicación en Español e Inglés.
// Para agregar texto nuevo: añádelo en ambos idiomas y consúmelo con t(lang).
// Uso:  const { lang } = useLanguage();  →  t(lang).section.key
// =============================================================================

import type { Lang } from '../context/languageContextDef';

// ---------------------------------------------------------------------------
// Interfaz de traducciones — tipado fuerte garantiza consistencia ES/EN
// ---------------------------------------------------------------------------
export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    tagline: string;
    viewProjects: string;
    contactMe: string;
  };
  about: {
    sectionTitle: string;
    sectionHighlight: string;
    role: string;
    bioIntro: string;
    bio1: string;
    bio2: string;
    downloadCV: string;
    contactMe: string;
    stats: { label: string; value: string }[];
  };
  skills: {
    sectionTitle: string;
    sectionHighlight: string;
    subtitle: string;
    alsoWorkWith: string;
    categories: { frontend: string; backend: string; tools: string };
  };
  projects: {
    sectionTitle: string;
    sectionHighlight: string;
    subtitle: string;
    viewMore: string;
    featured: string;
    viewGallery: string;
    code: string;
    items: { id: number; title: string; description: string }[];
  };
  contact: {
    sectionHighlight: string;
    subtitle: string;
    infoTitle: string;
    name: string;
    namePlaceholder: string;
    email: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sending: string;
    send: string;
    locationLabel: string;
  };
  footer: {
    rights: string;
  };
}

// ---------------------------------------------------------------------------
// Traducciones
// ---------------------------------------------------------------------------
export const translations: Record<Lang, Translations> = {
  // ── Español ──────────────────────────────────────────────────────────────
  es: {
    nav: {
      home:     'Inicio',
      about:    'Sobre mi',
      skills:   'Habilidades',
      projects: 'Proyectos',
      contact:  'Contacto',
    },
    home: {
      greeting:     '¡Hola! Soy',
      tagline:      'Desarrollador web y movil apasionado por crear experiencias funcionales y visuales.',
      viewProjects: 'Ver Proyectos',
      contactMe:    'Contáctame',
    },
    about: {
      sectionTitle:     'Sobre',
      sectionHighlight: 'Mi',
      role:             'Desarrollador Web & Movil',
      bioIntro:         'Mi nombre es',
      bio1: 'Desarrollador de software con experiencia en desarrollo web full-stack (Laravel, React, Python/Flask) y aplicaciones móviles (Flutter). Me apasiona construir soluciones reales, desde sistemas de gestión hasta paneles de administración y apps con integración en la nube.',
      bio2: 'He trabajado en proyectos reales: sistemas de inventario con Laravel, apps móviles con Flutter y Firebase, paneles admin con React y TypeScript, y aplicaciones de pedidos con Python. Me enfoco en escribir código limpio y ofrecer experiencias de usuario intuitivas.',
      downloadCV: 'Descargar CV',
      contactMe:  'Contáctame',
      stats: [
        { label: 'Proyectos Completados', value: '+7'  },
        { label: 'Años de Experiencia',   value: '+2'  },
        { label: 'Tecnologías',           value: '+12' },
      ],
    },
    skills: {
      sectionTitle:     'Mis',
      sectionHighlight: 'Habilidades',
      subtitle:         'Tecnologías y herramientas que utilizo para crear proyectos de alta calidad.',
      alsoWorkWith:     'También trabajo con:',
      categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas' },
    },
    projects: {
      sectionTitle:     'Mis',
      sectionHighlight: 'Proyectos',
      subtitle:         'Una selección de mis trabajos más recientes y destacados.',
      viewMore:         'Ver más en GitHub →',
      featured:         '⭐ Destacado',
      viewGallery:      'Ver galería',
      code:             'Código',
      items: [
        {
          id: 1,
          title:       'CineApp — Sistema de Cine',
          description: 'Sistema de gestión de cine con roles (admin, cajero, cliente), catálogo de películas, funciones con selección de asientos y registro de ventas. Desarrollado con Laravel 11 y autenticación Breeze.',
        },
        {
          id: 2,
          title:       'App Puestos EMSA',
          description: 'Aplicación móvil Flutter para gestión de puestos de mercado. Integra Firebase/Firestore para datos en la nube, Google Maps para geolocalización y SQLite para almacenamiento local.',
        },
        {
          id: 3,
          title:       'Gestión Tienda de Abarrotes',
          description: 'Sistema web de inventario para tienda: gestión de categorías, productos, stock y movimientos. Backend Laravel 8 con reportes y CRUD completo, frontend con Alpine.js.',
        },
        {
          id: 4,
          title:       'Broastería — Sistema de Pedidos',
          description: 'Aplicación web para tomar pedidos en un restaurante. Frontend Vanilla JS con carrito de compras, backend Flask (Python) y sincronización con Google Sheets para registro de ventas.',
        },
        {
          id: 5,
          title:       'Portfolio Personal',
          description: 'Portafolio profesional desarrollado con React 18, TypeScript y Tailwind CSS. SPA con React Router, animaciones con Framer Motion y arquitectura modular.',
        },
      ],
    },
    contact: {
      sectionHighlight:   'Contáctame',
      subtitle:           '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance y colaboraciones.',
      infoTitle:          'Información de contacto',
      name:               'Nombre *',
      namePlaceholder:    'Tu nombre',
      email:              'Email *',
      subject:            'Asunto *',
      subjectPlaceholder: '¿En qué puedo ayudarte?',
      message:            'Mensaje *',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      sending:            '⏳ Enviando...',
      send:               '🚀 Enviar Mensaje',
      locationLabel:      'Ubicación',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },

  // ── English ───────────────────────────────────────────────────────────────
  en: {
    nav: {
      home:     'Home',
      about:    'About',
      skills:   'Skills',
      projects: 'Projects',
      contact:  'Contact',
    },
    home: {
      greeting:     'Hi! I am',
      tagline:      'Passionate web & mobile developer creating functional and visual experiences.',
      viewProjects: 'View Projects',
      contactMe:    'Contact Me',
    },
    about: {
      sectionTitle:     'About',
      sectionHighlight: 'Me',
      role:             'Web & Mobile Developer',
      bioIntro:         'My name is',
      bio1: 'Software developer with experience in full-stack web development (Laravel, React, Python/Flask) and mobile applications (Flutter). I am passionate about building real solutions, from management systems to admin dashboards and cloud-integrated apps.',
      bio2: 'I have worked on real projects: inventory systems with Laravel, mobile apps with Flutter and Firebase, admin dashboards with React and TypeScript, and ordering applications with Python. I focus on writing clean code and delivering intuitive user experiences.',
      downloadCV: 'Download CV',
      contactMe:  'Contact Me',
      stats: [
        { label: 'Completed Projects',  value: '+7'  },
        { label: 'Years of Experience', value: '+2'  },
        { label: 'Technologies',        value: '+12' },
      ],
    },
    skills: {
      sectionTitle:     'My',
      sectionHighlight: 'Skills',
      subtitle:         'Technologies and tools I use to create high-quality projects.',
      alsoWorkWith:     'I also work with:',
      categories: { frontend: 'Frontend', backend: 'Backend', tools: 'Tools' },
    },
    projects: {
      sectionTitle:     'My',
      sectionHighlight: 'Projects',
      subtitle:         'A selection of my most recent and outstanding work.',
      viewMore:         'View more on GitHub →',
      featured:         '⭐ Featured',
      viewGallery:      'View gallery',
      code:             'Code',
      items: [
        {
          id: 1,
          title:       'CineApp — Cinema System',
          description: 'Cinema management system with roles (admin, cashier, client), movie catalog, screenings with seat selection and sales register. Built with Laravel 11 and Breeze authentication.',
        },
        {
          id: 2,
          title:       'EMSA Market Stalls App',
          description: 'Flutter mobile app for market stall management. Integrates Firebase/Firestore for cloud data, Google Maps for geolocation and SQLite for local storage.',
        },
        {
          id: 3,
          title:       'Grocery Store Management',
          description: 'Web inventory system for a store: category, product, stock and movement management. Laravel 8 backend with reports and full CRUD, Alpine.js frontend.',
        },
        {
          id: 4,
          title:       'Broastería — Ordering System',
          description: 'Web application for taking restaurant orders. Vanilla JS frontend with shopping cart, Flask (Python) backend and Google Sheets sync for sales recording.',
        },
        {
          id: 5,
          title:       'Personal Portfolio',
          description: 'Professional portfolio built with React 18, TypeScript and Tailwind CSS. SPA with React Router, Framer Motion animations and modular architecture.',
        },
      ],
    },
    contact: {
      sectionHighlight:   'Contact Me',
      subtitle:           "Have a project in mind? Let's talk! I am available for freelance work and collaborations.",
      infoTitle:          'Contact information',
      name:               'Name *',
      namePlaceholder:    'Your name',
      email:              'Email *',
      subject:            'Subject *',
      subjectPlaceholder: 'How can I help you?',
      message:            'Message *',
      messagePlaceholder: 'Tell me about your project...',
      sending:            '⏳ Sending...',
      send:               '🚀 Send Message',
      locationLabel:      'Location',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};

/** Atajo para obtener las traducciones del idioma actual */
export const t = (lang: Lang) => translations[lang];
