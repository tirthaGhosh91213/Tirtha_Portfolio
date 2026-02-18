import React, { useState, useEffect, useRef } from "react";
import { projects } from "../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRefs = useRef([]);

  // --- SCROLL ANIMATION OBSERVER ---
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
      { threshold: 0.1 }
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

  // --- MODAL HANDLERS ---
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="relative py-24 bg-[#090909] overflow-hidden min-h-screen text-white"
    >
      {/* --- BACKGROUND FX (EXACT MATCH TO SKILLS & EXPERIENCE) --- */}
      {/* 1. CLEAN TECHNICAL GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-20 flex flex-col md:flex-row items-end justify-between border-b-2 border-white/10 pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Selected <span className="text-emerald-500 italic">Works.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-[12px] font-bold tracking-widest uppercase opacity-60">
              // Deployment_Archive_2024
            </p>
          </div>
          {/* Tech Badge */}
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 border border-white/10">
             <div className="w-2 h-2 bg-emerald-500 animate-pulse"></div>
             <span className="text-emerald-500 font-mono text-[13px] font-black uppercase tracking-[0.1em]">
                System_Online
             </span>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isVisible = visibleItems.includes(index);
            return (
              <div
                key={project.id || index}
                ref={addToRefs}
                data-index={index}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} onOpenModal={() => handleOpenModal(project)} />
              </div>
            );
          })}
        </div>
      </div>

      {/* --- MODAL OVERLAY --- */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}

    </section>
  );
};

// --- COMPONENT: PROJECT CARD ---
const ProjectCard = ({ project, onOpenModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Card Truncation Logic
  const MAX_LENGTH = 100; 
  const isLongDescription = project.description.length > MAX_LENGTH;
  const displayDescription = isExpanded ? project.description : `${project.description.slice(0, MAX_LENGTH)}...`;

  return (
    <div className="group relative rounded-3xl bg-[#060606] border border-white/10 overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.1)]">
        
        {/* Interaction Draw Line */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full z-20"></div>

        {/* Image Section */}
        <div 
            className="relative h-56 p-6 overflow-hidden cursor-pointer"
            onClick={onOpenModal}
        >
            <div className="absolute inset-0 bg-[#090909]/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full rounded-3xl object-cover transform group-hover:scale-105 transition-transform duration-700 filter group-hover:grayscale-0"
            />
            {/* Corner Icon */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex flex-col flex-grow">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <h3 
                    className="text-xl font-bold text-white uppercase tracking-wider group-hover:text-emerald-500 transition-colors cursor-pointer"
                    onClick={onOpenModal}
                >
                    {project.title}
                </h3>
                <span className="text-[10px] font-mono text-gray-600 border border-white/10 px-2 py-1">
                    v1.0
                </span>
            </div>

            {/* EXPANDABLE DESCRIPTION (CARD) */}
            <div className="mb-6 relative">
                <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {displayDescription}
                </p>
                
                {isLongDescription && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="mt-2 text-[11px] font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
                    >
                        {isExpanded ? (
                            <>See Less <span className="text-xs">▲</span></>
                        ) : (
                            <>See More <span className="text-xs">▼</span></>
                        )}
                    </button>
                )}
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-auto">
                 <div className="w-full h-px bg-white/5 mb-4"></div>
                 <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-gray-500 bg-[#0f0f0f] border border-white/5 px-2 py-1 hover:border-emerald-500/30 hover:text-emerald-500 transition-colors cursor-default">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[10px] font-mono text-gray-600 px-2 py-1">
                            +{project.tags.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

// --- COMPONENT: MODAL (FULL SCREEN OVERLAY) ---
const ProjectModal = ({ project, onClose }) => {
    // Modal Text Truncation Logic
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 150; // Allow a bit more text in modal before truncating
    const isLongDescription = project.description.length > MAX_LENGTH;
    const displayDescription = isExpanded ? project.description : `${project.description.slice(0, MAX_LENGTH)}...`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Box */}
            <div className="relative w-full max-w-5xl bg-[#090909] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-modal-in">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 hover:text-black transition-all"
                >
                    ✕
                </button>

                {/* Left: Image */}
                <div className="w-full  md:w-3/5 bg-black relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80 z-10"></div>
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 md:h-full object-cover opacity-90"
                    />
                </div>

                {/* Right: Details */}
                <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto bg-[#090909] border-l border-white/5">
                    
                    <div className="mb-6">
                        <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 block">
                            // Project_File
                        </span>
                        <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">
                            {project.title}
                        </h2>
                        <div className="h-0.5 w-16 bg-emerald-500"></div>
                    </div>

                    {/* EXPANDABLE DESCRIPTION (MODAL) */}
                    <div className="mb-8">
                        <p className="text-gray-300 text-sm leading-7 font-light">
                            {displayDescription}
                        </p>
                        {isLongDescription && (
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="mt-3 text-[11px] font-bold uppercase tracking-widest text-emerald-500 hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
                            >
                                {isExpanded ? (
                                    <>See Less <span className="text-xs">▲</span></>
                                ) : (
                                    <>See More <span className="text-xs">▼</span></>
                                )}
                            </button>
                        )}
                    </div>

                    <div className="mb-8">
                        <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">
                            Tech_Stack_Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-[#111] border border-white/10 text-[11px] text-gray-300 font-mono hover:border-emerald-500/50 hover:text-emerald-500 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="py-3 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center flex items-center justify-center gap-2"
                        >
                             GitHub
                        </a>
                        <a 
                            href={project.webapp} 
                            target="_blank" 
                            rel="noreferrer"
                            className="py-3 bg-emerald-600 text-black text-xs font-bold uppercase tracking-widest hover:bg-emerald-500 transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        >
                             Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes modal-in {
                    0% { opacity: 0; transform: scale(0.95) translateY(20px); }
                    100% { opacity: 1; transform: scale(1) translateY(0); }
                }
                .animate-modal-in {
                    animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
        </div>
    );
};

export default Work;