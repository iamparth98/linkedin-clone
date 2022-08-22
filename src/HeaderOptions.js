import React from "react";
import "./HeaderOptions.css";
import { Avatar } from "@mui/material";

function HeaderOptions({ avatar, Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOptions__icon" />}
      <h3 className="headerOptions__title">{title}</h3>
      {avatar && (
        <Avatar className="headerOptions__icon" id="avatar" src={avatar} />
      )}
    </div>
  );
}

export default HeaderOptions;
