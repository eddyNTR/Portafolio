import { motion } from 'framer-motion';
import { Button } from '../components';
import { PERSONAL_INFO } from '../core/data';
import { FadeRight, FadeLeft } from '../components';

// Página de Inicio — presentación principal del portfolio
const HomePage = () => {
  return (
    <section id="inicio" className="flex-1 flex items-center justify-center relative bg-dark-bg overflow-hidden py-16">
      {/* Patrón de puntos de fondo */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />

      {/* Línea de acento superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

      {/* Orbes de luz decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-primary-dark/15 blur-2xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-500/10 blur-2xl" />
      </div>

      {/* Figuras geométricas decorativas */}
      <div className="absolute top-16 right-16 w-24 h-24 border border-primary/20 rounded-2xl rotate-12 pointer-events-none" />
      <div className="absolute bottom-20 left-12 w-16 h-16 border border-primary/15 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-8 w-8 h-8 bg-primary/10 rounded-lg rotate-45 pointer-events-none" />

      {/* Grid responsivo: columna en móvil, dos columnas en desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Columna izquierda: texto — entra desde la izquierda */}
        <FadeRight className="text-center md:text-left order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-primary-light text-lg font-semibold mb-2"
          >
            ¡Hola! Soy
          </motion.p>

          {/* Nombre con degradado morado — viene de PERSONAL_INFO */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
          >
            <span className="bg-linear-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">
              {PERSONAL_INFO.firstName}
            </span>
            <br />
            <span className="text-white">{PERSONAL_INFO.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-gray-300 text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button to="/proyectos" variant="solid" className="px-8">Ver Proyectos</Button>
            <Button to="/contacto" variant="outline" className="px-8">Contáctame</Button>
          </motion.div>

          {/* Links de redes sociales */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="flex gap-4 mt-8 justify-center md:justify-start"
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-light transition-all duration-300 hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-light transition-all duration-300 hover:-translate-y-1">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </FadeRight>

        {/* Columna derecha: foto — entra con zoom desde la derecha */}
        <FadeLeft className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-linear-to-br from-primary to-primary-dark p-1 shadow-2xl shadow-primary/30">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark-card">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-linear-to-br from-primary-dark to-primary"><span class="text-7xl font-bold text-white">EN</span></div>`;
                  }}
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-light animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-violet-400/60 animate-pulse" />
          </div>
        </FadeLeft>
      </div>


    </section>
  );
};

export default HomePage;
