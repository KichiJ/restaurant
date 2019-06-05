import React from "react";
import "./FoodDescBlock.css";

function FoodDescBlock(props) {
  return (
    <div className="description__block">
      <span className="food__name">{props.name}</span>
      <span className="food__description">{props.description}</span>
      <span className="food__price">{props.price}</span>
    </div>
  );
}

export default FoodDescBlock;
