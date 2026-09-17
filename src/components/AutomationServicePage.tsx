import Link from 'next/link';
import SitePage from '@/components/SitePage';
import BrochureDownload from '@/components/BrochureDownload';
import AutomationIcon from '@/components/home/AutomationIcon';
import { automationPages, type AutomationService } from '@/lib/automation-services';
import { SITE_URL } from '@/lib/seo';
import styles from './AutomationServicePage.module.css';

const relatedServices = [
  { slug: 'business-automation', label: 'Business automation' },
  { slug: 'microsoft-365-automation', label: 'Microsoft 365 automation' },
  { slug: 'expense-approval-automation', label: 'Expense approval automation' },
] as const;

export default function AutomationServicePage({ service }: { service: AutomationService }) {
  const content = automationPages[service];
  const schema = {
    '@context': 'https://schema.org', '@type': 'Service',
    name: relatedServices.find(item => item.slug === service)!.label,
    url: `${SITE_URL}/${service}`, description: content.intro,
    provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'SGP Digital Solutions' },
  };
  return <SitePage>
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <div className="container">
        <Link href="/services" className={styles.back}>← All services</Link>
        <p className="site-eyebrow">{content.eyebrow}</p>
        <h1>{content.heading}<br /><span className={styles.accent}>{content.accent}</span></h1>
        <p className={styles.intro}>{content.intro}</p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn btn-primary">Talk through your workflow <AutomationIcon name="arrow" /></Link>
          <BrochureDownload className={styles.textLink} />
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className={styles.heading}><h2>{content.sectionTitle}</h2><p>{content.sectionIntro}</p></div>
        <div className={styles.grid}>
          {content.examples.map((example, index) => <article className={styles.card} key={example.title}>
            <span className={styles.number}>0{index + 1}</span><h3>{example.title}</h3><p>{example.body}</p>
          </article>)}
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2 className={styles.sectionTitle}>{content.processTitle}</h2>
        <ol className={styles.grid}>
          {content.steps.map((step, index) => <li className={styles.step} key={step.title}>
            <span className={styles.number}>0{index + 1}</span><h3>{step.title}</h3><p>{step.body}</p>
          </li>)}
        </ol>
        <aside className={styles.proof}><div><h2>{content.proofTitle}</h2><p>{content.proof}</p></div>
          <Link className={styles.textLink} href={content.proofHref}>{content.proofLabel} <AutomationIcon name="arrow" /></Link>
        </aside>
      </div>
    </section>
    <section>
      <div className={`container ${styles.faqLayout}`}>
        <h2>A few useful answers.</h2>
        <div>{content.faqs.map(faq => <details className={styles.faq} key={faq.question}>
          <summary>{faq.question}</summary><p>{faq.answer}</p>
        </details>)}</div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className={styles.healthcheck}>
          <div><p className="site-eyebrow">A SIMPLE STARTING POINT · £50</p><h2>Start with one process.</h2>
            <p>The Admin &amp; Workflow Healthcheck reviews one task and gives you practical next steps before you commit to a bigger build.</p></div>
          <Link href="/admin-workflow-healthcheck" className="btn btn-primary">Explore the £50 healthcheck <AutomationIcon name="arrow" /></Link>
        </div>
        <nav className={styles.related} aria-label="Related automation services">
          {relatedServices.filter(item => item.slug !== service).map(item => <Link key={item.slug} href={`/${item.slug}`}>
            {item.label} <AutomationIcon name="arrow" />
          </Link>)}
        </nav>
      </div>
    </section>
  </SitePage>;
}
