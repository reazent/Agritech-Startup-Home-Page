import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Calendar, ArrowRight } from 'lucide-react';
export function NewsPage() {
  useDocumentTitle('News & Updates - Reazent');
  // Replace this URL with your own hero image
  const heroImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=800&fit=crop';
  const newsItems = [{
    date: 'January 15, 2025',
    category: 'Product Launch',
    title: 'Prodigy Now Available in 14 States',
    excerpt: 'Our flagship seed treatment product Prodigy has received regulatory approval and is now commercially available across key soybean-growing states in the US.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop'
  }, {
    date: 'December 10, 2024',
    category: 'Research',
    title: '2024 Field Trials Show 10% Yield Increase',
    excerpt: 'Comprehensive field trials across multiple locations demonstrate consistent yield improvements with Prodigy seed treatment in soybean production.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop'
  }, {
    date: 'November 5, 2024',
    category: 'Certification',
    title: 'Prodigy Receives OMRI Listing',
    excerpt: "Reazent's Prodigy seed treatment has been approved by the Organic Materials Review Institute (OMRI), making it available for organic soybean production.",
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop'
  }];
  const categoryColors: Record<string, string> = {
    'Product Launch': 'bg-green-100 text-green-800',
    Research: 'bg-blue-100 text-blue-800',
    Certification: 'bg-purple-100 text-purple-800',
    Partnership: 'bg-orange-100 text-orange-800',
    Company: 'bg-pink-100 text-pink-800'
  };
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image and Overlay Text */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroImage} alt="News & Updates" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/80 to-orange-900/80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              Stay informed about our latest product launches, research
              findings, partnerships, and company milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <img src={newsItems[0].image} alt={newsItems[0].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[newsItems[0].category]}`}>
                    {newsItems[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-purple-900">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{newsItems[0].date}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-purple-950 mb-4">
                  {newsItems[0].title}
                </h2>
                <p className="text-lg text-purple-900 mb-6">
                  {newsItems[0].excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors">
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-purple-950 mb-12 text-center">
            Recent Updates
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {newsItems.slice(1).map((item, index) => <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-900 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-950 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-purple-900 mb-4">{item.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition-colors text-sm">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest news, product updates,
              and agricultural insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-lg text-purple-950 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}