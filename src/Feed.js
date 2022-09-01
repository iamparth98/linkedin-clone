import "./Feed.css";
import Post from "./Post";
import InputOption from "./InputOption";
import { useEffect, useState } from "react";

import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Parth Tiwari",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <section className="feed">
      <section className="feed__input__container">
        <section className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name=""
              id=""
            />
            <button onClick={sendPost} type="submit">
              submit
            </button>
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
      {/* {posts.map({ id, data: { name, description, message, photoUrl } })} */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </section>
  );
}

export default Feed;
