export const Home = () => {
  // 🧠 Logic

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ¡Hola! Soy <span className="text-blue-600">Maicol</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Desarrollador Full Stack con enfoque en React, Node.js y MongoDB. Me
          apasiona crear soluciones prácticas y eficientes que conecten con las
          personas.
        </p>
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
            className="border border-white hover:border-blue-600 hover:text-blue-400 transition px-6 py-3 rounded-xl font-semibold"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
};
