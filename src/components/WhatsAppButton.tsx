import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    window.open('https://wa.me/5585921861059?text=' + encodeURIComponent(t(
      'Olá! Gostaria de solicitar um orçamento.',
      'Hello! I would like to request a quote.'
    )), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute right-16 bottom-2 bg-card border border-border rounded-lg p-4 shadow-xl min-w-[200px]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center border border-border hover:bg-primary/20 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium mb-1">
              {t('Precisa de ajuda?', 'Need help?')}
            </p>
            <p className="text-xs text-muted-foreground">
              {t('Fale conosco pelo WhatsApp!', 'Talk to us on WhatsApp!')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={openWhatsApp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_20px_hsla(142,70%,49%,0.4)] hover:shadow-[0_0_30px_hsla(142,70%,49%,0.6)] transition-shadow"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.button>

      {/* Pulse Animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-full bg-[#25D366] -z-10"
      />
    </div>
  );
};

export default WhatsAppButton;
