"use client";
import { useState } from "react";

type Tab = "ug" | "pg" | "int" | "phd" | "cert";

const SchoolCard = ({
  school, courses, wide, chips,
}: {
  school: string;
  courses?: { name: string; dur: string }[];
  wide?: boolean;
  chips?: string[];
}) => (
  <article className={`lift bg-white ring-soft rounded-2xl p-6 ${wide ? "md:col-span-2" : ""}`}>
    <div>
      <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">School of</div>
      <h3 className="mt-1 font-display font-semibold text-navy-900 text-[20px]">{school}</h3>
    </div>
    {courses && (
      <ul className="mt-5 space-y-3 text-[14px] text-navy-900/85">
        {courses.map((c) => (
          <li key={c.name} className="flex items-start gap-3">
            <span className="mt-1 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-[12px] text-navy-900/55">{c.dur}</div>
            </div>
          </li>
        ))}
      </ul>
    )}
    {chips && (
      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((c) => <span key={c} className="chip">{c}</span>)}
      </div>
    )}
  </article>
);

export default function Programmes() {
  const [tab, setTab] = useState<Tab>("ug");

  const tabs: { id: Tab; label: string }[] = [
    { id: "ug",   label: "Undergraduate" },
    { id: "pg",   label: "Postgraduate" },
    { id: "int",  label: "Integrated (5-Year)" },
    { id: "phd",  label: "Doctoral (PhD)" },
    { id: "cert", label: "Certificates" },
  ];

  return (
    <section id="programmes" className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">Academics</div>
            <h2 className="mt-3 font-display font-semibold text-navy-900 text-[36px] sm:text-[44px] leading-[1.05] tracking-tight">
              Programmes designed for a<br className="hidden sm:block" />{" "}
              <span className="font-serif italic font-light text-gold-600">future-ready</span> world.
            </h2>
            <p className="mt-4 text-[15px] text-navy-900/65 max-w-xl">
              Nine specialist schools, fifty-plus programmes — undergraduate to doctoral, plus emerging-tech certificates.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="font-serif text-gold-600 text-[64px] leading-none">9</div>
            <div className="text-[12px] tracking-[.22em] uppercase text-navy-900/60 font-semibold">Specialist Schools</div>
          </div>
        </div>

        {/* Tab buttons */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-navy-100 overflow-x-auto -mx-5 px-5 lg:mx-0 lg:px-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-t-xl text-[14px] font-semibold whitespace-nowrap transition-all ${
                tab === t.id ? "bg-navy-900 text-white shadow-[0_8px_24px_-10px_rgba(11,31,75,.4)]" : "text-navy-900 hover:text-gold-700"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${tab === t.id ? "bg-gold-500" : "bg-navy-100"}`} />
              {t.label}
            </button>
          ))}
        </div>

        {/* Panes */}
        <div className="mt-10">
          {/* UG */}
          {tab === "ug" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <SchoolCard school="Management" courses={[
                { name: "BBA / BBA (Hons)", dur: "3–4 years" },
                { name: "BBA (Hons) — International Trade & Finance", dur: "4 years" },
              ]} />
              <SchoolCard school="Commerce" courses={[
                { name: "B.Com / B.Com (Hons)", dur: "3–4 years" },
                { name: "B.Com (Hons) with ACCA", dur: "4 years" },
              ]} />
              <SchoolCard school="Computing" courses={[
                { name: "BCA / BCA (Hons)", dur: "3–4 years" },
              ]} />
              <article className="lift bg-white ring-soft rounded-2xl p-6 md:col-span-2">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">School of</div>
                    <h3 className="mt-1 font-display font-semibold text-navy-900 text-[20px]">Engineering</h3>
                    <div className="mt-1 text-[13px] text-navy-900/55">B.Tech — 4 years · 8 semesters</div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["CSE","IT","AI & DS","AI & ML","CE","CSE (AI)","CSE (AI & ML)","CSE (BDA)"].map(c => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </article>
              <SchoolCard school="Law" courses={[{ name: "LL.B.", dur: "3 years · 6 semesters" }]} />
              <article className="lift bg-white ring-soft rounded-2xl p-6 md:col-span-2">
                <div>
                  <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">School of</div>
                  <h3 className="mt-1 font-display font-semibold text-navy-900 text-[20px]">Investigative & Applied Sciences</h3>
                  <div className="mt-1 text-[13px] text-navy-900/55">B.Sc. (Hons) / iMSc tracks</div>
                </div>
                <div className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-navy-900/85">
                  {["Forensic Science & Technology","Cyber & Digital Forensic","Quantum Computing","Mathematics & Computing","Clinical Embryology & Reproductive Biology","Food, Nutrition & Lifestyle Science"].map(c => (
                    <div key={c} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />{c}
                    </div>
                  ))}
                </div>
              </article>
              <SchoolCard school="Design" courses={[
                { name: "B.Design — UI/UX", dur: "3 or 4 years" },
                { name: "B.Design — Game Design", dur: "3 or 4 years" },
              ]} />
            </div>
          )}

          {/* PG */}
          {tab === "pg" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <article className="lift bg-white ring-soft rounded-2xl p-6">
                <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">School of Management</div>
                <ul className="mt-4 space-y-3 text-[14px] text-navy-900/85">
                  {[
                    { name: "MBA", dur: "2 years · 4 semesters" },
                    { name: "Masters in International Trade & Finance", dur: "2 years" },
                    { name: "Masters in Aviation, Hospitality & Travel Management", dur: "2 years" },
                  ].map(c => (
                    <li key={c.name} className="flex items-start gap-3">
                      <span className="mt-1 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                      <div><div className="font-medium">{c.name}</div><div className="text-[12px] text-navy-900/55">{c.dur}</div></div>
                    </li>
                  ))}
                </ul>
              </article>
              {[
                { school: "School of Commerce", courses: [{ name: "M.Com (Hons) — International Accounting & Taxation", dur: "2 years" }] },
                { school: "School of Computing", courses: [{ name: "MCA", dur: "2 years" }, { name: "MCA — AI & Full Stack Development", dur: "2 years" }] },
                { school: "School of Investigative & Applied Sciences", courses: [
                  { name: "M.Sc. — Cyber Security & Digital Forensics", dur: "2 years" },
                  { name: "M.Sc. — Forensic Science & Technology", dur: "2 years" },
                  { name: "M.Sc. — Clinical Embryology & ART", dur: "2 years" },
                ]},
                { school: "School of Law", courses: [{ name: "LL.M.", dur: "2 years · 4 semesters" }] },
                { school: "School of Science & Technology", courses: [{ name: "MSc (IT-Specialization)", dur: "2 years" }] },
              ].map(s => (
                <article key={s.school} className="lift bg-white ring-soft rounded-2xl p-6">
                  <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">{s.school}</div>
                  <ul className="mt-4 space-y-3 text-[14px] text-navy-900/85">
                    {s.courses.map(c => (
                      <li key={c.name} className="flex items-start gap-3">
                        <span className="mt-1 w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        <div><div className="font-medium">{c.name}</div><div className="text-[12px] text-navy-900/55">{c.dur}</div></div>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          )}

          {/* Integrated */}
          {tab === "int" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { name: "iMBA", sub: "BBA + MBA · 10 semesters" },
                { name: "iMBA — Global Business", sub: "5 years" },
                { name: "iMBA — International Trade & Finance", sub: "5 years" },
                { name: "iMBA — Aviation, Hospitality & Travel", sub: "5 years" },
                { name: "iMCA", sub: "BCA + MCA · 5 years" },
                { name: "iMSc (IT)", sub: "BSc + MSc · 5 years" },
                { name: "iMSc (IT-Specialization)", sub: "5 years" },
                { name: "iMSc — Forensic Science", sub: "5 years" },
                { name: "iMSc — Cyber Security & Digital Forensics", sub: "5 years" },
                { name: "iMSc — Reproductive Biology & Clinical Embryology", sub: "5 years" },
              ].map((p) => (
                <article key={p.name} className="lift bg-white ring-soft rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 font-display font-semibold grid place-items-center text-[13px]">5Y</div>
                    <div>
                      <div className="font-display font-semibold text-navy-900">{p.name}</div>
                      <div className="text-[12px] text-navy-900/55">{p.sub}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* PhD */}
          {tab === "phd" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {["Commerce","Management","Computing","Law","Interdisciplinary"].map((d) => (
                <div key={d} className="lift relative bg-navy-900 text-white rounded-2xl p-6 overflow-hidden">
                  <div className="absolute -right-5 -top-5 w-24 h-24 rounded-full bg-gold-500/15" />
                  <div className="text-[11px] tracking-[.22em] uppercase text-gold-300 font-semibold">PhD</div>
                  <div className="mt-2 font-display font-semibold text-[20px]">{d}</div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates */}
          {tab === "cert" && (
            <div className="rounded-2xl bg-navy-50/60 ring-soft p-8">
              <div>
                <div className="text-[11px] tracking-[.2em] uppercase text-gold-700 font-semibold">School of</div>
                <h3 className="font-display font-semibold text-navy-900 text-[22px]">Emerging Technology</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Metaverse","Data Science & AI-ML","Mobile Applications","Blockchain","Digital Marketing","Cyber Security","Robotic Process Automation","Industrial IoT","Full Stack Architect","Azure DevOps"].map((c) => (
                  <span key={c} className="px-4 py-2.5 rounded-full bg-white ring-soft text-[14px] font-medium text-navy-900 lift cursor-default">{c}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
