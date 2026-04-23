import { useState } from "react";
import chairman from '../assets/chairman.png'
import director from '../assets/director.png'
import memberdirector from '../assets/memberdirector.png'
import headoffin from '../assets/headoffin.png'
const statutoryDetails = [
    { label: "Organization Name", value: "Swastika Jan Kalyan Foundation", icon: "🏛️" },
    { label: "Registration Number", value: "U88900JH2025NPL025146", icon: "🔖" },
    { label: "Type", value: "Non-Governmental Organization (NGO)", icon: "📋" },
    { label: "Darpan ID (NITI Aayog)", value: "JH/2025/0693291", icon: "📅" },
    { label: "Registered Under", value: "Section 8 of Companies Act, 2013", icon: "⚖️" },
    { label: "PAN Number", value: "AB******4H", icon: "🪪" },
    { label: "12A Registration", value: "ABQC********0251", icon: "📄" },
    { label: "80G Registration", value: "ABQC********0261", icon: "📝" },
    { label: "Tax Deduction Account Number(TAN)", value: "RC*****5E", icon: "💸" },
    { label: "GSTIN", value: "20ABQ******1ZF", icon: "📊" },
];
const pastProjects = [
    {
        year: "2023",
        title: "Green Jharkhand Drive",
        category: "Forestation",
        desc: "Planted 2,500+ native trees across 12 villages in Ranchi district, partnering with local panchayats and schools. Achieved 87% survival rate through community adoption.",
        achievement: "2,500+ Trees Planted",
        color: "#2d6a4f",
        emoji: "🌳",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
    },
    {
        year: "2022",
        title: "Vidya Jyoti Education Camp",
        category: "Education",
        desc: "Conducted free digital literacy workshops for 600+ underprivileged students in tribal areas, providing tablets and internet access through partnerships with tech companies.",
        achievement: "600+ Students Empowered",
        color: "#40916c",
        emoji: "📚",
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
    },
    {
        year: "2022",
        title: "Jal Shakti Water Initiative",
        category: "Environment",
        desc: "Restored 3 natural water bodies and constructed 8 rainwater harvesting systems across drought-prone villages, benefiting over 1,200 families with clean water access.",
        achievement: "1,200+ Families Benefited",
        color: "#52b788",
        emoji: "💧",
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    },
    {
        year: "2021",
        title: "Swasthya Seva Health Drive",
        category: "Healthcare",
        desc: "Organized 15 free medical camps across remote Jharkhand villages, providing check-ups, medicines, and referrals to 3,000+ patients with a team of 40 volunteer doctors.",
        achievement: "3,000+ Patients Served",
        color: "#1b4332",
        emoji: "🏥",
        img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
    },
];

const upcomingProjects = [
    {
        quarter: "Q3 2025",
        title: "Solar Villages Project",
        category: "Clean Energy",
        desc: "Installing solar microgrids in 10 off-grid villages across Khunti district to provide 24/7 clean electricity to 500+ households, reducing dependence on fossil fuels.",
        status: "Funding Phase",
        statusColor: "#f59e0b",
        target: "500 Households",
        emoji: "☀️",
        gradient: "from-amber-50 to-green-50",
        border: "#f59e0b",
    },
    {
        quarter: "Q4 2025",
        title: "Tribal Art & Livelihood Hub",
        category: "Culture & Economy",
        desc: "Creating a dedicated center to preserve Sohrai and Khovar tribal art forms while enabling artisans to sell work globally through e-commerce, ensuring sustainable livelihoods.",
        status: "Planning Phase",
        statusColor: "#3b82f6",
        target: "200+ Artisans",
        emoji: "🎨",
        gradient: "from-blue-50 to-green-50",
        border: "#3b82f6",
    },
    {
        quarter: "Q1 2026",
        title: "Climate Warriors Youth Program",
        category: "Youth & Climate",
        desc: "A 6-month intensive program training 1,000 young changemakers aged 14–24 as certified climate advocates, equipped with skills in data monitoring, activism, and community organizing.",
        status: "Launching Soon",
        statusColor: "#2d6a4f",
        target: "1,000 Youth",
        emoji: "⚡",
        gradient: "from-green-50 to-emerald-50",
        border: "#2d6a4f",
    },
    {
        quarter: "Q2 2026",
        title: "Zero Hunger Kitchen Network",
        category: "Food Security",
        desc: "Establishing 5 community nutrition kitchens across Latehar and Palamu districts to provide daily nutritious meals to malnourished children and elderly, partnering with local SHGs.",
        status: "Proposal Stage",
        statusColor: "#ec4899",
        target: "2,000 Daily Meals",
        emoji: "🍱",
        gradient: "from-pink-50 to-green-50",
        border: "#ec4899",
    },
];

const pillars = [
    {
      icon: "🌱",
      title: "Our Mission",
      shortText:
        "To create sustainable ecological and social change by empowering communities through forestation, education, and inclusive development programs across Jharkhand.",
      fullText: [
        "Swastika Jan Kalyan Foundation was born from a simple but powerful belief — that lasting change begins at the grassroots. Our mission is to create sustainable ecological and social transformation by working directly with the communities that need it most.",
        "We operate at the intersection of three critical areas: environmental restoration, quality education, and inclusive economic development. Whether it's planting native trees that restore biodiversity, running digital literacy camps for tribal youth, or building water harvesting systems in drought-prone villages — every action we take is guided by the principle that people and planet must grow together.",
        "We don't impose solutions from the outside. We listen, collaborate, and co-create with local leaders, panchayats, and community elders to design programs that are rooted in context and built to last. Our mission is not just to help communities survive — it is to help them thrive, with dignity and self-reliance.",
      ],
      accent: "#2d6a4f",
      lightBg: "linear-gradient(135deg, #f0faf4 0%, #e4f5eb 100%)",
      modalBg: "linear-gradient(160deg, #f0faf4, #e0f2e9)",
      border: "rgba(45,106,79,0.15)",
    },
    {
      icon: "🔭",
      title: "Our Vision",
      shortText:
        "A world where ecological balance is restored, every individual has access to quality education, and communities thrive in harmony with nature and each other.",
      fullText: [
        "We envision a Jharkhand — and eventually an India — where the forests are dense, the rivers run clean, the children go to school, and no family goes to bed hungry. A world where ecological balance is not a luxury but a lived reality for every citizen, regardless of their economic status or geography.",
        "Our vision extends beyond just planting trees or running camps. We see a future where the communities we work with become self-sustaining guardians of their own environment — equipped with knowledge, tools, and networks to solve their own challenges without dependency.",
        "By 2030, we aim to have directly impacted 50,000 lives, restored 500 hectares of degraded land, and built a network of 1,000 trained community climate advocates across eastern India. This is not idealism. This is our roadmap.",
      ],
      accent: "#40916c",
      lightBg: "linear-gradient(135deg, #f2fbf6 0%, #dff0e7 100%)",
      modalBg: "linear-gradient(160deg, #f2fbf6, #d8eedf)",
      border: "rgba(64,145,108,0.15)",
    },
    {
      icon: "⭐",
      title: "Our Values",
      shortText:
        "Integrity, inclusivity, sustainability, and compassion — four pillars that guide every initiative, every partnership, and every single decision we make.",
      fullText: [
        "Our values are not words on a wall. They are the principles that shape every conversation we have, every partnership we forge, and every rupee we spend.",
        "Integrity means we are transparent about where funds go, honest about what we can and cannot achieve, and accountable to the communities we serve — not just to our donors. Inclusivity means every program we design actively centres the voices of women, tribal communities, and historically marginalised groups.",
        "Sustainability means we think in decades, not quarters. We choose methods that build local capacity rather than create dependency. A forest planted must be one the community will protect long after we leave. And Compassion means we show up — not as experts dispensing advice, but as fellow human beings who care deeply about the people and the planet we share.",
      ],
      accent: "#1b4332",
      lightBg: "linear-gradient(135deg, #f8fffe 0%, #e0f2e9 100%)",
      modalBg: "linear-gradient(160deg, #f8fffe, #d8efe0)",
      border: "rgba(27,67,50,0.12)",
    },
  ];
   
  
   

export const About = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
 
    const active = activeCard !== null ? pillars[activeCard] : null;

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#f8faf8" }}>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');

        .leaf-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d6a4f' fill-opacity='0.04'%3E%3Cpath d='M30 5 C10 18, 5 35, 15 48 C25 61, 50 58, 53 40 C56 22, 42 8, 30 5Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #2d6a4f;
        }

        .stat-card:hover { transform: translateY(-4px); }
        .project-card:hover { transform: translateY(-6px); }
        .upcoming-card:hover { transform: translateY(-4px); }

        .dropdown-row {
          transition: all 0.2s ease;
        }
        .dropdown-row:hover {
          background: linear-gradient(90deg, #f0faf4 0%, #e8f5ee 100%);
          padding-left: 28px;
        }

        .shimmer-badge {
          background: linear-gradient(90deg, #2d6a4f, #52b788, #2d6a4f);
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer {
          to { background-position: 200% center; }
        }

        .pulse-dot {
          animation: pulse-green 2s infinite;
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown-content {
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
        }
      `}</style>

            {/* ────────────────────────────────────────────────────
          SECTION 1: MESSAGE FROM LEADERSHIP
      ──────────────────────────────────────────────────── */}


            {/* ────────────────────────────────────────────────────
          SECTION 2: WHO WE ARE + PILLARS
      ──────────────────────────────────────────────────── */}
       <section
      style={{
        background: "#ffffff",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
 
        .wwa-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .wwa-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(45,106,79,0.12) !important;
        }
        .readmore-btn {
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .readmore-btn:hover {
          opacity: 0.88;
          transform: translateX(3px);
        }
        .modal-overlay {
          animation: overlayIn 0.22s ease both;
        }
        @keyframes overlayIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .modal-panel {
          animation: panelIn 0.3s cubic-bezier(0.34, 1.25, 0.64, 1) both;
        }
        @keyframes panelIn {
          from { opacity: 0; transform: translateY(28px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .modal-close-btn {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .modal-close-btn:hover {
          background: rgba(45,106,79,0.12) !important;
          transform: rotate(90deg);
        }
      `}</style>
 
      {/* BG pattern */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wwa-diag" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M0 28 L28 0" stroke="#2d6a4f" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wwa-diag)" />
      </svg>
      <div style={{ position: "absolute", top: -100, right: -100, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,106,79,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -80, left: -80, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(82,183,136,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
 
      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", zIndex: 1 }}>
 
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", marginBottom: 18 }}>
          <div style={{ height: 1, width: 52, background: "#2d6a4f", opacity: 0.35 }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2d6a4f" }}>Who We Are</span>
          <div style={{ height: 1, width: 52, background: "#2d6a4f", opacity: 0.35 }} />
        </div>
 
        {/* Heading */}
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(28px, 4.5vw, 42px)", color: "#1a2e1a", textAlign: "center", marginBottom: 18, lineHeight: 1.2 }}>
          Rooted in Purpose,{" "}
          <span style={{ color: "#2d6a4f" }}>Growing with Impact</span>
        </h2>
 
        {/* Intro */}
        <p style={{ color: "#4b5563", fontSize: 15.5, textAlign: "center", maxWidth: 660, margin: "0 auto 14px", lineHeight: 1.85 }}>
          Swastika Jan Kalyan Foundation is a registered NGO based in{" "}
          <strong style={{ color: "#2d6a4f", fontWeight: 600 }}>Ranchi, Jharkhand</strong> — working at the intersection of environment, education, and community development. We are not just an organisation; we are a movement powered by people who believe in the possibility of a better world.
        </p>
        <p style={{ color: "#9ca3af", fontSize: 13.5, textAlign: "center", margin: "0 auto 60px", fontStyle: "italic" }}>
          Click <span style={{ color: "#2d6a4f", fontStyle: "normal", fontWeight: 600 }}>Read More</span> on any card to explore the full story.
        </p>
 
        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="wwa-card" style={{ background: pillar.lightBg, border: `1px solid ${pillar.border}`, borderRadius: 24, padding: "36px 30px 28px", boxShadow: "0 4px 20px rgba(45,106,79,0.07)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: pillar.accent, borderRadius: "24px 24px 0 0" }} />
              <div style={{ position: "absolute", bottom: -14, right: 14, fontFamily: "'Sora', sans-serif", fontWeight: 900, fontSize: 100, color: pillar.accent, opacity: 0.05, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ width: 60, height: 60, borderRadius: 18, background: `${pillar.accent}14`, border: `1px solid ${pillar.accent}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 20 }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#1a2e1a", marginBottom: 12, lineHeight: 1.2 }}>
                {pillar.title}
              </h3>
              <p style={{ color: "#374151", fontSize: 14.5, lineHeight: 1.8, marginBottom: 24, borderLeft: `3px solid ${pillar.accent}50`, paddingLeft: 14, fontStyle: "italic" }}>
                {pillar.shortText}
              </p>
              <button className="readmore-btn" onClick={() => setActiveCard(i)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: pillar.accent, color: "#ffffff", border: "none", borderRadius: 40, fontSize: 13, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", letterSpacing: "0.04em", boxShadow: `0 4px 14px ${pillar.accent}35` }}>
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
 
        {/* Bottom flourish */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginTop: 56 }}>
          <div style={{ height: 1, width: 60, background: "linear-gradient(to right, transparent, rgba(45,106,79,0.3))" }} />
          <span style={{ fontSize: 20 }}>🌿</span>
          <span style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>Swastika Jan Kalyan Foundation — Est. Ranchi, Jharkhand</span>
          <span style={{ fontSize: 20 }}>🌿</span>
          <div style={{ height: 1, width: 60, background: "linear-gradient(to left, transparent, rgba(45,106,79,0.3))" }} />
        </div>
      </div>
 
      {/* ── MODAL ── */}
      {active && (
        <div
          className="modal-overlay"
          onClick={() => setActiveCard(null)}
          style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(10,26,16,0.55)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}
        >
          <div
            className="modal-panel"
            onClick={e => e.stopPropagation()}
            style={{ background: active.modalBg, borderRadius: 28, padding: "48px 48px 40px", maxWidth: 640, width: "100%", maxHeight: "85vh", overflowY: "auto", position: "relative", border: `1px solid ${active.accent}20`, boxShadow: `0 32px 80px rgba(0,0,0,0.22), 0 0 0 1px ${active.accent}15` }}
          >
            {/* Top bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: active.accent, borderRadius: "28px 28px 0 0" }} />
 
            {/* Close btn */}
            <button className="modal-close-btn" onClick={() => setActiveCard(null)} style={{ position: "absolute", top: 20, right: 20, width: 36, height: 36, borderRadius: "50%", background: "rgba(45,106,79,0.07)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
 
            {/* Icon + Title */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <div style={{ width: 64, height: 64, borderRadius: 20, background: `${active.accent}16`, border: `1px solid ${active.accent}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, flexShrink: 0 }}>
                {active.icon}
              </div>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: active.accent, textTransform: "uppercase", letterSpacing: "0.18em", margin: "0 0 4px" }}>
                  Swastika Jan Kalyan Foundation
                </p>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 26, color: "#1a2e1a", margin: 0, lineHeight: 1.2 }}>
                  {active.title}
                </h3>
              </div>
            </div>
 
            {/* Divider */}
            <div style={{ height: 1, background: `${active.accent}20`, marginBottom: 28 }} />
 
            {/* Paragraphs */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {active.fullText.map((para, i) => (
                <p key={i} style={{ color: i === 0 ? "#1f3a28" : "#4b5563", fontSize: i === 0 ? 15.5 : 14.5, lineHeight: 1.85, fontWeight: i === 0 ? 500 : 400, margin: 0, paddingLeft: i === 0 ? 16 : 0, borderLeft: i === 0 ? `3px solid ${active.accent}` : "none" }}>
                  {para}
                </p>
              ))}
            </div>
 
            {/* Footer close */}
            <div style={{ marginTop: 36, display: "flex", justifyContent: "flex-end" }}>
              <button onClick={() => setActiveCard(null)} style={{ padding: "11px 28px", background: active.accent, color: "#fff", border: "none", borderRadius: 40, fontSize: 14, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", letterSpacing: "0.04em", boxShadow: `0 4px 16px ${active.accent}40`, transition: "opacity 0.2s ease" }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>

            {/* ────────────────────────────────────────────────────
          SECTION 3: IMPACT + STATUTORY DETAILS
      ──────────────────────────────────────────────────── */}
            <section style={{
                background: "linear-gradient(160deg, #f0faf4 0%, #e4f5eb 50%, #d8efe0 100%)",
                padding: "96px 24px",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", top: -100, right: -100, width: 500, height: 500,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 65%)",
                    pointerEvents: "none",
                }} />

                <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.5 }} />
                        <span className="section-label">Our Impact & Legal Details</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.5 }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Sora', sans-serif", fontWeight: 800,
                        fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e1a",
                        textAlign: "center", marginBottom: 56, lineHeight: 1.25,
                    }}>
                        Numbers That <span style={{ color: "#5FAF6B" }}>Speak</span>
                    </h2>

                    {/* Stats */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20, marginBottom: 64 }}>
                        {[
                            { num: "5000+", label: "Trees Planted", icon: "🌳" },
                            { num: "120+", label: "Communities Reached", icon: "🏘️" },
                            { num: "3000+", label: "Lives Impacted", icon: "❤️" },
                            { num: "8+", label: "Years of Service", icon: "🏅" },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-card" style={{
                                background: "#ffffff",
                                borderRadius: 20,
                                padding: "28px 20px",
                                textAlign: "center",
                                border: "1px solid rgba(45,106,79,0.15)",
                                boxShadow: "0 4px 20px rgba(45,106,79,0.08)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                            }}>
                                <div style={{ fontSize: 32, marginBottom: 8 }}>{stat.icon}</div>
                                <p style={{
                                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                                    fontSize: 32, color: "#2d6a4f", margin: "0 0 4px",
                                }}>{stat.num}</p>
                                <p style={{ fontSize: 12, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── STATUTORY DROPDOWN ── */}
                    <div style={{ maxWidth: 680, margin: "0 auto" }}>

                        {/* Toggle Button */}
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            style={{
                                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                                padding: "18px 28px",
                                background: dropdownOpen
                                    ? "linear-gradient(135deg, #1b4332, #2d6a4f)"
                                    : "linear-gradient(135deg, #2d6a4f, #40916c)",
                                border: "none", borderRadius: dropdownOpen ? "20px 20px 0 0" : 20,
                                cursor: "pointer",
                                boxShadow: "0 8px 32px rgba(45,106,79,0.25)",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{
                                    width: 36, height: 36, borderRadius: 10,
                                    background: "rgba(255,255,255,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    fontSize: 17,
                                }}>📋</div>
                                <div style={{ textAlign: "left" }}>
                                    <p style={{
                                        fontFamily: "'Sora', sans-serif", fontWeight: 700,
                                        fontSize: 15, color: "#ffffff", margin: 0,
                                    }}>Statutory & Legal Details</p>
                                    <p style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: 0 }}>
                                        {dropdownOpen ? "Click to collapse" : "Click to view registration info"}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                {!dropdownOpen && (
                                    <span style={{
                                        background: "rgba(255,255,255,0.18)",
                                        color: "#fff", fontSize: 11, fontWeight: 600,
                                        padding: "4px 12px", borderRadius: 20,
                                        letterSpacing: "0.05em",
                                    }}>
                                        {statutoryDetails.length} fields
                                    </span>
                                )}
                                <div style={{
                                    width: 32, height: 32, borderRadius: "50%",
                                    background: "rgba(255,255,255,0.15)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    transition: "transform 0.35s ease",
                                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                                }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </button>

                        {/* Dropdown Panel */}
                        <div className="dropdown-content" style={{
                            maxHeight: dropdownOpen ? "900px" : "0px",
                            opacity: dropdownOpen ? 1 : 0,
                            overflow: "hidden",
                            background: "#ffffff",
                            borderRadius: "0 0 20px 20px",
                            border: dropdownOpen ? "1px solid rgba(45,106,79,0.15)" : "none",
                            borderTop: "none",
                            boxShadow: dropdownOpen ? "0 16px 40px rgba(45,106,79,0.12)" : "none",
                        }}>
                            {/* Header row */}
                            <div style={{
                                display: "grid", gridTemplateColumns: "1fr 1fr",
                                padding: "10px 24px 8px",
                                background: "#f0faf4",
                                borderBottom: "1px solid rgba(45,106,79,0.1)",
                            }}>
                                <span style={{ fontSize: 10, fontWeight: 700, color: "#2d6a4f", letterSpacing: "0.16em", textTransform: "uppercase" }}>Field</span>
                                <span style={{ fontSize: 10, fontWeight: 700, color: "#2d6a4f", letterSpacing: "0.16em", textTransform: "uppercase", textAlign: "right" }}>Value</span>
                            </div>

                            {statutoryDetails.map((item, i) => (
                                <div key={item.label} className="dropdown-row" style={{
                                    display: "grid", gridTemplateColumns: "1fr 1fr",
                                    alignItems: "center",
                                    padding: "14px 24px",
                                    borderBottom: i < statutoryDetails.length - 1 ? "1px solid rgba(45,106,79,0.06)" : "none",
                                    background: i % 2 === 0 ? "#ffffff" : "#fafffe",
                                    transition: "background 0.2s ease, padding-left 0.2s ease",
                                    cursor: "default",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{
                                            width: 30, height: 30, borderRadius: 8,
                                            background: "linear-gradient(135deg, #e8f5ee, #d8efe0)",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: 14, flexShrink: 0,
                                        }}>{item.icon}</span>
                                        <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>
                                            {item.label}
                                        </span>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <span style={{
                                            display: "inline-block",
                                            background: "linear-gradient(135deg, #f0faf4, #e4f5eb)",
                                            color: "#2d6a4f", fontSize: 12.5, fontWeight: 500,
                                            padding: "4px 12px", borderRadius: 20,
                                            border: "1px solid rgba(45,106,79,0.15)",
                                        }}>{item.value}</span>
                                    </div>
                                </div>
                            ))}

                            {/* Footer */}
                            <div style={{
                                padding: "14px 24px",
                                background: "#f0faf4",
                                borderTop: "1px solid rgba(45,106,79,0.08)",
                                display: "flex", alignItems: "center", gap: 8,
                            }}>
                                <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2d6a4f" }} />
                                <span style={{ fontSize: 12, color: "#6b7280" }}>
                                    All registrations are verified and up to date with the relevant authorities.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ────────────────────────────────────────────────────
          SECTION 4: PAST PROJECTS & ACHIEVEMENTS
      ──────────────────────────────────────────────────── */}
       

            {/* ────────────────────────────────────────────────────
          SECTION 5: UPCOMING PROJECTS
      ──────────────────────────────────────────────────── */}
           

            {/* ────────────────────────────────────────────────────
          SECTION: MEET OUR TEAM
      ──────────────────────────────────────────────────── */}
            <section style={{
                background: "linear-gradient(160deg, #f8faf8 0%, #edf7f1 50%, #e0f2e9 100%)",
                padding: "96px 24px",
                position: "relative",
                overflow: "hidden",
            }}>
                <style>{`
                    .team-card {
                        transition: transform 0.35s cubic-bezier(0.34,1.25,0.64,1), box-shadow 0.35s ease;
                        cursor: default;
                    }
                    .team-card:hover {
                        transform: translateY(-10px) scale(1.025);
                        box-shadow: 0 24px 56px rgba(45,106,79,0.18), 0 4px 16px rgba(0,0,0,0.06) !important;
                    }
                    .team-card:hover .team-img-ring {
                        border-color: #2d6a4f !important;
                        box-shadow: 0 0 0 6px rgba(45,106,79,0.12) !important;
                    }
                    .team-card:hover .team-name {
                        color: #2d6a4f !important;
                    }
                    .team-img-ring {
                        transition: border-color 0.35s ease, box-shadow 0.35s ease;
                    }
                    .team-name {
                        transition: color 0.3s ease;
                    }
                `}</style>

                {/* BG decorations */}
                <div style={{ position: "absolute", top: -80, left: -80, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(82,183,136,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                <svg style={{ position: "absolute", bottom: 60, left: 80, opacity: 0.09, pointerEvents: "none" }} width="180" height="180" viewBox="0 0 180 180" fill="none">
                    <circle cx="90" cy="90" r="80" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="7 5" />
                    <circle cx="90" cy="90" r="55" stroke="#40916c" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

                    {/* Label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                        <span className="section-label">The People Behind The Mission</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                    </div>

                    {/* Heading */}
                    <h2 style={{
                        fontFamily: "'Sora', sans-serif", fontWeight: 800,
                        fontSize: "clamp(26px, 4vw, 40px)", color: "#1a2e1a",
                        textAlign: "center", marginBottom: 12, lineHeight: 1.2,
                    }}>
                        Meet Our <span style={{ color: "#5FAF6B" }}>Team</span>
                    </h2>
                    <p style={{ textAlign: "center", color: "#6b7280", fontSize: 15, maxWidth: 520, margin: "0 auto 56px", lineHeight: 1.7 }}>
                        Passionate changemakers dedicated to building a greener, more equitable Jharkhand — one community at a time.
                    </p>

                    {/* Team Cards Grid */}
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                        gap: 28,
                    }}>
                        {[
                            {
                                name: "Ajay Kumar Sinha",
                                designation: "Chairman",
                                memberImage: chairman,
                                gradient: "linear-gradient(135deg, #d8f3e3 0%, #b7e4c7 100%)",
                                accent: "#2d6a4f",
                            },
                            {
                                name: "Ashish Yash",
                                designation: "Director",
                                memberImage: director,
                                gradient: "linear-gradient(135deg, #dff0ff 0%, #bfdfff 100%)",
                                accent: "#2563eb",
                            },
                            {
                                name: "Ayush Kumar Sinha",
                                designation: "Member Director",
                                memberImage: memberdirector,
                                gradient: "linear-gradient(135deg, #fde9d9 0%, #fcd1b0 100%)",
                                accent: "#c2410c",
                            },
                            {
                                name: "Apoorv Harsh",
                                designation: "Head of Finance",
                                memberImage: headoffin,
                                gradient: "linear-gradient(135deg, #f0e4fd 0%, #dfc4fb 100%)",
                                accent: "#7c3aed",
                            },
                        ].map((member, i) => (
                            <div
                                key={i}
                                className="team-card"
                                style={{
                                    background: "#ffffff",
                                    borderRadius: 24,
                                    padding: "36px 24px 28px",
                                    boxShadow: "0 4px 24px rgba(45,106,79,0.09), 0 1px 4px rgba(0,0,0,0.04)",
                                    border: "1px solid rgba(45,106,79,0.10)",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Top accent bar */}
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: 5,
                                    background: `linear-gradient(90deg, ${member.accent}99, ${member.accent})`,
                                    borderRadius: "24px 24px 0 0",
                                }} />

                                {/* Avatar */}
                                <div
                                    className="team-img-ring"
                                    style={{
                                        width: 104, height: 104, borderRadius: "50%",
                                        border: `3px solid ${member.accent}55`,
                                        background: member.gradient,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        marginBottom: 18,
                                        boxShadow: `0 6px 20px ${member.accent}22`,
                                        overflow: "hidden",
                                        fontSize: 44,
                                    }}
                                >
                                   <img src={member.memberImage} style={{width:"100%",height:"100%",objectFit:"cover"}} />
                                   
                                </div>

                                {/* Name */}
                                <p
                                    className="team-name"
                                    style={{
                                        fontFamily: "'Sora', sans-serif",
                                        fontWeight: 700, fontSize: 15.5,
                                        color: "#1a2e1a", margin: "0 0 6px",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {member.name}
                                </p>

                                {/* Designation badge */}
                                <span style={{
                                    display: "inline-block",
                                    background: `${member.accent}14`,
                                    color: member.accent,
                                    fontSize: 11, fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    padding: "5px 14px",
                                    borderRadius: 20,
                                    border: `1px solid ${member.accent}28`,
                                }}>
                                    {member.designation}
                                </span>

                                {/* Subtle decorative dot */}
                                <div style={{
                                    position: "absolute", bottom: 16, right: 20,
                                    width: 8, height: 8, borderRadius: "50%",
                                    background: `${member.accent}40`,
                                }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ────────────────────────────────────────────────────
          SECTION: MESSAGE FROM LEADERSHIP
      ──────────────────────────────────────────────────── */}
            <section style={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0faf4 50%, #e8f5ee 100%)",
                padding: "96px 24px",
                position: "relative",
                overflow: "hidden",
            }} className="leaf-bg">

                {/* Decorative circles */}
                <div style={{
                    position: "absolute", top: -80, right: -80, width: 320, height: 320,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(45,106,79,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", bottom: -60, left: -60, width: 250, height: 250,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(82,183,136,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                }} />

                {/* Dashed ring decoration */}
                <svg style={{ position: "absolute", top: 40, right: 80, opacity: 0.12, pointerEvents: "none" }}
                    width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <circle cx="100" cy="100" r="90" stroke="#2d6a4f" strokeWidth="1.5" strokeDasharray="8 6" />
                    <circle cx="100" cy="100" r="65" stroke="#2d6a4f" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>

                    {/* Label */}
                    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 40 }}>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                        <span className="section-label">Message from Leadership</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                    </div>

                    {/* Card */}
                    <div style={{
                        background: "#ffffff",
                        borderRadius: 28,
                        padding: "48px 52px",
                        boxShadow: "0 4px 48px rgba(45,106,79,0.10), 0 1px 3px rgba(0,0,0,0.04)",
                        border: "1px solid rgba(45,106,79,0.12)",
                        position: "relative",
                    }}>

                        {/* Quote SVG */}
                        <svg style={{ position: "absolute", top: 28, left: 36, opacity: 0.08, width: 72, height: 72 }}
                            fill="#2d6a4f" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <div style={{ display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>

                            {/* Photo + Name */}
                            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
                                <div style={{
                                    width: 112, height: 112, borderRadius: "50%",
                                    border: "3px solid #5FAF6B",
                                    background: "linear-gradient(135deg, #e8f5ee, #d8f3e3)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    boxShadow: "0 8px 24px rgba(45,106,79,0.18)",
                                    overflow: "hidden",
                                }}>
                                    <img src={chairman} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a2e1a", margin: "0 0 2px" }}>
                                        Ajay Kumar Sinha
                                    </p>
                                    <p style={{ fontSize: 12, color: "#6b7280", margin: "0 0 2px" }}>Chairman & Founder</p>
                                    {/**<span style={{
                                        display: "inline-block", background: "#e8f5ee", color: "#2d6a4f",
                                        fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                                        padding: "3px 10px", borderRadius: 20,
                                    }}>SJKF</span>**/}
                                </div>
                            </div>

                            {/* Message Text */}
                            <div style={{ flex: 1, minWidth: 260 }}>
                                <h2 style={{
                                    fontFamily: "'Sora', sans-serif", fontWeight: 800,
                                    fontSize: "clamp(22px, 3vw, 30px)", color: "#1a2e1a",
                                    marginBottom: 20, lineHeight: 1.3,
                                }}>
                                    A Message of{" "}
                                    <span style={{ color: "#5FAF6B" }}>Hope & Purpose</span>
                                </h2>
                                {[
                                    "When we founded Swastika Jan Kalyan Foundation, we had a singular vision — to build a world where every tree planted is a promise kept, and every community uplifted is a future secured. The challenges our planet faces today are immense, but so is our collective will to change.",
                                    "Over the years, we have walked alongside farmers, students, and families — learning from them as much as we have contributed. Our work in forestation, climate awareness, and education is not charity; it is a partnership built on mutual respect and shared responsibility.",
                                    "I invite you to join us — not merely as a donor or a visitor, but as a fellow guardian of the earth we all share. Together, we can turn hope into action and action into legacy.",
                                ].map((para, i) => (
                                    <p key={i} style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                                ))}
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
                                    <div style={{ height: 2, width: 32, background: "#2d6a4f", borderRadius: 2 }} />
                                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2d6a4f", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                                        Chairman, SWASTIKA JAN KALYAN FOUNDATION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};