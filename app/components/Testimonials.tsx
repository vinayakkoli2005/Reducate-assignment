"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    initials: "SK",
    name: "Sumit Khurana",
    role: "B.Com · General Manager, Ahmedabad Mirror & NavGujarat Samay",
    tag: "Class of 2009 · Media",
    quote: "My education at JG has been instrumental in shaping my career. The comprehensive academic program and exceptional faculty provided me with a solid grounding in my chosen field of study.",
    highlight: "solid grounding",
  },
  {
    initials: "JG",
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer",
    tag: "Performing Arts",
    quote: "The faculty members were more than just teachers; they served as mentors who supported and guided us at every step of our academic journey.",
    highlight: "mentors",
  },
  {
    initials: "YS",
    name: "Yatendra Sinh Joddha",
    role: "BCA · Technical Lead, Tata Consultancy Services",
    tag: "Technology · TCS",
    quote: "The BCA program provided me with a strong foundation in IT, and the faculty's focus on the best training gave me the opportunity to apply my knowledge in real-world scenarios.",
    highlight: "real-world scenarios",
  },
  {
    initials: "KS",
    name: "Krishna Soni",
    role: "BBA · Assistant Manager, ICICI Bank",
    tag: "Banking · ICICI",
    quote: "The Management programme offers cutting-edge course design, top-notch industry teachers, and hands-on experience projects.",
    highlight: "hands-on experience",
  },
  {
    initials: "PR",
    name: "Parth Rupareliya",
    role: "Art Director",
    tag: "Creative · Direction",
    quote: "JG's programme helped me develop a strong foundation in my area of interest and equipped me with the skills necessary to succeed.",
    highlight: "skills necessary to succeed",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const show = (i: number) => setIdx((i + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => show(idx + 1), 7000);
    return () => clearInterval(timer);
  }, [idx]);

  const t = testimonials[idx];

  const highlightQuote = (quote: string, highlight: string) => {
    const parts = quote.split(highlight);
    if (parts.length === 1) return <>{quote}</>;
    return (
      <>
        {parts[0]}
        <span className="text-gold-600">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <div className="eyebrow">Alumni Voices</div>
            <h2 className="mt-3 font-display font-semibold text-navy-900 text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
              Careers, in their{" "}
              <span className="font-serif italic font-light text-gold-600">own words</span>.
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => show(idx - 1)}
              className="w-11 h-11 rounded-full border border-navy-100 hover:border-gold-500 hover:text-gold-700 text-navy-900 grid place-items-center transition"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => show(idx + 1)}
              className="w-11 h-11 rounded-full bg-navy-900 hover:bg-navy-700 text-white grid place-items-center transition"
              aria-label="Next"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute -top-6 -left-2 font-serif text-gold-500/15 text-[180px] leading-none select-none pointer-events-none">"</div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
            <div>
              <p className="font-display text-navy-900 text-[24px] sm:text-[32px] leading-[1.25] tracking-tight">
                "{highlightQuote(t.quote, t.highlight)}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 grid place-items-center font-display font-bold text-navy-900 text-[16px]">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-navy-900">{t.name}</div>
                  <div className="text-[13px] text-navy-900/60">{t.role}</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/5] rounded-2xl photo-ph relative">
                <div className="absolute bottom-4 left-4 right-4 text-white/80 text-[12px] tracking-[.18em] uppercase font-semibold">
                  {t.tag}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-10 flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => show(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === idx ? "w-10 bg-gold-500" : "w-1.5 bg-navy-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
