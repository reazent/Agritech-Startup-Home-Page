import React from 'react';
import { Leaf, Users, Target, Lightbulb } from 'lucide-react';
export function ValuesSection() {
  const values = [{
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Every decision we make prioritizes environmental impact and long-term soil health.'
  }, {
    icon: Users,
    title: 'Farmer Partnership',
    description: 'We work alongside farmers, listening to their needs and co-creating solutions.'
  }, {
    icon: Target,
    title: 'Results-Driven',
    description: 'Our products are backed by rigorous field testing and proven yield improvements.'
  }, {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously research and develop cutting-edge agricultural technologies.'
  }];
  return <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
          const Icon = value.icon;
          return <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-purple-950 mb-2">
                  {value.title}
                </h3>
                <p className="text-purple-900">{value.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}