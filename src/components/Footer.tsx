'use client';

import Link from 'next/link';
import Image from 'next/image';

const cols = [
  { title: 'Services', links: [['Mobile Apps', '/services/mobile-app-development'], ['Web Systems', '#services'], ['AI Solutions', '#services'], ['Product Design', '#services'], ['Blockchain', '#services']] },
  { title: 'Company', links: [['About Us', '#about'], ['Case Studies', '#portfolio'], ['R&D Labs', '#labs'], ['Careers', '#contact'], ['Press', '#contact']] },
  { title: 'Industries', links: [['FinTech', '#industries'], ['Healthcare', '#industries'], ['E-Commerce', '#industries'], ['Logistics', '#industries'], ['Enterprise', '#industries']] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '100px 0 48px' }}>
      <div className="cb-container">
        <div className="footer-grid" style={{ marginBottom: 80 }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <Image
                src="/logo.png"
                alt="Mapletech Labs"
                width={120}
                height={44}
                style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 320, marginBottom: 32 }}>
              World-class software engineering for the companies shaping tomorrow. Offices across 12 countries.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#b4fd83' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#b4fd83', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Systems Operational</span>
            </div>
          </div>

          {/* Columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 28 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: '0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
                  >{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)' }}>© 2025 Mapletech Labs. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 32 }}>
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Cookie Policy', href: '/cookies' },
            ].map(({ label, href }) => (
              <Link key={label} href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', textDecoration: 'none', transition: '0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.25)'; }}
              >{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
