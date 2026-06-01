import Link from 'next/link';
import HealthcheckGraphic from './HealthcheckGraphic';
import { clockCaption, hero } from '@/lib/healthcheck/content';

export default function HealthcheckHero() {
  return (
    <section className="py-24 bg-terminal-black terminal-section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-terminal-cyan font-terminal-mono text-sm uppercase tracking-widest mb-4">
              {hero.subtitle}
            </p>
            <h1 className="section-title text-left mb-6">{hero.title}</h1>
            <div className="space-y-4 mb-6">
              {hero.intro.map((p, i) => (
                <p key={i} className="text-terminal-white/90 text-base md:text-lg">
                  {p}
                </p>
              ))}
            </div>
            <p className="font-terminal-mono text-terminal-green font-bold mb-8">
              {hero.tagline.join(' ')}
            </p>
            <p className="text-2xl font-black text-terminal-yellow font-terminal-mono mb-8">
              {hero.price} healthcheck
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#express-interest" className="btn btn-primary">
                Express Interest
              </Link>
              <Link href="#examples" className="btn btn-secondary">
                See Examples
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="neo-terminal-element bg-terminal-dark border-4 border-terminal-green rounded-neo p-8 inline-block">
              <HealthcheckGraphic variant="clock" className="w-full max-w-[220px] mx-auto text-terminal-green" />
              <p className="mt-6 text-sm text-terminal-white/80 italic font-terminal-sans max-w-xs mx-auto">
                &ldquo;{clockCaption}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
