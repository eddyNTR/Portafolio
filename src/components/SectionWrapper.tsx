// =============================================================================
// SectionWrapper.tsx
// Envuelve cada sección con los estilos de padding y fondo correctos.
// Evita repetir las mismas clases en cada sección del portafolio.
// =============================================================================

interface SectionWrapperProps {
  id: string;                        // ID para el ancla de navegación
  children: React.ReactNode;
  bg?: 'dark' | 'slate';             // Fondo alternado entre secciones
  className?: string;                // Clases adicionales opcionales
}

const SectionWrapper = ({
  id,
  children,
  bg = 'dark',
  className = '',
}: SectionWrapperProps) => {
  const bgStyles = {
    dark: 'bg-dark-bg',
    slate: 'bg-slate-900',
  };

  // Variantes de orbe decorativo según el fondo
  const orbColor = {
    dark:  'from-primary/20 to-transparent',
    slate: 'from-primary-dark/25 to-transparent',
  };

  const patternClass = bg === 'dark' ? 'bg-dots' : 'bg-grid';

  return (
    <section id={id} className={`py-12 flex-1 ${bgStyles[bg]} relative overflow-hidden ${className}`}>
      {/* Patrón de fondo decorativo (puntos o grid según variante) */}
      <div className={`absolute inset-0 ${patternClass} pointer-events-none`} />

      {/* Línea de acento superior con degradado morado */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      {/* Orbe de luz en esquina superior derecha */}
      <div className={`absolute -top-24 -right-24 w-80 h-80 rounded-full bg-radial ${orbColor[bg]} blur-3xl pointer-events-none`} />

      {/* Orbe de luz en esquina inferior izquierda */}
      <div className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-radial ${orbColor[bg]} blur-3xl pointer-events-none`} />

      {/* Contenido sobre las decoraciones */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
