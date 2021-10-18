import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link } from "react-router-dom"



export default function Watch() {
  return (
    <div className="watch">
      <Link to="/home">
        <div className="back">  {/* this is the back icon button that we click and it goes back to the Homepage */}
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="videos/video2.mp4"
      />
    </div>
  );
}
