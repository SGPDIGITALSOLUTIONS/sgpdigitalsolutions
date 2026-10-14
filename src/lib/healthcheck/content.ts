export const healthcheckMeta = {
  title: 'Admin & Workflow Healthcheck | SGP Digital Solutions',
  description:
    'Review one admin-heavy process for £50. Identify wasted time, opportunities to simplify or automate, and practical next steps. Request your workflow healthcheck.',
};

export const hero = {
  title: 'Admin & Workflow Healthcheck',
  subtitle: 'ONE PROCESS. CLEAR NEXT STEPS. £50.',
  intro: [
    'Choose one task that keeps taking time out of your week: copying information, chasing approvals, rebuilding a report or keeping track of a handover.',
    'For £50, we review how that process works, identify where time is being lost and recommend practical ways to simplify or automate it.',
  ],
  tagline: ['One focused review.', 'Practical recommendations.'],
  price: '£50',
};

export const video = {
  title: 'What is an Admin & Workflow Healthcheck?',
  hint: 'Not sure what this is? Watch this first.',
  placeholderNote: 'Video coming soon — a short intro from Steve.',
  openingLine:
    'Start with the process your team keeps chasing. We will help you work out a clearer way forward.',
};

export const whatThisIs = {
  title: 'What this is',
  paragraphs: [
    'This is a practical review of one recurring admin task or workflow that is taking more time than it should.',
    'We look at the steps, tools and handovers involved and identify a manageable next step.',
  ],
  aim: 'Understand the work. Find the next step.',
};

export const workflowGoblinsSection = {
  title: 'Which process is slowing you down?',
  intro:
    'You do not need a technical brief. Start with something your team repeats, checks or chases regularly.',
  closing:
    'The recommendation might be a simpler process, better use of an existing tool or an automation. We look at what fits the work.',
};

export type BeforeAfterRow = {
  process: string;
  before: string;
  after: string;
};

export const examplesIntro =
  'Examples from previous implementation projects. These show what a later build can involve; implementation is quoted separately from the £50 review.';

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
      'A custom program mapped, extracted and formatted the information into the spreadsheet layout they needed, completing the work in hours.',
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
    title: 'Repeated data entry',
    description:
      'The same details are typed into a form, a spreadsheet and another system, creating extra work and opportunities for mistakes.',
    help: 'Form submissions, moving data between systems, and cutting out duplicate entry.',
  },
  {
    id: 'spreadsheet',
    title: 'Spreadsheets and trackers',
    description:
      'A useful tracker has become difficult to maintain, with manual updates and uncertainty about which version is current.',
    help: 'Spreadsheet clean-up, automation, and reports without the weekly copy-paste ritual.',
  },
  {
    id: 'inbox',
    title: 'Enquiries and inboxes',
    description:
      'Enquiries, documents and next steps are spread across email threads, making follow-up harder to track.',
    help: 'Enquiry handling, email templates, and replies that are not rewritten from scratch every time.',
  },
  {
    id: 'approval',
    title: 'Approvals and decisions',
    description:
      'A request is waiting for a decision, but the team cannot easily see who needs to approve it or what happens next.',
    help: 'Approval processes with a clear route and a record of who actually said yes.',
  },
  {
    id: 'manual-report',
    title: 'Recurring reports',
    description:
      'The information is available, but someone still copies, checks and formats it into the same report every week.',
    help: 'Reporting that pulls the numbers without someone living in filters and paste-special.',
  },
  {
    id: 'onboarding',
    title: 'Onboarding and handovers',
    description:
      'New clients or colleagues need details, documents and tasks passed between people, with too much depending on memory.',
    help: 'Client and staff onboarding that collects what’s needed — without everyone chasing everyone.',
  },
];

export const healthcheckSummary = {
  title: 'What your £50 covers',
  deliverables: [
    'A review of how one process currently works',
    'The points where time is being lost or work repeated',
    'Opportunities to simplify the steps or automate suitable tasks',
    'Practical recommendations for what to do next',
  ],
  deliverablesNote:
    'Session length and turnaround are agreed when booking. The recommendations focus on your chosen process and the tools you use.',
  notTitle: 'If you decide to take it further',
  notItems: [
    'The £50 covers the review and recommendations.',
    'Any build, software licences or ongoing support are scoped and quoted separately.',
    'You can decide whether to proceed once you have the recommendations.',
  ],
  stepsTitle: 'What happens next',
  steps: [
    'Tell us which process you would like reviewed using the form below.',
    'Natasha will contact you to arrange the healthcheck, confirm the session length and turnaround, and ask about your process.',
    'Steve reviews the workflow and you receive practical recommendations, with quick wins and any larger improvements explained clearly.',
  ],
};

export const expressInterest = {
  title: 'Request your £50 healthcheck',
  intro:
    'Tell us a little about your business and one process you want to improve. Natasha will contact you to arrange the healthcheck. This is an enquiry; your appointment is confirmed separately.',
};

export const clockCaption = 'Start with the task that keeps taking time out of your week.';
