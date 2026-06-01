import HealthcheckGraphic from './HealthcheckGraphic';
import { goblinSectionCaption, goblins } from '@/lib/healthcheck/content';

export default function GoblinCards() {
  return (
    <section className="py-20 bg-terminal-dark terminal-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">Common workflow goblins</h2>
        <p className="text-center text-terminal-white/80 mb-4">
          These are the usual suspects:
        </p>

        <div className="flex justify-center mb-12">
          <div className="neo-terminal-element border-4 border-terminal-purple rounded-neo p-6 max-w-sm text-center">
            <HealthcheckGraphic
              variant="goblin"
              className="w-24 mx-auto text-terminal-green mb-4"
            />
            <p className="text-sm italic text-terminal-white/80">
              &ldquo;{goblinSectionCaption}&rdquo;
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goblins.map((goblin) => (
            <article
              key={goblin.id}
              className="neo-terminal-element bg-terminal-black border-4 border-terminal-white rounded-neo p-6 hover:border-terminal-green transition-colors"
            >
              <h3 className="text-terminal-green font-terminal-mono font-bold text-lg uppercase mb-3">
                {goblin.title}
              </h3>
              <p className="text-terminal-white/80 text-sm leading-relaxed">
                {goblin.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
