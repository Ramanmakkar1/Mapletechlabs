'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const heroContent = useRef<HTMLDivElement>(null);
  const bgImage = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax background
    gsap.to(bgImage.current, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    // Content entrance
    const tl = gsap.timeline();
    tl.from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })
    .from('.hero-sub', {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, '-=0.7')
    .from('.hero-cta', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    }, '-=0.5');

  }, { scope: container });

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col" ref={container}>
      {/* Full-viewport background image with parallax */}
      <div
        ref={bgImage}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: 'url(/hero-bg.png)',
          imageRendering: 'auto',
        }}
      />
      {/* Subtle overlay — transition to white background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,8,24,0.3) 0%, rgba(10,8,24,0) 50%, #ffffff 100%)',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 px-8 lg:px-16" ref={heroContent}>
        <div className="flex items-end justify-between gap-12 flex-wrap max-w-7xl mx-auto w-full">
          {/* Bottom-left: Company name + tagline */}
          <div className="max-w-2xl">
            <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              MAPLETECH <br />
              <span className="text-violet-400">LABS</span>
            </h1>
            <p className="hero-sub text-xl lg:text-3xl text-white/90 font-medium tracking-tight">
              Engineering the <span className="underline decoration-violet-500/50 underline-offset-8">Future</span> of Digital Experience.
            </p>
          </div>

          {/* Bottom-right: CTA + description */}
          <div className="hero-cta max-w-md flex-shrink-0 space-y-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-white text-base font-bold transition-all duration-300 shadow-2xl shadow-violet-500/20"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
              }}
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <div className="space-y-4 text-sm lg:text-base text-white/80 leading-relaxed font-medium">
              <p>
                Mapletech Labs is a premier technology partner specializing in high-performance digital solutions. We turn complex challenges into seamless experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

