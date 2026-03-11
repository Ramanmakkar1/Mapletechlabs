'use client';

import { useState } from 'react';

const services = [
  { icon: '⌨️', title: 'Custom Software Development', desc: 'Tailor-made software solutions designed around your unique business processes and goals.' },
  { icon: '🌐', title: 'Web Development', desc: 'Stunning, high-performance websites and web apps built with the latest frameworks.' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android that users love.' },
  { icon: '🤖', title: 'AI & Automation Solutions', desc: 'Intelligent automation and AI-powered tools that save time and boost efficiency.' },
  { icon: '🏢', title: 'ERP/CRM & Enterprise Software', desc: 'Streamline operations with custom ERP and CRM systems built for scale.' },
  { icon: '🛒', title: 'E-Commerce Solutions', desc: 'Full-featured online stores with seamless payments, inventory, and great UX.' },
  { icon: '☁️', title: 'Cloud & API Integration', desc: 'Scalable cloud infrastructure and seamless third-party API integrations.' },
  { icon: '₿', title: 'Crypto Exchange Development', desc: 'Secure, high-performance cryptocurrency exchange platforms.' },
  { icon: '🥽', title: 'AR/VR & Metaverse', desc: 'Immersive augmented and virtual reality experiences for the digital frontier.' },
  { icon: '⚡', title: 'AI Agent Development', desc: 'Autonomous AI agents that handle complex workflows and decision-making at scale.' },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Subtle gradient mesh bg */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none opacity-60"
        style={{ background: 'radial-gradient(ellipse, rgba(204,0,0,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 glass-frosted rounded-full px-5 py-2 text-red-400/90 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            What We Do
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            From idea to launch — end-to-end technology solutions that power modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`relative group cursor-pointer rounded-2xl p-7 transition-all duration-400 ease-out overflow-hidden
                ${hovered === idx ? 'glass-elevated scale-[1.02] -translate-y-1' : 'glass-card'}`}
              style={{
                background: hovered === idx
                  ? 'rgba(255,255,255,0.07)'
                  : undefined,
                borderColor: hovered === idx ? 'rgba(204,0,0,0.35)' : undefined,
                boxShadow: hovered === idx ? '0 20px 50px -12px rgba(204,0,0,0.12), 0 0 0 1px rgba(204,0,0,0.2)' : undefined,
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(204,0,0,0.08) 0%, transparent 60%)' }} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl glass-frosted flex items-center justify-center text-2xl mb-5 border border-white/5">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-white text-base mb-2.5 leading-snug group-hover:text-red-200/90 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-red-500 group-hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
