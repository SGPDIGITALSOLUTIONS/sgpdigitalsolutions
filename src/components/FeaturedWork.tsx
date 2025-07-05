import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with seamless payment integration.',
    image: '/placeholder-1.jpg',
    link: '/work/ecommerce',
    category: 'Web Development',
  },
  {
    title: 'Business Automation',
    description: 'Streamlined workflow automation for improved efficiency.',
    image: '/placeholder-2.jpg',
    link: '/work/automation',
    category: 'Automation',
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital overhaul for a traditional business.',
    image: '/placeholder-3.jpg',
    link: '/work/digital-transformation',
    category: 'Digital Strategy',
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-64 bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-secondary">
                  Project Image
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-medium text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary mb-6">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-primary font-semibold group-hover:text-primary-hover transition-colors"
                >
                  View Case Study
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

        <div className="text-center mt-12">
          <Link
            href="/work"
            className="btn btn-secondary px-8 py-3 text-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
} 