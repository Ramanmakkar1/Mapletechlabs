'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    quote: "Mapletech Labs delivered our trading platform in 3 months. The system handles 2M+ daily transactions without a hiccup. Absolutely world-class engineering.",
    name: "Sarah Chen",
    title: "CTO, FinanceHub",
    initials: "SC",
    color: '#7c3aed',
  },
  {
    quote: "They didn't just build what we asked — they pushed back when it mattered and suggested a better architecture. That saved us 6 months of future work.",
    name: "Michael Torres",
    title: "VP Engineering, NexaCorp",
    initials: "MT",
    color: '#06b6d4',
  },
  {
    quote: "Our patient portal went from concept to HIPAA-compliant production in 4 months. The quality of code and documentation was outstanding.",
    name: "Dr. Rachel Kim",
    title: "Head of Digital, MediCore Health",
    initials: "RK",
    color: '#10b981',
  },
  {
    quote: "500K concurrent users on Black Friday with zero downtime. That speaks for itself. We've been with Mapletech Labs for 4 years and counting.",
    name: "James Wilson",
    title: "CEO, RetailX",
    initials: "JW",
    color: '#f59e0b',
  },
  {
    quote: "The AI automation suite they built cut our manual processing time by 70%. ROI in the first 3 months. Simply excellent.",
    name: "Priya Patel",
    title: "Operations Director, Innovatech",
    initials: "PP",
    color: '#ec4899',
  },
  {
    quote: "What sets them apart is communication. Always responsive, always transparent. You always know exactly where your project stands.",
    name: "David Nguyen",
    title: "Founder, EduTech",
    initials: "DN",
    color: '#4f46e5',
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[380px] lg:w-[420px] mx-4 glass-dark rounded-2xl p-7 border border-white/6">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-white/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>

      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-white text-sm font-bold">{t.name}</div>
          <div className="text-white/40 text-xs">{t.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupMarquee = (track: HTMLDivElement | null, dir: number) => {
      if (!track) return;
      const width = track.scrollWidth / 2;
      gsap.to(track, {
        x: dir > 0 ? -width : width,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            if (dir > 0) return x % -width;
            return x % width;
          }),
        },
      });
    };

    setupMarquee(track1Ref.current, 1);
    setupMarquee(track2Ref.current, -1);

    return () => {
      gsap.killTweensOf([track1Ref.current, track2Ref.current]);
    };
  }, []);

  const doubled1 = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const doubled2 = [...testimonials.slice(3), ...testimonials.slice(3)];

  return (
    <section className="section-dark py-24 lg:py-32 overflow-hidden border-t border-white/5">
      {/* Orbs */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] orb-violet orb opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-4">Client Stories</p>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Loved by teams<br />
            <span className="gradient-text">at great companies.</span>
          </h2>
        </div>
      </div>

      <div className="space-y-5">
        {/* Row 1 — left to right */}
        <div className="overflow-hidden">
          <div ref={track1Ref} className="flex">
            {doubled1.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden">
          <div ref={track2Ref} className="flex">
            {doubled2.map((t, i) => <TestimonialCard key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
