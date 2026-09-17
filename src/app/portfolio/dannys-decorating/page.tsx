import SitePage from '@/components/SitePage';
import Link from 'next/link';
import Image from 'next/image';

export default function DannysDecoratingProject() {
  return (
    <SitePage>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-sgp-green hover:text-white transition-colors mb-8"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">Danny&apos;s Decorating Ltd</h1>
              <p className="text-xl text-white/80 mb-8">
                Premium decorating website for high-value residential work — bright, trustworthy, and
                built to convert enquiries without feeling like a generic trades listing.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 bg-sgp-green/10 text-sgp-green rounded-full text-sm">
                  Website Design
                </span>
                <span className="px-4 py-2 bg-white/5 text-white/70 rounded-full text-sm">
                  Completed
                </span>
              </div>
            </div>

            <div className="relative h-96 mb-12 rounded-xl overflow-hidden bg-white/5">
              <Image
                src="/portfolio/dannys-decorating-hero.png"
                alt="Danny's Decorating website hero"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">About the Client</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Company</h3>
                    <p className="text-white/70">Danny&apos;s Decorating Ltd</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Industry</h3>
                    <p className="text-white/70">Premium residential decorating</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Location</h3>
                    <p className="text-white/70">Kensington &amp; Chelsea, London</p>
                  </div>
                  <div>
                    <h3 className="text-sgp-green font-semibold mb-2">Positioning</h3>
                    <p className="text-white/70 italic">
                      &ldquo;Beautiful decorating. Without the disruption.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['HTML', 'CSS', 'JavaScript', 'Static Site'].map((tech) => (
                    <div key={tech} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-sgp-green rounded-full" />
                      <span className="text-white/70">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Project Overview</h2>

            <div className="bg-black/40 rounded-xl border border-white/10 p-8 mb-8">
              <h3 className="text-xl font-semibold text-sgp-green mb-4">Challenge</h3>
              <p className="text-white/70 mb-6">
                Danny&apos;s Decorating needed a web presence that felt premium and specialist — not
                like a generic handyman listing. The site had to communicate trust, cleanliness, and
                respectful working in clients&apos; homes, while making it easy to understand services
                and request a quotation.
              </p>

              <h3 className="text-xl font-semibold text-sgp-green mb-4">Solution</h3>
              <p className="text-white/70 mb-6">
                A focused three-page static site with a bright, modern layout anchored by the
                client&apos;s brand colours. Service categories are presented clearly, trust and
                process messaging sit front and centre, and the contact flow is kept simple with a
                structured enquiry form. Fully responsive across desktop and mobile.
              </p>

              <h3 className="text-xl font-semibold text-sgp-green mb-4">Results</h3>
              <ul className="text-white/70 space-y-2">
                <li>• Premium brand presentation aligned with high-value residential work</li>
                <li>• Clear service categories — painting, wallcoverings, cabinetry, and specialist finishes</li>
                <li>• Trust-led messaging around clean, considerate in-home working</li>
                <li>• Straightforward navigation and visible quotation CTAs throughout</li>
                <li>• Fast-loading static architecture, easy to host and maintain</li>
                <li>• Mobile-friendly layout with accessible navigation</li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes This Project Special</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Brand-first design</h4>
                    <p className="text-white/70 text-sm">
                      Built from the client&apos;s visual identity — deep green anchor, light
                      backgrounds, and restrained accent colours used with purpose.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Specialist, not generic</h4>
                    <p className="text-white/70 text-sm">
                      Copy and structure position the business for premium residential decorating,
                      not catch-all handyman work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sgp-green rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-sgp-green font-semibold mb-1">Conversion-focused UX</h4>
                    <p className="text-white/70 text-sm">
                      Every page leads naturally toward requesting a quotation — without clutter or
                      unnecessary complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a website that earns trust?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              We build clean, conversion-focused sites for trades and service businesses — without
              the agency price tag.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-3 bg-sgp-green text-black font-medium rounded-full hover:bg-sgp-green/90 transition-colors"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border border-sgp-green text-sgp-green font-medium rounded-full hover:bg-sgp-green hover:text-black transition-colors"
              >
                View More Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
