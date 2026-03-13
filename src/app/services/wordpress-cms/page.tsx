'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const stats = [
  { value: '500+', label: 'Sites Launched' },
  { value: '99.9%', label: 'Uptime' },
  { value: 'Sub-2s', label: 'Load Time' },
  { value: '100', label: 'PageSpeed Score' },
];

const services = [
  { icon: '🔧', title: 'Custom WordPress Development', desc: 'Bespoke themes, custom post types, advanced custom fields and plugin development — no page builders, no bloat, just clean code.' },
  { icon: '🛒', title: 'WooCommerce Stores', desc: 'High-conversion WooCommerce stores with custom checkout flows, payment gateways, inventory management and marketing integrations.' },
  { icon: '⚡', title: 'Headless WordPress', desc: 'WordPress as a backend CMS powering a Next.js or Nuxt.js frontend — best-in-class performance with full editorial control.' },
  { icon: '📝', title: 'Custom CMS Development', desc: 'Strapi, Contentful, Sanity and custom-built CMS platforms tailored to your content team\'s exact workflow and structure.' },
  { icon: '🚀', title: 'Website Migrations', desc: 'Risk-free migrations from any platform to WordPress — preserving SEO, redirects, content and design fidelity throughout.' },
  { icon: '🔒', title: 'Maintenance & Security', desc: 'Ongoing updates, security hardening, uptime monitoring, daily backups and performance optimisation for your live site.' },
];

const steps = [
  { num: '01', title: 'Discovery', desc: 'We map your content structure, user journeys, integrations and editorial workflow to define the right CMS architecture before any design work begins.' },
  { num: '02', title: 'Design', desc: 'Wireframes, component library and high-fidelity designs reviewed and approved by your team before development starts. No surprises mid-build.' },
  { num: '03', title: 'Build', desc: 'Custom theme or headless build, plugin integration, performance optimisation, SEO setup and cross-browser testing on real devices.' },
  { num: '04', title: 'Launch', desc: 'Staging environment QA, team training session, production deployment and 30-day post-launch support included on every project.' },
];

const results = [
  { value: '100', label: 'PageSpeed Score', sub: 'Lighthouse performance on launch' },
  { value: '60%', label: 'Traffic Increase', sub: 'avg organic growth in 6 months' },
  { value: '45%', label: 'Conversion Lift', sub: 'CRO-optimised redesigns' },
];

const faqs = [
  { q: 'How long does a custom WordPress site take to build?', a: 'A standard marketing site takes 4–6 weeks. Complex sites with custom functionality, WooCommerce or headless architecture typically take 8–14 weeks. We provide a detailed timeline after discovery.' },
  { q: 'What is the difference between a standard and headless WordPress build?', a: 'Standard WordPress serves pages directly from the CMS. Headless WordPress uses WordPress only as a backend API, with a separate Next.js or Nuxt.js frontend. Headless delivers significantly faster performance and better developer experience, but requires more upfront investment.' },
  { q: 'Will I be able to update my site myself after launch?', a: 'Yes. The entire project is built around giving your team full editorial control. We configure the admin interface specifically for your workflow and run a handover training session before launch.' },
  { q: 'Do you handle hosting, or do I need to arrange that separately?', a: 'We can manage hosting for you on WP Engine, Kinsta or AWS, or deploy to your existing hosting infrastructure. We recommend managed WordPress hosting for optimal performance and security.' },
  { q: 'Can you improve the speed of my existing WordPress site?', a: 'Yes. Performance audits and optimisation are a standalone service. We address hosting, caching, image optimisation, plugin bloat, database queries and Core Web Vitals. Most sites see significant score improvements within 2 weeks.' },
];

export default function WordPressCMSPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <style>{`
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-d1 { transition-delay: 0.1s; }
        .reveal-d2 { transition-delay: 0.2s; }
        .reveal-d3 { transition-delay: 0.3s; }
        .reveal-d4 { transition-delay: 0.4s; }
      `}</style>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', padding: '100px 0 120px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: '30%', left: '5%', width: 600, height: 600, background: 'radial-gradient(ellipse,rgba(180,253,131,0.08) 0%,transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(180,253,131,0.08)', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>WordPress & CMS</span>
            </div>
            <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 24px', maxWidth: 700 }}>
              We Build Sites That <span style={{ color: '#b4fd83' }}>Sell.</span>
            </h1>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
              Custom WordPress sites, headless CMS platforms and content management systems — fast, secure and easy to manage.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section ref={s1} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
              {stats.map((s, i) => (
                <div key={i} className="reveal" style={{ padding: '48px 0', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', paddingLeft: i > 0 ? 40 : 0, transitionDelay: `${i * 0.08}s` }}>
                  <div style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 600, color: '#b4fd83', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section ref={s2} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>WordPress & CMS Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>Fast, secure and editable — everything from marketing sites to headless e-commerce.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {services.map((svc, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '32px 28px', cursor: 'default', transition: '0.3s', transitionDelay: `${i * 0.07}s` }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 24px 60px rgba(0,0,0,0.5)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{svc.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section ref={s3} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Work</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our Website Build Process</h2>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 0 }}>
              <div style={{ position: 'absolute', top: 24, bottom: 24, left: 23, width: 1, background: 'linear-gradient(to bottom, #b4fd83, rgba(180,253,131,0.1))', zIndex: 0 }} />
              {steps.map((step, i) => (
                <div key={i} className="reveal" style={{ display: 'flex', gap: 32, paddingBottom: i < steps.length - 1 ? 48 : 0, position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#b4fd83', color: '#000', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{step.num}</div>
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, margin: 0, maxWidth: 560 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section ref={s4} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Results</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Sites That Perform</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
              {results.map((r, i) => (
                <div key={i} className="reveal" style={{ background: 'rgba(180,253,131,0.04)', border: '1px solid rgba(180,253,131,0.12)', borderRadius: 24, padding: '40px 32px', transitionDelay: `${i * 0.1}s` }}>
                  <div style={{ fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 700, color: '#b4fd83', letterSpacing: '-0.04em', lineHeight: 1 }}>{r.value}</div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#fff', margin: '12px 0 8px' }}>{r.label}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>{r.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section ref={s5} className="section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ maxWidth: 760 }}>
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>FAQ</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {faqs.map((faq, i) => (
                <div key={i} className="reveal" style={{ background: openFaq === i ? 'rgba(180,253,131,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${openFaq === i ? 'rgba(180,253,131,0.2)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 20, overflow: 'hidden', transition: '0.3s', transitionDelay: `${i * 0.06}s` }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'left' }}>{faq.q}</span>
                    <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#b4fd83' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container" style={{ textAlign: 'center' }}>
            <div className="reveal" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(180,253,131,0.08)', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 100, padding: '8px 20px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83' }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Get Started</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.2rem,4vw,4rem)', fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 0 24px' }}>
              Ready to Build Your <span style={{ color: '#b4fd83' }}>Website?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              500+ sites launched. Fast, secure, and built to convert from day one.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                View Portfolio
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['30-day post-launch support', 'Team training included', '100 PageSpeed guaranteed'].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  {t}
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
