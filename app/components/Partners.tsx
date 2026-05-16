const partners = ["IBM", "ISRO · SAC", "Coding Pro", "Yudiz", "Virtual Height", "Asian-African Chambers", "Aventure", "Dev", "Samy"];

export default function Partners() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-navy-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div className="eyebrow">Industry Linkage</div>
            <h2 className="mt-2 font-display font-semibold text-navy-900 text-[22px] sm:text-[26px] tracking-tight">
              Partner organisations driving placements & curriculum.
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-10 marquee relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex items-center gap-10 w-max">
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="h-14 px-7 rounded-xl bg-navy-50 ring-soft flex items-center font-display font-bold text-navy-900 text-[16px] tracking-tight whitespace-nowrap"
              aria-hidden={i >= partners.length}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
