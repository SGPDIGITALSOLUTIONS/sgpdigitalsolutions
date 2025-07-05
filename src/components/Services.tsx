import Link from 'next/link';

const services = [
  {
    title: 'SGP WebStudio',
    description: 'Professional website design and development services tailored to your business needs.',
    link: '/services/webstudio',
    icon: '🎨',
  },
  {
    title: 'SGP WorkFlow',
    description: 'Streamline your business processes with our custom workflow automation solutions.',
    link: '/services/workflow',
    icon: '⚡',
  },
  {
    title: 'Digital Solutions',
    description: 'Comprehensive digital transformation services to help your business grow.',
    link: '/services/digital',
    icon: '🚀',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-secondary mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-primary font-semibold group-hover:text-primary-hover transition-colors"
              >
                Learn More
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
          ))}
        </div>
      </div>
    </section>
  );
} 