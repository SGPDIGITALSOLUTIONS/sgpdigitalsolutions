'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Tier } from './types';

export default function WebInspirePage() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVideoPlayed, setVideoPlayed] = useState(false);
  const router = useRouter();

  const handleEnterStudio = async (tier: Tier) => {
    try {
      setIsTransitioning(true);
      router.push(`/webinspire/studio?tier=${tier}`);
    } catch (error) {
      console.error('Navigation error:', error);
      setIsTransitioning(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-light mb-6">
              <span className="text-white">
                Get your ideas out of your head
              </span>
              <span className="block font-bold text-sgp-green mt-2">and onto the screen.</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mt-6">
              A no-pressure, human-first way to kick off your website project. WebInspire¹ helps you share your vision—clearly, quickly, and confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              Before we build your site, we listen.
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              WebInspire¹ by SGP is a guided, visual-first experience that helps you communicate what you want—without the tech stress. Colour palettes, layouts, screenshots, ideas, vibes—it all goes in here. No jargon. No assumptions.
            </p>
            <p className="text-2xl font-light text-sgp-green">
              You don't need to know how to describe your style—we'll guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section - Moved up */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
                What is WebInspire¹?
              </h2>
              <p className="text-lg text-sgp-green italic">¹ by SGP — made by humans, for humans.</p>
            </div>
            <div className="aspect-video bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Video placeholder */}
              <div className="h-full flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
                <button 
                  onClick={() => setVideoPlayed(true)}
                  className="bg-sgp-green/20 hover:bg-sgp-green/30 rounded-full p-8 transition-all transform hover:scale-105"
                >
                  <svg className="w-12 h-12 text-sgp-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-neutral-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              What You'll Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Upload images, screenshots, or links',
                'Choose your preferred colours and layouts',
                "Share what you love—and what you don't",
                'Define the tone and personality of your site',
                'Leave us notes, scribbles, or even voice notes (Premium only)'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="w-2 h-2 mt-3 rounded-full bg-sgp-green group-hover:scale-150 transition-transform"></div>
                  <p className="text-lg text-white/90 group-hover:text-white transition-colors">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-white to-white/90 text-transparent bg-clip-text">
              Choose Your Tier
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* The Spark */}
              <div 
                onClick={() => handleEnterStudio('spark')}
                className="bg-neutral-900 rounded-2xl p-8 border border-white/10 hover:border-sgp-green group cursor-pointer"
              >
                <div className="text-2xl mb-2">🌱</div>
                <h3 className="text-2xl font-bold mb-2 text-white">The Spark</h3>
                <p className="text-sgp-green mb-6">Free</p>
                <p className="text-sm text-white/90 mb-2">A quick-start inspiration board. Get the ideas flowing.</p>
                <p className="text-xs text-sgp-green mb-6">Builds up to 3-page website</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Upload up to 3 images or links',
                    'Pick from 3 colour palettes',
                    'Choose 1 layout style',
                    'Add basic notes',
                    'Perfect for simple landing pages'
                  ].map((feature, index) => (
                    <li key={index} className="text-sm text-white/90 flex items-start space-x-2">
                      <span className="text-sgp-green">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-sgp-green/20 hover:bg-sgp-green text-white py-3 rounded-lg text-center">
                  <span className="relative z-10">Click to Start</span>
                </div>
              </div>

              {/* The Flame */}
              <div 
                onClick={() => handleEnterStudio('flame')}
                className="bg-neutral-900 rounded-2xl p-8 border border-white/10 hover:border-sgp-green group cursor-pointer"
              >
                <div className="text-2xl mb-2">🔥</div>
                <h3 className="text-2xl font-bold mb-2 text-white">The Flame</h3>
                <p className="text-sgp-green mb-6">£29</p>
                <p className="text-sm text-white/90 mb-2">More space, more tools, more clarity.</p>
                <p className="text-xs text-sgp-green mb-6">Credited if you build with us • Builds up to 5-page website</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Upload up to 10 pieces of inspiration',
                    'Choose from 6 colour palettes or build your own',
                    'Pick 3 layout styles',
                    'Add notes and brand vibe preferences',
                    'Auto-generated moodboard PDF',
                    'Great for small business sites'
                  ].map((feature, index) => (
                    <li key={index} className="text-sm text-white/90 flex items-start space-x-2">
                      <span className="text-sgp-green">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-sgp-green/20 hover:bg-sgp-green text-white py-3 rounded-lg text-center">
                  <span className="relative z-10">Click to Start</span>
                </div>
              </div>

              {/* The Blaze */}
              <div 
                onClick={() => handleEnterStudio('blaze')}
                className="bg-neutral-900 rounded-2xl p-8 border border-white/10 hover:border-sgp-green group cursor-pointer"
              >
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="text-2xl font-bold mb-2 text-white">The Blaze</h3>
                <p className="text-sgp-green mb-6">£79</p>
                <p className="text-sm text-white/90 mb-2">For those who want clarity + creative insight.</p>
                <p className="text-xs text-sgp-green mb-6">Credited if you build with us • Builds up to 16-page website</p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Unlimited uploads + voice notes',
                    'Custom palette builder',
                    'Full-page layout previews',
                    'Personality sliders & tone exploration',
                    'Pro feedback video from SGP',
                    'Downloadable brand board PDF',
                    'Perfect for larger business sites'
                  ].map((feature, index) => (
                    <li key={index} className="text-sm text-white/90 flex items-start space-x-2">
                      <span className="text-sgp-green">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="w-full bg-sgp-green/20 hover:bg-sgp-green text-white py-3 rounded-lg text-center">
                  <span className="relative z-10">Click to Start</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the generic CTA section since we now have tier-specific buttons */}
      <section className="py-20 bg-gradient-to-b from-neutral-900/50 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-white/60 text-lg">
              All tiers include our human-centered design approach and personal support.
            </p>
          </div>
        </div>
      </section>

      {/* Door transition effect */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black transition-transform duration-1000 origin-left" 
               style={{ transform: 'scaleX(1)' }}></div>
          <div className="absolute inset-0 bg-sgp-green/20 transition-transform duration-1000 origin-left" 
               style={{ transform: 'scaleX(1)', transitionDelay: '100ms' }}></div>
        </div>
      )}

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] h-full">
          {Array.from({ length: 500 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-white/20" />
          ))}
        </div>
      </div>
    </div>
  );
} 