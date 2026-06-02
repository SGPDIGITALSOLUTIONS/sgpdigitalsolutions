import { workflowGoblins, workflowGoblinsSection } from '@/lib/healthcheck/content';

export default function GoblinCards() {
  return (
    <section className="py-14 bg-terminal-black terminal-section">
      <div className="container">
        <h2 className="section-title text-center mb-4">
          {workflowGoblinsSection.title}
        </h2>
        <p className="text-center text-terminal-white/80 max-w-2xl mx-auto mb-10">
          {workflowGoblinsSection.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {workflowGoblins.map((goblin) => (
            <article
              key={goblin.id}
              className="neo-terminal-element bg-terminal-dark border-4 border-terminal-white rounded-neo p-6 hover:border-terminal-green transition-colors flex flex-col"
            >
              <h3 className="text-terminal-green font-terminal-mono font-bold text-lg uppercase mb-3">
                {goblin.title}
              </h3>
              <p className="text-terminal-white/80 text-sm leading-relaxed mb-4 flex-grow">
                {goblin.description}
              </p>
              <p className="text-terminal-cyan text-xs font-terminal-mono uppercase mb-1">
                What I do about it
              </p>
              <p className="text-terminal-white/90 text-sm leading-relaxed">
                {goblin.help}
              </p>
            </article>
          ))}
        </div>

        <p className="text-center text-terminal-white/90 max-w-2xl mx-auto text-sm">
          {workflowGoblinsSection.closing}
        </p>
      </div>
    </section>
  );
}
