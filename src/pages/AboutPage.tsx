import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StorySection } from '../components/StorySection';
import { ValuesSection } from '../components/ValuesSection';
import { TeamSection } from '../components/TeamSection';
import { StatsSection } from '../components/StatsSection';
import { CTASection } from '../components/CTASection';
export function AboutPage() {
  // Replace this URL with your own hero image
  const heroImage = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=800&fit=crop';
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image and Overlay Text */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroImage} alt="About Reazent" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-purple-950/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Growing a Better Future
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              We're on a mission to revolutionize agriculture through
              sustainable innovation, empowering farmers to increase yields
              while protecting our planet.
            </p>
          </div>
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