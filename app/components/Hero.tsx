export default function Hero() {
  return (
    <section id="top" className="relative hero-bg text-white overflow-hidden noise pt-[72px]">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute top-[72px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/8 backdrop-blur border border-white/15 text-[11px] tracking-[.22em] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
              Admissions Open · Class of 2026
            </div>

            <h1 className="mt-6 font-display font-semibold tracking-tight text-[44px] sm:text-[58px] lg:text-[72px] leading-[1.02]">
              Welcome to<br />
              <span className="text-white">
                JG{" "}
                <span className="font-serif italic font-light text-gold-300">University</span>
              </span>
            </h1>

            <p className="mt-5 text-[18px] sm:text-[20px] text-white/85 font-light max-w-xl">
              The Best <span className="text-gold-300 font-medium">Tech-Driven</span> University in Ahmedabad — shaping future-ready professionals since 1965.
            </p>

            <p className="mt-5 text-[15px] text-white/65 max-w-xl leading-relaxed">
              JG University offers programmes that evolve as per future industry demand, enabling students to get into employment or self-employment seamlessly.{" "}
              <span className="text-white/85">UGC Approved · ASIA Charitable Trust since 1965.</span>
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold shadow-[0_18px_40px_-12px_rgba(245,166,35,.7)] transition"
              >
                Apply Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 hover:bg-white/10 text-white font-semibold transition"
              >
                Explore Programmes
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              {[
                {
                  label: "UGC", sub: "Approved",
                  icon: <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-7h6v7" />,
                },
                {
                  label: "NEP 2020", sub: "Compliant",
                  icon: <><path d="M4 4h16v16H4z" /><path d="M4 9h16M9 4v16" /></>,
                },
                {
                  label: "17 Colleges · 3 Schools", sub: "Trust",
                  icon: <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />,
                },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10">
                  <div className="w-9 h-9 rounded-md bg-gold-500/15 grid place-items-center text-gold-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{b.icon}</svg>
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] text-white/55 uppercase tracking-wider">{b.sub}</div>
                    <div className="text-[12px] font-semibold">{b.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-gold-500/30 bg-gold-500/5" />
              <div className="relative rounded-2xl bg-white/[.04] backdrop-blur-xl border border-white/15 p-7">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] tracking-[.22em] uppercase text-gold-300 font-semibold">Est. 1965</div>
                    <div className="mt-1 font-display font-semibold text-white text-lg">ASIA Charitable Trust</div>
                  </div>
                  <div className="w-16 h-16 rounded-full border-2 border-gold-500/60 grid place-items-center relative">
                    <div className="absolute inset-1 rounded-full border border-gold-500/30" />
                    <span className="font-serif italic text-gold-300 text-[22px]">JG</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-px bg-white/10 rounded-xl overflow-hidden">
                  {[
                    { num: "60+", label: "Years of Legacy" },
                    { num: "17",  label: "Affiliated Colleges" },
                    { num: "9",   label: "Schools" },
                    { num: "50+", label: "Programmes" },
                  ].map((s) => (
                    <div key={s.label} className="bg-navy-950/40 p-5">
                      <div className="font-serif text-4xl text-gold-300 leading-none">{s.num}</div>
                      <div className="mt-1 text-[12px] uppercase tracking-wider text-white/60">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 ring-2 ring-navy-950" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy-500 to-navy-700 ring-2 ring-navy-950" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 ring-2 ring-navy-950" />
                  </div>
                  <div className="text-[13px] text-white/75">Join 12,000+ students building future-ready careers.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="relative">
        <svg className="block w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,40 C360,0 720,80 1440,20 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
