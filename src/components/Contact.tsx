'use client';

import { useState } from 'react';

const services = [
  'Custom Software', 'Web Development', 'Mobile Apps', 'AI & Automation',
  'Enterprise Systems', 'E-Commerce', 'Cloud & APIs', 'Blockchain', 'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#080614] border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Contact</p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
              Let&apos;s talk about your project
            </h2>
            <p className="text-gray-400 text-[15px] leading-relaxed mb-12">
              Tell us about your goals and we&apos;ll respond within 24 hours with an initial assessment.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-600 mb-1">Email</p>
                <a href="mailto:hello@mapletechlabs.ca" className="text-white hover:text-violet-400 transition-colors">
                  hello@mapletechlabs.ca
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Phone</p>
                <a href="tel:+16475550192" className="text-white hover:text-violet-400 transition-colors">
                  +1 (647) 555-0192
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Location</p>
                <p className="text-white">Toronto, Ontario</p>
              </div>
            </div>
          </div>

          <div className="border border-white/[0.08] rounded-xl p-8 lg:p-10 bg-white/[0.02]">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4 text-violet-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Message sent</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">First name *</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">Last name *</label>
                    <input
                      required
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 block mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Service *</label>
                  <select
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors appearance-none"
                  >
                    <option value="">Select...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-gray-900">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 block mb-2">Project details</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-gray-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
                    placeholder="Goals, timeline, and any constraints..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg font-medium text-sm text-white bg-violet-600 hover:bg-violet-500 transition-colors"
                >
                  Send request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
