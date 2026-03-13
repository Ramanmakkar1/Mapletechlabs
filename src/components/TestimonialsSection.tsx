'use client';
import { useRef, useEffect } from 'react';

const testimonials = [
  { name: 'Sarah J.', role: 'CEO at FinStream', text: 'Mapletech Labs transformed our legacy system into a high-performance cloud platform. Technical depth is unparalleled — shipped in 10 weeks, zero bugs in production.', metric: '4.9★', metricLabel: 'App Rating' },
  { name: 'Michael D.', role: 'Head of Product at HealthSync', text: 'The level of detail in their product design phase saved us thousands in development costs. A truly strategic partner — they think like founders, not vendors.', metric: '100K+', metricLabel: 'Users Onboarded' },
  { name: 'Alex R.', role: 'Founder of RetailX', text: 'Scaling to 500K concurrent users was seamless with their architecture. Black Friday, not a single crash. I\'m never going anywhere else.', metric: '500K', metricLabel: 'Concurrent Users' },
];

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
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
              Hear directly from the founders and CTOs who've shipped with us.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal reveal-d${i + 1}`}
              style={{ padding: '48px 40px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 36, display: 'flex', flexDirection: 'column', gap: 32, transition: '0.4s', cursor: 'default', background: 'rgba(255,255,255,0.02)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="rgba(180,253,131,0.2)">
                <path d="M14.017 21v-3c0-1.105.895-2 2-2h3v-6c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2h-2V7h10v14h-5zM2.017 21v-3c0-1.105.895-2 2-2h3V10c0-1.105-.895-2-2-2h-4V21h1z" />
              </svg>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, margin: 0, flex: 1 }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <div style={{ width: 1, height: 28, background: '#b4fd83', marginBottom: 12 }} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 26, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em' }}>{t.metric}</div>
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
