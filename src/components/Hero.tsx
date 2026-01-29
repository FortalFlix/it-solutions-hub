import { motion } from 'framer-motion';
import { MessageCircle, FileText, Shield, Server, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5585921861059?text=' + encodeURIComponent(t(
      'Olá! Gostaria de solicitar um orçamento.',
      'Hello! I would like to request a quote.'
    )), '_blank');
  };

  const features = [
    { icon: Shield, label: t('Cibersegurança', 'Cybersecurity') },
    { icon: Server, label: t('Infraestrutura', 'Infrastructure') },
    { icon: Code, label: t('Desenvolvimento Web', 'Web Development') },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="IT Professional"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {t('+ de 10 anos de experiência', '10+ years of experience')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            {t(
              'Soluções em ',
              'Solutions in '
            )}
            <span className="text-gradient">
              {t('Tecnologia da Informação', 'Information Technology')}
            </span>
            {t(
              ', Segurança e Web para seu ',
              ', Security and Web for your '
            )}
            <span className="text-gradient">
              {t('Negócio', 'Business')}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8"
          >
            {t(
              'Especialista em Cibersegurança, Analista SOC e Desenvolvedor Web. Transformando tecnologia em resultados concretos com segurança e inovação.',
              'Cybersecurity Specialist, SOC Analyst and Web Developer. Transforming technology into concrete results with security and innovation.'
            )}
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border"
              >
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="whatsapp"
              size="xl"
              onClick={openWhatsApp}
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              {t('Falar no WhatsApp', 'Chat on WhatsApp')}
            </Button>
            <Button
              variant="neon"
              size="xl"
              onClick={scrollToContact}
            >
              <FileText className="w-5 h-5 mr-2" />
              {t('Solicitar Orçamento', 'Request Quote')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
