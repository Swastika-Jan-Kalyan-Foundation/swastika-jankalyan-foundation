import { useEffect, useRef, useState } from "react";

const bannerImg = "https://res.cloudinary.com/dztzunudp/image/upload/f_auto,q_auto,dpr_auto,w_1200,c_limit/v1793096388/diwaliBanner_qzfyws.png";

const BANNER_LINK = ""; // optional: e.g. "/volunteerwus" makes the banner clickable. Leave "" for none.
const BANNER_ALT = "Event banner";
const COLORS = ["#5FAF6B", "#8bf89b", "#3d8f4a", "#FF9933", "#ffffff", "#FFD54F", "#FF6161"];
 
export default function EventBanner() {
  const [open, setOpen] = useState(true);
  const canvasRef = useRef(null);
 
  // lock page scroll while banner is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);
 
  // confetti
  useEffect(() => {
    if (!open) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w, h, raf, pieces = [];
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
 
    const spawn = (x, y, n, spread = 1) => {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const v = (4 + Math.random() * 9) * spread;
        pieces.push({
          x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 5,
          size: 6 + Math.random() * 7, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4,
          color: COLORS[(Math.random() * COLORS.length) | 0], round: Math.random() < 0.3, life: 0,
        });
      }
    };
 
    // initial bursts + a few follow-ups
    spawn(w / 2, h / 2, 160);
    spawn(0, h * 0.7, 70, 1.2);
    spawn(w, h * 0.7, 70, 1.2);
    const timers = [400, 900, 1500].map((t) =>
      setTimeout(() => spawn(Math.random() * w, h * 0.3, 80), t)
    );
 
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      pieces = pieces.filter((p) => p.y < h + 20 && p.life < 400);
      for (const p of pieces) {
        p.vy += 0.22; p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life++;
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = Math.max(0, 1 - p.life / 400);
        ctx.fillStyle = p.color;
        if (p.round) { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, 7); ctx.fill(); }
        else ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
 
    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
 
  if (!open) return null;
 
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={BANNER_ALT}
      style={{
        position: "fixed", inset: 0, zIndex: 99999,
        background: "rgba(10, 25, 14, 0.72)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
        animation: "evFade .35s ease both",
      }}
    >
      <style>{`
        @keyframes evFade { from {opacity:0} to {opacity:1} }
        @keyframes evPop { 0%{opacity:0; transform:scale(.8) translateY(30px)} 100%{opacity:1; transform:scale(1) translateY(0)} }
      `}</style>
 
      <div style={{ position: "relative", maxWidth: "min(92vw, 900px)", animation: "evPop .55s cubic-bezier(.2,1.2,.4,1) both" }}>
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{
            position: "absolute", top: -14, right: -14, width: 40, height: 40, borderRadius: "50%",
            border: "none", cursor: "pointer", background: "#fff", color: "#333", zIndex: 2,
            boxShadow: "0 2px 10px rgba(0,0,0,.35)", display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
 
        {(() => {
          const img = (
            <img src={bannerImg} alt={BANNER_ALT}
              style={{ display: "block", maxWidth: "100%", maxHeight: "85vh", borderRadius: 20, boxShadow: "0 30px 80px rgba(0,0,0,.5)" }} />
          );
          return BANNER_LINK ? <a href={BANNER_LINK}>{img}</a> : img;
        })()}
      </div>
 
      {/* confetti sits above everything but never blocks clicks */}
      <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100000 }} />
    </div>
  );
}
