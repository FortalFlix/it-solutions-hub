import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Server, Code, Network, Database, Brain, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { icon: Shield, label: t('Cibersegurança', 'Cybersecurity') },
    { icon: Server, label: t('Administração de Servidores', 'Server Administration') },
    { icon: Network, label: t('Redes e Infraestrutura', 'Networks & Infrastructure') },
    { icon: Database, label: t('Virtualização e Backups', 'Virtualization & Backups') },
    { icon: Code, label: t('Desenvolvimento Web', 'Web Development') },
    { icon: Brain, label: t('Consultoria em TI', 'IT Consulting') },
  ];

  const highlights = [
    t('Mais de 10 anos de experiência em TI', 'Over 10 years of IT experience'),
    t('Especialista em ambientes Windows e Linux', 'Expert in Windows and Linux environments'),
    t('Experiência com ITIL e metodologias ágeis (SCRUM)', 'Experience with ITIL and agile methodologies (SCRUM)'),
    t('Analista SOC com foco em investigação de incidentes', 'SOC Analyst focused on incident investigation'),
    t('Threat Hunting e Cloud Security', 'Threat Hunting and Cloud Security'),
    t('Perfil proativo, consultivo e orientado a resultados', 'Proactive, consultative and results-oriented profile'),
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('Sobre Mim', 'About Me')}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              {t('Profissional de TI com ', 'IT Professional with ')}
              <span className="text-gradient">{t('Visão Consultiva', 'Consultative Vision')}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              {t(
                'Com mais de uma década de experiência no setor de Tecnologia da Informação, atuo de forma proativa e consultiva para entregar soluções que realmente fazem a diferença. Minha expertise abrange desde suporte técnico e administração de servidores até cibersegurança avançada e desenvolvimento de aplicações web.',
                'With over a decade of experience in the Information Technology sector, I work proactively and consultatively to deliver solutions that truly make a difference. My expertise ranges from technical support and server administration to advanced cybersecurity and web application development.'
              )}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-1">10+</div>
                <div className="text-sm text-muted-foreground">{t('Anos de Experiência', 'Years Experience')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-1">500+</div>
                <div className="text-sm text-muted-foreground">{t('Projetos Realizados', 'Projects Completed')}</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl font-display font-bold text-gradient mb-1">100%</div>
                <div className="text-sm text-muted-foreground">{t('Comprometimento', 'Commitment')}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 rounded-xl group cursor-default"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{skill.label}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
