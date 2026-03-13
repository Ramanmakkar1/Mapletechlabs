'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const awards = [
  {
    name: 'Clutch Top Generative AI',
    year: '2026',
    src: '/awards/Clutch-Top-GenerativeAI-Company2026.png',
    type: 'img',
  },
  {
    name: 'Top App Development',
    year: '2024',
    src: '/awards/top_clutch.co_app_development.webp',
    type: 'img',
  },
  {
    name: 'Webby Honoree',
    year: '2024',
    src: '/awards/bw_webby_honoree.webp',
    type: 'img',
  },
  {
    name: 'Flutter Service Award',
    year: '2024',
    src: '/awards/Service-Award-1-flutter.webp',
    type: 'img',
  },
  {
    name: 'AWS Advanced Tier',
    year: '2024',
    src: '/awards/aws-advance-tier.svg',
    type: 'svg',
  },
  {
    name: 'AWS Cloud Ops',
    year: '2024',
    src: '/awards/aws-cloud-op-icon.svg',
    type: 'svg',
  },
  {
    name: 'SOC II Certified',
    year: '2024',
    src: '/awards/socII-icon.svg',
    type: 'svg',
  },
  {
    name: 'ISO Certified',
    year: '2023',
    src: '/awards/ISO-icon.svg',
    type: 'svg',
  },
  {
    name: 'Red Herring 100',
    year: '2023',
    src: '/awards/red-hirring.webp',
    type: 'img',
  },
];

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
    <section ref={ref} id="awards" style={{ background: '#000', padding: '80px 0 100px', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(180,253,131,0.04) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="cb-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
            Recognition & Certifications
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.1, margin: '0 auto', maxWidth: 600 }}>
            Trusted, Verified &<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Globally Recognised.</span>
          </h2>
        </div>

        {/* Awards grid */}
        <div className="reveal reveal-d1 awards-grid">
          {awards.map((award, i) => (
            <div
              key={award.name}
              className={`reveal-d${Math.min(i + 1, 6)}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                padding: '28px 20px',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 20,
                background: 'rgba(255,255,255,0.02)',
                transition: 'all 0.35s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(180,253,131,0.25)';
                e.currentTarget.style.background = 'rgba(180,253,131,0.04)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = '';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div style={{ width: 80, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <Image
                  src={award.src}
                  alt={award.name}
                  fill
                  style={{ objectFit: 'contain', filter: award.type === 'svg' ? 'brightness(0) invert(0.7)' : 'none' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{award.name}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{award.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
