import HealthcheckGraphic from './HealthcheckGraphic';
import {
  automationCaption,
  beforeAfter,
  spreadsheetCaption,
} from '@/lib/healthcheck/content';

export default function BeforeAfterTable() {
  return (
    <section
      id="examples"
      className="py-20 bg-terminal-black terminal-section scroll-mt-24"
    >
      <div className="container">
        <h2 className="section-title text-center mb-4">Before and after examples</h2>
        <p className="text-center text-terminal-white/80 max-w-2xl mx-auto mb-12">
          This is where people will recognise themselves.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <HealthcheckGraphic
              variant="spreadsheet"
              className="w-28 mx-auto text-terminal-yellow"
            />
            <p className="mt-3 text-sm italic text-terminal-white/70 max-w-[200px]">
              &ldquo;{spreadsheetCaption}&rdquo;
            </p>
          </div>
          <div className="text-center flex-1 max-w-md">
            <HealthcheckGraphic
              variant="automation"
              className="w-full max-w-[280px] mx-auto text-terminal-cyan"
            />
            <p className="mt-3 text-sm italic text-terminal-white/70">
              &ldquo;{automationCaption}&rdquo;
            </p>
          </div>
        </div>

        <div className="hidden md:block overflow-x-auto neo-terminal-element border-4 border-terminal-green rounded-neo">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-terminal-dark border-b-4 border-terminal-green">
                <th className="p-4 font-terminal-mono uppercase text-terminal-green text-sm">
                  Process
                </th>
                <th className="p-4 font-terminal-mono uppercase text-terminal-pink text-sm">
                  Before
                </th>
                <th className="p-4 font-terminal-mono uppercase text-terminal-cyan text-sm">
                  After
                </th>
              </tr>
            </thead>
            <tbody>
              {beforeAfter.map((row, i) => (
                <tr
                  key={row.process}
                  className={
                    i % 2 === 0
                      ? 'bg-terminal-black'
                      : 'bg-terminal-dark/80'
                  }
                >
                  <td className="p-4 font-bold text-terminal-white border-t border-terminal-border align-top">
                    {row.process}
                  </td>
                  <td className="p-4 text-terminal-white/80 border-t border-terminal-border align-top text-sm">
                    {row.before}
                  </td>
                  <td className="p-4 text-terminal-white/90 border-t border-terminal-border align-top text-sm">
                    {row.after}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-6">
          {beforeAfter.map((row) => (
            <article
              key={row.process}
              className="neo-terminal-element bg-terminal-dark border-4 border-terminal-white rounded-neo p-6"
            >
              <h3 className="text-terminal-green font-terminal-mono font-bold uppercase mb-4">
                {row.process}
              </h3>
              <div className="mb-4">
                <p className="text-terminal-pink text-xs font-terminal-mono uppercase mb-1">
                  Before
                </p>
                <p className="text-terminal-white/80 text-sm">{row.before}</p>
              </div>
              <div>
                <p className="text-terminal-cyan text-xs font-terminal-mono uppercase mb-1">
                  After
                </p>
                <p className="text-terminal-white/90 text-sm">{row.after}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
