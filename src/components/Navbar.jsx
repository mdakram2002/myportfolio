import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scrolling
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false); // close mobile menu on click
      });
    });
  }, []);

  return (
    <nav className="bg-black  text-white px-6 md:px-16 lg:px-24 py-3 fixed w-full top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold cursor-pointer">
          Akram
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center text-base">
          <a href="#home" className="hover:text-green-400 transition">About</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills</a>
          <a href="#project" className="hover:text-green-400 transition">Projects</a>
          <a href="#education" className="hover:text-green-400 transition">Education</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-center space-y-4 py-6 border-t border-gray-800 z-40">
          <a href="#home" className="block hover:text-green-400 transition">About</a>
          <a href="#education" className="block hover:text-green-400 transition">Education</a>
          <a href="#skills" className="block hover:text-green-400 transition">Skills</a>
          <a href="#project" className="block hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="block hover:text-green-400 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;