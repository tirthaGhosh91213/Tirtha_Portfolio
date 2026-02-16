import React, { useState, useEffect } from "react";
import profileImage from "./profileImg.png";

const About = () => {
  const [text, setText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const phrases = ["Fullstack Developer.", "Problem Solver.", "Architect."];

  // Load Google Fonts dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@300;400;600&family=Fira+Code:wght@400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

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
      timeout = setTimeout(() => setIsErasing(true), 2000);
    } else if (isErasing && text.length === 0) {
      setIsErasing(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [text, isErasing, index, phrases]);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#090909] text-[#e0e0e0] px-6 md:px-12 lg:px-24 py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Subtle Grid - Adds technical structure */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="md:w-3/5 text-center md:text-left space-y-8">
          
          {/* Decorative Tag */}
          <div className="inline-block border-l-2 border-emerald-500 pl-4 mb-2">
            <span 
              className="text-emerald-500 text-sm tracking-[0.2em] uppercase font-semibold"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              Introduction
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl text-gray-400 font-light">
              Hello, I am
            </h1>
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tirtha Ghosh
            </h2>
          </div>

          {/* Typewriter Line */}
          <div className="h-10 flex items-center justify-center md:justify-start">
            <span 
              className="text-xl sm:text-2xl text-emerald-400 font-medium" 
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              &gt; {text}
              <span className="animate-pulse">_</span>
            </span>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 font-light">
            I craft digital experiences with a focus on 
            <span className="text-white font-medium"> precision</span> and 
            <span className="text-white font-medium"> efficiency</span>. 
            Specializing in the MERN stack, I bridge the gap between complex 
            backend logic and elegant frontend interfaces.
          </p>

          <div className="pt-4">
            <a
              href="https://drive.google.com/file/d/1pTKsanWYOLiUroltnfCSvIgmIi7pb13d/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gray-600 hover:border-emerald-500 text-white text-sm tracking-widest uppercase transition-all duration-300"
            >
              <span>Download CV</span>
              {/* Arrow Icon */}
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-emerald-500" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Button Background Hover Effect */}
              <div className="absolute inset-0 bg-emerald-500/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 -z-10"></div>
            </a>
          </div>
        </div>

        {/* Right Content - The Image */}
        <div className="md:w-2/5 flex justify-center md:justify-end relative group">
          {/* The "Formal" Image Container */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem]">
            
            {/* The Solid Shadow/Frame (Offset) */}
            <div className="absolute top-4 left-4 w-full h-full border-2 border-emerald-500/30 transition-transform duration-500 group-hover:top-3 group-hover:left-3"></div>
            <div className="absolute top-4 left-4 w-full h-full bg-[#1a1d23] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* The Image */}
            <div className="w-full h-full overflow-hidden bg-gray-800 relative">
              <img
                src={profileImage}
                alt="Tirtha Ghosh"
                className="w-full h-full object-cover filter grayscale opacity-90 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
              />
              
              {/* Subtle Overlay gradient for text readability if needed, usually looks classy */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-40"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;