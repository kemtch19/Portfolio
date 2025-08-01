import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:scale-110 transition"
      aria-label="Toggle dark mode"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};
