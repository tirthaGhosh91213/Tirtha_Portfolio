import React, { useState, useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import profileImage from "./profileImg.png";

const About = () => {
  const [text, setText] = useState('');
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const phrases = [
    'Fullstack Developer',
    'UI/UX Designer',
    'Coder',
  ];

  useEffect(() => {
    let timeout;

    if (!isErasing && text.length < phrases[index].length) {
    
      timeout = setTimeout(() => {
        setText((prev) => prev + phrases[index][text.length]);
      }, 100);
    } else if (isErasing && text.length > 0) {
   
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 50);
    } else if (!isErasing && text.length === phrases[index].length) {
 
      timeout = setTimeout(() => setIsErasing(true), 1000);
    } else if (isErasing && text.length === 0) {
     
      setIsErasing(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isErasing, index, phrases]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32  text-white"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
       
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            Hi, I am
          </h1>
      
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Tirtha Ghosh
          </h2>
         
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span>I am a </span>
            <span className="text-[#65cfa1]">{text}|</span>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer . Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #65cfa1, #a855f7)',
              boxShadow: '0 0 2px #65cfa1, 0 0 2px #65cfa1, 0 0 40px #65cfa1',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
  className="w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 ml-16 border-4 border-green-700 rounded-3xl"
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
  gyroscope={true}
>
  <img
    src={profileImage}
    alt="Tirtha Ghosh"
    className="w-full h-full rounded-3xl object-cover"
    style={{
      background: 'linear-gradient(90deg, #65cfa1, #a855f7)',
      boxShadow: '0 0 2px #65cfa1, 0 0 2px #65cfa1, 0 0 40px #65cfa1',
    }}
  />
</Tilt>

        </div>
      </div>
    </section>
  );
};

export default About;
