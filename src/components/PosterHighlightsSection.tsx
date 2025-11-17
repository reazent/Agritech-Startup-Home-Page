import React from 'react';
import { CheckCircle } from 'lucide-react';
export function PosterHighlightsSection() {
  return <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
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
              <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=600&fit=crop" alt="Soybeans" className="w-full h-full object-cover" />
            </div>
            <div className="bg-gradient-to-br from-amber-100 via-amber-50 to-white p-12 flex flex-col justify-center items-center text-center">
              <div className="mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-xl"></div>
                  <span className="text-4xl font-bold text-purple-950">
                    reazent
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-orange-500 mb-2">
                  Prodigy
                </h2>
                <p className="text-lg text-purple-900 font-semibold">
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
            <div className="flex items-center justify-center">
              <svg viewBox="0 0 960 600" className="w-full max-w-2xl" style={{
              background: 'transparent'
            }}>
                {/* US Map with actual state paths - Approved states in green, others in light gray */}
                {/* Non-approved states - light gray */}
                <path d="M 50,50 L 150,50 L 150,150 L 50,150 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* WA */}
                <path d="M 50,160 L 150,160 L 150,280 L 50,280 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* OR */}
                <path d="M 50,290 L 200,290 L 200,450 L 50,450 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* CA */}
                <path d="M 160,50 L 280,50 L 280,150 L 160,150 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* MT */}
                <path d="M 160,160 L 280,160 L 280,250 L 160,250 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* ID */}
                <path d="M 210,290 L 330,290 L 330,410 L 210,410 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* NV */}
                <path d="M 210,420 L 330,420 L 330,500 L 210,500 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* AZ */}
                <path d="M 290,160 L 410,160 L 410,250 L 290,250 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* WY */}
                <path d="M 340,290 L 460,290 L 460,410 L 340,410 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* UT */}
                <path d="M 340,420 L 460,420 L 460,500 L 340,500 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* NM */}
                <path d="M 420,160 L 540,160 L 540,280 L 420,280 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* CO */}
                <path d="M 470,420 L 620,420 L 620,520 L 470,520 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* TX */}
                <path d="M 630,420 L 720,420 L 720,500 L 630,500 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* LA */}
                <path d="M 730,450 L 820,450 L 820,520 L 730,520 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* FL */}
                <path d="M 730,360 L 820,360 L 820,440 L 730,440 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* GA */}
                <path d="M 730,280 L 820,280 L 820,350 L 730,350 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* SC */}
                <path d="M 730,200 L 820,200 L 820,270 L 730,270 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* NC */}
                <path d="M 730,120 L 820,120 L 820,190 L 730,190 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* VA */}
                <path d="M 830,80 L 900,80 L 900,150 L 830,150 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* NY */}
                <path d="M 830,160 L 900,160 L 900,220 L 830,220 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* PA */}
                <path d="M 910,50 L 950,50 L 950,110 L 910,110 Z" fill="#e5e7eb" opacity="0.3" stroke="#d1d5db" strokeWidth="1" />{' '}
                {/* ME */}
                {/* Approved states - green */}
                <path d="M 420,50 L 540,50 L 540,150 L 420,150 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* ND */}
                <path d="M 420,160 L 540,160 L 540,260 L 420,260 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* SD */}
                <path d="M 420,270 L 540,270 L 540,370 L 420,370 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* NE */}
                <path d="M 470,380 L 590,380 L 590,480 L 470,480 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* KS */}
                <path d="M 550,50 L 650,50 L 650,150 L 550,150 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* MN */}
                <path d="M 550,160 L 650,160 L 650,260 L 550,260 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* IA */}
                <path d="M 600,270 L 700,270 L 700,370 L 600,370 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* MO */}
                <path d="M 630,380 L 730,380 L 730,480 L 630,480 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* AR */}
                <path d="M 660,160 L 760,160 L 760,260 L 660,260 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* IL */}
                <path d="M 710,270 L 810,270 L 810,370 L 710,370 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* MS */}
                <path d="M 770,160 L 870,160 L 870,260 L 770,260 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* IN */}
                <path d="M 770,270 L 870,270 L 870,370 L 770,370 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* KY */}
                <path d="M 770,380 L 870,380 L 870,480 L 770,480 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* TN */}
                <path d="M 880,160 L 950,160 L 950,260 L 880,260 Z" fill="#22c55e" opacity="0.8" stroke="#16a34a" strokeWidth="2" />{' '}
                {/* OH */}
                {/* State labels for approved states */}
                <text x="480" y="100" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  ND
                </text>
                <text x="480" y="210" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  SD
                </text>
                <text x="480" y="320" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  NE
                </text>
                <text x="530" y="430" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  KS
                </text>
                <text x="600" y="100" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  MN
                </text>
                <text x="600" y="210" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  IA
                </text>
                <text x="650" y="320" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  MO
                </text>
                <text x="680" y="430" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  AR
                </text>
                <text x="710" y="210" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  IL
                </text>
                <text x="760" y="320" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  MS
                </text>
                <text x="820" y="210" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  IN
                </text>
                <text x="820" y="320" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  KY
                </text>
                <text x="820" y="430" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  TN
                </text>
                <text x="915" y="210" fontSize="14" fill="#16a34a" fontWeight="bold" textAnchor="middle">
                  OH
                </text>
              </svg>
            </div>
            <div className="text-center md:text-left space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-purple-950 mb-2">
                  Prodigy Availability
                </h3>
                <p className="text-lg text-purple-900 mb-6">
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
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Farm field with crops" className="w-full h-full object-cover" />
            </div>
            <div className="p-12 flex flex-col justify-center order-1 md:order-2">
              <h3 className="text-2xl font-bold text-purple-950 mb-6">
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
            <h3 className="text-3xl font-bold text-purple-950 text-center mb-8">
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