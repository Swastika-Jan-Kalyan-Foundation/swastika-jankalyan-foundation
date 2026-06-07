import { useState, useEffect, useRef } from "react";
import { LeafEmblem } from "../components/Footer";
import logo from '../assets/logo1.png'
/* ─── Palette & theme ─── */
// Deep forest #1b4332 | Mid #2d6a4f | Sage #40916c | Mint #52b788
// Light mint #95d5b2 | Pale #b7e4c7 | Wash #d8f3dc | Bg #f0faf4

/* ─── Dummy Certificate Database ─── */
const certificates = {
  "CERTI-1001": {
    certificateId: "CERTI-1001",
    issuedDate: "2025-01-12",
    issuedDateDisplay: "12 Jan 2025",
    recipientName: "Rahul Sharma",
    title: "Certificate of Environmental Stewardship",
    summary:
      "This certificate is proudly awarded to recognise an outstanding commitment to environmental conservation and sustainable development. The recipient has demonstrated exemplary dedication through active participation in afforestation drives, community awareness campaigns, and grassroots ecological initiatives across the Jharkhand region. This certificate serves as an enduring testament to the positive change inspired by their generous contribution to a greener, more sustainable future for generations to come.",
    modeOfIssue: "Digital & Physical",
    signingAuthority: "Ajay Kumar Sinha",
    recommendor: "Apoorv Harsh",
  },
  "CERTI-1002": {
    certificateId: "CERTI-1002",
    issuedDate: "2025-02-03",
    issuedDateDisplay: "3 Feb 2025",
    recipientName: "Ananya Verma",
    title: "Certificate of Green Champion",
    summary:
      "Issued in proud recognition of extraordinary leadership and sustained efforts in promoting environmental literacy among youth communities. The recipient has been instrumental in driving nature-based education programs and has actively mentored the next generation of environmental advocates. This certificate honours their invaluable role in championing ecological responsibility and fostering a culture of sustainability within their community.",
    modeOfIssue: "Digital",
    signingAuthority: "Ajay Kumar Sinha",
    recommendor: "Apoorv Harsh",
  },
  "CERTI-1003": {
    certificateId: "CERTI-1003",
    issuedDate: "2025-03-19",
    issuedDateDisplay: "19 Mar 2025",
    recipientName: "Vikram Singh",
    title: "Certificate of Forest Guardian",
    summary:
      "Awarded in heartfelt recognition of tireless service in the protection and restoration of degraded forest ecosystems. The recipient's hands-on involvement in tree plantation, biodiversity conservation, and wildlife habitat preservation has made a measurable difference in restoring the ecological balance of vulnerable forest zones. This certificate celebrates their unwavering spirit and commitment to safeguarding our natural heritage.",
    modeOfIssue: "Physical",
    signingAuthority: "Ajay Kumar Sinha",
    recommendor: "Apoorv Harsh",
  },
  "CERTI-1004": {
    certificateId: "CERTI-1004",
    issuedDate: "2025-04-07",
    issuedDateDisplay: "7 Apr 2025",
    recipientName: "Kavita Mishra",
    title: "Certificate of Earth Protector",
    summary:
      "Presented with deep gratitude for an extraordinary and sustained contribution to ecological restoration at the highest level. The recipient's visionary leadership and tireless advocacy have transformed entire communities, enabling watershed restoration, reforestation of degraded lands, and a lasting legacy of biodiversity. This certificate is a symbol of the profound impact that one individual's commitment can have on the health of our planet and the wellbeing of future generations.",
    modeOfIssue: "Digital & Physical",
    signingAuthority: "Ajay Kumar Sinha",
    recommendor: "Apoorv Harsh",
  },
  "CERTI-2025": {
    certificateId: "CERTI-2025",
    issuedDate: "2025-04-24",
    issuedDateDisplay: "24 Apr 2025",
    recipientName: "Demo User",
    title: "Certificate of Conservation Excellence",
    summary:
      "This certificate acknowledges a commendable contribution to the cause of environmental conservation and community-driven sustainability. The recipient has shown unwavering resolve in supporting initiatives that protect natural resources, empower local communities, and foster ecological awareness. Through their generous support, they have helped plant the seeds of a greener, more equitable world for generations to come.",
    modeOfIssue: "Digital",
    signingAuthority: "Ajay Kumar Sinha",
    recommendor: "Apoorv Harsh",
  },
};

/* ─── SVG shapes (same as original) ─── */
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

/* ─── Certificate SVGs ─── */
const SealSVG = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    {Array.from({ length: 14 }).map((_, i) => {
      const angle = (i * 360) / 14;
      const rad = (angle * Math.PI) / 180;
      const x1 = 40 + 36 * Math.cos(rad);
      const y1 = 40 + 36 * Math.sin(rad);
      const x2 = 40 + 29 * Math.cos(rad);
      const y2 = 40 + 29 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#52b788" strokeWidth="1.3" opacity="0.55"/>;
    })}
    <circle cx="40" cy="40" r="26" fill="url(#sg)"/>
    <circle cx="40" cy="40" r="26" stroke="#40916c" strokeWidth="1.3" fill="none"/>
    <circle cx="40" cy="40" r="19" stroke="#95d5b2" strokeWidth="0.7" fill="none" strokeDasharray="3 2"/>
    <path d="M40 25C40 25 30 32 30 39C30 44.5 34.5 49 40 49C45.5 49 50 44.5 50 39C50 32 40 25 40 25Z" fill="#d8f3dc" opacity="0.85"/>
    <path d="M40 25C40 25 30 32 30 39C30 44.5 34.5 49 40 49" stroke="#2d6a4f" strokeWidth="1.1" fill="none"/>
    <line x1="40" y1="48" x2="40" y2="34" stroke="#2d6a4f" strokeWidth="0.9"/>
    <line x1="40" y1="43" x2="36" y2="39" stroke="#2d6a4f" strokeWidth="0.7"/>
    <line x1="40" y1="46" x2="44" y2="42" stroke="#2d6a4f" strokeWidth="0.7"/>
    <defs>
      <radialGradient id="sg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#d8f3dc"/>
        <stop offset="100%" stopColor="#b7e4c7"/>
      </radialGradient>
    </defs>
  </svg>
);

const WaxSeal = () => (
  <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 360) / 12;
      const rad = (angle * Math.PI) / 180;
      const x1 = 29 + 27 * Math.cos(rad);
      const y1 = 29 + 27 * Math.sin(rad);
      const x2 = 29 + 21 * Math.cos(rad);
      const y2 = 29 + 21 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1b4332" strokeWidth="2"/>;
    })}
    <circle cx="29" cy="29" r="19" fill="#1b4332"/>
    <circle cx="29" cy="29" r="15" stroke="#52b788" strokeWidth="0.7" fill="none" opacity="0.55"/>
    <text x="29" y="33" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#95d5b2" fontFamily="Georgia, serif">NGO</text>
  </svg>
);

const SignatureLine = () => (
  <svg width="110" height="34" viewBox="0 0 110 34" fill="none">
    <path d="M5 26 C18 9 32 30 46 17 C57 7 66 28 78 19 C87 13 97 24 105 21" stroke="#2d6a4f" strokeWidth="1.7" fill="none" strokeLinecap="round"/>
    <line x1="5" y1="31" x2="105" y2="31" stroke="#95d5b2" strokeWidth="0.8"/>
  </svg>
);

/* ─── Main component ─── */
export const VerifyCertificate = () => {
  const [certId, setCertId]         = useState("");
  const [dateIssued, setDateIssued] = useState("");
  const [result, setResult]         = useState(null);
  const [error, setError]           = useState("");
  const [loading, setLoading]       = useState(false);
  const [focused, setFocused]       = useState("");
  const resultRef = useRef();

  const normalizeApiCert = (raw) => {
    const rawDate = raw.issueDate ?? raw.issuedDate ?? "";
    return {
      certificateId:     raw.certificateId,
      issuedDate:        rawDate ? rawDate.slice(0, 10) : "",
      issuedDateDisplay: rawDate
                           ? new Date(rawDate).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
                           : (raw.issuedDateDisplay ?? ""),
      recipientName:     raw.issuedTo          ?? raw.recipientName   ?? raw.name          ?? "",
      title:             raw.certificateTitle   ?? raw.title                               ?? "",
      summary:           raw.certificateSummary ?? raw.summary         ?? raw.description   ?? "",
      modeOfIssue:       raw.modeOfIssue        ?? raw.mode            ?? "Digital",
      signingAuthority:  raw.signingAuthority   ?? raw.signingAutority  ?? raw.signedBy    ?? "",
      recommendor:       raw.recommender        ?? raw.recommendor     ?? raw.recommendedBy ?? "",
      physicalCopy:      raw.physicalCopy        ?? "",
    };
  };

  const handleSearch = async () => {
    const cleanedId = certId.trim().toUpperCase();

    if (!cleanedId) {
      setError("Please enter your Certificate ID.");
      return;
    }
    if (!dateIssued) {
      setError("Please enter the date issued.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    /* ── 1. Try live backend API ── */
    try {
      const url = `https://sjkfapi.onrender.com/api/certificate/${encodeURIComponent(cleanedId)}?issueDate=${encodeURIComponent(dateIssued)}`;
      const res  = await fetch(url);

      if (res.ok) {
        const json = await res.json();
        const raw = json.data ?? json;
        const unwrapped = Array.isArray(raw) ? raw[0] : raw;
        console.log("API JSON full:", JSON.stringify(json, null, 2));
        console.log("Unwrapped cert object:", JSON.stringify(unwrapped, null, 2));
        const cert = normalizeApiCert(unwrapped);
        setResult(cert);
        setLoading(false);
        setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
        return;
      }

      if (res.status === 404) {
        setError("No certificate found with this ID. Please check and try again.");
        setLoading(false);
        return;
      } else {
        throw new Error(`API error ${res.status}`);
      }
    } catch (err) {
      /* Network / CORS failure — fall through to dummy data */
      console.warn("API unreachable, falling back to local data:", err.message);
    }

    /* ── 2. Fallback: dummy data (for testing) ── */
    const cert = certificates[cleanedId];

    if (!cert) {
      setError("No certificate found with this ID. Please check and try again.");
      setLoading(false);
      return;
    }

    if (cert.issuedDate !== dateIssued) {
      setError("The date issued does not match our records. Please check and try again.");
      setLoading(false);
      return;
    }

    setResult(cert);
    setLoading(false);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
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
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,600&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color:#b7e4c7; font-family:Sora,sans-serif; font-size:14px; }
        @keyframes fadeUp   { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes pulse    { 0%,100%{transform:scale(1);} 50%{transform:scale(1.05);} }
        @keyframes spin     { to { transform:rotate(360deg); } }
        .search-btn:hover   { transform:translateY(-2px); box-shadow:0 8px 28px rgba(45,106,79,0.35) !important; }
        .search-btn:active  { transform:translateY(0); }
        .fade-up { animation: fadeUp 0.6s ease both; }
        .cert-field:hover { background:#d8f3dc !important; }
      `}</style>

      {/* ── HERO (exact original) ── */}
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
            Verify Your <span style={{ color:"#95d5b2" }}>Certificate</span>
          </h1>
          <p className="fade-up" style={{ animationDelay:"0.22s", color:"#b7e4c7", fontSize:"clamp(14px,2vw,16px)", maxWidth:520, margin:"0 auto 0", lineHeight:1.85 }}>
            Every certificate we issue is tied to real environmental action. Enter your details below and verify your certificate.
          </p>
        </div>
        <WaveSVG />
      </div>

      {/* ── SEARCH SECTION (exact original layout) ── */}
      <div style={{ maxWidth:680, margin:"0 auto", padding:"2.5rem 1.25rem 0" }}>
        <div style={{ background:"white", borderRadius:24, border:"1.5px solid #c8e6c9", padding:"2rem 2rem 2.5rem", position:"relative", overflow:"hidden", boxShadow:"0 8px 40px rgba(45,106,79,0.09)" }}>
          <RingSVG style={{ position:"absolute", top:-30, right:-30, width:100, opacity:0.2 }} />
          <ArcSVG style={{ position:"absolute", bottom:-10, left:-10, width:100, opacity:0.4 }} />

          <div style={{ textAlign:"center", marginBottom:"1.75rem" }}>
            <div style={{ width:52, height:52, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#1b4332)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1rem", fontSize:22 }}>
              <LeafEmblem/>
            </div>
            <h2 style={{ color:"#1b4332", fontSize:20, fontWeight:800, margin:"0 0 0.4rem" }}>Verify your certificate</h2>
            <p style={{ color:"#74b69a", fontSize:13, margin:0 }}>Enter your Certificate ID (try: CERTI-1001 to CERTI-1004 or CERTI-2025)</p>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>

            {/* Certificate ID */}
            <div>
              <label style={{ fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2d6a4f", display:"block", marginBottom:7 }}>
                Certificate ID *
              </label>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", color:"#52b788", fontSize:16 }}>🪪</span>
                <input
                  value={certId}
                  onChange={e => setCertId(e.target.value)}
                  onFocus={() => setFocused("id")}
                  onBlur={() => setFocused("")}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  placeholder="e.g. CERTI-1001"
                  style={{ ...inp("id"), paddingLeft:44 }}
                />
              </div>
            </div>

            {/* Date Issued */}
            <div>
              <label style={{ fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2d6a4f", display:"block", marginBottom:7 }}>
                Date Issued *
              </label>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:16, top:"50%", transform:"translateY(-50%)", color:"#52b788", fontSize:16 }}>📅</span>
                <input
                  type="date"
                  value={dateIssued}
                  onChange={e => setDateIssued(e.target.value)}
                  onFocus={() => setFocused("date")}
                  onBlur={() => setFocused("")}
                  onKeyDown={e => e.key === "Enter" && handleSearch()}
                  style={{ ...inp("date"), paddingLeft:44 }}
                />
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
                  Verifying certificate…
                </>
              ) : (
                <><span style={{ fontSize:18 }}>🌿</span> Verify My Certificate</>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── CERTIFICATE RESULT ── */}
      {result && (
        <div ref={resultRef} style={{ maxWidth:820, margin:"3rem auto 0", padding:"0 1.25rem 5rem", animation:"fadeIn 0.5s ease" }}>

          {/* Verified banner */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:24 }}>
            <div style={{ height:1, flex:1, background:"linear-gradient(90deg,transparent,#95d5b2)" }} />
            <div style={{ display:"flex", alignItems:"center", gap:8, background:"#d8f3dc", border:"1.5px solid #52b788", borderRadius:30, padding:"7px 20px" }}>
              <span style={{ fontSize:15 }}>✅</span>
              <span style={{ color:"#1b4332", fontSize:13, fontWeight:700 }}>Certificate Verified Successfully</span>
            </div>
            <div style={{ height:1, flex:1, background:"linear-gradient(90deg,#95d5b2,transparent)" }} />
          </div>

          {/* THE CERTIFICATE CARD */}
          <div style={{
            background:"white", borderRadius:24,
            boxShadow:"0 20px 64px rgba(27,67,50,0.14), 0 4px 16px rgba(27,67,50,0.07)",
            border:"2px solid #e8f5e9", overflow:"hidden", position:"relative",
            animation:"fadeUp 0.55s ease both",
          }}>
            {/* Top band */}
            <div style={{ background:"linear-gradient(90deg,#1b4332,#2d6a4f,#40916c)", height:10 }} />

            <div style={{ padding:"2.5rem 2.5rem 2rem", position:"relative" }}>
              {/* Corner leaves */}
              {[
                { top:14, left:14 },
                { top:14, right:14, transform:"scaleX(-1)" },
                { bottom:14, left:14, transform:"scaleY(-1)" },
                { bottom:14, right:14, transform:"scale(-1,-1)" },
              ].map((pos, i) => (
                <svg key={i} viewBox="0 0 70 70" fill="none" style={{ position:"absolute", width:65, opacity:0.18, ...pos }}>
                  <path d="M5 65 C5 5 65 5 65 5" stroke="#52b788" strokeWidth="1.3" fill="none"/>
                  <path d="M35 50 C35 50 24 37 30 27 C34 20 44 22 44 30 C44 38 35 50 35 50Z" fill="#52b788" opacity="0.2" stroke="#52b788" strokeWidth="0.7"/>
                  <line x1="35" y1="48" x2="35" y2="32" stroke="#52b788" strokeWidth="0.65" opacity="0.5"/>
                </svg>
              ))}

              {/* Header */}
              <div style={{ textAlign:"center", marginBottom:"1.75rem", position:"relative", zIndex:1 }}>
                <div style={{ display:"flex", justifyContent:"center", marginBottom:12 }}>
                  <img  className="h-20 w-20" src={logo} />
                </div>
                <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#52b788", marginBottom:8 }}>
                  Certificate of Recognition
                </div>
                <h2 style={{ fontFamily:"Sora, sans-serif", fontSize:"clamp(1.3rem,3vw,1.9rem)", color:"#1b4332", margin:"0 0 0.4rem", fontWeight:800, lineHeight:1.3 }}>
                  {result.title}
                </h2>
                <div style={{ display:"flex", alignItems:"center", gap:10, justifyContent:"center", margin:"10px 0" }}>
                  <div style={{ height:1, width:60, background:"linear-gradient(90deg,transparent,#95d5b2)" }} />
                  <LeafSVG style={{ width:18, opacity:0.6 }} />
                  <div style={{ height:1, width:60, background:"linear-gradient(90deg,#95d5b2,transparent)" }} />
                </div>
              </div>

              {/* Presented to */}
              <div style={{ textAlign:"center", marginBottom:"1.75rem", position:"relative", zIndex:1 }}>
                <p style={{ color:"#74b69a", fontSize:13, fontStyle:"italic", margin:"0 0 6px", fontFamily:"Sora, sans-serif" }}>
                  This certificate is proudly presented to
                </p>
                <h3 style={{ fontFamily:"Sora, sans-serif", fontSize:"clamp(1.5rem,4vw,2rem)", color:"#1b4332", margin:0, fontWeight:800 }}>
                  {result.recipientName}
                </h3>
                <div style={{ width:70, height:3, background:"linear-gradient(90deg,#52b788,#95d5b2)", borderRadius:99, margin:"10px auto 0" }} />
              </div>

              {/* Summary */}
              <div style={{ background:"linear-gradient(135deg,#f7fdf9,#f0faf4)", border:"1px solid #d8f3dc", borderRadius:16, padding:"1.2rem 1.4rem", marginBottom:"1.75rem", position:"relative", zIndex:1 }}>
                <p style={{ color:"#2d6a4f", fontSize:13.5, lineHeight:1.9, margin:0, textAlign:"center", fontStyle:"italic", fontFamily:"Sora, sans-serif" }}>
                  "{result.summary}"
                </p>
              </div>

              {/* Details grid */}
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(190px,1fr))", gap:12, marginBottom:"1.75rem", position:"relative", zIndex:1 }}>
                {[
                  { icon:"🆔", label:"Certificate ID",    value: result.certificateId },
                  { icon:"📅", label:"Date of Issue",     value: result.issuedDateDisplay },
                  { icon:"📋", label:"Mode of Issue",     value: result.modeOfIssue },
                  { icon:"✍️", label:"Signing Authority", value: result.signingAuthority },
                  { icon:"🤝", label:"Recommended By",   value: result.recommendor },
                  { icon:"📄", label:"Physical Copy",    value: result.physicalCopy },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="cert-field" style={{ background:"#f7fdf9", border:"1.5px solid #e8f5e9", borderRadius:14, padding:"11px 13px", transition:"background 0.18s", cursor:"default" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:3 }}>
                      <span style={{ fontSize:10, fontWeight:700, letterSpacing:"0.09em", textTransform:"uppercase", color:"#74b69a" }}>{label}</span>
                    </div>
                    <div style={{ fontWeight:700, color:"#1b4332", fontSize:13.5 }}>{value}</div>
                  </div>
                ))}
              </div>

           
            </div>

            {/* Bottom band */}
            <div style={{ background:"linear-gradient(90deg,#1b4332,#2d6a4f,#40916c)", padding:"9px 2rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
              <span style={{ color:"#95d5b2", fontSize:11, fontWeight:600, letterSpacing:"0.07em" }}>🔒 Digitally Authenticated · {result.certificateId}</span>
              <span style={{ color:"rgba(149,213,178,0.7)", fontSize:11 }}>Issued on {result.issuedDateDisplay}</span>
            </div>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!result && !loading && (
        <div style={{ textAlign:"center", padding:"3rem 1.5rem 5rem", color:"#95d5b2" }}>
          <div style={{ fontSize:52, marginBottom:12 }}>🏅</div>
          <p style={{ fontSize:14, color:"#74b69a" }}>Enter your Certificate ID above to view and verify your official certificate.</p>
        </div>
      )}
    </div>
  );
}