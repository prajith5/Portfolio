import React from "react";

const skills = [
  { name: "HTML / CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Next.js", level: 80 },
  { name: "Python", level: 70 },
  { name: "Java", level: 40 },
  { name: "C", level: 60 },
  { name: "Node.js", level: 80 },
  { name: "Express", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "PostgreSQL", level: 65 },
  { name: "Git / GitHub", level: 90 },
  { name: "Docker", level: 50 },
  { name: "Figma", level: 85 },
  { name: "VS Code", level: 90 },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          A blend of creative and technical expertise built through hands-on
          experience and continuous learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium text-white">{skill.name}</span>
                <span className="text-purple-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
