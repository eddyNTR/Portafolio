// Datos personales centralizados desde core/data
import { PERSONAL_INFO } from '../core/data';

// El Footer muestra el pie de la página con créditos y links sociales
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Nombre desde PERSONAL_INFO — un solo lugar para editar */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()}{' '}
            <span className="text-primary-light font-semibold">{PERSONAL_INFO.name}</span>.
            {' '}Todos los derechos reservados.
          </p>

          {/* Links de redes sociales desde PERSONAL_INFO */}
          <div className="flex gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-light transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-light transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
