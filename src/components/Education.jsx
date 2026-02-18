import React, { useState, useEffect, useRef } from "react";
import { education } from "../constants";

const Education = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRefs = useRef([]);

  // --- SCROLL ANIMATION TRIGGER ---
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
      { threshold: 0.15 }
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
      id="education"
      // Removed selection:bg-emerald-500/30 for a completely neutral background feel
      className="relative py-32 bg-[#050505] overflow-hidden min-h-screen text-white"
    >
      {/* --- 1. CLEAN TECHNICAL BACKGROUND --- */}
      {/* Base Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.1] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      
      {/* REMOVED: The colored atmospheric blobs (purple/emerald) are gone.
      */}
      
      {/* Noise Overlay (Kept for texture) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- 2. HEADER: HIGH-TECH --- */}
        <div className="mb-32 flex flex-col items-center justify-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
             <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">System_Log: Education</span>
          </div>
          
          <h2 className="text-3xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter mix-blend-overlay">
            ACADEMIC <br /> <span className="text-white">HISTORY</span>
          </h2>
        </div>

        {/* --- 3. TIMELINE & CARDS --- */}
        <div className="relative">
          
          {/* CENTRAL BEAM */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-beam"></div>
          </div>

          <div className="flex flex-col gap-24 md:gap-32">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={edu.id || index}
                  ref={addToRefs}
                  data-index={index}
                  className={`relative flex flex-col md:flex-row items-center w-full perspective-1000 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Central Node */}
                  <div className={`absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                      <div className="relative w-4 h-4 bg-[#050505] border border-emerald-500 rotate-45 z-10 shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                      <div className="absolute inset-0 bg-emerald-500 blur-md opacity-50 animate-pulse"></div>
                  </div>

                  {/* Connecting Line */}
                  <div className={`hidden md:block absolute top-1/2 h-px bg-emerald-500/30 w-16 transition-all duration-1000 ${
                     isVisible ? 'opacity-100 width-16' : 'opacity-0 width-0'
                  } ${isEven ? "left-1/2 ml-4" : "right-1/2 mr-4"}`}></div>

                  {/* --- THE 3D CARD --- */}
                  <div 
                    className={`w-full md:w-1/2 pl-12 md:pl-0 transition-all duration-1000 cubic-bezier(0.17, 0.55, 0.55, 1) ${
                        isVisible 
                        ? "opacity-100 translate-x-0 rotate-0" 
                        : `opacity-0 ${isEven ? "md:-translate-x-24 md:-rotate-12" : "md:translate-x-24 md:rotate-12"}`
                    } ${isEven ? "md:pr-24" : "md:pl-24"}`}
                  >
                    <TiltCard>
                        <div className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-1 group">
                             
                             {/* Content Wrapper */}
                             <div className="relative bg-[#080808] rounded-2xl p-8 h-full flex flex-col overflow-hidden">
                                
                                {/* Background Grid inside Card */}
                                <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-start mb-8">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                            <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
                                                Certified
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-emerald-400 transition-colors duration-300">
                                            {edu.school}
                                        </h3>
                                    </div>
                                    
                                    {/* Floating 3D Logo */}
                                    <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 p-3 flex items-center justify-center transform group-hover:translate-z-10 group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                                        <img src={edu.img} alt={edu.school} className="w-full h-full object-contain drop-shadow-lg" />
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-emerald-500/50 to-transparent mb-6"></div>

                                {/* Body with Expandable Text */}
                                <div className="relative z-10 mb-8">
                                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                    
                                    {/* --- TEXT EXPANDER COMPONENT --- */}
                                    <ExpandableDescription text={edu.desc} />
                                    
                                </div>

                                {/* Tech Footer */}
                                <div className="relative z-10 mt-auto flex items-end justify-between">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] font-mono text-gray-600 uppercase">Completion_Date</span>
                                        <span className="text-sm font-bold text-white font-mono bg-white/5 px-2 py-1 rounded">{edu.date}</span>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end">
                                        <span className="text-[9px] font-mono text-gray-600 uppercase">Performance_Index</span>
                                        <span className="text-sm font-bold text-emerald-500 font-mono">{edu.grade}</span>
                                    </div>
                                </div>

                             </div>
                        </div>
                    </TiltCard>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes beam {
          0% { top: -50%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-beam {
          animation: beam 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .cubic-bezier {
            transition-timing-function: cubic-bezier(0.17, 0.55, 0.55, 1);
        }
        /* Important for 3D effect */
        .translate-z-10 {
            transform: translateZ(30px);
        }
      `}</style>
    </section>
  );
};

// --- SUB-COMPONENT: EXPANDABLE DESCRIPTION ---
// Handles the "See More / See Less" logic for long text
const ExpandableDescription = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_LENGTH = 120; // Truncate after 120 chars

  // If text is short, just return the text
  if (text.length <= MAX_LENGTH) {
    return <p className="text-gray-400 text-sm leading-relaxed font-light">{text}</p>;
  }

  return (
    <div>
      <p className="text-gray-400 text-sm leading-relaxed font-light">
        {isExpanded ? text : `${text.slice(0, MAX_LENGTH)}...`}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent affecting the tilt if clickable
          setIsExpanded(!isExpanded);
        }}
        className="mt-3 text-[10px] font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
      >
        {isExpanded ? (
          <>
            See Less <span className="text-[8px]">▲</span>
          </>
        ) : (
          <>
            See More <span className="text-[8px]">▼</span>
          </>
        )}
      </button>
    </div>
  );
};

// --- THE "CRAZY" 3D TILT ENGINE ---
const TiltCard = ({ children }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 1. Calculate Spotlight Position
    setPosition({ x, y });

    // 2. Calculate 3D Tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; 
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative perspective-1000 w-full transform-style-3d"
    >
        <div 
            className="transition-transform duration-100 ease-out will-change-transform shadow-2xl"
            style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
                transformStyle: 'preserve-3d',
            }}
        >
            {/* Spotlight Effect (The Flashlight) */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-50 rounded-3xl"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.15), transparent 40%)`,
                }}
            />
            {/* Border Highlight */}
             <div
                className="pointer-events-none absolute -inset-[1px] transition duration-300 z-0 rounded-3xl"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.6), transparent 40%)`,
                }}
            />

            {children}
        </div>
    </div>
  );
};

export default Education;