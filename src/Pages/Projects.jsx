import { ProjectCard } from "../Components/ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Taskify",
      description:
        "Aplicación full stack tipo to-do list con autenticación basada en cookies JWT. Permite crear carpetas, listas y tareas, subir imágenes a Cloudinary, mover tareas, buscar, filtrar por fecha, papelera, y gestionar usuarios con roles.",
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
        "Cloudinary"
      ],
      github: "https://github.com/kemtch19/taskify-backend",
      demoLink: "https://taskifyyy.vercel.app/"
    },
    {
      title: "Riwi Talent",
      description:
        "Plataforma interna desarrollada con C# y MudBlazor para centralizar información de talentos en Riwi y facilitar la conexión con empresas del sector tech. Por el momento es un proyecto privado.",
      tech: ["C#", "MudBlazor", ".NET"],
      github: "Privado",
      demoLink: "No aplica"
    }
  ];

  return (
    <section
      id="projects"
      className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-12 text-center">
          Proyectos Destacados
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
