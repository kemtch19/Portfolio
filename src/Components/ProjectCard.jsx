import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectCard = ({
  title,
  description,
  tech = [],
  github,
  demo,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-shadow duration-300 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
          {title}
        </h3>
        <p className="text-gray-800 dark:text-gray-300 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition"
          >
            <FaGithub />
            Código
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FaExternalLinkAlt />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
