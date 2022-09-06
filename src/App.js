import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import Widget from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // login
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            photoUrl: userAuth.photoURL,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // logout
        dispatch(logout());
      }
    });
  }, []);

  return (
    <section className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <section className="app__body">
          {/* Sidebar */}
          <Sidebar />

          {/* Feed section */}
          <Feed />

          {/* Widgets */}
          <Widget />
        </section>
      )}
      {/* Body */}
    </section>
  );
}

export default App;
