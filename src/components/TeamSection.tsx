import React from 'react';
import { Linkedin } from 'lucide-react';
export function TeamSection() {
  const team = [{
    name: 'Sumit Verma',
    role: 'Co-Founder',
    image: "/team.jpg",
    expertise: ['Chemical Technology', 'Business Development', 'Product Development'],
    bio: 'Expert in chemical technology with extensive experience in business and product development.'
  }, {
    name: 'David Warner',
    role: 'Co-Founder',
    image: "/team.jpg",
    expertise: ['Ag Biologicals', 'Go to Market', 'Commercialization'],
    bio: 'Agricultural biologicals specialist with proven track record in commercialization and market strategy.'
  }];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-950 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto">
            Founding and advisory team with expertise in farming, R&D and
            commercialization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-80 bg-gradient-to-br from-purple-100 to-orange-50 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-purple-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-950 mb-2">
                    Expertise:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-sm font-medium">
                        {skill}
                      </span>)}
                  </div>
                </div>
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