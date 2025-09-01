import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

interface GlobalBackgroundProps {
  children: React.ReactNode;
  opacity?: number;
  patternSize?: number;
}

const GlobalBackgroundStyle = createGlobalStyle<{
  opacity: number;
  patternSize: number;
}>`
  :root {
    --pattern-opacity: ${({ opacity }) => opacity};
    --pattern-size: ${({ patternSize }) => patternSize}px;
    --pattern-image: url('/pkarchan.svg');
    --gradient-start: #e5625c;
    --gradient-end: #2c3e50;
  }

  body {
    margin: 0;
    min-height: 100vh;
    min-height: 100dvh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    overflow-x: hidden;
    
    /* Gradient background */
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    background-attachment: fixed;
    
    /* Pattern overlay */
    &::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: var(--pattern-image);
      background-size: var(--pattern-size) var(--pattern-size);
      background-repeat: repeat;
      opacity: var(--pattern-opacity);
      pointer-events: none;
      z-index: 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  min-height: 100dvh;
  color: white;
  padding: clamp(1rem, 3vw, 2rem);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
`;

const GlobalBackground: React.FC<GlobalBackgroundProps> = ({
  children,
  opacity = 0.15,
  patternSize = 90,
}) => {
  return (
    <>
      <GlobalBackgroundStyle
        opacity={opacity}
        patternSize={patternSize}
      />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

GlobalBackground.displayName = 'GlobalBackground';
export default GlobalBackground;