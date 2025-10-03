import React, { memo } from "react";

const PatternBackground = memo(({ tileSize = "120px" }: { tileSize?: string }) => {
  return (
    <div 
      className="pattern-bg"
    />
  );
});

PatternBackground.displayName = 'PatternBackground';

export default PatternBackground;