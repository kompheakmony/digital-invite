import { FC, ReactNode, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface LayoutWrapperProps {
  children: ReactNode;
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#15803d_0%,#166534_50%,#052e16_100%)] transition-all duration-1000"></div>
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            background: { color: "transparent" },
            //   background: {
            //   color: "#000",
            //   repeat: "no-repeat",
            //   size: "40%",
            //   position: "60% 50%"
            // },
            particles: {
              color: { value: ["#FFD700", "#E6B422", "#FFDF00"] },
              move: {
                direction: "none",
                enable: true,
                outModes: "out",
                random: true,
                speed: 0.2
              },
              number: {
                density: { enable: true },
                value: 120
              },
              opacity: {
                animation: {
                  enable: true,
                  speed: 0.3,
                  sync: false
                },
                value: { min: 0, max: 0.2 }
              },
              size: {
                value: { min: 5, max: 10 },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false
                }
              },
              shape: {
                type: ["circle"],
                options: {
                  star: {
                    sides: 4, // creates a diamond shape
                    inset: 2
                  },
                  polygon: {
                    sides: 6 // hexagon
                  }
                }
              }
            }
          }}
        />
      )}
      <div className="pattern-bg" />

      <div className="absolute top-[10%] left-[15%] w-24 h-24 bg-gradient-to-br from-yellow-300/40 to-yellow-600/20 rounded-[50%_0_50%_0] transform rotate-45 blur-sm animate-khmer-float-1 origin-center"></div>

      <div className="absolute top-[30%] right-[10%] w-20 h-20 bg-gradient-to-tl from-yellow-400/35 to-yellow-700/25 rounded-full shadow-lg transform scale-x-75 rotate-12 blur-xs animate-khmer-float-2 origin-center"></div>
      <div className="absolute bottom-[20%] left-[25%] w-28 h-28 bg-gradient-to-tl from-yellow-200/30 to-yellow-500/15 rounded-[0_50%_0_50%] transform -rotate-30 blur-sm animate-khmer-float-3 origin-center"></div>
      <div className="absolute top-[55%] left-[8%] w-16 h-16 bg-gradient-to-br from-yellow-500/30 to-yellow-800/20 rounded-full shadow-md transform scale-y-75 -rotate-45 blur-xs animate-khmer-float-1 origin-center"></div>
      <div className="absolute bottom-[10%] right-[18%] w-20 h-32 bg-gradient-to-t from-yellow-600/25 to-yellow-300/15 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-90 blur-sm animate-khmer-float-2 origin-center"></div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl mx-4 px-4 py-8 
              bg-white/1 backdrop-blur-xs rounded-2xl shadow-2xl border border-yellow-500/40">
        <span className="absolute top-[128px] bottom-[128px] left-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>
        <span className="absolute top-[128px] bottom-[128px] right-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>

        <span className="absolute top-2 left-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn">*</span>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-tacteng md:text-8xl text-yellow-500/80 animate-fadeIn">&</span>
          <span className="font-tacteng md:text-8xl text-yellow-500/80 animate-fadeIn">'</span>
        </div>
        <span className="absolute top-2 right-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn">+</span>

        {children}

        <span className="absolute bottom-2 left-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn">,</span>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-tacteng md:text-8xl text-yellow-500/80 animate-fadeIn">(</span>
          <span className="font-tacteng md:text-8xl text-yellow-500/80 animate-fadeIn">)</span>
        </div>
        <span className="absolute bottom-2 right-2 font-tacteng md:text-9xl text-yellow-500/80 animate-fadeIn">-</span>
      </div>
    </div>
  );
};

export default LayoutWrapper;