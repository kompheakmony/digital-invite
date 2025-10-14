import React, { memo } from "react";
import holKhmerPattern from "/hol-khmer.svg";

const PatternBackground = memo(() => {
  const style: React.CSSProperties = {
    ["--bg-url" as any]: `url(${holKhmerPattern})`,
    ["--tile-size" as any]: "100px",
  };

  return <div className="pattern-bg" style={style} />;
});

PatternBackground.displayName = "PatternBackground";
export default PatternBackground;
