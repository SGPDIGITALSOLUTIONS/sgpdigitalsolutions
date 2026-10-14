import Link from 'next/link';
import { healthcheckSummary } from '@/lib/healthcheck/content';

export default function HealthcheckOffer({ id }: { id: string }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 border border-sgp-green/40 bg-sgp-green/5 rounded p-6 md:p-10">
      <div>
        <p className="site-eyebrow">A CLEAR FIRST STEP</p>
        <h2 id={id} className="mb-4">£50 Admin &amp; Workflow Healthcheck</h2>
        <p className="mb-6">A focused review of one admin-heavy process. Understand where time is going and what you could simplify or automate before deciding on a build.</p>
        <Link href="/admin-workflow-healthcheck" className="btn btn-primary">Start with the £50 healthcheck</Link>
      </div>
      <div>
        <h3 className="mb-4">What your £50 covers</h3>
        <ul className="space-y-3 text-white/80">
          {healthcheckSummary.deliverables.map(item => <li key={item} className="flex gap-3"><span className="text-sgp-green" aria-hidden="true">✓</span>{item}</li>)}
        </ul>
        <p className="text-sm mt-6">Session length and turnaround are agreed when booking. The £50 covers the review and recommendations; any implementation is quoted separately.</p>
      </div>
    </div>
  );
}
