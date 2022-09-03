import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };
  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <img src={require("./LI-Logo.png")} alt="linkedin logo" />
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name {Required for registeration}"
          type="text"
          name=""
          id=""
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          name=""
          id=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          name=""
          id=""
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Photo Url"
          type="email"
          name=""
          id=""
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          {" "}
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
