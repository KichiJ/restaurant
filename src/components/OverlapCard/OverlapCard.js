import React from "react";
import "./OverlapCard.css";

function OverlapCard(props) {
  return (
    <div className="overlap__card__container">
      <div className="overlap__card">{props.children}</div>
    </div>
  );
}

export default OverlapCard;
