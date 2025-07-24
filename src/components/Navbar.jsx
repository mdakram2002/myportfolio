import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24 py-3 relative">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Akram</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contect" className="hover:text-gray-400">Contact</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <button className="bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl text-lg text-center hover:scale-105 px-4 py-2 rounded-full">
            Contact Me
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-center space-y-4 py-4 z-50">
          <a href="#home" className="block hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About Me</a>
          <a href="#services" className="block hover:text-gray-400" onClick={toggleMenu}>Services</a>
          <a href="#contect" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</a>
          <a href="#project" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <button className="mt-2 bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl px-4 py-2 rounded-full" onClick={toggleMenu}>
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;