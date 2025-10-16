import { FC, ReactNode, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import PatternBackground from "./PatternBackground";

interface LayoutWrapperProps {
  children: ReactNode;
}

const particlesOptions: ISourceOptions = {
  autoPlay: true,
  background: { color: { value: "transparent" } },
  detectRetina: true,
  fpsLimit: 120,
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
  zLayers: 100,
  particles: {
    effect: { close: true, fill: true },
    move: {
      enable: true,
      speed: 2,
      direction: "none" as const,
      outModes: { default: "out" as const },
    },
    number: {
      value: 10,
      density: { enable: true, width: 1920, height: 1080 },
    },
    opacity: { value: 0.3 },
    shape: {
      type: "image",
      options: {
        image: [
          {
            src: "/pkarchan.svg",
            width: 32,
            height: 32,
            replaceColor: false,
          },
        ],
      },
    },
    size: { value: { min: 10, max: 25 } },
    rotate: {
      value: { min: 0, max: 360 },
      animation: { enable: true, speed: 15, sync: false },
      direction: "random" as const,
    },
    roll: { enable: true, speed: 25, mode: "vertical" as const },
    wobble: { enable: true, distance: 10, speed: { angle: 10, move: 10 } },
  },
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [isParticlesInitialized, setIsParticlesInitialized] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setIsParticlesInitialized(true);
    };

    initializeParticles();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center">
      {/* Green */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#15803d_0%,#166534_50%,#052e16_100%)] transition-all duration-1000" /> */}

      {/* Red */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#6f0000_0%,#200122_100%)] transition-all duration-1000" />

      {/* Blue */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#004e92_0%,#000428_100%)] transition-all duration-1000" /> */}

      {/* Rose Gold */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#dbe6f6_0%,#c5796d_100%)] transition-all duration-1000" /> */}

      {/* Peach */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffedbc_0%,#ed4264_100%)] transition-all duration-1000" /> */}

      {isParticlesInitialized && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}

      <PatternBackground />

      <div className="absolute top-[10%] left-[15%] w-24 h-24 bg-gradient-to-br from-yellow-300/40 to-yellow-600/20 rounded-[50%_0_50%_0] transform rotate-45 blur-sm animate-khmer-float-1 origin-center"></div>

      <div className="absolute top-[30%] right-[10%] w-20 h-20 bg-gradient-to-tl from-yellow-400/35 to-yellow-700/25 rounded-full shadow-lg transform scale-x-75 rotate-12 blur-xs animate-khmer-float-2 origin-center"></div>
      <div className="absolute bottom-[20%] left-[25%] w-28 h-28 bg-gradient-to-tl from-yellow-200/30 to-yellow-500/15 rounded-[0_50%_0_50%] transform -rotate-30 blur-sm animate-khmer-float-3 origin-center"></div>
      <div className="absolute top-[55%] left-[8%] w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-yellow-800/20 rounded-full shadow-md transform scale-y-75 -rotate-45 blur-xs animate-khmer-float-1 origin-center"></div>
      <div className="absolute bottom-[10%] right-[18%] w-20 h-32 bg-gradient-to-t from-yellow-600/25 to-yellow-300/15 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-90 blur-sm animate-khmer-float-2 origin-center"></div>

      <div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl px-2 py-8 
          bg-green/1 backdrop-blur-xs rounded-2xl shadow-2xl border border-yellow-500/40"
      >
        <span className="absolute top-[128px] bottom-[128px] left-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>
        <span className="absolute top-[128px] bottom-[128px] right-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>

        <span className="absolute top-2 left-2 font-tacteng text-6xl md:text-9xl text-yellow-500/80 animate-fadeIn">
          *
        </span>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-tacteng text-5xl md:text-8xl text-yellow-500/80 animate-fadeIn">
            &
          </span>
          <span className="font-tacteng text-5xl md:text-8xl text-yellow-500/80 animate-fadeIn">
            '
          </span>
        </div>
        <span className="absolute top-2 right-2 font-tacteng text-6xl md:text-9xl text-yellow-500/80 animate-fadeIn">
          +
        </span>

        {children}

        <span className="absolute bottom-2 left-2 font-tacteng text-6xl md:text-9xl text-yellow-500/80 animate-fadeIn">
          ,
        </span>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-tacteng text-5xl md:text-8xl text-yellow-500/80 animate-fadeIn">
            (
          </span>
          <span className="font-tacteng text-5xl md:text-8xl text-yellow-500/80 animate-fadeIn">
            )
          </span>
        </div>
        <span className="absolute bottom-2 right-2 font-tacteng text-6xl md:text-9xl text-yellow-500/80 animate-fadeIn">
          -
        </span>
      </div>
    </div>
  );
};

export default LayoutWrapper;
