export const Header = () => {
  // 🧠 Logic

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Kemtch19</h1>
      <nav className="space-x-4">
        <a href="#about" className="text-gray-700 hover:text-black">
          Sobre mí
        </a>
        <a href="#projects" className="text-gray-700 hover:text-black">
          Proyectos
        </a>
        <a href="#contact" className="text-gray-700 hover:text-black">
          Contacto
        </a>
      </nav>
    </header>
  );
};
