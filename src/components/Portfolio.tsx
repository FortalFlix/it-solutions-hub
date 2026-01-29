import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Globe, Shield, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type Category = 'all' | 'web' | 'ti' | 'security';

const Portfolio = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters: { key: Category; label: { pt: string; en: string } }[] = [
    { key: 'all', label: { pt: 'Todos', en: 'All' } },
    { key: 'web', label: { pt: 'Web', en: 'Web' } },
    { key: 'ti', label: { pt: 'TI', en: 'IT' } },
    { key: 'security', label: { pt: 'Segurança', en: 'Security' } },
  ];

  const projects = [
    {
      id: 1,
      category: 'web',
      title: { pt: 'Portal Corporativo', en: 'Corporate Portal' },
      description: {
        pt: 'Desenvolvimento de portal institucional com painel administrativo e integração com CRM.',
        en: 'Development of institutional portal with admin panel and CRM integration.'
      },
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      icon: Globe,
    },
    {
      id: 2,
      category: 'security',
      title: { pt: 'Implementação SOC', en: 'SOC Implementation' },
      description: {
        pt: 'Estruturação completa de Security Operations Center com SIEM e automação de resposta.',
        en: 'Complete Security Operations Center structuring with SIEM and response automation.'
      },
      technologies: ['SIEM', 'Splunk', 'Python'],
      icon: Shield,
    },
    {
      id: 3,
      category: 'ti',
      title: { pt: 'Migração para Nuvem', en: 'Cloud Migration' },
      description: {
        pt: 'Migração de infraestrutura on-premise para ambiente cloud com alta disponibilidade.',
        en: 'Migration of on-premise infrastructure to cloud environment with high availability.'
      },
      technologies: ['AWS', 'Docker', 'Kubernetes'],
      icon: Server,
    },
    {
      id: 4,
      category: 'web',
      title: { pt: 'E-commerce B2B', en: 'B2B E-commerce' },
      description: {
        pt: 'Plataforma de vendas B2B com integração de pagamentos e gestão de pedidos.',
        en: 'B2B sales platform with payment integration and order management.'
      },
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      icon: Globe,
    },
    {
      id: 5,
      category: 'security',
      title: { pt: 'Auditoria de Segurança', en: 'Security Audit' },
      description: {
        pt: 'Análise completa de vulnerabilidades e implementação de correções de segurança.',
        en: 'Complete vulnerability analysis and security fix implementation.'
      },
      technologies: ['Pentest', 'Nessus', 'Burp Suite'],
      icon: Shield,
    },
    {
      id: 6,
      category: 'ti',
      title: { pt: 'Reestruturação de Rede', en: 'Network Restructuring' },
      description: {
        pt: 'Redesenho completo de arquitetura de rede com segmentação e alta performance.',
        en: 'Complete network architecture redesign with segmentation and high performance.'
      },
      technologies: ['Cisco', 'VLAN', 'Firewall'],
      icon: Server,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('Portfólio', 'Portfolio')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              {t('Projetos ', 'Featured ')}
              <span className="text-gradient">{t('em Destaque', 'Projects')}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Conheça alguns dos projetos que realizei e os resultados que entreguei para meus clientes.',
                'Discover some of the projects I\'ve completed and the results I\'ve delivered to my clients.'
              )}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter.key}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter.key)}
              >
                {t(filter.label.pt, filter.label.en)}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass-card rounded-xl overflow-hidden"
              >
                {/* Card Header with Icon */}
                <div className="relative h-48 bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <project.icon className="w-20 h-20 text-primary/30 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-primary border border-primary/30">
                    {t(
                      filters.find(f => f.key === project.category)?.label.pt || '',
                      filters.find(f => f.key === project.category)?.label.en || ''
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {t(project.title.pt, project.title.en)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(project.description.pt, project.description.en)}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
                    {t('Ver Detalhes', 'View Details')}
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
