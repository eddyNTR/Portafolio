// =============================================================================
// components/LanguageSwitcher.tsx
// Botón switch ES / EN en el navbar.
// Usa useLanguage() del contexto — no requiere props.
// =============================================================================

import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher = () => {
  const { lang, toggleLang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <button
      onClick={toggleLang}
      title={isEn ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      aria-label={isEn ? 'Switch to Spanish' : 'Cambiar a Inglés'}
      className="
        relative flex items-center gap-0.5 rounded-full
        border border-primary/30 bg-primary/10
        hover:bg-primary/20 hover:border-primary/50
        transition-all duration-300 overflow-hidden
        text-xs font-bold tracking-wide select-none
      "
    >
      {/* Píldora deslizante que indica el idioma activo */}
      <span
        className={`
          absolute top-0 bottom-0 w-1/2 rounded-full bg-primary/30
          transition-all duration-300
          ${isEn ? 'left-1/2' : 'left-0'}
        `}
      />

      <span
        className={`
          relative z-10 px-2.5 py-1.5 transition-colors duration-200
          ${!isEn ? 'text-primary-light' : 'text-gray-400'}
        `}
      >
        ES
      </span>
      <span
        className={`
          relative z-10 px-2.5 py-1.5 transition-colors duration-200
          ${isEn ? 'text-primary-light' : 'text-gray-400'}
        `}
      >
        EN
      </span>
    </button>
  );
};

export default LanguageSwitcher;
