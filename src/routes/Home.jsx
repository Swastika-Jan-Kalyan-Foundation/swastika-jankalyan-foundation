import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.png";
import { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import Footer  from "../components/Footer";
export const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [img1, img2, img3, img4, img5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);
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
          <div className="flex items-center gap-2">
            {/**  <svg viewBox="0 0 36 36" className="w-9 h-9" fill="none">
              <path
                d="M18 3 C10 9, 5 18, 9 26 C13 34, 23 34, 27 26 C31 18, 26 9, 18 3Z"
                fill="#5FAF6B"
              />
              <path
                d="M18 8 L18 28 M11 16 L25 16 M11 22 L25 22"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          
            <div className="leading-tight">
              <p className="text-[15px] font-extrabold text-gray-900 tracking-tight font-['Sora',sans-serif]">
                SJKF
              </p>
              <p className="text-[9px] text-gray-400 tracking-[0.18em] uppercase font-semibold">
                Jan Kalyan
              </p>
            </div>**/}
            <div className="flex items-center">
              <img src={logo} alt="SJKF Logo" className="h-30 w-auto" />
            </div>
          </div>

          {/* Links */}
          <ul className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-gray-600 font-['DM_Sans',sans-serif]">
            {["Home", "About", "Causes", "Blog", "Pages", "Contact Us"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <a href="#" className="hover:text-[#5FAF6B] transition-colors duration-200">
                  {item}
                </a>
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[#5FAF6B] group-hover:w-full transition-all duration-300 rounded-full" />
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className="hidden md:flex items-center gap-2 bg-[#5FAF6B] hover:bg-[#8bf89b] text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-orange-200 hover:-translate-y-0.5 font-['DM_Sans',sans-serif]">
            Give Support
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden">
            <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* ── HERO BODY ── */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-8 pb-16 gap-10">

          {/* LEFT */}
          <div className="flex-1 max-w-[560px]">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">


            </div>

            {/* Headline */}
            <h1
              className="text-[48px] md:text-[58px] font-extrabold text-gray-900 leading-[1.07] mb-6 font-['Sora',sans-serif]"
            >
              Need Your Big <br />
              Hand For{" "}
              <span className="relative inline-block text-[#5FAF6B]">
                Change
                {/* Underline squiggle */}
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

            {/* Description */}
            <p className="text-gray-500 text-[14.5px] leading-relaxed mb-8 max-w-[430px] font-['DM_Sans',sans-serif]">
              Swastika Jan Kalyan Foundation is committed to protecting and nurturing the
              environment through forestation, climate action, and sustainable development —
              empowering communities to become agents of positive change.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <button className="flex items-center gap-2 bg-[#5FAF6B] hover:bg-[#8bf89b] text-white text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-orange-200 hover:-translate-y-0.5 font-['DM_Sans',sans-serif]">
                All Causes
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button className="flex items-center gap-2 text-gray-700 hover:text-[#5FAF6B] text-[13.5px] font-semibold px-5 py-3 rounded-full border border-gray-200 hover:border-[#5FAF6B] bg-white/70 backdrop-blur-sm transition-all duration-200 font-['DM_Sans',sans-serif]">
                Donate Now
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex justify-center items-center relative max-w-[450px] w-full min-h-[380px]">
            {/* Spinning dashed ring */}
            <div
              className="absolute w-[370px] h-[370px] md:w-[420px] md:h-[420px] rounded-full border-2 border-dashed border-[#5FAF6B] opacity-35"
              style={{ animation: "spinSlow 20s linear infinite" }}
            />

            {/* Static thin ring */}
            <div className="absolute w-[330px] h-[330px] md:w-[375px] md:h-[375px] rounded-full border-[2.5px] border-[#5FAF6B] opacity-15" />

            {/* Hero image circle */}
            <div className="relative w-[290px] h-[290px] md:w-[340px] md:h-[340px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-orange-100 z-10">
              {/*
              Replace the div below with:
              <img src="/your-image.jpg" alt="Community" className="w-full h-full object-cover" />
            */}
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

            {/* Stats badge */}
            <div className="absolute bottom-2 right-2 md:bottom-6 md:right-0 z-20 w-28 h-28 rounded-full bg-[#5FAF6B] flex flex-col items-center justify-center shadow-xl shadow-orange-300">
              <span className="text-[21px] font-extrabold text-white leading-tight font-['Sora',sans-serif]">
                ₹865M
              </span>
              <div className="w-7 h-[1.5px] bg-white/40 rounded-full my-1" />
              <span className="text-[10px] text-white/90 font-medium tracking-wide font-['DM_Sans',sans-serif]">
                Total Raised
              </span>
            </div>

            {/* Small decorative dot */}
            <div className="absolute top-6 left-6 w-4 h-4 rounded-full bg-[#5FAF6B] opacity-75 z-20" />
          </div>
        </div>

        {/* Spin keyframe injected via style tag */}
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