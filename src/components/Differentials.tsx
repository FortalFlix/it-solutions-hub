import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Users, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Differentials = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: Clock,
      title: { pt: '10+ Anos de Experiência', en: '10+ Years of Experience' },
      description: {
        pt: 'Mais de uma década entregando soluções de tecnologia com excelência e compromisso.',
        en: 'Over a decade delivering technology solutions with excellence and commitment.'
      }
    },
    {
      icon: ShieldCheck,
      title: { pt: 'Ambientes Críticos', en: 'Critical Environments' },
      description: {
        pt: 'Experiência comprovada em ambientes de alta disponibilidade e missão crítica.',
        en: 'Proven experience in high availability and mission-critical environments.'
      }
    },
    {
      icon: Users,
      title: { pt: 'Visão Consultiva', en: 'Consultative Vision' },
      description: {
        pt: 'Abordagem estratégica focada em entender e resolver os desafios reais do seu negócio.',
        en: 'Strategic approach focused on understanding and solving your business real challenges.'
      }
    },
    {
      icon: Award,
      title: { pt: 'Foco em Segurança', en: 'Security Focus' },
      description: {
        pt: 'Implementação de boas práticas de segurança em todos os projetos e soluções.',
        en: 'Implementation of security best practices in all projects and solutions.'
      }
    },
  ];

  return (
    <section className="relative py-24 bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('Diferenciais', 'Differentials')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              {t('Por que ', 'Why ')}
              <span className="text-gradient">{t('Me Escolher', 'Choose Me')}</span>
              {t('?', '?')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Entenda o que faz a diferença quando você trabalha com um profissional dedicado e experiente.',
                'Understand what makes the difference when you work with a dedicated and experienced professional.'
              )}
            </p>
          </motion.div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group text-center p-8 rounded-xl glass-card"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {t(item.title.pt, item.title.en)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(item.description.pt, item.description.en)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
