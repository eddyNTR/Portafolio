// =============================================================================
// Button.tsx
// Botón reutilizable con dos variantes: 'solid' (fondo morado) y 'outline'
// (borde morado sin relleno). Soporta:
//   - <Link to="...">  para rutas internas (sin recarga de página)
//   - <a href="...">   para links externos o descargas
//   - <button>         para acciones sin navegación
// =============================================================================

import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;                    // Ruta interna (React Router) — sin recarga
  href?: string;                  // Link externo o descarga
  onClick?: () => void;
  variant?: 'solid' | 'outline';
  type?: 'button' | 'submit';
  disabled?: boolean;
  download?: boolean;
  external?: boolean;             // Añade target="_blank" en href externo
  className?: string;
}

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'solid',
  type = 'button',
  disabled = false,
  download = false,
  external = false,
  className = '',
}: ButtonProps) => {
  // Estilos base compartidos entre todas las variantes
  const baseStyles =
    'px-6 py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 text-center inline-block';

  // Estilos por variante
  const variantStyles = {
    solid:   'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30 disabled:opacity-50',
    outline: 'border border-primary text-primary-light hover:bg-primary/10',
  };

  const finalClass = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Si tiene `to`, usa Link de React Router (navegación interna sin recarga)
  if (to) {
    return (
      <Link to={to} className={finalClass}>
        {children}
      </Link>
    );
  }

  // Si tiene `href`, usa <a> (links externos o descargas)
  if (href) {
    return (
      <a
        href={href}
        className={finalClass}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    );
  }

  // Sin href ni to: renderiza como <button> normal
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClass}
    >
      {children}
    </button>
  );
};

export default Button;

