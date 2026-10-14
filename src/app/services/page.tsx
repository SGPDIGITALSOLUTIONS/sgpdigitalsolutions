import Link from 'next/link';
import SitePage from '@/components/SitePage';
import BrochureDownload from '@/components/BrochureDownload';
import HealthcheckOffer from '@/components/healthcheck/HealthcheckOffer';

const services = [
  {
    href: '/business-automation', title: 'Business automation',
    description: 'Join up the tasks your team repeats, so information moves without another round of copying, chasing and retyping.',
    examples: ['Scheduled reports and reminders', 'Customer enquiries and onboarding', 'Connected records and handovers'],
  },
  {
    href: '/microsoft-365-automation', title: 'Microsoft 365 automation',
    description: 'Use Power Automate to connect Forms, SharePoint, Teams and Excel around the way your business works.',
    examples: ['Forms that update shared records', 'Approval requests and Teams notifications', 'Regular summaries from your business data'],
  },
  {
    href: '/expense-approval-automation', title: 'Expense approval automation',
    description: 'Keep receipts, claim details and approval decisions together, with a clear route from submission to finance.',
    examples: ['Receipt capture and claim submission', 'Routing to the right approver', 'Status updates and finance handovers'],
  },
];

const steps = [
  { title: 'Understand one process', description: 'We look at what happens now, where time is lost and which decisions need a person. Start with a £50 healthcheck if you need help choosing the next step.' },
  { title: 'Agree the work and price', description: 'We define the scope, tools, costs and delivery plan before a build starts. Any software subscriptions or ongoing support are discussed separately.' },
  { title: 'Build, test and hand over', description: 'We test the workflow, including exceptions and approvals, then give you a walkthrough and documentation. Ongoing support is agreed around your needs.' },
];

export default function ServicesPage() {
  return (
    <SitePage>
      <section>
        <div className="container">
          <p className="site-eyebrow">PRACTICAL AUTOMATION FOR SMALL BUSINESSES</p>
          <h1>Less repetitive admin.<br />More time for your business.</h1>
          <p className="text-xl mb-8 max-w-3xl">We build business automation and Microsoft 365 workflows around the tools you use. From reports and reminders to expenses and approvals, start with the process that is slowing you down.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin-workflow-healthcheck" className="btn btn-primary">Start with the £50 healthcheck</Link>
            <Link href="/contact" className="btn btn-outline">Discuss an automation project</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="automation-services-title">
        <div className="container">
          <h2 id="automation-services-title" className="mb-4">What would you like to simplify?</h2>
          <p className="max-w-3xl mb-10">Choose a starting point. Each workflow is scoped around your process, the systems involved and the people who need to use it.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(service => (
              <article key={service.href} className="rounded-xl border border-white/10 p-8 flex flex-col">
                <h3 className="mb-4">{service.title}</h3><p className="mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8 text-white/80">
                  {service.examples.map(example => <li key={example} className="flex gap-3"><span className="text-sgp-green" aria-hidden="true">✓</span>{example}</li>)}
                </ul>
                <Link href={service.href} className="mt-auto text-sgp-green underline underline-offset-4">Explore {service.title.toLowerCase()} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-8"><BrochureDownload className="btn btn-outline" /></div>
        </div>
      </section>
      <section aria-labelledby="services-healthcheck-title">
        <div className="container"><HealthcheckOffer id="services-healthcheck-title" /></div>
      </section>
      <section aria-labelledby="process-title">
        <div className="container">
          <h2 id="process-title" className="mb-10">From a recurring task to a working solution.</h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-white/20 pt-6">
                <p className="site-eyebrow">0{index + 1}</p><h3 className="mb-3">{step.title}</h3><p>{step.description}</p>
              </li>
            ))}
          </ol>
          <Link href="/pricing" className="btn btn-outline mt-8">See pricing and payment options</Link>
        </div>
      </section>
      <section aria-labelledby="evidence-title">
        <div className="container grid md:grid-cols-2 gap-10 items-start">
          <div><p className="site-eyebrow">AUTOMATION IN PRACTICE</p><h2 id="evidence-title">Over 3,000 records.<br />Recovered in around three hours.</h2></div>
          <div><p className="mb-6">A business needed important information from an older system. We built an automated extraction to recover the records without copying each one by hand.</p><Link href="/portfolio/database-scrape-tool" className="text-sgp-green underline underline-offset-4">Read the records recovery case study →</Link></div>
        </div>
      </section>
      <section aria-labelledby="other-services-title">
        <div className="container">
          <p className="site-eyebrow">BEYOND AUTOMATION</p><h2 id="other-services-title" className="mb-8">Websites and tools that support your business.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-xl border border-white/10 p-8">
              <h3 className="mb-3">Website design</h3><p className="mb-6">A clear, mobile-friendly website that explains your services and makes it easy for customers to enquire. We also help with updates to an existing site.</p>
              <Link href="/websites" className="text-sgp-green underline underline-offset-4">Explore website design →</Link>
            </article>
            <article className="rounded-xl border border-white/10 p-8">
              <h3 className="mb-3">Bespoke web tools</h3><p className="mb-6">A shared browser-based tool for a job your existing software does not cover. We agree the functions, access and support your team needs before building.</p>
              <Link href="/contact" className="text-sgp-green underline underline-offset-4">Discuss a bespoke web tool →</Link>
            </article>
          </div>
        </div>
      </section>
    </SitePage>
  );
}
