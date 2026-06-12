import React, { useState, useEffect } from 'react';
import {
  Cpu,
  ArrowRight,
  Zap,
  Search,
  BarChart3,
  MessageSquare,
  Menu,
  X,
  CheckCircle2,
  Bot,
  Workflow,
  Mail,
  ChevronRight,
  Clock,
  ShieldCheck,
  Mic,
  Calendar,
  Globe,
  Users,
  Layers
} from 'lucide-react';

// --- SUB-COMPONENTS FOR PAGES ---

const HomePage = ({ navigate }) => (
  <div className="animate-in fade-in duration-700">
    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#008080] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1ac1ce] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1ac1ce]/30 bg-[#1ac1ce]/5 text-[#1ac1ce] mb-8 animate-bounce">
          <Zap size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">The Future is Automated</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Don't Let Your Business Get <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64748b] via-[#ffffff] to-[#1ac1ce] glow-text">
            Left Behind.
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I help businesses find bottlenecks and fix them with AI automation. Stop guessing. Start growing.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('ai-assessment')}
            className="px-8 py-4 rounded text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 slate-glow text-white"
            style={{ backgroundColor: '#64748b' }}
          >
            Identify My Bottlenecks <ArrowRight size={20} />
          </button>
          <button
            onClick={() => navigate('services')}
            className="px-8 py-4 rounded text-lg font-bold border border-[#333] hover:border-[#1ac1ce] hover:text-[#1ac1ce] transition-all glass-panel text-white"
          >
            View Solutions
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('calendar')}
            className="text-[#1ac1ce] hover:text-white transition-colors text-lg font-medium"
          >
            Or book a free consultation →
          </button>
        </div>
      </div>
    </section>

    {/* THE PROBLEM / URGENCY (Kept on Home as a Hook) */}
    <section className="py-24 bg-[#0d0d0d] relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              The Gap is <span style={{ color: '#64748b' }}>Widening.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Your competitors use AI to work smarter. They automate routine tasks and win your customers.
            </p>
            <ul className="space-y-4">
              {[
                "Manual data entry wastes hours.",
                "Slow replies lose leads.",
                "Key knowledge stays with a few people.",
                "You can't grow without hiring."
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#64748b]/20 text-[#64748b]">
                    <X size={14} />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#64748b] to-[#008080] blur-3xl opacity-20"></div>
            <div className="relative glass-panel p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                <span className="text-gray-400">Efficiency Metric</span>
                <span className="text-[#64748b] font-mono">CRITICAL</span>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-white">
                    <span>Traditional Biz</span>
                    <span>45% Capacity</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 w-[45%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2 font-bold">
                    <span className="text-[#1ac1ce]">AI-Integrated Biz</span>
                    <span className="text-[#1ac1ce]">98% Capacity</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#008080] to-[#1ac1ce] w-[98%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const MethodologyPage = () => (
  <section className="py-32 min-h-screen relative overflow-hidden animate-in slide-in-from-right duration-500 bg-[#0d0d0d]">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-white">My Methodology</h1>
        <p className="text-xl text-gray-400">I don't just "install chatbots." I rebuild how your business runs so it works on its own. Here is how we work together.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 mb-32">
        {[
          {
            icon: Search,
            title: "1. Identify",
            desc: "I study how your business runs. I find where time is wasted. We check your business to save time, not just money.",
            color: '#008080'
          },
          {
            icon: Workflow,
            title: "2. Architect",
            desc: "I build AI systems that connect your tools. No quick fixes. Just real solutions that last.",
            color: '#1ac1ce'
          },
          {
            icon: CheckCircle2,
            title: "3. Implement",
            desc: "I build and launch your system. Then I train your team to use it. This saves you money fast.",
            color: '#64748b'
          }
        ].map((step, idx) => (
          <div
            key={idx}
            className="group relative p-8 rounded-2xl bg-[#1a1a1a] hover:bg-[#3a3a3a] transition-all border border-transparent hover:border-[#1ac1ce]/30 cyan-glow flex flex-col h-full"
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white text-xl font-bold shadow-lg"
              style={{ backgroundColor: step.color }}
            >
              <step.icon />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
            <p className="text-gray-400 leading-relaxed flex-grow">{step.desc}</p>

            {/* Step Number Background */}
            <span className="absolute bottom-4 right-6 text-8xl font-bold text-white opacity-5 pointer-events-none">
              {idx + 1}
            </span>
          </div>
        ))}
      </div>

      {/* NEW SECTION: Core Principles */}
      <div className="border-t border-gray-800 pt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The <span className="text-[#64748b]">Anti-Fragile</span> Standard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Automation should help your business stay strong. I build systems on three core principles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#008080]/20 text-[#008080] rounded-lg">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Security First</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your data is important. I use strong security to keep your AI systems safe and private from day one.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#1ac1ce]/20 text-[#1ac1ce] rounded-lg">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Human-Centric</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI won't replace your team. It handles the boring work so your people can focus on what matters.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#64748b]/20 text-[#64748b] rounded-lg">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Modular Design</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Business moves fast. I build systems that change when you change. No delays.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
);

const ServicesPage = ({ navigate }) => (
  <section className="py-32 min-h-screen bg-[#0d0d0d] animate-in slide-in-from-right duration-500">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Primary <span className="text-[#1ac1ce]">Solutions</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Every business is different. I find where AI helps you most. Then I build solutions with these tools.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Item 1: Automated Workflows (n8n) - Large Prominent */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 relative overflow-hidden group hover:border-[#1ac1ce] transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Workflow size={200} className="text-[#1ac1ce]" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#008080]/20 text-[#1ac1ce] flex items-center justify-center mb-6">
              <Workflow size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Automated Workflows (n8n)</h3>
            <p className="text-gray-400 text-lg mb-6">
              The heart of your business. I connect your apps so data moves automatically. No more copying and pasting.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">n8n</span>
              <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">Make.com</span>
              <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">Zapier</span>
            </div>
          </div>
        </div>

        {/* Item 2: AI Voice Agents */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-transparent hover:border-[#64748b]/50 transition-all group">
          <div className="w-12 h-12 rounded-full bg-[#64748b]/20 text-[#64748b] flex items-center justify-center mb-6">
            <Mic size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">AI Voice Agents</h3>
          <p className="text-gray-400 text-sm">
            AI phone agents that answer calls 24/7. They talk to customers, answer questions, and book meetings.
          </p>
        </div>

        {/* Item 3: AI Chatbots */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
          <div className="w-12 h-12 rounded-full bg-[#008080]/20 text-[#008080] flex items-center justify-center mb-6">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">AI Chatbots</h3>
          <p className="text-gray-400 text-sm">
            Chatbots trained on your business info. They know your products and how you talk to customers.
          </p>
        </div>

        {/* Item 4: Automated Booking */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
          <div className="w-12 h-12 rounded-full bg-[#1ac1ce]/20 text-[#1ac1ce] flex items-center justify-center mb-6">
            <Calendar size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Automated Booking</h3>
          <p className="text-gray-400 text-sm">
            Systems that follow up with leads and add meetings to your calendar. No more email tag.
          </p>
        </div>

        {/* Item 5: AI Websites */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
            <Globe size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">AI Websites</h3>
          <p className="text-gray-400 text-sm">
            Fast, beautiful websites built with AI. Made for speed, search engines, and getting customers.
          </p>
        </div>

        {/* CTA Card */}
        <div className="md:col-span-3 p-10 rounded-3xl bg-gradient-to-r from-[#008080] to-[#004d4d] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl font-bold mb-2">And Many Other Tools...</h3>
            <p className="opacity-90">
              These are the main tools. I build <strong>custom solutions</strong> based on what your business needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-0 relative z-10">
            <button onClick={() => navigate('contact')} className="bg-[#1a1a1a] text-[#008080] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#0d0d0d] transition-colors flex items-center gap-2">
              Start Your Custom Build <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate('calendar')} className="bg-white text-[#008080] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors">
              Book Call
            </button>
          </div>

          {/* Abstract Decoration */}
          <div className="absolute right-0 top-0 h-full w-1/2 bg-[#1a1a1a] opacity-5 transform skew-x-12 translate-x-12"></div>
        </div>

      </div>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="py-32 min-h-screen relative animate-in slide-in-from-right duration-500 bg-[#0d0d0d]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start gap-16">
        <div className="w-full md:w-5/12 sticky top-24">
          {/* Josh Profile Placeholder - Styled like a trading card */}
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-[#333333] to-[#121212] border border-gray-700 p-2 relative shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1ac1ce]/20 to-transparent pointer-events-none rounded-2xl"></div>
            <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center flex-col text-center p-8">

              {/* UPDATED: Profile Photo */}
              <div className="w-80 h-80 rounded-full bg-[#333] border-4 border-[#64748b] mb-8 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/my-photo.png"
                  alt="Josh Strohm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#1ac1ce] rounded-full border-4 border-[#1a1a1a] z-10"></div>
              </div>

              <h3 className="text-3xl font-bold text-white">Josh Strohm</h3>
              <p className="text-[#1ac1ce] text-sm tracking-widest uppercase mb-8">Founder & AI Architect</p>

              <div className="w-full space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest mb-1">
                    <span>Strategy</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full">
                    <div className="w-[98%] h-full bg-[#64748b] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest mb-1">
                    <span>Implementation</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-700 rounded-full">
                    <div className="w-[100%] h-full bg-[#1ac1ce] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-7/12 pt-8">
          <h1 className="text-5xl font-bold mb-8 text-white">I Bridge <br /><span className="text-[#008080]">Tech</span> and <span className="text-[#1ac1ce]">Profit</span>.</h1>
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              My name is Josh Strohm. I started <strong>AutomatewithJosh.com</strong> to help businesses stop wasting money on inefficient processes.
            </p>
            <p>
              In my years of consulting, I've seen great businesses fail because they were too slow. They were buried in admin work while faster competitors passed them.
            </p>
            <p>
              I don't sell magic fixes. I bring clarity. I find the problems and use smart systems to solve them.
            </p>

            <div className="bg-[#1a1a1a] p-8 rounded-xl border-l-4 border-[#64748b] my-8">
              <p className="italic text-white text-xl font-medium">
                "AI isn't just a buzzword to me. It's the most powerful tool of our time. If you aren't using it, your competition will."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Why Work With Me?</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#1ac1ce] flex-shrink-0" />
                <span><strong>No Fluff:</strong> I don't use big words. I focus on results.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#1ac1ce] flex-shrink-0" />
                <span><strong>Custom Builds:</strong> No copy-paste templates. Your business is unique, your AI should be too.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#1ac1ce] flex-shrink-0" />
                <span><strong>Long-Term Partner:</strong> I don't just build and leave. I teach you how to use what I build.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AiAssessmentPage = () => (
  <section className="min-h-screen bg-[#0d0d0d] overflow-hidden">
    <iframe
      srcDoc={`
        <html>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
            <title>AI Efficiency Assessment</title>
            <script async src="https://tally.so/widgets/embed.js"></script>
            <style type="text/css">
              html { margin: 0; height: 100%; overflow: hidden; }
              iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
            </style>
          </head>
          <body>
            <iframe data-tally-src="https://tally.so/r/Med68Y?transparentBackground=1" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="AI Efficiency Assessment"></iframe>
          </body>
        </html>
      `}
      className="w-full h-screen border-0"
      title="AI Efficiency Assessment"
    />
  </section>
);

const CalendarPage = () => (
  <section className="min-h-screen bg-[#0d0d0d] overflow-hidden py-32">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-white">Book a <span className="text-[#1ac1ce]">Consultation</span></h1>
        <p className="text-xl text-gray-400">Select a time that works for you below.</p>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lnFVDVF4oKIzE6ZHDeeyE7cLSIGsE79nUYZPvsPWxz8a6Do7nJDVXq1uwyqJVtig3pMaB3tg7?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          title="Google Calendar Appointment scheduling"
        ></iframe>
      </div>
    </div>
  </section>
);

const ContactPage = () => {
    const [formData, setFormData] = useState({
      businessName: '',
      businessWebsite: '',
      fullName: '',
      email: '',
      phone: '',
      message: '',
      consent: false
    });
    const [status, setStatus] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS, ERROR

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus('SUBMITTING');

      try {
        const response = await fetch('https://n8n.strohmpartners.com/webhook/da8ce62d-100d-44a4-814c-46ae402df0f0', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('SUCCESS');
          setFormData({
            businessName: '',
            businessWebsite: '',
            fullName: '',
            email: '',
            phone: '',
            message: '',
            consent: false
          });
        } else {
          setStatus('ERROR');
        }
      } catch (err) {
        console.error(err);
        setStatus('ERROR');
      }
    };

    return (
      <section className="py-32 min-h-screen flex flex-col justify-center animate-in slide-in-from-right duration-500">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16">

            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold mb-8 text-white">Stop Guessing. <br /><span className="text-[#64748b]">Start Automating.</span></h1>
              <p className="text-xl text-gray-400 mb-12">
                You are one conversation away from saving 20+ hours a week. Schedule a free discovery call below.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#333] p-3 rounded-lg text-[#1ac1ce]"><Clock /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">15-Minute Audit</h4>
                    <p className="text-gray-400 text-sm">We'll identify one major bottleneck in just 15 minutes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#333] p-3 rounded-lg text-[#008080]"><ShieldCheck /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">100% Confidential</h4>
                    <p className="text-gray-400 text-sm">Your business data and trade secrets are safe with me.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#333] p-3 rounded-lg text-[#64748b]"><ArrowRight /></div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Actionable Plan</h4>
                    <p className="text-gray-400 text-sm">Leave the call with a roadmap, even if you don't hire me.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="glass-panel p-1 rounded-2xl shadow-2xl shadow-[#1ac1ce]/10">
                <div className="bg-[#121212] rounded-xl p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Request Your Audit</h3>

                  {status === 'SUCCESS' ? (
                    <div className="text-center py-12 animate-in fade-in zoom-in">
                      <div className="w-16 h-16 bg-[#1ac1ce]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#1ac1ce]">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
                      <p className="text-gray-400">I'll be in touch shortly to schedule your audit.</p>
                      <button
                        onClick={() => setStatus('IDLE')}
                        className="mt-6 text-[#64748b] hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                      >
                        Send Another
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Business Name</label>
                          <input
                            required
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            type="text"
                            className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Full Name</label>
                          <input
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Email Address</label>
                          <input
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Phone</label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">Website</label>
                        <input
                          name="businessWebsite"
                          value={formData.businessWebsite}
                          onChange={handleChange}
                          type="text"
                          className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2">What is your biggest bottleneck?</label>
                        <textarea
                          required
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full bg-[#333] border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#1ac1ce] transition-colors"
                        ></textarea>
                      </div>

                      {/* Consent Toggle */}
                      <div className="flex items-center gap-4 py-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#1a1a1a] after:border-gray-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1ac1ce]"></div>
                        </label>
                        <span className="text-xs text-gray-400">
                          I agree to receive communications regarding my inquiry and marketing materials.
                        </span>
                      </div>

                      <button
                        disabled={status === 'SUBMITTING'}
                        className="w-full py-4 rounded font-bold text-lg bg-[#64748b] hover:bg-[#1ac1ce] disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1 text-white shadow-lg shadow-[#64748b]/20 flex justify-center items-center gap-2"
                      >
                        {status === 'SUBMITTING' ? (
                          <>Sending...</>
                        ) : (
                          <>Book Consultation <ArrowRight size={20} /></>
                        )}
                      </button>

                      {status === 'ERROR' && (
                        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  };


// --- MAIN APP COMPONENT ---

const getPageFromPath = () => {
  const path = window.location.pathname;
  if (path === '/' || path === '') return 'home';
  // Remove leading slash and trailing slash, then split on '?' to remove query params
  const cleanPath = path.replace(/^\/+|\/+$/g, '').split('?')[0];
  const validPages = ['home', 'methodology', 'services', 'about', 'calendar', 'ai-assessment', 'contact'];
  return validPages.includes(cleanPath) ? cleanPath : 'home';
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(getPageFromPath());
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setMobileMenuOpen(false);
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState(null, '', url);
  };

  const colors = {
    bg: '#0d0d0d',
    card: '#333333',
    teal: '#008080',
    cyan: '#1ac1ce',
    slate: '#64748b',
    text: '#ffffff',
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={navigateTo} />;
      case 'methodology': return <MethodologyPage />;
      case 'services': return <ServicesPage navigate={navigateTo} />;
      case 'about': return <AboutPage />;
      case 'calendar': return <CalendarPage />;
      case 'ai-assessment': return <AiAssessmentPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#1ac1ce] selection:text-[#0d0d0d]" style={{ backgroundColor: colors.bg, color: colors.text }}>

      {/* GLOBAL STYLES & ANIMATIONS */}
      <style>{`
        @keyframes soundwave {
          0%, 100% { height: 10px; opacity: 0.5; }
          50% { height: 40px; opacity: 1; }
        }
        .animate-soundwave {
          animation: soundwave 1.2s ease-in-out infinite;
        }
        .glass-panel {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(26, 193, 206, 0.5);
        }
        .slate-glow:hover {
          box-shadow: 0 0 20px rgba(100, 116, 139, 0.6);
        }
        .cyan-glow:hover {
          box-shadow: 0 0 20px rgba(26, 193, 206, 0.4);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3 glass-panel shadow-lg' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Representation */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigateTo('home')}>
            <img src="/awj-logo.png" alt="AWJ Logo" className="h-20 md:h-32" />
            <div className="flex items-end gap-[2px] h-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-[#64748b] to-[#1ac1ce]"
                  style={{
                    height: '20px',
                    animation: `soundwave 2.2s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {[
              { label: 'Home', route: 'home' },
              { label: 'Methodology', route: 'methodology' },
              { label: 'Services', route: 'services' },
              { label: 'About', route: 'about' },
              { label: 'Book Call', route: 'calendar' },
              { label: 'Contact', route: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigateTo(item.route)}
                className={`transition-colors uppercase ${currentPage === item.route ? 'text-[#1ac1ce] border-b border-[#1ac1ce]' : 'text-gray-300 hover:text-[#1ac1ce]'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigateTo('ai-assessment')}
              className="px-6 py-2 rounded font-bold transition-all transform hover:-translate-y-1 slate-glow text-white"
              style={{ backgroundColor: colors.slate }}
            >
              Start AI Assessment
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800 p-6 flex flex-col gap-6 bg-[#0d0d0d]">
            {[
              { label: 'Home', route: 'home' },
              { label: 'Methodology', route: 'methodology' },
              { label: 'Services', route: 'services' },
              { label: 'About', route: 'about' },
              { label: 'Book Call', route: 'calendar' },
              { label: 'Contact', route: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigateTo(item.route)}
                className={`text-left text-lg font-medium ${currentPage === item.route ? 'text-[#1ac1ce]' : 'text-white hover:text-[#1ac1ce]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main className={`min-h-screen ${currentPage !== 'home' ? 'pt-12 md:pt-16' : ''}`}>
        {renderPage()}
      </main>

      {/* FOOTER (Simplified for global use) */}
      <footer className="bg-[#050505] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <img src="/awj-logo.png" alt="AWJ Logo" className="h-16 rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
              <div className="text-sm text-gray-500">
                &copy; 2024 AutomatewithJosh.com. All rights reserved.
              </div>
            </div>
            <div className="flex gap-6 text-gray-400">
              <button onClick={() => navigateTo('calendar')} className="hover:text-[#1ac1ce]">Book Consultation</button>
              <button onClick={() => navigateTo('services')} className="hover:text-[#1ac1ce]">Services</button>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/joshua-w-strohm/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="https://x.com/joshwstrohm" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
              <a href="mailto:hi@automatewithjosh.com" className="text-gray-500 hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
