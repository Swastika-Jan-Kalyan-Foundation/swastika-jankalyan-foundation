import { useState, useEffect, useRef, useCallback } from "react";

/* ─── SVG icons ─── */
const LeafIcon = () => (
  <svg width="18" height="18" viewBox="0 0 60 60" fill="none">
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56C42 56 52 47 52 36C52 18 30 5 30 5Z" fill="#fff" opacity="0.3"/>
    <path d="M30 5C30 5 8 18 8 36C8 47 18 56 30 56" stroke="white" strokeWidth="2" fill="none"/>
    <line x1="30" y1="54" x2="30" y2="20" stroke="white" strokeWidth="1.5"/>
    <line x1="30" y1="38" x2="20" y2="28" stroke="white" strokeWidth="1.2"/>
    <line x1="30" y1="45" x2="40" y2="35" stroke="white" strokeWidth="1.2"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── NGO About text (typewriter) ─── */
const NGO_ABOUT = `🌿 Welcome to Swastika Foundation!

We are a grassroots NGO based in Ranchi, Jharkhand, dedicated to healing the earth and empowering its people.

🌳 Our Mission: We plant forests, build futures, and restore hope — one tree, one child, one community at a time.

📌 What We Do:
• Reforestation & Tree Plantation Drives
• Tribal Children Education Programs
• Clean Water & Sanitation Initiatives
• Sustainable Healthcare for Remote Villages
• Women Empowerment & Skill Development
• Disaster Relief Operations

💚 Since our founding, we have planted 5,200+ trees, impacted 12,400+ lives, supported 28 villages, and inspired 340+ volunteers to join the cause.

Together, we are building a greener, kinder tomorrow. 🙏`;

/* ─── Flow definitions ─── */
const DONATE_FLOW = [
  { key:"fullName",    type:"text",    bot:"💚 Let's get your donation started! What's your **full name**?" },
  { key:"email",       type:"email",   bot:"📧 What's your **email address**? (We'll send your receipt here)" },
  { key:"phone",       type:"text",    bot:"📞 Your **phone number**?" },
  { key:"amount",      type:"number",  bot:"💰 How much would you like to donate? (₹)" },
  { key:"purpose",     type:"options", bot:"🌱 What's the **purpose** of your donation?",
    options:["Tree Plantation Drive","Tribal Children Education","Clean Water Initiative","Healthcare Plans","Women Empowerment","Disaster Relief","General Funds","Others"] },
  { key:"message",     type:"text",    bot:"💬 Any **message** you'd like to leave for us? (optional)" },
  { key:"__confirm__", type:"confirm", bot:"✅ Please **review** your donation details below and confirm!" },
];

const VOLUNTEER_FLOW = [
  { key:"fullName",    type:"text",    bot:"🌿 Wonderful! Let's get you onboarded. What's your **full name**?" },
  { key:"gender",      type:"options", bot:"🧑 Your **gender**?", options:["Male","Female","Non-binary","Prefer not to say"] },
  { key:"dob",         type:"date",    bot:"🎂 Your **date of birth**?" },
  { key:"phone",       type:"text",    bot:"📞 Your **phone number**?" },
  { key:"email",       type:"email",   bot:"📧 Your **email address**?" },
  { key:"instagram",   type:"text",    bot:"📸 Your **Instagram handle**? (e.g. @yourname)" },
  { key:"address",     type:"text",    bot:"📍 Your **address**?" },
  { key:"education",   type:"options", bot:"🎓 Your **highest educational qualification**?",
    options:["High School (10th)","Higher Secondary (12th)","Undergraduate","Graduate","Postgraduate","PhD / Doctorate"] },
  { key:"career",      type:"options", bot:"💼 Your **current career status**?", options:["Student","Job","Drop Year","Other"] },
  { key:"skills",      type:"text",    bot:"⚡ Tell us your **skills & interests**!" },
  { key:"teams",       type:"multi",   bot:"🤝 Which **teams** are you interested in? (select all that apply)",
    options:["Content Writing Team","Graphics Designing & Photography Team","Social Media Team","PR & Marketing Team","Human Resources Team","Operations Team","Research & Planning Team"] },
  { key:"leadership",  type:"options", bot:"👑 Your **leadership preference**?", options:["Leader","Co-Leader","No"] },
  { key:"experience",  type:"text",    bot:"📝 Any **previous volunteer experience**? (or type 'None')" },
  { key:"whyJoin",     type:"text",    bot:"💭 **Why do you want to join us?** Tell us from the heart!" },
  { key:"__submit__",  type:"submit",  bot:"🎉 You're all set! Review your application and submit when ready." },
];

const CONTACT_FLOW = [
  { key:"fullName",  type:"text",    bot:"👋 Happy to help! What's your **full name**?" },
  { key:"phone",     type:"text",    bot:"📞 Your **phone number**?" },
  { key:"email",     type:"email",   bot:"📧 Your **email address**?" },
  { key:"subject",   type:"options", bot:"📋 What's your **subject / concern**?",
    options:["General Inquiry","Volunteering","Donations & Funding","Tree Plantation Drive","Partnership & Collaboration","Media & Press","Careers","Report an Issue"] },
  { key:"message",   type:"text",    bot:"💬 Please share your **message** with us." },
  { key:"__done__",  type:"done",    bot:"✅ Thank you! We've received your message and will get back to you within **24–48 hours**. 🌿" },
];

/* ─── Razorpay script loader ─── */
function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/* ─── Markdown-lite: bold ** ─── */
function BotText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) => i % 2 === 1
        ? <strong key={i} style={{ fontWeight:700 }}>{p}</strong>
        : <span key={i}>{p}</span>
      )}
    </span>
  );
}

/* ─── Typewriter ─── */
function Typewriter({ text, speed = 18, onDone }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); onDone && onDone(); }
    }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <span style={{ whiteSpace:"pre-wrap" }}>{displayed}</span>;
}

/* ─── Main Chatbot ─── */
export default function SwastikaChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [options, setOptions] = useState(null);
  const [flow, setFlow] = useState(null);
  const [flowStep, setFlowStep] = useState(0);
  const [flowData, setFlowData] = useState({});
  const [multiSelected, setMultiSelected] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [inputType, setInputType] = useState("text");

  // ── Backend state ──
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  // Donation result
  const [donorId, setDonorId] = useState(null);
  const [transactionId, setTransactionId] = useState(null);
  // Volunteer result
  const [applicantId, setApplicantId] = useState(null);

  const bottomRef = useRef();
  const inputRef = useRef();

  /* scroll to bottom */
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, options]);

  /* open chatbot → greeting */
  useEffect(() => {
    if (!open) return;
    if (messages.length > 0) return;
    setTimeout(() => addBotMsg("👋 Namaste! I'm **Swastika**, your guide to our NGO.\n\nHow may I help you today?", () => {
      setShowMain(true);
      setPhase("main");
    }), 400);
  }, [open]);

  const addBotMsg = useCallback((text, onDone, isTypewriter = false) => {
    setIsTyping(true);
    setInputEnabled(false);
    setOptions(null);
    const id = Date.now() + Math.random();
    setMessages(m => [...m, { id, role:"bot", text, typing: true, isTypewriter }]);
    if (isTypewriter) {
      setIsTyping(false);
      return;
    }
    const delay = Math.min(600 + text.length * 12, 2200);
    setTimeout(() => {
      setMessages(m => m.map(msg => msg.id === id ? { ...msg, typing:false } : msg));
      setIsTyping(false);
      onDone && onDone();
    }, delay);
  }, []);

  const addUserMsg = (text) => {
    setMessages(m => [...m, { id: Date.now(), role:"user", text }]);
  };

  /* main menu click */
  const handleMainMenu = (choice) => {
    setShowMain(false);
    addUserMsg(choice);
    if (choice === "🌳 Who Are We?") {
      setPhase("about");
      setTimeout(() => {
        const id = Date.now();
        setMessages(m => [...m, { id, role:"bot", text: NGO_ABOUT, typing:false, isTypewriter:true }]);
        setIsTyping(false);
      }, 400);
    } else if (choice === "💚 Donate to Us!") {
      setFlow(DONATE_FLOW); setFlowStep(0); setFlowData({}); setPhase("flow");
      setTimeout(() => runFlowStep(DONATE_FLOW, 0, {}), 400);
    } else if (choice === "🤝 Be a Part of Us!") {
      setFlow(VOLUNTEER_FLOW); setFlowStep(0); setFlowData({}); setPhase("flow");
      setTimeout(() => runFlowStep(VOLUNTEER_FLOW, 0, {}), 400);
    } else if (choice === "📞 Contact Us!") {
      setFlow(CONTACT_FLOW); setFlowStep(0); setFlowData({}); setPhase("flow");
      setTimeout(() => runFlowStep(CONTACT_FLOW, 0, {}), 400);
    }
  };

  const runFlowStep = (flowArr, step, data) => {
    if (step >= flowArr.length) return;
    const s = flowArr[step];
    addBotMsg(s.bot, () => {
      if (s.type === "options" || s.type === "multi") {
        setOptions({ list: s.options, multi: s.type === "multi", selected: [] });
        setMultiSelected([]);
        setInputEnabled(false);
      } else if (["confirm","submit","done"].includes(s.type)) {
        setInputEnabled(false);
        setOptions(null);
      } else {
        setInputType(s.type === "email" ? "email" : s.type === "number" ? "number" : s.type === "date" ? "date" : "text");
        setInputEnabled(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    });
  };

  const advanceFlow = (value) => {
    const s = flow[flowStep];
    const newData = { ...flowData, [s.key]: value };
    setFlowData(newData);
    const next = flowStep + 1;
    setFlowStep(next);
    setOptions(null);
    setInputEnabled(false);
    setTimeout(() => runFlowStep(flow, next, newData), 300);
  };

  /* text submit */
  const handleSend = () => {
    const val = inputVal.trim();
    if (!val || !inputEnabled) return;
    setInputVal("");
    addUserMsg(val);
    if (phase === "flow") advanceFlow(val);
  };

  /* option click (single) */
  const handleOptionClick = (opt) => {
    if (options?.multi) {
      setMultiSelected(prev =>
        prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
      );
    } else {
      addUserMsg(opt);
      setOptions(null);
      if (phase === "flow") advanceFlow(opt);
    }
  };

  /* multi confirm */
  const handleMultiConfirm = () => {
    if (multiSelected.length === 0) return;
    const val = multiSelected.join(", ");
    addUserMsg(val);
    setOptions(null);
    setMultiSelected([]);
    if (phase === "flow") advanceFlow(val);
  };

  /* restart */
  const handleRestart = () => {
    setMessages([]);
    setOptions(null);
    setFlow(null);
    setFlowStep(0);
    setFlowData({});
    setMultiSelected([]);
    setInputEnabled(false);
    setInputVal("");
    setInputType("text");
    setPhase("idle");
    setShowMain(false);
    setSubmitError(null);
    setIsSubmitting(false);
    setDonorId(null);
    setTransactionId(null);
    setApplicantId(null);
    setTimeout(() => addBotMsg("👋 Namaste! I'm **Swastika**, your guide to our NGO.\n\nHow may I help you today?", () => {
      setShowMain(true);
      setPhase("main");
    }), 300);
  };

  /* ══════════════════════════════════════════
     🔴 DONATION: Razorpay Integration
  ══════════════════════════════════════════ */
  const handleDonationConfirm = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // 1. Load Razorpay SDK
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Failed to load Razorpay. Please check your internet connection.");

      // 2. Create order on backend
      const orderRes = await fetch("https://swastikajankalyanfoundation.netlify.app/api/donations/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(data.amount) }),
      });
      const orderResult = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderResult.message || "Failed to create payment order.");

      setIsSubmitting(false);

      // 3. Open Razorpay checkout
      const razorpayOptions = {
        key: orderResult.keyId,
        amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        name: "Swastika Jan Kalyan Foundation",
        description: "Donation",
        order_id: orderResult.order.id,
        prefill: {
          name: data.fullName,
          email: data.email,
          contact: data.phone,
        },
        theme: { color: "#2e7d32" },
        modal: {
          ondismiss: () => {
            addBotMsg("💛 Payment was cancelled. Your details are saved — feel free to try again!", () => {
              setPhase("done");
            });
          },
        },
        handler: async (razorpayResponse) => {
          try {
            setIsSubmitting(true);

            // 4. Verify payment & save donation
            const verifyRes = await fetch("https://swastikajankalyanfoundation.netlify.app/api/donations/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_order_id: razorpayResponse.razorpay_order_id,
                razorpay_payment_id: razorpayResponse.razorpay_payment_id,
                razorpay_signature: razorpayResponse.razorpay_signature,
                fullName: data.fullName,
                email: data.email,
                phoneNumber: data.phone,
                amount: Number(data.amount),
                currency: "INR",
                donationPurpose: data.purpose,
                message: data.message || "",
                isAnonymous: false,
              }),
            });
            const verifyResult = await verifyRes.json();
            if (!verifyRes.ok) throw new Error(verifyResult.message || "Payment verification failed.");

            setDonorId(verifyResult.data.donorId);
            setTransactionId(verifyResult.data.transactionId);
            setIsSubmitting(false);

            addBotMsg(
              `🎉 Thank you for your donation of ₹${data.amount}, ${data.fullName}! You're a true Earth Guardian! 🌳💚\n\n📬 A receipt has been sent to ${data.email}.\n\n🆔 **Donor ID:** ${verifyResult.data.donorId}\n📋 **Transaction ID:** ${verifyResult.data.transactionId}`,
              () => { setPhase("done"); setShowMain(false); }
            );
          } catch (err) {
            setIsSubmitting(false);
            setSubmitError(err.message);
            addBotMsg(`⚠️ Payment verification failed: ${err.message}\n\nPlease contact us if your amount was deducted.`, () => {
              setPhase("done");
            });
          }
        },
      };

      const rzp = new window.Razorpay(razorpayOptions);
      rzp.open();

    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(err.message);
      addBotMsg(`⚠️ Something went wrong: ${err.message}\n\nPlease try again or contact us directly.`, () => {
        setPhase("done");
      });
    }
  };

  /* ══════════════════════════════════════════
     🟢 VOLUNTEER: API Submission
  ══════════════════════════════════════════ */
  const handleVolunteerSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: data.fullName,
      gender: data.gender,
      dateOfBirth: data.dob,
      phoneNumber: data.phone,
      email: data.email,
      instagramId: data.instagram || "",
      address: data.address,
      highestEducationalQualification: data.education,
      currentCareerStatus: data.career,
      skillsAndInterest: data.skills,
      interestedTeams: data.teams ? data.teams.split(", ") : [],
      leadershipPreference: data.leadership,
      previousVolunteerExperience: data.experience,
      whyJoinUs: data.whyJoin,
    };

    try {
      const res = await fetch("https://swastikajankalyanfoundation.netlify.app/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed. Please try again.");

      const appId = result.data?.applicantId;
      setApplicantId(appId);
      setIsSubmitting(false);

      addBotMsg(
        `🎊 Welcome to the Swastika family, ${data.fullName}! 🌿\n\nYour volunteer application has been received. Our team will reach out to you at ${data.email} soon!\n\n🆔 **Applicant ID:** ${appId}`,
        () => { setPhase("done"); }
      );
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(err.message);
      addBotMsg(`⚠️ Submission failed: ${err.message}\n\nPlease try again or reach out to us directly.`, () => {
        setPhase("done");
      });
    }
  };

  /* ─── Summary card renderer ─── */
  const renderSummary = (flowArr, data, type) => {
    const isDonation = type === "confirm";
    const isVolunteer = type === "submit";

    return (
      <div style={{ background:"#f0faf4", borderRadius:12, padding:"12px 14px", marginTop:10, border:"1.5px solid #c8e6c9" }}>
        {flowArr.filter(s => !s.key.startsWith("__") && data[s.key]).map(s => (
          <div key={s.key} style={{ display:"flex", gap:8, marginBottom:6, fontSize:12 }}>
            <span style={{ color:"#74b69a", fontWeight:700, minWidth:110, textTransform:"capitalize" }}>
              {s.key.replace(/([A-Z])/g,' $1')}:
            </span>
            <span style={{ color:"#1b4332", fontWeight:600, wordBreak:"break-word" }}>{data[s.key]}</span>
          </div>
        ))}

        {/* Error banner */}
        {submitError && (
          <div style={{ background:"#fff0f0", border:"1px solid #ffcdd2", borderRadius:8, padding:"8px 12px", marginTop:8, fontSize:12, color:"#c62828" }}>
            ⚠️ {submitError}
          </div>
        )}

        <div style={{ display:"flex", gap:10, marginTop:12, flexWrap:"wrap", alignItems:"center" }}>
          {isDonation && (
            <button
              onClick={() => {
                addUserMsg("✅ Proceed to Payment");
                setOptions(null);
                handleDonationConfirm(data);
              }}
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? "#c8e6c9" : "linear-gradient(90deg,#2d6a4f,#52b788)",
                color:"white", border:"none", borderRadius:20,
                padding:"9px 20px", fontSize:13, fontWeight:700,
                cursor: isSubmitting ? "wait" : "pointer",
                fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6,
              }}>
              {isSubmitting ? "⏳ Processing…" : <><CheckIcon /> Pay ₹{data.amount}</>}
            </button>
          )}

          {isVolunteer && (
            <button
              onClick={() => {
                addUserMsg("📨 Application Submitted!");
                setOptions(null);
                handleVolunteerSubmit(data);
              }}
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? "#c8e6c9" : "linear-gradient(90deg,#1b4332,#40916c)",
                color:"white", border:"none", borderRadius:20,
                padding:"9px 20px", fontSize:13, fontWeight:700,
                cursor: isSubmitting ? "wait" : "pointer",
                fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6,
              }}>
              {isSubmitting ? "⏳ Submitting…" : <><CheckIcon /> Submit Application</>}
            </button>
          )}

          {type === "done" && (
            <button onClick={handleRestart} style={{
              background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332",
              border:"none", borderRadius:20, padding:"9px 20px",
              fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"Sora,sans-serif",
            }}>
              🔄 Back to Menu
            </button>
          )}

          {!isSubmitting && (
            <button onClick={handleRestart} style={{
              background:"transparent", color:"#74b69a",
              border:"1.5px solid #c8e6c9", borderRadius:20,
              padding:"9px 16px", fontSize:12, fontWeight:600,
              cursor:"pointer", fontFamily:"Sora,sans-serif",
            }}>↩ Restart</button>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        .swastika-chatbot * { box-sizing:border-box; font-family:Sora,sans-serif; }
        @keyframes chatSlideUp { from{opacity:0;transform:translateY(20px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes msgIn      { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dotBounce  { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes pulse2     { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        @keyframes glow       { 0%,100%{box-shadow:0 0 0 0 rgba(82,183,136,0.4)} 50%{box-shadow:0 0 0 8px rgba(82,183,136,0)} }
        .chat-open  { animation: chatSlideUp 0.35s cubic-bezier(.22,1,.36,1) both; }
        .msg-in     { animation: msgIn 0.3s ease both; }
        .option-btn { transition:all 0.18s; }
        .option-btn:hover { transform:translateY(-1px) !important; }
        .send-btn:hover { transform:scale(1.07); }
        .send-btn:active { transform:scale(0.97); }
        .trigger-btn:hover .trigger-inner { transform:scale(1.04); }
      `}</style>

      <div className="swastika-chatbot">

        {/* ── Trigger bar ── */}
        <div className="trigger-btn" style={{ position:"fixed", bottom:28, right:28, display:"flex", alignItems:"center", gap:0, zIndex:9999, cursor:"pointer" }} onClick={() => setOpen(o => !o)}>
          {!open && (
            <div style={{
              background:"white", borderRadius:"16px 16px 4px 16px",
              padding:"10px 16px", marginRight:10,
              boxShadow:"0 4px 20px rgba(45,106,79,0.18)",
              border:"1.5px solid #c8e6c9",
              animation:"msgIn 0.4s ease",
              whiteSpace:"nowrap",
            }}>
              <span style={{ color:"#2d6a4f", fontSize:13, fontWeight:600 }}>Hi! I'm </span>
              <span style={{ color:"#1b4332", fontSize:13, fontWeight:800 }}>Swastika</span>
              <span style={{ color:"#2d6a4f", fontSize:13, fontWeight:600 }}>, how may I help you? 🌿</span>
            </div>
          )}
          <div className="trigger-inner" style={{
            width:58, height:58, borderRadius:"50%",
            background:"linear-gradient(135deg,#1b4332,#40916c)",
            display:"flex", alignItems:"center", justifyContent:"center",
            boxShadow:"0 6px 24px rgba(45,106,79,0.4)",
            transition:"transform 0.2s",
            animation: open ? "none" : "glow 2.5s infinite",
            flexShrink:0,
          }}>
            {open ? <CloseIcon /> : <LeafIcon />}
          </div>
        </div>

        {/* ── Chat window ── */}
        {open && (
          <div className="chat-open" style={{
            position:"fixed", bottom:100, right:28, width:370,
            maxWidth:"calc(100vw - 40px)",
            height:580, maxHeight:"calc(100vh - 120px)",
            background:"white", borderRadius:24,
            boxShadow:"0 20px 60px rgba(27,67,50,0.22), 0 4px 16px rgba(27,67,50,0.1)",
            display:"flex", flexDirection:"column",
            overflow:"hidden", zIndex:9998,
            border:"1.5px solid #c8e6c9",
          }}>

            {/* Header */}
            <div style={{
              background:"linear-gradient(135deg,#1b4332,#2d6a4f)",
              padding:"14px 18px", display:"flex", alignItems:"center", gap:12, flexShrink:0,
            }}>
              <div style={{ position:"relative" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#95d5b2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22 }}>🌿</div>
                <div style={{ position:"absolute", bottom:1, right:1, width:11, height:11, borderRadius:"50%", background:"#52b788", border:"2px solid #1b4332" }} />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ color:"white", fontSize:15, fontWeight:800 }}>Swastika</div>
                <div style={{ color:"#95d5b2", fontSize:11, fontWeight:500 }}>NGO Assistant · Online</div>
              </div>
              <button onClick={handleRestart} title="Restart" style={{ background:"rgba(255,255,255,0.1)", border:"none", borderRadius:20, padding:"5px 10px", color:"#95d5b2", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:"Sora,sans-serif" }}>↩ Restart</button>
              <button onClick={() => setOpen(false)} style={{ background:"rgba(255,255,255,0.12)", border:"none", borderRadius:"50%", width:30, height:30, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex:1, overflowY:"auto", padding:"16px 14px", display:"flex", flexDirection:"column", gap:10, background:"#fafffe" }}>

              {messages.map((msg) => (
                <div key={msg.id} className="msg-in" style={{ display:"flex", flexDirection: msg.role==="bot" ? "row" : "row-reverse", gap:8, alignItems:"flex-end" }}>
                  {msg.role === "bot" && (
                    <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#2d6a4f,#52b788)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, flexShrink:0, marginBottom:2 }}>🌿</div>
                  )}
                  <div style={{
                    maxWidth:"82%",
                    background: msg.role==="bot" ? "white" : "linear-gradient(135deg,#2d6a4f,#40916c)",
                    color: msg.role==="bot" ? "#1b4332" : "white",
                    borderRadius: msg.role==="bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                    padding:"10px 13px", fontSize:13, lineHeight:1.65,
                    border: msg.role==="bot" ? "1.5px solid #e8f5e9" : "none",
                    boxShadow: msg.role==="bot" ? "0 2px 8px rgba(45,106,79,0.07)" : "0 2px 12px rgba(45,106,79,0.25)",
                    whiteSpace:"pre-wrap", wordBreak:"break-word",
                  }}>
                    {msg.role === "bot" && msg.isTypewriter && !msg.typing ? (
                      <Typewriter text={msg.text} speed={14} onDone={() => {
                        if (phase === "about") {
                          setTimeout(() => {
                            setShowMain(true);
                            setPhase("main");
                          }, 600);
                        }
                      }} />
                    ) : (
                      <BotText text={msg.text} />
                    )}

                    {/* Summary cards attached to confirm/submit/done steps */}
                    {msg.role === "bot" && !msg.typing && (() => {
                      const matchStep = flow?.find(s => s.bot === msg.text);
                      if (matchStep?.type === "confirm") return renderSummary(flow, flowData, "confirm");
                      if (matchStep?.type === "submit")  return renderSummary(flow, flowData, "submit");
                      if (matchStep?.type === "done")    return renderSummary(CONTACT_FLOW, flowData, "done");
                      return null;
                    })()}
                  </div>
                </div>
              ))}

              {/* Typing / Submitting indicator */}
              {(isTyping || isSubmitting) && (
                <div className="msg-in" style={{ display:"flex", gap:8, alignItems:"flex-end" }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#2d6a4f,#52b788)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, flexShrink:0 }}>🌿</div>
                  <div style={{ background:"white", borderRadius:"16px 16px 16px 4px", padding:"12px 16px", border:"1.5px solid #e8f5e9", display:"flex", gap:5, alignItems:"center" }}>
                    {isSubmitting
                      ? <span style={{ fontSize:12, color:"#52b788", fontWeight:600 }}>⏳ Processing…</span>
                      : [0,1,2].map(i => (
                          <div key={i} style={{ width:7, height:7, borderRadius:"50%", background:"#52b788", animation:`dotBounce 1.2s ease ${i*0.2}s infinite` }} />
                        ))
                    }
                  </div>
                </div>
              )}

              {/* Main menu */}
              {showMain && !isTyping && (
                <div className="msg-in" style={{ display:"flex", flexDirection:"column", gap:8, marginLeft:36 }}>
                  {[
                    { label:"🌳 Who Are We?",     color:"#1b4332" },
                    { label:"💚 Donate to Us!",    color:"#2d6a4f" },
                    { label:"🤝 Be a Part of Us!", color:"#40916c" },
                    { label:"📞 Contact Us!",       color:"#52b788" },
                  ].map(({ label, color }) => (
                    <button key={label} className="option-btn" onClick={() => handleMainMenu(label)}
                      style={{
                        background:color, color:"white", border:"none", borderRadius:20,
                        padding:"10px 18px", fontSize:13, fontWeight:700, cursor:"pointer",
                        fontFamily:"Sora,sans-serif", textAlign:"left",
                        boxShadow:`0 3px 12px ${color}44`,
                      }}>{label}</button>
                  ))}
                </div>
              )}

              {/* Flow options */}
              {options && !isTyping && (
                <div className="msg-in" style={{ marginLeft:36, display:"flex", flexDirection:"column", gap:7 }}>
                  {options.list.map(opt => {
                    const sel = multiSelected.includes(opt);
                    return (
                      <button key={opt} className="option-btn" onClick={() => handleOptionClick(opt)}
                        style={{
                          background: sel ? "linear-gradient(90deg,#2d6a4f,#52b788)" : "white",
                          color: sel ? "white" : "#2d6a4f",
                          border:`1.5px solid ${sel ? "#2d6a4f" : "#c8e6c9"}`,
                          borderRadius:20, padding:"9px 16px", fontSize:12.5, fontWeight:600,
                          cursor:"pointer", fontFamily:"Sora,sans-serif", textAlign:"left",
                          display:"flex", alignItems:"center", gap:8,
                          boxShadow: sel ? "0 3px 12px rgba(45,106,79,0.3)" : "none",
                        }}>
                        {sel && <CheckIcon />}
                        {opt}
                      </button>
                    );
                  })}
                  <div style={{ display:"flex", gap:8, marginTop:2 }}>
                    {options.multi && (
                      <button onClick={handleMultiConfirm}
                        disabled={multiSelected.length === 0}
                        style={{
                          background: multiSelected.length ? "linear-gradient(90deg,#1b4332,#40916c)" : "#c8e6c9",
                          color:"white", border:"none", borderRadius:20,
                          padding:"9px 18px", fontSize:12, fontWeight:700,
                          cursor: multiSelected.length ? "pointer" : "default",
                          fontFamily:"Sora,sans-serif",
                        }}>
                        ✅ Confirm Selection ({multiSelected.length})
                      </button>
                    )}
                    <button onClick={() => {
                      const skipVal = options.multi
                        ? (multiSelected.length ? multiSelected.join(", ") : "Skipped")
                        : "Skipped";
                      if (options.multi) setMultiSelected([]);
                      addUserMsg("⏭ Next");
                      setOptions(null);
                      if (phase === "flow") advanceFlow(skipVal);
                    }} style={{
                      background:"transparent", color:"#74b69a",
                      border:"1.5px solid #c8e6c9", borderRadius:20,
                      padding:"9px 16px", fontSize:12, fontWeight:600,
                      cursor:"pointer", fontFamily:"Sora,sans-serif",
                    }}>⏭ Next</button>
                  </div>
                </div>
              )}

              {/* done CTA */}
              {phase === "done" && !isTyping && !isSubmitting && (
                <div className="msg-in" style={{ marginLeft:36, marginTop:4 }}>
                  <button onClick={handleRestart} style={{
                    background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332",
                    border:"none", borderRadius:20, padding:"10px 20px",
                    fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"Sora,sans-serif",
                  }}>🔄 Back to Main Menu</button>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div style={{
              padding:"12px 14px",
              borderTop:"1.5px solid #e8f5e9",
              background:"white",
              display:"flex", gap:8, alignItems:"center", flexShrink:0,
            }}>
              <input
                ref={inputRef}
                type={inputType}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                disabled={!inputEnabled}
                placeholder={inputEnabled ? "Type your answer…" : "Choose an option above ↑"}
                style={{
                  flex:1, padding:"10px 14px", borderRadius:20,
                  border:`1.5px solid ${inputEnabled ? "#52b788" : "#e8f5e9"}`,
                  background: inputEnabled ? "#fafffe" : "#f8fdfb",
                  color:"#1b4332", fontSize:13, outline:"none",
                  fontFamily:"Sora,sans-serif",
                  cursor: inputEnabled ? "text" : "not-allowed",
                  opacity: inputEnabled ? 1 : 0.6,
                  transition:"border 0.2s, opacity 0.2s",
                }}
              />
              <button
                className="send-btn"
                onClick={handleSend}
                disabled={!inputEnabled || !inputVal.trim()}
                style={{
                  width:40, height:40, borderRadius:"50%", border:"none",
                  background: (inputEnabled && inputVal.trim())
                    ? "linear-gradient(135deg,#2d6a4f,#52b788)"
                    : "#c8e6c9",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  cursor: (inputEnabled && inputVal.trim()) ? "pointer" : "default",
                  flexShrink:0, transition:"all 0.2s",
                  boxShadow: (inputEnabled && inputVal.trim()) ? "0 4px 14px rgba(45,106,79,0.35)" : "none",
                }}>
                <SendIcon />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}