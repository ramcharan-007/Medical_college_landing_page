import React from "react";
import Button from "./Button";

const Card = ({
  title = "Accounting",
  description = "The global economy is in crisis. The Accountant Shortage threatens Capitalism's future.",
  buttonText = "Our Solutions",
  icon,
  titleColor = "text-blue-600",
  onButtonClick,
  className = "",
  showButton = true,
}) => {
  // Default icon if none provided
  const DefaultIcon = () => (
    <div className="w-16 h-16 bg-linear-to-br from-gray-800 to-gray-600 rounded-lg flex items-center justify-center mb-6">
      <div className="grid grid-cols-2 gap-1">
        <div className="w-3 h-3 bg-white rounded-sm"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
        <div className="w-3 h-3 bg-white rounded-sm"></div>
      </div>
    </div>
  );

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${className}`}
    >
      {/* Title */}
      <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>

      {/* Description */}
      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {description}
      </p>

      {/* Icon */}
      <div className="mb-6">{icon ? icon : <DefaultIcon />}</div>

      {/* Button */}
      {showButton && (
        <Button
          text={buttonText}
          onClick={onButtonClick}
          size="md"
          className="w-auto"
        />
      )}
    </div>
  );
};

export default Card;
