'use client';

import { useState } from 'react';
import Link from 'next/link';

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

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#080614] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Industries</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-12">
              Domain expertise across sectors
            </h2>
            <nav className="space-y-1">
              {industries.map((ind, idx) => (
                <button
                  key={ind.name}
                  onClick={() => setActive(idx)}
                  className={`block w-full text-left py-3 px-0 text-sm transition-colors ${
                    active === idx ? 'text-white font-medium' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {ind.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="lg:col-span-8 pt-4 lg:pt-0">
            <div className="border border-white/[0.08] rounded-xl p-8 lg:p-10 bg-white/[0.02]">
              <h3 className="text-xl font-semibold text-white mb-4">{current.name}</h3>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-8">{current.desc}</p>
              <div className="flex flex-wrap gap-3">
                {current.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-4 py-2 rounded-md text-sm text-gray-400 bg-white/[0.04] border border-white/[0.06]"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                Start a project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
