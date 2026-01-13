import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import ReACE_logo from "./../assets/ReACS logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCallsDropdownOpen, setIsCallsDropdownOpen] = useState(false);
  const [isMobileCallsOpen, setIsMobileCallsOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [isSubmissionDdOpen, setIsSubmissionDdOpen] = useState(false);
  const {pathname} = useLocation();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    // { name: "Keynote Speakers", path: "/speakers" },
    { name: "About", path: "/about" },
    {name:"Accommodation", path: "/attende"}
  ];

  const submissionDropdownItems = [
    { name: "Second Phase Paper Submission", path: "/submission" },
    { name: "Camera Ready Submission", path: "/crs" },
  ]

  useEffect(() => {
    setIsOpen(false);
    setIsMobileCallsOpen(false);
    setIsMobileMoreOpen(false);
  }, [pathname]);

  return (
    <nav className="inter bg-[#043A75] shadow-sm px-4 md:px-12 py-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="rounded-lg flex items-center justify-center">
                <Link to={"/"}>
                  <img 
                    src={ReACE_logo} 
                    alt="IEEE Logo" 
                    className="w-[100px] h-auto object-contain"
                  />
                </Link>
              </div>
            </div> 
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-5">
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className={({isActive}) => 
                  `${isActive ? "text-blue-800 bg-blue-200" : "bg-gray-100 text-black"}  
                  hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* submission Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSubmissionDdOpen(true)}
              onMouseLeave={() => setIsSubmissionDdOpen(false)}
            >
              <button 
                className="bg-gray-100 text-black hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
              >
                Submission <ChevronDown className="h-4 w-4" />
              </button>

              {/* Submission Dropdown Content */}
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                  isSubmissionDdOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {submissionDropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({isActive}) =>
                        `${isActive ? 'bg-gray-100 text-blue-800' : 'text-gray-700'}
                        block px-4 py-2 text-sm hover:bg-gray-50`
                      }
                    >
                      {item.name}
                    </NavLink>
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
                className="bg-gray-100 text-black hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
              >
                Calls <ChevronDown className="h-4 w-4" />
              </button>

              {/* Calls Dropdown Content */}
              <div 
                className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                  isCallsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {callsDropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({isActive}) =>
                        `${isActive ? 'bg-gray-100 text-blue-800' : 'text-gray-700'}
                        block px-4 py-2 text-sm hover:bg-gray-50`
                      }
                    >
                      {item.name}
                    </NavLink>
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
                className="bg-gray-100 text-black hover:bg-blue-200 hover:text-blue-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"
              >
                More <ChevronDown className="h-4 w-4" />
              </button>

              {/* More Dropdown Content */}
              <div 
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out ${
                  isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-1">
                  {dropdownItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({isActive}) =>
                        `${isActive ? 'bg-gray-100 text-blue-800' : 'text-gray-700'}
                        block px-4 py-2 text-sm hover:bg-gray-50`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Slide from right */}
      <div
        className={`fixed inset-y-0 z-50 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } w-64 bg-black shadow-lg text-white overflow-y-auto transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className='flex justify-end mt-7 mr-4'>
          <button 
            onClick={toggleMenu}
            className="text-gray-100 bg-gray-600 p-2 rounded-md hover:text-gray-500 focus:outline-none"
          >
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="p-1">
          <div className="flex items-center justify-between my-6">
            <div className="flex items-center">
              <div className="pl-4 rounded-lg flex items-center justify-center">
                <Link to="/" className="">
                  <img 
                    src={ReACE_logo} 
                    alt="IEEE Logo" 
                    className="w-[150px] h-auto object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-2 cursor-pointer font-semibold my-5">
            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <NavLink 
                key={item.path}
                to={item.path} 
                className="text-white pl-4 pb-2 block border-gray-800 border-b-1"
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Submission Dropdown */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setIsSubmissionDdOpen(!isSubmissionDdOpen)}
                className="text-white pl-4 pb-2 w-full flex items-center justify-between pr-4"
              >
                <span>Submission</span>
                <ChevronRight className={`h-5 w-5 transform transition-transform ${isSubmissionDdOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isSubmissionDdOpen ? 'max-h-96' : 'max-h-0'}`}>
                {submissionDropdownItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="text-gray-300 pl-8 pb-2 block hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile Calls Dropdown */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setIsMobileCallsOpen(!isMobileCallsOpen)}
                className="text-white pl-4 pb-2 w-full flex items-center justify-between pr-4"
              >
                <span>Calls</span>
                <ChevronRight className={`h-5 w-5 transform transition-transform ${isMobileCallsOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileCallsOpen ? 'max-h-96' : 'max-h-0'}`}>
                {callsDropdownItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="text-gray-300 pl-8 pb-2 block hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile More Dropdown */}
            <div className="border-b border-gray-800">
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="text-white pl-4 pb-2 w-full flex items-center justify-between pr-4"
              >
                <span>More</span>
                <ChevronRight className={`h-5 w-5 transform transition-transform ${isMobileMoreOpen ? 'rotate-90' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileMoreOpen ? 'max-h-96' : 'max-h-0'}`}>
                {dropdownItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="text-gray-300 pl-8 pb-2 block hover:text-white"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;