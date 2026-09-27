import emailjs from '@emailjs/browser';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/portfolio-data';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm({ onInteract }: { onInteract: () => void }) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const serviceId = import.meta.env['VITE_EMAILJS_SERVICE_ID'];
  const templateId = import.meta.env['VITE_EMAILJS_TEMPLATE_ID'];
  const publicKey = import.meta.env['VITE_EMAILJS_PUBLIC_KEY'];
  const formReady = Boolean(serviceId && templateId && publicKey);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onInteract();
    if (!formReady) { setStatus('error'); return; }
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const formData = new FormData(form);
      await emailjs.send(serviceId, templateId, {
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        reply_to: String(formData.get('email') ?? ''),
        project_type: String(formData.get('project_type') ?? ''),
        budget: String(formData.get('budget') ?? ''),
        message: String(formData.get('message') ?? ''),
      }, {
        publicKey,
      });
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <div id="contact-form" className="mt-24 max-w-3xl border-t border-border pt-10">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h3 className="font-display text-3xl">Tell me what you’re building.</h3>
        <span className="micro text-muted-foreground">INQUIRY / 01</span>
      </div>
      <form className="grid gap-6 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="field micro text-muted-foreground">YOUR NAME
          <input required name="name" type="text" className="field-input" placeholder="Your name" autoComplete="name" />
        </label>
        <label className="field micro text-muted-foreground">EMAIL ADDRESS
          <input required name="email" type="email" className="field-input" placeholder="you@example.com" autoComplete="email" />
        </label>
        <label className="field micro text-muted-foreground">PROJECT TYPE
          <select name="project_type" defaultValue="" className="field-input field-select">
            <option value="" disabled>Choose a project type</option>
            <option>Website</option>
            <option>Web application</option>
            <option>Mobile app</option>
            <option>Other</option>
          </select>
        </label>
        <label className="field micro text-muted-foreground">BUDGET RANGE (OPTIONAL)
          <select name="budget" defaultValue="" className="field-input field-select">
            <option value="">Select a range</option>
            <option>To discuss</option>
            <option>Under $500</option>
            <option>$500 – $2,000</option>
            <option>$2,000+</option>
          </select>
        </label>
        <label className="field micro text-muted-foreground sm:col-span-2">YOUR MESSAGE
          <textarea required name="message" rows={4} className="field-input" placeholder="A little about your idea..." />
        </label>
        <div className="sm:col-span-2">
          <Button type="submit" className="action-primary" disabled={status === 'sending'}>
            {status === 'sending' ? <><Loader2 size={15} className="animate-spin" /> Sending…</> : <>Send inquiry <ArrowRight size={15} /></>}
          </Button>
          {status === 'success' && <p className="form-status form-status-success"><Check size={14} /> Message sent — thanks! I’ll reply at the email you left, usually within a day or two.</p>}
          {status === 'error' && !formReady && <p className="form-status form-status-error">Email delivery isn’t configured yet. Please email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a> instead.</p>}
          {status === 'error' && formReady && <p className="form-status form-status-error">Something went wrong sending that. Please try again, or email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>}
        </div>
      </form>
    </div>
  );
}