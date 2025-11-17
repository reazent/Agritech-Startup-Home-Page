import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: 'Email',
    value: 'info@reazent.com',
    link: 'mailto:info@reazent.com'
  }, {
    icon: Phone,
    title: 'Phone',
    value: '+1 (902) 830-8260',
    link: 'tel:+19028308260'
  }, {
    icon: MapPin,
    title: 'Location',
    value: 'Halifax, NS, Canada',
    link: null
  }];
  return <div className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-purple-950 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Have questions about our products? Want to partner with us? We'd
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-purple-950 mb-6">
                Contact Information
              </h2>
              <p className="text-purple-900 mb-8">
                Reach out to our team and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-purple-950 mb-1">
                            {info.title}
                          </h3>
                          <p className="text-purple-900">{info.value}</p>
                        </div>
                      </div>
                    </div>;
                return info.link ? <a key={index} href={info.link} className="block">
                      {content}
                    </a> : <div key={index}>{content}</div>;
              })}
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-purple-950 mb-3">
                  Office Hours
                </h3>
                <div className="space-y-2 text-purple-900">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM AST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-purple-950 mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-purple-950 mb-2">
                      Full Name *
                    </label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="John Doe" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-purple-950 mb-2">
                      Email Address *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-purple-950 mb-2">
                      Company / Farm Name
                    </label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your Company" />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-purple-950 mb-2">
                      Subject *
                    </label>
                    <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Request Demo</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-purple-950 mb-2">
                      Message *
                    </label>
                    <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-3 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none" placeholder="Tell us about your needs..." />
                  </div>

                  <button type="submit" className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}