import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/50 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-white text-xl font-medium">SGP Digital Solutions</div>
          <div className="space-x-8">
            <a href="#services" className="text-white hover:text-sgp-green transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-sgp-green transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-sgp-green transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold text-white mb-6">
              Making digital simple 
              <span className="text-sgp-green"> for people who need it</span>
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              We help people who are great at what they do, but don't have time for the digital stuff. 
              Let us handle the online side, while you focus on what you do best.
            </p>
            <button className="bg-sgp-green text-black font-medium px-8 py-3 rounded-lg 
              hover:bg-white transition-colors duration-300">
              Let's Chat
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Link href="/websites" className="group">
              <div className="bg-black/40 p-8 rounded-xl border border-white/10 
                hover:border-sgp-green/50 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-medium text-white mb-4">
                  Need help with websites?
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  No fancy jargon, just websites that look great and do what you need. 
                  We'll keep everything running smoothly so you don't have to worry.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-sgp-green/50 to-transparent"></div>
              </div>
            </Link>

            <div className="group">
              <div className="bg-black/40 p-8 rounded-xl border border-white/10 
                hover:border-sgp-green/50 transition-colors duration-300">
                <h3 className="text-2xl font-medium text-white mb-4">
                  Making Work Easier
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Tired of repetitive tasks? We'll help you automate the boring stuff. 
                  More time for what matters, less time clicking buttons.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-sgp-green/50 to-transparent"></div>
              </div>
            </div>

            <div className="group">
              <div className="bg-black/40 p-8 rounded-xl border border-white/10 
                hover:border-sgp-green/50 transition-colors duration-300">
                <h3 className="text-2xl font-medium text-white mb-4">
                  Tools That Make Sense
                </h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Need a specific tool for your work? We'll build something that's actually easy to use. 
                  No overcomplicated features, just what you need.
                </p>
                <div className="h-px w-full bg-gradient-to-r from-sgp-green/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help With The Digital Side?</h2>
            <p className="text-xl text-white/70 mb-12">
              Let's have a chat about how we can make your online work life easier. 
              No jargon, just straight-forward solutions that work for you.
            </p>
            <div className="flex gap-6 justify-center">
              <button className="bg-sgp-green text-black font-medium px-8 py-3 rounded-lg 
                hover:bg-white transition-colors duration-300">
                Get in Touch
              </button>
              <Link 
                href="/portfolio"
                className="border border-sgp-green text-sgp-green px-8 py-3 rounded-lg 
                  hover:bg-sgp-green hover:text-black transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 