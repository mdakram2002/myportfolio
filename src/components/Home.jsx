import { Sparkles, ArrowRight } from "lucide-react";
import { NAV_HEIGHT } from "./Navbar";
import PortfolioAI from "./PortfolioAI";

const stats = [
  { value: "2+",   label: "Years building web apps" },
  { value: "06+",  label: "Projects shipped" },
  { value: "MERN", label: "Core stack" },
  { value: "100%", label: "Remote ready" },
];

const Home = () => {
  // Local smooth-scroll helper for this section's own CTA buttons.
  // Navbar has its own copy for its own links — kept separate so
  // Home has no hard dependency on Navbar beyond the NAV_HEIGHT constant.
  const scrollTo = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      id="home"
      style={{ paddingTop: NAV_HEIGHT }} // offsets the fixed navbar so content isn't hidden under it
      className="min-h-screen w-full text-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');
        .ahh-display { font-family: 'Manrope', sans-serif; }
        .ahh-body    { font-family: 'Inter', sans-serif; }

        .ahh-fade { opacity: 0; transform: translateY(12px); animation: ahh-up .6s ease-out forwards; }
        @keyframes ahh-up { to { opacity: 1; transform: translateY(0); } }
        .ahh-d1{animation-delay:.05s}.ahh-d2{animation-delay:.15s}.ahh-d3{animation-delay:.28s}
        .ahh-d4{animation-delay:.4s}.ahh-d5{animation-delay:.52s}

        .ahh-stat + .ahh-stat { border-left: 1px solid rgba(255,255,255,0.1); }

        @media (prefers-reduced-motion: reduce) {
          .ahh-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      {/* pt-7 (28px) — was pt-20 (80px); ~65% smaller gap below the fixed navbar */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 pt-5 pb-24">
        <div className="max-w-3xl">

          <div
            className="ahh-fade ahh-d1 inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 text-sm text-teal-300"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Sparkles size={14} />
            <span className="ahh-body">Open to full-stack &amp; backend roles</span>
          </div>

          <h1 className="ahh-fade ahh-d2 ahh-display font-extrabold tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl mb-7 text-white">
            Full Stack Developer
            <br />Building Scalable,
            <br /><span className="text-slate-400">Production-Ready</span> Web Apps
          </h1>

          <p className="ahh-fade ahh-d3 ahh-body text-lg text-slate-400 leading-relaxed mb-10 max-w-xl">
            I design and ship Full-Stack applications end to end — responsive front ends, REST API design,
            secure multi-layer authentication (JWT + OTP + RBAC + OAuth), solid database design,
            Docker containerization, and CI/CD pipelines deployed on Azure Web App, following an Agile workflow.
          </p>

          <div className="ahh-fade ahh-d4 flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              onClick={(e) => scrollTo(e, "#projects")}
              className="ahh-body inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all"
              style={{ background: "linear-gradient(135deg,#2DD4BF,#8B5CF6)", color: "#0B0E1A" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "#contact")}
              className="ahh-body inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all text-white"
              style={{ border: "1px solid rgba(255,255,255,0.18)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="ahh-fade ahh-d5 flex flex-wrap gap-y-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="ahh-stat flex-1 min-w-[140px] px-6 first:pl-0">
              <p className="ahh-display text-2xl md:text-3xl font-extrabold text-white">{s.value}</p>
              <p className="ahh-body text-sm text-slate-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Floating AI assistant — portals itself to document.body, open by default */}
      <PortfolioAI />
    </div>
  );
};

export default Home;