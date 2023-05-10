import React, { useState } from "react";
import "./logpage.css";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform login logic here
  };
  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // perform login logic here
  // };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="text" className="label2">
        Login
      </label>
      <input
        id="login"
        type="text"
        value={login}
        onChange={handleLoginChange}
        className="iinput2"
      />
      <label htmlFor="password" className="label1">
        Enter Password:
      </label>
      <input
        className="iinput1"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit" className="buutonn">
        {" "}
        <a href="/home" className="homelog">
          Enter
        </a>
      </button>
    </form>
  );
}

export default LoginPage;
