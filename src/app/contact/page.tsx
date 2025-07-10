'use client';

import { useState } from 'react';
import Header from "@/components/Header";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again.');
      }

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@sgpdigitalsolutions.co.uk',
      link: 'mailto:hello@sgpdigitalsolutions.co.uk',
      description: 'Send us an email anytime'
    },
    {
      icon: '📱',
              title: 'WhatsApp',
        value: 'whatsapp me',
        link: 'https://wa.me/447516735792',
        description: 'Message us anytime'
    },
    {
      icon: '💬',
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
      description: 'We always get back to you quickly'
    }
  ];

  const services = [
    'Website Design',
    'Bespoke WebTools',
    'Integration',
    'Automation',
    'Data Recovery',
    'Maintenance',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Let's Work Together
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Ready to transform your digital presence? We'd love to hear about your project 
              and discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:border-sgp-green/50 transition-colors group"
                >
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  {method.link ? (
                    <a 
                      href={method.link}
                      className="text-sgp-green font-medium hover:text-sgp-green/80 transition-colors block mb-2"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-sgp-green font-medium mb-2">{method.value}</p>
                  )}
                  <p className="text-white/60 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Send Us a Message
                </h2>
                
                {success ? (
                  <div className="bg-sgp-green/10 border border-sgp-green/30 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-4">✓</div>
                    <h3 className="text-xl font-bold text-sgp-green mb-2">Message Sent!</h3>
                    <p className="text-white/80">Thank you for your message! We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 text-sgp-green hover:text-sgp-green/80 transition-colors underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                        <p className="text-red-400">{error}</p>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="Your name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="your@email.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="Your phone number"
                          disabled={isSubmitting}
                        />
                      </div>
                      
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-white/80 mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          disabled={isSubmitting}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-black">
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-sgp-green text-black px-6 py-4 rounded-lg font-semibold hover:bg-sgp-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Additional Information */}
              <div className="space-y-8">
                <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose SGP Digital?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">⚡</div>
                      <div>
                        <h4 className="font-semibold text-white">Fast Response</h4>
                        <p className="text-white/70 text-sm">We respond to all inquiries within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">🎯</div>
                      <div>
                        <h4 className="font-semibold text-white">Tailored Solutions</h4>
                        <p className="text-white/70 text-sm">Every project is customized to your specific needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="text-sgp-green text-xl">💡</div>
                      <div>
                        <h4 className="font-semibold text-white">Expert Guidance</h4>
                        <p className="text-white/70 text-sm">We'll guide you through every step of the process</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-sgp-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Initial Consultation</h4>
                        <p className="text-white/70 text-sm">We'll discuss your project and requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sgp-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-white">Custom Proposal</h4>
                        <p className="text-white/70 text-sm">Receive a detailed proposal with timeline and pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-sgp-green text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Project Kickoff</h4>
                        <p className="text-white/70 text-sm">We start building your digital solution</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-sgp-green/10 border border-sgp-green/30 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-sgp-green mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 mb-6">
                    Don't hesitate to reach out! We're here to help turn your digital vision into reality.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:hello@sgpdigitalsolutions.co.uk"
                      className="inline-flex items-center justify-center bg-sgp-green text-black px-6 py-3 rounded-lg font-medium hover:bg-sgp-green/90 transition-colors"
                    >
                      📧 Email Us Direct
                    </a>
                    <a
                      href="https://wa.me/447516735792"
                      className="inline-flex items-center justify-center border border-sgp-green text-sgp-green px-6 py-3 rounded-lg font-medium hover:bg-sgp-green hover:text-black transition-colors"
                    >
                                              📱 WhatsApp Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 