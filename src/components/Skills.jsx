import { useState } from "react";
import {
  Code2, Server, Database, Bot, Wrench, FileCode2,
  ArrowRight, Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 6 categories total. Only 3 are ever visible as cards at once (see `slots` state below).
const skillsData = {
  Frontend: {
    icon: Code2, accentFrom: "#2DD4BF", accentTo: "#60A5FA",
    tagline: "Interfaces that feel fast and look sharp",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Vite", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3", "Redux Toolkit", "React Hooks", "VS Code"],
    projects: "10+",
  },
  Backend: {
    icon: Server, accentFrom: "#8B5CF6", accentTo: "#EC4899",
    tagline: "APIs built to scale, secured to ship",
    skills: ["Node.js", "Express.js", "REST API Design", "JWT Authentication", "RBAC", "OAuth 2.0", "Middleware Architecture", "Input Validation", "Python", "Git", "Postman", "OTP (Email)"],
    projects: "8+",
  },
  Database: {
    icon: Database, accentFrom: "#10B981", accentTo: "#2DD4BF",
    tagline: "Schema design and queries that don't flinch",
    skills: ["MongoDB", "PostgreSQL", "SQL", "Redis", "Schema Design", "Query Optimization", "Firebase"],
    projects: "6+",
  },
  "AI & Payments": {
    icon: Bot, accentFrom: "#F59E0B", accentTo: "#EF4444",
    tagline: "LLMs, gateways and uploads wired into real product flows",
    skills: ["Gemini API", "OpenAI API", "LLM Integration", "Razorpay", "Cloudinary", "Nodemailer"],
    projects: "4+",
  },
  DevOps: {
    icon: Wrench, accentFrom: "#6366F1", accentTo: "#8B5CF6",
    tagline: "From commit to deployment without friction",
    skills: ["Docker", "Microsoft Azure", "GitHub Actions", "Git / GitHub", "Postman", "Vercel / Render / Netlify", "CI/CD Pipelines", "Agile Workflow"],
    projects: "9+",
  },
  Languages: {
    icon: FileCode2, accentFrom: "#38BDF8", accentTo: "#22D3EE",
    tagline: "Comfortable reading and writing across the stack",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "SQL", "HTML / CSS"],
    projects: "10+",
  },
};

const ALL_CATEGORIES = Object.keys(skillsData);
const INITIAL_SLOTS = ["Frontend", "Backend", "Database"]; // 3 visible card slots, to start

const Skills = () => {
  const [slots, setSlots] = useState(INITIAL_SLOTS);

  // Click a category: if it's already showing, just promote it to the
  // "most recent" end of the queue. If it's hidden, evict the oldest
  // visible slot (front of the array) and swap this one into its place.
  const selectCategory = (cat) => {
    setSlots((prev) => {
      if (prev.includes(cat)) {
        return [...prev.filter((c) => c !== cat), cat];
      }
      return [...prev.slice(1), cat];
    });
  };

  return (
    <section id="skills" className="min-h-screen w-full text-white py-24 relative">
      <style>{`
        .sk-tab { border: 1px solid rgba(255,255,255,0.1); color: #94A3B8; background: transparent; transition: all .2s; }
        .sk-tab:hover { color: #E2E8F0; border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.04); }

        .sk-card { border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.025); backdrop-filter: blur(12px); }
        .sk-chip { border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.03); color: #CBD5E1; transition: border-color .2s, background .2s; }
        .sk-chip:hover { border-color: rgba(255,255,255,0.3); background: rgba(255,255,255,0.06); }

        .sk-fade { opacity: 0; transform: translateY(10px); animation: sk-up .45s ease-out forwards; }
        @keyframes sk-up { to { opacity: 1; transform: none; } }
        .sk-d1{animation-delay:.05s}.sk-d2{animation-delay:.12s}.sk-d3{animation-delay:.22s}

        @media (prefers-reduced-motion: reduce) { .sk-fade { animation: none !important; opacity: 1 !important; transform: none !important; } }
      `}</style>

      {/* Soft static ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(45,212,191,0.08), rgba(139,92,246,0.06) 45%, transparent 70%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="sk-fade sk-d1 mb-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-body"
               style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#2DD4BF" }}>
            <Sparkles size={13} /><span>Technical Skills</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-3">What I Build With</h2>
          <p className="font-body text-slate-400 text-lg max-w-3xl">
            6 areas, 3 cards on screen at a time — click any tab below to swap it into view.
          </p>
        </div>

        {/* Tabs — all categories; the 3 currently shown as cards are highlighted with a soft tint, not a solid fill */}
        <div className="sk-fade sk-d2 flex items-center justify-center flex-wrap gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => {
            const d = skillsData[cat];
            const CatIcon = d.icon;
            const isVisible = slots.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => selectCategory(cat)}
                className="sk-tab font-body inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                style={isVisible ? {
                  background: `linear-gradient(135deg, ${d.accentFrom}26, ${d.accentTo}26)`,
                  borderColor: `${d.accentFrom}4D`,
                  color: d.accentFrom,
                } : {}}
              >
                <CatIcon size={14} />{cat}
              </button>
            );
          })}
        </div>

        {/* 3 card slots */}
        <div className="sk-fade sk-d3 grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {slots.map((cat) => {
              const d = skillsData[cat];
              const Icon = d.icon;
              return (
                <motion.div
                  key={cat}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="sk-card rounded-3xl p-6 md:p-7 flex flex-col"
                  style={{ borderColor: `${d.accentFrom}33`, boxShadow: `0 0 40px -10px ${d.accentFrom}1A` }}
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                         style={{ background: `linear-gradient(135deg, ${d.accentFrom}1A, ${d.accentTo}1A)`, border: `1px solid ${d.accentFrom}33` }}>
                      <Icon size={20} style={{ color: d.accentFrom }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl mb-0.5">{cat}</h3>
                      <p className="font-body text-slate-400 text-xs leading-snug">{d.tagline}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {d.skills.map((s) => (
                      <span key={s} className="sk-chip font-body text-xs font-medium px-3 py-1.5 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/[0.07]">
                    <span className="font-body text-xs text-slate-500">{d.skills.length} skills</span>
                    <span className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ background: `${d.accentFrom}14`, border: `1px solid ${d.accentFrom}2E`, color: d.accentFrom }}>
                      {d.projects} projects
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Single shared link, instead of repeating it on every card */}
        <div className="sk-fade sk-d3 flex justify-center mt-8">
          <a href="#projects" className="font-body inline-flex items-center gap-2 text-sm font-semibold text-teal-300 hover:opacity-80 transition-opacity">
            See all projects <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;