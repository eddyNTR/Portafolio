// =============================================================================
// Animate.tsx
// Componentes wrapper de Framer Motion reutilizables.
// Úsalos para envolver cualquier elemento y darle animaciones de entrada.
// viewport={{ once: true }} — la animación solo ocurre la primera vez que
// el elemento entra en pantalla, no cada vez que haces scroll.
// =============================================================================
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimateProps {
  children: ReactNode;
  delay?: number;       // Retraso en segundos antes de animar
  duration?: number;    // Duración de la animación
  className?: string;
}

// FadeUp: aparece desde abajo con fade — ideal para párrafos, títulos, cards
export const FadeUp = ({ children, delay = 0, duration = 0.5, className = '' }: AnimateProps) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// FadeLeft: entra desde la derecha — ideal para columnas derechas
export const FadeLeft = ({ children, delay = 0, duration = 0.6, className = '' }: AnimateProps) => (
  <motion.div
    initial={{ opacity: 0, x: 48 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// FadeRight: entra desde la izquierda — ideal para columnas izquierdas
export const FadeRight = ({ children, delay = 0, duration = 0.6, className = '' }: AnimateProps) => (
  <motion.div
    initial={{ opacity: 0, x: -48 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// ScaleIn: aparece con efecto zoom — ideal para imágenes, avatares, iconos
export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = '' }: AnimateProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }} // spring bounce
    className={className}
  >
    {children}
  </motion.div>
);

// StaggerContainer: anima los hijos en secuencia escalonada
interface StaggerProps {
  children: ReactNode;
  delay?: number;
  stagger?: number;   // Tiempo entre cada hijo
  className?: string;
}
export const StaggerContainer = ({ children, delay = 0, stagger = 0.1, className = '' }: StaggerProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delayChildren: delay, staggerChildren: stagger }}
    variants={{
      hidden: {},
      visible: {},
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// StaggerItem: hijo de StaggerContainer — cada uno entra escalonado
export const StaggerItem = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
