import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, ExternalLink, Sparkles } from "lucide-react";
import diyosLogo from "../assets/diyos_technologies_logo.jpg";

const history = [
    {
        company: "Diyos Infotech Pvt. Ltd.",
        role: "ReactJS Developer Intern",
        period: "March 2026 — April 2026",
        location: "Hyderabad, Telangana, India",
        description: "Building scalable, high-performance frontend features using TypeScript and React.js. Recognized for resolving critical bugs and improving system reliability while collaborating closely with backend teams.",
        skills: ["React.js", "TypeScript", "React Hook Form", "API Integration", "Error Handling"],
        logo: diyosLogo,
        link: "http://qa.diyosfame.com",
        bullets: [
            "Architected and delivered 33+ production-ready UI components across 6+ core modules (Client Management, Payroll, Invoicing, Reporting) using React.js and TypeScript, implementing complex form validation with real-time error handling for PAN, PF, ESI, and HSN code validations.",
            "Created responsive AddClient screens with live address mirroring, reducing form completion time by 20%; developed REST API-integrated receipt tables and resolved Inventory Module blank-screen bugs, reducing support tickets by 25% through effective debugging.",
            "Collaborated with cross-functional backend and QA teams to optimize UI rendering across 70–100% zoom levels, ensuring consistent user experience and saving 1.5 hours of weekly debugging time for the support team.",
        ],
        isCurrent: true,
    },
];

const getExperienceStats = () => {
    const now = new Date();
    let minStart = null, maxEnd = null, projectCount = 0;
    const parseDate = (value) => {
        if (!value) return null;
        const cleaned = value.trim();
        if (/present/i.test(cleaned)) return now;
        const parsed = new Date(cleaned);
        if (!Number.isNaN(parsed.getTime())) return parsed;
        const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];
        const [p1, p2] = cleaned.split(" ").filter(Boolean);
        if (p2 && months.includes(p1.toLowerCase()) && !Number.isNaN(Number(p2))) return new Date(`${p1} 1 ${p2}`);
        const y = Number(cleaned);
        if (!Number.isNaN(y)) return new Date(y, 0, 1);
        return null;
    };
    history.forEach((item) => {
        const parts = item.period?.split("—")?.map(p => p.trim()) ?? [];
        const start = parseDate(parts[0]), end = parseDate(parts[1] ?? "Present");
        if (start && (!minStart || start < minStart)) minStart = start;
        if (end   && (!maxEnd   || end   > maxEnd))   maxEnd   = end;
        projectCount += item.projects ?? 1;
    });
    let yearsExperience = 0;
    if (minStart && maxEnd && maxEnd > minStart) {
        const m = (maxEnd.getFullYear() - minStart.getFullYear()) * 12 + (maxEnd.getMonth() - minStart.getMonth());
        if (m > 0) yearsExperience = Number((m / 12).toFixed(1));
    }
    return { yearsExperience, companies: history.length, projects: projectCount };
};

const Experience = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (
        <section id="experience" className="min-h-screen w-full text-white py-24 relative">
            <style>{`
                .ex-dot-current { position: relative; }
                .ex-dot-current::after { content:''; position:absolute; inset:-4px; border-radius:50%; border:1px solid rgba(45,212,191,0.4); animation:ex-pulse 2s ease-in-out infinite; }
                @keyframes ex-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }
                .ex-card { border:1px solid rgba(255,255,255,0.08); background:rgba(255,255,255,0.025); backdrop-filter:blur(12px); transition:border-color .3s,background .3s; }
                .ex-card-hovered { border-color:rgba(45,212,191,0.2)!important; background:rgba(45,212,191,0.04)!important; }
                .ex-chip { background:rgba(45,212,191,0.08); border:1px solid rgba(45,212,191,0.2); color:#2DD4BF; }
                .ex-bullet { width:6px; height:6px; border-radius:50%; background:linear-gradient(135deg,#2DD4BF,#8B5CF6); flex-shrink:0; margin-top:7px; }
                .ex-line { width:1px; flex:1; background:linear-gradient(to bottom,rgba(45,212,191,0.4),rgba(139,92,246,0.15)); margin-top:6px; }
                @media (prefers-reduced-motion:reduce) { .ex-dot-current::after{animation:none!important} }
            `}</style>

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
                {/* Header */}
                <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-body text-teal-300"
                         style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.1)" }}>
                        <Sparkles size={13} /><span>Work Experience</span>
                    </div>
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-3">Where I've Shipped</h2>
                    <p className="font-body text-slate-400 text-lg max-w-xl">Building systems with impact and scalability — from internship tickets to production features.</p>
                </motion.div>

                {/* Timeline */}
                {history.map((item, idx) => (
                    <motion.div key={`${item.company}-${idx}`}
                        initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }}
                        transition={{ delay:idx*0.15, duration:0.5, ease:[0.32,0.72,0,1] }}
                        onHoverStart={() => setHoveredIndex(idx)} onHoverEnd={() => setHoveredIndex(null)}
                        className="relative group">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col items-center shrink-0 pt-1">
                                <div className={`w-3 h-3 rounded-full ${item.isCurrent ? "ex-dot-current" : ""}`}
                                     style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)" }} />
                                {idx !== history.length - 1 && <div className="ex-line" />}
                            </div>
                            <motion.div animate={{ y: hoveredIndex === idx ? -4 : 0 }} transition={{ duration:0.2 }} className="flex-1 pb-8 w-full">
                                <div className={`ex-card rounded-2xl p-6 sm:p-8 ${hoveredIndex === idx ? "ex-card-hovered" : ""}`}>
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                                                 style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)" }}>
                                                <img src={item.logo} alt={item.company} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-display font-bold text-lg sm:text-xl text-white truncate">{item.company}</h3>
                                                    {item.link && (
                                                        <a href={item.link} target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors flex-shrink-0">
                                                            <ExternalLink size={14} />
                                                        </a>
                                                    )}
                                                </div>
                                                <p className="font-body text-sm text-slate-300 truncate">{item.role}</p>
                                                <div className="flex items-center gap-1 mt-1 text-xs text-slate-500">
                                                    <MapPin size={11} /><span className="truncate">{item.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                                            <span className="font-body text-xs font-semibold text-slate-400 whitespace-nowrap tracking-wide">{item.period}</span>
                                            {item.isCurrent && (
                                                <span className="font-body text-xs font-semibold px-3 py-1 rounded-full"
                                                      style={{ background:"rgba(45,212,191,0.12)", border:"1px solid rgba(45,212,191,0.25)", color:"#2DD4BF" }}>
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="font-body text-sm text-slate-400 mb-5 leading-relaxed">{item.description}</p>
                                    <ul className="space-y-3 mb-6">
                                        {item.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-3 text-sm font-body text-slate-300 leading-relaxed">
                                                <span className="ex-bullet" /><span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-2">
                                        {item.skills.map((skill, sIdx) => (
                                            <span key={sIdx} className="ex-chip font-body text-xs font-semibold px-3 py-1 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}

                {/* Stats strip */}
                {(() => {
                    const { yearsExperience, companies, projects } = getExperienceStats();
                    return (
                        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6, duration:0.5 }}
                                    className="mt-4 flex flex-wrap border-t border-white/10 pt-8 gap-y-6">
                            {[{ label:"Years Experience", value:`${yearsExperience}+` },{ label:"Companies", value:`${companies}` },{ label:"Projects", value:`${projects}` }].map((stat, sIdx) => (
                                <div key={stat.label} className="flex-1 min-w-[140px] px-6 first:pl-0"
                                     style={{ borderLeft: sIdx !== 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                                    <p className="font-display text-2xl md:text-3xl font-extrabold"
                                       style={{ background:"linear-gradient(135deg,#2DD4BF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                                        {stat.value}
                                    </p>
                                    <p className="font-body text-sm text-slate-400 mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    );
                })()}
            </div>
        </section>
    );
};

export default Experience;
