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
          <h1>POMO</h1>
        </div>
      </div>
    </div>
  );
};

export default POMO;
