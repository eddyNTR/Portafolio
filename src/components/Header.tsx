import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
// Los links vienen de core/data para mantener un único punto de verdad
import { NAV_LINKS } from '../core/data';

// El componente Header maneja la navegación multi-página y es responsivo
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Clase para el menú móvil
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-light bg-primary/15 border border-primary/30 transition-all duration-200'
      : 'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 hover:text-primary-light hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-200';

  return (
    <header className="fixed w-full top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-primary/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo: Link lleva al inicio sin recargar la página */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold bg-linear-to-r from-primary-light to-primary text-transparent bg-clip-text">
              Portfolio
            </Link>
          </div>

          {/* Menú Desktop con entrada escalonada */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `nav-item relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-primary-light bg-primary/10 shadow-[0_0_12px_rgba(124,58,237,0.3)]'
                        : 'text-gray-300 hover:text-primary-light hover:bg-primary/8'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {/* Underline animado: crece desde el centro al hacer hover o activo */}
                      <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-primary-light rounded-full transition-all duration-300 ${
                        isActive ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Botón menú móvil (hamburguesa) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary/20 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil desplegable con animación slide-down */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md border-b border-primary/20 animate-slide-down">
          <div className="px-4 pt-3 pb-4 space-y-1.5">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={mobileLinkClass}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
