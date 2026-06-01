import { video } from '@/lib/healthcheck/content';

const embedUrl = process.env.NEXT_PUBLIC_HEALTHCHECK_VIDEO_URL?.trim();

export default function VideoPlaceholder() {
  return (
    <section className="py-20 bg-terminal-dark terminal-section">
      <div className="container max-w-4xl">
        <h2 className="section-title text-center mb-4">{video.title}</h2>
        <p className="text-center text-terminal-cyan font-terminal-mono mb-8">
          {video.hint}
        </p>

        <div className="neo-terminal-element border-4 border-terminal-white rounded-neo overflow-hidden bg-terminal-black aspect-video flex flex-col items-center justify-center p-8">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.title}
              className="w-full h-full min-h-[280px]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <span className="text-4xl mb-4" aria-hidden>
                ▶
              </span>
              <p className="text-terminal-green font-terminal-mono font-bold uppercase text-center">
                {video.placeholderNote}
              </p>
            </>
          )}
        </div>

        <blockquote className="mt-8 border-l-4 border-terminal-green pl-6 text-terminal-white/90 italic">
          {video.openingLine}
        </blockquote>

        <ul className="mt-6 space-y-2 text-terminal-white/70 text-sm">
          {video.scriptPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-terminal-green font-bold">→</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
