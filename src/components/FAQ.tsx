'use client';

import { useState } from 'react';

const faqs = [
  { q: 'What is your typical project timeline?', a: 'Most projects range from 8 to 16 weeks depending on complexity. Small features or MVPs can be delivered faster.' },
  { q: 'Do you offer ongoing support?', a: 'Yes, we provide maintenance and support packages to ensure your systems remain secure and high-performing.' },
  { q: 'How do you handle project management?', a: 'We use Agile methodologies with weekly sprints, transparent communication via Slack/Jira, and regular demos.' },
  { q: 'Can you work with existing codebases?', a: 'Absolutely. We often help clients refactor, scale, or add features to their current legacy systems.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 lg:py-32 bg-gray-50/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-4">Common Questions</p>
          <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tight">
            Frequently Asked <span className="text-gray-400">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all duration-300 ${open === i ? 'bg-white border-violet-200 shadow-xl shadow-gray-200/50' : 'bg-transparent border-gray-100 hover:border-gray-200'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg ${open === i ? 'text-violet-600' : 'text-gray-700'}`}>{faq.q}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${open === i ? 'bg-violet-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
