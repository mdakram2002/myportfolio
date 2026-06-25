import { Github, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import Dr_Maya_Website from "../assets/Dr_Maya.png";
import Mini_Event_Platform from "../assets/event.png";
import StudyPoint from "../assets/banner.png";
import DSA_Chatbot from "../assets/dsa_chatbot.png";
import Knowbase from "../assets/knowbase.png";

const projects = [
  {
    id: 1,
    name: "KnowBase",
    subtitle: "AI Knowledge Management Platform",
    accentFrom: "#2DD4BF",
    accentTo: "#60A5FA",
    details: [
      "Built full-stack AI platform with modular service-layer architecture, integrating LLM APIs (Gemini) for automated summarization and semantic search across 1,000+ documents. Leveraged MongoDB text indexes and batch processing pipelines, reducing search latency by 30% and achieving 95% relevance scoring.",
      "Deployed 8+ RESTful APIs with JWT authentication, rate limiting, and input validation. Designed modular architecture supporting 5+ core modules, reducing feature development time by 21% and enabling rapid iteration.",
    ],
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "JWT", "Vercel"],
    image: Knowbase,
    github: "https://github.com/mdakram2002/knowbase-ai",
    live: "https://knowbase-ai-client.vercel.app/",
  },
  {
    id: 2,
    name: "StudyPoint",
    subtitle: "EdTech Application",
    accentFrom: "#8B5CF6",
    accentTo: "#EC4899",
    details: [
      "Delivered full-featured EdTech platform following MVC architecture with Redux state management. Integrated Razorpay for payments, Cloudinary for video uploads, and Nodemailer for automated confirmations — reducing checkout steps from 5 to 3, boosting signups and supporting 100+ users.",
      "Designed 19+ secure RESTful APIs with JWT, OTP, RBAC authentication. Deployed frontend to Netlify and backend to Azure App Service using Docker with CI/CD via GitHub Actions for zero-downtime updates. Optimized payment flow using React Hooks, boosting conversion rates.",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT + OTP + RBAC", "Razorpay", "Cloudinary", "Nodemailer", "Docker", "Azure App Service", "GitHub Actions CI/CD", "Netlify"],
    image: StudyPoint,
    github: "https://github.com/mdakram2002/Study_Point",
    live: "https://studypointin.netlify.app/",
  },
  {
    id: 3,
    name: "DSA AI Assistant",
    subtitle: "AI-Powered DSA Chatbot",
    accentFrom: "#F59E0B",
    accentTo: "#EF4444",
    details: [
      "Engineered AI-powered DSA assistant using Gemini API that delivers structured explanations with complexity analysis, formatted code examples, and interview-focused tips — eliminating the need to juggle multiple sources (YouTube, LeetCode, textbooks) and reducing login-to-learning friction by 60%.",
      "Implemented guest authentication with optional Google OAuth, multi-session chat history, and real-time Markdown with syntax highlighting. Enabled switching between 3+ concurrent chats, creating an all-in-one learning environment.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "Google OAuth 2.0", "Markdown", "Vercel"],
    image: DSA_Chatbot,
    github: "https://github.com/mdakram2002/dsa_chatbot",
    live: "https://dsa-chatbot-six.vercel.app/",
  },
  {
    id: 4,
    name: "Dr. Maya Reynolds",
    subtitle: "Therapy Homepage — Squarespace Redesign",
    accentFrom: "#10B981",
    accentTo: "#2DD4BF",
    details: [
      "Cloned the Lilac Squarespace template homepage with pixel-perfect layout, responsive grid system, and Tailwind CSS utilities to ensure consistent spacing and hierarchy across devices.",
      "Redesigned the theme with a calming, professional color palette while maintaining WCAG-compliant contrast, warm typography, and glassmorphism UI effects.",
      "Added a custom 'Our Office' section featuring real office imagery, supportive copy about safety and privacy, and full visual/typographic consistency with the rest of the site.",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Vercel"],
    image: Dr_Maya_Website,
    github: "https://github.com/mdakram2002/dr-maya-therapy",
    live: "https://dr-maya-therapy-chi.vercel.app",
  },
  {
    id: 5,
    name: "Mini Event Platform",
    subtitle: "Full-stack MERN Event Management",
    accentFrom: "#6366F1",
    accentTo: "#8B5CF6",
    details: [
      "Built a complete event management platform using MERN stack with JWT authentication, role-based access, Google/GitHub OAuth, and bcrypt password hashing.",
      "Implemented full CRUD for events — rich creation with Cloudinary image upload, markdown descriptions, real-time RSVP system, capacity enforcement using MongoDB transactions, and visual fill indicators.",
      "Deployed frontend to Vercel, backend to Railway, with API rate limiting, CORS configuration, error handling, and toast notifications for instant user feedback.",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Cloudinary", "JWT", "Vercel"],
    image: Mini_Event_Platform,
    github: "https://github.com/mdakram2002/mini-event-platform",
    live: "https://mini-event-platform-ten.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="pj-root min-h-screen w-full bg-slate-950 text-white py-20 overflow-x-hidden relative"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .pj-display { font-family: 'Manrope', sans-serif; }
        .pj-body    { font-family: 'Inter', sans-serif; }

        .pj-grid {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: linear-gradient(to bottom, transparent, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.5) 80%, transparent);
        }

        .pj-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
        }

        /* project card */
        .pj-card {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(12px);
          transition: border-color .35s, transform .3s;
        }
        .pj-card:hover { transform: translateY(-3px); }

        /* image container — fixed height, fills fully */
        .pj-img-wrap {
          position: relative;
          overflow: hidden;
          height: 220px;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .pj-img-wrap {
            height: 100%;
            min-height: 240px;
            max-height: 320px;
          }
        }
        .pj-img-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform .5s ease, filter .4s ease;
        }
        .pj-card:hover .pj-img-wrap img { transform: scale(1.04); filter: brightness(0.45); }

        /* hover overlay */
        .pj-overlay {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity .3s;
        }
        .pj-card:hover .pj-overlay { opacity: 1; }

        /* live button */
        .pj-live-btn {
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          color: #fff; transition: background .2s, transform .2s;
        }
        .pj-live-btn:hover { background: rgba(255,255,255,0.28); transform: scale(1.1); }

        /* bullet */
        .pj-bullet {
          width: 5px; height: 5px; border-radius: 50%;
          flex-shrink: 0; margin-top: 7px;
        }

        /* tech chip */
        .pj-chip {
          border-radius: 999px;
          padding: 3px 10px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid;
        }

        /* github btn */
        .pj-gh-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background .2s, border-color .2s;
        }
        .pj-gh-btn:hover {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.22);
        }

        /* index watermark */
        .pj-index {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 56px;
          line-height: 1;
          position: absolute;
          top: -10px; right: 16px;
          pointer-events: none;
          user-select: none;
        }
        @media (max-width: 1024px) {
          .pj-index { font-size: 40px; top: -6px; right: 12px; }
        }
      `}</style>

      {/* ambient glows */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pj-grid pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="mb-12">
          <div className="pj-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm pj-body text-teal-300">
            <Sparkles size={13} />
            <span>Selected Work</span>
          </div>
          <h2 className="pj-display font-extrabold text-4xl md:text-5xl tracking-tight mb-2">
            Things I've Built
          </h2>
          <p className="pj-body text-slate-400 text-base max-w-xl">
            End-to-end projects — from database schema to deployed UI, each shipped to production.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-7">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="pj-card rounded-2xl overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-stretch ${idx % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>

                {/* Image */}
                <div className="pj-img-wrap bg-slate-900" style={{ direction: "ltr" }}>
                  <img src={project.image} alt={project.name} />
                  <div className="pj-overlay">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-live-btn"
                      aria-label={`View ${project.name} live`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-5 md:p-7 relative" style={{ direction: "ltr" }}>

                  {/* Watermark index */}
                  <span
                    className="pj-index"
                    style={{ color: `${project.accentFrom}14` }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div>
                    {/* Title row */}
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <div>
                        <div
                          className="h-0.5 w-7 rounded-full mb-2.5"
                          style={{ background: `linear-gradient(90deg, ${project.accentFrom}, ${project.accentTo})` }}
                        />
                        <h3
                          className="pj-display font-extrabold text-xl sm:text-2xl leading-tight"
                          style={{
                            background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {project.name}
                        </h3>
                        <p className="pj-body text-xs text-slate-400 mt-0.5">{project.subtitle}</p>
                      </div>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                        className="pj-gh-btn flex-shrink-0 p-2 rounded-lg mt-0.5"
                      >
                        <Github size={16} className="text-slate-300" />
                      </a>
                    </div>

                    {/* Bullets */}
                    <ul className="mt-3.5 space-y-2 mb-4">
                      {project.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 pj-body text-xs text-slate-300 leading-relaxed">
                          <span
                            className="pj-bullet"
                            style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
                          />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col gap-3 pt-4 border-t border-white/[0.07]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="pj-chip pj-body"
                          style={{
                            background: `${project.accentFrom}10`,
                            borderColor: `${project.accentFrom}30`,
                            color: project.accentFrom,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-body inline-flex items-center gap-1.5 text-xs font-semibold w-fit transition-opacity hover:opacity-75"
                      style={{ color: project.accentFrom }}
                    >
                      View live project <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
