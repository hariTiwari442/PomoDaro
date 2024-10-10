import React from "react";
import "./time.css";

const Timer = (props) => {
  return (
    <div>
      <div className="timer">{props.timeValue[0]}</div>
      <div className="timer">{props.timeValue[1]}</div>
    </div>
  );
};

export default Timer;
