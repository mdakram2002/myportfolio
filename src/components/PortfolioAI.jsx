import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Sparkles, X, Send } from "lucide-react";
import { NAV_HEIGHT } from "./Navbar";

/**
 * Floating "Portfolio AI" assistant widget.
 * Open by default (per spec) — closes only when the user clicks an X.
 * Self-contained: render <PortfolioAI /> once anywhere (e.g. inside Home.jsx);
 * it portals itself to document.body and stays fixed bottom-right.
 *
 * Answers come from a small resume-derived knowledge base below — fully
 * client-side, no API key needed. If you later want this backed by a real
 * Gemini call, swap the body of getAnswer() for a fetch to your backend;
 * everything else (UI, state, quick replies) stays the same.
 */

// ── Knowledge base, generated from Akram's resume ───────────────────────
const knowledgeBase = [
  {
    id: "looking-for",
    keywords: ["looking for", "seeking", "role", "job", "opportunit", "hire", "available", "what is akram"],
    answer: "Open to frontend, backend, or full-stack roles — full-time or remote.",
  },
  {
    id: "tech-stack",
    keywords: ["tech stack", "technolog", "skills", "stack", "tools", "languages"],
    answer: "MERN (MongoDB, Express, React, Node.js), plus Next.js, TypeScript, Docker, and Azure.",
  },
  {
    id: "experience",
    keywords: ["experience", "internship", "work history", "diyos", "company", "job history"],
    answer: "Frontend Engineer Intern at Diyos Infotech (Hyderabad) — built 33+ UI components for an ERP system.",
  },
  {
    id: "knowbase",
    keywords: ["knowbase", "knowledge platform", "ai platform"],
    answer: "KnowBase — an AI knowledge platform with Gemini-powered search across 1,000+ docs, 30% faster search.",
    redirect: "projects",
  },
  {
    id: "studypoint",
    keywords: ["studypoint", "edtech", "education platform"],
    answer: "StudyPoint — an EdTech platform with Razorpay payments and Cloudinary uploads, 19+ secure APIs.",
    redirect: "projects",
  },
  {
    id: "dsa-bot",
    keywords: ["dsa ai", "dsa assistant", "chatbot project"],
    answer: "DSA AI Assistant — a Gemini-powered chatbot for structured DSA explanations and interview tips.",
    redirect: "projects",
  },
  {
    id: "projects",
    keywords: ["project", "built", "show me his work", "portfolio work"],
    answer: "He's built KnowBase, StudyPoint, and a DSA AI Assistant — taking you to the Projects section.",
    redirect: "projects",
  },
  {
    id: "education",
    keywords: ["education", "degree", "college", "university", "cgpa", "study"],
    answer: "B.Tech in CS (AI & ML), Technocrats Institute of Technology, Bhopal — CGPA 7.25.",
  },
  {
    id: "certifications",
    keywords: ["certification", "certificate", "azure fundamentals", "az-900"],
    answer: "Microsoft Azure Fundamentals (AZ-900), and a Generative AI certificate (Microsoft & LinkedIn).",
  },
  {
    id: "dsa-count",
    keywords: ["dsa problem", "leetcode", "competitive programming", "problems solved"],
    answer: "145+ DSA problems solved so far.",
  },
  {
    id: "location",
    keywords: ["location", "based", "where", "relocat", "remote", "hyderabad"],
    answer: "Based in Hyderabad, Telangana — open to remote work or relocation.",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "reach", "linkedin", "github"],
    answer: "Reach him at mdakram12022002@gmail.com, or use \"Send Akram a message\" below.",
  },
];

const quickReplies = [
  { label: "What is Akram looking for?", id: "looking-for" },
  { label: "Tell me about KnowBase", id: "knowbase" },
  { label: "What's his tech stack?", id: "tech-stack" },
  { label: "Send Akram a message", id: "send-message" },
];

const fallbackAnswer =
  "This is a system-generated reply, so I may not have that one — please connect with Akram directly via email (mdakram12022002@gmail.com) or the contact form below.";

function findEntry(query) {
  const q = query.toLowerCase();
  return knowledgeBase.find((entry) => entry.keywords.some((k) => q.includes(k)));
}

const PortfolioAI = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [isOpen, setIsOpen] = useState(true); // open by default
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text:
        "Hey! I'm Akram's AI assistant — I know his full background and can have a real conversation about his work. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const closeAndGoToContact = () => {
    setIsOpen(false);
    scrollToSection("contact");
  };

  const respond = (userText, predefinedId) => {
    setMessages((m) => [...m, { role: "user", text: userText }]);
    setIsTyping(true);
    setTimeout(() => {
      const entry = predefinedId
        ? knowledgeBase.find((k) => k.id === predefinedId)
        : findEntry(userText);
      const answer = entry ? entry.answer : fallbackAnswer;
      setMessages((m) => [...m, { role: "bot", text: answer }]);
      setIsTyping(false);
      // Project-related answers redirect to the Projects section (panel stays open)
      if (entry?.redirect) {
        setTimeout(() => scrollToSection(entry.redirect), 700);
      }
    }, 500 + Math.random() * 350);
  };

  const handleQuickReply = (q) => {
    if (q.id === "send-message") {
      respond(q.label);
      setTimeout(closeAndGoToContact, 900);
      return;
    }
    respond(q.label, q.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    respond(text);
  };

  const ui = (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        .pai-display { font-family: 'Manrope', sans-serif; }
        .pai-body    { font-family: 'Inter', sans-serif; }

        .pai-toggle {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9990;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2DD4BF, #8B5CF6);
          color: #0B0E1A;
          box-shadow: 0 10px 30px rgba(45,212,191,0.25);
          transition: transform .2s;
        }
        .pai-toggle:hover { transform: scale(1.06); }

        .pai-panel {
          position: fixed;
          top: ${NAV_HEIGHT + 12}px; /* sits just below the floating navbar, with a small gap — not touching */
          bottom: 88px; /* sits just above the floating toggle button */
          right: 24px;
          z-index: 9990;
          width: min(420px, calc(100vw - 32px));
          display: flex;
          flex-direction: column;
          background: rgba(15, 23, 42, 0.97);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 60px -10px rgba(0,0,0,0.6);
          overflow: hidden;
        }

        .pai-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .pai-avatar {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2DD4BF, #8B5CF6);
          color: #fff;
        }
        .pai-titles { flex: 1; min-width: 0; }
        .pai-title-row { display: flex; align-items: center; gap: 8px; }
        .pai-title { color: #fff; font-weight: 700; font-size: 15px; }
        .pai-badge {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 2px 7px;
          border-radius: 999px;
          color: #C4B5FD;
          background: rgba(139,92,246,0.18);
          border: 1px solid rgba(139,92,246,0.35);
        }
        .pai-subtitle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #94A3B8;
          margin-top: 2px;
        }
        .pai-dot { width: 6px; height: 6px; border-radius: 50%; background: #2DD4BF; flex-shrink: 0; }
        .pai-close {
          flex-shrink: 0;
          color: #64748B;
          padding: 4px;
          border-radius: 8px;
          transition: color .15s, background .15s;
        }
        .pai-close:hover { color: #fff; background: rgba(255,255,255,0.06); }

        .pai-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pai-messages::-webkit-scrollbar { width: 6px; }
        .pai-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 999px; }

        .pai-bubble {
          font-size: 13.5px;
          line-height: 1.55;
          padding: 10px 14px;
          border-radius: 14px;
          max-width: 88%;
        }
        .pai-bubble-bot { align-self: flex-start; background: rgba(255,255,255,0.06); color: #E2E8F0; }
        .pai-bubble-user {
          align-self: flex-end;
          color: #0B0E1A;
          background: linear-gradient(135deg, rgba(45,212,191,0.9), rgba(139,92,246,0.9));
        }

        .pai-typing { display: flex; gap: 4px; align-items: center; padding: 12px 14px; }
        .pai-typing span {
          width: 6px; height: 6px; border-radius: 50%;
          background: #94A3B8;
          animation: pai-bounce 1.2s infinite ease-in-out;
        }
        .pai-typing span:nth-child(2) { animation-delay: .15s; }
        .pai-typing span:nth-child(3) { animation-delay: .3s; }
        @keyframes pai-bounce { 0%, 80%, 100% { opacity: .3; transform: translateY(0); } 40% { opacity: 1; transform: translateY(-3px); } }

        .pai-quick {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          padding: 4px 16px 14px;
        }
        .pai-chip {
          text-align: left;
          font-size: 12px;
          line-height: 1.3;
          padding: 9px 12px;
          border-radius: 12px;
          color: #5EEAD4;
          background: rgba(45,212,191,0.06);
          border: 1px solid rgba(45,212,191,0.3);
          transition: background .15s, border-color .15s;
        }
        .pai-chip:hover { background: rgba(45,212,191,0.12); border-color: rgba(45,212,191,0.5); }

        .pai-inputbar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .pai-input {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          color: #fff;
          font-size: 13.5px;
          padding: 10px 14px;
          border-radius: 999px;
          outline: none;
          transition: border-color .2s;
        }
        .pai-input::placeholder { color: #64748B; }
        .pai-input:focus { border-color: rgba(45,212,191,0.5); }
        .pai-send {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #2DD4BF, #8B5CF6);
          color: #0B0E1A;
          transition: filter .15s, opacity .15s;
        }
        .pai-send:hover { filter: brightness(1.08); }
        .pai-send:disabled { opacity: 0.45; cursor: not-allowed; }

        @media (max-width: 480px) {
          .pai-panel { right: 16px; left: 16px; width: auto; }
          .pai-toggle { right: 16px; }
        }
      `}</style>

      <button
        onClick={() => setIsOpen((o) => !o)}
        className="pai-toggle"
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
      >
        {isOpen ? <X size={20} /> : <Sparkles size={20} />}
      </button>

      {isOpen && (
        <div className="pai-panel">
          <div className="pai-header">
            <div className="pai-avatar"><Sparkles size={18} /></div>
            <div className="pai-titles">
              <div className="pai-title-row">
                <span className="pai-display pai-title">Portfolio AI</span>
                <span className="pai-body pai-badge">GEMINI</span>
              </div>
              <div className="pai-body pai-subtitle">
                <span className="pai-dot" /> AI-powered &middot; knows everything about Akram
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="pai-close" aria-label="Close assistant">
              <X size={18} />
            </button>
          </div>

          <div className="pai-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`pai-body pai-bubble ${m.role === "user" ? "pai-bubble-user" : "pai-bubble-bot"}`}
              >
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="pai-bubble pai-bubble-bot pai-typing">
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="pai-quick">
            {quickReplies.map((q) => (
              <button key={q.id} className="pai-body pai-chip" onClick={() => handleQuickReply(q)}>
                {q.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="pai-inputbar">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Akram…"
              className="pai-body pai-input"
            />
            <button type="submit" className="pai-send" disabled={!input.trim()} aria-label="Send">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );

  if (!mounted) return null;
  return createPortal(ui, document.body);
};

export default PortfolioAI;