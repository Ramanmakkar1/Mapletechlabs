const stats = [
  { value: '200+', label: 'Projects delivered' },
  { value: '50+', label: 'Clients' },
  { value: '8+', label: 'Years experience' },
  { value: '99%', label: 'Client retention' },
];

const pillars = [
  { title: 'Discover', desc: 'We start with deep discovery to understand your business, constraints, and vision before writing a single line of code.' },
  { title: 'Design & Build', desc: 'Strategic design paired with robust engineering. We build systems that perform today and scale tomorrow.' },
  { title: 'Launch & Support', desc: 'Smooth deployment and ongoing optimization. Your success doesn\'t end at go-live.' },
];

export default function About() {
  return (
    <>
      {/* Stats — clean horizontal strip */}
      <section className="border-y border-white/[0.06] bg-[#080614]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {stats.map((stat) => (
              <div key={stat.label} className="py-12 lg:py-16 px-6 lg:px-10 text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-semibold text-white tabular-nums mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About + Approach */}
      <section id="about" className="py-24 lg:py-32 bg-[#0a0818]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">Who we are</p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
                Your strategic technology partner
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Mapletech Labs builds software that fits your business. We combine technical depth with product thinking to deliver solutions that drive measurable outcomes.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-10">
                From startups to enterprise, we work with AI, cloud, and modern frameworks to solve real problems — without the hype.
              </p>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-600 mb-4">Trusted by</p>
                <p className="text-sm text-gray-500">Great American · Disney · JLL · Innovatech · NexaCorp</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-8">Our approach</p>
              <div className="space-y-8">
                {pillars.map((p, i) => (
                  <div key={p.title} className="flex gap-6">
                    <span className="text-xs font-mono text-gray-600 tabular-nums flex-shrink-0 pt-0.5">0{i + 1}</span>
                    <div>
                      <h4 className="font-medium text-white mb-2">{p.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
