'use client';

import Link from 'next/link';
import Header from "@/components/Header";

const services = [
  {
    title: "Website Design",
    description: "Professional websites that actually convert",
    price: "From £299",
    href: "/services",
    icon: "🌐"
  },
  {
    title: "Business Automation", 
    description: "Save hours with smart automation tools",
    price: "From £149",
    href: "/services",
    icon: "⚡"
  },
  {
    title: "Data Recovery",
    description: "Recover lost files and precious memories",
    price: "From £99",
    href: "/portfolio/data-recovery",
    icon: "💾"
  },
  {
    title: "Tech Support",
    description: "Ongoing maintenance and support",
    price: "From £49/month",
    href: "/services",
    icon: "🔧"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Affordable Digital Solutions
            </h1>
            <p className="text-2xl text-white/80 mb-8 leading-relaxed">
              Professional websites, automation, and tech support that won't break the bank
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-sgp-green text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-sgp-green/90 transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border-2 border-sgp-green text-sgp-green px-8 py-4 rounded-full font-semibold text-lg hover:bg-sgp-green hover:text-black transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Services */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quality at Fair Prices
              </h2>
              <p className="text-xl text-white/70">
                Professional digital services without the premium price tag
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:border-sgp-green/50 transition-all duration-300 group"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-3">{service.description}</p>
                  <div className="text-sgp-green font-bold">{service.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Businesses Choose SGP Digital
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Transparent Pricing</h3>
                <p className="text-white/60 text-sm">No hidden costs or surprise fees</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Turnaround</h3>
                <p className="text-white/60 text-sm">Most projects done in 2-4 weeks</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Results Driven</h3>
                <p className="text-white/60 text-sm">Solutions that grow your business</p>
              </div>
            </div>

            <div className="bg-black/40 border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-white/80 italic mb-4">
                "Steve transformed my old website into a modern, professional site that truly reflects my brand. 
                Patient, collaborative, and full of creative ideas."
              </p>
              <p className="text-sgp-green font-medium">- Natasha Hudson, Hudson Virtual</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Signposts */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Explore Our Work & Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/portfolio"
                className="bg-black/40 border border-white/10 rounded-xl p-8 hover:border-sgp-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Our Portfolio</h3>
                  <svg className="w-6 h-6 text-sgp-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 mb-4">
                  See real projects we've delivered for businesses like Hudson Virtual, Heartwood Wellbeing, and more.
                </p>
                <div className="text-sgp-green font-medium">View Client Success Stories →</div>
              </Link>

              <Link
                href="/services"
                className="bg-black/40 border border-white/10 rounded-xl p-8 hover:border-sgp-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Full Services</h3>
                  <svg className="w-6 h-6 text-sgp-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 mb-4">
                  Discover our complete range of affordable digital services, from websites to automation tools.
                </p>
                <div className="text-sgp-green font-medium">Explore All Services →</div>
              </Link>

              <Link
                href="/about"
                className="bg-black/40 border border-white/10 rounded-xl p-8 hover:border-sgp-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">About SGP Digital</h3>
                  <svg className="w-6 h-6 text-sgp-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/70 mb-4">
                  Learn about our mission to make professional digital services accessible to everyone.
                </p>
                <div className="text-sgp-green font-medium">Our Story →</div>
              </Link>

              <Link
                href="/contact"
                className="bg-sgp-green/10 border border-sgp-green/30 rounded-xl p-8 hover:border-sgp-green/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-sgp-green">Get Started</h3>
                  <svg className="w-6 h-6 text-sgp-green group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-white/80 mb-4">
                  Ready to transform your digital presence? Get in touch for a free consultation and quote.
                </p>
                <div className="text-sgp-green font-bold">Contact Us Today →</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Get your free quote today - no commitment required
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@sgpdigitalsolutions.co.uk"
                className="bg-sgp-green text-black px-8 py-3 rounded-full font-semibold hover:bg-sgp-green/90 transition-colors"
              >
                📧 Email Us
              </a>
              <a
                href="tel:+447516735792"
                className="border border-sgp-green text-sgp-green px-8 py-3 rounded-full font-semibold hover:bg-sgp-green hover:text-black transition-colors"
              >
                📱 Call Now
              </a>
            </div>
            
            <p className="text-white/60 text-sm mt-4">
              ⚡ Response within 24 hours guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-sgp-green mb-3">
              SGP Digital Solutions
            </h3>
            <p className="text-white/60 mb-4 text-sm">
              Affordable digital solutions for businesses that matter
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link href="/about" className="text-white/60 hover:text-sgp-green transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white/60 hover:text-sgp-green transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-white/60 hover:text-sgp-green transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-white/60 hover:text-sgp-green transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
