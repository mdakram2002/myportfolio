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
          Full-stack developer experienced in building high-performance, scalable web applications with React, Node.js, and RESTful
          APIs. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js) with expertise in responsive UI development,
          API integration, secure authentication (JWT, OAuth), performance optimization, database design, CI/CD deployment
          (Vercel, Render), and Agile-based SDLC.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://1drv.ms/b/c/58672c223de1bf64/IQCl16WYyO8uQ6W_Ajb5EmZzAUL44zQbhxNoWB8OqCdNxvg?e=5mRaYm"
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
