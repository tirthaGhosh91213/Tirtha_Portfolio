import React from "react";
import { experiences } from "../constants"; 

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[16vw] md:px-[7vw] lg:px-[8vw] font-sans bg-[linear-gradient(45deg,rgba(255,100,150,0.2)_0%,rgba(255,200,150,0)_50%),linear-gradient(135deg,rgba(0,150,255,0.2)_50%,rgba(0,200,150,0)_100%)] "
      style={{
    clipPath: "polygon(0 10%, 15% 0, 85% 0, 100% 10%, 100% 90%, 85% 100%, 15% 100%, 0 90%)",
  }}
    >
     
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#0eab74] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

   
      <div className="relative">
     
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16  ${
              index % 2 === 0 ? "sm:justify-end " : "sm:justify-start "
            }`}
          >
          
            <div className="absolute sm:left-1/2 left-7 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

           
            <div
              className={`w-full sm:max-w-md left-3 p-4 sm:p-8 rounded-2xl  border border-white bg-gray-800 backdrop-blur-md shadow-[0_0_20px_1px_rgba(14, 171, 116, 1)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
          
              <div className="flex items-center space-x-6">
              
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-[#0eab74] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;