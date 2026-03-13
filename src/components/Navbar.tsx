'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── Mega menu data ──────────────────────────────────────────────────
const serviceCategories = [
  {
    title: 'Mobile App Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    links: [
      { label: 'iOS App Development', href: '/services/mobile-app-development' },
      { label: 'Android App Development', href: '/services/mobile-app-development' },
      { label: 'Flutter Development', href: '/services/mobile-app-development' },
      { label: 'React Native Apps', href: '/services/mobile-app-development' },
      { label: 'Cross-Platform Apps', href: '/services/mobile-app-development' },
    ],
  },
  {
    title: 'Web Development',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    links: [
      { label: 'Next.js Development', href: '#services' },
      { label: 'SaaS Platforms', href: '#services' },
      { label: 'E-Commerce Systems', href: '#services' },
      { label: 'API & Backend', href: '#services' },
      { label: 'Enterprise Portals', href: '#services' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
    links: [
      { label: 'LLM Integration', href: '#services' },
      { label: 'AI Automation', href: '#services' },
      { label: 'Computer Vision', href: '#services' },
      { label: 'Predictive Analytics', href: '#services' },
      { label: 'AI Chatbots', href: '#services' },
    ],
  },
  {
    title: 'Blockchain & Web3',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
    links: [
      { label: 'Smart Contracts', href: '#services' },
      { label: 'DeFi Protocols', href: '#services' },
      { label: 'NFT Platforms', href: '#services' },
      { label: 'Crypto Wallets', href: '#services' },
      { label: 'Web3 dApps', href: '#services' },
    ],
  },
  {
    title: 'Product Design',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    links: [
      { label: 'UI/UX Strategy', href: '#services' },
      { label: 'Wireframing', href: '#services' },
      { label: 'Prototyping', href: '#services' },
      { label: 'Design Systems', href: '#services' },
      { label: 'Brand Identity', href: '#services' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    links: [
      { label: 'AWS Architecture', href: '#services' },
      { label: 'Kubernetes & Docker', href: '#services' },
      { label: 'CI/CD Pipelines', href: '#services' },
      { label: 'Infrastructure as Code', href: '#services' },
      { label: 'Performance & Scaling', href: '#services' },
    ],
  },
];

const industryLinks = [
  { label: 'FinTech & Banking', href: '#industries' },
  { label: 'Healthcare & MedTech', href: '#industries' },
  { label: 'E-Commerce & Retail', href: '#industries' },
  { label: 'Logistics & Supply Chain', href: '#industries' },
  { label: 'Education & EdTech', href: '#industries' },
  { label: 'Enterprise & SaaS', href: '#industries' },
  { label: 'Real Estate & PropTech', href: '#industries' },
  { label: 'Gaming & Entertainment', href: '#industries' },
];

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'R&D Labs', href: '#labs' },
  { label: 'Awards & Recognition', href: '#awards' },
  { label: 'Careers', href: '#contact' },
];

// ── Component ───────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled || activeMenu ? 'rgba(0,0,0,0.95)' : 'transparent',
        backdropFilter: scrolled || activeMenu ? 'blur(24px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled || activeMenu ? 'blur(24px) saturate(180%)' : 'none',
        borderBottom: scrolled || activeMenu ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        padding: scrolled ? '14px 0' : '20px 0',
      }}>
        <div className="cb-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0, position: 'relative', zIndex: 2 }}>
              <div style={{ position: 'relative', height: 30, width: 110 }}>
                <Image src="/logo.png" alt="Mapletech Labs" fill style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="nav-desktop" style={{ gap: 4, alignItems: 'center', position: 'relative', zIndex: 2 }}>

              {/* Services */}
              <div onMouseEnter={() => openMenu('services')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 100,
                  background: activeMenu === 'services' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 13, fontWeight: 500, color: activeMenu === 'services' ? '#fff' : 'rgba(255,255,255,0.55)',
                  transition: '0.2s',
                }}>
                  Services
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'services' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {/* Industries */}
              <div onMouseEnter={() => openMenu('industries')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 100,
                  background: activeMenu === 'industries' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 13, fontWeight: 500, color: activeMenu === 'industries' ? '#fff' : 'rgba(255,255,255,0.55)',
                  transition: '0.2s',
                }}>
                  Industries
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'industries' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {/* Company */}
              <div onMouseEnter={() => openMenu('company')} onMouseLeave={closeMenu} style={{ position: 'relative' }}>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', borderRadius: 100,
                  background: activeMenu === 'company' ? 'rgba(255,255,255,0.06)' : 'transparent',
                  border: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  fontSize: 13, fontWeight: 500, color: activeMenu === 'company' ? '#fff' : 'rgba(255,255,255,0.55)',
                  transition: '0.2s',
                }}>
                  Company
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ transition: '0.3s', transform: activeMenu === 'company' ? 'rotate(180deg)' : 'none' }}><path d="M6 9l6 6 6-6" /></svg>
                </button>
              </div>

              {['Portfolio', 'Insights'].map(label => (
                <Link key={label} href={label === 'Portfolio' ? '#portfolio' : '#insights'} style={{
                  display: 'flex', alignItems: 'center', padding: '10px 16px', borderRadius: 100,
                  fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none', transition: '0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
                >{label}</Link>
              ))}
            </div>

            {/* CTA */}
            <div className="nav-desktop" style={{ gap: 12, alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <Link href="tel:+1234567890" style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                +1 (888) 000-0000
              </Link>
              <Link href="#contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8, height: 42, padding: '0 24px', borderRadius: 100,
                background: 'linear-gradient(135deg, #b4fd83, #7deb3e)', color: '#000', fontSize: 13, fontWeight: 700,
                textDecoration: 'none', letterSpacing: '-0.01em', transition: '0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(180,253,131,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                Get a Quote
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Mobile burger */}
            <button className="nav-mobile" onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, flexDirection: 'column', gap: 5, position: 'relative', zIndex: 2 }}
              aria-label="Toggle menu"
            >
              <div style={{ width: 24, height: 1.5, background: '#fff', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none' }} />
              <div style={{ width: 24, height: 1.5, background: '#fff', transition: '0.3s', opacity: menuOpen ? 0 : 1, margin: '5px 0' }} />
              <div style={{ width: 24, height: 1.5, background: '#fff', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* ── MEGA MENU: SERVICES ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            opacity: activeMenu === 'services' ? 1 : 0,
            visibility: activeMenu === 'services' ? 'visible' : 'hidden',
            transform: activeMenu === 'services' ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s',
            pointerEvents: activeMenu === 'services' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '40px 60px 48px' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b4fd83', marginBottom: 6 }}>What We Build</div>
                <div style={{ fontSize: 22, fontWeight: 500, color: '#fff', letterSpacing: '-0.03em' }}>End-to-End Engineering Services</div>
              </div>
              <Link href="/services/mobile-app-development" onClick={() => setActiveMenu(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 20px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.4)'; e.currentTarget.style.color = '#b4fd83'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                View All Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* 6-column service grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 36 }}>
              {serviceCategories.map((cat) => (
                <div key={cat.title} style={{ padding: '20px 18px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', transition: '0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.2)'; e.currentTarget.style.background = 'rgba(180,253,131,0.03)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
                >
                  {/* Category header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(180,253,131,0.1)', border: '1px solid rgba(180,253,131,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b4fd83', flexShrink: 0 }}>
                      {cat.icon}
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{cat.title}</span>
                  </div>

                  {/* Sub-links */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {cat.links.map(link => (
                      <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                        style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', textDecoration: 'none', padding: '5px 0', transition: '0.15s', display: 'flex', alignItems: 'center', gap: 6 }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#b4fd83'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
                      >
                        <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(180,253,131,0.4)', flexShrink: 0, display: 'inline-block' }} />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust strip */}
            <div style={{ display: 'flex', gap: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)', flexWrap: 'wrap' }}>
              {[['500+', 'Projects Shipped'], ['8wk', 'MVP Timeline'], ['100%', 'IP Ownership'], ['NDA', 'Signed on Day 1'], ['24/7', 'Post-Launch Support']].map(([val, label]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#b4fd83' }}>{val}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DROPDOWN: INDUSTRIES ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            opacity: activeMenu === 'industries' ? 1 : 0,
            visibility: activeMenu === 'industries' ? 'visible' : 'hidden',
            transform: activeMenu === 'industries' ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s',
            pointerEvents: activeMenu === 'industries' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '36px 60px 44px' }}>
            <div style={{ display: 'flex', gap: 80, alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b4fd83', marginBottom: 6 }}>Sectors We Serve</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', marginBottom: 28 }}>Deep Domain Expertise</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, minWidth: 440 }}>
                  {industryLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: '0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#b4fd83', flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Featured promo */}
              <div style={{ flex: 1, padding: '28px', borderRadius: 20, border: '1px solid rgba(180,253,131,0.15)', background: 'linear-gradient(135deg, rgba(180,253,131,0.05) 0%, rgba(0,0,0,0) 100%)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'radial-gradient(circle, rgba(180,253,131,0.15) 0%, transparent 70%)', filter: 'blur(20px)' }} />
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b4fd83', marginBottom: 10 }}>Featured Work</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.03em', marginBottom: 8 }}>AI Trading Engine</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 20 }}>Processing 2M+ transactions daily with real-time ML sentiment analysis for FinanceHub.</div>
                <Link href="#portfolio" onClick={() => setActiveMenu(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 700, color: '#b4fd83', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '12px'; }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '8px'; }}
                >
                  View Case Study
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── DROPDOWN: COMPANY ── */}
        <div
          onMouseEnter={cancelClose}
          onMouseLeave={closeMenu}
          style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            opacity: activeMenu === 'company' ? 1 : 0,
            visibility: activeMenu === 'company' ? 'visible' : 'hidden',
            transform: activeMenu === 'company' ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease, visibility 0.25s',
            pointerEvents: activeMenu === 'company' ? 'auto' : 'none',
          }}
        >
          <div className="cb-container" style={{ padding: '36px 60px 44px' }}>
            <div style={{ display: 'flex', gap: 80 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b4fd83', marginBottom: 6 }}>Mapletech Labs</div>
                <div style={{ fontSize: 20, fontWeight: 500, color: '#fff', letterSpacing: '-0.03em', marginBottom: 24 }}>Who We Are</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {companyLinks.map(link => (
                    <Link key={link.label} href={link.href} onClick={() => setActiveMenu(null)}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 10, fontSize: 14, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: '0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#b4fd83', flexShrink: 0 }} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ padding: '28px 32px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 16, minWidth: 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#b4fd83', boxShadow: '0 0 8px #b4fd83' }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Available for New Projects</span>
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>Ready to start your project?</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>Get a free consultation and fixed-price proposal within 24 hours.</div>
                <Link href="#contact" onClick={() => setActiveMenu(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 40, padding: '0 20px', borderRadius: 100, background: 'linear-gradient(135deg, #b4fd83, #7deb3e)', color: '#000', fontSize: 13, fontWeight: 700, textDecoration: 'none', width: 'fit-content' }}>
                  Book Free Call
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div style={{
        position: 'fixed', inset: 0, background: '#000', zIndex: 999, overflowY: 'auto',
        opacity: menuOpen ? 1 : 0, visibility: menuOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        display: 'flex', flexDirection: 'column', padding: '100px 32px 60px',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 48 }}>
          {['Services', 'Industries', 'Company', 'Portfolio', 'Insights'].map(label => (
            <Link key={label} href={`#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 28, fontWeight: 500, color: 'rgba(255,255,255,0.8)', textDecoration: 'none', letterSpacing: '-0.03em', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', transition: '0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
            >
              {label}
            </Link>
          ))}
        </div>
        <Link href="#contact" onClick={() => setMenuOpen(false)}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: 'linear-gradient(135deg, #b4fd83, #7deb3e)', color: '#000', fontSize: 16, fontWeight: 700, textDecoration: 'none', width: 'fit-content' }}
        >
          Get a Free Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </>
  );
}
