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
    live: "https://dsa-chatbot-qty5.onrender.com",
  },
];

const Projects = () => {
  const featured = projects[0];

  return (
    <section id="project" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">PROJECTS</h2>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-3xl border border-gray-800 bg-gradient-to-br from-slate-900 via-gray-950 to-black p-6 shadow-2xl"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-2xl bg-black"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </a>

              <div className="flex flex-col justify-center p-4 md:p-6 bg-gray-900/70 rounded-2xl">
                <p className="text-xs text-green-400 font-semibold uppercase tracking-widest mb-2">Featured Project</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4 text-lg">{project.subtitle}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  {project.details.map((detail, lineIdx) => (
                    <li key={lineIdx}>{detail}</li>
                  ))}
                </ul>
                <p className="text-gray-400 text-sm mb-5">Tech Stack: {project.technologies}</p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm text-white hover:bg-zinc-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold hover:opacity-90 transition"
                  >
                    Live
                  </a>
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