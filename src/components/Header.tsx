import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const menuItems = [
    { href: '#home', label: { pt: 'Home', en: 'Home' } },
    { href: '#about', label: { pt: 'Sobre', en: 'About' } },
    { href: '#services', label: { pt: 'Serviços', en: 'Services' } },
    { href: '#portfolio', label: { pt: 'Portfólio', en: 'Portfolio' } },
    { href: '#contact', label: { pt: 'Contato', en: 'Contact' } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <span className="text-2xl font-display font-bold text-gradient">
                Site TI
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium underline-animation"
                whileHover={{ y: -2 }}
              >
                {t(item.label.pt, item.label.en)}
              </motion.a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              <span className="font-semibold">{language.toUpperCase()}</span>
            </Button>

            {/* CTA Button - Desktop */}
            <Button
              variant="neon"
              size="default"
              className="hidden md:flex"
              onClick={() => scrollToSection('#contact')}
            >
              {t('Solicitar Orçamento', 'Request Quote')}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {t(item.label.pt, item.label.en)}
                </motion.a>
              ))}
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="mt-4"
              >
                {t('Solicitar Orçamento', 'Request Quote')}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
