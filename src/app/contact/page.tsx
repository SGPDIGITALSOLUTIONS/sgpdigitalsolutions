'use client';

import { useEffect } from 'react';
import Header from "@/components/Header";

export default function ContactPage() {
  useEffect(() => {
    // Zapier form submission handler
    const handleFormSubmit = (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      const successMessage = document.getElementById('successMessage');
      const formContainer = document.getElementById('formContainer');

      // Debug: Log all form data
      console.log('=== FORM SUBMISSION DEBUG ===');
      console.log('Form data entries:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      // Show loading state
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <span class="flex items-center justify-center">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending...
        </span>
      `;

      // Try URL-encoded format first
      const urlEncodedData = new URLSearchParams(formData as any).toString();
      console.log('URL-encoded data being sent:', urlEncodedData);
      
      fetch("https://hooks.zapier.com/hooks/catch/23742018/u3n92gq/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData
      })
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response ok:', response.ok);
        
        if (response.ok || response.status === 200) {
          // Show success message on same page
          if (formContainer && successMessage) {
            formContainer.style.display = 'none';
            successMessage.style.display = 'block';
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .catch(error => {
        console.error('First attempt failed, trying FormData approach:', error);
        
        // Fallback: Try with FormData (no headers)
        return fetch("https://hooks.zapier.com/hooks/catch/23742018/u3n92gq/", {
          method: "POST",
          body: formData
        })
        .then(response => {
          console.log('Fallback response status:', response.status);
          if (response.ok || response.status === 200) {
            if (formContainer && successMessage) {
              formContainer.style.display = 'none';
              successMessage.style.display = 'block';
            }
          } else {
            throw new Error(`Fallback also failed! status: ${response.status}`);
          }
        });
      })
      .catch(error => {
        console.error('All form submission attempts failed:', error);
        alert(`Failed to send message: ${error.message}. Please contact us directly at hello@sgpdigitalsolutions.co.uk or WhatsApp us.`);
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
      });
    };

    const form = document.getElementById("zapierForm");
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    }

    // Cleanup
    return () => {
      if (form) {
        form.removeEventListener("submit", handleFormSubmit);
      }
    };
  }, []);

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
                
                {/* Success Message */}
                <div id="successMessage" className="bg-sgp-green/10 border border-sgp-green/30 rounded-lg p-6 text-center" style={{display: 'none'}}>
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-sgp-green mb-2">Message Sent!</h3>
                  <p className="text-white/80">Thank you for your message! We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => {
                      const successMessage = document.getElementById('successMessage');
                      const formContainer = document.getElementById('formContainer');
                      if (successMessage && formContainer) {
                        successMessage.style.display = 'none';
                        formContainer.style.display = 'block';
                        const form = document.getElementById('zapierForm') as HTMLFormElement;
                        if (form) form.reset();
                      }
                    }}
                    className="mt-4 text-sgp-green hover:text-sgp-green/80 transition-colors underline"
                  >
                    Send another message
                  </button>
                </div>

                {/* Zapier Form */}
                <div id="formContainer">
                  <form id="zapierForm" className="space-y-6">
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
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="Your name"
                          required
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
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="your@email.com"
                          required
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
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
                          placeholder="Your phone number"
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
                          className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors"
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
                        rows={6}
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:border-sgp-green focus:ring-1 focus:ring-sgp-green transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-sgp-green text-black px-6 py-4 rounded-lg font-semibold hover:bg-sgp-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
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