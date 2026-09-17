import Link from 'next/link';
import HomeNavigation from './HomeNavigation';
import AutomationVideo from './AutomationVideo';
import AutomationIcon from './AutomationIcon';
import { automationServices, deliverySteps, footerTagline, workflowSteps } from '@/lib/home/content';
import styles from './HomePage.module.css';

// Server-rendered content. Only the navigation and video controls require client JS.
export default function HomePage() {
  return (
    <div className={styles.page}>
      <HomeNavigation />
      <main id="main-content">
        <section className={styles.hero} aria-labelledby="home-title">
          <div className={`${styles.container} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span className={styles.statusDot} /> BUSINESS AUTOMATION, BUILT AROUND YOU</p>
              <h1 id="home-title" className={styles.heroTitle}>Less admin.<span>More business.</span></h1>
              <p className={styles.heroDescription}>Your team wasn&apos;t hired to copy and paste.</p>
              <p className={styles.heroBody}>We connect your systems and automate the repetitive work,
                so you can stop chasing, updating and retyping. And get back to what you do best.</p>
              <div className={styles.actions}>
                <Link href="/contact" className={styles.primaryButton}>Let&apos;s talk automation <AutomationIcon name="arrow" /></Link>
                <a href="#automation" className={styles.textLink}>See what we can automate <span aria-hidden="true">↘</span></a>
              </div>
              <p className={styles.heroNote}><AutomationIcon name="check" /> Practical solutions. Clear scope. No unnecessary faff.</p>
            </div>
            <AutomationVideo />
          </div>
          <div className={`${styles.container} ${styles.toolsStrip}`}>
            <p>FAMILIAR TOOLS. LESS MANUAL WORK.</p>
            <div aria-label="Tools we work with"><span>Microsoft 365</span><span>Power Automate</span><span>SharePoint</span><span>Teams</span><span>Excel</span></div>
          </div>
        </section>

        <section id="automation" className={styles.section} aria-labelledby="automation-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>WHAT WE AUTOMATE</p>
                <h2 id="automation-title">The work that repeats.<br /><span>The time you get back.</span></h2></div>
              <p>Start with the process that&apos;s slowing you down. We&apos;ll help turn it into something that works for you, not against you.</p>
            </div>
            <div className={styles.serviceGrid}>
              {automationServices.map((service) => (
                <article key={service.number} className={styles.serviceCard}>
                  <div className={styles.cardTop}><AutomationIcon name={service.icon} /><span>{service.number}</span></div>
                  <h3>{service.title}</h3><p>{service.description}</p>
                  <p className={styles.serviceExample}>{service.example}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.workflowSection}`} aria-labelledby="workflow-title">
          <div className={`${styles.container} ${styles.workflowGrid}`}>
            <div className={styles.workflowCopy}>
              <p className={styles.eyebrow}>FROM CHASING TO FLOWING</p>
              <h2 id="workflow-title">One submission.<br /><span>Everything moves.</span></h2>
              <p>An expense claim shouldn&apos;t need an email chain, a missing receipt and three people asking where it&apos;s got to.</p>
              <p>We build the steps around your process. The right information reaches the right people, with approvals and oversight exactly where you need them.</p>
              <Link href="/contact" className={styles.textLink}>Talk through your workflow <AutomationIcon name="arrow" /></Link>
            </div>
            <div className={styles.workflowPanel}>
              <div className={styles.panelLabel}><span className={styles.statusDot} /> EXAMPLE WORKFLOW <span>EXPENSES</span></div>
              <ol className={styles.workflowSteps}>
                {workflowSteps.map((step, index) => (
                  <li key={step.title}><span className={styles.stepMarker}>{String(index + 1).padStart(2, '0')}</span>
                    <div><h3>{step.title}</h3><p>{step.description}</p></div><AutomationIcon name="check" />
                  </li>
                ))}
              </ol>
              <p className={styles.workflowFootnote}>Illustrative process. Steps and integrations are tailored to your setup.</p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className={styles.section} aria-labelledby="process-title">
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div><p className={styles.eyebrow}>HOW WE WORK</p><h2 id="process-title">Your process.<br /><span>Made simpler.</span></h2></div>
              <p>Not another system for the sake of it. A practical solution, built with you and explained properly.</p>
            </div>
            <div className={styles.processGrid}>
              {deliverySteps.map((step) => <article key={step.number} className={styles.processCard}>
                <span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className={styles.proofSection} aria-labelledby="proof-title">
          <div className={`${styles.container} ${styles.proofGrid}`}>
            <div><p className={styles.eyebrow}>REAL WORK. REAL FEEDBACK.</p><h2 id="proof-title">Less admin.<br /><span>More impact.</span></h2>
              <Link href="/portfolio" className={styles.textLink}>Explore our client work <AutomationIcon name="arrow" /></Link></div>
            <figure className={styles.quote}>
              <blockquote><p>&ldquo;Collaborating with Steve has been transformative for our charity.
                His expertise in technology and automation has not only streamlined our workflows but
                also uncovered opportunities for efficiencies in our operation not previously considered.&rdquo;</p></blockquote>
              <figcaption><span className={styles.authorMark} aria-hidden="true">TW</span><div><strong>Tony Wing</strong><span>Vision Care for Homeless People</span></div></figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="healthcheck-title">
          <div className={styles.container}>
            <div className={styles.healthcheck}>
              <div className={styles.healthcheckPrice}><span>A SIMPLE STARTING POINT</span><strong>£50</strong><span>Admin &amp; Workflow Healthcheck</span></div>
              <div><h2 id="healthcheck-title">Start with one process.</h2>
                <p>Not sure what to automate? Our healthcheck reviews one admin-heavy process and identifies practical next steps before you commit to a bigger build.</p>
                <Link href="/admin-workflow-healthcheck" className={styles.textLink}>Explore the healthcheck <AutomationIcon name="arrow" /></Link></div>
            </div>
            <div className={styles.otherServices}>
              <div><p className={styles.eyebrow}>BEYOND AUTOMATION</p><h2>Need something else?</h2><p>We also build the digital tools around your business.</p></div>
              <div className={styles.otherLinks}>
                <Link href="/services">Website design <AutomationIcon name="arrow" /></Link>
                <Link href="/services">Bespoke web tools <AutomationIcon name="arrow" /></Link>
                <Link href="/services">Ongoing support <AutomationIcon name="arrow" /></Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalSection} aria-labelledby="contact-title">
          <div className={`${styles.container} ${styles.finalCta}`}>
            <p className={styles.eyebrow}>LET&apos;S GIVE YOU SOME TIME BACK</p>
            <h2 id="contact-title">What&apos;s eating into<br /><span>your week?</span></h2>
            <p>Tell us about the task you&apos;re tired of doing.<br />We&apos;ll help you work out a better way.</p>
            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryButton}>Let&apos;s talk automation <AutomationIcon name="arrow" /></Link>
              <a href="mailto:hello@sgpdigitalsolutions.co.uk" className={styles.textLink}>Or email us directly <AutomationIcon name="arrow" /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}><div><strong>SGP DIGITAL SOLUTIONS</strong><p>{footerTagline}</p></div>
            <nav aria-label="Footer navigation"><Link href="/about">About us</Link><Link href="/services">All services</Link><Link href="/portfolio">Client work</Link><Link href="/contact">Contact</Link></nav></div>
          <div className={styles.footerBottom}><p>© {new Date().getFullYear()} SGP Digital Solutions. All rights reserved.</p>
            <div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div></div>
        </div>
      </footer>
    </div>
  );
}
