import React from "react";
import Bar from "../layout/bar";
import Sidebar from "../layout/Sidebar";
import FormTask from "../tasks/FormTask";
import ListTask from "../tasks/ListTask";

const Proyects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Bar />
        <main>
          <FormTask />
          <div className="contenedor-tareas">
            <ListTask />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyects;
