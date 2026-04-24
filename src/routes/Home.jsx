import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.png";
import { useState, useEffect, useMemo } from 'react'
import logo from "../assets/logo.png"

export const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = useMemo(() => [img1, img2, img3, img4, img5], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = ["Home", "About", "Causes", "Blog", "Pages", "Contact Us"];

  return (
    <section className="relative min-h-screen bg-[#fdf8f4] overflow-hidden">

      {/* World map watermark background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full" fill="#555">
          <ellipse cx="160" cy="180" rx="140" ry="100" />
          <ellipse cx="460" cy="170" rx="190" ry="120" />
          <ellipse cx="700" cy="210" rx="120" ry="100" />
          <ellipse cx="840" cy="290" rx="75" ry="95" />
          <ellipse cx="320" cy="350" rx="85" ry="65" />
        </svg>
      </div>

      {/* Top-right decorative circles */}
      <div className="absolute top-20 right-[20%] w-5 h-5 rounded-full bg-[#5FAF6B] opacity-80 z-10" />
      <div className="absolute top-10 right-[13%] w-3 h-3 rounded-full border-2 border-[#5FAF6B] opacity-50 z-10" />
      <div className="absolute top-32 right-[9%] w-10 h-10 rounded-full bg-[#5FAF6B] opacity-20 z-10" />

      {/* ── NAVBAR ── */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-5">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="SJKF Logo" className="h-30 w-auto" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-gray-600 font-['DM_Sans',sans-serif]">
          {navItems.map((item) => (
            <li key={item} className="relative group cursor-pointer">
              <a href="#" className="hover:text-[#5FAF6B] transition-colors duration-200">
                {item}
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

      {/* ── MOBILE MENU OVERLAY ── */}
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          backdropFilter: menuOpen ? 'blur(6px)' : 'blur(0px)',
          backgroundColor: menuOpen ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0)',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-down Panel */}
      <div
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        style={{
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Panel card */}
        <div className="mx-4 mt-4 rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-gray-300/60 border border-gray-100 overflow-hidden">

          {/* Panel top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-[#5FAF6B] via-[#8bf89b] to-[#5FAF6B]" />

          {/* Panel header */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#5FAF6B] uppercase font-['DM_Sans',sans-serif]">
                Navigation
              </p>
              <p className="text-[18px] font-extrabold text-gray-900 font-['Sora',sans-serif] leading-tight">
                Where to go?
              </p>
            </div>
            {/* Small leaf decoration */}
            <div className="w-10 h-10 rounded-full bg-[#5FAF6B]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#5FAF6B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-5 8z" />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 h-px bg-gray-100" />

          {/* Nav links */}
          <ul className="px-4 pt-3 pb-4 flex flex-col gap-1">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  href="#"
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl group transition-all duration-200 hover:bg-[#5FAF6B]/8 active:bg-[#5FAF6B]/15"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    animationDelay: menuOpen ? `${index * 50}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Dot indicator */}
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FAF6B] opacity-0 group-hover:opacity-100 transition-all duration-200 scale-0 group-hover:scale-100" />
                    <span className="text-[15px] font-semibold text-gray-700 group-hover:text-[#5FAF6B] transition-colors duration-200 font-['DM_Sans',sans-serif]">
                      {item}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-300 group-hover:text-[#5FAF6B] group-hover:translate-x-0.5 transition-all duration-200"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          {/* Bottom CTA section */}
          <div className="mx-4 mb-5 mt-1 p-4 rounded-2xl bg-gradient-to-br from-[#5FAF6B] to-[#3d8f4a] relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white/10" />
            <div className="absolute -bottom-6 -left-4 w-24 h-24 rounded-full bg-white/5" />

            <p className="text-white/80 text-[11.5px] font-medium font-['DM_Sans',sans-serif] mb-1 relative z-10">
              Make a difference today
            </p>
            <p className="text-white text-[15px] font-bold font-['Sora',sans-serif] mb-3 relative z-10">
              Support our causes 🌱
            </p>
            <a
              href="https://swastikajankalyanfoundation.netlify.app/donatetous"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-[#5FAF6B] text-[13px] font-bold px-5 py-2.5 rounded-full shadow-lg transition-all duration-200 active:scale-95 font-['DM_Sans',sans-serif]"
              onClick={() => setMenuOpen(false)}
            >
              Donate Now
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── HERO BODY ── */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-8 pb-16 gap-10">

        {/* LEFT */}
        <div className="flex-1 max-w-[560px]">
          <h1 className="text-[48px] md:text-[58px] font-extrabold text-gray-900 leading-[1.07] mb-6 font-['Sora',sans-serif]">
            Need Your Big <br />
            Hand For{" "}
            <span className="relative inline-block text-[#5FAF6B]">
              Change
              <svg
                viewBox="0 0 148 10"
                className="absolute -bottom-1 left-0 w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7 C30 3, 70 3, 146 6"
                  stroke="#5FAF6B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
            </span>{" "}
            <br />
            The World.
          </h1>

          <p className="text-gray-500 text-[14.5px] leading-relaxed mb-8 max-w-[430px] font-['DM_Sans',sans-serif]">
            Swastika Jan Kalyan Foundation is committed to protecting and nurturing the
            environment through forestation, climate action, and sustainable development —
            empowering communities to become agents of positive change.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-[#5FAF6B] hover:bg-[#8bf89b] text-white text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-orange-200 hover:-translate-y-0.5 font-['DM_Sans',sans-serif]">
              All Causes
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a
              href="https://swastikajankalyanfoundation.netlify.app/donatetous"
              className="flex items-center gap-2 text-gray-700 hover:text-[#5FAF6B] text-[13.5px] font-semibold px-5 py-3 rounded-full border border-gray-200 hover:border-[#5FAF6B] bg-white/70 backdrop-blur-sm transition-all duration-200 font-['DM_Sans',sans-serif]"
            >
              Donate Now
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center items-center relative max-w-[450px] w-full min-h-[380px]">
          <div
            className="absolute w-[370px] h-[370px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-[#5FAF6B] opacity-35"
            style={{ animation: "spinSlow 20s linear infinite" }}
          />
          <div className="absolute w-[330px] h-[330px] md:w-[375px] md:h-[375px] rounded-full border-[2.5px] border-[#5FAF6B] opacity-15" />

          <div className="relative w-[290px] h-[290px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-orange-100 z-10">
            <div className="w-full h-full bg-gradient-to-br from-orange-100 via-amber-200 to-orange-400 flex flex-col items-center justify-center gap-2 text-white/70">
              {slides.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: index === currentSlide ? 1 : 0 }}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-2 right-2 md:bottom-6 md:right-0 z-20 w-28 h-28 rounded-full bg-[#5FAF6B] flex flex-col items-center justify-center shadow-xl shadow-orange-300">
            <span className="text-[21px] font-extrabold text-white leading-tight font-['Sora',sans-serif]">
              ₹865M
            </span>
            <div className="w-7 h-[1.5px] bg-white/40 rounded-full my-1" />
            <span className="text-[10px] text-white/90 font-medium tracking-wide font-['DM_Sans',sans-serif]">
              Total Raised
            </span>
          </div>

          <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-[#5FAF6B] opacity-75 z-20" />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  )
}