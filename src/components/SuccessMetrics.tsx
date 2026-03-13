'use client';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { target: 500, suffix: '+', label: 'Systems Engineered', desc: 'Apps, platforms & enterprise tools shipped globally' },
  { target: 150, suffix: '+', label: 'Enterprise Partners', desc: 'Serving Fortune 500s to Series A startups worldwide' },
  { target: 99,  suffix: '%', label: 'Client Satisfaction', desc: 'Measured across 500+ post-launch surveys' },
  { target: 12,  suffix: '+', label: 'Global Offices',     desc: 'Engineering hubs across 4 continents' },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let current = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ s, index, active }: { s: typeof stats[0]; index: number; active: boolean }) {
  const count = useCounter(s.target, 1600, active);
  return (
    <div
      className={`reveal reveal-d${index + 1}`}
      style={{
        padding: '52px 44px',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '24px',
        background: 'rgba(255,255,255,0.02)',
        position: 'relative',
        overflow: 'hidden',
        transition: '0.4s',
        cursor: 'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(180,253,131,0.05)'; e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
    >
      <div style={{ width: 28, height: 3, background: '#b4fd83', borderRadius: 2, marginBottom: 36 }} />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 16 }}>
        <span style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em' }}>
          {count}
        </span>
        <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)', fontWeight: 700, color: '#b4fd83' }}>{s.suffix}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 10 }}>{s.label}</div>
      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>{s.desc}</div>
    </div>
  );
}

export default function SuccessMetrics() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          setActive(true);
        }
      }),
      { threshold: 0.2 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-padding" style={{ background: '#000', padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 80, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>By The Numbers</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              The Results<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Speak Loudly.</span>
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', maxWidth: 360, lineHeight: 1.7, margin: 0 }}>
            A decade of engineering excellence, measured in outcomes — not outputs.
          </p>
        </div>

        <div className="stats-grid" style={{ gap: 2 }}>
          {stats.map((s, i) => (
            <StatCard key={s.label} s={s} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
