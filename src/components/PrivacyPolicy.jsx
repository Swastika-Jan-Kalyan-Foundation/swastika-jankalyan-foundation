import ReactMarkdown from "react-markdown";
import privacyText from "../../public/legal/privacypolicy.md?raw";

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

  .pp-page {
    font-family: 'Sora', sans-serif;
    background-color: var(--bg-body);
    min-height: 100vh;
    color: var(--text-main);
  }

  .pp-hero {
    position: relative;
    background: linear-gradient(140deg, #0f3320 0%, #1a5c38 55%, #1e7a4a 100%);
    overflow: hidden;
    padding: 72px 24px 0;
    text-align: center;
  }
  .pp-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
  }

  .pp-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
  }
  .pp-orb-1 {
    width: 320px; height: 320px;
    background: rgba(74, 222, 128, 0.18);
    top: -80px; left: -60px;
  }
  .pp-orb-2 {
    width: 260px; height: 260px;
    background: rgba(16, 185, 129, 0.15);
    bottom: 40px; right: -40px;
  }

  .pp-badge {
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
  .pp-badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: var(--green-accent);
    animation: pp-pulse 2s infinite;
  }
  @keyframes pp-pulse {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.5; transform: scale(0.85); }
  }

  .pp-hero-title {
    font-size: clamp(2.4rem, 6vw, 3.8rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 16px;
    line-height: 1.15;
  }
  .pp-hero-title span { color: var(--green-accent); }

  .pp-divider-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .pp-divider-line {
    height: 1px; width: 56px;
    background: rgba(110, 231, 183, 0.4);
    border-radius: 2px;
  }
  .pp-divider-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green-muted);
  }

  .pp-hero-sub {
    font-size: 15px;
    color: rgba(209,250,229,0.75);
    max-width: 520px;
    margin: 0 auto 28px;
    line-height: 1.7;
    font-weight: 300;
  }

  .pp-meta {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    color: rgba(110,231,183,0.65);
    margin-bottom: 48px;
  }

  .pp-hero-svgs {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .pp-wave {
    display: block;
    width: 100%;
    margin-bottom: -2px;
  }

  .pp-body {
    max-width: 860px;
    margin: 0 auto;
    padding: 48px 24px 72px;
  }

  .pp-card {
    background: var(--card-bg);
    border-radius: 24px;
    border: 1px solid var(--border);
    box-shadow: 0 8px 40px rgba(26,74,46,0.08), 0 1px 3px rgba(26,74,46,0.05);
    overflow: hidden;
    position: relative;
  }
  .pp-card::before {
    content: '';
    position: absolute;
    left: 0; top: 40px; bottom: 40px;
    width: 3px;
    background: linear-gradient(180deg, var(--green-accent) 0%, transparent 100%);
    border-radius: 0 2px 2px 0;
  }

  .pp-topbar {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 14px 28px;
    background: #f6fbf8;
    border-bottom: 1px solid var(--border);
  }
  .pp-tb-dot { width: 12px; height: 12px; border-radius: 50%; }
  .pp-tb-label {
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

  .pp-content {
    padding: 48px 56px;
  }
  @media (max-width: 640px) {
    .pp-content { padding: 32px 24px; }
  }

  .pp-md h1 {
    font-size: 1.9rem; font-weight: 800;
    color: var(--text-main);
    margin: 0 0 12px;
    padding-bottom: 14px;
    border-bottom: 1px solid var(--border);
    line-height: 1.2;
    font-family: 'Sora', sans-serif;
  }
  .pp-md h2 {
    font-size: 1.15rem; font-weight: 700;
    color: var(--green-mid);
    margin: 36px 0 10px;
    display: flex; align-items: center; gap: 10px;
    font-family: 'Sora', sans-serif;
  }
  .pp-md h2::before {
    content: '';
    display: inline-block;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--green-accent);
    flex-shrink: 0;
  }
  .pp-md h3 {
    font-size: 1.02rem; font-weight: 600;
    color: var(--text-main);
    margin: 24px 0 8px;
    font-family: 'Sora', sans-serif;
  }
  .pp-md p {
    font-size: 14.5px; line-height: 1.85;
    color: var(--text-muted); margin: 0 0 14px;
  }
  .pp-md ul, .pp-md ol { padding-left: 20px; margin: 0 0 16px; }
  .pp-md li {
    font-size: 14.5px; line-height: 1.8;
    color: var(--text-muted); margin-bottom: 6px;
  }
  .pp-md ul li::marker { color: var(--green-accent); }
  .pp-md a {
    color: var(--green-mid); font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid var(--green-light);
    transition: border-color 0.2s;
  }
  .pp-md a:hover { border-color: var(--green-accent); }
  .pp-md strong { color: var(--text-main); font-weight: 600; }
  .pp-md blockquote {
    margin: 20px 0; padding: 14px 20px;
    background: var(--green-light);
    border-left: 3px solid var(--green-accent);
    border-radius: 0 10px 10px 0;
    color: var(--text-muted); font-size: 14px;
  }
  .pp-md code {
    background: var(--green-light); color: var(--green-mid);
    padding: 2px 7px; border-radius: 5px;
    font-size: 13px; font-family: 'Courier New', monospace;
  }
  .pp-md hr { border: none; border-top: 1px solid var(--border); margin: 28px 0; }

  .pp-cta {
    margin: 8px 56px 48px;
    padding: 20px 24px;
    background: linear-gradient(120deg, #ecfdf5 0%, #d1fae5 100%);
    border: 1px solid var(--border);
    border-radius: 16px;
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
  }
  @media (max-width: 640px) { .pp-cta { margin: 8px 24px 40px; } }
  .pp-cta-icon {
    width: 42px; height: 42px;
    border-radius: 12px;
    background: var(--green-mid);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .pp-cta-text { flex: 1; min-width: 180px; }
  .pp-cta-text p { margin: 0; }
  .pp-cta-text .cta-heading {
    font-size: 14px; font-weight: 700;
    color: var(--green-dark); margin-bottom: 2px;
    font-family: 'Sora', sans-serif;
  }
  .pp-cta-text .cta-sub { font-size: 13px; color: var(--text-muted); }
  .pp-cta-btn {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--green-mid); color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 13px; font-weight: 600;
    padding: 10px 20px; border-radius: 10px;
    border: none; cursor: pointer; text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    flex-shrink: 0;
  }
  .pp-cta-btn:hover { background: var(--green-dark); transform: translateY(-1px); }

  .pp-footer-note {
    text-align: center; font-size: 13px;
    color: var(--text-light); margin-top: 28px;
    font-family: 'Sora', sans-serif;
  }
`;

export default function PrivacyPolicy() {
  return (
    <>
      <style>{styles}</style>
      <div className="pp-page">

        <div className="pp-hero">
          <div className="pp-orb pp-orb-1" />
          <div className="pp-orb pp-orb-2" />

          <div className="pp-hero-svgs">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none"
              style={{ position:'absolute', top:22, left:30, opacity:0.22 }}>
              <rect x="12" y="26" width="36" height="26" rx="6" stroke="#4ade80" strokeWidth="1.5"/>
              <path d="M20 26V20a10 10 0 0120 0v6" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="30" cy="39" r="3" fill="#4ade80" opacity="0.6"/>
            </svg>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
              style={{ position:'absolute', top:18, right:48, opacity:0.22 }}>
              <circle cx="24" cy="24" r="20" stroke="#6ee7b7" strokeWidth="1.5"/>
              <path d="M17 24h14M24 17v14" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg width="140" height="140" viewBox="0 0 140 140" fill="none"
              style={{ position:'absolute', bottom:50, left:12, opacity:0.1 }}>
              <circle cx="70" cy="70" r="65" stroke="#4ade80" strokeWidth="1" strokeDasharray="6 6"/>
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{ position:'absolute', bottom:80, right:72, opacity:0.3 }}>
              <path d="M12 2v20M2 12h20" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none"
              style={{ position:'absolute', top:'42%', right:16, opacity:0.18 }}>
              <path d="M19 3L5 9v10c0 8.3 5.9 16 14 18 8.1-2 14-9.7 14-18V9L19 3z" fill="#4ade80"/>
            </svg>
          </div>

          <div style={{ position:'relative', zIndex:1 }}>
            <div className="pp-badge">
              <span className="pp-badge-dot" />
              Privacy &amp; Data
            </div>

            <h1 className="pp-hero-title">
              Privacy <span>Policy</span>
            </h1>

            <div className="pp-divider-row">
              <div className="pp-divider-line" />
              <div className="pp-divider-dot" />
              <div className="pp-divider-line" />
            </div>

            <p className="pp-hero-sub">
              We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
            </p>

            <div className="pp-meta">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="3"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              Last updated:&nbsp;
              {new Date().toLocaleDateString("en-IN", { year:"numeric", month:"long", day:"numeric" })}
            </div>
          </div>

          <svg className="pp-wave" viewBox="0 0 1440 56" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0,56 L0,28 Q180,0 360,20 Q540,40 720,18 Q900,-4 1080,22 Q1260,48 1440,28 L1440,56 Z"
              fill="#f0faf4"/>
          </svg>
        </div>

        <div className="pp-body">
          <div className="pp-card">

            <div className="pp-topbar">
              <div className="pp-tb-dot" style={{ background:'#fca5a5' }} />
              <div className="pp-tb-dot" style={{ background:'#fcd34d' }} />
              <div className="pp-tb-dot" style={{ background:'#4ade80' }} />
              <span className="pp-tb-label">Privacy Policy — Legal Document</span>
            </div>

            <div className="pp-content">
              <div className="pp-md">
                <ReactMarkdown>{privacyText}</ReactMarkdown>
              </div>
            </div>

            <div className="pp-cta">
              <div className="pp-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="3"/>
                  <path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <div className="pp-cta-text">
                <p className="cta-heading">Questions about your data or privacy?</p>
                <p className="cta-sub">Reach out and we'll be happy to clarify how we handle your information.</p>
              </div>
              <a href="mailto:info@swastikajankalyanfoundation.com" className="pp-cta-btn">
                Contact Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
            </div>
          </div>

          <p className="pp-footer-note">
            © {new Date().getFullYear()} Swastika Jan Kalyan Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </>
  );
}