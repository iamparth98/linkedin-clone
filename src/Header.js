import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { logout } from "./features/counter/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

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
          onClick={logOutOfApp}
          // className="nav__avatar"
          avatar={true}
          title="Me"
        />
      </section>
    </nav>
  );
}

export default Header;
