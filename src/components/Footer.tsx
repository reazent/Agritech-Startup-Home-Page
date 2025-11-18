import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">Reazent</h3>
            <p className="text-sm opacity-90">
              Sustainable agricultural inputs for the modern farmer.
            </p>
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
                <a href="#" className="hover:text-orange-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors">
                  News
                </a>
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