// =============================================================================
// utils/cn.ts
// Utilidad para combinar clases de Tailwind CSS de forma limpia.
// Filtra valores falsy (undefined, null, false) para evitar clases vacías.
//
// Uso:
//   cn('text-white', isActive && 'font-bold', 'px-4')
//   → 'text-white font-bold px-4'
// =============================================================================

/**
 * cn (classNames) — combina múltiples clases en un solo string limpio.
 * Acepta strings, undefined, null y expresiones booleanas.
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};
