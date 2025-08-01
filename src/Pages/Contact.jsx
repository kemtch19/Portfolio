export const Contact = () => {
  // 🧠 Logic

  return (
    <section className="max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-4">
        ¿Quieres trabajar conmigo o tienes una propuesta? Escríbeme:
      </p>
      <ul className="space-y-2">
        <li>
          Email:{"kemtch19@gmail.com"}
          <a href="mailto:kemtch19@gmail.com" className="text-blue-600">
            kemtch19@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{"https://www.linkedin.com/in/maicol-agudelo-taborda/"}
          <a href="https://www.linkedin.com/in/maicol-agudelo-taborda/" className="text-blue-600">
            /Maicol Agudelo Taborda
          </a>
        </li>
        <li>
          GitHub:{"https://github.com/kemtch19"}
          <a href="https://github.com/kemtch19" className="text-blue-600">
            /kemtch19
          </a>
        </li>
      </ul>
    </section>
  );
};
