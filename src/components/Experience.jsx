import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData.js';
import { SectionHead, stagger, fadeUp } from './ui.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead title="Experience" />
        <div className="timeline">
          <motion.span
            className="timeline-line"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
          {experience.map((job) => (
            <motion.article
              key={job.role}
              className="job"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="job-dot" aria-hidden="true" />
              <div className="glass job-card">
                <header>
                  <h3>{job.role}</h3>
                  <p>{job.company} <span className="pill">{job.period}</span></p>
                </header>
                <motion.ul
                  className="job-points"
                  variants={stagger(0.06)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                >
                  {job.points.map((p) => (
                    <motion.li key={p} variants={fadeUp}>{p}</motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
