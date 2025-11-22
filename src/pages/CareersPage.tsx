import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Briefcase, Users, Target, Heart, TrendingUp } from 'lucide-react';
export function CareersPage() {
  // Replace this URL with your own hero image
  const heroImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop';
  const values = [{
    icon: Target,
    title: 'Mission-Driven',
    description: "We're committed to transforming agriculture for a sustainable future."
  }, {
    icon: Users,
    title: 'Collaborative',
    description: 'We believe the best solutions come from diverse perspectives working together.'
  }, {
    icon: TrendingUp,
    title: 'Growth-Focused',
    description: "We invest in our team's professional development and career advancement."
  }, {
    icon: Heart,
    title: 'Impact-Oriented',
    description: 'Your work directly helps farmers and contributes to environmental sustainability.'
  }];
  const openings = [{
    title: 'Agricultural Scientist',
    department: 'R&D',
    location: 'Halifax, NS',
    type: 'Full-time',
    description: 'Lead research initiatives in biological crop inputs and sustainable agriculture solutions.'
  }, {
    title: 'Field Agronomist',
    department: 'Field Operations',
    location: 'Multiple Locations',
    type: 'Full-time',
    description: 'Work directly with farmers to implement and evaluate our products in real-world conditions.'
  }, {
    title: 'Product Development Chemist',
    department: 'R&D',
    location: 'Halifax, NS',
    type: 'Full-time',
    description: 'Develop and optimize formulations using green chemistry principles.'
  }, {
    title: 'Business Development Manager',
    department: 'Sales & Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build relationships with distributors and expand our market presence.'
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image and Overlay Text */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroImage} alt="Careers at Reazent" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/80 to-orange-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Help us revolutionize agriculture through sustainable innovation.
              Build a career that makes a real difference for farmers and the
              planet.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-950 mb-4">
              Why Reazent?
            </h2>
            <p className="text-xl text-purple-900 max-w-3xl mx-auto">
              Join a team that's passionate about sustainable agriculture and
              making a positive impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-purple-900">{value.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-950 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-purple-900 max-w-3xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-950 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-900 rounded-full font-medium">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-900 rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-purple-900 mb-4">{job.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-12 text-center text-white shadow-xl">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals who share our
              passion for sustainable agriculture.
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Mail className="w-6 h-6" />
                <span className="text-xl font-semibold">
                  careers@reazent.com
                </span>
              </div>
              <p className="text-sm opacity-90">
                Send your resume and cover letter to join our team
              </p>
            </div>
            <p className="text-base opacity-90">
              Please include the position title in your email subject line. We
              review all applications and will contact qualified candidates for
              interviews.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}