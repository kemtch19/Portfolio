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

  const getBadgeColors = (color) => {
    if (color === "#000000") {
      return {
        light: "#4B5563", // gray-700
        dark: "#D1D5DB",  // gray-300
      };
    }
    return {
      light: color,
      dark: color,
    };
  };

  const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");

  return (
    <section
      className="py-16 bg-gray-200 dark:bg-neutral-900 text-center"
      id="skills"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
        Tecnologías
      </h2>

      <div className="flex flex-wrap justify-center gap-4 px-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => {
          const badgeColors = getBadgeColors(skill.color);

          const baseStyle = {
            backgroundColor: isDark ? "transparent" : badgeColors.light,
            color: isDark ? badgeColors.dark : "#000",
            borderColor: isDark ? badgeColors.dark : badgeColors.light,
          };

          const hoverStyle = {
            backgroundColor: isDark ? badgeColors.dark : "#fff",
            color: isDark ? "#000" : "#000",
          };

          return (
            <span
              key={idx}
              className="px-5 py-2 rounded-full text-sm font-semibold border shadow-sm transition duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              style={baseStyle}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, hoverStyle);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, baseStyle);
              }}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </section>
  );
};
