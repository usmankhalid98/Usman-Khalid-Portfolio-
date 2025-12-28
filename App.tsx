
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  Cpu, 
  ArrowUpRight,
  ExternalLink,
  Target,
  Layers,
  Sparkles,
  Zap,
  Languages,
  Send,
  CheckCircle,
  Award,
  Terminal,
  AlertCircle,
  Check,
  MessageSquare,
  X,
  Bot,
  User as UserIcon,
  Loader2,
  ChevronRight
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  PROFESSIONAL_EXPERIENCE, 
  PROJECTS, 
  SKILL_CATEGORIES, 
  EDUCATION, 
  INTERESTS 
} from './data/resumeData';
import { GoogleGenAI } from "@google/genai";

const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hello! I'm Usman's Strategic AI Twin. How can I help you navigate AI strategy or cloud observability today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `You are the Strategic AI Digital Twin of Usman Khalid. 
      Your purpose is to provide high-level AI strategy advice and answer questions about Usman's expertise.
      
      Usman's Background:
      - Role: ${PERSONAL_INFO.headline}
      - Profile: ${PERSONAL_INFO.profile}
      - Key Skills: ${SKILL_CATEGORIES.map(c => c.category + ": " + c.skills.join(", ")).join("; ")}
      - Experience Summary: ${PROFESSIONAL_EXPERIENCE.map(e => e.title + " at " + e.company).join(", ")}
      
      Response Style:
      - Professional, strategic, visionary yet practical.
      - Use frameworks like "AI Readiness," "Value Realization," or "Operational Observability."
      - Keep responses concise and focused on business value.
      - If asked about things outside Usman's expertise, bridge them back to his focus on AI strategy and technical execution.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })), { role: 'user', parts: [{ text: userMessage }] }],
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      setMessages(prev => [...prev, { role: 'model', text: response.text || "I apologize, but I encountered a processing error in my strategic circuits. Could you rephrase that?" }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Strategic insight currently unavailable due to a connection error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    "What is your approach to LLM integration?",
    "How do you handle AI governance?",
    "Tell me about your ITSM experience.",
    "Define your AI strategy framework."
  ];

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-[60] p-4 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group overflow-hidden ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
        aria-label="Open AI Consultant"
      >
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Bot size={28} className="relative z-10" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-slate-100/95 backdrop-blur-xl z-[70] shadow-2xl border-l border-slate-300 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-slate-300 flex items-center justify-between bg-white/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 leading-none">Strategy Twin</h3>
                <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Systems Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-indigo-100 text-indigo-700' : 'bg-blue-600 text-white shadow-md'}`}>
                    {m.role === 'user' ? <UserIcon size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-300 text-slate-800 shadow-sm'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[85%]">
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center bg-blue-600 text-white">
                    <Bot size={16} />
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-sm">
                    <Loader2 size={18} className="animate-spin text-blue-600" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-6 border-t border-slate-300 bg-white/50">
            {messages.length === 1 && !isLoading && (
              <div className="flex flex-wrap gap-2 mb-6">
                {suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => setInput(s)}
                    className="text-[10px] font-black uppercase tracking-tight px-3 py-1.5 bg-slate-200 border border-slate-300 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-600"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div className="relative">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                placeholder="Ask me about AI strategy..."
                className="w-full bg-slate-200 border border-slate-300 rounded-2xl pl-6 pr-14 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none placeholder:text-slate-500 text-sm font-bold text-slate-800 resize-none min-h-[56px]"
                rows={1}
              />
              <button 
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-slate-400 mt-4 text-center font-black uppercase tracking-widest">Powered by Strategic Intelligence Twin 1.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-300/30 bg-slate-200/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, 'home')}
          className="font-display font-bold text-xl gradient-text hover:scale-105 transition-transform"
        >
          Usman Khalid
        </a>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <a href="#strategic-profile" onClick={(e) => handleScroll(e, 'strategic-profile')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">About</a>
          <a href="#professional-experience" onClick={(e) => handleScroll(e, 'professional-experience')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">Experience</a>
          <a href="#core-competencies" onClick={(e) => handleScroll(e, 'core-competencies')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">Skills</a>
          <a href="#client-engagements" onClick={(e) => handleScroll(e, 'client-engagements')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">Projects</a>
          <a href="#personal-growth" onClick={(e) => handleScroll(e, 'personal-growth')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">Interests</a>
          <a href="#lets-talk-strategy" onClick={(e) => handleScroll(e, 'lets-talk-strategy')} className="hover:text-blue-600 transition-colors uppercase tracking-tight">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden">
    <div className="blob top-[-150px] right-[-100px]"></div>
    <div className="blob bottom-[-150px] left-[-100px] opacity-60"></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 bg-slate-200/50 text-slate-700 text-xs font-bold mb-8 uppercase tracking-widest shadow-sm">
        <Cpu size={14} className="text-blue-600" />
        {PERSONAL_INFO.headline}
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight text-slate-900">
        Building the <span className="gradient-text">Future</span> of Intelligent Systems
      </h1>
      <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
        Bridging the gap between complex AI technologies and strategic business goals, delivering 
        scalable solutions across cloud architectures.
      </p>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-slate-500 font-bold">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <Mail size={18} /> {PERSONAL_INFO.email}
        </a>
        <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1">
          <Github size={18} /> GitHub
        </a>
        <span className="flex items-center gap-1">
          <MapPin size={18} /> {PERSONAL_INFO.location}
        </span>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="strategic-profile" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="glass-card p-8 md:p-12 rounded-[3rem] grid md:grid-cols-3 gap-12 items-center border border-slate-300 shadow-sm">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-bold mb-6 font-display flex items-center gap-3 text-slate-900 uppercase tracking-tight">
          <Target className="text-blue-600" /> Strategic Profile
        </h2>
        <p className="text-xl text-slate-700 leading-relaxed mb-6 font-medium">
          {PERSONAL_INFO.profile}
        </p>
        <div className="flex flex-wrap gap-4 mt-8">
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-200/50 rounded-lg text-xs font-bold text-slate-600 border border-slate-300">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            AI Transformation
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-200/50 rounded-lg text-xs font-bold text-slate-600 border border-slate-300">
            <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
            Cloud Observability
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-200/50 rounded-lg text-xs font-bold text-slate-600 border border-slate-300">
            <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
            Product Strategy
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="p-6 rounded-3xl bg-slate-200/60 border border-slate-300 shadow-sm">
          <div className="text-blue-700 font-bold text-2xl mb-1 font-display">3+ Years</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-black">AI & IT Leadership</div>
        </div>
        <div className="p-6 rounded-3xl bg-slate-200/60 border border-slate-300 shadow-sm">
          <div className="text-emerald-700 font-bold text-2xl mb-1 font-display">3+ Platforms</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-black">AWS / Azure / AI Ops</div>
        </div>
        <div className="p-6 rounded-3xl bg-slate-200/60 border border-slate-300 shadow-sm">
          <div className="text-indigo-700 font-bold text-2xl mb-1 font-display">10+ Clients</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-black">Strategy Consultant</div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="professional-experience" className="py-20 px-6 max-w-5xl mx-auto">
    <div className="border border-slate-300 rounded-[3rem] p-8 md:p-12 bg-slate-200/30 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl pointer-events-none rounded-full"></div>
      
      <div className="flex items-center gap-4 mb-16 relative z-10">
        <div className="h-px flex-1 bg-slate-300"></div>
        <h2 className="text-3xl font-bold font-display text-slate-900 px-2 text-center uppercase tracking-tight">Professional Experience</h2>
        <div className="h-px flex-1 bg-slate-300"></div>
      </div>
      
      <div className="space-y-12 relative z-10">
        {PROFESSIONAL_EXPERIENCE.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-slate-300 group">
            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-slate-200 border-4 border-blue-600 group-hover:scale-125 transition-all"></div>
            <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{exp.title}</h3>
                <p className="text-slate-500 font-black text-xs uppercase tracking-tight">{exp.company}</p>
              </div>
              <div className="text-xs font-black px-4 py-1.5 rounded-full bg-slate-300/50 text-slate-700 border border-slate-300 shadow-sm">
                {exp.period}
              </div>
            </div>
            <p className="text-[10px] text-blue-600 uppercase font-black tracking-widest mb-4 flex items-center gap-1 opacity-70">
              <MapPin size={10} /> {exp.location}
            </p>
            <ul className="space-y-4">
              {exp.responsibilities.map((res, ri) => (
                <li key={ri} className="text-slate-600 flex items-start gap-3 font-medium">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                  <span className="leading-relaxed">{res}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "AI & Strategic Consulting": return <Sparkles size={24} className="text-blue-600" />;
      case "Cloud & Observability": return <Layers size={24} className="text-emerald-600" />;
      case "Product & Frameworks": return <Zap size={24} className="text-indigo-600" />;
      case "Languages": return <Languages size={24} className="text-slate-600" />;
      default: return <Terminal size={24} />;
    }
  };

  return (
    <section id="core-competencies" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold font-display mb-4 text-slate-900 uppercase tracking-tight text-center md:text-left">Core Competencies</h2>
          <p className="text-slate-600 text-lg font-medium text-center md:text-left">
            Specialised toolkit designed for the complexities of modern AI integration and 
            strategic business growth.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((cat, i) => (
          <div key={i} className="glass-card group p-8 rounded-[2.5rem] hover:translate-y-[-4px] transition-all duration-300 border border-slate-300 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-slate-300/40 border border-slate-300 group-hover:bg-slate-300 transition-colors">
                {getIcon(cat.category)}
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">{cat.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, si) => (
                <div 
                  key={si} 
                  className="px-4 py-2 bg-slate-200 border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:text-blue-700 hover:bg-slate-300 transition-all cursor-default shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="client-engagements" className="py-20 px-6 max-w-7xl mx-auto bg-slate-200/70 -mx-6 px-12 rounded-[4rem] border-y border-slate-300/30">
    <div className="mb-16">
      <h2 className="text-3xl font-bold font-display mb-4 text-slate-900 uppercase tracking-tight">Client Engagements</h2>
      <p className="text-slate-600 font-bold opacity-70">High-impact strategy and technical advisory projects.</p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map((proj, i) => (
        <div key={i} className="glass-card group p-8 rounded-[2.5rem] flex flex-col h-full hover:bg-slate-300/40 transition-all border border-slate-300 shadow-sm">
          <div className="mb-6 flex items-start justify-between">
            <div className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest ${
              proj.type === 'Contract' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' :
              proj.type === 'Client' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
              'bg-blue-100 text-blue-700 border border-blue-200'
            }`}>
              {proj.type}
            </div>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            {proj.logoUrl && (
              <img 
                src={proj.logoUrl} 
                alt={`${proj.title} logo`} 
                className="w-12 h-12 rounded-xl object-cover border border-slate-300 shadow-sm bg-white"
              />
            )}
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-display">
              {proj.title} <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all text-blue-600" />
            </h3>
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
            {proj.description}
          </p>
          {proj.tech && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-300/50">
              {proj.tech.map((t, ti) => (
                <span key={ti} className="text-[10px] uppercase font-black text-slate-500 tracking-tighter opacity-60">{t}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const Interests = () => (
  <section id="personal-growth" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold font-display mb-8 text-slate-900 uppercase tracking-tight">Personal Growth</h2>
        <div className="space-y-6">
          {INTERESTS.map((item, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-3xl bg-slate-200/50 border border-slate-300 hover:bg-slate-200 transition-all shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-slate-300 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-inner">
                {i === 0 ? <Target size={24} /> : i === 1 ? <Globe size={24} /> : <Award size={24} />}
              </div>
              <p className="text-slate-600 leading-relaxed font-bold text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card p-12 rounded-[3rem] text-center relative overflow-hidden border border-slate-300 shadow-sm">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-blue-600">
          <Award size={160} />
        </div>
        <h3 className="text-2xl font-bold mb-6 font-display text-slate-900 uppercase">Education</h3>
        <p className="text-blue-700 font-bold text-lg mb-2">{EDUCATION.degree}</p>
        <p className="text-slate-700 font-black text-sm uppercase mb-1">{EDUCATION.university}</p>
        <p className="text-slate-500 font-bold text-xs mb-8 tracking-widest">RESULT: {EDUCATION.grade}</p>
        <div className="inline-block px-6 py-2.5 rounded-2xl bg-slate-300 border border-slate-400/20 text-slate-700 font-black text-xs shadow-sm uppercase">
          {EDUCATION.location}
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', confirmEmail: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [emailValid, setEmailValid] = useState(false);
  const [emailsMatch, setEmailsMatch] = useState(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(formData.email));
    setEmailsMatch(formData.email !== '' && formData.email === formData.confirmEmail);
  }, [formData.email, formData.confirmEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValid || !emailsMatch) return;

    setStatus('sending');
    try {
      const response = await fetch("https://formspree.io/f/mlgrpwal", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', confirmEmail: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error("Form error:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const canSubmit = formData.name && emailValid && emailsMatch && formData.message && status === 'idle';

  return (
    <section id="lets-talk-strategy" className="py-32 px-6 max-w-4xl mx-auto text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-slate-900 uppercase tracking-tight">Let's Talk Strategy</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-semibold">
          Open to discussing strategic IT solutions, observability, or the future of AI.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-16">
          <a href={`mailto:${PERSONAL_INFO.email}`} className="group glass-card px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all text-blue-700 font-black border-slate-300 active:scale-95 min-w-[220px]">
            <Mail size={24} /> <span>Email Me</span>
          </a>
          <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="group glass-card px-10 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-700 hover:text-white transition-all text-blue-700 font-black border-slate-300 active:scale-95 min-w-[220px]">
            <Linkedin size={24} /> <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <div className="glass-card p-8 md:p-12 rounded-[3rem] text-left max-w-2xl mx-auto border border-slate-300 shadow-2xl">
        {status === 'success' ? (
          <div className="text-center py-12 animate-in fade-in zoom-in">
            <CheckCircle size={60} className="mx-auto text-emerald-600 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900">Inbound Received</h3>
            <p className="text-slate-600 font-medium">Strategic outreach logged. Expect a response shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase ml-1">Full Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="Joe Bloggs" className="w-full bg-slate-300/30 border border-slate-300 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none placeholder:text-slate-400 font-bold text-slate-800" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black text-slate-500 uppercase ml-1">Email Address</label>
                  {formData.email && (
                    emailValid ? <Check size={14} className="text-emerald-600" /> : <AlertCircle size={14} className="text-red-500" />
                  )}
                </div>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="joe@example.com" className={`w-full bg-slate-300/30 border ${formData.email && !emailValid ? 'border-red-400' : 'border-slate-300'} rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none placeholder:text-slate-400 font-bold text-slate-800`} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black text-slate-500 uppercase ml-1">Verify Email</label>
                  {formData.confirmEmail && (
                    emailsMatch ? <Check size={14} className="text-emerald-600" /> : <AlertCircle size={14} className="text-red-500" />
                  )}
                </div>
                <input required type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} placeholder="Repeat email..." className={`w-full bg-slate-300/30 border ${formData.confirmEmail && !emailsMatch ? 'border-red-400' : 'border-slate-300'} rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none placeholder:text-slate-400 font-bold text-slate-800`} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-slate-500 uppercase ml-1">Message</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Brief your project objective..." className="w-full bg-slate-300/30 border border-slate-300 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-500/20 focus:outline-none placeholder:text-slate-400 resize-none font-bold text-slate-800"></textarea>
            </div>

            <button disabled={!canSubmit} type="submit" className={`w-full py-5 rounded-2xl font-black text-white flex items-center justify-center gap-3 transition-all uppercase tracking-widest text-xs shadow-lg ${canSubmit ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 active:scale-95 shadow-blue-500/20' : 'bg-slate-400 cursor-not-allowed opacity-50'}`}>
              {status === 'sending' ? <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> : <> <Send size={18} /> Send Inbound </>}
            </button>
            
            {formData.confirmEmail && !emailsMatch && formData.email && emailValid && (
              <p className="text-[10px] text-red-500 font-bold text-center uppercase tracking-tighter">Verification mismatch detected. Please re-enter your email.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-slate-300/50 text-center text-slate-500 text-xs font-black uppercase tracking-widest bg-slate-100/30">
    <div className="max-w-7xl mx-auto px-6">
      <p>&copy; {new Date().getFullYear()} Strategic AI Advisory & Solutions Consulting</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 overflow-x-hidden bg-[#f0f2f5]">
      <Navbar />
      <div className="relative">
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
      <AIConsultant />
      <Footer />
    </div>
  );
}
