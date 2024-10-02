import React from "react";
import "./Strip.css";
import Chip from "./Chip";
const Stripe = (props) => {
  const color = props.color;
  return (
    <div className="strip" style={{ backgroundColor: color }}>
      <Chip value={props.chipValue}></Chip>
    </div>
  );
};

export default Stripe;
