import React from "react";

// Individual shape components
const Triangle = ({
  size = "w-12 h-12",
  color = "bg-blue-300",
  rotation = "rotate-0",
  opacity = "opacity-70",
  className = "",
}) => {
  return (
    <div
      className={`${size} ${color} ${rotation} ${opacity} ${className}`}
      style={{
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
      }}
    ></div>
  );
};

const Star = ({
  size = "w-6 h-6",
  color = "text-yellow-400",
  className = "",
}) => {
  return (
    <svg
      className={`${size} ${color} ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

const Circle = ({
  size = "w-12 h-12",
  color = "bg-pink-300",
  opacity = "opacity-70",
  className = "",
}) => {
  return (
    <div
      className={`${size} ${color} ${opacity} rounded-full ${className}`}
    ></div>
  );
};

const Square = ({
  size = "w-12 h-12",
  color = "bg-purple-300",
  rotation = "rotate-0",
  opacity = "opacity-70",
  className = "",
}) => {
  return (
    <div
      className={`${size} ${color} ${rotation} ${opacity} rounded-lg ${className}`}
    ></div>
  );
};

const Diamond = ({
  size = "w-12 h-12",
  color = "bg-green-300",
  rotation = "rotate-45",
  opacity = "opacity-70",
  className = "",
}) => {
  return (
    <div
      className={`${size} ${color} ${rotation} ${opacity} rounded-lg ${className}`}
    ></div>
  );
};

// Main GeometryShapes component that can render any shape
const GeometryShapes = ({
  shape = "square",
  size = "w-12 h-12",
  color = "bg-blue-300",
  rotation = "rotate-0",
  opacity = "opacity-70",
  position = "",
  animate = false,
  className = "",
}) => {
  const animationClass = animate ? "animate-pulse" : "";
  const positionClass = position ? `absolute ${position}` : "";
  const combinedClassName = `${positionClass} ${animationClass} ${className}`;

  const renderShape = () => {
    switch (shape.toLowerCase()) {
      case "triangle":
        return (
          <Triangle
            size={size}
            color={color}
            rotation={rotation}
            opacity={opacity}
            className={combinedClassName}
          />
        );
      case "star":
        return <Star size={size} color={color} className={combinedClassName} />;
      case "circle":
        return (
          <Circle
            size={size}
            color={color}
            opacity={opacity}
            className={combinedClassName}
          />
        );
      case "square":
        return (
          <Square
            size={size}
            color={color}
            rotation={rotation}
            opacity={opacity}
            className={combinedClassName}
          />
        );
      case "diamond":
        return (
          <Diamond
            size={size}
            color={color}
            rotation={rotation}
            opacity={opacity}
            className={combinedClassName}
          />
        );
      default:
        return (
          <Square
            size={size}
            color={color}
            rotation={rotation}
            opacity={opacity}
            className={combinedClassName}
          />
        );
    }
  };

  return renderShape();
};

// Pre-configured shape sets for common use cases
const ShapeSet = ({ variant = "default", className = "" }) => {
  const shapeConfigs = {
    default: [
      {
        shape: "diamond",
        size: "w-16 h-16",
        color: "bg-yellow-300",
        position: "top-8 left-8",
        rotation: "rotate-45",
      },
      {
        shape: "triangle",
        size: "w-12 h-12",
        color: "bg-pink-300",
        position: "top-16 right-20",
        rotation: "-rotate-12",
      },
      {
        shape: "circle",
        size: "w-20 h-20",
        color: "bg-cyan-300",
        position: "bottom-32 left-16",
      },
      {
        shape: "square",
        size: "w-14 h-14",
        color: "bg-orange-300",
        position: "bottom-20 right-32",
        rotation: "rotate-45",
      },
      {
        shape: "diamond",
        size: "w-10 h-10",
        color: "bg-purple-300",
        position: "top-32 left-32",
        rotation: "-rotate-45",
      },
      {
        shape: "circle",
        size: "w-8 h-8",
        color: "bg-green-300",
        position: "top-40 right-40",
      },
    ],
    hero: [
      {
        shape: "diamond",
        size: "w-16 h-16",
        color: "bg-yellow-300",
        position: "top-8 left-8",
        rotation: "rotate-45",
      },
      {
        shape: "triangle",
        size: "w-12 h-12",
        color: "bg-pink-300",
        position: "top-16 right-20",
      },
      {
        shape: "square",
        size: "w-20 h-20",
        color: "bg-cyan-300",
        position: "bottom-32 left-16",
        rotation: "rotate-12",
      },
      {
        shape: "circle",
        size: "w-14 h-14",
        color: "bg-orange-300",
        position: "bottom-20 right-32",
      },
      {
        shape: "diamond",
        size: "w-10 h-10",
        color: "bg-purple-300",
        position: "top-32 left-32",
        rotation: "-rotate-45",
      },
      {
        shape: "triangle",
        size: "w-8 h-8",
        color: "bg-green-300",
        position: "top-40 right-40",
        rotation: "rotate-30",
      },
    ],
    minimal: [
      {
        shape: "star",
        size: "w-6 h-6",
        color: "text-yellow-400",
        position: "top-12 right-12",
        animate: true,
      },
      {
        shape: "star",
        size: "w-4 h-4",
        color: "text-yellow-400",
        position: "bottom-24 left-20",
        animate: true,
      },
      {
        shape: "circle",
        size: "w-6 h-6",
        color: "bg-pink-400",
        position: "top-24 left-60",
        rotation: "rotate-45",
      },
      {
        shape: "square",
        size: "w-8 h-8",
        color: "bg-blue-400",
        position: "bottom-40 right-60",
        rotation: "-rotate-12",
      },
    ],
  };

  const shapes = shapeConfigs[variant] || shapeConfigs.default;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {shapes.map((shapeProps, index) => (
        <GeometryShapes key={index} {...shapeProps} />
      ))}
    </div>
  );
};

// Sparkle component for special effects
const Sparkles = ({ count = 4, className = "" }) => {
  const sparklePositions = [
    "top-12 right-12",
    "bottom-24 left-20",
    "top-32 left-24",
    "bottom-12 right-20",
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: count }, (_, index) => (
        <GeometryShapes
          key={index}
          shape="star"
          size={index % 2 === 0 ? "w-6 h-6" : "w-4 h-4"}
          color="text-yellow-400"
          position={sparklePositions[index % sparklePositions.length]}
          animate={true}
        />
      ))}
    </div>
  );
};

export default GeometryShapes;
export { Triangle, Star, Circle, Square, Diamond, ShapeSet, Sparkles };
