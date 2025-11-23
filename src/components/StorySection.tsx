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
                Reazent emerged from a simple question: How can
                we help farmers grow more while protecting the planet?
              </p>
              <p>
                Reazent exemplifies the successful translation of a research 
                breakthrough into a commercial product. The core technology, 
                originating from Joseph Kloepper's lab, has been further developed 
                through years of research and development.
              </p>
              
              <p>
                Today, we partner with a network of farmers who share our vision
                of productive, sustainable agriculture. Every product we develop
                is rigorously tested in real field conditions, ensuring it
                delivers measurable results.
              </p>
            </div>
          </div>
          <div className="relative">
            <img src="https://res.cloudinary.com/dulut6cce/image/upload/v1763855702/soy_field_monnho.jpg" alt="Soybean field" className="rounded-2xl shadow-xl w-full object-cover h-full" />
          </div>
        </div>
      </div>
    </section>;
}