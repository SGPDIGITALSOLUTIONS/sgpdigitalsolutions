'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WebsitesPage = () => {
  const [step, setStep] = useState(1);
  const [hasWebsite, setHasWebsite] = useState<boolean | null>(null);
  const [isHappy, setIsHappy] = useState<boolean | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  const portfolioItems = [
    {
      title: 'Hudson Virtual Business Services',
      description: 'Modern virtual support services platform',
      image: '/portfolio/hudson-virtual.png',
      link: 'https://hudsonvirtual-811e84806688.herokuapp.com/',
      status: 'In Development'
    },
    // Add more items here as needed
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Websites That Just Work
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              No fancy jargon, just websites that look great and do what you need. 
              We'll keep everything running smoothly so you don't have to worry.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="bg-black/40 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-medium text-sgp-green mb-4">Simple & Clean</h3>
              <p className="text-white/70 leading-relaxed">
                Beautiful, professional websites that are easy to navigate and use.
                No clutter, just what your visitors need.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-medium text-sgp-green mb-4">Always Up-to-Date</h3>
              <p className="text-white/70 leading-relaxed">
                We handle all the updates, security, and maintenance.
                Your site stays fresh and secure.
              </p>
            </div>
            <div className="bg-black/40 p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-medium text-sgp-green mb-4">Built For You</h3>
              <p className="text-white/70 leading-relaxed">
                Every website we create is tailored to your specific needs.
                No unnecessary features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Some of Our Work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="aspect-video bg-black/40 rounded-xl border border-white/10 overflow-hidden">
                    {!failedImages.has(index) ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={100}
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/50">
                        Image unavailable
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/70 mb-4">{item.description}</p>
                        {item.status && (
                          <span className="text-sgp-green text-sm">{item.status}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              href="/portfolio"
              className="inline-block mt-12 border border-sgp-green text-sgp-green px-8 py-3 rounded-lg 
                hover:bg-sgp-green hover:text-black transition-colors duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's Find Your Perfect Solution
            </h2>
            <p className="text-xl text-white/70">
              Answer a couple of quick questions and we'll help you get started
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-black/40 p-8 rounded-xl border border-white/10">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-white/10 mb-12">
              <div 
                className="h-full bg-sgp-green transition-all duration-500"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>

            {/* Question Container */}
            <div className="relative h-48">
              {/* Step 1 */}
              <div 
                className={`absolute w-full transition-all duration-500 ${
                  step === 1 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-full'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Do you have an existing website?
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setHasWebsite(true);
                      setStep(2);
                    }}
                    className="flex-1 bg-black/40 border border-white/10 hover:border-sgp-green/50 
                      text-white py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setHasWebsite(false);
                      setStep(3);
                    }}
                    className="flex-1 bg-black/40 border border-white/10 hover:border-sgp-green/50 
                      text-white py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div 
                className={`absolute w-full transition-all duration-500 ${
                  step === 2 
                    ? 'opacity-100 translate-x-0' 
                    : step < 2 
                      ? 'opacity-0 translate-x-full'
                      : 'opacity-0 -translate-x-full'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-8">
                  Are you happy with your existing site?
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setIsHappy(true);
                      setStep(3);
                    }}
                    className="flex-1 bg-black/40 border border-white/10 hover:border-sgp-green/50 
                      text-white py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setIsHappy(false);
                      setStep(3);
                    }}
                    className="flex-1 bg-black/40 border border-white/10 hover:border-sgp-green/50 
                      text-white py-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    No
                  </button>
                </div>
              </div>

              {/* Step 3 - Final Step */}
              <div 
                className={`absolute w-full transition-all duration-500 ${
                  step === 3 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  {!hasWebsite || (hasWebsite && !isHappy) 
                    ? "Let's create something amazing together!"
                    : "We can help make your site even better!"}
                </h3>
                <p className="text-white/70 text-lg mb-8">
                  {!hasWebsite 
                    ? "Try a free concept design using WebInspire by SGP"
                    : isHappy 
                      ? "We can help with maintenance, updates, and new features"
                      : "Let's transform your online presence with a fresh design"}
                </p>
                <div className="flex gap-4">
                  <Link 
                    href="/contact"
                    className="flex-1 bg-sgp-green text-black font-medium text-center py-4 rounded-xl 
                      transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </Link>
                  {(!hasWebsite || (hasWebsite && !isHappy)) && (
                    <Link 
                      href="/webinspire"
                      className="flex-1 border border-sgp-green text-sgp-green text-center py-4 rounded-xl 
                        transition-all duration-300 hover:scale-105 hover:bg-sgp-green hover:text-black"
                    >
                      Try WebInspire
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Back Button */}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-8 text-white/50 hover:text-white transition-colors"
              >
                ← Back to previous question
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsitesPage; 