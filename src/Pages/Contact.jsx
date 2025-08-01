export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-8">
          Contáctame
        </h2>

        {/* Descripción */}
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          ¿Tienes un proyecto en mente o deseas que colabore contigo? Puedes
          escribirme por correo o contactarme en mis redes sociales.
        </p>

        {/* Información de contacto */}
        <div className="space-y-4 text-lg">
          <p>
            📧{" "}
            <a
              href="mailto:kemtch19@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              kemtch19@gmail.com
            </a>
          </p>

          <p>
            💼{" "}
            <a
              href="https://www.linkedin.com/in/maicol-agudelo-taborda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              linkedin.com/in/maicol-agudelo-taborda
            </a>
          </p>

          <p>
            💻{" "}
            <a
              href="https://github.com/kemtch19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              github.com/kemtch19
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
