// =============================================================================
// core/types.ts
// Todas las interfaces y tipos compartidos de la aplicación.
// Centralizar los tipos evita duplicarlos en cada componente.
// =============================================================================

/** Estructura de un proyecto del portafolio */
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

/** Estructura de una habilidad técnica */
export interface Skill {
  name: string;
  level: number;            // Porcentaje 0-100
  iconName: string;         // Nombre del icono en Iconify (ej: logos:react)
  color?: string;           // Color hex opcional para el icono
  category: SkillCategory;
}

/** Categorías válidas para agrupar habilidades */
export type SkillCategory = 'frontend' | 'backend' | 'tools';

/** Estructura de un enlace de navegación */
export interface NavLink {
  name: string;
  to: string;
}

/** Estructura de un item de información de contacto */
export interface ContactInfo {
  iconName: string; // Nombre del icono en Iconify (ej: lucide:mail)
  label: string;
  value: string;
  link: string | null;
}

/** Estructura de estadística/logro en la sección About */
export interface Stat {
  label: string;
  value: string;
}
