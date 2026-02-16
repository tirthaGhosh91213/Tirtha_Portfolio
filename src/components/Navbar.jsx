import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ["about", "skills", "experience", "work", "education"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
      isScrolled 
        ? "bg-slate-900/80 backdrop-blur-lg py-3 shadow-xl" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo with subtle hover lift */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Tirtha<span className="text-emerald-500">Ghosh</span>
          </span>
        </div>

        {/* Desktop Links with Animated Underline */}
        <div className="hidden lg:flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                activeSection === item.id ? "text-emerald-400" : "text-gray-300 hover:text-white"
              }`}
              style={{ animation: `fadeInDown 0.5s ease forwards ${index * 0.1}s` }}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[2px] bg-emerald-500 transition-all duration-300 ${
                activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </button>
          ))}
        </div>

        {/* Media Cluster with Hover Interactions */}
        <div className="hidden md:flex items-center space-x-6 border-l border-white/10 pl-8">
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" 
               className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" 
               className="text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1">
              <FiLinkedin size={20} />
            </a>
          </div>
          
          <a 
            href="mailto:contact@tirthaghosh.com" 
            className="group relative flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-emerald-900/20 active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <FiSend className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white transition-transform duration-300 active:scale-75"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu with Slide-Down Animation */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
      }`}>
        <div className="flex flex-col p-8 space-y-6">
          {menuItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-bold text-white transition-all duration-500 delay-[${i * 50}ms] ${
                isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-8 pt-6 border-t border-white/10">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FiGithub size={26}/></a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FiLinkedin size={26}/></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;