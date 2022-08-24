import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <section className="app">
      <Header />

      {/* Body */}
      <section className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed section */}
        <Feed />
        {/* Widgets */}
      </section>
    </section>
  );
}

export default App;
