import { Button, SectionHeader, SectionWrapper, FadeRight, FadeLeft, StaggerContainer, StaggerItem } from '../components';
import useContactForm from '../hooks/useContactForm';
import { CONTACT_INFO } from '../core/data';

// Página de Contacto
const ContactPage = () => {
  const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <SectionWrapper id="contacto" bg="dark">
        <SectionHeader
          title=""
          highlight="Contáctame"
          subtitle="¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance y colaboraciones."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Panel izquierdo: información de contacto — entra desde la izquierda */}
          <FadeRight className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
            <StaggerContainer stagger={0.1}>
              {CONTACT_INFO.map((info) => (
                <StaggerItem key={info.label}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-xl shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer"
                          className="text-gray-300 hover:text-primary-light transition-colors font-medium">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeRight>

          {/* Panel derecho: formulario — entra desde la derecha */}
          <FadeLeft delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-900 rounded-2xl p-6 sm:p-8 border border-primary/20 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Nombre *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full bg-dark-bg border border-slate-700 focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full bg-dark-bg border border-slate-700 focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm mb-2">Asunto *</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                  placeholder="¿En qué puedo ayudarte?"
                  className="w-full bg-dark-bg border border-slate-700 focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors" />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Mensaje *</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full bg-dark-bg border border-slate-700 focus:border-primary rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors resize-none" />
              </div>

              <Button type="submit" variant="solid" disabled={status === 'sending'} className="w-full rounded-xl hover:scale-[1.02]">
                {status === 'sending' ? '⏳ Enviando...' : '🚀 Enviar Mensaje'}
              </Button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-medium">✅ ¡Mensaje enviado con éxito! Te contactaré pronto.</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium">❌ Error al enviar. Por favor inténtalo de nuevo.</p>
              )}
            </form>
          </FadeLeft>
        </div>
    </SectionWrapper>
  );
};

export default ContactPage;
