import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <section className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar__top__avatar" />
        <h2>Parth Tiwari</h2>
        <h4>parthtiwari98@gmail.com</h4>
        <section className="sidebar__stats">
          <section className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__stat__number">2500</p>
          </section>
          <section className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__stat__number">2500</p>
          </section>
        </section>
      </section>
      <section className="sidebar__bottom">
        <p>Recents</p>
      </section>
    </section>
  );
}

export default Sidebar;
