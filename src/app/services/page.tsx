import Link from 'next/link';
import Header from "@/components/Header";

const services = [
  {
    title: 'Website Building',
    description: 'When your current website looks like it was designed in 2003... and not in a cool retro way',
    features: [
      'Your website takes longer to load than a Windows 95 startup',
      'People squint at your site on mobile like they\'re reading hieroglyphics',
      'You\'re still telling people to "visit your Facebook page" instead',
      'Your contact form has been broken for 6 months and nobody told you',
      'You DIY\'d it and now it looks like a ransom note',
      'Competitors are stealing your customers with their fancy websites',
    ],
    color: 'sgp-green',
    bgColor: 'bg-sgp-green/10',
    borderColor: 'border-sgp-green/20',
    textColor: 'text-sgp-green',
    category: 'Website Design',
  },
  {
    title: 'Bespoke WebTools',
    description: 'If you need a thing but that thing doesn\'t exist (yet)',
    features: [
      'You\'ve searched Google for "tool to do X" and found nothing useful',
      'You need a web app but it\'s too specific for anyone else to have built',
      'Your team needs a shared tool that works in browsers',
      'You want something custom but don\'t want to install software',
      'You\'ve thought "someone should make a tool that..." more than once',
      'You need a calculator/converter/generator that does exactly what YOU need',
    ],
    color: 'amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    textColor: 'text-amber-400',
    category: 'Bespoke WebTools',
  },
  {
    title: 'Automation',
    description: 'When you\'re copy-pasting data like it\'s your full-time job (because it basically is)',
    features: [
      'You\'re doing the same mind-numbing task 47 times a day',
      'Your "system" is actually 12 different spreadsheets held together with hope',
      'You know every keyboard shortcut but still feel like a robot',
      'Your browser has 47 tabs open for "research" that\'s actually data entry',
      'You dream about a magical button that just "does the thing"',
      'You\'ve said "there has to be a better way" more than 10 times this week',
    ],
    color: 'red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    textColor: 'text-red-400',
    category: 'Automation',
  },
  {
    title: 'Integration',
    description: 'When your software plays together about as well as cats and dogs',
    features: [
      'You\'re manually copying data between 5 different systems daily',
      'Your team has a "system" that\'s actually just organized chaos',
      'You\'re paying for software that doesn\'t talk to your other software',
      'Someone\'s job is literally "data transfer specialist"',
      'You have sticky notes with passwords for 12 different platforms',
      'Your workflow looks like a Rube Goldberg machine',
    ],
    color: 'cyan-500',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    textColor: 'text-cyan-400',
    category: 'Integration',
  },
  {
    title: 'App Development',
    description: 'For when you need something fancier than a website but less commitment than a relationship',
    features: [
      'Your customers keep asking "do you have an app for that?"',
      'You want to be on phones but websites feel so... 2010',
      'Your competition has an app and you\'re jealous',
      'You need offline functionality (because WiFi isn\'t everywhere)',
      'You want push notifications without being annoying',
      'You dream of app store glory and passive income',
    ],
    color: 'sgp-green',
    bgColor: 'bg-gradient-to-r from-sgp-green/20 to-sgp-green/10',
    borderColor: 'border-sgp-green/30',
    textColor: 'text-sgp-green',
    category: 'App Development',
    comingSoon: true,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Comprehensive digital solutions to transform your business with cutting-edge technology and expert development.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative ${service.bgColor} rounded-xl border ${service.borderColor} p-8 hover:border-opacity-50 transition-all duration-300 group`}
                >
                  {service.comingSoon && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <span className="bg-sgp-green text-black px-3 py-1 rounded-full text-xs font-bold">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold ${service.textColor} mb-3`}>
                      {service.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">You Know You Need This If:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-white/70">
                          <svg
                            className={`w-4 h-4 ${service.textColor} mr-2 mt-0.5 flex-shrink-0`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/portfolio?category=${encodeURIComponent(service.category)}`}
                      className={`flex-1 text-center px-4 py-2 ${service.textColor} border ${service.borderColor} rounded-full hover:bg-white/5 transition-colors text-sm font-medium`}
                    >
                      View Client Work
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 text-center px-4 py-2 bg-sgp-green text-black rounded-full hover:bg-sgp-green/90 transition-colors text-sm font-medium"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Discovery',
                  description: 'We analyze your needs and goals to understand your requirements.',
                  icon: '🔍',
                },
                {
                  step: 2,
                  title: 'Planning',
                  description: 'We create a detailed technical plan tailored to your objectives.',
                  icon: '📋',
                },
                {
                  step: 3,
                  title: 'Development',
                  description: 'Our team builds your solution with precision and expertise.',
                  icon: '⚡',
                },
                {
                  step: 4,
                  title: 'Launch',
                  description: 'We ensure a smooth launch and provide ongoing support.',
                  icon: '🚀',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-black/40 rounded-xl border border-white/10 p-6 text-center hover:border-sgp-green/30 transition-colors"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="bg-sgp-green text-black w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-black/40 rounded-xl border border-white/10 p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your goals with cutting-edge technology solutions.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-sgp-green text-black font-medium rounded-full hover:bg-sgp-green/90 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-3 border border-sgp-green text-sgp-green font-medium rounded-full hover:bg-sgp-green hover:text-black transition-colors"
                >
                  View Our Clients
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 