import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function HudsonVirtualProject() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link 
              href="/portfolio" 
              className="inline-flex items-center text-sgp-green hover:text-white transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>

            {/* Project Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">
                Hudson Virtual Business Services
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Modern, professional website featuring interactive pricing cards, booking system integration, testimonials, and conversion-optimized design with purple theme and animated elements
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-sgp-green/10 text-sgp-green rounded-full text-sm">
                  Website Design
                </span>
                <span className="px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm">
                  Live
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
              <Image
                src="/portfolio/hudsonvirtualfinal.png"
                alt="Hudson Virtual Business Services Website"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              
              {/* Client Information */}
              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">About the Client</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Company</h3>
                    <p className="text-white/70">Hudson Virtual Business Services</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Owner</h3>
                    <p className="text-white/70">Tasha Hudson</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Industry</h3>
                    <p className="text-white/70">Virtual Assistant Services</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Location</h3>
                    <p className="text-white/70">United Kingdom</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Design Theme</h3>
                    <p className="text-white/70">Purple & Light Purple with Montserrat Font</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Next.js</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Framer Motion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">React Hook Form</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Calendly Integration</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>
            
            <div className="bg-black/40 rounded-xl border border-white/10 p-8 mb-8">
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Challenge</h3>
              <p className="text-white/70 mb-6">
                Tasha Hudson needed a professional website that would effectively showcase her virtual assistant 
                services while building trust with potential clients. The site needed to include interactive 
                pricing cards, booking system integration, testimonials, and conversion optimization to help 
                her business grow and attract quality leads.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Solution</h3>
              <p className="text-white/70 mb-6">
                Built a modern, conversion-optimized website using Next.js with TypeScript, featuring a 
                professional purple color scheme with Montserrat typography. Integrated Framer Motion for 
                smooth animations, React Hook Form for seamless contact forms, and Calendly integration for 
                automated booking. The site includes interactive pricing cards, testimonials, case studies, 
                and a comprehensive resources section with blog and downloadable guides.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Results</h3>
              <ul className="text-white/70 space-y-2">
                <li>• Professional purple-themed design that builds trust and credibility</li>
                <li>• Interactive pricing cards and service comparison tables</li>
                <li>• Automated booking system with Calendly integration</li>
                <li>• Animated statistics section and smooth page transitions</li>
                <li>• Comprehensive testimonials and case studies showcase</li>
                <li>• Resources section with blog and downloadable guides</li>
                <li>• Mobile-responsive design optimized for all devices</li>
                <li>• Google Analytics integration for performance tracking</li>
              </ul>
            </div>

            {/* Website Features */}
            <div className="bg-black/40 rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Key Website Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Professional Hero Section</h4>
                      <p className="text-white/70 text-sm">Clear value proposition with compelling calls-to-action</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Interactive Pricing Cards</h4>
                      <p className="text-white/70 text-sm">Service packages with comparison tables and booking integration</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Testimonials & Case Studies</h4>
                      <p className="text-white/70 text-sm">Client success stories and social proof elements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Animated Statistics</h4>
                      <p className="text-white/70 text-sm">Eye-catching animated counters showcasing business metrics</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Discovery Call Booking</h4>
                      <p className="text-white/70 text-sm">Calendly integration with automated email notifications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Resources Section</h4>
                      <p className="text-white/70 text-sm">Blog, downloadable guides, and helpful industry insights</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Contact Forms</h4>
                      <p className="text-white/70 text-sm">React Hook Form integration for seamless user interaction</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sgp-green font-semibold mb-1">Performance Tracking</h4>
                      <p className="text-white/70 text-sm">Google Analytics integration for business insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Client Testimonial</h2>
            
            <div className="bg-gradient-to-r from-sgp-green/10 to-sgp-green/5 rounded-xl border border-sgp-green/20 p-8">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-sgp-green mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-xl text-white/90 italic mb-6">
                  "Working with SGP Digital Solutions was an absolute pleasure. They delivered a stunning website 
                  that perfectly captures our brand and has significantly improved our online presence. The 
                  attention to detail and professionalism was outstanding."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-semibold text-sgp-green">Tasha Hudson</div>
                    <div className="text-sm text-white/60">Founder, Hudson Virtual Business Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              See how we can create a stunning website for your business
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-sgp-green text-black font-medium rounded-full hover:bg-sgp-green/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="https://www.hudsonvirtual.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-sgp-green text-sgp-green font-medium rounded-full hover:bg-sgp-green hover:text-black transition-colors"
              >
                View Live Site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 