import React from "react";
import "./Widget.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widget() {
  const newsArticle = (heading, article) => (
    <div className="widgets__article">
      <div className="widgets__articleRight">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{article}</p>
      </div>
    </div>
  );
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>Linkedin news</h2>
        <InfoIcon />
      </div>
    </div>
  );
}

export default Widget;
