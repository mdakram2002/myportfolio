import PlanForAdven from "../assets/planForAdventure.png";
import StudyPoint from "../assets/banner.png";
import EasyShopping from "../assets/easyShopping.png";
import Netflix from "../assets/netflix.png";
import DSA_Chatbot from "../assets/dsa_chatbot.png";
import Even_Platform from "../assets/event.png"

const projects = [
  {
    id: 1,
    name: "StudyPoint (Full-Stack MERN)",
    technologies:
      "React, Tailwind CSS, Node.js, Express.js, MongoDB, Redux Toolkit, JWT Auth, Cloudinary, Stripe, Vercel",
    image: StudyPoint,
    github: "https://github.com/mdakram2002/Study_Point",
    Vercel: "https://study-point-self.vercel.app",
  },
  {
    id: 2,
    name: "DSA Chatbot (AI Project)",
    technologies: "React, Tailwind CSS, Node.js, Express.js, Gemini API, Google Auth 2.0, MongoDB Atlas",
    image: DSA_Chatbot,
    github: "https://github.com/mdakram2002/dsa_chatbot",
    Vercel: "https://dsa-chatbot-six.vercel.app",
  },
  {
    id: 3,
    name: "Event Platform",
    technologies:
      "React.js, TailwindCSS, JWT, Node.js (Express.js), MongoDB Atlas",
    image: Even_Platform,
    github: "https://github.com/mdakram2002/mini-event-platform",
    Vercel: "https://mini-event-platform-ten.vercel.app",
  },
  {
    id: 4,
    name: "Netflix GPT Clone",
    technologies:
      "JavaScript, React-Redux, Firebase Auth, OpenAI API, TMDB API, Tailwind CSS",
    image: Netflix,
    github: "https://github.com/mdakram2002/netflixGPT-firebase",
    Vercel: "https://netflixGPT-firebase.netlify.app/",
  },
  {
    id: 5,
    name: "Easy Shopping (E-Commerce UI)",
    technologies: "React, Redux, Tailwind CSS",
    image: EasyShopping,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/online_shopping",
    Vercel: "https://easyshoppingin.netlify.app/",
  },
  {
    id: 6,
    name: "Plan for Adventure",
    technologies: "React, Tailwind CSS",
    image: PlanForAdven,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/plan-for-advanture",
    Vercel: "https://plan-for-adventure.netlify.app",
  },
];

const Projects = () => {
  return (
    <section id="project" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="">
            PROJECTS
          </span>
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transform transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />

              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {project.name}
              </h3>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.technologies}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                >
                  GitHub
                </a>
                <a
                  href={project.Vercel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-green-400 text-green-400 font-semibold px-4 py-2 rounded-full hover:bg-green-400 hover:text-black transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;