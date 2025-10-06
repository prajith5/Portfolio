import React from "react";

const projects = [
  {
    title: "Gym Management System",
    description:
      "A full-stack application for managing gym members, plans, and staff with a Java Swing frontend and PostgreSQL backend.",
    github: "https://github.com/yourusername/gym-management-system",
    live: "#", // optional live demo link
  },
  {
    title: "Personalized Travel Planner",
    description:
      "A Python-based application that plans optimal travel routes using TSP and Knapsack algorithms, with budget and time optimization.",
    github: "https://github.com/yourusername/personalized-travel-planner",
    live: "#",
  },
  {
    title: "Image Text Extraction And Language Translation",
    description:
      "A Python based web application that gets the image as an input and extracts text from the image and translates the text to user needed language.",
    github: "https://github.com/yourusername/waste-management-system",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          My Projects
        </h2>
       <p className="pt-6 text-gray-400 text-lg mb-12">
  Here are some of my major projects showcasing my skills and expertise.
</p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
              </div>
              <div className="flex justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
