/** @format */

// import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center ">
        <div className="text-2xl font-bold hidden md:inline">Akram</div>
        <div className="space-x-6 ">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
          <a href="#contect" className="hover:text-gray-400">
            Contect
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
        </div>
        <button
          className="text-white  hidden md:inline bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
          text-lg text-center hover:scale-105 px-[12px] pt-[5px] pb-[5px] rounded-full"
        >
          Contect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
