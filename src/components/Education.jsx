import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
    {
        degree: "B.E. in Computer Science and Engineering (AI & ML)",
        institution: "Technocrats Institute of Technology, Bhopal (M.P.)",
        duration: "2022 – 2026",
        gpa: "GPA: 7.62 / 10",
        description:
            "Focused on core concepts of Artificial Intelligence, Machine Learning, Data Structures, and Software Engineering.",
    },
    {
        degree: "Senior Secondary (12th)",
        institution: "Supaul Senior Secondary School, Supaul",
        duration: "2021",
        gpa: "Percentage: 66.6%",
    },
    {
        degree: "High School (10th)",
        institution: "Supaul Senior Secondary School, Supaul",
        duration: "2019",
        gpa: "Percentage: 70%",
    },
];

const Education = () => {
    return (
        <section id="education" className="bg-richblack-900 text-white py-20">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-4"
                >
                    EDUCATION
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center text-gray-400 mb-12"
                >
                    A timeline of my academic journey and milestones that built the foundation of my technical skills.
                </motion.p>

                {/* Education Timeline */}
                <div className="relative border-l border-gray-700 ml-4 md:ml-10">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="mb-10 ml-6"
                        >
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-blue-500 to-green-400 rounded-full -left-3 ring-4 ring-richblack-900">
                                <GraduationCap className="w-3 h-3 text-white" />
                            </span>

                            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg hover:shadow-blue-500/10 transition duration-300">
                                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                                    {edu.degree}
                                </h3>
                                <p className="text-gray-300 mt-1">{edu.institution}</p>
                                <p className="text-gray-400 text-sm mt-1">
                                    {edu.duration} • {edu.gpa}
                                </p>
                                {edu.description && (
                                    <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Education;