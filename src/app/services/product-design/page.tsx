'use client';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: '500+', label: 'Screens Designed' },
  { value: '4.8★', label: 'Avg Usability Score' },
  { value: '40%', label: 'Avg Conversion Lift' },
  { value: '200+', label: 'Design Systems' },
];

const largeServices = [
  {
    title: 'UX Research & Strategy',
    tag: 'Research',
    desc: 'User interviews, competitive analysis, jobs-to-be-done mapping and validated product roadmaps before a single pixel is moved.',
    chips: ['Figma', 'Maze', 'Hotjar', 'Miro', 'UserTesting'],
  },
  {
    title: 'UI Design & Prototyping',
    tag: 'Interface Design',
    desc: 'High-fidelity responsive interfaces with interactive prototypes, micro-animations, and developer-ready design systems.',
    chips: ['Figma', 'Framer', 'Lottie', 'Storybook', 'Zeplin'],
  },
];

const smallServices = [
  { title: 'Mobile App Design', tag: 'iOS / Android', desc: 'Native-feel mobile interfaces designed for thumb-friendly interaction and platform conventions.' },
  { title: 'Design Systems', tag: 'Systems', desc: 'Scalable component libraries and token-based design systems your engineering team will love.' },
  { title: 'Brand Identity', tag: 'Branding', desc: 'Logo, typography, colour systems and brand guidelines that make you instantly recognisable.' },
  { title: 'Accessibility Audits', tag: 'a11y', desc: 'WCAG 2.2 AA compliance audits with a prioritised remediation plan for every finding.' },
];

const steps = [
  {
    num: '01',
    title: 'Research',
    desc: 'User interviews, heuristic evaluations, competitor teardowns and analytics review. We build empathy before we build anything else.',
    deliverables: ['User Interview Summaries', 'Competitive Matrix', 'Heuristic Report', 'Analytics Audit'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Jobs-to-be-done mapping, information architecture and a prioritised product roadmap aligned to your business metrics.',
    deliverables: ['JTBD Map', 'IA Diagram', 'Product Roadmap', 'Success Metrics'],
    duration: '1 week',
  },
  {
    num: '03',
    title: 'Wireframes',
    desc: 'Low and mid-fidelity wireframes for every key user flow — validated with real users through moderated usability tests before visual design begins.',
    deliverables: ['Lo-Fi Wireframes', 'User Flow Diagrams', 'Usability Test Report', 'Iteration Log'],
    duration: '1–3 weeks',
  },
  {
    num: '04',
    title: 'Visual Design',
    desc: 'Pixel-perfect high-fidelity UI with your brand applied at every level. Interactive Figma prototypes for stakeholder sign-off.',
    deliverables: ['Hi-Fi Screens', 'Design System', 'Interactive Prototype', 'Responsive Variants'],
    duration: '2–4 weeks',
  },
  {
    num: '05',
    title: 'Handoff',
    desc: 'Developer-ready Figma files with auto-layout, annotated specs, asset exports and a Storybook component library. Zero ambiguity in build.',
    deliverables: ['Figma Handoff', 'Zeplin Specs', 'Storybook', 'Motion Guidelines'],
    duration: '1 week',
  },
];

const techCategories = [
  { label: 'Design', chips: ['Figma', 'Framer', 'Sketch', 'Adobe XD', 'Principle'] },
  { label: 'Research', chips: ['Maze', 'Hotjar', 'FullStory', 'Optimal Workshop'] },
  { label: 'Prototyping', chips: ['Framer', 'ProtoPie', 'InVision', 'Zeplin'] },
  { label: 'Motion', chips: ['Lottie', 'Rive', 'After Effects', 'Spline'] },
];

const industries = [
  { icon: '💳', title: 'FinTech', desc: 'Clarity-first dashboards, onboarding flows and trust-building interfaces for financial products.' },
  { icon: '🏥', title: 'HealthTech', desc: 'Accessible, HIPAA-aware interfaces that reduce cognitive load for patients and clinicians alike.' },
  { icon: '📱', title: 'Consumer Apps', desc: 'Habit-forming, delightful mobile experiences designed to maximise retention and NPS.' },
  { icon: '☁️', title: 'SaaS', desc: 'Complex feature surfaces made simple through progressive disclosure and strong IA.' },
  { icon: '🛍️', title: 'E-Commerce', desc: 'Conversion-optimised product pages, checkout flows and personalisation systems.' },
  { icon: '🏢', title: 'Enterprise', desc: 'Data-dense internal tools and dashboards that empower rather than overwhelm.' },
];

// ─── REVEAL HOOK ─────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function ProductDesignPage() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useReveal() as React.RefObject<HTMLElement>;
  const servicesRef = useReveal() as React.RefObject<HTMLElement>;
  const processRef = useReveal() as React.RefObject<HTMLElement>;
  const techRef = useReveal() as React.RefObject<HTMLElement>;
  const industriesRef = useReveal() as React.RefObject<HTMLElement>;
  const ctaRef = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: '100px 0 120px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {/* Grid background */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          {/* Glow */}
          <div style={{ position: 'absolute', top: '20%', right: '10%', width: 700, height: 600, background: 'radial-gradient(ellipse,rgba(180,253,131,0.07) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 860 }}>
              {/* Badge */}
              <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(180,253,131,0.08)', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Product Design</span>
              </div>

              <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(3rem,6vw,6rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
                Design That Converts<br /><span style={{ color: '#b4fd83' }}>Users to Customers.</span>
              </h1>

              <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, maxWidth: 620, margin: '0 0 44px' }}>
                UX research, product strategy, and pixel-perfect interfaces — designed to delight users and drive measurable business outcomes.
              </p>

              <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.35)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  Start Your Design
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STATS STRIP
        ═══════════════════════════════════════ */}
        <section ref={statsRef} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ padding: '52px 40px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3.2rem)', fontWeight: 600, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 10 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT WE BUILD
        ═══════════════════════════════════════ */}
        <section ref={servicesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>What We Build</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Research-Led.<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Pixel-Perfect.</span>
              </h2>
            </div>

            {/* Large cards */}
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              {largeServices.map(s => (
                <div key={s.title} style={{ padding: '48px 44px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 32, background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#b4fd83,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b4fd83', background: 'rgba(180,253,131,0.1)', padding: '5px 14px', borderRadius: 100, marginBottom: 24, display: 'inline-block' }}>{s.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.4rem,2.2vw,2rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>{s.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {s.chips.map(c => <span key={c} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100 }}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Small cards */}
            <div className="reveal reveal-d2" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
              {smallServices.map(s => (
                <div key={s.title} style={{ padding: '32px 28px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, background: 'rgba(255,255,255,0.02)', position: 'relative', overflow: 'hidden', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#b4fd83,transparent)' }} />
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16, display: 'block' }}>{s.tag}</span>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PROCESS
        ═══════════════════════════════════════ */}
        <section ref={processRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 80 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Our Process</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                From Research<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>to Handoff.</span>
              </h2>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 2, background: 'linear-gradient(to bottom,rgba(180,253,131,0.5),rgba(180,253,131,0.05))', zIndex: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {steps.map((step, i) => (
                  <div key={step.num} className={`reveal reveal-d${i + 1}`} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 32, alignItems: 'start', padding: '32px 0' }}>
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '2px solid rgba(180,253,131,0.4)', background: 'rgba(180,253,131,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#b4fd83', flexShrink: 0, position: 'relative', zIndex: 1 }}>{step.num}</div>
                    <div style={{ padding: '32px 40px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 28, background: 'rgba(255,255,255,0.02)', transition: 'all 0.35s ease' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.boxShadow = ''; }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                        <h3 style={{ fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>{step.title}</h3>
                        <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', background: 'rgba(180,253,131,0.1)', padding: '5px 14px', borderRadius: 100, whiteSpace: 'nowrap' as const }}>{step.duration}</span>
                      </div>
                      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 24 }}>{step.desc}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.75)', padding: '6px 14px', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 100 }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TECH STACK
        ═══════════════════════════════════════ */}
        <section ref={techRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, gap: 40, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Technology</div>
                <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                  The Tools Behind<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Your Product.</span>
                </h2>
              </div>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 360, lineHeight: 1.75, margin: 0 }}>
                Industry-leading design tools chosen for collaboration, fidelity and developer handoff.
              </p>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
              {techCategories.map(cat => (
                <div key={cat.label} style={{ padding: '36px 36px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 28, background: 'rgba(255,255,255,0.02)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.02)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}>
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b4fd83', marginBottom: 20 }}>{cat.label}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {cat.chips.map(c => (
                      <span key={c} style={{ padding: '7px 16px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)', transition: '0.25s', cursor: 'default' }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.35)'; e.currentTarget.style.color = '#b4fd83'; e.currentTarget.style.background = 'rgba(180,253,131,0.06)'; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
                      >{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            INDUSTRIES
        ═══════════════════════════════════════ */}
        <section ref={industriesRef} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 64 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Industries</div>
              <h2 style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
                Design That Works<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Everywhere.</span>
              </h2>
            </div>
            <div className="reveal reveal-d1" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {industries.map((ind, i) => (
                <div key={ind.title} className={`reveal-d${i + 1}`} style={{ padding: '36px 32px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 24, background: 'rgba(255,255,255,0.02)', transition: 'all 0.35s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>{ind.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0 }}>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BOTTOM CTA
        ═══════════════════════════════════════ */}
        <section ref={ctaRef} style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'radial-gradient(ellipse,rgba(180,253,131,0.09) 0%,transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Ready to Design?</div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.5rem,5vw,5.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 28px' }}>
              Ready to Design<br /><span style={{ color: '#b4fd83' }}>Your Product?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 18, color: 'rgba(255,255,255,0.38)', maxWidth: 500, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Share your brief and we&apos;ll return a scoped proposal with a design sprint plan within 48 hours.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get a Free Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                View Our Portfolio
              </Link>
            </div>
            {/* Trust strip */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Research-First Process', 'WCAG AA Compliant', '48hr Proposal', 'NDA on Day 1'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
