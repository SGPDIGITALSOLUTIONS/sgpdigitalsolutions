import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-terminal-black min-h-screen flex items-center terminal-section">
      {/* Terminal Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-terminal-black"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Decorative Terminal Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-terminal-black border-4 border-terminal-green rounded-terminal rotate-12 opacity-60 neo-terminal-element"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-terminal-black border-4 border-terminal-cyan rounded-terminal opacity-60 neo-terminal-element"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-terminal-black border-4 border-terminal-purple rounded-terminal -rotate-12 opacity-60 neo-terminal-element"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-terminal-black border-4 border-terminal-pink rounded-terminal opacity-60 neo-terminal-element"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center py-16 md:py-24">
          {/* Terminal Status Badge */}
          <div className="badge mb-8 animate-pulse">
            [SYSTEM ONLINE] DIGITAL SOLUTIONS READY
          </div>

          <h1 className="hero-title max-w-5xl">
            SGP DIGITAL<br/>SOLUTIONS
          </h1>
          
          <p className="hero-subtitle mx-auto">
            We find solutions for people who do the real work!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link
              href="/contact"
              className="btn btn-primary px-8 py-4 text-lg terminal-glow"
            >
              INITIALIZE PROJECT &gt;
            </Link>
            <Link
              href="/services"
              className="btn btn-accent px-8 py-4 text-lg"
            >
              EXPLORE SERVICES //
            </Link>
          </div>
          
          {/* Terminal Stats */}
          <div className="stats-grid w-full max-w-5xl">
            <div className="stat-card card-green">
              <div className="stat-number">100+</div>
              <div className="stat-label">PROJECTS DEPLOYED</div>
            </div>
            <div className="stat-card card-cyan">
              <div className="stat-number">50+</div>
              <div className="stat-label">CLIENTS CONNECTED</div>
            </div>
            <div className="stat-card card-purple">
              <div className="stat-number">5+</div>
              <div className="stat-label">YEARS OPERATIONAL</div>
            </div>
            <div className="stat-card card-pink">
              <div className="stat-number">24/7</div>
              <div className="stat-label">SUPPORT ACTIVE</div>
            </div>
          </div>

          {/* Terminal CTA Window */}
          <div className="terminal-window mt-16 max-w-3xl w-full">
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-terminal-green font-terminal-mono uppercase">READY TO EXECUTE?</h3>
              <div className="terminal-text space-y-2 mb-6">
                <div>$ <span className="text-terminal-white">initializing connection...</span></div>
                <div>&gt; <span className="text-terminal-green">50+ successful businesses connected</span></div>
                <div>&gt; <span className="text-terminal-cyan">100% project completion rate</span></div>
                <div>&gt; <span className="text-terminal-purple">24hr response guaranteed</span></div>
                <div>$ <span className="text-terminal-white">ready for deployment...</span></div>
              </div>
              <Link 
                href="/contact" 
                className="btn btn-secondary px-6 py-3"
              >
                CONNECT NOW &gt;&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Terminal Indicators */}
      <div className="absolute bottom-10 left-10 w-3 h-3 bg-terminal-green border border-terminal-white rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-terminal-cyan border border-terminal-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-2/3 left-20 w-4 h-4 bg-terminal-purple border border-terminal-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-terminal-pink border border-terminal-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-terminal-green opacity-50 animate-terminal-scan"></div>
      </div>
    </section>
  );
} 