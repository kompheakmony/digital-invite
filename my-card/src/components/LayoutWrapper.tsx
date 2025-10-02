import { FC, ReactNode, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

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
      outModes: { default: "out" as const }
    },
    number: {
      value: 10,
      density: { enable: true, width: 1920, height: 1080 }
    },
    opacity: { value: 0.3 },
    shape: {
      type: "image",
      options: {
        image: [{
          src: "/pkarchan.svg",
          width: 32,
          height: 32,
          replaceColor: false
        }]
      }
    },
    size: { value: { min: 10, max: 25 } },
    rotate: {
      value: { min: 0, max: 360 },
      animation: { enable: true, speed: 15, sync: false },
      direction: "random" as const
    },
    roll: { enable: true, speed: 25, mode: "vertical" as const },
    wobble: { enable: true, distance: 10, speed: { angle: 10, move: 10 } }
  }
};

const floatingDecorations = [
  { className: "top-[10%] left-[15%] w-24 h-24 rounded-[50%_0_50%_0] rotate-45 animate-khmer-float-1" },
  { className: "top-[30%] right-[10%] w-20 h-20 rounded-full scale-x-75 rotate-12 blur-xs animate-khmer-float-2" },
  { className: "bottom-[20%] left-[25%] w-28 h-28 rounded-[0_50%_0_50%] -rotate-30 animate-khmer-float-3" },
  { className: "top-[55%] left-[8%] w-16 h-16 rounded-full scale-y-75 -rotate-45 blur-xs animate-khmer-float-1" },
  { className: "bottom-[10%] right-[18%] w-20 h-32 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] rotate-90" }
];

const borderDecorations = {
  top: [
    { char: "*", position: "left-2" },
    { char: "&", position: "left-1/2 -translate-x-4" },
    { char: "'", position: "left-1/2 translate-x-2" },
    { char: "+", position: "right-2" }
  ],
  bottom: [
    { char: ",", position: "left-2" },
    { char: "(", position: "left-1/2 -translate-x-4" },
    { char: ")", position: "left-1/2 translate-x-2" },
    { char: "-", position: "right-2" }
  ]
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
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#15803d_0%,#166534_50%,#052e16_100%)] transition-all duration-1000" />
      
      {/* Particles */}
      {isParticlesInitialized && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}
      
      <div className="pattern-bg" />

      {/* Floating Decorations */}
      {floatingDecorations.map((decoration, index) => (
        <div
          key={index}
          className={`absolute bg-gradient-to-br from-yellow-300/40 to-yellow-600/20 blur-sm ${decoration.className}`}
        />
      ))}

      {/* Main Content Card */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-4 px-4 py-8 
              bg-white/1 backdrop-blur-xs rounded-2xl shadow-2xl border border-yellow-500/40">
        
        {/* Vertical Borders */}
        <span className="absolute top-[128px] bottom-[128px] left-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
        <span className="absolute top-[128px] bottom-[128px] right-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />

        {/* Top Border Decorations */}
        {borderDecorations.top.map((decoration, index) => (
          <span
            key={index}
            className={`absolute top-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn ${decoration.position}`}
          >
            {decoration.char}
          </span>
        ))}

        {/* Children Content */}
        {children}

        {/* Bottom Border Decorations */}
        {borderDecorations.bottom.map((decoration, index) => (
          <span
            key={index}
            className={`absolute bottom-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn ${decoration.position}`}
          >
            {decoration.char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LayoutWrapper;