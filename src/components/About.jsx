import { motion } from 'framer-motion';
import { profile, stats, aboutTags } from '../data/portfolioData.js';
import { Reveal, SectionHead, stagger, fadeUp } from './ui.jsx';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead title="About Me" />
        <div className="about-grid">
          <Reveal className="about-copy">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
            <ul className="tag-list" aria-label="Areas of experience">
              {aboutTags.map((t) => <li key={t} className="pill">{t}</li>)}
            </ul>
          </Reveal>

          <motion.div
            className="stats"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="stat glass" whileHover={{ y: -4 }}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
