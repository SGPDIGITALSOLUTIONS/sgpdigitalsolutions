import Link from 'next/link';
import Header from "@/components/Header";

const services = [
  {
    title: 'SGP WebStudio',
    description: 'Professional website design and development services',
    features: [
      'Custom Website Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'Mobile Responsive Design',
      'SEO Optimization',
      'Website Maintenance',
    ],
    link: '/services/webstudio',
  },
  {
    title: 'SGP WorkFlow',
    description: 'Business process automation and optimization',
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Custom Software Development',
      'Integration Services',
      'Business Intelligence',
      'Performance Monitoring',
    ],
    link: '/services/workflow',
  },
  {
    title: 'Digital Solutions',
    description: 'Comprehensive digital transformation services',
    features: [
      'Digital Strategy',
      'Cloud Solutions',
      'Data Analytics',
      'Cybersecurity',
      'IT Infrastructure',
      'Digital Marketing',
    ],
    link: '/services/digital',
  },
];

const process = [
  {
    step: 1,
    title: 'Consultation',
    description: 'We discuss your needs and goals to understand your requirements.',
  },
  {
    step: 2,
    title: 'Planning',
    description: 'We create a detailed plan tailored to your business objectives.',
  },
  {
    step: 3,
    title: 'Implementation',
    description: 'Our team executes the plan with precision and expertise.',
  },
  {
    step: 4,
    title: 'Launch',
    description: 'We ensure a smooth launch and provide ongoing support.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-terminal-black">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-300">
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-[#1a365d]">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-[#1a365d] mr-2"
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
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-block bg-[#1a365d] text-white px-6 py-2 rounded-lg hover:bg-[#2d3748] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1a365d]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="bg-[#1a365d] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#1a365d]">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#1a365d] rounded-lg text-white p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#1a365d] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 