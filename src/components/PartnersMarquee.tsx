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
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 24px',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 100,
        minWidth: 100,
        height: 44,
        background: 'rgba(255,255,255,0.02)',
        transition: '0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
      }}
    >
      {failed ? (
        <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.4)' }}>{name}</span>
      ) : (
        <img
          src={logoSrc}
          alt={name}
          style={{
            height: 20,
            width: 'auto',
            maxWidth: 80,
            objectFit: 'contain',
            filter: 'brightness(0) invert(0.7)',
          }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function PartnersMarquee() {
  return (
    <section className="section-padding-sm" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: 180, height: '100%', background: 'linear-gradient(to right, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, right: 0, width: 180, height: '100%', background: 'linear-gradient(to left, #000, transparent)', zIndex: 2, pointerEvents: 'none' }} />

      <div style={{ marginBottom: 12, display: 'flex', gap: 12, width: 'max-content', animation: 'marquee-l 40s linear infinite' }}>
        {[...partners, ...partners].map((p, i) => (
          <PartnerLogo key={`${p.domain}-${i}`} name={p.name} domain={p.domain} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'marquee-r 45s linear infinite' }}>
        {[...partners.slice(8), ...partners, ...partners.slice(0, 8)].map((p, i) => (
          <PartnerLogo key={`${p.domain}-r-${i}`} name={p.name} domain={p.domain} />
        ))}
      </div>
    </section>
  );
}
