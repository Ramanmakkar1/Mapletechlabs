'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const words = ['Mobile Apps', 'Web Platforms', 'AI Systems', 'SaaS Products', 'Fintech Tools'];

const codeLines = [
  { indent: 0, tokens: [{ t: 'const ', c: '#b4fd83' }, { t: 'app ', c: '#fff' }, { t: '= ', c: 'rgba(255,255,255,0.7)' }, { t: 'await ', c: '#b4fd83' }, { t: 'build(', c: '#fff' }, { t: '{', c: 'rgba(255,255,255,0.7)' }] },
  { indent: 1, tokens: [{ t: 'stack: ', c: 'rgba(255,255,255,0.5)' }, { t: '"Next.js + AI"', c: '#b4fd83' }, { t: ',', c: 'rgba(255,255,255,0.3)' }] },
  { indent: 1, tokens: [{ t: 'deploy: ', c: 'rgba(255,255,255,0.5)' }, { t: '"AWS"', c: '#b4fd83' }, { t: ',', c: 'rgba(255,255,255,0.3)' }] },
  { indent: 1, tokens: [{ t: 'timeline: ', c: 'rgba(255,255,255,0.5)' }, { t: '"8 weeks"', c: '#b4fd83' }, { t: ',', c: 'rgba(255,255,255,0.3)' }] },
  { indent: 1, tokens: [{ t: 'price: ', c: 'rgba(255,255,255,0.5)' }, { t: '"Fixed"', c: '#b4fd83' }] },
  { indent: 0, tokens: [{ t: '});', c: 'rgba(255,255,255,0.7)' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(255,255,255,0.2)' }, { t: '✓ Zero bugs in production', c: 'rgba(255,255,255,0.25)' }] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(255,255,255,0.2)' }, { t: '✓ On time, on budget', c: 'rgba(255,255,255,0.25)' }] },
  { indent: 0, tokens: [{ t: '// ', c: 'rgba(255,255,255,0.2)' }, { t: '✓ IP 100% yours', c: 'rgba(255,255,255,0.25)' }] },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useGSAP(() => {
    gsap.from(['.h-badge', '.h-h1', '.h-p', '.h-btns', '.h-stats'], {
      opacity: 0, y: 30, stagger: 0.1, duration: 1, ease: 'power3.out', delay: 0.15,
    });
    gsap.from('.h-code-panel', {
      opacity: 0, x: 40, duration: 1.2, ease: 'power3.out', delay: 0.4,
    });
  }, { scope: ref });

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      setTimeout(() => { setWordIndex(i => (i + 1) % words.length); setVisible(true); }, 380);
    };
    const id = setInterval(cycle, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} style={{ background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: 80 }}>
      {/* Grid bg */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />
      {/* Glow left */}
      <div style={{ position: 'absolute', top: '5%', left: '-10%', width: 700, height: 700, background: 'radial-gradient(circle, rgba(180,253,131,0.06) 0%, transparent 65%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
      {/* Glow right */}
      <div style={{ position: 'absolute', top: '20%', right: '-5%', width: 600, height: 600, background: 'radial-gradient(circle, rgba(180,253,131,0.07) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div className="cb-container hero-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* LEFT — copy */}
        <div>
          {/* Badge */}
          <div className="h-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(180,253,131,0.07)', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 48 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 10px #b4fd83' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Available for New Projects</span>
          </div>

          {/* Headline */}
          <h1 className="h-h1" style={{ fontSize: 'clamp(3rem, 6vw, 6.5rem)', fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 0.95, margin: '0 0 36px' }}>
            <span style={{ color: '#fff' }}>We Build</span><br />
            <span style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #b4fd83 0%, #7deb3e 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              minWidth: '10px',
            }}>
              {words[wordIndex]}
            </span><br />
            <span style={{ color: 'rgba(255,255,255,0.18)' }}>That Scale.</span>
          </h1>

          {/* Sub */}
          <p className="h-p" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: 'rgba(255,255,255,0.75)', maxWidth: 480, lineHeight: 1.8, margin: '0 0 52px' }}>
            Mapletech Labs engineers world-class digital products for companies ready to lead their industry — on time, on budget, every time.
          </p>

          {/* Buttons */}
          <div className="h-btns" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 72 }}>
            <Link href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 58, padding: '0 36px', borderRadius: 100, background: 'linear-gradient(135deg, #b4fd83, #7deb3e)', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s', boxShadow: '0 0 0 0 rgba(180,253,131,0)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 0 0 rgba(180,253,131,0)'; }}
            >
              Start a Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/services/mobile-app-development" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 58, padding: '0 36px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s', background: 'rgba(255,255,255,0.03)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
            >
              View Services
            </Link>
          </div>

          {/* Stats */}
          <div className="h-stats" style={{ display: 'flex', gap: 40, flexWrap: 'wrap', paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[['500+', 'Projects'], ['150+', 'Clients'], ['99%', 'Satisfaction'], ['8wk', 'MVP']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — code panel */}
        <div className="h-code-panel" style={{ position: 'relative' }}>
          {/* Outer glow ring */}
          <div style={{ position: 'absolute', inset: -1, borderRadius: 28, background: 'linear-gradient(135deg, rgba(180,253,131,0.2), rgba(180,253,131,0.04), rgba(180,253,131,0.15))', padding: 1 }}>
            <div style={{ width: '100%', height: '100%', borderRadius: 27, background: '#000' }} />
          </div>

          {/* Code window */}
          <div style={{ position: 'relative', background: '#050505', borderRadius: 28, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)' }}>
            {/* Title bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', gap: 7 }}>
                {['#ff5f57', '#ffbd2e', '#28c941'].map(c => <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, opacity: 0.8 }} />)}
              </div>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontWeight: 500, marginLeft: 8, fontFamily: 'monospace' }}>mapletechlabs/project.ts</span>
            </div>

            {/* Code */}
            <div style={{ padding: '28px 28px 28px 0', fontFamily: 'monospace', fontSize: 14, lineHeight: 1.8 }}>
              {codeLines.map((line, li) => (
                <div key={li} style={{ display: 'flex', alignItems: 'baseline' }}>
                  <span style={{ width: 48, textAlign: 'right', paddingRight: 20, color: 'rgba(255,255,255,0.12)', fontSize: 12, userSelect: 'none', flexShrink: 0 }}>{li + 1}</span>
                  <span style={{ paddingLeft: line.indent * 22 }}>
                    {line.tokens.map((tok, ti) => (
                      <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
                    ))}
                  </span>
                </div>
              ))}

              {/* Blinking cursor */}
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <span style={{ width: 48, textAlign: 'right', paddingRight: 20, color: 'rgba(255,255,255,0.12)', fontSize: 12, userSelect: 'none', flexShrink: 0 }}>{codeLines.length + 1}</span>
                <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#b4fd83', animation: 'blink 1.1s step-end infinite', verticalAlign: 'text-bottom' }} />
              </div>
            </div>

            {/* Bottom status bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(180,253,131,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 6px #b4fd83' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Build Successful</span>
              </div>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>TypeScript · Next.js 16</span>
            </div>
          </div>

          {/* Floating badge — "NDA signed" */}
          <div style={{ position: 'absolute', top: -16, right: -16, background: '#000', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.08em', textTransform: 'uppercase' }}>NDA Signed</span>
          </div>

          {/* Floating badge — "Zero bugs" */}
          <div style={{ position: 'absolute', bottom: -16, left: -16, background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.6)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>0 Production Bugs</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:1024px){ .h-code-panel { display: none !important; } }
      `}</style>
    </section>
  );
}
