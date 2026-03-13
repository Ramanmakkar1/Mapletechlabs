'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    client: 'FinanceHub',
    title: 'AI-Powered Trading Platform',
    desc: 'Real-time algorithmic trading system processing 2M+ transactions daily with sub-millisecond latency.',
    tags: ['Python', 'React', 'AWS', 'ML'],
    metric: '2M+', metricLabel: 'Daily Transactions',
    gradient: 'from-violet-600 via-purple-600 to-indigo-700',
    num: '01',
  },
  {
    id: 2,
    client: 'MediCore Health',
    title: 'HIPAA-Compliant Patient Portal',
    desc: 'Telemedicine platform serving 100K+ patients with EHR integration and real-time video consultation.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    metric: '100K+', metricLabel: 'Active Patients',
    gradient: 'from-cyan-600 via-sky-600 to-blue-700',
    num: '02',
  },
  {
    id: 3,
    client: 'RetailX',
    title: 'Multi-Vendor E-Commerce Engine',
    desc: 'Headless commerce platform scaling to Black Friday — 500K concurrent users, zero downtime.',
    tags: ['Shopify API', 'React', 'Redis', 'Kubernetes'],
    metric: '500K', metricLabel: 'Concurrent Users',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-700',
    num: '03',
  },
  {
    id: 4,
    client: 'NexaCorp',
    title: 'Enterprise ERP & Analytics',
    desc: 'Custom ERP replacing legacy system — 85% faster reporting, full supply chain visibility.',
    tags: ['React', 'Python', 'GraphQL', 'AWS'],
    metric: '85%', metricLabel: 'Faster Reporting',
    gradient: 'from-orange-600 via-amber-600 to-yellow-600',
    num: '04',
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = gsap.utils.toArray<HTMLElement>('.case-card', track);
    const totalWidth = (cards[0]?.offsetWidth + 32) * (cards.length - 1);

    gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalWidth + window.innerWidth * 0.3}`,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cards fade-in initially
    gsap.from(cards, {
      opacity: 0,
      x: 80,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true,
      },
    });

  }, { scope: containerRef });

  return (
    <section
      id="case-studies"
      ref={containerRef}
      className="section-dark-2 overflow-hidden"
      style={{ height: '100vh' }}
    >
      <div className="h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-24">

        {/* Header */}
        <div className="max-w-7xl mx-auto w-full mb-12 flex items-end justify-between gap-6 flex-shrink-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400 mb-3">Selected Work</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Results that<br />
              <span className="gradient-text">speak for themselves.</span>
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-white/30 text-sm flex-shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Scroll to explore
          </div>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 flex items-center overflow-visible">
          <div ref={trackRef} className="h-scroll-container gap-8 pl-2 pr-24">
            {projects.map((project) => (
              <div
                key={project.id}
                className="case-card flex-shrink-0 w-[480px] lg:w-[560px] h-[460px] rounded-3xl overflow-hidden relative group cursor-default"
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                <div className="absolute inset-0 noise" />
                <div className="absolute inset-0 grid-bg opacity-20" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-10">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">{project.client}</p>
                      <span className="text-white/20 text-6xl font-black">{project.num}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-white">{project.metric}</div>
                      <div className="text-white/60 text-xs mt-1">{project.metricLabel}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-6">{project.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold text-white/80 bg-white/10 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-4 transition-all duration-300"
                    >
                      View Case Study
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
