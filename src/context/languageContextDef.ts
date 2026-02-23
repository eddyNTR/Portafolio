// =============================================================================
// context/languageContextDef.ts  (archivo .ts puro — sin JSX)
// Define el contexto y los tipos. Separado del provider (componente) para
// cumplir con Fast Refresh de Vite: un archivo no puede exportar
// componentes y no-componentes a la vez.
// =============================================================================
import { createContext } from 'react';

/** Idiomas soportados */
export type Lang = 'es' | 'en';

export interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  toggleLang: () => {},
});
