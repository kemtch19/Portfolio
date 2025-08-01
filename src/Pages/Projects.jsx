import { ProjectCard } from "../Components/ProjectCard";

export const Projects = () => {
  // 🧠 Logic

  return (
    <section className="max-w-4xl mx-auto mt-10 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
      <ProjectCard
        title="Taskify"
        description="Aplicación tipo to-do list con autenticación, subida de imágenes y estructura jerárquica (carpetas, listas, tareas)."
        tech="React, Node.js, MongoDB, Cloudinary, Tailwind"
        demoLink="https://taskify-tu-demo.vercel.app"
        codeLink="https://github.com/tuusuario/taskify"
      />
      <ProjectCard
        title="Riwi Talent"
        description="Plataforma interna para selección de talentos. Construida con C# y MudBlazor."
        tech="C#, MudBlazor"
      />
    </section>
  );
};  
