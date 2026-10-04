import { Mail, Linkedin, Github } from 'lucide-react';
import { profile, contact } from '../data/portfolioData.js';

const social = [
  { icon: Linkedin, label: 'LinkedIn', href: contact.linkedin },
  { icon: Mail, label: 'Email', href: `mailto:${contact.email}` },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-title">{profile.title}</p>
        </div>
        <ul className="social">
          {social.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="copy">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
