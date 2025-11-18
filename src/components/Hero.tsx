import React from 'react';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return <section className="relative bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-950 leading-tight mb-6">
              Sustainable Inputs.
              <br />
              <span className="text-orange-500">Higher Yields.</span>
            </h1>
            <p className="text-xl text-purple-900 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Revolutionary agricultural inputs that increase crop productivity
              while protecting the environment. Proven results for modern
              farmers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-lg">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Sustainable farming with healthy crops" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>;
}