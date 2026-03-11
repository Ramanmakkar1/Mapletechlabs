'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  'Custom Software Development', 'Web Development', 'Mobile App Development',
  'AI & Automation Solutions', 'ERP/CRM & Enterprise Software', 'E-Commerce Solutions',
  'Cloud Development & API Integration', 'Crypto Exchange Development', 'AR/VR & Metaverse Development',
];
const industries = ['E-Commerce', 'Real Estate', 'Healthcare', 'Education', 'Finance & Fintech', 'Logistics'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50' : 'bg-transparent'
    }`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-red-600/60 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 group">
            <Image src="/logo.png" alt="Mapletech Labs" width={150} height={56}
              className="h-12 w-auto brightness-0 invert transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(204,0,0,0.8)]" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="#" className="text-gray-300 text-sm font-medium hover:text-white transition-colors relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300" />
            </Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-gray-300 text-sm font-medium hover:text-white transition-colors relative group">
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 glass-strong rounded-xl shadow-2xl shadow-black/60">
                  <div className="p-2">
                    {services.map(s => (
                      <Link key={s} href="#services" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
              <button className="flex items-center gap-1 text-gray-300 text-sm font-medium hover:text-white transition-colors relative group">
                Industries
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 glass-strong rounded-xl shadow-2xl shadow-black/60">
                  <div className="p-2">
                    {industries.map(i => (
                      <Link key={i} href="#industries" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" />
                        {i}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {['Game Development', 'Company'].map(label => (
              <Link key={label} href="#" className="text-gray-300 text-sm font-medium hover:text-white transition-colors relative group">
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link href="#contact" className="relative inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white rounded-lg overflow-hidden group">
              <span className="absolute inset-0 btn-shimmer rounded-lg" />
              <span className="relative">Request a Proposal</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-strong border-t border-white/10 py-4 px-4 space-y-1">
          {['Case Studies', 'Services', 'Industries', 'Game Development', 'Company'].map(item => (
            <Link key={item} href="#" className="block text-gray-300 text-sm px-4 py-3 hover:text-white hover:bg-white/5 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
              {item}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="#contact" className="block btn-shimmer text-white text-sm font-bold px-5 py-3 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
              Request a Proposal
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
