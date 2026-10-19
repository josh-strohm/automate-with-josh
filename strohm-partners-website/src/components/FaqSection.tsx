import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    q: 'Do I have to switch my CRM or field software?',
    a:
      'Usually no. We start with what you already use. If a change would save enough time to pay for itself, we’ll show you the math before you move anything.',
  },
  {
    q: 'Is this a chatbot I have to train myself?',
    a:
      'No. We configure, test, and maintain it. You get escalation to a real person when the job needs a human.',
  },
  {
    q: 'What does it cost?',
    a:
      'Most builds use a setup fee plus a monthly retainer to run and maintain the system. Ranges are on each service page; your quote depends on call volume, integrations, and complexity.',
  },
  {
    q: 'Are you selling me GoHighLevel or some other tool?',
    a:
      'We’re selling the done-for-you system — workflows, integrations, compliance steps, and maintenance. The platform is part of delivery, not the product by itself.',
  },
  {
    q: 'Can you work outside Pennsylvania?',
    a:
      'Yes. We’re based in Altoona and work with service businesses across the U.S. Most setup is remote; on-site is available when it makes sense.',
  },
  {
    q: 'What about the cheap AI receptionist ads I see online?',
    a:
      'Commodity tools exist for a few dollars a month. They don’t configure your calendar, your scripts, or your escalation path. That’s what you’re paying us for.',
  },
];

export default function FaqSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.q} value={`item-${i}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
