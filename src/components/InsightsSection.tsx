'use client';
import { useRef, useEffect } from 'react';

const posts = [
  {
    tag: 'Engineering',
    title: 'How We Built a Real-Time Trading Engine Processing 2M+ Daily Transactions',
    excerpt: 'A deep dive into the architecture decisions, ML pipeline, and infrastructure choices that allowed FinanceHub to scale from 10K to 2M daily transactions without a single production incident.',
    readTime: '8 min read',
    date: 'Mar 2025',
    accent: '#b4fd83',
  },
  {
    tag: 'Product Design',
    title: 'The 5 UI Patterns That Reduced Our Client\'s Onboarding Drop-off by 60%',
    excerpt: 'We analysed 12 months of user sessions for MediCore\'s telehealth platform and identified the exact friction points costing them 60% of new users. Here\'s what we changed — and the results.',
    readTime: '6 min read',
    date: 'Feb 2025',
    accent: '#b4fd83',
  },
  {
    tag: 'Startup Strategy',
    title: 'Why Fixed-Price Development Is the Only Model That Protects Founders',
    excerpt: 'Time-and-materials billing creates a fundamental misalignment between agencies and clients. We explain why we built our entire business model around fixed-price contracts — and why it matters.',
    readTime: '5 min read',
    date: 'Jan 2025',
    accent: '#b4fd83',
  },
];

export default function InsightsSection() {
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
    <section ref={ref} id="insights" className="section-padding" style={{ background: '#000', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="cb-container">

        {/* Header */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, marginBottom: 80, flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Insights</div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1.05, margin: 0 }}>
              From the<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>Engineering Desk.</span>
            </h2>
          </div>
          <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, height: 48, padding: '0 28px', borderRadius: 100, border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: '0.3s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
          >
            View All Articles
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Cards */}
        <div className="insights-grid">
          {posts.map((post, i) => (
            <a
              key={post.title}
              href="/blog"
              className={`reveal reveal-d${i + 1}`}
              style={{
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 32,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.4s ease',
                background: 'rgba(255,255,255,0.02)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(180,253,131,0.25)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >
              {/* Image placeholder */}
              <div style={{ height: 200, background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0d0d0d 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: '20%', right: '20%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(180,253,131,0.12) 0%, transparent 65%)', filter: 'blur(40px)' }} />
                <div style={{ position: 'relative', zIndex: 1, padding: '12px 20px', background: 'rgba(180,253,131,0.08)', border: '1px solid rgba(180,253,131,0.15)', borderRadius: 100 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#b4fd83', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{post.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{post.date}</span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
