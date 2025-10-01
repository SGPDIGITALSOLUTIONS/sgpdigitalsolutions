'use client';

import Link from 'next/link';
import Header from "@/components/Header";

export default function PricingPage() {
  const pricingOptions = [
    {
      title: "Pay in Full (No Management)",
      subtitle: "Full Control",
      price: "£1,200",
      period: "one-time",
      description: "Perfect for businesses who want complete ownership and control",
      features: [
        "Example build cost: £1,200",
        "You own it immediately",
        "Complete control over your tool",
        "No ongoing commitments"
      ],
      notIncluded: [
        "No support included",
        "No hosting included", 
        "No updates included",
        "Self-management required"
      ],
      bestFor: "Clients who want full control and will self-manage",
      popular: false,
      cta: "Get Started",
      ctaLink: "/contact"
    },
    {
      title: "Pay in Full (With Management)",
      subtitle: "Ownership + Peace of Mind",
      price: "£1,200",
      period: "upfront",
      monthlyPrice: "£35",
      monthlyPeriod: "per month",
      description: "Get immediate ownership with ongoing professional support",
      features: [
        "Example build cost: £1,200",
        "You own it immediately",
        "Professional hosting included",
        "Ongoing support & updates",
        "Security monitoring",
        "Performance optimization"
      ],
      bestFor: "Clients who want ownership and peace of mind",
      popular: true,
      cta: "Most Popular",
      ctaLink: "/contact"
    },
    {
      title: "Split Payment (Includes Management)",
      subtitle: "Flexible Payment",
      price: "£300",
      period: "upfront",
      monthlyPrice: "£110",
      monthlyPeriod: "for 12 months",
      description: "Spread the cost while getting full management and support",
      features: [
        "£300 upfront (25% deposit)",
        "£110/month covers build + hosting + support",
        "We manage everything during term",
        "Ownership transfers at 12 months",
        "Option to buy out early",
        "Drops to £35/month after 12 months"
      ],
      bestFor: "Businesses who prefer manageable monthly payments",
      popular: false,
      cta: "Start Building",
      ctaLink: "/contact"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Three payment options. One simple goal: to get your tool built and supported, 
              the way that works best for you.
            </p>
            <div className="bg-sgp-green/10 border border-sgp-green/30 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sgp-green font-medium text-sm">
                💡 Example pricing shown below based on a typical web tool project. 
                Actual costs vary depending on your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

             {/* Pricing Cards */}
       <section className="py-20">
         <div className="container mx-auto px-4">
           <div className="max-w-7xl mx-auto">
             <h2 className="text-2xl font-bold text-white text-center mb-4">Example Pricing Structure</h2>
             <p className="text-white/60 text-center mb-12 text-sm">Based on a typical web tool project</p>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <div 
                  key={index}
                  className={`relative bg-black/40 border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                    option.popular 
                      ? 'border-sgp-green/50 bg-sgp-green/5' 
                      : 'border-white/10 hover:border-sgp-green/30'
                  }`}
                >
                  {/* Popular Badge */}
                  {option.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-sgp-green text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-sgp-green font-medium mb-4">{option.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{option.price}</span>
                      <span className="text-white/60 ml-2">{option.period}</span>
                    </div>
                    
                    {/* Monthly pricing if applicable */}
                    {option.monthlyPrice && (
                      <div className="mb-4">
                        <span className="text-2xl font-semibold text-sgp-green">+ {option.monthlyPrice}</span>
                        <span className="text-white/60 ml-2">{option.monthlyPeriod}</span>
                      </div>
                    )}
                    
                    <p className="text-white/70 text-sm">{option.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-sgp-green mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included (for Option 1) */}
                  {option.notIncluded && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white/60 mb-4">Not Included:</h4>
                      <ul className="space-y-3">
                        {option.notIncluded.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-white/40 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <span className="text-white/60 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Best For */}
                  <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="text-sm font-semibold text-sgp-green mb-2">Best For:</h4>
                    <p className="text-white/80 text-sm">{option.bestFor}</p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={option.ctaLink}
                    className={`block w-full text-center py-4 px-6 rounded-lg font-semibold transition-colors ${
                      option.popular
                        ? 'bg-sgp-green text-black hover:bg-sgp-green/90'
                        : 'border border-sgp-green text-sgp-green hover:bg-sgp-green hover:text-black'
                    }`}
                  >
                    {option.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What happens after 12 months with Option 3?</h3>
                <p className="text-white/70 text-sm">
                  After 12 months, ownership can transfer to you and the monthly fee drops to just £35 for ongoing hosting and support. You can also choose to cancel.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I buy out early with Option 3?</h3>
                <p className="text-white/70 text-sm">
                  Yes! You can buy out your remaining balance at any time during the 12-month term to gain immediate ownership.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">What's included in the ongoing support?</h3>
                <p className="text-white/70 text-sm">
                  Security updates, performance monitoring, bug fixes, hosting, backups, and general maintenance to keep your tool running smoothly.
                </p>
              </div>
              
              <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Can I change between options later?</h3>
                <p className="text-white/70 text-sm">
                  While we can't change your initial payment structure, we can always add or remove support services as your needs change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Still Not Sure Which Option Is Right?
            </h2>
            <p className="text-xl text-white/80 mb-4">
              Every business is different. Let's chat about your specific needs and find the perfect fit.
            </p>
            <p className="text-white/60 mb-8 text-sm">
              * All pricing shown above is for example purposes only. Your actual project cost will be determined during our free consultation based on your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sgp-green text-black px-8 py-4 rounded-full font-semibold hover:bg-sgp-green/90 transition-colors"
              >
                📞 Book a Free Consultation
              </Link>
              <a
                href="mailto:hello@sgpdigitalsolutions.co.uk?subject=Pricing Question"
                className="border border-sgp-green text-sgp-green px-8 py-4 rounded-full font-semibold hover:bg-sgp-green hover:text-black transition-colors"
              >
                📧 Email Your Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-sgp-green/10 border-t border-sgp-green/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">No Hidden Fees</h3>
                <p className="text-white/70 text-sm">What you see is what you pay. No surprises, no extra charges.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-white/70 text-sm">Professional hosting with security monitoring and regular backups.</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Built for You</h3>
                <p className="text-white/70 text-sm">Every tool is custom-built to solve your specific business challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 