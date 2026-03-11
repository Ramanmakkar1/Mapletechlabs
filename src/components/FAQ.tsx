'use client';
import { useState } from 'react';

const faqs = [
  { q: 'How much does custom software development cost?', a: 'Project costs vary based on scope, complexity, and timeline. We provide transparent, detailed quotes after a free discovery call. Most projects range from $10K to $200K+, with ongoing support plans available.' },
  { q: 'Do you support both iOS and Android development?', a: 'Yes! We develop native apps for both platforms, as well as cross-platform solutions using React Native and Flutter — allowing you to reach both iOS and Android users from a single codebase.' },
  { q: 'Can you integrate AI into my existing software?', a: 'Absolutely. We specialize in retrofitting AI capabilities into legacy systems, including natural language processing, computer vision, predictive analytics, and intelligent automation workflows.' },
  { q: 'What is your development process?', a: 'We follow an agile methodology with 2-week sprints. The process includes: Discovery & Planning → UI/UX Design → Development → QA & Testing → Deployment → Ongoing Support. You get full visibility at every stage.' },
  { q: 'Do you offer blockchain development services?', a: 'Yes. We build custom blockchain solutions including smart contracts, DeFi platforms, NFT marketplaces, crypto exchanges, and enterprise blockchain integrations on Ethereum, Solana, and other chains.' },
  { q: 'Who owns the code after the project is complete?', a: 'You do. 100%. Upon final payment, all source code, assets, and intellectual property are fully transferred to you. We also provide thorough documentation for your team.' },
  { q: 'Do you provide post-launch support and maintenance?', a: 'Yes, we offer flexible support packages ranging from basic bug fixes to fully managed services with 24/7 monitoring, regular updates, and dedicated support teams.' },
  { q: 'How long does a typical project take?', a: 'Project timelines depend on complexity. A simple web app might take 6–8 weeks, while an enterprise platform could take 6+ months. We always provide detailed timelines in our proposals.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-28 overflow-hidden mesh-bg">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />Got Questions?
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to know about working with Mapletech Labs.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`glass rounded-2xl overflow-hidden border transition-all duration-300 ${open === idx ? 'border-red-600/40' : 'border-white/06 hover:border-white/15'}`}>
              <button className="w-full flex items-center justify-between px-7 py-5 text-left" onClick={() => setOpen(open === idx ? null : idx)}>
                <span className={`font-semibold text-sm pr-8 transition-colors ${open === idx ? 'text-white' : 'text-gray-300'}`}>{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === idx ? 'bg-red-600 rotate-45' : 'border border-white/20'}`}>
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </button>
              {open === idx && (
                <div className="px-7 pb-6">
                  <div className="h-px w-full bg-white/08 mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
