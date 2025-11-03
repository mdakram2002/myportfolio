import React from "react";
import { motion } from "framer-motion";

// Import all skill icons
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
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

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JavaScript },
      { name: "React.js", icon: ReactLogo },
      { name: "Redux", icon: Redux },
      { name: "Tailwind CSS", icon: Tailwind },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js (Express)", icon: Node },
      { name: "MongoDB", icon: MongoDB },
      { name: "SQL", icon: SQL },
      { name: "Authentication (JWT, OAuth)", icon: JWT },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "C++", icon: Cpp },
      { name: "JavaScript", icon: JavaScript },
      { name: "Python (Basic)", icon: Python },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: Git },
      { name: "GitHub", icon: GitHub },
      { name: "Postman", icon: Postman },
      { name: "VS Code", icon: VSCode },
      { name: "Vercel", icon: Vercel },
      { name: "Azure", icon: Azure },
    ],
  },
  {
    category: "Core Concepts",
    items: [
      { name: "Data Structures & Algorithms" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ],
  },
  {
    category: "Other Skills",
    items: [
      { name: "CI/CD (GitHub Actions, Vercel)" },
      { name: "Agile & SDLC" },
      { name: "Cloud (Azure Fundamentals)" },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Adaptable" },
      { name: "Collaborative" },
      { name: "Problem Solving" },
      { name: "Analytical Thinking" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-4">
                {skillGroup.category}
              </h3>

              <ul className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gray-800/50 rounded-lg px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700/60 transition"
                  >
                    {item.icon && (
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                    )}
                    <span className="text-sm">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
