import { TypeAnimation } from "react-type-animation";

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

        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          <TypeAnimation
            sequence={[
              "Front-End Developer",
              2000,
              "Backend Developer",
              2000,
              "MERN Developer",
              2000,
              "Data Science Enthusiast",
              2000,
              "Tech Content Creator",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

        <p className="text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
          A passionate MERN stack developer with 2 years of hands-on experience
          in building modern, responsive, and AI-driven web applications using
          React, JavaScript, and Node.js. Adaptable and detail-oriented, with a
          strong foundation in C++ and SQL, focused on creating impactful and
          innovative web applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="https://onedrive.live.com/view.aspx?resid=58672C223DE1BF64%21194424&authkey=!ANHXhn3eJq48vzQ"
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
