'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

const cardBase: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 24,
  background: 'rgba(255,255,255,0.02)',
  padding: '2rem',
  transition: 'border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s',
};

const cardHover: React.CSSProperties = {
  borderColor: 'rgba(180,253,131,0.2)',
  background: 'rgba(180,253,131,0.03)',
  transform: 'translateY(-4px)',
  boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
};

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...cardBase, ...(hovered ? cardHover : {}), ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}

export default function EdtechPage() {
  const heroRef = useRef<HTMLElement>(null);
  const s1 = useReveal() as React.RefObject<HTMLElement>;
  const s2 = useReveal() as React.RefObject<HTMLElement>;
  const s3 = useReveal() as React.RefObject<HTMLElement>;
  const s4 = useReveal() as React.RefObject<HTMLElement>;
  const s5 = useReveal() as React.RefObject<HTMLElement>;
  const s6 = useReveal() as React.RefObject<HTMLElement>;

  useEffect(() => {
    heroRef.current?.querySelectorAll('.reveal').forEach(n => setTimeout(() => n.classList.add('visible'), 100));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', paddingTop: 80 }}>

        {/* HERO */}
        <section ref={heroRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(180,253,131,0.08) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
          <div className="cb-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
            <div className="reveal" style={{ display: 'inline-block', border: '1px solid rgba(180,253,131,0.4)', borderRadius: 999, padding: '6px 20px', fontSize: 13, color: '#b4fd83', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              Education Technology
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build EdTech That <span style={{ color: '#b4fd83' }}>Inspires Learning.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              Adaptive learning platforms, live tutoring apps, and AI-powered assessment tools that make education accessible to everyone.
            </p>
            <div className="reveal" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
              <Link href="/contact" style={{ background: '#b4fd83', color: '#000', padding: '14px 32px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                Start Your Project
              </Link>
              <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 32px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                View Case Studies
              </Link>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', maxWidth: 600, margin: '0 auto' }}>
              {[['500K+', 'Learners Reached'], ['85%', 'Completion Rate'], ['4.8★', 'Learner Rating']].map(([val, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#b4fd83' }}>{val}</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: 4, letterSpacing: '0.05em' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHALLENGES */}
        <section ref={s1} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Key Challenges We Solve</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Engagement, scale, and personalisation — the three pillars of effective EdTech.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🎯', title: 'Learner Engagement', desc: 'Combating drop-off with gamification, streaks, peer learning, and AI nudges that keep learners coming back day after day.' },
                { icon: '📡', title: 'Content Delivery at Scale', desc: 'Adaptive video streaming, offline-capable mobile apps, and CDN-optimised content that delivers flawlessly to learners in any bandwidth environment.' },
                { icon: '🧠', title: 'Personalised Learning', desc: 'AI-powered curriculum adaptation, spaced repetition algorithms, and learning style detection that optimise each learner\'s unique path to mastery.' },
              ].map(c => (
                <Card key={c.title}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.75rem' }}>{c.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{c.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section ref={s2} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Our Solutions</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Learning experiences built for outcomes, not just completion.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                { title: 'Adaptive Learning Platforms', desc: 'AI-driven curriculum that adjusts difficulty in real time, spaced repetition scheduling, mastery-based progression, and detailed analytics for educators and learners.' },
                { title: 'Live Tutoring & Classrooms', desc: 'WebRTC-powered virtual classrooms with interactive whiteboards, breakout rooms, screen sharing, session recording, and post-class AI summaries.' },
              ].map(s => (
                <Card key={s.title} style={{ borderRadius: 32 }}>
                  <div style={{ display: 'inline-block', background: 'rgba(180,253,131,0.1)', borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#b4fd83', marginBottom: '1rem', letterSpacing: '0.05em' }}>Featured</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {['Gamification & Badges', 'LMS Integration', 'Assessment & Proctoring', 'Offline-Capable Mobile'].map(s => (
                <Card key={s} style={{ padding: '1.5rem' }}>
                  <div style={{ color: '#b4fd83', fontSize: '1.2rem', marginBottom: '0.5rem' }}>→</div>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem' }}>{s}</h4>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section ref={s3} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ border: '1px solid rgba(180,253,131,0.15)', borderRadius: 32, background: 'rgba(180,253,131,0.03)', padding: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Case Study</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#b4fd83', marginBottom: '0.5rem' }}>LearnPath</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>500K learners, 85% completion rate — industry avg is 15%</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>We rebuilt their platform with an AI-powered adaptive engine, gamified progress tracking, and a native mobile app that works offline — tripling engagement within 60 days.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #b4fd83', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Our learner engagement tripled after the new platform launched."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'normal' }}>— Head of Product, LearnPath</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section ref={s4} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Tech Stack</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Modern EdTech infrastructure for the next generation of learners.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Video', items: ['Agora', 'Daily.co', 'WebRTC', 'HLS', 'FFmpeg'] },
                { cat: 'AI', items: ['OpenAI', 'LangChain', 'spaCy', 'Recommendation ML'] },
                { cat: 'LMS', items: ['SCORM', 'xAPI', 'Canvas', 'Moodle', 'Google Classroom'] },
                { cat: 'Mobile', items: ['Flutter', 'React Native', 'Expo'] },
              ].map(t => (
                <Card key={t.cat}>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{t.cat}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {t.items.map(item => (
                      <span key={item} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 8, padding: '4px 12px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MAPLETECH */}
        <section ref={s5} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, marginBottom: '1rem' }}>Why Mapletech Labs</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>We build for learners first — then scale for millions.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '📚', title: 'Pedagogy-Informed Design', desc: 'Our product team includes learning designers who apply cognitive science principles — spaced repetition, interleaving, retrieval practice — to every feature we build.' },
                { icon: '♿', title: 'Accessibility-First', desc: 'WCAG 2.2 AA compliance, screen reader support, keyboard navigation, and high-contrast modes built in from day one so no learner is left behind.' },
                { icon: '🚀', title: 'Scale from Day 1', desc: 'We architect for the learner counts you want, not the ones you have. Our platforms handle 100 or 10 million users on the same codebase without rearchitecting.' },
              ].map(w => (
                <Card key={w.title}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{w.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem' }}>{w.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{w.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section ref={s6} className="section-padding">
          <div className="cb-container">
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Build Your <span style={{ color: '#b4fd83' }}>EdTech Platform.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Engaging, accessible, and scalable — learning platforms that change lives.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <Link href="/contact" style={{ background: '#b4fd83', color: '#000', padding: '16px 36px', borderRadius: 999, fontWeight: 700, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  Start Your Project
                </Link>
                <Link href="/case-studies" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '16px 36px', borderRadius: 999, fontWeight: 600, fontSize: '1rem', textDecoration: 'none', display: 'inline-block' }}>
                  See Our Work
                </Link>
              </div>
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {['WCAG 2.2 AA', 'SCORM & xAPI', 'Offline Capable', 'NDA on Request'].map(t => (
                  <span key={t} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.3)' }}>✓ {t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
