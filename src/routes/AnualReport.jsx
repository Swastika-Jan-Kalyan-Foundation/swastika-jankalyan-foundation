import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   SVG DECORATIONS
───────────────────────────────────────────── */
const LeafSVG = ({ style }) => (
  <svg viewBox="0 0 60 60" fill="none" style={style}>
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56C42 56 52 47 52 36C52 18 30 5 30 5Z" fill="#2d6a4f" opacity="0.13"/>
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56" stroke="#52b788" strokeWidth="1.3" fill="none"/>
    <line x1="30" y1="54" x2="30" y2="20" stroke="#52b788" strokeWidth="1"/>
    <line x1="30" y1="38" x2="20" y2="28" stroke="#52b788" strokeWidth="0.7"/>
    <line x1="30" y1="45" x2="40" y2="35" stroke="#52b788" strokeWidth="0.7"/>
  </svg>
);

const RingSVG = ({ style }) => (
  <svg viewBox="0 0 100 100" fill="none" style={style}>
    <circle cx="50" cy="50" r="46" stroke="#52b788" strokeWidth="1" strokeDasharray="4 4" opacity="0.28"/>
    <circle cx="50" cy="50" r="30" stroke="#2d6a4f" strokeWidth="0.6" opacity="0.16"/>
    <circle cx="50" cy="50" r="6" fill="#52b788" opacity="0.22"/>
  </svg>
);

const ArcSVG = ({ style }) => (
  <svg viewBox="0 0 140 140" fill="none" style={style}>
    <path d="M0 140 Q70 0 140 0" stroke="#52b788" strokeWidth="1.1" fill="none" opacity="0.18"/>
    <path d="M0 105 Q52 20 105 0" stroke="#95d5b2" strokeWidth="0.6" fill="none" opacity="0.13"/>
  </svg>
);

const DotsSVG = ({ style }) => (
  <svg viewBox="0 0 80 80" fill="none" style={style}>
    {[0,1,2,3].map(r => [0,1,2,3].map(c => (
      <circle key={`${r}${c}`} cx={10+c*20} cy={10+r*20} r="2" fill="#52b788" opacity={0.1+(r+c)*0.035}/>
    )))}
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 1440 80" fill="none" style={{ width:"100%", display:"block" }}>
    <path d="M0,50 C360,5 720,78 1080,38 C1260,16 1380,52 1440,38 L1440,80 L0,80Z" fill="#f0faf4"/>
  </svg>
);

const DiamondSVG = ({ style }) => (
  <svg viewBox="0 0 24 24" fill="none" style={style}>
    <path d="M12 2L22 12L12 22L2 12Z" stroke="#52b788" strokeWidth="1" opacity="0.35" fill="#52b788" fillOpacity="0.07"/>
  </svg>
);

/* ─────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────── */
function useCountUp(target, duration = 1400, inView) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;
    const suffix = String(target).replace(/[0-9.,]/g, "");
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const cur = Math.floor(ease * num);
      setVal(cur >= 1000 ? cur.toLocaleString() + suffix : cur + suffix);
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return val;
}

/* ─────────────────────────────────────────────
   INTERSECTION OBSERVER HOOK
───────────────────────────────────────────── */
function useInView(threshold = 0.2) {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─────────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────── */
function StatCard({ icon, value, label, sub, color = "#2d6a4f", delay = 0 }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, 1400, inView);
  return (
    <div ref={ref} style={{
      background:"white", borderRadius:20, border:"1.5px solid #c8e6c9",
      padding:"1.5rem 1.2rem", textAlign:"center", position:"relative", overflow:"hidden",
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
      transition:`opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
    }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 12px 32px rgba(45,106,79,0.13)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
      <ArcSVG style={{ position:"absolute", bottom:-12, right:-12, width:70, opacity:0.4 }} />
      <div style={{ fontSize:30, marginBottom:10 }}>{icon}</div>
      <div style={{ fontSize:"clamp(1.6rem,3vw,2.2rem)", fontWeight:800, color, lineHeight:1 }}>{count}</div>
      <div style={{ color:"#1b4332", fontSize:13, fontWeight:700, margin:"5px 0 3px" }}>{label}</div>
      <div style={{ color:"#74b69a", fontSize:11 }}>{sub}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PROGRAMME CARD
───────────────────────────────────────────── */
function ProgramCard({ icon, title, desc, stat, statLabel, color, delay }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      background:"white", borderRadius:20, border:"1.5px solid #c8e6c9",
      padding:"1.6rem", position:"relative", overflow:"hidden",
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)",
      transition:`opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow="0 10px 30px rgba(45,106,79,0.12)"; e.currentTarget.style.transform="translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow="none"; e.currentTarget.style.transform="translateY(0)"; }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${color},${color}88)`, borderRadius:"20px 20px 0 0" }} />
      <RingSVG style={{ position:"absolute", bottom:-22, right:-22, width:80, opacity:0.18 }} />
      <div style={{ width:46, height:46, borderRadius:14, background:`${color}18`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, marginBottom:14 }}>{icon}</div>
      <h4 style={{ color:"#1b4332", fontSize:15, fontWeight:800, margin:"0 0 0.5rem" }}>{title}</h4>
      <p style={{ color:"#52796f", fontSize:13, lineHeight:1.7, margin:"0 0 1rem" }}>{desc}</p>
      <div style={{ display:"flex", alignItems:"baseline", gap:6 }}>
        <span style={{ color, fontSize:24, fontWeight:800 }}>{stat}</span>
        <span style={{ color:"#74b69a", fontSize:12 }}>{statLabel}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   BAR CHART (pure SVG/CSS)
───────────────────────────────────────────── */
function BarChart({ data, inView }) {
  const max = Math.max(...data.map(d => d.value));
  return (
    <div style={{ display:"flex", alignItems:"flex-end", gap:12, height:160, padding:"0 8px" }}>
      {data.map((d, i) => (
        <div key={d.label} style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
          <span style={{ color:"#1b4332", fontSize:11, fontWeight:700 }}>₹{d.value}L</span>
          <div style={{ width:"100%", background:"#e8f5e9", borderRadius:"6px 6px 0 0", overflow:"hidden", height:120, display:"flex", alignItems:"flex-end" }}>
            <div style={{
              width:"100%",
              height: inView ? `${(d.value/max)*100}%` : "0%",
              background: d.highlight
                ? "linear-gradient(180deg,#52b788,#2d6a4f)"
                : "linear-gradient(180deg,#95d5b2,#52b788)",
              borderRadius:"4px 4px 0 0",
              transition:`height 1s cubic-bezier(.22,1,.36,1) ${i*0.12}s`,
            }} />
          </div>
          <span style={{ color:"#74b69a", fontSize:10, fontWeight:600, textAlign:"center" }}>{d.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   DONUT CHART (SVG)
───────────────────────────────────────────── */
function DonutChart({ segments, inView }) {
  const r = 70, cx = 90, cy = 90, stroke = 26;
  const circ = 2 * Math.PI * r;
  let acc = 0;
  const total = segments.reduce((s, d) => s + d.value, 0);
  return (
    <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", gap:24 }}>
      <svg width={180} height={180} viewBox="0 0 180 180">
        {/* bg ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e8f5e9" strokeWidth={stroke}/>
        {segments.map((seg, i) => {
          const pct = seg.value / total;
          const dash = pct * circ;
          const offset = -acc * circ / total * circ + (circ * acc / total); // fix below
          const offsetVal = circ * (1 - acc / total);
          acc += seg.value;
          return (
            <circle key={seg.label} cx={cx} cy={cy} r={r}
              fill="none" stroke={seg.color} strokeWidth={stroke}
              strokeDasharray={`${inView ? dash : 0} ${circ}`}
              strokeDashoffset={offsetVal}
              strokeLinecap="butt"
              style={{ transition:`stroke-dasharray 1s cubic-bezier(.22,1,.36,1) ${i*0.18}s`, transform:"rotate(-90deg)", transformOrigin:"50% 50%" }}
            />
          );
        })}
        <text x={cx} y={cy-6} textAnchor="middle" style={{ fontFamily:"Sora,sans-serif", fontWeight:800, fontSize:15, fill:"#1b4332" }}>Total</text>
        <text x={cx} y={cy+13} textAnchor="middle" style={{ fontFamily:"Sora,sans-serif", fontWeight:700, fontSize:12, fill:"#40916c" }}>Spending</text>
      </svg>
      <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
        {segments.map(seg => (
          <div key={seg.label} style={{ display:"flex", alignItems:"center", gap:10 }}>
            <div style={{ width:12, height:12, borderRadius:3, background:seg.color, flexShrink:0 }} />
            <div>
              <span style={{ color:"#1b4332", fontSize:13, fontWeight:600 }}>{seg.label}</span>
              <span style={{ color:"#74b69a", fontSize:12, marginLeft:6 }}>{seg.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TIMELINE ITEM
───────────────────────────────────────────── */
function TimelineItem({ month, title, desc, icon, side, delay, inView }) {
  const isLeft = side === "left";
  return (
    <div style={{
      display:"flex", alignItems:"center", gap:0,
      flexDirection: isLeft ? "row" : "row-reverse",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition:`opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
    }}>
      {/* Content */}
      <div style={{ flex:1, padding: isLeft ? "0 24px 0 0" : "0 0 0 24px", textAlign: isLeft ? "right" : "left" }}>
        <div style={{ color:"#52b788", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:3 }}>{month}</div>
        <h4 style={{ color:"#1b4332", fontSize:14, fontWeight:800, margin:"0 0 4px" }}>{title}</h4>
        <p style={{ color:"#52796f", fontSize:12, lineHeight:1.65, margin:0 }}>{desc}</p>
      </div>
      {/* Node */}
      <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", border:"2px solid #52b788", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, flexShrink:0, zIndex:1 }}>{icon}</div>
      {/* Spacer */}
      <div style={{ flex:1 }} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIAL CARD
───────────────────────────────────────────── */
function TestiCard({ quote, name, role, avatar, delay, inView }) {
  return (
    <div style={{
      background:"white", borderRadius:20, border:"1.5px solid #c8e6c9",
      padding:"1.6rem", position:"relative", overflow:"hidden",
      opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
      transition:`opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      boxShadow:"0 4px 20px rgba(45,106,79,0.06)",
    }}>
      <div style={{ position:"absolute", top:12, right:16, fontSize:52, color:"#d8f3dc", fontFamily:"Georgia, serif", lineHeight:1, userSelect:"none" }}>"</div>
      <RingSVG style={{ position:"absolute", bottom:-20, left:-20, width:70, opacity:0.15 }} />
      <p style={{ color:"#2d4a3e", fontSize:14, lineHeight:1.8, margin:"0 0 1.2rem", fontStyle:"italic" }}>"{quote}"</p>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:38, height:38, borderRadius:"50%", background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{avatar}</div>
        <div>
          <div style={{ color:"#1b4332", fontSize:13, fontWeight:700 }}>{name}</div>
          <div style={{ color:"#74b69a", fontSize:11 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, sub }) {
  const [ref, inView] = useInView(0.3);
  return (
    <div ref={ref} style={{ textAlign:"center", marginBottom:"2.5rem",
      opacity:inView?1:0, transform:inView?"translateY(0)":"translateY(20px)",
      transition:"opacity 0.55s ease, transform 0.55s ease" }}>
      <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#d8f3dc", borderRadius:30, padding:"5px 16px", marginBottom:14 }}>
        <div style={{ width:6, height:6, borderRadius:"50%", background:"#2d6a4f" }} />
        <span style={{ color:"#2d6a4f", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>{eyebrow}</span>
      </div>
      <h2 style={{ color:"#1b4332", fontSize:"clamp(1.5rem,3.5vw,2.2rem)", fontWeight:800, margin:"0 0 0.75rem", lineHeight:1.2 }}>{title}</h2>
      {sub && <p style={{ color:"#52796f", fontSize:15, maxWidth:560, margin:"0 auto", lineHeight:1.75 }}>{sub}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   YEAR SELECTOR
───────────────────────────────────────────── */
const years = [2025, 2024, 2023, 2022];

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const reportData = {
  2025: {
    tagline: "Rooted in Purpose. Growing with Hope.",
    raised: "₹8.6M+",
    trees: "5,200+",
    lives: "12,400+",
    volunteers: "340+",
    schools: "62",
    villages: "28",
    programs: [
      { icon:"🌳", title:"Reforestation Drive",      desc:"Planted 5,200+ native trees across 14 acres of degraded land in Jharkhand's tribal belt.", stat:"5,200+", statLabel:"trees planted", color:"#2d6a4f" },
      { icon:"📚", title:"Green Schools Program",     desc:"Delivered environmental literacy to 62 schools, training 4,200 children in conservation.", stat:"62",     statLabel:"schools reached", color:"#40916c" },
      { icon:"🏠", title:"Sustainable Homes",         desc:"Upgraded 112 homes with solar lighting and clean-cook stoves, reducing indoor pollution.", stat:"112",    statLabel:"homes upgraded", color:"#52b788" },
      { icon:"💧", title:"Water Conservation",        desc:"Built 18 rainwater harvesting units and restored 3 local water bodies across Latehar & Gumla.", stat:"18",  statLabel:"units built", color:"#1b4332" },
      { icon:"👨‍👩‍👧", title:"Livelihood Support",    desc:"Provided sustainable livelihood kits and training to 280 families in remote tribal villages.", stat:"280",   statLabel:"families supported", color:"#74b69a" },
      { icon:"🌾", title:"Organic Farming Initiative",desc:"Trained 90 farmers in organic methods; reduced chemical use by 70% in pilot villages.", stat:"90",    statLabel:"farmers trained", color:"#95d5b2" },
    ],
    fundsBar: [
      { label:"Q1", value:18 },
      { label:"Q2", value:22 },
      { label:"Q3", value:28, highlight:true },
      { label:"Q4", value:34, highlight:true },
    ],
    spending: [
      { label:"Field Programs", value:68, color:"#2d6a4f" },
      { label:"Education",      value:14, color:"#52b788" },
      { label:"Operations",     value:10, color:"#95d5b2" },
      { label:"Research",       value:8,  color:"#b7e4c7" },
    ],
    timeline: [
      { month:"Jan 2025", title:"Annual Plantation Drive Kickoff", desc:"Launched 3-month plantation campaign across Hazaribagh district.", icon:"🌱" },
      { month:"Mar 2025", title:"Green Schools Program Expanded",  desc:"Onboarded 22 new schools; trained 1,200 children in a single month.", icon:"📚" },
      { month:"May 2025", title:"Water Body Restoration Complete", desc:"Three ponds restored in Gumla, benefiting 600+ villagers.", icon:"💧" },
      { month:"Jul 2025", title:"Solar Home Upgrades Begin",       desc:"112 homes in Latehar get solar kits; 80% reduction in kerosene use.", icon:"☀️" },
      { month:"Sep 2025", title:"Volunteer Summit 2025",           desc:"340 volunteers gathered for annual strategy & training summit.", icon:"🤝" },
      { month:"Nov 2025", title:"Annual Impact Report Released",   desc:"Report shared with 8,000+ donors and 25 partner organisations.", icon:"📊" },
    ],
    testimonials: [
      { quote:"This NGO didn't just plant trees — they planted belief in our community that we can heal the land ourselves.", name:"Ramesh Oraon", role:"Farmer, Lohardaga", avatar:"👨‍🌾" },
      { quote:"My students now teach their parents about composting and water harvesting. The ripple effect is incredible.", name:"Mrs. Sunita Ekka", role:"Teacher, Khunti", avatar:"👩‍🏫" },
      { quote:"We've partnered with many NGOs, but the transparency and ground-level execution here is truly exceptional.", name:"Aditi Sharma", role:"CSR Head, TechCorp India", avatar:"👩‍💼" },
    ],
    partners: ["Tata Trusts","CSR India","JharCraft","NABARD","Green Earth Fund","UNICEF India"],
    awards: [
      { icon:"🏆", title:"Best Environmental NGO 2025",     org:"India NGO Awards" },
      { icon:"🌟", title:"Transparent Organisation Award",  org:"GuideStar India" },
      { icon:"🌍", title:"SDG Champion Recognition",        org:"UN India Office" },
    ],
  },
};
// Clone same data for other years with tweaks
[2024,2023,2022].forEach((yr, i) => {
  const base = JSON.parse(JSON.stringify(reportData[2025]));
  const scale = 0.75 - i * 0.15;
  base.raised = `₹${(8.6 * scale).toFixed(1)}M+`;
  base.trees = `${Math.round(5200 * scale).toLocaleString()}+`;
  base.lives = `${Math.round(12400 * scale).toLocaleString()}+`;
  base.volunteers = `${Math.round(340 * scale)}+`;
  base.schools = String(Math.round(62 * scale));
  base.villages = String(Math.round(28 * scale));
  base.tagline = ["From Seed to Forest: A Year of Roots.", "Every Drop Counts. Every Tree Matters.", "Building Tomorrow, One Sapling at a Time."][i];
  reportData[yr] = base;
});

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export const AnnualReport = () =>  {
  const [year, setYear] = useState(2025);
  const data = reportData[year];

  const [chartsRef, chartsInView] = useInView(0.2);
  const [timelineRef, timelineInView] = useInView(0.1);
  const [testiRef, testiInView] = useInView(0.2);

  return (
    <div style={{ fontFamily:"Sora, sans-serif", background:"#f0faf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing:border-box; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes pulse   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes float   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .fade-hero { animation:fadeUp 0.7s ease both; }
        .year-btn:hover { background:#d8f3dc !important; }
        .dl-btn:hover   { transform:translateY(-2px); box-shadow:0 8px 26px rgba(45,106,79,0.3) !important; }
      `}</style>

      {/* ══════════════════ HERO ══════════════════ */}
      <div style={{ background:"linear-gradient(148deg,#1b4332 0%,#2d6a4f 52%,#40916c 100%)", position:"relative", overflow:"hidden" }}>
        {/* Decorations */}
        <LeafSVG style={{ position:"absolute", top:26, left:26, width:50, opacity:0.8, transform:"rotate(-16deg)" }} />
        <LeafSVG style={{ position:"absolute", top:48, right:68, width:32, opacity:0.55, transform:"rotate(34deg) scaleX(-1)" }} />
        <RingSVG style={{ position:"absolute", bottom:48, left:48, width:96, opacity:0.38 }} />
        <DotsSVG style={{ position:"absolute", top:16, right:28, width:88, opacity:0.55 }} />
        <LeafSVG style={{ position:"absolute", bottom:68, right:22, width:34, opacity:0.4, transform:"rotate(68deg)" }} />
        <DiamondSVG style={{ position:"absolute", top:100, left:160, width:32, opacity:0.45, animation:"float 5s ease-in-out infinite" }} />
        <DiamondSVG style={{ position:"absolute", bottom:100, right:180, width:22, opacity:0.35, animation:"float 4s 1s ease-in-out infinite" }} />

        <div style={{ textAlign:"center", padding:"3.5rem 1.5rem 2.5rem", position:"relative", zIndex:2 }}>
          {/* Badge */}
          <div className="fade-hero" style={{ animationDelay:"0.05s", display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:30, padding:"7px 20px", marginBottom:"1.4rem" }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#95d5b2", animation:"pulse 2s infinite" }} />
            <span style={{ color:"#d8f3dc", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>Annual Impact Report</span>
          </div>

          <h1 className="fade-hero" style={{ animationDelay:"0.12s", color:"white", fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:800, margin:"0 0 0.6rem", lineHeight:1.1 }}>
            {year} in <span style={{ color:"#95d5b2" }}>Review</span>
          </h1>
          <p className="fade-hero" style={{ animationDelay:"0.2s", color:"#b7e4c7", fontSize:"clamp(14px,2vw,17px)", maxWidth:520, margin:"0 auto 1.5rem", lineHeight:1.85, fontStyle:"italic" }}>
            "{data.tagline}"
          </p>

          {/* Year Selector */}
          <div className="fade-hero" style={{ animationDelay:"0.28s", display:"inline-flex", background:"rgba(255,255,255,0.1)", borderRadius:40, padding:"5px", gap:4, marginBottom:"2rem", border:"1px solid rgba(255,255,255,0.15)" }}>
            {years.map(y => (
              <button key={y} className="year-btn" onClick={() => setYear(y)}
                style={{
                  padding:"8px 20px", borderRadius:30, border:"none", cursor:"pointer",
                  fontFamily:"Sora, sans-serif", fontSize:13, fontWeight:700,
                  background: y===year ? "white" : "transparent",
                  color: y===year ? "#1b4332" : "#95d5b2",
                  transition:"all 0.2s",
                }}>{y}</button>
            ))}
          </div>

          {/* Hero stats strip */}
          <div className="fade-hero" style={{ animationDelay:"0.36s", display:"flex", justifyContent:"center", gap:"clamp(20px,4vw,52px)", flexWrap:"wrap", paddingBottom:"2.5rem" }}>
            {[
              [data.raised,"Total Raised"],
              [data.trees,"Trees Planted"],
              [data.lives,"Lives Impacted"],
              [data.volunteers,"Volunteers"],
            ].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ color:"#95d5b2", fontSize:"clamp(1.5rem,3vw,2.1rem)", fontWeight:800 }}>{v}</div>
                <div style={{ color:"#b7e4c7", fontSize:11, fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginTop:2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <WaveSVG />
      </div>

      {/* ══════════════════ BODY ══════════════════ */}
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 1.25rem 6rem" }}>

        {/* ── At a Glance ── */}
        <section style={{ padding:"3rem 0 1rem" }}>
          <SectionHeader eyebrow="At a Glance" title={`${year} by the Numbers`} sub="A snapshot of what your collective generosity made possible across Jharkhand this year." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))", gap:16 }}>
            {[
              { icon:"💰", value:data.raised,      label:"Total Raised",       sub:"From 3,200+ donors",         color:"#1b4332" },
              { icon:"🌳", value:data.trees,       label:"Trees Planted",      sub:"Native species only",        color:"#2d6a4f" },
              { icon:"👥", value:data.lives,       label:"Lives Impacted",     sub:"Direct beneficiaries",       color:"#40916c" },
              { icon:"🏫", value:data.schools,     label:"Schools Reached",    sub:"Green curriculum delivered", color:"#52b788" },
              { icon:"🏘️", value:data.villages,   label:"Villages Covered",   sub:"In 4 districts",             color:"#74b69a" },
              { icon:"🤝", value:data.volunteers,  label:"Active Volunteers",  sub:"200+ field, rest remote",    color:"#95d5b2" },
            ].map((s,i) => <StatCard key={s.label} {...s} delay={i*0.07} />)}
          </div>
        </section>

        {/* ── Programs ── */}
        <section style={{ padding:"3.5rem 0 1rem" }}>
          <SectionHeader eyebrow="Our Work" title="Programs & Initiatives" sub="Six flagship programs delivered on the ground, in schools, and across communities." />
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:18 }}>
            {data.programs.map((p,i) => <ProgramCard key={p.title} {...p} delay={i*0.07} />)}
          </div>
        </section>

        {/* ── Financials ── */}
        <section style={{ padding:"3.5rem 0 1rem" }}>
          <SectionHeader eyebrow="Transparency" title="Financial Highlights" sub="We believe in radical transparency. Every rupee is accounted for." />
          <div ref={chartsRef} style={{ display:"flex", flexWrap:"wrap", gap:24 }}>
            {/* Bar */}
            <div style={{ flex:"1 1 320px", background:"white", borderRadius:22, border:"1.5px solid #c8e6c9", padding:"1.75rem", position:"relative", overflow:"hidden" }}>
              <ArcSVG style={{ position:"absolute", top:-8, right:-8, width:80, opacity:0.35 }} />
              <div style={{ marginBottom:18 }}>
                <div style={{ color:"#74b69a", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:4 }}>Funds Raised (₹ Lakhs)</div>
                <h3 style={{ color:"#1b4332", fontSize:18, fontWeight:800, margin:0 }}>Quarterly Growth</h3>
              </div>
              <BarChart data={data.fundsBar} inView={chartsInView} />
              <div style={{ marginTop:12, padding:"10px 14px", background:"#f0faf4", borderRadius:10, display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ fontSize:16 }}>📈</span>
                <span style={{ color:"#2d6a4f", fontSize:12 }}>Q4 saw a <strong>53% YoY growth</strong> in fundraising.</span>
              </div>
            </div>

            {/* Donut */}
            <div style={{ flex:"1 1 280px", background:"white", borderRadius:22, border:"1.5px solid #c8e6c9", padding:"1.75rem", position:"relative", overflow:"hidden" }}>
              <RingSVG style={{ position:"absolute", bottom:-20, right:-20, width:80, opacity:0.15 }} />
              <div style={{ marginBottom:18 }}>
                <div style={{ color:"#74b69a", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:4 }}>Fund Utilisation</div>
                <h3 style={{ color:"#1b4332", fontSize:18, fontWeight:800, margin:0 }}>Where Money Goes</h3>
              </div>
              <DonutChart segments={data.spending} inView={chartsInView} />
              <div style={{ marginTop:12, padding:"10px 14px", background:"#f0faf4", borderRadius:10, display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ fontSize:16 }}>✅</span>
                <span style={{ color:"#2d6a4f", fontSize:12 }}><strong>68%</strong> of funds go directly to field programs.</span>
              </div>
            </div>

            {/* Key metric tiles */}
            <div style={{ flex:"1 1 200px", display:"flex", flexDirection:"column", gap:14 }}>
              {[
                { icon:"0%", label:"Admin overhead on donations < ₹10K", bg:"linear-gradient(135deg,#1b4332,#2d6a4f)", text:"white" },
                { icon:"98%", label:"Donor satisfaction rate (annual survey)", bg:"white", text:"#1b4332", border:"1.5px solid #c8e6c9" },
                { icon:"4.9★", label:"GuideStar India transparency rating", bg:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", text:"#1b4332" },
              ].map(t => (
                <div key={t.label} style={{ background:t.bg, borderRadius:16, border:t.border||"none", padding:"1.1rem 1.3rem", display:"flex", alignItems:"center", gap:12, flex:1 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:t.text, flexShrink:0, minWidth:52 }}>{t.icon}</div>
                  <div style={{ color:t.text, fontSize:12, lineHeight:1.5, opacity:0.85 }}>{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section style={{ padding:"3.5rem 0 1rem" }}>
          <SectionHeader eyebrow="Milestones" title={`${year} Journey`} sub="Key moments that defined our year on the ground." />
          <div ref={timelineRef} style={{ position:"relative", maxWidth:700, margin:"0 auto" }}>
            {/* Vertical line */}
            <div style={{ position:"absolute", left:"50%", top:22, bottom:22, width:2, background:"linear-gradient(180deg,#52b788,#b7e4c7)", transform:"translateX(-50%)", borderRadius:2 }} />
            <div style={{ display:"flex", flexDirection:"column", gap:28 }}>
              {data.timeline.map((t,i) => (
                <TimelineItem key={t.title} {...t} side={i%2===0?"left":"right"} delay={i*0.1} inView={timelineInView} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section style={{ padding:"3.5rem 0 1rem" }}>
          <SectionHeader eyebrow="Voices" title="Words That Keep Us Going" sub="From the communities, teachers, and partners who witnessed the change firsthand." />
          <div ref={testiRef} style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:18 }}>
            {data.testimonials.map((t,i) => <TestiCard key={t.name} {...t} delay={i*0.12} inView={testiInView} />)}
          </div>
        </section>

        {/* ── Partners ── */}
        <section style={{ padding:"3.5rem 0 1rem" }}>
          <SectionHeader eyebrow="Ecosystem" title="Partners & Supporters" />
          <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
            {data.partners.map(p => (
              <div key={p} style={{ background:"white", border:"1.5px solid #c8e6c9", borderRadius:30, padding:"10px 22px", color:"#2d6a4f", fontSize:13, fontWeight:600 }}>{p}</div>
            ))}
          </div>
        </section>

        {/* ── Awards ── */}
        <section style={{ padding:"3rem 0 1rem" }}>
          <SectionHeader eyebrow="Recognition" title="Awards & Honours" />
          <div style={{ display:"flex", flexWrap:"wrap", gap:16, justifyContent:"center" }}>
            {data.awards.map(a => (
              <div key={a.title} style={{ background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", borderRadius:18, padding:"1.3rem 1.6rem", textAlign:"center", minWidth:200, border:"1.5px solid #b7e4c7" }}>
                <div style={{ fontSize:30, marginBottom:8 }}>{a.icon}</div>
                <div style={{ color:"#1b4332", fontSize:14, fontWeight:800, marginBottom:3 }}>{a.title}</div>
                <div style={{ color:"#52796f", fontSize:12 }}>{a.org}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA / Download Strip ── */}
        <section style={{ padding:"3rem 0 0" }}>
          <div style={{ background:"linear-gradient(135deg,#1b4332,#2d6a4f)", borderRadius:24, padding:"2.5rem 2rem", display:"flex", flexWrap:"wrap", gap:24, alignItems:"center", justifyContent:"space-between", position:"relative", overflow:"hidden" }}>
            <RingSVG style={{ position:"absolute", right:-28, top:-28, width:110, opacity:0.14 }} />
            <LeafSVG style={{ position:"absolute", bottom:-10, left:16, width:55, opacity:0.3 }} />
            <DotsSVG style={{ position:"absolute", top:10, right:120, width:70, opacity:0.2 }} />
            <div style={{ position:"relative", zIndex:1 }}>
              <div style={{ color:"#95d5b2", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>Get the Full Picture</div>
              <h3 style={{ color:"white", fontSize:"clamp(1.2rem,2.5vw,1.7rem)", fontWeight:800, margin:"0 0 0.5rem" }}>Share the {year} Annual Report</h3>
              <p style={{ color:"#b7e4c7", fontSize:14, margin:0 }}> PDF with full financial audits, field photos, and case studies.</p>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", position:"relative", zIndex:1 }}>
          
              <a href="#" className="dl-btn" style={{ background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332", borderRadius:30, padding:"13px 26px", fontSize:14, fontWeight:700, textDecoration:"none", fontFamily:"Sora, sans-serif", whiteSpace:"nowrap", transition:"all 0.2s", display:"flex", alignItems:"center", gap:8 }}>
                🔗 Share Report
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}