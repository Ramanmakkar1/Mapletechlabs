import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Services: ['Custom Software', 'Web Development', 'Mobile Apps', 'AI & Automation', 'E-Commerce', 'Cloud & APIs', 'Blockchain'],
  Industries: ['E-Commerce', 'Real Estate', 'Healthcare', 'Education', 'Finance', 'Logistics'],
  Company: ['Case Studies', 'Careers', 'Privacy', 'Terms'],
};

export default function Footer() {
  return (
    <footer className="bg-[#050510]">
      {/* CTA strip */}
      <div className="border-t border-white/[0.06] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-3">
            Ready to build?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Get in touch for a free consultation and project assessment.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-white bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            Request a proposal
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Footer links */}
      <div className="border-t border-white/[0.06] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <Image src="/logo.png" alt="Mapletech Labs" width={120} height={44} className="h-10 w-auto brightness-0 invert opacity-90 mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Custom software development. Toronto, Canada.
              </p>
              <div className="flex gap-2 mt-6">
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" aria-label="Twitter" className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" aria-label="GitHub" className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>
            {Object.entries(footerLinks).map(([cat, links]) => (
              <div key={cat}>
                <h4 className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-4">{cat}</h4>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-white/[0.06]">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Mapletech Labs</p>
            <p className="text-gray-600 text-xs">Toronto, Canada</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
