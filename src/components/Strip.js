import React from "react";
import "./Strip.css";
import Chip from "./Chip";
import Timer from "./timer";
const Stripe = (props) => {
  const color = props.color;
  const clickHandler = (props1) => {
    console.log(props1);
    if (props1.target.value === "◀") {
      props.focusHandler();
    }
    if (props1.target.value === "||") {
      props.shortBreakHandler();
    }
    if (props1.target.value === "▶") {
      props.longBreakTimerHandler();
    }
  };
  return (
    <div className="strip" style={{ backgroundColor: color }}>
      <Chip value={props.chipValue}></Chip>
      <Timer timeValue={props.timeValue}></Timer>
      <div className="box flex-container">
        <button className="chip-button" value={"◀"} onClick={clickHandler}>
          ◀
        </button>
        <button className="chip-button" value={"||"} onClick={clickHandler}>
          ||
        </button>
        <button className="chip-button" value={"▶"} onClick={clickHandler}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default Stripe;
