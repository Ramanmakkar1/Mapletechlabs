'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="col-span-2 lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block relative h-10 w-40">
              <Image src="/logo.png" alt="Mapletech Labs" fill className="object-contain brightness-0" />
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
              Engineering high-performance digital solutions for the world&apos;s most ambitious teams.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Twitter', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                { name: 'Github', icon: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
              ].map(social => (
                <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
                  <span className="sr-only">{social.name}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-gray-900">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['Software Development', 'Web Development', 'Mobile Apps', 'AI Solutions'].map(link => (
                <li key={link}><Link href="#" className="hover:text-violet-600 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-gray-900">Industries</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {['E-Commerce', 'Real Estate', 'Healthcare', 'Education'].map(link => (
                <li key={link}><Link href="#" className="hover:text-violet-600 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-bold text-gray-900">Newsletter</h4>
            <p className="text-sm text-gray-500">Subscribe for insights on tech and business.</p>
            <form className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500" />
              <button className="bg-violet-600 text-white font-bold px-4 rounded-lg hover:bg-violet-700 transition-colors">Join</button>
            </form>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mapletech Labs. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
