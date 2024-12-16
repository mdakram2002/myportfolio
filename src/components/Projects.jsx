
import ApplicationForm from "../assets/applicationForm.png";
import OurTestimonials from "../assets/ourTestimonials.png";
import PlanForAdven from "../assets/planForAdventure.png";
import StudyPoint from "../assets/studyPoint.png";
import TopTenCourse from "../assets/topTenCourses.png";
import EasyShopping from "../assets/easyShopping.png";
import Amazon from "../assets/amazon.png";
import Netflix from "../assets/netflix.png";

const projects = [
  {
    id: 1,
    name: "Netflix GPT Clone",
    technologies:
      "JavaScript, React-Redux, Firebase Auth, OpenAI API, TMDB API and Tailwind",
    image: Netflix,
    github: "https://github.com/mdakram2002/netflixGPT-firebase",
    netlify: "https://netflixGPT-firebase.netlify.app/",
  },
  {
    id: 2,
    name: "Easy Shopping",
    technologies: "JavaScript, React-Redux, and Tailwind",
    image: EasyShopping,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/online_shopping",
    netlify: "https://easyshoppingin.netlify.app/",
  },
  {
    id: 3,
    name: "Study Point",
    technologies: "JavaScript, React, and Tailwind CSS",
    image: StudyPoint,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/study-point",
    netlify: "https://studypointakram.netlify.app/login",
  },
  {
    id: 4,
    name: "Our Testimonial",
    technologies: "JavaScript, React, and Vanilla CSS",
    image: OurTestimonials,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/our-testimonials",
    netlify: "https://our-review-akram.netlify.app",
  },
  {
    id: 5,
    name: "Form Aplication",
    technologies: "JavaScript, React, and Vanilla CSS",
    image: ApplicationForm,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/formapplication",
    netlify: "https://applicationformin.netlify.app",
  },
  {
    id: 6,
    name: "Plan For Advanture",
    technologies: "JavaScript, React, and Tailwind CSS",
    image: PlanForAdven,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/plan-for-advanture",
    netlify: "https://plan-for-adventure.netlify.app",
  },
  {
    id: 7,
    name: "Top Ten Courses",
    technologies: "JavaScript, React, and Tailwindcss",
    image: TopTenCourse,
    github:
      "https://github.com/mdakram2002/React.js-WebDev/tree/main/top-ten-courses",
    netlify: "https://toptencourses.netlify.app",
  },
  {
    id: 8,
    name: "Amazon Clone",
    technologies: "HTML & CSS",
    image: Amazon,
    github: "https://github.com/mdakram2002/Amazon-Clone",
    netlify: "https://amazon-clone-akram.netlify.app",
  },
];
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                className="rounded-lg mb-4 object-cover"
                src={project.image}
                alt={project.name}
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                className="inline-block bg-gradient-to-r from-green-500 to-blue-700 text-white px-4 py-2 rounded-full mr-2"
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
              >
                GitHub
              </a>
              <a
                className="inline-block bg-gradient-to-r from-green-500 to-blue-700 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                href={project.netlify}
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
