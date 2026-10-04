import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolioData.js';
import { SectionHead, stagger, fadeUp } from './ui.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          title="Projects & Work"
          text="SEO work by category. These cards are placeholders: replace them with your own projects in portfolioData.js."
        />
        <motion.ul
          className="card-grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {projects.map((p, i) => (
            <motion.li key={p.category} variants={fadeUp} className="card glass project" whileHover={{ y: -6 }}>
              <div className={`project-art art-${i % 3}`} aria-hidden="true" />
              <p className="project-cat">{p.category}</p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <ul className="tag-list">
                {p.tags.map((t) => <li key={t} className="pill">{t}</li>)}
              </ul>
              {p.link && (
                <a className="link" href={p.link} target="_blank" rel="noopener noreferrer">
                  View project <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
