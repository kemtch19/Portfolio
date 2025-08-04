import "../index.css";

export const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-black dark:text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
          Portafolio
        </h1>

        <ul className="flex gap-8 text-base md:text-lg font-medium items-center">
          <li>
            <a
              href="#home"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
