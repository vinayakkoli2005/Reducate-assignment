const features = [
  "NEP 2020 & UGC Compliant Programmes",
  "Faculty with Industry + Academic Expertise",
  "Collaborations with Foreign Universities",
  "Hands-on Training with Emerging Tech",
  "Full-Pay On-The-Job Training Opportunities",
  "Cross-Cultural & Cross-Sectoral Internships",
  "Course-Embedded Capstone Projects",
  "24×7 Accessibility of Campus Facilities",
];

const Check = () => (
  <span className="mt-0.5 w-6 h-6 rounded-full bg-gold-500 text-navy-900 grid place-items-center flex-shrink-0">
    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M5 12l5 5 9-11" />
    </svg>
  </span>
);

export default function Features() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow">Salient Features</div>
            <h2 className="mt-3 font-display font-semibold text-navy-900 text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
              Eight reasons<br />students{" "}
              <span className="font-serif italic font-light text-gold-600">choose JG</span>.
            </h2>
            <p className="mt-4 text-[15px] text-navy-900/65 max-w-md">
              From foreign collaborations to capstone projects — every programme is engineered for real-world outcomes.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 p-3 rounded-2xl bg-navy-50 ring-soft">
              <div className="w-12 h-12 rounded-xl bg-gold-500 text-navy-900 grid place-items-center font-display font-bold text-sm">24/7</div>
              <div className="pr-3 leading-tight">
                <div className="font-display font-semibold text-navy-900 text-[14px]">Campus Access</div>
                <div className="text-[12px] text-navy-900/55">Facilities open round-the-clock.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 p-4 rounded-xl hover:bg-navy-50/60 transition">
                  <Check />
                  <span className="text-[15px] text-navy-900 font-medium leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
