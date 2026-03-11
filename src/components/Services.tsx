'use client';

import Link from 'next/link';

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
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-[#0a0818]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Services</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight max-w-2xl">
            End-to-end technology solutions for modern businesses.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-lg overflow-hidden">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#0a0818] p-6 lg:p-8 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <h3 className="font-medium text-white text-[15px] mb-2 group-hover:text-violet-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 group-hover:text-violet-400 transition-colors"
              >
                Get started
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
