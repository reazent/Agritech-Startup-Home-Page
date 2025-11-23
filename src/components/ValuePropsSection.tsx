import React from 'react';
import { Leaf, TrendingUp, DollarSign, Shield } from 'lucide-react';
export function ValuePropsSection() {
  const benefits = [{
    icon: Leaf,
    title: 'Sustainable & Eco-Friendly',
    description: 'Bio-based inputs that enrich soil health and reduce environmental impact without compromising performance.',
    color: 'orange'
  }, {
    icon: TrendingUp,
    title: 'Proven Yield Increase',
    description: 'Field-tested formulations that consistently deliver 200-400% ROI across multiple crop types.',
    color: 'purple'
  }, {
    icon: DollarSign,
    title: 'Cost-Effective Solution',
    description: 'Lower application rates and longer-lasting effects mean better ROI for your farming operation.',
    color: 'purple'
  }, {
    icon: Shield,
    title: 'Safe & Certified',
    description: 'Fully certified organic inputs that are safe for farmers, crops, and consumers. No harmful residues.',
    color: 'orange'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
            Why Farmers Choose Us
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto font-medium">
            Combining cutting-edge agricultural science with sustainable
            practices for the future of farming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          const bgColor = benefit.color === 'orange' ? 'bg-orange-100' : 'bg-purple-100';
          const iconColor = benefit.color === 'orange' ? 'text-orange-500' : 'text-purple-600';
          return <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${bgColor} rounded-full mb-6`}>
                  <Icon className={`w-8 h-8 ${iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-purple-950 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-purple-900 font-medium">
                  {benefit.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}