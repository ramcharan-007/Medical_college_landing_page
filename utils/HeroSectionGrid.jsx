import React, { useState, useEffect } from "react";

const HeroSectionGrid = ({
  className = "",
  autoRotate = true,
  rotationInterval = 3000,
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

  // Decorative triangular shapes
  const decorativeShapes = [
    {
      color: "bg-blue-300",
      size: "w-16 h-16",
      position: "top-10 left-10",
      rotation: "rotate-45",
    },
    {
      color: "bg-pink-300",
      size: "w-12 h-12",
      position: "top-20 right-32",
      rotation: "-rotate-12",
    },
    {
      color: "bg-yellow-300",
      size: "w-20 h-20",
      position: "bottom-32 left-20",
      rotation: "rotate-12",
    },
    {
      color: "bg-green-300",
      size: "w-14 h-14",
      position: "bottom-16 right-40",
      rotation: "rotate-45",
    },
    {
      color: "bg-purple-300",
      size: "w-10 h-10",
      position: "top-40 left-40",
      rotation: "-rotate-45",
    },
    {
      color: "bg-indigo-300",
      size: "w-8 h-8",
      position: "bottom-40 left-60",
      rotation: "rotate-30",
    },
  ];

  // Sparkle elements
  const sparkles = [
    { position: "top-16 right-16", size: "w-6 h-6" },
    { position: "bottom-24 left-32", size: "w-4 h-4" },
    { position: "top-32 left-24", size: "w-5 h-5" },
    { position: "bottom-12 right-20", size: "w-3 h-3" },
  ];

  return (
    <div className={`relative overflow-hidden min-h-[600px] ${className}`}>
      <div className="relative h-full min-h-[600px]">
        {/* Decorative Background Shapes */}
        {decorativeShapes.map((shape, index) => (
          <div
            key={index}
            className={`absolute ${shape.size} ${shape.color} ${shape.position} ${shape.rotation} opacity-60 rounded-lg transform transition-all duration-500`}
          />
        ))}

        {/* Sparkle Elements */}
        {sparkles.map((sparkle, index) => (
          <div key={index} className={`absolute ${sparkle.position} z-20`}>
            <svg
              className={`${sparkle.size} text-yellow-400 animate-pulse`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        ))}

        {/* Dynamic Images and Labels */}
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`absolute transition-all duration-1000 ease-in-out z-10 ${
              index === activeCategory
                ? "opacity-100 scale-100"
                : "opacity-30 scale-95"
            }`}
            style={category.position}
          >
            {/* Category Label */}
            <div
              className={`${category.color} ${
                category.textColor
              } px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block shadow-lg transform transition-all duration-500 ${
                index === activeCategory ? "scale-110" : "scale-100"
              }`}
            >
              {category.name}
            </div>

            {/* Professional Image */}
            <div className="relative">
              <img
                src={category.image}
                alt={`${category.name} professional`}
                className={`rounded-lg shadow-xl transition-all duration-1000 ${
                  index === activeCategory ? "scale-105" : "scale-100"
                } ${
                  category.id === "business" ? "w-80 h-60" : "w-48 h-64"
                } object-cover`}
              />

              {/* Image overlay effect */}
              <div
                className={`absolute inset-0 rounded-lg transition-all duration-1000 ${
                  index === activeCategory
                    ? "bg-linear-to-t from-black/20 to-transparent"
                    : "bg-gray-500/40"
                }`}
              />
            </div>
          </div>
        ))}

        {/* Manual Controls (Optional) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCategory
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionGrid;
