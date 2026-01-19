import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ReACE_logo from "./../assets/ReACS logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCallsDropdownOpen, setIsCallsDropdownOpen] = useState(false);
  const [isSubmissionDdOpen, setIsSubmissionDdOpen] = useState(false);
  
  // Mobile state
  const [isMobileCallsOpen, setIsMobileCallsOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isMobileSubmissionOpen, setIsMobileSubmissionOpen] = useState(false);
  
  const { pathname } = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "Registration", path: "/registration" },
    { name: "Program Schedule", path: "/schedule" },
    { name: "Committee", path: "/committee" },
    { name: "Keynote", path: "/speakers" },
  ];

  const callsDropdownItems = [
    { name: "Call for Papers", path: "/cfp" },
  ];

  const dropdownItems = [
    { name: "About", path: "/about" },
    { name: "Accommodation", path: "/attende" }
  ];

  const submissionDropdownItems = [
    { name: "Second Phase Paper Submission", path: "/submission" },
    { name: "Camera Ready Submission", path: "/crs" },
  ];

  useEffect(() => {
    setIsOpen(false);
    setIsMobileCallsOpen(false);
    setIsMobileMoreOpen(false);
    setIsMobileSubmissionOpen(false);
  }, [pathname]);

  // Helper for consistent link styling
  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      isActive 
        ? "bg-white/10 text-white shadow-sm" 
        : "text-gray-200 hover:bg-white/10 hover:text-white"
    }`;

  const dropdownItemClasses = ({ isActive }) =>
    `block px-4 py-2 text-sm transition-colors duration-150 ${
      isActive 
        ? "bg-blue-50 text-[#043A75] font-semibold" 
        : "text-gray-700 hover:bg-gray-50 hover:text-[#043A75]"
    }`;

  return (
    // Removed any potential marquee containers, just a solid professional sticky header
    <nav className="sticky top-0 z-50 w-full bg-[#043A75] shadow-md font-sans border-b border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {/* <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white/5 p-1 rounded-lg group-hover:bg-white/10 transition-colors">
                <img 
                  src={ReACE_logo} 
                  alt="Conference Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={navLinkClasses}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Submission Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsSubmissionDdOpen(true)}
              onMouseLeave={() => setIsSubmissionDdOpen(false)}
            >
              <button className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 ${isSubmissionDdOpen ? 'text-white bg-white/10' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
                Submission 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isSubmissionDdOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute left-0 mt-2 w-64 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-left ${isSubmissionDdOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {submissionDropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Calls Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsCallsDropdownOpen(true)}
              onMouseLeave={() => setIsCallsDropdownOpen(false)}
            >
              <button className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 ${isCallsDropdownOpen ? 'text-white bg-white/10' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
                Calls 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isCallsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute left-0 mt-2 w-48 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-left ${isCallsDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {callsDropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* More Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`px-3 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all duration-200 ${isDropdownOpen ? 'text-white bg-white/10' : 'text-gray-200 hover:text-white hover:bg-white/10'}`}>
                More 
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top-right ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
                <div className="py-2">
                  {dropdownItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={dropdownItemClasses}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[280px] bg-[#043A75] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 pt-5 pb-6 border-b border-white/10">
            <img 
              src={ReACE_logo} 
              alt="Logo" 
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-md transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="px-2 py-4 space-y-1">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-md text-base font-medium border-l-4 transition-all ${
                    isActive 
                      ? "border-white bg-white/10 text-white" 
                      : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Submission Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileSubmissionOpen(!isMobileSubmissionOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
              >
                <span>Submission</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isMobileSubmissionOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileSubmissionOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/20 rounded-md py-1 mx-2">
                  {submissionDropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block pl-8 pr-4 py-2 text-sm font-medium ${
                          isActive ? "text-white bg-white/5" : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Calls Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileCallsOpen(!isMobileCallsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
              >
                <span>Calls</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isMobileCallsOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileCallsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/20 rounded-md py-1 mx-2">
                  {callsDropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block pl-8 pr-4 py-2 text-sm font-medium ${
                          isActive ? "text-white bg-white/5" : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile More Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white rounded-md transition-colors"
              >
                <span>More</span>
                <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileMoreOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-black/20 rounded-md py-1 mx-2">
                  {dropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        `block pl-8 pr-4 py-2 text-sm font-medium ${
                          isActive ? "text-white bg-white/5" : "text-gray-400 hover:text-white"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;