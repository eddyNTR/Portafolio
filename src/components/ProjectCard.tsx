// =============================================================================
// ProjectCard.tsx
// Tarjeta reutilizable para mostrar la información de un proyecto.
// Incluye imagen con overlay, badge de destacado, tags y links de demo/repo.
// Al hacer clic en la imagen abre un modal de galería con todas las imágenes.
// =============================================================================

import { useState } from 'react';
import { Icon } from '@iconify/react';
import ProjectGalleryModal from './ProjectGalleryModal';
import type { Project } from '../core/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Usa `images` si existe y tiene contenido, sino usa la imagen principal
  const gallery = project.images && project.images.length > 0
    ? project.images
    : [project.image];

  const openGallery = () => { setCurrentImg(0); setGalleryOpen(true); };
  const prev = () => setCurrentImg((i) => (i - 1 + gallery.length) % gallery.length);
  const next = () => setCurrentImg((i) => (i + 1) % gallery.length);

  return (
    <>
      {/* Tarjeta con efecto hover */}
      <div className="group bg-dark-bg rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">

        {/* Área de imagen — clic abre la galería */}
        <div
          className="relative h-48 overflow-hidden bg-linear-to-br from-primary-dark/20 to-primary/20 cursor-pointer"
          onClick={openGallery}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />

          {/* Badge "Destacado" */}
          {project.featured && (
            <span className="absolute top-3 right-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
              ⭐ Destacado
            </span>
          )}

          {/* Overlay hover — muestra icono de galería */}
          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
            <div className="bg-white/15 border border-white/30 rounded-full p-3">
              <Icon icon="lucide:images" width={24} height={24} className="text-white" />
            </div>
            <span className="text-white text-sm font-semibold">
              Ver galería
              {gallery.length > 1 && (
                <span className="ml-1 text-primary-light">({gallery.length})</span>
              )}
            </span>
          </div>
        </div>

        {/* Cuerpo de la tarjeta */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tags */}
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

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary-light hover:text-white text-sm font-medium transition-colors"
            >
              <Icon icon="lucide:external-link" width={14} height={14} /> Demo
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              <Icon icon="lucide:github" width={14} height={14} /> Código
            </a>
          </div>
        </div>
      </div>

      {/* Modal de galería */}
      {galleryOpen && (
        <ProjectGalleryModal
          title={project.title}
          images={gallery}
          currentIndex={currentImg}
          onClose={() => setGalleryOpen(false)}
          onPrev={prev}
          onNext={next}
          onSelect={setCurrentImg}
        />
      )}
    </>
  );
};

export default ProjectCard;
