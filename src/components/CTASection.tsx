import React from 'react';
import { ArrowRight } from 'lucide-react';
export function CTASection() {
  return <section className="py-20 bg-gradient-to-r from-purple-700 to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Increase Your Crop Yield Sustainably?
        </h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of farmers who are already seeing better results with
          our sustainable agricultural inputs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>;
}