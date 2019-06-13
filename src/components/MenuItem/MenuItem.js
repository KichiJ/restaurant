import React from "react";
import "./MenuItem.css";

function MenuItem(props) {
  return (
    <div className="menu__item">
      <span className="menu__item__name">{props.name}</span>
      <span className="menu__item__description">{props.description}</span>
      <span className="menu__item__price">{props.price}</span>
    </div>
  );
}

export default MenuItem;
