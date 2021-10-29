import { useState } from "react";
import { Link } from "react-router-dom";

const NewAccount = () => {
  //State to NewAccount
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  //extract user
  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Validate empty fields -- password length -- password match
    if (name === "" || email === "" || password === "" || confirm === "") {
      console.log("All fields are required");
      return;
    } else if (password !== confirm) {
      console.log("the passwords do not match");
      return;
    } else if (password.length < 6) {
      console.log("password to short");
      return;
    }
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Create New Account</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="Name"
              placeholder="Your Name"
              value={name}
              name="name"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
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
              value={password}
              name="password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              placeholder="Confirm Password"
              value={confirm}
              name="confirm"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
