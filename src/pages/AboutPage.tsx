import { Button, SectionHeader, SectionWrapper, FadeLeft, ScaleIn, StaggerContainer, StaggerItem } from '../components';
import { PERSONAL_INFO } from '../core/data';
import { useLanguage } from '../hooks/useLanguage';
import { t } from '../core/i18n';

// Página Sobre Mi
const AboutPage = () => {
  const { lang } = useLanguage();
  const tr = t(lang);
  return (
    <SectionWrapper id="sobre-mi" bg="slate">
        <SectionHeader title={tr.about.sectionTitle} highlight={tr.about.sectionHighlight} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagen — zoom de entrada */}
          <ScaleIn className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-primary-dark/30 rounded-2xl transform rotate-6" />
              <div className="relative w-full h-full rounded-2xl bg-linear-to-br from-primary-dark to-primary flex items-center justify-center overflow-hidden">
                <img
                  src={PERSONAL_INFO.photo}
                  alt={`Foto de ${PERSONAL_INFO.name}`}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-8xl font-bold text-white/80">EN</span>`;
                  }}
                />
              </div>
            </div>
          </ScaleIn>

          {/* Texto — entra desde la derecha */}
          <FadeLeft className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">{tr.about.role}</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              {tr.about.bioIntro} <span className="text-primary-light font-semibold">{PERSONAL_INFO.name}</span>,{' '}
              {tr.about.bio1}
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">{tr.about.bio2}</p>

            {/* Estadísticas — entran escalonadas */}
            <StaggerContainer className="grid grid-cols-3 gap-4 mb-8" delay={0.1} stagger={0.1}>
              {tr.about.stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-dark-card rounded-xl p-4 border border-primary/20 text-center">
                    <p className="text-3xl font-bold text-primary-light">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href={PERSONAL_INFO.cv} variant="solid" download>{tr.about.downloadCV}</Button>
              <Button to="/contacto" variant="outline">{tr.about.contactMe}</Button>
            </div>
          </FadeLeft>
        </div>
    </SectionWrapper>
  );
};

export default AboutPage;
