import { FC, ReactNode, useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import PatternBackground from "./PatternBackground";
import TopLeft from "./kbach/TopLeft";
import TopRight from "./kbach/TopRight";
import BottomLeft from "./kbach/BottomLeft";
import BottomRight from "./kbach/BottomRight";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

interface LayoutWrapperProps {
  children: ReactNode;
}

const generateGradientFromColor = (
  color: string,
  startOpacity: number,
  endOpacity: number
) => {
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgb = hexToRgb(color);
  return `linear-gradient(to top right, rgba(${rgb}, ${startOpacity}) 0%, rgba(${rgb}, ${endOpacity}) 100%)`;
};

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
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      outModes: { default: "out" },
    },
    number: { value: 10, density: { enable: true, width: 1920, height: 1080 } },
    opacity: { value: 0.3 },
    shape: {
      type: "image",
      options: {
        image: [
          { src: "/pkarchan.svg", width: 32, height: 32, replaceColor: false },
        ],
      },
    },
    size: { value: { min: 10, max: 25 } },
    rotate: {
      value: { min: 0, max: 360 },
      animation: { enable: true, speed: 15 },
      direction: "random",
    },
    roll: { enable: true, speed: 25, mode: "vertical" },
    wobble: { enable: true, distance: 10, speed: { angle: 10, move: 10 } },
  },
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const [isParticlesInitialized, setIsParticlesInitialized] = useState(false);
  const { currentTheme } = useTheme(); // Consume theme from context

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setIsParticlesInitialized(true);
    };
    initParticles();
  }, []);

  // Effect to ensure body background is transparent when LayoutWrapper manages it
  useEffect(() => {
    document.body.style.backgroundImage = "none"; // Clear background from ThemeProvider
    document.body.style.backgroundColor = "transparent"; // Ensure no default color
    // LayoutWrapper's absolute div will handle the main background
    return () => {
      // Potentially reset body background if LayoutWrapper is unmounted
      // This is a complex decision and depends on your app structure.
      // For a full-page layout, it might be fine to leave it as 'none'.
    };
  }, []);

  // Use the accent color for dynamic orb gradients
  const orbGradient1 = useMemo(
    () => generateGradientFromColor(currentTheme.accent, 0.4, 0.2),
    [currentTheme.accent]
  );
  const orbGradient2 = useMemo(
    () => generateGradientFromColor(currentTheme.accent, 0.35, 0.25),
    [currentTheme.accent]
  );
  const orbGradient3 = useMemo(
    () => generateGradientFromColor(currentTheme.accent, 0.3, 0.15),
    [currentTheme.accent]
  );
  const orbGradient4 = useMemo(
    () => generateGradientFromColor(currentTheme.accent, 0.3, 0.2),
    [currentTheme.accent]
  );
  const orbGradient5 = useMemo(
    () => generateGradientFromColor(currentTheme.accent, 0.25, 0.15),
    [currentTheme.accent]
  );

  return (
    <div className="min-h-screen w-full overflow-hidden relative flex items-center justify-center">
      {/* Dynamic background based on the current theme's gradient */}
      <div
        key={currentTheme.gradient} // Key allows re-render on gradient change for transition
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: currentTheme.gradient,
          transition: "background 0.8s ease-in-out",
        }}
      />

      {isParticlesInitialized && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}

      <PatternBackground />

      {/* Floating Orbs - dynamically colored with selected.accent */}
      <div
        className="absolute top-[10%] left-[15%] w-24 h-24 rounded-[50%_0_50%_0] transform rotate-45 blur-sm animate-khmer-float-1"
        style={{ background: orbGradient1 }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-20 h-20 rounded-full blur-xs animate-khmer-float-2"
        style={{ background: orbGradient2 }}
      />
      <div
        className="absolute bottom-[20%] left-[25%] w-28 h-28 rounded-[0_50%_0_50%] transform -rotate-30 blur-sm animate-khmer-float-3"
        style={{ background: orbGradient3 }}
      />
      <div
        className="absolute top-[55%] left-[8%] w-16 h-16 rounded-full blur-xs animate-khmer-float-1"
        style={{ background: orbGradient4 }}
      />
      <div
        className="absolute bottom-[10%] right-[18%] w-20 h-32 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-90 blur-sm animate-khmer-float-2"
        style={{ background: orbGradient5 }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl px-2 py-8 backdrop-blur-xs rounded-2xl shadow-2xl border"
        style={{ borderColor: `${currentTheme.accent}40` }}
      >
        <span
          className="absolute top-[128px] bottom-[128px] left-4 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent, ${currentTheme.accent}, transparent)`,
          }}
        />
        <span
          className="absolute top-[128px] bottom-[128px] right-4 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent, ${currentTheme.accent}, transparent)`,
          }}
        />
        <TopLeft color={currentTheme.accent} />
        <TopRight color={currentTheme.accent} />
        {children}
        <BottomLeft color={currentTheme.accent} />
        <BottomRight color={currentTheme.accent} />
      </div>
    </div>
  );
};

export default LayoutWrapper;
