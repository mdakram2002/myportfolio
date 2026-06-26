import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const navigationLinks = [
    { label:"Home",       href:"#home" },
    { label:"Skills",     href:"#skills" },
    { label:"Experience", href:"#experience" },
    { label:"Projects",   href:"#project" },
    { label:"Education",  href:"#education" },
    { label:"Contact",    href:"#contact" },
];
// const socialLinks = [
//     { icon:FaTwitter,   href:"https://twitter.com/mdakram2002_",            label:"Twitter" },
//     { icon:FaLinkedin,  href:"https://www.linkedin.com/in/mdakram2002",     label:"LinkedIn" },
//     { icon:FaGithub,    href:"https://github.com/mdakram2002",              label:"GitHub" },
//     { icon:FaInstagram, href:"https://www.instagram.com/mdakram2002_",      label:"Instagram" },
//     { icon:FaYoutube,   href:"https://www.youtube.com/@iamakramshaikh",     label:"YouTube" },
// ];

const Footer = () => (
    <footer className="text-white py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 relative" style={{ borderTop:"1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                {/* Brand */}
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal-400 to-violet-500 flex items-center justify-center text-slate-950 font-extrabold text-sm">MA</div>
                        <div>
                            <p className="font-bold text-base text-white" style={{ fontFamily:"'Manrope',sans-serif" }}>Mohammad Akram</p>
                            <p className="text-sm text-slate-400">Full Stack & DevOps Engineer</p>
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Building scalable, production-ready web applications with modern technologies.</p>
                </motion.div>

                {/* Links */}
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.1 }}>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Navigation</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {navigationLinks.map((link, idx) => (
                            <motion.a key={idx} href={link.href} whileHover={{ x:4 }} transition={{ duration:0.2 }}
                                      className="text-slate-400 hover:text-teal-400 transition-colors text-sm">{link.label}</motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Connect */}
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.2 }}>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Connect</h4>
                    <motion.a href="mailto:mdakram12022002@gmail.com" whileHover={{ x:4 }}
                              className="flex items-center gap-3 text-slate-400 hover:text-teal-400 transition-colors text-sm group mb-3">
                        <span className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                              style={{ background:"rgba(45,212,191,0.1)", border:"1px solid rgba(45,212,191,0.2)" }}>
                            <FaEnvelope className="text-teal-400 text-sm" />
                        </span>
                        mdakram12022002@gmail.com
                    </motion.a>
                    <p className="text-slate-500 text-sm">Hyderabad, Telangana</p>
                </motion.div>
            </div>

            <div className="h-px mb-8" style={{ background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)" }} />

            <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
                        className="flex flex-col items-center">
                {/* <div className="flex justify-center gap-3 flex-wrap">
                    {socialLinks.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <motion.a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                                      whileHover={{ scale:1.15, y:-3 }} whileTap={{ scale:0.95 }}
                                      className="w-11 h-11 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all duration-200"
                                      style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)" }}
                                      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(45,212,191,0.4)"}
                                      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}>
                                <Icon className="text-lg" />
                            </motion.a>
                        );
                    })}
                </div> */}
                <div className="text-center">
                    <p className="text-slate-500 text-sm">© {new Date().getFullYear()} <span className="font-semibold text-slate-300">Mohammad Akram</span>. All rights reserved.</p>
                    <p className="text-slate-600 text-xs mt-1.5">Built with <span className="text-teal-400">❤</span> &amp; lots of ☕</p>
                </div>
            </motion.div>
        </div>
    </footer>
);

export default Footer;
