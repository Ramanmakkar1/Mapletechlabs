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

export default function HealthcarePage() {
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
              Healthcare Technology
            </div>
            <h1 className="reveal" style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              We Build HealthTech That <span style={{ color: '#b4fd83' }}>Saves Lives.</span>
            </h1>
            <p className="reveal" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
              HIPAA-compliant telehealth platforms, EHR integrations, and clinical AI tools trusted by healthcare providers.
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
              {[['100K+', 'Patients Served'], ['HIPAA', 'Compliant'], ['HL7/FHIR', 'Certified']].map(([val, label]) => (
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
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Healthcare demands trust. We engineer systems that earn it.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🏥', title: 'HIPAA Compliance', desc: 'Building PHI-safe systems with end-to-end encryption, audit logs, and access controls that satisfy compliance officers and protect patients.' },
                { icon: '🔗', title: 'EHR Integration', desc: 'Connecting seamlessly with Epic, Cerner, and Allscripts using HL7 FHIR standards so clinical data flows where it needs to go.' },
                { icon: '❤️', title: 'Patient Experience', desc: 'Designing interfaces that reduce cognitive load for patients and clinicians alike — intuitive, accessible, and built for real-world use.' },
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
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Clinical-grade software from consultation to care delivery.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {[
                { title: 'Telehealth & Remote Care', desc: 'WebRTC-powered HIPAA video consultations, encrypted patient records, e-prescribing, and remote monitoring dashboards for modern care delivery.' },
                { title: 'Clinical AI & Diagnostics', desc: 'FDA-validated ML models for imaging analysis, predictive care pathways, NLP-powered clinical documentation, and sepsis early-warning systems.' },
              ].map(s => (
                <Card key={s.title} style={{ borderRadius: 32 }}>
                  <div style={{ display: 'inline-block', background: 'rgba(180,253,131,0.1)', borderRadius: 8, padding: '4px 12px', fontSize: 12, color: '#b4fd83', marginBottom: '1rem', letterSpacing: '0.05em' }}>Featured</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.desc}</p>
                </Card>
              ))}
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
              {['EHR/EMR Integration', 'Patient Portals', 'Medical Devices & IoT', 'Healthcare Analytics'].map(s => (
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
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#b4fd83', marginBottom: '0.5rem' }}>MediCore</div>
                <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>100K+ patients, 99.9% uptime, HIPAA audit passed</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>We built their HIPAA-compliant telehealth platform from scratch — HL7 FHIR APIs, WebRTC video, and a full EHR integration suite.</p>
              </div>
              <div>
                <blockquote style={{ borderLeft: '3px solid #b4fd83', paddingLeft: '1.5rem', margin: 0 }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', marginBottom: '1rem' }}>
                    "The Mapletech team understood healthcare compliance from day one. Zero audit findings."
                  </p>
                  <cite style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'normal' }}>— Chief Medical Officer, MediCore</cite>
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
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Standards-compliant technologies built for clinical environments.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                { cat: 'Standards', items: ['HL7 FHIR', 'DICOM', 'ICD-10', 'SNOMED'] },
                { cat: 'Infrastructure', items: ['AWS HIPAA', 'Azure Health', 'Google HCLS'] },
                { cat: 'AI', items: ['TensorFlow Medical', 'MONAI', 'FDA-validated'] },
                { cat: 'Integration', items: ['Epic', 'Cerner', 'Allscripts APIs'] },
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
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem' }}>Healthcare is too important to get wrong. We get it right.</p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: '🔐', title: 'HIPAA Expertise', desc: 'BAA-ready from day one. Our engineers are trained in HIPAA Security Rule requirements and build PHI protection into every layer.' },
                { icon: '🩺', title: 'Clinical Domain Knowledge', desc: 'We have worked directly with clinicians, nurses, and health system CIOs. We understand workflows that save time and reduce errors.' },
                { icon: '✅', title: 'Audit-Ready Code', desc: 'Comprehensive audit logs, access controls, and documentation that makes your compliance team smile during annual reviews.' },
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
                Build Your <span style={{ color: '#b4fd83' }}>Healthcare Platform.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                HIPAA-compliant, audit-ready, clinician-approved. Let's build it together.
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
                {['HIPAA Compliant', 'BAA Ready', 'HL7 FHIR Certified', 'NDA on Request'].map(t => (
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
