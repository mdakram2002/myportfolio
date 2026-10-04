import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { NAV_HEIGHT } from "./Navbar";

const contactLinks = [
  { label: "Email", value: "mdakram12022002@gmail.com", href: "mailto:mdakram12022002@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/mdakram2002", icon: Linkedin },
  { label: "GitHub", value: "GitHub", href: "https://github.com/mdakram2002", icon: Github },
  { label: "Portfolio", value: "Portfolio", href: "https://mdakram.vercel.app", icon: Globe },
  { label: "LeetCode", value: "LeetCode", href: "https://leetcode.com/u/mdakram2002/", icon: Code2 },
];

const expertise = [
  "19+ production REST APIs (Node.js / Express) with modular middleware and structured logging",
  "Auth & security: JWT authentication, OTP verification, RBAC, API rate limiting, and Redis-based sessions/caching",
  "MongoDB indexing and projection; PostgreSQL schema design, query optimization, and pgvector",
  "Cloud & CI/CD: Docker, GitHub Actions, Azure, AWS EC2, and containerized deployments",
  "Skilled GenAI: RAG pipelines, vector search, LangGraph, and OpenAI/Groq LLM integrations as a secondary specialization",
];

const Home = () => {
  const scrollTo = (event, href) => {
    event.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      id="home"
      style={{ paddingTop: NAV_HEIGHT }}
      className="min-h-screen w-full text-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');
        .ahh-display { font-family: 'Manrope', sans-serif; }
        .ahh-body { font-family: 'Inter', sans-serif; }
        .ahh-fade { opacity: 0; transform: translateY(12px); animation: ahh-up .6s ease-out forwards; }
        @keyframes ahh-up { to { opacity: 1; transform: translateY(0); } }
        .ahh-d1 { animation-delay: .05s; }
        .ahh-d2 { animation-delay: .15s; }
        .ahh-d3 { animation-delay: .28s; }
        .ahh-d4 { animation-delay: .4s; }
        .ahh-link { transition: color .2s, border-color .2s, background .2s; }
        .ahh-link:hover { color: #5eead4; border-color: rgba(45,212,191,.35); background: rgba(45,212,191,.06); }
        @media (prefers-reduced-motion: reduce) {
          .ahh-fade { animation: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>

      <main className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-8 md:px-10 lg:min-h-[calc(100vh-96px)] lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
        <section className="max-w-2xl">
          <div
            className="ahh-fade ahh-d1 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <BriefcaseBusiness size={14} />
            <span className="ahh-body">Open to Software Engineering opportunities</span>
          </div>

          <h1 className="ahh-fade ahh-d2 ahh-display mb-3 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            MD AKRAM
          </h1>
          <p className="ahh-fade ahh-d2 ahh-body mb-6 text-xl font-medium text-slate-300 sm:text-2xl">
            Software Engineer <span className="text-teal-300">—</span> Full Stack Developer
          </p>

          <div className="ahh-fade ahh-d3 mb-7 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400">
            <a className="ahh-link inline-flex items-center gap-2" href="mailto:mdakram12022002@gmail.com">
              <Mail size={15} /> mdakram12022002@gmail.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} /> Hyderabad, Telangana
            </span>
          </div>

          <nav aria-label="Profile links" className="ahh-fade ahh-d3 mb-8 flex flex-wrap gap-2">
            {contactLinks.slice(1).map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="ahh-link inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-sm text-slate-300"
              >
                <Icon size={15} /> {label}
              </a>
            ))}
          </nav>

          <div className="ahh-fade ahh-d3 mb-9">
            <h2 className="ahh-display mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
              Summary
            </h2>
            <p className="ahh-body text-base leading-7 text-slate-400 sm:text-[17px]">
              Software Engineer with hands-on experience building production-ready frontend, backend services, REST APIs,
              and database-driven applications using JavaScript, TypeScript, React.js, Node.js, FastAPI, MongoDB, and
              PostgreSQL. Strong foundation in C++, DSA, and OOP, with experience in Docker, AWS EC2, Azure, GitHub Actions,
              API integration, testing, debugging, and performance optimization.

            </p>
          </div>

          <div className="ahh-fade ahh-d4 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(event) => scrollTo(event, "#projects")}
              className="ahh-body inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all"
              style={{ background: "linear-gradient(135deg,#2DD4BF,#8B5CF6)", color: "#0B0E1A" }}
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="#experience"
              onClick={(event) => scrollTo(event, "#experience")}
              className="ahh-body inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.06]"
            >
              Experience <ArrowDown size={16} />
            </a>
          </div>
        </section>

        <aside
          aria-labelledby="expertise-heading"
          className="ahh-fade ahh-d4 rounded-2xl p-6 sm:p-8 lg:p-9"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="ahh-body mb-3 text-sm font-semibold text-slate-300">Core expertise</p>
          <h2 id="expertise-heading" className="ahh-display mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl">
            Backend &amp; Full-stack systems
          </h2>
          <ul className="ahh-body space-y-3 text-[15px] leading-7 text-slate-400 sm:text-base">
            {expertise.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="ahh-body mt-6 flex flex-wrap gap-2.5">
            {["19+ Secure APIs", "100+ Users", "1,000+ Documents"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Home;
