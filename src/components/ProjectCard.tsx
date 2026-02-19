// =============================================================================
// ProjectCard.tsx
// Tarjeta reutilizable para mostrar la información de un proyecto.
// Incluye imagen con overlay, badge de destacado, tags y links de demo/repo.
// =============================================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    // Tarjeta con efecto hover: eleva y muestra borde morado
    <div className="group bg-dark-bg rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">

      {/* Área de imagen con overlay al pasar el cursor */}
      <div className="relative h-48 overflow-hidden bg-linear-to-br from-primary-dark/20 to-primary/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Si la imagen no existe, oculta el elemento roto
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />

        {/* Badge "Destacado" — solo se muestra si featured=true */}
        {project.featured && (
          <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            ⭐ Destacado
          </span>
        )}

        {/* Overlay con texto al hacer hover */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">Ver Proyecto →</span>
        </div>
      </div>

      {/* Cuerpo de la tarjeta: título, descripción, tags y links */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags de tecnologías: se generan dinámicamente desde el array project.tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-primary/15 text-primary-light border border-primary/30 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links de demo y repositorio */}
        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary-light hover:text-white text-sm font-medium transition-colors"
          >
            🔗 Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            📁 Código
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
