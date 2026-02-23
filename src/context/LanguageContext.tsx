// =============================================================================
// context/LanguageContext.tsx
// Solo exporta el componente LanguageProvider.
// La definición del contexto y los tipos viven en languageContextDef.ts
// para satisfacer Fast Refresh de Vite (no mezclar componentes con exports).
// =============================================================================
import { useState, type ReactNode } from 'react';
import { LanguageContext, type Lang } from './languageContextDef';

export { LanguageProvider };

/** Envuelve la app en App.tsx para proveer el idioma globalmente */
function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
