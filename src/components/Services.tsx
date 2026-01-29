import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Wrench, 
  Network, 
  Server, 
  Shield, 
  Lightbulb, 
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Monitor,
      title: { pt: 'Suporte Técnico', en: 'Technical Support' },
      description: {
        pt: 'Assistência completa para resolver problemas de hardware e software, garantindo o funcionamento contínuo do seu ambiente de trabalho.',
        en: 'Complete assistance to solve hardware and software problems, ensuring continuous operation of your work environment.'
      }
    },
    {
      icon: Wrench,
      title: { pt: 'Manutenção de Computadores', en: 'Computer Maintenance' },
      description: {
        pt: 'Serviços preventivos e corretivos para manter seus equipamentos funcionando com máximo desempenho e longevidade.',
        en: 'Preventive and corrective services to keep your equipment running at maximum performance and longevity.'
      }
    },
    {
      icon: Network,
      title: { pt: 'Redes e Infraestrutura', en: 'Networks & Infrastructure' },
      description: {
        pt: 'Projeto, implementação e gerenciamento de redes corporativas seguras e de alta disponibilidade.',
        en: 'Design, implementation and management of secure and high-availability corporate networks.'
      }
    },
    {
      icon: Server,
      title: { pt: 'Administração de Servidores', en: 'Server Administration' },
      description: {
        pt: 'Configuração e manutenção de servidores Windows e Linux, virtualização, backups e recuperação de desastres.',
        en: 'Configuration and maintenance of Windows and Linux servers, virtualization, backups and disaster recovery.'
      }
    },
    {
      icon: Shield,
      title: { pt: 'Cibersegurança e SOC', en: 'Cybersecurity & SOC' },
      description: {
        pt: 'Proteção avançada contra ameaças, análise de vulnerabilidades, threat hunting e monitoramento contínuo de segurança.',
        en: 'Advanced threat protection, vulnerability analysis, threat hunting and continuous security monitoring.'
      }
    },
    {
      icon: Lightbulb,
      title: { pt: 'Consultoria em TI', en: 'IT Consulting' },
      description: {
        pt: 'Orientação estratégica para otimizar processos, reduzir custos e implementar as melhores práticas de tecnologia.',
        en: 'Strategic guidance to optimize processes, reduce costs and implement technology best practices.'
      }
    },
    {
      icon: Globe,
      title: { pt: 'Criação de Web Sites', en: 'Website Development' },
      description: {
        pt: 'Desenvolvimento de sites institucionais, landing pages e sistemas web modernos, responsivos e otimizados para SEO.',
        en: 'Development of institutional websites, landing pages and modern, responsive and SEO-optimized web systems.'
      }
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-secondary/30">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
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
                {t('Nossos Serviços', 'Our Services')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              {t('Soluções Completas em ', 'Complete Solutions in ')}
              <span className="text-gradient">{t('Tecnologia', 'Technology')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Oferecemos uma gama completa de serviços de TI para atender às necessidades do seu negócio com excelência e inovação.',
                'We offer a complete range of IT services to meet your business needs with excellence and innovation.'
              )}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative glass-card p-8 rounded-xl overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {t(service.title.pt, service.title.en)}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {t(service.description.pt, service.description.en)}
                  </p>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToContact}
                    className="group/btn p-0 h-auto text-primary hover:bg-transparent"
                  >
                    {t('Solicitar Orçamento', 'Request Quote')}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Border Gradient Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-xl border border-primary/50" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
