'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How much does custom software development cost?', a: 'Project costs vary by scope and complexity. We provide detailed quotes after a discovery call. Typical range: $10K–$200K+ with flexible support options.' },
  { q: 'Do you support iOS and Android?', a: 'Yes. We build native and cross-platform apps (React Native, Flutter) so you can reach both platforms from one codebase.' },
  { q: 'Can you integrate AI into existing software?', a: 'Yes. We retrofit AI into legacy systems — NLP, computer vision, predictive analytics, and workflow automation.' },
  { q: 'What is your development process?', a: 'Agile with 2-week sprints: Discovery → Design → Development → QA → Deployment → Support. Full visibility at every stage.' },
  { q: 'Do you offer blockchain development?', a: 'Yes. Smart contracts, DeFi, NFT platforms, crypto exchanges, and enterprise blockchain integrations.' },
  { q: 'Who owns the code?', a: 'You do. 100%. All source code and IP transfer upon final payment, with full documentation.' },
  { q: 'Post-launch support?', a: 'Yes. Support packages from bug fixes to fully managed services with 24/7 monitoring and dedicated teams.' },
  { q: 'Typical project timeline?', a: 'Depends on scope. Simple web apps: 6–8 weeks. Enterprise platforms: 6+ months. Timelines included in proposals.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#0a0818] border-t border-white/[0.04]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">FAQ</p>
        <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-14">
          Common questions
        </h2>
        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-white/[0.06]"
            >
              <button
                className="w-full flex items-start justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className={`text-[15px] font-medium leading-snug ${open === idx ? 'text-white' : 'text-gray-300'}`}>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs transition-all ${
                  open === idx
                    ? 'border-violet-500/50 bg-violet-500/10 text-violet-400 rotate-45'
                    : 'border-white/20 text-gray-500'
                }`}>
                  +
                </span>
              </button>
              {open === idx && (
                <div className="pb-5 pr-10">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
