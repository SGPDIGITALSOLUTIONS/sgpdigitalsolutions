'use client';

import Link from 'next/link';
import Header from "@/components/Header";

const services = [
  {
    title: "Website Design",
    description: "Professional websites that convert visitors into customers",
    icon: "🌐",
    price: "From £299"
  },
  {
    title: "Business Automation", 
    description: "Save time with custom tools that handle repetitive tasks",
    icon: "⚡",
    price: "From £149"
  },
  {
    title: "Data Recovery",
    description: "Recover precious files from broken or damaged devices",
    icon: "💾",
    price: "From £99"
  },
  {
    title: "Maintenance & Support",
    description: "Keep your systems running smoothly with ongoing care",
    icon: "🔧",
    price: "From £49/month"
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

      {/* Value Proposition */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Quality Digital Solutions at Fair Prices
            </h2>
            <p className="text-xl text-white/70 mb-12">
              We believe everyone deserves access to professional digital services without the premium price tag
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-white mb-2">No Hidden Costs</h3>
                <p className="text-white/60">Transparent pricing with no surprise fees</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-white/60">Most projects completed within 2-4 weeks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-2">Results Focused</h3>
                <p className="text-white/60">Solutions that actually grow your business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-xl text-white/70">
                Professional solutions designed for small businesses and individuals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-black/40 border border-white/10 rounded-xl p-6 text-center hover:border-sgp-green/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-sgp-green font-bold text-lg">{service.price}</div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-sgp-green hover:text-sgp-green/80 transition-colors font-medium"
              >
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Real feedback from real businesses we've helped
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sgp-green rounded-full flex items-center justify-center text-black font-bold text-lg">
                    N
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Natasha Hudson</h4>
                    <p className="text-white/60 text-sm">Hudson Virtual</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Steve transformed my old website into a modern, professional site that truly reflects my brand. 
                  Patient, collaborative, and full of creative ideas."
                </p>
              </div>

              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sgp-green rounded-full flex items-center justify-center text-black font-bold text-lg">
                    T
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">Tony Wing</h4>
                    <p className="text-white/60 text-sm">Vision Care for Homeless People</p>
                  </div>
                </div>
                <p className="text-white/80 italic">
                  "Steve's automation solutions streamlined our workflows and saved significant time. 
                  High quality solutions with clear communication and quick turnaround times."
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sgp-green hover:text-sgp-green/80 transition-colors font-medium"
              >
                Read More Success Stories
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Get a free consultation and see how we can help your business grow with affordable digital solutions
            </p>
            
            <div className="bg-black/40 border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href="mailto:hello@sgpdigitalsolutions.co.uk"
                  className="flex-1 bg-sgp-green text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-sgp-green/90 transition-colors"
                >
                  📧 Email Us
                </a>
                <a
                  href="tel:+447516735792"
                  className="flex-1 border border-sgp-green text-sgp-green px-6 py-3 rounded-lg font-semibold text-center hover:bg-sgp-green hover:text-black transition-colors"
                >
                  📱 Call Now
                </a>
              </div>
              <p className="text-white/60 text-sm">
                ⚡ Response within 24 hours guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-sgp-green mb-4">
              SGP Digital Solutions
            </h3>
            <p className="text-white/70 mb-6">
              Affordable digital solutions for businesses that matter
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <Link href="/about" className="text-white/70 hover:text-sgp-green transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white/70 hover:text-sgp-green transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-white/70 hover:text-sgp-green transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-sgp-green transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              © 2024 SGP Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
