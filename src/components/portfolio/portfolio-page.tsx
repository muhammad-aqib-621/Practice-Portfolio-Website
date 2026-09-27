import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, CircleHelp, Clock3, CloudSun, Github, KeyRound, Linkedin, Menu, NotebookPen, X } from 'lucide-react';
import { ContactForm } from '@/components/portfolio/contact-form';
import { profile, projects, skills } from '@/lib/portfolio-data';

const projectIcons = {
  weather: CloudSun,
  notes: NotebookPen,
  password: KeyRound,
  clock: Clock3,
  quiz: CircleHelp,
} as const;

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => setPhotoLoaded(true);
    image.src = profile.photo;
    return () => { image.onload = null; };
  }, []);
  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="page-width header-inner">
          <a className="wordmark" href="#home">aqib<span>.</span></a>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(item => <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
          <div className="header-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          </div>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <section className="intro-section" id="home">
        <div className="page-width intro-grid">
          <div className="intro-copy">
            <p className="eyebrow intro-kicker"><span className="availability-dot" /> SOFTWARE ENGINEERING STUDENT · DEVELOPER</p>
            <h1>Building useful things for the <span>web.</span></h1>
            <p className="intro-summary">I’m {profile.displayName}, a full-stack developer and software engineering student. I enjoy turning practical ideas into clear, approachable web experiences.</p>
            <div className="intro-actions">
              <a className="action-primary" href="#projects">Explore my work <ArrowRight size={16} /></a>
              <a className="action-secondary" href="/resume">View resume <ArrowUpRight size={15} /></a>
            </div>
            <a className="scroll-cue" href="#projects">SCROLL TO EXPLORE <span>↓</span></a>
          </div>
          <div className="portrait-column">
            <div className="portrait-frame">
              {photoLoaded ? <img className="profile-photo" src={profile.photo} alt={`Portrait of ${profile.fullName}`} /> : <div className="profile-fallback" aria-label="Profile photo placeholder">AS</div>}
              <div className="portrait-caption"><span>MUHAMMAD AQIB SUBHANI</span><span>DEV / 2026</span></div>
            </div>
            <div className="portrait-note"><span>01</span><p>Curious by nature.<br />Builder by choice.</p></div>
          </div>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="page-width">
          <div className="section-heading">
            <div><p className="eyebrow">SELECTED PROJECTS / 01—05</p><h2>Things I’ve built.</h2></div>
            <p>Small tools and web apps made to solve everyday problems and explore ideas.</p>
          </div>
          <div className="projects-grid">
            {projects.map(project => {
              const ProjectIcon = projectIcons[project.visual];
              return (
                <article className={`project-card project-${project.visual}`} key={project.slug}>
                  <div className="project-artwork">
                    <span className="project-art-label">{project.category}</span>
                    <span className="project-art-number">{project.number}</span>
                    <ProjectIcon className="project-art-icon" strokeWidth={1.25} aria-hidden="true" />
                    <span className="project-art-rule" />
                  </div>
                  <div className="project-card-copy">
                    <div><p className="eyebrow">PROJECT {project.number}</p><h3>{project.name}</h3></div>
                    <p>{project.description}</p>
                    {project.href
                      ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16} /></a>
                      : <span className="project-link project-link-pending">Repository link coming soon</span>}
                  </div>
                </article>
              );
            })}
          </div>
          <a className="all-projects-link" href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="content-section about-section" id="about">
        <div className="page-width about-layout">
          <div className="about-heading"><p className="eyebrow">A LITTLE ABOUT ME / 02</p><h2>Thoughtful code.<br /><span>Useful details.</span></h2></div>
          <div className="about-copy">
            <p>I’m a software engineering student interested in building things that feel straightforward to use and solid under the hood. I like working across the stack, learning by making, and paying attention to the small details that make an interface feel complete.</p>
            <p>My current work includes small browser apps, practical utilities, and experiments with web development. I’m always open to collaborating on thoughtful projects.</p>
            <div className="skills-block"><p className="eyebrow">TOOLS & SKILLS</p>{skills.map(group => <div className="skill-row" key={group.group}><h3>{group.group}</h3><p>{group.items.join(' · ')}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="content-section contact-section" id="contact">
        <div className="page-width">
          <div className="contact-intro"><p className="eyebrow">HAVE A PROJECT IN MIND? / 03</p><h2>Let’s make<br /><span>something useful.</span></h2><p>Tell me what you’re building, and let’s start a conversation.</p></div>
          <ContactForm onInteract={() => {}} />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <div><a className="wordmark" href="#home">aqib<span>.</span></a><p>Designed and built by {profile.displayName}.</p></div>
          <div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <a className="back-top" href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}