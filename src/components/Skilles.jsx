import React, { useEffect, useRef, useState } from "react";
import { SkillsInfo } from "../constants";

const Skills = () => {
  // Store refs for the skill cards to track visibility
  const cardRefs = useRef([]);

  // State to track if the device supports hover (Desktop vs Mobile)
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // 1. Check if device supports hover
    const checkHover = () => {
      const hoverMatch = window.matchMedia("(hover: hover)");
      setIsTouchDevice(!hoverMatch.matches);
    };
    
    checkHover();
    window.addEventListener('resize', checkHover);

    // 2. Setup Intersection Observer for Mobile Animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the item is visible
    };

    const observerCallback = (entries) => {
      // Only run auto-animation logic on touch devices/mobile
      if (!isTouchDevice && window.matchMedia("(hover: hover)").matches) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mobile-active");
        } else {
          // Optional: Remove this else block if you want the animation to stay once triggered
          entry.target.classList.remove("mobile-active");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkHover);
    };
  }, [isTouchDevice]);

  // Helper to add ref to array
  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section id="skills" className="relative py-20 bg-[#090909] overflow-hidden ">
      
      {/* 1. CLEAN TECHNICAL GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- COMPACT HEADER --- */}
        <div className="mb-10 flex flex-col md:flex-row items-end justify-between border-b-2 border-white/10 pb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
              The <span className="text-emerald-500 italic">Stack.</span>
            </h2>
            <p className="text-gray-400 mt-4 text-[12px] font-bold tracking-widest uppercase opacity-60">Technical Inventory</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 border border-white/10">
             <div className="w-2 h-2 bg-emerald-500 animate-pulse"></div>
             <span className="text-emerald-500 font-mono text-[13px] font-black uppercase tracking-[0.1em]">System_Active</span>
          </div>
        </div>

        {/* --- LARGE-CHIP BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 shadow-2xl">
          {SkillsInfo.map((category, idx) => (
            <div
              key={category.title}
              ref={addToRefs}
              // Added group-[.mobile-active]: classes to mirror group-hover behavior on mobile scroll
              className="group relative bg-[#060606] p-8 md:p-8 transition-all duration-500 hover:bg-[#090909] group-[.mobile-active]:bg-[#090909]"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-2xl font-black text-white tracking-widest uppercase flex items-center gap-4">
                    <span className="text-emerald-500 font-mono text-sm">0{idx + 1}</span>
                    {category.title}
                  </h3>
                  {/* Icon rotation on hover OR mobile-active */}
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-emerald-500 group-hover:rotate-90 group-[.mobile-active]:border-emerald-500 group-[.mobile-active]:rotate-90">
                     <div className="w-2 h-2 bg-emerald-500"></div>
                  </div>
                </div>

                {/* LARGE CHIPS: High visibility, wide layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      // Added active: classes for immediate touch feedback
                      className="group/skill flex items-center gap-5 p-4 bg-[#0f0f0f] border border-white/5 transition-all duration-300 hover:border-emerald-500 hover:bg-white/[0.03] hover:-translate-y-1 active:border-emerald-500 active:bg-white/[0.03] active:-translate-y-1"
                    >
                      {/* Large, Fully Visible Logo */}
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-lg p-2 transition-all duration-500 group-hover/skill:bg-emerald-500/10 group-hover/skill:scale-110 group-active/skill:bg-emerald-500/10 group-active/skill:scale-110">
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]"
                        />
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-white group-hover/skill:text-emerald-500 group-active/skill:text-emerald-500 transition-colors">
                          {skill.name}
                        </span>
                        <div className="w-0 h-[1px] bg-emerald-500 transition-all duration-500 group-hover/skill:w-full group-active/skill:w-full mt-1"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interaction Draw Line: Triggers on Hover OR mobile-active */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-emerald-500 transition-all duration-700 group-hover:w-full group-[.mobile-active]:w-full"></div>
            </div>
          ))}
        </div>

        {/* --- FOOTER: Refined Minimalism --- */}
        <div className="mt-10 flex justify-between items-center opacity-30">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white italic">Hardware_Accelerated</span>
          <div className="h-px w-24 bg-white/20"></div>
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-white italic">2026</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;