import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(34,197,94)_0%,rgb(21,128,61)_70%,rgb(20,83,45)_100%)] transition-all duration-1000"></div>

      {/* Pattern overlay (define .pattern-bg in App.css) */}
      <div className="pattern-bg"></div>

      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/15 animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-white/20 animate-float3"></div>

      {/* Content card */}
      <div className="relative z-20 flex flex-col items-center justify-center max-w-md w-full px-6 py-8 bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Welcome!
          </h1>
        </div>
      </div>
    </div>
  </StrictMode>
);
