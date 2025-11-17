import React from 'react';
import { Beaker, Sprout, BarChart3 } from 'lucide-react';
export function HowItWorksSection() {
  const steps = [{
    icon: Beaker,
    title: 'Advanced Formulation',
    description: 'Our bio-based inputs are developed using cutting-edge agricultural science and natural compounds.'
  }, {
    icon: Sprout,
    title: 'Easy Application',
    description: 'Simple integration with existing farming practices. Compatible with standard equipment and methods.'
  }, {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Track improvements in soil health, plant vigor, and yield metrics throughout the growing season.'
  }];
  return <section className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto font-medium">
            Three simple steps to transform your agricultural productivity
            sustainably.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
          const Icon = step.icon;
          const numberBg = index % 2 === 0 ? 'bg-orange-500' : 'bg-purple-600';
          const iconColor = index % 2 === 0 ? 'text-orange-500' : 'text-purple-600';
          const connectorColor = index % 2 === 0 ? 'bg-orange-200' : 'bg-purple-200';
          return <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${numberBg} text-white rounded-lg mb-6 font-bold text-xl`}>
                    {index + 1}
                  </div>
                  <div className="mb-6">
                    <Icon className={`w-12 h-12 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-950 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-purple-900 font-medium">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && <div className={`hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 ${connectorColor}`} />}
              </div>;
        })}
        </div>
      </div>
    </section>;
}