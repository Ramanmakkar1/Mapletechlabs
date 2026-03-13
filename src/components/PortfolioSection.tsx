'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    client: 'FinanceHub',
    title: 'AI Trading Engine',
    category: 'FinTech',
    desc: 'Processing 2M+ transactions daily with real-time ML sentiment analysis and sub-50ms latency.',
    tags: ['Python', 'AWS', 'SageMaker'],
    metric: '2M+',
    metricLabel: 'Daily TXs',
    image: '/images/portfolio-finance.png',
  },
  {
    client: 'MediCore',
    title: 'Telehealth Platform',
    category: 'Healthcare',
    desc: 'HIPAA-compliant platform connecting 100K+ patients with specialists via encrypted HD video.',
    tags: ['React Native', 'WebRTC', 'HealthKit'],
    metric: '100K+',
    metricLabel: 'Patients',
    image: '/images/portfolio-health.png',
  },
  {
    client: 'RetailX',
    title: 'Enterprise Commerce',
    category: 'Retail',
    desc: 'High-scale headless commerce handling 500K concurrent users during peak sale events.',
    tags: ['Next.js', 'Kubernetes', 'Redis'],
    metric: '500K',
    metricLabel: 'Concurrent Users',
    image: '/images/portfolio-retail.png',
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id="portfolio" className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 40, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Case Studies</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Engineering Impact<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>At Scale.</span>
            </h2>
          </div>
          <div className="portfolio-tabs">
            {projects.map((pr, i) => (
              <button key={pr.category} onClick={() => setActive(i)} style={{ padding: '12px 28px', borderRadius: 100, cursor: 'pointer', fontSize: 13, fontWeight: 600, border: active === i ? '1px solid rgba(180,253,131,0.4)' : '1px solid rgba(255,255,255,0.1)', background: active === i ? 'rgba(180,253,131,0.1)' : 'transparent', color: active === i ? '#b4fd83' : 'rgba(255,255,255,0.7)', transition: '0.3s', fontFamily: 'inherit' }}>{pr.category}</button>
            ))}
          </div>
        </div>

        <div className="reveal reveal-d1 portfolio-grid" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 48, overflow: 'hidden', minHeight: 400 }}>
          <div style={{ padding: 'clamp(40px,6vw,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'rgba(255,255,255,0.02)' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>{p.client}</div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>{p.title}</h3>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 480 }}>{p.desc}</p>
            </div>
            <div>
              <div className="portfolio-content-row" style={{ marginBottom: 40 }}>
                <div>
                  <div style={{ fontSize: 52, fontWeight: 600, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{p.metric}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{p.metricLabel}</div>
                </div>
                <div style={{ width: 1, background: 'rgba(255,255,255,0.07)', alignSelf: 'stretch' }} />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'center' }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', padding: '8px 18px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100 }}>{t}</span>)}
                </div>
              </div>
              <a href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 52, padding: '0 28px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                View Full Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>

          {/* Right: real project image */}
          <div style={{ background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,0.06)' }} className="portfolio-visual">
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: 'cover', opacity: 0.7 }}
              />
            </div>
            {/* Overlay gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 60%)' }} />
            {/* Metric badge */}
            <div style={{ position: 'absolute', bottom: 28, right: 28, padding: '12px 20px', background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(180,253,131,0.3)', borderRadius: 100, display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(12px)' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83' }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: '#b4fd83' }}>{p.metric} {p.metricLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
