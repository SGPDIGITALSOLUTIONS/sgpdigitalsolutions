import Link from 'next/link';
import Image from 'next/image';
import Header from "@/components/Header";

export default function DatabaseScrapeToolProject() {
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
                Database Scrape Tool
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Advanced automation tool that intelligently navigated multiple tabs, bypassed dynamic loading challenges, and extracted 3000+ database records in just 3 hours - saving weeks of manual work
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                  Custom Tool Development
                </span>
                <span className="px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm">
                  Automation
                </span>
                <span className="px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm">
                  Completed
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative h-96 mb-12 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-red-900/20 border border-purple-500/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                  </svg>
                  <p className="text-white/60 text-lg">Custom Data Extraction Tool</p>
                  <p className="text-white/40 text-sm mt-2">Private Client Project</p>
                </div>
              </div>
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
                <h2 className="text-2xl font-bold text-white mb-6">Project Details</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">Client Type</h3>
                    <p className="text-white/70">Private Business Client</p>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">Industry</h3>
                    <p className="text-white/70">Data Management & Legacy Systems</p>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">Data Volume</h3>
                    <p className="text-white/70">3,000+ Database Records</p>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">Completion Time</h3>
                    <p className="text-white/70">3 Hours Total</p>
                  </div>
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2">Project Type</h3>
                    <p className="text-white/70">Custom Automation Tool</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">Python</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">Java</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">Selenium</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">BeautifulSoup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-white/70">Pandas</span>
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
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Challenge</h3>
              <p className="text-white/70 mb-6">
                A private client had over 3,000 critical data records locked in a legacy system with no 
                built-in export or copy functionality. The system featured complex multi-tab navigation, 
                dynamic loading lists, and no API access. Manual extraction would have taken weeks and 
                been prone to human error. Time was critical as the system was scheduled for decommissioning.
              </p>
              
              <h3 className="text-xl font-semibold text-red-400 mb-4">Solution</h3>
              <p className="text-white/70 mb-6">
                Developed a sophisticated multi-language automation solution using Python and Java. The tool 
                intelligently navigated between different tabs, bypassed dynamic loading challenges by 
                implementing smart wait strategies, and used advanced parsing techniques. Selenium handled 
                complex browser automation, while BeautifulSoup and Pandas processed the extracted data. 
                The system autonomously managed the entire extraction workflow without human intervention.
              </p>
              
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Results</h3>
              <ul className="text-white/70 space-y-2">
                <li>• <strong>Massive time savings:</strong> Completed entire project in just 3 hours</li>
                <li>• <strong>Perfect accuracy:</strong> Successfully extracted all 3,000+ records with 100% accuracy</li>
                <li>• <strong>Intelligent automation:</strong> Autonomous navigation between multiple tabs</li>
                <li>• <strong>Dynamic loading bypass:</strong> Overcame complex loading challenges</li>
                <li>• <strong>Multi-format output:</strong> Clean, structured data in CSV, Excel, JSON formats</li>
                <li>• <strong>Comprehensive validation:</strong> Built-in data validation and error checking</li>
                <li>• <strong>Full audit trail:</strong> Detailed extraction logs and processing records</li>
                <li>• <strong>Business continuity:</strong> Enabled seamless migration to new system</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Technical Highlights</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-900/10 rounded-xl border border-purple-500/20 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Intelligent Tab Navigation</h3>
                </div>
                <p className="text-white/70">
                  Advanced Selenium automation that autonomously navigated between multiple tabs, 
                  handled complex interface interactions, and bypassed dynamic loading challenges 
                  with smart wait strategies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-900/20 to-red-900/10 rounded-xl border border-red-500/20 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-red-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Multi-Language Processing</h3>
                </div>
                <p className="text-white/70">
                  Sophisticated multi-language solution using Python and Java for extraction, 
                  advanced parsing with BeautifulSoup, and structured data manipulation using 
                  Pandas for clean, validated output in multiple formats.
                </p>
              </div>

              <div className="bg-gradient-to-br from-sgp-green/20 to-sgp-green/10 rounded-xl border border-sgp-green/20 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-sgp-green mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Quality Assurance</h3>
                </div>
                <p className="text-white/70">
                  Built-in validation, error handling, and comprehensive logging to ensure 
                  data integrity and provide complete audit trails.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-900/20 to-cyan-900/10 rounded-xl border border-cyan-500/20 p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-white">Exceptional Speed</h3>
                </div>
                <p className="text-white/70">
                  Incredible time efficiency - completed the entire 3,000+ record extraction 
                  in just 3 hours, turning what would have been weeks of manual work into 
                  an automated afternoon task.
                </p>
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
              Need Custom Automation Solutions?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Let us help you automate complex processes and extract value from your data
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-sgp-green text-black font-medium rounded-full hover:bg-sgp-green/90 transition-colors"
              >
                Discuss Your Project
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 border border-sgp-green text-sgp-green font-medium rounded-full hover:bg-sgp-green hover:text-black transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 