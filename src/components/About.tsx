'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Clients' },
  { value: '8+', label: 'Years experience' },
  { value: '99%', label: 'Client retention' },
];

const pillars = [
  { title: 'Discover', desc: 'We start with deep discovery to understand your business, constraints, and vision before writing a single line of code.' },
  { title: 'Design & Build', desc: 'Strategic design paired with robust engineering. We build systems that perform today and scale tomorrow.' },
  { title: 'Launch & Support', desc: 'Smooth deployment and ongoing optimization. Your success doesn\'t end at go-live.' },
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.stat-item', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.stats-grid',
        start: 'top 85%',
      }
    });

    gsap.from('.about-content > *', {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 75%',
      }
    });

    gsap.from('.pillar-item', {
      opacity: 0,
      x: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.pillars-container',
        start: 'top 75%',
      }
    });
  }, { scope: container });

  return (
    <div ref={container}>
      {/* Stats — clean horizontal strip */}
      <section className="border-y border-gray-100 bg-gray-50/50 stats-grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-item py-12 lg:py-16 px-6 lg:px-10 text-center lg:text-left">
                <div className="text-3xl lg:text-5xl font-bold text-gray-900 tabular-nums mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Approach */}
      <section id="about" className="about-section py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-50/50 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="about-content">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-4">Who we are</p>
              <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight mb-8 leading-tight">
                Your strategic <br />
                <span className="gradient-text">technology partner</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Mapletech Labs builds software that fits your business. We combine technical depth with product thinking to deliver solutions that drive measurable outcomes.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-12">
                From startups to enterprise, we work with AI, cloud, and modern frameworks to solve real problems — without the hype.
              </p>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-4">Trusted by Industry Leaders</p>
                <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-bold text-gray-400">
                  <span>Great American</span>
                  <span>Disney</span>
                  <span>JLL</span>
                  <span>Innovatech</span>
                  <span>NexaCorp</span>
                </div>
              </div>
            </div>

            <div className="pillars-container">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">Our methodology</p>
              <div className="space-y-10">
                {pillars.map((p, i) => (
                  <div key={p.title} className="pillar-item flex gap-8 group">
                    <span className="text-xl font-black text-violet-100 group-hover:text-violet-500 transition-colors duration-300 tabular-nums flex-shrink-0 pt-0.5">0{i + 1}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-3">{p.title}</h4>
                      <p className="text-gray-600 text-base leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

