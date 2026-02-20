import { SectionHeader, SectionWrapper, ProgressBar, FadeUp, StaggerContainer, StaggerItem } from '../components';
import { SKILLS, SKILL_CATEGORIES, EXTRA_TECHS } from '../core/data';

// Página de Habilidades
const SkillsPage = () => {
  return (
    <SectionWrapper id="habilidades" bg="dark">
        <SectionHeader
          title="Mis"
          highlight="Habilidades"
          subtitle="Tecnologías y herramientas que utilizo para crear proyectos de alta calidad."
        />

        {/* Grid de categorías — entran escalonadas */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" delay={0.1} stagger={0.15}>
          {SKILL_CATEGORIES.map((cat) => (
            <StaggerItem key={cat.key}>
              <div className="bg-slate-900 rounded-2xl p-6 border border-primary/20 h-full">
                <h3 className="text-xl font-bold text-primary-light mb-6 text-center">{cat.label}</h3>
                <div className="space-y-5">
                  {SKILLS
                    .filter((s) => s.category === cat.key)
                    .map((skill) => (
                      <ProgressBar 
                        key={skill.name} 
                        iconName={skill.iconName} 
                        name={skill.name} 
                        level={skill.level} 
                        color={skill.color}
                      />
                    ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Badges escalonados */}
        <FadeUp delay={0.3} className="mt-16 text-center">
          <p className="text-gray-400 mb-6">También trabajo con:</p>
          <StaggerContainer className="flex flex-wrap justify-center gap-3" stagger={0.04}>
            {EXTRA_TECHS.map((tech) => (
              <StaggerItem key={tech}>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary-light rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
                  {tech}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>
    </SectionWrapper>
  );
};

export default SkillsPage;
