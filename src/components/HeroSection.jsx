import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img1 from "./../assets/collegeImg1.svg"
import img2 from "./../assets/collegeImg2.svg"
import ReACE_logo from "./../assets/ReACS logo.png"
import ieee_logo from "./../assets/ieee_logo.png"
import ieee from "./../assets/ieee.png"
import iiit_logo from "./../assets/iiit.png"
import { Menu, X, ChevronDown } from 'lucide-react';

function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCallsDropdownOpen, setIsCallsDropdownOpen] = useState(false);
  const [isSubmissionDdOpen, setIsSubmissionDdOpen] = useState(false);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    // { name: "Submission", path: "/submission" },
    { name: "Program Schedule", path: "/schedule" },
    { name: "Committee", path: "/committee" },
    { name: "Keynote", path: "/speakers" },
  ];

  const callsDropdownItems = [
    { name: "Call for Papers", path: "/cfp" },
  ];

  const dropdownItems = [
    {name:"Accommodation", path: "/attende"},
    { name: "About", path: "/about" }
  ];

  const submissionDropdownItems = [
    { name: "Second Phase Paper Submission", path: "/submission" },
    { name: "Camera Ready Submission", path: "/crs" },
  ]

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
    <div className="inter">
      <div className="relative">
        {/* Background Image */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              className="w-full h-[400px] sm:h-[400px] md:h-[650px] object-cover"
              src={slide}
              alt="library image"
            />
            <div className="absolute h-[400px] sm:h-[400px] md:h-[650px] inset-0 bg-gradient-to-b from-black/50 to-black/20" />
          </div>
        ))}

        <div className="md:hidden z-50 absolute right-3 top-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 bg-gray-200/30 rounded-md text-white cursor-pointer focus:outline-none"
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl flex flex-col justify-center text-justify mx-auto pt-14 md:pt-10 lg:pt-12">
          <div className='flex justify-center lg:mb-4'>
            <img 
              src={ReACE_logo} 
              alt="IIIT Logo" 
              className="h-auto w-[200px] md:w-[300px] object-contain"
            />
          </div>
          <p className="text-md tracking-wider md:text-xl text-white text-center max-w-4xl mx-auto font-semibold">
            2026 IEEE International Conference on Recent Advances in Computing and Systems
          </p>
          <p className="mt-4 tracking-wider text-sm md:text-lg text-white text-center font-bold">
            XX-XX December 2026 &#x2022; ABV-IIITM Gwalior, India
          </p>
          <p className="mt-4 tracking-wider text-sm md:text-lg text-white text-center font-bold">
            Conference Successfully Concluded
          </p>

          {/* Navbar */}
          <nav className="relative z-10 mt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="hidden md:block bg-[#2769b0]/80 rounded-4xl px-4">
                  <div className="flex items-baseline space-x-1">
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="px-8 py-2 text-sm font-medium text-white hover:bg-[#2769b0]"
                      >
                        {item.name}
                      </Link>
                    ))}

                    {/* Submission Dropdown Menu */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsSubmissionDdOpen(true)}
                      onMouseLeave={() => setIsSubmissionDdOpen(false)}
                    >
                      <button 
                        className="px-8 py-2 text-sm font-medium text-white hover:bg-[#2769b0] flex items-center gap-1"
                      >
                        Submission <ChevronDown className="h-4 w-4" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                          isSubmissionDdOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      >
                        <div className="py-1">
                          {submissionDropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Calls Dropdown Menu */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsCallsDropdownOpen(true)}
                      onMouseLeave={() => setIsCallsDropdownOpen(false)}
                    >
                      <button 
                        className="px-8 py-2 text-sm font-medium text-white hover:bg-[#2769b0] flex items-center gap-1"
                      >
                        Calls <ChevronDown className="h-4 w-4" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                          isCallsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      >
                        <div className="py-1">
                          {callsDropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* More Dropdown Menu */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <button 
                        className="px-8 py-2 text-sm font-medium text-white hover:bg-[#2769b0] flex items-center gap-1"
                      >
                        More <ChevronDown className="h-4 w-4" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                          isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      >
                        <div className="py-1">
                          {dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <div
              className={`fixed inset-y-0 right-0 transform ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              } w-64 bg-black shadow-lg z-50 text-white overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
            >
              <div className="p-1">
                <div className="flex items-center justify-between mt-20 my-6">
                  <div className="flex items-center">
                    <div className="pl-4 rounded-lg flex items-center justify-center">
                      <h1 className="text-3xl font-bold">ReACS 2026</h1>
                    </div>
                  </div>
                </div>

                <div className="md:flex space-y-2 cursor-pointer font-semibold my-5">
                  {[...mainNavItems, ...submissionDropdownItems, ...callsDropdownItems, ...dropdownItems].map((item) => (
                    <Link 
                      key={item.name}
                      to={item.path} 
                      className="text-white block pl-4 pb-2 border-gray-800 border-b-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Overlay when mobile menu is open */}
            {isMenuOpen && (
              <div
                className="fixed inset-0 bg-black/40 z-30 md:hidden"
                onClick={toggleMenu}
              ></div>
            )}
          </nav>
          <div className="md:mt-10">
            <div className="flex justify-center items-center px-4">
              <img 
                src={ieee_logo} 
                alt="ReACE Logo" 
                className="w-[90px] sm:w-[150px] lg:w-[220px] h-auto object-contain"
              />
              <img 
                src={iiit_logo} 
                alt="IEEE Logo" 
                className="w-[90px] sm:w-[150px] lg:w-[220px] h-auto object-contain"
              />
              <img 
                src={ieee} 
                alt="IIIT Logo" 
                className="w-[90px] sm:w-[150px] lg:w-[220px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;