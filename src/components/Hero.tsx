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

      {/* Animated Circuit Board Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Circuit traces */}
          <path 
            d="M0,100 L200,100 L250,150 L400,150 L450,100 L600,100 L650,200 L800,200 L850,150 L1000,150 L1200,150" 
            fill="none" 
            stroke="rgb(0, 255, 136)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          />
          <path 
            d="M100,0 L100,200 L150,250 L150,400 L200,450 L200,600 L150,650 L150,800" 
            fill="none" 
            stroke="rgb(0, 255, 255)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}
          />
          <path 
            d="M300,200 L500,200 L550,250 L700,250 L750,300 L900,300 L950,250 L1100,250 L1200,250" 
            fill="none" 
            stroke="rgb(255, 0, 255)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '4s' }}
          />
          <path 
            d="M0,400 L150,400 L200,450 L350,450 L400,500 L550,500 L600,450 L750,450 L800,400 L950,400 L1000,350 L1200,350" 
            fill="none" 
            stroke="rgb(255, 105, 180)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}
          />
          <path 
            d="M500,0 L500,150 L550,200 L550,350 L600,400 L600,550 L550,600 L550,800" 
            fill="none" 
            stroke="rgb(0, 255, 136)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '2.8s' }}
          />
          <path 
            d="M200,600 L400,600 L450,650 L600,650 L650,700 L800,700 L850,650 L1000,650 L1200,650" 
            fill="none" 
            stroke="rgb(0, 255, 255)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '2.5s', animationDuration: '3.2s' }}
          />
          <path 
            d="M800,0 L800,200 L750,250 L750,400 L700,450 L700,600 L750,650 L750,800" 
            fill="none" 
            stroke="rgb(255, 0, 255)" 
            strokeWidth="2" 
            className="animate-pulse"
            style={{ animationDelay: '3s', animationDuration: '2.7s' }}
          />
          
          {/* Circuit nodes */}
          <circle cx="250" cy="150" r="4" fill="rgb(0, 255, 136)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="450" cy="100" r="4" fill="rgb(0, 255, 255)" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
          <circle cx="650" cy="200" r="4" fill="rgb(255, 0, 255)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="850" cy="150" r="4" fill="rgb(255, 105, 180)" className="animate-pulse" style={{ animationDelay: '1.7s' }} />
          <circle cx="550" cy="250" r="4" fill="rgb(0, 255, 136)" className="animate-pulse" style={{ animationDelay: '2.2s' }} />
          <circle cx="750" cy="300" r="4" fill="rgb(0, 255, 255)" className="animate-pulse" style={{ animationDelay: '2.7s' }} />
          <circle cx="400" cy="500" r="4" fill="rgb(255, 0, 255)" className="animate-pulse" style={{ animationDelay: '3.2s' }} />
          <circle cx="600" cy="450" r="4" fill="rgb(255, 105, 180)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        </svg>
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
          
          <p className="hero-subtitle mx-auto mb-16">
            We find solutions for people who do the real work!
          </p>
          
          {/* Services Grid */}
          <div className="stats-grid w-full max-w-5xl">
            <Link href="/services" className="stat-card card-green hover:scale-105 transition-transform cursor-pointer">
              <div className="stat-number text-3xl">🌐</div>
              <div className="stat-label font-semibold">Website Design</div>
              <div className="text-sm text-white/70 mt-1">Professional websites that actually convert</div>
              <div className="text-terminal-green font-bold mt-2">From £200</div>
            </Link>
            <Link href="/services" className="stat-card card-cyan hover:scale-105 transition-transform cursor-pointer">
              <div className="stat-number text-3xl">⚡</div>
              <div className="stat-label font-semibold">Business Automation</div>
              <div className="text-sm text-white/70 mt-1">Save hours with smart automation tools</div>
              <div className="text-terminal-cyan font-bold mt-2 text-xs">From £150 for full audit (plus implementation costs)</div>
            </Link>
            <Link href="/services" className="stat-card card-purple hover:scale-105 transition-transform cursor-pointer">
              <div className="stat-number text-3xl">🛠️</div>
              <div className="stat-label font-semibold">Bespoke Webtools</div>
              <div className="text-sm text-white/70 mt-1">Custom web applications for your business</div>
              <div className="text-terminal-purple font-bold mt-2">Contact for price</div>
            </Link>
            <Link href="/services" className="stat-card card-pink hover:scale-105 transition-transform cursor-pointer">
              <div className="stat-number text-3xl">🔧</div>
              <div className="stat-label font-semibold">Tech Support</div>
              <div className="text-sm text-white/70 mt-1">Ongoing maintenance and support</div>
              <div className="text-terminal-pink font-bold mt-2">From £49/month</div>
            </Link>
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