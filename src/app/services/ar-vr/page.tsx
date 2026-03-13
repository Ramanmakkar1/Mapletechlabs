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
  { value: '60+', label: 'XR Apps Launched' },
  { value: 'Meta', label: 'Quest Partner' },
  { value: 'WebXR', label: 'Certified' },
  { value: '4.8★', label: 'User Rating' },
];

const services = [
  { icon: '📱', title: 'Mobile AR', desc: 'ARKit and ARCore experiences for iOS and Android — product visualisation, navigation overlays, face filters and interactive AR campaigns.' },
  { icon: '🥽', title: 'VR Applications', desc: 'Meta Quest, PCVR and standalone headset applications for training, simulation, entertainment and enterprise use cases.' },
  { icon: '🌐', title: 'WebXR Experiences', desc: 'Browser-based AR and VR that works without an app download — accessible on any device with a standards-compliant browser.' },
  { icon: '🔮', title: 'Spatial Computing', desc: 'Apple Vision Pro applications and spatial interfaces that blend digital content seamlessly with the physical world.' },
  { icon: '🏭', title: 'Industrial AR', desc: 'Enterprise AR for manufacturing, maintenance and field service — step-by-step overlay instructions, remote assistance and quality inspection.' },
  { icon: '📣', title: 'AR Marketing', desc: 'Snapchat Lenses, Instagram filters, AR product try-ons and immersive ad campaigns that drive engagement and conversion.' },
];

const steps = [
  { num: '01', title: 'Concept', desc: 'We define the XR experience — use case, platform selection, target hardware and the specific real-world problem or opportunity being addressed.' },
  { num: '02', title: '3D Design', desc: 'Environment design, 3D asset creation, interaction design and UX prototyping. We build the visual and spatial language before writing a line of code.' },
  { num: '03', title: 'Development', desc: 'Unity or Unreal Engine builds, ARKit/ARCore integration, WebXR implementation — engineered for performance on target hardware and network conditions.' },
  { num: '04', title: 'Deploy', desc: 'App store submission, enterprise MDM deployment or web hosting — plus performance monitoring, user feedback loops and iterative updates post-launch.' },
];

const results = [
  { value: '10x', label: 'User Engagement', sub: 'vs. standard 2D equivalents' },
  { value: '85%', label: 'Training Retention', sub: 'industrial AR vs. manual training' },
  { value: '3x', label: 'Commerce Conversion', sub: 'AR product try-on vs. static images' },
];

const faqs = [
  { q: 'What platforms do you build XR experiences for?', a: 'We develop for iOS (ARKit), Android (ARCore), Meta Quest 2/3/Pro, Apple Vision Pro, HTC Vive, Valve Index, web browsers (WebXR) and Snapchat/Instagram AR filters. Platform selection is guided by your audience and use case.' },
  { q: 'Do users need a headset to experience your AR products?', a: 'Not necessarily. Mobile AR works on any modern iPhone or Android device using the camera. WebXR works in a browser. VR and spatial computing experiences require headsets, but we can build progressive experiences that scale across device capabilities.' },
  { q: 'How long does an AR/VR project take to build?', a: 'Simple mobile AR filters take 2–4 weeks. Full mobile AR apps typically 8–16 weeks. Enterprise VR training simulations 12–20 weeks. Apple Vision Pro applications 10–18 weeks. Timeline depends heavily on 3D asset complexity and interaction depth.' },
  { q: 'Can you create the 3D assets and environments, or do we provide them?', a: 'We have an in-house 3D team that can create assets from scratch, work from reference images, or optimise assets you already have. We handle full 3D production including modelling, texturing, rigging and animation.' },
  { q: 'What is the ROI case for investing in AR/VR?', a: 'The strongest ROI cases are AR commerce (reduced returns, higher conversion), enterprise training (reduced training time and errors), and AR marketing (higher engagement and dwell time). We help you build the business case before scoping any project.' },
];

export default function ARVRPage() {
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
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>AR & VR Development</span>
            </div>
            <h1 className="reveal reveal-d1" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 24px', maxWidth: 700 }}>
              We Build Immersive Experiences That <span style={{ color: '#b4fd83' }}>Wow.</span>
            </h1>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 520, margin: '0 0 40px' }}>
              Augmented reality, virtual reality and mixed reality applications for mobile, headset and web — engineered for real-world impact.
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
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 16px' }}>XR Development Services</h2>
            <p className="reveal reveal-d2" style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 0 56px', lineHeight: 1.7 }}>From mobile AR filters to full enterprise VR simulations — every platform, every use case.</p>
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
              <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' }}>How We Build</span>
            </div>
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 60px' }}>Our XR Build Process</h2>
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
            <h2 className="reveal reveal-d1" style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-0.03em', margin: '0 0 48px' }}>XR That Moves the Needle</h2>
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
              Ready to Build in <span style={{ color: '#b4fd83' }}>XR?</span>
            </h2>
            <p className="reveal reveal-d2" style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.75 }}>
              60+ XR applications shipped. Let&apos;s build your immersive experience.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 32px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.35)'; }} onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                Start Your XR Project <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/case-studies" style={{ display: 'inline-flex', alignItems: 'center', height: 56, padding: '0 32px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}>
                See XR Work
              </Link>
            </div>
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 32, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
              {['Meta Quest Partner', 'Apple Vision Pro ready', 'WebXR certified'].map((t, i) => (
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
