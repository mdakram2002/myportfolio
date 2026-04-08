// import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-black text-white flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-8 md:px-16 lg:px-24 pt-24" // Added top padding
    >
      {/* Left Section (Text Content) */}
      <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Mohammad Akram
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Full Stack Developer
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
          A passionate Full-Stack Developer with hands-on experience building modern, responsive, and AI-integrated web applications. Detail-oriented and adaptable, with a strong foundation in programming and databases, focused on delivering clean code, scalable architecture, and innovative digital experiences.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://1drv.ms/b/c/58672c223de1bf64/IQA5EcROp7hYRrr2QBfWNVpzAcDn5FaXBNizU5mfThFulLU?e=qfgYXl"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-green-400 text-green-400 font-semibold rounded-full hover:bg-green-400 hover:text-black transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://res.cloudinary.com/dy15xrrzh/image/upload/v1760902985/AkramDeveloper/jczdidaog3miapzk7zci.png"
          alt="Md Akram"
          className="w-[220px] h-[220px] md:w-[400px] md:h-[500px] object-cover
                     rounded-full md:rounded-2xl shadow-lg hover:scale-105
                     transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Home;
