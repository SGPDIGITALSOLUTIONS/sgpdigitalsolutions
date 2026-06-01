export const healthcheckMeta = {
  title: 'Admin & Workflow Healthcheck | SGP Digital Solutions',
  description:
    'A practical £50 admin and workflow healthcheck for small businesses. Find repetitive admin, simplify messy processes, and discover what could be automated. No jargon. No nonsense.',
};

export const hero = {
  title: 'Admin & Workflow Healthcheck',
  subtitle: 'For when your admin has started taking the piss',
  intro: [
    'Your business probably has at least one process that works… technically.',
    'But it also involves copying information between systems, chasing people manually, updating spreadsheets, remembering weird little steps, and occasionally whispering “why is this my life?” into the void.',
    'The Admin & Workflow Healthcheck is a focused review of one admin-heavy process in your business.',
    'I’ll look at what’s taking too long, what’s being repeated, what’s relying on memory, and what could be simplified or automated.',
  ],
  tagline: ['No jargon.', 'No nonsense.', 'No printers.'],
  price: '£50',
};

export const video = {
  title: 'What is an Admin & Workflow Healthcheck?',
  hint: 'Not sure what this is? Watch this first.',
  placeholderNote: 'Video coming soon — a short intro from Steve.',
  scriptPoints: [
    'What the healthcheck is',
    'Who it is for',
    'The kind of admin/process problems it solves',
    'What happens after someone expresses interest',
    'That this is not about selling a giant system nobody needs',
  ],
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

export const rightForYou = {
  title: 'How you know this is right for you',
  intro:
    'The Admin & Workflow Healthcheck is probably right for you if:',
  bullets: [
    'You’ve sworn at a repetitive process at least once in the last 7 days.',
    'You rely on reminders or divine intervention to remember to submit invoices.',
    'You copy the same information into more than one place.',
    'You have a spreadsheet that everyone is slightly scared to touch.',
    'You’re using your inbox as a task management system. Bold choice.',
    'You regularly chase the same people for the same information.',
    'Your process only works because one person “just knows how it works”.',
    'You are paying for software but still doing half the work manually.',
    'You have forms, emails, spreadsheets, folders, and hopes all involved in one task.',
    'You’ve said “there has to be a better way” and then continued doing it the annoying way.',
  ],
};

export const steveCanHelp = {
  title: 'What Steve can help with',
  intro: 'I can help with admin and workflow problems like:',
  bullets: [
    'Repetitive admin tasks',
    'Invoice reminders and follow-ups',
    'Client onboarding',
    'Staff onboarding',
    'Booking processes',
    'Enquiry handling',
    'Email templates and automated replies',
    'Form submissions',
    'Spreadsheet clean-up',
    'Spreadsheet automation',
    'Microsoft 365 workflows',
    'Power Automate flows',
    'Approval processes',
    'Task reminders',
    'Data collection',
    'Moving information between systems',
    'Reducing manual copy-and-paste work',
    'Building small tools that do one specific job properly',
  ],
  closing:
    'Basically, if a human is doing the same boring thing over and over again, there is a decent chance a computer should be doing at least part of it quietly in the background.',
};

export type BeforeAfterRow = {
  process: string;
  before: string;
  after: string;
};

export const beforeAfter: BeforeAfterRow[] = [
  {
    process: 'Invoice reminders',
    before:
      'Someone has to remember who owes what, check dates manually, and send awkward reminder emails.',
    after:
      'Automatic reminders can be triggered based on dates, status, or form entries. Less chasing. Fewer forgotten invoices. Less admin guilt.',
  },
  {
    process: 'New enquiry handling',
    before:
      'Enquiries arrive by email, get copied into a spreadsheet, and someone manually replies when they remember.',
    after:
      'Enquiries can be collected through a form, logged automatically, and followed up with a proper response process.',
  },
  {
    process: 'Client onboarding',
    before:
      'A client says yes, then everything becomes a scavenger hunt across emails, attachments, folders, and memory.',
    after:
      'A simple onboarding workflow can collect the right information, create tasks, send emails, and keep everything moving.',
  },
  {
    process: 'Staff or volunteer onboarding',
    before:
      'Someone manually sends documents, tracks forms, checks what is missing, and chases people. Repeatedly. Forever.',
    after:
      'Forms, checklists, reminders, and document links can be automated so nothing relies on one person’s heroic admin stamina.',
  },
  {
    process: 'Spreadsheet reporting',
    before:
      'Data is copied, pasted, filtered, formatted, cursed at, and eventually turned into a report.',
    after:
      'Data can be cleaned, structured, and reported with fewer manual steps and fewer opportunities for chaos.',
  },
  {
    process: 'Booking admin',
    before:
      'Appointments, confirmations, reminders, and changes are handled manually.',
    after:
      'Booking information can trigger confirmations, reminders, internal tasks, and updates automatically.',
  },
  {
    process: 'Internal approvals',
    before:
      'Requests get lost in emails or Teams messages and nobody knows who approved what. Lovely.',
    after:
      'Approval flows can route requests to the right person and keep a record of decisions.',
  },
  {
    process: 'Repetitive emails',
    before:
      'The same emails are typed again and again with slight changes each time.',
    after:
      'Templates, forms, and automation can generate consistent responses without rewriting the same thing every bloody day.',
  },
  {
    process: 'Data moving between systems',
    before:
      'Information is manually copied from one platform to another because the systems refuse to be friends.',
    after:
      'Where possible, systems can be connected or supported with a workflow that reduces duplicate entry.',
  },
  {
    process: 'Task reminders',
    before:
      'Important tasks live in someone’s head, which is brave but risky.',
    after:
      'Tasks and reminders can be triggered automatically so the process does not rely on memory, panic, or sticky notes.',
  },
];

export const spreadsheetCaption =
  'This started as a tracker. It is now critical infrastructure.';

export const automationCaption = 'Same job. Less faff.';

export type Goblin = {
  id: string;
  title: string;
  description: string;
};

export const goblins: Goblin[] = [
  {
    id: 'copy-paste',
    title: 'The Copy-Paste Goblin',
    description:
      'This one appears when the same information has to be typed into multiple places. Usually found near spreadsheets, CRMs, inboxes, and quiet despair.',
  },
  {
    id: 'reminder',
    title: 'The Reminder Goblin',
    description:
      'This goblin relies on someone remembering to do something important at exactly the right time. Risk level: spicy.',
  },
  {
    id: 'spreadsheet',
    title: 'The Spreadsheet Goblin',
    description:
      'At first, it was “just a simple tracker”. Now it runs half the business and nobody knows what Column AF does.',
  },
  {
    id: 'inbox',
    title: 'The Inbox Goblin',
    description:
      'Everything important lives in email threads. Nobody knows the latest version. Someone definitely said “I’ll dig it out” last week.',
  },
  {
    id: 'approval',
    title: 'The Approval Goblin',
    description:
      'A decision is needed, but it is buried somewhere between Teams, email, a phone call, and someone saying “I thought Dave approved it.”',
  },
  {
    id: 'manual-report',
    title: 'The Manual Report Goblin',
    description:
      'Data exists. The report exists. Unfortunately, a human has to suffer between the two.',
  },
];

export const goblinSectionCaption =
  'The workflow goblin is rarely one big problem. It’s usually 14 tiny annoying ones in a trench coat.';

export const whatYouGet = {
  title: 'What you get from the healthcheck',
  intro:
    'The healthcheck gives you a clear look at one process or admin problem.',
  bullets: [
    'A review of what currently happens',
    'A breakdown of where time is being wasted',
    'Suggestions for what could be simplified',
    'Suggestions for what could be automated',
    'Ideas for tools you may already have available',
    'A practical recommendation for what to do next',
  ],
  closing:
    'This is not a 47-page corporate report full of words like “synergy”. It is a useful, plain-English look at what is annoying you and what can be done about it.',
};

export const whatThisIsNot = {
  title: 'What this is not',
  intro: 'This is not:',
  bullets: [
    'A massive software project',
    'A vague “digital transformation journey”',
    'A sales pitch for expensive platforms',
    'A lecture about how your business should work',
    'Someone making you feel stupid for having messy admin',
  ],
  closing:
    'Most businesses have messy processes somewhere. That does not mean you are doing everything wrong. It usually means the business has grown, the work has changed, and the process has been patched together over time like a spreadsheet wearing a hi-vis jacket.',
};

export const whatHappensNext = {
  title: 'What happens next',
  steps: [
    'You express interest using the form.',
    'Natasha will be in touch to arrange the healthcheck.',
    'We’ll ask a few questions about the process you want looked at.',
    'Steve will review the workflow and identify the main issues.',
    'You’ll receive practical recommendations for improving, simplifying, or automating it.',
  ],
  closing:
    'If there is a quick win, we’ll tell you. If something needs a bigger fix, we’ll explain that clearly too. No fog machine. No nonsense.',
};

export const expressInterest = {
  title: 'Express interest in the £50 Admin & Workflow Healthcheck',
  intro:
    'Think your admin might be quietly robbing you? Complete the form below and Natasha will be in touch to book you in.',
};

export const finalCta = {
  title: 'Ready to find the faff?',
  body: 'If you have a process that is slow, repetitive, annoying, or held together by one person’s memory, this is your sign. Express interest in the £50 Admin & Workflow Healthcheck and Natasha will be in touch to book you in.',
  closing:
    'Your admin probably does not need more effort. It probably needs a better system.',
};

export const clockCaption = 'Where did the week go? Ah yes. Manual admin.';

export const invoiceCaption =
  'Because relying on memory is not a system. It’s a hostage situation.';
