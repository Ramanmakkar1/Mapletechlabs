'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
  { title: 'Custom Software Development', desc: 'Tailor-made solutions for your unique business processes.' },
  { title: 'Web & Mobile Development', desc: 'High-performance web and native mobile applications.' },
  { title: 'AI & Automation', desc: 'Intelligent systems that scale operations and reduce manual work.' },
  { title: 'Enterprise Systems', desc: 'ERP, CRM, and custom platforms built for growth.' },
  { title: 'E-Commerce & Fintech', desc: 'Commerce platforms, payment systems, and financial software.' },
  { title: 'Cloud & Integrations', desc: 'Infrastructure and API integrations that connect your stack.' },
  { title: 'Blockchain & Web3', desc: 'Smart contracts, exchanges, and decentralized applications.' },
  { title: 'AR/VR & Emerging Tech', desc: 'Immersive experiences and next-generation interfaces.' },
];

export default function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.service-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: HTMLDivElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const onMouseLeave = (card: HTMLDivElement) => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden" ref={container}>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-violet-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 lg:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 mb-4">Our Services</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 tracking-tight max-w-2xl leading-tight">
            End-to-end technology solutions for <span className="gradient-text">modern businesses.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 perspective-1000">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group glass-card p-8 rounded-2xl border border-gray-100/50 card-3d cursor-default"
              onMouseMove={(e) => onMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => onMouseLeave(e.currentTarget)}
            >
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-6 border border-violet-100 group-hover:bg-violet-600 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-violet-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-violet-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-violet-600 transition-colors"
              >
                Learn more
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

