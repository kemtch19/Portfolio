import { useEffect, useState } from "react";
import "../index.css";

export const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    // Detecta tema guardado o preferencia del sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // ✅ Aplica el tema cuando cambia el estado
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="bg-white dark:bg-black dark:text-white shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Portafolio</h1>
        <ul className="flex gap-6 text-sm md:text-base items-center">
          <li>
            <a href="#home" className="hover:text-blue-500 dark:hover:text-blue-300">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 dark:hover:text-blue-300">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 dark:hover:text-blue-300">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300">
              Contacto
            </a>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-xl transition"
              title="Cambiar modo oscuro"
            >
              {isDark ? "🌞" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
