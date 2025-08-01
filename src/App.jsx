// 🧩 Componentes generales
import { Navbar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

// 📄 Páginas o secciones principales
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import { Skills } from "./Components/Skills";

// 🧠 Componente principal
function App() {
  return (
     <>
      <Navbar />

      {/* Contenedor con soporte para fondo oscuro */}
      <main className="pt-20 bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
