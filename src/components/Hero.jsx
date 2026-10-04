import { motion } from 'framer-motion';
import { ArrowDown, Mail, TrendingUp, Search } from 'lucide-react';
import { profile } from '../data/portfolioData.js';
import { fadeUp, stagger } from './ui.jsx';

const words = profile.heroHeading.split(' ');
const wordVariant = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const float = (d) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: d },
});

export default function Hero() {
  const initials = profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('');

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="hero-hello">Hi, I'm {profile.name}</motion.p>

          <motion.h1 variants={stagger(0.07)} aria-label={profile.heroHeading}>
            {words.map((w, i) => (
              <motion.span key={i} variants={wordVariant} className="word" aria-hidden="true">
                {w}&nbsp;
              </motion.span>
            ))}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero-text">{profile.heroText}</motion.p>

          <motion.div variants={fadeUp} className="hero-badges">
            <span className="pill pill-accent">{profile.title}</span>
            <span className="pill">{profile.experienceLabel}</span>
          </motion.div>

          <motion.div variants={fadeUp} className="hero-cta">
            <motion.a href="#projects" className="btn btn-primary" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              View My Work <ArrowDown size={18} />
            </motion.a>
            <motion.a href="#contact" className="btn btn-ghost" whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Mail size={18} /> Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Visual: a search result card with the profile in it */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="serp glass">
            <div className="serp-bar">
              <Search size={16} aria-hidden="true" />
              <span>seo specialist for my website</span>
            </div>
            <div className="serp-result">
              <div className="avatar">
                {profile.image ? <img src={profile.image} alt={profile.imageAlt} loading="eager" /> : <span aria-hidden="true">{initials}</span>}
              </div>
              <div>
                <p className="serp-url">yourwebsite.com</p>
                <p className="serp-title">{profile.name} - SEO Specialist</p>
                <p className="serp-desc">{profile.experienceLabel}. Keyword research, on-page, technical and off-page SEO.</p>
              </div>
            </div>
            <div className="serp-ghost" aria-hidden="true"><i /><i /></div>
          </div>

          <motion.div className="chip chip-a glass" {...float(0)}>
            <TrendingUp size={16} aria-hidden="true" /> Rank #1 (demo)
          </motion.div>
          <motion.div className="chip chip-b glass" {...float(1.2)}>Search Console</motion.div>
          <motion.div className="chip chip-c glass" {...float(2.2)}>Keyword Research</motion.div>
        </motion.div>
      </div>
    </section>
  );
}
