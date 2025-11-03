import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b14] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        {/* Name */}
        <h2 className="text-2xl font-semibold text-purple-400">Mohammad Akram</h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm font-medium">
          <a href="#home" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#home" className="hover:text-white transition-colors">Experience</a>
          <a href="#project" className="hover:text-white transition-colors">Projects</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl">
          {/* <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaFacebook />
          </a> */}
          <a href="https://twitter.com/mdakram2002_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/mdakram2002" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/akram.ai_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@iamakramshaikh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Mohammad Akram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
