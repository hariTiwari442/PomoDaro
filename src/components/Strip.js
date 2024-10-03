import React from "react";
import "./Strip.css";
import Chip from "./Chip";
const Stripe = (props) => {
  const color = props.color;
  return (
    <div className="strip" style={{ backgroundColor: color }}>
      <Chip value={props.chipValue}></Chip>
      <div className="box flex-container">
        <button className="chip-button" value={"||"}>
          ||
        </button>
        <button className="chip-button" value={"||"}>
          ||
        </button>
        <button className="chip-button" value={"||"}>
          ||
        </button>
      </div>
    </div>
  );
};

export default Stripe;
