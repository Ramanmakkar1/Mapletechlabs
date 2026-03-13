'use client';

import { useRef, useEffect } from 'react';
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

const stats = [
  { value: '300+', label: 'Projects Delivered' },
  { value: '150+', label: 'Engineers Worldwide' },
  { value: '12', label: 'Countries' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '$500M+', label: 'Client Revenue Generated' },
];

const timeline = [
  { year: '2018', event: 'Founded in Toronto by engineers from Google, Amazon & Shopify.' },
  { year: '2019', event: 'First 25 clients. Revenue crosses $1M. Team grows to 18 engineers.' },
  { year: '2020', event: 'Opened London office. Expanded into European market.' },
  { year: '2021', event: 'Series A funding. Headcount doubles. First enterprise contracts.' },
  { year: '2022', event: 'Dubai and New York offices established. Now operating on 3 continents.' },
  { year: '2023', event: '500+ projects milestone. Recognised in Deloitte\'s Fast 50.' },
  { year: '2024', event: 'Mapletech AI Labs launched. Dedicated research team for applied AI.' },
  { year: '2026', event: 'Global team of 150+ engineers. $500M+ in client revenue generated.' },
];

const values = [
  {
    icon: '🏆',
    title: 'Engineering Excellence',
    desc: 'We hold our code, our architecture, and our processes to the highest standard. Mediocre work doesn\'t leave our doors.',
  },
  {
    icon: '❤️',
    title: 'Client Obsession',
    desc: 'Your success is the only metric that matters. We measure ourselves by the outcomes we create for the businesses we build with.',
  },
  {
    icon: '🔍',
    title: 'Radical Transparency',
    desc: 'No jargon, no surprises, no vanity metrics. You always know exactly where your project stands and what it will cost.',
  },
  {
    icon: '⚡',
    title: 'Speed Without Compromise',
    desc: 'We move fast because we\'ve built the systems that let us. Speed without quality is recklessness — we deliver both.',
  },
  {
    icon: '🔒',
    title: 'Security First',
    desc: 'Security is designed in from day one. Every system we build is architected to withstand the threats of tomorrow.',
  },
  {
    icon: '🌱',
    title: 'Long-term Thinking',
    desc: 'We build relationships and codebases designed to last. The decisions we make today should serve you five years from now.',
  },
];

const team = [
  {
    initials: 'RM',
    name: 'Raman Makkar',
    role: 'CEO & Co-founder',
    bio: 'Former Google engineer. Built Shopify\'s payments infrastructure.',
  },
  {
    initials: 'SK',
    name: 'Sarah Kim',
    role: 'CTO & Co-founder',
    bio: '10 years at Amazon. Architected systems serving 500M users.',
  },
  {
    initials: 'JT',
    name: 'James Torres',
    role: 'VP Engineering',
    bio: 'Led engineering at two unicorn startups.',
  },
  {
    initials: 'AP',
    name: 'Anika Patel',
    role: 'Chief Design Officer',
    bio: 'Former design lead at Airbnb and Stripe.',
  },
];

const offices = [
  { city: 'Toronto', role: 'HQ', detail: '121 King St W, Suite 1400', flag: '🇨🇦' },
  { city: 'New York', role: 'East Coast', detail: '350 Fifth Avenue, 59th Floor', flag: '🇺🇸' },
  { city: 'London', role: 'EMEA', detail: '1 Canada Square, Canary Wharf', flag: '🇬🇧' },
  { city: 'Dubai', role: 'MENA', detail: 'DIFC Gate Village, Building 3', flag: '🇦🇪' },
];

export default function AboutPage() {
  const pageRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={pageRef as React.RefObject<HTMLElement>} style={{ background: '#000', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section style={{ padding: '160px 0 100px', position: 'relative', overflow: 'hidden' }}>
          {/* Ambient glow */}
          <div style={{
            position: 'absolute', top: -200, left: '30%',
            width: 700, height: 700,
            background: 'radial-gradient(circle, rgba(180,253,131,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 24 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#b4fd83',
              }}>About Mapletech Labs</span>
            </div>
            <h1 className="reveal reveal-d1" style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 800, color: '#fff',
              lineHeight: 1.0, letterSpacing: '-0.05em', marginBottom: 32, maxWidth: 900,
            }}>
              We Build Software<br />That Matters.
            </h1>
            <p className="reveal reveal-d2" style={{
              fontSize: 20, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7,
              maxWidth: 600, marginBottom: 56,
            }}>
              A world-class engineering firm headquartered in Toronto, building the products that define industries. Founded 2018. 150+ engineers. 12 countries.
            </p>
            <div className="reveal reveal-d3" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '16px 36px', borderRadius: 100, background: '#b4fd83', color: '#000',
                  fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  Work With Us
                </button>
              </Link>
              <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '16px 36px', borderRadius: 100,
                  background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)',
                  fontSize: 15, fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  See Our Work
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── MISSION STATEMENT ── */}
        <section style={{
          padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.01)',
        }}>
          <div className="cb-container">
            <p className="reveal" style={{
              fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', fontWeight: 700, color: '#fff',
              lineHeight: 1.35, letterSpacing: '-0.03em', textAlign: 'center',
              maxWidth: 920, margin: '0 auto',
            }}>
              "Our mission is to democratise access to world-class software engineering.{' '}
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>
                Every company, regardless of size, deserves technology that competes at the highest level.
              </span>"
            </p>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
            }}>
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    padding: '52px 0', textAlign: 'center',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}
                >
                  <p style={{
                    fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#b4fd83',
                    letterSpacing: '-0.04em', margin: '0 0 8px',
                  }}>{stat.value}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', margin: 0, fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ── */}
        <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>

              {/* Text */}
              <div>
                <div className="reveal" style={{ marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.3)',
                  }}>Our Story</span>
                </div>
                <h2 className="reveal reveal-d1" style={{
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#fff',
                  letterSpacing: '-0.04em', marginBottom: 28, lineHeight: 1.1,
                }}>
                  Built by engineers,<br />for builders.
                </h2>
                <div className="reveal reveal-d2">
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                    Mapletech Labs was founded in Toronto in 2018 by Raman Makkar and Sarah Kim — two engineers who had spent years inside Google and Amazon watching great product ideas fail because the engineering teams building them lacked depth or accountability.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                    They started with a simple belief: the best engineering talent in the world shouldn't only be available to the biggest companies. Founders building their first product deserve the same quality of engineering judgment as a Series D company with a 200-person team.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 20 }}>
                    From a 5-person team in a co-working space on King Street West, Mapletech has grown into a global engineering firm with offices on four continents, a team of 150+ engineers, designers, and product strategists, and a track record of building products that have collectively generated over $500 million in client revenue.
                  </p>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                    The founding belief hasn't changed. Neither has the standard we hold ourselves to.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="reveal reveal-d2">
                <div style={{ position: 'relative', paddingLeft: 32 }}>
                  {/* Vertical line */}
                  <div style={{
                    position: 'absolute', left: 0, top: 12, bottom: 12,
                    width: 1, background: 'linear-gradient(to bottom, #b4fd83, rgba(180,253,131,0.1))',
                  }} />
                  {timeline.map((item, i) => (
                    <div key={item.year} style={{
                      position: 'relative', marginBottom: i < timeline.length - 1 ? 32 : 0,
                    }}>
                      {/* Dot */}
                      <div style={{
                        position: 'absolute', left: -38, top: 4,
                        width: 10, height: 10, borderRadius: '50%',
                        background: i === timeline.length - 1 ? '#b4fd83' : 'rgba(180,253,131,0.4)',
                        border: `2px solid ${i === timeline.length - 1 ? '#b4fd83' : 'rgba(180,253,131,0.2)'}`,
                      }} />
                      <div>
                        <span style={{
                          fontSize: 12, fontWeight: 800, color: '#b4fd83',
                          letterSpacing: '0.05em', display: 'block', marginBottom: 4,
                        }}>{item.year}</span>
                        <p style={{
                          fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0,
                        }}>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>What We Stand For</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff',
              letterSpacing: '-0.04em', marginBottom: 60, lineHeight: 1.1,
            }}>
              Our Values
            </h2>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20,
            }}>
              {values.map((val, i) => (
                <div
                  key={val.title}
                  className={`reveal reveal-d${Math.min(i + 1, 6)}`}
                  style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 24, padding: 36,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,253,131,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,253,131,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 20 }}>{val.icon}</div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 700, color: '#fff',
                    letterSpacing: '-0.02em', marginBottom: 12,
                  }}>{val.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP TEAM ── */}
        <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>The People Behind It</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Leadership Team
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
              maxWidth: 560, marginBottom: 60,
            }}>
              Former engineers from the world's most demanding technology companies, united by a belief that great software should be accessible to every builder.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
            }}>
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 24, padding: 32, textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,253,131,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,253,131,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Avatar */}
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                    background: 'rgba(180,253,131,0.1)', border: '2px solid rgba(180,253,131,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, fontWeight: 800, color: '#b4fd83',
                  }}>
                    {member.initials}
                  </div>
                  <h3 style={{
                    fontSize: 16, fontWeight: 700, color: '#fff',
                    letterSpacing: '-0.02em', marginBottom: 6,
                  }}>{member.name}</h3>
                  <p style={{ fontSize: 13, color: '#b4fd83', fontWeight: 600, marginBottom: 14 }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OFFICES ── */}
        <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="cb-container">
            <div className="reveal" style={{ marginBottom: 16 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}>Where We Are</span>
            </div>
            <h2 className="reveal reveal-d1" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff',
              letterSpacing: '-0.04em', marginBottom: 16, lineHeight: 1.1,
            }}>
              Global Offices
            </h2>
            <p className="reveal reveal-d2" style={{
              fontSize: 17, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7,
              maxWidth: 520, marginBottom: 60,
            }}>
              Four offices across three continents, one engineering culture.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20,
            }}>
              {offices.map((office, i) => (
                <div
                  key={office.city}
                  className={`reveal reveal-d${i + 1}`}
                  style={{
                    background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 24, padding: 32,
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(180,253,131,0.2)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(180,253,131,0.03)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{office.flag}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '-0.03em', marginBottom: 6 }}>
                    {office.city}
                  </h3>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#b4fd83', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                    {office.role}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>
                    {office.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section style={{ padding: '120px 0' }}>
          <div className="cb-container">
            <div
              className="reveal"
              style={{
                textAlign: 'center', padding: '80px 48px',
                background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 32, position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(180,253,131,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#b4fd83', display: 'block', marginBottom: 20, position: 'relative',
              }}>Join Our Clients</span>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', fontWeight: 800, color: '#fff',
                letterSpacing: '-0.04em', marginBottom: 20, lineHeight: 1.1, position: 'relative',
              }}>
                Join 150+ companies<br />building with us.
              </h2>
              <p style={{
                fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 500,
                margin: '0 auto 40px', lineHeight: 1.7, position: 'relative',
              }}>
                From seed-stage startups to public companies — we help every kind of builder ship software that makes a difference.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100, background: '#b4fd83', color: '#000',
                    fontSize: 16, fontWeight: 700, border: 'none', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    Start a Project
                  </button>
                </Link>
                <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                  <button style={{
                    padding: '18px 44px', borderRadius: 100,
                    background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)',
                    fontSize: 16, fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}>
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
