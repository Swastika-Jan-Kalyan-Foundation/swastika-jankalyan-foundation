import { useState, useEffect, useRef } from "react";
import { LeafEmblem } from "../components/Footer";

/* ─── Palette & theme ─── */
// Deep forest #1b4332 | Mid #2d6a4f | Sage #40916c | Mint #52b788
// Light mint #95d5b2 | Pale #b7e4c7 | Wash #d8f3dc | Bg #f0faf4

/* ─── Impact tiers based on donation amount ─── */
const getTier = (amount) => {
  if (amount >= 50000) return "platinum";
  if (amount >= 10000) return "gold";
  if (amount >= 2500)  return "silver";
  return "seed";
};

const tierData = {
  seed: {
    label: "Seed Donor",
    color: "#52b788",
    bg: "linear-gradient(135deg,#d8f3dc,#b7e4c7)",
    icon: "🌱",
    impact: [
      { icon: "🌳", value: "5",   label: "Trees Planted",        sub: "Native saplings in Jharkhand" },
      { icon: "👶", value: "2",   label: "Children Reached",     sub: "Through awareness programs" },
      { icon: "📚", value: "1",   label: "School Session",       sub: "Env. literacy class funded" },
      { icon: "💧", value: "50L", label: "Litres Water Saved",   sub: "Via conservation efforts" },
    ],
    messages: [
      { name: "Priya, 9", location: "Hazaribagh",  avatar: "🧒", msg: "Meri school mein ab pedo ke baare mein padha jaata hai. Mujhe trees bahut pasand hain. Shukriya aapka!" },
      { name: "Ramu Kaka", location: "Latehar",    avatar: "👨‍🌾", msg: "Hamara gaon ke paas ek chhota jungle tha jo sukh raha tha. Ab nayi podhein lagi hain. Bahut achha laga." },
      { name: "Sunita Devi", location: "Ranchi",   avatar: "👩", msg: "Bachon ko samajh aaya ki paani bachana kyun zaroori hai. Bahut badi seekh mili unhe." },
    ],
  },
  silver: {
    label: "Green Guardian",
    color: "#40916c",
    bg: "linear-gradient(135deg,#b7e4c7,#95d5b2)",
    icon: "🌿",
    impact: [
      { icon: "🌳", value: "25",   label: "Trees Planted",         sub: "Across 3 forest zones" },
      { icon: "👨‍👩‍👧‍👦", value: "12", label: "Families Supported",    sub: "With sustainable livelihood kits" },
      { icon: "🏫", value: "2",    label: "Schools Reached",        sub: "Env. curriculum delivered" },
      { icon: "🏠", value: "4",    label: "Homes Benefited",        sub: "Clean-cooking program" },
      { icon: "💧", value: "500L", label: "Litres Water Conserved", sub: "Rainwater harvesting units" },
    ],
    messages: [
      { name: "Anjali, 11", location: "Bokaro",    avatar: "👧", msg: "Hamare school mein nayi library aayi aur usme nature ki kitaabein hain. Main roz ek chapter padhti hoon!" },
      { name: "Dilip Mahato", location: "Dhanbad", avatar: "👨", msg: "Humein clean-cooking chulha mila. Ab biwi ki aankhon mein dhuan nahi jaata. Bhagwaan aapko sukhi rakhe." },
      { name: "Kamla Bai", location: "Giridih",    avatar: "👵", msg: "Meri beti ke school mein paudhe lagwaye aapne. Woh roz unhe paani deti hai. Bahut khush rehti hai." },
    ],
  },
  gold: {
    label: "Forest Champion",
    color: "#2d6a4f",
    bg: "linear-gradient(135deg,#95d5b2,#52b788)",
    icon: "🏆",
    impact: [
      { icon: "🌳", value: "120",   label: "Trees Planted",          sub: "Spanning 2 acres of forest" },
      { icon: "👨‍👩‍👧‍👦", value: "60", label: "Families Transformed",   sub: "Livelihood & nutrition kits" },
      { icon: "🏫", value: "8",     label: "Schools Impacted",        sub: "Green curriculum & gardens" },
      { icon: "🏠", value: "22",    label: "Homes Reached",           sub: "Solar + clean-cook upgrades" },
      { icon: "💧", value: "5,000L",label: "Litres Water Harvested",  sub: "Community tanks built" },
      { icon: "👦", value: "200",   label: "Children Educated",       sub: "Env. literacy workshops" },
    ],
    messages: [
      { name: "Radha Kumari", location: "Ramgarh",  avatar: "👩", msg: "Hamare gaon mein pehli baar solar light lagi. Bachon ki padhai ab raat ko bhi ho sakti hai. Dil se shukriya." },
      { name: "Manoj Oraon", location: "Lohardaga", avatar: "👨", msg: "Jungle bachaane ki training mili. Ab poora gaon milke jungle ki raksha karta hai. Aap hamari umeed ho." },
      { name: "Savitri, 13", location: "Khunti",    avatar: "👧", msg: "Main science teacher banna chahti hoon taaki aur bachon ko ye sab sikha sakoon. Aapne mera sapna jeevit rakha." },
    ],
  },
  platinum: {
    label: "Earth Protector",
    color: "#1b4332",
    bg: "linear-gradient(135deg,#52b788,#2d6a4f)",
    icon: "🌍",
    impact: [
      { icon: "🌳", value: "600+",   label: "Trees Planted",           sub: "10+ acres restored" },
      { icon: "👨‍👩‍👧‍👦", value: "300", label: "Families Lifted",          sub: "Holistic development support" },
      { icon: "🏫", value: "30",     label: "Schools Transformed",      sub: "Full green-school program" },
      { icon: "🏠", value: "100+",   label: "Homes Upgraded",           sub: "Solar, water & clean-cook" },
      { icon: "💧", value: "50,000L",label: "Litres Water Harvested",   sub: "Watershed restored" },
      { icon: "🌾", value: "5 acres",label: "Land Reforested",          sub: "Biodiversity zone created" },
      { icon: "👦", value: "1,000+", label: "Children Reached",         sub: "Full year education support" },
    ],
    messages: [
      { name: "Bishnu Prasad", location: "West Singhbhum", avatar: "👨‍🦳", msg: "50 saal mein pehli baar hamare gaon ka jharna phir se baha. Ye aapke paison ki barkat hai. Main apni poori umar yaad rakhoonga." },
      { name: "Meena Tirkey", location: "Gumla",           avatar: "👩", msg: "Humari beti ab state level mein science quiz jeeti. Aapne jo school garden diya, usne uski zindagi badal di. Bhagwaan ka shukr hai aap jaise log hain." },
      { name: "Arjun, 14", location: "Simdega",            avatar: "🧑", msg: "Main jungle officer banna chahta hoon. Aapne iss jungle ko bachaya, iss jungle ne mujhe bachaya. Yeh mera ghar hai." },
    ],
  },
};

/* ─── Fake donor database ─── */
const donors = {
  "NGO-1001": { name: "Rahul Sharma",   amount: 500,   date: "12 Jan 2025" },
  "NGO-1002": { name: "Ananya Verma",   amount: 5000,  date: "3 Feb 2025" },
  "NGO-1003": { name: "Vikram Singh",   amount: 15000, date: "19 Mar 2025" },
  "NGO-1004": { name: "Kavita Mishra",  amount: 75000, date: "7 Apr 2025" },
  "NGO-2025": { name: "Demo User",      amount: 2500,  date: "24 Apr 2025" },
};

/* ─── SVG shapes ─── */
const LeafSVG = ({ style }) => (
  <svg viewBox="0 0 60 60" fill="none" style={style}>
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56C42 56 52 47 52 36C52 18 30 5 30 5Z" fill="#2d6a4f" opacity="0.15"/>
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56" stroke="#52b788" strokeWidth="1.4" fill="none"/>
    <line x1="30" y1="54" x2="30" y2="20" stroke="#52b788" strokeWidth="1.1"/>
    <line x1="30" y1="38" x2="20" y2="28" stroke="#52b788" strokeWidth="0.8"/>
    <line x1="30" y1="45" x2="40" y2="35" stroke="#52b788" strokeWidth="0.8"/>
  </svg>
);

const RingSVG = ({ style }) => (
  <svg viewBox="0 0 100 100" fill="none" style={style}>
    <circle cx="50" cy="50" r="46" stroke="#52b788" strokeWidth="1" strokeDasharray="4 4" opacity="0.3"/>
    <circle cx="50" cy="50" r="30" stroke="#2d6a4f" strokeWidth="0.6" opacity="0.18"/>
    <circle cx="50" cy="50" r="6" fill="#52b788" opacity="0.25"/>
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 1440 80" fill="none" style={{ width:"100%", display:"block" }}>
    <path d="M0,50 C360,5 720,78 1080,38 C1260,16 1380,52 1440,38 L1440,80 L0,80Z" fill="#f0faf4"/>
  </svg>
);

const SparkSVG = ({ style }) => (
  <svg viewBox="0 0 32 32" fill="none" style={style}>
    <line x1="16" y1="2" x2="16" y2="10" stroke="#52b788" strokeWidth="1.5" opacity="0.6"/>
    <line x1="16" y1="22" x2="16" y2="30" stroke="#52b788" strokeWidth="1.5" opacity="0.6"/>
    <line x1="2" y1="16" x2="10" y2="16" stroke="#52b788" strokeWidth="1.5" opacity="0.6"/>
    <line x1="22" y1="16" x2="30" y2="16" stroke="#52b788" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="16" cy="16" r="3" fill="#52b788" opacity="0.5"/>
  </svg>
);

const ArcSVG = ({ style }) => (
  <svg viewBox="0 0 120 120" fill="none" style={style}>
    <path d="M0 120 Q60 0 120 0" stroke="#52b788" strokeWidth="1" fill="none" opacity="0.18"/>
    <path d="M0 90 Q45 15 90 0" stroke="#2d6a4f" strokeWidth="0.6" fill="none" opacity="0.12"/>
  </svg>
);

/* ─── Animated counter ─── */
function CountUp({ target, duration = 1200 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = null;
    const num = parseFloat(target.toString().replace(/[^0-9.]/g, "")) || 0;
    const suffix = target.toString().replace(/[0-9.,]/g, "");
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * num) + suffix);
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [target]);
  return <>{val}</>;
}

/* ─── Impact stat card ─── */
function ImpactCard({ icon, value, label, sub, delay }) {
  return (
    <div className="impact-card" style={{
      background:"white", borderRadius:20, border:"1.5px solid #c8e6c9",
      padding:"1.4rem 1.2rem", textAlign:"center",
      animation:`fadeUp 0.5s ease ${delay}s both`,
      position:"relative", overflow:"hidden",
    }}>
      <ArcSVG style={{ position:"absolute", bottom:-10, right:-10, width:60, opacity:0.5 }} />
      <div style={{ fontSize:32, marginBottom:8 }}>{icon}</div>
      <div style={{ color:"#1b4332", fontSize:"clamp(1.4rem,3vw,2rem)", fontWeight:800, lineHeight:1 }}>
        <CountUp target={value} />
      </div>
      <div style={{ color:"#2d6a4f", fontSize:13, fontWeight:700, margin:"4px 0 2px" }}>{label}</div>
      <div style={{ color:"#74b69a", fontSize:11 }}>{sub}</div>
    </div>
  );
}

/* ─── Heart message card ─── */
function MessageCard({ avatar, name, location, msg, delay }) {
  return (
    <div style={{
      background:"white", borderRadius:20, border:"1.5px solid #c8e6c9",
      padding:"1.5rem", position:"relative", overflow:"hidden",
      animation:`fadeUp 0.5s ease ${delay}s both`,
      boxShadow:"0 4px 20px rgba(45,106,79,0.07)",
    }}>
      {/* Quote mark */}
      <div style={{ position:"absolute", top:14, right:18, fontSize:52, color:"#d8f3dc", fontFamily:"Georgia, serif", lineHeight:1, userSelect:"none" }}>"</div>
      <RingSVG style={{ position:"absolute", bottom:-20, left:-20, width:70, opacity:0.2 }} />

      {/* Heart badge */}
      <div style={{ position:"absolute", top:-1, left:20, background:"linear-gradient(135deg,#ff6b6b,#ff8e8e)", borderRadius:"0 0 10px 10px", padding:"3px 10px", display:"flex", alignItems:"center", gap:4 }}>
        <span style={{ fontSize:10 }}>❤️</span>
        <span style={{ color:"white", fontSize:10, fontWeight:700, fontFamily:"Sora, sans-serif" }}>From the heart</span>
      </div>

      <div style={{ marginTop:18 }}>
        <p style={{ color:"#2d4a3e", fontSize:14, lineHeight:1.8, margin:"0 0 1.2rem", fontStyle:"italic", position:"relative", zIndex:1 }}>
          "{msg}"
        </p>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{avatar}</div>
          <div>
            <div style={{ color:"#1b4332", fontSize:13, fontWeight:700 }}>{name}</div>
            <div style={{ color:"#74b69a", fontSize:11 }}>📍 {location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Progress bar ─── */
function TierBar({ amount }) {
  const tiers = [
    { label:"Seed", min:0,     max:2499,  color:"#95d5b2" },
    { label:"Silver",min:2500, max:9999,  color:"#C0C0C0" },
    { label:"Gold",  min:10000,max:49999, color:"#FFD700" },
    { label:"Plat",  min:50000,max:99999, color:"#E5E4E2" },
  ];
  const idx = amount >= 50000 ? 3 : amount >= 10000 ? 2 : amount >= 2500 ? 1 : 0;
  const pct = Math.min(((amount - tiers[idx].min) / (tiers[idx].max - tiers[idx].min || 1)) * 100, 100);

  return (
    <div style={{ marginBottom:8 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
        {tiers.map((t, i) => (
          <span key={t.label} style={{ marginLeft: '10PX',  fontSize:10, fontWeight:700, color: i <= idx ? t.color : "#c8e6c9", textTransform:"uppercase", letterSpacing:"0.06em" }}>{t.label}</span>
        ))}
      </div>
      <div style={{ height:8, background:"#e8f5e9", borderRadius:99, overflow:"hidden" }}>
        <div style={{
          height:"100%", borderRadius:99,
          background:`linear-gradient(90deg,#95d5b2,${tiers[idx].color})`,
          width:`${((idx / 3) * 100) + (pct / 3)}%`,
          transition:"width 1.2s cubic-bezier(.22,1,.36,1)",
        }} />
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export const TrackImpact = () => {
  const [donorId, setDonorId] = useState("");
  const [txnId, setTxnId]     = useState("");
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");
  const resultRef = useRef();

  const handleSearch = async () => {
    const cleanedDonorId = donorId.trim().toUpperCase();
  
    if (!cleanedDonorId) {
      setError("Please enter your Donor ID.");
      return;
    }
  
    setError("");
    setLoading(true);
    setResult(null);
  
    try {
      const res = await fetch(
        `https://sjkf-backend-api.vercel.app/api/donations/${cleanedDonorId}`
      );
  
      const data = await res.json();
  
      if (!res.ok) {
        setError("No donor found with this ID.");
        setLoading(false);
        return;
      }
  
      const donation = data.data;
      const tier = getTier(donation.amount);
  
      setResult({
        ...donation,
        tier,
        data: tierData[tier]
      });
  
      setLoading(false);
  
      setTimeout(() => {
        resultRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  const inp = (name) => ({
    width:"100%", padding:"14px 18px", borderRadius:14, fontFamily:"Sora, sans-serif",
    border: focused===name ? "1.5px solid #52b788" : "1.5px solid #c8e6c9",
    background:"#f8fdfb", color:"#1b4332", fontSize:15, outline:"none",
    transition:"border 0.2s, box-shadow 0.2s",
    boxShadow: focused===name ? "0 0 0 4px rgba(82,183,136,0.12)" : "none",
    boxSizing:"border-box",
  });

  return (
    <div style={{ fontFamily:"Sora, sans-serif", background:"#f0faf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color:#b7e4c7; font-family:Sora,sans-serif; font-size:14px; }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes pulse    { 0%,100%{transform:scale(1);} 50%{transform:scale(1.05);} }
        @keyframes spin     { to { transform:rotate(360deg); } }
        @keyframes shimmer  { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
        .impact-card:hover  { transform:translateY(-4px); box-shadow:0 10px 30px rgba(45,106,79,0.12) !important; transition:all 0.25s; }
        .search-btn:hover   { transform:translateY(-2px); box-shadow:0 8px 28px rgba(45,106,79,0.35) !important; }
        .search-btn:active  { transform:translateY(0); }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .shimmer {
          background: linear-gradient(90deg, #e8f5e9 25%, #f0faf4 50%, #e8f5e9 75%);
          background-size: 400px 100%;
          animation: shimmer 1.2s infinite;
        }
      `}</style>

      {/* ── HERO ── */}
      <div style={{ background:"linear-gradient(145deg,#1b4332 0%,#2d6a4f 55%,#40916c 100%)", position:"relative", overflow:"hidden" }}>
        <LeafSVG style={{ position:"absolute", top:28, left:24, width:48, opacity:0.85, transform:"rotate(-18deg)" }} />
        <LeafSVG style={{ position:"absolute", top:50, right:70, width:30, opacity:0.55, transform:"rotate(32deg) scaleX(-1)" }} />
        <RingSVG style={{ position:"absolute", bottom:50, left:50, width:90, opacity:0.4 }} />
        <SparkSVG style={{ position:"absolute", top:70, right:140, width:28, opacity:0.55 }} />
        <LeafSVG style={{ position:"absolute", bottom:70, right:22, width:32, opacity:0.4, transform:"rotate(65deg)" }} />
        <SparkSVG style={{ position:"absolute", bottom:110, left:120, width:22, opacity:0.4 }} />

        <div style={{ textAlign:"center", padding:"3.5rem 1.5rem 2rem", position:"relative", zIndex:2 }}>
          <div className="fade-up" style={{ animationDelay:"0.05s", display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:30, padding:"7px 20px", marginBottom:"1.5rem" }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#95d5b2", animation:"pulse 2s infinite" }} />
            <span style={{ color:"#d8f3dc", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>Your Gift. Real Impact.</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay:"0.12s", color:"white", fontSize:"clamp(2rem,5vw,3.4rem)", fontWeight:800, margin:"0 0 1rem", lineHeight:1.12 }}>
            Track Your <span style={{ color:"#95d5b2" }}>Impact</span>
          </h1>
          <p className="fade-up" style={{ animationDelay:"0.22s", color:"#b7e4c7", fontSize:"clamp(14px,2vw,16px)", maxWidth:520, margin:"0 auto 0", lineHeight:1.85 }}>
            Every rupee you donated moved mountains — quite literally. Enter your Donor ID below and watch your generosity come to life.
          </p>
        </div>
        <WaveSVG />
      </div>

      {/* ── SEARCH SECTION ── */}
      <div style={{ maxWidth:680, margin:"0 auto", padding:"2.5rem 1.25rem 0" }}>
        <div style={{ background:"white", borderRadius:24, border:"1.5px solid #c8e6c9", padding:"2rem 2rem 2.5rem", position:"relative", overflow:"hidden", boxShadow:"0 8px 40px rgba(45,106,79,0.09)" }}>
          <RingSVG style={{ position:"absolute", top:-30, right:-30, width:100, opacity:0.2 }} />
          <ArcSVG style={{ position:"absolute", bottom:-10, left:-10, width:100, opacity:0.4 }} />

          <div style={{ textAlign:"center", marginBottom:"1.75rem" }}>
            <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#1b4332)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem", fontSize:22 }}><LeafEmblem/></div>
            <h2 style={{ color:"#1b4332", fontSize:20, fontWeight:800, margin:"0 0 0.4rem" }}>Find Your Green Footprint</h2>
            <p style={{ color:"#74b69a", fontSize:13, margin:0 }}>Enter your Donor ID (try: NGO-1001 to NGO-1004 or NGO-2025)</p>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {/* Donor ID */}
            <div>
              <label style={{ fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2d6a4f", display:"block", marginBottom:7 }}>
                Donor ID *
              </label>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", color:"#52b788", fontSize:16 }}>🪪</span>
                <input value={donorId} onChange={e => setDonorId(e.target.value)}
                  onFocus={() => setFocused("id")} onBlur={() => setFocused("")}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. NGO-1001"
                  style={{ ...inp("id"), paddingLeft:44, }} />
              </div>
            </div>

            {/* Transaction ID */}
            <div>
              <label style={{ fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2d6a4f", display:"block", marginBottom:7 }}>
                Transaction ID <span style={{ color:"#95d5b2", fontWeight:400, textTransform:"none", fontSize:10 }}>(optional)</span>
              </label>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", color:"#52b788", fontSize:16 }}>🧾</span>
                <input value={txnId} onChange={e => setTxnId(e.target.value)}
                  onFocus={() => setFocused("txn")} onBlur={() => setFocused("")}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. TXN-XXXXXXXX"
                  style={{ ...inp("txn"), paddingLeft:44 }} />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{ background:"#fff5f5", border:"1.5px solid #ffcdd2", borderRadius:12, padding:"10px 14px", color:"#c0392b", fontSize:13, display:"flex", gap:8, alignItems:"flex-start" }}>
                <span>⚠️</span><span>{error}</span>
              </div>
            )}

            {/* Button */}
            <button onClick={handleSearch} disabled={loading} className="search-btn"
              style={{
                padding:"15px", borderRadius:14, border:"none",
                background: loading ? "#c8e6c9" : "linear-gradient(90deg,#1b4332,#2d6a4f,#40916c)",
                color:"white", fontSize:15, fontWeight:700, cursor: loading ? "default" : "pointer",
                fontFamily:"Sora, sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:10,
                transition:"all 0.2s", marginTop:4,
              }}>
              {loading ? (
                <>
                  <div style={{ width:18, height:18, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"white", borderRadius:"50%", animation:"spin 0.8s linear infinite" }} />
                  Calculating your impact…
                </>
              ) : (
                <><span style={{ fontSize:18 }}>🌿</span> Reveal My Impact</>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── RESULTS ── */}
      {result && (
        <div ref={resultRef} style={{ maxWidth:1060, margin:"2.5rem auto 0", padding:"0 1.25rem 5rem", animation:"fadeIn 0.5s ease" }}>

          {/* Donor greeting card */}
          <div style={{
            background:`${result.data.bg}`, borderRadius:24, padding:"1.75rem 2rem",
            marginBottom:28, position:"relative", overflow:"hidden",
            border:"2px solid rgba(255,255,255,0.6)",
            boxShadow:"0 8px 32px rgba(45,106,79,0.15)",
          }}>
            <RingSVG style={{ position:"absolute", top:-20, right:-20, width:100, opacity:0.25 }} />
            <LeafSVG style={{ position:"absolute", bottom:-10, left:10, width:50, opacity:0.4 }} />
            <div style={{ display:"flex", flexWrap:"wrap", gap:16, alignItems:"center", justifyContent:"space-between", position:"relative", zIndex:1 }}>
              <div>
                <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(27,67,50,0.6)", marginBottom:4 }}>Your Impact Report</div>
                <h2 style={{ color:"#1b4332", fontSize:"clamp(1.3rem,3vw,1.9rem)", fontWeight:800, margin:"0 0 0.3rem" }}>
                  {result.data.icon} Thank you, {result.name}!
                </h2>
                <p style={{ color:"#2d6a4f", fontSize:14, margin:0 }}>
                  Donated <strong>₹{result.amount.toLocaleString()}</strong> on {result.date} · Tier: <strong>{result.data.label}</strong>
                </p>
              </div>
              <div style={{ textAlign:"right" }}>
                <TierBar amount={result.amount} />
                <span style={{ fontSize:11, color:"#FFF", fontWeight:600 }}>Donor ID: {donorId.toUpperCase()}</span>
              </div>
            </div>
          </div>

          {/* Section title: Impact */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
            <div style={{ width:4, height:28, background:"linear-gradient(180deg,#52b788,#2d6a4f)", borderRadius:99 }} />
            <h3 style={{ color:"#1b4332", fontSize:"clamp(1.1rem,2.5vw,1.4rem)", fontWeight:800, margin:0 }}>What Your Donation Achieved</h3>
            <div style={{ flex:1, height:1, background:"linear-gradient(90deg,#c8e6c9,transparent)" }} />
          </div>

          {/* Impact grid */}
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",
            gap:16, marginBottom:40,
          }}>
            {result.data.impact.map((item, i) => (
              <ImpactCard key={item.label} {...item} delay={0.05 * i} />
            ))}
          </div>

          {/* Section title: Messages */}
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20 }}>
            <div style={{ width:4, height:28, background:"linear-gradient(180deg,#ff8e8e,#ff6b6b)", borderRadius:99 }} />
            <h3 style={{ color:"#1b4332", fontSize:"clamp(1.1rem,2.5vw,1.4rem)", fontWeight:800, margin:0 }}>Messages From Those You Helped</h3>
            <div style={{ flex:1, height:1, background:"linear-gradient(90deg,#c8e6c9,transparent)" }} />
          </div>

          {/* Messages grid */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:20, marginBottom:40 }}>
            {result.data.messages.map((m, i) => (
              <MessageCard key={m.name} {...m} delay={0.1 * i} />
            ))}
          </div>

          {/* CTA strip */}
          <div style={{
            background:"linear-gradient(135deg,#1b4332,#2d6a4f)", borderRadius:22,
            padding:"2rem", display:"flex", flexWrap:"wrap", gap:20,
            alignItems:"center", justifyContent:"space-between", position:"relative", overflow:"hidden",
          }}>
            <RingSVG style={{ position:"absolute", right:-20, top:-20, width:90, opacity:0.15 }} />
            <SparkSVG style={{ position:"absolute", left:20, bottom:10, width:24, opacity:0.3 }} />
            <div>
              <h4 style={{ color:"#95d5b2", fontSize:18, fontWeight:800, margin:"0 0 0.3rem" }}>Your journey doesn't stop here 🌱</h4>
              <p style={{ color:"#b7e4c7", fontSize:13, margin:0 }}>Double your impact — one more donation plants twice the hope.</p>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <a href="#" style={{ background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332", borderRadius:30, padding:"11px 24px", fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"Sora, sans-serif", whiteSpace:"nowrap" }}>Donate Again 💚</a>
              <a href="#" style={{ border:"1.5px solid rgba(255,255,255,0.3)", color:"white", borderRadius:30, padding:"11px 24px", fontSize:13, fontWeight:700, textDecoration:"none", fontFamily:"Sora, sans-serif", whiteSpace:"nowrap" }}>Share My Impact</a>
            </div>
          </div>

        </div>
      )}

      {/* Empty state */}
      {!result && !loading && (
        <div style={{ textAlign:"center", padding:"3rem 1.5rem", color:"#95d5b2" }}>
          <div style={{ fontSize:52, marginBottom:12 }}>🌍</div>
          <p style={{ fontSize:14, color:"#74b69a" }}>Enter your Donor ID above to see your real-world impact.</p>
        </div>
      )}
    </div>
  );
}