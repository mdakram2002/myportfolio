/** @format */

import ContainerImg from "../assets/about_me.jpg";

const Container = () => {
  return (
    <div className="bg-gray-950 text-white text-center py-16 ">
      <img
        src={ContainerImg}
        alt="container"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl fornt-bold">
        {` I'm`}{" "}
        <span className="text-transparent md:mr-2 font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Mohammad Akram
        </span>
        , Front-End Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I Specialize in building modern and reponsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="text-white md:inline bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
          font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full"
        >
          Contect With Me
        </button>
        <button
          className="text-white md:inline bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-gradient-to-bl
          font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Container;

// second code

// import ContainerImg from "../assets/about_me.jpg";
//  // Import necessary icons

// const Container = () => {
//   return (
//     <div className="bg-gray-950 text-white text-center py-16 ">
//       <img
//         src={ContainerImg}
//         alt="container"
//         className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
//       />
//       <h1 className="text-4xl font-bold">
//         {` I'm`}{" "}
//         <span className="text-transparent md:mr-2 font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
//           Mohammad Akram
//         </span>
//         , Front-End Developer
//       </h1>
//       <p className="mt-4 text-lg text-gray-300">
//         I Specialize in building modern and reponsive web applications.
//       </p>
//       <div className="mt-8 space-x-4">
//         <button
//           className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
//           font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full md:text-sm md:px-2 md:py-1"
//         >

//           Contact Me
//         </button>
//         <button
//           className="text-white bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-gradient-to-bl
//           font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full md:text-sm md:px-2 md:py-1"
//         >

//           Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Container;
