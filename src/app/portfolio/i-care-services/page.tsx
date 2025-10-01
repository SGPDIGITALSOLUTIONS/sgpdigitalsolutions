'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function ICareServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link 
                href="/portfolio" 
                className="text-sgp-green hover:text-sgp-green/80 transition-colors mr-4"
              >
                ← Back to Portfolio
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-sgp-green/10 text-sgp-green text-sm font-medium px-3 py-1 rounded-full">
                    Website Design
                  </span>
                  <span className="bg-cyan-500/10 text-cyan-400 text-sm font-medium px-3 py-1 rounded-full">
                    Integration
                  </span>
                  <span className="bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full">
                    Bespoke WebTools
                  </span>
                  <span className="bg-red-500/10 text-red-400 text-sm font-medium px-3 py-1 rounded-full">
                    Automation
                  </span>
                </div>
                
                <h1 className="text-5xl font-bold text-white mb-6">
                  I Care Service Provider Ltd
                </h1>
                
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  A comprehensive healthcare e-commerce platform for mobile optometry services, 
                  combining modern web technologies with medical compliance and patient engagement.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <span className="bg-sgp-green text-black px-4 py-2 rounded-full font-semibold">
                    Completed
                  </span>
                  <span className="text-white/60 text-sm flex items-center">
                    Healthcare / Optometry • Yorkshire, UK
                  </span>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <Image
                    src="/portfolio/eyecareproviderlogo.jpg"
                    alt="I Care Service Provider Ltd Logo"
                    width={320}
                    height={240}
                    className="rounded-xl shadow-lg object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-sgp-green mb-4">The Challenge</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Create a professional and accessible digital platform for a mobile optometry service 
                  that would enable seamless home-visit bookings, subscription management, and patient 
                  communication. The platform needed to combine healthcare service delivery with modern 
                  e-commerce capabilities while maintaining medical privacy standards and regulatory compliance.
                </p>
                
                <h3 className="text-xl font-semibold text-sgp-green mb-4">The Solution</h3>
                <p className="text-white/80 leading-relaxed">
                  Developed a comprehensive healthcare service platform featuring custom-built subscription 
                  management, secure payment processing, interactive postcode coverage checker, and 
                  multi-channel communication system with advanced SEO optimization and GDPR-compliant data handling.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-sgp-green mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Custom-built subscription management system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Secure payment processing with Stripe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Interactive postcode coverage checker</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Multi-channel communication system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">Advanced SEO optimization with Schema.org markup</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">GDPR-compliant data handling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Implementation</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">Frontend & Design</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Interactive service tabs</li>
                  <li>• Dynamic image carousel</li>
                  <li>• Mobile-first responsive design</li>
                  <li>• Custom CSS styling</li>
                </ul>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">Backend & Integration</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Node.js & Express.js</li>
                  <li>• Stripe payment integration</li>
                  <li>• Email notification system</li>
                  <li>• WhatsApp support integration</li>
                </ul>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">Automation & Data</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Webforms create data in Microsoft</li>
                  <li>• Automated email updates</li>
                  <li>• Area coverage search functionality</li>
                  <li>• Patient data management</li>
                </ul>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">SEO & Analytics</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Advanced SEO optimization</li>
                  <li>• Schema.org structured data</li>
                  <li>• Vercel Analytics integration</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">Compliance & Security</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• GDPR-compliant data handling</li>
                  <li>• Medical privacy standards</li>
                  <li>• Secure payment processing</li>
                  <li>• Data protection compliance</li>
                </ul>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-sgp-green mb-4">User Experience</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Patient testimonial showcase</li>
                  <li>• Comprehensive service documentation</li>
                  <li>• Intuitive booking system</li>
                  <li>• Multi-channel support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Results & Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-sgp-green mb-6">Key Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Professional healthcare platform with e-commerce capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Streamlined subscription management system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Enhanced patient engagement through multiple channels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Optimized SEO with structured data implementation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">GDPR-compliant patient data handling</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Integrated payment processing with subscription management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Mobile-responsive design for accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Comprehensive analytics tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-white/80">Automated patient communication system</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-sgp-green mb-6">Business Impact</h3>
                <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                  <p className="text-white/80 leading-relaxed mb-4">
                    The platform successfully combines healthcare service delivery with modern web technologies, 
                    providing a professional and accessible solution for both patients and healthcare providers.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    The implementation of features like the Advanced Eye Care Plan subscription and multi-channel 
                    support has enhanced patient engagement and service delivery efficiency, while maintaining 
                    the highest standards of medical compliance and data protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Technologies Used</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Node.js',
                'Express.js', 
                'Stripe Payment Integration',
                'Custom CSS',
                'Vercel Analytics',
                'Email Integration',
                'WhatsApp Integration',
                'Schema.org Markup',
                'GDPR Compliance',
                'Mobile-First Design',
                'SEO Optimization',
                'Microsoft Integration'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/5 text-white/80 text-sm rounded-full border border-white/10 hover:border-sgp-green/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sgp-green/10 border-t border-sgp-green/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Similar Healthcare Platform?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We specialize in creating compliant, professional healthcare platforms that combine 
              modern technology with medical industry standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sgp-green text-black px-8 py-4 rounded-full font-semibold hover:bg-sgp-green/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="border border-sgp-green text-sgp-green px-8 py-4 rounded-full font-semibold hover:bg-sgp-green hover:text-black transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
