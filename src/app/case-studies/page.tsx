import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Case Studies | Mapletech Labs',
  description: 'Explore our portfolio of successful projects across FinTech, Healthcare, Retail, and more.',
};

const projects = [
  { client: 'FinanceHub', title: 'AI Trading Engine', category: 'FinTech', desc: 'Processing 2M+ transactions daily with real-time ML sentiment analysis and sub-50ms latency.', tags: ['Python', 'AWS', 'SageMaker'], metric: '2M+', metricLabel: 'Daily TXs' },
  { client: 'MediCore', title: 'Telehealth Platform', category: 'Healthcare', desc: 'HIPAA-compliant platform connecting 100K+ patients with specialists via encrypted HD video.', tags: ['React Native', 'WebRTC', 'HealthKit'], metric: '100K+', metricLabel: 'Patients' },
  { client: 'RetailX', title: 'Enterprise Commerce', category: 'Retail', desc: 'High-scale headless commerce handling 500K concurrent users during peak sale events.', tags: ['Next.js', 'Kubernetes', 'Redis'], metric: '500K', metricLabel: 'Concurrent Users' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Case Studies</h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
            Engineering impact at scale. Explore how we&apos;ve helped clients across industries build and ship world-class software.
          </p>
          <div style={{ display: 'grid', gap: 24 }}>
            {projects.map((p) => (
              <div key={p.client} style={{ padding: 40, border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, background: 'rgba(255,255,255,0.02)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.client}</span>
                <h2 style={{ fontSize: 28, fontWeight: 600, color: '#fff', margin: '12px 0 16px' }}>{p.title}</h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.5)', padding: '8px 16px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100 }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 700, color: '#b4fd83' }}>{p.metric}</div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.metricLabel}</div>
                  </div>
                  <Link href="/#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, height: 48, padding: '0 24px', borderRadius: 100, background: '#b4fd83', color: '#000', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                    Start a similar project
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
