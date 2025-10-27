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

          {/* Decorative Elements */}
          {showDecorations && (
            <>
              {/* Blue Triangular Shapes */}
              <div
                className={`absolute top-10 left-10 w-16 h-16 bg-blue-500 transform rotate-45 rounded-lg z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
              <div
                className={`absolute top-20 right-20 w-12 h-12 bg-blue-400 transform -rotate-12 rounded-lg z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-20 left-20 w-20 h-20 bg-blue-600 transform rotate-12 rounded-lg z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-10 right-32 w-8 h-8 bg-blue-300 transform rotate-45 rounded-lg z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>

              {/* Triangular Elements */}
              <div
                className={`absolute top-32 left-32 w-0 h-0 border-l-20 border-r-20 border-b-35 border-l-transparent border-r-transparent border-b-blue-500 z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-32 right-16 w-0 h-0 border-l-15 border-r-15 border-b-25 border-l-transparent border-r-transparent border-b-blue-400 z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>

              {/* Sparkle Elements */}
              <div className="absolute top-16 right-10 z-10">
                <div className="relative">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-yellow-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="absolute bottom-16 left-16 z-10">
                <div className="relative">
                  <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                  <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border border-yellow-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Golden Star/Sparkle */}
              <div className="absolute top-24 right-24 z-10">
                <svg
                  className="w-8 h-8 text-yellow-400 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Additional Geometric Elements */}
              <div
                className={`absolute top-40 left-8 w-6 h-6 border-2 border-blue-400 rotate-45 z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
              <div
                className={`absolute bottom-40 right-8 w-4 h-4 border-2 border-blue-300 rotate-12 z-10 ${
                  decorationOpacity ? decorationOpacity : ""
                }`}
              ></div>
            </>
          )}
        </div>
      </BgGrid>
    </div>
  );
};

export default GridImage;
