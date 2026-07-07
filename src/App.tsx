import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { StatsBar } from './components/StatsBar';
import { Products } from './components/Products';
import { Packages } from './components/Packages';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { WhyUs } from './components/WhyUs';
import { HowWeOperate } from './components/HowWeOperate';
import { CtaBand } from './components/CtaBand';
import { QuoteForm } from './components/QuoteForm';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

interface QuotePrefill {
  role?: string;
  categories?: string[];
  ctaText?: string;
  timestamp?: number;
}

function App() {
  const [quotePrefill, setQuotePrefill] = useState<QuotePrefill>({});

  const handleSelectPackage = (role: string, categories: string[], ctaText: string) => {
    setQuotePrefill({ role, categories, ctaText, timestamp: Date.now() });
  };

  const handleSelectCategory = (categoryTitle: string, ctaText: string) => {
    let mappedCategory = 'Electrical';
    if (categoryTitle.includes('Plumbing')) {
      mappedCategory = 'Plumbing';
    } else if (categoryTitle.includes('Automation')) {
      mappedCategory = 'Home Automation';
    }
    setQuotePrefill({
      categories: [mappedCategory],
      ctaText,
      timestamp: Date.now()
    });
  };

  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <TrustStrip />
      <StatsBar />
      <Products onSelectCategory={handleSelectCategory} />
      <Packages onSelectPackage={handleSelectPackage} />
      <Process />
      <Reviews />
      <WhyUs />
      <HowWeOperate />
      <CtaBand />
      <QuoteForm prefill={quotePrefill} />
      <Faq />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
