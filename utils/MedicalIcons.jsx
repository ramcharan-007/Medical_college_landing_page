import React, { memo, useMemo } from "react";
import { icons as medicalSvgs } from "./Icons.jsx";

const MedicalIcons = memo(() => {
  // Generate random positions for icons
  const iconKeys = Object.keys(medicalSvgs);
  const icons = useMemo(() => {
    const iconList = [];
    const numberOfIcons = 30; // Adjust this number to control icon density
    for (let i = 0; i < numberOfIcons; i++) {
      const randomX = Math.floor(Math.random() * 100);
      const randomY = Math.floor(Math.random() * 100);
      const randomRotation = Math.floor(Math.random() * 360);
      const randomSize = Math.floor(Math.random() * 20) + 15; // Size between 15-35px
      const randomOpacity = (Math.random() * 0.3 + 0.1).toFixed(2); // Opacity between 0.1-0.4
      const randomIconKey =
        iconKeys[Math.floor(Math.random() * iconKeys.length)];
      iconList.push({
        x: randomX,
        y: randomY,
        rotation: randomRotation,
        size: randomSize,
        opacity: randomOpacity,
        iconKey: randomIconKey,
      });
    }
    return iconList;
  }, [iconKeys]);

  // Render icon from Icons.js, resizing as needed
  const renderIcon = (iconKey, size) => {
    const icon = medicalSvgs[iconKey];
    if (!icon) return null;
    // Clone the SVG element to override width/height
    return React.cloneElement(icon, {
      width: size,
      height: size,
      style: { display: "block" },
    });
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-0 w-full h-full">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
            opacity: icon.opacity,
            color: "#1e40af", // Blue color for medical theme
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {renderIcon(icon.iconKey, icon.size)}
        </div>
      ))}
    </div>
  );
});

export default MedicalIcons;
