/** @format */
import { FaEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

const Contect = () => {
  return (
    <div className="bg-black text-white py-20" id="contect">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contect Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-x-3">
          {/* talk section  */}

          <div className="flex-1 -mt-2">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
              Lets Talk
            </h3>
            <p>
              I am open to discussaing web development projects or patnership
              opportunites.
            </p>

            <div className="mb-4 mt-6">
              <FaEnvelope className="inline-block text-green-500 mr-2"></FaEnvelope>
              <a href="mdakram12022002@gmail.com" className="hover:underline">
                Email
              </a>
            </div>

            <div className="mb-4">
              <FaLinkedin className="inline-block text-green-500 mr-2"></FaLinkedin>
              <a
                href="https://www.linkedin.com/in/mdakram2002"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="mb-4">
              <FaGithubSquare className="inline-block text-green-500 mr-2"></FaGithubSquare>
              <a
                href="https://github.com/mdakram2002"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>

            {/* <div className="mb-4">
              <SiLeetcode className="inline-block text-green-500 mr-2"></SiLeetcode>
              <a
                href="https://leetcode.com/u/mdakram2002"
                className="hover:underline"
              >
                LeetCode
              </a>
            </div> */}
          </div>

          {/* form section  */}
          <div className="flex-1 w-full md:mt-2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-900 border border-gray-400 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Enter Email Address
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-900 border border-gray-400 focus:outline-none focus:border-green-400"
                  placeholder="Enter Email Address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="4"
                  cols="22"
                  className="w-full p-2 rounded bg-gray-900 border border-gray-400 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Message"
                />
              </div>
              <button
                className="text-white  hidden md:inline bg-gradient-to-br from-green-600 to-blue-800 hover:bg-gradient-to-bl
              text-lg text-center hover:scale-105 px-[16px] pt-[5px] pb-[5px] rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
