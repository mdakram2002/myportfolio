/** @format */

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Creating dynamic and visually engaging user interfaces that adapt seamlessly across devices, ensuring a smooth and immersive experience for users.",
  },
  {
    id: 2,
    title: "Backend Development (Learn..)",
    description:
      "Building strong server-side logic and managing databases to ensure reliable, efficient, and scalable back-end services for web applications.",
  },
  {
    id: 3,
    title: "Full-Stack Development (Learn..)",
    description:
      "Blending front-end and back-end development expertise to create holistic web applications, ensuring seamless performance and cohesive user experiences from start to finish.",
  },
  {
    id: 4,
    title: "Data Structure & Alg. (Learn..)",
    description:
      "Studying data structures and algorithms to enhance my logical thinking and problem-solving abilities, aiming to tackle complex coding challenges with ease.",
  },
  {
    id: 5,
    title: "Content Creating (Learn..)",
    description:
      "Diving into content creation for YouTube and vlogging, aspiring to produce engaging and impactful videos that resonate with my audience.",
  },
  {
    id: 6,
    title: "Vedio Editing (Learn..)",
    description:
      "Learning video editing for YouTube videos and vlogging, aiming to enhance my skills to produce captivating and professional content for viewers.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 px-6 rounded-lg hover:shadow-lg transform
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="rext-right text-2xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {/* {service.id} */}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>

              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
