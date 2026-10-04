import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData.js';
import { SectionHead, stagger, fadeUp } from './ui.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead title="Skills" text="The SEO work I do and the tools I use to measure it." />
        <div className="skills-grid">
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="group-title">{g.group}</h3>
              <motion.ul
                className="skill-list"
                variants={stagger(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
              >
                {g.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="skill glass"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
