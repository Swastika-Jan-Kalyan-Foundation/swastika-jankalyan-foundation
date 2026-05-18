import ReactMarkdown from "react-markdown";
import termsText from "../../public/legal/termsofuse.md?raw";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

  :root {
    --green-dark:   #1a4a2e;
    --green-mid:    #1e5c38;
    --green-accent: #4ade80;
    --green-light:  #d1fae5;
    --green-muted:  #6ee7b7;
    --bg-body:      #f0faf4;
    --card-bg:      #ffffff;
    --text-main:    #1c2b22;
    --text-muted:   #4b7060;
    --text-light:   #7fa890;
    --border:       #c6e8d4;
  }

  .tou-page {
    font-family: 'Sora', sans-serif;
    background-color: var(--bg-body);
    min-height: 100vh;
    color: var(--text-main);
  }

  .tou-hero {
    position: relative;
    background: linear-gradient(140deg, #0f3320 0%, #1a5c38 55%, #1e7a4a 100%);
    overflow: hidden;
    padding: 72px 24px 0;
    text-align: center;
  }

  .tou-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  .tou-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .tou-orb-1 {
    width: 320px; height: 320px;
    background: rgba(74, 222, 128, 0.18);
    top: -80px; left: -60px;
  }
  .tou-orb-2 {
    width: 260px; height: 260px;
    background: rgba(16, 185, 129, 0.15);
    bottom: 40px; right: -40px;
  }

  .tou-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
    border-radius: 999px;
    padding: 6px 18px;
    color: var(--green-muted);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 24px;
    backdrop-filter: blur(4px);
  }
  .tou-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--green-accent);
    animation: tou-pulse 2s infinite;
  }
  @keyframes tou-pulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(0.85); }
  }

  .tou-hero-title {
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 16px;
    line-height: 1.15;
  }
  .tou-hero-title span {
    color: var(--green-accent);
  }

  .tou-divider-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .tou-divider-line {
    height: 1px;
    width: 56px;
    background: rgba(110, 231, 183, 0.4);
    border-radius: 2px;
  }
  .tou-divider-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green-muted);
  }

  .tou-hero-sub {
    font-size: 15px;
    color: rgba(209,250,229,0.75);
    max-width: 520px;
    margin: 0 auto 28px;
    line-height: 1.7;
    font-weight: 300;
  }

  .tou-meta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    color: rgba(110,231,183,0.65);
    margin-bottom: 48px;
  }

  .tou-hero-svgs {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .tou-wave {
    display: block;
    width: 100%;
    margin-bottom: -2px;
  }

  .tou-body {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px 72px;
  }

  .tou-card {
    background: var(--card-bg);
    border-radius: 24px;
    border: 1px solid var(--border);
    box-shadow: 0 8px 40px rgba(26,74,46,0.08), 0 1px 3px rgba(26,74,46,0.05);
    overflow: hidden;
    position: relative;
  }

  .tou-card::before {
    content: '';
    position: absolute;
    left: 0; top: 40px; bottom: 40px;
    width: 3px;
    background: linear-gradient(180deg, var(--green-accent) 0%, transparent 100%);
    border-radius: 0 2px 2px 0;
  }

  .tou-topbar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 14px 28px;
    background: #f6fbf8;
    border-bottom: 1px solid var(--border);
  }
  .tou-tb-dot {
    width: 12px; height: 12px;
    border-radius: 50%;
  }
  .tou-tb-label {
    margin-left: 10px;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 3px 14px;
    font-size: 11px;
    color: var(--text-light);
    letter-spacing: 0.04em;
    font-family: 'Sora', sans-serif;
  }

  .tou-content {
    padding: 48px 56px;
  }
  @media (max-width: 640px) {
    .tou-content { padding: 32px 24px; }
  }

  .tou-md h1 {
    font-size: 1.9rem;
    font-weight: 800;
    color: var(--text-main);
    margin: 0 0 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
    line-height: 1.2;
    font-family: 'Sora', sans-serif;
  }
  .tou-md h2 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--green-mid);
    margin: 36px 0 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Sora', sans-serif;
  }
  .tou-md h2::before {
    content: '';
    display: inline-block;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--green-accent);
    flex-shrink: 0;
  }
  .tou-md h3 {
    font-size: 1.02rem;
    font-weight: 600;
    color: var(--text-main);
    margin: 24px 0 8px;
    font-family: 'Sora', sans-serif;
  }
  .tou-md p {
    font-size: 14.5px;
    line-height: 1.85;
    color: var(--text-muted);
    margin: 0 0 14px;
  }
  .tou-md ul, .tou-md ol {
    padding-left: 20px;
    margin: 0 0 16px;
  }
  .tou-md li {
    font-size: 14.5px;
    line-height: 1.8;
    color: var(--text-muted);
    margin-bottom: 6px;
  }
  .tou-md ul li::marker { color: var(--green-accent); }
  .tou-md a {
    color: var(--green-mid);
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid var(--green-light);
    transition: border-color 0.2s;
  }
  .tou-md a:hover { border-color: var(--green-accent); }
  .tou-md strong { color: var(--text-main); font-weight: 600; }
  .tou-md blockquote {
    margin: 20px 0;
    padding: 14px 20px;
    background: var(--green-light);
    border-left: 3px solid var(--green-accent);
    border-radius: 0 10px 10px 0;
    color: var(--text-muted);
    font-size: 14px;
  }
  .tou-md code {
    background: var(--green-light);
    color: var(--green-mid);
    padding: 2px 7px;
    border-radius: 5px;
    font-size: 13px;
    font-family: 'Courier New', monospace;
  }
  .tou-md hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 28px 0;
  }

  .tou-cta {
    margin: 8px 56px 48px;
    padding: 20px 24px;
    background: linear-gradient(120deg, #ecfdf5 0%, #d1fae5 100%);
    border: 1px solid var(--border);
    border-radius: 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }
  @media (max-width: 640px) {
    .tou-cta { margin: 8px 24px 40px; }
  }
  .tou-cta-icon {
    width: 42px; height: 42px;
    border-radius: 12px;
    background: var(--green-mid);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .tou-cta-text { flex: 1; min-width: 180px; }
  .tou-cta-text p { margin: 0; }
  .tou-cta-text .cta-heading {
    font-size: 14px; font-weight: 700;
    color: var(--green-dark); margin-bottom: 2px;
    font-family: 'Sora', sans-serif;
  }
  .tou-cta-text .cta-sub {
    font-size: 13px;
    color: var(--text-muted);
  }
  .tou-cta-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--green-mid);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 13px; font-weight: 600;
    padding: 10px 20px;
    border-radius: 10px;
    border: none; cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    flex-shrink: 0;
  }
  .tou-cta-btn:hover {
    background: var(--green-dark);
    transform: translateY(-1px);
  }

  .tou-footer-note {
    text-align: center;
    font-size: 13px;
    color: var(--text-light);
    margin-top: 28px;
    font-family: 'Sora', sans-serif;
  }
`;

export default function TermsOfUse() {
  return (
    <>
      <style>{styles}</style>
      <div className="tou-page">

        <div className="tou-hero">
          <div className="tou-orb tou-orb-1" />
          <div className="tou-orb tou-orb-2" />

          <div className="tou-hero-svgs">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
              style={{ position:'absolute', top:24, left:32, opacity:0.25 }}>
              <path d="M32 4C32 4 8 20 8 40a24 24 0 0048 0C56 20 32 4 32 4z" fill="#4ade80"/>
              <path d="M32 4v52" stroke="#4ade80" strokeWidth="1.5" opacity="0.5"/>
            </svg>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
              style={{ position:'absolute', top:18, right:48, opacity:0.22 }}>
              <circle cx="24" cy="24" r="20" stroke="#6ee7b7" strokeWidth="1.5"/>
              <path d="M24 34V18M17 25c3-4 7-7 7-7s4 3 7 7" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none"
              style={{ position:'absolute', bottom:50, left:12, opacity:0.1 }}>
              <circle cx="70" cy="70" r="65" stroke="#4ade80" strokeWidth="1" strokeDasharray="6 6"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{ position:'absolute', bottom:80, right:72, opacity:0.3 }}>
              <path d="M12 2v20M2 12h20" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
              style={{ position:'absolute', top:'45%', right:18, opacity:0.18 }}>
              <path d="M18 2C18 2 4 12 4 24a14 14 0 0028 0C32 12 18 2 18 2z" fill="#4ade80"/>
            </svg>
          </div>

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="tou-badge">
              <span className="tou-badge-dot" />
              Legal Document
            </div>

            <h1 className="tou-hero-title">
              Terms of <span>Use</span>
            </h1>

            <div className="tou-divider-row">
              <div className="tou-divider-line" />
              <div className="tou-divider-dot" />
              <div className="tou-divider-line" />
            </div>

            <p className="tou-hero-sub">
              Please read these terms carefully before using our platform. By accessing our services, you agree to be bound by these conditions.
            </p>

            <div className="tou-meta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              Last updated:&nbsp;
              {new Date().toLocaleDateString("en-IN", { year:"numeric", month:"long", day:"numeric" })}
            </div>
          </div>

          <svg className="tou-wave" viewBox="0 0 1440 56" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,56 L0,28 Q180,0 360,20 Q540,40 720,18 Q900,-4 1080,22 Q1260,48 1440,28 L1440,56 Z"
              fill="#f0faf4"/>
          </svg>
        </div>

        <div className="tou-body">
          <div className="tou-card">

            <div className="tou-topbar">
              <div className="tou-tb-dot" style={{ background:'#fca5a5' }} />
              <div className="tou-tb-dot" style={{ background:'#fcd34d' }} />
              <div className="tou-tb-dot" style={{ background:'#4ade80' }} />
              <span className="tou-tb-label">Terms of Use — Legal Document</span>
            </div>

            <div className="tou-content">
              <div className="tou-md">
                <ReactMarkdown>{termsText}</ReactMarkdown>
              </div>
            </div>

            <div className="tou-cta">
              <div className="tou-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.5C16.5 22.15 20 17.25 20 12V6L12 2z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <div className="tou-cta-text">
                <p className="cta-heading">Have questions about these terms?</p>
                <p className="cta-sub">Our team is happy to clarify anything in this document.</p>
              </div>
              <a href="mailto:info@swastikajankalyanfoundation.com" className="tou-cta-btn">
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
            </div>
          </div>

          <p className="tou-footer-note">
            © {new Date().getFullYear()} Swastika Jan Kalyan Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </>
  );
}