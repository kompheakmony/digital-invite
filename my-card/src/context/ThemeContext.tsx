// src/context/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";
import {
  ThemeName,
  Theme,
  themeConfig,
  DEFAULT_THEME,
} from "../config/themeConfig"; // Adjust path if needed

// Define the shape of our context value
interface ThemeContextType {
  currentThemeName: ThemeName;
  currentTheme: Theme;
  setTheme: (name: ThemeName) => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper function to apply CSS variables and body styles
const applyThemeStyles = (theme: Theme) => {
  const root = document.documentElement;
  const body = document.body;

  // Apply CSS variables
  root.style.setProperty("--gold-primary", theme.cssVars.goldPrimary);
  root.style.setProperty("--gold-dark", theme.cssVars.goldDark);
  root.style.setProperty("--gold-light", theme.cssVars.goldLight);
  root.style.setProperty("--gold-lightest", theme.cssVars.goldLightest);
  root.style.setProperty("--gold-medium", theme.cssVars.goldMedium);
  root.style.setProperty("--accent-color", theme.accent); // Add accent to CSS vars if you use it

  // Apply body background gradient
  body.style.backgroundImage = theme.gradient;
  body.style.backgroundAttachment = "fixed"; // Optional: makes background fixed
  body.style.backgroundSize = "cover"; // Optional: ensures gradient covers body
  body.style.backgroundPosition = "center"; // Optional
};

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>(() => {
    // Attempt to load theme from localStorage, or use default
    try {
      const storedTheme = localStorage.getItem("themeName") as ThemeName;
      if (storedTheme && themeConfig[storedTheme]) {
        return storedTheme;
      }
    } catch (error) {
      console.error("Failed to load theme from localStorage:", error);
    }
    return DEFAULT_THEME;
  });

  const currentTheme = themeConfig[currentThemeName];

  // Callback to set the theme and update localStorage
  const setTheme = useCallback((name: ThemeName) => {
    if (themeConfig[name]) {
      setCurrentThemeName(name);
      try {
        localStorage.setItem("themeName", name);
      } catch (error) {
        console.error("Failed to save theme to localStorage:", error);
      }
    } else {
      console.warn(`Theme "${name}" not found. Using default theme.`);
      setCurrentThemeName(DEFAULT_THEME);
      localStorage.setItem("themeName", DEFAULT_THEME);
    }
  }, []);

  // Effect to apply theme styles whenever currentThemeName changes
  useEffect(() => {
    applyThemeStyles(currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentThemeName, currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
