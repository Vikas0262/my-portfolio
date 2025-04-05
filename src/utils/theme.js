export const colors = {
  // Primary Colors - Deep Navy
  primary: '#0a192f',
  primaryLight: '#112240',
  primaryDark: '#020c1b',

  // Secondary Colors - Teal
  secondary: '#64ffda',
  secondaryLight: '#88ffE5',
  secondaryDark: '#4AC7A7',

  // Accent Colors - Slate
  accent: '#8892b0',
  accentLight: '#a8b2d1',
  accentDark: '#495670',

  // Light Theme Colors
  light: {
    background: {
      primary: '#ffffff',
      secondary: '#f6f9fc',
      tertiary: '#edf2f7'
    },
    text: {
      primary: '#0a192f',
      secondary: '#495670',
      tertiary: '#8892b0'
    },
    border: {
      primary: '#e2e8f0',
      secondary: '#edf2f7'
    },
    shadow: {
      primary: 'rgba(10, 25, 47, 0.1)',
      hover: 'rgba(100, 255, 218, 0.2)'
    }
  },

  // Dark Theme Colors
  dark: {
    background: {
      primary: '#0a192f',
      secondary: '#112240',
      tertiary: '#1a365d'
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#a8b2d1',
      tertiary: '#8892b0'
    },
    border: {
      primary: '#1a365d',
      secondary: '#233554'
    },
    shadow: {
      primary: 'rgba(2, 12, 27, 0.7)',
      hover: 'rgba(100, 255, 218, 0.1)'
    }
  },

  // Gradient Colors
  gradients: {
    primary: 'linear-gradient(120deg, #0a192f, #112240)',
    accent: 'linear-gradient(120deg, #64ffda, #88ffE5)',
    darkMode: 'linear-gradient(120deg, #020c1b, #0a192f)',
    lightMode: 'linear-gradient(120deg, #ffffff, #f6f9fc)',
    glass: 'linear-gradient(125deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
  },

  // Status Colors
  status: {
    success: '#64ffda',
    error: '#ff6b6b',
    warning: '#ffd93d',
    info: '#6be0ff'
  },

  // Social Media Colors with Custom Professional Overlay
  social: {
    github: '#0a192f',
    linkedin: '#0a66c2',
    twitter: '#1da1f2',
    instagram: '#e4405f'
  }
};

export const getThemeColors = (isDark = false) => {
  return {
    ...colors,
    current: isDark ? colors.dark : colors.light,
    mode: isDark ? 'dark' : 'light'
  };
};

// CSS Variables generator
export const generateCssVariables = (isDark = false) => {
  const theme = getThemeColors(isDark);
  return {
    '--color-primary': colors.primary,
    '--color-primary-light': colors.primaryLight,
    '--color-primary-dark': colors.primaryDark,
    '--color-secondary': colors.secondary,
    '--color-secondary-light': colors.secondaryLight,
    '--color-secondary-dark': colors.secondaryDark,
    '--color-accent': colors.accent,
    '--color-accent-light': colors.accentLight,
    '--color-accent-dark': colors.accentDark,
    '--color-bg-primary': theme.current.background.primary,
    '--color-bg-secondary': theme.current.background.secondary,
    '--color-bg-tertiary': theme.current.background.tertiary,
    '--color-text-primary': theme.current.text.primary,
    '--color-text-secondary': theme.current.text.secondary,
    '--color-text-tertiary': theme.current.text.tertiary,
    '--color-border-primary': theme.current.border.primary,
    '--color-border-secondary': theme.current.border.secondary,
    '--color-shadow-primary': theme.current.shadow.primary,
    '--color-shadow-hover': theme.current.shadow.hover,
    '--gradient-primary': colors.gradients.primary,
    '--gradient-accent': colors.gradients.accent,
    '--gradient-theme': isDark ? colors.gradients.darkMode : colors.gradients.lightMode,
    '--gradient-glass': colors.gradients.glass
  };
}; 