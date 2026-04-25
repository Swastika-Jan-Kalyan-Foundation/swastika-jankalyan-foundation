import { useState, useEffect, useRef, useCallback } from "react";

/* ══════════════════════════════════════════════════════
   SVG ICON LIBRARY
══════════════════════════════════════════════════════ */

const LeafIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const SendIcon = ({ color = "white" }) => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CloseIcon = ({ color = "white", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CheckIcon = ({ color = "white", size = 13 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const RestartIcon = ({ color = "#95d5b2" }) => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10"/>
    <path d="M3.51 15a9 9 0 1 0 .49-4.46"/>
  </svg>
);

const BotLeafIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const IconUser     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconMail     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const IconPhone    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconCoin     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" y1="6" x2="12" y2="8"/><line x1="12" y1="16" x2="12" y2="18"/></svg>;
const IconSeedling = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 1 1.4 4c-1.6.1-3.1-.1-4.5-.5.2-1.8.5-3.5 1.8-4.5 1.3-.9 3.7-.8 5.6.1a9 9 0 0 1-4.3.9z"/></svg>;
const IconMsg      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconGender   = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="11" r="3"/><path d="M12 3C8.13 3 5 6.13 5 10c0 2.88 1.67 5.38 4.12 6.62L12 21l2.88-4.38A7.47 7.47 0 0 0 19 10c0-3.87-3.13-7-7-7z"/></svg>;
const IconCal      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const IconInsta    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const IconPin      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
const IconGrad     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const IconBriefcase= () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const IconZap      = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const IconTeam     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconCrown    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="m4 20 2-8 6 4 6-4 2 8"/><circle cx="12" cy="6" r="2"/><circle cx="4" cy="8" r="2"/><circle cx="20" cy="8" r="2"/></svg>;
const IconClip     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>;
const IconThink    = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/></svg>;
const IconInfo     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const IconAbout    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;
const IconDonate   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const IconVolunt   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const IconContact  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const IconSkip     = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>;
const IconBack     = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const IconWarning  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;

const IconSpinner = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" style={{ animation:"spin 0.8s linear infinite" }}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

/* ── Summary field icon map ── */
const FIELD_ICONS = {
  fullName: <IconUser />, email: <IconMail />, phone: <IconPhone />,
  amount: <IconCoin />, purpose: <IconSeedling />, message: <IconMsg />,
  gender: <IconGender />, dob: <IconCal />, instagram: <IconInsta />,
  address: <IconPin />, education: <IconGrad />, career: <IconBriefcase />,
  skills: <IconZap />, teams: <IconTeam />, leadership: <IconCrown />,
  experience: <IconClip />, whyJoin: <IconThink />, subject: <IconInfo />,
};

/* ══════════════════════════════════════════════════════
   CONTENT
══════════════════════════════════════════════════════ */
const NGO_ABOUT = `Welcome to Swastika Foundation!

We are a grassroots NGO based in Ranchi, Jharkhand, dedicated to healing the earth and empowering its people.

Our Mission: We plant forests, build futures, and restore hope — one tree, one child, one community at a time.

What We Do:
• Reforestation & Tree Plantation Drives
• Tribal Children Education Programs
• Clean Water & Sanitation Initiatives
• Sustainable Healthcare for Remote Villages
• Women Empowerment & Skill Development
• Disaster Relief Operations

Since our founding, we have planted 5,200+ trees, impacted 12,400+ lives, supported 28 villages, and inspired 340+ volunteers to join the cause.

Together, we are building a greener, kinder tomorrow.`;

const DONATE_FLOW = [
  { key:"fullName",    type:"text",    bot:"Let's get your donation started! What's your **full name**?" },
  { key:"email",       type:"email",   bot:"What's your **email address**? We'll send your receipt here." },
  { key:"phone",       type:"text",    bot:"Your **phone number**?" },
  { key:"amount",      type:"number",  bot:"How much would you like to donate? (₹)" },
  { key:"purpose",     type:"options", bot:"What's the **purpose** of your donation?",
    options:["Tree Plantation Drive","Tribal Children Education","Clean Water Initiative","Healthcare Plans","Women Empowerment","Disaster Relief","General Funds","Others"] },
  { key:"message",     type:"text",    bot:"Any **message** you'd like to leave for us? (optional)" },
  { key:"__confirm__", type:"confirm", bot:"Please **review** your donation details below and confirm!" },
];

const VOLUNTEER_FLOW = [
  { key:"fullName",    type:"text",    bot:"Wonderful! Let's get you onboarded. What's your **full name**?" },
  { key:"gender",      type:"options", bot:"Your **gender**?", options:["Male","Female","Non-binary","Prefer not to say"] },
  { key:"dob",         type:"date",    bot:"Your **date of birth**?" },
  { key:"phone",       type:"text",    bot:"Your **phone number**?" },
  { key:"email",       type:"email",   bot:"Your **email address**?" },
  { key:"instagram",   type:"text",    bot:"Your **Instagram handle**? (e.g. @yourname)" },
  { key:"address",     type:"text",    bot:"Your **address**?" },
  { key:"education",   type:"options", bot:"Your **highest educational qualification**?",
    options:["High School (10th)","Higher Secondary (12th)","Undergraduate","Graduate","Postgraduate","PhD / Doctorate"] },
  { key:"career",      type:"options", bot:"Your **current career status**?", options:["Student","Job","Drop Year","Other"] },
  { key:"skills",      type:"text",    bot:"Tell us your **skills & interests**!" },
  { key:"teams",       type:"multi",   bot:"Which **teams** are you interested in? (select all that apply)",
    options:["Content Writing Team","Graphics Designing & Photography Team","Social Media Team","PR & Marketing Team","Human Resources Team","Operations Team","Research & Planning Team"] },
  { key:"leadership",  type:"options", bot:"Your **leadership preference**?", options:["Leader","Co-Leader","No"] },
  { key:"experience",  type:"text",    bot:"Any **previous volunteer experience**? (or type 'None')" },
  { key:"whyJoin",     type:"text",    bot:"**Why do you want to join us?** Tell us from the heart!" },
  { key:"__submit__",  type:"submit",  bot:"You're all set! Review your application and submit when ready." },
];

const CONTACT_FLOW = [
  { key:"fullName",  type:"text",    bot:"Happy to help! What's your **full name**?" },
  { key:"phone",     type:"text",    bot:"Your **phone number**?" },
  { key:"email",     type:"email",   bot:"Your **email address**?" },
  { key:"subject",   type:"options", bot:"What's your **subject / concern**?",
    options:["General Inquiry","Volunteering","Donations & Funding","Tree Plantation Drive","Partnership & Collaboration","Media & Press","Careers","Report an Issue"] },
  { key:"message",   type:"text",    bot:"Please share your **message** with us." },
  { key:"__done__",  type:"done",    bot:"Thank you! We've received your message and will get back to you within **24–48 hours**." },
];

const MAIN_MENU = [
  { key:"who",       label:"Who Are We?",      icon:<IconAbout />,   color:"#1b4332" },
  { key:"donate",    label:"Donate to Us!",     icon:<IconDonate />,  color:"#2d6a4f" },
  { key:"volunteer", label:"Be a Part of Us!",  icon:<IconVolunt />,  color:"#40916c" },
  { key:"contact",   label:"Contact Us!",       icon:<IconContact />, color:"#52b788" },
];

/* ══════════════════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════════════════ */
function loadRazorpay() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

function BotText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((p, i) => i % 2 === 1
        ? <strong key={i} style={{ fontWeight:700 }}>{p}</strong>
        : <span key={i}>{p}</span>)}
    </span>
  );
}

function Typewriter({ text, speed = 18, onDone }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); onDone?.(); }
    }, speed);
    return () => clearInterval(id);
  }, [text]);
  return <span style={{ whiteSpace:"pre-wrap" }}>{displayed}</span>;
}

function TriggerTypewriter() {
  const full = "Hi! I'm Swastika, how may I help you?";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 38);
    return () => clearInterval(id);
  }, []);

  // Split to bold "Swastika"
  const swastikaIdx = displayed.indexOf("Swastika");
  const before = displayed.slice(0, swastikaIdx === -1 ? displayed.length : swastikaIdx);
  const name   = swastikaIdx !== -1 ? displayed.slice(swastikaIdx, swastikaIdx + 8) : "";
  const after  = swastikaIdx !== -1 ? displayed.slice(swastikaIdx + 8) : "";

  return (
    <>
      <span style={{ color:"#2d6a4f", fontSize:13, fontWeight:600 }}>{before}</span>
      {name && <span style={{ color:"#1b4332", fontSize:13, fontWeight:800 }}>{name}</span>}
      <span style={{ color:"#2d6a4f", fontSize:13, fontWeight:600 }}>{after}</span>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function SwastikaChatbot() {
  const [open, setOpen]               = useState(false);
  const [messages, setMessages]       = useState([]);
  const [inputVal, setInputVal]       = useState("");
  const [inputEnabled, setInputEnabled] = useState(false);
  const [options, setOptions]         = useState(null);
  const [flow, setFlow]               = useState(null);
  const [flowStep, setFlowStep]       = useState(0);
  const [flowData, setFlowData]       = useState({});
  const [multiSelected, setMultiSelected] = useState([]);
  const [isTyping, setIsTyping]       = useState(false);
  const [showMain, setShowMain]       = useState(false);
  const [phase, setPhase]             = useState("idle");
  const [inputType, setInputType]     = useState("text");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const bottomRef = useRef();
  const inputRef  = useRef();

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, options, multiSelected]);

  useEffect(() => {
    if (!open || messages.length > 0) return;
    setTimeout(() => addBotMsg("Namaste! I'm **Swastika**, your guide to our NGO.\n\nHow may I help you today?", () => {
      setShowMain(true); setPhase("main");
    }), 400);
  }, [open]);

  const addBotMsg = useCallback((text, onDone, isTypewriter = false) => {
    setIsTyping(true); setInputEnabled(false); setOptions(null);
    const id = Date.now() + Math.random();
    setMessages(m => [...m, { id, role:"bot", text, typing:true, isTypewriter }]);
    if (isTypewriter) { setIsTyping(false); return; }
    const delay = Math.min(600 + text.length * 12, 2200);
    setTimeout(() => {
      setMessages(m => m.map(msg => msg.id === id ? { ...msg, typing:false } : msg));
      setIsTyping(false); onDone?.();
    }, delay);
  }, []);

  const addUserMsg = (text) =>
    setMessages(m => [...m, { id: Date.now(), role:"user", text }]);

  const handleMainMenu = (choice) => {
    setShowMain(false); addUserMsg(choice);
    if (choice === "who") {
      setPhase("about");
      setTimeout(() => {
        const id = Date.now();
        setMessages(m => [...m, { id, role:"bot", text:NGO_ABOUT, typing:false, isTypewriter:true }]);
        setIsTyping(false);
      }, 400);
    } else {
      const flowMap = { donate: DONATE_FLOW, volunteer: VOLUNTEER_FLOW, contact: CONTACT_FLOW };
      const f = flowMap[choice];
      setFlow(f); setFlowStep(0); setFlowData({}); setPhase("flow");
      setTimeout(() => runFlowStep(f, 0, {}), 400);
    }
  };

  const runFlowStep = (flowArr, step, data) => {
    if (step >= flowArr.length) return;
    const s = flowArr[step];
    addBotMsg(s.bot, () => {
      if (s.type === "options" || s.type === "multi") {
        setOptions({ list: s.options, multi: s.type === "multi" });
        setMultiSelected([]); setInputEnabled(false);
      } else if (["confirm","submit","done"].includes(s.type)) {
        setInputEnabled(false); setOptions(null);
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
    setFlowStep(next); setOptions(null); setInputEnabled(false);
    setTimeout(() => runFlowStep(flow, next, newData), 300);
  };

  const handleSend = () => {
    const val = inputVal.trim();
    if (!val || !inputEnabled) return;
    setInputVal(""); addUserMsg(val);
    if (phase === "flow") advanceFlow(val);
  };

  const handleOptionClick = (opt) => {
    if (options?.multi) {
      setMultiSelected(prev => prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]);
    } else {
      addUserMsg(opt); setOptions(null);
      if (phase === "flow") advanceFlow(opt);
    }
  };

  const handleMultiConfirm = () => {
    if (!multiSelected.length) return;
    const val = multiSelected.join(", ");
    addUserMsg(val); setOptions(null); setMultiSelected([]);
    if (phase === "flow") advanceFlow(val);
  };

  const handleRestart = () => {
    setMessages([]); setOptions(null); setFlow(null); setFlowStep(0);
    setFlowData({}); setMultiSelected([]); setInputEnabled(false);
    setInputVal(""); setInputType("text"); setPhase("idle");
    setShowMain(false); setSubmitError(null); setIsSubmitting(false);
    setTimeout(() => addBotMsg("Namaste! I'm **Swastika**, your guide to our NGO.\n\nHow may I help you today?", () => {
      setShowMain(true); setPhase("main");
    }), 300);
  };

  /* ── Donation ── */
  const handleDonationConfirm = async (data) => {
    setIsSubmitting(true); setSubmitError(null);
    try {
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Failed to load Razorpay. Check your internet connection.");

      const orderRes = await fetch("https://sjkf-backend-api.vercel.app/api/donations/create-order", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ amount: Number(data.amount) }),
      });
      const orderResult = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderResult.message || "Failed to create payment order.");

      setIsSubmitting(false);

      const rzpOptions = {
        key: orderResult.keyId,
        amount: orderResult.order.amount,
        currency: orderResult.order.currency,
        name: "Swastika Jan Kalyan Foundation",
        description: "Donation",
        order_id: orderResult.order.id,
        prefill: { name: data.fullName, email: data.email, contact: data.phone },
        theme: { color: "#2e7d32" },
        modal: {
          ondismiss: () => addBotMsg("Payment was cancelled. Your details are saved — feel free to try again!", () => setPhase("done")),
        },
        handler: async (rzpRes) => {
          try {
            setIsSubmitting(true);
            const verifyRes = await fetch("https://sjkf-backend-api.vercel.app/api/donations/verify-payment", {
              method:"POST", headers:{"Content-Type":"application/json"},
              body: JSON.stringify({
                razorpay_order_id: rzpRes.razorpay_order_id,
                razorpay_payment_id: rzpRes.razorpay_payment_id,
                razorpay_signature: rzpRes.razorpay_signature,
                fullName: data.fullName, email: data.email, phoneNumber: data.phone,
                amount: Number(data.amount), currency:"INR",
                donationPurpose: data.purpose, message: data.message || "",
                isAnonymous: false,
              }),
            });
            const vr = await verifyRes.json();
            if (!verifyRes.ok) throw new Error(vr.message || "Payment verification failed.");
            setIsSubmitting(false);
            addBotMsg(
              `Thank you for your donation of ₹${data.amount}, ${data.fullName}! You are a true Earth Guardian!\n\nA receipt has been sent to ${data.email}.\n\n**Donor ID:** ${vr.data.donorId}\n**Transaction ID:** ${vr.data.transactionId}`,
              () => { setPhase("done"); setShowMain(false); }
            );
          } catch (err) {
            setIsSubmitting(false); setSubmitError(err.message);
            addBotMsg(`Payment verification failed: ${err.message}\n\nContact us if your amount was deducted.`, () => setPhase("done"));
          }
        },
      };
      new window.Razorpay(rzpOptions).open();
    } catch (err) {
      setIsSubmitting(false); setSubmitError(err.message);
      addBotMsg(`Something went wrong: ${err.message}`, () => setPhase("done"));
    }
  };

  /* ── Volunteer ── */
  const handleVolunteerSubmit = async (data) => {
    setIsSubmitting(true); setSubmitError(null);
    try {
      const res = await fetch("https://sjkf-backend-api.vercel.app/api/volunteers", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          name: data.fullName, gender: data.gender, dateOfBirth: data.dob,
          phoneNumber: data.phone, email: data.email, instagramId: data.instagram || "",
          address: data.address, highestEducationalQualification: data.education,
          currentCareerStatus: data.career, skillsAndInterest: data.skills,
          interestedTeams: data.teams ? data.teams.split(", ") : [],
          leadershipPreference: data.leadership, previousVolunteerExperience: data.experience,
          whyJoinUs: data.whyJoin,
        }),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Submission failed.");
      setIsSubmitting(false);
      addBotMsg(
        `Welcome to the Swastika family, ${data.fullName}!\n\nYour application has been received. Our team will reach out at ${data.email} soon!\n\n**Applicant ID:** ${result.data?.applicantId}`,
        () => setPhase("done")
      );
    } catch (err) {
      setIsSubmitting(false); setSubmitError(err.message);
      addBotMsg(`Submission failed: ${err.message}`, () => setPhase("done"));
    }
  };

  /* ── Summary card ── */
  const renderSummary = (flowArr, data, type) => {
    const isDonation = type === "confirm";
    const isVolunteer = type === "submit";
    return (
      <div style={{ background:"#f0faf4", borderRadius:12, padding:"12px 14px", marginTop:10, border:"1.5px solid #c8e6c9" }}>
        {flowArr.filter(s => !s.key.startsWith("__") && data[s.key]).map(s => (
          <div key={s.key} style={{ display:"flex", gap:7, marginBottom:6, fontSize:12, alignItems:"flex-start" }}>
            <span style={{ color:"#52b788", flexShrink:0, marginTop:1 }}>{FIELD_ICONS[s.key] || <IconInfo />}</span>
            <span style={{ color:"#74b69a", fontWeight:700, minWidth:98, textTransform:"capitalize", flexShrink:0 }}>
              {s.key.replace(/([A-Z])/g," $1")}:
            </span>
            <span style={{ color:"#1b4332", fontWeight:600, wordBreak:"break-word" }}>{data[s.key]}</span>
          </div>
        ))}
        {submitError && (
          <div style={{ background:"#fff0f0", border:"1px solid #ffcdd2", borderRadius:8, padding:"8px 10px", marginTop:8, fontSize:12, color:"#c62828", display:"flex", gap:6, alignItems:"center" }}>
            <IconWarning /> {submitError}
          </div>
        )}
        <div style={{ display:"flex", gap:10, marginTop:12, flexWrap:"wrap", alignItems:"center" }}>
          {isDonation && (
            <button onClick={() => { addUserMsg("Proceed to Payment"); setOptions(null); handleDonationConfirm(data); }}
              disabled={isSubmitting}
              style={{ background: isSubmitting ? "#c8e6c9" : "linear-gradient(90deg,#2d6a4f,#52b788)", color:"white", border:"none", borderRadius:20, padding:"9px 20px", fontSize:13, fontWeight:700, cursor: isSubmitting ? "wait" : "pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6 }}>
              {isSubmitting ? <><IconSpinner /> Processing…</> : <><CheckIcon size={13}/> Pay ₹{data.amount}</>}
            </button>
          )}
          {isVolunteer && (
            <button onClick={() => { addUserMsg("Application Submitted!"); setOptions(null); handleVolunteerSubmit(data); }}
              disabled={isSubmitting}
              style={{ background: isSubmitting ? "#c8e6c9" : "linear-gradient(90deg,#1b4332,#40916c)", color:"white", border:"none", borderRadius:20, padding:"9px 20px", fontSize:13, fontWeight:700, cursor: isSubmitting ? "wait" : "pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6 }}>
              {isSubmitting ? <><IconSpinner /> Submitting…</> : <><CheckIcon size={13}/> Submit Application</>}
            </button>
          )}
          {type === "done" && (
            <button onClick={handleRestart} style={{ background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332", border:"none", borderRadius:20, padding:"9px 20px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6 }}>
              <RestartIcon color="#1b4332"/> Back to Menu
            </button>
          )}
          {!isSubmitting && (
            <button onClick={handleRestart} style={{ background:"transparent", color:"#74b69a", border:"1.5px solid #c8e6c9", borderRadius:20, padding:"9px 14px", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:5 }}>
              <IconBack /> Restart
            </button>
          )}
        </div>
      </div>
    );
  };

  /* ════════════════════════════════ RENDER ════════════════════════════════ */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        .swastika-chatbot * { box-sizing:border-box; font-family:Sora,sans-serif; }
        @keyframes chatSlideUp { from{opacity:0;transform:translateY(20px) scale(0.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes msgIn       { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dotBounce   { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
        @keyframes glow        { 0%,100%{box-shadow:0 0 0 0 rgba(82,183,136,0.4)} 50%{box-shadow:0 0 0 8px rgba(82,183,136,0)} }
        @keyframes spin        { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .chat-open  { animation: chatSlideUp 0.35s cubic-bezier(.22,1,.36,1) both; }
        .msg-in     { animation: msgIn 0.3s ease both; }
        .opt-btn    { transition:all 0.18s; }
        .opt-btn:hover:not(:disabled) { transform:translateY(-1px); }
        .menu-btn   { transition:all 0.18s; }
        .menu-btn:hover { filter:brightness(1.1); transform:translateY(-1px); }
        .send-btn:hover:not(:disabled) { transform:scale(1.07); }
        .send-btn:active:not(:disabled) { transform:scale(0.97); }
        .trigger-btn:hover .trigger-inner { transform:scale(1.04); }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-thumb { background:#c8e6c9; border-radius:4px; }
      `}</style>

      <div className="swastika-chatbot">

        {/* ── Floating trigger ── */}
        <div className="trigger-btn"
          style={{ position:"fixed", bottom:28, right:28, display:"flex", alignItems:"center", zIndex:9999, cursor:"pointer" }}
          onClick={() => setOpen(o => !o)}>
          {!open && (
            <div style={{ background:"white", borderRadius:"16px 16px 4px 16px", padding:"10px 16px", marginRight:10, boxShadow:"0 4px 20px rgba(45,106,79,0.18)", border:"1.5px solid #c8e6c9", animation:"msgIn 0.4s ease", whiteSpace:"nowrap" }}>
             
              <TriggerTypewriter />
            </div>
          )}
          <div className="trigger-inner" style={{ width:58, height:58, borderRadius:"50%", background:"linear-gradient(135deg,#1b4332,#40916c)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 6px 24px rgba(45,106,79,0.4)", transition:"transform 0.2s", animation: open ? "none" : "glow 2.5s infinite", flexShrink:0 }}>
            {open ? <CloseIcon /> : <LeafIcon />}
          </div>
        </div>

        {/* ── Chat window ── */}
        {open && (
          <div className="chat-open" style={{ position:"fixed", bottom:100, right:28, width:370, maxWidth:"calc(100vw - 40px)", height:580, maxHeight:"calc(100vh - 120px)", background:"white", borderRadius:24, boxShadow:"0 20px 60px rgba(27,67,50,0.22),0 4px 16px rgba(27,67,50,0.1)", display:"flex", flexDirection:"column", overflow:"hidden", zIndex:9998, border:"1.5px solid #c8e6c9" }}>

            {/* Header */}
            <div style={{ background:"linear-gradient(135deg,#1b4332,#2d6a4f)", padding:"14px 18px", display:"flex", alignItems:"center", gap:12, flexShrink:0 }}>
              <div style={{ position:"relative" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"linear-gradient(135deg,#52b788,#95d5b2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <BotLeafIcon size={22} />
                </div>
                <div style={{ position:"absolute", bottom:1, right:1, width:11, height:11, borderRadius:"50%", background:"#52b788", border:"2px solid #1b4332" }} />
              </div>
              <div style={{ flex:1 }}>
                <div style={{ color:"white", fontSize:15, fontWeight:800 }}>Swastika</div>
                <div style={{ color:"#95d5b2", fontSize:11, fontWeight:500 }}>NGO Assistant · Online</div>
              </div>
              <button onClick={handleRestart} style={{ background:"rgba(255,255,255,0.1)", border:"none", borderRadius:20, padding:"5px 10px", color:"#95d5b2", fontSize:11, fontWeight:600, cursor:"pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:5 }}>
                <RestartIcon /> Restart
              </button>
              <button onClick={() => setOpen(false)} style={{ background:"rgba(255,255,255,0.12)", border:"none", borderRadius:"50%", width:30, height:30, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}>
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div style={{ flex:1, overflowY:"auto", padding:"16px 14px", display:"flex", flexDirection:"column", gap:10, background:"#fafffe" }}>

              {messages.map((msg) => (
                <div key={msg.id} className="msg-in" style={{ display:"flex", flexDirection: msg.role==="bot" ? "row" : "row-reverse", gap:8, alignItems:"flex-end" }}>
                  {msg.role === "bot" && (
                    <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#2d6a4f,#52b788)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginBottom:2 }}>
                      <BotLeafIcon size={14} />
                    </div>
                  )}
                  <div style={{ maxWidth:"82%", background: msg.role==="bot" ? "white" : "linear-gradient(135deg,#2d6a4f,#40916c)", color: msg.role==="bot" ? "#1b4332" : "white", borderRadius: msg.role==="bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px", padding:"10px 13px", fontSize:13, lineHeight:1.65, border: msg.role==="bot" ? "1.5px solid #e8f5e9" : "none", boxShadow: msg.role==="bot" ? "0 2px 8px rgba(45,106,79,0.07)" : "0 2px 12px rgba(45,106,79,0.25)", whiteSpace:"pre-wrap", wordBreak:"break-word" }}>
                    {msg.role === "bot" && msg.isTypewriter && !msg.typing ? (
                      <Typewriter text={msg.text} speed={14} onDone={() => {
                        if (phase === "about") setTimeout(() => { setShowMain(true); setPhase("main"); }, 600);
                      }} />
                    ) : (
                      <BotText text={msg.text} />
                    )}
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

              {/* Typing / submitting bubble */}
              {(isTyping || isSubmitting) && (
                <div className="msg-in" style={{ display:"flex", gap:8, alignItems:"flex-end" }}>
                  <div style={{ width:28, height:28, borderRadius:"50%", background:"linear-gradient(135deg,#2d6a4f,#52b788)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <BotLeafIcon size={14} />
                  </div>
                  <div style={{ background:"white", borderRadius:"16px 16px 16px 4px", padding:"12px 16px", border:"1.5px solid #e8f5e9", display:"flex", gap:5, alignItems:"center" }}>
                    {isSubmitting
                      ? <span style={{ fontSize:12, color:"#52b788", fontWeight:600, display:"flex", alignItems:"center", gap:6 }}><IconSpinner /> Processing…</span>
                      : [0,1,2].map(i => <div key={i} style={{ width:7, height:7, borderRadius:"50%", background:"#52b788", animation:`dotBounce 1.2s ease ${i*0.2}s infinite` }} />)
                    }
                  </div>
                </div>
              )}

              {/* Main menu */}
              {showMain && !isTyping && (
                <div className="msg-in" style={{ display:"flex", flexDirection:"column", gap:8, marginLeft:36 }}>
                  {MAIN_MENU.map(({ key, label, icon, color }) => (
                    <button key={key} className="menu-btn" onClick={() => handleMainMenu(key)}
                      style={{ background:color, color:"white", border:"none", borderRadius:20, padding:"10px 18px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"Sora,sans-serif", textAlign:"left", boxShadow:`0 3px 12px ${color}55`, display:"flex", alignItems:"center", gap:9 }}>
                      {icon} {label}
                    </button>
                  ))}
                </div>
              )}

              {/* Flow options */}
              {options && !isTyping && (
                <div className="msg-in" style={{ marginLeft:36, display:"flex", flexDirection:"column", gap:7 }}>
                  {options.list.map(opt => {
                    const sel = multiSelected.includes(opt);
                    return (
                      <button key={opt} className="opt-btn" onClick={() => handleOptionClick(opt)}
                        style={{ background: sel ? "linear-gradient(90deg,#2d6a4f,#52b788)" : "white", color: sel ? "white" : "#2d6a4f", border:`1.5px solid ${sel ? "#2d6a4f" : "#c8e6c9"}`, borderRadius:20, padding:"9px 14px", fontSize:12.5, fontWeight:600, cursor:"pointer", fontFamily:"Sora,sans-serif", textAlign:"left", display:"flex", alignItems:"center", gap:8, boxShadow: sel ? "0 3px 10px rgba(45,106,79,0.28)" : "none" }}>
                        <span style={{ width:16, height:16, borderRadius:"50%", border:`1.5px solid ${sel ? "rgba(255,255,255,0.6)" : "#b2dfdb"}`, background: sel ? "rgba(255,255,255,0.25)" : "transparent", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                          {sel && <CheckIcon color="white" size={9} />}
                        </span>
                        {opt}
                      </button>
                    );
                  })}

                  {/* Action row */}
                  <div style={{ display:"flex", gap:8, marginTop:4 }}>
                    {options.multi && (
                      <>
                        <button onClick={handleMultiConfirm}
                          disabled={multiSelected.length === 0}
                          style={{ background: multiSelected.length ? "linear-gradient(90deg,#1b4332,#40916c)" : "#e8f5e9", color: multiSelected.length ? "white" : "#9e9e9e", border:"none", borderRadius:20, padding:"9px 16px", fontSize:12, fontWeight:700, cursor: multiSelected.length ? "pointer" : "not-allowed", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:6, transition:"all 0.18s" }}>
                          <CheckIcon color={multiSelected.length ? "white" : "#9e9e9e"} size={11}/> Confirm ({multiSelected.length})
                        </button>
                        {/* Next for multi — enabled only if ≥1 selected */}
                        <button onClick={() => {
                            if (!multiSelected.length) return;
                            handleMultiConfirm();
                          }}
                          disabled={multiSelected.length === 0}
                          style={{ background:"transparent", color: multiSelected.length ? "#52b788" : "#bdbdbd", border:`1.5px solid ${multiSelected.length ? "#a5d6a7" : "#e0e0e0"}`, borderRadius:20, padding:"9px 14px", fontSize:12, fontWeight:600, cursor: multiSelected.length ? "pointer" : "not-allowed", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:5, transition:"all 0.18s" }}>
                          <IconSkip /> Next
                        </button>
                      </>
                    )}
                    {/* Next for single-select — always disabled (user must click an option) */}
                    {!options.multi && (
                      <button disabled
                        style={{ background:"transparent", color:"#bdbdbd", border:"1.5px solid #e0e0e0", borderRadius:20, padding:"9px 14px", fontSize:12, fontWeight:600, cursor:"not-allowed", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:5, opacity:0.55 }}>
                        <IconSkip /> Next
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Done CTA */}
              {phase === "done" && !isTyping && !isSubmitting && (
                <div className="msg-in" style={{ marginLeft:36, marginTop:4 }}>
                  <button onClick={handleRestart} style={{ background:"linear-gradient(90deg,#52b788,#95d5b2)", color:"#1b4332", border:"none", borderRadius:20, padding:"10px 20px", fontSize:13, fontWeight:700, cursor:"pointer", fontFamily:"Sora,sans-serif", display:"flex", alignItems:"center", gap:7 }}>
                    <RestartIcon color="#1b4332" /> Back to Main Menu
                  </button>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div style={{ padding:"12px 14px", borderTop:"1.5px solid #e8f5e9", background:"white", display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
              <input
                ref={inputRef}
                type={inputType}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                disabled={!inputEnabled}
                placeholder={inputEnabled ? "Type your answer…" : "Choose an option above ↑"}
                style={{ flex:1, padding:"10px 14px", borderRadius:20, border:`1.5px solid ${inputEnabled ? "#52b788" : "#e8f5e9"}`, background: inputEnabled ? "#fafffe" : "#f8fdfb", color:"#1b4332", fontSize:13, outline:"none", fontFamily:"Sora,sans-serif", cursor: inputEnabled ? "text" : "not-allowed", opacity: inputEnabled ? 1 : 0.6, transition:"border 0.2s, opacity 0.2s" }}
              />
              <button className="send-btn" onClick={handleSend}
                disabled={!inputEnabled || !inputVal.trim()}
                style={{ width:40, height:40, borderRadius:"50%", border:"none", background: (inputEnabled && inputVal.trim()) ? "linear-gradient(135deg,#2d6a4f,#52b788)" : "#c8e6c9", display:"flex", alignItems:"center", justifyContent:"center", cursor: (inputEnabled && inputVal.trim()) ? "pointer" : "default", flexShrink:0, transition:"all 0.2s", boxShadow: (inputEnabled && inputVal.trim()) ? "0 4px 14px rgba(45,106,79,0.35)" : "none" }}>
                <SendIcon color={(inputEnabled && inputVal.trim()) ? "white" : "#a5d6a7"} />
              </button>
            </div>

          </div>
        )}
      </div>
    </>
  );
}