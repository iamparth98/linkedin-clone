import React from "react";
import "./Login.css";

function Login() {
  const loginToApp = () => {};
  const register = () => {};

  return (
    <div className="login">
      <img src={require("./LI-Logo.png")} alt="linkedin logo" />
      <form action="">
        <input
          placeholder="Full Name {Required for registeration}"
          type="text"
          name=""
          id=""
        />
        <input placeholder="Email" type="email" name="" id="" />
        <input placeholder="Password" type="password" name="" id="" />
        <input placeholder="Profile Photo Url" type="email" name="" id="" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
        <p>
          Not a member?
          <span className="login__register" onClick={register}>
            Register now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
