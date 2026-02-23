import { Button, SectionHeader, SectionWrapper, ProjectCard, FadeUp, StaggerContainer, StaggerItem } from '../components';
import { PROJECTS } from '../core/data';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../core/i18n';

// Página de Proyectos
const ProjectsPage = () => {
  const { lang } = useLanguage();
  const tr = t(lang);

  // Mezcla los datos base (URLs, imágenes, tags) con los títulos/descripciones traducidos
  const translatedProjects = PROJECTS.map((p) => {
    const translated = tr.projects.items.find((i) => i.id === p.id);
    return translated ? { ...p, title: translated.title, description: translated.description } : p;
  });
  return (
    <SectionWrapper id="proyectos" bg="slate">
        <SectionHeader
          title={tr.projects.sectionTitle}
          highlight={tr.projects.sectionHighlight}
          subtitle={tr.projects.subtitle}
        />

        {/* Cards escalonadas */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" stagger={0.15}>
          {translatedProjects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="text-center mt-12">
          <Button href="https://github.com/eddyNTR" variant="outline" external className="px-8 inline-flex items-center gap-2">
            {tr.projects.viewMore}
          </Button>
        </FadeUp>
    </SectionWrapper>
  );
};

export default ProjectsPage;
