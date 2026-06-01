
import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  ExternalLink,
  Send,
  CheckCircle,
  BrainCircuit,
  Sparkles,
  Layers,
  Zap,
  Code2
} from 'lucide-react';
import {
  PERSONAL_INFO,
  PROFESSIONAL_EXPERIENCE,
  PROJECTS,
  SKILL_CATEGORIES,
  EDUCATION,
  INTERESTS
} from './data/resumeData';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0c0f0d]/80 backdrop-blur-md border-b border-[#1e2420]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#7c9a6c]/10 border border-[#7c9a6c]/20 flex items-center justify-center group-hover:bg-[#7c9a6c]/20 transition-colors">
            <BrainCircuit size={16} className="text-[#7c9a6c]" />
          </div>
          <span className="font-semibold text-[#e4e8e0] text-sm">Usman Khalid</span>
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#6a6e65] hover:text-[#e4e8e0] transition-colors"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className={`w-5 h-px bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></div>
            <div className={`w-5 h-px bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="px-3 py-1.5 text-[13px] text-[#6a6e65] hover:text-[#e4e8e0] hover:bg-[#1a1f1c] rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#1e2420] bg-[#0c0f0d]/95 backdrop-blur-md px-6 py-4 space-y-1">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="block px-3 py-2.5 text-sm text-[#9a9e95] hover:text-[#e4e8e0] hover:bg-[#1a1f1c] rounded-md transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-20 px-6 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,154,108,0.06)_0%,transparent_50%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,154,108,0.04)_0%,transparent_50%)]"></div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex items-center gap-2.5 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#7c9a6c] pulse-dot"></div>
        <span className="font-mono text-xs text-[#7c9a6c] tracking-wide">Available for consulting</span>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#e4e8e0] leading-[1.05] max-w-4xl tracking-tight">
        AI Strategy &<br />
        <span className="text-[#7c9a6c]">Solutions Architecture</span>
      </h1>

      <p className="text-lg md:text-xl text-[#6a6e65] mb-12 leading-relaxed max-w-2xl">
        Bridging the gap between complex AI technologies and strategic business goals.
        Delivering scalable solutions across cloud architectures.
      </p>

      <div className="flex flex-wrap gap-3 mb-16">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="px-5 py-2.5 bg-[#7c9a6c] text-[#0c0f0d] text-sm font-medium rounded-lg hover:bg-[#8aaa7a] transition-colors flex items-center gap-2">
          <Mail size={15} /> Get in touch
        </a>
        <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#252b27] text-[#9a9e95] text-sm rounded-lg hover:border-[#7c9a6c]/40 hover:text-[#e4e8e0] transition-all flex items-center gap-2">
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#252b27] text-[#9a9e95] text-sm rounded-lg hover:border-[#7c9a6c]/40 hover:text-[#e4e8e0] transition-all flex items-center gap-2">
          <Github size={15} /> GitHub
        </a>
      </div>

      <div className="grid grid-cols-3 max-w-md gap-px bg-[#1e2420] rounded-xl overflow-hidden border border-[#1e2420]">
        <div className="bg-[#0c0f0d] p-5 text-center">
          <div className="text-2xl font-bold text-[#e4e8e0]">3+</div>
          <div className="text-xs text-[#6a6e65] mt-1">Years</div>
        </div>
        <div className="bg-[#0c0f0d] p-5 text-center">
          <div className="text-2xl font-bold text-[#e4e8e0]">3+</div>
          <div className="text-xs text-[#6a6e65] mt-1">Platforms</div>
        </div>
        <div className="bg-[#0c0f0d] p-5 text-center">
          <div className="text-2xl font-bold text-[#e4e8e0]">10+</div>
          <div className="text-xs text-[#6a6e65] mt-1">Clients</div>
        </div>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="border-t border-[#1e2420] pt-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">About</span>
            <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3">Strategic Profile</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[#9a9e95] text-lg leading-[1.8]">
              {PERSONAL_INFO.profile}
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {['AI Transformation', 'Cloud Observability', 'Product Strategy', 'LLM Integration'].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-[#7c9a6c]/10 border border-[#7c9a6c]/15 rounded-full text-xs text-[#7c9a6c] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="border-t border-[#1e2420] pt-20">
        <div className="mb-16">
          <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Experience</span>
          <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3">Where I've worked</h2>
        </div>

        <div className="space-y-1">
          {PROFESSIONAL_EXPERIENCE.map((exp, i) => (
            <div key={i} className="group bg-[#111614] hover:bg-[#161b18] border border-[#1e2420] hover:border-[#252b27] rounded-xl p-6 md:p-8 transition-all olive-glow">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-[#6a6e65]">{exp.period}</span>
                  <p className="text-xs text-[#4a4e45] mt-1 flex items-center gap-1">
                    <MapPin size={10} /> {exp.location}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-semibold text-[#e4e8e0] mb-1 group-hover:text-[#7c9a6c] transition-colors">{exp.title}</h3>
                  <p className="text-sm text-[#7c9a6c] mb-5 font-medium">{exp.company}</p>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((res, ri) => (
                      <li key={ri} className="text-[#9a9e95] text-sm leading-relaxed flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#7c9a6c]/50 flex-shrink-0"></span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case "AI & Strategic Consulting": return <Sparkles size={18} className="text-[#7c9a6c]" />;
      case "Cloud & Observability": return <Layers size={18} className="text-[#7c9a6c]" />;
      case "Product & Frameworks": return <Zap size={18} className="text-[#7c9a6c]" />;
      case "Languages": return <Code2 size={18} className="text-[#7c9a6c]" />;
      default: return <Code2 size={18} className="text-[#7c9a6c]" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-[#1e2420] pt-20">
          <div className="mb-16">
            <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Skills</span>
            <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3">Core Competencies</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="bg-[#111614] border border-[#1e2420] rounded-xl p-6 hover:border-[#252b27] transition-all olive-glow">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#7c9a6c]/10 border border-[#7c9a6c]/15 flex items-center justify-center">
                    {getIcon(cat.category)}
                  </div>
                  <h3 className="text-sm font-semibold text-[#e4e8e0]">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="px-2.5 py-1 bg-[#1a1f1c] border border-[#252b27] rounded-md text-xs text-[#9a9e95] hover:text-[#e4e8e0] hover:border-[#7c9a6c]/30 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="border-t border-[#1e2420] pt-20">
        <div className="mb-16">
          <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Projects</span>
          <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3">Client Engagements</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="group bg-[#111614] border border-[#1e2420] rounded-xl p-6 hover:border-[#252b27] transition-all olive-glow flex flex-col h-full">
              <div className="mb-5 flex items-start justify-between">
                <span className={`font-mono px-2 py-0.5 rounded text-[10px] tracking-wide ${
                  proj.type === 'Contract' ? 'bg-[#7c9a6c]/10 text-[#7c9a6c]' :
                  proj.type === 'Client' ? 'bg-[#7c9a6c]/10 text-[#7c9a6c]' :
                  'bg-[#1a1f1c] text-[#6a6e65]'
                }`}>
                  {proj.type}
                </span>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.title}`} className="text-[#3a3e35] hover:text-[#7c9a6c] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 mb-3">
                {proj.logoUrl && (
                  <img
                    src={proj.logoUrl}
                    alt={`${proj.title} logo`}
                    className="w-8 h-8 rounded-lg object-cover border border-[#252b27] bg-[#1a1f1c]"
                  />
                )}
                <h3 className="text-sm font-semibold text-[#e4e8e0] flex items-center gap-1.5">
                  {proj.title}
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#7c9a6c]" />
                </h3>
              </div>

              <p className="text-[#6a6e65] text-sm leading-relaxed mb-5 flex-grow">
                {proj.description}
              </p>
              {proj.tech && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e2420]">
                  {proj.tech.map((t, ti) => (
                    <span key={ti} className="font-mono text-[10px] text-[#4a4e45] tracking-wide">{t}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Interests = () => (
  <section id="interests" className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="border-t border-[#1e2420] pt-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Interests</span>
            <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3 mb-8">Beyond Work</h2>
            <div className="space-y-4">
              {INTERESTS.map((item, i) => (
                <div key={i} className="bg-[#111614] border border-[#1e2420] rounded-xl p-5 hover:border-[#252b27] transition-all">
                  <p className="text-[#9a9e95] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Education</span>
            <h2 className="text-2xl font-bold text-[#e4e8e0] mt-3 mb-8">Academic Background</h2>
            <div className="bg-[#111614] border border-[#1e2420] rounded-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(124,154,108,0.06)_0%,transparent_70%)]"></div>
              <h3 className="text-lg font-semibold text-[#e4e8e0] mb-2">{EDUCATION.degree}</h3>
              <p className="text-sm text-[#7c9a6c] mb-1">{EDUCATION.university}</p>
              <p className="text-sm text-[#6a6e65] mb-6">{EDUCATION.location}</p>
              <div className="inline-block px-3 py-1.5 bg-[#7c9a6c]/10 border border-[#7c9a6c]/15 rounded-lg">
                <span className="font-mono text-xs text-[#7c9a6c]">Result: {EDUCATION.grade}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    try {
      const response = await fetch("https://formspree.io/f/mlgrpwal", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
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

  const canSubmit = formData.name && formData.email && formData.message && status === 'idle';

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-[#1e2420] pt-20">
          <div className="grid md:grid-cols-12 gap-16">
            <div className="md:col-span-5">
              <span className="font-mono text-xs text-[#7c9a6c] tracking-wide uppercase">Contact</span>
              <h2 className="text-3xl font-bold text-[#e4e8e0] mt-3 mb-4">Let's build something intelligent</h2>
              <p className="text-[#6a6e65] mb-8 leading-relaxed">
                Open to discussing strategic IT solutions, observability, or the future of AI.
              </p>

              <div className="space-y-3">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-sm text-[#9a9e95] hover:text-[#7c9a6c] transition-colors">
                  <Mail size={16} /> {PERSONAL_INFO.email}
                </a>
                <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-[#9a9e95] hover:text-[#7c9a6c] transition-colors">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <span className="flex items-center gap-3 text-sm text-[#6a6e65]">
                  <MapPin size={16} /> {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            <div className="md:col-span-7">
              {status === 'success' ? (
                <div className="py-16 text-center bg-[#111614] border border-[#1e2420] rounded-xl">
                  <CheckCircle size={28} className="mx-auto text-[#7c9a6c] mb-4" />
                  <p className="text-[#e4e8e0] font-semibold mb-1">Message sent</p>
                  <p className="text-[#6a6e65] text-sm">I'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-mono text-[10px] text-[#6a6e65] uppercase tracking-wider mb-2 block">Name</label>
                      <input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-[#111614] border border-[#1e2420] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#7c9a6c]/50 focus:border-[#7c9a6c]/50 focus:outline-none placeholder:text-[#3a3e35] text-[#e4e8e0] hover:border-[#252b27] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-mono text-[10px] text-[#6a6e65] uppercase tracking-wider mb-2 block">Email</label>
                      <input required id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-[#111614] border border-[#1e2420] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#7c9a6c]/50 focus:border-[#7c9a6c]/50 focus:outline-none placeholder:text-[#3a3e35] text-[#e4e8e0] hover:border-[#252b27] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-mono text-[10px] text-[#6a6e65] uppercase tracking-wider mb-2 block">Message</label>
                    <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." className="w-full bg-[#111614] border border-[#1e2420] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#7c9a6c]/50 focus:border-[#7c9a6c]/50 focus:outline-none placeholder:text-[#3a3e35] resize-none text-[#e4e8e0] hover:border-[#252b27] transition-colors"></textarea>
                  </div>

                  <button disabled={!canSubmit} type="submit" className={`px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${canSubmit ? 'bg-[#7c9a6c] text-[#0c0f0d] hover:bg-[#8aaa7a]' : 'bg-[#1a1f1c] text-[#3a3e35] cursor-not-allowed'}`}>
                    {status === 'sending' ? <div className="w-4 h-4 border-2 border-[#0c0f0d]/20 border-t-[#0c0f0d] rounded-full animate-spin"></div> : <> <Send size={14} /> Send message </>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-10 border-t border-[#1e2420] px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[#4a4e45] text-xs">&copy; {new Date().getFullYear()} Usman Khalid</p>
      <div className="flex items-center gap-4">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#4a4e45] hover:text-[#7c9a6c] transition-colors"><Mail size={14} /></a>
        <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-[#4a4e45] hover:text-[#7c9a6c] transition-colors"><Linkedin size={14} /></a>
        <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-[#4a4e45] hover:text-[#7c9a6c] transition-colors"><Github size={14} /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0c0f0d]">
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
