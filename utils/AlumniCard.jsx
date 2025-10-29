import React, { useState } from "react";

const AlumniCard = ({
  image,
  name,
  testimonial,
  company = "MES CPA",
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedTestimonial =
    testimonial?.length > 80
      ? testimonial.substring(0, 80) + "..."
      : testimonial;

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto relative ${className}`}
    >
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="relative">
          <img
            src={image || "/api/placeholder/80/80"}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
        {name}
      </h3>

      {/* Testimonial */}
      <div className="text-gray-600 text-sm leading-relaxed mb-4">
        <p>{isExpanded ? testimonial : truncatedTestimonial}</p>

        {testimonial?.length > 80 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 hover:text-blue-800 font-medium mt-2 transition-colors duration-200"
          >
            {isExpanded ? "View less" : "View more"}
          </button>
        )}
      </div>

      {/* Company Logo */}
      <div className="flex justify-center">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-full">
          <span className="text-xs font-bold tracking-wider">{company}</span>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
