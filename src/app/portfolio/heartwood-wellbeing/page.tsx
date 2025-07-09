import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function HeartwoodWellbeingProject() {
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
                Heartwood Wellbeing
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Modern wellness website featuring earth-toned design, service showcase, and therapeutic approach presentation with focus on senior care and holistic wellbeing
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-sgp-green/10 text-sgp-green rounded-full text-sm">
                  Website Design
                </span>
                <span className="px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm">
                  In Development
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden">
              <Image
                src="/portfolio/heartwoodwellbeing.png"
                alt="Heartwood Wellbeing Website"
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
                    <p className="text-white/70">Heartwood Wellbeing</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Industry</h3>
                    <p className="text-white/70">Holistic Companion Care for Seniors</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Location</h3>
                    <p className="text-white/70">United Kingdom</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Specialization</h3>
                    <p className="text-white/70">Gentle Touch Therapy, Sound Healing, Aromatherapy</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Target Audience</h3>
                    <p className="text-white/70">Seniors with loneliness, anxiety, and memory loss</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Astro</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">React Components</span>
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
                Heartwood Wellbeing needed a website that would effectively communicate their unique approach to 
                holistic companion care for seniors. The challenge was to create a platform that would resonate 
                with both seniors and their families, showcasing Kelly's 26 years of therapeutic experience while 
                explaining specialized services like gentle touch therapy, sound healing, and aromatherapy in an 
                accessible way.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Solution</h3>
              <p className="text-white/70 mb-6">
                Built a modern, fast-loading website using Astro's static site generation capabilities with 
                earth-toned design colors reflecting the grounding, natural approach to holistic care. The 
                site features comprehensive service explanations, Kelly's professional background, and clear 
                presentation of how each session is tailored to support seniors with loneliness, anxiety, and 
                memory loss. Tailwind CSS ensures responsive design across all devices.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Results</h3>
              <ul className="text-white/70 space-y-2">
                <li>• Warm, therapeutic design using natural earth-tone color palette</li>
                <li>• Clear explanation of holistic services and therapeutic approach</li>
                <li>• Professional presentation of Kelly's 26 years of experience</li>
                <li>• Accessible information about services for seniors and families</li>
                <li>• Mobile-optimized design for family members researching care options</li>
                <li>• SEO-optimized for local senior care and holistic therapy searches</li>
                <li>• Trust-building content showcasing expertise and compassionate care</li>
              </ul>
            </div>

            {/* Technical Highlights */}
            <div className="bg-black/40 rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes This Project Special</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Holistic Approach Focus</h4>
                    <p className="text-white/70 text-sm">Website designed to communicate Kelly's unique blend of companion care with therapeutic practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Earth-Tone Brand Identity</h4>
                    <p className="text-white/70 text-sm">Custom color palette reflecting the grounding, natural approach to holistic care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Dual Audience Targeting</h4>
                    <p className="text-white/70 text-sm">Content and design optimized for both seniors and their adult children researching care options</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Service Clarity</h4>
                    <p className="text-white/70 text-sm">Clear explanation of specialized services including gentle touch therapy, sound healing, and aromatherapy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl border border-yellow-500/20 p-8">
              <div className="text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Project in Development</h3>
                <p className="text-white/70 mb-6">
                  This project is currently in active development. We're working closely with Kelly to create 
                  a beautiful, accessible website that will effectively communicate her unique approach to 
                  holistic companion care for seniors. The site will showcase her 26 years of therapeutic 
                  experience and help families understand the specialized services available.
                </p>
                <div className="text-sm text-white/60">
                  Expected completion: Coming Soon
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
                href="https://www.heartwoodwellbeing.co.uk"
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