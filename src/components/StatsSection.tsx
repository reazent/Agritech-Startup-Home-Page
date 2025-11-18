import React from 'react';
export function StatsSection() {
  const stats = [{
    value: '35%',
    label: 'Average Yield Increase'
  }, {
    value: '50K+',
    label: 'Hectares Treated'
  }, {
    value: '2,000+',
    label: 'Farmers Trust Us'
  }, {
    value: '60%',
    label: 'Reduction in Chemical Use'
  }];
  return <section className="bg-gradient-to-r from-purple-900 to-purple-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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