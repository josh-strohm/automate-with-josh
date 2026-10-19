import type { InterestValue } from './site';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  interest: InterestValue;
  metaDescription: string;
  h1: string;
  lede: string;
  whoFor: string;
  deliverables: string[];
  setupRange: string;
  monthlyRange: string;
  caveat?: string;
  caveatTitle?: string;
  note?: string;
  miniFaq?: { q: string; a: string }[];
  ctaLabel?: string;
};

export const services: Service[] = [
  {
    slug: 'missed-call-text-back',
    title: 'Missed-call text-back',
    shortTitle: 'Missed-call text-back',
    interest: 'missed-call-text-back',
    metaDescription:
      'Instant text-back when you miss a call — built for HVAC, plumbing, and local service companies in Central PA and beyond.',
    h1: 'Missed-call text-back that wins the job back',
    lede:
      'When you can’t answer, we text the caller in seconds, qualify the job, and route hot leads to you — before they dial your competitor.',
    whoFor:
      'Owners and small teams who live on the phone — HVAC, plumbing, electrical, roofing, hauling, cleaning, and other local services.',
    deliverables: [
      'Missed-call detection and instant SMS reply',
      'Qualification flow (service type, urgency, address, photos if needed)',
      'Notifications to you or your dispatcher',
      'Handoff to human with full context',
      'Ongoing monitoring and script updates',
    ],
    setupRange: '$500–$2,000',
    monthlyRange: '$300–$800',
    caveat:
      'Vertical tools advertise flat monthly rates for text-back alone. We justify our fee with **configuration, escalation design, CRM integration, and maintenance** — not access to a toggle in an app.',
    caveatTitle: 'Why not DIY?',
    miniFaq: [
      {
        q: 'Will this spam my customers?',
        a: 'Messages go to people who called you; opt-out language is included.',
      },
      {
        q: 'Do I need a new phone number?',
        a: 'Often we work with your existing business line; we’ll explain 10DLC registration during discovery.',
      },
    ],
  },
  {
    slug: 'ai-receptionist',
    title: 'AI receptionist',
    shortTitle: 'AI receptionist',
    interest: 'ai-receptionist',
    metaDescription:
      'Managed AI voice reception for service businesses — after hours and on the job, with human escalation.',
    h1: 'Managed AI reception — after hours and on the job',
    lede:
      'We configure voice agents that answer common questions, capture lead details, and book appointments — with clear rules for when a real person takes over.',
    whoFor: 'Businesses that miss revenue after hours or when crews can’t pick up.',
    deliverables: [
      'Call flows tailored to your services and service area',
      'Calendar or scheduling integration where supported',
      'Human escalation paths (transfer, callback, urgent flag)',
      'Testing with real call scenarios before go-live',
      'Ongoing tuning as seasons and offers change',
    ],
    setupRange: '$500–$1,000',
    monthlyRange: '$250–$500+',
    caveat:
      'Unlimited AI receptionist SaaS exists for pocket change. **Managed** means we own the integration, the scripts, and the fixes when something breaks on a Saturday.',
    caveatTitle: 'Why not DIY?',
  },
  {
    slug: 'crm-follow-up',
    title: 'CRM & follow-up',
    shortTitle: 'CRM & follow-up',
    interest: 'crm-follow-up',
    metaDescription:
      'CRM setup and automated follow-up for service SMBs — pipelines, tags, and email/SMS sequences.',
    h1: 'CRM setup and follow-up that doesn’t drop leads',
    lede:
      'We build the pipeline, tags, and email/SMS sequences so every inquiry gets a next step — not a sticky note lost on a dashboard.',
    whoFor:
      'Teams with leads in too many places, or owners who know follow-up matters but never have time to do it consistently.',
    deliverables: [
      'Pipeline stages that match how you sell (estimate sent, job booked, etc.)',
      'Automated follow-up sequences with sensible timing',
      'Integration with forms, ads, and phone workflows',
      'Training for your team on the new routine',
      'Monthly optimization',
    ],
    setupRange: '$1,500–$5,000',
    monthlyRange: '$500–$1,500',
  },
  {
    slug: 'conversational-booking',
    title: 'Conversational booking',
    shortTitle: 'Booking (bundled)',
    interest: 'conversational-booking',
    metaDescription:
      'Qualified conversational booking tied to your lead-response stack — not empty calendar slots.',
    h1: 'Booking that follows qualification — not empty calendar slots',
    lede:
      'We don’t sell “reminder bots.” We sell **qualified conversations** that end in a booked appointment when the job is a fit.',
    whoFor:
      'Businesses already investing in speed-to-lead or reception — booking is the natural next step once qualification works.',
    deliverables: [
      'Qualification + scheduling in one flow (SMS and/or voice)',
      'Rules for job types you do and don’t take',
      'Calendar sync and confirmation messages',
      'Bundled with your lead-response stack',
    ],
    setupRange: '$500–$1,500 (often bundled)',
    monthlyRange: '$300–$800',
    note:
      'Appointment reminders alone are table stakes in many field-service apps. This offer is for **conversation-led booking** tied to your lead system.',
  },
  {
    slug: 'custom-automation',
    title: 'Custom automation',
    shortTitle: 'Custom automation',
    interest: 'custom-automation',
    metaDescription:
      'Custom agents and full-office automation for growing service businesses.',
    h1: 'Custom agents and automation when off-the-shelf isn’t enough',
    lede:
      'Multi-step workflows across your tools — custom agents, approvals, and integrations — for operators ready to invest in a higher-touch build.',
    whoFor:
      'Growing service businesses with distinct processes, multiple locations, or complex handoffs between office and field.',
    deliverables: [
      'Discovery and workflow design',
      'Custom integrations and agent logic',
      'Documentation and team training',
      'Ongoing support retainer',
    ],
    setupRange: '$5,000–$25,000+',
    monthlyRange: '$1,500–$5,000',
    ctaLabel: 'Book a discovery call',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceTeasers: Record<string, string> = {
  'missed-call-text-back':
    'Instant text-back when you miss a call — qualify the job and route hot leads before they call someone else.',
  'ai-receptionist':
    'Voice agents that answer common questions and capture leads — with clear rules for human takeover.',
  'crm-follow-up':
    'Pipelines, tags, and follow-up sequences so every inquiry gets a next step.',
  'conversational-booking':
    'Qualified conversations that end in a booked appointment when the job is a fit.',
  'custom-automation':
    'Multi-step workflows, custom agents, and integrations when off-the-shelf isn’t enough.',
};
