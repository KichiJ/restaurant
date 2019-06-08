import React from "react";
import "./ImgCover.css";

function ImgCover(props) {
  return (
    <div
      className="img__cover"
      style={{
        backgroundImage: `url(${props.img})`
      }}
    >
      <div className="img__cover__text">{props.children}</div>
    </div>
  );
}

export default ImgCover;
