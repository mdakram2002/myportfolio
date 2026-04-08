import { FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#project" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: "https://twitter.com/mdakram2002_", label: "Twitter" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/mdakram2002", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/mdakram2002", label: "GitHub" },
    { icon: FaInstagram, href: "https://www.instagram.com/mdakram2002_", label: "Instagram" },
    { icon: FaYoutube, href: "https://www.youtube.com/@iamakramshaikh", label: "YouTube" },
  ];

  return (
    <footer className="bg-black text-white py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 border-t border-gray-800 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start md:items-start"
          >
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
              Mohammad Akram
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack Developer crafting innovative digital experiences with clean code and modern design patterns.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <h4 className="text-lg font-bold text-white mb-4">Navigation</h4>
            <div className="grid grid-cols-2 gap-3 w-full">
              {navigationLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  whileHover={{ x: 4, color: "#06b6d4" }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <h4 className="text-lg font-bold text-white mb-4">Connect</h4>
            <div className="space-y-3 w-full">
              <motion.a
                href="mailto:mdakram12022002@gmail.com"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm font-medium group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Social Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-blue-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <Icon className="text-xl group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-gray-400">Mohammad Akram</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Designed & Built with <span className="text-cyan-400">❤</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
