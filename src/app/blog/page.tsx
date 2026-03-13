'use client';

import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

const posts = [
  {
    slug: 'why-flutter-won-cross-platform',
    category: 'Engineering',
    title: 'Why Flutter Won the Cross-Platform War',
    excerpt: 'After years of fragmentation, the mobile cross-platform landscape has a clear winner. Here\'s the engineering story behind Flutter\'s dominance.',
    author: 'SK',
    authorName: 'Sarah Kim',
    date: 'Feb 2026',
    readTime: '6 min read',
  },
  {
    slug: 'building-llm-apps-that-dont-hallucinate',
    category: 'AI/ML',
    title: 'Building LLM Apps That Don\'t Hallucinate',
    excerpt: 'Retrieval-augmented generation, chain-of-thought prompting, and output validation — the practical toolkit for production-grade LLM reliability.',
    author: 'AP',
    authorName: 'Anika Patel',
    date: 'Feb 2026',
    readTime: '10 min read',
  },
  {
    slug: 'true-cost-of-technical-debt',
    category: 'Engineering',
    title: 'The True Cost of Technical Debt',
    excerpt: 'Technical debt compounds silently until it doesn\'t. We quantified the real productivity tax across 12 engineering teams — the numbers are sobering.',
    author: 'JT',
    authorName: 'James Torres',
    date: 'Jan 2026',
    readTime: '7 min read',
  },
  {
    slug: 'designing-for-trust-ux-fintech',
    category: 'Design',
    title: 'Designing for Trust: UX in FinTech',
    excerpt: 'When users entrust you with their money, every pixel carries weight. The design principles that make or break financial product adoption.',
    author: 'AP',
    authorName: 'Anika Patel',
    date: 'Jan 2026',
    readTime: '5 min read',
  },
  {
    slug: 'zero-to-1m-users-scaling-playbook',
    category: 'Business',
    title: 'From 0 to 1M Users: A Scaling Playbook',
    excerpt: 'Infrastructure, team structure, and product decisions that determine whether your app survives its first viral moment — or collapses under the load.',
    author: 'RM',
    authorName: 'Raman Makkar',
    date: 'Dec 2025',
    readTime: '9 min read',
  },
];

const categoryColors: Record<string, string> = {
  Engineering: '#60a5fa',
  'AI/ML': '#a78bfa',
  Mobile: '#34d399',
  Design: '#f472b6',
  Business: '#b4fd83',
};

export default function BlogPage() {
  const pageRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Engineering', 'AI/ML', 'Mobile', 'Design', 'Business'];

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
          {/* Background glow */}
          <div style={{
            position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
            width: 800, height: 800,
            background: 'radial-gradient(circle, rgba(180,253,131,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#b4fd83',
              }}>
                Mapletech Labs Journal
              </span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 700, color: '#fff',
              lineHeight: 1.05, letterSpacing: '-0.04em', marginBottom: 24, maxWidth: 800,
            }}>
              Insights &<br />Perspectives
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 48,
            }}>
              Deep dives into engineering, product, and the technology shaping tomorrow.
            </p>

            {/* Search bar */}
            <div className="reveal reveal-d3" style={{ marginBottom: 40, maxWidth: 520 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 100, padding: '12px 20px',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>Search articles…</span>
              </div>
            </div>

            {/* Category filter pills */}
            <div className="reveal reveal-d4" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 20px', borderRadius: 100, fontSize: 13, fontWeight: 500,
                    cursor: 'pointer', border: 'none', transition: 'all 0.2s',
                    background: activeCategory === cat ? '#b4fd83' : 'rgba(255,255,255,0.05)',
                    color: activeCategory === cat ? '#000' : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ── */}
        <section style={{ paddingBottom: 80, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: 32,
            }}>
              Featured Article
            </p>
            <Link href="/blog/top-10-unicorn-apps-2026" style={{ textDecoration: 'none', display: 'block' }}>
              <div
                className="reveal"
                style={{
                  background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 28, padding: 48, display: 'grid',
                  gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center',
                  borderLeft: '3px solid #b4fd83',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,253,131,0.35)';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,253,131,0.03)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLDivElement).style.borderLeftColor = '#b4fd83';
                  (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                      background: 'rgba(180,253,131,0.12)', color: '#b4fd83',
                      padding: '4px 12px', borderRadius: 100,
                    }}>Business</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>March 2026</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>·</span>
                    <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>8 min read</span>
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: '#fff',
                    letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16,
                  }}>
                    Top 10 Unicorn Apps of 2026
                  </h2>
                  <p style={{
                    fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
                    maxWidth: 620, marginBottom: 28,
                  }}>
                    The mobile apps that achieved billion-dollar valuations in 2026 share one thing in common: they were built different from the start. We analysed each one to extract the engineering and product decisions that made the difference.
                  </p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontSize: 14, fontWeight: 600, color: '#b4fd83',
                  }}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
                <div style={{
                  width: 200, height: 200, borderRadius: 20, flexShrink: 0,
                  background: 'linear-gradient(135deg, rgba(180,253,131,0.12) 0%, rgba(180,253,131,0.04) 100%)',
                  border: '1px solid rgba(180,253,131,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 64 }}>🦄</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── POSTS GRID ── */}
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <p className="reveal" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginBottom: 40,
            }}>
              Latest Articles
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
            }}>
              {posts.map((post, i) => {
                const accentColor = categoryColors[post.category] || '#b4fd83';
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                    <article
                      className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                      style={{
                        background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 24, padding: 32, height: '100%',
                        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                        display: 'flex', flexDirection: 'column', gap: 0,
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(180,253,131,0.2)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(180,253,131,0.03)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                        (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      }}
                    >
                      {/* Category badge */}
                      <div style={{ marginBottom: 20 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                          background: `${accentColor}15`, color: accentColor,
                          padding: '4px 12px', borderRadius: 100,
                        }}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: 18, fontWeight: 700, color: '#fff',
                        letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: 12,
                      }}>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p style={{
                        fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
                        marginBottom: 28, flexGrow: 1,
                      }}>
                        {post.excerpt}
                      </p>

                      {/* Footer */}
                      <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        marginTop: 'auto', paddingTop: 20,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          {/* Author avatar */}
                          <div style={{
                            width: 30, height: 30, borderRadius: '50%',
                            background: 'rgba(180,253,131,0.12)', border: '1px solid rgba(180,253,131,0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 11, fontWeight: 700, color: '#b4fd83',
                          }}>
                            {post.author}
                          </div>
                          <div>
                            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>{post.date}</p>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
                          </svg>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{post.readTime}</span>
                        </div>
                      </div>

                      <div style={{ marginTop: 16 }}>
                        <span style={{
                          fontSize: 13, fontWeight: 600, color: '#b4fd83',
                          display: 'inline-flex', alignItems: 'center', gap: 6,
                        }}>
                          Read More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER CTA ── */}
        <section style={{ paddingBottom: 120, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container" style={{ paddingTop: 80 }}>
            <div
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 28, padding: '64px 48px', textAlign: 'center',
              }}
            >
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#b4fd83', display: 'block', marginBottom: 20,
              }}>Newsletter</span>
              <h2 style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
                letterSpacing: '-0.03em', marginBottom: 16,
              }}>
                Get the latest insights delivered.
              </h2>
              <p style={{
                fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40, maxWidth: 460, margin: '0 auto 40px',
              }}>
                Engineering deep dives, product strategy, and startup insights — twice a month, no noise.
              </p>
              <div style={{
                display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
              }}>
                <input
                  type="email"
                  placeholder="you@company.com"
                  style={{
                    padding: '14px 24px', borderRadius: 100, background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: 15,
                    outline: 'none', width: 300,
                  }}
                />
                <button style={{
                  padding: '14px 32px', borderRadius: 100, background: '#b4fd83', color: '#000',
                  fontSize: 14, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  Subscribe
                </button>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 20 }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
