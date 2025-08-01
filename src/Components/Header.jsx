export const Header = () => {
  return (
    <header className="bg-white dark:bg-black shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black dark:text-white">Kemtch19</h1>
      <nav className="space-x-4">
        <a
          href="#about"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Sobre mí
        </a>
        <a
          href="#projects"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Proyectos
        </a>
        <a
          href="#contact"
          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};
