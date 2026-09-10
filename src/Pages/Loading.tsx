import { useEffect, useState } from "react";
import type { FC } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: FC<LoadingScreenProps> = ({
  onLoadingComplete,
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const exitTimer = window.setTimeout(() => {
      setIsExiting(true);
    }, 2000);

    // Remove loading screen after exit animation
    const completeTimer = window.setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        transition-opacity
        duration-700
        ${isExiting ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
      style={{
        background: "linear-gradient(135deg, #2428e8 0%, #1719a8 100%)",
        clipPath: isExiting
          ? "circle(0% at 50% 50%)"
          : "circle(100% at 50% 50%)",
        transition:
          "clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-out",
      }}
    >
      {/* Loading Bars */}
      <div className="flex items-center justify-center gap-4">
        {/* Left */}
        <div
          className="w-8 h-16 sm:w-10 sm:h-20 bg-white rounded-full"
          style={{
            animation: "pulse-bar 1.2s ease-in-out infinite",
            animationDelay: "0s",
          }}
        />

        {/* Center */}
        <div
          className="w-8 h-16 sm:w-10 sm:h-20 border-[3px] sm:border-4 border-white rounded-full"
          style={{
            animation: "pulse-bar 1.2s ease-in-out infinite",
            animationDelay: "0.2s",
          }}
        />

        {/* Right */}
        <div
          className="w-8 h-16 sm:w-10 sm:h-20 bg-white rounded-full"
          style={{
            animation: "pulse-bar 1.2s ease-in-out infinite",
            animationDelay: "0.4s",
          }}
        />
      </div>

      <style>{`
        @keyframes pulse-bar {
          0%, 100% {
            transform: scaleY(0.6);
            opacity: 0.7;
          }

          50% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;