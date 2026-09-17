'use client';

import AutomationIcon from '@/components/home/AutomationIcon';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Portfolio.module.css';

const filters = ['All work', 'Websites', 'Less admin', 'Data recovery'] as const;
type Filter = typeof filters[number];
type Project = {
  id: string; title: string; client: string; need: string; outcome: string;
  groups: Filter[]; image?: string; imageAlt?: string; logo?: boolean;
  illustration?: 'workflow' | 'file'; status?: string;
};

// Summaries describe the work recorded in the existing case studies.
const projects: Project[] = [
  {
    id: 'hudson-virtual', title: 'Hudson Virtual Business Services',
    client: 'Tasha helps business owners get on top of their admin and free up their time.',
    need: 'A clear way to explain her services, show pricing and let people book a conversation.',
    outcome: 'A website that brings services, pricing and appointment booking together in one place.',
    groups: ['Websites', 'Less admin'], image: '/portfolio/hudsonvirtualfinal.png',
    imageAlt: 'Hudson Virtual Business Services website',
  },
  {
    id: 'i-care-services', title: 'I Care Service Provider Ltd',
    client: 'A Yorkshire optometry service bringing eye care to people at home.',
    need: 'Help patients find out whether they are covered and access services from home.',
    outcome: 'Online coverage checks, payments and subscriptions, with email and WhatsApp contact options.',
    groups: ['Websites', 'Less admin'], image: '/portfolio/eyecareproviderlogo.jpg',
    imageAlt: 'I Care Service Provider logo', logo: true,
  },
  {
    id: 'dannys-decorating', title: "Danny's Decorating Ltd",
    client: 'A specialist residential decorator working in Kensington and Chelsea.',
    need: 'A website that reflects the care and quality of their work in clients’ homes.',
    outcome: 'Clear service information and a straightforward route to requesting a quotation.',
    groups: ['Websites'], image: '/portfolio/dannys-decorating-hero.png',
    imageAlt: "Danny's Decorating website",
  },
  {
    id: 'heartwood-wellbeing', title: 'Heartwood Wellbeing',
    client: 'Kelly provides holistic companion care for older people and their families.',
    need: 'A welcoming way to explain her approach and the care she offers.',
    outcome: 'A website design that presents her services and approach in a warm, accessible setting.',
    groups: ['Websites'], image: '/portfolio/heartwoodwellbeing.png',
    imageAlt: 'Heartwood Wellbeing website design', status: 'In development',
  },
  {
    id: 'database-scrape-tool', title: 'A business with records to rescue',
    client: 'A private business needed to move important records out of an older system.',
    need: 'Recover years of information without copying every record by hand.',
    outcome: 'An automated extraction recovered over 3,000 records in around three hours.',
    groups: ['Less admin'], illustration: 'workflow',
  },
  {
    id: 'data-recovery', title: 'Lana’s family photos, recovered',
    client: 'A parent whose children’s baby photos were trapped on a broken laptop.',
    need: 'Recover irreplaceable photos from a laptop with a forgotten password.',
    outcome: 'Her family photos were recovered and the laptop was restored to working order.',
    groups: ['Data recovery'], illustration: 'file',
  },
  {
    id: 'sgp-digital-solutions', title: 'SGP Digital Solutions',
    client: 'Our own website, built to explain how we help businesses with their day-to-day work.',
    need: 'Make our services easy to understand and give visitors a clear place to start.',
    outcome: 'Practical examples, client stories and a direct route to talking through a project.',
    groups: ['Websites'], image: '/portfolio/sgpdigitalsolutions.png',
    imageAlt: 'SGP Digital Solutions website project', status: 'Our own website',
  },
];

// Preserve incoming links from service pages using the earlier category names.
function initialFilter(category: string): Filter {
  if (category === 'Website Design' || category === 'Websites') return 'Websites';
  if (['Automation', 'Integration', 'Bespoke WebTools', 'Less admin'].includes(category ?? '')) return 'Less admin';
  if (category === 'Other' || category === 'Data recovery') return 'Data recovery';
  return 'All work';
}

function ProjectImage({ project, priority }: { project: Project; priority: boolean }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`${styles.visual} ${project.logo ? styles.logo : ''}`}>
      {project.image && !failed ? (
        <Image src={project.image} alt={project.imageAlt ?? project.title} fill
          className={styles.image} sizes="(max-width: 767px) 100vw, 50vw"
          priority={priority} onError={() => setFailed(true)} />
      ) : (
        <div className={styles.illustration}>
          <AutomationIcon name={project.illustration ?? 'file'} />
          <span>{project.illustration === 'workflow' ? 'Important records. Recovered.' : project.illustration === 'file' ? 'Family memories. Found again.' : project.title}</span>
          <small>{project.illustration ? 'Private client project' : 'Client story'}</small>
        </div>
      )}
      {project.status && <span className={styles.status}>{project.status}</span>}
    </div>
  );
}

export default function PortfolioStories({ category }: { category: string }) {
  const [selected, setSelected] = useState<Filter>(() => initialFilter(category));
  const visible = projects.filter(project => selected === 'All work' || project.groups.includes(selected));
  return (
    <div className={`container ${styles.stories}`}>
      <div className={styles.filters} role="group" aria-label="Filter client stories">
        {filters.map(filter => <button type="button" key={filter} aria-pressed={selected === filter}
          onClick={() => setSelected(filter)}>{filter}</button>)}
      </div>
      <p className={styles.count} role="status">{visible.length} {visible.length === 1 ? 'story' : 'stories'} · {selected}</p>
      <div className={styles.grid}>
        {visible.map((project, index) => (
          <article key={project.id} className={styles.card}>
            <ProjectImage project={project} priority={index < 2} />
            <div className={styles.copy}>
              <h2 className={styles.title}>{project.title}</h2>
              <p className={styles.client}>{project.client}</p>
              <dl className={styles.summary}>
                <div><dt>What they needed</dt><dd>{project.need}</dd></div>
                <div><dt>{project.status === 'In development' ? 'The work so far' : 'What we delivered'}</dt><dd>{project.outcome}</dd></div>
              </dl>
              <Link href={`/portfolio/${project.id}`} className={styles.storyLink}
                aria-label={`See the story: ${project.title}`}>See the story <AutomationIcon name="arrow" /></Link>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.contact}>
        <div><h2>Something here sound familiar?</h2><p>Tell us what you need a hand with. We’ll work out a sensible next step together.</p></div>
        <Link href="/contact" className="btn btn-primary">Let’s talk <AutomationIcon name="arrow" /></Link>
      </div>
    </div>
  );
}
