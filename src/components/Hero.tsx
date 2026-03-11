'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Full-viewport background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/enhanced_4k_background.png)',
        }}
      />
      {/* Subtle overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(8,4,20,0.7) 0%, rgba(8,4,20,0.2) 40%, transparent 70%)',
        }}
      />

      {/* Frosted glass navigation bar — centered at top */}
      <div className="relative z-20 flex justify-center pt-6 px-4">
        <nav className="flex items-center gap-1 rounded-2xl px-5 py-3 border border-white/20 shadow-2xl shadow-black/40"
          style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}>
          {/* Logo icon — geometric/starburst */}
          <div className="flex items-center justify-center w-9 h-9 rounded-lg mr-4 border border-white/20">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          {['How It Works', 'Services', 'Industries', 'Pricing'].map((item) => (
            <Link
              key={item}
              href="#"
              className="px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Content overlay — matches reference layout */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-12 px-8 lg:px-16">
        <div className="flex items-end justify-between gap-12 flex-wrap">
          {/* Bottom-left: Company name + tagline */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight mb-2">
              Mapletech Labs
            </h1>
            <p className="text-xl lg:text-2xl xl:text-3xl text-white/90 font-light tracking-wide">
              Where Innovation Begins.
            </p>
          </div>

          {/* Bottom-right: CTA + description */}
          <div className="max-w-md flex-shrink-0 space-y-6">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-white text-sm font-medium border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
              }}
            >
              Start Exploring
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="space-y-3 text-sm text-white/85 leading-relaxed">
              <p>
                Discovery doesn&apos;t always begin with knowing — it starts with questions. Context that guides understanding forward.
              </p>
              <p>
                Mapletech Labs is your companion for deeper digital transformation. A calm interface for building better products and drawing meaningful results. Less noise. More impact.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-white/10">
          <p className="text-white/60 text-xs tracking-wide">Clarity begins with the right technology partner.</p>
          <p className="text-white/60 text-xs">Mapletech Labs ©{new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
}
