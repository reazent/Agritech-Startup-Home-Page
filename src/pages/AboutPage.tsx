import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StorySection } from '../components/StorySection';
import { ValuesSection } from '../components/ValuesSection';
import { TeamSection } from '../components/TeamSection';
import { StatsSection } from '../components/StatsSection';
import { CTASection } from '../components/CTASection';
export function AboutPage() {
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Growing a Better Future
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            We're on a mission to revolutionize agriculture through sustainable
            innovation, empowering farmers to increase yields while protecting
            our planet.
          </p>
        </div>
      </section>

      <StorySection />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>;
}