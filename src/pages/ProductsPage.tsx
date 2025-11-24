import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductCard } from '../components/ProductCard';
import { CTASection } from '../components/CTASection';
export function ProductsPage() {
  // Replace this URL with your own hero image
  const heroImage = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=800&fit=crop';
  const products = [{
    name: 'Prodigy',
    description: 'A proprietary formulation of microbes (apr1), a natural compound, and plant biomass',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Seed treatment',
    availability: '2024',
    stage: 'commercial' as const,
    image: 'https://res.cloudinary.com/dulut6cce/image/upload/v1764003477/soy_plants_zyf6ph.jpg',
    slug: 'prodigy'
  }, {
    name: 'Migrow X',
    description: 'A proprietary formulation of microbes (apr4), and a natural compound',
    crop: 'Vegetables',
    type: 'Biostimulant',
    form: 'Liquid',
    application: 'Nutrient',
    availability: '2025',
    stage: 'commercial' as const,
    image: 'https://res.cloudinary.com/dulut6cce/image/upload/v1764002025/arugula_f3bvwn.jpg',
    slug: 'migrow-x'
  }, {
    name: 'Neo',
    description: 'A proprietary formulation of microbes (apr1), and a natural compound',
    crop: 'Wheat',
    type: 'Crop protection',
    form: 'Liquid',
    application: 'Foliar biocontrol',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://res.cloudinary.com/dulut6cce/image/upload/v1764004007/wheat_plant_isbewr.jpg',
    slug: 'neo'
  }, {
    name: 'Prodigy Plus',
    description: 'Prodigy with Rise - combined formulation for enhanced results',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Combination',
    application: 'Seed treatment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    slug: 'prodigy-plus'
  }, {
    name: 'Rise',
    description: 'Rhizobia, bradyrhizobium Japonicum for nitrogen fixation',
    crop: 'Soybean',
    type: 'Biostimulant',
    form: 'Liquid',
    application: 'Seed treatment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
    slug: 'rise'
  }, {
    name: 'Ignite',
    description: 'A natural compound for enhanced crop performance',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    slug: 'ignite'
  }, {
    name: 'Spark',
    description: 'A proprietary formulation of plant biomass',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'field-testing' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    slug: 'spark'
  }, {
    name: 'Zenith',
    description: 'A formulation of microbe (apr1), a natural compound, plant biomass, and inorganic mineral',
    crop: 'Any',
    type: 'Biostimulant',
    form: 'Powder',
    application: 'Soil amendment',
    availability: '2026',
    stage: 'development' as const,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop',
    slug: 'zenith'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image and Overlay Text */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroImage} alt="Our Products" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/80 to-orange-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Innovative agricultural inputs designed to boost yields, improve
              soil health, and support sustainable farming practices.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
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