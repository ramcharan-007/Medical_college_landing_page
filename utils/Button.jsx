import React, { useState } from "react";

const Button = ({
  text = "Learn More",
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  showArrow = true,
  btnClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    outline: "border-2 border-blue-600 hover:border-blue-700",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <div
      className={`inline-flex items-center gap-3 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Arrow Button - Separate circular button */}
      {showArrow && (
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
          w-12 h-12 rounded-full flex items-center justify-center
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${
            variant === "primary"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : ""
          }
          ${
            variant === "secondary"
              ? "bg-gray-600 hover:bg-gray-700 text-white"
              : ""
          }
          ${
            variant === "outline"
              ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              : ""
          }
        `}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-1000 ease-out ${
              isHovered ? "rotate-0" : "rotate-[-45deg]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Learn More Button - Separate rectangular button */}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          ${btnClassName}
          whitespace-nowrap
          rounded-md font-semibold transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${isHovered ? "rounded-bl-xs" : ""}
          ${sizes[size]}
          ${
            variant === "primary"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : ""
          }
          ${
            variant === "secondary"
              ? "bg-gray-600 hover:bg-gray-700 text-white"
              : ""
          }
          ${
            variant === "outline"
              ? "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              : ""
          }
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
