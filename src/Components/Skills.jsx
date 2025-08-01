export const Skills = () => {
  const skills = [
    { name: "JavaScript (ES6+)", color: "#F0DB4F" },
    { name: "React.js", color: "#61DBFB" },
    { name: "Node.js", color: "#3C873A" },
    { name: "Express.js", color: "#000000" },
    { name: "MongoDB", color: "#4DB33D" },
    { name: "Tailwind CSS", color: "#38BDF8" },
    { name: "JWT (Cookies)", color: "#ED8936" },
    { name: "Git & GitHub", color: "#F1502F" },
    { name: "Vercel", color: "#000000" },
    { name: "Render", color: "#5D9CEC" },
    { name: "Postman", color: "#FF6C37" },
  ];

  return (
    <div
      className="py-16 bg-gray-100 dark:bg-neutral-900 text-center"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
        Tecnologías
      </h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-full text-sm font-medium shadow-md text-black dark:text-white"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};
