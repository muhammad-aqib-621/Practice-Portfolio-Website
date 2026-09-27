import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Github, Linkedin, Printer } from 'lucide-react';
import { profile, projects, skills } from '@/lib/portfolio-data';

export const Route = createFileRoute('/resume')({
  head: () => ({ meta: [
    { title: 'Resume | Muhammad Aqib Subhani' },
    { name: 'description', content: 'Resume draft for Muhammad Aqib Subhani, full-stack developer and software engineering student.' },
  ] }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="resume-shell">
      <div className="resume-toolbar no-print">
        <Link to="/" className="resume-back"><ArrowLeft size={16} /> Portfolio</Link>
        <button className="action-primary" type="button" onClick={() => window.print()}><Printer size={16} /> Print / Save as PDF</button>
      </div>
      <article className="resume-document">
        <header className="resume-header">
          <div><p className="eyebrow">RESUME / 2026</p><h1>{profile.fullName}</h1><p className="resume-role">{profile.role}</p></div>
          <div className="resume-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.github}><Github size={15} /> GitHub</a><a href={profile.linkedin}><Linkedin size={15} /> LinkedIn</a></div>
        </header>
        <section className="resume-section"><h2>Profile</h2><p>Full-stack developer and software engineering student who enjoys building useful web applications with clear interfaces and thoughtful details.</p></section>
        <section className="resume-section"><h2>Selected Projects</h2>{projects.filter(project => project.href).map(project => <div className="resume-project" key={project.slug}><div><h3>{project.name}</h3><p>{project.description}</p></div><a href={project.href!} target="_blank" rel="noreferrer">GitHub repository</a></div>)}</section>
        <section className="resume-section"><h2>Skills</h2><div className="resume-skills">{skills.map(group => <div key={group.group}><h3>{group.group}</h3><p>{group.items.join(' · ')}</p></div>)}</div></section>
        <p className="resume-note">Draft resume. Education details, experience, and contact location can be added as they are provided.</p>
      </article>
    </main>
  );
}