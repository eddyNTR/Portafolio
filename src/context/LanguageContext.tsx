// =============================================================================
// context/LanguageContext.tsx
// Contexto global de idioma. Proporciona `lang` y `toggleLang` a toda la app.
// Usa `useLanguage()` en cualquier componente para leer o cambiar el idioma.
// =============================================================================

import { createContext, useContext, useState, type ReactNode } from 'react';

/** Idiomas soportados */
export type Lang = 'es' | 'en';

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  toggleLang: () => {},
});

/** Envuelve la app en App.tsx para proveer el idioma globalmente */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('es');

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

/** Hook para consumir el contexto de idioma en cualquier componente */
export const useLanguage = () => useContext(LanguageContext);
