'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/* ──────────────────── DATA ──────────────────── */

const OPTIONS = [
  { num: '01', title: 'Request a Proposal', desc: 'Share your vision and get a detailed scope, timeline & fixed-price quote within 48 hours.', cta: 'Get a Quote', tag: 'Most Popular' },
  { num: '02', title: 'Talk to an Expert', desc: 'Book a free 30-min strategy call with a senior engineer to map out your technical path.', cta: 'Book a Call', tag: 'Free' },
  { num: '03', title: 'Business Partnership', desc: 'Explore white-label, reseller programmes or deep technology integrations with our team.', cta: 'Partner With Us', tag: 'Strategic' },
];

const OFFICES = [
  { city: 'Toronto', flag: '🇨🇦', address: '200 University Ave, Suite 500', tz: 'EST / UTC−5', hq: true, x: '22%', y: '36%' },
  { city: 'New York', flag: '🇺🇸', address: '1 World Trade Center, Fl. 85', tz: 'EST / UTC−5', hq: false, x: '24%', y: '38%' },
  { city: 'London', flag: '🇬🇧', address: '30 St Mary Axe, Floor 22', tz: 'GMT / UTC+0', hq: false, x: '47%', y: '29%' },
  { city: 'Dubai', flag: '🇦🇪', address: 'DIFC Gate Village, Bldg 5', tz: 'GST / UTC+4', hq: false, x: '58%', y: '40%' },
];

const FAQS = [
  { q: "What's the typical project timeline?", a: "Most MVPs ship in 8–12 weeks. Enterprise engagements run 3–6 months. You receive a detailed timeline in your proposal after our discovery call." },
  { q: "Do you offer fixed-price contracts?", a: "Yes — every standard engagement comes with a fixed-price guarantee. You know the full cost before development begins. No surprises, no scope-creep charges." },
  { q: "Is there a minimum project size?", a: "Typical engagements start at $25,000 CAD. For smaller scope, ask us about our pre-built accelerator packages." },
  { q: "Do you sign NDAs?", a: "Absolutely — on Day 1, before any project discussion. Your IP and ideas are protected from our very first conversation." },
  { q: "What happens after I submit?", a: "A senior project lead responds within 4 business hours. We schedule a discovery call, then deliver a full proposal within 48 hours of that call." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer flexible SLA-backed support including 24/7 monitoring, bug fixes, feature updates, and performance optimisation." },
];

const PROJECT_TYPES = ['Mobile App', 'Web Platform', 'AI / ML Solution', 'Product Design', 'Blockchain / Web3', 'Custom Engineering', 'Other'];
const BUDGETS = ['Under $25K', '$25K – $50K', '$50K – $100K', '$100K – $250K', '$250K+'];
const HEAR_ABOUT = ['Google Search', 'LinkedIn', 'Referral', 'Clutch / G2', 'Conference / Event', 'Other'];
const TRUST = ['NDA on Day 1', 'Fixed-Price Guarantee', '4 hr Response', '8-Week MVP', '99% Satisfaction'];

/* ──────────────────── WORLD MAP SVG ──────────────────── */
function WorldMap() {
  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: 40 }}>
      {/* Simplified world map paths as SVG */}
      <svg viewBox="0 0 1000 500" style={{ width: '100%', opacity: 0.18 }} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* North America */}
        <path d="M60 120 L110 100 L160 90 L200 95 L230 110 L240 140 L225 170 L200 200 L190 230 L170 260 L150 280 L130 290 L110 270 L90 240 L70 200 L55 160 Z" fill="#b4fd83" />
        {/* South America */}
        <path d="M195 290 L220 280 L250 285 L270 310 L275 350 L265 390 L245 420 L220 430 L200 415 L185 380 L180 340 L185 310 Z" fill="#b4fd83" />
        {/* Europe */}
        <path d="M440 90 L475 85 L510 90 L525 110 L515 130 L490 140 L465 135 L445 120 L435 105 Z" fill="#b4fd83" />
        {/* Africa */}
        <path d="M455 160 L500 155 L530 165 L545 195 L540 240 L530 280 L510 320 L490 340 L465 330 L445 300 L435 260 L440 220 L445 185 Z" fill="#b4fd83" />
        {/* Middle East */}
        <path d="M530 140 L570 135 L595 145 L600 170 L580 185 L555 180 L535 165 Z" fill="#b4fd83" />
        {/* Asia */}
        <path d="M560 80 L640 70 L720 75 L780 90 L820 100 L840 120 L820 145 L790 155 L750 150 L710 155 L680 145 L650 130 L620 125 L590 120 L565 105 Z" fill="#b4fd83" />
        {/* Southeast Asia + Oceania */}
        <path d="M720 180 L760 170 L800 175 L820 195 L810 215 L780 220 L750 210 L725 198 Z" fill="#b4fd83" />
        <path d="M800 270 L850 260 L900 265 L920 285 L910 310 L880 320 L850 315 L820 300 L805 285 Z" fill="#b4fd83" />
        {/* Australia */}
        <path d="M760 300 L820 285 L870 290 L895 315 L890 350 L860 375 L820 378 L780 365 L760 340 L752 315 Z" fill="#b4fd83" />
      </svg>

      {/* Office pins */}
      {OFFICES.map((o) => (
        <div key={o.city} style={{ position: 'absolute', left: o.x, top: o.y, transform: 'translate(-50%,-50%)' }}>
          <div style={{ position: 'relative' }}>
            {/* Pulse ring */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 24, height: 24, borderRadius: '50%', border: '1px solid rgba(180,253,131,0.4)', animation: 'ping 2s ease-out infinite' }} />
            {/* Dot */}
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 12px rgba(180,253,131,0.8)', position: 'relative', zIndex: 1 }} />
            {/* Label */}
            <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6, whiteSpace: 'nowrap' as const, background: 'rgba(0,0,0,0.85)', border: '1px solid rgba(180,253,131,0.2)', borderRadius: 6, padding: '3px 8px', fontSize: 10, fontWeight: 600, color: '#b4fd83', letterSpacing: '0.06em' }}>
              {o.city}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────── MAIN COMPONENT ──────────────────── */
export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', budget: '', description: '', hearAbout: '' });
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* Back-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(() => {
    /* ── H1 character-by-character reveal ── */
    if (h1Ref.current) {
      const split = new SplitType(h1Ref.current, { types: 'chars' });
      gsap.from(split.chars, {
        opacity: 0, y: 60, rotateX: -40,
        stagger: 0.018, duration: 0.9, ease: 'power4.out', delay: 0.2,
      });
    }

    /* ── Badge / sub / trust ── */
    gsap.from('.cp-badge, .cp-sub, .cp-trust', {
      opacity: 0, y: 30, stagger: 0.12, duration: 1, ease: 'power3.out', delay: 0.1,
    });

    /* ── Cards ── */
    gsap.from('.cp-option', {
      opacity: 0, y: 60, stagger: 0.13, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.cp-options', start: 'top 80%', once: true },
    });

    /* ── Form section ── */
    gsap.from('.cp-form-col, .cp-info-col', {
      opacity: 0, y: 50, stagger: 0.15, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '.cp-form-section', start: 'top 80%', once: true },
    });

    /* ── Offices ── */
    gsap.from('.cp-office', {
      opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '.cp-offices', start: 'top 80%', once: true },
    });

    /* ── FAQ items ── */
    gsap.from('.cp-faq-item', {
      opacity: 0, x: -30, stagger: 0.08, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.cp-faq-list', start: 'top 80%', once: true },
    });

    /* ── Bottom CTA ── */
    gsap.from('.cp-cta-text', {
      opacity: 0, y: 40, duration: 1, ease: 'power4.out',
      scrollTrigger: { trigger: '.cp-cta', start: 'top 80%', once: true },
    });

    ScrollTrigger.refresh();
  }, { scope: containerRef });

  /* FAQ GSAP accordion */
  const toggleFaq = (i: number) => {
    const el = faqRefs.current[i];
    if (!el) return;
    if (openFaq === i) {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.35, ease: 'power3.in', onComplete: () => setOpenFaq(null) });
    } else {
      if (openFaq !== null && faqRefs.current[openFaq]) {
        gsap.to(faqRefs.current[openFaq]!, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' });
      }
      setOpenFaq(i);
      gsap.fromTo(el, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' });
    }
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    if (e.target.name === 'description') setCharCount(e.target.value.length);
  };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  /* shared styles */
  const inp: React.CSSProperties = { width: '100%', padding: '15px 20px', fontSize: 15, fontFamily: 'inherit', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 14, color: '#fff', outline: 'none', transition: 'border 0.25s, box-shadow 0.25s' };
  const sel: React.CSSProperties = { ...inp, appearance: 'none' as const, backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='rgba(255,255,255,0.35)' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' };
  const lbl: React.CSSProperties = { display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.35)', marginBottom: 8 };
  const focusIn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.5)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(180,253,131,0.08)'; };
  const focusOut = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; e.currentTarget.style.boxShadow = 'none'; };

  return (
    <div ref={containerRef} style={{ background: '#000', minHeight: '100vh', paddingTop: 100 }}>

      {/* ══════════════════════════════════════════
          HERO — Centered
      ══════════════════════════════════════════ */}
      <section style={{ padding: '88px 0 120px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        {/* Grid bg */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '72px 72px', pointerEvents: 'none' }} />

        {/* Animated glow orb — center */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 900, height: 600, background: 'radial-gradient(ellipse,rgba(180,253,131,0.1) 0%,transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', animation: 'orb-pulse 4s ease-in-out infinite' }} />

        {/* Decorative rotating ring */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', border: '1px solid rgba(180,253,131,0.06)', animation: 'spin-slow 30s linear infinite', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(180,253,131,0.04)', animation: 'spin-slow 20s linear infinite reverse', pointerEvents: 'none' }} />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          {/* Badge */}
          <div className="cp-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(180,253,131,0.08)', border: '1px solid rgba(180,253,131,0.18)', borderRadius: 100, padding: '8px 20px' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83', animation: 'pulse-glow 2s infinite' }} />
            <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.12em', textTransform: 'uppercase' as const }}>Available for New Projects</span>
          </div>

          {/* H1 — split-type target */}
          <h1 ref={h1Ref} style={{ fontSize: 'clamp(3.2rem, 8vw, 8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.05em', lineHeight: 0.95, margin: 0, maxWidth: 1000, perspective: '1000px' }}>
            Let&apos;s Build Something<br />
            <span style={{ color: '#b4fd83' }}>Extraordinary.</span>
          </h1>

          <p className="cp-sub" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', color: 'rgba(255,255,255,0.4)', maxWidth: 560, lineHeight: 1.75, margin: 0 }}>
            Whether you&apos;re launching an MVP, scaling an enterprise platform, or exploring a strategic partnership — we&apos;re ready to move fast.
          </p>

          {/* Centered CTA buttons */}
          <div className="cp-sub" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 4 }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="mailto:hello@mapletechlabs.com" style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
            >
              hello@mapletechlabs.com
            </a>
          </div>

          {/* Trust strip — centered */}
          <div className="cp-trust" style={{ display: 'flex', gap: 36, flexWrap: 'wrap', paddingTop: 44, borderTop: '1px solid rgba(255,255,255,0.07)', justifyContent: 'center', width: '100%', marginTop: 12 }}>
            {TRUST.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(180,253,131,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500, whiteSpace: 'nowrap' as const }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ENGAGEMENT OPTIONS
      ══════════════════════════════════════════ */}
      <section style={{ padding: '0 0 140px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="cb-container cp-options" style={{ paddingTop: 80 }}>
          <div style={{ marginBottom: 60, textAlign: 'center' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>How Can We Help?</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Choose Your Path<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>to Launch.</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {OPTIONS.map((o) => (
              <a key={o.num} href="#contact-form" className="cp-option"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 36, padding: '52px 44px', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', overflow: 'hidden', textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(180,253,131,0.28)';
                  e.currentTarget.style.background = 'rgba(180,253,131,0.04)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 32px 64px rgba(0,0,0,0.5)';
                  const bar = e.currentTarget.querySelector('.cp-accent-bar') as HTMLElement;
                  if (bar) { bar.style.width = '100%'; bar.style.opacity = '1'; }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                  const bar = e.currentTarget.querySelector('.cp-accent-bar') as HTMLElement;
                  if (bar) { bar.style.width = '0'; bar.style.opacity = '0'; }
                }}
              >
                {/* Slide-in top accent bar */}
                <div className="cp-accent-bar" style={{ position: 'absolute', top: 0, left: 0, height: 2, width: 0, background: 'linear-gradient(90deg,#b4fd83,rgba(180,253,131,0.2))', opacity: 0, transition: 'width 0.5s ease, opacity 0.3s ease', borderRadius: '0 0 2px 0' }} />

                {/* Ghost watermark */}
                <div style={{ position: 'absolute', bottom: -20, right: 24, fontSize: 150, fontWeight: 800, lineHeight: 1, color: 'rgba(255,255,255,0.025)', pointerEvents: 'none', letterSpacing: '-0.05em' }}>{o.num}</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#b4fd83', background: 'rgba(180,253,131,0.1)', padding: '5px 12px', borderRadius: 100 }}>{o.tag}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12 }}>{o.title}</h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.42)', lineHeight: 1.7, margin: 0 }}>{o.desc}</p>
                </div>

                <div style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8, color: '#b4fd83', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em' }}>
                  {o.cta.toUpperCase()}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════ */}
      <section id="contact-form" className="cp-form-section" style={{ padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.07)', scrollMarginTop: 80 }}>
        <div className="cb-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: 80, alignItems: 'start' }}>

            {/* Left info */}
            <div className="cp-info-col">
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 24 }}>
                Tell Us About<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Your Project.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: 56, maxWidth: 400 }}>
                Fill out the form and a senior engineer will respond within 4 business hours with a tailored plan.
              </p>

              {/* Contact details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {[
                  { label: 'General', value: 'hello@mapletechlabs.com', icon: '✉' },
                  { label: 'Sales', value: 'sales@mapletechlabs.com', icon: '📞' },
                  { label: 'Response Time', value: 'Within 4 business hours', icon: '⏱' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 14, background: 'rgba(180,253,131,0.07)', border: '1px solid rgba(180,253,131,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 20 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: '#fff', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* NDA note */}
              <div style={{ marginTop: 48, padding: '20px 22px', background: 'rgba(180,253,131,0.04)', border: '1px solid rgba(180,253,131,0.11)', borderRadius: 16, display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <span style={{ fontSize: 18, flexShrink: 0, marginTop: 2 }}>🔒</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>All enquiries are protected by NDA. Your ideas stay confidential from our very first conversation.</span>
              </div>
            </div>

            {/* Right form */}
            <div className="cp-form-col">
              <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 36, padding: '52px 44px' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '48px 0' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(180,253,131,0.1)', border: '1px solid rgba(180,253,131,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <h3 style={{ fontSize: 28, fontWeight: 600, color: '#fff', letterSpacing: '-0.03em', marginBottom: 12 }}>We&apos;ve Got It!</h3>
                    <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 360, margin: '0 auto 32px' }}>A senior engineer will reach out within 4 business hours. Check your inbox — we&apos;re already on it.</p>
                    <button onClick={() => setSubmitted(false)} style={{ background: 'none', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, padding: '12px 28px', color: 'rgba(255,255,255,0.5)', fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', transition: '0.2s' }}>
                      Submit Another →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                    {/* Step indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                      {['Your Details', 'Project Info', 'Description'].map((step, i) => (
                        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: i === 0 ? '#b4fd83' : 'rgba(255,255,255,0.06)', border: `1px solid ${i === 0 ? '#b4fd83' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: i === 0 ? '#000' : 'rgba(255,255,255,0.3)', flexShrink: 0 }}>{i + 1}</div>
                            <span style={{ fontSize: 11, color: i === 0 ? '#b4fd83' : 'rgba(255,255,255,0.25)', fontWeight: 600, whiteSpace: 'nowrap' as const }}>{step}</span>
                          </div>
                          {i < 2 && <div style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }} />}
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)' }}>Project Enquiry</div>
                    <h3 style={{ fontSize: 24, fontWeight: 600, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 4px' }}>Start the Conversation</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={lbl}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handle} required placeholder="Alex Johnson" style={inp} onFocus={focusIn} onBlur={focusOut} />
                      </div>
                      <div>
                        <label style={lbl}>Work Email *</label>
                        <input name="email" type="email" value={form.email} onChange={handle} required placeholder="alex@company.com" style={inp} onFocus={focusIn} onBlur={focusOut} />
                      </div>
                    </div>

                    <div>
                      <label style={lbl}>Company / Organisation</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Acme Corp" style={inp} onFocus={focusIn} onBlur={focusOut} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <div>
                        <label style={lbl}>Project Type *</label>
                        <select name="projectType" value={form.projectType} onChange={handle} required style={{ ...sel, color: form.projectType ? '#fff' : 'rgba(255,255,255,0.3)' }} onFocus={focusIn} onBlur={focusOut}>
                          <option value="" disabled>Select type</option>
                          {PROJECT_TYPES.map(t => <option key={t} value={t} style={{ background: '#111', color: '#fff' }}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={lbl}>Budget Range</label>
                        <select name="budget" value={form.budget} onChange={handle} style={{ ...sel, color: form.budget ? '#fff' : 'rgba(255,255,255,0.3)' }} onFocus={focusIn} onBlur={focusOut}>
                          <option value="" disabled>Select range</option>
                          {BUDGETS.map(b => <option key={b} value={b} style={{ background: '#111', color: '#fff' }}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                        <label style={{ ...lbl, marginBottom: 0 }}>Project Description *</label>
                        <span style={{ fontSize: 11, color: charCount > 400 ? '#b4fd83' : 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{charCount} chars</span>
                      </div>
                      <textarea name="description" value={form.description} onChange={handle} required placeholder="Tell us about your project, goals, tech stack, and any specific requirements..." rows={5} style={{ ...inp, resize: 'vertical' as const, minHeight: 120 }} onFocus={focusIn} onBlur={focusOut} />
                    </div>

                    <div>
                      <label style={lbl}>How did you hear about us?</label>
                      <select name="hearAbout" value={form.hearAbout} onChange={handle} style={{ ...sel, color: form.hearAbout ? '#fff' : 'rgba(255,255,255,0.3)' }} onFocus={focusIn} onBlur={focusOut}>
                        <option value="" disabled>Select option</option>
                        {HEAR_ABOUT.map(h => <option key={h} value={h} style={{ background: '#111', color: '#fff' }}>{h}</option>)}
                      </select>
                    </div>

                    <button type="submit" style={{ marginTop: 4, height: 60, borderRadius: 100, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#b4fd83', color: '#000', fontSize: 15, fontWeight: 700, cursor: 'pointer', transition: '0.3s', fontFamily: 'inherit', letterSpacing: '-0.01em' }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.35)'; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                      Submit Enquiry
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          OFFICES — with World Map
      ══════════════════════════════════════════ */}
      <section className="cp-offices" style={{ padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="cb-container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Global Presence</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Offices Around<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>the World.</span>
            </h2>
          </div>

          {/* World map with pins */}
          <WorldMap />

          {/* Office cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {OFFICES.map((o, i) => (
              <div key={o.city} className="cp-office" style={{ padding: '48px 40px', border: '1px solid rgba(255,255,255,0.07)', borderRadius: i === 0 ? '32px 0 0 32px' : i === 3 ? '0 32px 32px 0' : '0', background: 'rgba(255,255,255,0.02)', transition: '0.4s', cursor: 'default' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(180,253,131,0.04)'; e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
              >
                <div style={{ width: 28, height: 3, background: '#b4fd83', borderRadius: 2, marginBottom: 28 }} />
                <div style={{ fontSize: 28, marginBottom: 12 }}>{o.flag}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>{o.city}</span>
                  {o.hq && <span style={{ fontSize: 10, fontWeight: 700, color: '#b4fd83', background: 'rgba(180,253,131,0.1)', padding: '3px 10px', borderRadius: 100, letterSpacing: '0.08em' }}>HQ</span>}
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, margin: '0 0 14px' }}>{o.address}</p>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>{o.tz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ — GSAP accordion
      ══════════════════════════════════════════ */}
      <section style={{ padding: '140px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="cb-container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Common Questions</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.08, margin: 0 }}>
              Everything You<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Need to Know.</span>
            </h2>
          </div>

          <div className="cp-faq-list" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {FAQS.map((faq, i) => (
              <div key={i} className="cp-faq-item" style={{ background: openFaq === i ? 'rgba(180,253,131,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${openFaq === i ? 'rgba(180,253,131,0.2)' : 'rgba(255,255,255,0.07)'}`, borderRadius: 20, overflow: 'hidden', transition: 'border-color 0.3s, background 0.3s' }}>
                <button onClick={() => toggleFaq(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: '#fff', textAlign: 'left', letterSpacing: '-0.01em' }}>{faq.q}</span>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'transform 0.3s', transform: openFaq === i ? 'rotate(45deg)' : 'none' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={openFaq === i ? '#b4fd83' : 'rgba(255,255,255,0.4)'} strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                  </div>
                </button>
                <div ref={(el) => { faqRefs.current[i] = el; }} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
                  <p style={{ padding: '0 28px 24px', margin: 0, fontSize: 15, color: 'rgba(255,255,255,0.44)', lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM CTA
      ══════════════════════════════════════════ */}
      <section className="cp-cta" style={{ padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse,rgba(180,253,131,0.08) 0%,transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div className="cb-container cp-cta-text" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Let&apos;s Talk</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.0, margin: '0 0 32px' }}>
            Your Next Big Thing<br /><span style={{ color: '#b4fd83' }}>Starts Here.</span>
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.38)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Join 150+ companies who trusted MapleTech Labs to build, scale, and launch their most important products.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact-form" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, height: 60, padding: '0 40px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', height: 60, padding: '0 40px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: 15, fontWeight: 500, textDecoration: 'none', transition: '0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BACK TO TOP BUTTON
      ══════════════════════════════════════════ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 999,
          width: 48, height: 48, borderRadius: '50%',
          background: '#b4fd83', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: showTop ? 1 : 0, transform: showTop ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.4s, transform 0.4s',
          boxShadow: '0 8px 24px rgba(180,253,131,0.35)',
          pointerEvents: showTop ? 'auto' : 'none',
        }}
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>

      {/* ══════════════════════════════════════════
          GLOBAL STYLES
      ══════════════════════════════════════════ */}
      <style>{`
        @keyframes pulse-glow {
          0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(180,253,131,0.5);}
          50%{opacity:.7;box-shadow:0 0 0 8px rgba(180,253,131,0);}
        }
        @keyframes orb-pulse {
          0%,100%{opacity:1;transform:translate(-50%,-50%) scale(1);}
          50%{opacity:0.7;transform:translate(-50%,-50%) scale(1.1);}
        }
        @keyframes spin-slow {
          from{transform:translate(-50%,-50%) rotate(0deg);}
          to{transform:translate(-50%,-50%) rotate(360deg);}
        }
        @keyframes ping {
          0%{transform:translate(-50%,-50%) scale(1);opacity:0.6;}
          100%{transform:translate(-50%,-50%) scale(2.5);opacity:0;}
        }
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.22);}
        select option{background:#111;color:#fff;}
        @media(max-width:1024px){
          .cp-options>div:last-child{grid-template-columns:1fr!important;}
        }
        @media(max-width:900px){
          .cp-form-section .cb-container>div{grid-template-columns:1fr!important;gap:48px!important;}
          .cp-offices .cb-container>div:last-child{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:640px){
          .cp-offices .cb-container>div:last-child{grid-template-columns:1fr!important;}
          .cp-form-col form>div[style*="grid"]{grid-template-columns:1fr!important;}
          .cp-offices .cb-container>div:last-child>div{border-radius:20px!important;}
        }
      `}</style>
    </div>
  );
}
