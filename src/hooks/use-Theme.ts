import { useState, useEffect } from "react";

const useTheme = (): [string, (theme: string) => void] => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "system"
  );

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applySystemTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  // Apply theme on mount
  useEffect(() => {
    applySystemTheme();
  }, []);

  // Apply theme when it changes
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        applySystemTheme();
        break;
    }
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const changeHandler = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        if (e.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
    };

    darkQuery.addEventListener("change", changeHandler);
    return () => {
      darkQuery.removeEventListener("change", changeHandler);
    };
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
