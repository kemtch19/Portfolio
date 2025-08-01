export const About = () => {
  // 🧠 Logic

  return (
    <section
      id="about"
      className="bg-gray-950 text-white py-20 px-6 flex justify-center"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
          Sobre mí
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Soy un desarrollador Full Stack apasionado por crear aplicaciones
          útiles, con experiencia en React, Node.js, Express, MongoDB y Tailwind
          CSS. Me he formado en el bootcamp intensivo de <strong>Riwi</strong>,
          y he liderado el desarrollo completo de <strong>Taskify</strong>, una
          plataforma tipo to-do list con autenticación, roles, subida de
          imágenes y mucho más.
        </p>
        <p className="text-lg md:text-xl text-gray-300 mt-4 leading-relaxed">
          Me gusta construir código limpio, modular y bien documentado. Además,
          tengo habilidades en trabajo en equipo, documentación de proyectos, y
          experiencia real desarrollando soluciones desde cero, tanto en
          frontend como backend.
        </p>
        <div className="mt-8 text-sm text-gray-400">
          <p>
            Tecnologías principales:{" "}
            <span className="text-white font-medium">
              JavaScript (ES6+), React, Node.js, Express, MongoDB, Tailwind CSS,
              Git, Cloudinary.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
