export const contact = {
  email: 'hi@strohmpartners.com',
  phone: '+1 (814) 931-3981',
  phoneTel: '+18149313981',
  address: '911 23rd Ave., Altoona, PA 16601',
  company: 'Strohm Partners LLC',
};

export const homeStats = [
  { value: 'Under 60 sec', label: 'Typical time to first text-back after a missed call' },
  { value: '5 systems', label: 'Core offers we implement and maintain' },
  { value: 'Done-for-you', label: 'Build, integrate, test, and keep it running' },
  { value: 'Central PA', label: 'Local operator, national delivery' },
];

export const industries = [
  'HVAC',
  'Plumbing',
  'Electrical',
  'Roofing',
  'Landscaping',
  'Cleaning',
  'Restaurants',
  'Salons',
  'Other local services',
];

export const interestOptions = [
  { value: 'missed-call-text-back', label: 'Missed-call text-back' },
  { value: 'ai-receptionist', label: 'AI receptionist' },
  { value: 'crm-follow-up', label: 'CRM & follow-up' },
  { value: 'conversational-booking', label: 'Conversational booking' },
  { value: 'custom-automation', label: 'Custom automation' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

export type InterestValue = (typeof interestOptions)[number]['value'];

export const N8N_WEBHOOK_URL =
  'https://n8n.strohmpartners.com/webhook/4addc17d-268d-45b8-8eac-741918981620';
