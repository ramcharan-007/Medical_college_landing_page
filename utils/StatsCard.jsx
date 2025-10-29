import React from "react";

const StatsCard = ({
  number,
  label,
  color = "text-blue-600",
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-lg text-center ${className}`}
    >
      <div className={`text-4xl sm:text-5xl font-bold mb-2 ${color}`}>
        {number}
      </div>
      <div className="text-gray-600 font-medium text-lg">{label}</div>
    </div>
  );
};

export default StatsCard;
