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
    // {
    //     company: "TCS",
    //     role: "Frontend Engineer",
    //     period: "March 2025 — March 2026",
    //     location: "Hyderabad, Telangana, India",
    //     description:
    //         "Building scalable, high-performance frontend features using TypeScript and React.js. Recognized for resolving critical bugs and improving system reliability while collaborating closely with backend teams.",
    //     skills: ["React.js", "TypeScript", "React Hook Form", "API Integration", "Error Handling"],
    //     logo: diyosLogo,
    //     link: "http://qa.diyosfame.com",
    //     bullets: [
    //         "Delivered scalable, efficient frontend features using TypeScript and React.js, resolving 25+ bugs weekly and improving system reliability by 12%, as recognized by senior engineers",
    //         "Implemented complex form validations using React Hook Form and TypeScript, including conditional ID card validation and date range validation, collaborating with backend APIs to ensure seamless data flow",
    //         "Enhanced overall user experience by integrating real-time validation feedback and robust error handling mechanisms, reducing data entry errors by 13% and improving overall data accuracy",
    //     ],
    //     isCurrent: true,
    // },
];

const getExperienceStats = () => {
    const now = new Date();
    let minStart = null;
    let maxEnd = null;
    let projectCount = 0;

    const parseDate = (value) => {
        if (!value) return null;
        const cleaned = value.trim();
        if (/present/i.test(cleaned)) return now;

        // Support month-year and year-only strings.
        const parsed = new Date(cleaned);
        if (!Number.isNaN(parsed.getTime())) return parsed;

        const monthNames = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ];

        const [part1, part2] = cleaned.split(" ").filter(Boolean);
        if (part2 && monthNames.includes(part1.toLowerCase()) && !Number.isNaN(Number(part2))) {
            return new Date(`${part1} 1 ${part2}`);
        }

        const year = Number(cleaned);
        if (!Number.isNaN(year)) {
            return new Date(year, 0, 1);
        }

        return null;
    };

    history.forEach((item) => {
        const periodParts = item.period?.split("—")?.map((p) => p.trim()) ?? [];
        const start = parseDate(periodParts[0]);
        const end = parseDate(periodParts[1] ?? "Present");

        if (start && (!minStart || start < minStart)) {
            minStart = start;
        }
        if (end && (!maxEnd || end > maxEnd)) {
            maxEnd = end;
        }

        projectCount += item.projects ?? 1;
    });

    let yearsExperience = 0;
    if (minStart && maxEnd && maxEnd > minStart) {
        const months = (maxEnd.getFullYear() - minStart.getFullYear()) * 12 + (maxEnd.getMonth() - minStart.getMonth());
        if (months > 0) {
            yearsExperience = Number((months / 12).toFixed(1));
        }
    }

    return {
        yearsExperience,
        companies: history.length,
        projects: projectCount,
    };
};

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="experience" className="bg-black text-white py-10 sm:py-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">EXPERIENCE</h2>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A66C2]" />
                        <h2 className="text-2xl sm:text-3xl font-semibold text-white">Work Experience</h2>
                    </div>
                    <p className="text-sm sm:text-base text-[#6B6B6B] ml-0 sm:ml-9">
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
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col items-start sm:items-center shrink-0">
                                <div className="w-3 h-3 rounded-full bg-[#0A66C2]" />
                                {idx !== history.length - 1 && <div className="w-px flex-1 bg-[#D1D1D1] mt-2 sm:mt-0" />}
                            </div>

                            <motion.div
                                animate={{ y: hoveredIndex === idx ? -4 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1 pb-8 w-full"
                            >
                                <div
                                    className={`border border-[#E8E8E8] rounded-xl p-4 sm:p-6 transition duration-200 ${hoveredIndex === idx ? "bg-[#F5F5F5] shadow-sm" : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                                        }`}
                                >
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                                <div className="flex items-center gap-3 min-w-0">
                                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                                        <img src={item.logo} alt={item.company} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <h3 className="text-lg sm:text-2xl font-bold text-black truncate">{item.company}</h3>
                                                        <div className="flex items-center gap-2">
                                                            <p className="text-sm sm:text-base text-[#4B4B4B] truncate">{item.role}</p>
                                                            {item.link && (
                                                                <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.company} website`} className="text-[#0A66C2] hover:text-[#094e9f]">
                                                                    <ExternalLink className="w-4 h-4" />
                                                                </a>
                                                            )}
                                                        </div>
                                                        <div className="flex items-center gap-1 text-xs text-[#6B6B6B]">
                                                            <MapPin className="w-3 h-3" />
                                                            <span className="truncate">{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6B6B6B] whitespace-nowrap">
                                                    {item.period}
                                                </span>
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

                {/* Footer Stats */}
                {(() => {
                    const { yearsExperience, companies, projects } = getExperienceStats();
                    const stats = [
                        { label: "Years Experience", value: `${yearsExperience}+` },
                        { label: "Companies", value: `${companies}` },
                        { label: "Projects", value: `${projects}` },
                    ];

                    return (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
                        >
                            {stats.map((stat, statIdx) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 + statIdx * 0.1 }}
                                    className="bg-white border border-[#E8E8E8] rounded-xl p-5 text-center"
                                >
                                    <p className="text-2xl sm:text-3xl font-bold text-black mb-1">{stat.value}</p>
                                    <p className="text-xs sm:text-sm uppercase tracking-wider text-[#6B6B6B]">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    );
                })()}
            </div>
        </section>
    );
};

export default Experience;

