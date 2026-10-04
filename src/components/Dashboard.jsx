import { motion } from 'framer-motion';
import { dashboard } from '../data/portfolioData.js';
import { SectionHead, Counter, stagger, fadeUp } from './ui.jsx';

const W = 600;
const H = 200;

function buildPath(data) {
  const max = Math.max(...data);
  const step = W / (data.length - 1);
  return data
    .map((v, i) => `${i === 0 ? 'M' : 'L'}${(i * step).toFixed(1)},${(H - (v / max) * (H - 20) - 10).toFixed(1)}`)
    .join(' ');
}

export default function Dashboard() {
  const line = buildPath(dashboard.trend);
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <section id="dashboard" className="section">
      <div className="container">
        <SectionHead
          title="How I Read Search Performance"
          text="An illustration of the metrics I monitor in Search Console and Analytics."
        />
        <div className="dash glass">
          <div className="dash-top">
            <span>Organic performance</span>
            <span className="pill pill-warn">Demo visualization, not real data</span>
          </div>

          <motion.ul
            className="metrics"
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {dashboard.metrics.map((m) => (
              <motion.li key={m.label} variants={fadeUp} className="metric">
                <span>{m.label}</span>
                <strong><Counter to={m.value} decimals={m.decimals} suffix={m.suffix} /></strong>
              </motion.li>
            ))}
          </motion.ul>

          <svg
            className="chart"
            viewBox={`0 0 ${W} ${H + 24}`}
            role="img"
            aria-label="Sample line chart showing an upward trend in organic clicks over twelve months"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="line-grad" x1="0" x2="1">
                <stop offset="0" stopColor="#3b82f6" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#6366f1" stopOpacity="0.35" />
                <stop offset="1" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[0.25, 0.5, 0.75].map((g) => (
              <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} className="grid-line" />
            ))}
            <motion.path
              d={area}
              fill="url(#area-grad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.path
              d={line}
              fill="none"
              stroke="url(#line-grad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
            {dashboard.months.map((m, i) => (
              <text key={i} x={(i * W) / (dashboard.months.length - 1)} y={H + 18} className="axis" textAnchor="middle">{m}</text>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
