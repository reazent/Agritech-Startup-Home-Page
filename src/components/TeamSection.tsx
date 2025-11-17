import React from 'react';
import { Linkedin } from 'lucide-react';
export function TeamSection() {
  const team = [{
    name: 'Dr. Sarah Chen',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    bio: 'PhD in Agricultural Biochemistry, 15+ years in sustainable farming research.'
  }, {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Former lead scientist at AgriTech Labs, expert in bio-fertilizer development.'
  }, {
    name: 'Emily Thompson',
    role: 'Head of Research',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    bio: 'Agronomist with field experience across 20+ crop types and climates.'
  }, {
    name: 'James Patterson',
    role: 'VP of Operations',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    bio: 'Supply chain expert ensuring quality from lab to field.'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto">
            Passionate experts dedicated to transforming agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-purple-900 mb-4">{member.bio}</p>
                <button className="text-purple-600 hover:text-purple-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}