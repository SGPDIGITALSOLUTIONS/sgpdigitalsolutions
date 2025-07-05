import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
      
      {/* Content */}
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Let's discuss how we can help transform your business with our digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="btn border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              View Services
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">📞</div>
              <p className="font-medium">24/7 Support</p>
              <p className="text-sm">Always here to help</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-medium">Fast Delivery</p>
              <p className="text-sm">Quick turnaround time</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl mb-2">💡</div>
              <p className="font-medium">Expert Team</p>
              <p className="text-sm">Skilled professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 