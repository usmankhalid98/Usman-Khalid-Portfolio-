
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
  Minus
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f5f5f0]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="font-serif text-xl text-[#2c2c24] hover:text-[#6b7c5e] transition-colors"
        >
          UK
        </a>
        <div className="hidden md:flex gap-8 text-[13px] tracking-wide text-[#8a8a7e]">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-[#6b7c5e] transition-colors">About</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className="hover:text-[#6b7c5e] transition-colors">Experience</a>
          <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-[#6b7c5e] transition-colors">Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-[#6b7c5e] transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-[#6b7c5e] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-36 pb-24 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#6b7c5e]"></div>
        <p className="text-[#6b7c5e] text-sm tracking-wide">{PERSONAL_INFO.headline}</p>
      </div>
      <h1 className="text-5xl md:text-6xl mb-8 text-[#2c2c24] leading-[1.1] max-w-3xl font-serif">
        Building the Future of Intelligent Systems
      </h1>
      <p className="text-lg text-[#8a8a7e] mb-12 leading-relaxed max-w-2xl font-light">
        Bridging the gap between complex AI technologies and strategic business goals, delivering
        scalable solutions across cloud architectures.
      </p>

      <div className="flex flex-wrap gap-6 text-sm text-[#8a8a7e]">
        <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#6b7c5e] transition-colors flex items-center gap-2">
          <Mail size={15} /> {PERSONAL_INFO.email}
        </a>
        <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#6b7c5e] transition-colors flex items-center gap-1.5">
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href={`https://github.com/${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#6b7c5e] transition-colors flex items-center gap-1.5">
          <Github size={15} /> GitHub
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin size={15} /> {PERSONAL_INFO.location}
        </span>
      </div>
    </div>
  </section>
);

const Profile = () => (
  <section id="about" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-[#ddddd4] pt-20">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-6">About</p>
            <p className="text-[17px] text-[#5a5a52] leading-[1.8] font-light">
              {PERSONAL_INFO.profile}
            </p>
          </div>
          <div className="flex flex-col gap-8 md:border-l md:border-[#ddddd4] md:pl-12">
            <div>
              <div className="text-3xl text-[#2c2c24] font-serif">3+</div>
              <div className="text-sm text-[#8a8a7e] mt-1">Years in AI & IT</div>
            </div>
            <div>
              <div className="text-3xl text-[#2c2c24] font-serif">3+</div>
              <div className="text-sm text-[#8a8a7e] mt-1">Cloud Platforms</div>
            </div>
            <div>
              <div className="text-3xl text-[#2c2c24] font-serif">10+</div>
              <div className="text-sm text-[#8a8a7e] mt-1">Clients Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-[#ddddd4] pt-20">
        <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-16">Experience</p>

        <div className="space-y-20">
          {PROFESSIONAL_EXPERIENCE.map((exp, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <span className="text-sm text-[#8a8a7e]">{exp.period}</span>
                <p className="text-xs text-[#aaa99e] mt-1">{exp.location}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl text-[#2c2c24] mb-1 font-serif">{exp.title}</h3>
                <p className="text-sm text-[#6b7c5e] mb-5">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((res, ri) => (
                    <li key={ri} className="text-[#5a5a52] text-sm leading-relaxed flex items-start gap-3 font-light">
                      <Minus size={12} className="mt-1.5 text-[#c4c4b8] flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-[#ddddd4] pt-20">
        <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-4">Skills</p>
        <p className="text-[#8a8a7e] mb-16 max-w-xl font-light">
          Specialised toolkit for modern AI integration and strategic business growth.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={i}>
              <h3 className="text-lg text-[#2c2c24] mb-5 font-serif">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, si) => (
                  <span
                    key={si}
                    className="px-3.5 py-1.5 bg-[#eceee7] rounded-full text-sm text-[#5a5a52] hover:bg-[#dde0d5] hover:text-[#3c3c34] transition-colors cursor-default"
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
  <section id="projects" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-[#ddddd4] pt-20">
        <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-4">Projects</p>
        <p className="text-[#8a8a7e] mb-16 font-light">High-impact strategy and technical advisory work.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="group bg-white/70 border border-[#e2e2d8] rounded-xl p-6 hover:bg-white hover:shadow-sm transition-all flex flex-col h-full">
              <div className="mb-5 flex items-start justify-between">
                <span className={`px-2.5 py-1 rounded-full text-xs ${
                  proj.type === 'Contract' ? 'bg-[#eceee7] text-[#5a5a52]' :
                  proj.type === 'Client' ? 'bg-[#e5eade] text-[#566a48]' :
                  'bg-[#eceee7] text-[#8a8a7e]'
                }`}>
                  {proj.type}
                </span>
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${proj.title}`} className="text-[#c4c4b8] hover:text-[#6b7c5e] transition-colors">
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              <div className="flex items-center gap-3 mb-3">
                {proj.logoUrl && (
                  <img
                    src={proj.logoUrl}
                    alt={`${proj.title} logo`}
                    className="w-8 h-8 rounded-lg object-cover border border-[#e2e2d8]"
                  />
                )}
                <h3 className="text-[15px] text-[#2c2c24] flex items-center gap-1 font-serif">
                  {proj.title}
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#6b7c5e]" />
                </h3>
              </div>

              <p className="text-[#8a8a7e] text-sm leading-relaxed mb-5 flex-grow font-light">
                {proj.description}
              </p>
              {proj.tech && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#eceee7]">
                  {proj.tech.map((t, ti) => (
                    <span key={ti} className="text-xs text-[#aaa99e]">{t}{ti < proj.tech!.length - 1 ? ' /' : ''}</span>
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
    <div className="max-w-5xl mx-auto">
      <div className="border-t border-[#ddddd4] pt-20">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-10">Interests</p>
            <div className="space-y-6">
              {INTERESTS.map((item, i) => (
                <p key={i} className="text-[#5a5a52] text-sm leading-relaxed pl-5 border-l-2 border-[#c8ccbe] font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-10">Education</p>
            <div className="bg-white/70 border border-[#e2e2d8] rounded-xl p-8">
              <h3 className="text-lg text-[#2c2c24] mb-2 font-serif">{EDUCATION.degree}</h3>
              <p className="text-[#6b7c5e] text-sm mb-1">{EDUCATION.university}</p>
              <p className="text-[#aaa99e] text-sm mb-5">{EDUCATION.location}</p>
              <div className="inline-block px-3 py-1 bg-[#eceee7] rounded-full text-xs text-[#5a5a52]">
                Result: {EDUCATION.grade}
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
      <div className="max-w-5xl mx-auto">
        <div className="border-t border-[#ddddd4] pt-20">
          <div className="max-w-xl">
            <p className="text-[13px] text-[#6b7c5e] uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-3xl text-[#2c2c24] mb-4 font-serif">Let's work together</h2>
            <p className="text-[#8a8a7e] mb-10 font-light">
              Open to discussing strategic IT solutions, observability, or the future of AI.
            </p>

            <div className="flex gap-3 mb-14">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="px-5 py-2.5 bg-[#2c2c24] text-[#f5f5f0] text-sm rounded-lg hover:bg-[#3c3c34] transition-colors flex items-center gap-2">
                <Mail size={15} /> Email
              </a>
              <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-[#ddddd4] text-[#5a5a52] text-sm rounded-lg hover:border-[#c4c4b8] transition-colors flex items-center gap-2">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>

            {status === 'success' ? (
              <div className="py-12 text-center bg-white/70 border border-[#e2e2d8] rounded-xl">
                <CheckCircle size={28} className="mx-auto text-[#6b7c5e] mb-4" />
                <p className="text-[#2c2c24] font-serif text-lg mb-1">Message sent</p>
                <p className="text-[#8a8a7e] text-sm font-light">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-xs text-[#8a8a7e] mb-1.5 block tracking-wide">Name</label>
                  <input required id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full bg-white/70 border border-[#ddddd4] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#6b7c5e] focus:border-[#6b7c5e] focus:outline-none placeholder:text-[#c4c4b8] text-[#2c2c24]" />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs text-[#8a8a7e] mb-1.5 block tracking-wide">Email</label>
                  <input required id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full bg-white/70 border border-[#ddddd4] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#6b7c5e] focus:border-[#6b7c5e] focus:outline-none placeholder:text-[#c4c4b8] text-[#2c2c24]" />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs text-[#8a8a7e] mb-1.5 block tracking-wide">Message</label>
                  <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="What would you like to discuss?" className="w-full bg-white/70 border border-[#ddddd4] rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#6b7c5e] focus:border-[#6b7c5e] focus:outline-none placeholder:text-[#c4c4b8] resize-none text-[#2c2c24]"></textarea>
                </div>

                <button disabled={!canSubmit} type="submit" className={`px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${canSubmit ? 'bg-[#6b7c5e] text-white hover:bg-[#566a48]' : 'bg-[#ddddd4] text-[#aaa99e] cursor-not-allowed'}`}>
                  {status === 'sending' ? <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div> : <> <Send size={15} /> Send message </>}
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
  <footer className="py-10 border-t border-[#ddddd4] text-center text-[#aaa99e] text-xs px-6 tracking-wide">
    <div className="max-w-5xl mx-auto">
      <p>&copy; {new Date().getFullYear()} Usman Khalid</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f0]">
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
