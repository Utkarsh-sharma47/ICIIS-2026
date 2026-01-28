import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "./../assets/collegeImg1.svg";
import img2 from "./../assets/collegeImg2.svg";
import ieee_logo from "./../assets/ieee_logo.png";
import ieee from "./../assets/ieee.png";
import iiit_logo from "./../assets/iiit.png";
import { Menu, X, ChevronDown } from "lucide-react";

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCallsDropdownOpen, setIsCallsDropdownOpen] = useState(false);
  const [isSubmissionDdOpen, setIsSubmissionDdOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Program Schedule", path: "/schedule" },
    { name: "Committee", path: "/committee" },
    { name: "Keynote", path: "/speakers" },
  ];

  const callsDropdownItems = [{ name: "Call for Papers", path: "/cfp" }];

  const dropdownItems = [
    { name: "Accommodation", path: "/attende" },
    { name: "About", path: "/about" },
  ];

  const submissionDropdownItems = [
    { name: "Second Phase Paper Submission", path: "/submission" },
    { name: "Camera Ready Submission", path: "/crs" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const slides = [`${img1}`, `${img2}`];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans antialiased relative w-full overflow-visible bg-slate-900">
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        /* Updated White Glow */
        .text-glow {
          text-shadow: 0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.3);
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.75); 
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .nav-item {
          transition: all 0.3s ease;
          color: #1e293b;
          font-weight: 700;
        }
        .nav-item:hover {
          background: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
          color: #0284c7;
        }
      `}</style>

      <div className="relative min-h-screen flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              className="w-full h-full object-cover"
              src={slide}
              alt="Background"
            />

            <div
              className={`absolute inset-0 ${
                index === 0 ? "bg-slate-900/50" : "bg-slate-900/60"
              }`}
            />
          </div>
        ))}

        {/* Mobile Menu Button - White (Light Theme) */}
        <div className="md:hidden z-50 absolute right-4 top-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 bg-white/90 backdrop-blur-md rounded-lg text-slate-900 border border-white/50 shadow-lg hover:bg-white transition-all"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 w-full max-w-7xl mx-auto">
          <div className="animate-fade-in-up flex flex-col items-center w-full">
            <div className="mb-4 md:mb-6 transition-transform duration-500 hover:scale-105">
              {/* <img 
                src={ReACE_logo} 
                alt="ReACS Logo" 
                className="h-20 md:h-28 lg:h-36 w-auto object-contain drop-shadow-2xl"
              /> */}
            </div>

            <div className="text-center space-y-4 max-w-6xl mx-auto mt-4">
              {/* Top Part: 2026 IEEE 20th */}
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-[0.3em] uppercase text-glow mb-2">
                2026 IEEE 20th
              </p>

              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
                style={{
                  // 1. First value is the border/glow thickness
                  // 2. Replace '#ff0000' with your chosen color
                  textShadow:
                    "0 0 0px rgb(193, 188, 255), 0 0 2px rgb(237, 255, 254), 0 0 3px rgb(127, 204, 251)",
                }}
              >
                International Conference on <br />
                Industrial and Information Systems
              </h1>
            </div>

            <div className="mt-8 flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-4">
                <span className="h-[2px] w-8 md:w-12 bg-sky-400"></span>
                <p className="text-white font-bold tracking-[0.15em] text-sm md:text-xl uppercase shadow-sm">
                  18-19 December 2026
                </p>
                <span className="h-[2px] w-8 md:w-12 bg-sky-400"></span>
              </div>
              <p className="text-slate-100 font-medium tracking-wider text-xs md:text-lg">
                ABV-IIITM Gwalior, India
              </p>
            </div>

            <nav className="mt-8 w-full max-w-5xl hidden md:block">
              <div className="glass-panel rounded-full px-4 py-2 mx-auto shadow-2xl">
                <div className="flex items-center justify-between text-sm font-semibold text-white">
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="px-6 py-3 rounded-full nav-item"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div
                    className="relative group"
                    onMouseEnter={() => setIsSubmissionDdOpen(true)}
                    onMouseLeave={() => setIsSubmissionDdOpen(false)}
                  >
                    <button className="px-6 py-3 flex items-center gap-1 rounded-full nav-item">
                      Submission{" "}
                      <ChevronDown className="h-4 w-4 opacity-80 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div
                      className={`absolute left-0 mt-4 w-60 rounded-xl overflow-hidden glass-panel transition-all duration-300 origin-top-left ${
                        isSubmissionDdOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      {submissionDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-3 text-sm text-slate-800 hover:bg-white/50 hover:text-sky-600 transition-colors border-b border-white/20 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div
                    className="relative group"
                    onMouseEnter={() => setIsCallsDropdownOpen(true)}
                    onMouseLeave={() => setIsCallsDropdownOpen(false)}
                  >
                    <button className="px-6 py-3 flex items-center gap-1 rounded-full nav-item">
                      Calls{" "}
                      <ChevronDown className="h-4 w-4 opacity-80 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div
                      className={`absolute left-0 mt-4 w-48 rounded-xl overflow-hidden glass-panel transition-all duration-300 origin-top-left ${
                        isCallsDropdownOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      {callsDropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-3 text-sm text-slate-800 hover:bg-white/50 hover:text-sky-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div
                    className="relative group"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <button className="px-6 py-3 flex items-center gap-1 rounded-full nav-item">
                      More{" "}
                      <ChevronDown className="h-4 w-4 opacity-80 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div
                      className={`absolute right-0 mt-4 w-48 rounded-xl overflow-hidden glass-panel transition-all duration-300 origin-top-right ${
                        isDropdownOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-6 py-3 text-sm text-slate-800 hover:bg-white/50 hover:text-sky-600 transition-colors border-b border-white/20 last:border-0"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <div className="mt-8 md:mt-12 w-full border-t border-white/10 pt-6">
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-90 hover:opacity-100 transition-opacity">
                <img
                  src={ieee_logo}
                  alt="IEEE Logo"
                  className="h-10 md:h-16 lg:h-20 w-auto object-contain"
                />
                <img
                  src={iiit_logo}
                  alt="IIIT Logo"
                  className="h-12 md:h-20 lg:h-24 w-auto object-contain"
                />
                <img
                  src={ieee}
                  alt="IEEE Society Logo"
                  className="h-10 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar - White Glassy Theme */}
        <div
          className={`fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white/90 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden border-l border-white/20 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 tracking-wider">
                ICIIS 2026
              </h2>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-widest">
                Navigation
              </p>
            </div>

            <div className="px-4 py-6 space-y-1">
              {[
                ...mainNavItems,
                ...submissionDropdownItems,
                ...callsDropdownItems,
                ...dropdownItems,
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors font-medium border-l-2 border-transparent hover:border-sky-500"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
