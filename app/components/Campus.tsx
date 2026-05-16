const facilities = [
  {
    tag: "Connectivity",
    title: "Wi-Fi Enabled Campus",
    desc: "24×7 high-speed connectivity across every academic block, library, and residence.",
    icon: (
      <svg className="w-14 h-14 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 13a7 7 0 0114 0M8.5 13a3.5 3.5 0 017 0M12 13v0" /><circle cx="12" cy="17" r="1" />
      </svg>
    ),
  },
  {
    tag: "Emerging Tech",
    title: "Industrial IoT Lab",
    desc: "A dedicated hands-on infrastructure to prototype with sensors, edge devices, and automation rigs.",
    icon: (
      <svg className="w-14 h-14 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3v6L4 20a2 2 0 002 2h12a2 2 0 002-2L15 9V3M9 3h6M9 14h6" />
      </svg>
    ),
  },
  {
    tag: "Knowledge",
    title: "Tech-Enabled Library",
    desc: "Digital resources, e-journals, and a curated physical collection across all disciplines.",
    icon: (
      <svg className="w-14 h-14 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h7a3 3 0 013 3v13a3 3 0 00-3-3H4V4zM20 4h-7a3 3 0 00-3 3v13a3 3 0 013-3h7V4z" />
      </svg>
    ),
  },
  {
    tag: "Innovation",
    title: "R&D + Incubation Center",
    desc: "A research and startup ecosystem connecting student founders with mentors and capital.",
    icon: (
      <svg className="w-14 h-14 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 19l-2 2m18-18L9 15l-3-3-3 6 6-3 3 3L21 3z" /><circle cx="14.5" cy="9.5" r="1" />
      </svg>
    ),
  },
];

export default function Campus() {
  return (
    <section id="campus" className="py-24 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow" style={{ color: "#f8c763" }}>Campus Facilities</div>
            <h2 className="mt-3 font-display font-semibold text-white text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
              A campus engineered for{" "}
              <span className="font-serif italic font-light text-gold-300">discovery</span>.
            </h2>
          </div>
          <div className="text-white/60 text-[14px] max-w-sm">
            ASIA Campus · Drive In Rd, Thaltej, Ahmedabad — 380054, Gujarat, India.
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((f) => (
            <article key={f.title} className="lift rounded-2xl bg-white/[.04] border border-white/10 p-6">
              <div className="photo-ph aspect-[5/4] rounded-xl mb-5 relative overflow-hidden">
                <div className="absolute inset-0 grid place-items-center">{f.icon}</div>
                <div className="absolute top-3 left-3 text-[10px] tracking-[.2em] uppercase font-semibold text-white/70 px-2 py-1 rounded-md bg-black/20 backdrop-blur">
                  {f.tag}
                </div>
              </div>
              <h3 className="font-display font-semibold text-white text-[18px]">{f.title}</h3>
              <p className="mt-2 text-[14px] text-white/60 leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
