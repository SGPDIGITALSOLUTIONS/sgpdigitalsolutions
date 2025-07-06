'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Header from "@/components/Header";

const projects = [
  {
    title: 'Hudson Virtual Business Services',
    description: 'A modern virtual support services website with a clean, professional design focused on showcasing business automation and administrative support services.',
    image: '/portfolio/hudson-virtual.png',
    link: 'https://www.hudsonvirtual.co.uk/',
    status: 'In Development',
    category: 'Business Services',
    technologies: ['Next.js', 'Tailwind CSS', 'Heroku'],
  },

  {
    title: 'SGP Digital Solutions LTD',
    description: 'A modern virtual support services website with a clean, professional design focused on showcasing business automation and administrative support services.',
    image: '/portfolio/hudson-virtual.png',
    link: 'https://hudsonvirtual-811e84806688.herokuapp.com/',
    status: 'In Development',
    category: 'Business Services',
    technologies: ['Next.js', 'Tailwind CSS', 'Heroku'],
  },
  // Add more projects here as needed
];

export default function PortfolioPage() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Our Work
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Explore our portfolio of digital solutions that have helped businesses transform and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-black/40 rounded-xl border border-white/10 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                  {!failedImages.has(index) ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain md:object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={100}
                      onError={() => handleImageError(index)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white/50">
                      Image unavailable
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sgp-green text-sm font-medium">
                      {project.category}
                    </span>
                    {project.status && (
                      <span className="text-white/60 text-sm">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sgp-green hover:text-white transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 