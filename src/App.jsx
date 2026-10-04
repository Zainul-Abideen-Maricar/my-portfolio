import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

// Below-the-fold sections are lazy loaded to keep the first paint light.
const Projects = lazy(() => import('./components/Projects.jsx'));
const Dashboard = lazy(() => import('./components/Dashboard.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

export default function App() {
  return (
    // reducedMotion="user" disables transform animations for people who ask for less motion.
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="bg-glow" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Suspense fallback={<div className="section-fallback" aria-hidden="true" />}>
          <Projects />
          <Dashboard />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
