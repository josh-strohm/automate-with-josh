import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

type Item = { q: string; a: string };

export default function ServiceFaq({ items }: { items: Item[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq, i) => (
        <AccordionItem key={faq.q} value={`item-${i}`}>
          <AccordionTrigger>{faq.q}</AccordionTrigger>
          <AccordionContent>{faq.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
