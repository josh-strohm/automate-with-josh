import { useState } from 'react';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { interestOptions, contact, type InterestValue } from '../../data/site';
import { cn } from '../../lib/utils';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  interest: z.enum([
    'missed-call-text-back',
    'ai-receptionist',
    'crm-follow-up',
    'conversational-booking',
    'custom-automation',
    'not-sure',
  ]),
  message: z.string().optional(),
});

type LeadFormProps = {
  page: string;
  defaultInterest?: InterestValue;
};

export default function LeadForm({ page, defaultInterest = 'not-sure' }: LeadFormProps) {
  const [interest, setInterest] = useState<InterestValue>(defaultInterest);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') ?? ''),
      email: String(fd.get('email') ?? ''),
      company: String(fd.get('company') ?? '') || undefined,
      phone: String(fd.get('phone') ?? '') || undefined,
      interest,
      message: String(fd.get('message') ?? '') || undefined,
      source: 'strohm-partners-website',
      page,
      submittedAt: new Date().toISOString(),
    };

    const parsed = formSchema.safeParse(payload);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? 'form';
        errors[key] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(parsed.data),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setStatus('success');
      form.reset();
      setInterest(defaultInterest);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-primary/30 bg-card p-8 text-center shadow-elegant">
        <p className="text-lg font-medium text-foreground">
          Thanks — we got your message. We’ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
          {fieldErrors.name && <p className="text-sm text-red-400">{fieldErrors.name}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
          {fieldErrors.email && <p className="text-sm text-red-400">{fieldErrors.email}</p>}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone (recommended)</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" autoComplete="organization" />
        </div>
      </div>

      <div className="space-y-3">
        <Label>I’m interested in *</Label>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setInterest(opt.value)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm transition-colors',
                interest === opt.value
                  ? 'border-primary bg-primary/10 text-primary shadow-glow'
                  : 'border-border bg-secondary/50 text-muted-foreground hover:border-primary/50',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {fieldErrors.interest && <p className="text-sm text-red-400">{fieldErrors.interest}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us about your business (optional)</Label>
        <Textarea id="message" name="message" rows={4} />
      </div>

      {status === 'error' && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          Something went wrong sending your message. Email us at{' '}
          <a className="text-primary underline" href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
          <a className="text-primary underline" href={`tel:${contact.phoneTel}`}>{contact.phone}</a>.
        </p>
      )}

      <Button type="submit" className="w-full" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </Button>

      <p className="text-xs text-muted-foreground leading-relaxed">
        By submitting, you agree we may contact you about your inquiry. See our{' '}
        <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. We don’t sell your
        information.
      </p>
    </form>
  );
}
