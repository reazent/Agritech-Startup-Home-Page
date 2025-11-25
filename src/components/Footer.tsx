import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  const socialLinks = [{
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/reazent'
  }, {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/reazent'
  }, {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/reazent'
  }, {
    name: 'YouTube',
    icon: Youtube,
    url: '#' // Placeholder link
  }];
  return <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Reazent</h3>
            <p className="text-sm opacity-90 mb-4">
              Sustainable agricultural inputs for the modern farmer.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => {
              const Icon = social.icon;
              return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors" aria-label={social.name}>
                    <Icon className="w-4 h-4" />
                  </a>;
            })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Bio-Fertilizers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Soil Enhancers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Crop Protection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Growth Promoters
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/about" className="hover:text-orange-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-300 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-orange-300 transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@reazent.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (902) 830-8260</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Halifax, NS, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-center opacity-90">
          <p>&copy; 2025 Reazent Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}