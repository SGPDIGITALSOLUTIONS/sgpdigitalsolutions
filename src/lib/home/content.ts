import { whatThisIs } from '@/lib/healthcheck/content';

// Keep the existing exports: other pages/components may still use them.
export const homeHero = {
  subtitle: 'Less admin. Less copy-paste. More time for the work that matters.',
};

export const adminPromo = {
  headline: whatThisIs.aim,
  subheadline: 'Admin quietly robbing your week?',
  bullets: [
    'You copy the same information into more than one place.',
    'You have a spreadsheet that everyone is slightly scared to touch.',
    'You\'re using your inbox as a task management system. Bold choice.',
    'Your process only works because one person "just knows how it works".',
  ],
  primaryCta: 'Express interest in the £50 healthcheck',
  secondaryCta: 'See before/after examples',
  healthcheckPath: '/admin-workflow-healthcheck',
  examplesAnchor: '/admin-workflow-healthcheck#examples',
};

export const stephenIntro = {
  healthcheckNote:
    'Not sure where to start? Our £50 Admin & Workflow Healthcheck reviews one process — a low-risk first step before any bigger build.',
};

export const pillars = [
  { icon: '💰', title: 'Transparent Pricing', description: 'No hidden costs or surprise fees' },
  { icon: '⚡', title: 'Quick Wins', description: 'Healthcheck in days, not months' },
  { icon: '🔄', title: 'Less Repetitive Admin', description: 'Automate the boring bits so your team can focus on real work' },
];

export const homeMeta = {
  title: 'Business Automation & Workflows | SGP Digital Solutions',
  description:
    'Less admin. More business. SGP builds practical business automations for reporting, expenses, approvals, onboarding and connected systems. Let’s simplify your workflows.',
  keywords: [
    'business process automation',
    'small business automation',
    'workflow automation UK',
    'Microsoft 365 automation',
    'Power Automate support',
    'automated reporting',
    'expense approval automation',
    'admin workflow healthcheck',
  ],
};

export const footerTagline = 'We automate the boring stuff. You do the real work.';

export const automationServices = [
  {
    icon: 'chart', number: '01', title: 'Reporting & dashboards',
    description: 'Bring submissions together, calculate totals and send scheduled updates without rebuilding the same spreadsheet every week.',
    example: 'Weekly summaries. Monthly totals. Clearer visibility.',
  },
  {
    icon: 'receipt', number: '02', title: 'Expenses & approvals',
    description: 'Take a photo of a receipt, submit a claim and get it to the right approver. Keep everyone updated without the email chase.',
    example: 'Receipt capture. Approval alerts. Claim tracking.',
  },
  {
    icon: 'file', number: '03', title: 'Invoices & finance admin',
    description: 'Record incoming invoices, route documents to the right people and prepare approved information for your finance team.',
    example: 'Invoice records. Attachments. Payment reminders.',
  },
  {
    icon: 'people', number: '04', title: 'Onboarding & documents',
    description: 'Collect the details once, send the right welcome information and make sure the next steps reach the people responsible.',
    example: 'Welcome packs. Setup tasks. Consistent handovers.',
  },
  {
    icon: 'bell', number: '05', title: 'Reminders & notifications',
    description: 'Send useful prompts when something is due, a decision is made or a task needs attention. Less chasing. Fewer missed steps.',
    example: 'Scheduled messages. Status updates. Follow-ups.',
  },
  {
    icon: 'workflow', number: '06', title: 'Connected systems',
    description: 'Connect forms, lists, spreadsheets and business tools through supported integrations, so information moves instead of being retyped.',
    example: 'One submission. Connected records. Less copy-paste.',
  },
] as const;

export const workflowSteps = [
  { title: 'A receipt is submitted', description: 'A photo or file, captured with the claim.' },
  { title: 'The right person approves', description: 'The decision is recorded and the claimant is notified.' },
  { title: 'Finance gets what it needs', description: 'Approved details and the receipt arrive together.' },
  { title: 'The record stays up to date', description: 'The latest status is available without another email.' },
] as const;

export const deliverySteps = [
  { number: '01', title: 'Understand the work', description: 'We look at what happens now, where time is lost and what a better process should do. No jargon. No unnecessary rebuilds.' },
  { number: '02', title: 'Build around your business', description: 'We agree the scope, connect the right tools and test the workflow, including the decisions and exceptions that still need a person.' },
  { number: '03', title: 'Hand over with confidence', description: 'You get a clear walkthrough and documentation. We agree any ongoing support, so the process doesn’t depend on guesswork.' },
] as const;
