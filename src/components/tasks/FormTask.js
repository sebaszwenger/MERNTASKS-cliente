const FormTask = () => {
  return (
    <div className="formulario">
      <form className="form">
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name"
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="add task"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTask;
