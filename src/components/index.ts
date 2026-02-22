// =============================================================================
// index.ts — Barrel file de componentes UI
// Exporta todos los componentes reutilizables desde un único punto de entrada.
// Uso: import { Button, SectionHeader } from '../ui'
// =============================================================================

export { default as Button } from './Button';
export { default as SectionHeader } from './SectionHeader';
export { default as SectionWrapper } from './SectionWrapper';
export { default as ProgressBar } from './ProgressBar';
export { default as ProjectCard } from './ProjectCard';
export { default as ProjectGalleryModal } from './ProjectGalleryModal';
export type { Project } from '../core/types';
export { FadeUp, FadeLeft, FadeRight, ScaleIn, StaggerContainer, StaggerItem } from './Animate';
