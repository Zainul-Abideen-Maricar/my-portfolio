import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { contact } from '../data/portfolioData.js';
import { Reveal } from './ui.jsx';

const initial = { name: '', email: '', subject: '', message: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (at least 3 characters).';
  if (v.message.trim().length < 10) e.message = 'Write a message of at least 10 characters.';
  return e;
}

const links = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin },
];

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    // No backend or API keys in the frontend: this opens the visitor's email app with the message filled in.
    // To send from the page instead, connect a form service (see README) and replace this block.
    const body = `${values.message}\n\nFrom: ${values.name} (${values.email})`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setValues(initial);
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {props.area ? (
        <textarea id={name} name={name} rows="5" value={values[name]} onChange={onChange} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />
      ) : (
        <input id={name} name={name} type={props.type || 'text'} value={values[name]} onChange={onChange} aria-invalid={!!errors[name]} aria-describedby={`${name}-err`} />
      )}
      <p id={`${name}-err`} className="error" role="alert">{errors[name]}</p>
    </div>
  );

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <Reveal>
          <h2>Let's Work Together</h2>
          <p className="contact-text">
            Have an SEO or digital marketing opportunity? I'd be happy to connect and discuss how I can contribute.
          </p>
          <ul className="contact-links">
            {links.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  <span className="icon-box"><Icon size={20} aria-hidden="true" /></span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="glass form" onSubmit={onSubmit} noValidate>
            {field('name', 'Name')}
            {field('email', 'Email', { type: 'email' })}
            {field('subject', 'Subject')}
            {field('message', 'Message', { area: true })}
            <motion.button type="submit" className="btn btn-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Send size={18} aria-hidden="true" /> Send Message
            </motion.button>
            <AnimatePresence>
              {sent && (
                <motion.p className="success" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <CheckCircle2 size={18} aria-hidden="true" /> Your email app should open with the message ready to send.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
