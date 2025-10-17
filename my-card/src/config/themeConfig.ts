export type ThemeName = 'red' | 'green' | 'blue' | 'roseGold' | 'peach';

export interface Theme {
  gradient: string;
  accent: string;
  cssVars: {
    goldPrimary: string;
    goldDark: string;
    goldLight: string;
    goldLightest: string;
    goldMedium: string;
  };
}

export const themeConfig: Record<ThemeName, Theme> = {
  red: {
    gradient: "radial-gradient(ellipse at center, #6f0000 0%, #200122 100%)",
    accent: "#efbf04",
    cssVars: {
      goldPrimary: "#efbf04",
      goldDark: "#dda20c",
      goldLight: "#ffd700",
      goldLightest: "#fffacd",
      goldMedium: "#ffdf00",
    },
  },
  green: {
    gradient:
      "radial-gradient(ellipse at center, #15803d 0%, #166534 50%, #052e16 100%)",
    accent: "#efbf04",
    cssVars: {
      goldPrimary: "#efbf04",
      goldDark: "#dda20c",
      goldLight: "#ffd700",
      goldLightest: "#fffacd",
      goldMedium: "#ffdf00",
    },
  },
  blue: {
    gradient: "radial-gradient(ellipse at center, #004e92 0%, #000428 100%)",
    accent: "#efbf04",
    cssVars: {
      goldPrimary: "#efbf04",
      goldDark: "#dda20c",
      goldLight: "#ffd700",
      goldLightest: "#fffacd",
      goldMedium: "#ffdf00",
    },
  },
  roseGold: {
    gradient: "radial-gradient(ellipse at center, #dbe6f6 0%, #c5796d 100%)",
    accent: "#5d2f40",
    cssVars: {
      goldPrimary: "#5d2f40",
      goldDark: "#4a2533",
      goldLight: "#8b4f62",
      goldLightest: "#b8849a",
      goldMedium: "#745142",
    },
  },
  peach: {
    gradient: "radial-gradient(ellipse at center, #ffedbc 0%, #ed4264 100%)",
    accent: "#5d2f40",
    cssVars: {
      goldPrimary: "#5d2f40",
      goldDark: "#4a2533",
      goldLight: "#8b4f62",
      goldLightest: "#b8849a",
      goldMedium: "#745142",
    },
  },
};

export const DEFAULT_THEME: ThemeName = 'peach';

export const getTheme = (themeName: ThemeName = DEFAULT_THEME): Theme => {
  return themeConfig[themeName];
};