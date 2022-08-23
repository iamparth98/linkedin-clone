import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (item) => (
    <section className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{item}</p>
    </section>
  );

  return (
    <section className="sidebar">
      <section className="sidebar__top">
        <img
          src="https://images.freeimages.com/images/large-previews/01a/technology-background-1632715.jpg"
          alt=""
        />
        <Avatar className="sidebar__top__avatar" />
        <h2>Parth Tiwari</h2>
        <h4>parthtiwari98@gmail.com</h4>
      </section>

      <section className="sidebar__stats">
        <section className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__stat__number">2500</p>
        </section>
        <section className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__stat__number">2500</p>
        </section>
      </section>

      <section className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("softwareEngineering")}
        {recentItem("tailwindCSS")}
        {recentItem("angularJS")}
      </section>
    </section>
  );
}

export default Sidebar;
