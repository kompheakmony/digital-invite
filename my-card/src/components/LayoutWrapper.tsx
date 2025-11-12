import { FC, ReactNode, useEffect, useMemo, useRef } from "react";
import {
  motion,
  useScroll,
  useMotionValue,
  useMotionValueEvent,
  animate,
  type MotionValue,
} from "framer-motion";
import PatternBackground from "./PatternBackground";
import TopLeft from "./kbach/TopLeft";
import TopRight from "./kbach/TopRight";
import BottomLeft from "./kbach/BottomLeft";
import BottomRight from "./kbach/BottomRight";
import { useTheme } from "../context/ThemeContext";

const top = `0%`;
const bottom = `100%`;
const topInset = `15%`;
const bottomInset = `85%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollYProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(to bottom, ${opaque} ${top}, ${opaque} ${bottomInset}, ${transparent} ${bottom})`
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const isAtTop = value === 0;
    const isAtBottom = value === 1;
    const wasAtAnEdge =
      scrollYProgress.getPrevious() === 0 ||
      scrollYProgress.getPrevious() === 1;

    if (isAtTop) {
      animate(
        maskImage,
        `linear-gradient(to bottom, ${opaque} ${top}, ${opaque} ${bottomInset}, ${transparent} ${bottom})`,
        { duration: 0.2, ease: "easeOut" }
      );
    } else if (isAtBottom) {
      animate(
        maskImage,
        `linear-gradient(to bottom, ${transparent} ${top}, ${opaque} ${topInset}, ${opaque} ${bottom})`,
        { duration: 0.2, ease: "easeOut" }
      );
    } else if (wasAtAnEdge) {
      animate(
        maskImage,
        `linear-gradient(to bottom, ${transparent} ${top}, ${opaque} ${topInset}, ${opaque} ${bottomInset}, ${transparent} ${bottom})`,
        { duration: 0.2, ease: "easeOut" }
      );
    } else {
      maskImage.set(
        `linear-gradient(to bottom, ${transparent} ${top}, ${opaque} ${topInset}, ${opaque} ${bottomInset}, ${transparent} ${bottom})`
      );
    }
  });

  return maskImage;
}

const StyleSheet = () => (
  <style>{`
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }
  `}</style>
);

interface LayoutWrapperProps {
  children: ReactNode;
}

const generateGradientFromColor = (
  color: string,
  startOpacity: number,
  endOpacity: number
) => {
  const hexToRgb = (hex: string) => {
    if (!hex || hex.length < 4) return "255, 255, 255";
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const rgb = hexToRgb(color);
  return `linear-gradient(to top right, rgba(${rgb}, ${startOpacity}) 0%, rgba(${rgb}, ${endOpacity}) 100%)`;
};

const LayoutWrapper: FC<LayoutWrapperProps> = ({ children }) => {
  const { currentTheme } = useTheme();
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const maskImage = useScrollOverflowMask(scrollYProgress);

  useEffect(() => {
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "transparent";
  }, []);

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
    <div className="w-full overflow-hidden relative flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{ background: currentTheme.gradient }}
      />

      <PatternBackground />

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
        className="absolute bottom-[10%] right-[18%] w-20 h-32 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform -rotate-90 blur-sm animate-khmer-float-2"
        style={{ background: orbGradient5 }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-3xl px-4 py-8 backdrop-blur-xs rounded-2xl shadow-2xl border"
        style={{ borderColor: `${currentTheme.accent}40` }}
      >
        <span
          className="absolute top-[270px] bottom-[270px] left-4 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent, ${currentTheme.accent}, transparent)`,
          }}
        />
        <span
          className="absolute top-[270px] bottom-[270px] right-4 w-px"
          style={{
            background: `linear-gradient(to bottom, transparent, ${currentTheme.accent}, transparent)`,
          }}
        />
        <TopLeft color={currentTheme.accent} />
        <TopRight color={currentTheme.accent} />
        <div className="relative w-full h-[78vh] md:h-[92vh]">
          <motion.ul
            ref={ref}
            className="h-full list-none overflow-y-scroll space-y-4 scrollbar-hide"
            style={{
              maskImage,
              WebkitMaskImage: maskImage,
            }}
          >
            {children}
          </motion.ul>
          <StyleSheet />
        </div>
        <BottomLeft color={currentTheme.accent} />
        <BottomRight color={currentTheme.accent} />
      </div>
    </div>
  );
};

export default LayoutWrapper;
