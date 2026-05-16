const strengths = [
  {
    n: "1",
    title: "Interdisciplinary Approach",
    desc: "Students from diverse backgrounds connect, ideate and solve problems with different conceptual structures and methods.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />
      </svg>
    ),
  },
  {
    n: "2",
    title: "Immersive & Experiential Learning",
    desc: "Exposure to real-life projects to develop hands-on expertise.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 2h6v6c0 1 .3 2 .8 2.8L20 17a3 3 0 01-2.6 4.5H6.6A3 3 0 014 17l4.2-6.2C8.7 10 9 9 9 8V2z" />
      </svg>
    ),
  },
  {
    n: "3",
    title: "Whole Brain Learning Pedagogy",
    desc: "A pedagogy that empowers learners to acquire future-proof technical skills and moulds them into creative thinkers.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2a5 5 0 015 5v1a5 5 0 01-5 5 5 5 0 01-5-5V7a5 5 0 015-5zM7 13l-2 9 7-3 7 3-2-9" />
      </svg>
    ),
  },
  {
    n: "4",
    title: "Faculty from Academia & Industry",
    desc: "Inspired by dynamic scholars with vast academic knowledge and real-world experience.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 21a6.5 6.5 0 0113 0M17 11a3 3 0 100-6 3 3 0 000 6zm5 10a4 4 0 00-8 0" />
      </svg>
    ),
  },
];

export default function Strengths() {
  return (
    <section className="py-24 lg:py-28 bg-navy-50/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow">Our Strengths</div>
          <h2 className="mt-3 font-display font-semibold text-navy-900 text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
            A pedagogy built for the{" "}
            <span className="font-serif italic font-light text-gold-600">world ahead</span>.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {strengths.map((s) => (
            <article key={s.n} className="lift bg-white rounded-2xl p-7 ring-soft relative overflow-hidden">
              <div className="absolute -top-2 right-4 font-serif text-navy-100 text-[110px] leading-none select-none">{s.n}</div>
              <div className="w-12 h-12 rounded-xl bg-gold-100 text-gold-700 grid place-items-center mb-5">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-navy-900 text-[18px]">{s.title}</h3>
              <p className="mt-2 text-[14px] text-navy-900/65 leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
