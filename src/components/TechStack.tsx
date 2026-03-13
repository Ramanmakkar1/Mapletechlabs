'use client';
import { useRef, useEffect } from 'react';

const techs = [
  'React', 'Next.js', 'Flutter', 'Swift', 'Kotlin', 'Node.js',
  'Python', 'TensorFlow', 'AWS', 'Google Cloud', 'Kubernetes', 'Solidity',
  'GraphQL', 'PostgreSQL', 'Redis', 'Firebase', 'Stripe', 'WebRTC',
  'TypeScript', 'Docker', 'Terraform', 'OpenAI',
];

export default function TechStack() {
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
    <section ref={ref} id="tech-stack" className="section-padding" style={{ background: '#000', padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Technology Foundation</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
            Built With the Tools<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>of Tomorrow.</span>
          </h2>
        </div>
        <div className="reveal reveal-d1" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
          {techs.map(t => (
            <div key={t}
              style={{ padding: '12px 26px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.45)', transition: '0.3s', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.3)'; e.currentTarget.style.color = '#b4fd83'; e.currentTarget.style.background = 'rgba(180,253,131,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.background = 'transparent'; }}
            >{t}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
