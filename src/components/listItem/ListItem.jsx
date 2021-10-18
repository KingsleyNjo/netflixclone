import React, { useState } from "react";
import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";



export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);  //isHovered is false initially
  // creating a video that before hovering its an image but when you hover you get a video
  const trailer = "videos/video1.mp4";
  return (
    <Link to="/watch">
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}  //to decide if wehen we hover(isHovered) in left(remeber we are considering left and right), so thereforeindex here is taken as a prop and the index is gotten from List.jsx where it is used.
        onMouseEnter={() => setIsHovered(true)} //when we are on the listItem container its going to be true and when we Leave its going to be false. Remember isHovered is initially false
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="images/thrones1.jpg"
          alt=""
        />
        {/* writing a condition where we only see the icons,video and iteminfo only when its hovered */}
        {isHovered && (
          <>
            <video src={trailer} autoPlay={true} loop />


            <div className="itemInfo">
              {/* container for icons */}
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>

              {/* container for itemInfo */}
              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+16</span>
                <span>1999</span>
              </div>
              <div className="desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium hic rem eveniet error possimus, neque ex doloribus.
              </div>
              <div className="genre">Action</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};
