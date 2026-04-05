
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="font-semibold text-lg text-stone-900 hover:text-teal-700 transition-colors"
        >
          Usman Khalid
        </a>
        <div className="hidden md:flex gap-8 text-sm text-stone-500">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-stone-900 transition-colors">About</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-stone-900 transition-colors">Experience</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-stone-900 transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-stone-900 transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-stone-900 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-32 pb-16 px-6">
    <div className="max-w-5xl mx-auto">
      <p className="text-teal-700 text-sm font-medium mb-4">{PERSONAL_INFO.headline}</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-stone-900 leading-tight max-w-3xl">
        Building the Future of Intelligent Systems
      </h1>
      <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-2xl">
        Bridging the gap between complex AI technologies and strategic business goals, delivering
        scalable solutions across cloud architectures.
      </p>

      <div className="flex flex-wrap gap-6 text-sm text-stone-500">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-teal-700 transition-colors flex items-center gap-2">
          <Mail size={16} /> {PERSONAL_INFO.email}
        </a>
        <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 transition-colors flex items-center gap-1.5">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700 transition-colors flex items-center gap-1.5">
          <Github size={16} /> GitHub
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin size={16} /> {PERSONAL_INFO.location}
        </span>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="about" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-stone-200 pt-16">
        <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-6">About</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-lg text-stone-600 leading-relaxed">
              {PERSONAL_INFO.profile}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <div className="text-2xl font-semibold text-stone-900">3+</div>
              <div className="text-sm text-stone-500">Years in AI & IT</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-stone-900">3+</div>
              <div className="text-sm text-stone-500">Cloud Platforms</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-stone-900">10+</div>
              <div className="text-sm text-stone-500">Clients Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-stone-200 pt-16">
        <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-12">Experience</h2>

        <div className="space-y-16">
          {PROFESSIONAL_EXPERIENCE.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                <h3 className="text-lg font-semibold text-stone-900">{exp.title}</h3>
                <span className="text-sm text-stone-400">{exp.period}</span>
              </div>
              <p className="text-sm text-teal-700 mb-1">{exp.company}</p>
              <p className="text-xs text-stone-400 mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((res, ri) => (
                  <li key={ri} className="text-stone-600 text-sm leading-relaxed flex items-start gap-2">
                    <ChevronRight size={14} className="mt-1 text-stone-300 flex-shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-stone-200 pt-16">
        <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-4">Skills</h2>
        <p className="text-stone-500 mb-12 max-w-xl">
          Specialised toolkit for modern AI integration and strategic business growth.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h3 className="text-sm font-semibold text-stone-900 mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-3 py-1.5 bg-stone-100 border border-stone-200 rounded-md text-sm text-stone-600"
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

const Projects = () => (
  <section id="projects" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-stone-200 pt-16">
        <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-4">Projects</h2>
        <p className="text-stone-500 mb-12">High-impact strategy and technical advisory work.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="group bg-white border border-stone-200 rounded-lg p-6 hover:border-stone-300 transition-colors flex flex-col h-full">
              <div className="mb-4 flex items-start justify-between">
                <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                  proj.type === 'Contract' ? 'bg-stone-100 text-stone-600' :
                  proj.type === 'Client' ? 'bg-teal-50 text-teal-700' :
                  'bg-stone-50 text-stone-500'
                }`}>
                  {proj.type}
                </span>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.title}`} className="text-stone-300 hover:text-teal-700 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 mb-3">
                {proj.logoUrl && (
                  <img
                    src={proj.logoUrl}
                    alt={`${proj.title} logo`}
                    className="w-8 h-8 rounded object-cover border border-stone-100"
                  />
                )}
                <h3 className="text-sm font-semibold text-stone-900 flex items-center gap-1">
                  {proj.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-teal-600" />
                </h3>
              </div>

              <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-grow">
                {proj.description}
              </p>
              {proj.tech && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stone-100">
                  {proj.tech.map((t, ti) => (
                    <span key={ti} className="text-xs text-stone-400">{t}{ti < proj.tech!.length - 1 ? ' /' : ''}</span>
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
  <section id="interests" className="py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-stone-200 pt-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-8">Interests</h2>
            <div className="space-y-4">
              {INTERESTS.map((item, i) => (
                <p key={i} className="text-stone-600 text-sm leading-relaxed pl-4 border-l-2 border-stone-200">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-8">Education</h2>
            <div className="bg-white border border-stone-200 rounded-lg p-8">
              <p className="text-stone-900 font-semibold mb-1">{EDUCATION.degree}</p>
              <p className="text-teal-700 text-sm mb-1">{EDUCATION.university}</p>
              <p className="text-stone-400 text-sm mb-4">{EDUCATION.location}</p>
              <p className="text-sm text-stone-500">Result: {EDUCATION.grade}</p>
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
    <section id="contact" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-stone-200 pt-16">
          <div className="max-w-xl">
            <h2 className="text-xs font-medium text-teal-700 uppercase tracking-wider mb-4">Contact</h2>
            <p className="text-stone-500 mb-8">
              Open to discussing strategic IT solutions, observability, or the future of AI.
            </p>

            <div className="flex gap-4 mb-12">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="px-5 py-2.5 bg-stone-900 text-white text-sm rounded-md hover:bg-stone-800 transition-colors flex items-center gap-2">
                <Mail size={16} /> Email
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-stone-200 text-stone-700 text-sm rounded-md hover:border-stone-300 transition-colors flex items-center gap-2">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            {status === 'success' ? (
              <div className="py-12 text-center bg-white border border-stone-200 rounded-lg">
                <CheckCircle size={32} className="mx-auto text-teal-600 mb-4" />
                <p className="text-stone-900 font-semibold mb-1">Message sent</p>
                <p className="text-stone-500 text-sm">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs text-stone-500 mb-1.5 block">Name</label>
                  <input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 focus:outline-none placeholder:text-stone-300 text-stone-800" />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs text-stone-500 mb-1.5 block">Email</label>
                  <input required id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 focus:outline-none placeholder:text-stone-300 text-stone-800" />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs text-stone-500 mb-1.5 block">Message</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What would you like to discuss?" className="w-full bg-white border border-stone-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 focus:outline-none placeholder:text-stone-300 resize-none text-stone-800"></textarea>
                </div>

                <button disabled={!canSubmit} type="submit" className={`px-6 py-3 rounded-md text-sm font-medium flex items-center gap-2 transition-all ${canSubmit ? 'bg-stone-900 text-white hover:bg-stone-800' : 'bg-stone-200 text-stone-400 cursor-not-allowed'}`}>
                  {status === 'sending' ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> : <> <Send size={16} /> Send message </>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-stone-200 text-center text-stone-400 text-xs px-6">
    <div className="max-w-5xl mx-auto">
      <p>&copy; {new Date().getFullYear()} Usman Khalid</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fafaf9]">
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
