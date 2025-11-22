import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    label: 'Products',
    href: '/products'
  }, {
    label: 'Technology',
    href: '/technology'
  }, {
    label: 'About',
    href: '/about'
  }, {
    label: 'Contact',
    href: '/contact'
  }];
  return <header className="sticky top-0 z-50 bg-white border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="https://res.cloudinary.com/dulut6cce/image/upload/v1763650633/ReazentLogoUpdatedSep2022_oxfdsf.png" alt="Reazent Logo" className="h-10 object-contain" onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} />
              <div className="hidden w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => {
            const isRoute = item.href.startsWith('/');
            return isRoute ? <Link key={item.label} to={item.href} className="text-purple-900 hover:text-orange-500 transition-colors font-medium">
                  {item.label}
                </Link> : <a key={item.label} href={item.href} className="text-purple-900 hover:text-orange-500 transition-colors font-medium">
                  {item.label}
                </a>;
          })}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-purple-900 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col gap-4">
              {menuItems.map(item => {
            const isRoute = item.href.startsWith('/');
            return isRoute ? <Link key={item.label} to={item.href} className="text-purple-900 hover:text-orange-500 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </Link> : <a key={item.label} href={item.href} className="text-purple-900 hover:text-orange-500 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                    {item.label}
                  </a>;
          })}
            </nav>
          </div>}
      </div>
    </header>;
}