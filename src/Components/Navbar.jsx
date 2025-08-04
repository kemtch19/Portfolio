import { useState } from "react";
import "../index.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-black dark:text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          Portafolio
        </h1>

        {/* ICONO MENU MOBILE */}
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden text-3xl"
        >
          ☰
        </div>

        {/* MENU LINKS DESKTOP */}
        <ul className="hidden md:flex gap-8 text-base md:text-lg font-medium items-center">
          <li><a href="#home"    className="hover:text-blue-500 dark:hover:text-blue-300 transition">Inicio</a></li>
          <li><a href="#about"   className="hover:text-blue-500 dark:hover:text-blue-300 transition">Sobre mí</a></li>
          <li><a href="#projects"className="hover:text-blue-500 dark:hover:text-blue-300 transition">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-blue-500 dark:hover:text-blue-300 transition">Contacto</a></li>
        </ul>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 text-base font-medium items-center pb-6 bg-white dark:bg-black transition-all">
          <li><a href="#home"     onClick={() => setOpen(false)}>Inicio</a></li>
          <li><a href="#about"    onClick={() => setOpen(false)}>Sobre mí</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Proyectos</a></li>
          <li><a href="#contact"  onClick={() => setOpen(false)}>Contacto</a></li>
        </ul>
      )}
    </nav>
  );
};
