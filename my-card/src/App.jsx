import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(34,197,94)_0%,rgb(21,128,61)_70%,rgb(20,83,45)_100%)] transition-all duration-1000"></div>

      <div className="pattern-bg"></div>

      <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white/10 animate-float1"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/15 animate-float2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-white/20 animate-float3"></div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full min-w-4xl px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fadeIn">
              Welcome!
            </h1>
            <p className="text-xl text-white/90 mb-2">{formattedTime}</p>
            <p className="text-lg text-white/80">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
