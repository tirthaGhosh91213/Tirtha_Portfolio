import React, { useEffect, useRef, useState } from "react";
import { experiences } from "../constants";

const Experience = () => {
  // Use intersection observer for scroll animations
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <section
      id="experience"
      className="relative py-10 pb-20 bg-[#090909] overflow-hidden min-h-screen text-white"
    >
      {/* --- BACKGROUND FX (Matched to Skills Section) --- */}
      {/* 1. CLEAN TECHNICAL GRID (No Green Glow) */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-24 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase relative z-10 inline-block">
             Expe<span className="text-emerald-500 italic">rience.</span>
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-24 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
          
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div className="relative">
          
          {/* CENTRAL LINE (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 overflow-hidden">
             {/* The traveling signal */}
             <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-scan-vertical"></div>
          </div>

          <div className="flex flex-col gap-12">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={experience.id || index}
                  ref={addToRefs}
                  data-index={index}
                  className={`relative flex flex-col md:flex-row items-center w-full transition-all duration-1000 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  } ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  
                  {/* --- SPACER (Desktop) --- */}
                  <div className="hidden md:block w-1/2" />

                  {/* --- CENTRAL NODE --- */}
                  <div className="absolute left-4 md:left-1/2 top-0 md:top-8 -translate-x-1/2 w-8 h-8 z-20 flex items-center justify-center">
                      {/* Using the same square node style as Skills icons */}
                      <div className="w-3 h-3 bg-[#090909] border border-white/20 rotate-45 transition-colors duration-500 group-hover:border-emerald-500 group-hover:bg-emerald-500"></div>
                  </div>

                  {/* --- CONNECTOR ARM (Desktop) --- */}
                  <div className={`hidden md:block absolute top-8 w-[calc(50%-2rem)] h-px bg-white/5 ${
                      isEven ? "left-1/2 ml-4" : "right-1/2 mr-4"
                  }`}></div>

                  {/* --- THE CARD (Skills Box Style) --- */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-14" : "md:pl-14"}`}>
                    
                    {/* EXACT SKILLS ANIMATION APPLIED HERE:
                        1. Group relative
                        2. bg-[#060606] -> hover:bg-[#090909]
                        3. Draw Line animation
                    */}
                    <div className="group relative   bg-[#060606] p-12 border border-white/5 transition-all duration-500 hover:bg-[#090909] hover:border-white/10 hover:-translate-y-1">
                      
                      {/* INTERACTION DRAW LINE (Matches Skills) */}
                      <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full"></div>

                      {/* Content */}
                      <div className="relative z-10">
                        
                        {/* Header Section */}
                        <div className="flex items-start justify-between gap-6 mb-8">
                            <div className="flex flex-col">
                                <span className="text-emerald-500 font-mono text-[11px] font-black uppercase tracking-widest mb-2">
                                    {experience.date}
                                </span>
                                <h3 className="text-2xl font-black text-white uppercase tracking-wider group-hover:text-emerald-500 transition-colors duration-300">
                                    {experience.role}
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                                    <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                                        {experience.company}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Logo Box (Matches Skills Icon Box) */}
                            <div className="w-14 h-14 flex-shrink-0 border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-500 group-hover:border-emerald-500 group-hover:rotate-6">
                                <img 
                                    src={experience.img} 
                                    alt={experience.company} 
                                    className="w-8 h-8 object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]" 
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-[13px] leading-relaxed mb-8 font-medium border-b border-white/5 pb-8">
                            {experience.desc}
                        </p>

                        {/* Skills Chips (Matched to Skills Style) */}
                        <div>
                             <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">Deployed_Stack:</p>
                             <div className="flex flex-wrap gap-3">
                                {experience.skills.map((skill, i) => (
                                    <div 
                                        key={i}
                                        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#0f0f0f] border border-white/5 hover:border-emerald-500/50 transition-all duration-300 group/chip cursor-pointer"
                                    >
                                        <div className="w-1 h-1 bg-emerald-500 rounded-full opacity-50 group-hover/chip:opacity-100"></div>
                                        <span className="text-[13px] font-bold text-gray-300 uppercase tracking-wide group-hover/chip:text-white">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                             </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* --- INJECTED STYLES FOR VERTICAL SCAN --- */}
      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: -20%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 120%; opacity: 0; }
        }
        .animate-scan-vertical {
          animation: scan-vertical 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Experience;