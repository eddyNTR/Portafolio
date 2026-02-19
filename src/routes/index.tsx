// =============================================================================
// routes/index.tsx
// Define todas las rutas de la aplicación en un solo lugar.
// Al separar las rutas de App.tsx, App queda limpio con solo la estructura
// del layout (Header + main + Footer) y aquí se gestiona la navegación.
// =============================================================================

import { Routes, Route, Navigate } from 'react-router-dom';

// Importamos cada página desde su carpeta correspondiente
import HomePage     from '../pages/HomePage';
import AboutPage    from '../pages/AboutPage';
import SkillsPage   from '../pages/SkillsPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage  from '../pages/ContactPage';

/**
 * AppRoutes — componente que contiene toda la configuración de rutas.
 * Se monta dentro del <main> de App.tsx.
 *
 * Rutas definidas:
 *   /             → Inicio (HomePage)
 *   /sobre-mi     → Sobre Mí (AboutPage)
 *   /habilidades  → Habilidades (SkillsPage)
 *   /proyectos    → Proyectos (ProjectsPage)
 *   /contacto     → Contacto (ContactPage)
 *   *             → Redirige a / si la ruta no existe
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/"            element={<HomePage />}     />
      <Route path="/sobre-mi"    element={<AboutPage />}    />
      <Route path="/habilidades" element={<SkillsPage />}   />
      <Route path="/proyectos"   element={<ProjectsPage />} />
      <Route path="/contacto"    element={<ContactPage />}  />

      {/* Catch-all: cualquier ruta no definida redirige al inicio */}
      <Route path="*"            element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
