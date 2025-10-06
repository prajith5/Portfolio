import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center"
    >
      {/* Image Section */}
      <div className="mb-10 lg:mb-0 lg:mr-16">
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl hover:scale-105 transition-transform duration-300">
          {/* Replace with your actual image */}
          <img
            src="/prajith image2.JPG"
            alt="Prujith"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-2xl text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
  Hi, I'm <span className="font-semibold text-white">Prajith</span> — a
  passionate <span className="text-purple-400 font-medium">Software Developer</span> dedicated to building efficient, scalable, and visually appealing digital solutions. 
  I love transforming ideas into real-world applications using modern technologies like 
  <span className="text-white font-medium"> React, Node.js, PostgreSQL, and Java</span>.
</p>

<p className="text-gray-400 text-md leading-relaxed mb-8">
  I thrive on solving challenging problems, writing clean and maintainable code, and staying up to date with emerging tech trends. 
  When I’m not coding, I enjoy exploring new frameworks, refining my UI/UX skills, and contributing to innovative projects that make an impact.
</p>


        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
          >
            Contact Me
          </a>
          <a
            href="/Prajith_Resume.pdf"
            className="border border-purple-500 px-6 py-3 rounded-full text-purple-400 hover:bg-purple-600 hover:text-white transition-all duration-300"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
