import { useState } from "react";
import { Code2, Server, Bot, Database, Wrench, ArrowRight, Sparkles } from "lucide-react";

const skillsData = {
  Frontend:        { icon: Code2,     accentFrom: "#2DD4BF", accentTo: "#60A5FA", title: "Frontend",        tagline: "Interfaces that feel fast and look sharp",              skills: [{ name: "React.js", level: "Advanced" },{ name: "Next.js", level: "Advanced" },{ name: "TypeScript", level: "Intermediate" },{ name: "JavaScript ES6+", level: "Advanced" },{ name: "Tailwind CSS", level: "Advanced" },{ name: "HTML5 / CSS3", level: "Advanced" },{ name: "Redux Toolkit", level: "Intermediate" },{ name: "React Hooks", level: "Advanced" }], projects: "10+" },
  Backend:         { icon: Server,    accentFrom: "#8B5CF6", accentTo: "#EC4899", title: "Backend",         tagline: "APIs built to scale, secured to ship",                  skills: [{ name: "Node.js", level: "Advanced" },{ name: "Express.js", level: "Advanced" },{ name: "REST API Design", level: "Advanced" },{ name: "JWT Authentication", level: "Advanced" },{ name: "RBAC", level: "Intermediate" },{ name: "Middleware Architecture", level: "Advanced" },{ name: "API Rate Limiting", level: "Intermediate" },{ name: "Input Validation", level: "Advanced" }], projects: "8+" },
  "AI & Payments": { icon: Bot,       accentFrom: "#F59E0B", accentTo: "#EF4444", title: "AI & Payments",   tagline: "LLMs and gateways wired into production",               skills: [{ name: "Gemini API", level: "Intermediate" },{ name: "OpenAI API", level: "Intermediate" },{ name: "LLM Integration", level: "Intermediate" },{ name: "Razorpay", level: "Advanced" },{ name: "Cloudinary", level: "Advanced" },{ name: "Nodemailer", level: "Advanced" },{ name: "OAuth 2.0", level: "Advanced" }], projects: "5+" },
  Database:        { icon: Database,  accentFrom: "#10B981", accentTo: "#2DD4BF", title: "Database",        tagline: "Schema design and queries that don't flinch",           skills: [{ name: "MongoDB", level: "Advanced" },{ name: "PostgreSQL", level: "Intermediate" },{ name: "SQL", level: "Advanced" },{ name: "Redis", level: "Intermediate" },{ name: "Schema Design", level: "Advanced" },{ name: "Query Optimization", level: "Advanced" }], projects: "6+" },
  "Tools & DevOps":{ icon: Wrench,    accentFrom: "#6366F1", accentTo: "#8B5CF6", title: "Tools & DevOps",  tagline: "From commit to deployment without friction",            skills: [{ name: "Git", level: "Advanced" },{ name: "GitHub Actions", level: "Intermediate" },{ name: "Docker", level: "Intermediate" },{ name: "Azure", level: "Intermediate" },{ name: "Vercel / Render", level: "Advanced" },{ name: "Postman", level: "Advanced" },{ name: "VS Code", level: "Advanced" },{ name: "Firebase", level: "Intermediate" }], projects: "12+" },
};
const levelDots = { Advanced: 3, Intermediate: 2, Beginner: 1 };

const Skills = () => {
  const [active, setActive] = useState("Frontend");
  const categories = Object.keys(skillsData);
  const current = skillsData[active];
  const Icon = current.icon;

  return (
    <section id="skills" className="min-h-screen w-full text-white py-24 relative">
      <style>{`
        .sk-tab { border: 1px solid rgba(255,255,255,0.1); color: #94A3B8; background: transparent; transition: all .2s; }
        .sk-tab:hover { color: #E2E8F0; border-color: rgba(255,255,255,0.22); background: rgba(255,255,255,0.04); }
        .sk-tab-active { color: #0B0E1A !important; border-color: transparent !important; }
        .sk-chip { border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); transition: border-color .2s, background .2s; }
        .sk-chip:hover { border-color: rgba(255,255,255,0.18); background: rgba(255,255,255,0.06); }
        .sk-dot { width: 6px; height: 6px; border-radius: 9999px; }
        .sk-dot-empty { background: rgba(255,255,255,0.15) !important; }
        .sk-fade { opacity: 0; transform: translateY(10px); animation: sk-up .45s ease-out forwards; }
        @keyframes sk-up { to { opacity: 1; transform: none; } }
        .sk-d1{animation-delay:.05s}.sk-d2{animation-delay:.12s}.sk-d3{animation-delay:.22s}.sk-d4{animation-delay:.32s}
        @media (prefers-reduced-motion: reduce) { .sk-fade { animation: none !important; opacity: 1 !important; transform: none !important; } }
      `}</style>

      {/* Accent glow shifts with active tab */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full blur-3xl pointer-events-none transition-all duration-700"
           style={{ background: `radial-gradient(circle, ${current.accentFrom}14, transparent 70%)` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="sk-fade sk-d1 mb-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-body"
               style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: current.accentFrom }}>
            <Sparkles size={13} /><span>Technical Skills</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-3">What I Build With</h2>
          <p className="font-body text-slate-400 text-lg max-w-3xl">Tools I reach for daily — picked up through shipping real projects, not just tutorials.</p>
        </div>

        {/* Tabs */}
        <div className="sk-fade sk-d2 flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const d = skillsData[cat]; const CatIcon = d.icon; const isActive = cat === active;
            return (
              <button key={cat} onClick={() => setActive(cat)}
                className={`sk-tab${isActive ? " sk-tab-active" : ""} font-body inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold`}
                style={isActive ? { background: `linear-gradient(135deg, ${d.accentFrom}, ${d.accentTo})` } : {}}>
                <CatIcon size={14} />{cat}
              </button>
            );
          })}
        </div>

        {/* Card */}
        <div className="sk-fade sk-d3 rounded-3xl p-8 md:p-10"
             style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.025)", backdropFilter: "blur(12px)" }}>
          {/* Card header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                   style={{ background: `linear-gradient(135deg, ${current.accentFrom}22, ${current.accentTo}22)`, border: `1px solid ${current.accentFrom}33` }}>
                <Icon size={22} style={{ color: current.accentFrom }} />
              </div>
              <div>
                <div className="h-0.5 w-10 rounded-full mb-2" style={{ background: `linear-gradient(90deg, ${current.accentFrom}, ${current.accentTo})` }} />
                <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-1">{current.title}</h3>
                <p className="font-body text-slate-400 text-sm">{current.tagline}</p>
              </div>
            </div>
            <div className="flex-shrink-0 self-start font-body text-sm font-semibold px-4 py-2 rounded-full"
                 style={{ background: `linear-gradient(135deg, ${current.accentFrom}18, ${current.accentTo}18)`, border: `1px solid ${current.accentFrom}33`, color: current.accentFrom }}>
              {current.projects} Projects
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {current.skills.map((skill) => {
              const filled = levelDots[skill.level] ?? 2;
              return (
                <div key={skill.name} className="sk-chip rounded-xl px-4 py-3 flex items-center justify-between gap-2">
                  <span className="font-body text-sm font-medium text-slate-200 truncate">{skill.name}</span>
                  <span className="flex items-center gap-1 flex-shrink-0">
                    {[0,1,2].map(d => (
                      <span key={d} className={`sk-dot ${d < filled ? "" : "sk-dot-empty"}`}
                            style={d < filled ? { background: current.accentFrom } : {}} />
                    ))}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-white/[0.07]">
            <div className="font-body flex items-center gap-6 text-sm text-slate-400">
              <span><span className="font-semibold" style={{ color: current.accentFrom }}>{current.skills.length}</span> skills listed</span>
              <span><span className="font-semibold" style={{ color: current.accentFrom }}>{current.projects}</span> projects shipped</span>
            </div>
            <a href="#projects" className="font-body inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: current.accentFrom }}>
              See projects <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="sk-fade sk-d4 flex justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className="h-1.5 rounded-full transition-all duration-300"
                    style={{ width: cat === active ? "2rem" : "0.5rem", background: cat === active ? current.accentFrom : "rgba(255,255,255,0.15)" }} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
