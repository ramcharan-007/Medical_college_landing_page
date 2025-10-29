import React from "react";
import BgGrid from "./bgGrid";

const GridImage = ({
  imageSrc,
  imageAlt = "Professional image",
  className = "",
  showDecorations = true,
  gridColor = "#1e3a8a",
  backgroundColor = "#0f172a",
  decorationOpacity = null,
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dark Blue Grid Background */}
      <BgGrid
        lineColor={gridColor}
        backgroundColor={backgroundColor}
        gridSize={30}
        lineWidth={1}
        fullHeight={false}
        opacity={1}
        className="min-h-[500px]"
      >
        <div className="relative h-full flex items-center justify-center p-8">
          {/* Main Image */}
          {imageSrc && (
            <div className="relative z-20">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-md w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </BgGrid>
    </div>
  );
};

export default GridImage;
