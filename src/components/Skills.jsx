import React from "react";
import { motion } from "framer-motion";
import { FaDocker, FaReact, FaRegHandPaper } from "react-icons/fa";

// Import all skill icons
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import NextLogo from "../assets/NextLogo.png";
import Redux from "../assets/redux.png";
import Node from "../assets/node.png";
import Tailwind from "../assets/tailwindcss.png";
import MongoDB from "../assets/mongodb.png";
import Git from "../assets/git.png";
import GitHub from "../assets/github.png";
import Postman from "../assets/postman.png";
import VSCode from "../assets/vscode.png";
import SQL from "../assets/sql.png";
import Vercel from "../assets/vercel.png";
import Azure from "../assets/azure.png";
import JWT from "../assets/jwt.png";
import Cpp from "../assets/cpp.png";
import Python from "../assets/python.png";
import Typescript from "../assets/typescript.png"
import Cursor_AI from "../assets/Cursor.png";
import Firebase from "../assets/firebase.png";
import RestfulAPI from "../assets/restfullAPI.png";
import APIIntegration from "../assets/api_integration.png";
import DockerIcon from "../assets/docker.png";
import RenderIcon from "../assets/render.jpg";
import PostgreSQL from "../assets/postgre.png";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: Cpp },
      { name: "JavaScript", icon: JavaScript },
      { name: "Python (Basic)", icon: Python },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "React.js", icon: ReactLogo },
      { name: "Next.js", icon: NextLogo },
      { name: "Redux Toolkit", icon: Redux },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Typescript", icon: Typescript },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js (Express)", icon: Node },
      { name: "MongoDB", icon: MongoDB },
      { name: "SQL", icon: SQL },
      { name: "Authentication (JWT, OAuth)", icon: JWT },
      { name: "RESTful APIs", icon: RestfulAPI },
      { name: "API Integration", icon: APIIntegration },
      { name: "PostgreSQL", icon: PostgreSQL },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub },
      { name: "Postman API", icon: Postman },
      { name: "VS Code", icon: VSCode },
      { name: "Vercel", icon: Vercel },
      { name: "Azure", icon: Azure },
      { name: "Firebase", icon: Firebase },
      { name: "Cursor AI", icon: Cursor_AI },
      { name: "Docker", icon: DockerIcon },
      { name: "Render", icon: RenderIcon }
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-richblack-900 text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          SKILLS
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-gray-400 mb-12"
        >
          A showcase of my technical skills and expertise honed through real-world projects and hands-on experience.
        </motion.p>

        {/* Skills Grid */}
        <div className="space-y-12">
          {[
            "Programming Languages",
            "Frontend",
            "Backend",
            "Tools",
            "Core Concepts",
            "Other Skills",
          ].map((sectionName, sectionIndex) => {
            const section = skills.find((s) => s.category === sectionName);
            if (!section) return null;

            return (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#f1fffd] tracking-wide">
                  {section.category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.items.map((item, i) => (
                    <motion.div
                      key={`${section.category}-${i}`}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="group bg-[#0f171f] border border-[#1f3f57] rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-[0_12px_30px_rgba(0,95,135,0.35)] hover:shadow-[0_18px_40px_rgba(0,173,198,0.45)] transition-all"
                    >
                      {item.icon ? (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-16 h-16 md:w-20 md:h-20 object-contain mb-4"
                        />
                      ) : (
                        <FaReact className="w-16 h-16 md:w-20 md:h-20 text-[#61dafb] mb-4" />
                      )}

                      <p className="text-lg md:text-xl font-semibold text-[#f1fcff]">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
