import Link from 'next/link';
import BulletList from '@/components/healthcheck/BulletList';
import { adminPromo } from '@/lib/home/content';

export default function AdminHealthcheckPromo() {
  return (
    <section className="py-16 bg-terminal-dark terminal-section border-y-4 border-terminal-green">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-terminal-cyan font-terminal-mono text-sm uppercase tracking-widest mb-3">
            {adminPromo.subheadline}
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-terminal-green font-terminal-mono uppercase mb-8">
            {adminPromo.headline}
          </h2>
          <div className="text-left mb-10">
            <BulletList items={adminPromo.bullets} />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={adminPromo.healthcheckPath} className="btn btn-primary">
              {adminPromo.primaryCta}
            </Link>
            <Link href={adminPromo.examplesAnchor} className="btn btn-secondary">
              {adminPromo.secondaryCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
