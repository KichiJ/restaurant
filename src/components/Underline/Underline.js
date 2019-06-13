import React from "react";
import "./Underline.css";

function Underline(props) {
  return <div className="underline" style={{ background: props.color }} />;
}

export default Underline;
