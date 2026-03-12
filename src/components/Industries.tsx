'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const industries = [
  { name: 'E-Commerce', desc: 'Platforms that drive sales and scale. Custom storefronts, payments, inventory, and analytics.', highlights: ['Storefronts', 'Payments', 'Inventory', 'Analytics'] },
  { name: 'Real Estate', desc: 'Property platforms, CRM, and virtual tours for modern real estate professionals.', highlights: ['Listings', 'Virtual tours', 'CRM', 'Lead management'] },
  { name: 'Healthcare', desc: 'HIPAA-compliant applications that improve outcomes and streamline clinical workflows.', highlights: ['Patient portals', 'Telemedicine', 'EHR', 'Scheduling'] },
  { name: 'Education', desc: 'E-learning platforms, LMS systems, and tools that engage students and simplify admin.', highlights: ['LMS', 'Video', 'Progress tracking', 'Certifications'] },
  { name: 'Finance', desc: 'Secure platforms, trading systems, and fintech solutions built for compliance and scale.', highlights: ['Trading', 'Payments', 'Fraud detection', 'Compliance'] },
  { name: 'Logistics', desc: 'Supply chain and logistics platforms with real-time visibility across operations.', highlights: ['Fleet tracking', 'Routing', 'Warehouse', 'Visibility'] },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];
  const contentRef = useRef<HTMLDivElement>(null);

  const switchTab = (idx: number) => {
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      onComplete: () => {
        setActive(idx);
        gsap.fromTo(contentRef.current, {
          opacity: 0,
          x: 20
        }, {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  };

  return (
    <section id="industries" className="py-24 lg:py-32 bg-gray-50/50 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-4">Industries</p>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight mb-12 leading-tight">
              Domain expertise <br />
              <span className="text-gray-400">across sectors</span>
            </h2>
            <nav className="space-y-2">
              {industries.map((ind, idx) => (
                <button
                  key={ind.name}
                  onClick={() => switchTab(idx)}
                  className={`block w-full text-left py-4 px-6 rounded-xl text-sm transition-all duration-300 ${
                    active === idx 
                    ? 'bg-white text-violet-600 font-bold shadow-lg shadow-gray-200/50 translate-x-2' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-8">
            <div 
              ref={contentRef}
              className="glass-strong rounded-3xl p-8 lg:p-12 bg-white/80 border border-gray-100 shadow-2xl shadow-gray-200/40 min-h-[400px] flex flex-col justify-center card-3d cursor-default"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                gsap.to(e.currentTarget, { rotateX, rotateY, scale: 1.02, duration: 0.5 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.5 });
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6">{current.name}</h3>
              <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10">{current.desc}</p>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {current.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-5 py-2.5 rounded-full text-sm font-bold text-violet-600 bg-violet-50 border border-violet-100"
                  >
                    {h}
                  </span>
                ))}
              </div>
              
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 text-base font-bold text-violet-600 hover:gap-5 transition-all duration-300"
              >
                Start a industry-specific project
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

