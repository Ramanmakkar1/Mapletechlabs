import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Services: ['Custom Software Development','Web Development','Mobile App Development','AI & Automation Solutions','ERP/CRM Solutions','E-Commerce Solutions','Cloud & API Integration','Crypto Exchange Development'],
  Industries: ['E-Commerce','Real Estate','Healthcare','Education','Finance & Fintech','Logistics'],
  Resources: ['Case Studies','Blog','Documentation','Privacy Policy','Terms of Service','Careers'],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#030306' }}>
      {/* CTA Banner */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #0d0000 60%, #1a0000 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(204,0,0,0.18) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 border-y" style={{ borderColor: 'rgba(204,0,0,0.25)' }} />
        {/* Animated orb */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full animate-pulse-glow pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(204,0,0,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss your project and build something extraordinary together.
          </p>
          <Link href="#contact"
            className="relative inline-flex items-center gap-3 px-8 py-4 font-bold text-white rounded-xl overflow-hidden group">
            <span className="absolute inset-0 btn-shimmer rounded-xl" />
            <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: '0 0 40px rgba(204,0,0,0.4)' }} />
            <span className="relative">Request a Proposal</span>
            <svg className="relative w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="h-px w-full mb-16" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Mapletech Labs" width={140} height={52} className="h-12 w-auto brightness-0 invert mb-6 opacity-90" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
              A premier software development company delivering innovative digital solutions powered by AI, blockchain, and modern web technologies.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-red-400 border border-white/08 hover:border-red-600/30 transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([cat, links]) => (
            <div key={cat}>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">{cat}</h4>
              <ul className="space-y-3">
                {links.map(l => (
                  <li key={l}>
                    <Link href="#" className="text-gray-500 text-sm hover:text-red-400 transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px w-full mt-14 mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Mapletech Labs. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Built with ❤️ in Toronto, Canada</p>
        </div>
      </div>
    </footer>
  );
}
