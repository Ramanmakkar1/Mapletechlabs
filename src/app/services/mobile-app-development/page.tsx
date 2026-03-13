'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── DATA ──────────────────────────────────────────────────────────────────

const services = [
  {
    title: 'iOS App Development',
    desc: 'Native Swift & SwiftUI apps engineered for performance, precision, and seamless App Store delivery.',
    tag: 'Apple Ecosystem',
    size: 'large',
    accent: '#b4fd83',
    preview: ['SwiftUI', 'CoreML', 'ARKit', 'HealthKit', 'CloudKit'],
  },
  {
    title: 'Android Development',
    desc: 'Kotlin-first Android apps built for the full device spectrum — phones, tablets and foldables.',
    tag: 'Google Ecosystem',
    size: 'large',
    accent: '#3DDC84',
    preview: ['Jetpack Compose', 'ML Kit', 'Room DB', 'Firebase', 'Play Store'],
  },
  {
    title: 'React Native',
    desc: 'One codebase, two stores — without sacrificing native feel or performance.',
    tag: 'Cross-Platform',
    size: 'small',
    accent: '#61DAFB',
    preview: [],
  },
  {
    title: 'Flutter',
    desc: 'Pixel-perfect UIs that run identically on iOS, Android, Web and Desktop.',
    tag: 'Cross-Platform',
    size: 'small',
    accent: '#54C5F8',
    preview: [],
  },
  {
    title: 'Progressive Web Apps',
    desc: 'Offline-first, installable app-like experiences in the browser.',
    tag: 'Web-Native',
    size: 'small',
    accent: '#FF6B6B',
    preview: [],
  },
  {
    title: 'Wearable & IoT',
    desc: 'WatchOS, WearOS and connected device apps for every screen.',
    tag: 'Emerging Tech',
    size: 'small',
    accent: '#b4fd83',
    preview: [],
  },
];

const process = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We start with a deep-dive into your business goals, user personas, and technical constraints. The output is a bulletproof project roadmap with fixed scope and milestones.',
    deliverables: ['Product Brief', 'User Personas', 'Technical Spec', 'Project Roadmap'],
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'UX Design & Prototyping',
    desc: 'User journeys, wireframes, and high-fidelity interactive prototypes — all validated with real users before a single line of code is written.',
    deliverables: ['Wireframes', 'Interactive Prototype', 'Design System', 'User Testing Report'],
    duration: '2–3 weeks',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints, daily standups, and full-stack mobile engineering across iOS, Android or cross-platform. You see real, working code every fortnight.',
    deliverables: ['Sprint Demos', 'Staging Build', 'Code Repository', 'Weekly Reports'],
    duration: '8–16 weeks',
  },
  {
    num: '04',
    title: 'QA & Performance',
    desc: 'Device farms covering 50+ devices, automated test suites, performance benchmarks, and end-to-end security audits before a single user touches your app.',
    deliverables: ['Test Reports', 'Performance Audit', 'Security Review', 'Bug-Free Build'],
    duration: '2–3 weeks',
  },
  {
    num: '05',
    title: 'Launch & Submission',
    desc: 'App Store and Play Store submissions, review navigation, phased rollouts, and release management handled completely end-to-end.',
    deliverables: ['Store Listing', 'Screenshots & ASO', 'Phased Rollout', 'Launch Monitoring'],
    duration: '1 week',
  },
  {
    num: '06',
    title: 'Post-Launch Growth',
    desc: 'Crash monitoring, user analytics, feature iterations and performance optimisation — we stay with you long after the app goes live.',
    deliverables: ['Crash Dashboard', 'Analytics Setup', 'Update Cycles', '24/7 SLA Option'],
    duration: 'Ongoing',
  },
];

const pricing = [
  {
    tier: 'Rapid MVP',
    price: 'From $24K',
    duration: '8 weeks',
    badge: null,
    desc: 'For startups who need a validated, investor-ready product fast. Fixed scope, fixed price.',
    features: [
      'iOS or Android (one platform)',
      'Up to 12 core screens',
      'UX design included',
      'Basic backend / API integration',
      'App Store submission',
      '30-day post-launch support',
    ],
    cta: 'Start MVP',
  },
  {
    tier: 'Growth App',
    price: 'From $60K',
    duration: '16 weeks',
    badge: 'Most Popular',
    desc: 'Full-featured product for scale-ups ready to dominate their market on both platforms.',
    features: [
      'iOS + Android (both platforms)',
      'Unlimited screens',
      'Full UX/UI design system',
      'Custom backend & APIs',
      'Push notifications & analytics',
      'QA device farm (50+ devices)',
      'App Store + Play Store submission',
      '90-day post-launch support',
    ],
    cta: 'Start Project',
  },
  {
    tier: 'Enterprise',
    price: 'Custom',
    duration: 'Scoped',
    badge: null,
    desc: 'Complex platforms, dedicated teams, long-term partnerships. We become your engineering arm.',
    features: [
      'Dedicated engineering team',
      'All platforms + web',
      'Microservices architecture',
      'Enterprise security & compliance',
      'SLA-backed 24/7 support',
      'Quarterly strategy reviews',
      'CI/CD + DevOps setup',
      'Source code & IP transfer',
    ],
    cta: 'Talk to Sales',
  },
];

const testimonials = [
  {
    quote: 'Mapletech Labs shipped our trading app in 10 weeks — on budget, zero bugs in production. Our users gave it 4.9 stars on day one.',
    author: 'Sarah J.',
    role: 'CEO, FinStream',
    metric: '4.9★',
    metricLabel: 'Day-One Rating',
  },
  {
    quote: 'They built a telehealth app that passed HIPAA compliance on the first audit. Their attention to security detail is unmatched.',
    author: 'Dr. Michael D.',
    role: 'CTO, MediCore',
    metric: '100K+',
    metricLabel: 'Patients Onboarded',
  },
  {
    quote: 'Black Friday hit 500K concurrent users. Not a single crash. I don\'t know how they engineered that but I\'m never going anywhere else.',
    author: 'Alex R.',
    role: 'Founder, RetailX',
    metric: '500K',
    metricLabel: 'Concurrent Users',
  },
];

const whyUs = [
  {
    num: '200+',
    title: 'Apps Shipped',
    desc: 'We\'ve built everything from Series A startup MVPs to enterprise platforms processing millions of transactions daily.',
  },
  {
    num: '98%',
    title: 'On-Time Delivery',
    desc: 'Our milestone-based approach means no surprises. Fixed-scope, fixed-price engagements with a delivery guarantee.',
  },
  {
    num: '8wk',
    title: 'MVP Guarantee',
    desc: 'Our Rapid Launch programme delivers a production-ready, investor-grade MVP in exactly 8 weeks. Fixed price. No exceptions.',
  },
  {
    num: '4.8★',
    title: 'Average App Rating',
    desc: 'Across 200+ apps on both stores. We don\'t just build — we engineer experiences users love enough to rate 5 stars.',
  },
];

const platforms = [
  {
    label: 'iOS',
    lang: 'Swift & SwiftUI',
    capabilities: [
      'SwiftUI & UIKit Interfaces', 'Core Data & CloudKit', 'ARKit & RealityKit',
      'HealthKit & CoreMotion', 'Apple Pay Integration', 'TestFlight & App Store Connect',
    ],
    stat: '1B+', statLabel: 'Active iPhone Users',
  },
  {
    label: 'Android',
    lang: 'Kotlin & Jetpack Compose',
    capabilities: [
      'Jetpack Compose UI', 'Room & DataStore', 'ML Kit & TensorFlow Lite',
      'Google Pay & Billing', 'Firebase Integration', 'Play Console Optimisation',
    ],
    stat: '3B+', statLabel: 'Android Devices',
  },
  {
    label: 'Cross-Platform',
    lang: 'React Native & Flutter',
    capabilities: [
      'Shared Business Logic', 'Native Module Bridging', 'Platform-Specific UI',
      'OTA Updates (CodePush)', 'Unified CI/CD Pipeline', 'A/B Testing Framework',
    ],
    stat: '60%', statLabel: 'Faster Time-to-Market',
  },
];

const metrics = [
  { value: 200, suffix: '+', label: 'Apps Launched' },
  { value: 50, suffix: 'M+', label: 'Total Downloads' },
  { value: 4.8, suffix: '★', label: 'Avg Store Rating', decimal: true },
  { value: 98, suffix: '%', label: 'On-Time Delivery' },
];

const caseStudies = [
  {
    client: 'FinStream', title: 'Mobile Trading App', category: 'FinTech',
    desc: 'Real-time stock trading iOS app with ML-powered sentiment analysis, processing 500K daily trades with sub-50ms latency.',
    tags: ['Swift', 'WebSocket', 'CoreML'], metric: '500K', metricLabel: 'Daily Trades',
    year: '2024',
  },
  {
    client: 'MediCore', title: 'Telehealth Platform', category: 'Healthcare',
    desc: 'HIPAA-compliant React Native app connecting 100K+ patients with specialists globally via HD encrypted video calls.',
    tags: ['React Native', 'WebRTC', 'HealthKit'], metric: '100K+', metricLabel: 'Patients Served',
    year: '2024',
  },
  {
    client: 'RetailX', title: 'Commerce Super App', category: 'Retail',
    desc: 'Flutter-built shopping app that handled 500K concurrent users without a single outage during Black Friday peak.',
    tags: ['Flutter', 'Firebase', 'Stripe'], metric: '500K', metricLabel: 'Concurrent Users',
    year: '2023',
  },
];

const techStack = [
  { name: 'Swift' }, { name: 'Kotlin' }, { name: 'React Native' }, { name: 'Flutter' },
  { name: 'Firebase' }, { name: 'AWS Amplify' }, { name: 'GraphQL' }, { name: 'Supabase' },
  { name: 'Stripe SDK' }, { name: 'WebRTC' }, { name: 'TensorFlow Lite' }, { name: 'CoreML' },
];

const faqs = [
  { q: 'How long does it take to build a mobile app?', a: 'A simple MVP typically takes 8–12 weeks. A full-featured product is 16–24 weeks. We\'ll give you a precise timeline after the discovery workshop, which we can start this week.' },
  { q: 'Should I build for iOS or Android first?', a: 'It depends entirely on your target audience. If your users skew towards higher income brackets or North America, start with iOS. For broader global reach or emerging markets, Android first. We advise based on your specific market data.' },
  { q: 'Do you handle App Store and Play Store submission?', a: 'Yes — fully. We manage the entire submission process including screenshots, metadata, review responses, and resolving any rejection issues. We\'ve shipped 200+ apps and know every edge case.' },
  { q: 'What does post-launch support look like?', a: 'We offer tiered support packages: Essential (crash monitoring + critical bug fixes), Growth (feature updates + performance optimisation), and Scale (dedicated engineering team + 24/7 SLA). Most clients start on Growth.' },
  { q: 'Can you integrate with our existing backend?', a: 'Absolutely. We\'ve integrated with everything from legacy REST APIs to real-time WebSocket systems, Salesforce, SAP, custom ERP systems, and third-party payment gateways. API integration is one of our core strengths.' },
  { q: 'Do you build MVPs for startups?', a: 'Yes, and we love it. Our dedicated Rapid Launch programme gets a validated, investor-ready MVP to market in 8 weeks. Fixed scope, fixed price, zero surprises.' },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────

export default function MobileAppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCase, setActiveCase] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  // Hero animations
  useGSAP(() => {
    gsap.to('.phone-mockup', {
      y: -18, duration: 3, ease: 'power1.inOut', yoyo: true, repeat: -1,
    });
    gsap.from('.hero-content > *', {
      opacity: 0, y: 60, stagger: 0.15, duration: 1, ease: 'power4.out', delay: 0.3,
    });
    gsap.from('.hero-phone', {
      opacity: 0, x: 80, scale: 0.9, duration: 1.2, ease: 'power4.out', delay: 0.5,
    });
  }, { scope: heroRef });

  // Global scroll reveals
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
      gsap.from(el, {
        opacity: 0, y: 50, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((el) => {
      gsap.from(el.children, {
        opacity: 0, y: 40, stagger: 0.1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      });
    });
    ScrollTrigger.refresh();
  });

  // Metric counters
  useGSAP(() => {
    metrics.forEach((m, i) => {
      const el = document.querySelector(`.mv-${i}`);
      const obj = { val: 0 };
      gsap.to(obj, {
        val: m.value, duration: 2.2, ease: 'power3.out',
        scrollTrigger: { trigger: metricsRef.current, start: 'top 80%' },
        onUpdate: () => {
          if (el) el.textContent = m.decimal ? obj.val.toFixed(1) : Math.floor(obj.val).toString();
        },
      });
    });
  }, { scope: metricsRef });

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} style={{
        background: '#000', minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden', paddingTop: 100,
      }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
        <div style={{
          position: 'absolute', top: '5%', right: '8%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(180,253,131,0.1) 0%, transparent 65%)',
          filter: 'blur(90px)', zIndex: 0,
        }} />

        <div className="cb-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>

            {/* Content */}
            <div className="hero-content" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(180,253,131,0.1)', border: '1px solid rgba(180,253,131,0.2)',
                borderRadius: 100, padding: '10px 20px', width: 'fit-content',
              }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#b4fd83' }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Mobile App Development
                </span>
              </div>
              <h1 style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 500, color: '#fff',
                lineHeight: 1.05, letterSpacing: '-0.04em', margin: 0,
              }}>
                We Build Apps<br />
                <span style={{ color: '#b4fd83' }}>People Love.</span>
              </h1>
              <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
                From concept to App Store — end-to-end mobile engineering for iOS, Android, and cross-platform. 200+ apps shipped. Zero compromises.
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <Link href="#contact" style={{
                  background: '#b4fd83', color: '#000', fontWeight: 600, fontSize: 15,
                  height: 56, padding: '0 36px', borderRadius: 100, display: 'inline-flex',
                  alignItems: 'center', gap: 10, textDecoration: 'none',
                  transition: '0.3s cubic-bezier(0.165,0.84,0.44,1)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(180,253,131,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  Get a Free Quote
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <Link href="#case-studies" style={{
                  height: 56, padding: '0 36px', borderRadius: 100, display: 'inline-flex',
                  alignItems: 'center', gap: 10, textDecoration: 'none', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', fontSize: 15,
                  transition: '0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  View Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: 40, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 8 }}>
                {[['200+', 'Apps Launched'], ['4.8★', 'Avg Rating'], ['98%', 'On-Time']].map(([val, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontSize: 28, fontWeight: 500, color: '#fff', letterSpacing: '-0.03em' }}>{val}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="hero-phone" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', border: '1px solid rgba(180,253,131,0.07)' }} />
              <div style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', border: '1px solid rgba(180,253,131,0.04)' }} />
              <div className="phone-mockup" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                  width: 280, height: 560, borderRadius: 48,
                  background: 'linear-gradient(145deg, #1a1a1a, #0a0a0a)',
                  border: '2px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 80px 160px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.03)',
                  display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative',
                }}>
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 100, height: 32, background: '#0a0a0a', borderRadius: '0 0 20px 20px', zIndex: 10 }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '48px 24px 12px', fontSize: 10, color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                    <span>9:41</span><span>●●●</span>
                  </div>
                  <div style={{ padding: '0 20px', flex: 1 }}>
                    <div style={{ background: 'rgba(180,253,131,0.08)', borderRadius: 20, padding: 20, marginBottom: 16 }}>
                      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 8, fontWeight: 600 }}>PORTFOLIO VALUE</div>
                      <div style={{ fontSize: 28, fontWeight: 600, color: '#fff', letterSpacing: '-0.03em' }}>$24,831.50</div>
                      <div style={{ fontSize: 12, color: '#b4fd83', marginTop: 4 }}>▲ +12.4% this month</div>
                      <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 50, marginTop: 16 }}>
                        {[30, 45, 35, 60, 55, 75, 65, 80, 70, 90].map((h, idx) => (
                          <div key={idx} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: idx === 9 ? '#b4fd83' : 'rgba(255,255,255,0.1)' }} />
                        ))}
                      </div>
                    </div>
                    {[['AAPL', '+5.2%', '#b4fd83'], ['TSLA', '-2.1%', '#ff6b6b'], ['ETH', '+18.7%', '#b4fd83']].map(([name, pct, color]) => (
                      <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,255,255,0.3)' }} />
                          </div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{name}</span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600, color }}>{pct}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-around', padding: '16px 20px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                    {['⬜', '◯', '△', '◇'].map((icon, idx) => (
                      <div key={idx} style={{ fontSize: 16, opacity: idx === 0 ? 1 : 0.3 }}>{icon}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUILD — BENTO GRID ───────────────────────────────────── */}
      <section style={{ background: '#000', padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ marginBottom: 80 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Services</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
                Every Platform.<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>Zero Compromise.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', maxWidth: 400, lineHeight: 1.7, margin: 0 }}>
                From native iOS to cross-platform Flutter — we cover the full mobile spectrum with certified specialists on each platform.
              </p>
            </div>
          </div>

          {/* Row 1 — Two large cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
            {services.filter(s => s.size === 'large').map((svc) => (
              <div
                key={svc.title}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 40, padding: '56px', display: 'flex', flexDirection: 'column',
                  gap: 40, cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)',
                  position: 'relative', overflow: 'hidden', minHeight: 380,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${svc.accent}40`;
                  e.currentTarget.style.background = `${svc.accent}08`;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Large watermark number */}
                <div style={{
                  position: 'absolute', bottom: -20, right: 40,
                  fontSize: 180, fontWeight: 700, lineHeight: 1,
                  color: 'rgba(255,255,255,0.03)', pointerEvents: 'none',
                  letterSpacing: '-0.05em', userSelect: 'none',
                }}>
                  {services.filter(s => s.size === 'large').indexOf(svc) === 0 ? '01' : '02'}
                </div>

                <div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: svc.accent, display: 'inline-block', marginBottom: 20,
                    padding: '6px 14px', background: `${svc.accent}15`, borderRadius: 100,
                  }}>{svc.tag}</span>
                  <h3 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 500, color: '#fff', marginBottom: 16, letterSpacing: '-0.03em', margin: '0 0 16px' }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, margin: 0, maxWidth: 420 }}>
                    {svc.desc}
                  </p>
                </div>

                {/* Tech pills */}
                {svc.preview.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 'auto' }}>
                    {svc.preview.map(p => (
                      <span key={p} style={{
                        fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                        padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 100, letterSpacing: '0.02em',
                      }}>{p}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Row 2 — Four small cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {services.filter(s => s.size === 'small').map((svc, i) => (
              <div
                key={svc.title}
                style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 32, padding: '40px 36px', display: 'flex', flexDirection: 'column',
                  gap: 20, cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.165,0.84,0.44,1)',
                  position: 'relative', overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${svc.accent}40`;
                  e.currentTarget.style.background = `${svc.accent}06`;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ position: 'absolute', bottom: -10, right: 20, fontSize: 80, fontWeight: 700, lineHeight: 1, color: 'rgba(255,255,255,0.03)', pointerEvents: 'none', letterSpacing: '-0.05em', userSelect: 'none' }}>
                  0{i + 3}
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: svc.accent }}>{svc.tag}</span>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 12, letterSpacing: '-0.02em' }}>{svc.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>{svc.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em' }}>
                  LEARN MORE
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — EDITORIAL GRID ───────────────────────────────── */}
      <section style={{ background: '#fff', padding: '160px 0', borderTop: '1px solid #f2f2f2' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ marginBottom: 100 }}>
            <div className="section-tag">Why Mapletech Labs</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
              <h2 className="section-heading" style={{ color: '#000', margin: 0 }}>
                We Don't Just Build.<br />
                <span style={{ color: 'rgba(0,0,0,0.25)' }}>We Engineer Success.</span>
              </h2>
              <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.5)', lineHeight: 1.7, margin: 0 }}>
                200+ apps later, we've refined a delivery process that consistently hits timelines, budgets, and user ratings that competitors can't match.
              </p>
            </div>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: '80px',
                  border: '1px solid #f0f0f0',
                  position: 'relative', overflow: 'hidden',
                  transition: '0.4s',
                  background: i % 2 === 0 ? '#fff' : '#fafafa',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#000';
                  const num = e.currentTarget.querySelector('.why-num') as HTMLElement;
                  const title = e.currentTarget.querySelector('.why-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.why-desc') as HTMLElement;
                  if (num) num.style.color = '#b4fd83';
                  if (title) title.style.color = '#fff';
                  if (desc) desc.style.color = 'rgba(255,255,255,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = i % 2 === 0 ? '#fff' : '#fafafa';
                  const num = e.currentTarget.querySelector('.why-num') as HTMLElement;
                  const title = e.currentTarget.querySelector('.why-title') as HTMLElement;
                  const desc = e.currentTarget.querySelector('.why-desc') as HTMLElement;
                  if (num) num.style.color = '#000';
                  if (title) title.style.color = '#000';
                  if (desc) desc.style.color = 'rgba(0,0,0,0.45)';
                }}
              >
                <div className="why-num" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 500, color: '#000', letterSpacing: '-0.05em', lineHeight: 1, marginBottom: 24, transition: '0.4s' }}>
                  {item.num}
                </div>
                <div className="why-title" style={{ fontSize: 24, fontWeight: 600, color: '#000', marginBottom: 16, letterSpacing: '-0.02em', transition: '0.4s' }}>
                  {item.title}
                </div>
                <div className="why-desc" style={{ fontSize: 16, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8, maxWidth: 440, transition: '0.4s' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────────── */}
      <section style={{ background: '#000', padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Transparent Pricing</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 0 24px' }}>
              No Hidden Fees.<br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>No Surprises. Ever.</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', maxWidth: 560, margin: '0 auto' }}>
              Every engagement is fixed-scope and fixed-price. You always know exactly what you're getting and what it costs.
            </p>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {pricing.map((plan, i) => (
              <div
                key={plan.tier}
                style={{
                  background: i === 1 ? '#fff' : 'rgba(255,255,255,0.03)',
                  border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 40, padding: '56px 48px',
                  display: 'flex', flexDirection: 'column', gap: 32,
                  position: 'relative', overflow: 'hidden',
                  transition: '0.4s',
                  transform: i === 1 ? 'scale(1.04)' : 'scale(1)',
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute', top: 32, right: 32,
                    background: '#b4fd83', color: '#000', fontSize: 11,
                    fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase',
                    padding: '6px 14px', borderRadius: 100,
                  }}>{plan.badge}</div>
                )}

                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: i === 1 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
                    {plan.tier}
                  </div>
                  <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 600, color: i === 1 ? '#000' : '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 8 }}>
                    {plan.price}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: i === 1 ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.3)', marginBottom: 20 }}>
                    {plan.duration} delivery
                  </div>
                  <p style={{ fontSize: 15, color: i === 1 ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                    {plan.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <div style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                        background: i === 1 ? '#b4fd83' : 'rgba(180,253,131,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={i === 1 ? '#000' : '#b4fd83'} strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                      </div>
                      <span style={{ fontSize: 14, color: i === 1 ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="#contact" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  height: 56, borderRadius: 100, textDecoration: 'none', marginTop: 'auto',
                  fontWeight: 600, fontSize: 15, transition: '0.3s',
                  background: i === 1 ? '#000' : 'rgba(255,255,255,0.08)',
                  color: i === 1 ? '#fff' : 'rgba(255,255,255,0.7)',
                  border: i === 1 ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
                >
                  {plan.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 48, fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>
            All prices in USD. NDA signed before any project discussion. Source code transferred upon final payment.
          </p>
        </div>
      </section>

      {/* ── PROCESS — VERTICAL TIMELINE ──────────────────────────────────── */}
      <section style={{ background: '#000', padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ marginBottom: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>How We Work</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
                Concept to App Store<br />
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>In 6 Steps.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, margin: 0 }}>
                Every project follows the same battle-tested framework. No surprises, no scope creep — just consistent delivery.
              </p>
            </div>
          </div>

          {/* Vertical steps */}
          <div style={{ position: 'relative' }}>
            {/* Connecting line */}
            <div style={{
              position: 'absolute', top: 0, bottom: 0, left: 27,
              width: 1, background: 'linear-gradient(to bottom, #b4fd83, rgba(180,253,131,0.1))',
              zIndex: 0,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {process.map((step, i) => (
                <div
                  key={step.num}
                  className="reveal-up"
                  style={{
                    display: 'grid', gridTemplateColumns: '56px 1fr',
                    gap: 40, paddingBottom: i < process.length - 1 ? 64 : 0,
                    position: 'relative', zIndex: 1,
                  }}
                >
                  {/* Step badge */}
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                    background: i === 0 ? '#b4fd83' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${i === 0 ? '#b4fd83' : 'rgba(255,255,255,0.1)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    color: i === 0 ? '#000' : 'rgba(255,255,255,0.5)',
                  }}>
                    {step.num}
                  </div>

                  {/* Content card */}
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 32, padding: '48px 56px',
                      display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'start',
                      transition: '0.3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)';
                      e.currentTarget.style.background = 'rgba(180,253,131,0.03)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: 26, fontWeight: 600, color: '#fff', marginBottom: 16, letterSpacing: '-0.02em' }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: 0, maxWidth: 600 }}>
                        {step.desc}
                      </p>
                      {/* Deliverables */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 28 }}>
                        {step.deliverables.map(d => (
                          <span key={d} style={{
                            fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)',
                            padding: '7px 16px', border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 100, display: 'flex', alignItems: 'center', gap: 6,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Duration badge */}
                    <div style={{ flexShrink: 0, textAlign: 'right' }}>
                      <div style={{
                        display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
                        padding: '20px 28px', background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20,
                      }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Duration</span>
                        <span style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM EXPERTISE ───────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '160px 0', borderTop: '1px solid #f2f2f2' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ marginBottom: 80 }}>
            <div className="section-tag">Platform Expertise</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
              <h2 className="section-heading" style={{ color: '#000', margin: 0 }}>
                Native Depth Across<br />
                <span style={{ color: 'rgba(0,0,0,0.25)' }}>Every Ecosystem.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(0,0,0,0.45)', lineHeight: 1.7, margin: 0 }}>
                Platform-certified engineers who know every API, every design guideline, and every edge case that trips up generalist teams.
              </p>
            </div>
          </div>

          {/* Tab buttons */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 48 }}>
            {platforms.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '14px 36px', borderRadius: 100, cursor: 'pointer', fontSize: 14, fontWeight: 600,
                  border: activeTab === i ? '1px solid #000' : '1px solid #f0f0f0',
                  background: activeTab === i ? '#000' : 'transparent',
                  color: activeTab === i ? '#fff' : 'rgba(0,0,0,0.45)',
                  transition: '0.3s',
                }}
              >{p.label}</button>
            ))}
          </div>

          {/* Tab panel */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
            border: '1px solid #f0f0f0', borderRadius: 48, overflow: 'hidden',
          }}>
            {/* Left */}
            <div style={{ padding: '80px', borderRight: '1px solid #f0f0f0' }}>
              <div style={{
                display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#000', background: '#b4fd83',
                padding: '8px 18px', borderRadius: 100, marginBottom: 32,
              }}>
                {platforms[activeTab].lang}
              </div>
              <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 500, color: '#000', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 48 }}>
                {platforms[activeTab].label} Development
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {platforms[activeTab].capabilities.map(cap => (
                  <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                      background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <span style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)', fontWeight: 400 }}>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — stat + CTA */}
            <div style={{ padding: '80px', background: '#fafafa', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 500, color: '#000', letterSpacing: '-0.06em', lineHeight: 1 }}>
                  {platforms[activeTab].stat}
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 12, marginBottom: 48 }}>
                  {platforms[activeTab].statLabel}
                </div>
                <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.45)', lineHeight: 1.8 }}>
                  All our {platforms[activeTab].label} engineers are platform-certified and have shipped at least 5 production apps on this ecosystem.
                </p>
              </div>
              <Link href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 40,
                height: 56, padding: '0 32px', borderRadius: 100, width: 'fit-content',
                background: '#000', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none',
                transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
              >
                Hire {platforms[activeTab].label} Developers
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUCCESS METRICS ───────────────────────────────────────────────── */}
      <section ref={metricsRef} style={{ background: '#000', padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
            {metrics.map((m, i) => (
              <div
                key={m.label}
                style={{
                  padding: '60px 48px',
                  borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, #b4fd83, transparent)', marginBottom: 32, opacity: 0.6 }} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 14 }}>
                  <span className={`mv-${i}`} style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.05em', lineHeight: 1 }}>0</span>
                  <span style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 500, color: 'rgba(255,255,255,0.2)' }}>{m.suffix}</span>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <section id="case-studies" style={{ background: '#fff', padding: '160px 0', borderTop: '1px solid #f2f2f2' }}>
        <div className="cb-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 80, gap: 40, flexWrap: 'wrap' }}>
            <div className="reveal-up">
              <div className="section-tag">Case Studies</div>
              <h2 className="section-heading" style={{ color: '#000' }}>
                Real Apps.<br />
                <span style={{ color: 'rgba(0,0,0,0.25)' }}>Measurable Impact.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {caseStudies.map((cs, i) => (
                <button
                  key={cs.category}
                  onClick={() => setActiveCase(i)}
                  style={{
                    padding: '12px 28px', borderRadius: 100,
                    border: activeCase === i ? '1px solid #000' : '1px solid #f0f0f0',
                    background: activeCase === i ? '#000' : 'transparent',
                    color: activeCase === i ? '#fff' : 'rgba(0,0,0,0.45)',
                    fontSize: 13, fontWeight: 500, cursor: 'pointer', transition: '0.3s',
                  }}
                >{cs.category}</button>
              ))}
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            border: '1px solid #f0f0f0', borderRadius: 48, overflow: 'hidden', minHeight: 560,
          }}>
            {/* Left content */}
            <div style={{ padding: 'clamp(40px, 6vw, 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {caseStudies[activeCase].client}
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.3)', letterSpacing: '0.08em' }}>
                    {caseStudies[activeCase].year}
                  </span>
                </div>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#000', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 24 }}>
                  {caseStudies[activeCase].title}
                </h3>
                <p style={{ fontSize: 18, color: 'rgba(0,0,0,0.5)', lineHeight: 1.7, maxWidth: 480 }}>
                  {caseStudies[activeCase].desc}
                </p>
              </div>
              <div>
                <div style={{ display: 'flex', gap: 48, marginBottom: 48 }}>
                  <div>
                    <div style={{ fontSize: 56, fontWeight: 500, color: '#000', letterSpacing: '-0.04em', lineHeight: 1 }}>{caseStudies[activeCase].metric}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(0,0,0,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 8 }}>{caseStudies[activeCase].metricLabel}</div>
                  </div>
                  <div style={{ width: 1, background: '#f0f0f0' }} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignContent: 'center' }}>
                    {caseStudies[activeCase].tags.map(tag => (
                      <span key={tag} style={{ fontSize: 13, fontWeight: 500, color: '#000', padding: '10px 20px', border: '1px solid #f0f0f0', borderRadius: 100 }}>{tag}</span>
                    ))}
                  </div>
                </div>
                <button style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, height: 56,
                  padding: '0 32px', borderRadius: 100, background: '#000', color: '#fff',
                  fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer',
                }}>
                  Read Full Case Study
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div style={{ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '20%', left: '20%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(180,253,131,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              <div style={{
                width: 200, height: 400, borderRadius: 32,
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 20, padding: 32,
              }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(180,253,131,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="1.5"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zM3 20c0-4 4-7 9-7s9 3 9 7" /></svg>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{caseStudies[activeCase].client}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginTop: 4, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{caseStudies[activeCase].category}</div>
                </div>
                <div style={{ padding: '10px 20px', background: 'rgba(180,253,131,0.12)', borderRadius: 100, fontSize: 18, fontWeight: 700, color: '#b4fd83' }}>
                  {caseStudies[activeCase].metric}
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
                  {caseStudies[activeCase].metricLabel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ background: '#000', padding: '160px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ marginBottom: 100 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 24 }}>Client Stories</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
              Don't Take Our Word<br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>For It.</span>
            </h2>
          </div>

          <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {testimonials.map((t) => (
              <div
                key={t.author}
                style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 40, padding: '56px 48px', display: 'flex', flexDirection: 'column',
                  gap: 40, transition: '0.4s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                {/* Quote mark */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(180,253,131,0.3)">
                  <path d="M14.017 21v-3c0-1.105.895-2 2-2h3v-6c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v2h-2V7h10v14h-5zM2.017 21v-3c0-1.105.895-2 2-2h3V10c0-1.105-.895-2-2-2h-4V21h1z" />
                </svg>

                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0, fontWeight: 400, fontStyle: 'italic', flex: 1 }}>
                  "{t.quote}"
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20 }}>
                  <div>
                    <div style={{ width: 1, height: 32, background: '#b4fd83', marginBottom: 16, opacity: 0.5 }} />
                    <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>{t.author}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.role}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontSize: 28, fontWeight: 600, color: '#b4fd83', letterSpacing: '-0.03em' }}>{t.metric}</div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{t.metricLabel}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
      <section style={{ background: '#000', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="cb-container">
          <div className="reveal-up" style={{ textAlign: 'center', marginBottom: 80 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Technology</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: 0 }}>
              Best-in-Class Stack.<br />
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Future-Proof Architecture.</span>
            </h2>
          </div>
          <div className="reveal-stagger" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                style={{
                  padding: '16px 28px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100,
                  fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)',
                  transition: '0.3s', cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.3)'; e.currentTarget.style.color = '#b4fd83'; e.currentTarget.style.background = 'rgba(180,253,131,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '160px 0', borderTop: '1px solid #f2f2f2' }}>
        <div className="cb-container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 120, alignItems: 'start' }}>
            <div className="reveal-up" style={{ position: 'sticky', top: 120 }}>
              <div className="section-tag">FAQ</div>
              <h2 className="section-heading" style={{ color: '#000', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Everything You<br />
                <span style={{ color: 'rgba(0,0,0,0.25)' }}>Need to Know.</span>
              </h2>
              <p className="section-subtext">
                Still have questions? Our team is available 24/7 to walk you through your project requirements.
              </p>
              <Link href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginTop: 40, height: 52, padding: '0 28px', borderRadius: 100,
                background: '#000', color: '#fff', fontSize: 14, fontWeight: 500, textDecoration: 'none',
              }}>
                Talk to an Expert
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="reveal-up" style={{ display: 'flex', flexDirection: 'column' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: '1px solid #f2f2f2', overflow: 'hidden' }}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '32px 0', background: 'none', border: 'none', cursor: 'pointer',
                      textAlign: 'left', gap: 24,
                    }}
                  >
                    <span style={{ fontSize: 18, fontWeight: 500, color: '#000', lineHeight: 1.4, letterSpacing: '-0.01em' }}>{faq.q}</span>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                      background: activeFaq === i ? '#000' : '#f5f5f5',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={activeFaq === i ? '#fff' : '#000'} strokeWidth="2.5" style={{ transition: '0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </button>
                  <div style={{ maxHeight: activeFaq === i ? 300 : 0, overflow: 'hidden', transition: 'max-height 0.5s cubic-bezier(0.165,0.84,0.44,1)' }}>
                    <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.5)', lineHeight: 1.8, paddingBottom: 32, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="contact" style={{ background: '#000', padding: '160px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 800, height: 400,
          background: 'radial-gradient(ellipse, rgba(180,253,131,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />
        <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="reveal-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'rgba(180,253,131,0.1)', border: '1px solid rgba(180,253,131,0.2)',
              borderRadius: 100, padding: '10px 24px',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#b4fd83' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Ready to Build?</span>
            </div>
            <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.05em', lineHeight: 1.05, margin: 0, maxWidth: 900 }}>
              Your App Is One<br />
              <span style={{ color: '#b4fd83' }}>Conversation Away.</span>
            </h2>
            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)', maxWidth: 600, lineHeight: 1.6, margin: 0 }}>
              Tell us about your idea and we'll scope it, plan it, and build it — on time, on budget, every time.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, height: 64, padding: '0 48px',
                borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 16, fontWeight: 600,
                textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(180,253,131,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 12, height: 64, padding: '0 48px',
                borderRadius: 100, border: '1px solid rgba(255,255,255,0.15)', color: '#fff',
                fontSize: 16, fontWeight: 500, textDecoration: 'none', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              >
                Back to Home
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 48, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {['No Upfront Cost', '8-Week MVP Guarantee', 'NDA Signed on Day 1'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(180,253,131,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
                  </div>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
