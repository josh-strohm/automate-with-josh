import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownToLine,
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
  { label: 'Library', route: 'library' },
];

const pagePath = (page) => page === 'home' ? '/' : `/${page}`;

function SiteLink({ page, currentPage, navigate, children, className = '' }) {
  return (
    <a
      href={pagePath(page)}
      className={className}
      aria-current={currentPage === page ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(page);
      }}
    >
      {children}
    </a>
  );
}

function SiteHeader({ currentPage, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [currentPage]);

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

function HomePage({ navigate }) {
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
          <article className="service-row">
            <span className="service-number">01</span><Workflow size={21} aria-hidden="true" />
            <div><h3>Workflows that connect your tools</h3><p>Move information between the systems you already use, with fewer hand-offs and less rekeying.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </article>
          <article className="service-row">
            <span className="service-number">02</span><MessageSquareText size={21} aria-hidden="true" />
            <div><h3>Helpful AI, in the right places</h3><p>From answering straightforward customer questions to helping staff find information or prepare a draft, with a person involved where it matters.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </article>
          <article className="service-row">
            <span className="service-number">03</span><Clock3 size={21} aria-hidden="true" />
            <div><h3>Follow-up that doesn’t get forgotten</h3><p>Make sure inquiries, appointments, and next steps reach the right person at the right time.</p></div>
            <ArrowUpRight className="row-arrow" size={19} aria-hidden="true" />
          </article>
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
  const services = [
    { no: '01', icon: <Workflow />, title: 'Workflow automation', text: 'Connect the apps your team depends on. Reduce repetitive data entry, keep hand-offs moving, and make routine processes more consistent.', examples: 'n8n · Make · Zapier · APIs' },
    { no: '02', icon: <MessageSquareText />, title: 'Chat and voice assistants', text: 'Handle straightforward questions, capture key details, and route the unusual requests to your team. For internal use, AI can also help staff find information or prepare a first draft.', examples: 'Website chat · AI phone assistant · Internal search' },
    { no: '03', icon: <Clock3 />, title: 'Lead and appointment follow-up', text: 'Help every inquiry receive a timely response and make it easier for customers to book, reschedule, and know what happens next.', examples: 'Intake · Reminders · Scheduling' },
    { no: '04', icon: <ArrowUpRight />, title: 'Websites and digital tools', text: 'Refresh or build a focused website that explains what you do and makes it easy for the right people to get in touch. I can also create small tools for a specific business need.', examples: 'Website refresh · Landing pages · Custom intake tools' },
    { no: '05', icon: <Check />, title: 'Process review and implementation', text: 'Sometimes the best place to start is a clear map of the work. We identify friction, weigh options, then implement the changes that make sense.', examples: 'Process mapping · Tool selection · Team handover' },
  ];

  return (
    <>
      <section className="page-width page-top">
        <PageIntro eyebrow="Services" title={<>Practical systems.<br /><em>Less repetition.</em></>}>
          Every project starts with your process and your people. Technology comes in only when it makes the work meaningfully easier.
        </PageIntro>
        <div className="services-detail-list">
          {services.map((item) => (
            <article className="service-detail" key={item.no}>
              <span className="service-number">{item.no}</span>
              <div className="detail-icon">{item.icon}</div>
              <div className="detail-copy"><h2>{item.title}</h2><p>{item.text}</p><span className="detail-examples">{item.examples}</span></div>
            </article>
          ))}
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
        <div className="contact-note"><span className="note-icon"><Clock3 size={19} /></span><p><strong>Prefer to talk?</strong><br />Book a short introduction call and we’ll start there.</p></div>
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

function LibraryPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('IDLE');
  const [entitlements, setEntitlements] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) return;

    setStatus('SUBMITTING');
    setEntitlements([]);
    try {
      // The server performs the email-keyed entitlement lookup and returns only
      // the skills and download URLs attached to that email address.
      const response = await fetch('/api/library', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail }),
      });
      if (!response.ok) throw new Error('The library lookup could not be completed.');

      const result = await response.json();
      setEntitlements(Array.isArray(result.entitlements) ? result.entitlements : []);
      setStatus('SUCCESS');
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <section className="page-width page-top library-page">
      <PageIntro eyebrow="Your purchases" title={<>Your skill<br /><em>library.</em></>}>
        Enter the email address you used at checkout to find your purchased skills and download their package files.
      </PageIntro>

      <div className="library-lookup form-panel">
        <form onSubmit={handleSubmit}>
          <div className="form-heading"><h2>Find your purchases</h2><p>Use the email address from your receipt.</p></div>
          <label className="library-email-label" htmlFor="library-email">Email address</label>
          <div className="library-form-row">
            <input
              id="library-email"
              required
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              placeholder="you@example.com"
            />
            <button className="button" type="submit" disabled={status === 'SUBMITTING'}>
              {status === 'SUBMITTING' ? 'Looking up…' : 'View my library'} <ArrowRight size={17} />
            </button>
          </div>
          {status === 'ERROR' && <p className="form-error" role="alert">We couldn’t load your library just now. Please try again in a moment.</p>}
        </form>
      </div>

      {status === 'SUCCESS' && (
        <section className="library-results" aria-live="polite" aria-label="Your purchased skills">
          {entitlements.length === 0 ? (
            <div className="library-empty">
              <Eyebrow>Nothing here yet</Eyebrow>
              <h2>No purchases found for this email.</h2>
              <p>Double-check the address on your receipt and try again. If you used a different email at checkout, search with that one.</p>
            </div>
          ) : (
            <>
              <div className="library-results-heading"><Eyebrow>Ready when you are</Eyebrow><h2>Your purchased skills</h2></div>
              <div className="library-skill-list">
                {entitlements.map((entitlement, index) => {
                  const skill = entitlement.skill || entitlement;
                  const packages = Array.isArray(entitlement.packages)
                    ? entitlement.packages
                    : Array.isArray(skill.packages) ? skill.packages : [];
                  const skillTitle = skill.title || skill.name || 'Untitled skill';
                  const key = skill.id || skill.slug || `${skillTitle}-${index}`;

                  return (
                    <article className="library-skill-card" key={key}>
                      <div className="library-skill-copy">
                        <Eyebrow>Your purchase</Eyebrow>
                        <h3>{skillTitle}</h3>
                        {skill.description && <p>{skill.description}</p>}
                      </div>
                      <div className="library-packages">
                        {packages.length === 0 ? (
                          <p className="library-no-files">Package files for this skill aren’t available yet. Please check back soon.</p>
                        ) : packages.map((packageFile, packageIndex) => {
                          const fileKey = packageFile.id || `${packageFile.agentKey || 'package'}-${packageIndex}`;
                          const agentKey = packageFile.agentKey || 'your AI agent';
                          const href = packageFile.downloadUrl || packageFile.fileUrl;
                          const safeDownload = typeof href === 'string' && (/^https:\/\//i.test(href) || href.startsWith('/'));

                          return (
                            <div className="library-package" key={fileKey}>
                              <div>
                                <h4>{packageFile.fileName || packageFile.filename || `${skillTitle} package`}</h4>
                                {packageFile.agentName ? (
                                  <p>For {packageFile.agentName}{packageFile.version ? ` · ${packageFile.version}` : ''}</p>
                                ) : (
                                  <p className="library-agent-fallback">This package is for {agentKey}. We don’t have details for this AI agent yet, but the package is ready to download.</p>
                                )}
                              </div>
                              {safeDownload ? (
                                <a className="button button-small library-download" href={href} download>
                                  Download <ArrowDownToLine size={15} />
                                </a>
                              ) : (
                                <span className="library-download-pending">Download unavailable</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </section>
      )}
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
        <div className="footer-links"><SiteLink page="services" currentPage={currentPage} navigate={navigate}>Services</SiteLink><SiteLink page="methodology" currentPage={currentPage} navigate={navigate}>How I work</SiteLink><SiteLink page="about" currentPage={currentPage} navigate={navigate}>About</SiteLink><SiteLink page="contact" currentPage={currentPage} navigate={navigate}>Contact</SiteLink><SiteLink page="library" currentPage={currentPage} navigate={navigate}>Library</SiteLink><a href="https://www.linkedin.com/in/joshua-w-strohm/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="https://x.com/joshwstrohm" target="_blank" rel="noopener noreferrer">X <ArrowUpRight size={13} /></a><a href="mailto:hi@automatewithjosh.com">Email <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="page-width footer-bottom"><span>© {new Date().getFullYear()} Automate with Josh</span><span>Built around people, process, and useful technology.</span></div>
    </footer>
  );
}

function getPageFromPath() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  const validPages = ['methodology', 'services', 'about', 'calendar', 'contact', 'library'];
  return validPages.includes(path) ? path : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const labels = { home: 'Practical Business Automation', services: 'Services', methodology: 'How I Work', about: 'About Josh', calendar: 'Book a Conversation', contact: 'Contact', library: 'Your Skill Library' };
    document.title = `${labels[currentPage]} | Automate with Josh`;
  }, [currentPage]);

  const navigate = (page) => {
    if (page === currentPage) return;
    window.history.pushState(null, '', pagePath(page));
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let content;
  switch (currentPage) {
    case 'services': content = <ServicesPage navigate={navigate} />; break;
    case 'methodology': content = <MethodologyPage navigate={navigate} />; break;
    case 'about': content = <AboutPage navigate={navigate} />; break;
    case 'calendar': content = <CalendarPage />; break;
    case 'contact': content = <ContactPage />; break;
    case 'library': content = <LibraryPage />; break;
    default: content = <HomePage navigate={navigate} />;
  }

  return (
    <div className="site-shell">
      <SiteHeader currentPage={currentPage} navigate={navigate} />
      <main>{content}</main>
      <SiteFooter currentPage={currentPage} navigate={navigate} />
    </div>
  );
}
