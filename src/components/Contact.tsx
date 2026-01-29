import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Nome deve ter pelo menos 2 caracteres').max(100),
  email: z.string().trim().email('Email inválido').max(255),
  phone: z.string().trim().min(10, 'Telefone inválido').max(20),
  message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(1000),
});

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission (will be connected to Supabase)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: t('Mensagem Enviada!', 'Message Sent!'),
      description: t(
        'Obrigado pelo contato. Retornaremos em breve!',
        'Thank you for reaching out. We\'ll get back to you soon!'
      ),
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5585921861059?text=' + encodeURIComponent(t(
      'Olá! Gostaria de solicitar um orçamento.',
      'Hello! I would like to request a quote.'
    )), '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(85) 92186-1059',
      href: 'https://wa.me/5585921861059',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'fortalflixentreterimento@gmail.com',
      href: 'mailto:fortalflixentreterimento@gmail.com',
    },
    {
      icon: MapPin,
      label: t('Localização', 'Location'),
      value: 'Fortaleza, CE - Brasil',
      href: null,
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

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
                {t('Contato', 'Contact')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              {t('Vamos ', 'Let\'s ')}
              <span className="text-gradient">{t('Conversar', 'Talk')}</span>
              {t('?', '?')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t(
                'Pronto para transformar seu negócio com soluções de tecnologia? Entre em contato e vamos discutir seu projeto.',
                'Ready to transform your business with technology solutions? Get in touch and let\'s discuss your project.'
              )}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-6">
                <h3 className="text-2xl font-display font-bold mb-2">
                  {t('Solicitar Orçamento', 'Request Quote')}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {t(
                    'Preencha o formulário abaixo e retornaremos em até 24 horas.',
                    'Fill out the form below and we\'ll get back to you within 24 hours.'
                  )}
                </p>

                <div className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t('Seu Nome', 'Your Name')}
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('Seu Email', 'Your Email')}
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('Seu Telefone', 'Your Phone')}
                      className={`bg-secondary/50 border-border focus:border-primary ${errors.phone ? 'border-destructive' : ''}`}
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('Conte sobre seu projeto...', 'Tell us about your project...')}
                      rows={5}
                      className={`bg-secondary/50 border-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      {t('Enviando...', 'Sending...')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t('Enviar Mensagem', 'Send Message')}
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-between"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass-card p-6 rounded-xl flex items-center gap-4 group hover:border-primary/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass-card p-8 rounded-xl text-center"
              >
                <h3 className="text-2xl font-display font-bold mb-4">
                  {t('Prefere uma resposta rápida?', 'Prefer a quick response?')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {t(
                    'Clique no botão abaixo e fale diretamente comigo no WhatsApp!',
                    'Click the button below and talk to me directly on WhatsApp!'
                  )}
                </p>
                <Button
                  variant="whatsapp"
                  size="xl"
                  onClick={openWhatsApp}
                  className="w-full group"
                >
                  <MessageCircle className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                  {t('Falar no WhatsApp', 'Chat on WhatsApp')}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
