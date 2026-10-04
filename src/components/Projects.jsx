import { Github, Sparkles, ArrowRight } from "lucide-react";
const projects = [
  {
    id: 1,
    name: "StudyPoint",
    subtitle: "Ed-Tech Platform",
    accentFrom: "#8B5CF6",
    accentTo: "#EC4899",
    details: [
      "Delivered full-featured EdTech platform following MVC architecture with Redux state management. Integrated Razorpay for payments, Cloudinary for video uploads, and Nodemailer for automated confirmations — reducing checkout steps from 5 to 3, boosting signups and supporting 100+ users.",
      "Added Razorpay payments, Cloudinary video uploads, Nodemailer confirmations, and JWT, OTP, and role-based access flows. Deployed the frontend to Netlify and the backend to Azure App Service with Docker and GitHub Actions.",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "JWT + OTP + RBAC", "Razorpay", "Cloudinary", "Nodemailer", "Docker", "Azure App Service", "GitHub Actions CI/CD", "Netlify"],
    github: "https://github.com/mdakram2002/Study_Point",
    live: "https://studypointin.netlify.app/",
  },
  {
    id: 2,
    name: "AI Agent — Customer Support",
    subtitle: "Evidence-Grounded AI Customer Support Agent — OpenAI, RAG, pgvector, Fastify",
    accentFrom: "#10B981",
    accentTo: "#3B82F6",
    details: [
      "Built evidence-first AI support agent with reproducible data pipeline, 54-example golden set, and proper train/evaluation separation. Achieved 72.2% accuracy and 0.63 macro F1 vs 37% majority baseline using TF-IDF classification.",
      "Developed full-stack system with React/Vite frontend and Fastify/TypeScript backend, integrating PostgreSQL + pgvector retrieval, structured LLM classification, evidence-grounded responses, and confidence-based escalation with 13 regression tests and LLM-as-judge evaluation.",
    ],
    tech: ["React", "Vite", "Fastify", "TypeScript", "PostgreSQL", "pgvector", "OpenAI GPT-4o", "TF-IDF", "RAG", "LLM-as-Judge", "Evaluation Pipeline", "CI", "Docker", "Vercel"],
    github: "https://github.com/mdakram2002/hiver-ai-support-agent",
    live: "https://hiver-ai-support-agent-nu.vercel.app/",
  },
  {
    id: 3,
    name: "KnowBase",
    subtitle: "AI Knowledge Management Platform",
    accentFrom: "#2DD4BF",
    accentTo: "#60A5FA",
    details: [
      "Built full-stack AI platform with modular service-layer architecture, integrating LLM APIs (Gemini) for automated summarization and semantic search across 1,000+ documents. Leveraged MongoDB text indexes and batch processing pipelines, reducing search latency by 30% and achieving 95% relevance scoring.",
      "Implemented MongoDB text indexes, batch processing, JWT authentication, rate limiting, input validation, and REST APIs; deployed the client on Vercel.",
    ],
    tech: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "JWT", "Vercel"],
    github: "https://github.com/mdakram2002/knowbase-ai",
    live: "https://knowbase-ai-client.vercel.app/",
  },
  
  {
  id: 4,
  name: "AI-First Healthcare CRM",
  subtitle: "AI-Powered Healthcare Customer Relationship Management",
  accentFrom: "#22C55E",
  accentTo: "#06B6D4",
  details: [
    "Built a healthcare CRM prototype with React, Redux, FastAPI, LangGraph, and PostgreSQL with pgvector for structured notes and follow-up suggestions.",
    "Implemented JWT authentication, role-based access, audit logging, and a RAG workflow for grounded responses. The repository is available to review; a public demo is not yet available.",
  ],
  tech: [
    "React",
    "Redux",
    "FastAPI",
    "LangGraph",
    "Agentic AI",
    "RAG",
    "PostgreSQL (pgvector)",
    "Vector Search",
    "Groq",
    "Docker",
    "Azure",
    "GitHub Actions CI/CD",
    "JWT",
    "RBAC"
  ],
  github: "https://github.com/mdakram2002/hcp-crm",
  },
  {
    id: 5,
    name: "DSA AI Assistant",
    subtitle: "AI-Powered DSA Chatbot",
    accentFrom: "#F59E0B",
    accentTo: "#EF4444",
    details: [
      "Engineered AI-powered DSA assistant using Gemini API that delivers structured explanations with complexity analysis, formatted code examples, and interview-focused tips — eliminating the need to juggle multiple sources (YouTube, LeetCode, textbooks) and reducing login-to-learning friction by 60%.",
      "Implemented guest access, optional Google OAuth, multi-session chat history, Markdown rendering, and syntax highlighting.",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB Atlas", "Gemini API", "Google OAuth 2.0", "Markdown", "Vercel"],
    github: "https://github.com/mdakram2002/dsa_chatbot",
    live: "https://dsa-chatbot-six.vercel.app/",
  },
 {
  id: 6,
  name: "Harbor Chat",
  subtitle: "Real-Time Chat Application",
  accentFrom: "#06B6D4",
  accentTo: "#8B5CF6",
  details: [
    "Built a real-time chat application using React, Vite, Tailwind CSS, Node.js, Express, Socket.io, and MongoDB, enabling instant messaging, persisted chat history, typing indicators, online/offline presence, and message delivery status.",
    "Designed an MVC-style backend with REST APIs and Socket.io, centralized error handling, Mongoose-based data access, and shared client socket state using custom React hooks. Deployed the frontend on Vercel and backend on Render."
  ],

  tech: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "MVC Architecture",
    "React Hooks",
    "Vercel",
    "Render"
    ],
    github: "https://github.com/mdakram2002/chat-app",
    live: "https://harborchat-app.vercel.app/"
  },
  {
    id: 7,
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
    github: "https://github.com/mdakram2002/mini-event-platform",
    live: "https://mini-event-platform-ten.vercel.app",
  },
  {
    id: 8,
    name: "Contract Obligation Assistant",
    subtitle: "AI-Powered Contract Review & Deadline Tracking",
    accentFrom: "#F97316",
    accentTo: "#FBBF24",
    details: [
      "Built a full-stack application that extracts contract parties, key terms, obligations, and renewal deadlines from PDF, DOCX, or pasted text, with source quotes and page-level evidence.",
      "Added human approval workflows, contract version tracking, and deterministic deadline calculations using React, TypeScript, FastAPI, and PostgreSQL.",
    ],
    tech: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "LLM", "Pydantic"],
    github: "https://github.com/mdakram2002/contract-obligation-assistant",
    live: "https://contract-obligation-assistant.vercel.app/",
  },
];

const projectSummaries = {
  1: [
    "Delivered a full-featured EdTech platform using MVC architecture and Redux state management, supporting 100+ users.",
    "Integrated Razorpay payments, Cloudinary video uploads, and Nodemailer confirmations, reducing checkout steps from 5 to 3; implemented 19+ secure REST APIs with JWT, OTP, and RBAC.",
  ],
  2: [
    "Established an evidence-first AI support agent with a reproducible data pipeline, 54-example golden set, and train/evaluation separation.",
    "Reached 72.2% accuracy and 0.63 macro F1 versus a 37% majority baseline using TF-IDF classification, with a React/Vite frontend and Fastify/TypeScript backend.",
  ],
  3: [
    "Engineered a modular AI knowledge platform with Gemini-powered summarization and semantic search across 1,000+ documents, reducing search latency by 30%.",
    "Created 8+ RESTful APIs and added MongoDB indexing, Redis caching, JWT authentication, rate limiting, and input validation across public, guest, and protected workflows.",
  ],
  4: [
    "Orchestrated a LangGraph state machine with 8 Pydantic-validated tools for entity extraction, voice-note summaries, and semantic follow-up suggestions across 5+ core screens.",
    "Secured FastAPI services with JWT, rep/manager/guest RBAC, and audit logging; added a pgvector RAG pipeline and deployed the Dockerized React/Redux app on AWS EC2 with GitHub Actions CI/CD and health checks.",
  ],
  5: [
    "Developed a Gemini-powered DSA assistant that returns structured explanations, complexity analysis, formatted code examples, and interview-focused tips.",
    "Enabled guest access, optional Google OAuth, multi-session chat history, Markdown rendering, and syntax highlighting.",
  ],
  6: [
    "Implemented a real-time chat application with instant messaging, persisted chat history, typing indicators, presence, and delivery status.",
    "Structured the application with React, Socket.io, Express, and MongoDB, including REST APIs, centralized error handling, Mongoose data access, and custom React hooks.",
  ],
  7: [
    "Launched a MERN event-management platform with JWT authentication, role-based access, Google and GitHub OAuth, and event CRUD.",
    "Integrated Cloudinary image uploads, Markdown descriptions, RSVP tracking, MongoDB transaction-based capacity enforcement, rate limiting, and deployment on Vercel and Railway.",
  ],
  8: [
    "Extracts contract parties, clauses, obligations, and deadlines from PDF, DOCX, or pasted text, with every AI-extracted item linked to source evidence.",
    "Includes human review and approval, version history, and deterministic renewal and notice deadline calculations in a React/TypeScript, FastAPI, and PostgreSQL application.",
  ],
};

const projectOrder = [1, 4, 3, 2, 8, 5, 6, 7];
const orderedProjects = [...projects].sort(
  (first, second) => projectOrder.indexOf(first.id) - projectOrder.indexOf(second.id),
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="pj-root w-full text-white py-20 sm:py-24 overflow-hidden relative"
    >
      <style>{`
        .pj-display { font-family: 'Manrope', sans-serif; }
        .pj-body    { font-family: 'Inter', sans-serif; }

        .pj-pill {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .pj-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.09);
          background: linear-gradient(160deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02) 45%);
          box-shadow: 0 18px 55px rgba(0,0,0,0.16);
          transition: border-color .25s, transform .25s, box-shadow .25s;
        }
        .pj-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 24px 65px rgba(0,0,0,0.24);
        }

        .pj-bullet {
          width: 6px; height: 6px; border-radius: 50%;
          flex-shrink: 0; margin-top: 7px;
        }

        .pj-chip {
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 10px;
          font-weight: 600;
          border: 1px solid;
          line-height: 1.2;
        }

        .pj-action {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          padding: 0 14px;
          font: 600 12px 'Inter', sans-serif;
          transition: background .2s, border-color .2s, color .2s;
        }
        .pj-action-secondary {
          color: #e2e8f0;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
        }
        .pj-action-secondary:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.08);
        }
        .pj-action-primary {
          color: #06111d;
          background: linear-gradient(135deg, #5eead4, #a78bfa);
        }
        .pj-action-primary:hover { filter: brightness(1.08); }
        @media (prefers-reduced-motion: reduce) {
          .pj-card, .pj-action { transition: none; }
          .pj-card:hover { transform: none; }
        }
      `}</style>

      <div className="absolute -top-20 right-0 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="pj-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 text-sm pj-body text-teal-300">
              <Sparkles size={13} />
              <span>Selected Work</span>
            </div>
            <h2 className="pj-display mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Things I&apos;ve Built
            </h2>
            <p className="pj-body max-w-xl text-base text-slate-400">
              A selection of products and experiments, from the first schema to the final deploy.
            </p>
          </div>
          <div className="pj-body inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-teal-300" />
            {orderedProjects.length} featured projects
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:gap-5">
          {orderedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="pj-card grid min-w-0 grid-cols-1 gap-5 overflow-hidden rounded-3xl p-5 sm:p-6 lg:grid-cols-[minmax(190px,0.8fr)_minmax(0,1.5fr)_minmax(210px,0.9fr)] lg:items-center lg:gap-8 lg:p-7"
              style={{ borderLeftColor: `${project.accentFrom}75` }}
            >
              <div className="min-w-0">
                <span
                  className="pj-display mb-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full border px-3 text-xs font-bold"
                  style={{
                    borderColor: `${project.accentFrom}35`,
                    background: `${project.accentFrom}12`,
                    color: project.accentFrom,
                  }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <p
                  className="pj-body mb-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: project.accentFrom }}
                >
                  {project.subtitle}
                </p>
                <h3 className="pj-display text-xl font-extrabold leading-tight text-white sm:text-2xl">
                  {project.name}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {projectSummaries[project.id].map((description, descriptionIndex) => (
                  <li
                    key={descriptionIndex}
                    className="flex items-start gap-2.5 pj-body text-xs leading-relaxed text-slate-300 sm:text-[13px]"
                  >
                    <span
                      className="pj-bullet"
                      style={{ background: `linear-gradient(135deg, ${project.accentFrom}, ${project.accentTo})` }}
                    />
                    <span>{description}</span>
                  </li>
                ))}
              </ul>

              <div className="min-w-0 border-t border-white/[0.08] pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="pj-chip pj-body"
                      style={{
                        background: `${project.accentFrom}10`,
                        borderColor: `${project.accentFrom}30`,
                        color: project.accentFrom,
                      }}
                    >
                      {technology}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="pj-chip pj-body border-white/10 bg-white/[0.04] text-slate-400">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source on GitHub`}
                    className="pj-action pj-action-secondary"
                  >
                    <Github size={15} /> Source code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pj-action pj-action-primary"
                    >
                      Visit project <ArrowRight size={14} />
                    </a>
                  )}
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
