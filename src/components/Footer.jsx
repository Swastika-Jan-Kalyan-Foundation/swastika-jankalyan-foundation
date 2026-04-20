import { useState } from "react";
import "../App.css"
import "../index.css"
import logo from "../assets/logo.png"
// ── SVG Icons ──────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const ThreadIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#E0E0E0" d="M337.36 243.58c-1.46-.7-2.95-1.38-4.46-2.02-2.62-48.36-29.04-76.05-73.41-76.33-25.6-.17-48.52 10.27-62.8 31.94l24.4 16.74c10.15-15.4 26.08-18.68 37.81-18.68h.4c14.61.09 25.64 4.34 32.77 12.62 5.19 6.04 8.67 14.37 10.39 24.89-12.96-2.2-26.96-2.88-41.94-2.02-42.18 2.43-69.3 27.03-67.48 61.21.92 17.35 9.56 32.26 24.32 42.01 12.48 8.24 28.56 12.27 45.26 11.35 22.07-1.2 39.37-9.62 51.45-25.01 9.17-11.69 14.97-26.84 17.53-45.92 10.51 6.34 18.3 14.69 22.61 24.73 7.31 17.06 7.74 45.1-15.14 67.96-20.04 20.03-44.14 28.69-80.55 28.96-40.4-.3-70.95-13.26-90.81-38.51-18.6-23.64-28.21-57.79-28.57-101.5.36-43.71 9.97-77.86 28.57-101.5 19.86-25.25 50.41-38.21 90.81-38.51 40.68.3 71.76 13.32 92.39 38.69 10.11 12.44 17.73 28.09 22.76 46.33l28.59-7.63c-6.09-22.45-15.67-41.8-28.72-57.85-26.44-32.53-65.1-49.19-114.92-49.54h-.2c-49.72.35-87.96 17.08-113.64 49.73-22.86 29.05-34.65 69.48-35.04 120.16v.24c.39 50.68 12.18 91.11 35.04 120.16 25.68 32.65 63.92 49.39 113.64 49.73h.2c44.2-.31 75.36-11.88 101.03-37.53 33.58-33.55 32.57-75.6 21.5-101.42-7.94-18.51-23.08-33.55-43.79-43.48zm-76.32 71.76c-18.48 1.04-37.69-7.26-38.64-25.03-.7-13.18 9.38-27.89 39.78-29.64 3.48-.2 6.9-.3 10.25-.3 11.04 0 21.37 1.07 30.76 3.13-3.5 43.74-24.04 50.84-42.15 51.84z"/>
</svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 mt-0.5 flex-shrink-0">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 flex-shrink-0">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="#5FAF6B" className="w-4 h-4 flex-shrink-0" opacity="0.7">
    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// ── Data ───────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Annual Report", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Get Involved", href: "#" },
  { label: "Track Your Impact", href: "#" },
  { label: "Donate", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socials = [
  //{ icon: <FacebookIcon />, href: "#", label: "Facebook", hoverBg: "#1877F2" },
  { icon: <ThreadIcon />, href: "https://www.threads.com/@swastikajankalyanfoundation", label: "Threads", hoverBg: "#0f172a" },
  { icon: <InstagramIcon />, href: "https://www.instagram.com/swastikajankalyanfoundation/", label: "Instagram", hoverBg: "#E1306C" },
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/swastikajankalyanfoundation/", label: "LinkedIn", hoverBg: "#0A66C2" },
  { icon: <YoutubeIcon />, href: "https://www.youtube.com/@swastikajankalyanfoundation", label: "YouTube", hoverBg: "#FF0000" },
];

// ── Decorative SVG helpers ─────────────────────────────────────────────────
const BlobTopLeft = () => (
  <svg className="absolute -top-14 -left-14 pointer-events-none select-none" width="260" height="260" viewBox="0 0 260 260" xmlns="http://www.w3.org/2000/svg">
    <path fill="#8bf89b" opacity="0.07"
      d="M55,-73C70,-62,80,-46,85,-28C90,-10,89,10,82,27C75,44,62,59,46,68C30,77,11,80,-9,77C-29,74,-50,65,-64,50C-78,35,-85,14,-82,-6C-79,-26,-66,-45,-50,-58C-34,-71,-15,-78,3,-77C21,-76,40,-84,55,-73Z"
      transform="translate(130 130)" />
  </svg>
);

const BlobBottomRight = () => (
  <svg className="absolute -bottom-10 -right-10 pointer-events-none select-none" width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
    <path fill="#5FAF6B" opacity="0.08"
      d="M47,-63C60,-53,68,-37,72,-21C76,-5,76,12,70,27C64,42,52,55,37,63C22,71,4,74,-14,70C-32,66,-50,55,-61,40C-72,25,-76,6,-73,-12C-70,-30,-60,-47,-46,-59C-32,-71,-14,-78,2,-77C18,-76,34,-73,47,-63Z"
      transform="translate(120 120)" />
  </svg>
);

const LeafEmblem = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="27" stroke="#5FAF6B" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
    <circle cx="28" cy="28" r="21" stroke="#8bf89b" strokeWidth="0.5" opacity="0.3" />
    <path d="M28 12C28 12 16 20 16 29C16 35.627 21.373 40 28 40C34.627 40 40 35.627 40 29C40 20 28 12 28 12Z" fill="#8bf89b" opacity="0.9" />
    <path d="M28 14C28 14 28 30 28 38" stroke="#5FAF6B" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const DividerGlow = () => (
  <div
    className="h-px w-full"
    style={{ background: "linear-gradient(90deg, transparent, #5FAF6B55, #8bf89b88, #5FAF6B55, transparent)" }}
  />
);

const SectionRule = ({ className = "" }) => (
  <div
    className={`h-px w-14 ${className}`}
    style={{ background: "linear-gradient(90deg, #5FAF6B, #8bf89b)" }}
  />
);

// ── Main Component ─────────────────────────────────────────────────────────
export default function FloatingFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .ngo-footer        { font-family: 'Inter', sans-serif; }
        .ngo-heading       { font-family: 'Sora', serif; }

        .ngo-glass {
          background: linear-gradient(
            135deg,
            rgba(10, 24, 14, 0.97) 0%,
            rgba(15, 34, 19, 0.97) 55%,
            rgba(8, 22, 12, 0.98) 100%
          );
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
        }

        /* Nav link slide-in underline */
        .ngo-nav-link {
          position: relative;
          transition: color 0.22s ease, padding-left 0.22s ease;
          color: rgba(255,255,255,0.52);
        }
        .ngo-nav-link::before {
          content: '';
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 2px;
          background: linear-gradient(90deg, #5FAF6B, #8bf89b);
          border-radius: 2px;
          transition: width 0.22s ease;
        }
        .ngo-nav-link:hover::before { width: 14px; }
        .ngo-nav-link:hover { padding-left: 20px; color: #8bf89b; }

        /* Newsletter input */
        .ngo-input {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ngo-input::placeholder { color: rgba(255,255,255,0.22); }
        .ngo-input:focus {
          outline: none;
          border-color: #8bf89b;
          box-shadow: 0 0 0 3px rgba(139,248,155,0.12);
        }

        /* Subscribe button */
        .ngo-sub-btn {
          background: linear-gradient(135deg, #5FAF6B 0%, #8bf89b 100%);
          transition: opacity 0.2s, transform 0.15s;
        }
        .ngo-sub-btn:hover { opacity: 0.85; transform: scale(1.03); }
        .ngo-sub-btn:active { transform: scale(0.97); }

        /* Social icon buttons */
        .ngo-social-btn {
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .ngo-social-btn:hover {
          transform: translateY(-4px) scale(1.12);
          border-color: transparent;
        }

        /* Bottom links */
        .ngo-bot-link {
          transition: color 0.18s;
          color: rgba(255,255,255,0.28);
        }
        .ngo-bot-link:hover { color: rgba(255,255,255,0.65); }
      `}</style>

      <footer className="ngo-footer w-full px-4 pb-7 pt-2">
        <div
          className="ngo-glass relative mx-auto max-w-7xl rounded-3xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(95,175,107,0.08)" }}
        >
          {/* Background blobs */}
          <BlobTopLeft />
          <BlobBottomRight />

          {/* Subtle radial glow in centre */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 40% at 50% 110%, rgba(95,175,107,0.08) 0%, transparent 70%)" }}
          />

          {/* Top shimmer line */}
          <DividerGlow />

          {/* ── MAIN GRID ── */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 px-8 md:px-12 py-10 md:py-12">

            {/* ── LEFT: Brand + Nav ── */}
            <div className="flex flex-col gap-5">
              {/* Brand */}
              <div className="flex items-center gap-2.5">
                <img className="h-20 w-auto" src={logo} />
                <span className="ngo-heading text-xl font-bold text-white tracking-wide">
                  Swastika<span style={{ color: "#8bf89b" }}> Jan Kalyan</span> Foundation

                </span>
              </div>

              <p className="text-white/38 text-xs leading-relaxed max-w-[220px]">
                Empowering communities and nurturing nature — one step at a time, across Jharkhand &amp; beyond.
              </p>

              <SectionRule className="mb-0.5" />

              {/* Nav in 2-col grid */}
              <nav className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="ngo-nav-link text-sm font-medium py-0.5">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── CENTRE: Address ── */}
            <div className="flex flex-col items-center text-center gap-5">
              {/* Emblem */}

              <LeafEmblem />

              <div>
                <h3 className="ngo-heading text-white font-semibold text-base leading-tight">
                  Registered Address
                </h3>
                <SectionRule className="mx-auto mt-2 mb-4" />
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3.5 text-sm w-full max-w-[240px]">
                <div className="flex items-start gap-2.5 justify-center" style={{ color: "rgba(255,255,255,0.58)" }}>
                  <span style={{ color: "#8bf89b" }}><MapPinIcon /></span>
                  <span className="text-left leading-relaxed">
                    1st Floor, Opposite Durga Mandir, Lower Hatia, Near Sunday Market, Hatia, Ranchi, Jharkhand, India - 834003
                  </span>
                </div>

                <div className="flex items-center gap-2.5 justify-center" style={{ color: "rgba(255,255,255,0.58)" }}>
                  <a href="tel:+919229875702" ><span style={{ color: "#8bf89b" }}><PhoneIcon /></span></a>
                  <a href="tel:+919229875702" ><span>+91 9229875702</span></a>
                </div>

                <div className="flex items-center gap-2.5 justify-center" style={{ color: "rgba(255,255,255,0.58)" }}>
                  <a href="mailto:swastikajankalyanfoundation@gmail.com" ><span style={{ color: "#8bf89b" }}><MailIcon /></span></a>
                  <a href="mailto:swastikajankalyanfoundation@gmail.com" ><span>swastikajankalyanfoundation@gmail.com</span></a>
                </div>
              </div>

              {/* Reg badge */}
              

              {/* Decorative dots row */}
              <div className="flex items-center gap-1.5 opacity-25">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="rounded-full" style={{ width: i === 2 ? 8 : 4, height: i === 2 ? 8 : 4, background: "#8bf89b" }} />
                ))}
              </div>
            </div>

            {/* ── RIGHT: Socials + Newsletter ── */}
            <div className="flex flex-col gap-7">

              {/* Socials */}
              <div>
                <h3 className="ngo-heading text-white font-semibold text-base mb-2 font-mono ">Follow Us</h3>
                <SectionRule className="mb-4" />
                <div className="flex flex-wrap gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      title={s.label}
                      className="ngo-social-btn flex items-center justify-center w-9 h-9 rounded-xl text-white/65"
                      style={hoveredSocial === s.label ? { background: s.hoverBg, color: "#fff", borderColor: "transparent" } : {}}
                      onMouseEnter={() => setHoveredSocial(s.label)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Small "we post weekly" hint */}
                <p className="text-white/28 text-xs mt-3">We share impact stories & updates weekly.</p>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="ngo-heading text-white font-semibold text-base mb-2">Stay Updated</h3>
                <SectionRule className="mb-3" />
                <p className="text-white/38 text-xs leading-relaxed mb-4">
                  Subscribe for event alerts, field reports, and our monthly impact digest.
                </p>

                {!subscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="ngo-input w-full text-sm rounded-xl px-4 py-2.5"
                    />
                    <button
                      type="submit"
                      className="ngo-sub-btn flex items-center justify-center gap-2 text-sm font-semibold text-white rounded-xl px-4 py-2.5"
                    >
                      <SendIcon />
                      Subscribe Now
                    </button>
                  </form>
                ) : (
                  <div
                    className="flex items-center gap-2.5 text-sm font-medium rounded-xl px-4 py-3"
                    style={{
                      color: "#8bf89b",
                      background: "rgba(139,248,155,0.08)",
                      border: "1px solid rgba(95,175,107,0.35)",
                    }}
                  >
                    <CheckIcon />
                    Thank you — welcome to the family! 🌿
                  </div>
                )}
              </div>

              {/* 80G / FCRA badge */}
              <div
                className="flex items-center gap-2 text-xs rounded-xl px-3.5 py-2.5"
                style={{
                  color: "rgba(255,255,255,0.32)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <ShieldIcon />
                Registered under Section 8 of Companies Act, 2013
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <DividerGlow />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-2 px-8 md:px-12 py-4">
            <p className="text-white/28 text-xs">
              © 2026 Swastika Jan Kalyan Foundation. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="ngo-bot-link">Privacy Policy</a>
              <span className="text-white/15">·</span>
              <a href="#" className="ngo-bot-link">Terms of Use</a>
              <span className="text-white/15">·</span>
              <a href="#" className="ngo-bot-link">Grievance</a>
            </div>
          </div>

        </div>

      </footer>
    </>
  );
}