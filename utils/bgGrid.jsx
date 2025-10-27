import React from "react";

const BgGrid = ({
  children,
  className = "",
  gridSize = 20,
  lineWidth = 1,
  lineColor = "#e5e7eb",
  backgroundColor = "transparent",
  fullHeight = true,
  opacity = 1,
}) => {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(${lineColor} ${lineWidth}px, transparent ${lineWidth}px),
      linear-gradient(90deg, ${lineColor} ${lineWidth}px, transparent ${lineWidth}px)
    `,
    backgroundSize: `${gridSize}px ${gridSize}px`,
    backgroundColor: backgroundColor,
    opacity: opacity,
  };

  return (
    <div
      className={`relative ${fullHeight ? "min-h-screen" : ""} ${className}`}
      style={gridStyle}
    >
      {/* Content overlay */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BgGrid;
