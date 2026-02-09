import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-all duration-1000 ease-out-cubic px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 ${
      isScrolled 
        ? "h-20 bg-gradient-to-r from-slate-900/80 via-gray-900/70 to-slate-900/80 backdrop-blur-3xl shadow-2xl shadow-[#65cfa1]/20 border-b-[1px] border-[#65cfa1]/40" 
        : "h-24 bg-gradient-to-r from-slate-900/40 via-gray-900/20 to-slate-900/40 backdrop-blur-xl shadow-xl shadow-transparent"
    }`}>
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Luxury Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer p-2 -m-2 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
          <div className="w-3 h-3 bg-gradient-to-r from-[#65cfa1] to-[#0c944c] rounded-full shadow-lg shadow-[#65cfa1]/50 group-hover:animate-ping-slow"></div>
          <span className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#65cfa1] via-white to-[#0c944c] bg-clip-text text-transparent drop-shadow-2xl group-hover:shadow-emerald-400/50 transition-all duration-700">
            Tirtha Ghosh
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-mono font-semibold text-lg">
          {menuItems.map((item, idx) => (
            <li key={item.id} className="group relative">
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 transition-all duration-700 hover:bg-white/20 hover:border-[#65cfa1]/50 hover:text-[#65cfa1] hover:shadow-2xl hover:shadow-[#65cfa1]/30 hover:scale-[1.02] overflow-hidden relative ${
                  activeSection === item.id ? "text-[#65cfa1] !bg-gradient-to-r !from-[#65cfa1]/20 !to-[#0c944c]/20 !shadow-emerald-500/40 !border-[#65cfa1]/60" : "text-white/90"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#65cfa1]/20 to-[#0c944c]/20 scale-0 group-hover:scale-100 transition-transform duration-700 origin-center rounded-2xl" />
                {/* Active Indicator */}
                {activeSection === item.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#65cfa1] rounded-full shadow-lg shadow-[#65cfa1]/50 animate-pulse" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons - FIXED VISIBILITY */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/tirthaGhosh91213" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/40 hover:bg-[#65cfa1]/30 hover:text-[#65cfa1] hover:border-[#65cfa1]/60 hover:shadow-2xl hover:shadow-[#65cfa1]/40 hover:scale-110 transition-all duration-500 hover:rotate-3 shadow-lg text-white">
            <FaGithub size={20} className="group-hover:animate-bounce" />
          </a>
          <a href="https://www.linkedin.com/in/tirtha-ghosh-098a072ba/" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/40 hover:bg-blue-500/30 hover:text-blue-300 hover:border-blue-400/60 hover:shadow-2xl hover:shadow-blue-400/40 hover:scale-110 transition-all duration-500 hover:rotate-3 shadow-lg text-white">
            <FaLinkedin size={20} className="group-hover:animate-bounce" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 hover:bg-[#65cfa1]/30 hover:text-[#65cfa1] hover:shadow-2xl hover:shadow-[#65cfa1]/50 hover:scale-110 transition-all duration-500 shadow-xl text-white"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Luxury Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gradient-to-r from-slate-900/90 via-gray-900/80 to-slate-900/90 backdrop-blur-3xl border-t border-[#65cfa1]/40 shadow-2xl py-8 px-6">
          <div className="max-w-md mx-auto">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleMenuItemClick(item.id)}
                    className={`w-full text-left p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 font-semibold text-xl transition-all duration-700 hover:bg-[#65cfa1]/20 hover:text-[#65cfa1] hover:shadow-2xl hover:shadow-[#65cfa1]/40 hover:translate-x-2 hover:scale-[1.02] text-white ${
                      activeSection === item.id && "!bg-gradient-to-r !from-[#65cfa1]/30 !to-[#0c944c]/30 !text-[#65cfa1] !shadow-emerald-500/50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center space-x-8 mt-12 pt-8 border-t border-white/20">
              <a href="https://github.com/tirthaGhosh91213" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/40 hover:bg-[#65cfa1]/30 hover:text-[#65cfa1] hover:shadow-2xl hover:shadow-[#65cfa1]/50 hover:scale-125 transition-all duration-700 text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tirtha-ghosh-098a072ba/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-white/20 backdrop-blur-xl border-2 border-white/40 hover:bg-blue-500/30 hover:text-blue-300 hover:shadow-2xl hover:shadow-blue-400/50 hover:scale-125 transition-all duration-700 text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
