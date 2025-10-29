import React from "react";

const ValuesCard = ({
  icon,
  title,
  description,
  iconColor = "text-blue-600",
  iconBg = "bg-blue-100",
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      <div
        className={`w-16 h-16 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}
      >
        <div className={`text-2xl ${iconColor}`}>{icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
    </div>
  );
};

export default ValuesCard;
