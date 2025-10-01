'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "@/components/Header";

const workCategories = [
  'All',
  'Website Design',
  'Maintenance',
  'Bespoke WebTools',
  'Integration',
  'Automation',
  'Other',
  'App Development'
];

const projects = [
  {
    title: 'SGP Digital Solutions',
    clientDescription: 'A cutting-edge digital agency specializing in innovative technology solutions, custom development, and business automation. Helping businesses transform their digital presence with modern web technologies.',
    projectDescription: 'Website design featuring a sleek dark theme with interactive terminal-style interface.',
    image: '/portfolio/sgpdigitalsolutions.png',
    projectLink: '/portfolio/sgp-digital-solutions',
    websiteLink: '/',
    status: 'Live',
    category: 'Website Design',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    featured: true,
  },
  {
    title: 'Hudson Virtual Business Services',
    clientDescription: 'Professional virtual assistant services led by Tasha Hudson, specializing in helping businesses streamline operations through expert administrative support, business automation, and time-saving solutions. Dedicated to putting your business on autopilot with professional virtual support.',
    projectDescription: 'Modern, professional website featuring interactive pricing cards, booking system integration, testimonials, and conversion-optimized design with purple theme and animated elements.',
    image: '/portfolio/Hudsonvirtuallogo.jpg',
    projectLink: '/portfolio/hudson-virtual',
    websiteLink: 'https://www.hudsonvirtual.co.uk/',
    status: 'Live',
    category: ['Website Design', 'Integration'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'I Care Services Providers Ltd',
    clientDescription: 'A mobile optometry service based in Yorkshire, UK, specializing in home-visit eye care services. They needed a comprehensive digital platform that combines healthcare service delivery with modern e-commerce capabilities while maintaining medical privacy standards and regulatory compliance.',
    projectDescription: 'Developed a professional healthcare e-commerce platform featuring custom subscription management, secure Stripe payment processing, interactive postcode coverage checker, GDPR-compliant data handling, and multi-channel patient communication system with WhatsApp and email integration.',
    image: '/portfolio/eyecareproviderlogo.jpg',
    projectLink: '/portfolio/i-care-services',
    websiteLink: null,
    status: 'Completed',
    category: ['Website Design', 'Integration', 'Bespoke WebTools', 'Automation'],
    technologies: ['Node.js', 'Express.js', 'Stripe Payment Integration', 'Custom CSS', 'Vercel Analytics', 'Email Integration', 'WhatsApp Integration'],
  },
  {
    title: 'Heartwood Wellbeing',
    clientDescription: 'Holistic companion care for seniors, led by Kelly, a trained Holistic Therapist with 26 years of experience. Specializing in gentle touch therapy, sound healing, and aromatherapy to support seniors with loneliness, anxiety, and memory loss. Nurturing body, mind and spirit with warmth, intention, and heart.',
    projectDescription: 'Modern wellness website featuring earth-toned design, service showcase, and therapeutic approach presentation with focus on senior care and holistic wellbeing.',
    image: '/portfolio/heartwoodlogo1.jpg',
    projectLink: '/portfolio/heartwood-wellbeing',
    websiteLink: 'https://heartwood-wellbeing.vercel.app/',
    status: 'In Development',
    category: 'Website Design',
    technologies: ['Astro', 'Tailwind CSS', 'TypeScript', 'React Components'],
  },
  {
    title: 'Private Business Client',
    clientDescription: 'A forward-thinking business facing a critical data migration challenge from legacy systems. Successfully preserved years of valuable business data that would have otherwise been lost.',
    projectDescription: 'Advanced automation tool that intelligently navigated multiple tabs, bypassed dynamic loading challenges, and extracted 3000+ database records in just 3 hours - saving weeks of manual work.',
    image: '/portfolio/database-scrape-tool.png',
    projectLink: '/portfolio/database-scrape-tool',
    websiteLink: null,
    status: 'Completed',
    category: 'Automation',
    technologies: ['Python', 'Java', 'Selenium', 'BeautifulSoup', 'Pandas'],
  },
  {
    title: 'Lana - Personal Data Recovery',
    clientDescription: 'A parent facing the heartbreaking loss of irreplaceable family memories - years of children\'s baby photos trapped on a broken laptop with a forgotten password. What seemed like lost memories became a successful recovery mission.',
    projectDescription: 'Complete data recovery service including password bypass, hardware diagnostics, photo extraction, and full system restoration. Successfully recovered all precious family photos and provided a fully functional laptop with fresh Windows installation.',
    image: '/portfolio/database-scrape-tool.png', // We'll use the same placeholder image for now
    projectLink: '/portfolio/data-recovery',
    websiteLink: null,
    status: 'Completed',
    category: 'Other',
    technologies: ['Data Recovery Tools', 'Windows Installation', 'Hardware Diagnostics', 'Password Recovery'],
  },
  // Add more projects here as needed
];

// Create a separate component for the search params logic
function PortfolioContent() {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('All');
  const searchParams = useSearchParams();

  // Read category from URL parameter and set filter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && workCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index));
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => {
        if (Array.isArray(project.category)) {
          return project.category.includes(selectedCategory);
        }
        return project.category === selectedCategory;
      });

  const getCategoryColors = (category: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; border: string } } = {
      'All': { bg: 'bg-sgp-green', text: 'text-black', hover: 'hover:bg-sgp-green/90', border: 'border-sgp-green' },
      'Website Design': { bg: 'bg-sgp-green', text: 'text-black', hover: 'hover:bg-sgp-green/90', border: 'border-sgp-green' },
      'Maintenance': { bg: 'bg-orange-500', text: 'text-white', hover: 'hover:bg-orange-600', border: 'border-orange-500' },
      'Bespoke WebTools': { bg: 'bg-amber-500', text: 'text-white', hover: 'hover:bg-amber-600', border: 'border-amber-500' },
      'Integration': { bg: 'bg-cyan-500', text: 'text-white', hover: 'hover:bg-cyan-600', border: 'border-cyan-500' },
      'Automation': { bg: 'bg-red-500', text: 'text-white', hover: 'hover:bg-red-600', border: 'border-red-500' },
      'App Development': { bg: 'bg-gradient-to-r from-sgp-green/20 to-sgp-green/10', text: 'text-sgp-green', hover: 'hover:from-sgp-green/30 hover:to-sgp-green/20', border: 'border-sgp-green/30' },
      'Other': { bg: 'bg-purple-500', text: 'text-white', hover: 'hover:bg-purple-600', border: 'border-purple-500' }
    };
    return colorMap[category] || { bg: 'bg-gray-500', text: 'text-white', hover: 'hover:bg-gray-600', border: 'border-gray-500' };
  };

  const getProjectCategoryColors = (category: string) => {
    const colorMap: { [key: string]: { bg: string; text: string } } = {
      'Website Design': { bg: 'bg-sgp-green/10', text: 'text-sgp-green' },
      'Maintenance': { bg: 'bg-orange-500/10', text: 'text-orange-400' },
      'Bespoke WebTools': { bg: 'bg-amber-500/10', text: 'text-amber-400' },
      'Integration': { bg: 'bg-cyan-500/10', text: 'text-cyan-400' },
      'Automation': { bg: 'bg-red-500/10', text: 'text-red-400' },
      'App Development': { bg: 'bg-sgp-green/10', text: 'text-sgp-green' },
      'Other': { bg: 'bg-purple-500/10', text: 'text-purple-400' }
    };
    return colorMap[category] || { bg: 'bg-gray-500/10', text: 'text-gray-400' };
  };

  return (
    <>
      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {workCategories.map((category) => {
              const colors = getCategoryColors(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative ${
                    selectedCategory === category
                      ? `${colors.bg} ${colors.text}`
                      : category === 'App Development'
                      ? `${colors.bg} ${colors.text} border ${colors.border} ${colors.hover}`
                      : `bg-white/5 text-white/70 hover:bg-white/10 hover:text-white`
                  }`}
                >
                  {category}
                  {category === 'App Development' && (
                    <span className="absolute -top-1 -right-1 bg-sgp-green text-black text-xs px-2 py-0.5 rounded-full font-bold">
                      Coming Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className={`${
                  project.featured 
                    ? 'bg-black/40 border-sgp-green/50 shadow-[0_0_30px_rgba(0,255,193,0.3)] shadow-sgp-green/30' 
                    : 'bg-black/40 border-white/10'
                } rounded-xl border-2 overflow-hidden group relative`}
              >
                {project.featured && (
                  <div className="absolute top-2 right-4 z-20">
                    <span className="bg-sgp-green text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                )}
                <div className="flex flex-col lg:flex-row">
                  {/* Project Image */}
                  <div className="relative lg:w-1/2 h-64 lg:h-80 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    {!failedImages.has(index) ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
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
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(project.category) ? (
                          project.category.map((cat, i) => (
                            <span 
                              key={i}
                              className={`${getProjectCategoryColors(cat).bg} ${getProjectCategoryColors(cat).text} text-sm font-medium px-3 py-1 rounded-full`}
                            >
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span className={`${getProjectCategoryColors(project.category).bg} ${getProjectCategoryColors(project.category).text} text-sm font-medium px-3 py-1 rounded-full`}>
                            {project.category}
                          </span>
                        )}
                      </div>
                      {project.status && (
                        <span className="text-white/60 text-sm">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <div className="mb-6">
                      <p className="text-white/90 mb-3 text-lg leading-relaxed font-medium">
                        {project.clientDescription}
                      </p>
                      <p className="text-white/70 text-base leading-relaxed">
                        <span className="text-sgp-green font-medium">Our Work:</span> {project.projectDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.websiteLink && (
                        <Link
                          href={project.websiteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-sgp-green text-black px-4 py-2 rounded-full font-medium hover:bg-sgp-green/90 transition-colors"
                        >
                          Visit Website
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </Link>
                      )}
                      <Link
                        href={project.projectLink}
                        className="inline-flex items-center text-sgp-green border border-sgp-green px-4 py-2 rounded-full font-medium hover:bg-sgp-green hover:text-black transition-colors"
                      >
                        Project Details
                        <svg
                          className="w-4 h-4 ml-2"
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
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60 text-lg">
                No projects found for "{selectedCategory}". Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Meet the amazing businesses we've had the privilege to work with. Discover their stories and see how we've helped them achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Wrap the component that uses useSearchParams in Suspense */}
      <Suspense fallback={
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p className="text-white/60">Loading portfolio...</p>
            </div>
          </div>
        </div>
      }>
        <PortfolioContent />
      </Suspense>
    </div>
  );
} 