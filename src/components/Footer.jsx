/** @format */

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="contianer mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex md:flex-wrap md:space-x-12 items-center mb-4">
          {/* name section  */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Akram</h3>
            <p className="text-gray-400">
              Front-End Developer based n India, specializing in web and
              software development.
            </p>
          </div>

          {/* form section  */}

          <div className="flex-1 w-full">
            <form className="flex items-center justify-between">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 "
              />

              {/* Subscripe section  */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-blue-800 text-white px-3 py-[8.5px] rounded-r-lg md:flex-wrap
                "
              >
                Subscripe
              </button>
            </form>
          </div>
        </div>

        {/* Terms and Conditions sections */}
        <dir className="flex  flex-col md:flex-row border-t border-gray-600 pt-4 justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Akram. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a
              href="https://www.youtube.com/@iamakramshaikh"
              className="text-gray-400 hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://x.com/mdakram2002_"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/mdakram2002_"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://en.wikipedia.org/wiki/Privacy"
              className="text-gray-400 hover:text-white"
            >
              Privacy
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Terms_of_service"
              className="text-gray-400 hover:text-white"
            >
              Terms of Services
            </a>
          </div>
        </dir>
      </div>
    </footer>
  );
};

export default Footer;
