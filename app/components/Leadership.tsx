const leaders = [
  {
    role: "President",
    name: "M.P. Chandran",
    title: "President, JG University",
    bio: "Postgraduate in Management with 30+ years of senior and board-level experience in India and abroad. Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. Chairman of ASIA Charitable Trust — managing 3 schools, 17 colleges, and JG University.",
    link: "President's Message",
    awards: [],
  },
  {
    role: "Director-General",
    name: "Dr. CA Achyut Dani",
    title: "Director-General & Provost, JG University",
    bio: "21+ years of expertise in academics and industry. Doctorate in Management & Commerce. Fellow of ICAI's CRET committee. Author of textbooks on Accountancy, Financial Reporting, and Taxation for Gujarat Higher Secondary Education Board.",
    link: "DG's Message",
    awards: ["Bharat Jyoti Award", "Gem of CA · ICAI", "Brilliance in Education"],
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 lg:py-28 bg-navy-50/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <div className="eyebrow">Leadership</div>
          <h2 className="mt-3 font-display font-semibold text-navy-900 text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
            Stewards of{" "}
            <span className="font-serif italic font-light text-gold-600">academic excellence</span>.
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {leaders.map((l) => (
            <article key={l.name} className="bg-white rounded-3xl overflow-hidden ring-soft lift">
              <div className="grid sm:grid-cols-[200px_1fr] gap-0">
                <div className="photo-ph relative sm:aspect-auto aspect-[5/4]">
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <span className="text-[10px] tracking-[.22em] uppercase font-semibold text-gold-300 px-2 py-1 rounded-md bg-black/30 backdrop-blur">
                      {l.role}
                    </span>
                    <span className="font-serif text-gold-300/80 text-[40px] leading-none">JG</span>
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display font-semibold text-navy-900 text-[22px]">{l.name}</h3>
                    <span className="w-px h-5 bg-gold-500" />
                    <span className="text-[13px] text-gold-700 font-semibold">{l.role}</span>
                  </div>
                  <p className="mt-4 text-[14px] text-navy-900/70 leading-relaxed">{l.bio}</p>
                  {l.awards.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {l.awards.map((a) => (
                        <span key={a} className="chip">{a}</span>
                      ))}
                    </div>
                  )}
                  <a href="#" className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-navy-900 hover:text-gold-700">
                    {l.link}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
