import Header from '@/components/Header';
import BeforeAfterTable from '@/components/healthcheck/BeforeAfterTable';
import ExpressInterestForm from '@/components/healthcheck/ExpressInterestForm';
import GoblinCards from '@/components/healthcheck/GoblinCards';
import HealthcheckHero from '@/components/healthcheck/HealthcheckHero';
import HealthcheckSummary from '@/components/healthcheck/HealthcheckSummary';
import VideoPlaceholder from '@/components/healthcheck/VideoPlaceholder';
import { expressInterest } from '@/lib/healthcheck/content';

export default function AdminWorkflowHealthcheckPage() {
  return (
    <div className="min-h-screen bg-terminal-black">
      <Header />
      <HealthcheckHero />
      <VideoPlaceholder />
      <GoblinCards />
      <BeforeAfterTable />
      <HealthcheckSummary />

      <section
        id="express-interest"
        className="py-14 bg-terminal-black terminal-section scroll-mt-24"
      >
        <div className="container max-w-2xl">
          <h2 className="section-title text-center mb-4">{expressInterest.title}</h2>
          <p className="text-center text-terminal-white/80 mb-8">
            {expressInterest.intro}
          </p>

          <div className="neo-terminal-element border-4 border-terminal-green rounded-neo p-6 md:p-10 bg-terminal-dark">
            <ExpressInterestForm />
          </div>
        </div>
      </section>
    </div>
  );
}
