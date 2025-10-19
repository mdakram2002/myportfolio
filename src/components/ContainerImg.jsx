/** @format */

// import ContainerImg from "../assets/about_me.jpg";

const Container = () => {
  return (
    <div className="bg-richblack-900 text-white text-center py-16 ">
      <img
        src={`https://res.cloudinary.com/dy15xrrzh/image/upload/v1760903467/AkramDeveloper/mfizfmtzno7abzp5i48b.png`}
        alt="container"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl fornt-bold">
        {` I'm`}{" "}
        <span className="text-transparent md:mr-2 font-bold bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
          Mohammad Akram
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I Specialize in building modern and reponsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="text-white md:inline bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl
          font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full"
        >
          <a href="https://mdakram12022002@gmail.com">Contact With Me</a>
        </button>
        <button
          className="text-white md:inline bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-gradient-to-bl
          font-semibold text-lg text-center me-2 mb-2 hover:scale-105 px-4 pt-2 pb-2 rounded-full"
        >
          <a href="https://onedrive.live.com/view.aspx?resid=58672C223DE1BF64%21194424&authkey=!ANHXhn3eJq48vzQ">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Container;
