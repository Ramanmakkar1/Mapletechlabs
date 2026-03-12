'use client';

import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const services = [
  'Custom Software', 'Web Development', 'Mobile Apps', 'AI & Automation',
  'Enterprise Systems', 'E-Commerce', 'Cloud & APIs', 'Blockchain', 'Other',
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.contact-card', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden" ref={container}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-50 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 mb-4">Contact Us</p>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight mb-8 leading-tight">
              Ready to build <br />
              <span className="gradient-text">the future?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Stop guessing and start building. Our team of experts is ready to help you navigate your next digital transformation.
            </p>

            <div className="space-y-8">
              {[
                { label: 'Email', value: 'hello@mapletechlabs.ca', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { label: 'Location', value: 'Toronto, Ontario · Remote', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center border border-violet-100 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-gray-900 font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="contact-card glass-strong rounded-3xl p-8 lg:p-12 bg-white/80 border border-gray-100 shadow-2xl shadow-gray-200/40">
              {formState === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-6 border border-green-100">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setFormState('idle')} className="mt-8 text-violet-600 font-bold hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none appearance-none">
                      <option>New Project Inquiry</option>
                      <option>Partnership</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea required rows={4} placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all outline-none resize-none" />
                  </div>
                  <button
                    disabled={formState === 'sending'}
                    className="w-full flex items-center justify-center gap-3 btn-shimmer text-white font-bold py-5 rounded-xl shadow-xl shadow-violet-500/25 disabled:opacity-50 transition-all active:scale-[0.98]"
                  >
                    {formState === 'sending' ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
