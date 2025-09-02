import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import "./assets/fonts/tacteng.ttf";
import Hero from "./components/Hero";
import Detail from "./components/Detail";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(34,197,94)_0%,rgb(21,128,61)_70%,rgb(20,83,45)_100%)] transition-all duration-1000"></div>

      <div className="pattern-bg"></div>

      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/15 animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-white/20 animate-float3"></div>

      <div className="relative z-20 flex flex-col items-center justify-center max-w-6xl px-6 py-8 bg-white/1 backdrop-blur-xs rounded-2xl shadow-2xl border border-white/20">
        <span className="absolute top-[128px] bottom-[128px] left-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>
        <span className="absolute top-[128px] bottom-[128px] right-4 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent"></span>

        <span className="absolute top-2 left-2 font-face-gm md:text-9xl animate-fadeIn">
          *
        </span>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-face-gm md:text-8xl animate-fadeIn">&</span>
          <span className="font-face-gm md:text-8xl animate-fadeIn">'</span>
        </div>

        <span className="absolute top-2 right-2 font-face-gm md:text-9xl animate-fadeIn">
          +
        </span>

        <Hero />
        <Detail />

        <span className="absolute bottom-2 left-2 font-face-gm md:text-9xl animate-fadeIn">
          ,
        </span>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex">
          <span className="font-face-gm md:text-8xl animate-fadeIn">(</span>
          <span className="font-face-gm md:text-8xl animate-fadeIn">)</span>
        </div>

        <span className="absolute bottom-2 right-2 font-face-gm md:text-9xl animate-fadeIn">
          -
        </span>
      </div>
    </div>
  </StrictMode>
);
