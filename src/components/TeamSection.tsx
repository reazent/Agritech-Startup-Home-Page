import React from 'react';
import { Linkedin } from 'lucide-react';
export function TeamSection() {
  const team = [{
    name: 'Sumit Verma',
    role: 'Co-Founder',
    image: 'https://res.cloudinary.com/dulut6cce/image/upload/v1763581526/sumit%20verma%20photoshot.png',
    linkedinUrl: 'https://www.linkedin.com/in/sumitv/',
    expertise: ['Chemical Technology', 'Business Development', 'Product Development'],
    bio: 'Expert in chemical technology with extensive experience in business and product development.'
  }, {
    name: 'David Warner',
    role: 'Co-Founder',
    image: 'https://res.cloudinary.com/dulut6cce/image/upload/v1763583138/dave_warner_headshot_z0swts.png',
    linkedinUrl: 'https://www.linkedin.com/in/david-warner-agbio/',
    expertise: ['Ag Biologicals', 'Go to Market', 'Commercialization'],
    bio: 'Agricultural biologicals specialist with proven track record in commercialization and market strategy.'
  }];
  return <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-950 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-xl text-purple-900 max-w-3xl mx-auto">
            Founding and advisory team with expertise in farming, R&D and
            commercialization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Headshot Section */}
              <div className="relative h-96 bg-gradient-to-br from-orange-100 to-orange-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:border-purple-200 transition-all duration-300 block">
                    <img src={member.image} alt={member.name} className="w-full h-full object-contain" />
                  </a>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold text-purple-950 mb-2">
                  {member.name}
                </h3>
                <p className="text-xl text-orange-500 font-semibold mb-6">
                  {member.role}
                </p>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, idx) => <span key={idx} className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-semibold">
                        {skill}
                      </span>)}
                  </div>
                </div>

                {/* Bio */}
                <p className="text-base text-purple-900 leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* LinkedIn */}
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 hover:bg-purple-200 rounded-full transition-colors" aria-label={`${member.name}'s LinkedIn profile`}>
                  <Linkedin className="w-6 h-6 text-purple-600" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}