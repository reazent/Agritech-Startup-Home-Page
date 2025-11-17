import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { ValuePropsSection } from '../components/ValuePropsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
export function HomePage() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <StatsSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>;
}