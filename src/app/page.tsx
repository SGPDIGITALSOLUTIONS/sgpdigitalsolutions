'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";



const testimonials = [
  {
    quote: "Steve transformed my old website into a modern, professional site that truly reflects my brand. Patient, collaborative, and full of creative ideas.",
    author: "Natasha Hudson",
    role: "Hudson Virtual Business Solutions"
  },
  {
    quote: "Collaborating with Steve has been transformative for our charity. His expertise in technology and automation has not only streamlined our workflows but also uncovered opportunities for efficiencies in our operation not previously considered. From implementing online booking to automating numerous repetitive tasks, Steve has consistently delivered high quality solutions with clear communication and quick turnaround times.",
    author: "Tony Wing",
    role: "Vision Care for Homeless People"
  },
  {
    quote: "I had all my childrens baby photos saved on a laptop which had been broken for years, I also had lost the password for it as it had been so long. Steve managed to get my photos back aswell as fix my laptop and reinstall windows, I now have a working laptop again!",
    author: "Lana",
    role: "Personal Data Recovery Client"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-terminal-black">
      {/* Header */}
      <Header />
      
      {/* Original Hero Section with SGP branding and animation */}
      <Hero />

      {/* Stephen's Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Hi, I'm Stephen — welcome to SGP Digital Solutions.
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    If you're here, chances are you're trying to fix something that's slow, clunky, or just plain annoying. Or maybe you don't know why you're here... In which case, drop me a message anyway!
                  </p>
                  <p>
                    Maybe your website's out of date. Maybe you're wasting time on manual tasks. Maybe you're juggling too many systems that don't talk to each other.
                  </p>
                  <p className="text-sgp-green font-medium">
                    That's where we come in.
                  </p>
                  <p>
                    At SGP, we build clean, affordable digital solutions that work, without the jargon, the drama, or the agency price tag. Just smart tools for people doing the real work.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sgp-green font-semibold">Stephen Pratt</p>
                  <p className="text-white/60">Managing Director & Lead Developer</p>
                </div>
              </div>
              
              {/* Photo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img 
                    src="/images/SGP.jpg" 
                    alt="Stephen Pratt - Managing Director & Lead Developer at SGP Digital Solutions"
                    className="rounded-2xl shadow-2xl max-w-md w-full"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sgp-green/10 to-transparent pointer-events-none"></div>
                </div>
              </div>
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

            {/* Testimonial Carousel */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-8">What Our Clients Say</h3>
              
              <div className="relative">
                {/* Testimonial Cards */}
                <div className="relative min-h-[200px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === activeTestimonial 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8'
                      }`}
                    >
                      <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                        <p className="text-white/80 italic mb-4 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="text-center">
                          <p className="text-sgp-green font-medium">{testimonial.author}</p>
                          <p className="text-white/60 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 bg-sgp-green/20 border border-sgp-green/40 rounded-full flex items-center justify-center hover:bg-sgp-green/30 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <svg className="w-4 h-4 text-sgp-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 bg-sgp-green/20 border border-sgp-green/40 rounded-full flex items-center justify-center hover:bg-sgp-green/30 transition-colors"
                  aria-label="Next testimonial"
                >
                  <svg className="w-4 h-4 text-sgp-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-sgp-green w-6' 
                          : 'bg-white/30 hover:bg-sgp-green/50'
                      }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Testimonial CTA */}
              <div className="mt-12 text-center">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Ready to join them?
                </h4>
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-sgp-green text-black px-8 py-3 rounded-full font-semibold hover:bg-sgp-green/90 transition-colors"
                >
                  Get Your Free Quote
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
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
            
            {/* Portfolio CTA */}
            <div className="mt-12 text-center">
              <h4 className="text-xl font-semibold text-white mb-4">
                Ready to discuss your project?
              </h4>
              <Link
                href="/contact"
                className="inline-flex items-center border border-sgp-green text-sgp-green px-8 py-3 rounded-full font-semibold hover:bg-sgp-green hover:text-black transition-colors"
              >
                Book a Free Scoping Call
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sgp-green/10 to-sgp-green/5 border border-sgp-green/20 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need something custom?
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Every business is unique. If you don't see exactly what you need, just ask us. 
                We love solving unusual problems and building bespoke solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@sgpdigitalsolutions.co.uk?subject=Custom Project Inquiry"
                  className="bg-sgp-green text-black px-8 py-3 rounded-full font-semibold hover:bg-sgp-green/90 transition-colors"
                >
                  📧 Email Your Ideas
                </a>
                <a
                  href="https://wa.me/447516735792?text=Hi,%20I'd%20like%20to%20discuss%20a%20custom%20project"
                  className="border border-sgp-green text-sgp-green px-8 py-3 rounded-full font-semibold hover:bg-sgp-green hover:text-black transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-sgp-green mb-4">
                  SGP Digital Solutions
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  We do the digital work. For people who do the real work.
                  <br />
                  Affordable websites, automation, and tech support that actually makes sense.
                </p>
                
                {/* Trust Badges */}
                <div className="mb-6 space-y-2">
                  <div className="flex items-center text-sm text-white/60">
                    <svg className="w-4 h-4 text-sgp-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Fully Insured Business
                  </div>
                  <div className="flex items-center text-sm text-white/60">
                    <svg className="w-4 h-4 text-sgp-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.5-4.5L21 12l-6.5 6.5M3 12l6.5-6.5L15 12l-6.5 6.5L3 12z" />
                    </svg>
                    ICO Registered (Data Protection)
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/sgp-digital-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-sgp-green/20 hover:border-sgp-green/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-white/60 hover:text-sgp-green transition-colors">Home</Link></li>
                  <li><Link href="/services" className="text-white/60 hover:text-sgp-green transition-colors">Services</Link></li>
                  <li><Link href="/portfolio" className="text-white/60 hover:text-sgp-green transition-colors">Portfolio</Link></li>
                  <li><Link href="/about" className="text-white/60 hover:text-sgp-green transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-white/60 hover:text-sgp-green transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-sgp-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hello@sgpdigitalsolutions.co.uk" className="text-white/70 hover:text-sgp-green transition-colors">
                      hello@sgpdigitalsolutions.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-sgp-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="https://wa.me/447516735792" className="text-white/70 hover:text-sgp-green transition-colors">
                      whatsapp me
                    </a>
                  </div>
                  <div className="text-white/50 text-sm mt-2">
                    ⚡ Response within 24 hours
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/50 text-sm">
                © 2025 SGP Digital Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-white/50 hover:text-sgp-green transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/50 hover:text-sgp-green transition-colors text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
