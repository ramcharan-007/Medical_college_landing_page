import React, { useState, useEffect } from "react";
import { ShapeSet, Sparkles } from "./GeaometryShapes";

const HeroSectionGrid = ({
  className = "",
  autoRotate = true,
  rotationInterval = 2000,
}) => {
  const categories = [
    {
      id: "accounting",
      name: "Accounting",
      color: "bg-gray-800",
      textColor: "text-white",
      image: "/api/placeholder/300/400", // Replace with actual accounting professional image
      position: { top: "20%", left: "15%" },
    },
    {
      id: "healthcare",
      name: "Healthcare",
      color: "bg-teal-600",
      textColor: "text-white",
      image: "/api/placeholder/300/400", // Replace with actual healthcare professional image
      position: { top: "15%", right: "20%" },
    },
    {
      id: "business",
      name: "Business",
      color: "bg-orange-600",
      textColor: "text-white",
      image: "/api/placeholder/400/300", // Replace with laptop/business image
      position: { bottom: "25%", left: "50%", transform: "translateX(-50%)" },
    },
    {
      id: "tech",
      name: "Tech",
      color: "bg-red-600",
      textColor: "text-white",
      image: "/api/placeholder/300/400", // Replace with VR/tech professional image
      position: { bottom: "20%", right: "15%" },
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    if (!autoRotate) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, categories.length]);

  return (
    <div className={`relative w-full h-[600px] ${className}`}>
      {/* Decorative Background Shapes */}
      <ShapeSet variant="hero" />

      {/* Sparkle Elements */}
      <Sparkles count={4} />

      {/* Healthcare - Top Right */}
      <div className="absolute top-2 right-46 z-20">
        <div className="relative">
          <div
            className={`${
              activeCategory === 1 ? "bg-teal-600" : "bg-gray-700"
            } text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block shadow-lg transition-all duration-500 ${
              activeCategory === 1 ? "scale-110" : "scale-100"
            }`}
          >
            Healthcare
          </div>
          <img
            src="/api/placeholder/200/240"
            alt="Healthcare professional"
            className={`w-48 h-60 rounded-2xl object-cover shadow-xl transition-all duration-500 ${
              activeCategory === 1 ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Accounting - Top Left */}
      <div className="absolute top-36 left-4 z-20">
        <div className="relative">
          <div
            className={`${
              activeCategory === 0 ? "bg-blue-800" : "bg-gray-700"
            } text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block shadow-lg transition-all duration-500 ${
              activeCategory === 0 ? "scale-110" : "scale-100"
            }`}
          >
            Accounting
          </div>
          <img
            src="/api/placeholder/200/240"
            alt="Accounting professional"
            className={`w-48 h-60 rounded-2xl object-cover shadow-xl transition-all duration-500 ${
              activeCategory === 0 ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Business - Center (Laptop) */}
      <div className="absolute bottom-0 right-46 z-30">
        <div className="relative">
          <div
            className={`${
              activeCategory === 2 ? "bg-orange-300" : "bg-gray-700"
            } text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block shadow-lg transition-all duration-500 ${
              activeCategory === 2 ? "scale-110" : "scale-100"
            }`}
          >
            Business
          </div>
          <img
            src="/api/placeholder/320/200"
            alt="Business laptop with analytics"
            className={`w-48 h-60 rounded-2xl object-cover shadow-xl transition-all duration-500 ${
              activeCategory === 2 ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Tech - Bottom Right */}
      <div className="absolute bottom-36 right-4 z-20">
        <div className="relative">
          <div
            className={`${
              activeCategory === 3 ? "bg-red-600" : "bg-gray-700"
            } text-white px-4 py-2 rounded-full text-sm font-semibold mb-3 inline-block shadow-lg transition-all duration-500 ${
              activeCategory === 3 ? "scale-110" : "scale-100"
            }`}
          >
            Tech
          </div>
          <img
            src="/api/placeholder/200/240"
            alt="Tech professional with VR"
            className={`w-48 h-60 rounded-2xl object-cover shadow-xl transition-all duration-500 ${
              activeCategory === 3 ? "scale-105" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Central Dynamic Image Display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={categories[activeCategory].image}
            alt={`${categories[activeCategory].name} professional`}
            className="w-50 h-50 object-cover transition-all duration-1000"
          />

          {/* Image overlay with category color */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent transition-all duration-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionGrid;
