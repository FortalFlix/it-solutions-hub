import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Differentials />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
