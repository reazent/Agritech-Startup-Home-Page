import React from 'react';
import { CheckCircle } from 'lucide-react';
export function PosterHighlightsSection() {
  // Image URLs - Replace these with your own images
  const images = {
    soybeans: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=600&fit=crop',
    usMap: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=600&fit=crop',
    farmField: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop'
  };
  return <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section 1: New Generation Biological with Soybeans - PRODIGY */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg">
              A new generation biological
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto">
              <img src={images.soybeans} alt="Soybeans" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-white p-12 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-orange-500 mb-3">
                  Prodigy
                </h2>
                <p className="text-xl text-purple-900 font-semibold">
                  Seed Treatment Yield Enhancer for Soybean
                </p>
              </div>
              <h3 className="text-2xl font-bold text-purple-950 leading-tight">
                Patented, Non-GMO
                <br />
                Biologicals For Increasing
                <br />
                Crop Yield
              </h3>
            </div>
          </div>
        </div>

        {/* Section 2: US Map - Early Commercialization */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-12">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg">
              Early commercialization in the US
            </div>
          </div>
          <div className="pt-8 grid md:grid-cols-2 gap-8 items-center">
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
              <img src={images.usMap} alt="US Map showing Prodigy availability" className="w-full max-w-2xl object-contain" />
            </div>
            <div className="text-center md:text-left space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-purple-950 mb-3">
                  Prodigy Availability
                </h3>
                <p className="text-xl text-purple-900 mb-6">
                  Now available across key soybean-growing states
                </p>
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <span className="text-lg font-semibold text-purple-900">
                    Registered/Approved States
                  </span>
                </div>
                <p className="text-lg text-purple-900 leading-relaxed">
                  North Dakota, South Dakota, Nebraska, Kansas, Missouri, Iowa,
                  Minnesota, Illinois, Indiana, Ohio, Kentucky, Tennessee,
                  Arkansas, Mississippi
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-3 bg-green-100 border-2 border-green-600 px-6 py-3 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-800 font-bold text-lg">
                    OMRI LISTED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Field Image - Integrates to Workflows */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg">
              Integrates to existing workflows
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto order-2 md:order-1">
              <img src={images.farmField} alt="Farm field with crops" className="w-full h-full object-cover" />
            </div>
            <div className="p-12 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-3xl font-bold text-purple-950 mb-8 text-center md:text-left">
                Prodigy fits seamlessly into your operation
              </h3>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-purple-600 text-white px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap shadow-md">
                    Easy Handling/Application
                  </div>
                  <div className="bg-yellow-300 text-yellow-900 px-5 py-3 rounded-xl text-base font-semibold shadow-md">
                    Pre-measured for 50 units of seed
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-purple-600 text-white px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap shadow-md">
                    Hassle-free Storage
                  </div>
                  <div className="bg-yellow-300 text-yellow-900 px-5 py-3 rounded-xl text-base font-semibold shadow-md">
                    Shelf-life up to 2 years
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="bg-purple-600 text-white px-5 py-3 rounded-xl text-base font-semibold whitespace-nowrap shadow-md">
                    Great Compatibility
                  </div>
                  <div className="bg-yellow-300 text-yellow-900 px-5 py-3 rounded-xl text-base font-semibold shadow-md">
                    Compatible with fungicides/insecticides
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Value Metrics */}
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl p-12">
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-purple-600 text-white px-6 py-3 rounded-full text-base font-semibold shadow-lg">
              Excellent value for farmers
            </div>
          </div>
          <div className="pt-12">
            <h3 className="text-3xl font-bold text-purple-950 text-center mb-10">
              Prodigy delivers proven results
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-2xl p-12 mb-4 shadow-xl">
                  <div className="text-8xl font-bold">1</div>
                </div>
                <div className="bg-purple-600 text-white rounded-2xl p-6">
                  <div className="font-bold text-lg mb-3">
                    Rate (Oz/50 lbs seed)
                  </div>
                  <div className="text-sm leading-relaxed">
                    Low seed-treatment footprint on soybean
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-2xl p-12 mb-4 shadow-xl">
                  <div className="text-8xl font-bold">10%</div>
                </div>
                <div className="bg-purple-600 text-white rounded-2xl p-6">
                  <div className="font-bold text-lg mb-3">Yield Gain</div>
                  <div className="text-sm leading-relaxed">
                    Based on 2024 farm trials in the US
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white rounded-2xl p-12 mb-4 shadow-xl">
                  <div className="text-8xl font-bold">5X</div>
                </div>
                <div className="bg-purple-600 text-white rounded-2xl p-6">
                  <div className="font-bold text-lg mb-3">ROI</div>
                  <div className="text-sm leading-relaxed">
                    Based on 10% yield gain in the farm trials
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}