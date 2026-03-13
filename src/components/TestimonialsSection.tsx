'use client';
import { useRef, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah J.',
    role: 'CEO at FinStream',
    initials: 'SJ',
    color: '#b4fd83',
    stars: 5,
    text: 'Mapletech Labs transformed our legacy system into a high-performance cloud platform. Technical depth is unparalleled — shipped in 10 weeks, zero bugs in production.',
    metric: '4.9★',
    metricLabel: 'App Rating',
    platform: 'Clutch',
  },
  {
    name: 'Michael D.',
    role: 'Head of Product at HealthSync',
    initials: 'MD',
    color: '#7deb3e',
    stars: 5,
    text: 'The level of detail in their product design phase saved us thousands in development costs. A truly strategic partner — they think like founders, not vendors.',
    metric: '100K+',
    metricLabel: 'Users Onboarded',
    platform: 'Google',
  },
  {
    name: 'Alex R.',
    role: 'Founder of RetailX',
    initials: 'AR',
    color: '#b4fd83',
    stars: 5,
    text: "Scaling to 500K concurrent users was seamless with their architecture. Black Friday, not a single crash. I'm never going anywhere else.",
    metric: '500K',
    metricLabel: 'Concurrent Users',
    platform: 'Clutch',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div style={{ display: 'flex', gap: 3 }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#b4fd83" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsSection() {
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
    <section ref={ref} id="testimonials" className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ marginBottom: 80 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Testimonials</div>
          <div className="testimonials-heading-grid">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              Trusted by People<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Changing the World.</span>
            </h2>
            <div>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 24px' }}>
                Hear directly from the founders and CTOs who've shipped with us.
              </p>
              {/* Aggregate rating */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '12px 20px', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, background: 'rgba(180,253,131,0.05)' }}>
                <Stars count={5} />
                <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>4.9</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>500+ reviews on Clutch</span>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-d${i + 1}`}
              style={{ padding: '40px 36px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 36, display: 'flex', flexDirection: 'column', gap: 24, transition: '0.4s', cursor: 'default', background: 'rgba(255,255,255,0.02)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(180,253,131,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Stars + platform */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stars count={t.stars} />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.platform}</span>
              </div>

              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0, flex: 1 }}>&ldquo;{t.text}&rdquo;</p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                {/* Avatar + name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: `rgba(${t.color === '#b4fd83' ? '180,253,131' : '125,235,62'},0.15)`, border: `1px solid ${t.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{t.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{t.role}</div>
                  </div>
                </div>
                {/* Metric */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1 }}>{t.metric}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{t.metricLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
