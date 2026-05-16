const socialIcons = [
  {
    label: "LinkedIn",
    icon: <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18V10H6v8h2.3zM7.2 8.6a1.3 1.3 0 100-2.7 1.3 1.3 0 000 2.7zM18 18v-4.6c0-2.1-1.1-3.1-2.7-3.1-1.3 0-1.9.7-2.3 1.2V10h-2.3v8h2.3v-4.4c0-1.1.2-2.2 1.6-2.2s1.4 1.3 1.4 2.3V18H18z" />,
    fill: true,
  },
  {
    label: "Instagram",
    icon: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r=".5" fill="currentColor" /></>,
    fill: false,
  },
  {
    label: "YouTube",
    icon: <path d="M23 7s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.2-1C16.5 3.5 12 3.5 12 3.5s-4.5 0-7.9.3c-.5.1-1.4 0-2.2 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.8v1.7c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s4.5 0 7.9-.3c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.7c0-1.9-.2-3.8-.2-3.8zM10 14.6V8.4l5.6 3.1L10 14.6z" />,
    fill: true,
  },
  {
    label: "Twitter/X",
    icon: <path d="M18.9 3H22l-7.5 8.6L23 21h-6.8l-5.3-7-6.1 7H1.7l8-9.2L1.5 3h7l4.8 6.4L18.9 3zm-2.4 16h1.9L7.6 5H5.6l10.9 14z" />,
    fill: true,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Col 1 — Brand */}
          <div className="md:col-span-4">
            <a href="#top" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-white grid place-items-center">
                <span className="font-display font-bold text-navy-900 text-[16px] tracking-tight">JG</span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-white text-[18px]">JG University</div>
                <div className="text-[11px] tracking-[.18em] text-gold-300 uppercase font-semibold">Excellence by Choice</div>
              </div>
            </a>
            <p className="mt-5 text-[14px] text-white/65 leading-relaxed max-w-xs">
              A New Age Tech-Driven University shaping future-ready professionals since 1965. Sponsored by ASIA Charitable Trust.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-gold-500 hover:text-navy-900 grid place-items-center transition"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill={s.fill ? "currentColor" : "none"} stroke={s.fill ? "none" : "currentColor"} strokeWidth="2">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div className="md:col-span-2">
            <div className="text-[11px] tracking-[.22em] uppercase text-gold-300 font-semibold">Explore</div>
            <ul className="mt-4 space-y-2.5 text-[14px] text-white/75">
              {[
                { href: "#programmes", label: "Programmes" },
                { href: "#campus",     label: "Campus" },
                { href: "#leadership", label: "About" },
                { href: "#cta",        label: "Admissions" },
                { href: "#footer",     label: "Contact" },
              ].map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-gold-300 transition">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[.22em] uppercase text-gold-300 font-semibold">Contact</div>
            <ul className="mt-4 space-y-4 text-[14px] text-white/75">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>ASIA Campus, Drive In Rd,<br />Thaltej, Ahmedabad-380054,<br />Gujarat, India</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
                </svg>
                <span>connect@jguni.in<br />admission@jguni.in</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.7a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                </svg>
                <span>+91 7567 7567 58 / 59</span>
              </li>
            </ul>
          </div>

          {/* Col 4 — Psychometric */}
          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[.22em] uppercase text-gold-300 font-semibold">Discover Your Fit</div>
            <p className="mt-3 text-[13px] text-white/65 leading-relaxed">
              Not sure which programme suits you? Take our free assessment and get a personalised report.
            </p>
            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-[13px] transition"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3 8-8" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
              Free Psychometric Test
            </a>
            <div className="mt-6 p-4 rounded-xl bg-white/[.04] border border-white/10">
              <div className="text-[11px] tracking-[.2em] uppercase text-gold-300 font-semibold">Trust</div>
              <div className="mt-2 text-[13px] text-white/70 leading-relaxed">
                ASIA Charitable Trust manages <span className="text-white font-semibold">17 colleges, 3 schools</span> & JG University.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-[12px] text-white/50">© 2025 JG University. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-5 text-[12px] text-white/50">
            {["Terms", "Privacy Policy", "Mandatory Disclosure", "Cyber Hygiene Handbook"].map((l) => (
              <a key={l} href="#" className="hover:text-gold-300 transition">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
