import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function SGPDigitalSolutionsProject() {
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
                SGP Digital Solutions
              </h1>
              <p className="text-xl text-white/80 mb-8">
                A modern digital agency website showcasing cutting-edge technology solutions
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
                src="/portfolio/sgpdigitalsolutions.png"
                alt="SGP Digital Solutions Website"
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
                    <p className="text-white/70">SGP Digital Solutions</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Industry</h3>
                    <p className="text-white/70">Digital Agency & Web Development</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Location</h3>
                    <p className="text-white/70">United Kingdom</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Project Type</h3>
                    <p className="text-white/70">Company Website Development</p>
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
                    <span className="text-white/70">Tailwind CSS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-sgp-green rounded-full"></div>
                    <span className="text-white/70">Vercel</span>
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
                Create a modern, professional website for SGP Digital Solutions that would showcase the company's 
                technical expertise and cutting-edge approach to digital solutions. The website needed to demonstrate 
                proficiency in modern web technologies while maintaining a sleek, professional appearance.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Solution</h3>
              <p className="text-white/70 mb-6">
                Developed a sophisticated website featuring a dark theme with strategic green accents, interactive 
                terminal-style elements, and smooth animations. The site includes a unique "Meet the Founder" section 
                with a terminal interface, comprehensive service pages, and a dynamic portfolio showcase.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Results</h3>
              <ul className="text-white/70 space-y-2">
                <li>• Modern, responsive design across all devices</li>
                <li>• Interactive terminal-style interface for enhanced user engagement</li>
                <li>• Optimized performance with Next.js and modern web technologies</li>
                <li>• Professional showcase of services and portfolio</li>
                <li>• Seamless user experience with smooth animations and transitions</li>
              </ul>
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
                href="/"
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