import React from "react";
import "./Feed.css";
import Post from "./Post";
import InputOption from "./InputOption";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed() {
  return (
    <section className="feed">
      <section className="feed__input__container">
        <section className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" name="" id="" />
            <button type="submit">submit</button>
          </form>
        </section>

        <section className="feed__input__option">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7a33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </section>
      </section>

      {/* Posts */}
      <Post
        name="Parth Tiwari"
        message="This is a test"
        description="wow this works"
      />
    </section>
  );
}

export default Feed;
