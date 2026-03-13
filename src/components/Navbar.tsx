'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Company', href: '#about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="cb-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2 group">
            <div className="relative h-8 w-32 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Mapletech Labs"
                fill
                className="object-contain brightness-0"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-[13px] font-semibold text-black/60 hover:text-black transition-colors tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/contact" 
              className="btn-pill btn-pill--dark group relative overflow-hidden h-11 px-7"
            >
              <span className="relative z-10">Request a Proposal</span>
              <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-10 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-black transition-all mb-1.5 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-black transition-all mb-1.5 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-4xl font-semibold text-black transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="mt-4 px-10 py-5 bg-black text-accent rounded-full text-xl font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request a Proposal
          </Link>
        </div>
      </div>
    </nav>
  );
}
