import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  // const firstLetter = user.email[0].toString();

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
        <Avatar src={user.photoURL} className="sidebar__top__avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
