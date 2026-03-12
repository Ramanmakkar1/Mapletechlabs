'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animation for all sections
    const sections = gsap.utils.toArray('section');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.95,
          rotateX: -5 
        },
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, { scope: main });

  return (
    <div ref={main} className="perspective-1000">
      {children}
    </div>
  );
}
