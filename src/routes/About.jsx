import { useState, useEffect } from "react";
import chairman from '../assets/chairman.png'
import director from '../assets/director.png'
import memberdirector from '../assets/memberdirector.png'
import headoffin from '../assets/headoffin.png'
import ngoLogo from '../assets/logo.png'
const statutoryDetails = [
    { label: "Organization Name", value: "Swastika Jan Kalyan Foundation", icon: "🏛️" },
    { label: "Registration Number (CIN)", value: "U88900JH2025NPL025146", icon: "🔖" },
    { label: "Registration Type", value: "Non-Governmental Organization (NGO)", icon: "📋" },
    { label: "Darpan ID (NITI Aayog)", value: "JH/2025/0693291", icon: "📅" },
    { label: "Registered Under", value: "Section 8 of Companies Act, 2013", icon: "⚖️" },
    { label: "Section 8 License Number", value: "1****9", icon: "📑"},
    { label: "PAN Number", value: "AB******4H", icon: "🪪" },
    { label: "12A Registration", value: "ABQC**********51", icon: "📄" },
    { label: "80G Registration", value: "ABQC**********61", icon: "📝" },
    { label: "Tax Deduction Account Number(TAN)", value: "RC*****5E", icon: "💸" },
    { label: "GSTIN", value: "20ABQ******1Z*", icon: "📊" },

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
        "We bridge the gap between potential and opportunity through dedicated, community-driven action. From restoring our ecology and providing accessible education to promoting life-changing health awareness, our mission is to create tangible, lasting impact.",
      fullText: [
        "Our mission is to translate our organizational objectives into measurable, on-ground impact. We bridge the gap between need and provision through the following strategic pillars:",
        "Environmental Stewardship: We act as active protectors of our ecology. From organizing cleanup drives for our rivers and public spaces to running awareness programs that tackle the roots of global warming, we work to secure a cleaner, greener home for both current and future generations.",
        "Educational Empowerment: We believe education is the primary catalyst for change. Our mission is to proactively seek out those in rural and underserved areas—the illiterate, the marginalized, and the underprivileged—to provide them with access to quality education, literacy programs, and intellectual resources.",
        "Holistic Social Support: We are committed to uplifting the standard of life for all people. This includes the implementation of health-centric initiatives, such as ensuring access to safe drinking water, promoting healthy lifestyle habits, and providing dedicated support for individuals with disabilities to ensure they have the agency to thrive.",
        "Community Awareness: We serve as a conduit for information. By designing and executing advocacy programs, we create a ripple effect of awareness, empowering communities to take charge of their own health, environment, and social status."
      ],
      aboutWhat: "Our Mission",
      accent: "#2d6a4f",
      lightBg: "linear-gradient(135deg, #f0faf4 0%, #e4f5eb 100%)",
      modalBg: "linear-gradient(160deg, #f0faf4, #e0f2e9)",
      border: "rgba(45,106,79,0.15)",
    },
    {
      icon: "🔭",
      title: "Our Vision",
      shortText:
        "We envision a future where environmental health, social equity, and intellectual growth are fundamental rights rather than privileges. We strive for a world where every community thrives in harmony with nature, empowered by knowledge and holistic well-being.",
      fullText: [
        "We envision a world where environmental health, social equity, and intellectual growth are not privileges, but fundamental constants of daily life. Our dream is to create a society where:",
        "Ecological Balance is Restored: We see a future where rural and urban environments thrive side-by-side, characterized by breathable air, clean, flowing rivers, and habitats that support sustainable living.",
        "Knowledge is Universal: We strive for a reality where the lack of literacy is a thing of the past. We imagine a landscape where every marginalized and underprivileged individual has access to the tools of education, fostering a culture of informed, critical thinkers.",
        "Well-being is Holistic: We look toward a society where safe drinking water and quality health awareness are accessible to all, and where individuals with special needs are integrated, supported, and celebrated as equal contributors to our collective progress.",
        `"Our vision is not just the absence of problems, but the presence of vibrant, sustainable, and inclusive opportunity."`
      ],
      aboutWhat: "Our Vision",
      accent: "#40916c",
      lightBg: "linear-gradient(135deg, #f2fbf6 0%, #dff0e7 100%)",
      modalBg: "linear-gradient(160deg, #f2fbf6, #d8eedf)",
      border: "rgba(64,145,108,0.15)",
    },
    {
      icon: "⭐",
      title: "Our Values",
      shortText:
        "Integrity, empathy, and sustainability form the heartbeat of our foundation. We believe in the dignity of every individual and are committed to transparency and inclusivity in every project we undertake. See the principles that guide our service.",
      fullText: [
        "Our values are not words on a wall. They are the principles that shape every conversation we have, every partnership we forge, and every rupee we spend.",
        "Empowerment: We don’t just provide aid; we provide the tools, awareness, and agency for people to lift themselves and their communities.",
        "Sustainability: We act as stewards of our planet, ensuring that our environmental initiatives—from air quality to water conservation—are long-term, restorative, and impactful.",
        "Inclusivity: We believe in the inherent dignity of every human being. We actively advocate for the marginalized, the underprivileged, and those with special needs, ensuring no one is left behind.",
        "Integrity: As a foundation, we hold ourselves accountable to the highest standards of transparency and service, ensuring every resource is dedicated to public welfare (Jan Kalyan).",
        "Empathy: We lead with compassion, recognizing that genuine social change is born from understanding the lived realities of those we serve."
      ],
      aboutWhat: "Our Values",
      accent: "#1b4332",
      lightBg: "linear-gradient(135deg, #f8fffe 0%, #e0f2e9 100%)",
      modalBg: "linear-gradient(160deg, #f8fffe, #d8efe0)",
      border: "rgba(27,67,50,0.12)",
    },
  ];
   
  
   

/* ─────────────────────────────────────────────────────────
   TEAM CAROUSEL COMPONENT
───────────────────────────────────────────────────────── */
function TeamCarousel({ members, renderCard }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const visibleCount = isMobile ? 1 : 3;
    const total = members.length;

    const next = () => setCurrentIndex(prev => (prev + 1) % total);
    const prev = () => setCurrentIndex(prev => (prev - 1 + total) % total);

    const visibleMembers = Array.from({ length: visibleCount }, (_, i) =>
        members[(currentIndex + i) % total]
    );

    return (
        <div style={{ position: "relative" }}>
            {/* Arrow Left — floats on the left edge */}
            <button
                onClick={prev}
                style={{
                    position: "absolute", left: -20, top: "50%",
                    transform: "translateY(-60%)",
                    zIndex: 10,
                    width: 40, height: 40, borderRadius: "50%",
                    background: "#ffffff",
                    border: "1.5px solid rgba(45,106,79,0.25)",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 12px rgba(45,106,79,0.15)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2d6a4f"; e.currentTarget.querySelector("svg").setAttribute("stroke", "#fff"); }}
                onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.querySelector("svg").setAttribute("stroke", "#2d6a4f"); }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Cards */}
            <div style={{
                display: "grid",
                gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
                gap: 24,
                padding: "0 28px",
            }}>
                {visibleMembers.map((member, i) => (
                    <div key={`${currentIndex}-${i}`}>
                        {renderCard(member, (currentIndex + i) % total)}
                    </div>
                ))}
            </div>

            {/* Arrow Right — floats on the right edge */}
            <button
                onClick={next}
                style={{
                    position: "absolute", right: -20, top: "50%",
                    transform: "translateY(-60%)",
                    zIndex: 10,
                    width: 40, height: 40, borderRadius: "50%",
                    background: "#ffffff",
                    border: "1.5px solid rgba(45,106,79,0.25)",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 12px rgba(45,106,79,0.15)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#2d6a4f"; e.currentTarget.querySelector("svg").setAttribute("stroke", "#fff"); }}
                onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.querySelector("svg").setAttribute("stroke", "#2d6a4f"); }}
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}

function TeamSection({ memberdirector, chairman, director, headoffin }) {
    const boardMembers = [
        {
            name: "Ayush Kumar Sinha",
            designation: "Managing Director cum Founder",
            secondaryDesignation: "(Member Director)",
            memberImage: memberdirector,
            gradient: "linear-gradient(135deg, #fde9d9 0%, #fcd1b0 100%)",
            accent: "#c2410c",
            crown: true,
        },
        {
            name: "Ajay Kumar Sinha",
            designation: "Chairman cum Co-Founder",
            secondaryDesignation: "(Member Director)",
            memberImage: chairman,
            gradient: "linear-gradient(135deg, #d8f3e3 0%, #b7e4c7 100%)",
            accent: "#2d6a4f",
            crown: false,
        },
        {
            name: "Ashish Yash",
            designation: "Director cum Co-Founder",
            secondaryDesignation: "(Dept. of Human Resources)",
            memberImage: director,
            gradient: "linear-gradient(135deg, #dff0ff 0%, #bfdfff 100%)",
            accent: "#2563eb",
            crown: false,
        },
        {
            name: "Apoorv Harsh",
            designation: "Director cum Co-Founder",
            secondaryDesignation: "(Dept. of Finance, Accounts & Legal)",
            memberImage: headoffin,
            gradient: "linear-gradient(135deg, #f0e4fd 0%, #dfc4fb 100%)",
            accent: "#7c3aed",
            crown: false,
        },
        {
            name: "Aashika Sinha",
            designation: "Director",
            secondaryDesignation: "(Dept. of IT, Social Media and Information)",
            memberImage: headoffin,
            gradient: "linear-gradient(135deg, #f0e4fd 0%, #dfc4fb 100%)",
            accent: "#7c3aed",
            crown: false,
        },
        {
            name: "Prince Singhania",
            designation: "Director",
            secondaryDesignation: "(Dept. of Public Relations & Marketing)",
            memberImage: headoffin,
            gradient: "linear-gradient(135deg, #f0e4fd 0%, #dfc4fb 100%)",
            accent: "#7c3aed",
            crown: false,
        },
    ];

    const teamMembers = [
        {
            name: "Sanyukta Giri",
            designation: "Head of Graphics Designing",
            gradient: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)",
            accent: "#db2777",
            initials: "SG",
        },
        {
            name: "Piyush Bhusan Sharma",
            designation: "Head of Operations",
            gradient: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
            accent: "#d97706",
            initials: "PS",
        },
        {
            name: "Shubham Gupta",
            designation: "Co-Lead of Operations",
            gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
            accent: "#3b82f6",
            initials: "SG",
        },
        {
            name: "Shruti Sinha",
            designation: "Co-Lead of Operations",
            gradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
            accent: "#16a34a",
            initials: "SS",
        },
    ];

    const renderBoardCard = (member, i) => (
        <div className="team-card" style={{
            background: "#ffffff",
            borderRadius: 24,
            padding: "40px 24px 28px",
            boxShadow: "0 6px 32px rgba(45,106,79,0.12), 0 1px 4px rgba(0,0,0,0.05)",
            border: `1px solid ${member.accent}22`,
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", position: "relative", overflow: "hidden",
            height: "100%",
        }}>
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 5,
                background: member.crown
                    ? "linear-gradient(90deg, #b7791f, #d4a817, #b7791f)"
                    : `linear-gradient(90deg, ${member.accent}99, ${member.accent})`,
                borderRadius: "24px 24px 0 0",
            }} />
            {member.crown && (
                <div style={{
                    position: "absolute", top: 14, right: 16,
                    background: "linear-gradient(135deg, #fef9c3, #fde68a)",
                    border: "1px solid #d4a81766",
                    borderRadius: 20, padding: "2px 8px",
                    fontSize: 9, fontWeight: 700,
                    color: "#92400e", letterSpacing: "0.12em",
                    textTransform: "uppercase",
                }}>
                    ♛ Founder
                </div>
            )}
            <div className="team-img-ring" style={{
                width: 108, height: 108, borderRadius: "50%",
                border: member.crown ? "3px solid #d4a817" : `3px solid ${member.accent}55`,
                background: member.gradient,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 18,
                boxShadow: member.crown
                    ? "0 6px 24px rgba(212,168,23,0.28)"
                    : `0 6px 20px ${member.accent}22`,
                overflow: "hidden",
            }}>
                <img src={member.memberImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <p className="team-name" style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15.5,
                color: "#1a2e1a", margin: "0 0 8px", lineHeight: 1.3,
            }}>{member.name}</p>
            <span style={{
                display: "inline-block",
                background: `${member.accent}14`, color: member.accent,
                fontSize: 11, fontWeight: 600, letterSpacing: "0.08em",
                padding: "5px 14px", borderRadius: 20,
                border: `1px solid ${member.accent}28`,
            }}>{member.designation}<br />{member.secondaryDesignation}</span>
            <div style={{
                position: "absolute", bottom: 16, right: 20,
                width: 8, height: 8, borderRadius: "50%",
                background: `${member.accent}40`,
            }} />
        </div>
    );

    const renderTeamCard = (member, i) => (
        <div className="team-card" style={{
            background: "#ffffff",
            borderRadius: 20,
            padding: "32px 20px 24px",
            boxShadow: "0 4px 20px rgba(64,145,108,0.09), 0 1px 4px rgba(0,0,0,0.04)",
            border: `1px solid ${member.accent}18`,
            display: "flex", flexDirection: "column", alignItems: "center",
            textAlign: "center", position: "relative", overflow: "hidden",
            height: "100%",
        }}>
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${member.accent}88, ${member.accent})`,
                borderRadius: "20px 20px 0 0",
            }} />
            <div className="team-img-ring" style={{
                width: 88, height: 88, borderRadius: "50%",
                border: `2.5px solid ${member.accent}44`,
                background: member.gradient,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
                boxShadow: `0 4px 16px ${member.accent}1a`,
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800, fontSize: 22,
                color: member.accent,
            }}>
                {member.initials}
            </div>
            <p className="team-name" style={{
                fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14.5,
                color: "#1a2e1a", margin: "0 0 7px", lineHeight: 1.3,
            }}>{member.name}</p>
            <span style={{
                display: "inline-block",
                background: `${member.accent}12`, color: member.accent,
                fontSize: 10.5, fontWeight: 600, letterSpacing: "0.07em",
                padding: "4px 12px", borderRadius: 20,
                border: `1px solid ${member.accent}22`,
            }}>{member.designation}</span>
            <div style={{
                position: "absolute", bottom: 14, right: 16,
                width: 6, height: 6, borderRadius: "50%",
                background: `${member.accent}35`,
            }} />
        </div>
    );

    return (
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

                {/* ── BOARD OF DIRECTORS ── */}
                <div style={{ marginBottom: 64 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #2d6a4f55)" }} />
                        <div style={{
                            display: "flex", alignItems: "center", gap: 8,
                            background: "linear-gradient(135deg, #1b4332, #2d6a4f)",
                            color: "#fff", padding: "8px 22px", borderRadius: 40,
                            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            boxShadow: "0 4px 18px rgba(45,106,79,0.35)",
                        }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M7 12h10M10 18h4" /></svg>
                            Board of Directors
                        </div>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #2d6a4f55)" }} />
                    </div>
                    <TeamCarousel members={boardMembers} renderCard={renderBoardCard} />
                </div>

                {/* ── HIERARCHY CONNECTOR ── */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 48, gap: 0 }}>
                    <div style={{ width: 2, height: 28, background: "linear-gradient(to bottom, #2d6a4f, #52b78888)" }} />
                    <div style={{
                        width: 32, height: 32, borderRadius: "50%",
                        background: "linear-gradient(135deg, #2d6a4f, #52b788)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 4px 14px rgba(45,106,79,0.30)",
                    }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <div style={{ width: 2, height: 28, background: "linear-gradient(to bottom, #52b78888, #40916c)" }} />
                </div>

                {/* ── TEAM MEMBERS ── */}
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, transparent, #40916c55)" }} />
                        <div style={{
                            display: "flex", alignItems: "center", gap: 8,
                            background: "linear-gradient(135deg, #40916c, #52b788)",
                            color: "#fff", padding: "8px 22px", borderRadius: 40,
                            fontSize: 11, fontWeight: 700, letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            boxShadow: "0 4px 18px rgba(64,145,108,0.30)",
                        }}>
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="9" cy="7" r="4"/><path strokeLinecap="round" d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path strokeLinecap="round" d="M16 3.13a4 4 0 0 1 0 7.75"/><path strokeLinecap="round" d="M21 21v-2a4 4 0 0 0-3-3.87"/></svg>
                            Team Members
                        </div>
                        <div style={{ flex: 1, height: 1, background: "linear-gradient(to left, transparent, #40916c55)" }} />
                    </div>
                    <TeamCarousel members={teamMembers} renderCard={renderTeamCard} />
                </div>
            </div>
        </section>
    );
}

function AboutLogoSection({ ngoLogo }) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    const pillarsData = [
        {
            label: "Education & Awareness",
            color: "#1b6b3a", bg: "#f0faf4", border: "#74c69d",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="14" rx="2" stroke="#2d6a4f" strokeWidth="1.5" fill="#c8e6c9" />
                    <path d="M7 9h10M7 12h7" stroke="#2d6a4f" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M12 18v3M9 21h6" stroke="#2d6a4f" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            label: "Environment",
            color: "#1b6b3a", bg: "#f0faf4", border: "#74c69d",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C7 3 3 8 3 13c0 3 1.5 5.5 4 7 0-4 2-7.5 5-9-1.5 3-1.5 6 0 9 2.5-1.5 4-4 4-7 0-5-4-10-4-10z" fill="#52b788" opacity="0.6" />
                    <path d="M12 3C17 3 21 8 21 13c0 3-1.5 5.5-4 7 0-4-2-7.5-5-9 1.5 3 1.5 6 0 9" stroke="#2d6a4f" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                    <line x1="12" y1="20" x2="12" y2="22" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            label: "Health, Lifestyle & Social Status",
            color: "#1b6b3a", bg: "#f0faf4", border: "#74c69d",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C12 21 4 15 4 9a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 6-8 12-8 12z" fill="#b7e4c7" stroke="#2d6a4f" strokeWidth="1.3" />
                    <path d="M9 10h2v2h2v2h2M9 14h2" stroke="#2d6a4f" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    const logoSize = isMobile ? 160 : 220;
    const outerRingSize = isMobile ? 240 : 340;
    const middleRingSize = isMobile ? 200 : 290;

    return (
        <section style={{
            background: "linear-gradient(150deg, #e8f5ee 0%, #d4eedd 40%, #c6e8d5 100%)",
            padding: isMobile ? "64px 20px" : "96px 24px",
            position: "relative",
            overflow: "hidden",
        }}>
            {/* SVG background decorations */}
            <svg style={{ position: "absolute", top: 0, right: 0, opacity: 0.13, pointerEvents: "none" }} width={isMobile ? 200 : 420} height={isMobile ? 200 : 420} viewBox="0 0 420 420" fill="none">
                <ellipse cx="320" cy="100" rx="180" ry="140" fill="#2d6a4f" transform="rotate(-25 320 100)" />
            </svg>
            <svg style={{ position: "absolute", bottom: 0, left: 0, opacity: 0.10, pointerEvents: "none" }} width={isMobile ? 180 : 340} height={isMobile ? 180 : 340} viewBox="0 0 340 340" fill="none">
                <ellipse cx="60" cy="280" rx="160" ry="120" fill="#40916c" transform="rotate(20 60 280)" />
            </svg>
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}>
                <defs>
                    <pattern id="logoDots" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1.5" fill="#2d6a4f" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#logoDots)" />
            </svg>
            {!isMobile && (
                <svg style={{ position: "absolute", top: 24, left: 24, opacity: 0.15, pointerEvents: "none" }} width="160" height="160" viewBox="0 0 160 160" fill="none">
                    <path d="M 10 150 Q 10 10 150 10" stroke="#2d6a4f" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
                    <path d="M 30 150 Q 30 30 150 30" stroke="#2d6a4f" strokeWidth="1" fill="none" strokeDasharray="4 6" />
                    <path d="M 50 150 Q 50 50 150 50" stroke="#2d6a4f" strokeWidth="0.8" fill="none" strokeDasharray="3 7" />
                </svg>
            )}

            <div style={{ maxWidth: 1060, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Section label */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, justifyContent: "center", marginBottom: isMobile ? 36 : 60 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C6 2 2 8 2 14c0 4 2.5 7 7 8 0-6 3-10 7-12-2 4-2 8 0 12 4-1.5 6-4.5 6-8 0-6-4-12-10-12z" fill="#2d6a4f" opacity="0.7" />
                    </svg>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "#2d6a4f", fontFamily: "'Sora', sans-serif" }}>About Our Logo</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transform: "scaleX(-1)" }}>
                        <path d="M12 2C6 2 2 8 2 14c0 4 2.5 7 7 8 0-6 3-10 7-12-2 4-2 8 0 12 4-1.5 6-4.5 6-8 0-6-4-12-10-12z" fill="#2d6a4f" opacity="0.7" />
                    </svg>
                </div>

                {/* Headline */}
                <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 56 }}>
                    <h2 style={{
                        fontFamily: "'Sora', sans-serif", fontWeight: 800,
                        fontSize: isMobile ? "28px" : "clamp(28px, 4vw, 44px)",
                        color: "#1a2e1a", lineHeight: 1.2, marginBottom: 14,
                    }}>
                        A Symbol of{" "}
                        <span style={{ color: "#2d6a4f", position: "relative", display: "inline-block" }}>
                            Purpose & Life
                            <svg style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 8 }} viewBox="0 0 200 8" preserveAspectRatio="none" fill="none">
                                <path d="M0 6 Q50 1 100 5 Q150 9 200 4" stroke="#52b788" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p style={{ fontSize: isMobile ? 14 : 15, color: "#4b6e57", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontStyle: "italic", padding: isMobile ? "0 8px" : 0 }}>
                        Rooted in the five elements of life, this emblem reflects the soul of our mission.
                    </p>
                </div>

                {/* MAIN LAYOUT — stacked on mobile, 2-col on desktop */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: isMobile ? 36 : 48,
                    alignItems: "start",
                }}>

                    {/* LEFT / TOP: Logo + credit */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: isMobile ? 20 : 28 }}>

                        {/* Animated logo rings */}
                        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: outerRingSize, height: outerRingSize }}>
                            <svg style={{ position: "absolute", width: outerRingSize, height: outerRingSize, animation: "logoSpin 28s linear infinite", top: 0, left: 0 }} viewBox="0 0 340 340" fill="none">
                                <circle cx="170" cy="170" r="158" stroke="#2d6a4f" strokeWidth="1" strokeDasharray="12 8" opacity="0.3" />
                                {[0, 90, 180, 270].map(deg => {
                                    const rad = (deg * Math.PI) / 180;
                                    const x = 170 + 158 * Math.cos(rad);
                                    const y = 170 + 158 * Math.sin(rad);
                                    return <rect key={deg} x={x - 4} y={y - 4} width="8" height="8" fill="#2d6a4f" opacity="0.4" transform={`rotate(45 ${x} ${y})`} />;
                                })}
                            </svg>
                            <svg style={{ position: "absolute", width: middleRingSize, height: middleRingSize, animation: "logoSpinRev 20s linear infinite", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} viewBox="0 0 290 290" fill="none">
                                <circle cx="145" cy="145" r="133" stroke="#52b788" strokeWidth="0.8" strokeDasharray="5 10" opacity="0.4" />
                            </svg>
                            <div style={{
                                width: logoSize, height: logoSize, borderRadius: "50%",
                                background: "linear-gradient(145deg, #ffffff 0%, #f0faf4 100%)",
                                border: "2px solid rgba(45,106,79,0.18)",
                                boxShadow: "0 12px 48px rgba(45,106,79,0.18), 0 2px 8px rgba(45,106,79,0.10)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                position: "relative", zIndex: 2,
                            }}>
                                <img src={ngoLogo} alt="Swastika Jan Kalyan Foundation Logo" style={{ width: "78%", height: "78%", objectFit: "contain" }} />
                            </div>
                        </div>

                        {/* Designer credit */}
                        <div style={{
                            background: "#ffffff",
                            border: "1px solid rgba(45,106,79,0.15)",
                            borderRadius: 16,
                            padding: "14px 24px",
                            boxShadow: "0 4px 20px rgba(45,106,79,0.08)",
                            display: "flex", alignItems: "center", gap: 14,
                        }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" fill="#e8f5ee" stroke="#2d6a4f" strokeWidth="1.2" />
                                <circle cx="8.5" cy="10" r="1.5" fill="#2d6a4f" />
                                <circle cx="12" cy="8" r="1.5" fill="#52b788" />
                                <circle cx="15.5" cy="10" r="1.5" fill="#d4a817" />
                                <circle cx="15.5" cy="14" r="1.5" fill="#40916c" />
                                <circle cx="8.5" cy="14" r="1.5" fill="#74c69d" />
                                <path d="M12 16.5c1.5 0 2.5-0.7 2.5-1.5H9.5c0 0.8 1 1.5 2.5 1.5z" fill="#2d6a4f" />
                            </svg>
                            <div>
                                <p style={{ margin: 0, fontSize: 10, color: "#6b7280", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 3 }}>Designed & Created by</p>
                                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "#2d6a4f", fontFamily: "'Sora', sans-serif" }}>Sanyukta Giri</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT / BOTTOM: Text content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 20 }}>

                        {/* Intro */}
                        <div style={{
                            background: "#ffffff", borderRadius: 18,
                            padding: isMobile ? "20px" : "24px 28px",
                            boxShadow: "0 4px 24px rgba(45,106,79,0.08)",
                            border: "1px solid rgba(45,106,79,0.10)",
                            position: "relative",
                        }}>
                            <svg style={{ position: "absolute", top: 16, right: 16, opacity: 0.12 }} width="44" height="44" viewBox="0 0 24 24" fill="#2d6a4f">
                                <path d="M12 2L8 8H5l7 7-2 5h4l-2-5 7-7h-3z" />
                                <rect x="11" y="17" width="2" height="5" fill="#2d6a4f" />
                            </svg>
                            <p style={{ margin: 0, fontSize: isMobile ? 14 : 14.5, color: "#374151", lineHeight: 1.85 }}>
                                The <strong style={{ color: "#2d6a4f" }}>tree stands tall</strong>, branching into the core areas we work in — each branch a testament to our commitment, our reach, and our resolve to serve.
                            </p>
                        </div>

                        {/* Three pillar cards */}
                        {pillarsData.map((item, i) => (
                            <div key={i} style={{
                                display: "flex", alignItems: "center", gap: isMobile ? 12 : 16,
                                background: item.bg, border: `1.5px solid ${item.border}`,
                                borderRadius: 14, padding: isMobile ? "12px 16px" : "14px 20px",
                            }}>
                                <div style={{
                                    width: isMobile ? 40 : 48, height: isMobile ? 40 : 48, borderRadius: 12,
                                    background: "#ffffff", border: `1px solid ${item.border}`,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0, boxShadow: "0 2px 8px rgba(45,106,79,0.10)",
                                }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontSize: isMobile ? 13 : 13.5, fontWeight: 700, color: item.color, fontFamily: "'Sora', sans-serif", lineHeight: 1.4 }}>
                                    {item.label}
                                </span>
                               
                            </div>
                        ))}

                        {/* Swastika block */}
                        <div style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #f0faf4 100%)",
                            border: "1px solid rgba(45,106,79,0.14)",
                            borderRadius: 16, padding: isMobile ? "16px" : "20px 24px",
                            display: "flex", gap: isMobile ? 12 : 16, alignItems: "flex-start",
                            boxShadow: "0 4px 20px rgba(45,106,79,0.07)",
                        }}>
                            <div style={{
                                flexShrink: 0, width: 44, height: 44,
                                background: "#e8f5ee", borderRadius: 10,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                border: "1px solid #b7e0c9",
                            }}>
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                                    <rect x="11" y="3" width="2" height="18" rx="1" fill="#2d6a4f" />
                                    <rect x="3" y="11" width="18" height="2" rx="1" fill="#2d6a4f" />
                                    <rect x="11" y="3" width="2" height="4" rx="1" fill="#d4a817" />
                                    <rect x="17" y="11" width="4" height="2" rx="1" fill="#d4a817" />
                                    <rect x="11" y="17" width="2" height="4" rx="1" fill="#d4a817" />
                                    <rect x="3" y="11" width="4" height="2" rx="1" fill="#d4a817" />
                                    <circle cx="12" cy="12" r="2.5" fill="#2d6a4f" />
                                </svg>
                            </div>
                            <p style={{ margin: 0, fontSize: isMobile ? 13.5 : 14, color: "#374151", lineHeight: 1.8 }}>
                                At its heart lies the <strong style={{ color: "#2d6a4f" }}>Swastika</strong> — gracefully symbolizing our name and our belief in <em>positive change and well-being for all</em>.
                            </p>
                        </div>

                    
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes logoSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes logoSpinRev {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
            `}</style>
        </section>
    );
}

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
        padding: "50px 24px",
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
                Read More About {pillar.aboutWhat}
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
          <span style={{ fontSize: 13, color: "#9ca3af", fontStyle: "italic" }}>Swastika Jan Kalyan Foundation — Est. 2025 in Ranchi, Jharkhand</span>
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
                        <span className="section-label">Our  Legal Details</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.5 }} />
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
            <TeamSection
                memberdirector={memberdirector}
                chairman={chairman}
                director={director}
                headoffin={headoffin}
            />

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
                                    border: "3px solid #d4a817",
                                    background: "linear-gradient(135deg, #e8f5ee, #d8f3e3)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    boxShadow: "0 8px 24px rgba(45,106,79,0.18)",
                                    overflow: "hidden",
                                }}>
                                    <img src={memberdirector} />
                                </div>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a2e1a", margin: "0 0 2px" }}>
                                        Ayush Kumar Sinha
                                    </p>
                                    <p style={{ fontSize: 12, color: "#6b7280", margin: "0 0 2px" }}>Founder & Managing Director</p>
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
                                    A Message from{" "}
                                    <span style={{ color: "#5FAF6B" }}>Our Founder</span>
                                </h2>
                                {[
                                    "Welcome to the Swastika Jan Kalyan Foundation",
                                    "When we embarked on this journey, it was born out of a simple but profound belief: that the strength of a society is measured by the quality of life of its most vulnerable members. We recognized that true progress is not a single-track pursuit but a holistic endeavor—one that requires us to breathe clean air, nurture our environment, educate the marginalized, and ensure the well-being of every individual.",
                                    `At our foundation, we don’t just see "projects", we see potential. Whether it is our efforts to restore ecological balance, our drive to improve literacy rates, or our commitment to enhancing the health and social status of those in both rural and urban areas, everything we do is guided by a singular purpose: to leave the world better than we found it.`,
                                    "Thank you for believing in our mission. I invite you to explore our initiatives, join our efforts, and walk with us as we strive to build a more sustainable, educated, and compassionate society.",
                                ].map((para, i) => (
                                    <p key={i} style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.8, marginBottom: 14 }}>{para}</p>
                                ))}
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20 }}>
                                    <div style={{ height: 2, width: 32, background: "#2d6a4f", borderRadius: 2 }} />
                                    <span style={{ fontSize: 11, fontWeight: 700, color: "#2d6a4f", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                                        Founder, SWASTIKA JAN KALYAN FOUNDATION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </section>

       
            <AboutLogoSection ngoLogo={ngoLogo} />

        </div>
    );
};