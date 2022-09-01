import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { selectUser } from "./features/counter/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);
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
        </section>
      )}
      {/* Body */}
    </section>
  );
}

export default App;
