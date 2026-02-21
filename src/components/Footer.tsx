// Datos personales centralizados desde core/data
import { PERSONAL_INFO } from '../core/data';

// El Footer muestra el pie de la página con créditos y links sociales
const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()}{' '}
          <span className="text-primary-light font-semibold">{PERSONAL_INFO.name}</span>.
          {' '}Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
