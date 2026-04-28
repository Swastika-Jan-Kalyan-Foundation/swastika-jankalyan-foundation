import { useState } from "react";
import "../App.css"
import "../index.css"
import logo from "../assets/logo.png";

const CloseSVG = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );

  const ArrowRightSVG = ({ className = "" }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  const LeafSVG = ({ className = "", style = {} }) => (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
      <path d="M40 95 C40 95 5 65 5 35 C5 15 22 2 40 2 C58 2 75 15 75 35 C75 65 40 95 40 95Z" fill="#5FAF6B" fillOpacity="0.18" />
      <path d="M40 95 C40 95 5 65 5 35 C5 15 22 2 40 2 C58 2 75 15 75 35 C75 65 40 95 40 95Z" stroke="#5FAF6B" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
      <line x1="40" y1="95" x2="40" y2="10" stroke="#5FAF6B" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="40" y1="50" x2="18" y2="30" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="40" y1="60" x2="62" y2="40" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="40" y1="40" x2="15" y2="22" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="40" y1="70" x2="60" y2="55" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.3" />
    </svg>
  );
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { label: "Home", href: "https://swastikajankalyanfoundation.netlify.app/" },
        { label: "About Us", href: "https://swastikajankalyanfoundation.netlify.app/aboutus" },
    
        { label: "Projects", href: "https://swastikajankalyanfoundation.netlify.app/projects" },
        { label: "Get Involved", href: "https://swastikajankalyanfoundation.netlify.app/beapartofus" },
    
    
        { label: "Contact Us", href: "https://swastikajankalyanfoundation.netlify.app/contactus" },
      ];
    return(
        <>
            <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="SJKF Logo" className="h-30 w-auto" />
        </div>
        <div className=" sjkf-pill-badge hero-text mt-6 inline-flex items-center gap-2 bg-[#5FAF6B]/10 border border-[#5FAF6B]/25 rounded-full px-4 py-1.5 text-[#3d8f4a] text-[12px] font-semibold mb-6 tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#5FAF6B] animate-pulse" />
          Swastika Jan Kalyan Foundation
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-gray-600 font-['DM_Sans',sans-serif]">
          {navItems.map((item) => (
            <li key={item.label} className="relative group cursor-pointer">
              <a href={item.href} className="sora-nav-link hover:text-[#5FAF6B] transition-colors duration-200">
                {item.label}
              </a>
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#5FAF6B] group-hover:w-full transition-all duration-300 rounded-full" />
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://swastikajankalyanfoundation.netlify.app/donatetous"
          className="hidden md:flex items-center gap-2 bg-[#5FAF6B] hover:bg-[#8bf89b] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-orange-200 hover:-translate-y-0.5 font-['DM_Sans',sans-serif]"
        >
          Give Support
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden relative z-[60] w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md shadow-gray-200 border border-gray-100 transition-all duration-200 active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span
              className="block h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-[2px] bg-gray-700 rounded-full transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
              }}
            />
            <span
              className="block h-[2px] bg-gray-700 rounded-full transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </div>
        </button>
      </nav>

      {/* ══════════════════════════════════════════
          MOBILE MENU OVERLAY
      ══════════════════════════════════════════ */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          backdropFilter: menuOpen ? "blur(8px)" : "blur(0px)",
          backgroundColor: menuOpen ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)",
          pointerEvents: menuOpen ? "all" : "none",
        }}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        style={{
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="mx-3 mt-3 rounded-3xl bg-white/96 backdrop-blur-2xl shadow-2xl border border-green-100 overflow-hidden">
          {/* accent bar */}
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg,#5FAF6B,#8bf89b,#3d8f4a)" }} />

          {/* header with close */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#5FAF6B] uppercase">Navigation</p>
              <p className="text-[17px] font-extrabold text-gray-900 leading-tight" style={{ fontFamily: "'DM Serif Display',serif" }}>
                Where to&nbsp;<em>go?</em>
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center text-red-400 transition-all duration-200 active:scale-90 border border-red-100"
              aria-label="Close menu"
            >
              <CloseSVG />
            </button>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gray-100" />

          {/* Nav links */}
          <ul className="px-4 pt-3 pb-4 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <li key={item}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl group transition-all duration-200 hover:bg-[#5FAF6B]/10 active:bg-[#5FAF6B]/20"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAF6B] opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100" />
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#5FAF6B] transition-colors duration-200">{item.label}</span>
                  </div>
                  <ArrowRightSVG className="w-4 h-4 text-gray-300 group-hover:text-[#5FAF6B] group-hover:translate-x-0.5 transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <div className="mx-4 mb-5 mt-1 p-5 rounded-2xl relative overflow-hidden" style={{ background: "linear-gradient(135deg,#5FAF6B,#3d8f4a)" }}>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
            <div className="absolute -bottom-8 -left-5 w-28 h-28 rounded-full bg-white/5" />
            {/* decorative leaf */}
            <LeafSVG className="absolute right-4 bottom-2 w-16 h-20 opacity-20" />

            <p className="text-white/80 text-[11px] font-semibold uppercase tracking-widest mb-1 relative z-10">Make a difference</p>
            <p className="text-white text-[16px] font-extrabold mb-3 relative z-10">Support our causes 🌱</p>
            <a
              href="https://swastikajankalyanfoundation.netlify.app/donatetous"
              onClick={() => setMenuOpen(false)}
              className="relative z-10 inline-flex items-center gap-2 bg-white text-[#5FAF6B] text-[13px] font-bold px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 active:scale-95"
            >
              Donate Now <ArrowRightSVG className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
        </>
    )
}