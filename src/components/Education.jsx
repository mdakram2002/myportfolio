import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

const educationData = [
    { degree: "Bachelor of Technology in Computer Science – AI & ML", institution: "Technocrats Institute of Technology, Bhopal (M.P.), India", duration: "2022 – 2026", gpa: "GPA: 7.62 / 10", description: "Focused on core concepts of Artificial Intelligence, Machine Learning, Data Structures, and Software Engineering." },
    { degree: "Senior Secondary (12th)", institution: "Supaul Senior Secondary School, Supaul, Bihar, India", duration: "2021", gpa: "Percentage: 66.6%" },
    { degree: "High School (10th)",      institution: "Supaul Senior Secondary School, Supaul, Bihar, India", duration: "2019", gpa: "Percentage: 70%" },
];

const Education = () => (
    <section id="education" className="text-white py-20 relative">
        <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24">
            <motion.div initial={{ opacity:0, y:-20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="flex justify-center mb-5">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-teal-300"
                      style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)" }}>
                    <Sparkles size={13} /> Academic Journey
                </span>
            </motion.div>
            <motion.h2 initial={{ opacity:0, y:-30 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
                       className="text-4xl font-bold text-center mb-4" style={{ fontFamily:"'Manrope',sans-serif" }}>
                Education
            </motion.h2>
            <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.8, delay:0.2 }}
                      className="text-center text-slate-400 mb-12">
                A timeline of my academic journey and milestones that built the foundation of my technical skills.
            </motion.p>

            <div className="relative ml-4 md:ml-10" style={{ borderLeft:"1px solid rgba(45,212,191,0.2)" }}>
                {educationData.map((edu, index) => (
                    <motion.div key={index} initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }}
                                transition={{ duration:0.6, delay:index*0.2 }} className="mb-8 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3"
                              style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", boxShadow:"0 0 0 4px #020817, 0 0 12px rgba(45,212,191,0.3)" }}>
                            <GraduationCap className="w-3 h-3 text-slate-950" />
                        </span>
                        <div className="rounded-2xl p-6 transition duration-300"
                             style={{ background:"rgba(255,255,255,0.025)", border:"1px solid rgba(255,255,255,0.08)", backdropFilter:"blur(12px)" }}
                             onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(45,212,191,0.2)"}
                             onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}>
                            <h3 className="text-xl font-semibold"
                                style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", fontFamily:"'Manrope',sans-serif" }}>
                                {edu.degree}
                            </h3>
                            <p className="text-slate-300 mt-1 text-sm">{edu.institution}</p>
                            <p className="text-slate-500 text-xs mt-1">{edu.duration} • {edu.gpa}</p>
                            {edu.description && <p className="text-slate-400 text-sm mt-2 leading-relaxed">{edu.description}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Education;
