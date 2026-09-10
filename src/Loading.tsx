import { useEffect, useState } from 'react';
import type { FC } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2000);
    const completeTimer = setTimeout(onLoadingComplete, 2800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br from-[#1F23E9] to-[#0D10B8] flex items-center justify-center transition-all duration-700 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        clipPath: isExiting ? 'circle(0% at 50% 50%)' : 'circle(100% at 50% 50%)',
        transition: 'clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out'
      }}
    >
      {/* CSS Loader */}
      <div className="loader"></div>

      {/* Loader Styles */}
      <style>{`
        .loader {
          width: 45px;
          aspect-ratio: 1;
          --c: no-repeat repeating-linear-gradient(
            90deg,
            #ffffff 0 20%,
            #0000 0 40%
          );
          background: 
            var(--c),
            var(--c),
            var(--c),
            var(--c);
          background-size: 100% 26%;
          animation: l22 1.5s infinite;
        }

        @keyframes l22 {
          0% {
            background-position:
              0 -20px,
              0 -20px,
              0 -20px,
              0 -20px;
          }
          12.5% {
            background-position:
              0 -20px,
              0 -20px,
              0 -20px,
              0 calc(3 * 100% / 3);
          }
          25% {
            background-position:
              0 -20px,
              0 -20px,
              0 calc(2 * 100% / 3),
              0 calc(3 * 100% / 3);
          }
          37.5% {
            background-position:
              0 -20px,
              0 calc(1 * 100% / 3),
              0 calc(2 * 100% / 3),
              0 calc(3 * 100% / 3);
          }
          45%,
          50% {
            background-position:
              0 calc(0 * 100% / 3),
              0 calc(1 * 100% / 3),
              0 calc(2 * 100% / 3),
              0 calc(3 * 100% / 3);
          }
          62.5% {
            background-position:
              0 calc(0 * 100% / 3),
              0 calc(1 * 100% / 3),
              0 calc(2 * 100% / 3),
              0 50px;
          }
          75% {
            background-position:
              0 calc(0 * 100% / 3),
              0 calc(1 * 100% / 3),
              0 50px,
              0 50px;
          }
          87.5% {
            background-position:
              0 calc(0 * 100% / 3),
              0 50px,
              0 50px,
              0 50px;
          }
          100% {
            background-position:
              0 50px,
              0 50px,
              0 50px,
              0 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;