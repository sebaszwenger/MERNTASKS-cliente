import Project from "./project";

const ListProjects = () => {
  const projects = [
    { name: "Virtual Store" },
    { name: "Internet" },
    { name: "Web Disigne" },
  ];

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
