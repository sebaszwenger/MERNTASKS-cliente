import Task from "./Task";

const ListTask = () => {
  const tasksProject = [
    { name: "choose plataform", state: true },
    { name: "choose colors", state: false },
    { name: "choose payment platform", state: false },
    { name: "choose hosting", state: true },
  ];

  return (
    <>
      <h2>Project: Virtual Store</h2>

      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">
            <p>No Tasks</p>
          </li>
        ) : (
          tasksProject.map((task) => <Task key={task.name} task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar sombra">
        Eliminate Project &times;
      </button>
    </>
  );
};

export default ListTask;
