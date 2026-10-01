import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Menu,
  MessageSquareText,
  Workflow,
  X,
} from 'lucide-react';
import './App.css';

const pages = [
  { label: 'Home', route: 'home' },
  { label: 'Services', route: 'services' },
  { label: 'How I work', route: 'methodology' },
  { label: 'About', route: 'about' },
  { label: 'Contact', route: 'contact' },
];

const services = [
  {
    no: '01',
    slug: 'workflow-automation',
    icon: <Workflow />,
    title: 'Workflow automation',
    text: 'Connect the apps your team uses to move routine information without retyping it.',
    examples: 'n8n · Make · Zapier · APIs',
    headline: <>Move work between tools<br /><em>with fewer hand-offs.</em></>,
    intro: 'I connect the tools you already use so routine work can move from one step to the next without someone copying the same details along the way.',
    focusTitle: 'Move routine work forward automatically.',
    focusCopy: 'For example, a workflow can move a new inquiry from your inbox into a tracker, create a follow-up task, and let its owner know it is ready.',
    projects: [
      'Copy new customer or order details between systems without retyping them.',
      'Create tasks and notify the right teammate when a request reaches the next step.',
      'Collect updates from a form, spreadsheet, or inbox into one dependable view.',
    ],
    goodFit: 'Useful when a repeatable process crosses several apps and someone has to copy the same details between them.',
    care: 'I show the workflow status and flag errors for review. A missing field or lost connection should not go unnoticed.',
  },
  {
    no: '02',
    slug: 'chat-and-voice-assistants',
    icon: <MessageSquareText />,
    title: 'Chat and voice assistants',
    text: 'Answer common questions, collect key details, and pass other requests to your team. An internal assistant can also help staff find information or prepare a first draft.',
    examples: 'Website chat · AI phone assistant · Internal search',
    headline: <>Quick answers for<br /><em>common questions.</em></>,
    intro: 'A website or phone assistant can answer common questions and collect context. When someone needs to step in, it can pass the conversation to your team.',
    focusTitle: 'Answer common questions, then hand off.',
    focusCopy: 'A website or phone assistant can use information you approve to answer routine questions and pass the conversation to your team with a summary. An internal assistant can help staff find the right document or prepare a first draft.',
    projects: [
      'Answer common questions using your current service details, policies, or knowledge base.',
      'Collect contact details and the reason for a call or message before routing it.',
      'Help staff search internal guidance and prepare drafts for their review.',
    ],
    goodFit: 'This fits when customers ask the same questions often or staff need to find information that already exists.',
    care: 'I give the assistant clear source material and a way to say when it does not know. A person handles sensitive requests and decisions, and customers can reach your team.',
  },
  {
    no: '03',
    slug: 'lead-and-appointment-follow-up',
    icon: <Clock3 />,
    title: 'Lead and appointment follow-up',
    text: 'Confirm inquiries, send appointment reminders, and make booking or rescheduling details easy to find.',
    examples: 'Intake · Reminders · Scheduling',
    headline: <>A timely follow-up,<br /><em>for every inquiry.</em></>,
    intro: 'I can set up inquiry confirmations and appointment reminders, with a clear view for your team of which requests still need attention.',
    focusTitle: 'Keep each next step visible.',
    focusCopy: 'Automate confirmations and appointment reminders within your existing process. Your team can see which conversations need a response.',
    projects: [
      'Send an immediate confirmation and alert the right person when an inquiry arrives.',
      'Offer a booking link, then send reminders and rescheduling details.',
      'Prompt a personal follow-up when someone has not replied or a next step is due.',
    ],
    goodFit: 'Useful when inquiries need a prompt acknowledgment or customers often need booking and rescheduling reminders.',
    care: 'I write messages to match your process, schedule them at sensible times, and respect customer preferences. Your team can see the conversation and step in when context matters.',
  },
  {
    no: '04',
    slug: 'websites-and-digital-tools',
    icon: <ArrowUpRight />,
    title: 'Websites and digital tools',
    text: 'Build or refresh a focused website, or create a small digital tool for a specific business need.',
    examples: 'Website refresh · Landing pages · Custom intake tools',
    headline: <>A website that shows<br /><em>visitors what to do next.</em></>,
    intro: 'I build focused websites and small tools that make your service easier to understand and the next step easier to take.',
    focusTitle: 'Make everyday tasks easier to finish.',
    focusCopy: 'The work might be a refresh with clearer service pages, a landing page for one offer, or an internal tool for a recurring spreadsheet task. We keep the scope close to the people who will use it.',
    projects: [
      'Reshape a website so visitors can understand your services and contact you quickly.',
      'Create a focused landing page and intake form for a particular audience or offer.',
      'Build a small digital tool around a repeatable task your current software does not cover.',
    ],
    goodFit: 'Useful when your website no longer explains your services clearly, or your current software misses a small but recurring task.',
    care: 'I make the site easy to update and use on phones. Before building, we agree on content, ownership, and connections to existing systems.',
  },
  {
    no: '05',
    slug: 'process-review-and-implementation',
    icon: <Check />,
    title: 'Process review and implementation',
    text: 'Get a clear view of the process and a recommendation before committing to a build.',
    examples: 'Process mapping · Tool selection · Team handover',
    headline: <>Understand the work<br /><em>before changing it.</em></>,
    intro: 'I map the work with your team, compare ways to improve it, and recommend a next step. The recommendation includes the trade-offs so you can decide what to implement.',
    focusTitle: 'See where a process can improve.',
    focusCopy: 'We follow a task from its start through the people and tools it touches. That shows where time goes and which changes could help.',
    projects: [
      'Map a current process and identify repeated entry, waiting, or unclear ownership.',
      'Compare a process change, an existing tool, and custom automation in plain language.',
      'Pick a first change to implement and prepare a handover for your team.',
    ],
    goodFit: 'Choose a process review when several people or tools share the work, or when you want a recommendation before a build.',
    care: 'A review may show that the current process is best left alone. If we make a change, we agree on the outcome and the people affected.',
  },
];

const serviceBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
const pagePath = (page) => page === 'home' ? '/' : serviceBySlug[page] ? `/services/${page}` : `/${page}`;

function SiteLink({ page, currentPage, navigate, children, className = '' }) {
  return (
    <a
      href={pagePath(page)}
      className={className}
      aria-current={currentPage === page ? 'page' : undefined}
      onClick={(event) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        navigate(page);
      }}
    >
      {children}
    </a>
  );
}

function SiteHeader({ currentPage, navigate, menuOpen, setMenuOpen }) {
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !menuOpen) toggleRef.current?.focus();
    wasOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen, setMenuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <SiteLink page="home" currentPage={currentPage} navigate={navigate} className="wordmark" aria-label="Automate with Josh home">
          <img className="wordmark-mark" src="/aj-monogram.svg" alt="" aria-hidden="true" />
          <span className="wordmark-name">automate <span>with josh</span></span>
        </SiteLink>

        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="main-navigation" className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {pages.map(({ label, route }) => (
            <SiteLink key={route} page={route} currentPage={currentPage} navigate={navigate} className="nav-link">
              {label}
            </SiteLink>
          ))}
          <SiteLink page="calendar" currentPage={currentPage} navigate={navigate} className="button button-small nav-cta">
            Book a conversation <ArrowUpRight size={15} />
          </SiteLink>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ children }) {
  return <p className="eyebrow"><span aria-hidden="true" />{children}</p>;
}

function HomePage({ currentPage, navigate }) {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <Eyebrow>Automation for small businesses</Eyebrow>
          <h1 tabIndex="-1">Spend less time on <em>repeat work.</em></h1>
          <p className="hero-lede">
            I help small businesses simplify repetitive admin by connecting their tools, improving follow-up, and building small digital tools.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={() => navigate('calendar')}>
              Let’s talk about your workflow <ArrowRight size={17} />
            </button>
            <button className="text-link" onClick={() => navigate('services')}>
              Explore services <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="hero-note"><span className="note-rule" />Independent consultant · Planning, build, handover</div>
        </div>

        <figure className="hero-portrait">
          <picture>
            <source
              type="image/webp"
              srcSet="/my-new-photo-480.webp 480w, /my-new-photo-768.webp 768w, /my-new-photo-1024.webp 1024w"
              sizes="(max-width: 580px) calc(100vw - 51px), (max-width: 800px) 35vw, 440px"
            />
            <img src="/my-new-photo.png" alt="Josh Strohm in his home office" />
          </picture>
          <figcaption>
            <span className="portrait-caption-label">Workflow and automation consultant</span>
            <span className="portrait-caption-name">Josh Strohm <span>· Founder</span></span>
          </figcaption>
        </figure>
      </section>

      <section className="intro-band">
        <div className="page-width intro-band-inner">
          <Eyebrow>Where I start</Eyebrow>
          <div className="intro-band-content">
            <h2>Start with the work your team repeats.</h2>
            <div>
              <p>I look at how information moves through your business, where work gets stuck, and which details people have to enter more than once.</p>
              <p>Then we decide whether a process change, an existing tool, or automation is the right next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview page-width section-space">
        <div className="section-heading-row">
          <div>
            <Eyebrow>Where I can help</Eyebrow>
            <h2>Practical help for<br /><em>everyday work.</em></h2>
          </div>
          <p className="section-aside">The right approach depends on the task, the tools, and the people doing it.</p>
        </div>
        <div className="service-list">
          <SiteLink page="workflow-automation" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">01</span><Workflow size={21} aria-hidden="true" />
            <div><h3>Workflows between your tools</h3><p>Move the same details across apps without entering them more than once.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
          <SiteLink page="chat-and-voice-assistants" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">02</span><MessageSquareText size={21} aria-hidden="true" />
            <div><h3>Assistants for common questions</h3><p>Answer routine questions or help staff find existing information, with a person handling requests that need judgment.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
          <SiteLink page="lead-and-appointment-follow-up" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">03</span><Clock3 size={21} aria-hidden="true" />
            <div><h3>Inquiry and appointment follow-up</h3><p>Confirm requests, send reminders, and show your team which conversations need a reply.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
        </div>
        <button className="text-link services-link" onClick={() => navigate('services')}>See all services <ArrowRight size={16} /></button>
      </section>

      <section className="approach-band">
        <div className="page-width approach-grid">
          <div>
            <Eyebrow>How a project takes shape</Eyebrow>
            <h2>Understand the process.<br /><em>Then choose a change.</em></h2>
          </div>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Listen and map</strong>We follow the task through the people and tools involved, and agree on what should improve.</p></div>
            <div><span>02</span><p><strong>Agree on a first step</strong>I explain the options and trade-offs, then we choose what to try.</p></div>
            <div><span>03</span><p><strong>Build and hand over</strong>I set it up, walk your team through it, and explain how to get support.</p></div>
            <button className="text-link" onClick={() => navigate('methodology')}>A closer look at how I work <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      <Callout navigate={navigate} />
    </>
  );
}

function PageIntro({ eyebrow, title, children }) {
  return (
    <div className="page-intro">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 tabIndex="-1">{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}

function ServicesPage({ navigate }) {
  return (
    <>
      <section className="page-width page-top">
        <PageIntro eyebrow="Services" title={<>Systems for your work.<br /><em>Fewer repeated steps.</em></>}>
          I learn how the work gets done, then explain which process or tool changes could help and what each would involve.
        </PageIntro>
        <div className="services-detail-list">
          {services.map((item) => (
            <SiteLink page={item.slug} currentPage="services" navigate={navigate} className="service-detail" key={item.no}>
              <span className="service-number">{item.no}</span>
              <div className="detail-icon" aria-hidden="true">{item.icon}</div>
              <div className="detail-copy"><h2>{item.title}</h2><p>{item.text}</p><span className="detail-examples">{item.examples}</span><span className="service-card-cta">Explore this service <ArrowRight size={15} aria-hidden="true" /></span></div>
            </SiteLink>
          ))}
        </div>
      </section>
      <Callout navigate={navigate} />
    </>
  );
}

function ServicePage({ service, navigate }) {
  return (
    <>
      <section className="page-width page-top service-page">
        <SiteLink page="services" currentPage={service.slug} navigate={navigate} className="text-link service-back-link">
          <ArrowRight size={15} className="back-arrow" aria-hidden="true" /> All services
        </SiteLink>
        <PageIntro eyebrow={`Service ${service.no} · ${service.title}`} title={service.headline}>
          {service.intro}
        </PageIntro>
        <div className="service-page-overview">
          <div className="service-page-focus">
            <Eyebrow>Where this helps</Eyebrow>
            <h2>{service.focusTitle}</h2>
            <p>{service.focusCopy}</p>
          </div>
          <aside className="service-fit">
            <span className="service-fit-label">A good fit when</span>
            <p>{service.goodFit}</p>
            <span className="detail-examples">{service.examples}</span>
          </aside>
        </div>
        <div className="service-page-details">
          <section className="service-page-examples">
            <Eyebrow>Possible projects</Eyebrow>
            <h2>What this can look like</h2>
            <ul>{service.projects.map((project) => <li key={project}>{project}</li>)}</ul>
          </section>
          <aside className="service-page-care">
            <span className="detail-icon"><Check size={22} aria-hidden="true" /></span>
            <div><h2>For day-to-day use</h2><p>{service.care}</p></div>
          </aside>
        </div>
      </section>
      <Callout navigate={navigate} />
    </>
  );
}

function MethodologyPage({ navigate }) {
  const steps = [
    ['01', 'Understand the day-to-day', 'We map the process with the people who use it. This shows where a task repeats or waits before we make a change.'],
    ['02', 'Choose what to change', 'I explain the options in plain language. We decide what to change and what we want the change to do.'],
    ['03', 'Build around your team', 'I set up the agreed change using examples from your work. Your team can try it and tell me what needs adjusting.'],
    ['04', 'Make the handover clear', 'I walk you through the new process and leave notes your team can refer to. If it needs an adjustment later, you will know where to start.'],
  ];

  return (
    <>
      <section className="page-width page-top">
        <PageIntro eyebrow="How I work" title={<>Clear steps.<br /><em>You stay involved.</em></>}>
          I work with your team from the first process map through handover. We agree on the change together, and I explain how to use it.
        </PageIntro>
        <div className="method-list">
          {steps.map(([no, title, text]) => <article key={no}><span>{no}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </div>
        <div className="principles">
          <Eyebrow>What guides the work</Eyebrow>
          <div className="principle-grid">
            <article><h3>Keep the system maintainable</h3><p>I favor workflows your team can update without calling me for every small change.</p></article>
            <article><h3>People review important decisions</h3><p>For decisions with real consequences, your team can review what happened before acting.</p></article>
            <article><h3>Leave clear instructions</h3><p>Your team gets an explanation of what the system does and what to do when something changes.</p></article>
          </div>
        </div>
      </section>
      <Callout navigate={navigate} />
    </>
  );
}

function AboutPage({ navigate }) {
  return (
    <>
      <section className="page-width page-top about-layout">
        <div className="about-photo-wrap">
          <picture>
            <source
              type="image/webp"
              srcSet="/my-new-photo-480.webp 480w, /my-new-photo-768.webp 768w, /my-new-photo-1024.webp 1024w"
              sizes="(max-width: 580px) min(430px, calc(100vw - 52px)), (max-width: 800px) 35vw, 40vw"
            />
            <img src="/my-new-photo.png" alt="Josh Strohm, founder of Automate with Josh" loading="lazy" />
          </picture>
          <p>Josh Strohm <span>Founder &amp; automation consultant</span></p>
        </div>
        <div className="about-copy">
          <PageIntro eyebrow="About Josh" title={<>Meet Josh<br />Strohm.</>}>
            I started Automate with Josh to help small businesses spend less time on repetitive admin and keep customer work moving.
          </PageIntro>
          <p>As a business grows, a process that once worked can become harder to keep track of. I talk with the people doing the work to understand what gets repeated, delayed, or missed.</p>
          <p>Some projects connect apps a team already uses. Others organize inquiry follow-up, or help staff find information with an AI assistant.</p>
          <p>AI is one option. I recommend it when it can handle a specific part of the work; otherwise, a workflow or process change may fit better.</p>
          <button className="text-link" onClick={() => navigate('calendar')}>Talk with Josh <ArrowRight size={16} /></button>
        </div>
      </section>
      <Callout navigate={navigate} />
    </>
  );
}

function CalendarPage() {
  return (
    <section className="page-width page-top booking-page">
      <PageIntro eyebrow="Start with a conversation" title={<>Let’s talk about<br /><em>how work gets done.</em></>}>
        Choose a time for an introduction. We’ll talk about the process you have in mind and whether my work is a good fit.
      </PageIntro>
      <div className="calendar-frame">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lnFVDVF4oKIzE6ZHDeeyE7cLSIGsE79nUYZPvsPWxz8a6Do7nJDVXq1uwyqJVtig3pMaB3tg7?gv=true"
          title="Choose a time to meet with Josh Strohm"
          loading="lazy"
        />
      </div>
    </section>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({ businessName: '', businessWebsite: '', fullName: '', email: '', phone: '', message: '', consent: false });
  const [status, setStatus] = useState('IDLE');

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('SUBMITTING');
    try {
      const response = await fetch('https://n8n.strohmpartners.com/webhook/da8ce62d-100d-44a4-814c-46ae402df0f0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('The request could not be sent.');
      setStatus('SUCCESS');
      setFormData({ businessName: '', businessWebsite: '', fullName: '', email: '', phone: '', message: '', consent: false });
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <section className="page-width page-top contact-layout">
      <div className="contact-intro">
        <PageIntro eyebrow="Contact" title={<>Tell me what<br /><em>you’d like to improve.</em></>}>
          Tell me a little about the task or process you want to improve. If you prefer, you can book a time to talk instead.
        </PageIntro>
        <div className="contact-note"><span className="note-icon"><Clock3 size={19} /></span><p><strong>Prefer to talk?</strong><br />Book a 45-minute conversation to tell me what you have in mind.</p></div>
        <a className="text-link" href="mailto:hi@automatewithjosh.com">hi@automatewithjosh.com <ArrowUpRight size={16} /></a>
      </div>
      <div className="form-panel">
        {status === 'SUCCESS' ? (
          <div className="form-success" role="status"><span className="success-icon"><Check size={24} /></span><h2>Thanks for reaching out.</h2><p>Your note is on its way. I’ll be in touch soon.</p><button className="text-link" onClick={() => setStatus('IDLE')}>Send another message <ArrowRight size={16} /></button></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-heading"><h2>Tell me about the work</h2><p>Fields marked * are required.</p></div>
            <div className="form-grid">
              <label>Business name *<input required name="businessName" value={formData.businessName} onChange={handleChange} autoComplete="organization" /></label>
              <label>Your name *<input required name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" /></label>
              <label>Email address *<input required type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" /></label>
              <label>Phone number *<input required type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" /></label>
              <label className="form-span">Website <span className="optional-label">Optional</span><input type="url" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} placeholder="https://" /></label>
              <label className="form-span">What would you like to make easier? *<textarea required name="message" value={formData.message} onChange={handleChange} rows="4" /></label>
            </div>
            <label className="consent-label"><input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} /><span>I’m happy to receive a follow-up about this inquiry.</span></label>
            <span className="visually-hidden" role="status" aria-live="polite">{status === 'SUBMITTING' ? 'Sending your message.' : ''}</span>
            <button className="button form-submit" type="submit" disabled={status === 'SUBMITTING'} aria-busy={status === 'SUBMITTING'}>{status === 'SUBMITTING' ? 'Sending…' : 'Send your note'} <ArrowRight size={17} aria-hidden="true" /></button>
            {status === 'ERROR' && <p className="form-error" role="alert">Something went wrong while sending your note. Please try again or email me directly.</p>}
          </form>
        )}
      </div>
    </section>
  );
}

function Callout({ navigate }) {
  return (
    <section className="callout-band">
      <div className="page-width callout-inner">
        <div><Eyebrow>Have a task in mind?</Eyebrow><h2>Let’s talk it through.</h2><p>Tell me what takes time or gets stuck, and we can discuss a useful next step.</p></div>
        <button className="button button-light" onClick={() => navigate('calendar')}>Book a conversation <ArrowUpRight size={17} /></button>
      </div>
    </section>
  );
}

function SiteFooter({ currentPage, navigate }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div><SiteLink page="home" currentPage={currentPage} navigate={navigate} className="footer-wordmark">automate <span>with josh</span></SiteLink><p>Workflow automation, process reviews, and small digital tools for small businesses.</p></div>
        <div className="footer-links"><SiteLink page="services" currentPage={currentPage} navigate={navigate}>Services</SiteLink><SiteLink page="methodology" currentPage={currentPage} navigate={navigate}>How I work</SiteLink><SiteLink page="about" currentPage={currentPage} navigate={navigate}>About</SiteLink><SiteLink page="contact" currentPage={currentPage} navigate={navigate}>Contact</SiteLink><a href="https://www.linkedin.com/in/joshua-w-strohm/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="https://x.com/joshwstrohm" target="_blank" rel="noopener noreferrer">X <ArrowUpRight size={13} /></a><a href="mailto:hi@automatewithjosh.com">Email <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Automate with Josh</span><span>From process review through build and handover.</span></div>
    </footer>
  );
}

function getPageFromPath() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const [section, serviceSlug] = path.split('/');
  if (section === 'services' && serviceBySlug[serviceSlug]) return serviceSlug;
  const validPages = ['methodology', 'services', 'about', 'calendar', 'contact'];
  return validPages.includes(path) ? path : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
      setMenuOpen(false);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const labels = { home: 'Business Automation and Process Consulting', services: 'Services', methodology: 'How I Work', about: 'About Josh', calendar: 'Book a Conversation', contact: 'Contact' };
    document.title = `${serviceBySlug[currentPage]?.title || labels[currentPage] || labels.home} | Automate with Josh`;
  }, [currentPage]);

  const previousPage = useRef(currentPage);
  useEffect(() => {
    if (previousPage.current !== currentPage) {
      document.querySelector('main h1')?.focus();
      previousPage.current = currentPage;
    }
  }, [currentPage]);

  const navigate = (page) => {
    if (page === currentPage) {
      setMenuOpen(false);
      return;
    }
    window.history.pushState(null, '', pagePath(page));
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content;
  switch (currentPage) {
    case 'services': content = <ServicesPage navigate={navigate} />; break;
    case 'methodology': content = <MethodologyPage navigate={navigate} />; break;
    case 'about': content = <AboutPage navigate={navigate} />; break;
    case 'calendar': content = <CalendarPage />; break;
    case 'contact': content = <ContactPage />; break;
    default: content = serviceBySlug[currentPage] ? <ServicePage service={serviceBySlug[currentPage]} navigate={navigate} /> : <HomePage currentPage={currentPage} navigate={navigate} />;
  }

  return (
    <div className="site-shell">
      <SiteHeader currentPage={serviceBySlug[currentPage] ? 'services' : currentPage} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>{content}</main>
      <SiteFooter currentPage={serviceBySlug[currentPage] ? 'services' : currentPage} navigate={navigate} />
    </div>
  );
}
