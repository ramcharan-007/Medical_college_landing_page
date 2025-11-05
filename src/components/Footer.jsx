import React, { useState } from "react";

const Footer = () => {
  const [openDropdowns, setOpenDropdowns] = useState({
    explore: false,
    programs: false,
    locations: false,
  });

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="bg-gray-900 text-white min-h-[550px] flex flex-col">
      {/* Scroll to Top Button */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 py-4 sm:py-8 px-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-2 rounded-full flex items-center justify-center space-x-2 transition-colors duration-300 sm:w-auto w-12 mx-auto sm:mx-0"
          aria-label="Scroll to top of page"
          title="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-sm flex items-center justify-center space-x-2 transition-colors duration-300"
        >
          <span className="text-sm">Scroll to Top</span>
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 lg:gap-40 flex-1">
            {/* Explore Section */}
            <div className="text-center sm:text-left">
              {/* Mobile Dropdown Header */}
              <button
                onClick={() => toggleDropdown("explore")}
                className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-3">
                  Explore
                </h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 sm:hidden ${
                    openDropdowns.explore ? "rotate-180" : ""
                  }`}
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

              {/* Content - Always visible on desktop, collapsible on mobile */}
              <ul
                className={`space-y-1 transition-all duration-300 overflow-hidden ${
                  openDropdowns.explore
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
                }`}
              >
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Alumni
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Programs Section */}
            <div className="text-center sm:text-left">
              {/* Mobile Dropdown Header */}
              <button
                onClick={() => toggleDropdown("programs")}
                className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-3">
                  Programs
                </h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 sm:hidden ${
                    openDropdowns.programs ? "rotate-180" : ""
                  }`}
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

              {/* Content - Always visible on desktop, collapsible on mobile */}
              <ul
                className={`space-y-2 transition-all duration-300 overflow-hidden ${
                  openDropdowns.programs
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
                }`}
              >
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Accounting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Healthcare
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold block py-1"
                  >
                    Ventures
                  </a>
                </li>
              </ul>
            </div>

            {/* Locations Section */}
            <div className="text-center sm:text-left">
              {/* Mobile Dropdown Header */}
              <button
                onClick={() => toggleDropdown("locations")}
                className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-3">
                  Locations
                </h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 sm:hidden ${
                    openDropdowns.locations ? "rotate-180" : ""
                  }`}
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

              {/* Content - Always visible on desktop, collapsible on mobile */}
              <ul
                className={`space-y-2 pt-2 transition-all duration-300 overflow-hidden ${
                  openDropdowns.locations
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
                }`}
              >
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-semibold py-1">
                    Bangalore
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect With Us Section */}
          <div className="pl-40 w-full lg:w-auto lg:min-w-[400px] xl:min-w-[500px] mt-8 lg:mt-0 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left w-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                Connect With Us
              </h3>
              <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Phone */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>

                {/* Twitter/X */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>

              {/* Download App Section */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Download The App</h4>
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-3 xl:space-y-0 xl:space-x-4">
                  <div className="flex flex-col space-y-3 w-full sm:w-auto">
                    {/* App Store Button */}
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 transition-colors duration-300 border border-gray-600 w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">
                          Download on the
                        </div>
                        <div className="text-sm font-semibold">App Store</div>
                      </div>
                    </a>

                    {/* Play Store Button */}
                    <a
                      href="#"
                      className="bg-gray-800 hover:bg-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center space-x-2 sm:space-x-3 transition-colors duration-300 border border-gray-600 w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#4285F4"
                          d="M3.609 1.814L13.792 12L3.609 22.186C3.335 22.460 3 22.186 3 21.814V2.186C3 1.814 3.335 1.540 3.609 1.814Z"
                        />
                        <path
                          fill="#34A853"
                          d="M13.792 12L3.609 1.814C3.791 1.632 4.071 1.632 4.253 1.814L16.405 8.814L13.792 12Z"
                        />
                        <path
                          fill="#FBBC04"
                          d="M13.792 12L16.405 15.186L4.253 22.186C4.071 22.368 3.791 22.368 3.609 22.186L13.792 12Z"
                        />
                        <path
                          fill="#EA4335"
                          d="M13.792 12L16.405 8.814L20.557 11.186C21.147 11.540 21.147 12.460 20.557 12.814L16.405 15.186L13.792 12Z"
                        />
                      </svg>
                      <div className="text-left">
                        <div className="text-xs text-gray-400">GET IT ON</div>
                        <div className="text-sm font-semibold">Play Store</div>
                      </div>
                    </a>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white p-2 sm:p-3 rounded-lg mx-auto sm:mx-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black rounded grid grid-cols-8 gap-0">
                      {/* Simple QR Code pattern */}
                      {Array.from({ length: 64 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-full h-full ${
                            [
                              0, 1, 2, 5, 6, 7, 8, 14, 16, 22, 24, 30, 32, 38,
                              40, 41, 42, 45, 46, 47, 48, 49, 50, 53, 54, 55,
                              56, 62,
                            ].includes(i)
                              ? "bg-black"
                              : "bg-white"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-2">
                      Scan to download
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer with full-width line */}
      <div className="border-t border-gray-700 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm"
              >
                Cookie Policy
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
              © 2025 Miles Education Private Limited. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
