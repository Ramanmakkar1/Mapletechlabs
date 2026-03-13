'use client';

import { useRef, useEffect, useState } from 'react';

const awards = [
  { name: 'Clutch Top Developer', year: '2024', domain: 'clutch.co' },
  { name: 'Google Certified Agency', year: '2024', domain: 'google.com' },
  { name: 'Forbes Business Council', year: '2023', domain: 'forbes.com' },
  { name: 'Webby Award Nominee', year: '2024', domain: 'webbyawards.com' },
  { name: 'Red Herring 100', year: '2023', domain: 'redherring.com' },
  { name: 'Deloitte Fast 50', year: '2024', domain: 'deloitte.com' },
];

function AwardBadge({ name, year, domain, revealClass }: { name: string; year: string; domain: string; revealClass: string }) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoSrc = `https://logo.clearbit.com/${domain}`;

  return (
    <div
      className={revealClass}
      style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 22px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, transition: '0.3s', cursor: 'default' }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.3)'; e.currentTarget.style.background = 'rgba(180,253,131,0.05)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'transparent'; }}
    >
      {!imgFailed ? (
        <img
          src={logoSrc}
          alt={name}
          style={{ height: 18, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(0.7)' }}
          onError={() => setImgFailed(true)}
        />
      ) : null}
      <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '-0.01em' }}>{name}</span>
      <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.25)' }}>{year}</span>
    </div>
  );
}

export default function FeaturedAwards() {
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
    <section ref={ref} id="awards" className="section-padding-sm" style={{ background: '#000', padding: '72px 0', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em', flexShrink: 0 }}>
            Recognised By
          </div>
          <div className="awards-row" style={{ flex: 1 }}>
            {awards.map((a, i) => (
              <AwardBadge key={a.name} name={a.name} year={a.year} domain={a.domain} revealClass={`reveal reveal-d${Math.min(i + 1, 6)}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
