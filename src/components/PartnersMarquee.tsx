'use client';

import { useState } from 'react';

const partners: { name: string; domain: string }[] = [
  { name: 'Stripe', domain: 'stripe.com' },
  { name: 'Shopify', domain: 'shopify.com' },
  { name: 'Salesforce', domain: 'salesforce.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Google Cloud', domain: 'cloud.google.com' },
  { name: 'AWS', domain: 'aws.amazon.com' },
  { name: 'Twilio', domain: 'twilio.com' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Zendesk', domain: 'zendesk.com' },
  { name: 'Atlassian', domain: 'atlassian.com' },
  { name: 'Datadog', domain: 'datadoghq.com' },
  { name: 'Vercel', domain: 'vercel.com' },
  { name: 'MongoDB', domain: 'mongodb.com' },
  { name: 'Cloudflare', domain: 'cloudflare.com' },
  { name: 'Figma', domain: 'figma.com' },
];

function PartnerLogo({ name, domain }: { name: string; domain: string }) {
  const [failed, setFailed] = useState(false);
  const logoSrc = `https://logo.clearbit.com/${domain}`;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '10px 24px', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 100, minWidth: 100, height: 42,
      background: 'rgba(255,255,255,0.02)', transition: '0.3s', cursor: 'default',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; }}
    >
      {failed ? (
        <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.35)', whiteSpace: 'nowrap' }}>{name}</span>
      ) : (
        <img
          src={logoSrc}
          alt={name}
          style={{ height: 18, width: 'auto', maxWidth: 80, objectFit: 'contain', filter: 'brightness(0) invert(0.6)' }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '52px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Fade edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: 200, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 200, height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: 32, position: 'relative', zIndex: 3 }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
          Trusted by 150+ companies worldwide
        </span>
      </div>

      <div style={{ marginBottom: 10, display: 'flex', gap: 10, width: 'max-content', animation: 'marquee-l 40s linear infinite' }}>
        {[...partners, ...partners].map((p, i) => (
          <PartnerLogo key={`${p.domain}-${i}`} name={p.name} domain={p.domain} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'marquee-r 45s linear infinite' }}>
        {[...partners.slice(8), ...partners, ...partners.slice(0, 8)].map((p, i) => (
          <PartnerLogo key={`${p.domain}-r-${i}`} name={p.name} domain={p.domain} />
        ))}
      </div>
    </section>
  );
}
