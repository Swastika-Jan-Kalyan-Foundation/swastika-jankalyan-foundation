import img1 from "../assets/imgcrs1.jpeg";
import img2 from "../assets/imgcrs2.jpeg";
import img3 from "../assets/imgcrs3.jpeg";
import img4 from "../assets/imgcrs4.jpeg";
import img5 from "../assets/imgcrs5.jpeg";
import { useState, useEffect, useMemo, useRef } from "react";
import logo from "../assets/logo.png";

/* ─────────────────────────────────────────────
   SVG DECORATION COMPONENTS
───────────────────────────────────────────── */

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

const CircleRingSVG = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="100" cy="100" r="90" stroke="#5FAF6B" strokeWidth="1" strokeDasharray="6 4" strokeOpacity="0.4" />
    <circle cx="100" cy="100" r="72" stroke="#5FAF6B" strokeWidth="0.5" strokeOpacity="0.2" />
    <circle cx="100" cy="100" r="10" fill="#5FAF6B" fillOpacity="0.15" />
    <circle cx="100" cy="100" r="4" fill="#5FAF6B" fillOpacity="0.5" />
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
    <path d="M0 60 C200 10 400 110 600 60 C800 10 1000 100 1200 50 C1320 20 1380 70 1440 60 L1440 120 L0 120Z" fill="#e8f5ea" />
    <path d="M0 80 C300 30 600 130 900 70 C1100 30 1300 90 1440 80 L1440 120 L0 120Z" fill="#d4efd8" fillOpacity="0.6" />
  </svg>
);

const TreeSVG = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="26" y="60" width="8" height="25" rx="3" fill="#5FAF6B" fillOpacity="0.3" />
    <ellipse cx="30" cy="45" rx="22" ry="28" fill="#5FAF6B" fillOpacity="0.15" stroke="#5FAF6B" strokeWidth="1" strokeOpacity="0.4" />
    <ellipse cx="20" cy="52" rx="14" ry="18" fill="#5FAF6B" fillOpacity="0.1" />
    <ellipse cx="40" cy="50" rx="14" ry="18" fill="#5FAF6B" fillOpacity="0.1" />
    <ellipse cx="30" cy="28" rx="16" ry="20" fill="#5FAF6B" fillOpacity="0.2" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.3" />
  </svg>
);

const GlobeSVG = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="60" cy="60" r="50" stroke="#5FAF6B" strokeWidth="1.5" strokeOpacity="0.4" />
    <ellipse cx="60" cy="60" rx="25" ry="50" stroke="#5FAF6B" strokeWidth="1" strokeOpacity="0.3" />
    <ellipse cx="60" cy="60" rx="50" ry="20" stroke="#5FAF6B" strokeWidth="1" strokeOpacity="0.3" />
    <ellipse cx="60" cy="60" rx="50" ry="35" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.2" />
    <line x1="10" y1="60" x2="110" y2="60" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.2" />
    <line x1="60" y1="10" x2="60" y2="110" stroke="#5FAF6B" strokeWidth="0.8" strokeOpacity="0.2" />
  </svg>
);

const HandHeartSVG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 12a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0v4a3 3 0 0 1-3 3z" />
    <path d="M4 20v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
    <path d="M16 9s1-1 2 0 1 2 0 3l-3 3-3-3c-1-1-1-2 0-3s2 0 2 0" />
  </svg>
);

const SeedlingSVG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22V12" />
    <path d="M12 12C12 12 7 11 5 7s3-7 7-5c4-2 9 1 7 5s-7 5-7 5z" />
  </svg>
);

const SunSVG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const DropSVG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C12 2 5 10 5 15a7 7 0 0 0 14 0C19 10 12 2 12 2z" />
  </svg>
);

const BookSvg = ({ className = "" }) => (
  <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">


    <path d="M30 50 
           Q80 25 110 50 
           L110 150 
           Q80 125 30 150 
           Z"
      stroke="#5FAF6B"
      stroke-width="3"
      fill="none"
      stroke-linejoin="round" />


    <path d="M110 50 
           Q140 25 190 50 
           L190 150 
           Q140 125 110 150 
           Z"
      stroke="#5FAF6B"
      stroke-width="3"
      fill="none"
      stroke-linejoin="round" />


    <path d="M110 45 
           Q112 100 110 155"
      stroke="#5FAF6B"
      stroke-width="2"
      fill="none"
      stroke-linecap="round" />


    <path d="M50 80 Q75 70 95 80"
      stroke="#5FAF6B"
      stroke-width="1.5"
      fill="none"
      opacity="0.7" />
    <path d="M50 105 Q75 95 95 105"
      stroke="#5FAF6B"
      stroke-width="1.5"
      fill="none"
      opacity="0.7" />


    <path d="M125 80 Q150 70 170 80"
      stroke="#5FAF6B"
      stroke-width="1.5"
      fill="none"
      opacity="0.7" />
    <path d="M125 105 Q150 95 170 105"
      stroke="#5FAF6B"
      stroke-width="1.5"
      fill="none"
      opacity="0.7" />

  </svg>
)

const ArrowRightSVG = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CloseSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const QuoteSVG = ({ className = "" }) => (
  <svg viewBox="0 0 40 30" fill="currentColor" className={className}>
    <path d="M0 30V18.75Q0 12.5 3.375 7.5T12.5 0l2.5 3.75Q11 5.5 9.25 8.625T7.5 15H15V30H0zm22.5 0V18.75q0-6.25 3.375-11.25T35 0l2.5 3.75Q33.5 5.5 31.75 8.625T30 15h7.5V30H22.5z" />
  </svg>
);

/* ─────────────────────────────────────────────
   STATS DATA
───────────────────────────────────────────── */
const stats = [
  { icon: SeedlingSVG, value: "500+", label: "Trees Planted" },

  { icon: SunSVG, value: "50+", label: "Supporters" },
  { icon: DropSVG, value: "10+", label: "Events" },
  { icon: BookSvg, value: "3+", label: "Upcoming Projects" },

];

const causes = [
  {
    icon: SeedlingSVG,
    title: "Education & Awareness",
    desc: "We believe knowledge is the most powerful tool for transformation. By providing accessible learning resources and leading targeted awareness campaigns, we empower individuals to think critically and break the cycle of stagnation and bridge the future readiness gap. We are committed to fostering a culture of lifelong learning.",
    color: "#5FAF6B",
    pct: 74,
  },
  {
    icon: DropSVG,
    title: "Health, Lifestyle & Social Status",
    desc: "Wellness is a human right, not a privilege. We focus on enhancing community health outcomes, promoting sustainable lifestyle choices, and advocating for social equity. By addressing the root causes of disparity and providing support for holistic well-being, we aim to uplift the dignity of every individual, helping them overcome barriers to achieve a higher quality of life. ",
    color: "#3d8f4a",
    pct: 58,
  },
  {
    icon: SunSVG,
    title: "Environment",
    desc: "Our planet is our shared home, and we are dedicated to its preservation. Through local conservation efforts, sustainability workshops, and advocacy for greener practices, we work to restore the balance between human progress and natural ecosystems. We strive to not only protect our environment for today but to actively regenerate it.",
    color: "#8bf89b",
    pct: 88,
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  const slides = useMemo(() => [img1, img2, img3, img4, img5], []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const navItems = [
    { label: "Home", href: "https://swastikajankalyanfoundation.netlify.app/" },
    { label: "About Us", href: "https://swastikajankalyanfoundation.netlify.app/aboutus" },

    { label: "Projects", href: "https://swastikajankalyanfoundation.netlify.app/projects" },
    { label: "Get Involved", href: "https://swastikajankalyanfoundation.netlify.app/beapartofus" },


    { label: "Contact Us", href: "https://swastikajankalyanfoundation.netlify.app/contactus" },
  ];
  return (
    <div className="relative bg-[#f5fdf6] overflow-x-hidden" style={{ fontFamily: "'Sora', sans-serif" }}>

      {/* ── Google Font ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; }
        .sora-font {
          font-family: "Sora"
        }
        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          50%      { transform: translateY(-18px) rotate(3deg); }
        }
        @keyframes floatX {
          0%,100% { transform: translateX(0px); }
          50%      { transform: translateX(12px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to   { transform: rotate(0deg); }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1); opacity: 0.5; }
          50%  { transform: scale(1.08); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes fadeInUp {
          from { opacity:0; transform: translateY(30px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity:0; transform: translateX(40px); }
          to   { opacity:1; transform: translateX(0); }
        }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: var(--pct); }
        }

        .float-y  { animation: floatY 6s ease-in-out infinite; }
        .float-x  { animation: floatX 7s ease-in-out infinite; }
        .spin-slow { animation: spinSlow 24s linear infinite; }
        .spin-rev  { animation: spinReverse 18s linear infinite; }
        .pulse-ring { animation: pulseRing 3s ease-in-out infinite; }

        .hero-text   { animation: fadeInUp 0.9s ease both; }
        .hero-sub    { animation: fadeInUp 0.9s 0.15s ease both; }
        .hero-btns   { animation: fadeInUp 0.9s 0.3s ease both; }
        .hero-img    { animation: slideInRight 1s 0.2s ease both; }

        .nav-glass {
          backdrop-filter: blur(16px);
          background: rgba(245,253,246,0.85);
          border-bottom: 1px solid rgba(95,175,107,0.12);
          transition: box-shadow 0.3s;
        }
        .nav-glass.scrolled { box-shadow: 0 4px 32px rgba(95,175,107,0.1); }

        .progress-bar {
          width: 0%;
          animation: progressFill 1.6s 0.4s ease forwards;
        }

        .cause-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(95,175,107,0.18); }
        .cause-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }

        .stat-item:hover .stat-icon { transform: scale(1.15) rotate(-5deg); }
        .stat-icon { transition: transform 0.3s ease; }

        .ticket-strip {
          display: flex;
          white-space: nowrap;
          animation: ticker 28s linear infinite;
        }
        .ticket-strip:hover { animation-play-state: paused; }

        .sora-nav-link {
          font-family: "Sora"
        }
        .india-gradient-main {
          
            background: linear-gradient(
              180deg,
              #FF9933 30%,
              #FF9933 50%,
              #ffffff 55%,
              #ffffff 60%,
              #138808 70%,
              #138808 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            display: inline-block;
       
        }

        .india-gradient-blue {
          background: linear-gradient(
            180deg,
            #FF9933 30%,
            #FF9933 50%,
            #1616DE 55%,
            #1616DE 60%,
            #138808 70%,
            #138808 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
      `}</style>

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}

    

      {/* ══════════════════════════════════════════
          HERO — SPLIT LAYOUT
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className=" relative min-h-screen flex items-center pt-10 pb-12 overflow-hidden">

        {/* Background texture blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: "absolute", top: "-8%", right: "-5%", width: "520px", height: "520px", borderRadius: "60% 40% 50% 55% / 45% 55% 60% 40%", background: "radial-gradient(circle at 40% 40%,rgba(139,248,155,0.25) 0%,rgba(95,175,107,0.08) 100%)" }} className="float-y" />
          <div style={{ position: "absolute", bottom: "-10%", left: "-8%", width: "400px", height: "400px", borderRadius: "45% 55% 40% 60% / 60% 40% 55% 45%", background: "radial-gradient(circle,rgba(95,175,107,0.12) 0%,transparent 70%)" }} className="float-x" />
          {/* Grid dots */}
          <svg viewBox="0 0 600 400" className="absolute right-0 top-0 w-[500px] opacity-[0.06]">
            {Array.from({ length: 12 }).map((_, r) =>
              Array.from({ length: 18 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 35 + 10} cy={r * 35 + 10} r="2.5" fill="#5FAF6B" />
              ))
            )}
          </svg>
        </div>

        {/* Floating SVG decorations */}
        <LeafSVG className="absolute top-28 left-8 w-14 h-20 float-y opacity-60" style={{ animationDelay: "1s" }} />
        <LeafSVG className="absolute bottom-24 right-12 w-10 h-14 float-y opacity-40" style={{ animationDelay: "2.5s", transform: "scaleX(-1)" }} />
        <TreeSVG className="absolute bottom-10 left-[20%] w-12 h-16 float-y opacity-50" style={{ animationDelay: "1.8s" }} />
        <CircleRingSVG className="absolute top-32 right-[32%] w-20 h-20 opacity-50 spin-slow" />

        {/* Dotted arc line */}
        <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-64 opacity-10 pointer-events-none" viewBox="0 0 200 400" fill="none">
          <path d="M-30 0 Q120 200 -30 400" stroke="#5FAF6B" strokeWidth="2" strokeDasharray="8 6" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-14 items-center relative z-10">

          {/* ── LEFT TEXT ── */}
          <div>
            {/* Pill badge */}


            <h1 className="hero-text text-[50px] md:text-[64px] font-black text-gray-900 leading-[1.02] mb-5 tracking-tight">
              Rooting ways for{" "}
              <span className="relative" style={{ color: "#5FAF6B" }}>
                Greener,
                <svg viewBox="0 0 220 18" className="absolute -bottom-1 left-0 w-full" fill="none">
                  <path d="M4 14 Q55 4 110 10 Q165 16 216 8" stroke="#5FAF6B" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.5" />
                  <path d="M4 14 Q55 4 110 10 Q165 16 216 8" stroke="#8bf89b" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" />
                </svg>
              </span>
              <br /> Healthier and <br />
              <span className="sora-font" style={{ fontFamily: "'DM Serif Display',serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.9em", color: "#3d8f4a" }}>
                Educated <span className="india-gradient-main" >India</span>
              </span>
            </h1>

            <p className="hero-sub text-gray-500 text-[15px] leading-[1.8] mb-9 max-w-[450px]" style={{ fontFamily: "'Sora',sans-serif", fontWeight: 400 }}>
            We are a youth-led NGO based in Ranchi, working to build a greener, healthier, and more educated Bharat. In an age of rapid industrialization and growing inequality, we aim to bridge critical gaps through education, accessible healthcare, and environmental care. Our mission is to create a society where clean air, future-ready learning, and quality health are not privileges, but basic rights—empowering individuals to grow and uplift the nation..
            </p>

            <div className="hero-btns flex items-center gap-4 flex-wrap">
              <a
                href="https://swastikajankalyanfoundation.netlify.app/trackyourimpact"
                className="group flex items-center gap-2.5 bg-[#5FAF6B] hover:bg-[#3d8f4a] text-white text-[13.5px] font-bold px-7 py-3.5 rounded-full transition-all duration-250 shadow-xl shadow-green-200 hover:-translate-y-1"
              >
                Track Your Impact
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRightSVG className="w-3 h-3" />
                </span>
              </a>

              <a href="https://swastikajankalyanfoundation.netlify.app/projects" className="flex items-center gap-2.5 text-gray-700 hover:text-[#5FAF6B] text-[13.5px] font-semibold px-6 py-3.5 rounded-full border-2 border-gray-200 hover:border-[#5FAF6B] bg-white/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch Our Story
              </a>
            </div>


          </div>

          {/* ── RIGHT IMAGE CLUSTER ── */}
          <div className="hero-img relative flex justify-center items-center min-h-[480px]">

            {/* Spinning orbit rings */}
            <div className="absolute w-[430px] h-[430px] rounded-full border-2 border-dashed border-[#5FAF6B]/25 spin-slow" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="absolute w-[350px] h-[350px] rounded-full border border-[#5FAF6B]/15 spin-rev" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            {/* Main image circle */}
            <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-[40%_60%_55%_45%/_50%_45%_55%_50%] overflow-hidden border-4 border-white shadow-2xl shadow-green-100/50 z-10" style={{ animation: "floatY 7s ease-in-out infinite" }}>
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: i === currentSlide ? 1 : 0 }}
                />
              ))}
              {/* overlay gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(95,175,107,0.2) 0%,transparent 60%)" }} />
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className="rounded-full transition-all duration-300"
                  style={{ width: i === currentSlide ? "20px" : "6px", height: "6px", background: i === currentSlide ? "#5FAF6B" : "#c8e6ca" }}
                />
              ))}
            </div>

            {/* Floating stat badge — top left */}
            <div className="absolute top-4 -left-4 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl border border-green-50 flex items-center gap-3" style={{ animation: "floatX 6s ease-in-out infinite" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#e8f5ea,#c8e6ca)" }}>
                <SeedlingSVG className="w-5 h-5 text-[#5FAF6B]" />
              </div>
              <div>
                <p className="text-[16px] font-black text-gray-900">500+</p>
                <p className="text-[10px] text-gray-400 font-medium">Trees Planted</p>
              </div>
            </div>

            {/* Floating raised badge — bottom right */}


            {/* Globe SVG floating */}
            <GlobeSVG className="absolute top-0 right-0 w-20 h-20 spin-slow opacity-40" />

            {/* Small leaf floating */}
            <LeafSVG className="absolute -top-4 left-1/3 w-10 h-14 float-y opacity-50" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden py-3 border-y border-[#5FAF6B]/15" style={{ background: "linear-gradient(90deg,#e8f5ea,#d4efd8,#e8f5ea)" }}>
        <div className="flex ticket-strip">
          {[...Array(2)].map((_, gi) => (
            <div key={gi} className="flex items-center gap-8 pr-8">
              {[
                "Knowledge Empowerment",
                "Intellectual Growth",
                "Informed Perspectives",
                "Catalyzing Change",
                "Future-Ready Minds",
                "Cultivating Understanding",
                "Eco-Resilience",
                "Regenerative Action",
                "Planetary Stewardship",
                "Climate Advocacy",
                "Nature-Positive Living",
                "Sustainable Innovation",
                "Holistic Well-being",
                "Social Equity",
                "Community Dignity",
                "Inclusive Prosperity",
                "Balanced Lifestyles",
                "Thriving Communities"
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-2 text-[#3d8f4a] text-[12.5px] font-semibold tracking-wider uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FAF6B] inline-block" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS ROW
      ══════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        {/* Subtle bg */}
        <div className="absolute inset-0 pointer-events-none">
          <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0 100 Q360 0 720 100 Q1080 200 1440 100 L1440 200 L0 200Z" fill="#e8f5ea" fillOpacity="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <div key={i} className="stat-item flex flex-col items-center text-center group cursor-default">
                <div className="stat-icon w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md" style={{ background: "linear-gradient(135deg,#e8f5ea,#c8e6ca)", border: "1px solid rgba(95,175,107,0.2)" }}>
                  <Icon className="w-6 h-6 text-[#5FAF6B]" />
                </div>
                <p className="text-[32px] font-black text-gray-900 leading-none mb-1">{value}</p>
                <p className="text-[12px] text-gray-400 font-semibold uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WAVE DIVIDER
      ══════════════════════════════════════════ */}
      <WaveSVG />

      {/* ══════════════════════════════════════════
          CAUSES
      ══════════════════════════════════════════ */}
      <section className="bg-[#e8f5ea] py-20 relative overflow-hidden">
        {/* Background decor */}
        <CircleRingSVG className="absolute top-10 right-10 w-40 h-40 opacity-20 spin-slow" />
        <TreeSVG className="absolute bottom-10 left-10 w-24 h-32 opacity-20 float-y" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

          {/* Section header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 bg-[#5FAF6B]/15 rounded-full px-4 py-1.5 text-[#3d8f4a] text-[11.5px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5FAF6B]" />
              Our Initiatives
            </span>
            <h2 className="text-[38px] md:text-[48px] font-black text-gray-900 leading-tight tracking-tight">
              Causes We Strive For
            </h2>
            <p className="text-gray-500 text-[14.5px] mt-3 max-w-[500px] mx-auto leading-relaxed">
              Each initiative is rooted in real community needs and driven by measurable, lasting impact.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-3 gap-7">
            {causes.map(({ icon: Icon, title, desc, color, pct }, i) => (
              <div
                key={i}
                className="cause-card bg-white rounded-3xl p-7 shadow-md border border-white relative overflow-hidden cursor-pointer"
              >
                {/* bg blob */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-8" style={{ background: `radial-gradient(circle,${color}30,transparent)` }} />
                {/* leaf watermark */}
                <LeafSVG className="absolute bottom-0 right-0 w-20 h-28 opacity-[0.06]" />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10" style={{ background: `${color}18`, border: `1.5px solid ${color}30` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>

                <h3 className="text-[18px] font-black text-gray-900 mb-2 relative z-10">{title}</h3>
                <p className="text-[13.5px] text-gray-500 leading-relaxed mb-6 relative z-10">{desc}</p>

                {/* Progress */}

              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE BAND
      ══════════════════════════════════════════ */}


      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden bg-[#f5fdf6]">
        <div className="absolute inset-0 pointer-events-none">
          <TreeSVG className="absolute right-12 bottom-0 w-28 h-40 opacity-15 float-y" style={{ animationDelay: "1s" }} />
          <CircleRingSVG className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 opacity-20 spin-rev" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="rounded-3xl p-10 md:p-14 relative overflow-hidden" style={{ background: "linear-gradient(120deg,#e8f5ea 0%,#d4efd8 100%)", border: "1.5px solid rgba(95,175,107,0.25)" }}>
            {/* big leaf behind */}
            <LeafSVG className="absolute -right-10 -bottom-10 w-56 h-72 opacity-[0.07]" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="text-center md:text-left max-w-[500px]">
                <span className="inline-block bg-[#FF6161]/15 rounded-full px-4 py-1 text-[#FC3535] text-[11px] font-bold uppercase tracking-widest mb-4">Take Action</span>
                <h2 className="text-[32px] md:text-[42px] font-black text-gray-900 leading-tight mb-3">
                  Every Rupee Plants a<br />
                  <span style={{ color: "#5FAF6B" }}>Seed of Change.</span>
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                  Your contribution directly funds education & awareness, forestation, sustainable development, health & lifestyle and uplifting social status for the communities that need it most.
                </p>
              </div>

              <div className="flex flex-col gap-3 items-center">
                <a
                  href="https://swastikajankalyanfoundation.netlify.app/donatetous"
                  className="group flex items-center gap-2.5 bg-[#5FAF6B] hover:bg-[#3d8f4a] text-white text-[14px] font-black px-9 py-4 rounded-full transition-all duration-200 shadow-xl shadow-green-300/40 hover:-translate-y-1 whitespace-nowrap"
                >
                  Donate Now
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRightSVG className="w-3.5 h-3.5" />
                  </span>
                </a>
                <p className="text-[11px] text-gray-400 font-medium">Secure · Transparent · Impactful</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER STRIP
      ══════════════════════════════════════════ */}



    </div>
  );
};