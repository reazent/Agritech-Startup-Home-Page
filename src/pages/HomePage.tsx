import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { PosterHighlightsSection } from '../components/PosterHighlightsSection';
import { ValuePropsSection } from '../components/ValuePropsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
export function HomePage() {
  useDocumentTitle('Reazent - Sustainable Agricultural Solutions');
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <PosterHighlightsSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>;
}