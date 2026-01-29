import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, Phone, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/felipeamorimm/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/felipe.amorim.s',
      label: 'Instagram',
    },
  ];

  const quickLinks = [
    { href: '#home', label: { pt: 'Home', en: 'Home' } },
    { href: '#about', label: { pt: 'Sobre', en: 'About' } },
    { href: '#services', label: { pt: 'Serviços', en: 'Services' } },
    { href: '#portfolio', label: { pt: 'Portfólio', en: 'Portfolio' } },
    { href: '#contact', label: { pt: 'Contato', en: 'Contact' } },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-3xl font-display font-bold text-gradient">
                Site TI
              </span>
            </motion.div>
            <p className="text-muted-foreground max-w-md mb-6">
              {t(
                'Soluções profissionais em Tecnologia da Informação, Cibersegurança e Desenvolvimento Web. Transformando desafios em resultados com mais de 10 anos de experiência.',
                'Professional solutions in Information Technology, Cybersecurity and Web Development. Transforming challenges into results with over 10 years of experience.'
              )}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">
              {t('Links Rápidos', 'Quick Links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-muted-foreground hover:text-primary transition-colors underline-animation"
                  >
                    {t(link.label.pt, link.label.en)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">
              {t('Contato', 'Contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/5585921861059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (85) 92186-1059
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:fortalflixentreterimento@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  fortalflixentreterimento@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Site TI. {t('Todos os direitos reservados.', 'All rights reserved.')}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t('Feito com', 'Made with')} <Heart className="w-4 h-4 text-destructive fill-destructive" /> {t('por Felipe Amorim', 'by Felipe Amorim')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
