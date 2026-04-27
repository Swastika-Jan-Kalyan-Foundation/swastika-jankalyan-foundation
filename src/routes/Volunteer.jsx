import { useState } from "react";

const teams = [
  "Content Writing Team",
  "Graphics Designing & Photography Team",
  "Social Media Team",
  "PR & Marketing Team",
  "Human Resources Team",
  "Operations Team",
  "Research & Planning Team",
];

const qualifications = [
  "High School (10th)",
  "Higher Secondary (12th)",
  "Undergraduate (pursuing)",
  "Graduate (B.A / B.Sc / B.Com / B.Tech etc.)",
  "Postgraduate (M.A / M.Sc / MBA etc.)",
  "PhD / Doctorate",
  "Other",
];

const careerStatuses = ["Student", "Job", "Drop Year", "Other"];

const LeafSVG = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M30 5C30 5 8 18 8 36C8 47.046 18.058 56 30 56C41.942 56 52 47.046 52 36C52 18 30 5 30 5Z" fill="#2d6a4f" opacity="0.18"/>
    <path d="M30 5C30 5 8 18 8 36C8 47.046 18.058 56 30 56" stroke="#52b788" strokeWidth="1.5" fill="none"/>
    <line x1="30" y1="56" x2="30" y2="20" stroke="#52b788" strokeWidth="1.2"/>
    <line x1="30" y1="38" x2="20" y2="28" stroke="#52b788" strokeWidth="0.8"/>
    <line x1="30" y1="44" x2="40" y2="34" stroke="#52b788" strokeWidth="0.8"/>
    <line x1="30" y1="32" x2="22" y2="24" stroke="#52b788" strokeWidth="0.8"/>
  </svg>
);

const CircleDotSVG = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="40" cy="40" r="36" stroke="#52b788" strokeWidth="1" strokeDasharray="4 4" opacity="0.35"/>
    <circle cx="40" cy="40" r="20" stroke="#2d6a4f" strokeWidth="0.8" opacity="0.25"/>
    <circle cx="40" cy="40" r="5" fill="#52b788" opacity="0.45"/>
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",display:"block",marginTop:"-2px"}}>
    <path d="M0,60 C360,0 720,90 1080,40 C1260,15 1380,55 1440,45 L1440,90 L0,90 Z" fill="#f0faf4"/>
  </svg>
);

const StarDotSVG = ({ style = {} }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 36, height: 36, ...style }}>
    <circle cx="20" cy="20" r="3" fill="#52b788" opacity="0.7"/>
    <line x1="20" y1="2" x2="20" y2="10" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
    <line x1="20" y1="30" x2="20" y2="38" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
    <line x1="2" y1="20" x2="10" y2="20" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
    <line x1="30" y1="20" x2="38" y2="20" stroke="#52b788" strokeWidth="1.5" opacity="0.5"/>
  </svg>
);

const CornerArcSVG = ({ style = {} }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 120, ...style }}>
    <path d="M0 120 Q60 0 120 0" stroke="#52b788" strokeWidth="1" fill="none" opacity="0.22"/>
    <path d="M0 100 Q50 20 100 0" stroke="#2d6a4f" strokeWidth="0.7" fill="none" opacity="0.16"/>
  </svg>
);

const FloatingLeaves = () => (
  <>
    <LeafSVG style={{ position:"absolute", top:38, left:32, width:44, opacity:0.85, transform:"rotate(-18deg)" }} />
    <LeafSVG style={{ position:"absolute", top:60, right:90, width:30, opacity:0.6, transform:"rotate(30deg)" }} />
    <CircleDotSVG style={{ position:"absolute", bottom:110, left:60, width:80, opacity:0.55 }} />
    <StarDotSVG style={{ position:"absolute", top:90, right:44, opacity:0.7 }} />
    <LeafSVG style={{ position:"absolute", bottom:140, right:28, width:26, opacity:0.5, transform:"rotate(60deg) scaleX(-1)" }} />
    <CornerArcSVG style={{ position:"absolute", bottom:80, left:0, opacity:0.6 }} />
  </>
);

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{flexShrink:0}}>
    <circle cx="9" cy="9" r="9" fill="#52b788" opacity="0.18"/>
    <path d="M5 9.5L7.5 12L13 6.5" stroke="#1b4332" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Volunteer = () => {
  const [form, setForm] = useState({
    name: "", gender: "", dob: "", phone: "", email: "", address: "",
    instagram: "", qualification: "", career: "", skills: "",
    teams: [], leader: "", experience: "", why: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [applicantID, setApplicantID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const toggleTeam = (team) => {
    setForm(f => ({
      ...f,
      teams: f.teams.includes(team) ? f.teams.filter(t => t !== team) : [...f.teams, team]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const payload = {
      name: form.name,
      gender: form.gender,
      dateOfBirth: form.dob,
      phoneNumber: form.phone,
      email: form.email,
      address: form.address,
      instagramId: form.instagram,
      highestEducationalQualification: form.qualification,
      currentCareerStatus: form.career,
      skillsAndInterest: form.skills,
      interestedTeams: form.teams,
      leadershipPreference: form.leader,
      previousVolunteerExperience: form.experience,
      whyJoinUs: form.why,
    };
  
    try {
      const res = await fetch("https://sjkf-backend-api.vercel.app/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const data = await res.json();
      setSubmitted(true)
      setIsLoading(false);
      console.log("Your Applicant ID:", data.data.applicantId);
      setApplicantID(data.data.applicantId)
  
      if (!res.ok) throw new Error(data.message);
  
      console.log("Success:", data);
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };

  const inputBase = (name) => ({
    width: "100%",
    padding: "11px 14px",
    borderRadius: 10,
    border: focused === name ? "1.5px solid #52b788" : "1.5px solid #c8e6c9",
    background: "#f6fbf8",
    color: "#1b4332",
    fontSize: 15,
    fontFamily: "Sora, sans-serif",
    outline: "none",
    transition: "border 0.2s",
    boxSizing: "border-box",
  });

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(150deg,#0d2b1e 0%,#1b4332 40%,#2d6a4f 75%,#40916c 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Sora, sans-serif", padding: "2.5rem" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
          @keyframes cardIn { from { opacity: 0; transform: translateY(32px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
          @keyframes popIn { from { opacity: 0; transform: scale(0.4); } to { opacity: 1; transform: scale(1); } }
          @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
          .conf-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 10px 28px rgba(45,106,79,0.45) !important; }
          .conf-btn:active { transform: scale(0.97) !important; }
        `}</style>
  
        <div style={{ background: "#fff", borderRadius: 28, padding: "3.5rem 2.5rem 2.5rem", maxWidth: 460, width: "100%", textAlign: "center", position: "relative", overflow: "hidden", animation: "cardIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
          
          {/* Decorative blobs */}
          <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(82,183,136,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -40, left: -40, width: 140, height: 140, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,106,79,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          
          {/* Leaf decoration */}
          <svg style={{ position: "absolute", top: 18, right: 22, opacity: 0.18 }} width="90" height="90" viewBox="0 0 90 90" fill="none">
            <ellipse cx="55" cy="35" rx="32" ry="20" fill="#2d6a4f" transform="rotate(-30 55 35)" />
            <line x1="55" y1="55" x2="30" y2="80" stroke="#2d6a4f" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
  
          {/* Check circle */}
          <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(145deg,#52b788,#1b4332)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.75rem", boxShadow: "0 12px 32px rgba(45,106,79,0.35), 0 0 0 8px rgba(82,183,136,0.12)", animation: "popIn 0.5s 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <path d="M9 20L16 27L29 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
  
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1b4332", margin: "0 0 0.5rem", letterSpacing: "-0.5px", animation: "fadeUp 0.5s 0.5s both" }}>You're In! 🌱</h2>
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 15, color: "#52b788", fontWeight: 400, letterSpacing: "0.5px", margin: "0 0 1.25rem", animation: "fadeUp 0.5s 0.6s both" }}>Application Received</p>
  
          <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: 14.5, color: "#4a7c63", lineHeight: 1.75, margin: "0 0 1.5rem", animation: "fadeUp 0.5s 0.7s both" }}>
            Thank you, <strong style={{ color: "#1b4332", fontWeight: 600 }}>{form.name}</strong>! Your volunteer application has been received.<br />
            Our team will reach out to you soon.
          </p>
  
          {/* ID Box */}
          <div style={{ background: "linear-gradient(135deg,#f0faf5,#e8f5ee)", border: "1.5px solid rgba(82,183,136,0.3)", borderRadius: 14, padding: "14px 20px", margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: 4, animation: "fadeUp 0.5s 0.8s both" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#52b788", textTransform: "uppercase" }}> Your Application ID</span>
            <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 600, color: "#1b4332", letterSpacing: "0.5px", wordBreak: "break-all" }}>{applicantID}</span>
          </div>
  
          <button
            className="conf-btn"
            onClick={() => { setSubmitted(false); setForm({ name:"",gender:"",dob:"",phone:"",email:"",address:"",instagram:"",qualification:"",career:"",skills:"",teams:[],leader:"",experience:"",why:"" }); }}
            style={{ background: "linear-gradient(135deg,#2d6a4f,#40916c)", color: "white", border: "none", borderRadius: 30, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Sora, sans-serif", letterSpacing: "0.3px", transition: "all 0.2s", boxShadow: "0 6px 20px rgba(45,106,79,0.35)", display: "inline-flex", alignItems: "center", gap: 8, animation: "fadeUp 0.5s 0.9s both" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Submit Another Application
          </button>
  
          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "1.75rem", animation: "fadeUp 0.5s 1s both" }}>
            <div style={{ width: 6, height: 6, borderRadius: 3, background: "#b7e4c7" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b7e4c7" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b7e4c7" }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Sora, sans-serif", background: "#f0faf4", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::placeholder { color: #a8d5be; font-family: Sora, sans-serif; }
        select option { color: #1b4332; background: white; }
        .team-chip:hover { background: #d8f3dc !important; border-color: #52b788 !important; }
        .submit-btn:not(:disabled):hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(52,183,120,0.35); }
        .submit-btn:not(:disabled):active { transform: translateY(0); }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        textarea:focus, input:focus, select:focus { outline: none; }
        .stat-card { transition: transform 0.2s; }
        .stat-card:hover { transform: translateY(-3px); }

        /* --- RESPONSIVE GRID --- */
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 32px;
          align-items: start;
        }
        .sidebar {
          position: sticky;
          top: 20px;
        }

        /* Two-col form rows */
        .two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        /* Leader buttons row */
        .leader-row {
          display: flex;
          gap: 10px;
          flex-wrap: nowrap;
        }

        /* Sidebar info toggle (mobile only) */
        .sidebar-toggle {
          display: none;
        }
        .sidebar-collapsible {
          display: block;
        }

        /* ---- MOBILE breakpoint ---- */
        @media (max-width: 700px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .sidebar {
            position: static !important;
            margin-bottom: 0;
          }

          /* Collapsible sidebar on mobile */
          .sidebar-toggle {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            background: white;
            border: 1.5px solid #c8e6c9;
            border-radius: 16px;
            padding: 14px 18px;
            margin-bottom: 12px;
            cursor: pointer;
            font-family: Sora, sans-serif;
            font-size: 14px;
            font-weight: 700;
            color: #1b4332;
          }
          .sidebar-collapsible {
            display: none;
            animation: slideDown 0.25s ease forwards;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .sidebar-collapsible.open {
            display: block;
          }

          /* Stack two-col to single col */
          .two-col {
            grid-template-columns: 1fr !important;
          }

          /* Leader buttons stack */
          .leader-row {
            flex-direction: column;
            gap: 8px;
          }
          .leader-btn {
            flex: none !important;
            width: 100%;
          }

          /* Form padding tighter */
          .form-body {
            padding: 1.25rem !important;
          }
          .form-header {
            padding: 1rem 1.25rem !important;
          }

          /* Stats row wraps nicely */
          .stats-row {
            gap: 16px !important;
            padding-bottom: 2rem !important;
          }
          .stat-card {
            min-width: 90px;
          }
        }

        /* Tablet */
        @media (min-width: 701px) and (max-width: 900px) {
          .main-grid {
            grid-template-columns: 1fr 1.5fr !important;
            gap: 20px !important;
          }
        
        }
      `}</style>

      {/* HERO */}
      <div style={{ background: "linear-gradient(150deg,#1b4332 0%,#2d6a4f 55%,#40916c 100%)", position: "relative", overflow: "hidden", paddingBottom: 0 }}>
        <FloatingLeaves />

        <div style={{ display: "flex", justifyContent: "center", paddingTop: "2.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 30, padding: "7px 18px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#95d5b2" }} />
            <span style={{ color: "#d8f3dc", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Join Our Mission</span>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "2.5rem 1.5rem 1.5rem", position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "white", fontSize: "clamp(1.8rem, 5vw, 3.4rem)", fontWeight: 800, margin: "0 0 0.5rem", lineHeight: 1.15 }}>
            Become a <span style={{ color: "#95d5b2" }}>Volunteer</span>
          </h1>
          <p style={{ color: "#b7e4c7", fontSize: "clamp(13px,2vw,16px)", maxWidth: 520, margin: "0 auto 2.5rem", lineHeight: 1.75 }}>
            Join a community of passionate changemakers. Your time and talent can help us plant seeds of hope across forests, schools, and communities.
          </p>

          <div className="stats-row" style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,4vw,56px)", flexWrap: "wrap", paddingBottom: "2.5rem" }}>
            {[["₹8.6M+","Total Raised"],["12,000+","Lives Impacted"],["5,000+","Trees Planted"],["200+","Active Volunteers"]].map(([val,label]) => (
              <div key={label} className="stat-card" style={{ textAlign: "center" }}>
                <div style={{ color: "#95d5b2", fontSize: "clamp(1.3rem,3vw,2rem)", fontWeight: 800 }}>{val}</div>
                <div style={{ color: "#b7e4c7", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 3 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <WaveSVG />
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem 5rem" }}>
        <div className="main-grid">

          {/* LEFT SIDEBAR */}
          <div className="sidebar">

            {/* Mobile toggle button */}
            <button
              className="sidebar-toggle"
              onClick={() => setSidebarOpen(o => !o)}
              aria-expanded={sidebarOpen}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" fill="#d8f3dc" stroke="#52b788" strokeWidth="1.2"/>
      <path d="M10 3.5 C10 3.5 5 7 5 11.5 C5 14.3 7.2 16.5 10 16.5 C12.8 16.5 15 14.3 15 11.5 C15 7 10 3.5 10 3.5Z"
        fill="#52b788" opacity="0.25"/>
      <path d="M10 3.5 C10 3.5 5 7 5 11.5 C5 14.3 7.2 16.5 10 16.5"
        stroke="#2d6a4f" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
      <line x1="10" y1="16.5" x2="10" y2="7" stroke="#2d6a4f" strokeWidth="1" strokeLinecap="round"/>
      <line x1="10" y1="12" x2="7.5" y2="9.5" stroke="#2d6a4f" strokeWidth="0.8" strokeLinecap="round"/>
      <line x1="10" y1="13.5" x2="12.5" y2="11" stroke="#2d6a4f" strokeWidth="0.8" strokeLinecap="round"/>
    </svg>
              <span> Why Volunteer With Us?</span>
              <span style={{ fontSize: 18, transition: "transform 0.2s", display: "inline-block", transform: sidebarOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>

            {/* Collapsible content on mobile, always visible on desktop */}
            <div className={`sidebar-collapsible ${sidebarOpen ? "open" : ""}`}>
              {/* Why Volunteer card */}
              <div style={{ background: "white", borderRadius: 20, padding: "1.75rem 1.5rem", border: "1.5px solid #c8e6c9", marginBottom: 16, position: "relative", overflow: "hidden" }}>
                <CornerArcSVG style={{ position: "absolute", top: -20, right: -20, width: 100, opacity: 0.3 }} />
                <h3 style={{ color: "#1b4332", fontSize: 18, fontWeight: 800, margin: "0 0 0.5rem" }}>Why Volunteer<br/><span style={{ color: "#40916c" }}>With Us?</span></h3>
                <p style={{ color: "#52796f", fontSize: 13, lineHeight: 1.7, margin: "0 0 1.25rem" }}>
                  We operate with zero overhead on donations below ₹10,000. Every hour you give is tracked, celebrated, and makes a real difference.
                </p>
                {[
                  "Flexible remote & on-ground roles",
                  "Certificate & letter of recommendation",
                  "Leadership & mentorship opportunities",
                  "Be part of 7 specialized teams",
                  "Monthly volunteer spotlights",
                ].map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
                    <CheckCircle />
                    <span style={{ color: "#2d6a4f", fontSize: 13, lineHeight: 1.5 }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Teams preview */}
              <div style={{ background: "linear-gradient(135deg,#1b4332,#2d6a4f)", borderRadius: 20, padding: "1.5rem", position: "relative", overflow: "hidden" }}>
                <CircleDotSVG style={{ position: "absolute", bottom: -20, right: -20, width: 90, opacity: 0.25 }} />
                <h4 style={{ color: "#95d5b2", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 1rem" }}>Our Teams</h4>
                {teams.map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#52b788", flexShrink: 0 }} />
                    <span style={{ color: "#d8f3dc", fontSize: 12.5, lineHeight: 1.4 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div style={{ background: "white", borderRadius: 24, border: "1.5px solid #c8e6c9", overflow: "hidden", minWidth: 0 }}>
            {/* Form header */}
            <div className="form-header" style={{ background: "linear-gradient(90deg,#f0faf4,#e8f5e9)", padding: "1.5rem 2rem", borderBottom: "1.5px solid #c8e6c9", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#52b788,#2d6a4f)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <LeafSVG style={{ width: 20 }} />
              </div>
              <div>
                <div style={{ color: "#9cad9c", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Volunteer Application Form</div>
                <div style={{ color: "#1b4332", fontSize: 16, fontWeight: 700 }}>Tell us about yourself</div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="form-body" style={{ padding: "2rem" }}>

              {/* Section: Personal Info */}
              <SectionTitle icon="🌿" title="Personal Information" />

              <div className="two-col">
                <Field label="Full Name *">
                  <input required name="name" value={form.name} onChange={handleChange}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    placeholder="Arjun Sharma" style={inputBase("name")} />
                </Field>
                <Field label="Gender *">
                  <select required name="gender" value={form.gender} onChange={handleChange}
                    onFocus={() => setFocused("gender")} onBlur={() => setFocused("")}
                    style={{ ...inputBase("gender"), cursor: "pointer" }}>
                    <option value="">Select gender</option>
                    <option>Male</option><option>Female</option><option>Non-binary</option><option>Prefer not to say</option>
                  </select>
                </Field>
              </div>

              <div className="two-col">
                <Field label="Date of Birth *">
                  <input required type="date" name="dob" value={form.dob} onChange={handleChange}
                    onFocus={() => setFocused("dob")} onBlur={() => setFocused("")}
                    style={inputBase("dob")} />
                </Field>
                <Field label="Phone Number *">
                  <div style={{ display: "flex", gap: 8 }}>
                    <div style={{ background: "#f0faf4", border: "1.5px solid #c8e6c9", borderRadius: 10, padding: "11px 13px", color: "#2d6a4f", fontWeight: 600, fontSize: 14, whiteSpace: "nowrap" }}>+91</div>
                    <input required name="phone" value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                      placeholder="98765 43210" style={{ ...inputBase("phone"), flex: 1 }} />
                  </div>
                </Field>
              </div>

              <div className="two-col">
                <Field label="Email Address *">
                  <input required type="email" name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                    placeholder="arjun@email.com" style={inputBase("email")} />
                </Field>
                <Field label="Instagram ID">
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", color: "#52b788", fontSize: 14, fontWeight: 600 }}>@</span>
                    <input name="instagram" value={form.instagram} onChange={handleChange}
                      onFocus={() => setFocused("instagram")} onBlur={() => setFocused("")}
                      placeholder="yourhandle" style={{ ...inputBase("instagram"), paddingLeft: 28 }} />
                  </div>
                </Field>
              </div>

              <Field label="Address" style={{ marginBottom: 16 }}>
                <textarea name="address" value={form.address} onChange={handleChange}
                  onFocus={() => setFocused("address")} onBlur={() => setFocused("")}
                  placeholder="Your full address..." rows={2}
                  style={{ ...inputBase("address"), resize: "vertical", lineHeight: 1.6 }} />
              </Field>

              <Divider />

              {/* Section: Education & Career */}
              <SectionTitle icon="📚" title="Education & Career" />

              <div className="two-col">
                <Field label="Highest Educational Qualification *">
                  <select required name="qualification" value={form.qualification} onChange={handleChange}
                    onFocus={() => setFocused("qual")} onBlur={() => setFocused("")}
                    style={{ ...inputBase("qual"), cursor: "pointer" }}>
                    <option value="">Select qualification</option>
                    {qualifications.map(q => <option key={q}>{q}</option>)}
                  </select>
                </Field>
                <Field label="Current Career Status *">
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {careerStatuses.map(s => (
                      <button type="button" key={s} onClick={() => setForm(f => ({ ...f, career: s }))}
                        style={{
                          padding: "8px 14px", borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: "pointer",
                          fontFamily: "Sora, sans-serif", transition: "all 0.18s",
                          background: form.career === s ? "#2d6a4f" : "#f0faf4",
                          color: form.career === s ? "white" : "#2d6a4f",
                          border: form.career === s ? "1.5px solid #2d6a4f" : "1.5px solid #c8e6c9",
                        }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <Field label="Skills & Interests *" style={{ marginBottom: 16 }}>
                <textarea required name="skills" value={form.skills} onChange={handleChange}
                  onFocus={() => setFocused("skills")} onBlur={() => setFocused("")}
                  placeholder="e.g. Graphic design, writing, social media, photography, public speaking…" rows={2}
                  style={{ ...inputBase("skills"), resize: "vertical", lineHeight: 1.6 }} />
              </Field>

              <Divider />

              {/* Section: Team Preferences */}
              <SectionTitle icon="🤝" title="Team Preferences" />

              <Field label="Interested Teams (Select all that apply)" style={{ marginBottom: 16 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 4 }}>
                  {teams.map(t => (
                    <button type="button" key={t} className="team-chip" onClick={() => toggleTeam(t)}
                      style={{
                        padding: "8px 14px", borderRadius: 20, fontSize: 12.5, fontWeight: 600,
                        cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "all 0.18s",
                        background: form.teams.includes(t) ? "#d8f3dc" : "#f6fbf8",
                        color: form.teams.includes(t) ? "#1b4332" : "#52796f",
                        border: form.teams.includes(t) ? "1.5px solid #52b788" : "1.5px solid #c8e6c9",
                        display: "flex", alignItems: "center", gap: 6,
                      }}>
                      {form.teams.includes(t) && <span style={{ color: "#2d6a4f", fontSize: 11 }}>✓</span>}
                      {t}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Do you wish to be a Leader or Co-Leader of any Team?" style={{ marginBottom: 16 }}>
                <div className="leader-row">
                  {["Leader", "Co-Leader", "No"].map(opt => (
                    <button type="button" key={opt} className="leader-btn" onClick={() => setForm(f => ({ ...f, leader: opt }))}
                      style={{
                        padding: "9px 16px", borderRadius: 20, fontSize: 12.5, fontWeight: 600,
                        cursor: "pointer", fontFamily: "Sora, sans-serif", transition: "all 0.18s",
                        background: form.leader === opt ? "#2d6a4f" : "#f0faf4",
                        color: form.leader === opt ? "white" : "#2d6a4f",
                        border: form.leader === opt ? "1.5px solid #2d6a4f" : "1.5px solid #c8e6c9",
                        flex: 1,
                        textAlign: "center",
                      }}>
                      {opt}
                    </button>
                  ))}
                </div>
              </Field>

              <Divider />

              {/* Section: About You */}
              <SectionTitle icon="✨" title="About You" />

              <Field label="Previous Volunteer Experience" style={{ marginBottom: 16 }}>
                <textarea name="experience" value={form.experience} onChange={handleChange}
                  onFocus={() => setFocused("exp")} onBlur={() => setFocused("")}
                  placeholder="Tell us about any prior volunteering, NGO work, or community initiatives you've been part of (or write 'None')…"
                  rows={3} style={{ ...inputBase("exp"), resize: "vertical", lineHeight: 1.6 }} />
              </Field>

              <Field label="Why do you want to join us? *" style={{ marginBottom: 24 }}>
                <textarea required name="why" value={form.why} onChange={handleChange}
                  onFocus={() => setFocused("why")} onBlur={() => setFocused("")}
                  placeholder="Share your motivation — what drives you, what you hope to contribute, and what you'd love to gain from this journey…"
                  rows={4} style={{ ...inputBase("why"), resize: "vertical", lineHeight: 1.7 }} />
              </Field>

              {/* Submit */}
              <button type="submit" className="submit-btn" disabled={isLoading}
                style={{
                  width: "100%", padding: "15px", borderRadius: 14, border: "none",
                  background: isLoading
                    ? "linear-gradient(90deg,#2d4a3e 0%,#3a6b54 50%,#4a7a65 100%)"
                    : "linear-gradient(90deg,#1b4332 0%,#2d6a4f 50%,#40916c 100%)",
                  color: "white", fontSize: 16, fontWeight: 700,
                  cursor: isLoading ? "not-allowed" : "pointer",
                  fontFamily: "Sora, sans-serif", letterSpacing: "0.02em",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  transition: "all 0.2s",
                  opacity: isLoading ? 0.85 : 1,
                }}>
                {isLoading ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                      style={{ animation: "spin 0.9s linear infinite", flexShrink: 0 }}>
                      <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5"/>
                      <path d="M10 2a8 8 0 0 1 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    Submitting your application…
                  </>
                ) : (
                  <>
                    <LeafSVG style={{ width: 20, filter: "brightness(3)" }} />
                    Submit My Application
                  </>
                )}
              </button>

              <p style={{ textAlign: "center", color: "#a8d5be", fontSize: 12, marginTop: 14 }}>
                By submitting, you agree to be contacted by our team. Your data is kept confidential.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

function SectionTitle({ icon, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 18 }}>
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span style={{ color: "#1b4332", fontSize: 14, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,#c8e6c9,transparent)" }} />
    </div>
  );
}

function Field({ label, children, style = {} }) {
  return (
    <div style={{ marginBottom: 0, ...style }}>
      <label style={{
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
        color: "#2d6a4f", marginBottom: 7, display: "block"
      }}>{label}</label>
      {children}
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "1.75rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: "#e8f5e9" }} />
      <CircleDotSVG style={{ width: 18, opacity: 0.5 }} />
      <div style={{ flex: 1, height: "1px", background: "#e8f5e9" }} />
    </div>
  );
}

export default Volunteer;