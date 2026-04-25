import { useState, useEffect } from "react";

/* ── SVG Decorations ── */
const LeafSVG = ({ style = {} }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M30 5C30 5 8 18 8 36C8 47.046 18.058 56 30 56C41.942 56 52 47.046 52 36C52 18 30 5 30 5Z" fill="#2d6a4f" opacity="0.18"/>
    <path d="M30 5C30 5 8 18 8 36C8 47.046 18.058 56 30 56" stroke="#52b788" strokeWidth="1.5" fill="none"/>
    <line x1="30" y1="56" x2="30" y2="20" stroke="#52b788" strokeWidth="1.2"/>
    <line x1="30" y1="38" x2="20" y2="28" stroke="#52b788" strokeWidth="0.8"/>
    <line x1="30" y1="44" x2="40" y2="34" stroke="#52b788" strokeWidth="0.8"/>
    <line x1="30" y1="32" x2="22" y2="24" stroke="#52b788" strokeWidth="0.8"/>
  </svg>
);

const CircleRingSVG = ({ style = {} }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <circle cx="60" cy="60" r="55" stroke="#52b788" strokeWidth="1" strokeDasharray="5 5" opacity="0.3"/>
    <circle cx="60" cy="60" r="35" stroke="#2d6a4f" strokeWidth="0.7" opacity="0.2"/>
    <circle cx="60" cy="60" r="7" fill="#52b788" opacity="0.3"/>
  </svg>
);

const DotGridSVG = ({ style = {} }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    {[0,1,2,3].map(row => [0,1,2,3].map(col => (
      <circle key={`${row}-${col}`} cx={10+col*20} cy={10+row*20} r="2" fill="#52b788" opacity={0.15+(row+col)*0.04}/>
    )))}
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width:"100%", display:"block", marginTop:"-2px" }}>
    <path d="M0,55 C300,10 600,85 900,45 C1100,18 1320,60 1440,40 L1440,90 L0,90 Z" fill="#f0faf4"/>
  </svg>
);

const CornerArcSVG = ({ style = {} }) => (
  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M0 140 Q70 0 140 0" stroke="#52b788" strokeWidth="1.2" fill="none" opacity="0.2"/>
    <path d="M0 110 Q55 20 110 0" stroke="#95d5b2" strokeWidth="0.7" fill="none" opacity="0.15"/>
  </svg>
);

const PlusSVG = ({ style = {} }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <line x1="12" y1="2" x2="12" y2="22" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
    <line x1="2" y1="12" x2="22" y2="12" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const ChevronDown = ({ open, color = "#52b788" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.25s", flexShrink:0 }}>
    <path d="M3 6L8 11L13 6" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Concerns ── */
const concerns = [
  { icon:"🌱", label:"General Inquiry",            desc:"Questions about our mission" },
  { icon:"🤝", label:"Volunteering",               desc:"Join our volunteer program" },
  { icon:"💚", label:"Donations & Funding",        desc:"Contribute to our cause" },
  { icon:"🌳", label:"Tree Plantation Drive",      desc:"Organize or join a drive" },
  { icon:"📢", label:"Partnership & Collaboration",desc:"Work with us" },
  { icon:"📰", label:"Media & Press",              desc:"Press inquiries & coverage" },
  { icon:"💼", label:"Careers",                    desc:"Job & internship opportunities" },
  { icon:"🆘", label:"Report an Issue",            desc:"Feedback or complaints" },
];

/* ── Inline dropdown (no absolute → no overflow clip issues) ── */
function CustomDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const selected = concerns.find(c => c.label === value);

  return (
    <div>
      <button type="button" onClick={() => setOpen(o => !o)}
        style={{
          width:"100%", padding:"13px 16px",
          borderRadius: open ? "12px 12px 0 0" : 12,
          fontFamily:"Sora, sans-serif",
          border: open ? "1.5px solid #52b788" : "1.5px solid #c8e6c9",
          borderBottom: open ? "1.5px solid #e8f5e9" : "1.5px solid #c8e6c9",
          background:"#f6fbf8", fontSize:15, textAlign:"left", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"space-between", gap:10,
          transition:"border 0.2s",
        }}>
        <span style={{ display:"flex", alignItems:"center", gap:10 }}>
          {selected
            ? <><span style={{ fontSize:18 }}>{selected.icon}</span><span style={{ color:"#1b4332", fontWeight:500, fontFamily:"Sora, sans-serif" }}>{selected.label}</span></>
            : <span style={{ color:"#a8d5be", fontFamily:"Sora, sans-serif" }}>Select a subject / concern…</span>
          }
        </span>
        <ChevronDown open={open} />
      </button>

      {/* Inline list — grows in flow, no clipping */}
      {open && (
        <div style={{
          border:"1.5px solid #52b788", borderTop:"none",
          borderRadius:"0 0 12px 12px", background:"white",
          animation:"dropIn 0.18s ease",
        }}>
          {concerns.map((c, i) => (
            <button key={c.label} type="button"
              onClick={() => { onChange(c.label); setOpen(false); }}
              style={{
                width:"100%", padding:"11px 16px", border:"none",
                fontFamily:"Sora, sans-serif",
                background: value === c.label ? "#f0faf4" : "white",
                cursor:"pointer", display:"flex", alignItems:"center", gap:12, textAlign:"left",
                borderBottom: i < concerns.length-1 ? "1px solid #f0faf4" : "none",
                transition:"background 0.15s",
              }}
              onMouseEnter={e => e.currentTarget.style.background="#f6fbf8"}
              onMouseLeave={e => e.currentTarget.style.background = value===c.label ? "#f0faf4" : "white"}>
              <span style={{ fontSize:20, flexShrink:0 }}>{c.icon}</span>
              <span>
                <div style={{ color:"#1b4332", fontSize:14, fontWeight:600 }}>{c.label}</div>
                <div style={{ color:"#74b69a", fontSize:12, marginTop:1 }}>{c.desc}</div>
              </span>
              {value === c.label && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft:"auto" }}>
                  <path d="M3 8.5L6.5 12L13 5" stroke="#2d6a4f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Info Card ── */
function InfoCard({ icon, title, value, sub }) {
  return (
    <div style={{
      background:"white", borderRadius:14, border:"1.5px solid #c8e6c9",
      padding:"1rem 1.2rem", display:"flex", alignItems:"flex-start", gap:12,
      transition:"transform 0.2s, box-shadow 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 6px 20px rgba(45,106,79,0.1)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform=""; e.currentTarget.style.boxShadow=""; }}>
      <div style={{ width:40, height:40, borderRadius:10, flexShrink:0, background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18 }}>{icon}</div>
      <div>
        <div style={{ color:"#74b69a", fontSize:10, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:2 }}>{title}</div>
        <div style={{ color:"#1b4332", fontSize:13, fontWeight:600, marginBottom:1 }}>{value}</div>
        {sub && <div style={{ color:"#74b69a", fontSize:11 }}>{sub}</div>}
      </div>
    </div>
  );
}

/* ── Social Button ── */
function SocialBtn({ icon, label, color }) {
  return (
    <a href="#" style={{
      display:"flex", alignItems:"center", gap:9, padding:"9px 16px", borderRadius:30,
      border:`1.5px solid ${color}22`, background:`${color}0d`, color,
      fontSize:13, fontWeight:600, fontFamily:"Sora, sans-serif",
      textDecoration:"none", transition:"all 0.18s",
    }}
      onMouseEnter={e => { e.currentTarget.style.background=`${color}1a`; e.currentTarget.style.transform="scale(1.03)"; }}
      onMouseLeave={e => { e.currentTarget.style.background=`${color}0d`; e.currentTarget.style.transform=""; }}>
      <span style={{ fontSize:16 }}>{icon}</span>{label}
    </a>
  );
}

/* ── Collapsible (mobile only) ── */
function Collapsible({ title, defaultOpen=false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ background:"white", borderRadius:16, border:"1.5px solid #c8e6c9", overflow:"hidden" }}>
      <button type="button" onClick={() => setOpen(o => !o)}
        style={{
          width:"100%", padding:"14px 18px",
          background:"linear-gradient(90deg,#f0faf4,#e8f5e9)",
          border:"none", display:"flex", alignItems:"center", justifyContent:"space-between",
          cursor:"pointer", fontFamily:"Sora, sans-serif",
        }}>
        <span style={{ color:"#1b4332", fontSize:14, fontWeight:700 }}>{title}</span>
        <ChevronDown open={open} />
      </button>
      {open && <div style={{ padding:"1rem 1.2rem 1.2rem", display:"flex", flexDirection:"column", gap:10 }}>{children}</div>}
    </div>
  );
}

/* ── Main ── */
export const ContactUs = () => {
  const [form, setForm] = useState({ name:"", phone:"", email:"", subject:"", message:"" });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const inp = (name) => ({
    width:"100%", padding:"13px 16px", borderRadius:12, fontFamily:"Sora, sans-serif",
    border: focused===name ? "1.5px solid #52b788" : "1.5px solid #c8e6c9",
    background:"#f6fbf8", color:"#1b4332", fontSize:15, outline:"none",
    transition:"border 0.2s", boxSizing:"border-box",
  });

  const lbl = {
    fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase",
    color:"#2d6a4f", marginBottom:7, display:"block",
  };

  if (submitted) return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(150deg,#1b4332,#2d6a4f,#40916c)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"Sora, sans-serif", padding:"2rem" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');`}</style>
      <div style={{ background:"white", borderRadius:24, padding:"3rem 2.5rem", maxWidth:460, width:"100%", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <CircleRingSVG style={{ position:"absolute", top:-30, right:-30, width:110, opacity:0.25 }} />
        <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#1b4332)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.5rem" }}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M7 18L13 24L27 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 style={{ color:"#1b4332", fontSize:24, fontWeight:800, margin:"0 0 0.75rem" }}>Message Received! 🌿</h2>
        <p style={{ color:"#52796f", fontSize:15, lineHeight:1.75, margin:"0 0 2rem" }}>
          Thank you, <strong>{form.name}</strong>! We've received your message about <em>{form.subject||"your concern"}</em>. We'll reply within 24–48 hours.
        </p>
        <button onClick={() => { setSubmitted(false); setForm({ name:"", phone:"", email:"", subject:"", message:"" }); }}
          style={{ background:"linear-gradient(90deg,#2d6a4f,#52b788)", color:"white", border:"none", borderRadius:30, padding:"12px 32px", fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:"Sora, sans-serif" }}>
          Send Another Message
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily:"Sora, sans-serif", background:"#f0faf4", minHeight:"100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color:#a8d5be; font-family:Sora,sans-serif; }
        @keyframes dropIn { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeUp  { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .submit-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(52,183,120,0.35) !important; }
        .submit-btn:active { transform:translateY(0); }
      `}</style>

      {/* HERO */}
      <div style={{ background:"linear-gradient(145deg,#1b4332 0%,#2d6a4f 55%,#40916c 100%)", position:"relative", overflow:"hidden" }}>
        <LeafSVG style={{ position:"absolute", top:30, left:28, width:46, opacity:0.8, transform:"rotate(-15deg)" }} />
        <LeafSVG style={{ position:"absolute", top:55, right:80, width:28, opacity:0.55, transform:"rotate(35deg) scaleX(-1)" }} />
        <CircleRingSVG style={{ position:"absolute", bottom:60, left:40, width:90, opacity:0.4 }} />
        <DotGridSVG style={{ position:"absolute", top:20, right:30, width:80, opacity:0.6 }} />
        <PlusSVG style={{ position:"absolute", top:80, right:160, width:28, opacity:0.5 }} />
        <LeafSVG style={{ position:"absolute", bottom:80, right:24, width:30, opacity:0.45, transform:"rotate(70deg)" }} />

        <div style={{ textAlign:"center", padding:"3rem 1.5rem 2rem", position:"relative", zIndex:2 }}>
          <div className="fade-up" style={{ animationDelay:"0.05s", display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:30, padding:"7px 20px", marginBottom:"1.5rem" }}>
            <div style={{ width:7, height:7, borderRadius:"50%", background:"#95d5b2" }} />
            <span style={{ color:"#d8f3dc", fontSize:11, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>We'd Love to Hear From You</span>
          </div>
          <h1 className="fade-up" style={{ animationDelay:"0.15s", color:"white", fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:800, margin:"0 0 1rem", lineHeight:1.15 }}>
            Get in <span style={{ color:"#95d5b2" }}>Touch</span>
          </h1>
          <p className="fade-up" style={{ animationDelay:"0.25s", color:"#b7e4c7", fontSize:"clamp(14px,2vw,16px)", maxWidth:500, margin:"0 auto 2.5rem", lineHeight:1.8 }}>
            Whether you have a question, a suggestion, or just want to say hello — our team is always happy to connect.
          </p>
        
        </div>
        <WaveSVG />
      </div>

      {/* MAIN */}
      <div style={{ maxWidth:1080, margin:"0 auto", padding:"2.5rem 1.25rem 5rem" }}>
        <div style={{ display:"flex", flexWrap:"wrap", gap:28, alignItems:"start" }}>

          {/* SIDEBAR */}
          <div style={{ flex:"1 1 260px", position: isMobile ? "static" : "sticky", top:24, display:"flex", flexDirection:"column", gap:16 }}>

            {isMobile ? (
              /* ── Mobile: collapsible accordions ── */
              <>
                <Collapsible title="📋 Contact Details" defaultOpen={true}>
                  <InfoCard icon="📧" title="Email Us"      value="swastikajankalyanfoundation@gmail.com"    sub="We reply within 24 hours" />
                  <InfoCard icon="📞" title="Call Us"       value="+91 92298 75702"   sub="Mon–Sat, 10am – 6pm IST" />
                  <InfoCard icon="📍" title="Our Office"    value="Ranchi, Jharkhand" sub="India – 834001" />
                  <InfoCard icon="🕐" title="Working Hours" value="Mon – Saturday"    sub="10:00 AM – 6:00 PM IST" />
                </Collapsible>

                <div style={{ borderRadius:20, overflow:"hidden", border:"1.5px solid #c8e6c9", height:160, background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <DotGridSVG style={{ position:"absolute", top:8, left:8, width:60, opacity:0.4 }} />
                  <span style={{ fontSize:32, marginBottom:8 }}>🗺️</span>
                 
                  <span style={{ color:"#52b788", fontSize:11, marginTop:4 }}>View on <span style={{color: '#1b4332'}} >Google Maps</span> →</span>
                </div>
              </>
            ) : (
              /* ── Desktop: static panels ── */
              <>
                <div style={{ background:"white", borderRadius:20, border:"1.5px solid #c8e6c9", padding:"1.5rem", position:"relative", overflow:"hidden" }}>
                  <CornerArcSVG style={{ position:"absolute", top:-10, right:-10, width:90, opacity:0.5 }} />
                  <h3 style={{ color:"#1b4332", fontSize:17, fontWeight:800, margin:"0 0 1.25rem" }}>
                    Contact <span style={{ color:"#40916c" }}>Details</span>
                  </h3>
                  <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                    <InfoCard icon="📧" title="Email Us"      value="swastikajankalyanfoundation@gmail.com"    sub="We reply within 24 hours" />
                    <InfoCard icon="📞" title="Call Us"       value="+91 92298 75702"   sub="Mon–Sat, 10am – 6pm IST" />
                    <InfoCard icon="📍" title="Our Office"    value="1st Floor, Opposite Durga Mandir, Lower Hatia, Near Sunday Market, Hatia, Ranchi, Jharkhand" sub="India – 834001" />
                    <InfoCard icon="🕐" title="Working Hours" value="Mon – Saturday"    sub="10:00 AM – 6:00 PM IST" />
                  </div>
                </div>

              

                <div style={{ borderRadius:20, overflow:"hidden", border:"1.5px solid #c8e6c9", height:160, background:"linear-gradient(135deg,#d8f3dc,#b7e4c7)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative" }}>
                  <DotGridSVG style={{ position:"absolute", top:8, left:8, width:60, opacity:0.4 }} />
                  <span style={{ fontSize:32, marginBottom:8 }}>🗺️</span>
                  <span style={{ color:"#1b4332", fontSize:13, fontWeight:600 }}>Ranchi, Jharkhand</span>
                  <span style={{ color:"#52b788", fontSize:11, marginTop:4 }}>View on Google Maps →</span>
                </div>
              </>
            )}
          </div>

          {/* FORM */}
          <div style={{ flex:"2 1 320px", background:"white", borderRadius:24, border:"1.5px solid #c8e6c9" }}>
            {/* Header */}
            <div style={{ background:"linear-gradient(90deg,#f0faf4,#e8f5e9)", padding:"1.4rem 2rem", borderBottom:"1.5px solid #c8e6c9", display:"flex", alignItems:"center", gap:12, position:"relative", overflow:"hidden", borderRadius:"22px 22px 0 0" }}>
              <PlusSVG style={{ position:"absolute", right:20, bottom:-5, width:32, opacity:0.4 }} />
              <div style={{ width:40, height:40, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#2d6a4f)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 4h16v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4z" stroke="white" strokeWidth="1.5"/><path d="M2 4l8 7 8-7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <div>
                <div style={{ color:"#74b69a", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" }}>Contact Form</div>
                <div style={{ color:"#1b4332", fontSize:15, fontWeight:700 }}>Send us a message</div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              style={{ padding:"2rem", display:"flex", flexDirection:"column", gap:18 }}>

              {/* Name + Phone */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:16 }}>
                <div style={{ flex:"1 1 160px" }}>
                  <label style={lbl}>Full Name *</label>
                  <input required name="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    placeholder="Arjun Sharma" style={inp("name")} />
                </div>
                <div style={{ flex:"1 1 160px" }}>
                  <label style={lbl}>Phone Number</label>
                  <div style={{ display:"flex", gap:8 }}>
                    <div style={{ background:"#f0faf4", border:"1.5px solid #c8e6c9", borderRadius:12, padding:"13px 14px", color:"#2d6a4f", fontWeight:700, fontSize:14, whiteSpace:"nowrap" }}>+91</div>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                      placeholder="98765 43210" style={{ ...inp("phone"), flex:1 }} />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={lbl}>Email Address *</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                  placeholder="arjun@email.com" style={inp("email")} />
              </div>

              {/* Subject dropdown */}
              <div>
                <label style={lbl}>Subject / Concern *</label>
                <CustomDropdown value={form.subject} onChange={val => setForm(f => ({ ...f, subject:val }))} />
              </div>

              {/* Message */}
              <div>
                <label style={lbl}>Your Message *</label>
                <textarea required name="message" value={form.message} onChange={handleChange}
                  onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                  placeholder="Tell us how we can help you. The more detail you share, the better we can assist…"
                  rows={5} style={{ ...inp("message"), resize:"vertical", lineHeight:1.7 }} />
              </div>

              {/* Notice */}
              <div style={{ display:"flex", alignItems:"center", gap:10, background:"#f0faf4", borderRadius:12, padding:"12px 16px", border:"1px solid #c8e6c9" }}>
                <span style={{ fontSize:18 }}>⚡</span>
                <span style={{ color:"#2d6a4f", fontSize:13, lineHeight:1.5 }}>
                  We typically respond within <strong>24–48 hours</strong>. For urgent matters, please call us directly.
                </span>
              </div>

              {/* Submit */}
              <button type="submit" className="submit-btn"
                style={{
                  width:"100%", padding:"15px", borderRadius:14, border:"none",
                  background:"linear-gradient(90deg,#1b4332 0%,#2d6a4f 50%,#40916c 100%)",
                  color:"white", fontSize:16, fontWeight:700, cursor:"pointer",
                  fontFamily:"Sora, sans-serif", letterSpacing:"0.02em",
                  display:"flex", alignItems:"center", justifyContent:"center", gap:10,
                  transition:"all 0.2s",
                }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 10L18 2L12 18L10 11L2 10Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
                Send Message
              </button>

              <p style={{ textAlign:"center", color:"#a8d5be", fontSize:12, margin:0 }}>
                Your information is kept confidential and never shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}