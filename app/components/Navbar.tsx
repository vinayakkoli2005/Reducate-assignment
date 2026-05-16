"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#programmes", label: "Programmes" },
    { href: "#campus", label: "Campus" },
    { href: "#leadership", label: "About" },
    { href: "#cta", label: "Admissions" },
    { href: "#footer", label: "Contact" },
  ];

  return (
    <header
      id="nav"
      className={`glass fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_-12px_rgba(11,31,75,0.15)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center">
              <span className="font-display font-bold text-white text-[15px] tracking-tight">JG</span>
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-500 ring-2 ring-white" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-semibold text-navy-900 text-[15px] tracking-tight">JG University</div>
            <div className="text-[10px] tracking-[.18em] text-gold-700 uppercase font-semibold">Excellence by Choice · 1965</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-9 text-[14px] font-medium text-navy-900">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gold-600 transition">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="flex items-center gap-2.5">
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500 text-gold-700 hover:bg-gold-50 transition text-[13px] font-semibold"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 11l3 3 8-8" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            Free Psychometric Test
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 px-4 md:px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold text-[13px] shadow-[0_8px_24px_-10px_rgba(245,166,35,.7)] transition"
          >
            Apply Now
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden ml-1 w-10 h-10 grid place-items-center rounded-md text-navy-900 hover:bg-navy-50"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white">
          <div className="px-5 py-4 grid gap-2 text-[15px] font-medium text-navy-900">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="py-2" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#" className="mt-2 inline-flex items-center justify-center px-4 py-2.5 rounded-full border border-gold-500 text-gold-700 text-[13px] font-semibold">
              Free Psychometric Test
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
