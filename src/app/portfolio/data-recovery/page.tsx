import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function DataRecoveryPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-purple-500/10 text-purple-400 text-sm font-medium px-3 py-1 rounded-full">
                Data Recovery
              </span>
              <span className="bg-purple-500/10 text-purple-400 text-sm font-medium px-3 py-1 rounded-full">
                Hardware Repair
              </span>
              <span className="bg-purple-500/10 text-purple-400 text-sm font-medium px-3 py-1 rounded-full">
                System Restoration
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Personal Data Recovery
            </h1>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Recovering precious family memories from a broken laptop with forgotten password - 
              turning what seemed like lost memories into a successful recovery mission.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sgp-green border border-sgp-green px-6 py-3 rounded-full font-medium hover:bg-sgp-green hover:text-black transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Portfolio
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-sgp-green text-black px-6 py-3 rounded-full font-medium hover:bg-sgp-green/90 transition-colors"
              >
                Need Data Recovery?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Challenge
                </h2>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  A parent faced the heartbreaking situation of losing years of irreplaceable family memories - 
                  precious baby photos of their children trapped on a broken laptop that had been unusable for years. 
                  To make matters worse, the password had been forgotten after such a long time.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  What seemed like a hopeless situation became a careful recovery mission requiring both 
                  technical expertise and delicate handling of precious family data.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Client Testimonial</h3>
                <blockquote className="text-white/90 text-lg italic mb-6 leading-relaxed">
                  "I had all my childrens baby photos saved on a laptop which had been broken for years, 
                  I also had lost the password for it as it had been so long. Steve managed to get my photos back 
                  aswell as fix my laptop and reinstall windows, I now have a working laptop again!"
                </blockquote>
                <p className="text-sgp-green font-medium">- Lana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Our Technical Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="text-purple-400 text-3xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Password Recovery</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Using specialized password recovery tools and techniques to safely bypass the forgotten login credentials 
                  without damaging the system or compromising data integrity.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="text-purple-400 text-3xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-4">Hardware Diagnostics</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Comprehensive hardware testing and repair to identify and fix the underlying issues 
                  that had rendered the laptop unusable for years.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="text-purple-400 text-3xl mb-4">💾</div>
                <h3 className="text-2xl font-bold text-white mb-4">Data Extraction</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Careful extraction and backup of all family photos and important files, 
                  ensuring no precious memories were lost during the recovery process.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-8">
                <div className="text-purple-400 text-3xl mb-4">🖥️</div>
                <h3 className="text-2xl font-bold text-white mb-4">System Restoration</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Complete Windows reinstallation and system optimization, delivering a fully functional laptop 
                  with all recovered data safely restored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              The Results
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sgp-green text-6xl font-bold mb-4">100%</div>
                <p className="text-white/80 text-lg">Photo Recovery Success</p>
                <p className="text-white/60 text-sm mt-2">All family photos successfully recovered</p>
              </div>
              
              <div className="text-center">
                <div className="text-sgp-green text-6xl font-bold mb-4">✓</div>
                <p className="text-white/80 text-lg">Fully Functional Laptop</p>
                <p className="text-white/60 text-sm mt-2">Fresh Windows installation & optimization</p>
              </div>
              
              <div className="text-center">
                <div className="text-sgp-green text-6xl font-bold mb-4">0</div>
                <p className="text-white/80 text-lg">Data Loss</p>
                <p className="text-white/60 text-sm mt-2">No memories lost during recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Technologies & Tools
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Data Recovery Tools', 'Windows Installation', 'Hardware Diagnostics', 'Password Recovery'].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-purple-400/50 transition-colors">
                    <p className="text-white/80 font-medium">{tech}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Data Recovery Services?
            </h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Don't let broken hardware or forgotten passwords keep your precious memories locked away. 
              Our data recovery expertise can help retrieve your important files and restore your devices.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-sgp-green text-black px-8 py-4 rounded-full font-medium hover:bg-sgp-green/90 transition-colors text-lg"
              >
                Get Data Recovery Help
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-sgp-green border border-sgp-green px-8 py-4 rounded-full font-medium hover:bg-sgp-green hover:text-black transition-colors text-lg"
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