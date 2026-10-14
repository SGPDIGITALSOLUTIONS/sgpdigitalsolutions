import Link from 'next/link';
import SitePage from '@/components/SitePage';
import HealthcheckOffer from '@/components/healthcheck/HealthcheckOffer';

const paymentExamples = [
  {
    title: 'Pay in full · self-managed', price: '£1,200', period: 'one-off example build cost',
    total: 'Example first-year total: £1,200, excluding your own hosting and support costs.',
    features: ['Ownership on full payment', 'You manage the tool yourself', 'Hosting, support and updates are not included'],
  },
  {
    title: 'Pay in full · with management', price: '£1,200 + £35/month', period: 'example build and ongoing management',
    total: 'Example first-year total: £1,620, including 12 months of management.',
    features: ['Ownership on full payment', 'Hosting, backups and general maintenance', 'Security updates, bug fixes and performance monitoring'],
  },
  {
    title: 'Split payments · with management', price: '£300 + £110/month', period: 'deposit, then 12 monthly payments',
    total: 'Example first-year total: £1,620. Optional management is £35/month after the 12-month term.',
    features: ['Build and management included during the term', 'Ownership transfers once the 12-month balance is paid', 'Early buyout available by paying the remaining balance'],
  },
];

const questions = [
  { question: 'What does the £50 healthcheck include?', answer: 'A review of one admin-heavy process, the points where time is being lost, opportunities to simplify or automate, and practical next steps. Session length and turnaround are agreed when booking. A software build is quoted separately.' },
  { question: 'Do I need a healthcheck before a project?', answer: 'It is a useful starting point if you are unsure what to improve. If you already have a clear brief, contact us to discuss the scope and a project quote.' },
  { question: 'Are Microsoft licences and other subscriptions included?', answer: 'Software licences and third-party subscriptions are separate from the build unless your quote says otherwise. We check the tools and access a workflow needs and discuss any additional costs before work starts.' },
  { question: 'What happens after the build?', answer: 'You receive a walkthrough and documentation for the agreed solution. We agree any ongoing monitoring, maintenance or changes separately, with a clear scope and cost.' },
  { question: 'Are the web-tool examples fixed prices for every project?', answer: 'No. They illustrate payment options for a typical £1,200 web tool. Your actual quote depends on the work involved. They are not an automation price list.' },
  { question: 'What happens after the split-payment term?', answer: 'Once the balance is paid, ownership transfers to you. In the example above, management can continue at £35 per month or you can cancel it and arrange your own hosting and support. You can buy out the remaining balance early. Payment structures are agreed at the start; support can be added or removed by agreement.' },
];

export default function PricingPage() {
  return (
    <SitePage>
      <section>
        <div className="container">
          <p className="site-eyebrow">CLEAR SCOPE. CLEAR COSTS.</p><h1>Automation pricing.<br />Start with one process.</h1>
          <p className="text-xl max-w-3xl mb-8">Start with a £50 workflow healthcheck, or bring us a brief for a scoped project quote. We agree what will be built, what it will cost and any ongoing charges before work starts.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admin-workflow-healthcheck" className="btn btn-primary">Start with the £50 healthcheck</Link>
            <Link href="/contact" className="btn btn-outline">Request a project quote</Link>
          </div>
        </div>
      </section>
      <section aria-labelledby="pricing-healthcheck-title"><div className="container"><HealthcheckOffer id="pricing-healthcheck-title" /></div></section>
      <section aria-labelledby="build-pricing-title">
        <div className="container">
          <h2 id="build-pricing-title" className="mb-4">A build priced around the work you need.</h2>
          <p className="max-w-3xl mb-10">Automation costs depend on the steps involved, the systems we connect and the exceptions the workflow needs to handle. We review these with you before preparing your quote.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-xl border border-white/10 p-8">
              <p className="site-eyebrow">IMPLEMENTATION</p><h3 className="mb-3">Automation build · quoted per project</h3>
              <p className="mb-6">A defined workflow built around your business, including the testing, walkthrough and documentation agreed in your scope.</p>
              <ul className="list-disc pl-5 space-y-3 text-white/80"><li>The process, integrations and outputs to be built</li><li>Approval steps, exceptions and testing</li><li>Your delivery plan and payment schedule</li></ul>
              <Link href="/contact" className="btn btn-outline mt-8">Discuss your workflow</Link>
            </article>
            <article className="rounded-xl border border-white/10 p-8">
              <p className="site-eyebrow">AFTER HANDOVER</p><h3 className="mb-3">Ongoing support · agreed separately</h3>
              <p className="mb-6">Choose the support your setup needs. We define the work covered and the cost, so you know who to contact when something needs attention.</p>
              <ul className="list-disc pl-5 space-y-3 text-white/80"><li>Monitoring and maintenance where agreed</li><li>Help with faults and changes to connected tools</li><li>Further improvements scoped before work starts</li></ul>
              <p className="mt-8 text-sm">Licences, third-party subscriptions and hosting are identified separately where needed. Your quote states what is included.</p>
            </article>
          </div>
        </div>
      </section>
      <section id="web-tool-payment-options" aria-labelledby="web-tool-pricing-title">
        <div className="container">
          <p className="site-eyebrow">BESPOKE WEB TOOLS</p><h2 id="web-tool-pricing-title" className="mb-4">Web-tool payment examples.</h2>
          <p className="max-w-3xl mb-10">These existing payment options illustrate a typical £1,200 web tool project. They are examples, not fixed automation packages. The final scope and price are confirmed in your quote.</p>
          <div className="grid lg:grid-cols-3 gap-6">
            {paymentExamples.map(option => (
              <article key={option.title} className="rounded-xl border border-white/10 p-8 flex flex-col">
                <h3 className="mb-6">{option.title}</h3><p className="text-sgp-green text-2xl font-semibold mb-2">{option.price}</p><p className="text-sm mb-6">{option.period}</p>
                <ul className="space-y-3 mb-6 text-white/80">{option.features.map(feature => <li key={feature} className="flex gap-3"><span className="text-sgp-green" aria-hidden="true">✓</span>{feature}</li>)}</ul>
                <p className="text-sm border-t border-white/10 pt-6 mt-auto">{option.total}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-8"><Link href="/contact" className="btn btn-outline">Discuss a web tool</Link><Link href="/websites" className="btn btn-outline">Looking for website design?</Link></div>
        </div>
      </section>
      <section aria-labelledby="pricing-questions-title">
        <div className="container max-w-4xl">
          <h2 id="pricing-questions-title" className="mb-8">Before you get started.</h2>
          <div className="space-y-4">{questions.map(item => <details key={item.question} className="border border-white/15 rounded p-6"><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-4">{item.answer}</p></details>)}</div>
          <div className="mt-10"><Link href="/admin-workflow-healthcheck" className="btn btn-primary">Start with the £50 healthcheck</Link></div>
        </div>
      </section>
    </SitePage>
  );
}
