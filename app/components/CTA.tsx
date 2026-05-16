export default function CTA() {
  return (
    <section id="cta" className="relative bg-navy-950 text-white overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-gold-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-navy-700/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-24 lg:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] tracking-[.22em] uppercase font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          Class of 2026 · Applications Open
        </div>

        <h2 className="mt-6 font-display font-semibold text-[44px] sm:text-[60px] lg:text-[72px] leading-[1.02] tracking-tight">
          Begin your journey at<br />
          <span className="font-serif italic font-light text-gold-300">JG University</span>.
        </h2>

        <p className="mt-5 text-white/70 text-[17px] max-w-xl mx-auto">
          Join thousands of students building future-ready careers — across nine schools and fifty-plus programmes.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold shadow-[0_18px_40px_-12px_rgba(245,166,35,.7)] transition"
          >
            Apply Now
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold transition"
          >
            Enquire Now
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[13px] text-white/55">
          {["UGC Approved", "NEP 2020 Compliant", "ASIA Charitable Trust · 1965"].map((b) => (
            <div key={b} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold-500" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
