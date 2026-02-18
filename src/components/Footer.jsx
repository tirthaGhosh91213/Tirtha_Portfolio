import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND FX --- */}
      <div className="absolute inset-0 z-0 opacity-[0.15] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        
        {/* --- TOP SECTION: BRANDING & CTA --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20">
            
            {/* Brand Identity */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </div>
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.2em]">System Status: Operational</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                    Tirtha<span className="text-emerald-500">.</span>
                </h2>
                <p className="text-gray-400 font-mono text-sm max-w-md">
                    // Building digital experiences that merge art, code, and human interaction.
                </p>
            </div>

            {/* Back to Top Button */}
            <button 
                onClick={scrollToTop}
                className="group flex items-center gap-4 px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-full hover:border-emerald-500/50 transition-all duration-300"
            >
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-white">Back to Top</span>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                    <FaArrowUp className="w-4 h-4" />
                </div>
            </button>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>

        {/* --- MIDDLE SECTION: NAVIGATION & SOCIALS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            
            {/* Column 1: Navigation */}
            <div className="space-y-6">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">/ Navigation</h4>
                <ul className="space-y-4">
                    {[
                        { name: "About Me", id: "about" },
                        { name: "Skill Stack", id: "skills" },
                        { name: "Experience", id: "experience" },
                        { name: "Selected Work", id: "work" },
                    ].map((item, idx) => (
                        <li key={idx}>
                            <button 
                                onClick={() => handleScroll(item.id)}
                                className="group flex items-center gap-2 text-gray-400 hover:text-emerald-500 transition-colors"
                            >
                                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-emerald-500 transition-colors"></span>
                                <span className="text-sm font-medium uppercase tracking-wide">{item.name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Column 2: Legal / Contact */}
             <div className="space-y-6">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">/ Legal</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Code of Conduct</a></li>
                </ul>
            </div>

            {/* Column 3 & 4: Social Network (Spans 2 cols on LG) */}
            <div className="lg:col-span-2 space-y-6">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">/ Global_Network</h4>
                <div className="flex flex-wrap gap-4">
                    {[
                        { icon: <FaGithub />, link: "https://github.com/tirthaGhosh91213", label: "GitHub" },
                        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tirtha-ghosh-098a072ba/", label: "LinkedIn" },
                        { icon: <FaTwitter />, link: "#", label: "Twitter" },
                        { icon: <FaInstagram />, link: "#", label: "Instagram" },
                        { icon: <FaFacebook />, link: "#", label: "Facebook" },
                    ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-14 h-14 bg-[#0a0a0a] border border-white/5 rounded-xl flex items-center justify-center overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10 text-xl text-gray-400 group-hover:text-emerald-500 transition-colors group-hover:scale-110 duration-300">
                                {social.icon}
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </div>

        {/* --- BOTTOM BAR: TECHNICAL STATS --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <p className="text-[10px] font-mono text-gray-600 uppercase">
                © {currentYear} Tirtha Ghosh. Crafted with React & Tailwind.
            </p>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Server: Online</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Latency: 24ms</span>
                </div>
                <div className="flex items-center gap-2">
                     <span className="text-[10px] font-mono text-gray-500 uppercase">Loc: India</span>
                </div>
            </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;