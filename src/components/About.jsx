/** @format */

import AboutImg from "../assets/about_me.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImg}
            alt="aboutMe"
            className="w-[380px] h-[500px] rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-6">
              I am a passionate front-end developer committed to creating
              visually appealing and highly responsive web interfaces. With a
              strong foundation in modern web technologies, my goal is to
              provide seamless and engaging user interactions.
            </p>
            <div className="space-y-4">
              {/* Section of DSA */}
              <div className="flex items-center -mb-[5px]">
                <label htmlFor="htmlandcss" className="w-2/10 mr-[8px]">
                  Data Structure
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem] -mb-[5px]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-6/12"
                  ></div>
                </div>
              </div>

              {/* section of HTML & CSS */}
              <div className="flex items-center -mb-[8px]">
                <label htmlFor="htmlandcss" className="w-2/10 mr-[16px]">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem] -mb-[8px]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              {/* section of JAVASCTIPT */}
              <div className="flex items-center -mb-[8px]">
                <label htmlFor="htmlandcss" className="w-2/10 mr-9">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem] -mb-[8px]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* section of REACT */}
              <div className="flex items-center -mb-[8px]">
                <label htmlFor="htmlandcss" className="w-2/10 mr-[68px]">
                  React
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem] -mb-[8px]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* section of Git and Github */}
              <div className="flex items-center -mb-[8px]">
                <label htmlFor="htmlandcss" className="w-2/10 mr-4">
                  Git & GitHub
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem] -mb-[8px]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* section of SQL */}
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/10 mr-[80px]">
                  SQL
                </label>
                <div className="grow bg-gray-800 rounded-full h-[1.2rem]">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-[1.2rem] rounded-full
                        transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
            </div>

            {/* Exprerience section */}

            <div className="flex mt-10 justify-between text-center ">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  0
                </h3>
                <p>Year Exprience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  05+
                </h3>
                <p>Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
