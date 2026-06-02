export const healthcheckMeta = {
  title: 'Admin & Workflow Healthcheck | SGP Digital Solutions',
  description:
    'A practical £50 admin and workflow healthcheck for small businesses. Find repetitive admin, simplify messy processes, and discover what could be automated. No jargon. No nonsense.',
};

export const hero = {
  title: 'Admin & Workflow Healthcheck',
  subtitle: 'For when your admin has started taking the piss',
  intro: [
    'Your business probably has at least one process that works… technically — but it also involves copy-paste, chasing people, spreadsheets, and quiet despair.',
    'The £50 healthcheck is a focused review of one admin-heavy process: what’s slow, what’s repeated, what relies on memory, and what could be simplified or automated.',
  ],
  tagline: ['No jargon.', 'No nonsense.', 'No printers.'],
  price: '£50',
};

export const video = {
  title: 'What is an Admin & Workflow Healthcheck?',
  hint: 'Not sure what this is? Watch this first.',
  placeholderNote: 'Video coming soon — a short intro from Steve.',
  openingLine:
    'If your business has a process that only works because someone remembers to do seven tiny annoying things in the correct order, this is probably for you.',
};

export const whatThisIs = {
  title: 'What this is',
  paragraphs: [
    'This is a practical review of a process, admin task, workflow, or recurring business faff that is taking more time than it should.',
    'It might be something small but annoying. It might be something important that keeps going wrong. It might be a spreadsheet that has gained too much power.',
  ],
  aim: 'Find the faff. Explain the faff. Reduce the faff.',
};

export const workflowGoblinsSection = {
  title: 'Workflow goblins I help with',
  intro:
    'The workflow goblin is rarely one big problem — it’s usually 14 tiny annoying ones in a trench coat. These are the usual suspects, and the sort of thing I untangle:',
  closing:
    'Basically, if a human is doing the same boring thing over and over again, there is a decent chance a computer should be doing at least part of it quietly in the background.',
};

export type BeforeAfterRow = {
  process: string;
  before: string;
  after: string;
};

export const examplesIntro =
  'Real admin problems we’ve fixed — no client names, just the faff and what changed.';

export const beforeAfter: BeforeAfterRow[] = [
  {
    process: 'Session booking',
    before:
      'No digital booking — every appointment in person or by phone. Someone had to take the call, write it down, and remember to confirm.',
    after:
      'Fully online booking with email confirmations and reminders. Less phone tag — and the same system later helped reach people who would never have booked the old way.',
  },
  {
    process: 'Marketing outreach',
    before:
      'Outreach when someone had time. Contacts in heads or random lists. Follow-up inconsistent.',
    after:
      'A contact database plus automated outreach: scheduled contact, sign-up paths, proper opt-out, and different email journeys by audience — without someone manually remembering who’s next.',
  },
  {
    process: 'Expense submissions',
    before:
      'Expenses in spreadsheets that don’t work on a phone. Sign-off meant chasing the right person manually.',
    after:
      'A mobile-friendly app to submit on the go, with claims routed to the right approver via a simple switchboard you can update when who signs off changes.',
  },
  {
    process: 'Mass data migration',
    before:
      'Data moved by hand — one record at a time — from ~800 clients and ~3,000 pieces of information. Weeks of copy-paste.',
    after:
      'A custom program that maps, extracts, and formats everything into the spreadsheet layout they needed — hours instead of a soul-destroying slog.',
  },
];

export type WorkflowGoblin = {
  id: string;
  title: string;
  description: string;
  help: string;
};

export const workflowGoblins: WorkflowGoblin[] = [
  {
    id: 'copy-paste',
    title: 'The Copy-Paste Goblin',
    description:
      'This one appears when the same information has to be typed into multiple places. Usually found near spreadsheets, CRMs, inboxes, and quiet despair.',
    help: 'Form submissions, moving data between systems, and cutting out duplicate entry.',
  },
  {
    id: 'spreadsheet',
    title: 'The Spreadsheet Goblin',
    description:
      'At first, it was “just a simple tracker”. Now it runs half the business and nobody knows what Column AF does.',
    help: 'Spreadsheet clean-up, automation, and reports without the weekly copy-paste ritual.',
  },
  {
    id: 'inbox',
    title: 'The Inbox Goblin',
    description:
      'Everything important lives in email threads. Nobody knows the latest version. Someone definitely said “I’ll dig it out” last week.',
    help: 'Enquiry handling, email templates, and replies that are not rewritten from scratch every time.',
  },
  {
    id: 'approval',
    title: 'The Approval Goblin',
    description:
      'A decision is needed, but it is buried somewhere between Teams, email, a phone call, and someone saying “I thought Dave approved it.”',
    help: 'Approval processes with a clear route and a record of who actually said yes.',
  },
  {
    id: 'manual-report',
    title: 'The Manual Report Goblin',
    description:
      'Data exists. The report exists. Unfortunately, a human has to suffer between the two.',
    help: 'Reporting that pulls the numbers without someone living in filters and paste-special.',
  },
  {
    id: 'onboarding',
    title: 'The Onboarding Goblin',
    description:
      'Someone said yes, then everything became a scavenger hunt across emails, attachments, folders, and one person’s memory.',
    help: 'Client and staff onboarding that collects what’s needed — without everyone chasing everyone.',
  },
];

export const healthcheckSummary = {
  title: 'The £50 healthcheck in plain English',
  deliverables: [
    'A review of what currently happens',
    'Where time is being wasted',
    'What could be simplified or automated',
    'A practical recommendation for what to do next',
  ],
  deliverablesNote:
    'Not a 47-page corporate report. Plain English on what’s annoying you and what to do about it.',
  notTitle: 'What this is not',
  notItems: [
    'A massive software project',
    'A sales pitch for expensive platforms',
    'Someone making you feel stupid for having messy admin',
  ],
  stepsTitle: 'What happens next',
  steps: [
    'You express interest using the form below.',
    'Natasha will be in touch to arrange the healthcheck and ask a few questions about the process you want looked at.',
    'Steve reviews the workflow and you get practical recommendations — quick wins called out clearly, bigger fixes explained without the fog.',
  ],
};

export const expressInterest = {
  title: 'Express interest in the £50 Admin & Workflow Healthcheck',
  intro:
    'Think your admin might be quietly robbing you? Complete the form below and Natasha will be in touch to book you in.',
};

export const clockCaption = 'Where did the week go? Ah yes. Manual admin.';
