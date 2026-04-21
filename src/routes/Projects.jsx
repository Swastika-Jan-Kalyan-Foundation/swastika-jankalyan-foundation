import { useState } from "react";

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

export const Projects =  () => {
    return(
        <>

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
             <section style={{
                background: "#ffffff",
                padding: "96px 24px",
                position: "relative",
                overflow: "hidden",
            }}>
                {/* Timeline line */}
                <div style={{
                    position: "absolute", left: "50%", top: 180, bottom: 60,
                    width: 2,
                    background: "linear-gradient(to bottom, transparent, rgba(45,106,79,0.15) 10%, rgba(45,106,79,0.15) 90%, transparent)",
                    display: "none",
                }} />

                <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                        <span className="section-label">Past Projects & Achievements</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Sora', sans-serif", fontWeight: 800,
                        fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e1a",
                        textAlign: "center", marginBottom: 16, lineHeight: 1.25,
                    }}>
                        The Ground We've <span style={{ color: "#2d6a4f" }}>Already Covered</span>
                    </h2>
                    <p style={{ color: "#6b7280", fontSize: 14.5, textAlign: "center", maxWidth: 560, margin: "0 auto 64px", lineHeight: 1.8 }}>
                        Every initiative below represents real people, real change, and a real difference in the communities we serve across Jharkhand and beyond.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 28 }}>
                        {pastProjects.map((project, i) => (
                            <div key={project.title} className="project-card" style={{
                                background: "#ffffff",
                                borderRadius: 24,
                                overflow: "hidden",
                                border: "1px solid rgba(45,106,79,0.10)",
                                boxShadow: "0 4px 24px rgba(45,106,79,0.08)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                {/* Image */}
                                <div style={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.06)"}
                                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                    {/* Overlay */}
                                    <div style={{
                                        position: "absolute", inset: 0,
                                        background: "linear-gradient(to top, rgba(27,67,50,0.6) 0%, transparent 60%)",
                                    }} />
                                    {/* Year badge */}
                                    <div style={{
                                        position: "absolute", top: 16, left: 16,
                                        background: "rgba(255,255,255,0.92)",
                                        color: "#2d6a4f", fontWeight: 700, fontSize: 12,
                                        padding: "5px 14px", borderRadius: 20,
                                        fontFamily: "'Sora', sans-serif",
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                    }}>{project.year}</div>
                                    {/* Category */}
                                    <div style={{
                                        position: "absolute", top: 16, right: 16,
                                        background: project.color,
                                        color: "#fff", fontWeight: 600, fontSize: 11,
                                        padding: "5px 14px", borderRadius: 20,
                                        letterSpacing: "0.08em",
                                    }}>{project.category}</div>
                                    {/* Bottom text overlay */}
                                    <div style={{ position: "absolute", bottom: 16, left: 20, right: 20 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: 22 }}>{project.emoji}</span>
                                            <span style={{
                                                fontFamily: "'Sora', sans-serif", fontWeight: 700,
                                                fontSize: 18, color: "#ffffff",
                                            }}>{project.title}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.8, flex: 1, marginBottom: 20 }}>
                                        {project.desc}
                                    </p>
                                    {/* Achievement badge */}
                                    <div style={{
                                        display: "inline-flex", alignItems: "center", gap: 8,
                                        background: "linear-gradient(135deg, #e8f5ee, #d8efe0)",
                                        border: "1px solid rgba(45,106,79,0.2)",
                                        borderRadius: 12, padding: "10px 18px",
                                        alignSelf: "flex-start",
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span style={{ fontWeight: 700, fontSize: 13, color: "#2d6a4f" }}>
                                            {project.achievement}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Total impact summary strip */}
                    <div style={{
                        marginTop: 56,
                        background: "linear-gradient(135deg, #1b4332, #2d6a4f)",
                        borderRadius: 20, padding: "32px 40px",
                        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20,
                    }}>
                        <div>
                            <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: "#ffffff", margin: "0 0 4px" }}>
                                🏆 Collective Achievement
                            </p>
                            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>
                                Across all past projects combined
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                            {[
                                { val: "6,300+", lbl: "People Helped" },
                                { val: "4", lbl: "Major Projects" },
                                { val: "3 States", lbl: "Reached" },
                            ].map(stat => (
                                <div key={stat.lbl} style={{ textAlign: "center" }}>
                                    <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 24, color: "#74c69d", margin: "0 0 2px" }}>{stat.val}</p>
                                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.lbl}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={{
                background: "linear-gradient(160deg, #f8faf8 0%, #f0faf4 60%, #e8f5ee 100%)",
                padding: "96px 24px",
                position: "relative",
                overflow: "hidden",
            }} className="leaf-bg">

                <div style={{
                    position: "absolute", bottom: -80, right: -80, width: 400, height: 400,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(45,106,79,0.07) 0%, transparent 65%)",
                    pointerEvents: "none",
                }} />

                <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

                    <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                        <span className="section-label">Future Initiatives</span>
                        <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                    </div>
                    <h2 style={{
                        fontFamily: "'Sora', sans-serif", fontWeight: 800,
                        fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e1a",
                        textAlign: "center", marginBottom: 16, lineHeight: 1.25,
                    }}>
                        The Road <span style={{ color: "#2d6a4f" }}>Ahead</span>
                    </h2>
                    <p style={{ color: "#6b7280", fontSize: 14.5, textAlign: "center", maxWidth: 580, margin: "0 auto 64px", lineHeight: 1.8 }}>
                        Our pipeline of upcoming projects reflects our growing ambitions and our commitment to tackling the most pressing challenges facing our communities.
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                        {upcomingProjects.map((project, i) => (
                            <div key={project.title} className="upcoming-card" style={{
                                background: "#ffffff",
                                borderRadius: 24,
                                padding: "32px 28px",
                                border: `1px solid ${project.border}22`,
                                boxShadow: `0 4px 24px ${project.border}12`,
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                position: "relative",
                                overflow: "hidden",
                            }}>

                                {/* Top color accent bar */}
                                <div style={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: 4,
                                    background: project.border,
                                    borderRadius: "24px 24px 0 0",
                                }} />

                                {/* Status badge */}
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 6,
                                    background: `${project.statusColor}18`,
                                    border: `1px solid ${project.statusColor}40`,
                                    borderRadius: 20, padding: "4px 12px",
                                    marginBottom: 20,
                                }}>
                                    <div className="pulse-dot" style={{ width: 6, height: 6, borderRadius: "50%", background: project.statusColor }} />
                                    <span style={{ fontSize: 11, fontWeight: 700, color: project.statusColor, letterSpacing: "0.08em" }}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Quarter */}
                                <div style={{
                                    position: "absolute", top: 24, right: 24,
                                    background: "linear-gradient(135deg, #f0faf4, #e4f5eb)",
                                    color: "#2d6a4f", fontWeight: 700, fontSize: 11,
                                    padding: "4px 12px", borderRadius: 20,
                                    border: "1px solid rgba(45,106,79,0.15)",
                                }}>{project.quarter}</div>

                                {/* Emoji + Title */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                                    <span style={{
                                        fontSize: 32, lineHeight: 1,
                                        width: 52, height: 52, borderRadius: 14,
                                        background: `${project.border}12`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                    }}>{project.emoji}</span>
                                    <div>
                                        <p style={{ fontSize: 11, fontWeight: 600, color: project.statusColor, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>
                                            {project.category}
                                        </p>
                                        <h3 style={{
                                            fontFamily: "'Sora', sans-serif", fontWeight: 700,
                                            fontSize: 17, color: "#1a2e1a", margin: 0, lineHeight: 1.3,
                                        }}>{project.title}</h3>
                                    </div>
                                </div>

                                <p style={{ color: "#4b5563", fontSize: 13.5, lineHeight: 1.75, marginBottom: 20 }}>
                                    {project.desc}
                                </p>

                                {/* Target */}
                                <div style={{
                                    display: "flex", alignItems: "center", gap: 8,
                                    paddingTop: 16,
                                    borderTop: `1px solid ${project.border}1a`,
                                }}>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={project.border} strokeWidth="2.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="6" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                    <span style={{ fontSize: 12.5, fontWeight: 600, color: "#374151" }}>Target: </span>
                                    <span style={{ fontSize: 12.5, fontWeight: 700, color: project.border }}>{project.target}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Banner */}
                    <div style={{
                        marginTop: 56,
                        background: "#ffffff",
                        borderRadius: 24,
                        padding: "40px 48px",
                        border: "1px solid rgba(45,106,79,0.12)",
                        boxShadow: "0 8px 40px rgba(45,106,79,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24,
                    }}>
                        <div>
                            <h3 style={{
                                fontFamily: "'Sora', sans-serif", fontWeight: 800,
                                fontSize: 22, color: "#1a2e1a", margin: "0 0 8px",
                            }}>
                                Want to support these initiatives?
                            </h3>
                            <p style={{ color: "#6b7280", fontSize: 14, margin: 0 }}>
                                Your contribution directly funds these projects and changes lives on the ground.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <a href="https://swastikajankalyanfoundation.netlify.app/donatetous" className="shimmer-badge" style={{
                                padding: "14px 32px",
                                border: "none", borderRadius: 40,
                                color: "#ffffff", fontWeight: 700, fontSize: 14,
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: "0.04em",
                            }}>
                                Donate Now →
                            </a>
                            <a href="https://swastikajankalyanfoundation.netlify.app/beapartofus" style={{
                                padding: "14px 32px",
                                background: "transparent",
                                border: "2px solid #2d6a4f",
                                borderRadius: 40,
                                color: "#2d6a4f", fontWeight: 700, fontSize: 14,
                                cursor: "pointer",
                                fontFamily: "'DM Sans', sans-serif",
                                letterSpacing: "0.04em",
                            }}>
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}