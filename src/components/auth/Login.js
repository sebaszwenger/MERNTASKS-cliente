import React from "react";

const Login = () => {
  const onChange = () => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>

        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              name="password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Log in"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
