import { Button, SectionHeader, SectionWrapper, ProjectCard, FadeUp, StaggerContainer, StaggerItem } from '../components';
import { PROJECTS } from '../core/data';

// Página de Proyectos
const ProjectsPage = () => {
  return (
    <SectionWrapper id="proyectos" bg="slate">
        <SectionHeader
          title="Mis"
          highlight="Proyectos"
          subtitle="Una selección de mis trabajos más recientes y destacados."
        />

        {/* Cards escalonadas */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8" stagger={0.15}>
          {PROJECTS.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="text-center mt-12">
          <Button href="https://github.com" variant="outline" external className="px-8 inline-flex items-center gap-2">
            Ver más en GitHub →
          </Button>
        </FadeUp>
    </SectionWrapper>
  );
};

export default ProjectsPage;
