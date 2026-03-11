const stats = [
  { value: '200+', label: 'Apps Delivered', sub: 'Successful projects shipped' },
  { value: '50+', label: 'Happy Clients', sub: 'Businesses transformed' },
  { value: '8+', label: 'Years in Business', sub: 'Industry experience' },
  { value: '15+', label: 'Awards Won', sub: 'Recognition for excellence' },
];

const pillars = [
  { num: '01', title: 'Design & Innovate', desc: 'Deep discovery and strategic design thinking to create solutions that are both beautiful and functional.' },
  { num: '02', title: 'Engineer & Transform', desc: 'Robust, scalable systems using cutting-edge tech like AI, blockchain, and cloud architecture.' },
  { num: '03', title: 'Optimize & Scale', desc: 'Continuous optimization and scaling to meet growing demand and evolving business needs.' },
];

export default function About() {
  return (
    <>
      {/* Stats Banner — gradient glass */}
      <section className="relative py-16 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0000 0%, #0d0000 50%, #1a0000 100%)' }}>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(204,0,0,0.15) 0%, transparent 70%)'
        }} />
        <div className="absolute inset-0 border-y" style={{ borderColor: 'rgba(204,0,0,0.2)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-5xl font-black gradient-text mb-2 group-hover:text-glow-red transition-all">{stat.value}</div>
                <div className="text-white font-bold text-sm">{stat.label}</div>
                <div className="text-red-400/60 text-xs mt-1">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="relative py-28 overflow-hidden mesh-bg">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(204,0,0,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
              <span className="inline-flex items-center gap-2 glass-red rounded-full px-4 py-1.5 text-red-400 text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-6 leading-tight">
                Your Strategic <span className="gradient-text">Technology</span> Partner
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-5">
                Mapletech Labs is a premier software development company dedicated to building innovative digital solutions. We combine deep technical expertise with strategic business thinking.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From startups to enterprise companies, we leverage AI, machine learning, and blockchain to drive measurable business outcomes.
              </p>
              <div>
                <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">Trusted By</p>
                <div className="flex flex-wrap gap-3">
                  {['Great American', 'Disney', 'JLL', 'Innovatech', 'NexaCorp'].map(c => (
                    <div key={c} className="glass border border-white/10 text-gray-400 text-xs px-4 py-2 rounded-lg hover:border-red-600/30 hover:text-white transition-all">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glass feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '🛡️', title: 'Security First', desc: 'Enterprise-grade security in every project we build.' },
                { emoji: '⚡', title: 'Fast Delivery', desc: 'Agile sprints for rapid, reliable deployment.' },
                { emoji: '👥', title: 'Dedicated Team', desc: 'Expert developers working as an extension of your team.' },
                { emoji: '📈', title: 'Scalable Growth', desc: 'Solutions built to scale as your business grows.' },
              ].map((card, i) => (
                <div key={card.title}
                  className={`glass rounded-2xl p-6 border border-white/08 hover:border-red-600/30 transition-all duration-300 group ${i === 1 ? 'bg-gradient-to-br from-red-900/30 to-red-950/20 border-red-700/30' : ''}`}>
                  <div className="text-2xl mb-3">{card.emoji}</div>
                  <h4 className="text-white font-bold text-sm mb-2 group-hover:text-red-300 transition-colors">{card.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Approach pillars */}
          <div className="border-t border-white/08 pt-20">
            <h3 className="text-3xl font-black text-white text-center mb-14">Our <span className="gradient-text">Approach</span></h3>
            <div className="grid md:grid-cols-3 gap-8">
              {pillars.map(p => (
                <div key={p.title} className="relative group">
                  <div className="text-[100px] font-black absolute -top-8 -left-2 select-none leading-none"
                    style={{ color: 'rgba(204,0,0,0.06)' }}>{p.num}</div>
                  <div className="relative glass rounded-2xl p-8 border border-white/08 hover:border-red-600/30 transition-all duration-300">
                    <div className="w-8 h-1 bg-gradient-to-r from-red-600 to-orange-500 rounded-full mb-6" />
                    <h4 className="text-white font-bold text-lg mb-3 group-hover:text-red-300 transition-colors">{p.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
