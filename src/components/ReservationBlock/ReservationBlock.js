import React from "react";
import "./ReservationBlock.css";
import Block from "../Block/Block";

function ReservationBlock() {
  return (
    <Block>
      <span className="reservation__block__title">Reservations</span>
      <span className="reservation__block__description">
        Call us now to book a table in our restaurant. Call must be at least a
        week in advance.
      </span>
      <button className="reservation__block__button">Book a table</button>
    </Block>
  );
}

export default ReservationBlock;
