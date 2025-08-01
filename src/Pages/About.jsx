export const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6 text-center">
          Sobre mí
        </h2>

        <div className="text-gray-700 dark:text-gray-300 space-y-5 text-lg leading-relaxed">
          <p>
            Soy un desarrollador full stack con experiencia construyendo
            aplicaciones web modernas usando{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              React, Node.js, Express
            </span>{" "}
            y bases de datos como{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              MongoDB y MySQL
            </span>
            . Me apasiona crear soluciones funcionales y bien estructuradas,
            desde el backend hasta el diseño visual del frontend.
          </p>

          <p>
            He trabajado en proyectos como{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              Taskify
            </span>
            , una aplicación tipo to-do list con autenticación, subida de
            imágenes, gestión de carpetas y tareas, y muchas funcionalidades
            avanzadas, lo cual fortaleció mis habilidades técnicas y de trabajo
            en equipo.
          </p>

          <p>
            También formé parte del equipo del proyecto{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              Riwi Talent
            </span>
            , donde colaboré en el desarrollo de una plataforma para la gestión
            de talento tech usando{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              C# y MudBlazor
            </span>
            , aplicando buenas prácticas de documentación y arquitectura.
          </p>

          <p>
            Me formé en la carrera de{" "}
            <span className="text-blue-500 font-semibold dark:text-blue-400">
              Tecnología en Desarrollo de Software
            </span>
            , donde no solo fortalecí mis habilidades técnicas, sino también el
            pensamiento lógico, el trabajo colaborativo y el enfoque humano en
            los proyectos.
          </p>

          <p>
            Actualmente, sigo perfeccionando mis conocimientos y trabajando en
            nuevos proyectos. Mi objetivo es aportar valor a través del código,
            creando productos digitales que resuelvan problemas reales.
          </p>
        </div>
      </div>
    </section>
  );
};
