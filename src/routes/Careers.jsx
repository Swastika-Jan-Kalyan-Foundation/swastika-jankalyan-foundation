import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// SVG Decorations
const LeafSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 95 C40 95 5 70 5 35 C5 10 40 2 40 2 C40 2 75 10 75 35 C75 70 40 95 40 95Z" fill="currentColor" opacity="0.15"/>
    <path d="M40 95 C40 95 5 70 5 35 C5 10 40 2 40 2 C40 2 75 10 75 35 C75 70 40 95 40 95Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="40" y1="10" x2="40" y2="92" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    <path d="M40 30 C30 28 20 32 15 40" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M40 45 C50 43 60 47 65 55" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M40 60 C30 58 22 62 18 70" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
  </svg>
);

const BranchSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 180 Q60 140 80 100 Q100 60 140 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <path d="M80 100 Q110 80 130 90" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M100 70 Q120 50 150 55" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="130" cy="90" r="5" fill="currentColor" opacity="0.6"/>
    <circle cx="150" cy="55" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="140" cy="30" r="6" fill="currentColor" opacity="0.6"/>
    <path d="M60 130 Q40 115 30 120" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <circle cx="30" cy="120" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
);

const SeedSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="35" rx="18" ry="28" fill="currentColor" opacity="0.2" transform="rotate(-15 30 35)"/>
    <ellipse cx="30" cy="35" rx="18" ry="28" stroke="currentColor" strokeWidth="1.5" fill="none" transform="rotate(-15 30 35)"/>
    <path d="M30 65 L30 78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 72 Q30 68 40 72" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round"/>
  </svg>
);

const EnvelopeSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="10" width="90" height="60" rx="6" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
    <path d="M5 16 L50 45 L95 16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 70 L35 45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <path d="M95 70 L65 45" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    <rect x="30" y="28" width="40" height="5" rx="2.5" fill="currentColor" opacity="0.3"/>
    <rect x="35" y="20" width="30" height="3" rx="1.5" fill="currentColor" opacity="0.2"/>
  </svg>
);

const HeartHandsSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 70 C50 70 10 50 10 28 C10 18 18 12 27 14 C35 16 42 24 50 30 C58 24 65 16 73 14 C82 12 90 18 90 28 C90 50 50 70 50 70Z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2"/>
    <path d="M25 60 Q15 65 10 72" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <path d="M75 60 Q85 65 90 72" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="38" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
);

const WaveDivider = () => (
  <div className="w-full overflow-hidden leading-none">
    <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <path d="M0 40 C240 80 480 0 720 40 C960 80 1200 0 1440 40 L1440 80 L0 80 Z" fill="#f0f7f0"/>
    </svg>
  </div>
);

const FloatingLeaf = ({ style, className }) => (
  <div className={`absolute pointer-events-none ${className}`} style={style}>
    <LeafSVG className="w-full h-full text-green-300" />
  </div>
);

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState({});
  const refs = useRef({});

  useEffect(() => {
    const observers = {};
    Object.entries(refs.current).forEach(([key, el]) => {
      if (!el) return;
      observers[key] = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.15 }
      );
      observers[key].observe(el);
    });
    return () => Object.values(observers).forEach((o) => o.disconnect());
  }, []);

  const setRef = (key) => (el) => {
    refs.current[key] = el;
  };

  const fadeIn = (key, delay = 0) =>
    `transition-all duration-700 ease-out ${delay ? `delay-[${delay}ms]` : ""} ${
      isVisible[key] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { font-family: 'Sora', sans-serif; }
        .hero-bg {
          background: #2d6a4f;
        }
        .dot-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 28px 28px;
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(27,67,50,0.15);
        }
        .tag-chip {
          background: linear-gradient(135deg, #d8f3dc, #b7e4c7);
          color: #1b4332;
        }
        .cta-btn {
          background: linear-gradient(135deg, #52b788, #2d6a4f);
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(52,183,120,0.35);
        }
        .cta-btn:hover {
          background: linear-gradient(135deg, #74c69d, #40916c);
          box-shadow: 0 8px 30px rgba(52,183,120,0.5);
          transform: translateY(-2px);
        }
        .envelope-card {
          background: linear-gradient(135deg, #ffffff 60%, #f0faf4 100%);
          border: 1.5px solid #b7e4c7;
        }
        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #b7e4c7, transparent);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-4deg); }
        }
        .leaf-float-1 { animation: float 7s ease-in-out infinite; }
        .leaf-float-2 { animation: float2 9s ease-in-out infinite 1s; }
        .leaf-float-3 { animation: float 11s ease-in-out infinite 3s; }
        .stat-num {
          color: #b7e4c7;
        }
        .timeline-dot {
          background: linear-gradient(135deg, #52b788, #2d6a4f);
        }
        .highlight-green { color: #52b788; }
      `}</style>

      <div className="min-h-screen bg-[#f0f7f0]" style={{ fontFamily: "'Sora', sans-serif" }}>

        {/* ── HERO SECTION ── */}
        <section className="hero-bg dot-pattern relative overflow-hidden pt-24 pb-0 min-h-[72vh] flex flex-col justify-end">
          {/* Floating Leaves */}
          <FloatingLeaf className="w-16 h-20 top-16 left-12 opacity-40 leaf-float-1" style={{}} />
          <FloatingLeaf className="w-10 h-14 top-32 right-24 opacity-30 leaf-float-2" style={{}} />
          <FloatingLeaf className="w-8 h-10 bottom-32 left-1/3 opacity-20 leaf-float-3" style={{}} />
          <div className="absolute top-10 right-16 opacity-15">
            <BranchSVG className="w-48 h-48 text-green-300" />
          </div>
          <div className="absolute bottom-20 left-10 opacity-10">
            <BranchSVG className="w-36 h-36 text-green-200" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-green-400/30 bg-white/5 backdrop-blur-sm text-green-300 text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Career Opportunities
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Grow With <span className="highlight-green">Purpose</span>
            </h1>
            <p className="text-green-100/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Every seed of effort you plant today grows into a forest of change tomorrow. Be part of the story.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-10 mt-14">
              {[
                { num: "500+", label: "Trees Planted" },
                { num: "50+", label: "Supporters" },
                { num: "10+", label: "Active Volunteers" },
                { num: "3+", label: "Upcoming Projects" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="stat-num text-4xl font-extrabold">{s.num}</div>
                  <div className="text-green-300/70 text-xs font-semibold tracking-widest uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Wave bottom */}
          <div className="w-full overflow-hidden leading-none mt-4">
            <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
              <path d="M0 45 C360 90 720 0 1080 45 C1260 67.5 1380 22.5 1440 45 L1440 90 L0 90 Z" fill="#eef7ee"/>
            </svg>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="bg-[#f0f7f0] py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-14">

            {/* ─ NO VACANCIES CARD ─ */}
            <div
              ref={setRef("noVacancy")}
              className={`${fadeIn("noVacancy")} card-hover bg-white rounded-3xl overflow-hidden shadow-sm border border-green-100`}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left accent strip */}
                <div className="md:w-2 bg-gradient-to-b from-[#52b788] to-[#2d6a4f] flex-shrink-0 min-h-4 rounded-l-3xl hidden md:block"></div>
                <div className="flex-1 p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d8f3dc] to-[#b7e4c7] flex items-center justify-center">
                      <svg className="w-7 h-7 text-[#2d6a4f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="tag-chip inline-flex items-center text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                        Current Status
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1b4332] leading-snug mb-4">
                        Our team is currently at full capacity
                      </h2>
                      <p className="text-[#40916c] text-base leading-relaxed font-medium">
                        We do not have any open employment or internship vacancies at this time. But capacity is never a barrier to impact.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ─ VOLUNTEER IMPACT CARD ─ */}
            <div
              ref={setRef("volunteer")}
              className={`${fadeIn("volunteer", 100)} relative card-hover bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] rounded-3xl overflow-hidden shadow-xl text-white p-10 md:p-14`}
            >
              {/* BG decorations */}
              <div className="absolute top-0 right-0 opacity-10">
                <BranchSVG className="w-64 h-64 text-white" />
              </div>
              <div className="absolute bottom-4 left-6 opacity-8">
                <SeedSVG className="w-24 h-32 text-green-200" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-shrink-0">
                  <HeartHandsSVG className="w-24 h-20 text-green-300" />
                </div>
                <div className="flex-1">
                  <p className="text-green-300 text-sm font-bold tracking-widest uppercase mb-3">You Don't Need a Job Title</p>
                  <h2 className="text-3xl md:text-4xl font-extrabold leading-snug mb-5">
                    Transformation starts from the ground up
                  </h2>
                  <p className="text-green-100/85 text-base leading-relaxed mb-4">
                    Our grassroots initiatives always need dedicated hands. From planting trees in degraded forest patches to running hygiene workshops in schools, every hour you give grows into something lasting.
                  </p>
                  <p className="text-green-100/85 text-base leading-relaxed mb-8">
                    If you want to get involved with our <span className="text-[#95d5b2] font-semibold">education</span>, <span className="text-[#95d5b2] font-semibold">environment</span>, and <span className="text-[#95d5b2] font-semibold">sanitation</span> projects right away — we encourage you to join us as a volunteer.
                  </p>

                  {/* Volunteer pillars */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {/* Education */}
                    <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10">
                      <div className="flex justify-center mb-2">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Open book */}
                          <path d="M18 8 C14 6 8 6 4 8 L4 28 C8 26 14 26 18 28 C22 26 28 26 32 28 L32 8 C28 6 22 6 18 8Z" fill="#52b788" opacity="0.25"/>
                          <path d="M18 8 L18 28" stroke="#95d5b2" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M4 8 C8 6 14 6 18 8 L18 28 C14 26 8 26 4 28 L4 8Z" stroke="#95d5b2" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                          <path d="M32 8 C28 6 22 6 18 8 L18 28 C22 26 28 26 32 28 L32 8Z" stroke="#95d5b2" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
                          {/* Lines on pages */}
                          <line x1="8" y1="13" x2="15" y2="12" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          <line x1="8" y1="17" x2="15" y2="16" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          <line x1="8" y1="21" x2="15" y2="20" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          <line x1="21" y1="12" x2="28" y2="13" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          <line x1="21" y1="16" x2="28" y2="17" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          <line x1="21" y1="20" x2="28" y2="21" stroke="#b7e4c7" strokeWidth="1" strokeLinecap="round" opacity="0.7"/>
                          {/* Pencil on top right */}
                          <rect x="26" y="3" width="4" height="9" rx="1" transform="rotate(35 26 3)" fill="#52b788" opacity="0.8"/>
                          <path d="M28.5 11 L27 14 L30 12.5Z" fill="#95d5b2"/>
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-green-100">Education</div>
                    </div>

                    {/* Environment */}
                    <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10">
                      <div className="flex justify-center mb-2">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Tree trunk */}
                          <rect x="16" y="22" width="4" height="10" rx="2" fill="#52b788" opacity="0.7"/>
                          {/* Ground roots */}
                          <path d="M16 30 Q12 32 10 31" stroke="#52b788" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
                          <path d="M20 30 Q24 32 26 31" stroke="#52b788" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
                          {/* Canopy layers */}
                          <ellipse cx="18" cy="20" rx="10" ry="7" fill="#52b788" opacity="0.3"/>
                          <ellipse cx="18" cy="20" rx="10" ry="7" stroke="#95d5b2" strokeWidth="1.5" fill="none"/>
                          <ellipse cx="18" cy="14" rx="8" ry="6" fill="#52b788" opacity="0.4"/>
                          <ellipse cx="18" cy="14" rx="8" ry="6" stroke="#95d5b2" strokeWidth="1.5" fill="none"/>
                          <ellipse cx="18" cy="9" rx="5.5" ry="5" fill="#52b788" opacity="0.55"/>
                          <ellipse cx="18" cy="9" rx="5.5" ry="5" stroke="#b7e4c7" strokeWidth="1.5" fill="none"/>
                          {/* Leaf sparkle */}
                          <circle cx="13" cy="12" r="1.2" fill="#d8f3dc" opacity="0.7"/>
                          <circle cx="23" cy="17" r="1" fill="#d8f3dc" opacity="0.6"/>
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-green-100">Environment</div>
                    </div>

                    {/* Sanitation */}
                    <div className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm border border-white/10">
                      <div className="flex justify-center mb-2">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          {/* Water drop */}
                          <path d="M18 4 C18 4 8 16 8 22 C8 27.5 12.5 32 18 32 C23.5 32 28 27.5 28 22 C28 16 18 4 18 4Z" fill="#52b788" opacity="0.3"/>
                          <path d="M18 4 C18 4 8 16 8 22 C8 27.5 12.5 32 18 32 C23.5 32 28 27.5 28 22 C28 16 18 4 18 4Z" stroke="#95d5b2" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
                          {/* Inner shine */}
                          <path d="M13 20 Q14 15 17 13" stroke="#b7e4c7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
                          <circle cx="13.5" cy="22" r="1.2" fill="#d8f3dc" opacity="0.5"/>
                          {/* Ripple rings below */}
                          <ellipse cx="18" cy="33" rx="6" ry="1.5" stroke="#52b788" strokeWidth="1" fill="none" opacity="0.4"/>
                          <ellipse cx="18" cy="33" rx="9" ry="2.2" stroke="#52b788" strokeWidth="0.8" fill="none" opacity="0.2"/>
                          {/* Sparkle dots */}
                          <circle cx="25" cy="12" r="1" fill="#95d5b2" opacity="0.7"/>
                          <circle cx="27" cy="18" r="0.8" fill="#95d5b2" opacity="0.5"/>
                          <circle cx="10" cy="15" r="0.8" fill="#95d5b2" opacity="0.5"/>
                        </svg>
                      </div>
                      <div className="text-sm font-semibold text-green-100">Sanitation</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/volunteerwus"
                    className="cta-btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                    Become a Volunteer
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* ─ DIVIDER ─ */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 section-divider"></div>
              <LeafSVG className="w-6 h-8 text-[#52b788]" />
              <div className="flex-1 section-divider"></div>
            </div>

            {/* ─ GENERAL APPLICATION CARD ─ */}
            <div
              ref={setRef("application")}
              className={`${fadeIn("application", 150)}`}
            >
              <div className="text-center mb-10">
                <span className="tag-chip inline-flex items-center text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full mb-4">
                  Future Opportunities
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1b4332] mb-3">
                  Stay in Our Talent Pool
                </h2>
                <p className="text-[#40916c] max-w-xl mx-auto text-base leading-relaxed">
                  If you'd like to be considered for future job or internship opportunities, we'd love to hear from you.
                </p>
              </div>

              {/* Two path cards */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* Postal card */}
                <div className="envelope-card card-hover rounded-3xl p-8 shadow-sm">
                  <div className="mb-6">
                    <EnvelopeSVG className="w-20 h-16 text-[#40916c]" />
                  </div>
                  <div className="tag-chip inline-flex items-center text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                    By Post
                  </div>
                  <h3 className="text-xl font-bold text-[#1b4332] mb-3">Send a Sealed Envelope</h3>
                  <p className="text-[#52796f] text-sm leading-relaxed mb-4">
                    Please send your resume and a brief cover letter outlining your areas of interest in a sealed envelope to our registered address, tagged as:
                  </p>
                  <div className="bg-[#d8f3dc] border border-[#95d5b2] rounded-2xl px-5 py-4 text-center">
                    <p className="text-[#1b4332] font-extrabold text-base tracking-wide">
                      "General Application"
                    </p>
                  </div>
                  <p className="text-[#74c69d] text-xs mt-4 text-center font-medium">Address available on the <Link to='/contactus' ><span className="text-[#1b4332]" >Contact Page</span></Link></p>
                </div>

                {/* Email card */}
                <div className="envelope-card card-hover rounded-3xl p-8 shadow-sm">
                  <div className="mb-6 flex items-center justify-center w-20 h-16">
                    <svg className="w-16 h-14 text-[#40916c]" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="5" y="10" width="90" height="60" rx="8" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 20 L50 48 L95 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="72" cy="58" r="14" fill="#d8f3dc" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M67 58 L71 62 L78 54" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="tag-chip inline-flex items-center text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
                    By Email
                  </div>
                  <h3 className="text-xl font-bold text-[#1b4332] mb-3">Email Your Application</h3>
                  <p className="text-[#52796f] text-sm leading-relaxed mb-4">
                    Alternatively, email us your resume and cover letter. We will keep your profile in our talent pool and reach out when a suitable role opens up.
                  </p>
                  <a
                    href="mailto:info@swastikajankalyanfoundation.com"
                    className="block bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] text-white text-sm font-semibold py-4 px-5 rounded-2xl text-center hover:from-[#2d6a4f] hover:to-[#40916c] transition-all duration-300 break-all"
                  >
                    info@swastikajankalyanfoundation.com
                  </a>
                </div>
              </div>
            </div>

            {/* ─ PROCESS STEPS ─ */}
            <div
              ref={setRef("steps")}
              className={`${fadeIn("steps", 200)} bg-white rounded-3xl p-10 shadow-sm border border-green-100`}
            >
              <h3 className="text-xl font-bold text-[#1b4332] mb-8 text-center">How Your Application Is Handled</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
                {[
                  { step: "01", title: "Submit", desc: "Send your resume & cover letter via post or email." },
                  { step: "02", title: "Talent Pool", desc: "We review and add your profile to our database." },
                  { step: "03", title: "Match", desc: "When a suitable role opens, we reach out to you." },
                  { step: "04", title: "Welcome", desc: "Join us and start making a real difference." },
                ].map((s, i) => (
                  <div key={s.step} className="flex-1 flex flex-col items-center text-center relative">
                    <div className="timeline-dot w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm mb-4 shadow-md">
                      {s.step}
                    </div>
                    <h4 className="text-[#1b4332] font-bold text-base mb-1">{s.title}</h4>
                    <p className="text-[#52796f] text-sm leading-relaxed">{s.desc}</p>
                    {i < 3 && (
                      <div className="hidden md:block absolute top-5 left-[calc(50%+28px)] right-[-50%] h-0.5 bg-gradient-to-r from-[#b7e4c7] to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ─ BOTTOM CTA BANNER ─ */}
            <div
              ref={setRef("bottomCta")}
              className={`${fadeIn("bottomCta", 250)} relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#081c15] via-[#1b4332] to-[#2d6a4f] text-white text-center p-12 md:p-16 shadow-xl`}
            >
              <div className="absolute inset-0 dot-pattern opacity-30"></div>
              <div className="absolute -top-10 -right-10 opacity-10">
                <BranchSVG className="w-72 h-72 text-green-200" />
              </div>
              <div className="relative z-10">
                <LeafSVG className="w-10 h-14 text-green-400 mx-auto mb-5" />
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  Ready to Plant Your Roots?
                </h2>
                <p className="text-green-100/80 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                  Whether you volunteer today or join us professionally in the future — your journey with us begins with a single step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/volunteerwus"
                    className="cta-btn inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-sm"
                  >
                    <span>Join as Volunteer</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                    </svg>
                  </Link>
                  <a
                    href="mailto:info@swastikajankalyanfoundation.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-green-400/40 text-green-200 font-bold text-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                    Send General Application
                  </a>
                </div>
              </div>
            </div>

            {/* breathing room */}
            <div className="h-8"></div>
          </div>
        </section>
      </div>
    </>
  );
}