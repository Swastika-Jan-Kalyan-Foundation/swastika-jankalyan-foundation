import { useState, useEffect, useRef } from "react";

const pastProjects = [
    {
        year: "2025",
        title: "Sustainable Action for Neighbourhood Kalyan And Local Progress",
        category: "Enviroment",
        logo: "https://res.cloudinary.com/dztzunudp/image/upload/v1779192790/sjkf_sankalp.png",
        desc: "Project S.A.N.K.A.L.P (Sustainable Action for Neighbourhood Kalyan And Local Progress) is an initiative by the Swastika Jan Kalyan Foundation focused on creating cleaner, greener, and healthier neighborhoods. Through this project, we are carrying out spot cleaning, sanitation drives, plantation activities, and public space beautification using our own foundation resources to improve hygiene, promote environmental care, and uplift community living standards.",
        achievement: "50+ Household Helped",
        color: "#40916c",
        emoji: "📚",
        img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
            "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
            "https://images.unsplash.com/photo-1594312915251-48db9280c8f1?w=800&q=80",
        ],
    },
    {
        year: "2026",
        title: "Akshar Dhara",
        category: "Education",
        logo: "https://res.cloudinary.com/dztzunudp/image/upload/v1779192791/sjkf_akshardhara.png",
        desc: `'Akshar' means 'words' and 'Dhara' means 'Flow. By 'Akshar Dhara' we mean a project to steamline the flow of knowledge through words to desirous students. Under this project, we are developing a public library and a space for desirous students at neglibible cost for them to provide a state of the art facility for them to study, work and achieve their dreams. As a purpose for the same, we had recently conducted the "Book Donation Drive" from 21st March to 20th April 2026 where we collected 100+ books including both academic and non-academic.`,
        achievement: "600+ Students Empowered",
        color: "#2d6a4f",
        emoji: "🌳",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
            "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
            "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
        ],
    },

  
];

const upcomingProjects = [
    {
        quarter: "Q3 2026",
        title: "Skill Training & Research for Optimization of Talent",
        category: "Education",
        logo: "https://res.cloudinary.com/dztzunudp/image/upload/v1779192789/sjkf_strot.png",
        desc: "Skill Training & Research for Optimization of Talent (STROT) is a flagship upcoming project of Swastika Jan Kalyan Foundation (SJKF) in the field of education bridging the future readiness & societal gap in the students. This project aims to inculcate the skills and knowledge of basics of mordern-day daily confronted topics and subjects like AI, Finance, Geopolitics, Communication Skills, Personality Enhancement, etc. With this project, we also aim to bridge the gap in the society formed between the priviledged and the marginalized children and to bring every child at par with each other in terms of their basic  day-to-day skills and knowledge, ultimately briding the future readiness & the societal gap.",
        status: "Planning Phase",
        statusColor: "#f59e0b",
        target: "500 Households",
        emoji: "☀️",
        gradient: "from-amber-50 to-green-50",
        border: "#f59e0b",
        images: [
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
            "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80",
            "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80",
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
        ],
    },
    
];

const newsArchive = [
    {
        date: "May 2025",
        tag: "Media Coverage",
        tagColor: "#2d6a4f",
       
        desc: "Print Media recognizes our efforts in the field of environment even during the ongoing registration process!",
        source: "Prabhat Khabar",
        images: [
           
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666616/newsarch2.jpg",
           
           
        ],
    },
    {
        date: "Jun 2025",
        tag: "Media Coverage",
        tagColor: "#2d6a4f",
       
        desc: "SJKF was recognized for its commendable work of tree plantation in Governmnet Integrated High School, Hatia.",
        source: "Prabhat Khabar",
        images: [
         
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666616/newsarch3.jpg",
           
        ],
    },
    {
        date: "Aug 2025",
        tag: "Media Coverage",
        tagColor: "#2d6a4f",
       
        desc: "We were recognized for our awarenes campaign for 1 day and plantation drive in Lower Hatia region.",
        source: "Prabhat Khabar",
        images: [
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666616/newsarch1.jpg",
          
           
        ],
    },
   
];

const eventsData = [
      {
        date: "21 Jun 2025",
        day: "SAT",
        title: "International Yoga Day",
        category: "Health",
        categoryColor: "#40916c",
        location: "Bishu Palance",
        time: "10:00 AM – 12:00 PM",
        desc: "Our NGO celebrated International Yoga Day by organizing a yoga session to promote health, wellness, and community unity.",
        //spots: "20 spots left",
        images: [
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666147/yogaday20261.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666155/yogaday20262.jpg",

        ],
    },
   
    
    {
        date: "15 Aug 2025",
        day: "SUN",
        title: "Independence Day Celebration",
        category: "Patriotism",
        categoryColor: "#2d6a4f",
        location: "near Swastika Jan Kalyan Foundation Office",
        time: "7:00 AM – 12:00 PM",
        desc: "Celebrating the spirit of freedom, unity, and patriotism with our community through cultural activities and social initiatives.",
        //spots: "48 spots left",
        images: [
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778663840/independenceday20251.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778663840/independenceday20252.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778663840/independenceday20253.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778663841/independenceday20255.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778663840/independence20254.jpg"
        ],
    },
    {
        date: "15 Nov 2025",
        day: "SAT",
        title: "Birsa Munda Jayanti",
        category: "Enviroment",
        categoryColor: "#40916c",
        location: "Birsa Chowk",
        time: "10:00 AM – 4:00 PM",
        desc: "Celebrating Birsa Munda Jayanti to remember his courage, leadership, and contribution to society.",
        //spots: "20 spots left",
        images: [
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666246/birsamundajayanti20262.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1778666200/birsamundajayanti20261.jpg",

        ],
    },
    {
        date: "26 Jan 2026",
        day: "SAT",
        title: "Republic Day",
        category: "Patriotism",
        categoryColor: "#40916c",
        location: "near Swastika Jan Kalyan Foundation office",
        time: "7:00 AM – 12:00 PM",
        desc: "Celebrating Republic Day with pride, unity, and respect for the values of our Constitution.",
        //spots: "20 spots left",
        images: [
            "https://res.cloudinary.com/dztzunudp/image/upload/v1779195530/sjkf_republicday.jpg",
            "https://res.cloudinary.com/dztzunudp/image/upload/v1779195529/sjkf_republicday2.jpg",

        ],
    },
   
];

// ── Gallery Modal ────────────────────────────────────────────────────────────

const GalleryModal = ({ item, onClose }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [thumbsVisible, setThumbsVisible] = useState(true);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") setActiveIdx(i => Math.min(i + 1, item.images.length - 1));
            if (e.key === "ArrowLeft") setActiveIdx(i => Math.max(i - 1, 0));
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [item.images.length, onClose]);

    const title = item.title;
    const subtitle = item.category || item.tag || item.source || "";
    const accentColor = item.color || item.statusColor || item.tagColor || item.categoryColor || "#2d6a4f";

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 9999,
                background: "rgba(10,18,12,0.88)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
                backdropFilter: "blur(6px)",
                animation: "modalFadeIn 0.25s ease",
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: "#ffffff",
                    borderRadius: 28,
                    overflow: "hidden",
                    width: "100%",
                    maxWidth: 880,
                    maxHeight: "90vh",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 32px 80px rgba(0,0,0,0.45)",
                    animation: "modalSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
            >
                {/* Modal Header */}
                <div style={{
                    padding: "20px 28px 18px",
                    borderBottom: "1px solid rgba(45,106,79,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    flexShrink: 0,
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                        {item.emoji && (
                            <span style={{
                                fontSize: 28, width: 48, height: 48, borderRadius: 14,
                                background: `${accentColor}12`,
                                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                            }}>{item.emoji}</span>
                        )}
                        <div>
                            <p style={{ fontSize: 11, fontWeight: 700, color: accentColor, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 2px" }}>
                                {subtitle}
                            </p>
                            <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 18, color: "#1a2e1a", margin: 0, lineHeight: 1.3 }}>
                                {title}
                            </h3>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            width: 38, height: 38, borderRadius: "50%",
                            border: "1.5px solid rgba(45,106,79,0.18)",
                            background: "#f8faf8", cursor: "pointer",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#4b5563", transition: "all 0.2s ease", flexShrink: 0,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#fee2e2"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.color = "#dc2626"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#f8faf8"; e.currentTarget.style.borderColor = "rgba(45,106,79,0.18)"; e.currentTarget.style.color = "#4b5563"; }}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                {/* Main Image Viewer */}
                <div style={{  flex: 1,
    position: "relative",
    background: "#0f1a13",
    minHeight: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    padding: "12px",}}>
                    <img
                        key={activeIdx}
                        src={item.images[activeIdx]}
                        alt={`${title} — photo ${activeIdx + 1}`}
                        style={{
                            width: "100%", height: "100%", objectFit: "contain",
                            animation: "imgFadeIn 0.3s ease",
                        }}
                    />

                    {/* Image counter */}
                    <div style={{
                        position: "absolute", top: 16, right: 16,
                        background: "rgba(0,0,0,0.55)", borderRadius: 20,
                        padding: "5px 14px", fontSize: 12, fontWeight: 700, color: "#ffffff",
                        backdropFilter: "blur(4px)",
                    }}>
                        {activeIdx + 1} / {item.images.length}
                    </div>

                    {/* Prev/Next arrows */}
                    {activeIdx > 0 && (
                        <button
                            onClick={() => setActiveIdx(i => i - 1)}
                            style={{
                                position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                                width: 44, height: 44, borderRadius: "50%",
                                background: "rgba(255,255,255,0.92)",
                                border: "none", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                                transition: "transform 0.2s ease, background 0.2s ease",
                                color: "#1a2e1a",
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                    )}
                    {activeIdx < item.images.length - 1 && (
                        <button
                            onClick={() => setActiveIdx(i => i + 1)}
                            style={{
                                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                                width: 44, height: 44, borderRadius: "50%",
                                background: "rgba(255,255,255,0.92)",
                                border: "none", cursor: "pointer",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
                                transition: "transform 0.2s ease, background 0.2s ease",
                                color: "#1a2e1a",
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-50%) scale(1.1)"}
                            onMouseLeave={e => e.currentTarget.style.transform = "translateY(-50%) scale(1)"}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>
                    )}
                </div>

                {/* Thumbnail Strip */}
                <div style={{
                    display: "flex", gap: 8, padding: "14px 20px",
                    background: "#f8faf8", borderTop: "1px solid rgba(45,106,79,0.08)",
                    overflowX: "auto", flexShrink: 0,
                }}>
                    {item.images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIdx(idx)}
                            style={{
                                flexShrink: 0,
                                width: 70, height: 52,
                                borderRadius: 10,
                                overflow: "hidden",
                                border: activeIdx === idx ? `2.5px solid ${accentColor}` : "2.5px solid transparent",
                                padding: 0, cursor: "pointer",
                                transition: "border-color 0.2s ease, transform 0.2s ease, opacity 0.2s ease",
                                opacity: activeIdx === idx ? 1 : 0.55,
                                transform: activeIdx === idx ? "scale(1.05)" : "scale(1)",
                                background: "none",
                            }}
                        >
                            <img
                                src={img}
                                alt={`thumb ${idx + 1}`}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

// ── Slide panel components ──────────────────────────────────────────────

const NewsArchivePanel = ({ onItemClick }) => (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
            <span className="section-label">News Archive</span>
            <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e1a", textAlign: "center", marginBottom: 16, lineHeight: 1.25 }}>
            In the <span style={{ color: "#2d6a4f" }}>News</span>
        </h2>
        <p style={{ color: "#6b7280", fontSize: 14.5, textAlign: "center", maxWidth: 560, margin: "0 auto 56px", lineHeight: 1.8 }}>
            Stories of our work as covered by media houses, and updates straight from the Foundation.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {newsArchive.map((item, i) => (
                <div
                    key={i}
                    onClick={() => onItemClick(item)}
                    style={{
                        background: "#ffffff",
                        borderRadius: 20,
                        padding: "28px 32px",
                        border: "1px solid rgba(45,106,79,0.10)",
                        boxShadow: "0 4px 20px rgba(45,106,79,0.06)",
                        display: "flex", alignItems: "flex-start", gap: 24,
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        cursor: "pointer",
                        position: "relative",
                    }}
                    className="project-card"
                    onMouseEnter={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "1")}
                    onMouseLeave={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "0")}
                >
                    {/* Date column */}
                    <div style={{
                        flexShrink: 0, width: 72, textAlign: "center",
                        background: "linear-gradient(135deg, #e8f5ee, #d8efe0)",
                        borderRadius: 14, padding: "12px 8px",
                        border: "1px solid rgba(45,106,79,0.12)",
                    }}>
                        <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 13, color: "#2d6a4f", margin: 0, lineHeight: 1.3 }}>
                            {item.date.split(" ")[0]}
                        </p>
                        <p style={{ fontSize: 11, color: "#52b788", fontWeight: 600, margin: 0, letterSpacing: "0.05em" }}>
                            {item.date.split(" ")[1]}
                        </p>
                    </div>
                    {/* Content */}
                    <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                            <span style={{
                                background: `${item.tagColor}18`, border: `1px solid ${item.tagColor}40`,
                                color: item.tagColor, fontSize: 11, fontWeight: 700,
                                padding: "3px 10px", borderRadius: 20, letterSpacing: "0.07em",
                            }}>{item.tag}</span>
                            <span style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500 }}>via {item.source}</span>
                        </div>
                        <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 17, color: "#1a2e1a", margin: "0 0 8px", lineHeight: 1.3 }}>
                            {item.title}
                        </h3>
                        <p style={{ color: "#4b5563", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
                    </div>
                    {/* Gallery hint */}
                    <div className="gallery-hint" style={{
                        position: "absolute", right: 20, bottom: 20,
                        display: "flex", alignItems: "center", gap: 6,
                        background: `${item.tagColor}18`, border: `1px solid ${item.tagColor}30`,
                        borderRadius: 20, padding: "5px 12px",
                        opacity: 0, transition: "opacity 0.2s ease",
                        pointerEvents: "none",
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={item.tagColor} strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span style={{ fontSize: 11, fontWeight: 700, color: item.tagColor }}>View Gallery</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const EventsPanel = ({ onItemClick }) => (
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
            <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
            <span className="section-label">Events</span>
            <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
        </div>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e1a", textAlign: "center", marginBottom: 16, lineHeight: 1.25 }}>
            Events <span style={{ color: "#2d6a4f" }}>Engagement</span>
        </h2>
        <p style={{ color: "#6b7280", fontSize: 14.5, textAlign: "center", maxWidth: 560, margin: "0 auto 56px", lineHeight: 1.8 }}>
            Join us in the field. Every event is a chance to show up, connect, and contribute.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 24 }}>
            {eventsData.map((ev, i) => (
                <div
                    key={i}
                    className="project-card"
                    onClick={() => onItemClick(ev)}
                    style={{
                        background: "#ffffff", borderRadius: 24, overflow: "hidden",
                        border: "1px solid rgba(45,106,79,0.10)",
                        boxShadow: "0 4px 24px rgba(45,106,79,0.08)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                    }}
                    onMouseEnter={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "1")}
                    onMouseLeave={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "0")}
                >
                    {/* Header strip */}
                    <div style={{
                        background: "linear-gradient(135deg, #1b4332, #2d6a4f)",
                        padding: "20px 28px",
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <div style={{
                                background: "rgba(255,255,255,0.12)", borderRadius: 12,
                                padding: "8px 14px", textAlign: "center", minWidth: 52,
                            }}>
                                <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#ffffff", margin: 0, lineHeight: 1 }}>
                                    {ev.date.split(" ")[0]}
                                </p>
                                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", margin: 0, fontWeight: 600, letterSpacing: "0.1em" }}>
                                    {ev.day}
                                </p>
                            </div>
                            <div>
                                <span style={{
                                    background: `${ev.categoryColor}99`, color: "#ffffff",
                                    fontSize: 10, fontWeight: 700, padding: "3px 10px",
                                    borderRadius: 20, letterSpacing: "0.1em", display: "inline-block", marginBottom: 4,
                                }}>{ev.category}</span>
                                <h3 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 16, color: "#ffffff", margin: 0, lineHeight: 1.3 }}>
                                    {ev.title}
                                </h3>
                            </div>
                        </div>
                        <div style={{
                            background: "rgba(255,255,255,0.15)", borderRadius: 20,
                            padding: "4px 12px", fontSize: 11, fontWeight: 700,
                            color: "#d8f3dc", whiteSpace: "nowrap",
                        }}>{ev.spots}</div>
                    </div>
                    {/* Body */}
                    <div style={{ padding: "22px 28px 26px" }}>
                        <p style={{ color: "#4b5563", fontSize: 13.5, lineHeight: 1.75, marginBottom: 18 }}>{ev.desc}</p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 500 }}>{ev.location}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#52b788" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                                </svg>
                                <span style={{ fontSize: 12.5, color: "#374151", fontWeight: 500 }}>{ev.time}</span>
                            </div>
                        </div>
                    </div>
                    {/* Gallery hint badge */}
                    <div className="gallery-hint" style={{
                        position: "absolute", right: 16, bottom: 16,
                        display: "flex", alignItems: "center", gap: 6,
                        background: `${ev.categoryColor}18`, border: `1px solid ${ev.categoryColor}30`,
                        borderRadius: 20, padding: "5px 12px",
                        opacity: 0, transition: "opacity 0.2s ease",
                        pointerEvents: "none",
                    }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={ev.categoryColor} strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="8.5" cy="8.5" r="1.5"/>
                            <polyline points="21 15 16 10 5 21"/>
                        </svg>
                        <span style={{ fontSize: 11, fontWeight: 700, color: ev.categoryColor }}>View Gallery</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export const Projects = () => {
    const [activePanel, setActivePanel] = useState("projects");
    const [slideDir, setSlideDir] = useState(null);
    const [animating, setAnimating] = useState(false);
    const [entering, setEntering] = useState(false);
    const [galleryItem, setGalleryItem] = useState(null);

    const navigate = (dir) => {
        if (animating) return;
        const order = ["news", "projects", "events"];
        const cur = order.indexOf(activePanel);
        const next = dir === "left"
            ? order[Math.max(cur - 1, 0)]
            : order[Math.min(cur + 1, 2)];
        if (next === activePanel) return;
        setSlideDir(dir);
        setAnimating(true);
        setEntering(false);
        setTimeout(() => {
            setActivePanel(next);
            setEntering(true);
            setTimeout(() => {
                setAnimating(false);
                setEntering(false);
                setSlideDir(null);
            }, 400);
        }, 380);
    };

    return (
        <>
            {galleryItem && (
                <GalleryModal item={galleryItem} onClose={() => setGalleryItem(null)} />
            )}

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
        .project-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(45,106,79,0.15) !important; }
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

        .slide-exit-left {
          animation: slideExitLeft 0.38s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .slide-exit-right {
          animation: slideExitRight 0.38s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .slide-enter-left {
          animation: slideEnterLeft 0.38s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .slide-enter-right {
          animation: slideEnterRight 0.38s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes slideExitLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-80px); }
        }
        @keyframes slideExitRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(80px); }
        }
        @keyframes slideEnterLeft {
          from { opacity: 0; transform: translateX(80px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideEnterRight {
          from { opacity: 0; transform: translateX(-80px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .nav-arrow-btn {
          display: flex; align-items: center; gap: 10px;
          background: #ffffff;
          border: 1.5px solid rgba(45,106,79,0.18);
          border-radius: 40px;
          padding: 10px 20px;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          font-weight: 700;
          font-size: 12.5px;
          color: #2d6a4f;
          letter-spacing: 0.04em;
          box-shadow: 0 2px 12px rgba(45,106,79,0.10);
          transition: all 0.22s ease;
          user-select: none;
          white-space: nowrap;
        }
        .nav-arrow-btn:hover {
          background: linear-gradient(135deg, #e8f5ee, #d8efe0);
          border-color: rgba(45,106,79,0.35);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(45,106,79,0.15);
        }
        .nav-arrow-btn:disabled {
          opacity: 0.3;
          cursor: default;
          transform: none;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes imgFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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

                {/* ── NAV BAR ── */}
                <div style={{
                    maxWidth: 1100, margin: "0 auto 56px",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                    {/* Left arrow — News Archive */}
                    <button
                        className="nav-arrow-btn"
                        onClick={() => navigate("left")}
                        disabled={activePanel === "news" || animating}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                        </svg>
                        News Archive
                    </button>

                    {/* Centre dots */}
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {["news", "projects", "events"].map(p => (
                            <div key={p} style={{
                                width: activePanel === p ? 24 : 8,
                                height: 8,
                                borderRadius: 4,
                                background: activePanel === p ? "#2d6a4f" : "rgba(45,106,79,0.2)",
                                transition: "all 0.3s ease",
                            }} />
                        ))}
                    </div>

                    {/* Right arrow — Events */}
                    <button
                        className="nav-arrow-btn"
                        onClick={() => navigate("right")}
                        disabled={activePanel === "events" || animating}
                    >
                        Events
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </button>
                </div>

                {/* ── SLIDING PANEL ── */}
                <div style={{ overflow: "hidden" }}>
                    <div
                        className={
                            animating && !entering
                                ? (slideDir === "left" ? "slide-exit-left" : "slide-exit-right")
                                : entering
                                ? (slideDir === "left" ? "slide-enter-left" : "slide-enter-right")
                                : "fade-in-up"
                        }
                    >
                        {activePanel === "projects" && (
                            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", marginBottom: 16 }}>
                                    <div style={{ height: 1, width: 48, background: "#2d6a4f", opacity: 0.4 }} />
                                    <span className="section-label">Ongoing Projects & Achievements</span>
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

                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
                                    {pastProjects.map((project, i) => (
                                        <div
                                            key={project.title}
                                            className="upcoming-card"
                                            //onClick={() => setGalleryItem(project)}
                                            style={{
                                                background: "#ffffff",
                                                borderRadius: 24,
                                                padding: "32px 28px",
                                                border: `1px solid ${project.color}22`,
                                                boxShadow: `0 4px 24px ${project.color}12`,
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                position: "relative",
                                                overflow: "hidden",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {/* Top color accent bar */}
                                            <div style={{
                                                position: "absolute", top: 0, left: 0, right: 0, height: 4,
                                                background: project.color,
                                                borderRadius: "24px 24px 0 0",
                                            }} />

                                            {/* Achievement badge */}
                                            <div style={{
                                                display: "inline-flex", alignItems: "center", gap: 6,
                                                background: `${project.color}18`,
                                                border: `1px solid ${project.color}40`,
                                                borderRadius: 20, padding: "4px 12px",
                                                marginBottom: 20,
                                            }}>
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span style={{ fontSize: 11, fontWeight: 700, color: project.color, letterSpacing: "0.08em" }}>
                                                    {project.achievement}
                                                </span>
                                            </div>

                                            {/* Year */}
                                            <div style={{
                                                position: "absolute", top: 24, right: 24,
                                                background: "linear-gradient(135deg, #f0faf4, #e4f5eb)",
                                                color: "#2d6a4f", fontWeight: 700, fontSize: 11,
                                                padding: "4px 12px", borderRadius: 20,
                                                border: "1px solid rgba(45,106,79,0.15)",
                                            }}>{project.year}</div>

                                            {/* Logo + Title */}
                                            <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                                                <div style={{
                                                    width: 88, height: 88, borderRadius: 18,
                                                    background: `${project.color}12`,
                                                    border: `1.5px dashed ${project.color}40`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    flexShrink: 0, overflow: "hidden",
                                                }}>
                                                    {project.logo ? (
                                                        <img
                                                            src={project.logo}
                                                            alt={`${project.title} logo`}
                                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                                        />
                                                    ) : (
                                                        <span style={{ fontSize: 38, lineHeight: 1 }}>{project.emoji}</span>
                                                    )}
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: 11, fontWeight: 600, color: project.color, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>
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

                                            {/* Photos count footer */}
                                            <div style={{
                                                display: "flex", alignItems: "center", gap: 8,
                                                paddingTop: 16,
                                                borderTop: `1px solid ${project.color}1a`,
                                            }}>
                                               {/* <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2.5">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                                    <circle cx="8.5" cy="8.5" r="1.5"/>
                                                    <polyline points="21 15 16 10 5 21"/>
                                                </svg>
                                               } <span style={{ fontSize: 12.5, fontWeight: 600, color: "#374151" }}>Photos: </span>
                                                <span style={{ fontSize: 12.5, fontWeight: 700, color: project.color }}>{project.images.length} available</span>*/}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total impact summary strip */}
                                <div style={{ marginTop: 56, background: "linear-gradient(135deg, #1b4332, #2d6a4f)", borderRadius: 20, padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
                                    <div>
                                        <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: "#ffffff", margin: "0 0 4px" }}>🏆 Collective Achievement</p>
                                        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>Across all past projects combined</p>
                                    </div>
                                    <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                                        {[{ val: "50+", lbl: "People Helped" }, { val: "2", lbl: "Major Projects" }].map(stat => (
                                            <div key={stat.lbl} style={{ textAlign: "center" }}>
                                                <p style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 24, color: "#74c69d", margin: "0 0 2px" }}>{stat.val}</p>
                                                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>{stat.lbl}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                        {activePanel === "news" && <NewsArchivePanel onItemClick={setGalleryItem} />}
                        {activePanel === "events" && <EventsPanel onItemClick={setGalleryItem} />}
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
                        <span className="section-label">Upcoming Projects</span>
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
                            <div
                                key={project.title}
                                className="upcoming-card"
                                
                                style={{
                                    background: "#ffffff",
                                    borderRadius: 24,
                                    padding: "32px 28px",
                                    border: `1px solid ${project.border}22`,
                                    boxShadow: `0 4px 24px ${project.border}12`,
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "1")}
                                onMouseLeave={e => e.currentTarget.querySelector('.gallery-hint') && (e.currentTarget.querySelector('.gallery-hint').style.opacity = "0")}
                            >
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

                                {/* Logo + Title */}
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                                    <div style={{
                                        width: 88, height: 88, borderRadius: 18,
                                        background: `${project.border}12`,
                                        border: `1.5px dashed ${project.border}40`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0, overflow: "hidden",
                                    }}>
                                        {project.logo ? (
                                            <img
                                                src={project.logo}
                                                alt={`${project.title} logo`}
                                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                            />
                                        ) : (
                                            <span style={{ fontSize: 38, lineHeight: 1 }}>{project.emoji}</span>
                                        )}
                                    </div>
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
                                    justifyContent: "space-between",
                                }}>
                                   
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
                            <a href="https://swastikajankalyanfoundation.netlify.app/volunteerwus" style={{
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