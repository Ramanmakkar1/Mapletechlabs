'use client';
import { useRef, useEffect } from 'react';

const rows = [
  { feature: 'Fixed-Price Contract',       us: true,  agency: false, freelancer: false },
  { feature: 'Dedicated Senior Engineers', us: true,  agency: false, freelancer: true  },
  { feature: 'IP Ownership Day 1',         us: true,  agency: false, freelancer: true  },
  { feature: '8-Week MVP Delivery',        us: true,  agency: false, freelancer: false },
  { feature: 'NDA Signed Upfront',         us: true,  agency: true,  freelancer: false },
  { feature: '24/7 Post-Launch SLA',       us: true,  agency: true,  freelancer: false },
  { feature: 'Transparent Weekly Demos',   us: true,  agency: false, freelancer: false },
  { feature: 'Full Source Code Handover',  us: true,  agency: false, freelancer: true  },
  { feature: 'Scalable to Enterprise',     us: true,  agency: true,  freelancer: false },
];

const Check = () => (
  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(180,253,131,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b4fd83" strokeWidth="3"><path d="M20 6L9 17l-5-5" /></svg>
  </div>
);

const Cross = () => (
  <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
  </div>
);

export default function ComparisonTable() {
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
    <section ref={ref} className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 80 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>How We Compare</div>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: '0 auto', maxWidth: 800 }}>
            Why Clients Choose Us<br />
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>Over the Alternatives.</span>
          </h2>
        </div>

        {/* Table */}
        <div className="reveal reveal-d1 comparison-table" style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 40 }}>
          <div className="comparison-table-inner" style={{ overflow: 'hidden' }}>
          {/* Header row */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ padding: '28px 40px', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Feature</div>
            {[
              { label: 'Mapletech Labs', highlight: true },
              { label: 'Traditional Agency', highlight: false },
              { label: 'Freelancer', highlight: false },
            ].map(col => (
              <div key={col.label} style={{ padding: '28px 32px', textAlign: 'center', borderLeft: '1px solid rgba(255,255,255,0.06)', background: col.highlight ? 'rgba(180,253,131,0.05)' : 'transparent' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: col.highlight ? '#b4fd83' : 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>{col.label}</div>
                {col.highlight && <div style={{ width: 32, height: 2, background: '#b4fd83', borderRadius: 1, margin: '8px auto 0' }} />}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: '0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div style={{ padding: '22px 40px', fontSize: 15, color: 'rgba(255,255,255,0.7)', fontWeight: 500, display: 'flex', alignItems: 'center' }}>{row.feature}</div>
              <div style={{ padding: '22px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)', background: 'rgba(180,253,131,0.02)' }}>
                <Check />
              </div>
              <div style={{ padding: '22px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                {row.agency ? <Check /> : <Cross />}
              </div>
              <div style={{ padding: '22px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                {row.freelancer ? <Check /> : <Cross />}
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* CTA below table */}
        <div className="reveal reveal-d2" style={{ textAlign: 'center', marginTop: 60 }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>Ready to work with a team that checks every box?</p>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 56, padding: '0 36px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 15, fontWeight: 700, textDecoration: 'none', transition: '0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(180,253,131,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
