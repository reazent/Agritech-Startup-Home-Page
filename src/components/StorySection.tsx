import React from 'react';
export function StorySection() {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-purple-900">
              <p className="text-lg">
                Founded in 2018, Reazent emerged from a simple question: How can
                we help farmers grow more while protecting the planet?
              </p>
              <p>
                Our team of agronomists and biochemists spent years researching
                sustainable alternatives to traditional agricultural inputs.
                What started in a small lab in Halifax has grown into a movement
                transforming farming practices across North America.
              </p>
              <p>
                Today, we partner with over 2,000 farmers who share our vision
                of productive, sustainable agriculture. Every product we develop
                is rigorously tested in real field conditions, ensuring it
                delivers measurable results.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop" alt="Research team in laboratory" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </div>
    </section>;
}