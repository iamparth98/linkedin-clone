import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";

function Header() {
  return (
    <nav className="nav">
      <section className="nav__left">
        <img
          src={require("./linkedin.png")}
          alt="linkdein logo"
          title="logo"
          width={40}
          height={40}
        />
        <section className="nav__search">
          <SearchIcon />
          <input placeholder="Search" type="text" name="" id="" />
        </section>
      </section>
      <section className="nav__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={MessageRoundedIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        FIXME:
        <HeaderOptions
          className="nav__avatar"
          avatar={
            "https://media-exp1.licdn.com/dms/image/C5103AQF-dQROPJVmVA/profile-displayphoto-shrink_800_800/0/1558705317606?e=1666828800&v=beta&t=KkBybB8Nv38OIefQwztEQjks5jkbSS9rgTxZo61MeD0"
          }
        />
      </section>
    </nav>
  );
}

export default Header;
