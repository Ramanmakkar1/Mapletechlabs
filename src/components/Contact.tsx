'use client';
import { useState } from 'react';

const services = ['Custom Software Development','Web Development','Mobile App Development','AI & Automation Solutions','ERP/CRM & Enterprise Software','E-Commerce Solutions','Cloud Development & API Integration','Crypto Exchange Development','AR/VR & Metaverse Development','Other'];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <section id="contact" className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050508 0%, #080810 100%)' }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(204,0,0,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-5 leading-tight">
              Let&apos;s Build Something <span className="gradient-text">Great Together</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored proposal.</p>
            <div className="space-y-5">
              {[{ emoji: '✉️', label: 'Email', val: 'hello@mapletechlabs.ca' },
                { emoji: '📞', label: 'Phone', val: '+1 (647) 555-0192' },
                { emoji: '📍', label: 'Location', val: 'Toronto, Ontario, Canada' }].map(item => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 glass-red rounded-xl flex items-center justify-center text-lg flex-shrink-0 border border-red-500/20">
                    {item.emoji}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-white text-sm font-medium">{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-8 lg:p-10 border border-white/08 relative overflow-hidden">
            <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(204,0,0,0.05) 0%, transparent 70%)' }} />
            {submitted ? (
              <div className="relative text-center py-16">
                <div className="w-16 h-16 glass-red rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/30 text-3xl">✅</div>
                <h3 className="text-white text-2xl font-black mb-3">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-4">
                <h3 className="text-white text-xl font-black mb-6">Request a Proposal</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['First Name', 'Last Name'].map(f => (
                    <div key={f}>
                      <label className="text-gray-500 text-xs block mb-1.5">{f} *</label>
                      <input required type="text" placeholder={f.split(' ')[0]}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-gray-500 text-xs block mb-1.5">Email Address *</label>
                  <input required type="email" placeholder="john@company.com"
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[{l:'Company', p:'Acme Inc.'},{l:'Phone', p:'+1 (000) 000-0000'}].map(f => (
                    <div key={f.l}>
                      <label className="text-gray-500 text-xs block mb-1.5">{f.l}</label>
                      <input type="text" placeholder={f.p}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="text-gray-500 text-xs block mb-1.5">Service Needed *</label>
                  <select required className="w-full rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red-600/60 transition-colors appearance-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <option value="" className="bg-gray-900">Select a service...</option>
                    {services.map(s => <option key={s} value={s} className="bg-gray-900">{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-gray-500 text-xs block mb-1.5">Project Details</label>
                  <textarea rows={4} placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-600/60 transition-colors resize-none"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }} />
                </div>
                <button type="submit" className="relative w-full py-4 rounded-xl font-bold text-sm text-white overflow-hidden group">
                  <span className="absolute inset-0 btn-shimmer rounded-xl" />
                  <span className="relative flex items-center justify-center gap-2">
                    Send Request
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
