import Link from 'next/link';
import Header from '@/components/Header';
import BeforeAfterTable from '@/components/healthcheck/BeforeAfterTable';
import BulletList from '@/components/healthcheck/BulletList';
import ExpressInterestForm from '@/components/healthcheck/ExpressInterestForm';
import GoblinCards from '@/components/healthcheck/GoblinCards';
import HealthcheckGraphic from '@/components/healthcheck/HealthcheckGraphic';
import HealthcheckHero from '@/components/healthcheck/HealthcheckHero';
import VideoPlaceholder from '@/components/healthcheck/VideoPlaceholder';
import {
  expressInterest,
  finalCta,
  invoiceCaption,
  rightForYou,
  steveCanHelp,
  whatHappensNext,
  whatThisIs,
  whatThisIsNot,
  whatYouGet,
} from '@/lib/healthcheck/content';

export default function AdminWorkflowHealthcheckPage() {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <HealthcheckHero />
      <VideoPlaceholder />

      <section className="py-20 bg-terminal-black terminal-section">
        <div className="container max-w-3xl">
          <h2 className="section-title text-center mb-8">{whatThisIs.title}</h2>
          {whatThisIs.paragraphs.map((p, i) => (
            <p key={i} className="text-terminal-white/90 mb-4">
              {p}
            </p>
          ))}
          <p className="text-xl font-black text-terminal-green font-terminal-mono text-center mt-8">
            {whatThisIs.aim}
          </p>
        </div>
      </section>

      <section className="py-20 bg-terminal-dark terminal-section">
        <div className="container max-w-3xl">
          <h2 className="section-title text-center mb-4">{rightForYou.title}</h2>
          <p className="text-center text-terminal-white/80 mb-8">{rightForYou.intro}</p>
          <BulletList items={rightForYou.bullets} />
        </div>
      </section>

      <section className="py-20 bg-terminal-black terminal-section">
        <div className="container max-w-3xl">
          <h2 className="section-title text-center mb-4">{steveCanHelp.title}</h2>
          <p className="text-center text-terminal-white/80 mb-8">{steveCanHelp.intro}</p>
          <BulletList items={steveCanHelp.bullets} />
          <p className="mt-8 text-terminal-white/90">{steveCanHelp.closing}</p>
        </div>
      </section>

      <BeforeAfterTable />
      <GoblinCards />

      <section className="py-20 bg-terminal-black terminal-section">
        <div className="container max-w-3xl space-y-16">
          <div>
            <h2 className="section-title text-center mb-4">{whatYouGet.title}</h2>
            <p className="text-center text-terminal-white/80 mb-8">{whatYouGet.intro}</p>
            <BulletList items={whatYouGet.bullets} />
            <p className="mt-8 text-terminal-white/90">{whatYouGet.closing}</p>
          </div>

          <div className="neo-terminal-element border-4 border-terminal-pink rounded-neo p-8">
            <h2 className="text-2xl font-black text-terminal-pink font-terminal-mono uppercase mb-4">
              {whatThisIsNot.title}
            </h2>
            <p className="mb-4 text-terminal-white/80">{whatThisIsNot.intro}</p>
            <BulletList items={whatThisIsNot.bullets} />
            <p className="mt-6 text-terminal-white/90">{whatThisIsNot.closing}</p>
          </div>

          <div>
            <h2 className="section-title text-center mb-8">{whatHappensNext.title}</h2>
            <ol className="space-y-4">
              {whatHappensNext.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start neo-terminal-element bg-terminal-dark border-3 border-terminal-green rounded-terminal p-4"
                >
                  <span className="flex-shrink-0 w-10 h-10 bg-terminal-green text-terminal-black font-black font-terminal-mono flex items-center justify-center rounded-terminal border-2 border-terminal-black">
                    {i + 1}
                  </span>
                  <span className="text-terminal-white/90 pt-2">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-terminal-white/90 text-center">
              {whatHappensNext.closing}
            </p>
          </div>
        </div>
      </section>

      <section
        id="express-interest"
        className="py-20 bg-terminal-dark terminal-section scroll-mt-24"
      >
        <div className="container max-w-2xl">
          <div className="mb-8 text-center">
            <HealthcheckGraphic
              variant="invoice"
              className="w-full max-w-[280px] mx-auto text-terminal-green mb-4"
            />
            <p className="text-sm italic text-terminal-white/70">
              &ldquo;{invoiceCaption}&rdquo;
            </p>
          </div>

          <h2 className="section-title text-center mb-4">{expressInterest.title}</h2>
          <p className="text-center text-terminal-white/80 mb-10">{expressInterest.intro}</p>

          <div className="neo-terminal-element border-4 border-terminal-green rounded-neo p-6 md:p-10 bg-terminal-black">
            <ExpressInterestForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-terminal-black terminal-section">
        <div className="container max-w-3xl text-center">
          <h2 className="section-title mb-6">{finalCta.title}</h2>
          <p className="text-terminal-white/90 mb-6">{finalCta.body}</p>
          <p className="text-lg font-bold text-terminal-green font-terminal-mono mb-8">
            {finalCta.closing}
          </p>
          <Link href="#express-interest" className="btn btn-primary">
            Express Interest in the £50 Healthcheck
          </Link>
        </div>
      </section>
    </div>
  );
}
