import { useState } from "react";

// ─── Font & Base Styles ────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
  * { font-family: 'Sora', sans-serif; box-sizing: border-box; }
  .table-scroll { scrollbar-width: thin; scrollbar-color: #b8ddc8 transparent; }
  .table-scroll::-webkit-scrollbar { width: 4px; height: 4px; }
  .table-scroll::-webkit-scrollbar-track { background: transparent; }
  .table-scroll::-webkit-scrollbar-thumb { background: #b8ddc8; border-radius: 99px; }
  @keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer { 0%,100% { opacity:.7; } 50% { opacity:1; } }
  .fade-up { animation: fadeUp 0.4s ease both; }
  .row-hover:hover { background: linear-gradient(90deg, #f0faf4 0%, #f8fffe 100%); }
`;

// ─── Mock Data ────────────────────────────────────────────────────────────────
const MOCK_EMAILS = [
  { id: "SUB001", email: "priya.mehta@gmail.com", subscribedAt: "2025-03-12", source: "Homepage" },
  { id: "SUB002", email: "rahul.sharma@yahoo.com", subscribedAt: "2025-03-15", source: "Campaign" },
  { id: "SUB003", email: "anita.verma@outlook.com", subscribedAt: "2025-03-18", source: "Blog Post" },
  { id: "SUB004", email: "vikram.nair@gmail.com", subscribedAt: "2025-04-01", source: "Social Media" },
  { id: "SUB005", email: "deepika.rao@hotmail.com", subscribedAt: "2025-04-05", source: "Homepage" },
  { id: "SUB006", email: "arjun.krishna@gmail.com", subscribedAt: "2025-04-10", source: "Event" },
];

// ─── SVGs ─────────────────────────────────────────────────────────────────────
const EnvelopeSVG = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 22, height: 22 }}>
    <rect x="4" y="10" width="40" height="28" rx="5" stroke="currentColor" strokeWidth="2.2" fill="none"/>
    <path d="M4 16l20 13L44 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M4 38l14-12M44 38L30 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.4"/>
  </svg>
);

const RefreshSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
  </svg>
);

const TrashSVG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ width: 16, height: 16 }}>
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
  </svg>
);

const WaveSVG = () => (
  <svg viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
    style={{ position:'absolute', bottom:0, left:0, width:'100%', height:60, opacity:0.12 }}>
    <path d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30 V60 H0Z" fill="white"/>
  </svg>
);

const FloralSVG = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position:'absolute', top:-10, right:-10, width:130, height:130, opacity:0.06 }}>
    <circle cx="60" cy="60" r="20" fill="white"/>
    {[0,45,90,135,180,225,270,315].map((a,i) => (
      <ellipse key={i} cx="60" cy="30" rx="10" ry="22" fill="white"
        transform={`rotate(${a} 60 60)`}/>
    ))}
  </svg>
);

// ─── Source Badge Colors ───────────────────────────────────────────────────────
const sourceConfig = {
  Homepage:     { bg: "#e8f5e9", text: "#2e7d32" },
  Campaign:     { bg: "#e3f2fd", text: "#1565c0" },
  "Blog Post":  { bg: "#fce4ec", text: "#880e4f" },
  "Social Media":{ bg: "#f3e5f5", text: "#6a1b9a" },
  Event:        { bg: "#fff8e1", text: "#f57f17" },
};

// ─── Confirm Modal ────────────────────────────────────────────────────────────
const ConfirmModal = ({ onConfirm, onCancel }) => (
  <div style={{ position:'fixed', inset:0, zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:16 }}>
    <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.45)', backdropFilter:'blur(6px)' }} onClick={onCancel}/>
    <div className="fade-up" style={{ position:'relative', background:'white', borderRadius:20, boxShadow:'0 32px 80px rgba(0,0,0,0.18)', padding:'36px 32px', maxWidth:380, width:'100%', border:'1px solid #d4eadc', textAlign:'center' }}>
      <div style={{ width:56, height:56, borderRadius:'50%', background:'#fff1f1', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.2" style={{ width:24, height:24 }}>
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/>
        </svg>
      </div>
      <h3 style={{ fontSize:18, fontWeight:700, color:'#1a2e22', margin:'0 0 8px' }}>Delete All Subscribers?</h3>
      <p style={{ fontSize:13, color:'#6b7c72', margin:'0 0 24px', lineHeight:1.6 }}>
        This will permanently remove all subscriber records. This action cannot be undone.
      </p>
      <div style={{ display:'flex', gap:10 }}>
        <button onClick={onCancel} style={{ flex:1, padding:'12px', borderRadius:12, border:'1.5px solid #d4eadc', background:'white', color:'#4a6355', fontFamily:'Sora,sans-serif', fontWeight:600, fontSize:13, cursor:'pointer' }}>Cancel</button>
        <button onClick={onConfirm} style={{ flex:1, padding:'12px', borderRadius:12, border:'none', background:'linear-gradient(135deg,#ef4444,#dc2626)', color:'white', fontFamily:'Sora,sans-serif', fontWeight:600, fontSize:13, cursor:'pointer', boxShadow:'0 4px 16px rgba(239,68,68,0.35)' }}>Delete All</button>
      </div>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export const AdminDashboard = ({ showToast = () => {} }) => {
  const [emails, setEmails] = useState(MOCK_EMAILS);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setEmails([]);
    setShowConfirm(false);
    showToast("All subscribers removed");
  };

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ background:'white', borderRadius:24, border:'1px solid #d4eadc', overflow:'hidden', boxShadow:'0 4px 24px rgba(26,107,58,0.07)' }}>
        
        {/* ── Header ── */}
        <div style={{ background:'linear-gradient(135deg, #0f4a28 0%, #1a6b3a 55%, #2d8a50 100%)', padding:'28px 32px 32px', position:'relative', overflow:'hidden' }}>
          <FloralSVG />
          <WaveSVG />
          <div style={{ position:'relative', zIndex:1 }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                <div style={{ width:48, height:48, borderRadius:14, background:'rgba(255,255,255,0.15)', border:'1px solid rgba(255,255,255,0.25)', display:'flex', alignItems:'center', justifyContent:'center', color:'#a8e0b8', backdropFilter:'blur(8px)' }}>
                  <EnvelopeSVG />
                </div>
                <div>
                  <p style={{ color:'#7dcf9a', fontSize:11, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.12em', margin:'0 0 3px' }}>Swasika Jan Kalyan Foundation</p>
                  <h2 style={{ color:'white', fontSize:20, fontWeight:700, margin:0, letterSpacing:'-0.01em' }}>Newsletter Subscribers</h2>
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <div style={{ textAlign:'center', padding:'8px 16px', background:'rgba(255,255,255,0.1)', borderRadius:12, border:'1px solid rgba(255,255,255,0.18)' }}>
                  <div style={{ color:'white', fontWeight:700, fontSize:22, lineHeight:1 }}>{emails.length}</div>
                  <div style={{ color:'#a8e0b8', fontSize:10, fontWeight:500, textTransform:'uppercase', letterSpacing:'0.08em', marginTop:2 }}>Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Actions Bar ── */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 32px', borderBottom:'1px solid #edf7f0', background:'#fafffe' }}>
          <p style={{ color:'#5a8a6a', fontSize:13, fontWeight:500, margin:0 }}>{emails.length} subscriber{emails.length !== 1 ? 's' : ''} registered</p>
          <div style={{ display:'flex', gap:8 }}>
            <button
              onClick={() => showToast("✓ Subscribers refreshed")}
              style={{ display:'flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, background:'#edf7f0', border:'1px solid #c8e6d0', color:'#1a6b3a', fontFamily:'Sora,sans-serif', fontWeight:600, fontSize:12.5, cursor:'pointer', transition:'all 0.2s' }}
            >
              <RefreshSVG /> Refresh
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              style={{ display:'flex', alignItems:'center', gap:7, padding:'9px 16px', borderRadius:10, background:'#fff5f5', border:'1px solid #fecaca', color:'#dc2626', fontFamily:'Sora,sans-serif', fontWeight:600, fontSize:12.5, cursor:'pointer', transition:'all 0.2s' }}
            >
              <TrashSVG /> Delete All
            </button>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="table-scroll" style={{ overflowX:'auto', padding:'0 24px 24px' }}>
          <table style={{ width:'100%', borderCollapse:'collapse', fontSize:13.5, marginTop:16 }}>
            <thead>
              <tr>
                {["#", "Subscriber ID", "Email Address", "Source", "Subscribed On"].map(h => (
                  <th key={h} style={{ textAlign:'left', padding:'10px 16px', color:'#5a8a6a', fontWeight:700, fontSize:10.5, textTransform:'uppercase', letterSpacing:'0.1em', background:'#f4fbf6', borderBottom:'2px solid #e0f0e6' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {emails.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign:'center', padding:'56px 0', color:'#9cb8a8' }}>
                    <div style={{ fontSize:40, marginBottom:10, opacity:0.4 }}>✉️</div>
                    <div style={{ fontWeight:600, fontSize:14 }}>No subscribers found</div>
                    <div style={{ fontSize:12, marginTop:4, color:'#b8d0c0' }}>New subscribers will appear here</div>
                  </td>
                </tr>
              ) : emails.map((e, i) => {
                const sc = sourceConfig[e.source] || { bg:'#f3f4f6', text:'#4b5563' };
                return (
                  <tr key={e.id} className="row-hover fade-up" style={{ borderBottom:'1px solid #f0f8f2', transition:'background 0.2s', animationDelay:`${i * 0.04}s` }}>
                    <td style={{ padding:'14px 16px', color:'#9cb8a8', fontWeight:600, fontSize:12 }}>{String(i + 1).padStart(2,'0')}</td>
                    <td style={{ padding:'14px 16px' }}>
                      <span style={{ padding:'4px 10px', background:'#edf7f0', color:'#1a6b3a', borderRadius:8, fontSize:11.5, fontWeight:700, letterSpacing:'0.04em' }}>{e.id}</span>
                    </td>
                    <td style={{ padding:'14px 16px' }}>
                      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                        <div style={{ width:32, height:32, borderRadius:10, background:'linear-gradient(135deg,#2d8a50,#1a6b3a)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:700, fontSize:12, flexShrink:0 }}>
                          {e.email[0].toUpperCase()}
                        </div>
                        <span style={{ color:'#2a3d30', fontWeight:500 }}>{e.email}</span>
                      </div>
                    </td>
                    <td style={{ padding:'14px 16px' }}>
                      <span style={{ padding:'4px 12px', borderRadius:99, fontSize:11.5, fontWeight:600, background:sc.bg, color:sc.text }}>{e.source}</span>
                    </td>
                    <td style={{ padding:'14px 16px', color:'#6b8070', fontWeight:400 }}>{e.subscribedAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {showConfirm && <ConfirmModal onConfirm={handleDelete} onCancel={() => setShowConfirm(false)} />}
    </>
  );
};

