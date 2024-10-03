import React from "react";
import "./PomoText.css";

const POMO = (props) => {
  return (
    <div className="pomo">
      <div className="common">
        <div className="cnt">
          <img src={require("../Public/Light.png")} alt="timer"></img>
        </div>
        <div sName="text">
          <h1 style={{ color: "#471515" }}>POMO</h1>
        </div>
      </div>
      <div className="textPomo">
        <h1 style={{ color: "#471515" }}>
          Pomodaoro Timer App Prototype,{"\n"} <u>Desktop & Mobile</u>
        </h1>
      </div>
      <div className="leftText">
        <h1 style={{ color: "#808080" }}>V.O.1.O</h1>
      </div>
    </div>
  );
};

export default POMO;
