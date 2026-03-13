import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Insights & Blog | Mapletech Labs',
  description: 'Engineering insights, product design lessons, and startup strategy from the Mapletech Labs team.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', padding: '140px 0 80px', minHeight: '60vh' }}>
        <div className="cb-container">
          <Link href="/" style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: 40, display: 'inline-block' }}>← Back to Home</Link>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, color: '#fff', marginBottom: 16 }}>Insights</h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, maxWidth: 560, marginBottom: 48 }}>
            Engineering insights, product design lessons, and startup strategy from our team.
          </p>
          <div style={{ display: 'grid', gap: 24 }} className="blog-post-links">
            <Link href="/#insights" className="blog-post-link">
              <span style={{ fontSize: 12, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Engineering</span>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '12px 0 8px' }}>How We Built a Real-Time Trading Engine Processing 2M+ Daily Transactions</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>8 min read · Mar 2025</p>
            </Link>
            <Link href="/#insights" className="blog-post-link">
              <span style={{ fontSize: 12, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Product Design</span>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '12px 0 8px' }}>The 5 UI Patterns That Reduced Our Client&apos;s Onboarding Drop-off by 60%</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>6 min read · Feb 2025</p>
            </Link>
            <Link href="/#insights" className="blog-post-link">
              <span style={{ fontSize: 12, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Startup Strategy</span>
              <h2 style={{ fontSize: 20, fontWeight: 600, color: '#fff', margin: '12px 0 8px' }}>Why Fixed-Price Development Is the Only Model That Protects Founders</h2>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>5 min read · Jan 2025</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
