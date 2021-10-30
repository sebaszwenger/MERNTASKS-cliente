import { useState } from "react";

const NewProject = () => {
  //state of project
  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  //read and save the content of input
  const onChangeProyect = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //on submit
  const onSubmitProyect = (e) => {
    e.preventDefault();

    //validate the input
    if (name === 0) {
      console.log("All fields are required");
      return;
    }
    //pass to state

    //reset form
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyect}>
        <input
          type="text"
          className="input-text"
          placeholder="Name of Project"
          name="name"
          value={name}
          onChange={onChangeProyect}
        />
        <input
          type="submit"
          value="Add Project"
          className="btn btn-primario btn-block"
        />
      </form>
    </>
  );
};

export default NewProject;
