"use client";
import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {}
});

const THEME_STORAGE_KEY = "alidev-theme";

function applyThemeClass(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const remove = theme === "dark" ? "light" : "dark";
  root.classList.remove(remove);
  root.classList.add(theme);
}

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get stored theme or system preference
    let initialTheme: Theme = "dark";
    
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (stored === "light" || stored === "dark") {
        initialTheme = stored;
      } else {
        // Check system preference
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        initialTheme = prefersDark ? "dark" : "light";
      }
    } catch (e) {
      // Fallback to dark theme
      initialTheme = "dark";
    }
    
    setThemeState(initialTheme);
    applyThemeClass(initialTheme);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    if (mounted) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, t);
      } catch (e) {
        // Ignore localStorage errors
      }
      applyThemeClass(t);
    }
  }, [mounted]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme, toggleTheme, setTheme]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const isDark = theme === "dark";
  
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-10 w-10 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 transition-all duration-300 overflow-hidden"
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
        isDark ? "translate-y-0" : "-translate-y-full"
      }`}>
        <FiSun className="h-5 w-5 text-neutral-900 dark:text-white" />
      </div>
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
        isDark ? "translate-y-full" : "translate-y-0"
      }`}>
        <FiMoon className="h-5 w-5 text-neutral-900 dark:text-white" />
      </div>
    </button>
  );
};


