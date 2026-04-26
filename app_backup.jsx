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
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFFF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FFFF]/30 bg-[#00FFFF]/5 text-[#00FFFF] mb-8 animate-bounce">
          <Zap size={16} />
          <span className="text-sm font-bold tracking-widest uppercase">The Future is Automated</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Don't Let Your Business Get <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] via-[#ffffff] to-[#00FFFF] glow-text">
            Left Behind.
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          I help forward-thinking businesses identify hidden bottlenecks and streamline operations using custom AI automation. Stop guessing. Start dominating.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('contact')}
            className="px-8 py-4 rounded text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 orange-glow text-white"
            style={{ backgroundColor: '#FF4500' }}
          >
            Identify My Bottlenecks <ArrowRight size={20} />
          </button>
          <button 
            onClick={() => navigate('services')}
            className="px-8 py-4 rounded text-lg font-bold border border-[#333] hover:border-[#00FFFF] hover:text-[#00FFFF] transition-all glass-panel text-white"
          >
            View Solutions
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
              The Gap is <span style={{ color: '#FF4500' }}>Widening.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Your competition isn't just working harder; they are working smarter. They are using AI to automate the mundane, leaving them with more time to steal your market share.
            </p>
            <ul className="space-y-4">
              {[
                "Manual data entry eating up hours.",
                "Leads slipping through cracks due to slow response.",
                "Operations dependent on 'tribal knowledge'.",
                "Inability to scale without hiring more staff."
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-[#FF4500]/20 text-[#FF4500]">
                    <X size={14} />
                  </div>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#008080] blur-3xl opacity-20"></div>
            <div className="relative glass-panel p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                <span className="text-gray-400">Efficiency Metric</span>
                <span className="text-[#FF4500] font-mono">CRITICAL</span>
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
                    <span className="text-[#00FFFF]">AI-Integrated Biz</span>
                    <span className="text-[#00FFFF]">98% Capacity</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#008080] to-[#00FFFF] w-[98%] animate-pulse"></div>
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
  <section className="py-32 min-h-screen relative overflow-hidden animate-in slide-in-from-right duration-500">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-white">My Methodology</h1>
        <p className="text-xl text-gray-400">I don't just "install chatbots." I re-engineer your business logic to function autonomously. Here is the blueprint for how we work together.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12 mb-32">
        {[
          {
            icon: Search,
            title: "1. Identify",
            desc: "I dive deep into your current operations to find the bottlenecks, the wasted time, and the friction points. We audit your P&L not for money, but for time.",
            color: '#008080'
          },
          {
            icon: Workflow,
            title: "2. Architect",
            desc: "I design a custom AI workflow that bridges your existing tools, creating a seamless pipeline of automation. No band-aid fixes, only structural improvements.",
            color: '#00FFFF'
          },
          {
            icon: CheckCircle2,
            title: "3. Implement",
            desc: "I build, test, and deploy the solution. Then, I train your team to manage the new system, ensuring the profit margins widen immediately.",
            color: '#FF4500'
          }
        ].map((step, idx) => (
          <div 
            key={idx} 
            className="group relative p-8 rounded-2xl bg-[#333333] hover:bg-[#3a3a3a] transition-all border border-transparent hover:border-[#00FFFF]/30 cyan-glow flex flex-col h-full"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The <span className="text-[#FF4500]">Anti-Fragile</span> Standard</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Automation shouldn't make your business rigid; it should make it resilient. I build systems based on three non-negotiable pillars.
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
               Your proprietary data is your moat. I implement enterprise-grade security protocols to ensure your AI systems are private, compliant, and protected from day one.
             </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#00FFFF]/20 text-[#00FFFF] rounded-lg">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Human-Centric</h3>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               AI shouldn't replace your humanity; it should amplify it. My systems are designed to handle the robot work so your team can focus on creative, high-value strategy.
             </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-gray-800">
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FF4500]/20 text-[#FF4500] rounded-lg">
                  <Layers size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Modular Design</h3>
             </div>
             <p className="text-gray-400 text-sm leading-relaxed">
               Business changes fast. I build systems that are modular and flexible, so when you pivot strategies, your automation infrastructure pivots with you instantly.
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
          Primary <span className="text-[#00FFFF]">Solutions</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Every business is unique. I start by identifying exactly where AI will provide the most value for <span className="text-[#FF4500] italic">your</span> specific operation. Once the bottlenecks are found, I build custom solutions using these powerful tools.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Item 1: Automated Workflows (n8n) - Large Prominent */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 relative overflow-hidden group hover:border-[#00FFFF] transition-all">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Workflow size={200} className="text-[#00FFFF]" />
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#008080]/20 text-[#00FFFF] flex items-center justify-center mb-6">
              <Workflow size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Automated Workflows (n8n)</h3>
            <p className="text-gray-400 text-lg mb-6">
              The central nervous system of your business. I use n8n and other advanced tools to connect your apps, ensuring data flows automatically between them. No more manual copy-pasting or missed updates.
            </p>
            <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">n8n</span>
                <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">Make.com</span>
                <span className="px-3 py-1 rounded-full bg-[#333] text-xs text-gray-300 border border-gray-700">Zapier</span>
            </div>
          </div>
        </div>

        {/* Item 2: AI Voice Agents */}
        <div className="p-8 rounded-3xl bg-[#333333] border border-transparent hover:border-[#FF4500]/50 transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#FF4500]/20 text-[#FF4500] flex items-center justify-center mb-6">
              <Mic size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI Voice Agents</h3>
            <p className="text-gray-400 text-sm">
                Intelligent voice receptionists that handle inbound and outbound calls 24/7. They qualify leads, answer FAQs, and book appointments without you lifting a finger.
            </p>
        </div>

        {/* Item 3: AI Chatbots */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#008080]/20 text-[#008080] flex items-center justify-center mb-6">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI Chatbots</h3>
            <p className="text-gray-400 text-sm">
                Custom-trained on your business data. These aren't generic bots; they know your products, your policies, and your tone perfectly.
            </p>
        </div>

        {/* Item 4: Automated Booking */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#00FFFF]/20 text-[#00FFFF] flex items-center justify-center mb-6">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Automated Booking</h3>
            <p className="text-gray-400 text-sm">
                Systems that nurture leads and automatically sync appointments to your calendar. Stop playing email tag and start taking meetings.
            </p>
        </div>

        {/* Item 5: AI Websites */}
        <div className="p-8 rounded-3xl bg-[#1a1a1a] border border-gray-800 hover:border-[#008080] transition-all">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI Websites</h3>
            <p className="text-gray-400 text-sm">
                Stunning, high-performance websites built with AI-assisted design and copy. Optimized for speed, SEO, and conversion from day one.
            </p>
        </div>

        {/* CTA Card */}
        <div className="md:col-span-3 p-10 rounded-3xl bg-gradient-to-r from-[#008080] to-[#004d4d] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
           <div className="relative z-10 max-w-xl">
               <h3 className="text-3xl font-bold mb-2">And Many Other Tools...</h3>
               <p className="opacity-90">
                   These are just the primary tools. I build <strong>custom solutions</strong> based entirely on what your business needs to succeed.
               </p>
           </div>
           <button onClick={() => navigate('contact')} className="relative z-10 mt-6 md:mt-0 bg-white text-[#008080] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
             Start Your Custom Build <ArrowRight size={20}/>
           </button>
           
           {/* Abstract Decoration */}
           <div className="absolute right-0 top-0 h-full w-1/2 bg-white opacity-5 transform skew-x-12 translate-x-12"></div>
        </div>

      </div>
    </div>
  </section>
);

const AboutPage = () => (
  <section className="py-32 min-h-screen relative animate-in slide-in-from-right duration-500">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start gap-16">
        <div className="w-full md:w-5/12 sticky top-24">
            {/* Josh Profile Placeholder - Styled like a trading card */}
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-[#333333] to-[#121212] border border-gray-700 p-2 relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#00FFFF]/20 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="w-full h-full bg-[#1a1a1a] rounded-xl flex items-center justify-center flex-col text-center p-8">
                
                {/* UPDATED: Profile Photo */}
                <div className="w-40 h-40 rounded-full bg-[#222] border-4 border-[#FF4500] mb-8 flex items-center justify-center relative overflow-hidden">
                    <img 
                      src="my_photo.jpg" 
                      alt="Josh Strohm" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#00FFFF] rounded-full border-4 border-[#1a1a1a] z-10"></div>
                </div>

                <h3 className="text-3xl font-bold text-white">Josh Strohm</h3>
                <p className="text-[#00FFFF] text-sm tracking-widest uppercase mb-8">Founder & AI Architect</p>
                
                <div className="w-full space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest mb-1">
                      <span>Strategy</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full">
                        <div className="w-[98%] h-full bg-[#FF4500] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest mb-1">
                      <span>Implementation</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded-full">
                        <div className="w-[100%] h-full bg-[#00FFFF] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
        <div className="w-full md:w-7/12 pt-8">
          <h1 className="text-5xl font-bold mb-8 text-white">I Am The Bridge Between <br /><span className="text-[#008080]">Tech</span> and <span className="text-[#00FFFF]">Profit</span>.</h1>
          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              My name is Josh Strohm. I started <strong>AutomatewithJosh.com</strong> with a singular purpose: to stop businesses from bleeding money on inefficient processes.
            </p>
            <p>
              In my years of consulting, I've seen brilliant businesses fail not because their product was bad, but because their operations were slow. They were drowning in admin work while their agile competitors swam past them.
            </p>
            <p>
              I don't sell "magic buttons." I sell clarity. I look at your business, identify where the friction is, and I deploy intelligent systems to smooth it out.
            </p>
            
            <div className="bg-[#333333] p-8 rounded-xl border-l-4 border-[#FF4500] my-8">
              <p className="italic text-white text-xl font-medium">
                "AI isn't just a buzzword to me. It's the greatest operational lever of our lifetime. If you aren't pulling it, your competition will."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Why Work With Me?</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#00FFFF] flex-shrink-0" />
                <span><strong>No Fluff:</strong> I don't speak in jargon. I speak in ROI.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#00FFFF] flex-shrink-0" />
                <span><strong>Custom Builds:</strong> No cookie-cutter templates. Your business is unique, your AI should be too.</span>
              </li>
              <li className="flex gap-4">
                <CheckCircle2 className="text-[#00FFFF] flex-shrink-0" />
                <span><strong>Long-Term Partner:</strong> I don't just build and leave. I ensure you know how to drive the car I built you.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactPage = () => (
  <section className="py-32 min-h-screen flex flex-col justify-center animate-in slide-in-from-right duration-500">
    <div className="container mx-auto px-6 max-w-6xl">
       <div className="flex flex-col md:flex-row gap-16">
         
         <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-bold mb-8 text-white">Stop Guessing. <br /><span className="text-[#FF4500]">Start Automating.</span></h1>
            <p className="text-xl text-gray-400 mb-12">
              You are one conversation away from saving 20+ hours a week. Schedule a free discovery call below.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                 <div className="bg-[#333] p-3 rounded-lg text-[#00FFFF]"><Clock /></div>
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
                 <div className="bg-[#333] p-3 rounded-lg text-[#FF4500]"><ArrowRight /></div>
                 <div>
                   <h4 className="text-white font-bold text-lg">Actionable Plan</h4>
                   <p className="text-gray-400 text-sm">Leave the call with a roadmap, even if you don't hire me.</p>
                 </div>
              </div>
            </div>
         </div>

         <div className="w-full md:w-1/2">
            <div className="glass-panel p-1 rounded-2xl shadow-2xl shadow-[#00FFFF]/10">
              <div className="bg-[#121212] rounded-xl p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Request Your Audit</h3>
                  <form className="space-y-6">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                        <input type="text" className="w-full bg-[#222] border border-gray-700 rounded p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Business Email</label>
                        <input type="email" className="w-full bg-[#222] border border-gray-700 rounded p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">What is your biggest bottleneck?</label>
                        <textarea rows={3} className="w-full bg-[#222] border border-gray-700 rounded p-4 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"></textarea>
                      </div>
                      <button className="w-full py-4 rounded font-bold text-lg bg-[#FF4500] hover:bg-[#ff5514] transition-all transform hover:-translate-y-1 text-white shadow-lg shadow-[#FF4500]/20">
                          Book Consultation
                      </button>
                  </form>
              </div>
            </div>
         </div>
       </div>
    </div>
  </section>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const colors = {
    bg: '#121212',
    card: '#333333',
    teal: '#008080',
    cyan: '#00FFFF',
    orange: '#FF4500',
    text: '#ffffff',
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage navigate={navigateTo} />;
      case 'methodology': return <MethodologyPage />;
      case 'services': return <ServicesPage navigate={navigateTo} />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage navigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-[#00FFFF] selection:text-[#121212]" style={{ backgroundColor: colors.bg, color: colors.text }}>
      
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
          background: rgba(51, 51, 51, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-text {
          text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
        }
        .orange-glow:hover {
          box-shadow: 0 0 20px rgba(255, 69, 0, 0.6);
        }
        .cyan-glow:hover {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        }
      `}</style>

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-panel shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Representation */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="flex items-end gap-[2px] h-8 mr-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-1 rounded-full bg-gradient-to-t from-[#FF4500] to-[#00FFFF]"
                  style={{ 
                    height: '20px',
                    animation: `soundwave 2.2s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s` 
                  }}
                />
              ))}
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Automate<span style={{ color: colors.cyan }}>withJosh</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {['Home', 'Methodology', 'Services', 'About'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigateTo(item.toLowerCase())}
                className={`transition-colors uppercase ${currentPage === item.toLowerCase() ? 'text-[#00FFFF] border-b border-[#00FFFF]' : 'text-gray-300 hover:text-[#00FFFF]'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => navigateTo('contact')}
              className="px-6 py-2 rounded font-bold transition-all transform hover:-translate-y-1 orange-glow text-white"
              style={{ backgroundColor: colors.orange }}
            >
              Start Audit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-gray-800 p-6 flex flex-col gap-6 bg-[#121212]">
            {['Home', 'Methodology', 'Services', 'About', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigateTo(item.toLowerCase())}
                className={`text-left text-lg font-medium ${currentPage === item.toLowerCase() ? 'text-[#00FFFF]' : 'text-white hover:text-[#00FFFF]'}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* PAGE CONTENT */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      {/* FOOTER (Simplified for global use) */}
      <footer className="bg-[#050505] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-500">
              &copy; 2024 AutomatewithJosh.com. All rights reserved.
            </div>
            <div className="flex gap-6 text-gray-400">
              <button onClick={() => navigateTo('contact')} className="hover:text-[#00FFFF]">Book Consultation</button>
              <button onClick={() => navigateTo('services')} className="hover:text-[#00FFFF]">Services</button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;