import React from 'react';
export function StatsSection() {
  const stats = [{
    value: '200%+',
    label: 'Return On Investment'
  }, {
    value: '500+',
    label: 'Hectares Treated'
  }];
  return <section className="bg-gradient-to-r from-orange-800 to-orange-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <div className="text-white text-base opacity-90 font-medium">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}