'use client';

import SitePage from '@/components/SitePage';
import Link from 'next/link';
import { useState } from 'react';
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

export default function DummyHome() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <SitePage>
      {/* Header */}
      
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
                      hidden={index !== activeTestimonial}
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
    </SitePage>
  );
} 