import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTASection } from '../components/CTASection';
import { Leaf, FlaskConical, Microscope, Users, Target, Lightbulb } from 'lucide-react';
export function TechnologyPage() {
  const pillars = [{
    icon: Leaf,
    title: 'Nature-Based Solutions',
    description: 'We harness the power of naturally occurring microbes, plant biomass, and organic compounds that have evolved over millions of years to support plant growth and soil health.',
    details: ['Beneficial microorganisms', 'Plant-derived biomass', 'Natural mineral compounds', 'Organic growth promoters']
  }, {
    icon: FlaskConical,
    title: 'Green Chemistry',
    description: 'Our formulations use environmentally responsible chemistry principles to create products that are effective, safe, and leave no harmful residues in soil or crops.',
    details: ['Non-toxic formulations', 'Biodegradable ingredients', 'Minimal environmental impact', 'Safe for beneficial organisms']
  }, {
    icon: Microscope,
    title: 'Biotechnology',
    description: 'Advanced biotechnology allows us to identify, isolate, and optimize the most effective natural solutions for modern agricultural challenges.',
    details: ['Microbial screening & selection', 'Strain optimization', 'Bioprocess engineering', 'Quality assurance testing']
  }];
  const process = [{
    number: '01',
    title: 'Farmer Needs Assessment',
    description: 'We start by understanding real challenges farmers face in the field - from soil degradation to pest pressure to yield optimization.'
  }, {
    number: '02',
    title: 'Nature-Inspired Research',
    description: 'Our scientists identify natural solutions that address these challenges, studying how nature solves similar problems in healthy ecosystems.'
  }, {
    number: '03',
    title: 'Green Development',
    description: 'Using green chemistry and biotechnology, we develop formulations that are both highly effective and environmentally sustainable.'
  }, {
    number: '04',
    title: 'Field Testing',
    description: 'Products undergo rigorous field trials across multiple crop types, climates, and soil conditions to ensure consistent results.'
  }, {
    number: '05',
    title: 'Workflow Integration',
    description: 'We design application methods that fit seamlessly into existing farming practices, requiring no special equipment or major workflow changes.'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Technology
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Where nature meets innovation. We combine the wisdom of natural
            systems with cutting-edge green chemistry and biotechnology to
            create sustainable agricultural solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-6">
                Leveraging Nature's Intelligence
              </h2>
              <div className="space-y-4 text-purple-900 text-lg">
                <p>
                  Nature has spent billions of years perfecting systems for
                  plant growth, nutrient cycling, and ecosystem balance. Our
                  approach starts by understanding and harnessing these natural
                  processes.
                </p>
                <p>
                  Rather than fighting against nature with harsh chemicals, we
                  work with it - identifying the most effective natural
                  compounds and organisms, then using modern science to optimize
                  and deliver them to farmers.
                </p>
                <p>
                  The result? Products that boost yields while improving soil
                  health, protecting beneficial organisms, and leaving no
                  harmful residues.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop" alt="Scientist examining plant in laboratory" className="rounded-2xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
              Three Pillars of Innovation
            </h2>
            <p className="text-lg text-purple-900 max-w-2xl mx-auto">
              Our technology platform integrates three complementary approaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-950 mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-purple-900 mb-6">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.details.map((detail, idx) => <li key={idx} className="flex items-start gap-2 text-purple-900">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{detail}</span>
                      </li>)}
                  </ul>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Farmer-Centric Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Farmer in field" className="rounded-2xl shadow-xl w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-6">
                Designed for Real Farming
              </h2>
              <div className="space-y-4 text-purple-900 text-lg">
                <p>
                  Great technology means nothing if farmers can't use it. That's
                  why we design our products to integrate seamlessly into
                  existing workflows.
                </p>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-purple-950">
                        Compatible Equipment:
                      </strong>{' '}
                      Works with standard farming equipment - no special
                      applicators needed
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-purple-950">
                        Flexible Timing:
                      </strong>{' '}
                      Application windows that fit your planting and growing
                      schedule
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-purple-950">
                        Simple Storage:
                      </strong>{' '}
                      Stable formulations with reasonable storage requirements
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-purple-950">
                        Clear Instructions:
                      </strong>{' '}
                      Straightforward application guidelines based on field
                      testing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-purple-900 max-w-2xl mx-auto">
              From farmer feedback to field-ready products
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-orange-500 opacity-20">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-purple-950 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-purple-900 text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>;
}