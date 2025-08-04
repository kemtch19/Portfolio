import { FaDownload } from "react-icons/fa";

export const Home = () => {
  return (
    <section className="min-h-screen flex items-start justify-center pt-16 md:pt-24 
      bg-gradient-to-b from-white via-gray-100 to-gray-200 text-black 
      dark:from-black dark:via-gray-900 dark:to-gray-950 dark:text-white px-6">
      <div className="max-w-4xl text-center">
        {/* Imagen de perfil */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/avatar.jpg"
            alt="Foto de Maicol"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-xl"
          />
        </div>

        {/* Título e introducción */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Hola! Soy <span className="text-blue-600">Maicol</span>
        </h1>
        <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-8">
          "Construyo soluciones que resuelven problemas reales, no solo líneas
          de código."
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Desarrollador Full Stack con enfoque en React, Node.js y MongoDB. Me
          apasiona crear soluciones prácticas y eficientes que conecten con las
          personas.
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-xl font-semibold"
          >
            Ver proyectos
          </a>
          <a
            href="/assets/CV.pdf"
            download
            className="inline-flex items-center gap-2 
             bg-white text-black 
             hover:bg-blue-600 hover:text-white 
             dark:bg-neutral-900 dark:text-white 
             dark:hover:bg-blue-600 
             px-6 py-3 rounded-xl font-semibold 
             transition-all duration-300 shadow-md hover:scale-105"
          >
            <FaDownload className="text-lg" />
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
