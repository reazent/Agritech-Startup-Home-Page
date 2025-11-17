import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
export function ProductsPage() {
  const products = [{
    name: 'Prodigy',
    description: 'A proprietary formulation of microbes (apr1), a natural compound, and plant biomass',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Seed treatment',
    availability: '2024',
    stage: 'commercial' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop'
  }, {
    name: 'Ignite',
    description: 'A natural compound for enhanced crop performance',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  }, {
    name: 'Migrow X',
    description: 'A proprietary formulation of microbes (apr4), and a natural compound',
    crop: 'Vegetables',
    type: 'Biostimulant',
    form: 'Liquid',
    application: 'Nutrient',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&h=400&fit=crop'
  }, {
    name: 'Neo',
    description: 'A proprietary formulation of microbes (apr1), and a natural compound',
    crop: 'Wheat',
    type: 'Crop protection',
    form: 'Liquid',
    application: 'Foliar biocontrol',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop'
  }, {
    name: 'Spark',
    description: 'A proprietary formulation of plant biomass',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  }, {
    name: 'Rise',
    description: 'Rhizobia, bradyrhizobium Japonicum for nitrogen fixation',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Liquid',
    application: 'Seed treatment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop'
  }, {
    name: 'Prodigy Plus',
    description: 'Prodigy with Rise - combined formulation for enhanced results',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Combination',
    application: 'Seed treatment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop'
  }, {
    name: 'Thrive',
    description: 'A proprietary formulation of microbes, a natural compound, plant biomass, and inorganic mineral',
    crop: 'Any',
    type: 'Carbon capture & sequestration',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'development' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  }, {
    name: 'Zenith',
    description: 'A formulation of microbe (apr1), a natural compound, plant biomass, and inorganic mineral',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'development' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  }, {
    name: 'Apex',
    description: 'A proprietary formulation for nitrogen fixation in corn',
    crop: 'Any',
    type: 'Biofertilizer',
    form: 'Liquid',
    application: 'Soil amendment',
    availability: '2027',
    stage: 'research' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Innovative agricultural inputs designed to boost yields, improve
            soil health, and support sustainable farming practices.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => <ProductCard key={index} {...product} />)}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>;
}