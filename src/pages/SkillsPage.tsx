import { SectionHeader, SectionWrapper, ProgressBar, FadeUp, StaggerContainer, StaggerItem } from '../components';
import { SKILLS, SKILL_CATEGORIES, EXTRA_TECHS } from '../core/data';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../core/i18n';

// Página de Habilidades
const SkillsPage = () => {
  const { lang } = useLanguage();
  const tr = t(lang);
  return (
    <SectionWrapper id="habilidades" bg="dark">
        <SectionHeader
          title={tr.skills.sectionTitle}
          highlight={tr.skills.sectionHighlight}
          subtitle={tr.skills.subtitle}
        />

        {/* Grid de categorías — entran escalonadas */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" delay={0.1} stagger={0.15}>
          {SKILL_CATEGORIES.map((cat) => (
            <StaggerItem key={cat.key}>
              <div className="bg-slate-900 rounded-2xl p-6 border border-primary/20 h-full">
                <h3 className="text-xl font-bold text-primary-light mb-6 text-center">
                  {tr.skills.categories[cat.key]}
                </h3>
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
          <p className="text-gray-400 mb-6">{tr.skills.alsoWorkWith}</p>
          <StaggerContainer className="flex flex-wrap justify-center gap-2 sm:gap-3" stagger={0.04}>
            {EXTRA_TECHS.map((tech) => (
              <StaggerItem key={tech} className="inline-flex">
                <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 border border-primary/30 text-primary-light rounded-full text-xs sm:text-sm font-medium hover:bg-primary/20 transition-colors whitespace-nowrap">
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
