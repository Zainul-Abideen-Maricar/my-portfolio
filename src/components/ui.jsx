import { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView, useReducedMotion } from 'framer-motion';

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const stagger = (gap = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap } },
});

/** Scroll-reveal wrapper: animates once when it enters the viewport. */
export function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ title, text }) {
  return (
    <Reveal className="section-head">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

/** Counts up to a number when scrolled into view. */
export function Counter({ to, decimals = 0, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    if (reduce) {
      setValue(to);
      return undefined;
    }
    const controls = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: setValue });
    return () => controls.stop();
  }, [inView, to, reduce]);

  const text = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return <span ref={ref}>{text}{suffix}</span>;
}
