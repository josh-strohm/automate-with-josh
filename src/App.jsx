import { useEffect, useState } from 'react';
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
    text: 'Connect the apps your team depends on. Reduce repetitive data entry, keep hand-offs moving, and make routine processes more consistent.',
    examples: 'n8n · Make · Zapier · APIs',
    headline: <>Connect the steps that<br /><em>slow good work down.</em></>,
    intro: 'When the same information has to be copied, checked, and sent by hand, small delays add up. I connect the tools you already use so routine work moves forward with fewer hand-offs.',
    focusTitle: 'Let routine work move on its own.',
    focusCopy: 'A workflow can take a new inquiry from your inbox into a tracker, create the right follow-up task, and let the owner know it is ready. Your team can spend less time moving information and more time acting on it.',
    projects: [
      'Copy new customer or order details between systems without retyping them.',
      'Create tasks and notify the right teammate when a request reaches the next step.',
      'Collect updates from a form, spreadsheet, or inbox into one dependable view.',
    ],
    goodFit: 'A repeatable process crosses several apps, and people are spending time copying details or checking whether a hand-off happened.',
    care: 'The workflow should make its status visible and flag errors for a person to review. I map the exceptions as well as the happy path, so a missing field or disconnected account does not fail silently.',
  },
  {
    no: '02',
    slug: 'chat-and-voice-assistants',
    icon: <MessageSquareText />,
    title: 'Chat and voice assistants',
    text: 'Handle straightforward questions, capture key details, and route the unusual requests to your team. For internal use, AI can also help staff find information or prepare a first draft.',
    examples: 'Website chat · AI phone assistant · Internal search',
    headline: <>Quick answers for the<br /><em>questions you know.</em></>,
    intro: 'A useful assistant can answer common questions, gather the details your team needs, and make a clear hand-off when a conversation needs a person.',
    focusTitle: 'Give people a helpful first response.',
    focusCopy: 'A website or phone assistant can use your approved information to respond to routine questions, collect context, and pass the conversation to your team with a useful summary. Internal assistants can help staff find the right document or prepare a first draft.',
    projects: [
      'Answer common questions using your current service details, policies, or knowledge base.',
      'Collect contact details and the reason for a call or message before routing it.',
      'Help staff search internal guidance and prepare drafts for their review.',
    ],
    goodFit: 'Your team answers the same straightforward questions often, or people need a faster way to find information that already exists.',
    care: 'The assistant needs clear source material and a safe way to say it does not know. Sensitive requests and decisions stay with a person, with an obvious route to reach your team.',
  },
  {
    no: '03',
    slug: 'lead-and-appointment-follow-up',
    icon: <Clock3 />,
    title: 'Lead and appointment follow-up',
    text: 'Help every inquiry receive a timely response and make it easier for customers to book, reschedule, and know what happens next.',
    examples: 'Intake · Reminders · Scheduling',
    headline: <>A thoughtful next step,<br /><em>right on time.</em></>,
    intro: 'New inquiries and upcoming appointments are easy to miss when follow-up depends on someone remembering. A clear sequence helps customers know what happens next and helps your team stay on top of each request.',
    focusTitle: 'Keep every inquiry moving.',
    focusCopy: 'From a first confirmation to a reminder before an appointment, follow-up can happen at the right point in your existing process. Your team can see who has responded, what is booked, and which conversations need attention.',
    projects: [
      'Send an immediate confirmation and alert the right person when an inquiry arrives.',
      'Offer a booking link, then send useful reminders and rescheduling details.',
      'Prompt a personal follow-up when someone has not replied or a next step is due.',
    ],
    goodFit: 'Inquiries wait too long for a response, appointments are missed, or your team has to keep a separate mental list of who to contact next.',
    care: 'Messages should reflect how you actually work, arrive at sensible times, and respect customer preferences. Your team stays able to see the conversation and step in whenever context matters.',
  },
  {
    no: '04',
    slug: 'websites-and-digital-tools',
    icon: <ArrowUpRight />,
    title: 'Websites and digital tools',
    text: 'Refresh or build a focused website that explains what you do and makes it easy for the right people to get in touch. I can also create small tools for a specific business need.',
    examples: 'Website refresh · Landing pages · Custom intake tools',
    headline: <>A clearer digital front<br /><em>door for your business.</em></>,
    intro: 'Your website and small digital tools should make the next step clear. I build focused experiences that explain your offer, answer the right questions, and help visitors take action.',
    focusTitle: 'Make the important task easier to do.',
    focusCopy: 'That might mean a refreshed website with clearer service pages, a landing page for one offer, or a lightweight internal tool that removes a recurring spreadsheet chore. The scope stays centered on the people who will use it.',
    projects: [
      'Reshape a website so visitors can understand your services and contact you quickly.',
      'Create a focused landing page and intake form for a particular audience or offer.',
      'Build a small digital tool around a repeatable task your current software does not cover.',
    ],
    goodFit: 'Your current site no longer reflects the business, visitors are unsure what to do next, or a small custom tool could remove a practical bottleneck.',
    care: 'The result should be easy to update and work well on phones. We agree on content, ownership, and any connections to existing systems before building.',
  },
  {
    no: '05',
    slug: 'process-review-and-implementation',
    icon: <Check />,
    title: 'Process review and implementation',
    text: 'Sometimes the best place to start is a clear map of the work. We identify friction, weigh options, then implement the changes that make sense.',
    examples: 'Process mapping · Tool selection · Team handover',
    headline: <>Understand the work<br /><em>before changing it.</em></>,
    intro: 'If you know a process feels harder than it should but are not sure what to fix, we can first make the work visible. Then you can choose a practical next step with a clear view of the trade-offs.',
    focusTitle: 'Find the cause before choosing a tool.',
    focusCopy: 'We trace a process from its starting point through the people, systems, decisions, and exceptions involved. That gives us a shared picture of where time is lost and which changes are likely to help.',
    projects: [
      'Map a current process and identify repeated entry, waiting, or unclear ownership.',
      'Compare a process change, an existing tool, and custom automation in plain language.',
      'Prioritize a useful first improvement and implement it with a clear team handover.',
    ],
    goodFit: 'Several tools or people are involved, the process has grown informally, or you want a recommendation before committing to a build.',
    care: 'A review can end with a recommendation and a plan, even if the right answer is to keep things simple. Any implementation is scoped around an agreed outcome and the people affected by it.',
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
  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <SiteLink page="home" currentPage={currentPage} navigate={navigate} className="wordmark" aria-label="Automate with Josh home">
          <span className="wordmark-mark" aria-hidden="true">aj</span>
          <span className="wordmark-name">automate <span>with josh</span></span>
        </SiteLink>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
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
          <Eyebrow>Thoughtful automation for growing businesses</Eyebrow>
          <h1>Make more room for <em>good work.</em></h1>
          <p className="hero-lede">
            I help small teams untangle repetitive work and build practical systems that give people time back.
          </p>
          <div className="hero-actions">
            <button className="button" onClick={() => navigate('calendar')}>
              Let’s talk about your workflow <ArrowRight size={17} />
            </button>
            <button className="text-link" onClick={() => navigate('services')}>
              Explore services <ArrowUpRight size={16} />
            </button>
          </div>
          <div className="hero-note"><span className="note-rule" />Independent consultant · Strategy, build, handover</div>
        </div>

        <figure className="hero-portrait">
          <img src="/my-new-photo.png" alt="Josh Strohm in his home office" />
          <figcaption>
            <span className="portrait-caption-label">A practical partner for better operations</span>
            <span className="portrait-caption-name">Josh Strohm <span>· Founder</span></span>
          </figcaption>
        </figure>
      </section>

      <section className="intro-band">
        <div className="page-width intro-band-inner">
          <Eyebrow>The work behind the work</Eyebrow>
          <div className="intro-band-content">
            <h2>Good businesses lose time in the in-between.</h2>
            <div>
              <p>Information gets entered twice. Follow-ups slip through the cracks. A process only one person knows becomes a bottleneck.</p>
              <p>Those are solvable problems. We start with how your team actually works, then make the repetitive parts easier to handle.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview page-width section-space">
        <div className="section-heading-row">
          <div>
            <Eyebrow>Where I can help</Eyebrow>
            <h2>Useful systems.<br /><em>Less busywork.</em></h2>
          </div>
          <p className="section-aside">The right answer might be automation, a clearer process, or a thoughtful mix of both.</p>
        </div>
        <div className="service-list">
          <SiteLink page="workflow-automation" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">01</span><Workflow size={21} aria-hidden="true" />
            <div><h3>Workflows that connect your tools</h3><p>Move information between the systems you already use, with fewer hand-offs and less rekeying.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
          <SiteLink page="chat-and-voice-assistants" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">02</span><MessageSquareText size={21} aria-hidden="true" />
            <div><h3>Helpful AI, in the right places</h3><p>From answering straightforward customer questions to helping staff find information or prepare a draft, with a person involved where it matters.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
          <SiteLink page="lead-and-appointment-follow-up" currentPage={currentPage} navigate={navigate} className="service-row">
            <span className="service-number">03</span><Clock3 size={21} aria-hidden="true" />
            <div><h3>Follow-up that doesn’t get forgotten</h3><p>Make sure inquiries, appointments, and next steps reach the right person at the right time.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </SiteLink>
        </div>
        <button className="text-link services-link" onClick={() => navigate('services')}>See all services <ArrowRight size={16} /></button>
      </section>

      <section className="approach-band">
        <div className="page-width approach-grid">
          <div>
            <Eyebrow>A steady, collaborative process</Eyebrow>
            <h2>Understand first.<br /><em>Automate second.</em></h2>
          </div>
          <div className="approach-steps">
            <div><span>01</span><p><strong>Listen and map</strong>We look at what happens today, where work slows down, and what matters to your team.</p></div>
            <div><span>02</span><p><strong>Find the simple fix</strong>We agree on a useful first step and choose tools that fit the way you operate.</p></div>
            <div><span>03</span><p><strong>Build and hand over</strong>I set it up, walk your team through it, and make sure there’s a clear way to get support.</p></div>
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
      <h1>{title}</h1>
      {children && <p>{children}</p>}
    </div>
  );
}

function ServicesPage({ navigate }) {
  return (
    <>
      <section className="page-width page-top">
        <PageIntro eyebrow="Services" title={<>Practical systems.<br /><em>Less repetition.</em></>}>
          Every project starts with your process and your people. Technology comes in only when it makes the work meaningfully easier.
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
            <Eyebrow>Some useful outcomes</Eyebrow>
            <h2>What this can look like</h2>
            <ul>{service.projects.map((project) => <li key={project}>{project}</li>)}</ul>
          </section>
          <aside className="service-page-care">
            <span className="detail-icon"><Check size={22} aria-hidden="true" /></span>
            <div><h2>Designed for real work</h2><p>{service.care}</p></div>
          </aside>
        </div>
      </section>
      <Callout navigate={navigate} />
    </>
  );
}

function MethodologyPage({ navigate }) {
  const steps = [
    ['01', 'Understand the day-to-day', 'We talk through the work as it happens now: the people involved, the tools in use, and the places where a task gets repeated or delayed.'],
    ['02', 'Choose a useful first step', 'I lay out the options in plain language. Together, we decide what is worth changing and what a good result should look like.'],
    ['03', 'Build around your team', 'The solution should feel natural to use. I set it up, test it with real examples, and leave room for your team to give feedback.'],
    ['04', 'Make the handover clear', 'You get a walkthrough and practical notes for the new process. If something needs adjusting later, you know where to start.'],
  ];

  return (
    <>
      <section className="page-width page-top">
        <PageIntro eyebrow="How I work" title={<>Clear steps.<br /><em>No black box.</em></>}>
          Good automation starts with understanding the people doing the work. The process stays collaborative from first conversation through handover.
        </PageIntro>
        <div className="method-list">
          {steps.map(([no, title, text]) => <article key={no}><span>{no}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}
        </div>
        <div className="principles">
          <Eyebrow>What guides the work</Eyebrow>
          <div className="principle-grid">
            <article><h3>Useful beats impressive</h3><p>A smaller, dependable improvement is better than a complicated system nobody wants to maintain.</p></article>
            <article><h3>People stay in control</h3><p>Automation should support good judgment. Important decisions remain visible and reviewable.</p></article>
            <article><h3>Built to be understood</h3><p>Your team should know what the system does, how to use it, and what to do when something changes.</p></article>
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
          <img src="/my-new-photo.png" alt="Josh Strohm, founder of Automate with Josh" />
          <p>Josh Strohm <span>Founder &amp; automation consultant</span></p>
        </div>
        <div className="about-copy">
          <PageIntro eyebrow="About Josh" title={<>A real person<br />to work through it with.</>}>
            My name is Josh Strohm. I started Automate with Josh to help businesses spend less time wrestling with inefficient processes.
          </PageIntro>
          <p>Over the years, I’ve seen good teams buried in admin work while important customer and creative work waits. Often the problem isn’t a lack of effort. It’s a process that has grown harder to manage than it needs to be.</p>
          <p>I bring a practical, curious approach: understand what’s happening, make the options clear, then build a system that fits the people who will use it.</p>
          <p>I don’t believe every problem needs AI. The right solution might be a simple workflow, a better connection between existing tools, or a new process the team can actually maintain.</p>
          <button className="text-link" onClick={() => navigate('calendar')}>Get to know each other <ArrowRight size={16} /></button>
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
        Pick a time for a short introduction. We’ll talk about what’s taking up time and whether I can help.
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
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <section className="page-width page-top contact-layout">
      <div className="contact-intro">
        <PageIntro eyebrow="Contact" title={<>Tell me what’s<br /><em>getting in the way.</em></>}>
          A few details will help me understand your situation before we speak. Or book a time directly if that’s easier.
        </PageIntro>
        <div className="contact-note"><span className="note-icon"><Clock3 size={19} /></span><p><strong>Prefer to talk?</strong><br />Book a 15-minute assessment and we’ll start there.</p></div>
        <a className="text-link" href="mailto:hi@automatewithjosh.com">hi@automatewithjosh.com <ArrowUpRight size={16} /></a>
      </div>
      <div className="form-panel">
        {status === 'SUCCESS' ? (
          <div className="form-success" role="status"><span className="success-icon"><Check size={24} /></span><h2>Thanks for reaching out.</h2><p>Your note is on its way. I’ll be in touch soon.</p><button className="text-link" onClick={() => setStatus('IDLE')}>Send another message <ArrowRight size={16} /></button></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-heading"><h2>A little about your project</h2><p>All fields marked * are required.</p></div>
            <div className="form-grid">
              <label>Business name *<input required name="businessName" value={formData.businessName} onChange={handleChange} autoComplete="organization" /></label>
              <label>Your name *<input required name="fullName" value={formData.fullName} onChange={handleChange} autoComplete="name" /></label>
              <label>Email address *<input required type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" /></label>
              <label>Phone number *<input required type="tel" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" /></label>
              <label className="form-span">Website <span className="optional-label">Optional</span><input type="url" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} placeholder="https://" /></label>
              <label className="form-span">What would you like to make easier? *<textarea required name="message" value={formData.message} onChange={handleChange} rows="4" /></label>
            </div>
            <label className="consent-label"><input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} /><span>I’m happy to receive a follow-up about this inquiry.</span></label>
            <button className="button form-submit" type="submit" disabled={status === 'SUBMITTING'}>{status === 'SUBMITTING' ? 'Sending…' : 'Send your note'} <ArrowRight size={17} /></button>
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
        <div><Eyebrow>A good place to begin</Eyebrow><h2>Bring me the messy part.</h2><p>We’ll figure out what’s worth fixing together.</p></div>
        <button className="button button-light" onClick={() => navigate('calendar')}>Book a conversation <ArrowUpRight size={17} /></button>
      </div>
    </section>
  );
}

function SiteFooter({ currentPage, navigate }) {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div><SiteLink page="home" currentPage={currentPage} navigate={navigate} className="footer-wordmark">automate <span>with josh</span></SiteLink><p>Practical automation for the way your business works.</p></div>
        <div className="footer-links"><SiteLink page="services" currentPage={currentPage} navigate={navigate}>Services</SiteLink><SiteLink page="methodology" currentPage={currentPage} navigate={navigate}>How I work</SiteLink><SiteLink page="about" currentPage={currentPage} navigate={navigate}>About</SiteLink><SiteLink page="contact" currentPage={currentPage} navigate={navigate}>Contact</SiteLink><a href="https://www.linkedin.com/in/joshua-w-strohm/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="https://x.com/joshwstrohm" target="_blank" rel="noopener noreferrer">X <ArrowUpRight size={13} /></a><a href="mailto:hi@automatewithjosh.com">Email <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Automate with Josh</span><span>Built around people, process, and useful technology.</span></div>
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
    const labels = { home: 'Practical Business Automation', services: 'Services', methodology: 'How I Work', about: 'About Josh', calendar: 'Book a Conversation', contact: 'Contact' };
    document.title = `${serviceBySlug[currentPage]?.title || labels[currentPage] || labels.home} | Automate with Josh`;
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
