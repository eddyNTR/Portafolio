// hooks/useLanguage.ts
// Hook para consumir el contexto de idioma en cualquier componente.
import { useContext } from 'react';
import { LanguageContext } from '../context/languageContextDef';

export const useLanguage = () => useContext(LanguageContext);
