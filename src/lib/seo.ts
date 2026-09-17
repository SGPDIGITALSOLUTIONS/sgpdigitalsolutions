import type { Metadata } from 'next';
import { homeMeta } from '@/lib/home/content';
import { healthcheckMeta } from '@/lib/healthcheck/content';

export const SITE_URL = 'https://www.sgpdigitalsolutions.co.uk';
export const SITE_NAME = 'SGP Digital Solutions';

// One list keeps page metadata and the sitemap aligned. Retired routes stay out.
export const sitePages = {
  '/': { title: homeMeta.title, description: homeMeta.description },
  '/about': {
    title: 'Meet Stephen Pratt & the Team | SGP Digital Solutions',
    description: 'Meet Stephen Pratt and the team behind SGP Digital Solutions. Practical business automation, websites and digital support, with clear advice and no jargon.',
  },
  '/services': {
    title: 'Automation & Website Services | SGP Digital Solutions',
    description: 'Explore business automation, Microsoft 365 workflows, website design and bespoke web tools. Practical digital services built around the way your business works.',
  },
  '/contact': {
    title: 'Contact SGP Digital Solutions | Talk Through Your Project',
    description: 'Tell SGP about the admin task, website or workflow you need help with. Contact us by email, WhatsApp or our enquiry form to discuss a practical next step.',
  },
  '/pricing': {
    title: 'Project Pricing & Payment Options | SGP Digital Solutions',
    description: 'Explore SGP web tool pricing examples, payment options and ongoing management. See how projects are scoped and get a quote for the work your business needs.',
  },
  '/portfolio': {
    title: 'Client Work & Case Studies | SGP Digital Solutions',
    description: 'See how SGP helps real people with clearer websites, less repetitive admin and recovered data. Explore our client stories and the work we delivered.',
  },
  '/websites': {
    title: 'Website Design for Small Businesses | SGP Digital Solutions',
    description: 'Websites that explain your services and make it easy for customers to get in touch. Explore SGP website design, updates and support for small businesses.',
  },
  '/business-automation': {
    title: 'Small Business Automation | SGP Digital Solutions',
    description: 'Reduce repetitive admin with business automation built around your team. Connect records, reporting, reminders and handovers. Start with a £50 workflow healthcheck.',
  },
  '/microsoft-365-automation': {
    title: 'Microsoft 365 & Power Automate | SGP Digital Solutions',
    description: 'Connect Microsoft Forms, SharePoint, Teams and Excel with Power Automate. SGP builds practical Microsoft 365 workflows for approvals, updates and reporting.',
  },
  '/expense-approval-automation': {
    title: 'Expense Approval Automation | SGP Digital Solutions',
    description: 'Simplify expense claims with receipt capture, approval routing and status updates. SGP builds expense workflows around your team and finance process.',
  },
  '/admin-workflow-healthcheck': {
    title: '£50 Admin & Workflow Healthcheck | SGP Digital Solutions',
    description: healthcheckMeta.description,
  },
  '/privacy': {
    title: 'Privacy Policy | SGP Digital Solutions',
    description: 'Read how SGP Digital Solutions collects, uses and protects personal information, including website enquiries, cookies and your data protection rights.',
  },
  '/terms': {
    title: 'Terms of Service | SGP Digital Solutions',
    description: 'Read the SGP Digital Solutions terms of service, including project agreements, payments, intellectual property and responsibilities when using our services.',
  },
  '/portfolio/hudson-virtual': {
    title: 'Hudson Virtual Website Case Study | SGP Digital Solutions',
    description: 'How SGP brought Hudson Virtual Business Services, pricing and appointment booking together in one website, helping visitors find support and book a conversation.',
  },
  '/portfolio/i-care-services': {
    title: 'I Care Website Case Study | SGP Digital Solutions',
    description: 'Explore our work for I Care Service Provider: a home optometry website with coverage checks, online payments, subscriptions and straightforward contact options.',
  },
  '/portfolio/dannys-decorating': {
    title: "Danny’s Decorating Website | SGP Digital Solutions",
    description: 'A website for Danny’s Decorating, a specialist decorator in Kensington and Chelsea, with clear service information and a simple route to requesting a quote.',
  },
  '/portfolio/heartwood-wellbeing': {
    title: 'Heartwood Wellbeing Website | SGP Digital Solutions',
    description: 'See the website design in development for Heartwood Wellbeing, presenting holistic companion care for older people and families in a warm, accessible setting.',
  },
  '/portfolio/database-scrape-tool': {
    title: 'Business Records Recovery Case Study | SGP Digital Solutions',
    description: 'How an SGP automation recovered over 3,000 business records from an older system in around three hours, avoiding the need to copy each record by hand.',
  },
  '/portfolio/data-recovery': {
    title: 'Family Photo Recovery Case Study | SGP Digital Solutions',
    description: 'Read how SGP recovered Lana’s irreplaceable family photos from a broken laptop with a forgotten password and restored the laptop to working order.',
  },
  '/portfolio/sgp-digital-solutions': {
    title: 'Our Own Website Case Study | SGP Digital Solutions',
    description: 'Explore the SGP Digital Solutions website project: explaining our services, sharing client work and giving business owners a clear way to start a conversation.',
  },
} as const;

export type SitePath = keyof typeof sitePages;

export function pageMetadata(path: SitePath): Metadata {
  const { title, description } = sitePages[path];
  const url = new URL(path, SITE_URL).href;
  const images = [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630,
    alt: 'SGP Digital Solutions — Less admin. More business.' }];
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, locale: 'en_GB', type: 'website', images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo%20trimmed.png`,
  description: 'Practical business automation, websites and digital solutions.',
  email: 'hello@sgpdigitalsolutions.co.uk',
  telephone: '+447516735792',
  founder: { '@type': 'Person', name: 'Stephen Pratt', url: `${SITE_URL}/about` },
};
