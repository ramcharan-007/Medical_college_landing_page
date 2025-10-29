import React, { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg h-20 items-center flex sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="shrink-0">
              <div className="flex items-center">
                <div className="text-white text-xl font-bold">
                  <span className="text-blue-400">▲▲</span> Miles
                </div>
                <div className="ml-2 text-sm text-gray-300">Education</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent hover:from-yellow-300 hover:to-gray-100 px-3 py-2 text-sm transition-all duration-300"
              >
                Home
              </a>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-bold flex items-center">
                  Accounting
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="#us-cpa"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      U.S. CPA
                    </a>
                    <a
                      href="#us-cma"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      U.S. CMA
                    </a>
                    <a
                      href="#us-pathway"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      U.S. Pathway for Accountants
                    </a>
                    <a
                      href="#ai-accounting"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      AI in Accounting - CAIRA
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-bold flex items-center">
                  Healthcare
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="#usmle"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      USMLE Step 1 & 2
                    </a>
                    <a
                      href="#nursing-programs"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      RN to BSN Programs
                    </a>
                    <a
                      href="#healthcare-admin"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Healthcare Administration
                    </a>
                    <a
                      href="#medical-coding"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Medical Coding & Billing
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-bold flex items-center">
                  Ventures
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="#startup-incubator"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Miles Startup Incubator
                    </a>
                    <a
                      href="#ed-tech-ventures"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      EdTech Ventures
                    </a>
                    <a
                      href="#healthcare-ventures"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Healthcare Ventures
                    </a>
                    <a
                      href="#investment-fund"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Miles Investment Fund
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-bold flex items-center whitespace-nowrap">
                  Hire from Miles
                  <svg
                    className="ml-1 h-4 w-4 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="#campus-recruitment"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Campus Recruitment
                    </a>
                    <a
                      href="#internship-portal"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Internship Portal
                    </a>
                    <a
                      href="#employer-partnerships"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Employer Partnerships
                    </a>
                    <a
                      href="#alumni-network"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Alumni Network
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="text-white hover:text-gray-300 px-3 py-2 text-sm font-bold flex items-center">
                  Resources
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a
                      href="#digital-library"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Digital Library
                    </a>
                    <a
                      href="#study-guides"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Study Guides & Materials
                    </a>
                    <a
                      href="#career-center"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700 border-b border-gray-700"
                    >
                      Career Counseling Center
                    </a>
                    <a
                      href="#student-portal"
                      className="block px-4 py-3 text-sm text-white hover:bg-gray-700"
                    >
                      Student Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700 text-white ml-16 px-4 py-3 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm text-sm font-bold flex items-center transition-colors duration-200">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a
              href="#home"
              className="bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent hover:from-yellow-300 hover:to-gray-100 block px-3 py-2 text-base font-bold transition-all duration-300"
            >
              Home
            </a>
            <button className="text-white hover:text-gray-300 block px-3 py-2 text-base font-bold w-full text-left">
              Accounting
            </button>
            <button className="text-white hover:text-gray-300 block px-3 py-2 text-base font-bold w-full text-left">
              Healthcare
            </button>
            <button className="text-white hover:text-gray-300 block px-3 py-2 text-base font-bold w-full text-left">
              Ventures
            </button>
            <button className="text-white hover:text-gray-300 block px-3 py-2 text-base font-bold w-full text-left">
              Hire from Miles
            </button>
            <button className="text-white hover:text-gray-300 block px-3 py-2 text-base font-bold w-full text-left">
              Resources
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 text-base font-bold w-full text-left rounded-md mt-4">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
