import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';
import { cn } from '../../lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 border-b border-border bg-background/95 backdrop-blur-md">
          <nav className="container flex flex-col gap-1 px-4 py-4">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-medium"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className={cn('h-4 w-4 transition-transform', servicesOpen && 'rotate-180')} />
            </button>
            {servicesOpen && (
              <div className="mb-2 ml-2 flex flex-col gap-1 border-l border-border pl-3">
                <a href="/services" className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>
                  Overview
                </a>
                {services.map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {s.shortTitle}
                  </a>
                ))}
              </div>
            )}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              Book a call
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
