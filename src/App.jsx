import { Header } from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import { About, Projects, Contact } from "./Components/Pages";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="bg-white shadow p-4 text-center">
        <p className="text-gray-600">
          © 2025 Kemtch19. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
