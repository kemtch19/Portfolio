export const Footer = () => {
  return (
    <footer className="bg-black dark:bg-white text-gray-400 dark:text-gray-700 py-6 text-sm">
      <div className="max-w-screen-md mx-auto text-center px-4">
        <p>
          © {new Date().getFullYear()} Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/maicol-agudelo-taborda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 dark:text-blue-600 hover:underline"
          >
            Maicol
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
