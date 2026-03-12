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
      scrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-xl shadow-gray-200/50' : 'bg-transparent'
    }`}>
      <div className={`h-[1px] w-full transition-opacity duration-500 ${scrolled ? 'bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' : 'opacity-0'}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative h-12 w-40">
              <Image 
                src="/logo.png" 
                alt="Mapletech Labs" 
                fill
                className={`object-contain transition-all duration-300 ${scrolled ? 'brightness-0' : 'brightness-0 invert'} group-hover:scale-105`} 
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="#" className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-100 hover:text-white'}`}>
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-500 group-hover:w-full transition-all duration-300" />
            </Link>

            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-100 hover:text-white'}`}>
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-500 group-hover:w-full transition-all duration-300" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 glass-strong rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {services.map(s => (
                      <Link key={s} href="#services" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        {s}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setIndustriesOpen(true)} onMouseLeave={() => setIndustriesOpen(false)}>
              <button className={`flex items-center gap-1 text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-100 hover:text-white'}`}>
                Industries
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-500 group-hover:w-full transition-all duration-300" />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-3 w-56 glass-strong rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2">
                    {industries.map(i => (
                      <Link key={i} href="#industries" className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        {i}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {['Game Development', 'Company'].map(label => (
              <Link key={label} href="#" className={`text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-100 hover:text-white'}`}>
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-violet-600 to-indigo-500 group-hover:w-full transition-all duration-300" />
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

          <button className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-black' : 'text-white'}`} onClick={() => setMobileOpen(!mobileOpen)}>
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
        <div className="lg:hidden glass-strong border-t border-gray-100 py-4 px-4 space-y-1 animate-in slide-in-from-top-4 duration-300">
          {['Case Studies', 'Services', 'Industries', 'Game Development', 'Company'].map(item => (
            <Link key={item} href="#" className="block text-gray-600 text-sm px-4 py-3 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all" onClick={() => setMobileOpen(false)}>
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

