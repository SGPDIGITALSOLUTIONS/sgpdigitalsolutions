import BulletList from './BulletList';
import { healthcheckSummary } from '@/lib/healthcheck/content';

export default function HealthcheckSummary() {
  return (
    <section className="py-14 bg-terminal-dark terminal-section">
      <div className="container max-w-3xl space-y-10">
        <div>
          <h2 className="section-title text-center mb-6">
            {healthcheckSummary.title}
          </h2>
          <BulletList items={healthcheckSummary.deliverables} />
          <p className="mt-6 text-terminal-white/90 text-center text-sm">
            {healthcheckSummary.deliverablesNote}
          </p>
        </div>

        <div className="neo-terminal-element border-4 border-terminal-pink rounded-neo p-6 md:p-8">
          <h3 className="text-xl font-black text-terminal-pink font-terminal-mono uppercase mb-3">
            {healthcheckSummary.notTitle}
          </h3>
          <ul className="space-y-2 text-terminal-white/80 text-sm">
            {healthcheckSummary.notItems.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-terminal-pink font-bold">×</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black text-terminal-green font-terminal-mono uppercase text-center mb-6">
            {healthcheckSummary.stepsTitle}
          </h3>
          <ol className="space-y-3">
            {healthcheckSummary.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 items-start neo-terminal-element bg-terminal-black border-3 border-terminal-green rounded-terminal p-4"
              >
                <span className="flex-shrink-0 w-9 h-9 bg-terminal-green text-terminal-black font-black font-terminal-mono flex items-center justify-center rounded-terminal border-2 border-terminal-black text-sm">
                  {i + 1}
                </span>
                <span className="text-terminal-white/90 text-sm pt-1.5">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
