'use client';
import { useState } from 'react';

const industries = [
  { name: 'E-Commerce', emoji: '🛒', desc: 'Powerful e-commerce platforms that drive sales, improve customer experience, and scale with your business.', highlights: ['Custom storefronts', 'Payment integration', 'Inventory management', 'Analytics dashboard'] },
  { name: 'Real Estate', emoji: '🏠', desc: 'Property listing platforms, CRM systems, and virtual tour apps that modernize real estate professionals.', highlights: ['Property listings', 'Virtual tours', 'CRM integration', 'Lead management'] },
  { name: 'Healthcare', emoji: '🏥', desc: 'HIPAA-compliant healthcare applications that improve patient outcomes and streamline clinical workflows.', highlights: ['Patient portals', 'Telemedicine', 'EHR integration', 'Appointment scheduling'] },
  { name: 'Education', emoji: '📚', desc: 'Interactive e-learning platforms, LMS systems, and educational tools that engage students and simplify admin.', highlights: ['LMS platforms', 'Video streaming', 'Progress tracking', 'Certifications'] },
  { name: 'Finance & Fintech', emoji: '💹', desc: 'Secure financial platforms, trading systems, and fintech solutions built with compliance at the forefront.', highlights: ['Trading platforms', 'Payment systems', 'Fraud detection', 'Compliance tools'] },
  { name: 'Logistics', emoji: '🚚', desc: 'Supply chain management and logistics platforms that bring real-time visibility to complex operations.', highlights: ['Fleet tracking', 'Route optimization', 'Warehouse management', 'Supply chain visibility'] },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section id="industries" className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050508 0%, #08080f 100%)' }}>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />Industries We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">Solutions Built for <span className="gradient-text">Your Industry</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Deep domain expertise across diverse industries, delivering software that understands your unique challenges.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-2">
            {industries.map((ind, idx) => (
              <button key={ind.name} onClick={() => setActive(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${active === idx
                  ? 'glass-red border border-red-600/40 shadow-lg shadow-red-900/20'
                  : 'glass border border-white/06 hover:border-white/15'}`}>
                <span className="text-2xl">{ind.emoji}</span>
                <span className={`font-semibold text-sm ${active === idx ? 'text-red-300' : 'text-gray-300'}`}>{ind.name}</span>
                {active === idx && (
                  <svg className="w-4 h-4 text-red-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
          <div className="lg:col-span-3 glass rounded-2xl p-10 border border-white/08 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(204,0,0,0.06) 0%, transparent 70%)' }} />
            <div className="relative">
              <div className="text-5xl mb-6">{industries[active].emoji}</div>
              <h3 className="text-3xl font-black text-white mb-4">{industries[active].name}</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8">{industries[active].desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {industries[active].highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(204,0,0,0.3)', border: '1px solid rgba(204,0,0,0.5)' }}>
                      <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {h}
                  </div>
                ))}
              </div>
              <Link href="#contact" className="inline-flex items-center gap-2 text-red-400 text-sm font-semibold hover:text-red-300 transition-colors group">
                Start a Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Link({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return <a href={href} className={className}>{children}</a>;
}
