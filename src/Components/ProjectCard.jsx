export const ProjectCard = ({
  title,
  description,
  tech,
  demoLink,
  codeLink,
}) => {
  // 🧠 Logic

  return (
    <div className="border rounded-xl shadow-sm p-4 space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <p className="text-sm text-gray-500">Tech: {tech}</p>
      <div className="flex gap-4">
        {demoLink && (
          <a href={demoLink} target="_blank" className="text-blue-500">
            Demo
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" className="text-green-500">
            Código
          </a>
        )}
      </div>
    </div>
  );
};
