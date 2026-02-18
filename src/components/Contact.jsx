import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle global mouse movement for the background parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a "System Processing" delay for effect
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_33eaxss", // Replace with your Service ID
          "template_6uyopoo", // Replace with your Template ID
          formRef.current,
          "KfsmPwL1jvcnSJ4Yi" // Replace with your Public Key
        )
        .then(
          () => {
            setLoading(false);
            formRef.current.reset();
            toast.success("Transmission Received. Connection Established. 🚀", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              style: { background: "#0a0a0a", border: "1px solid #10b981", color: "#fff", fontFamily: "monospace" }
            });
          },
          (error) => {
            setLoading(false);
            console.error("FAILED...", error);
            toast.error("Transmission Failed. Signal Lost.", {
                position: "bottom-right",
                theme: "dark",
            });
          }
        );
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-24 bg-[#050505] overflow-hidden selection:bg-emerald-500/30"
    >
      {/* --- 1. CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
          
          {/* Moving Orbs (Parallax) */}
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] transition-transform duration-100 ease-out pointer-events-none"
            style={{ transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] transition-transform duration-100 ease-out pointer-events-none"
            style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
          ></div>

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
      </div>

      <ToastContainer />

      <div className="relative z-10 w-full max-w-6xl px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-20 text-center space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.2em]">Uplink_Ready</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mix-blend-overlay">
                Initialize <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-600">Contact</span>
             </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* --- LEFT: INFO TERMINAL --- */}
            <div className="space-y-8 lg:sticky lg:top-24">
                <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="text-emerald-500 text-3xl">✜</span> 
                        Signal Data
                    </h3>

                    <div className="space-y-6 font-mono text-sm">
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest">Target_Location</span>
                            <span className="text-white border-l-2 border-emerald-500 pl-4">Haldia, West Bengal, IN</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest">Communication_Frequency</span>
                            <span className="text-white border-l-2 border-emerald-500 pl-4">ghoshtirtha1234@gmail.com</span>
                        </div>
                        <div className="flex flex-col gap-2">
                             <span className="text-gray-500 text-[10px] uppercase tracking-widest">Response_Time</span>
                             <span className="text-emerald-500 pl-4 animate-pulse">&lt; 24 Hours</span>
                        </div>
                    </div>

                    {/* Decorative Code */}
                    <div className="absolute top-4 right-4 text-[9px] text-gray-800 font-mono text-right opacity-50 select-none">
                        RX_SIGNAL: 98%<br/>
                        ENC: AES-256<br/>
                        PORT: 443
                    </div>
                </div>

                {/* Abstract Visual */}
                <div className="h-64 w-full rounded-3xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
                    <div className="relative z-10 text-center space-y-2">
                        <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 animate-spin-slow">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full blur-md"></div>
                        </div>
                        <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">Awaiting Transmission</p>
                    </div>
                </div>
            </div>

            {/* --- RIGHT: THE FORM --- */}
            <SpotlightCard>
                <form ref={formRef} onSubmit={sendEmail} className="relative z-10 bg-[#080808] p-8 md:p-10 rounded-3xl flex flex-col gap-8">
                    
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-transparent opacity-20"></div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Execute Command</h3>
                        <p className="text-gray-500 text-sm font-mono">// Fill required parameters to initiate uplink.</p>
                    </div>

                    <div className="space-y-6">
                        <InputGroup label="User_ID // Name" name="user_name" type="text" placeholder="Enter identification..." />
                        <InputGroup label="Return_Address // Email" name="user_email" type="email" placeholder="Enter secure channel..." />
                        <InputGroup label="Subject_Header" name="subject" type="text" placeholder="Subject of inquiry..." />
                        
                        <div className="relative group">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-2 block group-focus-within:text-emerald-500 transition-colors">
                                Payload // Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                placeholder="Type your message stream here..."
                                className="w-full bg-[#0c0c0c] border border-white/10 rounded-xl p-4 text-white text-sm font-mono focus:outline-none focus:border-emerald-500/50 transition-all resize-none placeholder:text-gray-700"
                            ></textarea>
                            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-emerald-500 transition-all duration-500 group-focus-within:w-full"></div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full py-4 bg-[#0c0c0c] border border-white/10 rounded-xl text-white font-bold uppercase tracking-widest overflow-hidden group hover:border-emerald-500/50 transition-all"
                    >
                        {loading ? (
                             <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                <span className="text-emerald-500 text-xs font-mono">Transmitting Data...</span>
                             </div>
                        ) : (
                            <div className="relative z-10 flex items-center justify-center gap-2 group-hover:text-emerald-500 transition-colors">
                                <span>Initialize Uplink</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        )}
                        {/* Button Background Fill Animation */}
                        <div className="absolute inset-0 bg-white/5 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                    </button>

                </form>
            </SpotlightCard>

        </div>
      </div>
      
      <style jsx>{`
        .animate-spin-slow {
            animation: spin 8s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

// --- REUSABLE INPUT COMPONENT ---
const InputGroup = ({ label, name, type, placeholder }) => {
    return (
        <div className="relative group">
            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-mono mb-2 block group-focus-within:text-emerald-500 transition-colors">
                {label}
            </label>
            <input
                type={type}
                name={name}
                required
                placeholder={placeholder}
                className="w-full bg-[#0c0c0c] border-b border-white/10 p-4 text-white text-sm font-mono focus:outline-none focus:bg-[#0f0f0f] transition-all placeholder:text-gray-700 rounded-t-xl"
            />
            {/* Animated Underline */}
            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-emerald-500 transition-all duration-500 group-focus-within:w-full group-focus-within:left-0"></div>
        </div>
    );
};

// --- SPOTLIGHT CARD WRAPPER ---
const SpotlightCard = ({ children }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-[1px] bg-transparent"
    >
      {/* Moving Border Gradient */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.4), transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full rounded-3xl bg-[#080808]">
         {children}
      </div>
    </div>
  );
};

export default Contact;