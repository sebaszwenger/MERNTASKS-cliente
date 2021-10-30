const Task = ({ task }) => {
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.state ? (
          <button type="button" className="completo btn">
            Compleate
          </button>
        ) : (
          <button type="button" className="incompleto btn">
            Incompleate
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button type="button" className="btn btn-secundario">
          Eliminate
        </button>
      </div>
    </li>
  );
};

export default Task;
