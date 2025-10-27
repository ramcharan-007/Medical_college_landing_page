import React from "react";

const Button = ({
  text = "Learn More",
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseClasses =
    "inline-flex items-center gap-3 font-medium transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} group`}
    >
      {/* Icon Circle */}
      <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-opacity-30">
        {/* Arrow Icon - changes from diagonal to horizontal on hover */}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Default diagonal arrow */}
          <path
            className="transition-opacity duration-300 group-hover:opacity-0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7V17"
          />
          {/* Hover horizontal arrow */}
          <path
            className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14m-7-7l7 7-7 7"
          />
        </svg>
      </div>

      {/* Button Text */}
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default Button;
