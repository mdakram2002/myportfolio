import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";
import diyosLogo from "../assets/diyos_technologies_logo.jpg";

const history = [
    {
        company: "Diyos Infotech Pvt. Ltd.",
        role: "ReactJS Developer Intern",
        period: "March 2026 — Present",
        location: "Hyderabad, Telangana, India",
        description:
            "Building scalable, high-performance frontend features using TypeScript and React.js. Recognized for resolving critical bugs and improving system reliability while collaborating closely with backend teams.",
        skills: ["React.js", "TypeScript", "React Hook Form", "API Integration", "Error Handling"],
        logo: diyosLogo,
        link: "http://qa.diyosfame.com",
        bullets: [
            "Delivered scalable, efficient frontend features using TypeScript and React.js, resolving 25+ bugs weekly and improving system reliability by 12%, as recognized by senior engineers",
            "Implemented complex form validations using React Hook Form and TypeScript, including conditional ID card validation and date range validation, collaborating with backend APIs to ensure seamless data flow",
            "Enhanced overall user experience by integrating real-time validation feedback and robust error handling mechanisms, reducing data entry errors by 13% and improving overall data accuracy",
        ],
        isCurrent: true,
    },
];

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="experience" className="bg-black text-white py-12">
            <h2 className="text-4xl font-bold text-center mb-12">EXPERIENCE</h2>
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-6 h-6 text-[#0A66C2]" />
                        <h2 className="text-3xl font-semibold text-white">Work Experience</h2>
                    </div>
                    <p className="text-sm text-[#6B6B6B] ml-9">
                        Building systems with impact and scalability, styled like your reference.
                    </p>
                </motion.div>

                {history.map((item, idx) => (
                    <motion.div
                        key={`${item.company}-${item.role}-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                        onHoverStart={() => setHoveredIndex(idx)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="relative group"
                    >
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center shrink-0">
                                <div className="w-3 h-3 rounded-full bg-[#0A66C2]" />
                                {idx !== history.length - 1 && <div className="w-px flex-1 bg-[#D1D1D1]" />}
                            </div>

                            <motion.div
                                animate={{ y: hoveredIndex === idx ? -4 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 pb-8"
                            >
                                <div
                                    className={`border border-[#E8E8E8] rounded-xl p-6 transition duration-200 ${hoveredIndex === idx ? "bg-[#F5F5F5] shadow-sm" : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="shrink-0 w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center">
                                            <img src={item.logo} alt={item.company} className="w-7 h-7 object-contain" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-lg font-bold text-black truncate">{item.company}</h3>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[#0A66C2] hover:text-[#084d96]"
                                                    >
                                                        <ExternalLink className="w-4 h-4" />
                                                    </a>
                                                </div>

                                                <span className="text-xs font-semibold uppercase tracking-wider text-[#6B6B6B] whitespace-nowrap">
                                                    {item.period}
                                                </span>
                                            </div>

                                            <p className="text-sm font-semibold text-black mb-1">{item.role}</p>

                                            <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] mb-2">
                                                <MapPin className="w-3 h-3" />
                                                <span>{item.location}</span>
                                            </div>

                                            <p className="text-sm text-[#6B6B6B] mb-4">{item.description}</p>

                                            <ul className="space-y-2 mb-4">
                                                {item.bullets.map((bullet, bulletIdx) => (
                                                    <li key={bulletIdx} className="text-sm flex items-start gap-2 text-black">
                                                        <span className="mt-1 block w-2 h-2 rounded-full bg-[#0A66C2]" />
                                                        <span>{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="flex flex-wrap gap-2">
                                                {item.skills.map((skill, skillIdx) => (
                                                    <span
                                                        key={skillIdx}
                                                        className="text-xs font-medium text-[#0A66C2] bg-[#E8F3FF] rounded-full px-2.5 py-1"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;

