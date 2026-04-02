import { Github, ExternalLink } from "lucide-react";
import PlanForAdven from "../assets/planForAdventure.png";
import StudyPoint from "../assets/banner.png";
import DSA_Chatbot from "../assets/dsa_chatbot.png";
import SecondBrain from "../assets/SecondBrain.png";

const projects = [
  {
    id: 1,
    name: "Second Brain App",
    subtitle: "AI Knowledge Management Platform",
    details: [
      "Architected a full-stack platform using Next.js, Node.js, Express, and MongoDB with client–server architecture, reusable components, and modular backend services supporting 5+ core modules.",
      "Implemented 8+ RESTful APIs with JWT authentication and CRUD operations, integrating AI-powered text summarization and semantic search, improving performance and scalability.",
    ],
    technologies: "Next.js 14, React, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, Gemini API",
    image: SecondBrain,
    github: "https://github.com/mdakram2002/second-brain-app",
    live: "https://second-brain-app-client.vercel.app",
  },
  {
    id: 2,
    name: "StudyPoint",
    subtitle: "EdTech Application",
    details: [
      "Engineered a full-stack EdTech platform using the MERN stack and MVC architecture, enabling course creation, enrollment, and progress tracking for 100+ users through role-based dashboards.",
      "Developed 19+ RESTful APIs with JWT authentication, OTP verification, and role-based access control, implementing features like course management, ratings and reviews, and profile management.",
      "Integrated Razorpay payment gateway and Cloudinary media storage, and deployed using CI/CD with GitHub Actions to Vercel, improving application performance, scalability, and user experience.",
    ],
    technologies: "React, Tailwind CSS, Node.js, Express.js, MongoDB, Redux Toolkit, JWT Auth, Razorpay, Cloudinary, Vercel",
    image: StudyPoint,
    github: "https://github.com/mdakram2002/Study_Point",
    live: "https://study-point-self.vercel.app",
  },
  {
    id: 3,
    name: "DSA AI Chatbot",
    subtitle: "AI-powered chatbot platform",
    details: [
      "Developed a full-stack AI chatbot using MERN stack with separate client-server architecture, implementing JWT authentication, Google OAuth 2.0, and guest user functionality.",
      "Built a real-time chat interface with persistent message history and responsive design, with RESTful APIs, robust error handling, and CORS configuration.",
      "Deployed client to Vercel and server to Railway using MongoDB Atlas; optimized performance via state management, API rate limiting, and production-ready error boundaries.",
    ],
    technologies: "React, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, Google OAuth 2.0, JWT, Vercel",
    image: DSA_Chatbot,
    github: "https://github.com/mdakram2002/dsa_chatbot",
    live: "https://dsa-chatbot-six.vercel.app",
  },
];

const Projects = () => {
  const featured = projects[0];

  return (
    <section id="project" className="bg-black text-white py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 max-w-full">
        <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch rounded-3xl border border-gray-800 bg-gradient-to-br from-slate-900 via-gray-950 to-black overflow-hidden shadow-2xl"
            >
              {/* Image Section with Hover Overlay */}
              <div className="relative w-full h-full min-h-80 bg-black overflow-hidden group rounded-l-3xl">
                <div className="relative w-full h-full aspect-[16/9] sm:aspect-[4/3] md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-contain object-center transition-all duration-500 group-hover:blur-sm"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/20 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-7 h-7" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex flex-col justify-between p-4 md:p-6 lg:p-8">
                {/* Title with GitHub link in top-right */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400 leading-tight">
                      {project.name}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition flex-shrink-0 mt-1"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>

                  <p className="text-sm sm:text-base text-gray-400 mb-4">{project.subtitle}</p>

                  {/* Details - Made text smaller */}
                  <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 text-xs sm:text-sm">
                    {project.details.map((detail, lineIdx) => (
                      <li key={lineIdx} className="line-clamp-2">{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <p className="text-gray-400 text-xs mb-4">
                    <span className="font-semibold text-gray-300">Tech Stack:</span> {project.technologies}
                  </p>

                  {/* View Project Button - for direct access */}
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
                  >
                    View Project
                  </a> */}
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